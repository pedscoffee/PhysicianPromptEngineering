# Doc Pixel's Coffee ☕
## Privacy-First Offline Medical Scribe

Doc Pixel's Coffee is a progressive web app (PWA) that provides completely offline medical transcription and clinical note generation. Everything runs locally in your browser - no servers, no cloud, no data collection.

---

## Features

### 🔒 100% Private
- All processing happens offline in your browser
- No data ever sent to servers
- Audio and transcriptions auto-deleted when you close the session
- Works completely offline after initial model download

### 🎙️ Advanced Transcription
- **Whisper Large v3 Turbo** (1.5GB) for medical-grade speech recognition
- Optimized for clinical conversations
- High accuracy with medical terminology
- Batch processing of recordings

### 🤖 Intelligent Note Generation
- **Qwen 2.5-3B** (2GB) for clinical documentation
- Fully customizable prompt library
- Pre-built templates for multiple specialties
- Create and save your own prompts

### ⚙️ Powerful Prompt Management
- **System Prompts**: Convert transcription → clean medical note
- **Editor Prompts**: Reformat notes (SOAP, APSO, problem-oriented)
- **Enhancement Prompts**: Generate AVS, billing docs, patient handouts
- Import/export prompt configurations
- Specialty-specific templates

### 📱 Progressive Web App
- Install to home screen (iOS, Android, Desktop)
- Works offline after first download
- Updates automatically
- Native app-like experience

---

## Technical Specs

### Models
- **Whisper Large v3 Turbo**: Speech-to-text transcription
  - Size: ~1.5GB (quantized)
  - Accuracy: Production-grade
  - Language: English
- **Qwen 2.5-3B-Instruct**: Clinical note generation
  - Size: ~2GB (quantized)
  - Optimized for medical text
  - Fine-tuned for instruction following

### System Requirements
- **Browser**: Chrome/Edge 113+ (WebGPU support required)
- **RAM**: 8GB+ recommended (16GB optimal for M3 MacBook Air)
- **Storage**: ~4GB free space for models + cache
- **First-time setup**: 5-20 minutes (one-time download)
- **Subsequent loads**: Instant

### Platform Compatibility
- ✅ macOS (Safari with WebGPU, Chrome, Edge)
- ✅ Windows (Chrome, Edge)
- ✅ Linux (Chrome, Edge)
- ✅ iOS (Safari 17.4+)
- ✅ Android (Chrome)

---

## Installation

### Option 1: Install as PWA (Recommended)
1. Visit https://physicianpromptengineering.com/scribe-pwa/
2. Click "Install Coffee" when prompted (or use browser menu → Install)
3. App will be added to your home screen / applications folder
4. First launch: Models download automatically (~3.5GB)
5. Subsequent launches: Instant load, works offline

### Option 2: Use in Browser
1. Visit https://physicianpromptengineering.com/scribe-pwa/
2. Click "Initialize Coffee"
3. Wait for models to download
4. Use directly in browser tab

---

## Quick Start Guide

### 1. Record Audio
- Click **START RECORDING**
- Speak your clinical encounter clearly
- Click **STOP & TRANSCRIBE**
- Wait 1-3 minutes for transcription

### 2. Review Transcription
- Edit transcription if needed
- Correct any transcription errors
- Click **GENERATE NOTES**

### 3. Select Prompts
- **System Prompt**: Choose note format (required)
  - Standard Medical Note
  - Pithy Pediatrics
  - Emergency Medicine
  - Surgery Consult
  - Internal Medicine
  - Psychiatry
- **Editor Prompt**: Reformat (optional)
  - APSO Formatter
  - SOAP Formatter
  - Problem List
- **Enhancement Prompts**: Additional outputs (optional)
  - After-Visit Summary
  - Billing & MDM
  - Patient Handout
  - Order Suggester
  - Teaching Points
  - Referral Letter

### 4. Process & Download
- Click **PROCESS WITH SELECTED PROMPTS**
- Wait for AI to generate notes
- Review, edit, and copy outputs
- Export session if needed

### 5. Privacy
- Click **NEW SESSION** to clear all data
- All data auto-deleted when you close the app

---

## Prompt Management

### Creating Custom Prompts

1. Click **MANAGE PROMPTS**
2. Choose prompt category (System/Editor/Enhancement)
3. Click **CREATE NEW PROMPT**
4. Enter:
   - Name (e.g., "My Custom EM Note")
   - Specialty (e.g., "Emergency Medicine")
   - Description
   - Prompt text with instructions
5. **SAVE**

### Prompt Best Practices

**System Prompts**:
- Start with clear role definition
- Include output format specification
- Use few-shot examples (3-5)
- Define what NOT to do (critical rules)
- End with "TRANSCRIPTION:"

**Editor Prompts**:
- State reorganization goal only
- Don't add/remove clinical info
- Specify exact section format

**Enhancement Prompts**:
- Define target audience (patient vs clinician)
- Specify reading level for patient materials
- Include safety/legal considerations
- End with "MEDICAL NOTE:"

### Import/Export

**Export Your Prompts**:
- **MANAGE PROMPTS** → **EXPORT**
- Saves JSON file with all custom prompts
- Share with colleagues
- Backup your library

**Import Prompts**:
- **MANAGE PROMPTS** → **IMPORT**
- Select JSON file
- Choose merge (keep existing) or replace (overwrite)

**Load Presets**:
- **MANAGE PROMPTS** → **LOAD PRESETS**
- Loads 15+ specialty-specific templates
- Includes examples for Pediatrics, EM, Surgery, IM, Psychiatry

---

## FAQ

### Is this HIPAA compliant?
Yes - all processing happens locally in your browser. No data is ever transmitted to servers. However, you must use Coffee in a secure environment and follow your institution's policies.

### Can I use this for real patients?
**For educational purposes only.** This tool demonstrates prompt engineering principles. Any clinical use requires:
- Institutional approval
- Physician review of ALL outputs
- Compliance with local regulations
- Understanding AI limitations

### What happens to my recordings?
- Audio is processed locally
- Transcription stored in browser memory only
- Everything is deleted when you close the session
- No persistence, no tracking, no storage

### How accurate is the transcription?
- Whisper Large v3 is production-grade
- Accuracy: ~95%+ in good conditions
- Best results: Clear speech, quiet environment, medical context
- Always review and edit transcriptions

### Can I use this offline?
Yes! After the initial model download, Coffee works 100% offline. You can even use it in airplane mode.

### How do I update the app?
The PWA checks for updates automatically when online. If an update is available, you'll see a prompt to reload.

### Can I customize everything?
Absolutely! That's the core value proposition. You can:
- Create unlimited custom prompts
- Edit any prompt (except presets)
- Import/export configurations
- Tailor to your specialty/workflow

### What about other languages?
Currently optimized for English only. Whisper supports 99 languages, but the clinical note generation (Qwen) is English-trained.

---

## Privacy & Security

### Data Flow
1. **You speak** → Audio captured locally
2. **Whisper transcribes** → Text stays in browser memory
3. **You edit** → Still local
4. **Qwen generates** → Still local
5. **You copy** → To your clipboard only
6. **You close** → Everything deleted

### What We DON'T Collect
- ❌ Audio recordings
- ❌ Transcriptions
- ❌ Generated notes
- ❌ User analytics
- ❌ Error logs with PHI
- ❌ Anything

### What We DO Collect
- ✅ Nothing

### Service Worker
The PWA uses a service worker to cache models and enable offline mode. The service worker:
- Caches AI models for offline use
- Caches static assets (HTML/CSS/JS)
- Does NOT transmit any data
- Can be inspected in browser dev tools

---

## Known Limitations

1. **WebGPU Requirement**: Needs modern browser with WebGPU support
2. **Memory**: Requires 8GB+ RAM (16GB recommended)
3. **Initial Download**: Large one-time download (~3.5GB)
4. **Processing Speed**: 2-4 minutes for typical 5-minute encounter
5. **English Only**: Currently optimized for English clinical encounters
6. **No Speaker Diarization**: Cannot distinguish multiple speakers yet
7. **Offline Only**: Cannot access external data sources or guidelines

---

## Roadmap

### Future Enhancements
- [ ] A/B testing mode (compare multiple prompts side-by-side)
- [ ] Speaker diarization (identify patient vs provider)
- [ ] Real-time transcription (transcribe as you speak)
- [ ] Model selection (choose between Whisper sizes)
- [ ] Specialty prompt packs (downloadable collections)
- [ ] Cloud sync for prompts (optional, encrypted)
- [ ] Integration with EMR systems (via export)
- [ ] Multi-language support

---

## Troubleshooting

### Models won't download
- Check internet connection (first time only)
- Ensure 4GB+ free space
- Try different browser (Chrome/Edge recommended)
- Clear browser cache and retry

### App is slow / crashes
- Close other tabs to free memory
- Restart browser
- Check RAM usage (8GB+ recommended)
- Try smaller audio files (<10 minutes)

### Transcription is inaccurate
- Ensure quiet environment
- Speak clearly and slowly
- Position microphone properly
- Edit transcription before processing

### PWA won't install
- Use Chrome/Edge (Safari support limited)
- Ensure HTTPS connection
- Check browser install app settings
- Try manual install via browser menu

### Service worker errors
- Clear browser cache
- Unregister old service workers
- Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Reinstall app

---

## Contributing

This is part of the open-source Physician Prompt Engineering project.

**Contribute Prompts**:
- Create effective clinical documentation prompts
- Share specialty-specific templates
- Submit via GitHub or website form

**Report Issues**:
- GitHub Issues: https://github.com/TheSnowCrow/Overhaul/issues
- Include browser, OS, and error details

**Suggest Features**:
- GitHub Discussions
- Focus on privacy-preserving enhancements

---

## License

MIT License - See main repository

---

## Disclaimer

⚠️ **IMPORTANT**: Doc Pixel's Coffee is an **educational tool** demonstrating AI-assisted clinical documentation and prompt engineering principles.

- **Not FDA approved** for medical use
- **Not a substitute** for physician judgment
- **Requires physician review** of all outputs
- **For educational purposes only**
- **Not HIPAA-compliant** by default (privacy-preserving but not certified)
- **No warranty** expressed or implied

Always follow your institution's policies regarding AI usage in clinical settings.

---

## Acknowledgments

**Models**:
- Whisper Large v3 by OpenAI (via HuggingFace Transformers.js)
- Qwen 2.5-3B by Alibaba Cloud (via MLC WebLLM)

**Tools**:
- HuggingFace Transformers.js
- MLC AI Web LLM
- WebGPU

**Inspiration**:
- The physician community fighting burnout
- Open-source AI democratization
- Privacy-first computing

---

**Built with ☕ by Doc Pixel**

*Making AI tools accessible, private, and physician-owned.*
