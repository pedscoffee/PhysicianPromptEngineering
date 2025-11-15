"""
Retro Pixelated UI Styles
Inspired by Doc Pixel's DDX Challenge - classic arcade/pixel game aesthetic
"""

# QSS Stylesheet with retro pixelated theme
RETRO_STYLESHEET = """
/* ============================================
   DOC PIXEL'S SCRIBE - RETRO PIXELATED THEME
   ============================================ */

/* Main Window */
QMainWindow {
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: "Courier New", monospace;
    font-size: 14px;
}

/* Central Widget */
QWidget {
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: "Courier New", monospace;
}

/* Group Boxes (Panels) */
QGroupBox {
    background-color: #2C1810;
    border: 4px solid #D4A76A;
    border-radius: 0px;  /* No rounded corners - pixel style */
    padding: 15px;
    margin-top: 10px;
    font-weight: bold;
    color: #FFD700;
    font-size: 16px;
}

QGroupBox::title {
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 5px;
    color: #FFD700;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
}

/* Buttons */
QPushButton {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #4CAF50, stop:1 #2E7D32);
    color: white;
    border: 4px solid #81C784;
    border-radius: 0px;
    padding: 12px 24px;
    font-family: "Courier New", monospace;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}

QPushButton:hover {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #5CBF60, stop:1 #3E9D42);
    border-color: #A5D6A7;
}

QPushButton:pressed {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #2E7D32, stop:1 #1B5E20);
}

QPushButton:disabled {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #666, stop:1 #444);
    border-color: #888;
    color: #999;
}

/* Secondary Button */
QPushButton[class="secondary"] {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #2196F3, stop:1 #1565C0);
    border-color: #64B5F6;
}

QPushButton[class="secondary"]:hover {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #32A6FF, stop:1 #2575D0);
}

/* Danger Button */
QPushButton[class="danger"] {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #F44336, stop:1 #C62828);
    border-color: #E57373;
}

QPushButton[class="danger"]:hover {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #FF5346, stop:1 #D63838);
}

/* Text Areas */
QTextEdit, QPlainTextEdit {
    background-color: #1a1a1a;
    border: 3px solid #666;
    border-radius: 0px;
    color: #FFFFFF;
    font-family: "Courier New", monospace;
    font-size: 13px;
    padding: 8px;
}

QTextEdit:focus, QPlainTextEdit:focus {
    border-color: #FFD700;
}

/* Progress Bar */
QProgressBar {
    background-color: #333;
    border: 3px solid #666;
    border-radius: 0px;
    height: 30px;
    text-align: center;
    color: white;
    font-weight: bold;
}

QProgressBar::chunk {
    background: qlineargradient(x1:0, y1:0, x2:1, y2:0,
                                stop:0 #4CAF50, stop:0.5 #FFD700, stop:1 #4CAF50);
}

/* Labels */
QLabel {
    color: #c9d1d9;
    font-family: "Courier New", monospace;
}

QLabel[class="title"] {
    color: #FFD700;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
}

QLabel[class="subtitle"] {
    color: #FFA500;
    font-size: 14px;
    font-weight: bold;
}

QLabel[class="status"] {
    color: #64B5F6;
    font-size: 12px;
}

/* List Widget */
QListWidget {
    background-color: #1a1a1a;
    border: 3px solid #666;
    border-radius: 0px;
    color: #FFFFFF;
    font-family: "Courier New", monospace;
}

QListWidget::item {
    padding: 8px;
    border-bottom: 1px solid #333;
}

QListWidget::item:selected {
    background-color: #2196F3;
    color: white;
}

QListWidget::item:hover {
    background-color: #1565C0;
}

/* Tab Widget */
QTabWidget::pane {
    background-color: #2C1810;
    border: 4px solid #D4A76A;
    border-radius: 0px;
}

QTabBar::tab {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #4CAF50, stop:1 #2E7D32);
    color: white;
    border: 3px solid #81C784;
    border-radius: 0px;
    padding: 8px 16px;
    margin-right: 4px;
    font-weight: bold;
}

QTabBar::tab:selected {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #FFD700, stop:1 #FFA500);
    border-color: #FFE082;
}

QTabBar::tab:hover {
    background: qlineargradient(x1:0, y1:0, x2:0, y2:1,
                                stop:0 #5CBF60, stop:1 #3E9D42);
}

/* Scroll Bar */
QScrollBar:vertical {
    background-color: #1a1a1a;
    width: 16px;
    border: 2px solid #666;
}

QScrollBar::handle:vertical {
    background-color: #4CAF50;
    border: 2px solid #81C784;
    min-height: 30px;
}

QScrollBar::handle:vertical:hover {
    background-color: #5CBF60;
}

QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {
    background-color: #333;
    height: 16px;
    border: 2px solid #666;
}

/* Combo Box */
QComboBox {
    background-color: #1a1a1a;
    border: 3px solid #666;
    border-radius: 0px;
    color: white;
    padding: 6px;
    font-family: "Courier New", monospace;
}

QComboBox:hover {
    border-color: #FFD700;
}

QComboBox::drop-down {
    border: none;
    width: 20px;
}

QComboBox::down-arrow {
    image: none;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #FFD700;
}

QComboBox QAbstractItemView {
    background-color: #1a1a1a;
    border: 3px solid #FFD700;
    selection-background-color: #2196F3;
    color: white;
}

/* Spinbox */
QSpinBox {
    background-color: #1a1a1a;
    border: 3px solid #666;
    border-radius: 0px;
    color: white;
    padding: 4px;
}

QSpinBox:focus {
    border-color: #FFD700;
}

/* Status Bar */
QStatusBar {
    background-color: #2C1810;
    border-top: 3px solid #D4A76A;
    color: #FFD700;
    font-weight: bold;
}

/* Menu Bar */
QMenuBar {
    background-color: #2C1810;
    color: #FFD700;
    border-bottom: 3px solid #D4A76A;
}

QMenuBar::item {
    background-color: transparent;
    padding: 6px 12px;
}

QMenuBar::item:selected {
    background-color: #4CAF50;
}

QMenu {
    background-color: #2C1810;
    border: 3px solid #D4A76A;
    color: #c9d1d9;
}

QMenu::item:selected {
    background-color: #4CAF50;
}

/* Check Box */
QCheckBox {
    color: #c9d1d9;
    spacing: 8px;
}

QCheckBox::indicator {
    width: 20px;
    height: 20px;
    border: 3px solid #666;
    background-color: #1a1a1a;
}

QCheckBox::indicator:checked {
    background-color: #4CAF50;
    border-color: #81C784;
}

QCheckBox::indicator:hover {
    border-color: #FFD700;
}

/* Tooltip */
QToolTip {
    background-color: #2C1810;
    border: 3px solid #FFD700;
    color: white;
    padding: 6px;
    font-family: "Courier New", monospace;
}
"""

def get_stylesheet() -> str:
    """Get the retro pixelated stylesheet"""
    return RETRO_STYLESHEET
