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

    .progress-bar {
        width: 100%;
        height: 30px;
        background: #e8e8e8;
        border-radius: 15px;
        overflow: hidden;
        margin: 20px 0;
        display: none;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #2a7ae2 0%, #4a90e2 100%);
        border-radius: 15px;
        transition: width 0.3s ease;
        width: 0%;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-block;
        text-align: center;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5fb8;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(42, 122, 226, 0.3);
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #218838;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #5a6268;
    }

    .btn-danger {
        background: #dc3545;
        color: white;
    }

    .btn-danger:hover:not(:disabled) {
        background: #c82333;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
    }

    .btn-sm {
        padding: 6px 12px;
        font-size: 0.9em;
    }

    .panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .panel h2 {
        font-size: 1.5em;
        margin-bottom: 20px;
        color: #2a7ae2;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
    }

    .panel h3 {
        font-size: 1.2em;
        margin: 20px 0 15px 0;
        color: #333;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
    }

    .form-group input[type="text"],
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-size: 1em;
        transition: border-color 0.2s;
        font-family: inherit;
    }

    .form-group textarea {
        min-height: 200px;
        resize: vertical;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .recording-controls {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
    }

    .button-group {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    #transcription-text {
        min-height: 300px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.8;
    }

    #output-content {
        min-height: 300px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 6px;
        white-space: pre-wrap;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.8;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #999;
    }

    .spinner {
        display: none;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #2a7ae2;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
        margin: 40px auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Accordion Styles */
    .accordion {
        margin-top: 40px;
    }

    .accordion-item {
        background: white;
        border-radius: 8px;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        overflow: hidden;
    }

    .accordion-header {
        padding: 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-bottom: 2px solid #dee2e6;
        transition: background 0.2s;
    }

    .accordion-header:hover {
        background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
    }

    .accordion-header h3 {
        margin: 0;
        font-size: 1.3em;
        color: #2a7ae2;
    }

    .accordion-header .accordion-icon {
        font-size: 1.5em;
        color: #2a7ae2;
        transition: transform 0.3s;
    }

    .accordion-header.active .accordion-icon {
        transform: rotate(180deg);
    }

    .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .accordion-content-inner {
        padding: 25px;
    }

    .prompt-list {
        margin-bottom: 20px;
    }

    .prompt-item {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        padding: 15px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.2s;
    }

    .prompt-item:hover {
        border-color: #2a7ae2;
        background: #f0f7ff;
    }

    .prompt-item.active {
        border-color: #28a745;
        background: #d1fae5;
    }

    .prompt-item-name {
        font-weight: 500;
        color: #333;
        flex: 1;
    }

    .prompt-item-actions {
        display: flex;
        gap: 8px;
    }

    .char-counter {
        font-size: 0.9em;
        color: #999;
        text-align: right;
        margin-top: 5px;
    }

    .info-box {
        background: #e3f2fd;
        border-left: 4px solid #2a7ae2;
        padding: 15px;
        border-radius: 6px;
        margin: 20px 0;
    }

    .info-box h4 {
        color: #1565c0;
        margin-bottom: 10px;
    }

    .info-box ul {
        margin-left: 20px;
        color: #1976d2;
    }

    .info-box li {
        margin-bottom: 5px;
    }

    .output-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-bottom: 2px solid #e8e8e8;
    }

    .output-tab {
        padding: 12px 20px;
        cursor: pointer;
        border: none;
        background: none;
        font-size: 1em;
        font-weight: 500;
        color: #666;
        border-bottom: 3px solid transparent;
        transition: all 0.2s;
    }

    .output-tab:hover {
        color: #2a7ae2;
        background: #f8f9fa;
    }

    .output-tab.active {
        color: #2a7ae2;
        border-bottom-color: #2a7ae2;
    }

    .output-tab-content {
        display: none;
    }

    .output-tab-content.active {
        display: block;
    }

    @media (max-width: 768px) {
        .button-group {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }
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
    <div class="warning-box">
        <h3>BETA - Educational Demonstration Only</h3>
        <p>
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

    <!-- Initialization Panel -->
    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Initialize PPE Scribe" to download models and start</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary btn-lg" onclick="initializeModels()">
            Initialize PPE Scribe
        </button>
    </div>

    <!-- Main Interface (hidden until initialized) -->
    <div id="main-interface" style="display: none;">

        <!-- Recording & Transcription Panel -->
        <div class="panel">
            <h2>Step 1: Record & Transcribe</h2>

            <div class="recording-controls">
                <div class="button-group">
                    <button id="record-btn" class="btn btn-primary" onclick="startRecording()">
                        Start Recording
                    </button>
                    <button id="stop-btn" class="btn btn-danger" onclick="stopRecording()" disabled>
                        Stop Recording
                    </button>
                    <label class="btn btn-secondary" style="cursor: pointer;">
                        Upload Audio
                        <input type="file" id="audio-upload" accept="audio/*" onchange="handleAudioUpload(event)" style="display: none;">
                    </label>
                </div>
            </div>

            <div id="transcription-status" style="margin: 15px 0; color: #666;"></div>

            <div class="form-group">
                <label for="transcription-text">Transcription</label>
                <textarea id="transcription-text" placeholder="Transcribed text will appear here, or type/paste your clinical encounter notes..."></textarea>
                <div class="char-counter" id="transcription-counter">0 characters</div>
            </div>

            <div class="info-box">
                <h4>Tips for Best Results</h4>
                <ul>
                    <li><strong>Quiet environment:</strong> Minimize background noise</li>
                    <li><strong>Clear speech:</strong> Speak clearly, especially medical terms</li>
                    <li><strong>Brief pauses:</strong> Brief pauses between sentences improve accuracy</li>
                    <li><strong>Review transcription:</strong> Always review and edit before formatting</li>
                </ul>
            </div>
        </div>

        <!-- Clinical Note Generation Panel -->
        <div class="panel">
            <h2>Step 2: Generate Clinical Note</h2>

            <p style="color: #666; margin-bottom: 20px;">
                Current system prompt: <strong id="active-system-prompt-name">Default APSO Format</strong>
                <button class="btn btn-sm btn-secondary" onclick="scrollToPromptManagement()" style="margin-left: 10px;">
                    Customize Prompts
                </button>
            </p>

            <button id="generate-btn" class="btn btn-success btn-lg" onclick="generateNote()" style="width: 100%;">
                Generate Clinical Note
            </button>

            <div class="spinner" id="generation-spinner"></div>

            <!-- Output Tabs -->
            <div id="output-section" style="display: none; margin-top: 30px;">
                <div class="output-tabs">
                    <button class="output-tab active" data-tab="medical-note" onclick="switchOutputTab('medical-note')">
                        Medical Note
                    </button>
                </div>

                <div class="output-tab-content active" id="tab-medical-note">
                    <div id="medical-note-content"></div>
                    <div class="button-group" style="margin-top: 20px;">
                        <button class="btn btn-success" onclick="copyToClipboard('medical-note-content')">
                            Copy to Clipboard
                        </button>
                        <button class="btn btn-secondary" onclick="downloadOutput('medical-note')">
                            Download .txt
                        </button>
                    </div>

                    <h3>Apply Editor Prompts (Optional)</h3>
                    <p style="color: #666;">Select editor prompts to refine the medical note:</p>
                    <div id="editor-prompts-list"></div>

                    <h3>Generate Additional Outputs (Optional)</h3>
                    <p style="color: #666;">Select enhancement prompts to create additional documentation:</p>
                    <div id="enhancement-prompts-list"></div>
                </div>
            </div>
        </div>

        <!-- Prompt Management Section -->
        <div class="accordion" id="prompt-management">
            <h2 style="font-size: 2em; margin-bottom: 30px; color: #2a7ae2;">Prompt Management</h2>

            <p style="color: #666; margin-bottom: 30px; line-height: 1.8;">
                Customize how PPE Scribe processes your clinical encounters. The tool uses a three-stage approach:
                <strong>System Prompts</strong> convert transcripts into medical notes,
                <strong>Editor Prompts</strong> refine those notes to your specifications, and
                <strong>Enhancement Prompts</strong> generate additional outputs like billing notes or patient summaries.
            </p>

            <!-- System Prompts -->
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion('system')">
                    <h3>System Prompts</h3>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content" id="accordion-system">
                    <div class="accordion-content-inner">
                        <div class="info-box">
                            <h4>What are System Prompts?</h4>
                            <p>System prompts convert your raw transcription into a structured medical note. They filter out non-medical conversation and organize clinical information into your preferred format (APSO, SOAP, etc.). One system prompt is required and runs first.</p>
                        </div>

                        <div id="system-prompts-list" class="prompt-list"></div>

                        <div class="form-group">
                            <button class="btn btn-primary" onclick="showPromptEditor('system', 'new')">
                                Add New System Prompt
                            </button>
                            <button class="btn btn-secondary" onclick="importPrompts('system')">
                                Import Prompts
                            </button>
                            <button class="btn btn-secondary" onclick="exportPrompts('system')">
                                Export Prompts
                            </button>
                        </div>

                        <div id="system-prompt-editor" style="display: none;">
                            <h3>Edit System Prompt</h3>
                            <div class="form-group">
                                <label for="system-prompt-name">Prompt Name</label>
                                <input type="text" id="system-prompt-name" placeholder="e.g., APSO Format">
                            </div>
                            <div class="form-group">
                                <label for="system-prompt-text">Prompt Template</label>
                                <textarea id="system-prompt-text" placeholder="Enter your system prompt..."></textarea>
                                <div class="char-counter" id="system-prompt-counter">0 characters</div>
                            </div>
                            <div class="button-group">
                                <button class="btn btn-success" onclick="savePrompt('system')">
                                    Save Prompt
                                </button>
                                <button class="btn btn-secondary" onclick="cancelPromptEdit('system')">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Editor Prompts -->
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion('editor')">
                    <h3>Editor Prompts</h3>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content" id="accordion-editor">
                    <div class="accordion-content-inner">
                        <div class="info-box">
                            <h4>What are Editor Prompts?</h4>
                            <p>Editor prompts refine your medical note to match your personal style and specifications. They work on the output from the system prompt, allowing you to make it more concise, more detailed, or reformat it to your exact preferences. Editor prompts are optional.</p>
                        </div>

                        <div id="editor-prompts-list-manager" class="prompt-list"></div>

                        <div class="form-group">
                            <button class="btn btn-primary" onclick="showPromptEditor('editor', 'new')">
                                Add New Editor Prompt
                            </button>
                            <button class="btn btn-secondary" onclick="importPrompts('editor')">
                                Import Prompts
                            </button>
                            <button class="btn btn-secondary" onclick="exportPrompts('editor')">
                                Export Prompts
                            </button>
                        </div>

                        <div id="editor-prompt-editor" style="display: none;">
                            <h3>Edit Editor Prompt</h3>
                            <div class="form-group">
                                <label for="editor-prompt-name">Prompt Name</label>
                                <input type="text" id="editor-prompt-name" placeholder="e.g., Make More Concise">
                            </div>
                            <div class="form-group">
                                <label for="editor-prompt-text">Prompt Template</label>
                                <textarea id="editor-prompt-text" placeholder="Enter your editor prompt..."></textarea>
                                <div class="char-counter" id="editor-prompt-counter">0 characters</div>
                            </div>
                            <div class="button-group">
                                <button class="btn btn-success" onclick="savePrompt('editor')">
                                    Save Prompt
                                </button>
                                <button class="btn btn-secondary" onclick="cancelPromptEdit('editor')">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Enhancement Prompts -->
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion('enhancement')">
                    <h3>Enhancement Prompts</h3>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content" id="accordion-enhancement">
                    <div class="accordion-content-inner">
                        <div class="info-box">
                            <h4>What are Enhancement Prompts?</h4>
                            <p>Enhancement prompts create additional documentation from your medical note - such as billing summaries, after-visit summaries for patients, sign-out notes, or other specialized formats. They run in parallel and create separate outputs. Enhancement prompts are optional.</p>
                        </div>

                        <div id="enhancement-prompts-list-manager" class="prompt-list"></div>

                        <div class="form-group">
                            <button class="btn btn-primary" onclick="showPromptEditor('enhancement', 'new')">
                                Add New Enhancement Prompt
                            </button>
                            <button class="btn btn-secondary" onclick="importPrompts('enhancement')">
                                Import Prompts
                            </button>
                            <button class="btn btn-secondary" onclick="exportPrompts('enhancement')">
                                Export Prompts
                            </button>
                        </div>

                        <div id="enhancement-prompt-editor" style="display: none;">
                            <h3>Edit Enhancement Prompt</h3>
                            <div class="form-group">
                                <label for="enhancement-prompt-name">Prompt Name</label>
                                <input type="text" id="enhancement-prompt-name" placeholder="e.g., Billing Summary">
                            </div>
                            <div class="form-group">
                                <label for="enhancement-prompt-text">Prompt Template</label>
                                <textarea id="enhancement-prompt-text" placeholder="Enter your enhancement prompt..."></textarea>
                                <div class="char-counter" id="enhancement-prompt-counter">0 characters</div>
                            </div>
                            <div class="button-group">
                                <button class="btn btn-success" onclick="savePrompt('enhancement')">
                                    Save Prompt
                                </button>
                                <button class="btn btn-secondary" onclick="cancelPromptEdit('enhancement')">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0"></script>
<script src="https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/lib/index.min.js"></script>

<script>
// =====================================================
// GLOBAL STATE
// =====================================================
let whisperModel = null;
let llmEngine = null;
let mediaRecorder = null;
let audioChunks = [];
let currentTranscription = '';
let medicalNoteOutput = '';
let editingPromptId = null;

const WHISPER_MODEL = "Xenova/whisper-base";
const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";

// Default APSO System Prompt (paragraph-based like standalone version)
const DEFAULT_SYSTEM_PROMPT = {
    name: "Default APSO Format",
    prompt: `Convert this clinical encounter transcription into APSO format using formal medical terminology.

FORMAT:

ASSESSMENT AND PLAN:
Format each diagnosis as:

**[Diagnosis Name]**
[Paragraph with assessment and plan details from the conversation. Use formal medical terminology. Include relevant history, examination findings, and clinical reasoning. Detail the treatment plan, medications with dosing, follow-up instructions, and any patient education provided. Only include information explicitly stated in the transcript.]

Example:
**Acute Bacterial Sinusitis**
The patient presents with facial pain, purulent nasal discharge, and nasal congestion for 10 days without improvement. Physical examination reveals tenderness to palpation over the maxillary sinuses bilaterally and mucopurulent drainage visualized in the nasal passages. Given the duration and severity of symptoms, bacterial sinusitis is suspected. Will initiate treatment with amoxicillin-clavulanate 875mg-125mg orally twice daily for 10 days. Advised symptomatic management with saline nasal irrigation and decongestants as needed. Patient instructed to follow up if symptoms worsen or do not improve within 48-72 hours, or if high fever develops.

SUBJECTIVE:
[Document the patient's chief complaint, history of present illness, review of systems, and relevant past medical history as described by the patient. Use the patient's own words where appropriate but organize coherently.]

OBJECTIVE:
[Document vital signs, physical examination findings, and any test results mentioned in the encounter. Be specific and thorough.]

CRITICAL INSTRUCTIONS:
- Use ONLY information from the transcript
- Do NOT infer, hallucinate, or confabulate any clinical details
- Do NOT add examination findings not mentioned
- Do NOT add laboratory values or test results not discussed
- Use formal medical terminology throughout
- Be thorough but only include what was actually said

Transcription:`
};

// =====================================================
// LOCALSTORAGE PROMPT MANAGEMENT
// =====================================================
function getPrompts() {
    const stored = localStorage.getItem('scribePrompts');
    if (stored) {
        return JSON.parse(stored);
    }

    // Initialize with defaults
    const defaults = {
        system: [
            { id: 'default-apso', name: DEFAULT_SYSTEM_PROMPT.name, prompt: DEFAULT_SYSTEM_PROMPT.prompt, isActive: true }
        ],
        editor: [
            {
                id: 'editor-concise',
                name: 'Make More Concise',
                prompt: `Rewrite the following medical note to be more concise while preserving all essential clinical information.

Instructions:
- Remove redundant phrases and unnecessary descriptors
- Use medical abbreviations appropriately
- Combine related information into single, well-structured sentences
- Maintain formal medical terminology
- Keep all diagnoses, medications, dosages, and follow-up plans intact

Medical Note:`,
                isActive: false
            },
            {
                id: 'editor-detailed',
                name: 'Add More Detail',
                prompt: `Expand the following medical note to be more detailed and comprehensive.

Instructions:
- Elaborate on assessment and clinical reasoning
- Add standard medical context where appropriate
- Ensure thorough documentation of the clinical decision-making process
- Maintain formal medical terminology
- Do NOT add information not implied by the original note

Medical Note:`,
                isActive: false
            }
        ],
        enhancement: [
            {
                id: 'enhancement-billing',
                name: 'Billing Summary',
                prompt: `Based on the following medical note, create a billing-focused summary highlighting the complexity of medical decision-making for E&M coding.

Instructions:
- Identify number and complexity of problems addressed
- Highlight data reviewed (labs, imaging, etc.)
- Document risk level of complications or management decisions
- Note time spent if mentioned
- Suggest appropriate E&M code level if enough information present

Medical Note:`,
                isActive: false
            },
            {
                id: 'enhancement-avs',
                name: 'After-Visit Summary (Patient)',
                prompt: `Create a patient-friendly after-visit summary based on the following medical note.

Instructions:
- Use plain language, avoiding complex medical jargon
- Clearly explain the diagnosis in terms patients can understand
- List medications with simple instructions
- Explain the treatment plan and why it's important
- Include clear follow-up instructions
- Add return precautions if appropriate

Medical Note:`,
                isActive: false
            },
            {
                id: 'enhancement-signout',
                name: 'Concise Sign-Out',
                prompt: `Create a concise sign-out note for handoff based on the following medical note.

Instructions:
- Lead with one-line summary (age, gender, chief complaint)
- Key active issues with current status
- Pending items or follow-up needed
- Anticipatory guidance for covering provider
- Keep it brief but complete - focus on what the next provider needs to know

Medical Note:`,
                isActive: false
            }
        ]
    };
    savePromptsToStorage(defaults);
    return defaults;
}

function savePromptsToStorage(prompts) {
    localStorage.setItem('scribePrompts', JSON.stringify(prompts));
}

function generateId() {
    return 'prompt-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// =====================================================
// INITIALIZATION
// =====================================================
async function initializeModels() {
    const statusPanel = document.getElementById('status-panel');
    const statusMessage = document.getElementById('status-message');
    const statusDetails = document.getElementById('status-details');
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const initBtn = document.getElementById('init-btn');

    statusMessage.textContent = 'Initializing AI models...';
    progressBar.style.display = 'block';
    initBtn.disabled = true;

    try {
        // Load Whisper
        statusMessage.textContent = 'Loading Whisper (speech-to-text)...';
        statusDetails.textContent = 'Downloading ~75MB... This may take 2-5 minutes on first run.';
        progressFill.style.width = '10%';

        const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1');

        progressFill.style.width = '30%';
        whisperModel = await pipeline('automatic-speech-recognition', WHISPER_MODEL, {
            dtype: 'fp32',
            device: 'wasm'
        });

        progressFill.style.width = '50%';
        statusMessage.textContent = 'Whisper loaded! Loading Phi-3.5 (text generation)...';
        statusDetails.textContent = 'Downloading ~2GB... This may take 5-15 minutes on first run.';

        // Load WebLLM
        const webllm = await import('https://esm.run/@mlc-ai/web-llm');
        const { CreateMLCEngine } = webllm;

        llmEngine = await CreateMLCEngine(LLM_MODEL, {
            initProgressCallback: (progress) => {
                const percent = 50 + (progress.progress * 50);
                progressFill.style.width = `${percent}%`;
                statusDetails.textContent = `${progress.text} (${(progress.progress * 100).toFixed(1)}%)`;
            }
        });

        progressFill.style.width = '100%';
        statusMessage.textContent = 'All models loaded! Ready to use.';
        statusDetails.textContent = 'Models cached in browser - future loads will be instant.';

        // Show main interface after delay
        setTimeout(() => {
            statusPanel.style.display = 'none';
            document.getElementById('main-interface').style.display = 'block';
            loadAllPrompts();
        }, 1500);

    } catch (error) {
        statusMessage.textContent = 'Failed to initialize models';
        statusDetails.innerHTML = `
            <div style="color: #dc3545;">
                <strong>Error:</strong> ${error.message}<br><br>
                <strong>Troubleshooting:</strong><br>
                • Ensure Chrome/Edge 113+ with WebGPU support<br>
                • Check internet connection for first-time download<br>
                • Ensure ~3GB free disk space<br>
                • Try refreshing the page
            </div>
        `;
        console.error('Initialization error:', error);
        initBtn.disabled = false;
        initBtn.textContent = 'Retry';
    }
}

// =====================================================
// RECORDING & TRANSCRIPTION
// =====================================================
async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            await transcribeAudio(audioBlob);
        };

        mediaRecorder.start();
        document.getElementById('record-btn').disabled = true;
        document.getElementById('stop-btn').disabled = false;
        document.getElementById('transcription-status').textContent = 'Recording...';

    } catch (error) {
        alert('Failed to access microphone: ' + error.message);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        document.getElementById('record-btn').disabled = false;
        document.getElementById('stop-btn').disabled = true;
        document.getElementById('transcription-status').textContent = 'Processing audio...';
    }
}

async function handleAudioUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    document.getElementById('transcription-status').textContent = 'Transcribing uploaded audio...';
    await transcribeAudio(file);
}

async function transcribeAudio(audioBlob) {
    try {
        // Convert audio blob to array buffer
        const arrayBuffer = await audioBlob.arrayBuffer();

        // Decode audio using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)({
            sampleRate: 16000
        });
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Get audio data as Float32Array (Whisper expects mono audio at 16kHz)
        let audioData = audioBuffer.getChannelData(0);

        // If audio is not 16kHz, we need to resample
        if (audioBuffer.sampleRate !== 16000) {
            audioData = await resampleAudio(audioBuffer, 16000);
        }

        // Process with Whisper
        const result = await whisperModel(audioData);

        currentTranscription = result.text;
        document.getElementById('transcription-text').value = currentTranscription;
        updateCharCounter('transcription-text', 'transcription-counter');
        document.getElementById('transcription-status').textContent = 'Transcription complete!';

    } catch (error) {
        document.getElementById('transcription-status').textContent = 'Transcription failed: ' + error.message;
        console.error('Transcription error:', error);
    }
}

async function resampleAudio(audioBuffer, targetSampleRate) {
    // Create offline context for resampling
    const offlineContext = new OfflineAudioContext(
        1, // mono
        audioBuffer.duration * targetSampleRate,
        targetSampleRate
    );

    // Create buffer source
    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start(0);

    // Render and return resampled audio
    const resampledBuffer = await offlineContext.startRendering();
    return resampledBuffer.getChannelData(0);
}

// =====================================================
// NOTE GENERATION
// =====================================================
async function generateNote() {
    const transcription = document.getElementById('transcription-text').value.trim();
    if (!transcription) {
        alert('Please record or enter a transcription first.');
        return;
    }

    // Get active system prompt
    const prompts = getPrompts();
    const activeSystemPrompt = prompts.system.find(p => p.isActive);
    if (!activeSystemPrompt) {
        alert('Please select an active system prompt in Prompt Management.');
        return;
    }

    const generateBtn = document.getElementById('generate-btn');
    const spinner = document.getElementById('generation-spinner');
    const outputSection = document.getElementById('output-section');

    generateBtn.disabled = true;
    spinner.style.display = 'block';
    outputSection.style.display = 'none';

    try {
        const fullPrompt = activeSystemPrompt.prompt + '\n\n' + transcription;

        const response = await llmEngine.chat.completions.create({
            messages: [{ role: 'user', content: fullPrompt }],
            temperature: 0.7,
            max_tokens: 2000
        });

        medicalNoteOutput = response.choices[0].message.content;
        document.getElementById('medical-note-content').textContent = medicalNoteOutput;

        // Show output section and update lists
        outputSection.style.display = 'block';
        updateEditorPromptsList();
        updateEnhancementPromptsList();

    } catch (error) {
        alert('Failed to generate note: ' + error.message);
        console.error('Generation error:', error);
    } finally {
        generateBtn.disabled = false;
        spinner.style.display = 'none';
    }
}

async function applyEditorPrompt(promptId) {
    const prompts = getPrompts();
    const prompt = prompts.editor.find(p => p.id === promptId);
    if (!prompt || !medicalNoteOutput) return;

    const fullPrompt = prompt.prompt + '\n\n' + medicalNoteOutput;

    try {
        const response = await llmEngine.chat.completions.create({
            messages: [{ role: 'user', content: fullPrompt }],
            temperature: 0.7,
            max_tokens: 2000
        });

        medicalNoteOutput = response.choices[0].message.content;
        document.getElementById('medical-note-content').textContent = medicalNoteOutput;

    } catch (error) {
        alert('Failed to apply editor prompt: ' + error.message);
        console.error('Editor error:', error);
    }
}

async function applyEnhancementPrompt(promptId) {
    const prompts = getPrompts();
    const prompt = prompts.enhancement.find(p => p.id === promptId);
    if (!prompt || !medicalNoteOutput) return;

    const fullPrompt = prompt.prompt + '\n\n' + medicalNoteOutput;

    // Create new tab for this enhancement
    const tabId = 'tab-' + promptId;

    // Add tab button if it doesn't exist
    const tabsContainer = document.querySelector('.output-tabs');
    if (!document.querySelector(`[data-tab="${promptId}"]`)) {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'output-tab';
        tabBtn.setAttribute('data-tab', promptId);
        tabBtn.textContent = prompt.name;
        tabBtn.onclick = () => switchOutputTab(promptId);
        tabsContainer.appendChild(tabBtn);
    }

    // Add tab content if it doesn't exist
    let tabContent = document.getElementById(tabId);
    if (!tabContent) {
        tabContent = document.createElement('div');
        tabContent.id = tabId;
        tabContent.className = 'output-tab-content';
        tabContent.innerHTML = `
            <div id="${tabId}-content"></div>
            <div class="button-group" style="margin-top: 20px;">
                <button class="btn btn-success" onclick="copyToClipboard('${tabId}-content')">
                    Copy to Clipboard
                </button>
                <button class="btn btn-secondary" onclick="downloadOutput('${promptId}')">
                    Download .txt
                </button>
            </div>
        `;
        document.getElementById('tab-medical-note').parentElement.appendChild(tabContent);
    }

    // Generate enhancement
    try {
        const response = await llmEngine.chat.completions.create({
            messages: [{ role: 'user', content: fullPrompt }],
            temperature: 0.7,
            max_tokens: 2000
        });

        document.getElementById(`${tabId}-content`).textContent = response.choices[0].message.content;
        switchOutputTab(promptId);

    } catch (error) {
        alert('Failed to apply enhancement prompt: ' + error.message);
        console.error('Enhancement error:', error);
    }
}

function updateEditorPromptsList() {
    const prompts = getPrompts();
    const container = document.getElementById('editor-prompts-list');

    if (prompts.editor.length === 0) {
        container.innerHTML = '<p style="color: #999;">No editor prompts available. Create one in Prompt Management below.</p>';
        return;
    }

    container.innerHTML = prompts.editor.map(prompt => `
        <button class="btn btn-primary" onclick="applyEditorPrompt('${prompt.id}')" style="margin: 5px;">
            Apply: ${prompt.name}
        </button>
    `).join('');
}

function updateEnhancementPromptsList() {
    const prompts = getPrompts();
    const container = document.getElementById('enhancement-prompts-list');

    if (prompts.enhancement.length === 0) {
        container.innerHTML = '<p style="color: #999;">No enhancement prompts available. Create one in Prompt Management below.</p>';
        return;
    }

    container.innerHTML = prompts.enhancement.map(prompt => `
        <button class="btn btn-primary" onclick="applyEnhancementPrompt('${prompt.id}')" style="margin: 5px;">
            Generate: ${prompt.name}
        </button>
    `).join('');
}

function switchOutputTab(tabId) {
    document.querySelectorAll('.output-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.output-tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
}

// =====================================================
// PROMPT MANAGEMENT UI
// =====================================================
function loadAllPrompts() {
    loadPromptsList('system');
    loadPromptsList('editor');
    loadPromptsList('enhancement');
    updateActiveSystemPromptDisplay();
}

function loadPromptsList(category) {
    const prompts = getPrompts();
    const container = document.getElementById(`${category}-prompts-list` + (category === 'system' ? '' : '-manager'));

    if (prompts[category].length === 0) {
        container.innerHTML = '<p style="color: #999;">No prompts yet. Click "Add New" to create one.</p>';
        return;
    }

    container.innerHTML = prompts[category].map(prompt => `
        <div class="prompt-item ${prompt.isActive && category === 'system' ? 'active' : ''}">
            <div class="prompt-item-name">${prompt.name}</div>
            <div class="prompt-item-actions">
                ${category === 'system' ? `
                    <button class="btn btn-sm ${prompt.isActive ? 'btn-success' : 'btn-secondary'}"
                            onclick="setActiveSystemPrompt('${prompt.id}')">
                        ${prompt.isActive ? 'Active' : 'Set Active'}
                    </button>
                ` : ''}
                <button class="btn btn-sm btn-secondary" onclick="editPrompt('${category}', '${prompt.id}')">
                    Edit
                </button>
                <button class="btn btn-sm btn-danger" onclick="deletePrompt('${category}', '${prompt.id}')">
                    Delete
                </button>
            </div>
        </div>
    `).join('');
}

function setActiveSystemPrompt(promptId) {
    const prompts = getPrompts();
    prompts.system.forEach(p => p.isActive = (p.id === promptId));
    savePromptsToStorage(prompts);
    loadPromptsList('system');
    updateActiveSystemPromptDisplay();
}

function updateActiveSystemPromptDisplay() {
    const prompts = getPrompts();
    const active = prompts.system.find(p => p.isActive);
    const displayElem = document.getElementById('active-system-prompt-name');
    if (displayElem && active) {
        displayElem.textContent = active.name;
    }
}

function showPromptEditor(category, promptId) {
    const editor = document.getElementById(`${category}-prompt-editor`);
    const nameInput = document.getElementById(`${category}-prompt-name`);
    const textArea = document.getElementById(`${category}-prompt-text`);

    if (promptId === 'new') {
        editingPromptId = null;
        nameInput.value = '';
        textArea.value = '';
    } else {
        const prompts = getPrompts();
        const prompt = prompts[category].find(p => p.id === promptId);
        if (prompt) {
            editingPromptId = promptId;
            nameInput.value = prompt.name;
            textArea.value = prompt.prompt;
        }
    }

    updateCharCounter(`${category}-prompt-text`, `${category}-prompt-counter`);
    editor.style.display = 'block';
    textArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function editPrompt(category, promptId) {
    showPromptEditor(category, promptId);
}

function cancelPromptEdit(category) {
    document.getElementById(`${category}-prompt-editor`).style.display = 'none';
    editingPromptId = null;
}

function savePrompt(category) {
    const nameInput = document.getElementById(`${category}-prompt-name`);
    const textArea = document.getElementById(`${category}-prompt-text`);

    const name = nameInput.value.trim();
    const prompt = textArea.value.trim();

    if (!name || !prompt) {
        alert('Please provide both a name and prompt text.');
        return;
    }

    const prompts = getPrompts();

    if (editingPromptId) {
        // Edit existing
        const existing = prompts[category].find(p => p.id === editingPromptId);
        if (existing) {
            existing.name = name;
            existing.prompt = prompt;
        }
    } else {
        // Create new
        const newPrompt = {
            id: generateId(),
            name: name,
            prompt: prompt,
            isActive: category === 'system' && prompts.system.length === 0
        };
        prompts[category].push(newPrompt);
    }

    savePromptsToStorage(prompts);
    loadPromptsList(category);
    cancelPromptEdit(category);

    if (category === 'system') {
        updateActiveSystemPromptDisplay();
    }
}

function deletePrompt(category, promptId) {
    if (!confirm('Are you sure you want to delete this prompt?')) return;

    const prompts = getPrompts();
    const index = prompts[category].findIndex(p => p.id === promptId);

    if (index !== -1) {
        const wasActive = prompts[category][index].isActive;
        prompts[category].splice(index, 1);

        // If we deleted the active system prompt, make first one active
        if (category === 'system' && wasActive && prompts.system.length > 0) {
            prompts.system[0].isActive = true;
        }

        savePromptsToStorage(prompts);
        loadPromptsList(category);

        if (category === 'system') {
            updateActiveSystemPromptDisplay();
        }
    }
}

function exportPrompts(category) {
    const prompts = getPrompts();
    const dataStr = JSON.stringify(prompts[category], null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ppe-scribe-${category}-prompts.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importPrompts(category) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                if (!Array.isArray(imported)) throw new Error('Invalid format');

                const prompts = getPrompts();

                // Add imported prompts
                imported.forEach(p => {
                    if (p.name && p.prompt) {
                        prompts[category].push({
                            id: generateId(),
                            name: p.name,
                            prompt: p.prompt,
                            isActive: false
                        });
                    }
                });

                savePromptsToStorage(prompts);
                loadPromptsList(category);
                alert(`Imported ${imported.length} prompts successfully!`);

            } catch (error) {
                alert('Failed to import prompts. Please check the file format.');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// =====================================================
// ACCORDION
// =====================================================
function toggleAccordion(category) {
    const header = event.currentTarget;
    const content = document.getElementById(`accordion-${category}`);
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isOpen) {
        content.style.maxHeight = '0px';
        header.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        header.classList.add('active');
    }
}

function scrollToPromptManagement() {
    document.getElementById('prompt-management').scrollIntoView({ behavior: 'smooth' });
}

// =====================================================
// UTILITIES
// =====================================================
function updateCharCounter(textareaId, counterId) {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);
    if (textarea && counter) {
        counter.textContent = `${textarea.value.length} characters`;
    }
}

function copyToClipboard(contentId) {
    const content = document.getElementById(contentId).textContent;
    navigator.clipboard.writeText(content).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function downloadOutput(type) {
    let content, filename;

    if (type === 'medical-note') {
        content = medicalNoteOutput;
        filename = 'medical-note.txt';
    } else {
        content = document.getElementById(`tab-${type}-content`).textContent;
        const prompts = getPrompts();
        const prompt = prompts.enhancement.find(p => p.id === type);
        filename = (prompt ? prompt.name : 'output') + '.txt';
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

// Add event listeners for char counters
document.addEventListener('DOMContentLoaded', () => {
    const textareas = ['transcription-text', 'system-prompt-text', 'editor-prompt-text', 'enhancement-prompt-text'];
    textareas.forEach(id => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.addEventListener('input', () => {
                const counterId = id.replace('-text', '-counter');
                updateCharCounter(id, counterId);
            });
        }
    });
});
</script>
