---
layout: page
title: PPE Scribe
description: Experimental browser-based clinical documentation tool. Educational demonstration of speech-to-text and AI formatting capabilities.
permalink: /scribe-tool/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background: #f5f5f5;
        color: #333;
        line-height: 1.6;
    }

    .wrapper {
        max-width: 1640px;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .header {
        background: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header h1 {
        font-size: 2em;
        margin-bottom: 15px;
        color: #2a7ae2;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .header p {
        color: #666;
        font-size: 1.05em;
        margin-bottom: 10px;
        line-height: 1.8;
    }

    .privacy-highlight {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #059669;
        font-weight: 500;
        font-size: 1.1em;
        margin-top: 15px;
        padding: 15px;
        background: #d1fae5;
        border-radius: 6px;
        border-left: 4px solid #059669;
    }

    .warning-box {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left: 4px solid #f59e0b;
        padding: 20px;
        border-radius: 6px;
        margin-bottom: 30px;
    }

    .warning-box h3 {
        color: #92400e;
        margin-bottom: 12px;
        font-size: 1.1em;
    }

    .warning-box ul {
        margin-left: 20px;
        color: #78350f;
    }

    .warning-box li {
        margin-bottom: 6px;
    }

    .warning-box strong {
        color: #92400e;
    }

    .status-panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
        margin-bottom: 15px;
        font-weight: 500;
    }

    #status-details {
        font-size: 0.95em;
        color: #666;
        margin-top: 10px;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 15px;
        display: none;
    }

    .progress-bar.active {
        display: block;
    }

    .progress-fill {
        height: 100%;
        background: #2a7ae2;
        width: 0%;
        transition: width 0.3s ease;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 500;
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
        background: #2a7ae2;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5bb8;
        transform: translateY(-1px);
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #218838;
        transform: translateY(-1px);
    }

    .btn-danger {
        background: #dc3545;
        color: white;
    }

    .btn-danger:hover:not(:disabled) {
        background: #c82333;
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #5a6268;
        transform: translateY(-1px);
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
    }

    .btn.recording {
        background: #dc3545;
        animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    .main-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: start;
    }

    @media (max-width: 1200px) {
        .main-layout {
            grid-template-columns: 1fr;
        }

        .output-panel {
            position: static !important;
            top: auto !important;
        }
    }

    .panel {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .panel h2 {
        color: #2a7ae2;
        margin-bottom: 20px;
        font-size: 1.4em;
    }

    .panel h3 {
        color: #333;
        margin-bottom: 15px;
        margin-top: 25px;
        font-size: 1.1em;
    }

    .output-panel {
        position: sticky;
        top: 20px;
    }

    .recording-controls {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 25px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
        border: 2px solid #e8e8e8;
    }

    .recording-status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: white;
        border-radius: 6px;
        border: 2px solid #e8e8e8;
    }

    .status-indicator {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        font-size: 1.05em;
    }

    .status-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #6c757d;
    }

    .status-dot.recording {
        background: #dc3545;
        animation: blink 1s ease-in-out infinite;
    }

    .status-dot.ready {
        background: #28a745;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
    }

    .duration-display {
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 1.2em;
        font-weight: 600;
        color: #2a7ae2;
    }

    .button-group {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .upload-section {
        margin-top: 20px;
        padding: 20px;
        background: #f0f7ff;
        border-radius: 8px;
        border: 2px dashed #2a7ae2;
        text-align: center;
    }

    .upload-section h4 {
        color: #2a7ae2;
        margin-bottom: 10px;
    }

    .upload-section p {
        color: #666;
        font-size: 0.95em;
        margin-bottom: 15px;
    }

    .file-input-wrapper {
        position: relative;
        display: inline-block;
    }

    .file-input-wrapper input[type="file"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .transcription-box {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 6px;
        border-left: 3px solid #2a7ae2;
        min-height: 200px;
        margin-bottom: 20px;
        position: relative;
    }

    .transcription-box.empty {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        font-style: italic;
    }

    .transcription-box textarea {
        width: 100%;
        min-height: 200px;
        border: none;
        background: transparent;
        font-family: inherit;
        font-size: 1em;
        resize: vertical;
        padding: 0;
        color: #333;
    }

    .transcription-box textarea:focus {
        outline: none;
    }

    .transcription-actions {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 25px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
        font-size: 1.05em;
    }

    .form-group select {
        width: 100%;
        padding: 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1em;
        transition: border-color 0.2s;
        background: white;
    }

    .form-group select:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    #output-content {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 6px;
        border-left: 3px solid #059669;
        min-height: 300px;
        white-space: pre-wrap;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.95em;
        color: #333;
        margin-bottom: 20px;
        display: none;
    }

    #output-content.active {
        display: block;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #999;
    }

    .empty-state-icon {
        font-size: 4em;
        margin-bottom: 15px;
    }

    .char-counter {
        text-align: right;
        font-size: 0.9em;
        margin-top: 10px;
        color: #666;
    }

    .char-counter.warning {
        color: #f59e0b;
        font-weight: 600;
    }

    .char-counter.error {
        color: #dc2626;
        font-weight: 600;
    }

    .output-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #2a7ae2;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
        display: none;
    }

    .spinner.active {
        display: block;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .info-box {
        background: #f0f7ff;
        border-left: 4px solid #2a7ae2;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
    }

    .info-box h4 {
        color: #2a7ae2;
        margin-bottom: 8px;
        font-size: 1em;
    }

    .info-box ul {
        margin-left: 20px;
        color: #555;
        font-size: 0.95em;
    }

    .info-box li {
        margin-bottom: 5px;
    }

    .workflow-indicator {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 6px;
    }

    .workflow-step {
        flex: 1;
        text-align: center;
        position: relative;
        padding: 10px;
    }

    .workflow-step:not(:last-child)::after {
        content: '→';
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        color: #ccc;
        font-size: 1.5em;
    }

    .workflow-step.active {
        background: #e3f2fd;
        border-radius: 6px;
    }

    .workflow-step.completed {
        background: #d1fae5;
        border-radius: 6px;
    }

    .workflow-step-icon {
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    .workflow-step-label {
        font-size: 0.85em;
        color: #666;
        font-weight: 500;
    }

    .audio-visualizer {
        width: 100%;
        height: 60px;
        background: #1a1a1a;
        border-radius: 6px;
        margin-top: 10px;
        display: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .audio-visualizer.active {
        display: flex;
    }

    .audio-bars {
        display: flex;
        gap: 3px;
        align-items: center;
        height: 100%;
        padding: 10px;
    }

    .audio-bar {
        width: 4px;
        background: #2a7ae2;
        border-radius: 2px;
        animation: audioWave 0.8s ease-in-out infinite;
    }

    .audio-bar:nth-child(1) { animation-delay: 0s; }
    .audio-bar:nth-child(2) { animation-delay: 0.1s; }
    .audio-bar:nth-child(3) { animation-delay: 0.2s; }
    .audio-bar:nth-child(4) { animation-delay: 0.3s; }
    .audio-bar:nth-child(5) { animation-delay: 0.4s; }

    @keyframes audioWave {
        0%, 100% {
            height: 20%;
        }
        50% {
            height: 80%;
        }
    }

    /* ===== Output Cards ===== */
    .output-card {
        background: white;
        border: 2px solid #e8e8e8;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        transition: box-shadow 0.2s;
    }

    .output-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .output-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 2px solid #f0f0f0;
    }

    .output-card-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #2a7ae2;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .output-card-badge {
        font-size: 0.75em;
        padding: 3px 8px;
        border-radius: 4px;
        background: #e3f2fd;
        color: #1565c0;
        font-weight: 500;
    }

    .output-card-content {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 6px;
        min-height: 150px;
        white-space: pre-wrap;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        color: #333;
        line-height: 1.6;
        max-height: 500px;
        overflow-y: auto;
    }

    .output-card-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }

    .output-card.processing {
        opacity: 0.6;
    }

    .output-card.error {
        border-color: #dc3545;
        background: #fff5f5;
    }

    .output-card.error .output-card-title {
        color: #dc3545;
    }

    /* Copy all button */
    .copy-all-container {
        margin-bottom: 20px;
        padding: 15px;
        background: #f0f7ff;
        border-radius: 6px;
        text-align: center;
    }

    /* ===== Prompt Category Sections ===== */
    .prompt-category-section {
        margin-bottom: 30px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
        border: 2px solid #e8e8e8;
    }

    .prompt-category-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .prompt-category-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #333;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .prompt-category-description {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 15px;
        line-height: 1.5;
    }

    .prompt-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .prompt-item {
        background: white;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        padding: 15px;
        transition: all 0.2s;
    }

    .prompt-item.enabled {
        border-color: #28a745;
        background: #f0fff4;
    }

    .prompt-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .prompt-item-title {
        font-weight: 600;
        color: #333;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .prompt-item-actions {
        display: flex;
        gap: 8px;
    }

    .prompt-item-content {
        display: none;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #e8e8e8;
    }

    .prompt-item-content.expanded {
        display: block;
    }

    .prompt-item textarea {
        width: 100%;
        min-height: 200px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.85em;
        resize: vertical;
    }

    .btn-sm {
        padding: 6px 12px;
        font-size: 0.85em;
    }

    .badge {
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 0.75em;
        font-weight: 500;
    }

    .badge-success {
        background: #d4edda;
        color: #155724;
    }

    .badge-secondary {
        background: #e2e3e5;
        color: #383d41;
    }

    .badge-default {
        background: #e3f2fd;
        color: #1565c0;
    }
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1 class="hero-title">PPE Scribe</h1>
        <p class="hero-subtitle">
            Experimental browser-based scribe demonstrating speech-to-text and AI-powered clinical note formatting. Educational purposes only.
        </p>
    </div>
</div>

<div class="container">
    <div class="warning-box" style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
        <h3 style="color: #78350f; margin-bottom: 12px; font-size: 1.1em;">BETA - Educational Demonstration Only</h3>
        <p style="color: #78350f; margin-bottom: 10px;">
            <strong>This is an experimental prototype for educational purposes.</strong> Do not use with any patient data, protected health information, or sensitive information. This tool is not HIPAA-compliant and is not intended for clinical use.
        </p>
    </div>

    <div class="warning-box" id="browser-warning">
        <h3>System Requirements</h3>
        <ul>
            <li><strong>Browser:</strong> Chrome or Edge version 113+ (with WebGPU support)</li>
            <li><strong>First-time setup:</strong> Downloads ~2.1GB (Whisper 75MB + Phi-3.5 2GB), cached permanently</li>
            <li><strong>Microphone:</strong> Required for recording; browser will request permission</li>
            <li><strong>Processing time:</strong> Typical 5-min encounter = ~2-3 minutes total processing</li>
            <li><strong>Works offline:</strong> After initial setup, no internet required</li>
        </ul>
    </div>

    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Initialize AI Scribe" to download models and start</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary btn-lg" onclick="initializeModels()">
            Initialize PPE Scribe
        </button>
    </div>

    <div class="workflow-indicator" id="workflow-indicator" style="display: none;">
        <div class="workflow-step" id="step-record">
            <div class="workflow-step-icon">1</div>
            <div class="workflow-step-label">Record</div>
        </div>
        <div class="workflow-step" id="step-transcribe">
            <div class="workflow-step-icon">2</div>
            <div class="workflow-step-label">Transcribe</div>
        </div>
        <div class="workflow-step" id="step-process">
            <div class="workflow-step-icon">3</div>
            <div class="workflow-step-label">Format</div>
        </div>
        <div class="workflow-step" id="step-done">
            <div class="workflow-step-icon">4</div>
            <div class="workflow-step-label">Done</div>
        </div>
    </div>

    <div class="main-layout" id="main-interface" style="display: none;">
        <div class="panel">
            <h2>Recording & Transcription</h2>

            <div class="recording-controls">
                <div class="recording-status">
                    <div class="status-indicator">
                        <span class="status-dot" id="status-dot"></span>
                        <span id="recording-status-text">Ready</span>
                    </div>
                    <div class="duration-display" id="duration-display">0:00</div>
                </div>

                <div class="button-group">
                    <button id="start-btn" class="btn btn-danger btn-lg" onclick="startRecording()">
                        Start Recording
                    </button>
                    <button id="stop-btn" class="btn btn-secondary" onclick="stopRecording()" disabled>
                        Stop & Transcribe
                    </button>
                    <button id="clear-btn" class="btn btn-secondary" onclick="clearAll()">
                        Clear All
                    </button>
                </div>

                <div class="audio-visualizer" id="audio-visualizer">
                    <div class="audio-bars">
                        <div class="audio-bar"></div>
                        <div class="audio-bar"></div>
                        <div class="audio-bar"></div>
                        <div class="audio-bar"></div>
                        <div class="audio-bar"></div>
                    </div>
                </div>
            </div>

            <div class="upload-section">
                <h4>Or Upload Audio File</h4>
                <p>Already have a recording? Upload it here (.wav, .mp3, .m4a, .webm)</p>
                <div class="file-input-wrapper">
                    <label for="audio-file" class="btn btn-primary">
                        Choose Audio File
                    </label>
                    <input type="file" id="audio-file" accept="audio/*" onchange="handleFileUpload(event)">
                </div>
            </div>

            <h3 style="margin-top: 30px;">Transcription</h3>
            <div class="spinner" id="transcription-spinner"></div>
            <div class="transcription-box" id="transcription-box">
                <div class="empty-state" id="transcription-empty">
                    <div class="empty-state-icon"></div>
                    <p>Your transcription will appear here after recording</p>
                </div>
                <textarea id="transcription-text" style="display: none;" placeholder="Transcription will appear here. You can edit it before processing..."></textarea>
            </div>

            <div class="transcription-actions" id="transcription-actions" style="display: none;">
                <button class="btn btn-success" onclick="copyTranscription(event)">
                    Copy Transcription
                </button>
                <button class="btn btn-secondary" onclick="downloadTranscription()">
                    Download .txt
                </button>
            </div>

            <div class="info-box">
                <h4>Tips for Best Results</h4>
                <ul>
                    <li><strong>Quiet environment:</strong> Minimize background noise</li>
                    <li><strong>Clear speech:</strong> Speak clearly, especially medical terms</li>
                    <li><strong>Brief pauses:</strong> Brief pauses between sentences improve accuracy</li>
                    <li><strong>Review transcription:</strong> Always review and edit before processing</li>
                    <li><strong>Medical terminology:</strong> AI will correct common medical terms during formatting</li>
                </ul>
            </div>
        </div>

        <div class="output-panel">
            <h2>Process & Generate</h2>

            <!-- Simple workflow section -->
            <button id="process-btn" class="btn btn-success btn-lg" onclick="processWithAI()" disabled style="width: 100%; margin-bottom: 20px;">
                🎯 Generate Clinical Note
            </button>

            <!-- Output containers -->
            <div class="empty-state" id="output-empty">
                <div class="empty-state-icon">📋</div>
                <p>Your formatted clinical notes will appear here after processing</p>
            </div>

            <div class="spinner" id="output-spinner"></div>

            <!-- Output cards will be dynamically inserted here -->
            <div id="output-cards-container"></div>

            <!-- Prompt customization section -->
            <div id="prompt-customization-section" style="margin-top: 40px; display: none;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #e8e8e8;">
                    <h3 style="margin: 0; color: #2a7ae2;">⚙️ Customize Prompts</h3>
                    <button id="toggle-customization-btn" class="btn btn-secondary" onclick="toggleCustomization()" style="font-size: 0.9em;">
                        Hide Customization
                    </button>
                </div>

                <div id="customization-content" style="display: none;">
                    <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">
                        Control every step of the documentation process. Customize how the AI processes your transcripts and what additional outputs it generates.
                    </p>

                    <!-- System Prompts Section -->
                    <div id="system-prompts-section" class="prompt-category-section"></div>

                    <!-- Editor Prompts Section -->
                    <div id="editor-prompts-section" class="prompt-category-section"></div>

                    <!-- Enhancement Prompts Section -->
                    <div id="enhancement-prompts-section" class="prompt-category-section"></div>
                </div>
            </div>

            <div class="info-box" style="margin-top: 20px;">
                <h4>💡 Quick Workflow</h4>
                <ul>
                    <li><strong>Record/Upload:</strong> Capture the clinical encounter</li>
                    <li><strong>Transcribe:</strong> Convert audio to text (automatic)</li>
                    <li><strong>Process:</strong> Click "Generate" to create notes</li>
                    <li><strong>Customize:</strong> Scroll down to adjust prompts as needed</li>
                    <li><strong>Iterate:</strong> Refine your workflow over time</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.1.2";
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let whisperModel = null;
    let llmEngine = null;
    let mediaRecorder = null;
    let audioChunks = [];
    let recordingStartTime = null;
    let durationInterval = null;
    let currentTranscription = '';
    let currentMedicalNote = ''; // First draft from system prompt
    let processingResults = {}; // Store all outputs: { system, editor, enhancements: [] }
    let scribePrompts = null; // Prompt management system

    const WHISPER_MODEL = "Xenova/whisper-base";
    const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";
    const SCRIBE_PROMPTS_STORAGE_KEY = 'aiScribePrompts';

    // =====================================================
    // PROMPT MANAGEMENT SYSTEM
    // =====================================================
    // Central prompt storage with categories:
    // - System Prompts: Clean transcript → first draft medical note
    // - Editor Prompts: Reformat the medical note (optional)
    // - Enhancement Prompts: Generate additional outputs (AVS, billing, etc.)
    // =====================================================

    const DEFAULT_PROMPTS = {
        system: {
            id: 'default-system-1',
            name: 'Standard Medical Note',
            prompt: `You are a medical documentation assistant. Your task is to convert a raw clinical encounter transcription into a formal, well-organized medical note.

CRITICAL RULES:
- Use ONLY information explicitly stated in the transcription
- Do NOT infer, add, or fabricate any clinical details
- Do NOT add clinical reasoning beyond what is explicitly mentioned
- Preserve ALL clinical information from the transcript
- Remove conversational filler and repetition
- Use formal medical terminology and standard abbreviations
- Organize information clearly and logically

OUTPUT FORMAT:
Create a structured medical note with clear sections. Use markdown formatting with **bold headers** for sections. Organize information by clinical relevance. Common sections include:
- Chief Complaint / HPI
- Past Medical History (if mentioned)
- Physical Exam / Findings
- Assessment
- Plan

Adapt the format based on what information is present in the transcription. Be thorough but concise.

TRANSCRIPTION:`,
            enabled: true,
            isDefault: true
        },
        editor: {
            id: 'default-editor-1',
            name: 'APSO Formatter',
            prompt: `You are a medical documentation formatter. Take the provided medical note and reformat it into the APSO format (Assessment, Plan, Subjective, Objective).

INSTRUCTIONS:
- Reorganize the existing note content into APSO sections
- Do NOT add any new clinical information
- Do NOT remove any clinical information
- Simply reorganize what is already present

FORMAT:

**Assessment:**
[Clinical impressions and diagnoses from the note]

**Plan:**
[Treatment plan, medications, follow-up]
- Use bullet points for clarity

**Subjective:**
[Patient's complaints, history, symptoms]

**Objective:**
[Physical exam findings, vital signs, test results]

MEDICAL NOTE TO REFORMAT:`,
            enabled: false,
            isDefault: true
        },
        enhancements: [
            {
                id: 'default-enhance-avs',
                name: 'After-Visit Summary',
                prompt: `You are a patient education specialist. Using the medical note below, create a patient-friendly After-Visit Summary.

REQUIREMENTS:
- Use 6th-8th grade reading level
- Explain medical terms in plain language
- Be warm and reassuring in tone
- Make instructions clear and specific
- Use simple sentence structure

FORMAT:

**What We Talked About Today:**
[Plain language explanation of the visit and findings]

**Your Medicine:**
[Simple medication instructions with what, when, and why for each]

**What You Need To Do:**
[Clear, numbered action items for the patient]

**When To Call Us or Go To Urgent Care:**
[Specific warning signs in simple terms]

MEDICAL NOTE:`,
                enabled: true,
                isDefault: true
            },
            {
                id: 'default-enhance-billing',
                name: 'Billing & MDM Summary',
                prompt: `You are a medical billing specialist. Analyze the medical note below and generate Medical Decision Making (MDM) documentation for billing purposes.

OUTPUT FORMAT:

**Complexity Level:** [Straightforward / Low / Moderate / High]

**Problems Addressed:**
- [List each problem with complexity: self-limited, stable chronic, acute uncomplicated, etc.]

**Data Reviewed:**
- [Labs, imaging, records reviewed]
- [Independent interpretation if applicable]

**Risk Assessment:**
- [Medication risks, procedural risks, morbidity/mortality risk]
- [Overall risk: minimal, low, moderate, high]

**Medical Decision Making Summary:**
[Brief justification for the complexity level and billing code recommendation based on 2023 E/M guidelines]

**Time:** [If mentioned in note]

MEDICAL NOTE:`,
                enabled: true,
                isDefault: true
            }
        ]
    };

    // =====================================================
    // PROMPT MANAGEMENT FUNCTIONS
    // =====================================================

    function initializePromptSystem() {
        const stored = localStorage.getItem(SCRIBE_PROMPTS_STORAGE_KEY);

        if (stored) {
            try {
                scribePrompts = JSON.parse(stored);
                // Ensure structure is correct
                if (!scribePrompts.systemPrompts) scribePrompts.systemPrompts = [];
                if (!scribePrompts.editorPrompts) scribePrompts.editorPrompts = [];
                if (!scribePrompts.enhancementPrompts) scribePrompts.enhancementPrompts = [];
                if (!scribePrompts.metadata) scribePrompts.metadata = { version: '1.0' };
            } catch (e) {
                console.error('Error loading prompts:', e);
                scribePrompts = createDefaultPromptStructure();
            }
        } else {
            scribePrompts = createDefaultPromptStructure();
        }

        savePromptSystem();
        return scribePrompts;
    }

    function createDefaultPromptStructure() {
        return {
            systemPrompts: [DEFAULT_PROMPTS.system],
            editorPrompts: [DEFAULT_PROMPTS.editor],
            enhancementPrompts: DEFAULT_PROMPTS.enhancements,
            metadata: {
                version: '1.0',
                createdAt: Date.now(),
                lastModified: Date.now()
            }
        };
    }

    function savePromptSystem() {
        if (scribePrompts) {
            scribePrompts.metadata.lastModified = Date.now();
            localStorage.setItem(SCRIBE_PROMPTS_STORAGE_KEY, JSON.stringify(scribePrompts));
        }
    }

    function getActiveSystemPrompt() {
        const active = scribePrompts.systemPrompts.find(p => p.enabled);
        return active || scribePrompts.systemPrompts[0]; // Fallback to first if none enabled
    }

    function getActiveEditorPrompt() {
        return scribePrompts.editorPrompts.find(p => p.enabled);
    }

    function getActiveEnhancementPrompts() {
        return scribePrompts.enhancementPrompts.filter(p => p.enabled);
    }

    function addPrompt(category, name, prompt) {
        const newPrompt = {
            id: Date.now(),
            name: name,
            prompt: prompt,
            enabled: false,
            isDefault: false,
            createdAt: Date.now(),
            lastModified: Date.now()
        };

        if (category === 'system') {
            scribePrompts.systemPrompts.push(newPrompt);
        } else if (category === 'editor') {
            scribePrompts.editorPrompts.push(newPrompt);
        } else if (category === 'enhancement') {
            scribePrompts.enhancementPrompts.push(newPrompt);
        }

        savePromptSystem();
        return newPrompt;
    }

    function updatePrompt(category, id, updates) {
        let prompts;
        if (category === 'system') prompts = scribePrompts.systemPrompts;
        else if (category === 'editor') prompts = scribePrompts.editorPrompts;
        else if (category === 'enhancement') prompts = scribePrompts.enhancementPrompts;

        const prompt = prompts.find(p => p.id === id);
        if (prompt) {
            Object.assign(prompt, updates);
            prompt.lastModified = Date.now();
            savePromptSystem();
        }
    }

    function deletePrompt(category, id) {
        if (category === 'system') {
            scribePrompts.systemPrompts = scribePrompts.systemPrompts.filter(p => p.id !== id);
        } else if (category === 'editor') {
            scribePrompts.editorPrompts = scribePrompts.editorPrompts.filter(p => p.id !== id);
        } else if (category === 'enhancement') {
            scribePrompts.enhancementPrompts = scribePrompts.enhancementPrompts.filter(p => p.id !== id);
        }
        savePromptSystem();
    }

    function togglePromptEnabled(category, id) {
        let prompts;
        if (category === 'system') {
            prompts = scribePrompts.systemPrompts;
            // For system prompts, disable all others (only one can be active)
            prompts.forEach(p => p.enabled = false);
        } else if (category === 'editor') {
            prompts = scribePrompts.editorPrompts;
            // For editor prompts, disable all others (only one can be active)
            prompts.forEach(p => p.enabled = false);
        } else if (category === 'enhancement') {
            prompts = scribePrompts.enhancementPrompts;
            // Enhancement prompts can have multiple enabled
        }

        const prompt = prompts.find(p => p.id === id);
        if (prompt) {
            prompt.enabled = !prompt.enabled;
            savePromptSystem();
        }
    }

    // =====================================================
    // INITIALIZATION
    // =====================================================
    window.initializeModels = async function() {
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = 'Initializing AI models...';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            // Step 0: Initialize prompt system
            initializePromptSystem();

            // Step 1: Load Whisper
            statusMessage.textContent = 'Loading Whisper (speech-to-text model)...';
            statusDetails.textContent = 'Downloading ~75MB... This may take 2-5 minutes.';
            progressFill.style.width = '25%';

            whisperModel = await pipeline(
                'automatic-speech-recognition',
                WHISPER_MODEL,
                {
                    dtype: 'fp32',
                    device: 'webgpu'
                }
            );

            progressFill.style.width = '50%';
            statusMessage.textContent = 'Whisper loaded!';

            // Step 2: Load LLM
            statusMessage.textContent = 'Loading Phi-3.5 (clinical formatting model)...';
            statusDetails.textContent = 'Downloading ~2GB... This may take 5-15 minutes.';

            llmEngine = await CreateMLCEngine(
                LLM_MODEL,
                {
                    initProgressCallback: (progress) => {
                        const percent = 50 + (progress.progress * 50);
                        progressFill.style.width = `${percent.toFixed(1)}%`;
                        statusDetails.textContent = `${progress.text} (${(progress.progress * 100).toFixed(1)}%)`;
                    }
                }
            );

            progressFill.style.width = '100%';
            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = 'PPE Scribe Ready!';
            statusDetails.textContent = 'All models loaded. You can now record or upload audio. This setup was one-time—next visit will load in seconds.';

            // Hide init panel, show main interface
            setTimeout(() => {
                document.getElementById('status-panel').style.display = 'none';
                document.getElementById('workflow-indicator').style.display = 'flex';
                document.getElementById('main-interface').style.display = 'grid';
                updateWorkflowStep('record');
                renderPromptCustomization();
            }, 2000);

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = 'Failed to initialize models';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Troubleshooting:</strong><br>
                • Check internet connection<br>
                • Ensure ~3GB free disk space<br>
                • Try refreshing the page<br>
                • Use Chrome/Edge 113+ on desktop
            `;
            console.error('Initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }
    };

    // =====================================================
    // AUDIO RECORDING
    // =====================================================
    window.startRecording = async function() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            audioChunks = [];
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = handleRecordingStop;

            mediaRecorder.start();
            recordingStartTime = Date.now();

            // Update UI
            document.getElementById('start-btn').disabled = true;
            document.getElementById('stop-btn').disabled = false;
            document.getElementById('status-dot').classList.add('recording');
            document.getElementById('recording-status-text').textContent = 'Recording...';
            document.getElementById('audio-visualizer').classList.add('active');

            // Start duration timer
            durationInterval = setInterval(updateDuration, 1000);
            updateWorkflowStep('record');

        } catch (error) {
            alert('Microphone access denied or unavailable. Please allow microphone access or upload an audio file instead.');
            console.error('Recording error:', error);
        }
    };

    window.stopRecording = function() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            mediaRecorder.stream.getTracks().forEach(track => track.stop());

            clearInterval(durationInterval);

            // Update UI
            document.getElementById('start-btn').disabled = false;
            document.getElementById('stop-btn').disabled = true;
            document.getElementById('status-dot').classList.remove('recording');
            document.getElementById('status-dot').classList.add('ready');
            document.getElementById('recording-status-text').textContent = 'Processing...';
            document.getElementById('audio-visualizer').classList.remove('active');
        }
    };

    function handleRecordingStop() {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        transcribeAudio(audioBlob);
    }

    function updateDuration() {
        const elapsed = Date.now() - recordingStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        document.getElementById('duration-display').textContent =
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // =====================================================
    // FILE UPLOAD
    // =====================================================
    window.handleFileUpload = function(event) {
        const file = event.target.files[0];
        if (!file) return;

        document.getElementById('recording-status-text').textContent = 'File uploaded, processing...';
        transcribeAudio(file);
    };

    // =====================================================
    // TRANSCRIPTION
    // =====================================================
    async function transcribeAudio(audioBlob) {
        updateWorkflowStep('transcribe');

        document.getElementById('transcription-spinner').classList.add('active');
        document.getElementById('transcription-empty').style.display = 'none';

        try {
            // Convert blob to URL for Whisper
            const audioUrl = URL.createObjectURL(audioBlob);

            // Transcribe
            const result = await whisperModel(audioUrl, {
                chunk_length_s: 30,
                stride_length_s: 5,
                language: 'english',
                task: 'transcribe'
            });

            currentTranscription = result.text;

            // Display transcription
            document.getElementById('transcription-spinner').classList.remove('active');
            document.getElementById('transcription-text').style.display = 'block';
            document.getElementById('transcription-text').value = currentTranscription;
            document.getElementById('transcription-actions').style.display = 'flex';

            // Enable process button and show customization
            document.getElementById('process-btn').disabled = false;
            document.getElementById('prompt-customization-section').style.display = 'block';
            document.getElementById('recording-status-text').textContent = 'Transcription complete - Ready to process';

            // Clean up
            URL.revokeObjectURL(audioUrl);

            updateWorkflowStep('process');

        } catch (error) {
            document.getElementById('transcription-spinner').classList.remove('active');
            document.getElementById('transcription-empty').style.display = 'block';
            document.getElementById('transcription-empty').innerHTML = `
                <div class="empty-state-icon">❌</div>
                <p>Transcription failed: ${error.message}</p>
                <p>Please try recording again or upload a different file.</p>
            `;
            console.error('Transcription error:', error);
        }
    }

    // =====================================================
    // UI RENDERING - PROMPT CUSTOMIZATION
    // =====================================================

    window.toggleCustomization = function() {
        const content = document.getElementById('customization-content');
        const btn = document.getElementById('toggle-customization-btn');

        if (content.style.display === 'none') {
            content.style.display = 'block';
            btn.textContent = 'Hide Customization';
        } else {
            content.style.display = 'none';
            btn.textContent = 'Show Customization';
        }
    };

    function renderPromptCustomization() {
        renderSystemPromptsSection();
        renderEditorPromptsSection();
        renderEnhancementPromptsSection();
    }

    function renderSystemPromptsSection() {
        const container = document.getElementById('system-prompts-section');
        const prompts = scribePrompts.systemPrompts;

        container.innerHTML = `
            <div class="prompt-category-header">
                <div class="prompt-category-title">
                    🔧 System Prompts
                    <span class="badge badge-default">${prompts.length} prompt${prompts.length !== 1 ? 's' : ''}</span>
                </div>
                <button class="btn btn-primary btn-sm" onclick="showAddPromptDialog('system')">
                    + Add New
                </button>
            </div>
            <div class="prompt-category-description">
                The system prompt processes raw transcripts into clean medical notes. Only one can be active at a time.
            </div>
            <div class="prompt-list">
                ${prompts.map(p => renderPromptItem('system', p)).join('')}
            </div>
        `;
    }

    function renderEditorPromptsSection() {
        const container = document.getElementById('editor-prompts-section');
        const prompts = scribePrompts.editorPrompts;

        container.innerHTML = `
            <div class="prompt-category-header">
                <div class="prompt-category-title">
                    ✏️ Editor Prompts (Optional)
                    <span class="badge badge-default">${prompts.length} prompt${prompts.length !== 1 ? 's' : ''}</span>
                </div>
                <button class="btn btn-primary btn-sm" onclick="showAddPromptDialog('editor')">
                    + Add New
                </button>
            </div>
            <div class="prompt-category-description">
                Editor prompts reformat the medical note. This step is optional. Only one can be active at a time.
            </div>
            <div class="prompt-list">
                ${prompts.map(p => renderPromptItem('editor', p)).join('')}
            </div>
        `;
    }

    function renderEnhancementPromptsSection() {
        const container = document.getElementById('enhancement-prompts-section');
        const prompts = scribePrompts.enhancementPrompts;

        container.innerHTML = `
            <div class="prompt-category-header">
                <div class="prompt-category-title">
                    ⚡ Enhancement Prompts
                    <span class="badge badge-default">${prompts.length} prompt${prompts.length !== 1 ? 's' : ''}</span>
                </div>
                <button class="btn btn-primary btn-sm" onclick="showAddPromptDialog('enhancement')">
                    + Add New
                </button>
            </div>
            <div class="prompt-category-description">
                Enhancement prompts generate additional outputs like billing summaries or patient handouts. Multiple can be active.
            </div>
            <div class="prompt-list">
                ${prompts.map(p => renderPromptItem('enhancement', p)).join('')}
            </div>
        `;
    }

    function renderPromptItem(category, prompt) {
        const enabledClass = prompt.enabled ? 'enabled' : '';
        const enabledBadge = prompt.enabled ? '<span class="badge badge-success">Active</span>' : '<span class="badge badge-secondary">Inactive</span>';
        const defaultBadge = prompt.isDefault ? '<span class="badge badge-default">Default</span>' : '';

        return `
            <div class="prompt-item ${enabledClass}" id="prompt-item-${category}-${prompt.id}">
                <div class="prompt-item-header">
                    <div class="prompt-item-title">
                        ${prompt.name}
                        ${enabledBadge}
                        ${defaultBadge}
                    </div>
                    <div class="prompt-item-actions">
                        <button class="btn btn-sm ${prompt.enabled ? 'btn-secondary' : 'btn-success'}"
                                onclick="togglePromptEnabled('${category}', '${prompt.id}'); renderPromptCustomization();">
                            ${prompt.enabled ? 'Disable' : 'Enable'}
                        </button>
                        <button class="btn btn-sm btn-primary" onclick="togglePromptExpand('${category}', '${prompt.id}')">
                            Edit
                        </button>
                        ${!prompt.isDefault ? `
                            <button class="btn btn-sm btn-danger" onclick="deletePromptConfirm('${category}', '${prompt.id}')">
                                Delete
                            </button>
                        ` : ''}
                    </div>
                </div>
                <div class="prompt-item-content" id="prompt-content-${category}-${prompt.id}">
                    <textarea id="prompt-textarea-${category}-${prompt.id}">${prompt.prompt}</textarea>
                    <div style="margin-top: 10px; display: flex; gap: 10px;">
                        <button class="btn btn-primary btn-sm" onclick="savePromptEdit('${category}', '${prompt.id}')">
                            Save Changes
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="togglePromptExpand('${category}', '${prompt.id}')">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    window.togglePromptExpand = function(category, id) {
        const content = document.getElementById(`prompt-content-${category}-${id}`);
        content.classList.toggle('expanded');
    };

    window.showAddPromptDialog = function(category) {
        const name = prompt('Enter a name for this prompt:');
        if (!name) return;

        const promptText = prompt('Enter the prompt text (you can edit this later):');
        if (!promptText) return;

        addPrompt(category, name, promptText);
        renderPromptCustomization();

        alert('✅ Prompt added successfully!');
    };

    window.savePromptEdit = function(category, id) {
        const textarea = document.getElementById(`prompt-textarea-${category}-${id}`);
        const newPrompt = textarea.value;

        updatePrompt(category, id, { prompt: newPrompt });
        togglePromptExpand(category, id);
        alert('✅ Prompt updated successfully!');
    };

    window.deletePromptConfirm = function(category, id) {
        if (!confirm('Are you sure you want to delete this prompt?')) return;

        deletePrompt(category, id);
        renderPromptCustomization();
        alert('✅ Prompt deleted successfully!');
    };

    // =====================================================
    // AI PROCESSING - MULTI-STAGE PIPELINE
    // =====================================================
    window.processWithAI = async function() {
        const transcriptionText = document.getElementById('transcription-text').value.trim();

        if (!transcriptionText) {
            alert('No transcription to process. Please record or upload audio first.');
            return;
        }

        // Clear previous results
        processingResults = { system: null, editor: null, enhancements: [] };
        currentMedicalNote = '';

        // Show processing state
        document.getElementById('output-empty').style.display = 'none';
        document.getElementById('output-spinner').classList.add('active');
        document.getElementById('output-cards-container').innerHTML = '';
        document.getElementById('process-btn').disabled = true;

        try {
            // Stage 1: System Prompt (required)
            const systemPrompt = getActiveSystemPrompt();
            if (!systemPrompt) {
                throw new Error('No system prompt is active. Please enable a system prompt in the customization section.');
            }

            currentMedicalNote = await runPromptStage('system', systemPrompt, transcriptionText);
            processingResults.system = {
                promptName: systemPrompt.name,
                promptId: systemPrompt.id,
                output: currentMedicalNote
            };

            // Stage 2: Editor Prompt (optional)
            const editorPrompt = getActiveEditorPrompt();
            if (editorPrompt) {
                const editedNote = await runPromptStage('editor', editorPrompt, currentMedicalNote);
                currentMedicalNote = editedNote; // Update the main note
                processingResults.editor = {
                    promptName: editorPrompt.name,
                    promptId: editorPrompt.id,
                    output: editedNote
                };
            }

            // Stage 3: Enhancement Prompts (optional, run in parallel)
            const enhancementPrompts = getActiveEnhancementPrompts();
            if (enhancementPrompts.length > 0) {
                const enhancementPromises = enhancementPrompts.map(prompt =>
                    runPromptStageWithErrorHandling('enhancement', prompt, currentMedicalNote)
                );

                const enhancementResults = await Promise.all(enhancementPromises);
                processingResults.enhancements = enhancementResults.filter(r => r !== null);
            }

            // Store metadata
            scribePrompts.metadata.lastSession = {
                systemPromptUsed: systemPrompt.id,
                editorPromptUsed: editorPrompt?.id || null,
                enhancementPromptsUsed: enhancementPrompts.map(p => p.id),
                timestamp: Date.now()
            };
            savePromptSystem();

            // Render output cards
            renderOutputCards();

            // Hide spinner
            document.getElementById('output-spinner').classList.remove('active');

            updateWorkflowStep('done');

        } catch (error) {
            document.getElementById('output-spinner').classList.remove('active');
            document.getElementById('output-empty').style.display = 'block';
            document.getElementById('output-empty').innerHTML = `
                <div class="empty-state-icon">❌</div>
                <p>Processing failed: ${error.message}</p>
                <p>Please check your prompts and try again.</p>
            `;
            console.error('Processing error:', error);
        }

        document.getElementById('process-btn').disabled = false;
    };

    async function runPromptStage(stageName, prompt, inputText) {
        const fullPrompt = prompt.prompt + '\n\n' + inputText;

        const response = await llmEngine.chat.completions.create({
            messages: [{ role: 'user', content: fullPrompt }],
            temperature: 0.3,
            max_tokens: 2000,
            stream: false // Non-streaming for cleaner pipeline
        });

        return response.choices[0].message.content;
    }

    async function runPromptStageWithErrorHandling(stageName, prompt, inputText) {
        try {
            const output = await runPromptStage(stageName, prompt, inputText);
            return {
                promptName: prompt.name,
                promptId: prompt.id,
                output: output,
                error: null
            };
        } catch (error) {
            console.error(`Error in ${stageName} prompt "${prompt.name}":`, error);
            return {
                promptName: prompt.name,
                promptId: prompt.id,
                output: null,
                error: error.message
            };
        }
    }

    // =====================================================
    // OUTPUT CARDS RENDERING
    // =====================================================

    function renderOutputCards() {
        const container = document.getElementById('output-cards-container');

        // Build cards array
        const cards = [];

        // System prompt output (always present if we got here)
        if (processingResults.system) {
            cards.push({
                title: 'Medical Note',
                subtitle: `Generated by: ${processingResults.system.promptName}`,
                content: processingResults.system.output,
                type: 'system',
                badge: 'Primary Output'
            });
        }

        // Editor prompt output (if used)
        if (processingResults.editor) {
            cards.push({
                title: 'Formatted Note',
                subtitle: `Formatted by: ${processingResults.editor.promptName}`,
                content: processingResults.editor.output,
                type: 'editor',
                badge: 'Formatted'
            });
        }

        // Enhancement outputs
        processingResults.enhancements.forEach(enhancement => {
            if (enhancement.error) {
                cards.push({
                    title: enhancement.promptName,
                    subtitle: 'Processing failed',
                    content: `Error: ${enhancement.error}`,
                    type: 'enhancement-error',
                    badge: 'Error',
                    isError: true
                });
            } else {
                cards.push({
                    title: enhancement.promptName,
                    subtitle: 'Enhancement output',
                    content: enhancement.output,
                    type: 'enhancement',
                    badge: 'Enhancement'
                });
            }
        });

        // Render copy all button if there are multiple outputs
        if (cards.length > 1) {
            container.innerHTML = `
                <div class="copy-all-container">
                    <button class="btn btn-primary btn-lg" onclick="copyAllOutputs()">
                        📋 Copy All Outputs
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = '';
        }

        // Render individual cards
        cards.forEach((card, index) => {
            const cardHtml = createOutputCard(card, index);
            container.innerHTML += cardHtml;
        });
    }

    function createOutputCard(card, index) {
        const errorClass = card.isError ? 'error' : '';

        return `
            <div class="output-card ${errorClass}" id="output-card-${index}">
                <div class="output-card-header">
                    <div class="output-card-title">
                        ${card.title}
                        <span class="output-card-badge">${card.badge}</span>
                    </div>
                </div>
                <div style="font-size: 0.85em; color: #666; margin-bottom: 10px;">
                    ${card.subtitle}
                </div>
                <div class="output-card-content" id="output-card-content-${index}">
${card.content}
                </div>
                ${!card.isError ? `
                    <div class="output-card-actions">
                        <button class="btn btn-success btn-sm" onclick="copyCardOutput(${index}, event)">
                            Copy
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="downloadCardOutput(${index}, '${card.title.replace(/'/g, "\\'")}')">
                            Download
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }

    window.copyCardOutput = async function(index, event) {
        const content = document.getElementById(`output-card-content-${index}`).textContent;
        try {
            await navigator.clipboard.writeText(content);
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => btn.textContent = originalText, 2000);
        } catch (error) {
            alert('Failed to copy. Please select and copy manually.');
            console.error('Copy error:', error);
        }
    };

    window.downloadCardOutput = function(index, title) {
        const content = document.getElementById(`output-card-content-${index}`).textContent;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const filename = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.copyAllOutputs = async function() {
        let allContent = '';

        // Add system/editor output (the main note)
        if (processingResults.editor) {
            allContent += `=== FORMATTED MEDICAL NOTE (${processingResults.editor.promptName}) ===\n\n`;
            allContent += processingResults.editor.output + '\n\n';
        } else if (processingResults.system) {
            allContent += `=== MEDICAL NOTE (${processingResults.system.promptName}) ===\n\n`;
            allContent += processingResults.system.output + '\n\n';
        }

        // Add enhancements
        processingResults.enhancements.forEach(enhancement => {
            if (!enhancement.error) {
                allContent += `=== ${enhancement.promptName.toUpperCase()} ===\n\n`;
                allContent += enhancement.output + '\n\n';
            }
        });

        try {
            await navigator.clipboard.writeText(allContent);
            alert('✅ All outputs copied to clipboard!');
        } catch (error) {
            alert('Failed to copy. Please copy each section individually.');
            console.error('Copy error:', error);
        }
    };

    // =====================================================
    // OUTPUT ACTIONS
    // =====================================================
    window.copyTranscription = async function(event) {
        const text = document.getElementById('transcription-text').value;
        try {
            await navigator.clipboard.writeText(text);
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => btn.textContent = originalText, 2000);
        } catch (error) {
            alert('Failed to copy. Please select and copy manually.');
        }
    };

    window.downloadTranscription = function() {
        const text = document.getElementById('transcription-text').value;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `transcription-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };


    // =====================================================
    // UTILITIES
    // =====================================================
    window.clearAll = function() {
        if (confirm('Clear all recordings, transcriptions, and outputs?')) {
            // Reset recording
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                stopRecording();
            }
            audioChunks = [];
            currentTranscription = '';
            currentMedicalNote = '';
            processingResults = { system: null, editor: null, enhancements: [] };

            // Reset UI
            document.getElementById('transcription-text').value = '';
            document.getElementById('transcription-text').style.display = 'none';
            document.getElementById('transcription-empty').style.display = 'block';
            document.getElementById('transcription-empty').innerHTML = `
                <div class="empty-state-icon">🎯</div>
                <p>Your transcription will appear here after recording</p>
            `;
            document.getElementById('transcription-actions').style.display = 'none';
            document.getElementById('output-empty').style.display = 'block';
            document.getElementById('output-cards-container').innerHTML = '';
            document.getElementById('process-btn').disabled = true;
            document.getElementById('prompt-customization-section').style.display = 'none';
            document.getElementById('duration-display').textContent = '0:00';
            document.getElementById('recording-status-text').textContent = 'Ready';
            document.getElementById('status-dot').classList.remove('recording', 'ready');

            updateWorkflowStep('record');
        }
    };

    function updateWorkflowStep(step) {
        const steps = ['record', 'transcribe', 'process', 'done'];
        const currentIndex = steps.indexOf(step);

        steps.forEach((s, index) => {
            const element = document.getElementById(`step-${s}`);
            element.classList.remove('active', 'completed');

            if (index < currentIndex) {
                element.classList.add('completed');
            } else if (index === currentIndex) {
                element.classList.add('active');
            }
        });
    }

</script>

<div class="embed-container" style="text-align: center; margin: 30px auto;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<div style="background: #e3f2fd; padding: 20px; border-left: 4px solid #2a7ae2; border-radius: 6px; margin-top: 30px;">
    <h3 style="color: #2a7ae2; font-size: 1.2em; margin-bottom: 12px; text-align: center;">💡 How It Works</h3>
    <p style="margin-bottom: 15px; text-align: center;">This tool combines OpenAI's Whisper (speech-to-text) with Phi-3.5 (clinical formatting) to create a complete AI scribe that runs entirely in your browser.</p>
    <p style="text-align: center;"><strong>Workflow:</strong> Record encounter → Whisper transcribes → Select format → AI generates note → Copy to EMR</p>
    <p style="text-align: center;"><strong>Privacy:</strong> Audio never leaves your device. All processing happens locally. HIPAA-compliant by design.</p>
    <p style="text-align: center;"><strong>Cost:</strong> $0/month forever. Compare to $300-700/month for commercial scribes like Nuance DAX or Suki.</p>
</div>
