"""
Session Management System
Addresses CRITICAL-006: Session Management

Features:
- Idle timeout detection
- Automatic session locking
- Screen lock integration
- Periodic re-authentication
"""

from datetime import datetime, timedelta
from typing import Optional, Callable
import logging

logger = logging.getLogger(__name__)


class SessionManager:
    """
    Manages user sessions with automatic timeout and locking

    Features:
    - 5-minute idle timeout (configurable)
    - 4-hour session expiration
    - Screen lock detection
    - Activity tracking
    """

    def __init__(
        self,
        idle_timeout_minutes: int = 5,
        session_timeout_minutes: int = 240  # 4 hours
    ):
        """
        Initialize session manager

        Args:
            idle_timeout_minutes: Idle timeout in minutes (default: 5)
            session_timeout_minutes: Session expiration in minutes (default: 240/4hrs)
        """
        self.idle_timeout = timedelta(minutes=idle_timeout_minutes)
        self.session_timeout = timedelta(minutes=session_timeout_minutes)

        self.session_start: Optional[datetime] = None
        self.last_activity: Optional[datetime] = None
        self.is_locked = False
        self.lock_reason: Optional[str] = None

        # Callbacks
        self.on_idle_timeout: Optional[Callable] = None
        self.on_session_expired: Optional[Callable] = None
        self.on_lock: Optional[Callable] = None
        self.on_unlock: Optional[Callable] = None

    def start_session(self):
        """Start new session"""
        self.session_start = datetime.now()
        self.last_activity = datetime.now()
        self.is_locked = False
        self.lock_reason = None
        logger.info("Session started")

    def update_activity(self):
        """Update last activity timestamp"""
        if not self.is_locked:
            self.last_activity = datetime.now()

    def check_idle(self) -> bool:
        """
        Check if session is idle

        Returns:
            True if idle timeout exceeded
        """
        if self.is_locked or not self.last_activity:
            return False

        idle_time = datetime.now() - self.last_activity
        return idle_time >= self.idle_timeout

    def check_expired(self) -> bool:
        """
        Check if session has expired

        Returns:
            True if session timeout exceeded
        """
        if not self.session_start:
            return False

        age = datetime.now() - self.session_start
        return age >= self.session_timeout

    def get_idle_time(self) -> timedelta:
        """Get current idle time"""
        if not self.last_activity:
            return timedelta(0)
        return datetime.now() - self.last_activity

    def get_time_until_idle_timeout(self) -> timedelta:
        """Get time remaining until idle timeout"""
        idle_time = self.get_idle_time()
        remaining = self.idle_timeout - idle_time
        return max(remaining, timedelta(0))

    def get_session_age(self) -> timedelta:
        """Get current session age"""
        if not self.session_start:
            return timedelta(0)
        return datetime.now() - self.session_start

    def get_time_until_session_expiration(self) -> timedelta:
        """Get time remaining until session expiration"""
        age = self.get_session_age()
        remaining = self.session_timeout - age
        return max(remaining, timedelta(0))

    def lock_session(self, reason: str = "manual"):
        """
        Lock the session

        Args:
            reason: Reason for lock (idle, screen_lock, manual, etc.)
        """
        if not self.is_locked:
            self.is_locked = True
            self.lock_reason = reason
            logger.info(f"Session locked: {reason}")

            if self.on_lock:
                self.on_lock(reason)

    def unlock_session(self) -> bool:
        """
        Unlock the session

        Returns:
            True if unlocked successfully
        """
        if self.is_locked:
            self.is_locked = False
            self.last_activity = datetime.now()
            logger.info("Session unlocked")

            if self.on_unlock:
                self.on_unlock()

            return True
        return False

    def end_session(self):
        """End the session"""
        self.session_start = None
        self.last_activity = None
        self.is_locked = False
        logger.info("Session ended")

    def requires_reauthentication(self) -> tuple[bool, str]:
        """
        Check if re-authentication is required

        Returns:
            Tuple of (requires_auth, reason)
        """
        if self.check_expired():
            return True, "Session expired"

        if self.check_idle():
            return True, "Session idle timeout"

        return False, ""

    def handle_screen_lock(self):
        """Handle macOS screen lock event"""
        self.lock_session("screen_lock")

    def handle_screen_unlock(self):
        """Handle macOS screen unlock event (requires re-auth)"""
        # Don't automatically unlock - require re-authentication
        logger.info("Screen unlocked - re-authentication required")

    def extend_session(self):
        """Extend session (reset activity)"""
        self.update_activity()
        logger.info("Session extended")


class IdleDetector:
    """
    Detects user idle time

    Monitors user activity to detect idle state
    """

    def __init__(self):
        self.last_mouse_pos: Optional[tuple] = None
        self.last_keyboard_time: Optional[datetime] = None

    def update_mouse_activity(self, x: int, y: int):
        """Update mouse position"""
        if self.last_mouse_pos != (x, y):
            self.last_mouse_pos = (x, y)
            self.last_keyboard_time = datetime.now()

    def update_keyboard_activity(self):
        """Update keyboard activity"""
        self.last_keyboard_time = datetime.now()

    def get_idle_time(self) -> timedelta:
        """Get current idle time"""
        if not self.last_keyboard_time:
            return timedelta(0)
        return datetime.now() - self.last_keyboard_time
