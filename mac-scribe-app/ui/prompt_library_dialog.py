"""
Prompt Library Manager - Comprehensive prompt management and workflow builder
"""

from PyQt6.QtWidgets import (
    QDialog, QVBoxLayout, QHBoxLayout, QPushButton, QLabel,
    QListWidget, QListWidgetItem, QTextEdit, QLineEdit,
    QTabWidget, QWidget, QMessageBox, QSplitter, QGroupBox,
    QCheckBox, QSpinBox, QFormLayout
)
from PyQt6.QtCore import Qt, pyqtSignal
from PyQt6.QtGui import QFont
import logging

logger = logging.getLogger(__name__)


class PromptItemWidget(QWidget):
    """Custom widget for displaying a prompt in the list"""

    toggled = pyqtSignal(str, bool)  # prompt_id, enabled

    def __init__(self, prompt_id, name, description, enabled, category):
        super().__init__()
        self.prompt_id = prompt_id
        self.category = category

        layout = QHBoxLayout(self)
        layout.setContentsMargins(8, 4, 8, 4)

        # Checkbox for enable/disable
        self.checkbox = QCheckBox()
        self.checkbox.setChecked(enabled)
        self.checkbox.stateChanged.connect(self._on_toggle)
        layout.addWidget(self.checkbox)

        # Prompt info
        info_layout = QVBoxLayout()
        info_layout.setSpacing(2)

        name_label = QLabel(name)
        name_label.setFont(QFont("", 13, QFont.Weight.Medium))
        name_label.setProperty("class", "prompt-name")
        info_layout.addWidget(name_label)

        if description:
            desc_label = QLabel(description)
            desc_label.setProperty("class", "subtitle")
            desc_label.setWordWrap(True)
            info_layout.addWidget(desc_label)

        layout.addLayout(info_layout, stretch=1)

    def _on_toggle(self, state):
        """Handle checkbox toggle"""
        self.toggled.emit(self.prompt_id, state == Qt.CheckState.Checked.value)

    def set_enabled(self, enabled):
        """Set checkbox state"""
        self.checkbox.setChecked(enabled)


class PromptEditorDialog(QDialog):
    """Dialog for creating/editing a prompt"""

    def __init__(self, parent=None, prompt=None, category="system"):
        super().__init__(parent)
        self.prompt = prompt
        self.category = category

        self.setWindowTitle("Edit Prompt" if prompt else "New Prompt")
        self.setModal(True)
        self.resize(700, 600)

        self.init_ui()

        if prompt:
            self.load_prompt()

    def init_ui(self):
        """Initialize the editor UI"""
        layout = QVBoxLayout(self)
        layout.setSpacing(12)

        # Form for metadata
        form_group = QGroupBox("Prompt Information")
        form_layout = QFormLayout()

        self.name_edit = QLineEdit()
        self.name_edit.setPlaceholderText("Enter a descriptive name for this prompt")
        form_layout.addRow("Name:", self.name_edit)

        self.description_edit = QLineEdit()
        self.description_edit.setPlaceholderText("Brief description (shown as subtitle)")
        form_layout.addRow("Description:", self.description_edit)

        # Category display
        category_label = QLabel(self.category.title())
        category_label.setProperty("class", "status")
        form_layout.addRow("Category:", category_label)

        form_group.setLayout(form_layout)
        layout.addWidget(form_group)

        # Prompt text editor
        editor_group = QGroupBox("Prompt Text")
        editor_layout = QVBoxLayout()

        self.prompt_edit = QTextEdit()
        self.prompt_edit.setPlaceholderText(
            "Enter your prompt text here.\n\n"
            "Tips:\n"
            "- Be specific and clear\n"
            "- Use examples when possible\n"
            "- Define the output format you want\n"
            "- System prompts should convert transcripts to notes\n"
            "- Editor prompts should reformat existing notes\n"
            "- Enhancement prompts should add value (AVS, billing, etc.)"
        )
        self.prompt_edit.setMinimumHeight(300)
        editor_layout.addWidget(self.prompt_edit)

        # Character count
        self.char_count_label = QLabel("Characters: 0")
        self.char_count_label.setProperty("class", "subtitle")
        self.prompt_edit.textChanged.connect(self.update_char_count)
        editor_layout.addWidget(self.char_count_label)

        editor_group.setLayout(editor_layout)
        layout.addWidget(editor_group)

        # Buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()

        cancel_btn = QPushButton("Cancel")
        cancel_btn.setProperty("class", "secondary")
        cancel_btn.clicked.connect(self.reject)
        btn_layout.addWidget(cancel_btn)

        save_btn = QPushButton("Save Prompt")
        save_btn.clicked.connect(self.accept)
        btn_layout.addWidget(save_btn)

        layout.addLayout(btn_layout)

    def load_prompt(self):
        """Load prompt data into editor"""
        if self.prompt:
            self.name_edit.setText(self.prompt.name)
            if hasattr(self.prompt, 'description'):
                self.description_edit.setText(self.prompt.description or "")
            self.prompt_edit.setPlainText(self.prompt.prompt)
            self.update_char_count()

    def update_char_count(self):
        """Update character count"""
        count = len(self.prompt_edit.toPlainText())
        self.char_count_label.setText(f"Characters: {count:,}")

    def get_prompt_data(self):
        """Get the edited prompt data"""
        return {
            "name": self.name_edit.text().strip(),
            "description": self.description_edit.text().strip(),
            "prompt": self.prompt_edit.toPlainText().strip()
        }


class WorkflowBuilderDialog(QDialog):
    """Dialog for building custom workflow sequences"""

    def __init__(self, parent=None, prompt_manager=None):
        super().__init__(parent)
        self.prompt_manager = prompt_manager

        self.setWindowTitle("Workflow Builder")
        self.setModal(True)
        self.resize(900, 600)

        self.init_ui()
        self.load_workflow()

    def init_ui(self):
        """Initialize the workflow builder UI"""
        layout = QVBoxLayout(self)

        # Instructions
        info_label = QLabel(
            "Build your custom workflow by selecting which prompts run and in what order. "
            "The execution order determines how your transcript is processed into the final note."
        )
        info_label.setWordWrap(True)
        info_label.setProperty("class", "subtitle")
        layout.addWidget(info_label)

        # Main splitter
        splitter = QSplitter(Qt.Orientation.Horizontal)

        # Left: Available prompts
        available_widget = QWidget()
        available_layout = QVBoxLayout(available_widget)

        available_label = QLabel("Available Prompts")
        available_label.setFont(QFont("", 14, QFont.Weight.Medium))
        available_layout.addWidget(available_label)

        self.available_list = QListWidget()
        self.available_list.setSelectionMode(QListWidget.SelectionMode.SingleSelection)
        available_layout.addWidget(self.available_list)

        add_btn = QPushButton("Add to Workflow →")
        add_btn.clicked.connect(self.add_to_workflow)
        available_layout.addWidget(add_btn)

        splitter.addWidget(available_widget)

        # Right: Current workflow
        workflow_widget = QWidget()
        workflow_layout = QVBoxLayout(workflow_widget)

        workflow_label = QLabel("Current Workflow (Execution Order)")
        workflow_label.setFont(QFont("", 14, QFont.Weight.Medium))
        workflow_layout.addWidget(workflow_label)

        self.workflow_list = QListWidget()
        self.workflow_list.setSelectionMode(QListWidget.SelectionMode.SingleSelection)
        workflow_layout.addWidget(self.workflow_list)

        # Workflow controls
        control_layout = QHBoxLayout()

        move_up_btn = QPushButton("Move Up")
        move_up_btn.setProperty("class", "secondary")
        move_up_btn.clicked.connect(self.move_up)
        control_layout.addWidget(move_up_btn)

        move_down_btn = QPushButton("Move Down")
        move_down_btn.setProperty("class", "secondary")
        move_down_btn.clicked.connect(self.move_down)
        control_layout.addWidget(move_down_btn)

        remove_btn = QPushButton("Remove")
        remove_btn.setProperty("class", "danger")
        remove_btn.clicked.connect(self.remove_from_workflow)
        control_layout.addWidget(remove_btn)

        workflow_layout.addLayout(control_layout)

        splitter.addWidget(workflow_widget)
        splitter.setSizes([450, 450])

        layout.addWidget(splitter)

        # Bottom buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()

        cancel_btn = QPushButton("Cancel")
        cancel_btn.setProperty("class", "secondary")
        cancel_btn.clicked.connect(self.reject)
        btn_layout.addWidget(cancel_btn)

        save_btn = QPushButton("Save Workflow")
        save_btn.clicked.connect(self.save_workflow)
        btn_layout.addWidget(save_btn)

        layout.addLayout(btn_layout)

    def load_workflow(self):
        """Load current prompts into the UI"""
        if not self.prompt_manager or not self.prompt_manager.config:
            return

        # Clear lists
        self.available_list.clear()
        self.workflow_list.clear()

        # Load all prompts as available
        for category, prompts in [
            ("System", self.prompt_manager.config.systemPrompts),
            ("Editor", self.prompt_manager.config.editorPrompts),
            ("Enhancement", self.prompt_manager.config.enhancementPrompts)
        ]:
            for prompt in prompts:
                item_text = f"[{category}] {prompt.name}"
                item = QListWidgetItem(item_text)
                item.setData(Qt.ItemDataRole.UserRole, (category.lower(), prompt.id, prompt.name))

                if prompt.enabled:
                    # Add to workflow
                    workflow_item = QListWidgetItem(item_text)
                    workflow_item.setData(Qt.ItemDataRole.UserRole, (category.lower(), prompt.id, prompt.name))
                    self.workflow_list.addItem(workflow_item)
                else:
                    # Add to available
                    self.available_list.addItem(item)

    def add_to_workflow(self):
        """Add selected prompt to workflow"""
        current = self.available_list.currentItem()
        if not current:
            return

        # Move to workflow
        data = current.data(Qt.ItemDataRole.UserRole)
        workflow_item = QListWidgetItem(current.text())
        workflow_item.setData(Qt.ItemDataRole.UserRole, data)
        self.workflow_list.addItem(workflow_item)

        # Remove from available
        self.available_list.takeItem(self.available_list.row(current))

    def remove_from_workflow(self):
        """Remove selected prompt from workflow"""
        current = self.workflow_list.currentItem()
        if not current:
            return

        # Move back to available
        data = current.data(Qt.ItemDataRole.UserRole)
        available_item = QListWidgetItem(current.text())
        available_item.setData(Qt.ItemDataRole.UserRole, data)
        self.available_list.addItem(available_item)

        # Remove from workflow
        self.workflow_list.takeItem(self.workflow_list.row(current))

    def move_up(self):
        """Move selected item up in workflow"""
        current_row = self.workflow_list.currentRow()
        if current_row > 0:
            item = self.workflow_list.takeItem(current_row)
            self.workflow_list.insertItem(current_row - 1, item)
            self.workflow_list.setCurrentRow(current_row - 1)

    def move_down(self):
        """Move selected item down in workflow"""
        current_row = self.workflow_list.currentRow()
        if current_row < self.workflow_list.count() - 1:
            item = self.workflow_list.takeItem(current_row)
            self.workflow_list.insertItem(current_row + 1, item)
            self.workflow_list.setCurrentRow(current_row + 1)

    def save_workflow(self):
        """Save the workflow configuration"""
        if not self.prompt_manager or not self.prompt_manager.config:
            QMessageBox.warning(self, "Error", "No configuration loaded")
            return

        # Disable all prompts first
        for prompt in self.prompt_manager.config.systemPrompts:
            prompt.enabled = False
        for prompt in self.prompt_manager.config.editorPrompts:
            prompt.enabled = False
        for prompt in self.prompt_manager.config.enhancementPrompts:
            prompt.enabled = False

        # Enable prompts in workflow and set order
        workflow_order = []
        for i in range(self.workflow_list.count()):
            item = self.workflow_list.item(i)
            category, prompt_id, name = item.data(Qt.ItemDataRole.UserRole)
            workflow_order.append((category, prompt_id, i))

            # Find and enable the prompt
            if category == "system":
                prompts = self.prompt_manager.config.systemPrompts
            elif category == "editor":
                prompts = self.prompt_manager.config.editorPrompts
            else:
                prompts = self.prompt_manager.config.enhancementPrompts

            for prompt in prompts:
                if prompt.id == prompt_id:
                    prompt.enabled = True
                    if hasattr(prompt, 'order'):
                        prompt.order = i
                    break

        # Save configuration
        if self.prompt_manager.save_prompts():
            QMessageBox.information(self, "Success", "Workflow saved successfully!")
            self.accept()
        else:
            QMessageBox.warning(self, "Error", "Failed to save workflow")


class PromptLibraryDialog(QDialog):
    """Main prompt library management dialog"""

    def __init__(self, parent=None, prompt_manager=None):
        super().__init__(parent)
        self.prompt_manager = prompt_manager

        self.setWindowTitle("Prompt Library Manager")
        self.setModal(True)
        self.resize(1000, 700)

        self.init_ui()
        self.load_prompts()

    def init_ui(self):
        """Initialize the UI"""
        layout = QVBoxLayout(self)
        layout.setSpacing(12)

        # Header
        header_layout = QHBoxLayout()

        title = QLabel("Prompt Library")
        title.setProperty("class", "title")
        header_layout.addWidget(title)

        header_layout.addStretch()

        workflow_btn = QPushButton("Configure Workflow")
        workflow_btn.clicked.connect(self.open_workflow_builder)
        header_layout.addWidget(workflow_btn)

        layout.addLayout(header_layout)

        # Tabs for categories
        self.tabs = QTabWidget()

        self.system_tab = self.create_category_tab("system")
        self.tabs.addTab(self.system_tab, "System Prompts")

        self.editor_tab = self.create_category_tab("editor")
        self.tabs.addTab(self.editor_tab, "Editor Prompts")

        self.enhancement_tab = self.create_category_tab("enhancement")
        self.tabs.addTab(self.enhancement_tab, "Enhancement Prompts")

        layout.addWidget(self.tabs)

        # Bottom buttons
        btn_layout = QHBoxLayout()
        btn_layout.addStretch()

        close_btn = QPushButton("Close")
        close_btn.setProperty("class", "secondary")
        close_btn.clicked.connect(self.accept)
        btn_layout.addWidget(close_btn)

        layout.addLayout(btn_layout)

    def create_category_tab(self, category):
        """Create a tab for a prompt category"""
        widget = QWidget()
        layout = QVBoxLayout(widget)

        # Controls
        control_layout = QHBoxLayout()

        add_btn = QPushButton(f"Add {category.title()} Prompt")
        add_btn.clicked.connect(lambda: self.add_prompt(category))
        control_layout.addWidget(add_btn)

        control_layout.addStretch()

        layout.addLayout(control_layout)

        # Prompt list
        prompt_list = QListWidget()
        prompt_list.setProperty("category", category)
        prompt_list.itemDoubleClicked.connect(self.edit_prompt_from_item)
        layout.addWidget(prompt_list)

        # Action buttons
        action_layout = QHBoxLayout()

        edit_btn = QPushButton("Edit")
        edit_btn.setProperty("class", "secondary")
        edit_btn.clicked.connect(lambda: self.edit_prompt(category))
        action_layout.addWidget(edit_btn)

        delete_btn = QPushButton("Delete")
        delete_btn.setProperty("class", "danger")
        delete_btn.clicked.connect(lambda: self.delete_prompt(category))
        action_layout.addWidget(delete_btn)

        action_layout.addStretch()

        layout.addLayout(action_layout)

        return widget

    def load_prompts(self):
        """Load prompts into all tabs"""
        if not self.prompt_manager or not self.prompt_manager.config:
            return

        # Load system prompts
        system_list = self.system_tab.findChild(QListWidget)
        system_list.clear()
        for prompt in self.prompt_manager.config.systemPrompts:
            self.add_prompt_item(system_list, prompt, "system")

        # Load editor prompts
        editor_list = self.editor_tab.findChild(QListWidget)
        editor_list.clear()
        for prompt in self.prompt_manager.config.editorPrompts:
            self.add_prompt_item(editor_list, prompt, "editor")

        # Load enhancement prompts
        enhancement_list = self.enhancement_tab.findChild(QListWidget)
        enhancement_list.clear()
        for prompt in self.prompt_manager.config.enhancementPrompts:
            self.add_prompt_item(enhancement_list, prompt, "enhancement")

    def add_prompt_item(self, list_widget, prompt, category):
        """Add a prompt item to a list"""
        description = getattr(prompt, 'description', '') or ''

        item = QListWidgetItem()
        widget = PromptItemWidget(
            prompt.id,
            prompt.name,
            description,
            prompt.enabled,
            category
        )
        widget.toggled.connect(self.toggle_prompt)

        item.setSizeHint(widget.sizeHint())
        item.setData(Qt.ItemDataRole.UserRole, prompt.id)

        list_widget.addItem(item)
        list_widget.setItemWidget(item, widget)

    def toggle_prompt(self, prompt_id, enabled):
        """Toggle a prompt on/off"""
        # For system/editor, only one can be active at a time
        # For enhancements, multiple can be active
        # This is handled in the prompt manager
        logger.info(f"Toggling prompt {prompt_id} to {enabled}")

    def add_prompt(self, category):
        """Add a new prompt"""
        dialog = PromptEditorDialog(self, category=category)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            data = dialog.get_prompt_data()

            if not data["name"] or not data["prompt"]:
                QMessageBox.warning(self, "Invalid Input", "Name and prompt text are required")
                return

            if self.prompt_manager.add_prompt(category, data["name"], data["prompt"]):
                # Add description if supported
                prompts = getattr(self.prompt_manager.config, f"{category}Prompts")
                if prompts:
                    latest = prompts[-1]
                    if data["description"]:
                        latest.description = data["description"]

                self.prompt_manager.save_prompts()
                self.load_prompts()
                QMessageBox.information(self, "Success", "Prompt added successfully!")
            else:
                QMessageBox.warning(self, "Error", "Failed to add prompt")

    def edit_prompt(self, category):
        """Edit selected prompt"""
        # Get the current tab's list widget
        if category == "system":
            list_widget = self.system_tab.findChild(QListWidget)
        elif category == "editor":
            list_widget = self.editor_tab.findChild(QListWidget)
        else:
            list_widget = self.enhancement_tab.findChild(QListWidget)

        current_item = list_widget.currentItem()
        if not current_item:
            QMessageBox.information(self, "No Selection", "Please select a prompt to edit")
            return

        self.edit_prompt_from_item(current_item)

    def edit_prompt_from_item(self, item):
        """Edit a prompt from a list item"""
        prompt_id = item.data(Qt.ItemDataRole.UserRole)

        # Find the prompt
        prompt = None
        category = None

        for cat, prompts in [
            ("system", self.prompt_manager.config.systemPrompts),
            ("editor", self.prompt_manager.config.editorPrompts),
            ("enhancement", self.prompt_manager.config.enhancementPrompts)
        ]:
            for p in prompts:
                if p.id == prompt_id:
                    prompt = p
                    category = cat
                    break
            if prompt:
                break

        if not prompt:
            return

        dialog = PromptEditorDialog(self, prompt=prompt, category=category)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            data = dialog.get_prompt_data()

            if not data["name"] or not data["prompt"]:
                QMessageBox.warning(self, "Invalid Input", "Name and prompt text are required")
                return

            # Update prompt
            prompt.name = data["name"]
            prompt.prompt = data["prompt"]
            if data["description"]:
                prompt.description = data["description"]

            self.prompt_manager.save_prompts()
            self.load_prompts()
            QMessageBox.information(self, "Success", "Prompt updated successfully!")

    def delete_prompt(self, category):
        """Delete selected prompt"""
        # Get the current tab's list widget
        if category == "system":
            list_widget = self.system_tab.findChild(QListWidget)
            prompts = self.prompt_manager.config.systemPrompts
        elif category == "editor":
            list_widget = self.editor_tab.findChild(QListWidget)
            prompts = self.prompt_manager.config.editorPrompts
        else:
            list_widget = self.enhancement_tab.findChild(QListWidget)
            prompts = self.prompt_manager.config.enhancementPrompts

        current_item = list_widget.currentItem()
        if not current_item:
            QMessageBox.information(self, "No Selection", "Please select a prompt to delete")
            return

        prompt_id = current_item.data(Qt.ItemDataRole.UserRole)

        # Confirm deletion
        reply = QMessageBox.question(
            self,
            "Confirm Deletion",
            "Are you sure you want to delete this prompt?",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )

        if reply == QMessageBox.StandardButton.Yes:
            # Remove prompt
            for i, p in enumerate(prompts):
                if p.id == prompt_id:
                    prompts.pop(i)
                    break

            self.prompt_manager.save_prompts()
            self.load_prompts()
            QMessageBox.information(self, "Success", "Prompt deleted successfully!")

    def open_workflow_builder(self):
        """Open the workflow builder dialog"""
        dialog = WorkflowBuilderDialog(self, self.prompt_manager)
        if dialog.exec() == QDialog.DialogCode.Accepted:
            self.load_prompts()
