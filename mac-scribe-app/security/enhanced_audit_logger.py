"""
Enhanced Audit Logger with Tamper-Evident Log Chain
Addresses CRITICAL-002: Comprehensive Audit Logging
"""

import json
import hashlib
from pathlib import Path
from datetime import datetime, timedelta
from typing import Optional, Dict, List
import logging

logger = logging.getLogger(__name__)


class EnhancedAuditLogger:
    """
    Enhanced audit logger with:
    - Tamper-evident log chain (each entry hashes previous)
    - Comprehensive event tracking
    - User identification (no more "unknown")
    - Log integrity verification
    """

    # Comprehensive event types
    EVENTS = {
        # Authentication
        "LOGIN_SUCCESS", "LOGIN_FAILED", "LOGOUT", "SESSION_TIMEOUT",
        "SESSION_LOCKED", "SESSION_UNLOCKED",

        # File Operations
        "FILE_EXPORT", "FILE_SAVE", "FILE_DELETE", "FILE_ENCRYPT",

        # Data Access
        "VIEW_TRANSCRIPTION", "VIEW_NOTE", "COPY_DATA",  "PROCESS_START",
        "PROCESS_COMPLETE",

        # Configuration
        "CONFIG_CHANGE", "PROMPT_CHANGE", "DICTIONARY_UPDATE",

        # System
        "APP_START", "APP_CLOSE", "APP_CRASH", "MODEL_LOAD",
        "MODEL_VERIFY", "TRANSCRIPTION_COMPLETE",

        # Security
        "PHI_DETECTED", "INTEGRITY_CHECK", "ENCRYPTION_OPERATION",
        "AUTHENTICATION_REQUIRED"
    }

    def __init__(self, log_dir: Optional[Path] = None):
        """
        Initialize enhanced audit logger

        Args:
            log_dir: Directory for audit logs
        """
        if log_dir is None:
            log_dir = Path.home() / ".cache" / "mac-scribe-app" / "audit_v2"

        self.log_dir = Path(log_dir)
        self.log_dir.mkdir(parents=True, exist_ok=True)

        # Monthly log files
        self.current_month = datetime.now().strftime("%Y-%m")
        self.log_file = self.log_dir / f"audit_{self.current_month}.jsonl"

        # Last entry hash for chain
        self.last_entry_hash = self._get_last_entry_hash()

    def _get_last_entry_hash(self) -> str:
        """Get hash of last entry in log file for chain"""
        try:
            if self.log_file.exists():
                with open(self.log_file, 'r') as f:
                    lines = f.readlines()
                    if lines:
                        last_entry = json.loads(lines[-1])
                        return last_entry.get("entry_hash", "")
        except:
            pass
        return "0" * 64  # Genesis hash

    def _hash_entry(self, entry: Dict) -> str:
        """Calculate hash of entry"""
        # Create deterministic string from entry
        data = json.dumps(entry, sort_keys=True)
        return hashlib.sha256(data.encode()).hexdigest()

    def log_event(
        self,
        action: str,
        user: str,  # REQUIRED - no more "unknown" default
        success: bool = True,
        details: Optional[Dict] = None,
        phi_detected: bool = False
    ) -> None:
        """
        Log an audit event with tamper-evident chain

        Args:
            action: Action performed (must be from EVENTS)
            user: User identifier (REQUIRED)
            success: Whether action succeeded
            details: Additional details (no PHI!)
            phi_detected: Whether PHI patterns were detected
        """
        try:
            # Validate action
            if action not in self.EVENTS:
                logger.warning(f"Unknown event type: {action}")

            # Require user (no "unknown")
            if not user or user == "unknown":
                logger.error("log_event called without valid user - rejecting")
                return

            # Check if we need a new log file for new month
            current_month = datetime.now().strftime("%Y-%m")
            if current_month != self.current_month:
                self.current_month = current_month
                self.log_file = self.log_dir / f"audit_{self.current_month}.jsonl"
                self.last_entry_hash = self._get_last_entry_hash()

            # Create entry
            entry = {
                "timestamp": datetime.now().isoformat(),
                "action": action,
                "user": user,
                "success": success,
                "phi_detected": phi_detected,
                "details": details or {},
                "previous_hash": self.last_entry_hash  # Chain to previous entry
            }

            # Calculate hash of this entry
            entry_hash = self._hash_entry(entry)
            entry["entry_hash"] = entry_hash

            # Write to log
            with open(self.log_file, 'a') as f:
                json.dump(entry, f)
                f.write('\n')

            # Update last hash for next entry
            self.last_entry_hash = entry_hash

            # Set restrictive permissions
            import os
            os.chmod(self.log_file, 0o600)

        except Exception as e:
            logger.error(f"Failed to write audit log: {e}")

    def verify_log_integrity(self, log_file: Optional[Path] = None) -> tuple[bool, List[str]]:
        """
        Verify integrity of log file chain

        Args:
            log_file: Log file to verify (default: current)

        Returns:
            Tuple of (is_valid, list_of_errors)
        """
        if log_file is None:
            log_file = self.log_file

        errors = []
        expected_hash = "0" * 64  # Genesis hash

        try:
            with open(log_file, 'r') as f:
                for line_num, line in enumerate(f, 1):
                    try:
                        entry = json.loads(line)

                        # Verify chain
                        if entry.get("previous_hash") != expected_hash:
                            errors.append(
                                f"Line {line_num}: Chain broken - "
                                f"expected {expected_hash}, got {entry.get('previous_hash')}"
                            )

                        # Verify entry hash
                        stored_hash = entry.pop("entry_hash", None)
                        calculated_hash = self._hash_entry(entry)

                        if stored_hash != calculated_hash:
                            errors.append(
                                f"Line {line_num}: Entry tampered - "
                                f"hash mismatch"
                            )

                        # Update expected hash
                        expected_hash = stored_hash or calculated_hash

                    except json.JSONDecodeError:
                        errors.append(f"Line {line_num}: Invalid JSON")

        except Exception as e:
            errors.append(f"Error reading log file: {e}")

        return len(errors) == 0, errors

    def get_events(
        self,
        days: int = 7,
        action: Optional[str] = None,
        user: Optional[str] = None
    ) -> List[Dict]:
        """
        Retrieve audit events

        Args:
            days: Number of days to retrieve
            action: Filter by action type
            user: Filter by user

        Returns:
            List of audit events
        """
        events = []
        cutoff_date = datetime.now() - timedelta(days=days)

        try:
            for log_file in sorted(self.log_dir.glob("audit_*.jsonl")):
                with open(log_file, 'r') as f:
                    for line in f:
                        try:
                            event = json.loads(line)
                            event_date = datetime.fromisoformat(event["timestamp"])

                            if event_date >= cutoff_date:
                                # Apply filters
                                if action and event["action"] != action:
                                    continue
                                if user and event["user"] != user:
                                    continue

                                events.append(event)
                        except:
                            continue

        except Exception as e:
            logger.error(f"Failed to read audit logs: {e}")

        return events

    def get_user_activity(self, user: str, days: int = 30) -> Dict:
        """
        Get activity summary for user

        Args:
            user: Username
            days: Number of days to analyze

        Returns:
            Activity summary
        """
        events = self.get_events(days=days, user=user)

        summary = {
            "user": user,
            "total_events": len(events),
            "events_by_type": {},
            "phi_detections": 0,
            "failed_operations": 0,
            "last_activity": None
        }

        for event in events:
            # Count by type
            action = event["action"]
            summary["events_by_type"][action] = summary["events_by_type"].get(action, 0) + 1

            # Count PHI detections
            if event.get("phi_detected"):
                summary["phi_detections"] += 1

            # Count failures
            if not event.get("success"):
                summary["failed_operations"] += 1

            # Track last activity
            if not summary["last_activity"] or event["timestamp"] > summary["last_activity"]:
                summary["last_activity"] = event["timestamp"]

        return summary

    def export_audit_report(
        self,
        output_file: Path,
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None
    ) -> bool:
        """
        Export audit report for compliance review

        Args:
            output_file: Output file path
            start_date: Start date (optional)
            end_date: End date (optional)

        Returns:
            True if successful
        """
        try:
            end_date = end_date or datetime.now()
            start_date = start_date or (end_date - timedelta(days=30))

            events = []
            for log_file in sorted(self.log_dir.glob("audit_*.jsonl")):
                with open(log_file, 'r') as f:
                    for line in f:
                        try:
                            event = json.loads(line)
                            event_date = datetime.fromisoformat(event["timestamp"])

                            if start_date <= event_date <= end_date:
                                events.append(event)
                        except:
                            continue

            # Write report
            report = {
                "report_generated": datetime.now().isoformat(),
                "period_start": start_date.isoformat(),
                "period_end": end_date.isoformat(),
                "total_events": len(events),
                "events": events
            }

            with open(output_file, 'w') as f:
                json.dump(report, f, indent=2)

            logger.info(f"Audit report exported to {output_file}")
            return True

        except Exception as e:
            logger.error(f"Failed to export audit report: {e}")
            return False
