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

        # Validate input
        if not prompt or not isinstance(prompt, str):
            logger.error("Invalid prompt: must be non-empty string")
            return None

        # Truncate prompt if too long (leave room for generation)
        max_prompt_chars = 12000  # ~3000 tokens at 4 chars/token
        if len(prompt) > max_prompt_chars:
            logger.warning(f"Prompt too long ({len(prompt)} chars), truncating to {max_prompt_chars}")
            prompt = prompt[:max_prompt_chars] + "\n\n[Note: Transcript truncated due to length]"

        try:
            if progress_callback:
                progress_callback("Preparing prompt...")

            # Format prompt for Mistral Instruct
            formatted_prompt = f"<s>[INST] {prompt} [/INST]"

            if progress_callback:
                progress_callback("Generating response (this may take 1-2 minutes)...")

            # Generate with streaming and robust error handling
            response = ""
            token_count = 0
            max_retries = 3
            retry_count = 0

            while retry_count < max_retries:
                try:
                    # Attempt generation with safer parameters
                    stream = self.model(
                        formatted_prompt,
                        max_tokens=min(max_tokens, 1500),  # Reduce max tokens to avoid memory issues
                        temperature=temperature,
                        top_p=0.95,  # Add top_p for more stable generation
                        stop=["</s>", "[INST]", "\n\n\n"],  # Add extra stop sequence
                        stream=True,
                        echo=False  # Don't echo the prompt
                    )

                    # Collect response tokens
                    for output in stream:
                        try:
                            if 'choices' in output and len(output['choices']) > 0:
                                choice = output['choices'][0]
                                if 'text' in choice:
                                    token = choice['text']
                                    response += token
                                    token_count += 1

                                    # Update progress every 50 tokens
                                    if token_count % 50 == 0 and progress_callback:
                                        progress_callback(f"Generating... ({token_count} tokens)")

                                # Check for finish reason
                                if 'finish_reason' in choice and choice['finish_reason'] is not None:
                                    logger.info(f"Generation finished: {choice['finish_reason']}")
                                    break
                        except (KeyError, IndexError, TypeError) as e:
                            logger.warning(f"Error parsing output token: {e}")
                            continue

                    # If we got here, generation succeeded
                    break

                except Exception as e:
                    retry_count += 1
                    logger.warning(f"Generation attempt {retry_count} failed: {e}")

                    if retry_count < max_retries:
                        if progress_callback:
                            progress_callback(f"Retrying generation (attempt {retry_count + 1}/{max_retries})...")
                        # Reduce max_tokens for retry
                        max_tokens = max_tokens // 2
                    else:
                        raise

            if progress_callback:
                progress_callback("Response generated!")

            logger.info(f"Generated {len(response)} characters ({token_count} tokens)")

            # Clean up response
            cleaned_response = response.strip()

            # Remove any remaining instruction tags
            if "[/INST]" in cleaned_response:
                cleaned_response = cleaned_response.split("[/INST]")[-1].strip()

            return cleaned_response if cleaned_response else None

        except Exception as e:
            logger.error(f"Error during generation: {e}", exc_info=True)
            if progress_callback:
                progress_callback(f"Generation error: {str(e)}")

            # Return partial response if we have any
            if response and len(response) > 100:
                logger.info("Returning partial response due to error")
                return response.strip()

            return None

    def unload_model(self):
        """Unload model from memory"""
        self.model = None
        self.is_loaded = False
        logger.info("LLM model unloaded")
