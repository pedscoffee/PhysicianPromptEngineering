#!/usr/bin/env python3
"""
Doc Pixel's Scribe - Offline AI Medical Scribe
A fully offline, privacy-focused medical documentation tool for macOS

Usage:
    python app.py
"""

import sys
import logging
import sounddevice as sd
import soundfile as sf
import numpy as np
from pathlib import Path
from datetime import datetime

from PyQt6.QtWidgets import QApplication
from PyQt6.QtCore import QThread, pyqtSignal, Qt
from PyQt6.QtGui import QFont

from ui.main_window import MainWindow
from ui.styles import get_stylesheet
from engines.whisper_engine import WhisperEngine
from engines.llm_engine import LLMEngine
from engines.prompt_manager import PromptManager
from security.hipaa_compliance import (
    secure_delete,
    clear_sensitive_data,
    detect_phi,
    AuditLogger
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(Path.home() / ".cache" / "mac-scribe-app" / "app.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


# ============================================
# WORKER THREADS FOR ASYNC PROCESSING
# ============================================

class InitializationWorker(QThread):
    """Worker thread for initializing AI models"""

    progress = pyqtSignal(str)
    finished = pyqtSignal(bool)

    def __init__(self, whisper_engine, llm_engine, prompt_manager):
        super().__init__()
        self.whisper_engine = whisper_engine
        self.llm_engine = llm_engine
        self.prompt_manager = prompt_manager

    def run(self):
        """Run initialization"""
        try:
            # Load prompts
            self.progress.emit("Loading prompt configuration...")
            if not self.prompt_manager.load_prompts():
                self.finished.emit(False)
                return

            # Load Whisper model
            self.progress.emit("Loading Whisper Medium model (this may take a few minutes)...")
            if not self.whisper_engine.load_model(self.progress.emit):
                self.finished.emit(False)
                return

            # Load LLM model
            self.progress.emit("Loading LLM model (this may take 10-30 minutes on first run)...")
            if not self.llm_engine.load_model(self.progress.emit):
                self.finished.emit(False)
                return

            self.progress.emit("All models loaded successfully!")
            self.finished.emit(True)

        except Exception as e:
            logger.error(f"Initialization error: {e}")
            self.progress.emit(f"Error: {str(e)}")
            self.finished.emit(False)


class AudioRecorder:
    """Handles audio recording"""

    def __init__(self, sample_rate=16000):
        self.sample_rate = sample_rate
        self.recording = []
        self.is_recording = False
        self.stream = None

    def audio_callback(self, indata, frames, time, status):
        """Callback for audio stream"""
        if status:
            logger.warning(f"Audio status: {status}")
        if self.is_recording:
            self.recording.append(indata.copy())

    def start(self):
        """Start recording"""
        self.recording = []
        self.is_recording = True
        self.stream = sd.InputStream(
            channels=1,
            samplerate=self.sample_rate,
            callback=self.audio_callback
        )
        self.stream.start()
        logger.info("Recording started")

    def stop(self):
        """Stop recording and return audio data"""
        self.is_recording = False
        if self.stream:
            self.stream.stop()
            self.stream.close()

        if self.recording:
            audio_data = np.concatenate(self.recording, axis=0)
            logger.info(f"Recording stopped: {len(audio_data)} samples")
            return audio_data
        return None

    def save(self, audio_data, file_path):
        """Save audio data to file"""
        sf.write(file_path, audio_data, self.sample_rate)
        logger.info(f"Audio saved to {file_path}")


class TranscriptionWorker(QThread):
    """Worker thread for transcription"""

    progress = pyqtSignal(str)
    finished = pyqtSignal(str)

    def __init__(self, whisper_engine, audio_path, medical_terms):
        super().__init__()
        self.whisper_engine = whisper_engine
        self.audio_path = audio_path
        self.medical_terms = medical_terms

    def run(self):
        """Run transcription"""
        try:
            transcription = self.whisper_engine.transcribe(
                self.audio_path,
                self.medical_terms,
                self.progress.emit
            )

            if transcription:
                self.finished.emit(transcription)
            else:
                self.finished.emit("")

        except Exception as e:
            logger.error(f"Transcription error: {e}")
            self.progress.emit(f"Error: {str(e)}")
            self.finished.emit("")


class ProcessingWorker(QThread):
    """Worker thread for flexible multi-stage LLM processing with custom workflows"""

    progress = pyqtSignal(str, str)  # (stage_name, message)
    stage_complete = pyqtSignal(str, str)  # (stage_name, output)
    finished = pyqtSignal(dict)

    def __init__(self, llm_engine, prompt_manager, transcription):
        super().__init__()
        self.llm_engine = llm_engine
        self.prompt_manager = prompt_manager
        self.transcription = transcription

    def run(self):
        """Run flexible workflow processing"""
        results = {
            "workflow": [],  # List of outputs in order
            "final_note": None
        }

        try:
            # Get all prompts in workflow order
            workflow_prompts = self.prompt_manager.get_workflow_prompts()

            if not workflow_prompts:
                logger.error("No active prompts in workflow")
                self.finished.emit(results)
                return

            # Keep track of the current working text
            current_text = self.transcription
            main_note = None

            # Execute each prompt in order
            for i, prompt in enumerate(workflow_prompts):
                # Determine prompt category for progress reporting
                if prompt in self.prompt_manager.config.systemPrompts:
                    category = "system"
                elif prompt in self.prompt_manager.config.editorPrompts:
                    category = "editor"
                else:
                    category = "enhancement"

                self.progress.emit(category, f"Processing with: {prompt.name}")

                # Build the full prompt
                # System prompts take the transcription
                # Editor prompts take the previous note
                # Enhancement prompts take the final note (latest main note)
                if category in ["system", "editor"]:
                    input_text = current_text
                else:
                    # Enhancements use the latest main note
                    input_text = main_note if main_note else current_text

                full_prompt = prompt.prompt + "\n\n" + input_text

                # Generate output
                output = self.llm_engine.generate(
                    full_prompt,
                    max_tokens=2000,
                    temperature=0.3,
                    progress_callback=lambda msg: self.progress.emit(category, msg)
                )

                if output:
                    result = {
                        "name": prompt.name,
                        "category": category,
                        "output": output
                    }
                    results["workflow"].append(result)

                    # Update current text for next prompt
                    if category in ["system", "editor"]:
                        current_text = output
                        main_note = output

                    # Emit stage completion
                    self.stage_complete.emit(prompt.name if category == "enhancement" else category, output)

            # Set final note
            results["final_note"] = main_note if main_note else self.transcription

            self.finished.emit(results)

        except Exception as e:
            logger.error(f"Processing error: {e}")
            self.progress.emit("error", str(e))
            self.finished.emit(results)


# ============================================
# ENHANCED MAIN WINDOW WITH WORKER INTEGRATION
# ============================================

class ScribeMainWindow(MainWindow):
    """Extended main window with worker thread integration and HIPAA compliance"""

    def __init__(self, whisper_engine, llm_engine, prompt_manager):
        super().__init__(whisper_engine, llm_engine, prompt_manager)

        # Audio recorder
        self.audio_recorder = AudioRecorder()
        self.recording_timer = None
        self.recording_start_time = None
        self.temp_audio_path = Path.home() / ".cache" / "mac-scribe-app" / "temp_recording.wav"
        self.temp_audio_path.parent.mkdir(parents=True, exist_ok=True)

        # HIPAA compliance features
        self.audit_logger = AuditLogger()
        self.clipboard_clear_timers = []  # Track clipboard timers

        # Log app startup
        self.audit_logger.log_event("APP_START", success=True)

    def initialize_ai(self):
        """Initialize AI models in background thread"""
        self.init_btn.setEnabled(False)
        self.progress_bar.setVisible(True)
        self.progress_bar.setRange(0, 0)  # Indeterminate

        # Create worker
        self.init_worker = InitializationWorker(
            self.whisper_engine,
            self.llm_engine,
            self.prompt_manager
        )

        self.init_worker.progress.connect(self.on_init_progress)
        self.init_worker.finished.connect(self.on_init_finished)
        self.init_worker.start()

    def on_init_progress(self, message):
        """Handle initialization progress"""
        self.status_label.setText(message)
        logger.info(message)

    def on_init_finished(self, success):
        """Handle initialization completion"""
        self.progress_bar.setVisible(False)

        if success:
            self.status_label.setText("AI Models Ready")
            self.statusBar().showMessage("AI models loaded successfully - Ready to record", 5000)

            # Enable controls
            self.record_btn.setEnabled(True)
            self.clear_session_btn.setEnabled(True)
            self.init_btn.setText("AI Ready")

            # Load and display active prompts
            self.refresh_prompts_list()

        else:
            self.status_label.setText("Initialization Failed")
            self.statusBar().showMessage("Failed to load AI models - Check logs", 5000)
            self.init_btn.setEnabled(True)
            self.init_btn.setText("Retry Initialization")

    def refresh_prompts_list(self):
        """Refresh the prompts list display"""
        self.prompts_list.clear()

        system_prompt = self.prompt_manager.get_active_system_prompt()
        if system_prompt:
            self.prompts_list.addItem(f"System: {system_prompt.name}")

        editor_prompt = self.prompt_manager.get_active_editor_prompt()
        if editor_prompt:
            self.prompts_list.addItem(f"Editor: {editor_prompt.name}")

        enhancement_prompts = self.prompt_manager.get_active_enhancement_prompts()
        for prompt in enhancement_prompts:
            self.prompts_list.addItem(f"Enhancement: {prompt.name}")

    def start_recording(self):
        """Start audio recording"""
        try:
            self.audio_recorder.start()

            # Update UI
            self.record_btn.setEnabled(False)
            self.stop_btn.setEnabled(True)
            self.recording_time_label.setStyleSheet("color: #FF0000; font-weight: bold;")

            # Start timer
            from PyQt6.QtCore import QTimer
            self.recording_start_time = datetime.now()
            self.recording_timer = QTimer()
            self.recording_timer.timeout.connect(self.update_recording_time)
            self.recording_timer.start(1000)  # Update every second

            self.statusBar().showMessage("Recording... Speak clearly near microphone", 0)

        except Exception as e:
            logger.error(f"Recording error: {e}")
            self.statusBar().showMessage(f"Recording error: {str(e)}", 5000)

    def update_recording_time(self):
        """Update recording time display"""
        if self.recording_start_time:
            elapsed = (datetime.now() - self.recording_start_time).total_seconds()
            minutes = int(elapsed // 60)
            seconds = int(elapsed % 60)
            self.recording_time_label.setText(f"Duration: {minutes}:{seconds:02d}")

    def stop_recording(self):
        """Stop recording and start transcription"""
        try:
            # Stop timer
            if self.recording_timer:
                self.recording_timer.stop()
                self.recording_timer = None

            # Stop recording
            audio_data = self.audio_recorder.stop()

            if audio_data is None or len(audio_data) == 0:
                self.statusBar().showMessage("No audio recorded", 5000)
                self.record_btn.setEnabled(True)
                self.stop_btn.setEnabled(False)
                return

            # Save audio
            self.audio_recorder.save(audio_data, str(self.temp_audio_path))

            # Update UI
            self.record_btn.setEnabled(False)
            self.stop_btn.setEnabled(False)
            self.recording_time_label.setStyleSheet("color: #64B5F6;")
            self.statusBar().showMessage("Transcribing audio...", 0)

            # Start transcription worker
            self.transcription_worker = TranscriptionWorker(
                self.whisper_engine,
                str(self.temp_audio_path),
                self.medical_dictionary
            )

            self.transcription_worker.progress.connect(self.on_transcription_progress)
            self.transcription_worker.finished.connect(self.on_transcription_finished)
            self.transcription_worker.start()

        except Exception as e:
            logger.error(f"Stop recording error: {e}")
            self.statusBar().showMessage(f"Error: {str(e)}", 5000)

    def on_transcription_progress(self, message):
        """Handle transcription progress"""
        self.statusBar().showMessage(message, 0)

    def on_transcription_finished(self, transcription):
        """Handle transcription completion"""
        # Securely delete temporary audio file
        try:
            if self.temp_audio_path.exists():
                logger.info("Securely deleting temporary audio file...")
                if secure_delete(str(self.temp_audio_path)):
                    logger.info("Temporary audio file securely deleted")
                else:
                    logger.warning("Failed to securely delete temporary audio file")
        except Exception as e:
            logger.error(f"Error during secure deletion: {e}")

        if transcription:
            self.current_transcription = transcription
            self.transcription_text.setPlainText(transcription)

            # Check for PHI patterns and log
            phi_detected = detect_phi(transcription)
            if phi_detected:
                logger.warning(f"PHI patterns detected: {list(phi_detected.keys())}")
                self.audit_logger.log_event(
                    "TRANSCRIPTION_COMPLETE",
                    success=True,
                    phi_detected=True,
                    details={"phi_types": list(phi_detected.keys())}
                )
            else:
                self.audit_logger.log_event("TRANSCRIPTION_COMPLETE", success=True)

            # Enable processing
            self.process_btn.setEnabled(True)

            self.statusBar().showMessage(
                f"Transcription complete ({len(transcription)} characters)",
                5000
            )

            # Reset recording controls
            self.record_btn.setEnabled(True)
            self.recording_time_label.setText("Duration: 0:00")
            self.recording_time_label.setStyleSheet("color: #c9d1d9;")

        else:
            self.statusBar().showMessage("Transcription failed - please try again", 5000)
            self.record_btn.setEnabled(True)
            self.stop_btn.setEnabled(False)
            self.audit_logger.log_event("TRANSCRIPTION_COMPLETE", success=False)

    def process_with_ai(self):
        """Process transcription with AI with PHI detection"""
        from PyQt6.QtWidgets import QMessageBox

        transcription = self.transcription_text.toPlainText().strip()

        if not transcription:
            self.statusBar().showMessage("No transcription to process", 3000)
            return

        # CRITICAL: Detect potential unmasked PHI before processing
        phi_found = detect_phi(transcription)
        if phi_found:
            phi_types = list(phi_found.keys())
            phi_details = "\n".join([f"- {k}: {len(v)} occurrence(s)" for k, v in phi_found.items()])

            reply = QMessageBox.warning(
                self,
                "Unmasked PHI Detected",
                f"⚠️ Potential unmasked PHI detected:\n\n{phi_details}\n\n"
                "HIPAA requires masking or de-identification of PHI.\n\n"
                "Continue processing anyway?",
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
                QMessageBox.StandardButton.No
            )

            if reply == QMessageBox.StandardButton.No:
                self.audit_logger.log_event(
                    "PROCESSING_CANCELLED",
                    success=True,
                    phi_detected=True,
                    details={"reason": "User declined due to PHI warning", "phi_types": phi_types}
                )
                return

            # User chose to continue despite PHI warning
            self.audit_logger.log_event(
                "PROCESSING_START",
                success=True,
                phi_detected=True,
                details={"phi_types": phi_types, "warning_accepted": True}
            )
        else:
            self.audit_logger.log_event("PROCESSING_START", success=True)

        # Disable button during processing
        self.process_btn.setEnabled(False)
        self.statusBar().showMessage("Processing with AI...", 0)

        # Clear previous outputs
        self.main_note_text.clear()
        for widget in self.enhancement_tabs.values():
            widget.clear()

        # Start processing worker
        self.processing_worker = ProcessingWorker(
            self.llm_engine,
            self.prompt_manager,
            transcription
        )

        self.processing_worker.progress.connect(self.on_processing_progress)
        self.processing_worker.stage_complete.connect(self.on_stage_complete)
        self.processing_worker.finished.connect(self.on_processing_finished)
        self.processing_worker.start()

    def on_processing_progress(self, stage, message):
        """Handle processing progress"""
        self.statusBar().showMessage(f"[{stage}] {message}", 0)

    def on_stage_complete(self, stage_name, output):
        """Handle stage completion"""
        if stage_name in ["system", "editor"]:
            # Update main note
            self.main_note_text.setPlainText(output)
        else:
            # Add enhancement tab
            if stage_name not in self.enhancement_tabs:
                from PyQt6.QtWidgets import QTextEdit
                text_widget = QTextEdit()
                text_widget.setReadOnly(True)
                text_widget.setMinimumHeight(400)  # Ensure proper minimum height
                # Don't set maximum height to allow full scrolling and copying
                self.output_tabs.addTab(text_widget, stage_name)
                self.enhancement_tabs[stage_name] = text_widget

            self.enhancement_tabs[stage_name].setPlainText(output)

    def on_processing_finished(self, results):
        """Handle processing completion"""
        self.current_outputs = results
        self.process_btn.setEnabled(True)

        total_outputs = len(results["workflow"])

        # Audit log processing completion
        self.audit_logger.log_event(
            "PROCESSING_COMPLETE",
            success=True if results["workflow"] else False,
            details={"outputs_generated": total_outputs}
        )

        self.statusBar().showMessage(
            f"Processing complete - Generated {total_outputs} outputs",
            5000
        )


# ============================================
# MAIN APPLICATION ENTRY POINT
# ============================================

def main():
    """Main application entry point"""
    # Enable high DPI scaling
    QApplication.setHighDpiScaleFactorRoundingPolicy(
        Qt.HighDpiScaleFactorRoundingPolicy.PassThrough
    )

    # Create application
    app = QApplication(sys.argv)
    app.setApplicationName("Physician Prompt Engineering Scribe")
    app.setOrganizationName("Physician Prompt Engineering")

    # Set modern clinical stylesheet
    app.setStyleSheet(get_stylesheet())

    # Initialize engines
    logger.info("Initializing engines...")
    whisper_engine = WhisperEngine(model_size="medium")
    llm_engine = LLMEngine()
    prompt_manager = PromptManager()

    # Create and show main window
    window = ScribeMainWindow(whisper_engine, llm_engine, prompt_manager)
    window.show()

    logger.info("Application started")

    # Run application
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
