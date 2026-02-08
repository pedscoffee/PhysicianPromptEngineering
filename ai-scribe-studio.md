---
layout: default
title: AI Scribe Studio
permalink: /ai-scribe-studio/
manifest: /scribe-studio-manifest.json
---

<div class="scribe-container">
    <!-- Header -->
    <header class="scribe-header">
        <h1>AI Scribe Studio</h1>
        <p>Private, local, and personalized medical documentation.</p>
    </header>

    <!-- App Grid -->
    <div class="scribe-grid">
        
        <!-- Left Panel: Input -->
        <div class="scribe-panel input-panel">
            <div class="panel-header">
                <h2>1. Capture Encounter</h2>
                <div id="recording-status" class="status-indicator">Ready</div>
            </div>
            
            <div class="recording-controls">
                <button id="record-btn" class="btn btn-record">
                    <span class="icon">🎙️</span> Start Recording
                </button>
                <div class="timer" id="recording-timer">00:00</div>
            </div>

            <div class="transcript-section">
                <label for="transcript-area">Transcript (Editable)</label>
                <textarea id="transcript-area" placeholder="DeepScribe transcription will appear here..."></textarea>
            </div>
        </div>

        <!-- Right Panel: Output -->
        <div class="scribe-panel output-panel">
            <div class="panel-header">
                <h2>2. Generate Note</h2>
                <div class="model-select">
                    <select id="model-select" class="form-select">
                        <option value="Llama-3-8B-Instruct-q4f32_1-1k">Llama 3 (8B) - Balanced</option>
                        <option value="Llama-3-70B-Instruct-q4f16_1">Llama 3 (70B) - High Quality (Slow)</option>
                    </select>
                </div>
            </div>

            <div class="prompt-controls">
                <label for="prompt-select">Select Note Style</label>
                <div class="prompt-row">
                    <select id="prompt-select" class="form-select full-width">
                        <option value="soap">SOAP Note (Standard)</option>
                        <option value="consult">Consult/Admission Note</option>
                        <option value="discharge">Discharge Summary</option>
                        <option value="custom">Custom Instructions...</option>
                    </select>
                    <button id="edit-prompts-btn" class="btn btn-icon" title="Manage Prompts">⚙️</button>
                </div>
                
                <div id="custom-prompt-container" style="display:none; margin-top: 10px;">
                    <textarea id="custom-prompt-input" placeholder="Enter custom instructions for the AI..." rows="3"></textarea>
                </div>

                <button id="generate-btn" class="btn btn-primary btn-block mt-4" disabled>
                    <span class="icon">✨</span> Generate Medical Note
                </button>
            </div>

            <div class="output-section">
                <label for="output-area">Final Note</label>
                <textarea id="output-area" placeholder="Generated note will appear here..."></textarea>
                <div class="action-buttons">
                    <button id="copy-btn" class="btn btn-outline">Copy to Clipboard</button>
                    <button id="save-btn" class="btn btn-outline">Save to History</button>
                </div>
            </div>
        </div>

    </div>
    
    <!-- Status Footer -->
     <div class="app-status-bar">
        <span id="model-status">System Ready</span>
        <span id="system-info">Running specific models locally via WebGPU</span>
    </div>

    <!-- Prompt Manager Modal -->
    <div id="prompt-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Manage Prompts</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="prompt-list" id="prompt-list">
                    <!-- Prompts injected here -->
                </div>
                <div class="add-prompt-form">
                    <h3>Add New Prompt</h3>
                    <input type="text" id="new-prompt-title" placeholder="Prompt Title (e.g., Pedatric SOAP)">
                    <textarea id="new-prompt-content" placeholder="Enter system instructions..." rows="4"></textarea>
                    <button id="save-prompt-btn" class="btn btn-primary">Save Prompt</button>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Logic -->
<script type="module" src="/assets/js/ai-scribe-studio.js"></script>

<style>
/* ... (Previous Styles) ... */

/* Modal Styles */
.modal {
    display: none; 
    position: fixed; 
    z-index: 2000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0,0,0,0.5); 
    backdrop-filter: blur(4px);
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto; 
    padding: 0;
    border: 1px solid #888;
    width: 90%; 
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.modal-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-header h2 { margin: 0; font-size: 1.5rem; }

.close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}
.close-modal:hover { color: #000; }

.modal-body { padding: 1.5rem; }

.prompt-list {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 2rem;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 8px;
}

.prompt-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    align-items: center;
}
.prompt-item:last-child { border-bottom: none; }

.delete-prompt-btn {
    color: #ef4444;
    cursor: pointer;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
}
.delete-prompt-btn:hover { background: #fee2e2; border-radius: 4px; }

.add-prompt-form { display: flex; flex-direction: column; gap: 0.8rem; }
.add-prompt-form input { padding: 0.8rem; border: 1px solid #ddd; border-radius: 6px; }

</style>
/* Scoped Styles for Scribe Studio */
/* Variables */
:root {
    --scribe-bg: #f8fafc;
    --panel-bg: rgba(255, 255, 255, 0.85);
    --panel-border: 1px solid rgba(226, 232, 240, 0.8);
    --primary-color: #0ea5e9;
    --primary-hover: #0284c7;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --radius-lg: 16px;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scribe-container {
    max-width: 1400px; /* Wide layout */
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Inter', system-ui, sans-serif;
    color: var(--text-main);
}

.scribe-header {
    text-align: center;
    margin-bottom: 2rem;
}
.scribe-header h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

/* Grid Layout */
.scribe-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    height: calc(100vh - 250px); /* Fill remaining height */
    min-height: 600px;
}

@media (max-width: 900px) {
    .scribe-grid {
        grid-template-columns: 1fr;
        height: auto;
    }
}

/* Panels */
.scribe-panel {
    background: var(--panel-bg);
    border: var(--panel-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(12px);
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.panel-header h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

/* Input/Output Areas */
textarea {
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1.5;
    resize: none;
    background: #fff;
    transition: border-color 0.2s;
    font-family: monospace; 
}
textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.transcript-section, .output-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.transcript-section textarea, .output-section textarea {
    flex: 1; /* Fill remaining space */
    min-height: 200px;
}

/* Controls */
.recording-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background: #f1f5f9;
    padding: 1rem;
    border-radius: 12px;
}

.btn-record {
    background: #ef4444;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 99px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
}
.btn-record:hover { background: #dc2626; transform: scale(1.05); }
.btn-record.recording { animation: pulse 1.5s infinite; }

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}

.btn-primary {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}
.btn-primary:hover { background: var(--primary-hover); }
.btn-primary:disabled { background: #cbd5e1; cursor: not-allowed; }

.btn-outline {
    background: transparent;
    border: 1px solid #cbd5e1;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
}
.btn-outline:hover { border-color: var(--primary-color); color: var(--primary-color); }

.prompt-row { display: flex; gap: 0.5rem; }
.full-width { flex: 1; }

.action-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    justify-content: flex-end;
}

/* Status Bar */
.app-status-bar {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #fff;
    border-radius: 8px;
    font-size: 0.875rem;
    color: var(--text-muted);
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

</style>
