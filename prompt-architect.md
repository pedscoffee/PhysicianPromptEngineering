---
layout: page
title: AI Prompt Architect
description: The ultimate tool for building and refining clinical AI prompts. Combine structured templates with AI-powered customization.
permalink: /prompt-architect/
---
<style>
    /* =========================================
       CORE STYLES (Adapted from Prompt Assistant)
       ========================================= */
    :root {
        --color-primary: #2563eb;
        --color-primary-dark: #1e40af;
        --color-success: #059669;
        --color-bg-secondary: #f9fafb;
        --color-text-primary: #1f2937;
        --color-border: #e5e7eb;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: var(--color-bg-secondary);
        color: var(--color-text-primary);
        line-height: 1.6;
    }

    .wrapper { max-width: 1640px; }
    .container { max-width: 100%; margin: 0 auto; padding: 20px; }

    /* =========================================
       HERO SECTION
       ========================================= */
    .hero {
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        padding: 40px 30px;
        border-radius: 12px;
        margin-bottom: 30px;
        text-align: center;
        border: 1px solid #93c5fd;
    }

    .hero h1 {
        font-size: 2.2em;
        margin-bottom: 10px;
        color: #1e3a8a;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .hero p {
        font-size: 1.1em;
        color: #1e40af;
        max-width: 800px;
        margin: 0 auto;
    }

    /* =========================================
       STATUS & MODEL PANEL
       ========================================= */
    .status-panel {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        border: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .status-panel.loading { background: #eff6ff; border-color: #bfdbfe; }
    .status-panel.ready { background: #ecfdf5; border-color: #a7f3d0; }
    .status-panel.error { background: #fef2f2; border-color: #fecaca; }

    .model-selector {
        margin: 15px 0;
        text-align: left;
        background: rgba(255,255,255,0.8);
        padding: 15px;
        border-radius: 8px;
        border: 1px solid rgba(0,0,0,0.1);
        width: 100%;
        max-width: 600px;
    }

    .model-option {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .model-option:last-child { margin-bottom: 0; }
    
    .progress-bar {
        width: 100%;
        max-width: 600px;
        height: 8px;
        background: #e5e7eb;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 15px;
        display: none;
    }
    .progress-bar.active { display: block; }
    .progress-fill {
        height: 100%;
        background: var(--color-primary);
        width: 0%;
        transition: width 0.3s ease;
    }

    /* =========================================
       TABS
       ========================================= */
    .tab-navigation {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        border-bottom: 2px solid var(--color-border);
    }

    .tab-button {
        padding: 12px 24px;
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        font-size: 1.1em;
        font-weight: 600;
        color: #6b7280;
        cursor: pointer;
        transition: all 0.2s;
    }

    .tab-button:hover { color: var(--color-primary); }
    .tab-button.active {
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }

    .tab-content { display: none; }
    .tab-content.active { display: block; }

    /* =========================================
       LAYOUT GRID
       ========================================= */
    .main-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: start;
    }

    @media (max-width: 1200px) {
        .main-layout { grid-template-columns: 1fr; }
        .output-panel { position: static !important; }
    }

    /* =========================================
       FORM STYLES (From Quick Start)
       ========================================= */
    .form-panel, .output-panel {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        border: 1px solid var(--color-border);
    }

    .output-panel {
        position: sticky;
        top: 20px;
    }

    .section {
        margin-bottom: 30px;
        padding-bottom: 25px;
        border-bottom: 1px solid var(--color-border);
    }
    .section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

    .section-title {
        font-size: 1.1em;
        font-weight: 600;
        color: var(--color-primary);
        margin-bottom: 15px;
    }

    .radio-group { display: flex; flex-direction: column; gap: 10px; }
    
    .radio-option {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px;
        border-radius: 6px;
        border: 2px solid var(--color-border);
        cursor: pointer;
        transition: all 0.2s;
    }
    .radio-option:hover { background: #f9fafb; border-color: #93c5fd; }
    .radio-option input[type="radio"] {
        margin-top: 3px;
        accent-color: var(--color-primary);
    }
    .radio-option input[type="radio"]:checked + .radio-content { color: var(--color-primary); font-weight: 500; }

    textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid var(--color-border);
        border-radius: 6px;
        font-family: inherit;
        font-size: 0.95em;
        resize: vertical;
        min-height: 100px;
        transition: border-color 0.2s;
    }
    textarea:focus { outline: none; border-color: var(--color-primary); }

    /* =========================================
       BUTTONS & OUTPUT
       ========================================= */
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 1em;
    }
    .btn-primary { background: var(--color-primary); color: white; }
    .btn-primary:hover:not(:disabled) { background: var(--color-primary-dark); }
    .btn-success { background: var(--color-success); color: white; }
    .btn-secondary { background: #6b7280; color: white; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .output-content {
        background: #f9fafb;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        padding: 20px;
        min-height: 400px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        white-space: pre-wrap;
        overflow-y: auto;
        margin-bottom: 20px;
    }

    .badge {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: 600;
        text-transform: uppercase;
    }
    .badge-ai { background: #dbeafe; color: #1e40af; }
    .badge-template { background: #f3f4f6; color: #374151; }

    /* =========================================
       REFINER SPECIFIC
       ========================================= */
    .refiner-input-group {
        margin-bottom: 25px;
    }
    .refiner-input-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #374151;
    }
    .refiner-input-group .description {
        font-size: 0.9em;
        color: #6b7280;
        margin-bottom: 10px;
    }
</style>

<div class="container">
    <!-- HERO -->
    <div class="hero">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            AI Prompt Architect
        </h1>
        <p>Build from scratch with our smart templates, or refine your existing prompts with advanced AI optimization.</p>
    </div>

    <!-- WARNING BOX -->
    <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
        <h3 style="color: #991b1b; margin-bottom: 8px; font-size: 1.1em; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
            Educational Tool - No Patient Data
        </h3>
        <ul style="margin-left: 25px; color: #7f1d1d; font-size: 0.95em;">
            <li><strong>Do not</strong> enter any real patient data or Protected Health Information (PHI).</li>
            <li>Use only de-identified or synthetic examples.</li>
            <li>AI processing happens locally in your browser, but safety is paramount.</li>
        </ul>
    </div>

    <!-- STATUS PANEL -->
    <div class="status-panel" id="status-panel">
        <h3 id="status-message">Initialize AI Engine</h3>
        <p id="status-details" style="color: #666; margin-bottom: 15px;">Load the AI model locally in your browser to enable advanced refinement features.</p>
        
        <div class="model-selector" id="model-selector">
            <div style="font-weight: 600; margin-bottom: 10px;">Select AI Model:</div>
            <label class="model-option">
                <input type="radio" name="model-choice" value="thinking">
                <div>
                    <strong>Thinking (Phi-3.5 Mini)</strong>
                    <div style="font-size: 0.9em; color: #666;">Higher quality reasoning. Best for complex refinement. (~2.2GB)</div>
                </div>
            </label>
            <label class="model-option">
                <input type="radio" name="model-choice" value="fast" checked>
                <div>
                    <strong>Fast (Llama 3.2 1B)</strong>
                    <div style="font-size: 0.9em; color: #666;">Faster, lower memory. Good for older devices. (~870MB)</div>
                </div>
            </label>
        </div>

        <button id="init-btn" class="btn btn-success" onclick="initializeEngine()">
            Initialize AI Engine
        </button>
        
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
    </div>

    <!-- TABS -->
    <div class="tab-navigation">
        <button class="tab-button active" onclick="switchTab('builder')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 6px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Quick-Start Builder
        </button>
        <button class="tab-button" onclick="switchTab('refiner')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 6px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
            Prompt Refiner
        </button>
    </div>

    <!-- TAB CONTENT: BUILDER -->
    <div id="tab-builder" class="tab-content active">
        <div class="main-layout">
            <!-- FORM -->
            <div class="form-panel">
                <h2 class="section-title" style="font-size: 1.4em; margin-bottom: 20px;">Step 1: Configure Template</h2>
                
                <!-- Assessment Format -->
                <div class="section">
                    <div class="section-title">Assessment Format</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="diagnosis" checked onchange="updateBasePrompt()">
                            <div class="radio-content">Diagnosis Only (Problem name only)</div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="oneliner" onchange="updateBasePrompt()">
                            <div class="radio-content">One Liner (Sentence summary)</div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="bullets" onchange="updateBasePrompt()">
                            <div class="radio-content">Bullet Form (Concise findings)</div>
                        </label>
                    </div>
                </div>

                <!-- Plan Format -->
                <div class="section">
                    <div class="section-title">Plan Format</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="bullets" checked onchange="updateBasePrompt()">
                            <div class="radio-content">Bullet Form (Action items)</div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="oneliner" onchange="updateBasePrompt()">
                            <div class="radio-content">One Liner (Plan summary)</div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="narrative" onchange="updateBasePrompt()">
                            <div class="radio-content">Narrative (Full sentences)</div>
                        </label>
                    </div>
                </div>

                <!-- Style Options -->
                <div class="section">
                    <div class="section-title">Style Options</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="detail" value="pithy" checked onchange="updateBasePrompt()">
                            <div class="radio-content">Pithy (Extremely brief)</div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="detail" value="detailed" onchange="updateBasePrompt()">
                            <div class="radio-content">Detailed (More verbose)</div>
                        </label>
                    </div>
                </div>

                <h2 class="section-title" style="font-size: 1.4em; margin-top: 40px; margin-bottom: 20px;">Step 2: Custom Instructions</h2>
                <div class="section">
                    <p style="margin-bottom: 10px; color: #666;">Describe exactly what you are hoping to achieve. The AI will use the template above as a foundation and refine it based on these instructions.</p>
                    <textarea id="builder-instructions" placeholder="Example: I want the tone to be very direct. Make sure to always include a section for patient education. Use standard abbreviations where possible."></textarea>
                </div>

                <button id="generate-btn" class="btn btn-primary" style="width: 100%;" onclick="generateAndRefine()" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
                    Generate & Refine with AI
                </button>
            </div>

            <!-- OUTPUT -->
            <div class="output-panel">
                <h2 class="section-title">Generated Prompt</h2>
                <div id="builder-output" class="output-content">Select options to see the base template here...</div>
                <div class="button-group" style="display: flex; gap: 10px;">
                    <button class="btn btn-success" onclick="copyToClipboard('builder-output')">Copy Prompt</button>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB CONTENT: REFINER -->
    <div id="tab-refiner" class="tab-content">
        <div class="main-layout">
            <!-- INPUTS -->
            <div class="form-panel">
                <h2 class="section-title" style="font-size: 1.4em; margin-bottom: 20px;">Optimize Existing Prompt</h2>
                
                <div class="refiner-input-group">
                    <label>1. Current Prompt</label>
                    <div class="description">Paste the prompt you are currently using.</div>
                    <textarea id="refine-current-prompt" placeholder="Paste your current system prompt here..."></textarea>
                </div>

                <div class="refiner-input-group">
                    <label>2. Current Outputs (De-identified)</label>
                    <div class="description">Paste 2-3 examples of the output you are currently getting (and don't like).</div>
                    <textarea id="refine-current-outputs" placeholder="Example 1: ...&#10;Example 2: ..."></textarea>
                </div>

                <div class="refiner-input-group">
                    <label>3. Desired Few-Shot Examples</label>
                    <div class="description">Write 2-3 examples of exactly how you WANT the output to look. This is the most important part!</div>
                    <textarea id="refine-desired-examples" placeholder="Example 1: ...&#10;Example 2: ..."></textarea>
                </div>

                <button id="optimize-btn" class="btn btn-primary" style="width: 100%;" onclick="optimizePrompt()" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
                    Optimize Prompt
                </button>
            </div>

            <!-- OUTPUT -->
            <div class="output-panel">
                <h2 class="section-title">Optimized Prompt</h2>
                <div id="refiner-output" class="output-content" style="color: #999; font-style: italic;">Your optimized prompt will appear here...</div>
                <div class="button-group" style="display: flex; gap: 10px;">
                    <button class="btn btn-success" onclick="copyToClipboard('refiner-output')">Copy Prompt</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let engine = null;
    let isLoading = false;
    
    const MODELS = {
        thinking: { id: "Phi-3.5-mini-instruct-q4f16_1-MLC", name: "Thinking (Phi-3.5 Mini)" },
        fast: { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", name: "Fast (Llama 3.2 1B)" }
    };

    // =====================================================
    // INITIALIZATION
    // =====================================================
    window.initializeEngine = async function() {
        if (engine || isLoading) return;
        if (!navigator.gpu) {
            alert("WebGPU is not supported in this browser. Please use Chrome or Edge.");
            return;
        }

        isLoading = true;
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');
        const modelSelector = document.getElementById('model-selector');

        const selectedValue = document.querySelector('input[name="model-choice"]:checked').value;
        const selectedModel = MODELS[selectedValue];

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = `Initializing ${selectedModel.name}...`;
        progressBar.classList.add('active');
        initBtn.disabled = true;
        modelSelector.style.opacity = '0.5';
        modelSelector.style.pointerEvents = 'none';

        try {
            engine = await CreateMLCEngine(selectedModel.id, {
                initProgressCallback: (progress) => {
                    const percent = (progress.progress * 100).toFixed(1);
                    progressFill.style.width = `${percent}%`;
                    statusMessage.textContent = `Loading: ${percent}%`;
                }
            });

            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = 'AI Engine Ready';
            document.getElementById('status-details').textContent = "Engine loaded locally. You can now use the AI features.";
            progressBar.classList.remove('active');
            initBtn.style.display = 'none';
            modelSelector.style.display = 'none';

            // Enable Buttons
            document.getElementById('generate-btn').disabled = false;
            document.getElementById('optimize-btn').disabled = false;

        } catch (error) {
            console.error(error);
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = 'Error Loading Engine';
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }
        isLoading = false;
    };

    // =====================================================
    // LOGIC: BUILDER TAB
    // =====================================================
    window.updateBasePrompt = function() {
        const assessment = document.querySelector('input[name="assessment"]:checked').value;
        const planFormat = document.querySelector('input[name="planFormat"]:checked').value;
        const detail = document.querySelector('input[name="detail"]:checked').value;

        let prompt = "Reformat the assessment and plan into a structured format.\n\n";
        
        if (assessment === 'diagnosis') prompt += "ASSESSMENT: List diagnosis only.\n";
        else if (assessment === 'oneliner') prompt += "ASSESSMENT: One sentence summary.\n";
        else if (assessment === 'bullets') prompt += "ASSESSMENT: Bullet points of key findings.\n";

        if (planFormat === 'bullets') prompt += "PLAN: Bulleted action items.\n";
        else if (planFormat === 'oneliner') prompt += "PLAN: One sentence summary.\n";
        else if (planFormat === 'narrative') prompt += "PLAN: Narrative paragraph.\n";

        if (detail === 'pithy') prompt += "STYLE: Extremely concise, shorthand.\n";
        else prompt += "STYLE: Detailed, full sentences.\n";

        document.getElementById('builder-output').textContent = prompt;
        return prompt;
    };

    window.generateAndRefine = async function() {
        if (!engine) return;
        
        const basePrompt = window.updateBasePrompt();
        const instructions = document.getElementById('builder-instructions').value;
        const outputDiv = document.getElementById('builder-output');
        
        outputDiv.textContent = "Generating refined prompt...";
        
        const systemPrompt = `You are an expert prompt engineer. 
        Task: Take the BASE PROMPT and the USER INSTRUCTIONS and create a FINAL PROMPT.
        
        BASE PROMPT:
        ${basePrompt}
        
        USER INSTRUCTIONS:
        ${instructions}
        
        Output ONLY the final prompt text. Do not include explanations.`;

        const messages = [{ role: 'user', content: systemPrompt }];

        let fullResponse = "";
        const chunks = await engine.chat.completions.create({
            messages: messages,
            stream: true
        });

        for await (const chunk of chunks) {
            const content = chunk.choices[0]?.delta?.content || "";
            fullResponse += content;
            outputDiv.textContent = fullResponse;
        }
    };

    // =====================================================
    // LOGIC: REFINER TAB
    // =====================================================
    window.optimizePrompt = async function() {
        if (!engine) return;

        const currentPrompt = document.getElementById('refine-current-prompt').value;
        const currentOutputs = document.getElementById('refine-current-outputs').value;
        const desiredExamples = document.getElementById('refine-desired-examples').value;
        const outputDiv = document.getElementById('refiner-output');

        if (!currentPrompt || !desiredExamples) {
            alert("Please provide at least the Current Prompt and Desired Examples.");
            return;
        }

        outputDiv.textContent = "Optimizing prompt...";
        outputDiv.style.color = "#333";
        outputDiv.style.fontStyle = "normal";

        const systemPrompt = `You are an expert prompt optimizer.
        Task: Analyze the Current Prompt, Current Outputs, and Desired Examples.
        Identify why the current prompt fails to produce the desired output.
        Rewrite the prompt to perfectly achieve the Desired Examples.
        
        CURRENT PROMPT:
        ${currentPrompt}
        
        CURRENT OUTPUTS (What we want to avoid):
        ${currentOutputs}
        
        DESIRED EXAMPLES (What we want to achieve):
        ${desiredExamples}
        
        Output ONLY the optimized prompt. Do not include explanations.`;

        const messages = [{ role: 'user', content: systemPrompt }];

        let fullResponse = "";
        const chunks = await engine.chat.completions.create({
            messages: messages,
            stream: true
        });

        for await (const chunk of chunks) {
            const content = chunk.choices[0]?.delta?.content || "";
            fullResponse += content;
            outputDiv.textContent = fullResponse;
        }
    };

    // =====================================================
    // UTILS
    // =====================================================
    window.switchTab = function(tab) {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        if (tab === 'builder') {
            document.querySelector('.tab-button:nth-child(1)').classList.add('active');
            document.getElementById('tab-builder').classList.add('active');
        } else {
            document.querySelector('.tab-button:nth-child(2)').classList.add('active');
            document.getElementById('tab-refiner').classList.add('active');
        }
    };

    window.copyToClipboard = function(elementId) {
        const text = document.getElementById(elementId).textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard!");
        });
    };

    // Initialize base prompt on load
    window.updateBasePrompt();
</script>
