"""
User Management System
Handles user profiles, roles, and authentication state
"""

import os
import json
import hashlib
import secrets
from pathlib import Path
from typing import Optional, Dict, List
from datetime import datetime
import logging
import getpass

from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend

logger = logging.getLogger(__name__)


class UserRole:
    """User roles for access control"""
    PHYSICIAN = "physician"
    RESIDENT = "resident"
    ADMIN = "admin"
    STUDENT = "student"


class User:
    """User profile"""

    def __init__(
        self,
        user_id: str,
        username: str,
        role: str = UserRole.PHYSICIAN,
        created_at: Optional[str] = None
    ):
        self.user_id = user_id
        self.username = username
        self.role = role
        self.created_at = created_at or datetime.now().isoformat()
        self.last_login: Optional[str] = None
        self.login_count: int = 0

    def to_dict(self) -> Dict:
        """Convert to dictionary"""
        return {
            "user_id": self.user_id,
            "username": self.username,
            "role": self.role,
            "created_at": self.created_at,
            "last_login": self.last_login,
            "login_count": self.login_count
        }

    @classmethod
    def from_dict(cls, data: Dict) -> 'User':
        """Create from dictionary"""
        user = cls(
            user_id=data["user_id"],
            username=data["username"],
            role=data.get("role", UserRole.PHYSICIAN),
            created_at=data.get("created_at")
        )
        user.last_login = data.get("last_login")
        user.login_count = data.get("login_count", 0)
        return user


class UserManager:
    """Manages user profiles and authentication"""

    def __init__(self, config_dir: Optional[Path] = None):
        """
        Initialize user manager

        Args:
            config_dir: Directory for user configuration
        """
        if config_dir is None:
            config_dir = Path.home() / ".cache" / "mac-scribe-app" / "users"

        self.config_dir = Path(config_dir)
        self.config_dir.mkdir(parents=True, exist_ok=True)

        self.users_file = self.config_dir / "users.json"
        self.credentials_file = self.config_dir / "credentials.json"

        # Set restrictive permissions
        try:
            os.chmod(self.config_dir, 0o700)  # Owner only
        except:
            pass

        self.users: Dict[str, User] = {}
        self.credentials: Dict[str, Dict] = {}  # user_id -> {salt, hash}

        self._load_users()
        self._load_credentials()

        # Current authenticated user
        self.current_user: Optional[User] = None

    def _load_users(self):
        """Load users from file"""
        try:
            if self.users_file.exists():
                with open(self.users_file, 'r') as f:
                    data = json.load(f)
                    for user_data in data.get("users", []):
                        user = User.from_dict(user_data)
                        self.users[user.user_id] = user
                logger.info(f"Loaded {len(self.users)} users")
        except Exception as e:
            logger.error(f"Error loading users: {e}")

    def _save_users(self):
        """Save users to file"""
        try:
            data = {
                "users": [user.to_dict() for user in self.users.values()]
            }
            with open(self.users_file, 'w') as f:
                json.dump(data, f, indent=2)

            # Set restrictive permissions
            os.chmod(self.users_file, 0o600)
            logger.info("Users saved")
        except Exception as e:
            logger.error(f"Error saving users: {e}")

    def _load_credentials(self):
        """Load credentials from file"""
        try:
            if self.credentials_file.exists():
                with open(self.credentials_file, 'r') as f:
                    self.credentials = json.load(f)
                logger.info("Credentials loaded")
        except Exception as e:
            logger.error(f"Error loading credentials: {e}")

    def _save_credentials(self):
        """Save credentials to file"""
        try:
            with open(self.credentials_file, 'w') as f:
                json.dump(self.credentials, f, indent=2)

            # Set restrictive permissions
            os.chmod(self.credentials_file, 0o600)
            logger.info("Credentials saved")
        except Exception as e:
            logger.error(f"Error saving credentials: {e}")

    def _hash_password(self, password: str, salt: bytes) -> str:
        """Hash password with salt using PBKDF2"""
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
            backend=default_backend()
        )
        key = kdf.derive(password.encode('utf-8'))
        return key.hex()

    def create_user(
        self,
        username: str,
        password: str,
        role: str = UserRole.PHYSICIAN
    ) -> Optional[User]:
        """
        Create new user

        Args:
            username: Username
            password: Password
            role: User role

        Returns:
            User object or None if failed
        """
        try:
            # Check if username exists
            for user in self.users.values():
                if user.username == username:
                    logger.error(f"Username already exists: {username}")
                    return None

            # Generate user ID
            user_id = hashlib.sha256(
                (username + secrets.token_hex(16)).encode()
            ).hexdigest()[:16]

            # Create user
            user = User(user_id=user_id, username=username, role=role)
            self.users[user_id] = user

            # Store credentials
            salt = secrets.token_bytes(16)
            password_hash = self._hash_password(password, salt)
            self.credentials[user_id] = {
                "salt": salt.hex(),
                "hash": password_hash
            }

            # Save
            self._save_users()
            self._save_credentials()

            logger.info(f"Created user: {username} ({role})")
            return user

        except Exception as e:
            logger.error(f"Error creating user: {e}")
            return None

    def authenticate(self, username: str, password: str) -> Optional[User]:
        """
        Authenticate user with username and password

        Args:
            username: Username
            password: Password

        Returns:
            User object if successful, None otherwise
        """
        try:
            # Find user by username
            user = None
            for u in self.users.values():
                if u.username == username:
                    user = u
                    break

            if not user:
                logger.warning(f"User not found: {username}")
                return None

            # Verify password
            creds = self.credentials.get(user.user_id)
            if not creds:
                logger.error(f"No credentials for user: {username}")
                return None

            salt = bytes.fromhex(creds["salt"])
            expected_hash = creds["hash"]
            actual_hash = self._hash_password(password, salt)

            if actual_hash != expected_hash:
                logger.warning(f"Invalid password for user: {username}")
                return None

            # Update login info
            user.last_login = datetime.now().isoformat()
            user.login_count += 1
            self._save_users()

            # Set as current user
            self.current_user = user

            logger.info(f"User authenticated: {username}")
            return user

        except Exception as e:
            logger.error(f"Authentication error: {e}")
            return None

    def change_password(
        self,
        user_id: str,
        old_password: str,
        new_password: str
    ) -> bool:
        """
        Change user password

        Args:
            user_id: User ID
            old_password: Current password
            new_password: New password

        Returns:
            True if successful
        """
        try:
            # Verify user exists
            user = self.users.get(user_id)
            if not user:
                return False

            # Verify old password
            creds = self.credentials.get(user_id)
            if not creds:
                return False

            salt = bytes.fromhex(creds["salt"])
            expected_hash = creds["hash"]
            actual_hash = self._hash_password(old_password, salt)

            if actual_hash != expected_hash:
                logger.warning("Invalid old password")
                return False

            # Set new password
            new_salt = secrets.token_bytes(16)
            new_hash = self._hash_password(new_password, new_salt)
            self.credentials[user_id] = {
                "salt": new_salt.hex(),
                "hash": new_hash
            }

            self._save_credentials()
            logger.info(f"Password changed for user: {user.username}")
            return True

        except Exception as e:
            logger.error(f"Error changing password: {e}")
            return False

    def delete_user(self, user_id: str) -> bool:
        """
        Delete user

        Args:
            user_id: User ID

        Returns:
            True if successful
        """
        try:
            if user_id in self.users:
                username = self.users[user_id].username
                del self.users[user_id]
                self._save_users()

                if user_id in self.credentials:
                    del self.credentials[user_id]
                    self._save_credentials()

                logger.info(f"Deleted user: {username}")
                return True
            return False
        except Exception as e:
            logger.error(f"Error deleting user: {e}")
            return False

    def get_user(self, user_id: str) -> Optional[User]:
        """Get user by ID"""
        return self.users.get(user_id)

    def get_user_by_username(self, username: str) -> Optional[User]:
        """Get user by username"""
        for user in self.users.values():
            if user.username == username:
                return user
        return None

    def list_users(self) -> List[User]:
        """Get all users"""
        return list(self.users.values())

    def get_current_user(self) -> Optional[User]:
        """Get currently authenticated user"""
        return self.current_user

    def logout(self):
        """Logout current user"""
        if self.current_user:
            logger.info(f"User logged out: {self.current_user.username}")
            self.current_user = None

    def get_or_create_default_user(self) -> User:
        """
        Get or create default user for initial setup
        Uses macOS username
        """
        try:
            # Get macOS username
            mac_username = getpass.getuser()

            # Check if user exists
            user = self.get_user_by_username(mac_username)
            if user:
                return user

            # Create default user with default password
            # User should change this on first login
            default_password = "ChangeMe123!"
            user = self.create_user(
                username=mac_username,
                password=default_password,
                role=UserRole.PHYSICIAN
            )

            if user:
                logger.info(f"Created default user: {mac_username}")
                logger.warning("Default password set - user should change immediately")

            return user

        except Exception as e:
            logger.error(f"Error creating default user: {e}")
            return None
