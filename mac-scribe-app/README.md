# Doc Pixel's Scribe - Offline AI Medical Scribe for macOS

A fully offline, privacy-focused AI-powered medical documentation tool that runs entirely on your Mac. Your data never leaves your device.

## Features

- 🔒 **100% Offline & Private** - All processing happens locally on your Mac
- 🎤 **Voice Recording** - Record clinical encounters directly in the app
- 📝 **AI Transcription** - Whisper Medium model (optimized for M-series Macs)
- 🎯 **Smart Documentation** - Multi-stage AI processing with customizable prompts
- ⚙️ **Fully Customizable** - Edit system, editor, and enhancement prompts
- 📊 **Multiple Outputs** - Generate clinical notes, AVS, billing summaries, and more
- 🎮 **Retro UI** - Inspired by classic pixel art games
- 💰 **Free Forever** - No subscriptions, no API costs

## System Requirements

- **macOS**: 11.0 (Big Sur) or later
- **Chip**: M1/M2/M3 Mac (Apple Silicon)
- **RAM**: 16GB unified memory (recommended)
- **Storage**: 10GB free space (for AI models)
- **Microphone**: Required for recording

## Installation

### Option 1: Download Pre-built App (Recommended)

1. Download `DocPixelsScribe.dmg` from [Releases](releases)
2. Open the DMG file
3. Drag **Doc Pixel's Scribe** to your Applications folder
4. Open the app (you may need to allow it in System Settings → Privacy & Security)

### Option 2: Build from Source

#### Prerequisites

```bash
# Install Python 3.10 or later
brew install python@3.10

# Install portaudio (for sounddevice)
brew install portaudio

# Install llama.cpp with Metal support (for M-series GPU acceleration)
CMAKE_ARGS="-DLLAMA_METAL=on" pip install llama-cpp-python
```

#### Build Steps

```bash
# Clone the repository
git clone https://github.com/pedscoffee/mac-scribe-app.git
cd mac-scribe-app

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install llama-cpp-python with Metal support
CMAKE_ARGS="-DLLAMA_METAL=on" pip install llama-cpp-python --force-reinstall --no-cache-dir

# Run the app directly
python app.py

# OR build .app bundle
pip install py2app
python build_app.py py2app

# The built app will be in dist/Doc Pixel's Scribe.app
```

## First-Time Setup

1. **Launch the app** - Open Doc Pixel's Scribe from Applications
2. **Click "Initialize AI Models"** - This downloads required models (~5GB total):
   - Whisper Medium (~500MB) - Speech-to-text
   - Mistral 7B Instruct (~4GB) - Clinical note generation
3. **Wait 10-30 minutes** - First-time setup downloads models (cached for future use)
4. **Grant microphone access** - When prompted by macOS

**Note**: After initial setup, the app launches in ~10-20 seconds.

## Usage

### Basic Workflow

1. **Initialize AI** (first time only)
   - Click "🚀 Initialize AI Models"
   - Wait for models to download and load

2. **Record Clinical Encounter**
   - Click "⏺️ Start Recording"
   - Speak clearly about the patient encounter
   - Click "⏹️ Stop & Transcribe"

3. **Review Transcription**
   - Edit the transcription if needed
   - Ensure medical terms are correct

4. **Generate Clinical Notes**
   - Click "🎯 Generate Clinical Notes"
   - Wait for AI processing (~1-2 minutes)
   - Review outputs in tabs

5. **Copy or Save**
   - Click "📋 Copy All Outputs" or "💾 Save All"
   - Paste into your EMR

### Customizing Prompts

1. Click **▼ Show Customization**
2. View active prompts in the list
3. Click **📤 Export Config** to save your current setup
4. Edit `config/default_prompts.json` to customize prompts
5. Click **📥 Import Config** to load custom prompts

### Medical Dictionary

The app uses a medical terminology dictionary to improve transcription accuracy:

- **Edit**: Click "📖 Edit Medical Terms"
- **Location**: `config/medical_dictionary.json`
- **Add terms**: Medications, diagnoses, procedures specific to your specialty

## Prompt System

The app uses a three-tier prompt system:

### 1. System Prompts (Required)
Transforms raw transcription into structured medical note. Only one active at a time.

**Example**: "Standard Medical Note" - Creates SOAP/HPI format

### 2. Editor Prompts (Optional)
Reformats the medical note into a different structure.

**Example**: "APSO Formatter" - Reorganizes into Assessment/Plan/Subjective/Objective

### 3. Enhancement Prompts (Multiple)
Generates additional outputs from the medical note.

**Examples**:
- "After-Visit Summary" - Patient-friendly discharge instructions
- "Billing & MDM Summary" - Medical decision making for coding
- Custom: Specialist referral letters, patient handouts, etc.

## Privacy & Security

### What Makes This App Private?

✅ **No Internet Required** - After setup, works completely offline
✅ **Local Processing** - All AI runs on your Mac's GPU
✅ **No Data Transmission** - Nothing sent to external servers
✅ **Session Clearing** - All data cleared when you close the app
✅ **No Analytics** - No telemetry, no tracking, no logging to external services

### HIPAA Compliance Notes

While this tool is designed for privacy:

- ✅ It runs entirely offline (no PHI transmission)
- ✅ Session data is automatically cleared
- ⚠️ **You are responsible for**:
  - Securing your Mac (enable FileVault encryption)
  - Following your institution's IT policies
  - Reviewing all AI-generated content before use
  - Ensuring compliance with your facility's documentation standards

**This tool is for EDUCATIONAL purposes only.** Always review AI-generated notes before adding to patient records.

## Troubleshooting

### "Microphone access denied"
**Solution**: System Settings → Privacy & Security → Microphone → Enable for Doc Pixel's Scribe

### "Models failed to download"
**Solution**:
- Check internet connection
- Ensure 10GB free disk space
- Try running from Terminal to see detailed logs:
  ```bash
  /Applications/Doc\ Pixel\'s\ Scribe.app/Contents/MacOS/Doc\ Pixel\'s\ Scribe
  ```

### "App is damaged and can't be opened"
**Solution**: macOS Gatekeeper security
```bash
xattr -cr /Applications/Doc\ Pixel\'s\ Scribe.app
```

### "Transcription is inaccurate"
**Solution**:
- Speak clearly and slowly
- Use a quiet environment
- Add specialty-specific terms to medical dictionary
- Review and edit transcription before processing

### "LLM generation is slow"
**Solution**:
- First generation is slower (model loading)
- Ensure other apps aren't using too much RAM
- M1 Macs may be slower than M3 (~2-3x)
- Consider using smaller prompts (fewer tokens)

## Performance Tips

### For M1 Macs (8GB RAM)
- Close other apps before using
- Process shorter encounters (<5 minutes)
- Use fewer enhancement prompts

### For M2/M3 Macs (16GB+ RAM)
- Can handle longer encounters (10-15 minutes)
- Multiple enhancement prompts work well
- Background app usage is fine

### Optimizing Speed
- Keep prompts concise (fewer tokens = faster)
- Disable enhancement prompts you don't need
- Use the editor prompt only when necessary
- Batch process multiple encounters at once

## Architecture

```
app.py                      # Main application entry point
├── ui/
│   ├── main_window.py      # PyQt6 main window
│   ├── styles.py           # Retro pixelated stylesheet
│   └── widgets/            # Custom UI widgets
├── engines/
│   ├── whisper_engine.py   # Speech-to-text (faster-whisper)
│   ├── llm_engine.py       # Text generation (llama.cpp)
│   └── prompt_manager.py   # Prompt configuration system
├── config/
│   ├── default_prompts.json      # System/editor/enhancement prompts
│   └── medical_dictionary.json   # Medical terminology for STT
└── ~/.cache/mac-scribe-app/
    ├── whisper/            # Cached Whisper models
    ├── llm/                # Cached LLM models
    └── temp_recording.wav  # Temporary audio file
```

## Contributing

This project is part of [Physician Prompt Engineering](https://physicianpromptengineering.com).

Contributions welcome:
- Custom prompts for different specialties
- UI improvements
- Bug fixes
- Documentation

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - See [LICENSE](LICENSE) for details

## Credits

- **Whisper** - OpenAI (speech-to-text)
- **llama.cpp** - Georgi Gerganov (fast LLM inference)
- **Mistral 7B** - Mistral AI (language model)
- **PyQt6** - Riverbank Computing (GUI framework)
- **Physician Prompt Engineering** - Project inspiration and prompts

## Support

- **Issues**: [GitHub Issues](https://github.com/pedscoffee/mac-scribe-app/issues)
- **Website**: [Physician Prompt Engineering](https://physicianpromptengineering.com)
- **Email**: pedscoffee@gmail.com (for security issues only)

## Disclaimer

**FOR EDUCATIONAL USE ONLY**

This software is provided for educational purposes. It is not a substitute for professional medical judgment. All AI-generated content must be reviewed by a licensed physician before use in patient care.

The authors assume no liability for clinical decisions made using this tool.

---

**Made with ❤️ for physicians who value privacy and efficiency**

*From the creator of [Physician Prompt Engineering](https://physicianpromptengineering.com)*
