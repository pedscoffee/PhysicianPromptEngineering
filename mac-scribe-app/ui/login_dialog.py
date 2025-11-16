"""
Login Dialog
User authentication interface with password strength validation
"""

from PyQt6.QtWidgets import (
    QDialog, QVBoxLayout, QHBoxLayout, QLabel, QLineEdit,
    QPushButton, QCheckBox, QProgressBar, QMessageBox, QComboBox
)
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFont
import logging

from security.user_manager import UserManager, UserRole
from security.authentication import (
    AuthenticationManager,
    validate_password_strength,
    calculate_password_strength
)

logger = logging.getLogger(__name__)


class LoginDialog(QDialog):
    """Login dialog with Touch ID and password support"""

    def __init__(self, user_manager: UserManager, auth_manager: AuthenticationManager):
        super().__init__()
        self.user_manager = user_manager
        self.auth_manager = auth_manager
        self.authenticated_user = None

        self.setWindowTitle("Physician Prompt Engineering Scribe - Login")
        self.setModal(True)
        self.setMinimumWidth(400)

        self.init_ui()

    def init_ui(self):
        """Initialize UI"""
        layout = QVBoxLayout(self)
        layout.setSpacing(15)

        # Title
        title = QLabel("Authentication Required")
        title.setFont(QFont("", 16, QFont.Weight.Bold))
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(title)

        # Subtitle
        subtitle = QLabel("This application processes Protected Health Information")
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        subtitle.setStyleSheet("color: #666;")
        layout.addWidget(subtitle)

        # Username
        username_label = QLabel("Username:")
        layout.addWidget(username_label)

        self.username_input = QLineEdit()
        self.username_input.setPlaceholderText("Enter your username")
        layout.addWidget(self.username_input)

        # Password
        password_label = QLabel("Password:")
        layout.addWidget(password_label)

        self.password_input = QLineEdit()
        self.password_input.setPlaceholderText("Enter your password")
        self.password_input.setEchoMode(QLineEdit.EchoMode.Password)
        self.password_input.returnPressed.connect(self.attempt_login)
        layout.addWidget(self.password_input)

        # Remember me
        self.remember_checkbox = QCheckBox("Remember me (store in Keychain)")
        layout.addWidget(self.remember_checkbox)

        # Login button
        self.login_btn = QPushButton("Login")
        self.login_btn.clicked.connect(self.attempt_login)
        self.login_btn.setDefault(True)
        layout.addWidget(self.login_btn)

        # Touch ID button (if available)
        self.touch_id_btn = QPushButton("Login with Touch ID")
        self.touch_id_btn.clicked.connect(self.attempt_touch_id_login)
        layout.addWidget(self.touch_id_btn)

        # Create account button
        self.create_account_btn = QPushButton("Create New Account")
        self.create_account_btn.setProperty("class", "secondary")
        self.create_account_btn.clicked.connect(self.show_create_account_dialog)
        layout.addWidget(self.create_account_btn)

        # Check if any users exist
        if not self.user_manager.list_users():
            self.show_first_run_setup()

    def attempt_login(self):
        """Attempt to login with username and password"""
        username = self.username_input.text().strip()
        password = self.password_input.text()

        if not username or not password:
            QMessageBox.warning(
                self,
                "Invalid Input",
                "Please enter both username and password"
            )
            return

        # Attempt authentication
        user = self.user_manager.authenticate(username, password)

        if user:
            # Authentication successful
            self.authenticated_user = user

            # Store in Keychain if requested
            if self.remember_checkbox.isChecked():
                self.auth_manager.store_credentials_in_keychain(username, password)

            # Create session
            self.auth_manager.create_session(user.user_id)

            logger.info(f"Login successful: {username}")
            self.accept()  # Close dialog with success

        else:
            # Authentication failed
            QMessageBox.warning(
                self,
                "Authentication Failed",
                "Invalid username or password.\n\n"
                "If this is your first time using the app, click 'Create New Account'."
            )
            self.password_input.clear()
            logger.warning(f"Login failed for username: {username}")

    def attempt_touch_id_login(self):
        """Attempt to login with Touch ID"""
        username = self.username_input.text().strip()

        if not username:
            QMessageBox.warning(
                self,
                "Invalid Input",
                "Please enter your username first"
            )
            return

        # Attempt Touch ID authentication (retrieves from Keychain)
        success = self.auth_manager.authenticate_with_touch_id(username)

        if success:
            # Get password from Keychain
            password = self.auth_manager.get_credentials_from_keychain(username)

            if password:
                # Authenticate with retrieved password
                user = self.user_manager.authenticate(username, password)

                if user:
                    self.authenticated_user = user
                    self.auth_manager.create_session(user.user_id)
                    logger.info(f"Touch ID login successful: {username}")
                    self.accept()
                    return

        QMessageBox.warning(
            self,
            "Touch ID Failed",
            "Touch ID authentication failed.\n\n"
            "Credentials may not be stored in Keychain.\n"
            "Please login with password and enable 'Remember me'."
        )

    def show_create_account_dialog(self):
        """Show dialog to create new account"""
        dialog = CreateAccountDialog(self.user_manager, self)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            QMessageBox.information(
                self,
                "Account Created",
                f"Account created successfully!\n\n"
                f"Username: {dialog.created_username}\n\n"
                "You can now login with your credentials."
            )
            self.username_input.setText(dialog.created_username)
            self.password_input.setFocus()

    def show_first_run_setup(self):
        """Show first run setup message"""
        QMessageBox.information(
            self,
            "Welcome to Physician Prompt Engineering Scribe",
            "This appears to be your first time using the app.\n\n"
            "Please create an account to continue.\n\n"
            "Your credentials will be stored securely and used to\n"
            "track all actions for HIPAA compliance."
        )
        self.show_create_account_dialog()


class CreateAccountDialog(QDialog):
    """Dialog for creating new user account"""

    def __init__(self, user_manager: UserManager, parent=None):
        super().__init__(parent)
        self.user_manager = user_manager
        self.created_username = None

        self.setWindowTitle("Create New Account")
        self.setModal(True)
        self.setMinimumWidth(450)

        self.init_ui()

    def init_ui(self):
        """Initialize UI"""
        layout = QVBoxLayout(self)
        layout.setSpacing(15)

        # Title
        title = QLabel("Create New Account")
        title.setFont(QFont("", 14, QFont.Weight.Bold))
        layout.addWidget(title)

        # Username
        username_label = QLabel("Username:")
        layout.addWidget(username_label)

        self.username_input = QLineEdit()
        self.username_input.setPlaceholderText("Choose a username")
        layout.addWidget(self.username_input)

        # Role
        role_label = QLabel("Role:")
        layout.addWidget(role_label)

        self.role_combo = QComboBox()
        self.role_combo.addItems([
            UserRole.PHYSICIAN,
            UserRole.RESIDENT,
            UserRole.ADMIN,
            UserRole.STUDENT
        ])
        layout.addWidget(self.role_combo)

        # Password
        password_label = QLabel("Password:")
        layout.addWidget(password_label)

        self.password_input = QLineEdit()
        self.password_input.setPlaceholderText("Enter password (min 12 characters)")
        self.password_input.setEchoMode(QLineEdit.EchoMode.Password)
        self.password_input.textChanged.connect(self.update_password_strength)
        layout.addWidget(self.password_input)

        # Password strength meter
        self.strength_label = QLabel("Password Strength:")
        layout.addWidget(self.strength_label)

        self.strength_bar = QProgressBar()
        self.strength_bar.setMaximum(100)
        self.strength_bar.setValue(0)
        layout.addWidget(self.strength_bar)

        # Confirm password
        confirm_label = QLabel("Confirm Password:")
        layout.addWidget(confirm_label)

        self.confirm_input = QLineEdit()
        self.confirm_input.setPlaceholderText("Re-enter password")
        self.confirm_input.setEchoMode(QLineEdit.EchoMode.Password)
        layout.addWidget(self.confirm_input)

        # Password requirements
        requirements = QLabel(
            "Password Requirements:\n"
            "• Minimum 12 characters\n"
            "• At least one uppercase letter\n"
            "• At least one lowercase letter\n"
            "• At least one number\n"
            "• At least one special character (!@#$%^&*)"
        )
        requirements.setStyleSheet("color: #666; font-size: 10px;")
        layout.addWidget(requirements)

        # Buttons
        btn_layout = QHBoxLayout()

        cancel_btn = QPushButton("Cancel")
        cancel_btn.clicked.connect(self.reject)
        btn_layout.addWidget(cancel_btn)

        self.create_btn = QPushButton("Create Account")
        self.create_btn.clicked.connect(self.create_account)
        btn_layout.addWidget(self.create_btn)

        layout.addLayout(btn_layout)

    def update_password_strength(self):
        """Update password strength meter"""
        password = self.password_input.text()
        strength = calculate_password_strength(password)
        self.strength_bar.setValue(strength)

        # Update color based on strength
        if strength < 40:
            color = "#f44336"  # Red
            label = "Weak"
        elif strength < 70:
            color = "#ff9800"  # Orange
            label = "Fair"
        else:
            color = "#4caf50"  # Green
            label = "Strong"

        self.strength_bar.setStyleSheet(f"""
            QProgressBar::chunk {{
                background-color: {color};
            }}
        """)
        self.strength_label.setText(f"Password Strength: {label} ({strength}%)")

    def create_account(self):
        """Create new user account"""
        username = self.username_input.text().strip()
        password = self.password_input.text()
        confirm = self.confirm_input.text()
        role = self.role_combo.currentText()

        # Validation
        if not username:
            QMessageBox.warning(self, "Invalid Input", "Please enter a username")
            return

        if not password:
            QMessageBox.warning(self, "Invalid Input", "Please enter a password")
            return

        # Validate password strength
        is_valid, error_msg = validate_password_strength(password)
        if not is_valid:
            QMessageBox.warning(self, "Weak Password", error_msg)
            return

        # Confirm password match
        if password != confirm:
            QMessageBox.warning(self, "Password Mismatch", "Passwords do not match")
            return

        # Create user
        user = self.user_manager.create_user(username, password, role)

        if user:
            self.created_username = username
            logger.info(f"Account created: {username} ({role})")
            self.accept()
        else:
            QMessageBox.warning(
                self,
                "Account Creation Failed",
                "Failed to create account.\n\nUsername may already exist."
            )
