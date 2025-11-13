---
layout: default
title: Download PPE Scribe Standalone
description: Download the standalone offline version of PPE Scribe - complete AI medical scribe running entirely on your device.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Download PPE Scribe Standalone</h1>
    <p class="hero-subtitle">
      One-time download for complete offline AI scribe functionality. Educational demonstration only.
    </p>
  </div>
</div>

<div class="container">
  <!-- BETA Warning -->
  <div style="max-width: 900px; margin: 0 auto; padding: 1.5rem; background: #fef3c7; border-radius: var(--radius-lg); border-left: 4px solid #f59e0b; margin-bottom: 2rem;">
    <h3 style="color: #78350f; margin-bottom: 12px; font-size: 1.1em;">⚠️ BETA - Educational Demonstration Only</h3>
    <p style="color: #78350f; margin-bottom: 10px;">
      <strong>This is an experimental prototype for educational purposes.</strong> Do not use with any patient data, protected health information, or sensitive information. This tool is not HIPAA-compliant and is not intended for clinical use.
    </p>
  </div>

  <div style="max-width: 900px; margin: 0 auto;">
    <!-- Download Section -->
    <section class="section">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Download Standalone Version</h2>
        <p style="color: #666; margin-bottom: 1.5rem;">
          Single HTML file (~54KB) that works completely offline after initial setup. No installation required - just download and open in your browser.
        </p>

        <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem; text-align: center;">
          <h3 style="color: #047857; margin-bottom: 1rem;">Ready to Download</h3>
          <p style="color: #065f46; margin-bottom: 1.5rem;">
            Version 1.0 • 54KB • Updated November 2024
          </p>
          <a href="{{ site.baseurl }}/ppe-scribe-standalone.html" download="ppe-scribe-standalone.html" class="btn btn-success btn-lg" style="background: #047857;">
            Download PPE Scribe Standalone
          </a>
        </div>

        <div style="background: #f0f7ff; border-left: 4px solid var(--color-primary); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 2rem;">
          <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">What's Included</h4>
          <ul style="color: #666; line-height: 1.8;">
            <li><strong>Audio Recording & Upload:</strong> Microphone recording or file upload support</li>
            <li><strong>Speech-to-Text:</strong> Whisper-based transcription (~75MB model)</li>
            <li><strong>AI Formatting:</strong> Phi-3.5 language model for clinical note generation (~2GB model)</li>
            <li><strong>APSO Format:</strong> Default system prompt with Assessment, Plan, Subjective, Objective structure</li>
            <li><strong>Iterative Editor:</strong> Multi-pass refinement with custom prompts</li>
            <li><strong>Prompt Library:</strong> Save, manage, and version control your prompts</li>
            <li><strong>Version History:</strong> Track and restore up to 50 note versions</li>
            <li><strong>Import/Export:</strong> Share prompts as JSON files</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- System Requirements -->
    <section class="section bg-secondary">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">System Requirements</h2>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Minimum Requirements</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li><strong>Browser:</strong> Chrome 113+ or Edge 113+ (WebGPU support required)</li>
            <li><strong>Storage:</strong> ~2.5GB free disk space for model cache</li>
            <li><strong>Memory:</strong> 8GB RAM minimum, 16GB recommended</li>
            <li><strong>Internet:</strong> Required for first-time model download only</li>
            <li><strong>GPU:</strong> Modern GPU recommended for better performance</li>
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">First-Time Setup</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li><strong>Download Time:</strong> 5-15 minutes depending on connection speed</li>
            <li><strong>Models Downloaded:</strong> Whisper-base (75MB) + Phi-3.5-mini (2GB)</li>
            <li><strong>Storage Location:</strong> Browser IndexedDB (persistent cache)</li>
            <li><strong>Subsequent Loads:</strong> 10-30 seconds from cache</li>
          </ul>
        </div>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1.5rem; border-radius: var(--radius-md);">
          <p style="color: #78350f; margin: 0;">
            <strong>Note:</strong> After initial setup, the tool works completely offline. Models are cached permanently in your browser and only need to be downloaded once.
          </p>
        </div>
      </div>
    </section>

    <!-- Usage Instructions -->
    <section class="section">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Usage Instructions</h2>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.2em; color: #047857; margin-bottom: 1rem;">Step 1: Download & Initialize</h3>
          <ol style="color: #666; line-height: 2; padding-left: 20px;">
            <li><strong>Download</strong> the HTML file using the button above</li>
            <li><strong>Open</strong> the file in Chrome or Edge (right-click → Open with → Chrome/Edge)</li>
            <li><strong>Click "Initialize Models"</strong> to begin one-time download (~2.1GB)</li>
            <li><strong>Wait 5-15 minutes</strong> for models to download and cache</li>
            <li><strong>You're ready!</strong> Models are now cached permanently</li>
          </ol>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.2em; color: #2a7ae2; margin-bottom: 1rem;">Step 2: Record & Transcribe</h3>
          <ol style="color: #666; line-height: 2; padding-left: 20px;">
            <li><strong>Tab 1: Record & Transcribe</strong></li>
            <li>Click "Start Recording" to record audio via microphone</li>
            <li>OR click "Upload Audio File" to use an existing recording</li>
            <li>Click "Stop Recording" when finished</li>
            <li>Click "Transcribe Audio" to convert speech to text</li>
            <li>Review and edit transcription if needed</li>
          </ol>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.2em; color: #7c3aed; margin-bottom: 1rem;">Step 3: Format Clinical Note</h3>
          <ol style="color: #666; line-height: 2; padding-left: 20px;">
            <li><strong>Tab 2: Format Note</strong></li>
            <li>Review the default APSO system prompt (or customize it)</li>
            <li>Click "Generate Clinical Note" to format transcription</li>
            <li>AI will create structured note with Assessment, Plan, Subjective, Objective sections</li>
            <li>Copy note to clipboard or download as .txt file</li>
            <li>Save to history for version tracking</li>
          </ol>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.2em; color: #be185d; margin-bottom: 1rem;">Step 4: Iterative Refinement (Optional)</h3>
          <ol style="color: #666; line-height: 2; padding-left: 20px;">
            <li><strong>Tab 3: Iterative Editor</strong></li>
            <li>Your formatted note automatically loads into editor</li>
            <li>Write a custom editor prompt (e.g., "Make this more concise")</li>
            <li>Click "Refine Note" to apply modifications</li>
            <li>Click "Use as Input for Next Pass" to refine again</li>
            <li>Repeat as many times as needed</li>
          </ol>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.2em; color: #047857; margin-bottom: 1rem;">Step 5: Manage Prompts & History</h3>
          <ul style="color: #666; line-height: 2; padding-left: 20px;">
            <li><strong>Tab 4: Prompt Library</strong> - Save, load, and manage custom prompts</li>
            <li><strong>Tab 5: Version History</strong> - View and restore previous note versions</li>
            <li>Export prompts as JSON to share with colleagues</li>
            <li>Import prompts from other users</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section bg-secondary">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Key Features</h2>

        <div class="grid grid-cols-1 grid-cols-2" style="gap: 1.5rem;">
          <div>
            <h3 style="font-size: 1.1em; color: #047857; margin-bottom: 0.5rem;">Default APSO System Prompt</h3>
            <p style="color: #666; font-size: 0.95em;">
              Pre-configured with a comprehensive system prompt that converts transcriptions to APSO format (Assessment, Plan, Subjective, Objective) using formal medical terminology. Includes strict anti-hallucination instructions.
            </p>
          </div>

          <div>
            <h3 style="font-size: 1.1em; color: #2a7ae2; margin-bottom: 0.5rem;">Fully Customizable Prompts</h3>
            <p style="color: #666; font-size: 0.95em;">
              Edit any system or editor prompt. Save custom prompts to your library. Create variants by duplicating and modifying. All prompts stored locally in your browser.
            </p>
          </div>

          <div>
            <h3 style="font-size: 1.1em; color: #7c3aed; margin-bottom: 0.5rem;">Multi-Pass Refinement</h3>
            <p style="color: #666; font-size: 0.95em;">
              Initial formatting followed by unlimited refinement passes. Each pass builds on the previous output. Use custom editor prompts to modify style, length, or content.
            </p>
          </div>

          <div>
            <h3 style="font-size: 1.1em; color: #be185d; margin-bottom: 0.5rem;">Version Control</h3>
            <p style="color: #666; font-size: 0.95em;">
              Automatic saving of up to 50 note versions with timestamps. Click any version to view or restore. Track your prompt evolution and iterate with confidence.
            </p>
          </div>

          <div>
            <h3 style="font-size: 1.1em; color: #059669; margin-bottom: 0.5rem;">Import/Export</h3>
            <p style="color: #666; font-size: 0.95em;">
              Export all prompts as JSON files. Share prompt libraries with colleagues. Import prompts from other users to bootstrap your collection.
            </p>
          </div>

          <div>
            <h3 style="font-size: 1.1em; color: #dc3545; margin-bottom: 0.5rem;">Complete Privacy</h3>
            <p style="color: #666; font-size: 0.95em;">
              All processing happens locally in your browser. No data ever transmitted to servers. Models cached in IndexedDB. Prompts and history in localStorage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Troubleshooting -->
    <section class="section">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Troubleshooting</h2>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Model Download Fails</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Check internet connection (required for first-time download)</li>
            <li>Ensure ~3GB free disk space</li>
            <li>Try refreshing the page and clicking "Initialize Models" again</li>
            <li>Clear browser cache if models are corrupted: Settings → Privacy → Clear browsing data → Cached images and files</li>
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">WebGPU Not Supported</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Update to Chrome 113+ or Edge 113+ (required for WebGPU)</li>
            <li>Enable WebGPU: chrome://flags → search "WebGPU" → Enable</li>
            <li>Restart browser after enabling</li>
            <li>Check compatibility: Visit <a href="https://webgpureport.org/" target="_blank" style="color: var(--color-primary);">webgpureport.org</a></li>
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Slow Performance</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Close other browser tabs to free up memory</li>
            <li>Ensure GPU is being used (check browser task manager)</li>
            <li>Performance varies by hardware: 10-40 tokens/second typical</li>
            <li>Consider using shorter transcriptions for faster processing</li>
          </ul>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Microphone Not Working</h3>
          <ul style="color: #666; line-height: 1.8;">
            <li>Grant microphone permission when browser prompts</li>
            <li>Check browser settings: Site settings → Microphone → Allow</li>
            <li>Test microphone in system settings first</li>
            <li>Alternative: Use "Upload Audio File" feature instead</li>
          </ul>
        </div>

        <div style="background: #f0f7ff; border-left: 4px solid var(--color-primary); padding: 1.5rem; border-radius: var(--radius-md);">
          <p style="color: #1e40af; margin: 0;">
            <strong>Still Having Issues?</strong> Check browser console for error messages (F12 → Console tab). Common issues are usually related to browser compatibility, storage space, or network connectivity during initial download.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-secondary">
      <div class="card">
        <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Frequently Asked Questions</h2>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Do I need to download the models every time?</h3>
          <p style="color: #666;">
            No! Models download once during initial setup and are cached permanently in your browser's IndexedDB. Subsequent uses load instantly from cache (10-30 seconds). You only need internet for the first-time download.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Can I use this completely offline?</h3>
          <p style="color: #666;">
            Yes! After the initial model download, the tool works 100% offline. You can disconnect from the internet and continue using all features. Models, prompts, and history are stored locally on your device.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Is my data secure?</h3>
          <p style="color: #666;">
            All processing happens locally in your browser. No audio, transcriptions, or notes are ever transmitted to any server. However, this is a BETA educational tool and should not be used with real patient data or PHI.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Can I customize the default prompts?</h3>
          <p style="color: #666;">
            Absolutely! All prompts are fully editable. You can modify the default APSO system prompt, create custom editor prompts, save them to your library, and share them as JSON files. The tool is designed for maximum flexibility.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">What audio formats are supported?</h3>
          <p style="color: #666;">
            The tool supports most common audio formats including .wav, .mp3, .m4a, .webm, and others supported by your browser. You can record directly via microphone (produces .webm) or upload existing audio files.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">How accurate is the transcription?</h3>
          <p style="color: #666;">
            Transcription uses OpenAI's Whisper-base model, which provides good general accuracy. However, medical terminology may not always be perfectly transcribed. Always review and edit transcriptions before formatting. This is an educational tool, not a production medical transcription service.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Can I share my custom prompts with colleagues?</h3>
          <p style="color: #666;">
            Yes! Use the "Export All Prompts" button in the Prompt Library tab to save your prompts as a JSON file. Share this file with colleagues, who can then import it using the "Import Prompts" button.
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1em; margin-bottom: 0.5rem;">Will this work on mobile devices?</h3>
          <p style="color: #666;">
            Not reliably. WebGPU and the large AI models require desktop-class hardware and browsers. We recommend using Chrome or Edge on Windows, Mac, or Linux desktop computers with at least 8GB RAM.
          </p>
        </div>
      </div>
    </section>

    <!-- Download CTA -->
    <section class="section">
      <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 3rem; border-radius: var(--radius-xl); text-align: center; box-shadow: var(--shadow-lg);">
        <h2 style="color: #047857; margin-bottom: 1rem;">Ready to Get Started?</h2>
        <p style="color: #065f46; margin-bottom: 2rem; font-size: 1.1em;">
          Download once, use offline forever. No installation, no sign-up, no tracking.
        </p>
        <a href="{{ site.baseurl }}/ppe-scribe-standalone.html" download="ppe-scribe-standalone.html" class="btn btn-success btn-lg" style="background: #047857; padding: 16px 32px; font-size: 1.2em;">
          Download PPE Scribe Standalone (54KB)
        </a>
        <p style="color: #065f46; margin-top: 1.5rem; font-size: 0.9em;">
          Educational purposes only • Not for clinical use • See disclaimer above
        </p>
      </div>
    </section>

    <!-- Back to Overview -->
    <div style="text-align: center; margin: 3rem 0;">
      <a href="{{ site.baseurl }}/ppe-ai" class="btn btn-outline btn-lg">
        ← Back to PPE AI Overview
      </a>
    </div>
  </div>
</div>
