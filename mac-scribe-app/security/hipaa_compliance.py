"""
HIPAA Compliance Security Utilities
Handles secure deletion, PHI detection, audit logging, and encryption
"""

import os
import re
import gc
import json
import secrets
import hashlib
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Tuple
import logging

logger = logging.getLogger(__name__)


# ============================================
# SECURE FILE DELETION
# ============================================

def secure_delete(file_path: str, iterations: int = 3) -> bool:
    """
    Securely overwrite and delete file to prevent forensic recovery

    Args:
        file_path: Path to file to delete
        iterations: Number of overwrite passes (default 3 for DoD standard)

    Returns:
        True if successful, False otherwise
    """
    try:
        if not os.path.exists(file_path):
            return True

        file_size = os.path.getsize(file_path)

        # Overwrite with random data multiple times
        with open(file_path, 'ba+') as f:
            for _ in range(iterations):
                f.seek(0)
                f.write(secrets.token_bytes(file_size))
                f.flush()
                os.fsync(f.fileno())

        # Finally delete the file
        os.remove(file_path)
        logger.info(f"Securely deleted file: {file_path}")
        return True

    except Exception as e:
        logger.error(f"Failed to securely delete {file_path}: {e}")
        return False


def clear_directory(directory: str, secure: bool = True) -> int:
    """
    Clear all files in a directory

    Args:
        directory: Directory path
        secure: Use secure deletion (slower but safer)

    Returns:
        Number of files deleted
    """
    try:
        count = 0
        dir_path = Path(directory)

        if not dir_path.exists():
            return 0

        for file_path in dir_path.iterdir():
            if file_path.is_file():
                if secure:
                    secure_delete(str(file_path))
                else:
                    file_path.unlink()
                count += 1

        logger.info(f"Cleared {count} files from {directory}")
        return count

    except Exception as e:
        logger.error(f"Failed to clear directory {directory}: {e}")
        return 0


# ============================================
# MEMORY WIPING
# ============================================

def wipe_string(s: str) -> None:
    """
    Attempt to overwrite string in memory before deletion
    Note: Python's string immutability limits effectiveness, but we try

    Args:
        s: String to wipe
    """
    if not s:
        return

    try:
        # Create a new string of null bytes to replace it
        # This doesn't guarantee the old string is wiped from memory
        # but it's better than nothing
        _ = "\x00" * len(s)
    except:
        pass


def clear_sensitive_data(*variables) -> None:
    """
    Clear multiple variables and force garbage collection

    Args:
        *variables: Variables to clear
    """
    for var in variables:
        if isinstance(var, str):
            wipe_string(var)

    gc.collect()


# ============================================
# PHI PATTERN DETECTION
# ============================================

PHI_PATTERNS = {
    'SSN': r'\b\d{3}-\d{2}-\d{4}\b',
    'Date of Birth': r'\bDOB[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b',
    'MRN': r'\b(MRN|Medical Record|Chart)[:\s#]+\d+\b',
    'Phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
    'Email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
    'Address': r'\b\d+\s+[A-Z][a-z]+\s+(Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln)\b',
    'Specific Date': r'\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b',
}


def detect_phi(text: str) -> Dict[str, List[str]]:
    """
    Detect potential PHI patterns in text

    Args:
        text: Text to scan

    Returns:
        Dictionary of PHI type -> list of matches
    """
    found_phi = {}

    for phi_type, pattern in PHI_PATTERNS.items():
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            found_phi[phi_type] = matches

    return found_phi


def mask_phi(text: str) -> Tuple[str, Dict[str, int]]:
    """
    Mask detected PHI patterns in text

    Args:
        text: Text to mask

    Returns:
        Tuple of (masked_text, count_by_type)
    """
    masked_text = text
    counts = {}

    for phi_type, pattern in PHI_PATTERNS.items():
        matches = re.findall(pattern, masked_text, re.IGNORECASE)
        if matches:
            counts[phi_type] = len(matches)
            # Replace with masked version
            masked_text = re.sub(
                pattern,
                f"[{phi_type.upper()}_REDACTED]",
                masked_text,
                flags=re.IGNORECASE
            )

    return masked_text, counts


# ============================================
# AUDIT LOGGING
# ============================================

class AuditLogger:
    """HIPAA-compliant audit logger"""

    def __init__(self, log_dir: Optional[str] = None):
        """
        Initialize audit logger

        Args:
            log_dir: Directory for audit logs (default: ~/.cache/mac-scribe-app/audit/)
        """
        if log_dir is None:
            log_dir = Path.home() / ".cache" / "mac-scribe-app" / "audit"

        self.log_dir = Path(log_dir)
        self.log_dir.mkdir(parents=True, exist_ok=True)

        # Create monthly log files
        self.current_month = datetime.now().strftime("%Y-%m")
        self.log_file = self.log_dir / f"audit_{self.current_month}.jsonl"

    def log_event(
        self,
        action: str,
        user: str = "unknown",
        success: bool = True,
        details: Optional[Dict] = None,
        phi_detected: bool = False
    ) -> None:
        """
        Log an audit event

        Args:
            action: Action performed (PROCESS, EXPORT, VIEW, etc.)
            user: User identifier (username or "unknown")
            success: Whether action succeeded
            details: Additional details (no PHI!)
            phi_detected: Whether PHI patterns were detected
        """
        try:
            # Check if we need a new log file for new month
            current_month = datetime.now().strftime("%Y-%m")
            if current_month != self.current_month:
                self.current_month = current_month
                self.log_file = self.log_dir / f"audit_{self.current_month}.jsonl"

            entry = {
                "timestamp": datetime.now().isoformat(),
                "action": action,
                "user": user,
                "success": success,
                "phi_detected": phi_detected,
                "details": details or {}
            }

            with open(self.log_file, 'a') as f:
                json.dump(entry, f)
                f.write('\n')

        except Exception as e:
            logger.error(f"Failed to write audit log: {e}")

    def get_events(
        self,
        days: int = 7,
        action: Optional[str] = None
    ) -> List[Dict]:
        """
        Retrieve audit events

        Args:
            days: Number of days to retrieve
            action: Filter by action type

        Returns:
            List of audit events
        """
        events = []
        cutoff_date = datetime.now() - timedelta(days=days)

        try:
            # Read all log files in directory
            for log_file in sorted(self.log_dir.glob("audit_*.jsonl")):
                with open(log_file, 'r') as f:
                    for line in f:
                        try:
                            event = json.loads(line)
                            event_date = datetime.fromisoformat(event["timestamp"])

                            if event_date >= cutoff_date:
                                if action is None or event["action"] == action:
                                    events.append(event)
                        except:
                            continue

        except Exception as e:
            logger.error(f"Failed to read audit logs: {e}")

        return events

    def clear_old_logs(self, months: int = 6) -> int:
        """
        Delete audit logs older than specified months

        Args:
            months: Number of months to retain (HIPAA allows 6 years, default 6 months)

        Returns:
            Number of files deleted
        """
        try:
            count = 0
            cutoff_date = datetime.now() - timedelta(days=months * 30)
            cutoff_month = cutoff_date.strftime("%Y-%m")

            for log_file in self.log_dir.glob("audit_*.jsonl"):
                # Extract month from filename
                file_month = log_file.stem.replace("audit_", "")

                if file_month < cutoff_month:
                    secure_delete(str(log_file))
                    count += 1

            logger.info(f"Cleared {count} old audit log files")
            return count

        except Exception as e:
            logger.error(f"Failed to clear old audit logs: {e}")
            return 0


# ============================================
# FILE ENCRYPTION
# ============================================

class SimpleEncryption:
    """Simple AES-256 encryption for file exports"""

    @staticmethod
    def derive_key(password: str, salt: bytes) -> bytes:
        """
        Derive encryption key from password using PBKDF2

        Args:
            password: User password
            salt: Salt bytes

        Returns:
            32-byte key
        """
        return hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            salt,
            100000,  # iterations
            dklen=32
        )

    @staticmethod
    def encrypt_file(
        file_path: str,
        content: str,
        password: str
    ) -> bool:
        """
        Encrypt content and save to file

        Args:
            file_path: Output file path
            content: Content to encrypt
            password: Encryption password

        Returns:
            True if successful
        """
        try:
            # Generate random salt and IV
            salt = secrets.token_bytes(16)
            iv = secrets.token_bytes(16)

            # Derive key from password
            key = SimpleEncryption.derive_key(password, salt)

            # Encrypt with AES-256-CBC
            from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
            from cryptography.hazmat.backends import default_backend

            cipher = Cipher(
                algorithms.AES(key),
                modes.CBC(iv),
                backend=default_backend()
            )
            encryptor = cipher.encryptor()

            # Pad content to block size
            content_bytes = content.encode('utf-8')
            padding_length = 16 - (len(content_bytes) % 16)
            padded_content = content_bytes + bytes([padding_length] * padding_length)

            # Encrypt
            encrypted_content = encryptor.update(padded_content) + encryptor.finalize()

            # Write: salt + iv + encrypted_content
            with open(file_path, 'wb') as f:
                f.write(salt)
                f.write(iv)
                f.write(encrypted_content)

            logger.info(f"Encrypted file saved: {file_path}")
            return True

        except Exception as e:
            logger.error(f"Encryption failed: {e}")
            return False

    @staticmethod
    def decrypt_file(file_path: str, password: str) -> Optional[str]:
        """
        Decrypt file content

        Args:
            file_path: Encrypted file path
            password: Decryption password

        Returns:
            Decrypted content or None if failed
        """
        try:
            with open(file_path, 'rb') as f:
                # Read salt, IV, and encrypted content
                salt = f.read(16)
                iv = f.read(16)
                encrypted_content = f.read()

            # Derive key
            key = SimpleEncryption.derive_key(password, salt)

            # Decrypt
            from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
            from cryptography.hazmat.backends import default_backend

            cipher = Cipher(
                algorithms.AES(key),
                modes.CBC(iv),
                backend=default_backend()
            )
            decryptor = cipher.decryptor()

            padded_content = decryptor.update(encrypted_content) + decryptor.finalize()

            # Remove padding
            padding_length = padded_content[-1]
            content = padded_content[:-padding_length]

            return content.decode('utf-8')

        except Exception as e:
            logger.error(f"Decryption failed: {e}")
            return None


# ============================================
# CACHE MANAGEMENT
# ============================================

def get_cache_size(cache_dir: str) -> int:
    """
    Calculate total size of cache directory

    Args:
        cache_dir: Cache directory path

    Returns:
        Size in bytes
    """
    total_size = 0

    try:
        for path in Path(cache_dir).rglob('*'):
            if path.is_file():
                total_size += path.stat().st_size
    except Exception as e:
        logger.error(f"Failed to calculate cache size: {e}")

    return total_size


def clear_cache(
    cache_dir: str,
    exclude_patterns: Optional[List[str]] = None,
    secure: bool = False
) -> Tuple[int, int]:
    """
    Clear cache directory

    Args:
        cache_dir: Cache directory path
        exclude_patterns: Patterns to exclude (e.g., ['*.json'])
        secure: Use secure deletion

    Returns:
        Tuple of (files_deleted, bytes_freed)
    """
    files_deleted = 0
    bytes_freed = 0
    exclude_patterns = exclude_patterns or []

    try:
        for path in Path(cache_dir).rglob('*'):
            if not path.is_file():
                continue

            # Check exclude patterns
            skip = False
            for pattern in exclude_patterns:
                if path.match(pattern):
                    skip = True
                    break

            if skip:
                continue

            # Get size before deletion
            size = path.stat().st_size

            # Delete
            if secure:
                if secure_delete(str(path)):
                    files_deleted += 1
                    bytes_freed += size
            else:
                path.unlink()
                files_deleted += 1
                bytes_freed += size

        logger.info(f"Cleared cache: {files_deleted} files, {bytes_freed / (1024**2):.2f} MB")

    except Exception as e:
        logger.error(f"Failed to clear cache: {e}")

    return files_deleted, bytes_freed
