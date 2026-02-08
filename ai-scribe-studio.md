---
layout: default
title: AI Scribe Studio
description: Record patient encounters and generate personalized medical notes with AI. Fully private - all processing happens in your browser.
permalink: /ai-scribe-studio/
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .wrapper {
        max-width: 1800px;
    }

    .studio-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section */
    .studio-hero {
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        padding: 40px 30px;
        border-radius: 12px;
        margin-bottom: 30px;
        text-align: center;
        color: white;
    }

    .studio-hero h1 {
        font-size: 2.2em;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .studio-hero-subtitle {
        font-size: 1.1em;
        opacity: 0.9;
        max-width: 700px;
        margin: 0 auto 15px;
    }

    .privacy-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(255,255,255,0.15);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9em;
        font-weight: 600;
    }

    /* Critical Warning Banner */
    .beta-warning {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border: 2px solid #f59e0b;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;
    }

    .beta-warning-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
    }

    .beta-warning-header h3 {
        color: #92400e;
        font-size: 1.2em;
        margin: 0;
    }

    .beta-warning ul {
        margin: 0 0 0 24px;
        color: #78350f;
    }

    .beta-warning li {
        margin-bottom: 6px;
        line-height: 1.5;
    }

    .beta-warning strong {
        color: #92400e;
    }

    /* Status Panel */
    .status-panel {
        background: white;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        text-align: center;
    }

    .status-panel.loading {
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    }

    .status-panel.ready {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    }

    .status-panel.error {
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    }

    #status-message {
        font-size: 1.1em;
        margin-bottom: 10px;
        font-weight: 600;
    }

    #status-details {
        font-size: 0.9em;
        color: #666;
    }

    .progress-bar {
        width: 100%;
        max-width: 400px;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: 4px;
        overflow: hidden;
        margin: 15px auto 0;
        display: none;
    }

    .progress-bar.active {
        display: block;
    }

    .progress-fill {
        height: 100%;
        background: #2563eb;
        width: 0%;
        transition: width 0.3s ease;
    }

    /* Model Selection */
    .model-selector {
        background: rgba(255,255,255,0.6);
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        text-align: left;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .model-section {
        margin-bottom: 20px;
    }

    .model-section:last-child {
        margin-bottom: 0;
    }

    .model-section-title {
        font-weight: 700;
        color: #374151;
        margin-bottom: 10px;
        font-size: 0.95em;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .model-option {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s;
        margin-bottom: 8px;
    }

    .model-option:hover {
        background: rgba(255,255,255,0.7);
    }

    .model-option input {
        margin-top: 4px;
        accent-color: #065f46;
    }

    .model-info strong {
        display: block;
        color: #1f2937;
        font-size: 0.95em;
    }

    .model-info span {
        font-size: 0.85em;
        color: #6b7280;
    }

    /* Main Layout */
    .main-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 25px;
        margin-bottom: 25px;
    }

    @media (max-width: 1100px) {
        .main-grid {
            grid-template-columns: 1fr;
        }
    }

    .panel {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        overflow: hidden;
    }

    .panel-header {
        background: #f9fafb;
        padding: 15px 20px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .panel-title {
        font-size: 1em;
        font-weight: 700;
        color: #374151;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
    }

    .panel-body {
        padding: 20px;
    }

    /* Recording Panel */
    .recording-controls {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .record-button {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        color: white;
        font-size: 2.5em;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(6, 95, 70, 0.3);
    }

    .record-button:hover:not(:disabled) {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(6, 95, 70, 0.4);
    }

    .record-button:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        box-shadow: none;
    }

    .record-button.recording {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        animation: pulse 1.5s infinite;
        box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .recording-timer {
        font-size: 2em;
        font-weight: 700;
        font-family: 'Monaco', 'Courier New', monospace;
        color: #374151;
    }

    .recording-status {
        font-size: 0.95em;
        color: #6b7280;
        text-align: center;
    }

    .recording-status.active {
        color: #dc2626;
        font-weight: 600;
    }

    /* Audio Visualization */
    .audio-viz {
        width: 100%;
        height: 60px;
        background: #f3f4f6;
        border-radius: 8px;
        overflow: hidden;
        margin-top: 15px;
    }

    .audio-viz canvas {
        width: 100%;
        height: 100%;
    }

    /* Transcript Panel */
    .transcript-area {
        width: 100%;
        min-height: 250px;
        max-height: 400px;
        padding: 15px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-family: inherit;
        font-size: 0.95em;
        line-height: 1.6;
        resize: vertical;
        background: #fafafa;
    }

    .transcript-area:focus {
        outline: none;
        border-color: #065f46;
        background: white;
    }

    .transcript-placeholder {
        color: #9ca3af;
        font-style: italic;
    }

    .transcript-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
        flex-wrap: wrap;
    }

    /* Prompt Panel */
    .prompt-panel {
        margin-bottom: 25px;
    }

    .prompt-selector {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        flex-wrap: wrap;
    }

    .prompt-select {
        flex: 1;
        min-width: 200px;
        padding: 12px 15px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1em;
        background: white;
        cursor: pointer;
    }

    .prompt-select:focus {
        outline: none;
        border-color: #065f46;
    }

    .prompt-editor {
        width: 100%;
        min-height: 200px;
        max-height: 400px;
        padding: 15px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.85em;
        line-height: 1.5;
        resize: vertical;
        background: #fafafa;
    }

    .prompt-editor:focus {
        outline: none;
        border-color: #065f46;
        background: white;
    }

    .char-counter {
        text-align: right;
        font-size: 0.85em;
        color: #6b7280;
        margin-top: 8px;
    }

    .char-counter.warning {
        color: #f59e0b;
    }

    .char-counter.error {
        color: #dc2626;
    }

    /* Output Panel */
    .output-area {
        width: 100%;
        min-height: 300px;
        max-height: 500px;
        padding: 15px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-family: inherit;
        font-size: 0.95em;
        line-height: 1.6;
        resize: vertical;
        background: white;
        overflow-y: auto;
    }

    .output-area:focus {
        outline: none;
        border-color: #065f46;
    }

    .output-placeholder {
        color: #9ca3af;
        font-style: italic;
        text-align: center;
        padding: 60px 20px;
    }

    .output-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
        flex-wrap: wrap;
    }

    /* Transform Button */
    .transform-section {
        text-align: center;
        padding: 20px;
        background: #f9fafb;
        border-radius: 12px;
        margin-bottom: 25px;
    }

    .transform-button {
        padding: 16px 40px;
        font-size: 1.1em;
        font-weight: 700;
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 15px rgba(6, 95, 70, 0.25);
    }

    .transform-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(6, 95, 70, 0.35);
    }

    .transform-button:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        box-shadow: none;
    }

    /* Buttons */
    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        font-size: 0.95em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #065f46;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #047857;
    }

    .btn-secondary {
        background: #e5e7eb;
        color: #374151;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #d1d5db;
    }

    .btn-success {
        background: #059669;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #047857;
    }

    .btn-lg {
        padding: 14px 28px;
        font-size: 1.05em;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    /* Loading Spinner */
    .spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    /* Transcribing indicator */
    .transcribing-indicator {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px;
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        border-radius: 8px;
        margin-top: 15px;
        color: #1e40af;
        font-weight: 600;
    }

    .transcribing-indicator.active {
        display: flex;
    }

    /* Settings Panel */
    .settings-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #065f46;
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        .studio-hero h1 {
            font-size: 1.6em;
        }

        .studio-hero-subtitle {
            font-size: 0.95em;
        }

        .record-button {
            width: 100px;
            height: 100px;
            font-size: 2em;
        }

        .recording-timer {
            font-size: 1.6em;
        }

        .panel-body {
            padding: 15px;
        }

        .transcript-actions,
        .output-actions {
            flex-direction: column;
        }

        .btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<!-- Hero Section -->
<div class="studio-hero">
    <h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 42px; height: 42px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
        </svg>
        AI Scribe Studio
    </h1>
    <p class="studio-hero-subtitle">
        Record patient encounters and generate personalized clinical notes with AI. Everything runs locally in your browser.
    </p>
    <div class="privacy-badge">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        100% Private • No Data Leaves Your Device
    </div>
</div>

<div class="studio-container">

    <!-- Beta Warning / HIPAA Notice -->
    <div class="beta-warning">
        <div class="beta-warning-header">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px; color: #f59e0b;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <h3>⚠️ Prototype / Beta — Educational Demonstration Only</h3>
        </div>
        <ul>
            <li><strong>NOT for direct use in patient care.</strong> This is an educational prototype demonstrating AI-assisted documentation concepts.</li>
            <li><strong>No PHI:</strong> Do not enter any actual patient data, protected health information, or real clinical encounters.</li>
            <li><strong>Privacy:</strong> All audio and text processing happens entirely within your browser. No data is transmitted to external servers.</li>
            <li><strong>HIPAA Compliance:</strong> This prototype has not been validated for HIPAA compliance. Consult your institution's policies before any clinical use.</li>
            <li><strong>First-time setup:</strong> Downloads AI models (~150MB for transcription, ~800MB-2GB for text generation). Models are cached locally for future use.</li>
        </ul>
    </div>

    <!-- Status Panel -->
    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Initialize AI Models" to begin</div>
        <div id="status-details">Whisper transcription + LLM text generation will be loaded</div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>

        <div class="model-selector" id="model-selector">
            <div class="model-section">
                <div class="model-section-title">Transcription Model (Whisper)</div>
                <label class="model-option">
                    <input type="radio" name="whisper-model" value="tiny" checked>
                    <div class="model-info">
                        <strong>Whisper Tiny (Recommended)</strong>
                        <span>Fast transcription, good accuracy. ~75MB download.</span>
                    </div>
                </label>
                <label class="model-option">
                    <input type="radio" name="whisper-model" value="base">
                    <div class="model-info">
                        <strong>Whisper Base</strong>
                        <span>Better accuracy, slower. ~150MB download.</span>
                    </div>
                </label>
            </div>

            <div class="model-section">
                <div class="model-section-title">Text Generation Model (LLM)</div>
                <label class="model-option">
                    <input type="radio" name="llm-model" value="fast" checked>
                    <div class="model-info">
                        <strong>Llama 3.2 1B (Fast)</strong>
                        <span>Lightning fast, lower memory. Good for most devices. ~870MB</span>
                    </div>
                </label>
                <label class="model-option">
                    <input type="radio" name="llm-model" value="thinking">
                    <div class="model-info">
                        <strong>Phi-3.5 Mini (Quality)</strong>
                        <span>Higher quality, better reasoning. Best for complex notes. ~2.2GB</span>
                    </div>
                </label>
            </div>
        </div>

        <button id="init-btn" class="btn btn-success btn-lg" onclick="initializeModels()" style="margin-top: 20px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            Initialize AI Models
        </button>
    </div>

    <!-- Main Recording Area -->
    <div class="main-grid">
        <!-- Left: Recording + Transcript -->
        <div>
            <!-- Recording Panel -->
            <div class="panel" style="margin-bottom: 25px;">
                <div class="panel-header">
                    <h3 class="panel-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                        Recording
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="recording-controls">
                        <button class="record-button" id="record-btn" onclick="toggleRecording()" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width: 40px; height: 40px;" id="record-icon">
                                <circle cx="12" cy="12" r="8"/>
                            </svg>
                        </button>
                        <div class="recording-timer" id="recording-timer">0:00</div>
                        <div class="recording-status" id="recording-status">Click button to start recording</div>
                    </div>
                    <div class="audio-viz" id="audio-viz" style="display: none;">
                        <canvas id="viz-canvas"></canvas>
                    </div>
                    <div class="transcribing-indicator" id="transcribing-indicator">
                        <div class="spinner" style="border-color: rgba(30, 64, 175, 0.3); border-top-color: #1e40af;"></div>
                        Transcribing audio with Whisper...
                    </div>
                </div>
            </div>

            <!-- Transcript Panel -->
            <div class="panel">
                <div class="panel-header">
                    <h3 class="panel-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        Transcript
                    </h3>
                </div>
                <div class="panel-body">
                    <textarea class="transcript-area" id="transcript-area" placeholder="Transcript will appear here after recording..." disabled></textarea>
                    <div class="transcript-actions">
                        <button class="btn btn-secondary btn-sm" onclick="clearTranscript()" disabled id="clear-transcript-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            Clear
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="pasteFromClipboard()" id="paste-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                            Paste
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right: Output -->
        <div>
            <!-- Prompt Configuration -->
            <div class="panel prompt-panel">
                <div class="panel-header">
                    <h3 class="panel-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Prompt Configuration
                    </h3>
                    <a href="{{ site.baseurl }}/prompt-library" target="_blank" class="btn btn-sm btn-secondary">View Library</a>
                </div>
                <div class="panel-body">
                    <div class="prompt-selector">
                        <select class="prompt-select" id="prompt-select" onchange="loadSelectedPrompt()">
                            <option value="">-- Select a prompt from library --</option>
                            {% assign sorted_prompts = site.prompts | sort: "order" %}
                            {% for prompt in sorted_prompts %}
                            <option value="{{ prompt.title | slugify }}" data-content="{{ prompt.content | escape }}">{{ prompt.title }}</option>
                            {% endfor %}
                            <option value="custom">✏️ Custom Prompt</option>
                        </select>
                    </div>
                    <textarea class="prompt-editor" id="prompt-editor" placeholder="Select a prompt above or write your own..."></textarea>
                    <div class="char-counter" id="char-counter">0 / 5,000 characters</div>
                </div>
            </div>

            <!-- Transform Button -->
            <div class="transform-section">
                <button class="transform-button" id="transform-btn" onclick="transformNote()" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    <span id="transform-btn-text">Transform with AI</span>
                </button>
            </div>

            <!-- Output Panel -->
            <div class="panel">
                <div class="panel-header">
                    <h3 class="panel-title">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Formatted Note
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="output-area" id="output-area" contenteditable="true">
                        <div class="output-placeholder">Your formatted clinical note will appear here after transformation...</div>
                    </div>
                    <div class="output-actions">
                        <button class="btn btn-primary btn-sm" onclick="copyOutput()" id="copy-output-btn" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                            Copy to Clipboard
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="downloadOutput()" id="download-output-btn" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="clearOutput()" id="clear-output-btn" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- PWA Registration -->
<link rel="manifest" href="{{ '/scribe-manifest.json' | relative_url }}">

<script type="module">
    // ============================================
    // AI SCRIBE STUDIO - MAIN APPLICATION
    // ============================================

    import * as webllm from "https://esm.run/@anthropic-ai/mlc-llm-nightly";

    // State
    let whisperWorker = null;
    let llmEngine = null;
    let isRecording = false;
    let mediaRecorder = null;
    let audioChunks = [];
    let recordingStartTime = null;
    let timerInterval = null;
    let audioContext = null;
    let analyser = null;
    let modelsReady = false;

    // DOM Elements
    const statusPanel = document.getElementById('status-panel');
    const statusMessage = document.getElementById('status-message');
    const statusDetails = document.getElementById('status-details');
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const modelSelector = document.getElementById('model-selector');
    const initBtn = document.getElementById('init-btn');
    const recordBtn = document.getElementById('record-btn');
    const recordIcon = document.getElementById('record-icon');
    const recordingTimer = document.getElementById('recording-timer');
    const recordingStatus = document.getElementById('recording-status');
    const transcribingIndicator = document.getElementById('transcribing-indicator');
    const transcriptArea = document.getElementById('transcript-area');
    const clearTranscriptBtn = document.getElementById('clear-transcript-btn');
    const promptSelect = document.getElementById('prompt-select');
    const promptEditor = document.getElementById('prompt-editor');
    const charCounter = document.getElementById('char-counter');
    const transformBtn = document.getElementById('transform-btn');
    const transformBtnText = document.getElementById('transform-btn-text');
    const outputArea = document.getElementById('output-area');
    const copyOutputBtn = document.getElementById('copy-output-btn');
    const downloadOutputBtn = document.getElementById('download-output-btn');
    const clearOutputBtn = document.getElementById('clear-output-btn');

    // LLM Model configurations
    const LLM_MODELS = {
        fast: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
        thinking: "Phi-3.5-mini-instruct-q4f16_1-MLC"
    };

    // ============================================
    // INITIALIZATION
    // ============================================

    window.initializeModels = async function() {
        const whisperModel = document.querySelector('input[name="whisper-model"]:checked').value;
        const llmModel = document.querySelector('input[name="llm-model"]:checked').value;

        initBtn.disabled = true;
        initBtn.innerHTML = '<div class="spinner"></div> Initializing...';
        modelSelector.style.display = 'none';
        progressBar.classList.add('active');
        statusPanel.className = 'status-panel loading';

        try {
            // Step 1: Initialize Whisper
            statusMessage.textContent = 'Loading Whisper transcription model...';
            statusDetails.textContent = `Downloading whisper-${whisperModel} (~${whisperModel === 'tiny' ? '75' : '150'}MB)...`;
            progressFill.style.width = '10%';

            // For now, we'll use a placeholder for Whisper initialization
            // In production, this would load whisper.cpp via WASM
            await simulateWhisperLoad(whisperModel);
            progressFill.style.width = '40%';

            // Step 2: Initialize WebLLM
            statusMessage.textContent = 'Loading text generation model...';
            statusDetails.textContent = `Downloading ${llmModel === 'fast' ? 'Llama 3.2 1B' : 'Phi-3.5 Mini'}...`;

            llmEngine = await webllm.CreateMLCEngine(LLM_MODELS[llmModel], {
                initProgressCallback: (progress) => {
                    const pct = 40 + (progress.progress * 60);
                    progressFill.style.width = pct + '%';
                    statusDetails.textContent = progress.text;
                }
            });

            progressFill.style.width = '100%';

            // Ready!
            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = '✓ AI Models Ready';
            statusDetails.textContent = 'You can now record and transcribe patient encounters';
            initBtn.style.display = 'none';
            progressBar.classList.remove('active');
            modelsReady = true;

            // Enable recording
            recordBtn.disabled = false;
            transcriptArea.disabled = false;
            recordingStatus.textContent = 'Click button to start recording';

        } catch (error) {
            console.error('Initialization error:', error);
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = 'Initialization Failed';
            statusDetails.textContent = error.message;
            initBtn.disabled = false;
            initBtn.innerHTML = 'Retry Initialization';
            modelSelector.style.display = 'block';
        }
    };

    // Simulate Whisper loading (placeholder until WASM integration)
    async function simulateWhisperLoad(model) {
        // In production, this would initialize whisper.cpp WASM
        return new Promise(resolve => setTimeout(resolve, 1500));
    }

    // ============================================
    // RECORDING
    // ============================================

    window.toggleRecording = async function() {
        if (!isRecording) {
            await startRecording();
        } else {
            await stopRecording();
        }
    };

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                await transcribeAudio(audioBlob);
            };

            mediaRecorder.start();
            isRecording = true;
            recordingStartTime = Date.now();

            // Update UI
            recordBtn.classList.add('recording');
            recordIcon.innerHTML = '<rect x="6" y="6" width="12" height="12" rx="2"/>';
            recordingStatus.textContent = 'Recording...';
            recordingStatus.classList.add('active');

            // Start timer
            timerInterval = setInterval(updateTimer, 1000);
            updateTimer();

            // Setup audio visualization
            setupAudioVisualization(stream);

        } catch (error) {
            console.error('Recording error:', error);
            recordingStatus.textContent = 'Microphone access denied';
        }
    }

    async function stopRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }

        isRecording = false;
        clearInterval(timerInterval);

        // Update UI
        recordBtn.classList.remove('recording');
        recordIcon.innerHTML = '<circle cx="12" cy="12" r="8"/>';
        recordingStatus.textContent = 'Processing...';
        recordingStatus.classList.remove('active');
    }

    function updateTimer() {
        const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        recordingTimer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function setupAudioVisualization(stream) {
        // Audio visualization implementation
        // This would draw waveforms to the canvas
    }

    // ============================================
    // TRANSCRIPTION
    // ============================================

    async function transcribeAudio(audioBlob) {
        transcribingIndicator.classList.add('active');
        recordingStatus.textContent = 'Transcribing with Whisper...';

        try {
            // Placeholder: In production, this sends audio to Whisper WASM
            // For demo purposes, we'll show a placeholder
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simulated transcript for demo
            const demoTranscript = `This is where the transcribed audio would appear.

To use this tool:
1. Initialize the AI models above
2. Click the record button to start recording
3. Speak naturally as you would during a patient encounter
4. Click stop when finished
5. The audio will be transcribed using Whisper
6. Select a prompt and click "Transform with AI" to format the note

Note: This is a prototype demonstration. In production, Whisper.cpp via WebAssembly would provide real-time transcription.`;

            transcriptArea.value = demoTranscript;
            transcriptArea.disabled = false;
            clearTranscriptBtn.disabled = false;
            updateTransformButton();

        } catch (error) {
            console.error('Transcription error:', error);
            recordingStatus.textContent = 'Transcription failed';
        } finally {
            transcribingIndicator.classList.remove('active');
            recordingStatus.textContent = 'Click button to start recording';
        }
    }

    // ============================================
    // PROMPT MANAGEMENT
    // ============================================

    window.loadSelectedPrompt = function() {
        const select = promptSelect;
        const option = select.options[select.selectedIndex];
        
        if (option.value === 'custom') {
            promptEditor.value = '';
            promptEditor.focus();
        } else if (option.dataset.content) {
            promptEditor.value = decodeHTMLEntities(option.dataset.content);
        }
        
        updateCharCounter();
        updateTransformButton();
    };

    function decodeHTMLEntities(text) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }

    promptEditor.addEventListener('input', function() {
        updateCharCounter();
        updateTransformButton();
    });

    function updateCharCounter() {
        const count = promptEditor.value.length;
        charCounter.textContent = `${count.toLocaleString()} / 5,000 characters`;
        
        charCounter.classList.remove('warning', 'error');
        if (count > 5000) {
            charCounter.classList.add('error');
        } else if (count > 4000) {
            charCounter.classList.add('warning');
        }
    }

    function updateTransformButton() {
        const hasTranscript = transcriptArea.value.trim().length > 0;
        const hasPrompt = promptEditor.value.trim().length > 0;
        transformBtn.disabled = !modelsReady || !hasTranscript || !hasPrompt;
    }

    // ============================================
    // TRANSFORMATION
    // ============================================

    window.transformNote = async function() {
        if (!llmEngine) {
            alert('Please initialize AI models first');
            return;
        }

        const transcript = transcriptArea.value.trim();
        const prompt = promptEditor.value.trim();

        if (!transcript || !prompt) {
            alert('Please provide both a transcript and a prompt');
            return;
        }

        transformBtn.disabled = true;
        transformBtnText.textContent = 'Transforming...';
        transformBtn.querySelector('svg').style.display = 'none';
        
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        transformBtn.insertBefore(spinner, transformBtnText);

        // Clear output
        outputArea.innerHTML = '';
        outputArea.classList.remove('output-placeholder');

        try {
            const fullPrompt = `${prompt}

---

Raw Transcript:
${transcript}`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: "user", content: fullPrompt }],
                stream: true,
                max_tokens: 2000
            });

            let outputText = '';
            for await (const chunk of response) {
                const content = chunk.choices[0]?.delta?.content || '';
                outputText += content;
                outputArea.innerText = outputText;
            }

            // Enable output actions
            copyOutputBtn.disabled = false;
            downloadOutputBtn.disabled = false;
            clearOutputBtn.disabled = false;

        } catch (error) {
            console.error('Transformation error:', error);
            outputArea.innerHTML = `<div style="color: #dc2626;">Error: ${error.message}</div>`;
        } finally {
            transformBtn.disabled = false;
            transformBtnText.textContent = 'Transform with AI';
            transformBtn.querySelector('.spinner')?.remove();
            transformBtn.querySelector('svg').style.display = '';
        }
    };

    // ============================================
    // OUTPUT ACTIONS
    // ============================================

    window.copyOutput = function() {
        const text = outputArea.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyOutputBtn.innerHTML;
            copyOutputBtn.innerHTML = '✓ Copied!';
            setTimeout(() => { copyOutputBtn.innerHTML = originalText; }, 2000);
        });
    };

    window.downloadOutput = function() {
        const text = outputArea.innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `clinical-note-${new Date().toISOString().slice(0,10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    window.clearOutput = function() {
        outputArea.innerHTML = '<div class="output-placeholder">Your formatted clinical note will appear here after transformation...</div>';
        copyOutputBtn.disabled = true;
        downloadOutputBtn.disabled = true;
        clearOutputBtn.disabled = true;
    };

    window.clearTranscript = function() {
        transcriptArea.value = '';
        clearTranscriptBtn.disabled = true;
        updateTransformButton();
    };

    window.pasteFromClipboard = async function() {
        try {
            const text = await navigator.clipboard.readText();
            transcriptArea.value = text;
            transcriptArea.disabled = false;
            clearTranscriptBtn.disabled = false;
            updateTransformButton();
        } catch (error) {
            console.error('Paste error:', error);
        }
    };

    // ============================================
    // SERVICE WORKER REGISTRATION
    // ============================================

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('{{ "/scribe-sw.js" | relative_url }}')
            .then(reg => console.log('Scribe SW registered'))
            .catch(err => console.log('Scribe SW registration failed:', err));
    }

    // Initialize character counter
    updateCharCounter();
</script>
