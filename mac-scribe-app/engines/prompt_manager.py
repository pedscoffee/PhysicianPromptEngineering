"""
Prompt Manager - Manages system, editor, and enhancement prompts
Handles loading, saving, and executing multi-stage prompt workflows
"""

import json
from pathlib import Path
from typing import Optional, List, Dict, Any, Callable
from pydantic import BaseModel
import logging

logger = logging.getLogger(__name__)


class Prompt(BaseModel):
    """Single prompt configuration"""
    id: str
    name: str
    prompt: str
    enabled: bool = False
    isDefault: bool = False


class PromptConfiguration(BaseModel):
    """Complete prompt configuration"""
    systemPrompts: List[Prompt]
    editorPrompts: List[Prompt]
    enhancementPrompts: List[Prompt]
    metadata: Dict[str, Any]


class PromptManager:
    """Manages prompts and multi-stage processing workflow"""

    def __init__(self, config_path: Optional[str] = None):
        """
        Initialize prompt manager

        Args:
            config_path: Path to prompts configuration file
        """
        self.config_path = config_path
        self.config: Optional[PromptConfiguration] = None

        # Default config location
        if self.config_path is None:
            config_dir = Path(__file__).parent.parent / "config"
            self.config_path = str(config_dir / "default_prompts.json")

    def load_prompts(self) -> bool:
        """
        Load prompts from configuration file

        Returns:
            True if successful, False otherwise
        """
        try:
            with open(self.config_path, 'r') as f:
                data = json.load(f)

            self.config = PromptConfiguration(**data)
            logger.info(f"Loaded prompts from {self.config_path}")
            return True

        except Exception as e:
            logger.error(f"Error loading prompts: {e}")
            return False

    def save_prompts(self, save_path: Optional[str] = None) -> bool:
        """
        Save prompts to configuration file

        Args:
            save_path: Path to save to (uses default if None)

        Returns:
            True if successful, False otherwise
        """
        if self.config is None:
            logger.error("No configuration to save")
            return False

        try:
            path = save_path or self.config_path
            with open(path, 'w') as f:
                json.dump(
                    self.config.model_dump(),
                    f,
                    indent=2
                )

            logger.info(f"Saved prompts to {path}")
            return True

        except Exception as e:
            logger.error(f"Error saving prompts: {e}")
            return False

    def get_active_system_prompt(self) -> Optional[Prompt]:
        """Get the active system prompt"""
        if self.config is None:
            return None

        for prompt in self.config.systemPrompts:
            if prompt.enabled:
                return prompt

        # Fallback to first prompt
        return self.config.systemPrompts[0] if self.config.systemPrompts else None

    def get_active_editor_prompt(self) -> Optional[Prompt]:
        """Get the active editor prompt (if enabled)"""
        if self.config is None:
            return None

        for prompt in self.config.editorPrompts:
            if prompt.enabled:
                return prompt

        return None

    def get_active_enhancement_prompts(self) -> List[Prompt]:
        """Get all active enhancement prompts"""
        if self.config is None:
            return []

        return [p for p in self.config.enhancementPrompts if p.enabled]

    def export_configuration(self, export_path: str, include_medical_dict: bool = True) -> bool:
        """
        Export configuration to file

        Args:
            export_path: Path to export to
            include_medical_dict: Whether to include medical dictionary

        Returns:
            True if successful, False otherwise
        """
        try:
            export_data = {
                "version": "1.0",
                "exportedAt": str(Path.home()),
                "prompts": self.config.model_dump() if self.config else {}
            }

            if include_medical_dict:
                dict_path = Path(self.config_path).parent / "medical_dictionary.json"
                if dict_path.exists():
                    with open(dict_path, 'r') as f:
                        export_data["medicalDictionary"] = json.load(f)

            with open(export_path, 'w') as f:
                json.dump(export_data, f, indent=2)

            logger.info(f"Exported configuration to {export_path}")
            return True

        except Exception as e:
            logger.error(f"Error exporting configuration: {e}")
            return False

    def import_configuration(self, import_path: str, merge: bool = True) -> bool:
        """
        Import configuration from file

        Args:
            import_path: Path to import from
            merge: If True, merge with existing; if False, replace

        Returns:
            True if successful, False otherwise
        """
        try:
            with open(import_path, 'r') as f:
                import_data = json.load(f)

            if "prompts" not in import_data:
                logger.error("Invalid import file: missing prompts data")
                return False

            imported_config = PromptConfiguration(**import_data["prompts"])

            if merge and self.config:
                # Merge mode: add imported prompts that don't exist
                for prompt in imported_config.systemPrompts:
                    if not any(p.id == prompt.id for p in self.config.systemPrompts):
                        self.config.systemPrompts.append(prompt)

                for prompt in imported_config.editorPrompts:
                    if not any(p.id == prompt.id for p in self.config.editorPrompts):
                        self.config.editorPrompts.append(prompt)

                for prompt in imported_config.enhancementPrompts:
                    if not any(p.id == prompt.id for p in self.config.enhancementPrompts):
                        self.config.enhancementPrompts.append(prompt)
            else:
                # Replace mode
                self.config = imported_config

            # Import medical dictionary if present
            if "medicalDictionary" in import_data:
                dict_path = Path(self.config_path).parent / "medical_dictionary.json"
                with open(dict_path, 'w') as f:
                    json.dump(import_data["medicalDictionary"], f, indent=2)

            logger.info(f"Imported configuration from {import_path}")
            return True

        except Exception as e:
            logger.error(f"Error importing configuration: {e}")
            return False

    def toggle_prompt(self, category: str, prompt_id: str) -> bool:
        """
        Toggle a prompt's enabled status

        Args:
            category: 'system', 'editor', or 'enhancement'
            prompt_id: ID of prompt to toggle

        Returns:
            True if successful, False otherwise
        """
        if self.config is None:
            return False

        try:
            if category == "system":
                prompts = self.config.systemPrompts
            elif category == "editor":
                prompts = self.config.editorPrompts
            elif category == "enhancement":
                prompts = self.config.enhancementPrompts
            else:
                return False

            for prompt in prompts:
                if prompt.id == prompt_id:
                    new_state = not prompt.enabled

                    # For system/editor, only one can be active
                    if category in ["system", "editor"] and new_state:
                        for p in prompts:
                            p.enabled = False

                    prompt.enabled = new_state
                    return True

            return False

        except Exception as e:
            logger.error(f"Error toggling prompt: {e}")
            return False

    def add_prompt(self, category: str, name: str, prompt_text: str) -> bool:
        """
        Add a new custom prompt

        Args:
            category: 'system', 'editor', or 'enhancement'
            name: Prompt name
            prompt_text: Prompt content

        Returns:
            True if successful, False otherwise
        """
        if self.config is None:
            return False

        try:
            import time

            new_prompt = Prompt(
                id=f"custom-{category}-{int(time.time())}",
                name=name,
                prompt=prompt_text,
                enabled=False,
                isDefault=False
            )

            if category == "system":
                self.config.systemPrompts.append(new_prompt)
            elif category == "editor":
                self.config.editorPrompts.append(new_prompt)
            elif category == "enhancement":
                self.config.enhancementPrompts.append(new_prompt)
            else:
                return False

            logger.info(f"Added new {category} prompt: {name}")
            return True

        except Exception as e:
            logger.error(f"Error adding prompt: {e}")
            return False
