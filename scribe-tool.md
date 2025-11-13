---
layout: page
title: AI Medical Scribe
description: Privacy-first AI medical scribe running entirely in your browser. Record patient encounters, transcribe with Whisper, and format with AI—all offline. No cloud, no costs.
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
</style>

<div class="container">
    <div class="header">
        <h1>🎤 AI Medical Scribe</h1>
        <p>Record patient encounters and generate clinical documentation with AI—entirely in your browser. Whisper-powered transcription plus LLM formatting means <strong>zero-cost, 100% private</strong> medical scribing.</p>
        <div class="privacy-highlight">
            🔒 Complete Privacy: Audio recording, transcription, and AI processing all happen locally on your device. Nothing is uploaded to any server.
        </div>
    </div>

    <div class="warning-box" id="browser-warning">
        <h3>⚠️ System Requirements</h3>
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
            🚀 Initialize AI Scribe
        </button>
    </div>

    <div class="workflow-indicator" id="workflow-indicator" style="display: none;">
        <div class="workflow-step" id="step-record">
            <div class="workflow-step-icon">🎤</div>
            <div class="workflow-step-label">Record</div>
        </div>
        <div class="workflow-step" id="step-transcribe">
            <div class="workflow-step-icon">📝</div>
            <div class="workflow-step-label">Transcribe</div>
        </div>
        <div class="workflow-step" id="step-process">
            <div class="workflow-step-icon">✨</div>
            <div class="workflow-step-label">Format</div>
        </div>
        <div class="workflow-step" id="step-done">
            <div class="workflow-step-icon">✅</div>
            <div class="workflow-step-label">Done</div>
        </div>
    </div>

    <div class="main-layout" id="main-interface" style="display: none;">
        <div class="panel">
            <h2>📹 Recording & Transcription</h2>

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
                        🔴 Start Recording
                    </button>
                    <button id="stop-btn" class="btn btn-secondary" onclick="stopRecording()" disabled>
                        ⏹️ Stop & Transcribe
                    </button>
                    <button id="clear-btn" class="btn btn-secondary" onclick="clearAll()">
                        🗑️ Clear All
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
                <h4>📁 Or Upload Audio File</h4>
                <p>Already have a recording? Upload it here (.wav, .mp3, .m4a, .webm)</p>
                <div class="file-input-wrapper">
                    <label for="audio-file" class="btn btn-primary">
                        📤 Choose Audio File
                    </label>
                    <input type="file" id="audio-file" accept="audio/*" onchange="handleFileUpload(event)">
                </div>
            </div>

            <h3 style="margin-top: 30px;">📄 Transcription</h3>
            <div class="spinner" id="transcription-spinner"></div>
            <div class="transcription-box" id="transcription-box">
                <div class="empty-state" id="transcription-empty">
                    <div class="empty-state-icon">🎯</div>
                    <p>Your transcription will appear here after recording</p>
                </div>
                <textarea id="transcription-text" style="display: none;" placeholder="Transcription will appear here. You can edit it before processing..."></textarea>
            </div>

            <div class="transcription-actions" id="transcription-actions" style="display: none;">
                <button class="btn btn-success" onclick="copyTranscription(event)">
                    📋 Copy Transcription
                </button>
                <button class="btn btn-secondary" onclick="downloadTranscription()">
                    ⬇️ Download .txt
                </button>
            </div>

            <div class="info-box">
                <h4>💡 Tips for Best Results</h4>
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
            <h2>✨ Clinical Note</h2>

            <button id="process-btn" class="btn btn-success btn-lg" onclick="processWithAI()" disabled style="display: none; width: 100%; margin-bottom: 20px;">
                ✨ Generate Clinical Note
            </button>

            <div class="empty-state" id="output-empty">
                <div class="empty-state-icon">📋</div>
                <p>Your formatted clinical note will appear here</p>
            </div>

            <div class="spinner" id="output-spinner"></div>

            <div id="output-content"></div>

            <div class="char-counter" id="output-char-counter" style="display: none;"></div>

            <div class="output-actions" id="output-actions" style="display: none;">
                <button class="btn btn-success" onclick="copyOutput(event)">
                    📋 Copy to EMR
                </button>
                <button class="btn btn-primary" onclick="saveNoteToSnippetManager()">
                    💾 Save Note
                </button>
                <button class="btn btn-secondary" onclick="downloadOutput()">
                    ⬇️ Download .txt
                </button>
            </div>

            <h3 style="margin-top: 30px; display: none;" id="prompt-section-header">🔧 Customize Prompt</h3>

            <div class="form-group" id="prompt-selection" style="display: none;">
                <label for="clinical-prompt">
                    Select Prompt Template
                </label>
                <select id="clinical-prompt" onchange="loadPromptTemplate()">
                    <option value="">-- Choose a prompt template --</option>
                    <optgroup label="Default Templates" id="default-prompts">
                        <option value="ap-pithy">A/P Formatting (Pithy)</option>
                        <option value="ap-formal">A/P Formatting (Formal)</option>
                        <option value="billing">Billing & Medical Decision Making</option>
                        <option value="avs">After-Visit Summary (Patient-Friendly)</option>
                        <option value="signout">Concise Sign-Out</option>
                        <option value="soap">SOAP Note</option>
                        <option value="custom">Custom Processing (Basic Format)</option>
                    </optgroup>
                    <optgroup label="Your Saved Prompts" id="saved-prompts">
                    </optgroup>
                </select>
            </div>

            <div class="form-group" id="prompt-editor" style="display: none;">
                <label for="prompt-text">
                    Prompt (Editable)
                    <span style="color: #999; font-size: 0.9em;">Modify the prompt below to customize AI behavior</span>
                </label>
                <textarea
                    id="prompt-text"
                    style="font-family: 'Monaco', 'Courier New', monospace; min-height: 300px; resize: vertical;"
                    placeholder="Select a prompt template above to begin editing, or write your own custom prompt..."></textarea>
                <div class="char-counter" id="prompt-char-counter" style="display: block; margin-top: 10px;">0 characters</div>
            </div>

            <div class="button-group" id="prompt-actions" style="display: none; margin-top: 15px;">
                <button class="btn btn-primary" onclick="savePromptToSnippetManager()">
                    💾 Save This Prompt
                </button>
                <button class="btn btn-secondary" onclick="resetToDefaultPrompt()">
                    🔄 Reset to Default
                </button>
            </div>

            <div class="info-box" style="margin-top: 20px;">
                <h4>📚 Next Steps</h4>
                <ul>
                    <li><strong>Review:</strong> Always review AI-generated notes for accuracy</li>
                    <li><strong>Edit:</strong> Make any necessary corrections</li>
                    <li><strong>Copy:</strong> Paste into your EMR</li>
                    <li><strong>Save:</strong> Store successful prompts in Snippet Manager</li>
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
    let currentOutput = '';
    let currentDefaultPromptId = ''; // Track which default template is selected
    let savedPrompts = []; // Cache of saved prompts from snippet manager

    const WHISPER_MODEL = "Xenova/whisper-base";
    const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";

    // Clinical prompt templates
    const CLINICAL_PROMPTS = {
        'ap-pithy': `You are a medical documentation assistant. Convert the following clinical encounter transcription into a concise, scannable Assessment & Plan format.

Rules:
- Each problem as a BOLD header
- Plan items as bullet points (use "-")
- Be pithy and scannable
- Use standard medical abbreviations
- Remove conversational filler
- Include only clinically relevant information

Format each problem like this:
**[Problem Name]**
- [Plan item 1]
- [Plan item 2]

Transcription:`,

        'ap-formal': `You are a medical documentation assistant. Convert the following clinical encounter transcription into a formal, detailed Assessment & Plan format.

Rules:
- Each problem as a BOLD header
- Full sentences for assessment
- Detailed plan with bullet points
- Professional medical language
- Include medical decision-making rationale
- Use standard medical abbreviations appropriately

Format each problem like this:
**[Problem Name]**
Assessment: [Brief clinical assessment]
Plan:
- [Detailed plan item 1]
- [Detailed plan item 2]

Transcription:`,

        'billing': `You are a medical billing documentation assistant. Analyze the following clinical encounter and generate Medical Decision Making (MDM) documentation for billing purposes.

Include:
1. Complexity level (straightforward/low/moderate/high)
2. Number and complexity of problems addressed
3. Amount/complexity of data reviewed
4. Risk of complications/morbidity/mortality
5. Time spent (if mentioned)

Be specific and support the billing level with clinical details.

Transcription:`,

        'avs': `You are a patient education assistant. Convert the following clinical encounter into a patient-friendly After-Visit Summary.

Requirements:
- 6th-8th grade reading level
- Explain diagnoses in plain language
- Clear medication instructions
- Specific follow-up plan
- When to seek urgent care (return precautions)

Format:
**What We Found:**
[Plain language diagnosis]

**Your Medications:**
[Simple medication instructions]

**What You Should Do:**
[Clear action items]

**When to Call or Come Back:**
[Return precautions]

Transcription:`,

        'signout': `You are a medical handoff assistant. Create a concise patient sign-out from this clinical encounter.

Format:
- One-liner patient summary
- Key overnight tasks
- If/then contingency plans
- Critical values to monitor
- Code status (if mentioned)

Be extremely concise. Each patient should be 2-4 lines maximum.

Transcription:`,

        'soap': `You are a medical documentation assistant. Convert the following clinical encounter into a structured SOAP note.

Format:
**Subjective:**
[Patient's chief complaint and history]

**Objective:**
[Physical exam findings, vital signs, test results]

**Assessment:**
[Clinical impression/diagnosis]

**Plan:**
[Treatment plan and follow-up]

Transcription:`,

        'custom': `You are a medical documentation assistant. Format the following clinical transcription into a clear, organized clinical note. Use appropriate medical terminology, organize by problem when applicable, and present information in a scannable format.

Transcription:`
    };

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
        statusMessage.textContent = '⏳ Initializing AI models...';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            // Step 1: Load Whisper
            statusMessage.textContent = '⏳ Loading Whisper (speech-to-text model)...';
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
            statusMessage.textContent = '✅ Whisper loaded!';

            // Step 2: Load LLM
            statusMessage.textContent = '⏳ Loading Phi-3.5 (clinical formatting model)...';
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
            statusMessage.textContent = '✅ AI Scribe Ready!';
            statusDetails.textContent = 'All models loaded. You can now record or upload audio. This setup was one-time—next visit will load in seconds.';

            // Hide init panel, show main interface
            setTimeout(() => {
                document.getElementById('status-panel').style.display = 'none';
                document.getElementById('workflow-indicator').style.display = 'flex';
                document.getElementById('main-interface').style.display = 'grid';
                updateWorkflowStep('record');
            }, 2000);

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = '❌ Failed to initialize models';
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
            initBtn.textContent = '🔄 Retry';
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

            // Show prompt customization section
            document.getElementById('prompt-section-header').style.display = 'block';
            document.getElementById('prompt-selection').style.display = 'block';
            document.getElementById('process-btn').style.display = 'block';
            document.getElementById('process-btn').disabled = true; // Disabled until prompt is selected
            document.getElementById('recording-status-text').textContent = 'Transcription complete';

            // Load saved prompts into dropdown
            loadSavedPrompts();

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
    // PROMPT MANAGEMENT
    // =====================================================
    function loadSavedPrompts() {
        try {
            const snippets = JSON.parse(localStorage.getItem('promptSnippets') || '[]');
            // Filter for prompts tagged as clinical prompts (or all prompts)
            savedPrompts = snippets.filter(s =>
                s.tags && (s.tags.includes('clinical-prompt') || s.tags.includes('scribe-prompt'))
            );

            // Populate dropdown with saved prompts
            const savedPromptsGroup = document.getElementById('saved-prompts');
            savedPromptsGroup.innerHTML = '';

            savedPrompts.forEach(snippet => {
                const option = document.createElement('option');
                option.value = `saved-${snippet.id}`;
                option.textContent = snippet.title;
                savedPromptsGroup.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading saved prompts:', error);
        }
    }

    window.loadPromptTemplate = function() {
        const selectedValue = document.getElementById('clinical-prompt').value;
        const promptTextarea = document.getElementById('prompt-text');

        if (!selectedValue) {
            promptTextarea.value = '';
            document.getElementById('prompt-editor').style.display = 'none';
            document.getElementById('prompt-actions').style.display = 'none';
            document.getElementById('process-btn').disabled = true;
            return;
        }

        // Check if it's a default prompt or saved prompt
        if (selectedValue.startsWith('saved-')) {
            const snippetId = parseInt(selectedValue.replace('saved-', ''));
            const snippet = savedPrompts.find(s => s.id === snippetId);
            if (snippet) {
                promptTextarea.value = snippet.prompt;
                currentDefaultPromptId = ''; // Not a default template
            }
        } else {
            // Load from default templates
            const promptTemplate = CLINICAL_PROMPTS[selectedValue];
            if (promptTemplate) {
                promptTextarea.value = promptTemplate;
                currentDefaultPromptId = selectedValue;
            }
        }

        // Show editor and actions
        document.getElementById('prompt-editor').style.display = 'block';
        document.getElementById('prompt-actions').style.display = 'flex';
        document.getElementById('process-btn').disabled = false;
        updatePromptCharCount();
    };

    window.resetToDefaultPrompt = function() {
        if (!currentDefaultPromptId) {
            alert('No default template selected. Please select a default template from the dropdown first.');
            return;
        }

        const promptTemplate = CLINICAL_PROMPTS[currentDefaultPromptId];
        if (promptTemplate) {
            document.getElementById('prompt-text').value = promptTemplate;
            updatePromptCharCount();
        }
    };

    window.savePromptToSnippetManager = function() {
        const promptText = document.getElementById('prompt-text').value.trim();

        if (!promptText) {
            alert('No prompt to save. Please enter a prompt first.');
            return;
        }

        try {
            const snippets = JSON.parse(localStorage.getItem('promptSnippets') || '[]');
            const title = prompt('Enter a title for this prompt:', 'Custom Clinical Prompt');
            if (!title) return;

            snippets.push({
                id: Date.now(),
                title: title,
                version: '1.0',
                tags: ['clinical-prompt', 'scribe-prompt'],
                prompt: promptText
            });

            localStorage.setItem('promptSnippets', JSON.stringify(snippets));

            alert('✅ Prompt saved successfully!');

            // Reload saved prompts in dropdown
            loadSavedPrompts();

        } catch (error) {
            alert('Failed to save prompt. Storage might be full.');
            console.error('Save error:', error);
        }
    };

    function updatePromptCharCount() {
        const promptText = document.getElementById('prompt-text').value;
        const count = promptText.length;
        const counter = document.getElementById('prompt-char-counter');

        let className = 'char-counter';
        let message = `${count.toLocaleString()} characters`;

        if (count > 5000) {
            className += ' error';
            message += ' ⚠️ Very long prompt';
        } else if (count > 3000) {
            className += ' warning';
            message += ' ⚠️ Long prompt';
        }

        counter.className = className;
        counter.textContent = message;
    }

    // Add input listener for prompt textarea
    document.addEventListener('DOMContentLoaded', () => {
        const promptTextarea = document.getElementById('prompt-text');
        if (promptTextarea) {
            promptTextarea.addEventListener('input', updatePromptCharCount);
        }
    });

    // =====================================================
    // AI PROCESSING
    // =====================================================
    window.processWithAI = async function() {
        const transcriptionText = document.getElementById('transcription-text').value.trim();
        const promptText = document.getElementById('prompt-text').value.trim();

        if (!transcriptionText) {
            alert('No transcription to process. Please record or upload audio first.');
            return;
        }

        if (!promptText) {
            alert('Please select a prompt template or enter a custom prompt.');
            return;
        }

        // Show processing state
        document.getElementById('output-empty').style.display = 'none';
        document.getElementById('output-spinner').classList.add('active');
        document.getElementById('output-content').classList.remove('active');
        document.getElementById('output-actions').style.display = 'none';
        document.getElementById('process-btn').disabled = true;

        try {
            const fullPrompt = promptText + '\n\n' + transcriptionText;

            // Generate with LLM
            const response = await llmEngine.chat.completions.create({
                messages: [
                    { role: 'user', content: fullPrompt }
                ],
                temperature: 0.3, // Lower temperature for more consistent medical documentation
                max_tokens: 2000,
                stream: true
            });

            currentOutput = '';
            const outputDiv = document.getElementById('output-content');
            outputDiv.textContent = '';
            outputDiv.classList.add('active');
            document.getElementById('output-spinner').classList.remove('active');

            // Stream response
            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                currentOutput += delta;
                outputDiv.textContent = currentOutput;
                updateOutputCharCount(currentOutput.length);
            }

            // Show actions
            document.getElementById('output-actions').style.display = 'flex';
            document.getElementById('output-char-counter').style.display = 'block';
            updateWorkflowStep('done');

        } catch (error) {
            document.getElementById('output-content').textContent = `Error processing: ${error.message}\n\nPlease try again.`;
            document.getElementById('output-content').classList.add('active');
            document.getElementById('output-spinner').classList.remove('active');
            console.error('Processing error:', error);
        }

        document.getElementById('process-btn').disabled = false;
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

    window.copyOutput = async function(event) {
        try {
            await navigator.clipboard.writeText(currentOutput);
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => btn.textContent = originalText, 2000);
        } catch (error) {
            alert('Failed to copy. Please select and copy manually.');
            console.error('Copy error:', error);
        }
    };

    window.downloadOutput = function() {
        const blob = new Blob([currentOutput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `clinical-note-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.saveNoteToSnippetManager = function() {
        try {
            const snippets = JSON.parse(localStorage.getItem('promptSnippets') || '[]');
            const title = prompt('Enter a title for this clinical note:', 'AI Scribe Note');
            if (!title) return;

            snippets.push({
                id: Date.now(),
                title: title,
                version: '1.0',
                tags: ['ai-scribe', 'clinical-note'],
                prompt: currentOutput
            });

            localStorage.setItem('promptSnippets', JSON.stringify(snippets));

            if (confirm('✅ Saved to Snippet Manager!\n\nOpen Snippet Manager now?')) {
                window.location.href = '/snippet-manager';
            }
        } catch (error) {
            alert('Failed to save. Storage might be full.');
            console.error('Save error:', error);
        }
    };

    // =====================================================
    // UTILITIES
    // =====================================================
    window.clearAll = function() {
        if (confirm('Clear all recordings and transcriptions?')) {
            // Reset recording
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                stopRecording();
            }
            audioChunks = [];
            currentTranscription = '';
            currentOutput = '';
            currentDefaultPromptId = '';

            // Reset UI
            document.getElementById('transcription-text').value = '';
            document.getElementById('transcription-text').style.display = 'none';
            document.getElementById('transcription-empty').style.display = 'block';
            document.getElementById('transcription-empty').innerHTML = `
                <div class="empty-state-icon">🎯</div>
                <p>Your transcription will appear here after recording</p>
            `;
            document.getElementById('transcription-actions').style.display = 'none';
            document.getElementById('output-content').classList.remove('active');
            document.getElementById('output-empty').style.display = 'block';
            document.getElementById('output-actions').style.display = 'none';
            document.getElementById('prompt-selection').style.display = 'none';
            document.getElementById('prompt-section-header').style.display = 'none';
            document.getElementById('prompt-editor').style.display = 'none';
            document.getElementById('prompt-actions').style.display = 'none';
            document.getElementById('process-btn').style.display = 'none';
            document.getElementById('clinical-prompt').value = '';
            document.getElementById('prompt-text').value = '';
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

    function updateOutputCharCount(count) {
        const counter = document.getElementById('output-char-counter');
        let className = 'char-counter';
        let message = `${count.toLocaleString()} characters`;

        if (count > 5000) {
            className += ' error';
            message += ' ⚠️ Very long note';
        } else if (count > 3000) {
            className += ' warning';
            message += ' ⚠️ Long note';
        } else {
            message += ' ✅';
        }

        counter.className = className;
        counter.textContent = message;
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
