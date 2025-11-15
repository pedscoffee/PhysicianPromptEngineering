#!/usr/bin/env python3
"""
Build script for creating Mac .app bundle
Uses py2app to create standalone application

Usage:
    python build_app.py py2app
"""

from setuptools import setup

APP = ['app.py']
DATA_FILES = [
    ('config', ['config/default_prompts.json', 'config/medical_dictionary.json'])
]

OPTIONS = {
    'argv_emulation': False,
    'packages': [
        'PyQt6',
        'faster_whisper',
        'llama_cpp',
        'sounddevice',
        'soundfile',
        'numpy',
        'pydantic',
    ],
    'includes': [
        'ui.main_window',
        'ui.styles',
        'engines.whisper_engine',
        'engines.llm_engine',
        'engines.prompt_manager',
    ],
    'excludes': [
        'matplotlib',
        'PIL',
        'tkinter',
    ],
    'iconfile': None,  # TODO: Add app icon
    'plist': {
        'CFBundleName': "Doc Pixel's Scribe",
        'CFBundleDisplayName': "Doc Pixel's Scribe",
        'CFBundleIdentifier': 'com.physicianpromptengineering.scribe',
        'CFBundleVersion': '1.0.0',
        'CFBundleShortVersionString': '1.0.0',
        'NSHumanReadableCopyright': 'Copyright © 2025 Physician Prompt Engineering',
        'NSMicrophoneUsageDescription': 'This app requires microphone access to record clinical encounters.',
        'LSMinimumSystemVersion': '11.0',  # macOS Big Sur or later
    },
}

setup(
    app=APP,
    data_files=DATA_FILES,
    options={'py2app': OPTIONS},
    setup_requires=['py2app'],
)
