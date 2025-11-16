"""
Security module for HIPAA compliance
"""

from .hipaa_compliance import (
    secure_delete,
    clear_directory,
    wipe_string,
    clear_sensitive_data,
    detect_phi,
    mask_phi,
    AuditLogger,
    SimpleEncryption,
    get_cache_size,
    clear_cache,
)

__all__ = [
    'secure_delete',
    'clear_directory',
    'wipe_string',
    'clear_sensitive_data',
    'detect_phi',
    'mask_phi',
    'AuditLogger',
    'SimpleEncryption',
    'get_cache_size',
    'clear_cache',
]
