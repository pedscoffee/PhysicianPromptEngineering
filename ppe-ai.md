---
layout: default
title: Doc Pixel Overview
description: Browser-based AI tools for clinical documentation - experimental educational demonstrations of what's possible with client-side AI.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Doc Pixel Overview</h1>
    <p class="hero-subtitle">
      Experimental browser-based AI tools demonstrating the potential of client-side machine learning for clinical workflows. Educational purposes only.
    </p>
  </div>
</div>

<!-- BETA Warning -->
<section class="section" style="padding-top: 2rem;">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto; padding: 1.5rem; background: #fef3c7; border-radius: var(--radius-lg); border-left: 4px solid #f59e0b; margin-bottom: 2rem;">
      <h3 style="color: #78350f; margin-top: 0; font-size: var(--font-size-lg);">BETA - Educational Demonstration Only</h3>
      <p style="color: #78350f; margin-bottom: 0;">
        <strong>These tools are experimental prototypes for educational purposes.</strong> Do not use with any patient data, protected health information, or sensitive information. These demonstrations are not HIPAA-compliant and are not intended for clinical use. They exist to show what's technically possible with browser-based AI.
      </p>
    </div>
  </div>
</section>

<!-- Why Download Required -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">How This Works</h2>

      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Client-Side AI Processing</h3>
        </div>
        <div class="card-body">
          <p style="margin-bottom: var(--space-4);">
            Unlike traditional AI tools that send your data to cloud servers, these tools run <strong>entirely in your browser</strong> using WebGPU acceleration. This architecture demonstrates a privacy-preserving approach to AI-powered documentation.
          </p>

          <h4 style="margin-bottom: var(--space-3);">What Gets Downloaded?</h4>
          <ul style="margin-bottom: var(--space-4);">
            <li><strong>Whisper-base</strong> (75MB) - OpenAI's speech-to-text model for audio transcription</li>
            <li><strong>Phi-3.5-mini-instruct</strong> (2GB) - Microsoft's small language model for text generation</li>
            <li>Total: ~2.1GB one-time download, cached permanently in your browser</li>
          </ul>

          <h4 style="margin-bottom: var(--space-3);">Why So Large?</h4>
          <p style="margin-bottom: var(--space-4);">
            AI models are essentially compressed knowledge. Phi-3.5 contains 3.8 billion parameters - the "weights" that determine how it processes language. We use a quantized version (reduced precision) to make it small enough for browsers while maintaining quality.
          </p>

          <h4 style="margin-bottom: var(--space-3);">First-Time Setup</h4>
          <ul>
            <li><strong>5-15 minutes</strong> - Initial model download and browser caching</li>
            <li><strong>10-30 seconds</strong> - Subsequent page loads (models load from cache)</li>
            <li><strong>Permanent</strong> - Models stay cached until you clear browser data</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">System Requirements</h3>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Browser:</strong> Chrome 113+ or Edge 113+ (WebGPU support required)</li>
            <li><strong>Storage:</strong> 2.5GB available space for model cache</li>
            <li><strong>Memory:</strong> 8GB+ RAM recommended</li>
            <li><strong>GPU:</strong> Modern GPU recommended for better performance</li>
            <li><strong>Connection:</strong> Broadband for initial download (then works offline)</li>
          </ul>
          <p style="margin-top: var(--space-4); margin-bottom: 0; color: var(--color-text-secondary);">
            Performance varies by hardware. Expect 10-40 tokens/second on typical systems.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Three Tools -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Available Tools</h2>

      <div class="grid grid-cols-1" style="gap: 2rem;">

        <!-- Scribe -->
        <div class="card">
          <div class="card-header" style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-bottom: 2px solid #059669;">
            <h3 class="card-title" style="color: #047857;">Scribe</h3>
            <p class="card-subtitle" style="color: #065f46;">Record → Transcribe → Format → Export</p>
          </div>
          <div class="card-body">
            <h4 style="margin-bottom: var(--space-3);">What It Does</h4>
            <p style="margin-bottom: var(--space-4);">
              Demonstrates browser-based speech-to-text and clinical note formatting. Record audio or upload files, transcribe with Whisper, then format into clinical documentation templates using AI.
            </p>

            <h4 style="margin-bottom: var(--space-3);">Key Features</h4>
            <ul style="margin-bottom: var(--space-4);">
              <li>Browser microphone recording or audio file upload</li>
              <li>Whisper-powered transcription (no API required)</li>
              <li>Multiple clinical formatting templates (APSO, SOAP, Billing, etc.)</li>
              <li>Fully editable and customizable prompts</li>
              <li>Save custom templates to local storage</li>
            </ul>

            <h4 style="margin-bottom: var(--space-3);">Educational Focus</h4>
            <p style="margin-bottom: var(--space-4);">
              Demonstrates how speech recognition and language models can work together for clinical documentation. Shows prompt engineering principles in action with visible, editable system prompts.
            </p>

            <div style="text-align: center; margin-top: var(--space-6);">
              <a href="{{ site.baseurl }}/scribe-tool" class="btn btn-primary btn-lg">Try Scribe</a>
            </div>
          </div>
        </div>

        <!-- Prompt Assistant -->
        <div class="card">
          <div class="card-header" style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-bottom: 2px solid var(--color-primary);">
            <h3 class="card-title" style="color: var(--color-primary);">Prompt Assistant</h3>
            <p class="card-subtitle" style="color: #1e40af;">Describe → Generate → Refine → Deploy</p>
          </div>
          <div class="card-body">
            <h4 style="margin-bottom: var(--space-3);">What It Does</h4>
            <p style="margin-bottom: var(--space-4);">
              Demonstrates AI-powered meta-prompting - using AI to create prompts for AI. Describe what you want in natural language, and the system generates structured prompts you can use in other tools.
            </p>

            <h4 style="margin-bottom: var(--space-3);">Key Features</h4>
            <ul style="margin-bottom: var(--space-4);">
              <li>Natural language prompt generation</li>
              <li>Template-based quick starts for common use cases</li>
              <li>Iterative refinement with conversation history</li>
              <li>Integration with Snippet Manager for storage</li>
              <li>Export and share generated prompts</li>
            </ul>

            <h4 style="margin-bottom: var(--space-3);">Educational Focus</h4>
            <p style="margin-bottom: var(--space-4);">
              Teaches prompt engineering principles through practical application. Based on our Meta-Prompt templates from the prompt library, demonstrating how structured frameworks improve AI outputs.
            </p>

            <div style="text-align: center; margin-top: var(--space-6);">
              <a href="{{ site.baseurl }}/prompt-assistant" class="btn btn-primary btn-lg">Try Prompt Assistant</a>
            </div>
          </div>
        </div>

        <!-- Chat -->
        <div class="card">
          <div class="card-header" style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); border-bottom: 2px solid #be185d;">
            <h3 class="card-title" style="color: #be185d;">Chat</h3>
            <p class="card-subtitle" style="color: #831843;">Ask → Learn → Discover → Navigate</p>
          </div>
          <div class="card-body">
            <h4 style="margin-bottom: var(--space-3);">What It Does</h4>
            <p style="margin-bottom: var(--space-4);">
              Demonstrates conversational AI with embedded knowledge. Ask questions about any aspect of this website - tools, prompts, workflows, best practices - and get contextual answers.
            </p>

            <h4 style="margin-bottom: var(--space-3);">Key Features</h4>
            <ul style="margin-bottom: var(--space-4);">
              <li>Conversational interface with streaming responses</li>
              <li>Comprehensive knowledge base covering all site content</li>
              <li>Quick question buttons for common queries</li>
              <li>Export conversation history as markdown</li>
              <li>Persistent conversation within session</li>
            </ul>

            <h4 style="margin-bottom: var(--space-3);">Educational Focus</h4>
            <p style="margin-bottom: var(--space-4);">
              Demonstrates how AI assistants can be built with specific domain knowledge. Shows the difference between general chatbots and specialized AI with focused context.
            </p>

            <div style="text-align: center; margin-top: var(--space-6);">
              <a href="{{ site.baseurl }}/ask-ai" class="btn btn-primary btn-lg" style="background: #be185d;">Try Chat</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- Technical Details -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">Technical Architecture</h2>

      <div class="card">
        <div class="card-body">
          <h3 style="margin-bottom: var(--space-4);">How It Works Under the Hood</h3>

          <h4 style="margin-bottom: var(--space-3);">WebLLM + Transformers.js</h4>
          <p style="margin-bottom: var(--space-4);">
            These tools use <strong>WebLLM</strong> (for Phi-3.5 language model) and <strong>Transformers.js</strong> (for Whisper speech recognition). Both leverage WebGPU for hardware acceleration, making AI inference possible directly in the browser.
          </p>

          <h4 style="margin-bottom: var(--space-3);">Model Loading</h4>
          <p style="margin-bottom: var(--space-4);">
            Models are downloaded from HuggingFace and cached in IndexedDB (browser's local database). First load takes 5-15 minutes depending on connection speed. Subsequent loads take seconds as models load from cache.
          </p>

          <h4 style="margin-bottom: var(--space-3);">Data Flow</h4>
          <ul style="margin-bottom: var(--space-4);">
            <li><strong>Input:</strong> You provide text or audio</li>
            <li><strong>Processing:</strong> Models run entirely in your browser using your GPU</li>
            <li><strong>Output:</strong> Results stay on your device</li>
            <li><strong>Storage:</strong> Only saved to browser localStorage if you choose</li>
            <li><strong>Network:</strong> No data transmission after initial model download</li>
          </ul>

          <h4 style="margin-bottom: var(--space-3);">Limitations</h4>
          <ul>
            <li>Browser-based models are smaller and less capable than cloud-based systems</li>
            <li>Processing speed depends on your hardware (GPU/CPU)</li>
            <li>Accuracy may not match commercial medical AI tools</li>
            <li>Not suitable for production clinical use</li>
            <li>Requires modern browser with WebGPU support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started -->
<section class="section">
  <div class="container text-center">
    <h2 class="mb-6">Ready to Explore?</h2>
    <p class="text-lg text-secondary mb-8" style="max-width: 700px; margin-left: auto; margin-right: auto;">
      Start with any tool below. The first time you use any tool, models will download and cache. After that, all three tools share the same models for instant loading.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/scribe-tool" class="btn btn-primary btn-lg">Scribe</a>
      <a href="{{ site.baseurl }}/prompt-assistant" class="btn btn-primary btn-lg">Prompt Assistant</a>
      <a href="{{ site.baseurl }}/ask-ai" class="btn btn-primary btn-lg">Chat</a>
    </div>
    <p class="text-sm text-secondary mt-6">
      All tools are open source and free to use for educational purposes.
    </p>
  </div>
</section>
