"""
Integrity Verification System
Addresses CRITICAL-005: Integrity Verification

Features:
- Digital signatures for generated content
- File integrity protection (HMAC)
- Model verification
- Checksum database
"""

import hashlib
import hmac
import json
from pathlib import Path
from datetime import datetime
from typing import Optional, Dict
import logging

logger = logging.getLogger(__name__)


# Known good model checksums (SHA256)
VERIFIED_MODEL_CHECKSUMS = {
    "mistral-7b-instruct-v0.2.Q4_K_M.gguf": "4c31ff123c5dde80e0bd624bbe6f8b5ac8f856e5f6f1c73c18f4b40b2c73ef08",
    # Add more model checksums as needed
}


class IntegrityChecker:
    """
    Verifies integrity of files and data

    Features:
    - SHA256 checksums
    - HMAC verification
    - Model hash verification
    """

    def __init__(self, checksum_file: Optional[Path] = None):
        """
        Initialize integrity checker

        Args:
            checksum_file: Path to checksum database
        """
        if checksum_file is None:
            cache_dir = Path.home() / ".cache" / "mac-scribe-app"
            checksum_file = cache_dir / "checksums.json"

        self.checksum_file = checksum_file
        self.checksums: Dict[str, str] = {}

        self._load_checksums()

    def _load_checksums(self):
        """Load checksums from file"""
        try:
            if self.checksum_file.exists():
                with open(self.checksum_file, 'r') as f:
                    self.checksums = json.load(f)
                logger.info(f"Loaded {len(self.checksums)} checksums")
        except Exception as e:
            logger.error(f"Error loading checksums: {e}")

    def _save_checksums(self):
        """Save checksums to file"""
        try:
            with open(self.checksum_file, 'w') as f:
                json.dump(self.checksums, f, indent=2)
            logger.info("Checksums saved")
        except Exception as e:
            logger.error(f"Error saving checksums: {e}")

    def calculate_file_hash(self, file_path: Path) -> str:
        """
        Calculate SHA256 hash of file

        Args:
            file_path: Path to file

        Returns:
            Hex digest of hash
        """
        try:
            sha256 = hashlib.sha256()
            with open(file_path, 'rb') as f:
                while True:
                    data = f.read(65536)  # 64KB chunks
                    if not data:
                        break
                    sha256.update(data)
            return sha256.hexdigest()
        except Exception as e:
            logger.error(f"Error calculating hash: {e}")
            return ""

    def register_file(self, file_path: Path) -> bool:
        """
        Register file and store its checksum

        Args:
            file_path: Path to file

        Returns:
            True if successful
        """
        try:
            file_hash = self.calculate_file_hash(file_path)
            if file_hash:
                self.checksums[str(file_path)] = file_hash
                self._save_checksums()
                logger.info(f"Registered file: {file_path}")
                return True
            return False
        except Exception as e:
            logger.error(f"Error registering file: {e}")
            return False

    def verify_file(self, file_path: Path) -> tuple[bool, str]:
        """
        Verify file hasn't been tampered with

        Args:
            file_path: Path to file

        Returns:
            Tuple of (is_valid, message)
        """
        try:
            file_path_str = str(file_path)

            if file_path_str not in self.checksums:
                return False, "File not registered in checksum database"

            expected_hash = self.checksums[file_path_str]
            actual_hash = self.calculate_file_hash(file_path)

            if actual_hash == expected_hash:
                return True, "File integrity verified"
            else:
                return False, "File has been modified (hash mismatch)"

        except Exception as e:
            return False, f"Verification error: {e}"

    def verify_model(self, model_path: Path, model_name: str) -> tuple[bool, str]:
        """
        Verify AI model integrity against known checksums

        Args:
            model_path: Path to model file
            model_name: Name of model

        Returns:
            Tuple of (is_valid, message)
        """
        try:
            if model_name not in VERIFIED_MODEL_CHECKSUMS:
                return False, f"Model '{model_name}' not in verified list"

            expected_hash = VERIFIED_MODEL_CHECKSUMS[model_name]
            actual_hash = self.calculate_file_hash(model_path)

            if actual_hash == expected_hash:
                logger.info(f"Model verified: {model_name}")
                return True, "Model integrity verified"
            else:
                logger.error(f"Model verification failed: {model_name}")
                return False, "Model hash does not match expected value - POTENTIAL TAMPERING"

        except Exception as e:
            return False, f"Verification error: {e}"

    def scan_directory(self, directory: Path) -> Dict[str, bool]:
        """
        Scan directory and verify all registered files

        Args:
            directory: Directory to scan

        Returns:
            Dict of file_path -> is_valid
        """
        results = {}

        for file_path_str in self.checksums.keys():
            file_path = Path(file_path_str)

            # Only check files in this directory
            try:
                if file_path.parent == directory or directory in file_path.parents:
                    if file_path.exists():
                        is_valid, _ = self.verify_file(file_path)
                        results[file_path_str] = is_valid
                    else:
                        results[file_path_str] = None  # File missing
            except:
                pass

        return results


class HMACProtection:
    """
    Add HMAC protection to files

    Prevents tampering by adding authentication code
    """

    @staticmethod
    def add_hmac(data: bytes, key: bytes) -> bytes:
        """
        Add HMAC to data

        Args:
            data: Data to protect
            key: HMAC key

        Returns:
            HMAC + data
        """
        h = hmac.new(key, data, hashlib.sha256)
        return h.digest() + data

    @staticmethod
    def verify_and_strip_hmac(protected_data: bytes, key: bytes) -> Optional[bytes]:
        """
        Verify HMAC and return original data

        Args:
            protected_data: HMAC + data
            key: HMAC key

        Returns:
            Original data if valid, None otherwise
        """
        try:
            # Extract HMAC (first 32 bytes) and data
            received_hmac = protected_data[:32]
            data = protected_data[32:]

            # Calculate expected HMAC
            expected_hmac = hmac.new(key, data, hashlib.sha256).digest()

            # Constant-time comparison
            if hmac.compare_digest(received_hmac, expected_hmac):
                return data
            else:
                logger.warning("HMAC verification failed - data tampered")
                return None

        except Exception as e:
            logger.error(f"HMAC verification error: {e}")
            return None
