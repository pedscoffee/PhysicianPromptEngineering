"""
Data Inventory and Retention System
Addresses CRITICAL-004: Data Retention and Disposal

Tracks all PHI files and enforces retention policies
"""

import json
import hashlib
from pathlib import Path
from datetime import datetime, timedelta
from typing import Optional, List, Dict
import logging

from security.hipaa_compliance import secure_delete

logger = logging.getLogger(__name__)


class FileRecord:
    """Record of a PHI file"""

    def __init__(
        self,
        file_path: str,
        file_type: str,  # transcription, note, export, etc.
        created_at: Optional[str] = None,
        file_hash: Optional[str] = None
    ):
        self.file_path = file_path
        self.file_type = file_type
        self.created_at = created_at or datetime.now().isoformat()
        self.last_accessed: Optional[str] = None
        self.file_hash = file_hash or self._calculate_hash()
        self.retention_days: int = 30  # Default retention
        self.is_encrypted = False
        self.scheduled_deletion: Optional[str] = None

    def _calculate_hash(self) -> str:
        """Calculate SHA256 hash of file"""
        try:
            with open(self.file_path, 'rb') as f:
                return hashlib.sha256(f.read()).hexdigest()
        except:
            return ""

    def verify_integrity(self) -> bool:
        """Verify file hasn't been tampered with"""
        current_hash = self._calculate_hash()
        return current_hash == self.file_hash

    def should_delete(self) -> bool:
        """Check if file should be deleted based on retention policy"""
        created = datetime.fromisoformat(self.created_at)
        age = datetime.now() - created
        return age.days >= self.retention_days

    def to_dict(self) -> Dict:
        """Convert to dictionary"""
        return {
            "file_path": self.file_path,
            "file_type": self.file_type,
            "created_at": self.created_at,
            "last_accessed": self.last_accessed,
            "file_hash": self.file_hash,
            "retention_days": self.retention_days,
            "is_encrypted": self.is_encrypted,
            "scheduled_deletion": self.scheduled_deletion
        }

    @classmethod
    def from_dict(cls, data: Dict) -> 'FileRecord':
        """Create from dictionary"""
        record = cls(
            file_path=data["file_path"],
            file_type=data["file_type"],
            created_at=data.get("created_at")
        )
        record.last_accessed = data.get("last_accessed")
        record.file_hash = data.get("file_hash", "")
        record.retention_days = data.get("retention_days", 30)
        record.is_encrypted = data.get("is_encrypted", False)
        record.scheduled_deletion = data.get("scheduled_deletion")
        return record


class DataInventory:
    """
    Maintains inventory of all PHI files

    Features:
    - Track all created files
    - Enforce retention policies
    - Automatic secure deletion
    - Integrity verification
    """

    def __init__(self, inventory_dir: Optional[Path] = None):
        """
        Initialize data inventory

        Args:
            inventory_dir: Directory for inventory database
        """
        if inventory_dir is None:
            inventory_dir = Path.home() / ".cache" / "mac-scribe-app" / "inventory"

        self.inventory_dir = Path(inventory_dir)
        self.inventory_dir.mkdir(parents=True, exist_ok=True)

        self.inventory_file = self.inventory_dir / "file_inventory.json"
        self.records: Dict[str, FileRecord] = {}

        self._load_inventory()

    def _load_inventory(self):
        """Load inventory from file"""
        try:
            if self.inventory_file.exists():
                with open(self.inventory_file, 'r') as f:
                    data = json.load(f)
                    for record_data in data.get("records", []):
                        record = FileRecord.from_dict(record_data)
                        self.records[record.file_path] = record
                logger.info(f"Loaded {len(self.records)} file records")
        except Exception as e:
            logger.error(f"Error loading inventory: {e}")

    def _save_inventory(self):
        """Save inventory to file"""
        try:
            data = {
                "last_updated": datetime.now().isoformat(),
                "records": [record.to_dict() for record in self.records.values()]
            }
            with open(self.inventory_file, 'w') as f:
                json.dump(data, f, indent=2)

            # Restrictive permissions
            import os
            os.chmod(self.inventory_file, 0o600)

            logger.info("Inventory saved")
        except Exception as e:
            logger.error(f"Error saving inventory: {e}")

    def register_file(
        self,
        file_path: str,
        file_type: str,
        retention_days: int = 30,
        is_encrypted: bool = True
    ) -> FileRecord:
        """
        Register a new file in inventory

        Args:
            file_path: Path to file
            file_type: Type of file
            retention_days: Days to retain (default: 30)
            is_encrypted: Whether file is encrypted

        Returns:
            FileRecord
        """
        record = FileRecord(file_path, file_type)
        record.retention_days = retention_days
        record.is_encrypted = is_encrypted

        # Calculate scheduled deletion
        created = datetime.fromisoformat(record.created_at)
        deletion_date = created + timedelta(days=retention_days)
        record.scheduled_deletion = deletion_date.isoformat()

        self.records[file_path] = record
        self._save_inventory()

        logger.info(f"Registered file: {file_path} (delete after {retention_days} days)")
        return record

    def access_file(self, file_path: str):
        """Record file access"""
        if file_path in self.records:
            self.records[file_path].last_accessed = datetime.now().isoformat()
            self._save_inventory()

    def unregister_file(self, file_path: str):
        """Remove file from inventory"""
        if file_path in self.records:
            del self.records[file_path]
            self._save_inventory()
            logger.info(f"Unregistered file: {file_path}")

    def get_files_due_for_deletion(self) -> List[FileRecord]:
        """Get files that should be deleted"""
        due_files = []
        for record in self.records.values():
            if record.should_delete():
                # Verify file still exists
                if Path(record.file_path).exists():
                    due_files.append(record)
                else:
                    # File already deleted, remove from inventory
                    self.unregister_file(record.file_path)

        return due_files

    def delete_expired_files(self, dry_run: bool = False) -> Dict[str, int]:
        """
        Delete files past retention period

        Args:
            dry_run: If True, don't actually delete

        Returns:
            Statistics dict
        """
        due_files = self.get_files_due_for_deletion()

        stats = {
            "files_found": len(due_files),
            "files_deleted": 0,
            "errors": 0
        }

        for record in due_files:
            try:
                if dry_run:
                    logger.info(f"Would delete: {record.file_path}")
                else:
                    # Securely delete file
                    if secure_delete(record.file_path):
                        self.unregister_file(record.file_path)
                        stats["files_deleted"] += 1
                        logger.info(f"Deleted expired file: {record.file_path}")
                    else:
                        stats["errors"] += 1
                        logger.error(f"Failed to delete: {record.file_path}")

            except Exception as e:
                logger.error(f"Error deleting {record.file_path}: {e}")
                stats["errors"] += 1

        return stats

    def verify_all_files(self) -> Dict[str, List[str]]:
        """
        Verify integrity of all tracked files

        Returns:
            Dict with 'valid', 'tampered', 'missing' lists
        """
        results = {
            "valid": [],
            "tampered": [],
            "missing": []
        }

        for record in self.records.values():
            if not Path(record.file_path).exists():
                results["missing"].append(record.file_path)
            elif record.verify_integrity():
                results["valid"].append(record.file_path)
            else:
                results["tampered"].append(record.file_path)
                logger.warning(f"File tampered: {record.file_path}")

        return results

    def get_statistics(self) -> Dict:
        """Get inventory statistics"""
        total_files = len(self.records)
        encrypted_files = sum(1 for r in self.records.values() if r.is_encrypted)
        due_for_deletion = len(self.get_files_due_for_deletion())

        # Files by type
        by_type = {}
        for record in self.records.values():
            by_type[record.file_type] = by_type.get(record.file_type, 0) + 1

        return {
            "total_files": total_files,
            "encrypted_files": encrypted_files,
            "unencrypted_files": total_files - encrypted_files,
            "due_for_deletion": due_for_deletion,
            "by_type": by_type
        }

    def export_inventory_report(self, output_file: Path) -> bool:
        """Export inventory report"""
        try:
            report = {
                "generated": datetime.now().isoformat(),
                "statistics": self.get_statistics(),
                "files": [r.to_dict() for r in self.records.values()]
            }

            with open(output_file, 'w') as f:
                json.dump(report, f, indent=2)

            logger.info(f"Inventory report exported to {output_file}")
            return True

        except Exception as e:
            logger.error(f"Failed to export inventory report: {e}")
            return False
