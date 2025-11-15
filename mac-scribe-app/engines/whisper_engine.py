"""
Whisper Engine - Offline Speech-to-Text
Uses Whisper Medium model optimized for M-series Macs
"""

import os
from pathlib import Path
from typing import Optional, Callable
from faster_whisper import WhisperModel
import logging

logger = logging.getLogger(__name__)


class WhisperEngine:
    """Handles offline speech-to-text transcription using Whisper Medium"""

    def __init__(self, model_size: str = "medium", device: str = "auto"):
        """
        Initialize Whisper engine

        Args:
            model_size: Whisper model size (tiny, base, small, medium, large)
            device: Compute device (auto, cpu, cuda)
        """
        self.model_size = model_size
        self.device = device
        self.model: Optional[WhisperModel] = None
        self.is_loaded = False

        # Model cache directory
        self.cache_dir = Path.home() / ".cache" / "mac-scribe-app" / "whisper"
        self.cache_dir.mkdir(parents=True, exist_ok=True)

    def load_model(self, progress_callback: Optional[Callable] = None) -> bool:
        """
        Load Whisper model (downloads if not cached)

        Args:
            progress_callback: Function to call with progress updates

        Returns:
            True if successful, False otherwise
        """
        try:
            if progress_callback:
                progress_callback(f"Loading Whisper {self.model_size} model...")

            logger.info(f"Loading Whisper {self.model_size} model")

            # faster-whisper automatically uses Core ML on M-series Macs
            self.model = WhisperModel(
                self.model_size,
                device=self.device,
                compute_type="int8",  # Optimized for M-series
                download_root=str(self.cache_dir)
            )

            self.is_loaded = True

            if progress_callback:
                progress_callback("Whisper model loaded successfully!")

            logger.info("Whisper model loaded successfully")
            return True

        except Exception as e:
            logger.error(f"Error loading Whisper model: {e}")
            if progress_callback:
                progress_callback(f"Error loading Whisper: {str(e)}")
            return False

    def transcribe(
        self,
        audio_path: str,
        medical_terms: Optional[list] = None,
        progress_callback: Optional[Callable] = None
    ) -> Optional[str]:
        """
        Transcribe audio file to text

        Args:
            audio_path: Path to audio file
            medical_terms: List of medical terms to guide transcription
            progress_callback: Function to call with progress updates

        Returns:
            Transcribed text or None if failed
        """
        if not self.is_loaded or self.model is None:
            logger.error("Whisper model not loaded")
            return None

        try:
            if progress_callback:
                progress_callback("Transcribing audio...")

            # Build initial prompt with medical terms
            initial_prompt = ""
            if medical_terms:
                sample_terms = medical_terms[:30]  # Use first 30 terms
                initial_prompt = f"This is a medical consultation discussing: {', '.join(sample_terms)}."

            # Transcribe with medical terminology guidance
            segments, info = self.model.transcribe(
                audio_path,
                language="en",
                initial_prompt=initial_prompt if initial_prompt else None,
                beam_size=5,
                vad_filter=True,  # Voice activity detection
                vad_parameters=dict(
                    min_silence_duration_ms=500
                )
            )

            # Collect all segments
            transcription_parts = []
            for segment in segments:
                transcription_parts.append(segment.text.strip())
                if progress_callback:
                    progress_callback(f"Transcribing... ({int(segment.end)}s)")

            transcription = " ".join(transcription_parts)

            if progress_callback:
                progress_callback("Transcription complete!")

            logger.info(f"Transcription complete: {len(transcription)} characters")
            return transcription

        except Exception as e:
            logger.error(f"Error during transcription: {e}")
            if progress_callback:
                progress_callback(f"Transcription error: {str(e)}")
            return None

    def unload_model(self):
        """Unload model from memory"""
        self.model = None
        self.is_loaded = False
        logger.info("Whisper model unloaded")
