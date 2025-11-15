"""
LLM Engine - Offline Text Processing
Uses llama.cpp with Python bindings for fully offline LLM inference
"""

import os
from pathlib import Path
from typing import Optional, Callable
from llama_cpp import Llama
import logging

logger = logging.getLogger(__name__)


class LLMEngine:
    """Handles offline LLM inference using llama.cpp"""

    def __init__(self, model_path: Optional[str] = None):
        """
        Initialize LLM engine

        Args:
            model_path: Path to GGUF model file
        """
        self.model_path = model_path
        self.model: Optional[Llama] = None
        self.is_loaded = False

        # Model cache directory
        self.cache_dir = Path.home() / ".cache" / "mac-scribe-app" / "llm"
        self.cache_dir.mkdir(parents=True, exist_ok=True)

        # Default model info
        self.default_model_url = "https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q4_K_M.gguf"
        self.default_model_name = "mistral-7b-instruct-v0.2.Q4_K_M.gguf"

    def get_default_model_path(self) -> Path:
        """Get path to default model"""
        return self.cache_dir / self.default_model_name

    def download_default_model(self, progress_callback: Optional[Callable] = None) -> bool:
        """
        Download default model if not present

        Args:
            progress_callback: Function to call with progress updates

        Returns:
            True if successful or already exists, False otherwise
        """
        model_path = self.get_default_model_path()

        if model_path.exists():
            logger.info(f"Model already exists at {model_path}")
            return True

        try:
            if progress_callback:
                progress_callback("Downloading LLM model (this may take 10-30 minutes)...")

            import urllib.request

            def download_progress(count, block_size, total_size):
                if progress_callback and total_size > 0:
                    percent = int(count * block_size * 100 / total_size)
                    mb_downloaded = (count * block_size) / (1024 * 1024)
                    mb_total = total_size / (1024 * 1024)
                    progress_callback(
                        f"Downloading model: {percent}% ({mb_downloaded:.1f}MB / {mb_total:.1f}MB)"
                    )

            logger.info(f"Downloading model from {self.default_model_url}")
            urllib.request.urlretrieve(
                self.default_model_url,
                str(model_path),
                reporthook=download_progress
            )

            if progress_callback:
                progress_callback("Model downloaded successfully!")

            logger.info("Model downloaded successfully")
            return True

        except Exception as e:
            logger.error(f"Error downloading model: {e}")
            if progress_callback:
                progress_callback(f"Download error: {str(e)}")
            # Clean up partial download
            if model_path.exists():
                model_path.unlink()
            return False

    def load_model(self, progress_callback: Optional[Callable] = None) -> bool:
        """
        Load LLM model

        Args:
            progress_callback: Function to call with progress updates

        Returns:
            True if successful, False otherwise
        """
        try:
            # Use provided path or default
            if self.model_path is None:
                self.model_path = str(self.get_default_model_path())

            # Download if needed
            if not Path(self.model_path).exists():
                if not self.download_default_model(progress_callback):
                    return False

            if progress_callback:
                progress_callback("Loading LLM model into memory...")

            logger.info(f"Loading LLM model from {self.model_path}")

            # Load with Metal GPU acceleration for M-series Macs
            self.model = Llama(
                model_path=self.model_path,
                n_ctx=4096,  # Context window
                n_gpu_layers=-1,  # Use all GPU layers (Metal acceleration)
                n_threads=4,  # CPU threads for non-GPU parts
                verbose=False
            )

            self.is_loaded = True

            if progress_callback:
                progress_callback("LLM model loaded successfully!")

            logger.info("LLM model loaded successfully")
            return True

        except Exception as e:
            logger.error(f"Error loading LLM model: {e}")
            if progress_callback:
                progress_callback(f"Error loading LLM: {str(e)}")
            return False

    def generate(
        self,
        prompt: str,
        max_tokens: int = 2000,
        temperature: float = 0.3,
        progress_callback: Optional[Callable] = None
    ) -> Optional[str]:
        """
        Generate text from prompt

        Args:
            prompt: Input prompt
            max_tokens: Maximum tokens to generate
            temperature: Sampling temperature (0.0 = deterministic)
            progress_callback: Function to call with progress updates

        Returns:
            Generated text or None if failed
        """
        if not self.is_loaded or self.model is None:
            logger.error("LLM model not loaded")
            return None

        try:
            if progress_callback:
                progress_callback("Generating response...")

            # Format prompt for Mistral Instruct
            formatted_prompt = f"<s>[INST] {prompt} [/INST]"

            # Generate with streaming
            response = ""
            stream = self.model(
                formatted_prompt,
                max_tokens=max_tokens,
                temperature=temperature,
                stop=["</s>", "[INST]"],
                stream=True
            )

            for output in stream:
                token = output['choices'][0]['text']
                response += token

                # Optional: call progress with partial response
                # Could implement streaming display here

            if progress_callback:
                progress_callback("Response generated!")

            logger.info(f"Generated {len(response)} characters")
            return response.strip()

        except Exception as e:
            logger.error(f"Error during generation: {e}")
            if progress_callback:
                progress_callback(f"Generation error: {str(e)}")
            return None

    def unload_model(self):
        """Unload model from memory"""
        self.model = None
        self.is_loaded = False
        logger.info("LLM model unloaded")
