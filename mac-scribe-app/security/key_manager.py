"""
Key Management System
Addresses CRITICAL-003: Mandatory Encryption with Key Management

Uses macOS Keychain for secure key storage
"""

import os
import secrets
import keyring
import hashlib
from pathlib import Path
from typing import Optional
import logging

from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend

logger = logging.getLogger(__name__)


class KeyManager:
    """
    Secure key management using macOS Keychain

    Features:
    - Master key generation
    - Key derivation for different purposes
    - Secure storage in macOS Keychain
    - Key rotation capability
    """

    KEYRING_SERVICE = "com.physicianpromptengineering.scribe.keys"

    # Key purposes
    KEY_FILE_ENCRYPTION = "file_encryption"
    KEY_LOG_ENCRYPTION = "log_encryption"
    KEY_CLIPBOARD_ENCRYPTION = "clipboard_encryption"
    KEY_MASTER = "master_key"

    def __init__(self):
        """Initialize key manager"""
        self.cache_dir = Path.home() / ".cache" / "mac-scribe-app" / "keys"
        self.cache_dir.mkdir(parents=True, exist_ok=True)

        # Set restrictive permissions
        try:
            os.chmod(self.cache_dir, 0o700)
        except:
            pass

    def _derive_key(
        self,
        master_key: bytes,
        purpose: str,
        salt: bytes
    ) -> bytes:
        """
        Derive encryption key from master key for specific purpose

        Args:
            master_key: Master key
            purpose: Key purpose
            salt: Salt for derivation

        Returns:
            Derived 32-byte key
        """
        # Combine purpose into derivation
        purpose_bytes = purpose.encode('utf-8')

        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt + purpose_bytes,
            iterations=100000,
            backend=default_backend()
        )

        return kdf.derive(master_key)

    def initialize_master_key(self, password: str) -> bool:
        """
        Initialize master key from password

        Args:
            password: User password

        Returns:
            True if successful
        """
        try:
            # Generate salt
            salt = secrets.token_bytes(16)

            # Derive master key from password
            kdf = PBKDF2HMAC(
                algorithm=hashes.SHA256(),
                length=32,
                salt=salt,
                iterations=100000,
                backend=default_backend()
            )
            master_key = kdf.derive(password.encode('utf-8'))

            # Store master key in Keychain
            keyring.set_password(
                self.KEYRING_SERVICE,
                self.KEY_MASTER,
                master_key.hex()
            )

            # Store salt
            salt_file = self.cache_dir / "master.salt"
            with open(salt_file, 'wb') as f:
                f.write(salt)
            os.chmod(salt_file, 0o600)

            logger.info("Master key initialized")
            return True

        except Exception as e:
            logger.error(f"Failed to initialize master key: {e}")
            return False

    def get_master_key(self, password: Optional[str] = None) -> Optional[bytes]:
        """
        Get master key from Keychain

        Args:
            password: Password to derive master key (if not in Keychain)

        Returns:
            Master key or None
        """
        try:
            # Try to get from Keychain first
            master_key_hex = keyring.get_password(
                self.KEYRING_SERVICE,
                self.KEY_MASTER
            )

            if master_key_hex:
                return bytes.fromhex(master_key_hex)

            # If not in Keychain and password provided, derive it
            if password:
                salt_file = self.cache_dir / "master.salt"
                if salt_file.exists():
                    with open(salt_file, 'rb') as f:
                        salt = f.read()

                    kdf = PBKDF2HMAC(
                        algorithm=hashes.SHA256(),
                        length=32,
                        salt=salt,
                        iterations=100000,
                        backend=default_backend()
                    )
                    return kdf.derive(password.encode('utf-8'))

            logger.warning("Master key not found in Keychain")
            return None

        except Exception as e:
            logger.error(f"Failed to get master key: {e}")
            return None

    def get_encryption_key(
        self,
        purpose: str = KEY_FILE_ENCRYPTION,
        password: Optional[str] = None
    ) -> Optional[tuple[bytes, bytes]]:
        """
        Get encryption key for purpose

        Args:
            purpose: Key purpose
            password: Password (if master key not in Keychain)

        Returns:
            Tuple of (key, salt) or None
        """
        try:
            # Get master key
            master_key = self.get_master_key(password)
            if not master_key:
                logger.error("Cannot get encryption key without master key")
                return None

            # Generate salt for this key derivation
            salt = secrets.token_bytes(16)

            # Derive key for purpose
            derived_key = self._derive_key(master_key, purpose, salt)

            return derived_key, salt

        except Exception as e:
            logger.error(f"Failed to get encryption key: {e}")
            return None

    def derive_key_from_salt(
        self,
        purpose: str,
        salt: bytes,
        password: Optional[str] = None
    ) -> Optional[bytes]:
        """
        Derive key from existing salt (for decryption)

        Args:
            purpose: Key purpose
            salt: Existing salt
            password: Password (if master key not in Keychain)

        Returns:
            Derived key or None
        """
        try:
            master_key = self.get_master_key(password)
            if not master_key:
                return None

            return self._derive_key(master_key, purpose, salt)

        except Exception as e:
            logger.error(f"Failed to derive key from salt: {e}")
            return None

    def rotate_master_key(self, old_password: str, new_password: str) -> bool:
        """
        Rotate master key (change password)

        Args:
            old_password: Current password
            new_password: New password

        Returns:
            True if successful
        """
        try:
            # Verify old password
            old_master_key = self.get_master_key(old_password)
            if not old_master_key:
                logger.error("Old password verification failed")
                return False

            # Delete old master key from Keychain
            try:
                keyring.delete_password(self.KEYRING_SERVICE, self.KEY_MASTER)
            except:
                pass

            # Initialize with new password
            return self.initialize_master_key(new_password)

        except Exception as e:
            logger.error(f"Failed to rotate master key: {e}")
            return False

    def wipe_all_keys(self) -> bool:
        """
        Wipe all keys from Keychain and cache

        USE WITH CAUTION - encrypted data will be unrecoverable

        Returns:
            True if successful
        """
        try:
            # Delete from Keychain
            try:
                keyring.delete_password(self.KEYRING_SERVICE, self.KEY_MASTER)
            except:
                pass

            # Delete cache files
            import shutil
            if self.cache_dir.exists():
                shutil.rmtree(self.cache_dir)

            logger.warning("All encryption keys wiped")
            return True

        except Exception as e:
            logger.error(f"Failed to wipe keys: {e}")
            return False
