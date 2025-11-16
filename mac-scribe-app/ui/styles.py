"""
Modern Professional UI Styles
Inspired by clinical EMR systems - clean, professional, medical-grade interface
"""

# QSS Stylesheet with modern clinical theme
MODERN_STYLESHEET = """
/* ============================================
   PHYSICIAN PROMPT ENGINEERING SCRIBE - MODERN CLINICAL THEME
   ============================================ */

/* Main Window */
QMainWindow {
    background-color: #f5f7fa;
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
}

/* Central Widget */
QWidget {
    background-color: #f5f7fa;
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Group Boxes (Card Panels) */
QGroupBox {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 8px;
    padding: 20px;
    margin-top: 12px;
    font-weight: 600;
    color: #1e3a5f;
    font-size: 14px;
}

QGroupBox::title {
    subcontrol-origin: margin;
    left: 12px;
    padding: 0 8px;
    color: #1e3a5f;
    background-color: #ffffff;
}

/* Primary Buttons */
QPushButton {
    background-color: #0078d4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13px;
    font-weight: 500;
}

QPushButton:hover {
    background-color: #106ebe;
}

QPushButton:pressed {
    background-color: #005a9e;
}

QPushButton:disabled {
    background-color: #e1e4e8;
    color: #959da5;
}

/* Secondary Button */
QPushButton[class="secondary"] {
    background-color: #f3f4f6;
    color: #1e3a5f;
    border: 1px solid #d1dbe6;
}

QPushButton[class="secondary"]:hover {
    background-color: #e8eaed;
    border-color: #b8c5d6;
}

/* Danger Button */
QPushButton[class="danger"] {
    background-color: #d73a49;
    color: white;
    border: none;
}

QPushButton[class="danger"]:hover {
    background-color: #cb2431;
}

/* Text Areas */
QTextEdit, QPlainTextEdit {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 6px;
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13px;
    padding: 12px;
    selection-background-color: #0078d4;
    selection-color: white;
}

QTextEdit:focus, QPlainTextEdit:focus {
    border-color: #0078d4;
    border-width: 2px;
}

QTextEdit:read-only {
    background-color: #f8f9fa;
}

/* Progress Bar */
QProgressBar {
    background-color: #e8eaed;
    border: 1px solid #d1dbe6;
    border-radius: 4px;
    height: 24px;
    text-align: center;
    color: #1e3a5f;
    font-weight: 500;
}

QProgressBar::chunk {
    background-color: #0078d4;
    border-radius: 3px;
}

/* Labels */
QLabel {
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

QLabel[class="title"] {
    color: #1e3a5f;
    font-size: 24px;
    font-weight: 600;
}

QLabel[class="subtitle"] {
    color: #586e85;
    font-size: 13px;
    font-weight: 400;
}

QLabel[class="status"] {
    color: #0078d4;
    font-size: 13px;
    font-weight: 500;
}

/* List Widget */
QListWidget {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 6px;
    color: #2c3e50;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 4px;
}

QListWidget::item {
    padding: 10px;
    border-radius: 4px;
    margin: 2px;
}

QListWidget::item:selected {
    background-color: #e3f2fd;
    color: #0078d4;
}

QListWidget::item:hover {
    background-color: #f5f9fc;
}

/* Tab Widget */
QTabWidget::pane {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 8px;
    padding: 4px;
}

QTabBar::tab {
    background-color: #f3f4f6;
    color: #586e85;
    border: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 10px 20px;
    margin-right: 2px;
    font-weight: 500;
}

QTabBar::tab:selected {
    background-color: #ffffff;
    color: #0078d4;
    border-bottom: 2px solid #0078d4;
}

QTabBar::tab:hover {
    background-color: #e8eaed;
}

/* Scroll Bar */
QScrollBar:vertical {
    background-color: #f5f7fa;
    width: 12px;
    border: none;
    border-radius: 6px;
}

QScrollBar::handle:vertical {
    background-color: #c1cbd9;
    border-radius: 6px;
    min-height: 30px;
}

QScrollBar::handle:vertical:hover {
    background-color: #a8b4c5;
}

QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {
    height: 0px;
}

/* Combo Box */
QComboBox {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 4px;
    color: #2c3e50;
    padding: 8px 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

QComboBox:hover {
    border-color: #0078d4;
}

QComboBox:focus {
    border-color: #0078d4;
    border-width: 2px;
}

QComboBox::drop-down {
    border: none;
    width: 20px;
}

QComboBox::down-arrow {
    image: none;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #586e85;
}

QComboBox QAbstractItemView {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 4px;
    selection-background-color: #e3f2fd;
    selection-color: #0078d4;
    color: #2c3e50;
    padding: 4px;
}

/* Spinbox */
QSpinBox {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 4px;
    color: #2c3e50;
    padding: 6px 10px;
}

QSpinBox:focus {
    border-color: #0078d4;
    border-width: 2px;
}

/* Status Bar */
QStatusBar {
    background-color: #ffffff;
    border-top: 1px solid #d1dbe6;
    color: #586e85;
    font-weight: 500;
    padding: 4px;
}

/* Menu Bar */
QMenuBar {
    background-color: #ffffff;
    color: #2c3e50;
    border-bottom: 1px solid #d1dbe6;
    padding: 4px;
}

QMenuBar::item {
    background-color: transparent;
    padding: 6px 12px;
    border-radius: 4px;
}

QMenuBar::item:selected {
    background-color: #e8eaed;
}

QMenu {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 6px;
    color: #2c3e50;
    padding: 4px;
}

QMenu::item {
    padding: 8px 20px;
    border-radius: 4px;
}

QMenu::item:selected {
    background-color: #e3f2fd;
    color: #0078d4;
}

/* Check Box */
QCheckBox {
    color: #2c3e50;
    spacing: 8px;
}

QCheckBox::indicator {
    width: 18px;
    height: 18px;
    border: 2px solid #b8c5d6;
    border-radius: 3px;
    background-color: #ffffff;
}

QCheckBox::indicator:checked {
    background-color: #0078d4;
    border-color: #0078d4;
}

QCheckBox::indicator:hover {
    border-color: #0078d4;
}

/* Tooltip */
QToolTip {
    background-color: #1e3a5f;
    border: 1px solid #0078d4;
    color: white;
    padding: 8px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Splitter */
QSplitter::handle {
    background-color: #d1dbe6;
    width: 2px;
    height: 2px;
}

QSplitter::handle:hover {
    background-color: #0078d4;
}

/* Line Edit */
QLineEdit {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 4px;
    color: #2c3e50;
    padding: 8px 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13px;
}

QLineEdit:focus {
    border-color: #0078d4;
    border-width: 2px;
}

/* Dialog */
QDialog {
    background-color: #f5f7fa;
}

/* Table Widget */
QTableWidget {
    background-color: #ffffff;
    border: 1px solid #d1dbe6;
    border-radius: 6px;
    gridline-color: #e8eaed;
}

QTableWidget::item {
    padding: 8px;
}

QTableWidget::item:selected {
    background-color: #e3f2fd;
    color: #0078d4;
}

QHeaderView::section {
    background-color: #f8f9fa;
    color: #1e3a5f;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #d1dbe6;
    font-weight: 600;
}
"""

def get_stylesheet() -> str:
    """Get the modern clinical stylesheet"""
    return MODERN_STYLESHEET
