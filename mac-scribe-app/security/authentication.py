"""
Authentication System
Handles user authentication with Touch ID and password fallback
"""

import os
import secrets
import keyring
from datetime import datetime, timedelta
from typing import Optional
import logging

logger = logging.getLogger(__name__)


class Session:
    """User session"""

    def __init__(self, user_id: str, session_token: str):
        self.user_id = user_id
        self.session_token = session_token
        self.created_at = datetime.now()
        self.last_activity = datetime.now()
        self.is_locked = False

    def is_valid(self, timeout_minutes: int = 240) -> bool:
        """Check if session is still valid (4 hours default)"""
        if self.is_locked:
            return False

        age = datetime.now() - self.created_at
        return age < timedelta(minutes=timeout_minutes)

    def is_idle(self, idle_timeout_minutes: int = 5) -> bool:
        """Check if session is idle (5 minutes default)"""
        idle_time = datetime.now() - self.last_activity
        return idle_time >= timedelta(minutes=idle_timeout_minutes)

    def update_activity(self):
        """Update last activity timestamp"""
        self.last_activity = datetime.now()

    def lock(self):
        """Lock the session"""
        self.is_locked = True
        logger.info("Session locked")

    def unlock(self):
        """Unlock the session"""
        self.is_locked = False
        self.update_activity()
        logger.info("Session unlocked")


class AuthenticationManager:
    """Manages authentication and sessions"""

    def __init__(self):
        self.keyring_service = "com.physicianpromptengineering.scribe"
        self.current_session: Optional[Session] = None

    def create_session(self, user_id: str) -> Session:
        """
        Create new session for user

        Args:
            user_id: User ID

        Returns:
            Session object
        """
        session_token = secrets.token_urlsafe(32)
        session = Session(user_id, session_token)
        self.current_session = session
        logger.info(f"Session created for user: {user_id}")
        return session

    def get_session(self) -> Optional[Session]:
        """Get current session"""
        return self.current_session

    def destroy_session(self):
        """Destroy current session"""
        if self.current_session:
            logger.info("Session destroyed")
            self.current_session = None

    def store_credentials_in_keychain(
        self,
        username: str,
        password: str
    ) -> bool:
        """
        Store credentials in macOS Keychain

        Args:
            username: Username
            password: Password

        Returns:
            True if successful
        """
        try:
            keyring.set_password(self.keyring_service, username, password)
            logger.info(f"Credentials stored in Keychain for: {username}")
            return True
        except Exception as e:
            logger.error(f"Error storing credentials in Keychain: {e}")
            return False

    def get_credentials_from_keychain(self, username: str) -> Optional[str]:
        """
        Get credentials from macOS Keychain

        Args:
            username: Username

        Returns:
            Password if found, None otherwise
        """
        try:
            password = keyring.get_password(self.keyring_service, username)
            if password:
                logger.info(f"Retrieved credentials from Keychain for: {username}")
            return password
        except Exception as e:
            logger.error(f"Error retrieving credentials from Keychain: {e}")
            return None

    def delete_credentials_from_keychain(self, username: str) -> bool:
        """
        Delete credentials from macOS Keychain

        Args:
            username: Username

        Returns:
            True if successful
        """
        try:
            keyring.delete_password(self.keyring_service, username)
            logger.info(f"Deleted credentials from Keychain for: {username}")
            return True
        except Exception as e:
            logger.error(f"Error deleting credentials from Keychain: {e}")
            return False

    def authenticate_with_touch_id(self, username: str) -> bool:
        """
        Attempt Touch ID authentication (macOS-specific)

        This is a placeholder for macOS LocalAuthentication framework
        integration, which requires PyObjC bindings.

        For now, we fall back to Keychain password retrieval.

        Args:
            username: Username

        Returns:
            True if successful
        """
        try:
            # In a full implementation, this would use PyObjC to call:
            # LAContext.canEvaluatePolicy() and evaluatePolicy()
            # For now, we use Keychain as proof that credentials are valid

            password = self.get_credentials_from_keychain(username)
            if password:
                logger.info(f"Touch ID authentication successful (via Keychain): {username}")
                return True

            logger.warning(f"Touch ID authentication failed (no Keychain entry): {username}")
            return False

        except Exception as e:
            logger.error(f"Touch ID authentication error: {e}")
            return False

    def requires_reauthentication(self, session: Session) -> bool:
        """
        Check if session requires re-authentication

        Args:
            session: Session to check

        Returns:
            True if re-authentication required
        """
        if not session.is_valid():
            logger.info("Session expired - re-authentication required")
            return True

        if session.is_idle():
            logger.info("Session idle - re-authentication required")
            return True

        return False


def validate_password_strength(password: str) -> tuple[bool, str]:
    """
    Validate password meets complexity requirements

    Requirements:
    - Minimum 12 characters
    - At least one uppercase letter
    - At least one lowercase letter
    - At least one number
    - At least one special character

    Args:
        password: Password to validate

    Returns:
        Tuple of (is_valid, error_message)
    """
    if len(password) < 12:
        return False, "Password must be at least 12 characters long"

    if not any(c.isupper() for c in password):
        return False, "Password must contain at least one uppercase letter"

    if not any(c.islower() for c in password):
        return False, "Password must contain at least one lowercase letter"

    if not any(c.isdigit() for c in password):
        return False, "Password must contain at least one number"

    special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    if not any(c in special_chars for c in password):
        return False, "Password must contain at least one special character"

    # Check against common passwords
    common_passwords = [
        "password", "Password123!", "123456", "qwerty",
        "letmein", "welcome", "monkey", "dragon"
    ]
    if password.lower() in [p.lower() for p in common_passwords]:
        return False, "Password is too common - please choose a stronger password"

    return True, ""


def calculate_password_strength(password: str) -> int:
    """
    Calculate password strength score (0-100)

    Args:
        password: Password to evaluate

    Returns:
        Strength score (0-100)
    """
    score = 0

    # Length bonus
    if len(password) >= 12:
        score += 20
    if len(password) >= 16:
        score += 20
    if len(password) >= 20:
        score += 10

    # Character variety
    if any(c.isupper() for c in password):
        score += 10
    if any(c.islower() for c in password):
        score += 10
    if any(c.isdigit() for c in password):
        score += 10
    if any(not c.isalnum() for c in password):
        score += 10

    # Unique characters
    unique_ratio = len(set(password)) / len(password) if password else 0
    score += int(unique_ratio * 10)

    return min(score, 100)
