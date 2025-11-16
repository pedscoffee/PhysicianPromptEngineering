"""
Main Window - Retro Pixelated Medical Scribe UI
"""

import json
from pathlib import Path
from PyQt6.QtWidgets import (
    QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QPushButton, QTextEdit, QLabel, QTabWidget, QGroupBox,
    QProgressBar, QListWidget, QMessageBox, QFileDialog,
    QScrollArea, QCheckBox, QSplitter
)
from PyQt6.QtCore import Qt, QThread, pyqtSignal, QTimer
from PyQt6.QtGui import QFont
import logging

logger = logging.getLogger(__name__)


class MainWindow(QMainWindow):
    """Main application window with retro pixelated theme"""

    def __init__(self, whisper_engine, llm_engine, prompt_manager):
        super().__init__()

        self.whisper_engine = whisper_engine
        self.llm_engine = llm_engine
        self.prompt_manager = prompt_manager

        # Session data (cleared on close for privacy)
        self.current_transcription = ""
        self.current_outputs = {}
        self.medical_dictionary = []

        # Worker threads
        self.transcription_worker = None
        self.processing_worker = None

        self.init_ui()
        self.load_medical_dictionary()

        # Load prompts immediately so they're available in the library manager
        if self.prompt_manager and not self.prompt_manager.config:
            self.prompt_manager.load_prompts()

    def init_ui(self):
        """Initialize the user interface"""
        self.setWindowTitle("Physician Prompt Engineering Scribe")
        self.setGeometry(100, 100, 1400, 900)

        # Create scroll area for entire content
        scroll_area = QScrollArea()
        scroll_area.setWidgetResizable(True)
        scroll_area.setFrameShape(QScrollArea.Shape.NoFrame)
        self.setCentralWidget(scroll_area)

        # Create central widget inside scroll area
        central_widget = QWidget()
        scroll_area.setWidget(central_widget)

        # Main layout
        main_layout = QVBoxLayout(central_widget)
        main_layout.setSpacing(15)
        main_layout.setContentsMargins(20, 20, 20, 20)

        # Header
        self.create_header(main_layout)

        # Status bar
        self.create_status_section(main_layout)

        # Main content area (splitter for recording/output)
        splitter = QSplitter(Qt.Orientation.Horizontal)
        splitter.setMinimumHeight(400)  # Ensure minimum visible height

        # Left panel: Recording & Transcription
        left_panel = self.create_recording_panel()
        splitter.addWidget(left_panel)

        # Right panel: Processing & Output
        right_panel = self.create_output_panel()
        splitter.addWidget(right_panel)

        splitter.setSizes([700, 700])
        main_layout.addWidget(splitter, stretch=1)  # Give splitter most of the space

        # Bottom: Prompt customization (expandable)
        self.create_prompt_customization(main_layout)

        # Menu bar
        self.create_menu_bar()

        # Status bar
        self.statusBar().showMessage("Ready - Click 'Initialize AI' to start")

    def create_header(self, layout):
        """Create modern clinical header"""
        header_widget = QWidget()
        header_widget.setStyleSheet("""
            QWidget {
                background-color: #ffffff;
                border: 1px solid #d1dbe6;
                border-radius: 8px;
                padding: 20px;
            }
        """)

        header_layout = QVBoxLayout(header_widget)

        title = QLabel("Physician Prompt Engineering Scribe")
        title.setProperty("class", "title")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        title.setFont(QFont("", 24, QFont.Weight.DemiBold))

        subtitle = QLabel("Clinical Documentation Tool")
        subtitle.setProperty("class", "subtitle")
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)

        header_layout.addWidget(title)
        header_layout.addWidget(subtitle)

        layout.addWidget(header_widget)

    def create_status_section(self, layout):
        """Create status and initialization section"""
        status_group = QGroupBox("System Status")

        status_layout = QVBoxLayout()

        # Status label
        self.status_label = QLabel("AI Models Not Loaded")
        self.status_label.setProperty("class", "status")
        status_layout.addWidget(self.status_label)

        # Progress bar
        self.progress_bar = QProgressBar()
        self.progress_bar.setVisible(False)
        status_layout.addWidget(self.progress_bar)

        # Initialize button
        btn_layout = QHBoxLayout()

        self.init_btn = QPushButton("Initialize AI Models")
        self.init_btn.clicked.connect(self.initialize_ai)
        btn_layout.addWidget(self.init_btn)

        self.clear_session_btn = QPushButton("Clear Session")
        self.clear_session_btn.setProperty("class", "danger")
        self.clear_session_btn.clicked.connect(self.clear_session_data)
        self.clear_session_btn.setEnabled(False)
        btn_layout.addWidget(self.clear_session_btn)

        status_layout.addLayout(btn_layout)

        status_group.setLayout(status_layout)
        layout.addWidget(status_group)

    def create_recording_panel(self):
        """Create left panel for recording and transcription"""
        panel = QWidget()
        layout = QVBoxLayout(panel)

        # Recording group
        recording_group = QGroupBox("Recording")
        recording_layout = QVBoxLayout()

        # Recording controls
        btn_layout = QHBoxLayout()

        self.record_btn = QPushButton("Start Recording")
        self.record_btn.clicked.connect(self.start_recording)
        self.record_btn.setEnabled(False)
        btn_layout.addWidget(self.record_btn)

        self.stop_btn = QPushButton("Stop & Transcribe")
        self.stop_btn.setProperty("class", "secondary")
        self.stop_btn.clicked.connect(self.stop_recording)
        self.stop_btn.setEnabled(False)
        btn_layout.addWidget(self.stop_btn)

        recording_layout.addLayout(btn_layout)

        # Recording time
        self.recording_time_label = QLabel("Duration: 0:00")
        self.recording_time_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        recording_layout.addWidget(self.recording_time_label)

        recording_group.setLayout(recording_layout)
        layout.addWidget(recording_group)

        # Transcription group
        transcription_group = QGroupBox("Transcription")
        transcription_layout = QVBoxLayout()

        self.transcription_text = QTextEdit()
        self.transcription_text.setPlaceholderText(
            "Your transcription will appear here after recording...\n\n"
            "You can edit it before processing."
        )
        self.transcription_text.setMinimumHeight(250)
        self.transcription_text.setMaximumHeight(600)  # Prevent excessive height
        transcription_layout.addWidget(self.transcription_text, stretch=1)

        # Transcription actions
        trans_btn_layout = QHBoxLayout()

        self.copy_trans_btn = QPushButton("Copy")
        self.copy_trans_btn.setProperty("class", "secondary")
        self.copy_trans_btn.clicked.connect(self.copy_transcription)
        trans_btn_layout.addWidget(self.copy_trans_btn)

        self.save_trans_btn = QPushButton("Save")
        self.save_trans_btn.setProperty("class", "secondary")
        self.save_trans_btn.clicked.connect(self.save_transcription)
        trans_btn_layout.addWidget(self.save_trans_btn)

        transcription_layout.addLayout(trans_btn_layout)

        transcription_group.setLayout(transcription_layout)
        layout.addWidget(transcription_group)

        return panel

    def create_output_panel(self):
        """Create right panel for processing and output"""
        panel = QWidget()
        layout = QVBoxLayout(panel)

        # Process button
        self.process_btn = QPushButton("Generate Clinical Notes")
        self.process_btn.clicked.connect(self.process_with_ai)
        self.process_btn.setEnabled(False)
        layout.addWidget(self.process_btn)

        # Output tabs
        self.output_tabs = QTabWidget()

        # Main note tab
        self.main_note_text = QTextEdit()
        self.main_note_text.setPlaceholderText("Your formatted clinical note will appear here...")
        self.main_note_text.setReadOnly(True)
        self.main_note_text.setMinimumHeight(400)
        # Don't set maximum height to allow full scrolling
        self.output_tabs.addTab(self.main_note_text, "Medical Note")

        # Enhancement outputs (dynamic tabs will be added during processing)
        self.enhancement_tabs = {}

        layout.addWidget(self.output_tabs)

        # Output actions
        output_btn_layout = QHBoxLayout()

        self.copy_all_btn = QPushButton("Copy All Outputs")
        self.copy_all_btn.setProperty("class", "secondary")
        self.copy_all_btn.clicked.connect(self.copy_all_outputs)
        output_btn_layout.addWidget(self.copy_all_btn)

        self.save_all_btn = QPushButton("Save All")
        self.save_all_btn.setProperty("class", "secondary")
        self.save_all_btn.clicked.connect(self.save_all_outputs)
        output_btn_layout.addWidget(self.save_all_btn)

        layout.addLayout(output_btn_layout)

        return panel

    def create_prompt_customization(self, layout):
        """Create expandable prompt customization section"""
        customization_group = QGroupBox("Prompt Management & Configuration")
        customization_layout = QVBoxLayout()

        # Expand/collapse button
        btn_layout = QHBoxLayout()

        self.prompt_library_btn = QPushButton("Manage Prompt Library")
        self.prompt_library_btn.clicked.connect(self.open_prompt_library)
        # Enable immediately so users can manage prompts before initializing AI
        btn_layout.addWidget(self.prompt_library_btn)

        self.toggle_custom_btn = QPushButton("Show Details")
        self.toggle_custom_btn.setProperty("class", "secondary")
        self.toggle_custom_btn.clicked.connect(self.toggle_customization)
        btn_layout.addWidget(self.toggle_custom_btn)

        self.export_config_btn = QPushButton("Export Config")
        self.export_config_btn.setProperty("class", "secondary")
        self.export_config_btn.clicked.connect(self.export_configuration)
        btn_layout.addWidget(self.export_config_btn)

        self.import_config_btn = QPushButton("Import Config")
        self.import_config_btn.setProperty("class", "secondary")
        self.import_config_btn.clicked.connect(self.import_configuration)
        btn_layout.addWidget(self.import_config_btn)

        btn_layout.addStretch()
        customization_layout.addLayout(btn_layout)

        # Customization content (initially hidden)
        self.customization_content = QWidget()
        self.customization_content.setVisible(False)
        content_layout = QVBoxLayout(self.customization_content)

        # Prompts list (simplified view)
        prompts_label = QLabel("Active Prompts:")
        prompts_label.setProperty("class", "subtitle")
        content_layout.addWidget(prompts_label)

        self.prompts_list = QListWidget()
        self.prompts_list.setMaximumHeight(200)
        content_layout.addWidget(self.prompts_list)

        # Medical dictionary
        dict_label = QLabel("Medical Dictionary:")
        dict_label.setProperty("class", "subtitle")
        content_layout.addWidget(dict_label)

        dict_btn_layout = QHBoxLayout()

        self.edit_dict_btn = QPushButton("Edit Medical Terms")
        self.edit_dict_btn.setProperty("class", "secondary")
        self.edit_dict_btn.clicked.connect(self.edit_medical_dictionary)
        dict_btn_layout.addWidget(self.edit_dict_btn)

        dict_btn_layout.addStretch()
        content_layout.addLayout(dict_btn_layout)

        self.dict_display = QLabel(f"Loaded: {len(self.medical_dictionary)} medical terms")
        self.dict_display.setStyleSheet("color: #64B5F6;")
        content_layout.addWidget(self.dict_display)

        customization_layout.addWidget(self.customization_content)

        customization_group.setLayout(customization_layout)
        layout.addWidget(customization_group)

    def create_menu_bar(self):
        """Create menu bar"""
        menu_bar = self.menuBar()

        # File menu
        file_menu = menu_bar.addMenu("File")
        file_menu.addAction("Export Configuration", self.export_configuration)
        file_menu.addAction("Import Configuration", self.import_configuration)
        file_menu.addSeparator()
        file_menu.addAction("Quit", self.close)

        # Help menu
        help_menu = menu_bar.addMenu("Help")
        help_menu.addAction("About", self.show_about)
        help_menu.addAction("Privacy & Security", self.show_privacy_info)

    # Slot methods (to be implemented in the next file)
    def initialize_ai(self):
        """Initialize AI models"""
        pass

    def start_recording(self):
        """Start audio recording"""
        pass

    def stop_recording(self):
        """Stop recording and transcribe"""
        pass

    def process_with_ai(self):
        """Process transcription with AI"""
        pass

    def copy_transcription(self):
        """Copy transcription to clipboard"""
        from PyQt6.QtWidgets import QApplication
        QApplication.clipboard().setText(self.transcription_text.toPlainText())
        self.statusBar().showMessage("Transcription copied to clipboard!", 3000)

    def save_transcription(self):
        """Save transcription to file"""
        file_path, _ = QFileDialog.getSaveFileName(
            self,
            "Save Transcription",
            str(Path.home() / "transcription.txt"),
            "Text Files (*.txt)"
        )
        if file_path:
            with open(file_path, 'w') as f:
                f.write(self.transcription_text.toPlainText())
            self.statusBar().showMessage(f"Saved to {file_path}", 3000)

    def copy_all_outputs(self):
        """Copy all outputs to clipboard"""
        from PyQt6.QtWidgets import QApplication
        all_text = f"=== MEDICAL NOTE ===\n\n{self.main_note_text.toPlainText()}\n\n"
        for name, widget in self.enhancement_tabs.items():
            all_text += f"=== {name.upper()} ===\n\n{widget.toPlainText()}\n\n"
        QApplication.clipboard().setText(all_text)
        self.statusBar().showMessage("All outputs copied to clipboard!", 3000)

    def save_all_outputs(self):
        """Save all outputs to file"""
        file_path, _ = QFileDialog.getSaveFileName(
            self,
            "Save All Outputs",
            str(Path.home() / "clinical_notes.txt"),
            "Text Files (*.txt)"
        )
        if file_path:
            all_text = f"=== MEDICAL NOTE ===\n\n{self.main_note_text.toPlainText()}\n\n"
            for name, widget in self.enhancement_tabs.items():
                all_text += f"=== {name.upper()} ===\n\n{widget.toPlainText()}\n\n"
            with open(file_path, 'w') as f:
                f.write(all_text)
            self.statusBar().showMessage(f"Saved to {file_path}", 3000)

    def toggle_customization(self):
        """Toggle customization section visibility"""
        is_visible = self.customization_content.isVisible()
        self.customization_content.setVisible(not is_visible)
        self.toggle_custom_btn.setText(
            "Hide Details" if not is_visible else "Show Details"
        )

    def open_prompt_library(self):
        """Open the prompt library manager"""
        from ui.prompt_library_dialog import PromptLibraryDialog

        dialog = PromptLibraryDialog(self, self.prompt_manager)
        dialog.exec()

        # Refresh the prompts list after closing
        self.refresh_prompts_list()

    def export_configuration(self):
        """Export prompt configuration"""
        file_path, _ = QFileDialog.getSaveFileName(
            self,
            "Export Configuration",
            str(Path.home() / "scribe_config.json"),
            "JSON Files (*.json)"
        )
        if file_path:
            if self.prompt_manager.export_configuration(file_path):
                QMessageBox.information(
                    self,
                    "Success",
                    "Configuration exported successfully!"
                )

    def import_configuration(self):
        """Import prompt configuration"""
        file_path, _ = QFileDialog.getOpenFileName(
            self,
            "Import Configuration",
            str(Path.home()),
            "JSON Files (*.json)"
        )
        if file_path:
            reply = QMessageBox.question(
                self,
                "Import Mode",
                "Merge with existing configuration?\n\nYes = Merge (keep existing)\nNo = Replace (delete existing)",
                QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
            )
            merge = reply == QMessageBox.StandardButton.Yes

            if self.prompt_manager.import_configuration(file_path, merge):
                QMessageBox.information(
                    self,
                    "Success",
                    "Configuration imported successfully!"
                )
                self.load_medical_dictionary()  # Reload dictionary

    def edit_medical_dictionary(self):
        """Edit medical dictionary"""
        # TODO: Implement dictionary editor dialog
        QMessageBox.information(
            self,
            "Medical Dictionary",
            f"Medical dictionary contains {len(self.medical_dictionary)} terms.\n\n"
            "Edit config/medical_dictionary.json to customize."
        )

    def load_medical_dictionary(self):
        """Load medical dictionary from file"""
        try:
            dict_path = Path(__file__).parent.parent / "config" / "medical_dictionary.json"
            if dict_path.exists():
                with open(dict_path, 'r') as f:
                    self.medical_dictionary = json.load(f)
                self.dict_display.setText(f"Loaded: {len(self.medical_dictionary)} medical terms")
                logger.info(f"Loaded {len(self.medical_dictionary)} medical terms")
        except Exception as e:
            logger.error(f"Error loading medical dictionary: {e}")

    def clear_session_data(self):
        """Clear all session data for privacy"""
        reply = QMessageBox.question(
            self,
            "Clear Session",
            "Clear all transcriptions and outputs?\n\nThis cannot be undone.",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )

        if reply == QMessageBox.StandardButton.Yes:
            self.current_transcription = ""
            self.current_outputs = {}
            self.transcription_text.clear()
            self.main_note_text.clear()

            # Clear enhancement tabs
            for widget in self.enhancement_tabs.values():
                widget.clear()

            self.statusBar().showMessage("Session data cleared", 3000)
            logger.info("Session data cleared")

    def show_about(self):
        """Show about dialog"""
        QMessageBox.about(
            self,
            "About Doc Pixel's Scribe",
            "Doc Pixel's Scribe - Offline AI Medical Scribe\n\n"
            "Version: 1.0\n\n"
            "A fully offline, privacy-focused medical documentation tool.\n\n"
            "Features:\n"
            "• 100% offline processing\n"
            "• Your data never leaves your Mac\n"
            "• Customizable prompts\n"
            "• Free and open source\n\n"
            "From: Physician Prompt Engineering\n"
            "https://physicianpromptengineering.com"
        )

    def show_privacy_info(self):
        """Show privacy information"""
        QMessageBox.information(
            self,
            "Privacy & Security",
            "Your Privacy is Guaranteed:\n\n"
            "✓ All processing happens locally on your Mac\n"
            "✓ No internet connection required after setup\n"
            "✓ No data is ever sent to external servers\n"
            "✓ Session data is cleared when you close the app\n"
            "✓ AI models are cached locally (~5GB)\n\n"
            "HIPAA Compliance:\n"
            "This tool runs entirely offline and does not transmit data.\n"
            "However, you are responsible for:\n"
            "• Securing your Mac (FileVault encryption recommended)\n"
            "• Following your institution's policies\n"
            "• Reviewing all AI-generated content before use\n\n"
            "This tool is for EDUCATIONAL purposes only."
        )

    def closeEvent(self, event):
        """Handle window close - clear session data"""
        # Auto-clear session data on close for privacy
        self.current_transcription = ""
        self.current_outputs = {}

        # Unload models to free memory
        if hasattr(self, 'whisper_engine'):
            self.whisper_engine.unload_model()
        if hasattr(self, 'llm_engine'):
            self.llm_engine.unload_model()

        logger.info("Application closed, session data cleared")
        event.accept()
