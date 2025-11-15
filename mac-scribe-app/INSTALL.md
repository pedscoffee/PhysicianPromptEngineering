# Installation Guide - Doc Pixel's Scribe

Complete installation instructions for Mac users.

## Quick Start (For Users)

1. Download the `.dmg` file
2. Open it and drag the app to Applications
3. Launch and click "Initialize AI Models"
4. Wait 10-30 minutes for first-time setup
5. Start recording!

## Developer Installation (From Source)

### Step 1: Install System Dependencies

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python 3.10+
brew install python@3.10

# Install portaudio (required for sounddevice)
brew install portaudio
```

### Step 2: Clone Repository

```bash
git clone https://github.com/pedscoffee/mac-scribe-app.git
cd mac-scribe-app
```

### Step 3: Create Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 4: Install Python Dependencies

```bash
# Install basic dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Install llama-cpp-python with Metal support for M-series Macs
CMAKE_ARGS="-DLLAMA_METAL=on" pip install llama-cpp-python --force-reinstall --no-cache-dir
```

**Note**: The Metal-accelerated build is crucial for good performance on M-series Macs.

### Step 5: Test the Installation

```bash
# Run the app
python app.py
```

The app should launch. Click "Initialize AI Models" to download the required models.

### Step 6: Build .app Bundle (Optional)

```bash
# Install py2app
pip install py2app

# Build the app
python build_app.py py2app

# The app will be in dist/
open dist/
```

## Troubleshooting Installation

### "Command not found: python3"

**Solution**: Install Python via Homebrew
```bash
brew install python@3.10
```

### "PortAudio library not found"

**Solution**: Install portaudio
```bash
brew install portaudio
```

### llama-cpp-python build fails

**Solution**: Ensure you have Xcode Command Line Tools
```bash
xcode-select --install

# Then retry llama-cpp-python installation
CMAKE_ARGS="-DLLAMA_METAL=on" pip install llama-cpp-python --force-reinstall --no-cache-dir
```

### "ModuleNotFoundError: No module named 'PyQt6'"

**Solution**: Reinstall dependencies
```bash
pip install -r requirements.txt
```

### Models download is slow or fails

**Solution**:
1. Ensure stable internet connection
2. Retry initialization from the app
3. Manual download (if needed):
   ```bash
   # Whisper model will auto-download on first use
   # For LLM, check ~/.cache/mac-scribe-app/llm/
   ```

## Post-Installation Setup

### First Launch

1. Open the app
2. Grant microphone permissions when prompted
3. Click "Initialize AI Models"
4. **Be patient** - First download takes 10-30 minutes

### Verify Installation

Check that models are cached:
```bash
ls -lh ~/.cache/mac-scribe-app/
```

You should see:
- `whisper/` directory (~500MB)
- `llm/` directory with `.gguf` file (~4GB)

## System Requirements Check

Run this to verify your Mac meets requirements:

```bash
# Check macOS version (should be 11.0+)
sw_vers

# Check chip type (should be Apple Silicon)
sysctl -n machdep.cpu.brand_string

# Check RAM (should be 16GB+)
sysctl hw.memsize | awk '{print $2/1024/1024/1024 " GB"}'

# Check free disk space (should have 10GB+ free)
df -h ~
```

## Uninstallation

To completely remove the app:

```bash
# Remove app
rm -rf /Applications/Doc\ Pixel\'s\ Scribe.app

# Remove cached models (~5GB)
rm -rf ~/.cache/mac-scribe-app

# Remove config (if you want to reset settings)
# Config is in the app bundle, so removing the app removes config too
```

## Next Steps

After installation:

1. Read [README.md](README.md) for usage instructions
2. Customize prompts in `config/default_prompts.json`
3. Add your specialty terms to `config/medical_dictionary.json`
4. Start recording test encounters!

## Getting Help

- **Installation issues**: Open a [GitHub Issue](https://github.com/pedscoffee/mac-scribe-app/issues)
- **General questions**: See [README.md](README.md)
- **Bug reports**: Include your system info:
  ```bash
  sw_vers
  sysctl -n machdep.cpu.brand_string
  python --version
  ```
