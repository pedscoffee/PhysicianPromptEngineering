# HIPAA Compliance Guide
## Physician Prompt Engineering Scribe

**Version**: 2.0
**Last Updated**: January 15, 2025
**Status**: Enhanced with comprehensive security features

---

## ⚠️ CRITICAL DISCLAIMER

**This application is designed for educational purposes and to assist in clinical documentation. However:**

- ✅ The application provides tools for HIPAA-compliant operation
- ⚠️ **YOU** are responsible for ensuring compliance with your institution's policies
- ⚠️ **YOU** must review all AI-generated content before clinical use
- ⚠️ **YOU** are the final authority on all documentation
- ⚠️ **YOU** must follow your institution's HIPAA Security and Privacy Rules

**No software can guarantee HIPAA compliance alone. Compliance requires proper policies, training, and operational procedures.**

---

## 🔒 What This App Does for Security

### ✅ Implemented HIPAA Safeguards

1. **Secure File Deletion (Critical)**
   - Temporary audio files are overwritten 3 times before deletion (DoD standard)
   - Prevents forensic recovery of recorded conversations
   - Automatic cleanup after transcription

2. **Memory Protection**
   - Session data is explicitly wiped from RAM on app close
   - Garbage collection forced to clear sensitive strings
   - All UI widgets cleared before shutdown

3. **PHI Detection & Warning**
   - Automatic detection of common PHI patterns:
     - Social Security Numbers
     - Dates of Birth
     - Medical Record Numbers (MRNs)
     - Phone numbers
     - Email addresses
     - Physical addresses
     - Specific dates
   - Warning dialog before processing PHI-containing text
   - User must explicitly acknowledge to continue

4. **Clipboard Auto-Clear**
   - Clipboard automatically cleared 5 minutes after copy
   - Prevents accidental PHI exposure via paste
   - Immediate clear on app close

5. **Audit Logging (HIPAA 164.312(b))**
   - Comprehensive event logging:
     - APP_START / APP_CLOSE
     - TRANSCRIPTION_COMPLETE
     - PROCESSING_START / PROCESSING_COMPLETE
     - PHI detection events
     - User actions (export, cancel, etc.)
   - Monthly log files (`~/.cache/mac-scribe-app/audit/`)
   - Logs contain NO PHI - only metadata
   - Automatic cleanup of logs older than 6 months

6. **Optional File Encryption (AES-256)**
   - User-prompted encryption for all file exports
   - Password-based encryption with PBKDF2 key derivation
   - 100,000 iterations for key strengthening
   - Warning if user declines encryption

7. **Fully Offline Operation**
   - No internet connection required after initial setup
   - No data transmission to external servers
   - No telemetry or analytics
   - All AI processing happens locally on device

---

## 🔧 Security Features in Detail

### Secure File Deletion

**What it does:**
```python
# Overwrites file with random data 3 times before deletion
secure_delete(temp_audio_file, iterations=3)
```

**When it happens:**
- Immediately after transcription completes
- Whether transcription succeeds or fails
- Even if app crashes, next launch will clean up residual files

**Technical Details:**
- Uses `secrets.token_bytes()` for cryptographically secure random data
- Calls `os.fsync()` to force write to disk
- Meets DoD 5220.22-M standard for data sanitization

---

### PHI Pattern Detection

**Patterns Detected:**
```
SSN: xxx-xx-xxxx
DOB: DOB: xx/xx/xxxx
MRN: MRN #xxxxx
Phone: xxx-xxx-xxxx
Email: user@domain.com
Address: 123 Main Street
Specific Dates: January 1, 2024
```

**User Warning Dialog:**
```
⚠️ Potential unmasked PHI detected:

- SSN: 1 occurrence(s)
- Date of Birth: 1 occurrence(s)
- MRN: 1 occurrence(s)

HIPAA requires masking or de-identification of PHI.

Continue processing anyway?
[No] [Yes]
```

**Recommendation:**
- Use generic dates ("2 days ago" instead of "January 1, 2024")
- Use initials instead of full names
- Use "patient" instead of specific identifiers
- Mask MRNs/SSNs before processing

---

### Clipboard Auto-Clear

**How it works:**
1. User clicks "Copy" button
2. Content copied to clipboard
3. 5-minute timer starts
4. Timer expires → Clipboard cleared
5. App close → Clipboard cleared immediately

**Why 5 minutes:**
- Long enough for typical paste operations
- Short enough to minimize exposure window
- Configurable if needed (see code in `main_window.py:383`)

---

### Audit Logging

**Log Format (JSON Lines):**
```json
{
  "timestamp": "2025-01-15T14:32:10.123456",
  "action": "PROCESSING_START",
  "user": "unknown",
  "success": true,
  "phi_detected": true,
  "details": {
    "phi_types": ["Phone", "Date of Birth"],
    "warning_accepted": true
  }
}
```

**Log Location:**
```
~/.cache/mac-scribe-app/audit/
  ├── audit_2025-01.jsonl
  ├── audit_2025-02.jsonl
  └── audit_2025-03.jsonl
```

**Retention:**
- Default: 6 months
- Configurable via `AuditLogger.clear_old_logs(months=N)`
- HIPAA allows up to 6 years, but minimization principle favors shorter

**Accessing Logs:**
```python
from security.hipaa_compliance import AuditLogger

logger = AuditLogger()
events = logger.get_events(days=30, action="PROCESSING_START")
```

---

### File Encryption

**Encryption Method:**
- Algorithm: AES-256-CBC
- Key Derivation: PBKDF2-HMAC-SHA256
- Iterations: 100,000
- Random salt (16 bytes) per file
- Random IV (16 bytes) per file

**File Structure (`.enc` files):**
```
[16 bytes: salt][16 bytes: IV][encrypted content]
```

**User Flow:**
1. Click "Save All" button
2. Dialog: "Encrypt file with password?"
3. If Yes:
   - Enter password (hidden input)
   - Confirm password
   - File saved as `.enc`
   - AES-256 encryption applied
4. If No:
   - Warning about plaintext storage
   - Reminder about FileVault
   - File saved as `.txt`

**Decryption (Not Built-In):**
```python
from security.hipaa_compliance import SimpleEncryption

content = SimpleEncryption.decrypt_file("notes.enc", password="your_password")
```

---

## 🚨 What YOU Must Do for HIPAA Compliance

### 1. Enable FileVault (CRITICAL)

**What is FileVault?**
- macOS full-disk encryption
- Encrypts entire hard drive
- Protects data if Mac is stolen/lost
- Encrypts swap files (prevents RAM spillage to disk)

**How to Enable:**
1. Apple menu → System Settings → Privacy & Security
2. Click FileVault
3. Click "Turn On FileVault"
4. Store recovery key securely (NOT on the Mac)
5. Wait for encryption to complete (may take hours)

**Why it's critical:**
- Without FileVault, unencrypted files can be recovered
- Swap/hibernation files can contain PHI from RAM
- macOS doesn't encrypt user files by default

---

### 2. Secure Your Mac

**Required:**
- ✅ Strong password (12+ characters, mixed case, numbers, symbols)
- ✅ Automatic screen lock (≤5 minutes idle)
- ✅ Require password immediately after sleep
- ✅ Disable automatic login
- ✅ Keep macOS updated (security patches)

**Recommended:**
- Touch ID or Apple Watch unlock
- Two-factor authentication for Apple ID
- Firewall enabled
- Automatic security updates
- No shared user accounts

**How to Configure:**
```
System Settings → Lock Screen:
  - Start Screen Saver when inactive: 5 minutes
  - Turn display off on battery when inactive: 5 minutes
  - Turn display off on power adapter when inactive: 10 minutes
  - Require password after screen saver begins: Immediately

System Settings → Touch ID & Password:
  - Change Password → Set strong password
  - Apple Watch → Turn on "Use your Apple Watch to unlock..."

System Settings → General → Software Update:
  - Automatic Updates → Enable all
```

---

### 3. Operational Security

**Do:**
- ✅ Use the app ONLY on your personal, secured Mac
- ✅ Review ALL AI-generated content before use
- ✅ Log out when leaving workstation
- ✅ Close app when not in use (clears session data)
- ✅ Use encryption when saving files
- ✅ Store passwords in secure password manager
- ✅ Report security incidents to your IT/compliance team

**Don't:**
- ❌ Use on shared/public computers
- ❌ Leave Mac unlocked in public spaces
- ❌ Share your Mac login with others
- ❌ Save unencrypted files to cloud storage (Dropbox, Google Drive, iCloud)
- ❌ Email unencrypted clinical notes
- ❌ Copy/paste PHI into other unsecured applications
- ❌ Trust AI output without physician review

---

### 4. Institutional Requirements

**Before using this tool, ensure:**

1. **Risk Assessment**
   - Document this tool in your HIPAA Risk Assessment
   - Identify risks (e.g., local storage, AI processing)
   - Document mitigations (e.g., FileVault, audit logs, encryption)

2. **Security Awareness Training**
   - Train physicians on PHI handling
   - Train on identifying and reporting security incidents
   - Annual refresher training

3. **Acceptable Use Policy**
   - Define where tool can be used (clinic vs. home vs. public)
   - Define who can use it (attending vs. resident vs. student)
   - Define what data can be processed (de-identified only vs. full PHI)

4. **Business Associate Agreement (BAA)**
   - Note: This is open-source software with no vendor
   - Your institution may need internal policies instead of BAA
   - Consult your compliance officer

5. **Device Management (if applicable)**
   - Mobile Device Management (MDM) for institutional Macs
   - Remote wipe capability
   - Compliance monitoring

---

## 📊 Audit Log Review

**Recommended Review Frequency:** Monthly

**What to Check:**
1. Unexpected app usage (after hours, wrong users)
2. PHI detection events (are users following masking policies?)
3. Processing failures (potential security issues?)
4. File exports (are users encrypting files?)

**Example Review Script:**
```python
from security.hipaa_compliance import AuditLogger
import json

logger = AuditLogger()

# Get all events from last 30 days
events = logger.get_events(days=30)

# Count PHI detections
phi_events = [e for e in events if e.get('phi_detected')]
print(f"PHI detected in {len(phi_events)} sessions")

# Check export events (implement export tracking)
# Check failed processes
failed = [e for e in events if not e.get('success')]
print(f"{len(failed)} failed operations")
```

---

## 🧪 Testing & Validation

**Before Deployment:**

- [ ] Verify temp files are deleted after transcription
- [ ] Verify clipboard clears after 5 minutes
- [ ] Verify clipboard clears on app close
- [ ] Verify session data clears on app close
- [ ] Test PHI detection with sample text
- [ ] Verify audit logs are being written
- [ ] Test file encryption/decryption
- [ ] Verify FileVault is enabled on deployment Mac
- [ ] Test screen lock doesn't leave data accessible

**Sample PHI Test String:**
```
Patient John Doe, DOB: 01/15/1980, MRN #123456
SSN: 123-45-6789, Phone: 555-123-4567
Address: 123 Main Street, Anytown, USA
Email: jdoe@email.com
Seen on January 15, 2025
```

Expected: App should detect all 7 PHI types before processing

---

## ⚖️ Legal & Regulatory Considerations

### HIPAA Rules Applicable

1. **164.308(a)(1)(ii)(A) - Risk Assessment**
   - Document risks of local AI processing
   - Document mitigations (encryption, audit logs, etc.)

2. **164.308(a)(5)(ii)(C) - Login Monitoring**
   - Audit logs track app usage
   - Review logs for unauthorized access

3. **164.310(d)(1) - Device and Media Controls**
   - Secure deletion of temp audio files
   - Encryption of export files
   - Disposal procedures (secure wipe when decommissioning Mac)

4. **164.312(a)(1) - Access Control**
   - Mac login password
   - Screen lock timeout
   - App-level session management

5. **164.312(a)(2)(iv) - Encryption and Decryption**
   - FileVault for data at rest
   - Optional file encryption for exports

6. **164.312(b) - Audit Controls**
   - Comprehensive audit logging
   - Tamper-evident log files (JSON Lines append-only)

7. **164.312(d) - Person or Entity Authentication**
   - Relies on macOS user authentication
   - No app-level user accounts (single-user tool)

### State Privacy Laws

- **California (CMIA, CCPA)**: Encryption required for electronically transmitted PHI
- **New York (SHIELD Act)**: Encryption or other safeguards for private information
- **GDPR (if applicable)**: Right to erasure (app clears data on close)

### Additional Considerations

- **42 CFR Part 2 (Substance Use Records)**: Higher standard for substance use disorder records - may require additional controls
- **FDA Medical Device Regulations**: This is NOT a medical device (documentation aid only)
- **Medical Malpractice**: AI is an aid, not a replacement for clinical judgment

---

## 📞 Incident Response

**If you suspect a HIPAA breach:**

1. **Immediate Actions:**
   - Stop using the app
   - Do NOT delete anything (preserve evidence)
   - Note the time and nature of incident

2. **Notify:**
   - Your institution's Privacy Officer
   - Your institution's IT Security team
   - Your supervisor/department head

3. **Investigate:**
   - What PHI was involved?
   - Who had access?
   - Was PHI disclosed to unauthorized parties?
   - What were the circumstances?

4. **Mitigation:**
   - Retrieve/delete improperly disclosed PHI if possible
   - Change passwords if credentials were compromised
   - Review audit logs

5. **Documentation:**
   - Preserve audit logs
   - Document timeline of events
   - Document people notified
   - Document mitigation steps taken

**Breach Notification Rules (HIPAA):**
- **< 500 individuals:** Annual notification to HHS
- **≥ 500 individuals:** Immediate notification to HHS, media, and individuals
- **Unsecured PHI only:** Encrypted PHI (FileVault + file encryption) may not require notification

---

## 🔄 Maintenance & Updates

**Periodic Tasks:**

- **Weekly:** Review audit logs for anomalies
- **Monthly:** Check for app updates (security patches)
- **Quarterly:** Verify FileVault is still enabled
- **Annually:**
  - Review and update risk assessment
  - Security awareness training
  - Policy review
  - Audit log archival

**Version Updates:**
- Check GitHub releases: https://github.com/pedscoffee/mac-scribe-app (update when available)
- Review changelogs for security fixes
- Test updates in non-production environment first

---

## 📚 Additional Resources

**HIPAA Resources:**
- HHS HIPAA Portal: https://www.hhs.gov/hipaa
- HIPAA Security Rule: https://www.hhs.gov/hipaa/for-professionals/security
- Breach Notification: https://www.hhs.gov/hipaa/for-professionals/breach-notification

**Mac Security:**
- Apple Security Guide: https://support.apple.com/guide/security
- FileVault Documentation: https://support.apple.com/en-us/HT204837

**Contact:**
- Project Documentation: https://physicianpromptengineering.com
- Security Issues: Report via GitHub Issues (NO PHI in reports!)

---

## ✅ Pre-Deployment Checklist

Use this checklist before deploying to production:

### System Configuration
- [ ] FileVault enabled and verified
- [ ] Strong Mac password set (12+ characters)
- [ ] Screen lock enabled (≤5 minutes idle)
- [ ] Automatic login disabled
- [ ] macOS updated to latest version
- [ ] Firewall enabled
- [ ] Automatic updates enabled

### App Configuration
- [ ] App installed in secured location
- [ ] Audit logging directory exists (`~/.cache/mac-scribe-app/audit/`)
- [ ] Test secure file deletion (create/transcribe/verify deletion)
- [ ] Test PHI detection with sample text
- [ ] Test clipboard auto-clear
- [ ] Test file encryption/decryption

### Institutional Compliance
- [ ] Risk assessment updated
- [ ] Security awareness training completed
- [ ] Acceptable use policy documented
- [ ] IT/Compliance team notified of deployment
- [ ] Incident response plan reviewed
- [ ] User authentication procedures documented

### User Training
- [ ] Physician trained on PHI masking
- [ ] Physician trained on encryption usage
- [ ] Physician understands limitations of AI
- [ ] Physician knows how to report security incidents
- [ ] Physician acknowledges responsibility for content review

---

**Remember: HIPAA compliance is a continuous process, not a one-time configuration. Regular training, monitoring, and updates are essential.**

---

**Questions? Consult your institutional Privacy Officer and IT Security team.**
