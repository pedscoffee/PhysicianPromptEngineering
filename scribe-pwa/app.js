// Doc Pixel's Coffee - Main Application Logic
// Complete PWA medical scribe with Whisper Large + Qwen 2.5

import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.1.2";
import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

// =====================================================
// GLOBAL STATE
// =====================================================
let whisperModel = null;
let llmEngine = null;
let mediaRecorder = null;
let audioChunks = [];
let recordingStartTime = null;
let durationInterval = null;
let currentTranscription = '';
let currentSessionData = {
    transcription: '',
    outputs: [],
    timestamp: null
};
let promptLibrary = {
    system: [],
    editor: [],
    enhancement: []
};
let selectedPrompts = {
    system: null,
    editor: null,
    enhancement: []
};
let currentEditingPrompt = null;
let newPromptCategory = null;
let deferredPrompt = null;
let abTestMode = false;

const WHISPER_MODEL = "Xenova/whisper-large-v3-turbo";
const LLM_MODEL = "Qwen2.5-3B-Instruct-q4f16_1-MLC";
const STORAGE_KEY_PROMPTS = 'coffee-prompts';

// =====================================================
// AUDIO RECORDING
// =====================================================
export async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 16000
            }
        });

        audioChunks = [];
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'audio/webm'
        });

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = handleRecordingStop;

        mediaRecorder.start();
        recordingStartTime = Date.now();

        // Update UI
        document.getElementById('start-recording-btn').disabled = true;
        document.getElementById('stop-recording-btn').disabled = false;
        document.getElementById('rec-status-dot').classList.add('online');
        document.getElementById('rec-status-text').textContent = 'Recording...';
        document.getElementById('audio-visualizer').classList.add('active');

        // Start duration timer
        durationInterval = setInterval(updateDuration, 1000);

    } catch (error) {
        console.error('[Coffee] Recording error:', error);
        alert('Microphone access denied. Please allow microphone access in your browser settings.');
    }
}

export function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());

        clearInterval(durationInterval);

        // Update UI
        document.getElementById('start-recording-btn').disabled = false;
        document.getElementById('stop-recording-btn').disabled = true;
        document.getElementById('rec-status-dot').classList.remove('online');
        document.getElementById('rec-status-text').textContent = 'Processing...';
        document.getElementById('audio-visualizer').classList.remove('active');
    }
}

function handleRecordingStop() {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
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
// TRANSCRIPTION
// =====================================================
async function transcribeAudio(audioBlob) {
    document.getElementById('transcription-loading').classList.remove('hidden');
    document.getElementById('rec-status-text').textContent = 'Transcribing...';

    try {
        const audioUrl = URL.createObjectURL(audioBlob);

        const result = await whisperModel(audioUrl, {
            chunk_length_s: 30,
            stride_length_s: 5,
            language: 'english',
            task: 'transcribe',
            return_timestamps: false
        });

        currentTranscription = result.text;
        currentSessionData.transcription = currentTranscription;
        currentSessionData.timestamp = Date.now();

        // Display
        document.getElementById('transcription-text').value = currentTranscription;
        document.getElementById('transcription-loading').classList.add('hidden');
        document.getElementById('rec-status-text').textContent = 'Transcription complete ✓';
        document.getElementById('process-btn').disabled = false;

        URL.revokeObjectURL(audioUrl);

    } catch (error) {
        console.error('[Coffee] Transcription error:', error);
        document.getElementById('transcription-loading').classList.add('hidden');
        alert(`Transcription failed: ${error.message}`);
    }
}

export function copyTranscription() {
    const text = document.getElementById('transcription-text').value;
    navigator.clipboard.writeText(text).then(() => {
        alert('✓ Transcription copied to clipboard!');
    }).catch(err => {
        console.error('[Coffee] Copy failed:', err);
    });
}

// =====================================================
// PROMPT LIBRARY MANAGEMENT
// =====================================================
function loadPromptLibrary() {
    const stored = localStorage.getItem(STORAGE_KEY_PROMPTS);
    if (stored) {
        try {
            promptLibrary = JSON.parse(stored);
        } catch (e) {
            console.error('[Coffee] Failed to load prompts:', e);
            initializeDefaultPrompts();
        }
    } else {
        initializeDefaultPrompts();
    }
}

function savePromptLibrary() {
    localStorage.setItem(STORAGE_KEY_PROMPTS, JSON.stringify(promptLibrary));
}

function initializeDefaultPrompts() {
    // Initialize with basic default prompts
    promptLibrary = {
        system: [
            {
                id: 'default-system',
                name: 'Standard Medical Note',
                specialty: 'General',
                description: 'Clean, formal medical note with standard sections',
                prompt: 'You are a medical documentation assistant. Convert this raw clinical encounter transcription into a formal, well-organized medical note.\n\nCRITICAL RULES:\n- Use ONLY information explicitly stated\n- Do NOT infer or fabricate details\n- Preserve ALL clinical information\n- Remove filler and repetition\n- Use formal medical terminology\n\nFORMAT: Create structured sections (HPI, Exam, Assessment, Plan).\n\nTRANSCRIPTION:',
                isPreset: true
            }
        ],
        editor: [],
        enhancement: []
    };
    savePromptLibrary();
}

export async function loadPresetPrompts() {
    try {
        const response = await fetch('/scribe-pwa/prompt-templates.json');
        const templates = await response.json();

        // Merge with existing
        promptLibrary.system = [...promptLibrary.system.filter(p => !p.isPreset), ...templates.templates.system.map(p => ({ ...p, isPreset: true }))];
        promptLibrary.editor = [...promptLibrary.editor.filter(p => !p.isPreset), ...templates.templates.editor.map(p => ({ ...p, isPreset: true }))];
        promptLibrary.enhancement = [...promptLibrary.enhancement.filter(p => !p.isPreset), ...templates.templates.enhancement.map(p => ({ ...p, isPreset: true }))];

        savePromptLibrary();
        renderPromptManagementLists();
        alert('✓ Preset prompts loaded successfully!');
    } catch (error) {
        console.error('[Coffee] Failed to load presets:', error);
        alert('Failed to load preset prompts. Check console for details.');
    }
}

// =====================================================
// UI - TAB SWITCHING
// =====================================================
export function switchTab(tabId) {
    // Remove active from all tabs
    document.querySelectorAll('.tabs .tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('#prompt-selection-panel .tab-content').forEach(content => content.classList.remove('active'));

    // Activate selected
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

export function switchManagementTab(tabId) {
    // Remove active from all tabs
    document.querySelectorAll('#prompt-management-panel .tabs .tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('#prompt-management-panel .tab-content').forEach(content => content.classList.remove('active'));

    // Activate selected
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// =====================================================
// PROMPT SELECTION
// =====================================================
export function showProcessingOptions() {
    document.getElementById('prompt-selection-panel').classList.remove('hidden');
    renderPromptSelectionLists();
}

function renderPromptSelectionLists() {
    renderSystemPromptsList();
    renderEditorPromptsList();
    renderEnhancementPromptsList();
}

function renderSystemPromptsList() {
    const container = document.getElementById('system-prompts-list');
    container.innerHTML = promptLibrary.system.map(p => `
        <div class="prompt-item ${selectedPrompts.system === p.id ? 'enabled' : ''}">
            <div class="prompt-item-header">
                <div class="prompt-item-title">
                    ${p.name}
                    ${p.isPreset ? '<span class="badge preset">PRESET</span>' : ''}
                </div>
                <button class="pixel-button small" onclick="selectPrompt('system', '${p.id}')">
                    ${selectedPrompts.system === p.id ? '✓ SELECTED' : 'SELECT'}
                </button>
            </div>
            <div class="prompt-item-meta">${p.specialty} - ${p.description}</div>
        </div>
    `).join('');
}

function renderEditorPromptsList() {
    const container = document.getElementById('editor-prompts-list');
    if (promptLibrary.editor.length === 0) {
        container.innerHTML = '<p class="hint">No editor prompts available. Load presets or create your own.</p>';
        return;
    }
    container.innerHTML = promptLibrary.editor.map(p => `
        <div class="prompt-item ${selectedPrompts.editor === p.id ? 'enabled' : ''}">
            <div class="prompt-item-header">
                <div class="prompt-item-title">
                    ${p.name}
                    ${p.isPreset ? '<span class="badge preset">PRESET</span>' : ''}
                </div>
                <button class="pixel-button small" onclick="selectPrompt('editor', '${p.id}')">
                    ${selectedPrompts.editor === p.id ? '✓ SELECTED' : 'SELECT'}
                </button>
            </div>
            <div class="prompt-item-meta">${p.specialty} - ${p.description}</div>
        </div>
    `).join('');
}

function renderEnhancementPromptsList() {
    const container = document.getElementById('enhancement-prompts-list');
    if (promptLibrary.enhancement.length === 0) {
        container.innerHTML = '<p class="hint">No enhancement prompts available. Load presets or create your own.</p>';
        return;
    }
    container.innerHTML = promptLibrary.enhancement.map(p => `
        <div class="prompt-item ${selectedPrompts.enhancement.includes(p.id) ? 'enabled' : ''}">
            <div class="prompt-item-header">
                <div class="prompt-item-title">
                    ${p.name}
                    ${p.isPreset ? '<span class="badge preset">PRESET</span>' : ''}
                </div>
                <button class="pixel-button small" onclick="togglePromptSelection('enhancement', '${p.id}')">
                    ${selectedPrompts.enhancement.includes(p.id) ? '✓ SELECTED' : 'SELECT'}
                </button>
            </div>
            <div class="prompt-item-meta">${p.specialty} - ${p.description}</div>
        </div>
    `).join('');
}

export function selectPrompt(category, promptId) {
    if (category === 'system' || category === 'editor') {
        selectedPrompts[category] = selectedPrompts[category] === promptId ? null : promptId;
    }
    renderPromptSelectionLists();
}

export function togglePromptSelection(category, promptId) {
    const index = selectedPrompts.enhancement.indexOf(promptId);
    if (index > -1) {
        selectedPrompts.enhancement.splice(index, 1);
    } else {
        selectedPrompts.enhancement.push(promptId);
    }
    renderPromptSelectionLists();
}

// =====================================================
// PROCESSING
// =====================================================
export async function processWithSelectedPrompts() {
    const transcription = document.getElementById('transcription-text').value.trim();

    if (!transcription) {
        alert('No transcription to process!');
        return;
    }

    if (!selectedPrompts.system) {
        alert('Please select at least one system prompt!');
        return;
    }

    // Show processing panel
    document.getElementById('processing-panel').classList.remove('hidden');
    document.getElementById('outputs-panel').classList.add('hidden');

    const stages = [];

    // Add system prompt stage
    const systemPrompt = promptLibrary.system.find(p => p.id === selectedPrompts.system);
    if (systemPrompt) stages.push({ type: 'system', prompt: systemPrompt });

    // Add editor prompt stage if selected
    if (selectedPrompts.editor) {
        const editorPrompt = promptLibrary.editor.find(p => p.id === selectedPrompts.editor);
        if (editorPrompt) stages.push({ type: 'editor', prompt: editorPrompt });
    }

    // Add enhancement prompts
    selectedPrompts.enhancement.forEach(id => {
        const enhPrompt = promptLibrary.enhancement.find(p => p.id === id);
        if (enhPrompt) stages.push({ type: 'enhancement', prompt: enhPrompt });
    });

    // Render processing stages
    renderProcessingStages(stages);

    // Process each stage
    let currentNote = transcription;
    const outputs = [];

    try {
        for (let i = 0; i < stages.length; i++) {
            const stage = stages[i];
            updateStageStatus(i, 'processing');

            const fullPrompt = stage.prompt.prompt + '\n\n' + (stage.type === 'system' ? transcription : currentNote);

            const result = await generateWithLLM(fullPrompt);

            // Update current note if system or editor
            if (stage.type === 'system' || stage.type === 'editor') {
                currentNote = result;
            }

            outputs.push({
                type: stage.type,
                promptName: stage.prompt.name,
                content: result
            });

            updateStageStatus(i, 'completed');
        }

        // Store outputs
        currentSessionData.outputs = outputs;

        // Render outputs
        renderOutputs(outputs);

        // Show outputs panel, hide processing
        setTimeout(() => {
            document.getElementById('processing-panel').classList.add('hidden');
            document.getElementById('outputs-panel').classList.remove('hidden');
        }, 1000);

    } catch (error) {
        console.error('[Coffee] Processing error:', error);
        alert(`Processing failed: ${error.message}`);
        document.getElementById('processing-panel').classList.add('hidden');
    }
}

async function generateWithLLM(prompt) {
    const response = await llmEngine.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 2000,
        stream: false
    });

    return response.choices[0].message.content;
}

function renderProcessingStages(stages) {
    const container = document.getElementById('processing-stages');
    container.innerHTML = stages.map((stage, i) => `
        <div class="output-card" id="stage-${i}">
            <div class="output-card-header">
                <div class="output-card-title">${stage.prompt.name}</div>
                <div class="output-card-badge" id="stage-${i}-status">WAITING...</div>
            </div>
        </div>
    `).join('');
}

function updateStageStatus(index, status) {
    const badge = document.getElementById(`stage-${index}-status`);
    if (status === 'processing') {
        badge.textContent = '⚡ PROCESSING...';
        badge.style.background = 'rgba(33, 150, 243, 0.2)';
        badge.style.borderColor = '#2196F3';
    } else if (status === 'completed') {
        badge.textContent = '✓ COMPLETE';
        badge.style.background = 'rgba(76, 175, 80, 0.2)';
        badge.style.borderColor = '#4CAF50';
    }
}

function renderOutputs(outputs) {
    const container = document.getElementById('outputs-container');
    container.innerHTML = outputs.map((output, i) => `
        <div class="output-card">
            <div class="output-card-header">
                <div class="output-card-title">${output.promptName}</div>
                <div class="output-card-badge">${output.type.toUpperCase()}</div>
            </div>
            <div class="output-card-content">${output.content}</div>
            <div class="output-card-actions">
                <button class="pixel-button secondary small" onclick="copyOutput(${i})">
                    📋 COPY
                </button>
            </div>
        </div>
    `).join('');
}

export function copyOutput(index) {
    const content = currentSessionData.outputs[index].content;
    navigator.clipboard.writeText(content).then(() => {
        alert('✓ Output copied to clipboard!');
    });
}

export function copyAllOutputs() {
    const allContent = currentSessionData.outputs.map(o =>
        `=== ${o.promptName.toUpperCase()} ===\n\n${o.content}\n\n`
    ).join('');

    navigator.clipboard.writeText(allContent).then(() => {
        alert('✓ All outputs copied to clipboard!');
    });
}

export function exportSession() {
    const sessionExport = {
        timestamp: new Date(currentSessionData.timestamp).toISOString(),
        transcription: currentSessionData.transcription,
        outputs: currentSessionData.outputs
    };

    const dataStr = JSON.stringify(sessionExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `coffee-session-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);

    alert('✓ Session exported!');
}

// =====================================================
// PROMPT MANAGEMENT
// =====================================================
export function showPromptManagement() {
    document.getElementById('prompt-management-panel').classList.remove('hidden');
    renderPromptManagementLists();
}

export function closePromptManagement() {
    document.getElementById('prompt-management-panel').classList.add('hidden');
}

function renderPromptManagementLists() {
    renderManageSystemList();
    renderManageEditorList();
    renderManageEnhancementList();
}

function renderManageSystemList() {
    const container = document.getElementById('manage-system-list');
    container.innerHTML = promptLibrary.system.map(p => renderManagePromptItem('system', p)).join('');
}

function renderManageEditorList() {
    const container = document.getElementById('manage-editor-list');
    container.innerHTML = promptLibrary.editor.length > 0
        ? promptLibrary.editor.map(p => renderManagePromptItem('editor', p)).join('')
        : '<p class="hint">No editor prompts yet. Create one or load presets.</p>';
}

function renderManageEnhancementList() {
    const container = document.getElementById('manage-enhancement-list');
    container.innerHTML = promptLibrary.enhancement.length > 0
        ? promptLibrary.enhancement.map(p => renderManagePromptItem('enhancement', p)).join('')
        : '<p class="hint">No enhancement prompts yet. Create one or load presets.</p>';
}

function renderManagePromptItem(category, prompt) {
    return `
        <div class="prompt-item">
            <div class="prompt-item-header">
                <div class="prompt-item-title">
                    ${prompt.name}
                    ${prompt.isPreset ? '<span class="badge preset">PRESET</span>' : ''}
                </div>
                <div class="prompt-item-actions">
                    <button class="pixel-button small" onclick="editPrompt('${category}', '${prompt.id}')">
                        ✏️ EDIT
                    </button>
                    ${!prompt.isPreset ? `
                        <button class="pixel-button danger small" onclick="deletePrompt('${category}', '${prompt.id}')">
                            🗑️ DELETE
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="prompt-item-meta">${prompt.specialty} - ${prompt.description}</div>
        </div>
    `;
}

export function createNewPrompt(category) {
    newPromptCategory = category;
    document.getElementById('new-prompt-name').value = '';
    document.getElementById('new-prompt-specialty').value = '';
    document.getElementById('new-prompt-description').value = '';
    document.getElementById('new-prompt-text').value = '';
    document.getElementById('create-prompt-modal').classList.add('active');
}

export function saveNewPrompt() {
    const name = document.getElementById('new-prompt-name').value.trim();
    const specialty = document.getElementById('new-prompt-specialty').value.trim();
    const description = document.getElementById('new-prompt-description').value.trim();
    const promptText = document.getElementById('new-prompt-text').value.trim();

    if (!name || !promptText) {
        alert('Name and prompt text are required!');
        return;
    }

    const newPrompt = {
        id: `custom-${Date.now()}`,
        name,
        specialty: specialty || 'General',
        description: description || 'Custom prompt',
        prompt: promptText,
        isPreset: false
    };

    promptLibrary[newPromptCategory].push(newPrompt);
    savePromptLibrary();
    renderPromptManagementLists();
    closeCreatePromptModal();

    alert('✓ Prompt created successfully!');
}

export function editPrompt(category, promptId) {
    const prompt = promptLibrary[category].find(p => p.id === promptId);
    if (!prompt) return;

    currentEditingPrompt = { category, id: promptId };

    document.getElementById('edit-prompt-name').value = prompt.name;
    document.getElementById('edit-prompt-specialty').value = prompt.specialty;
    document.getElementById('edit-prompt-description').value = prompt.description;
    document.getElementById('edit-prompt-text').value = prompt.prompt;
    document.getElementById('edit-prompt-modal').classList.add('active');
}

export function saveEditedPrompt() {
    if (!currentEditingPrompt) return;

    const prompt = promptLibrary[currentEditingPrompt.category].find(p => p.id === currentEditingPrompt.id);
    if (!prompt) return;

    prompt.name = document.getElementById('edit-prompt-name').value.trim();
    prompt.specialty = document.getElementById('edit-prompt-specialty').value.trim();
    prompt.description = document.getElementById('edit-prompt-description').value.trim();
    prompt.prompt = document.getElementById('edit-prompt-text').value.trim();

    savePromptLibrary();
    renderPromptManagementLists();
    closeEditPromptModal();

    alert('✓ Prompt updated successfully!');
}

export function deletePrompt(category, promptId) {
    if (!confirm('Are you sure you want to delete this prompt?')) return;

    promptLibrary[category] = promptLibrary[category].filter(p => p.id !== promptId);
    savePromptLibrary();
    renderPromptManagementLists();

    alert('✓ Prompt deleted!');
}

export function closeCreatePromptModal() {
    document.getElementById('create-prompt-modal').classList.remove('active');
}

export function closeEditPromptModal() {
    document.getElementById('edit-prompt-modal').classList.remove('active');
    currentEditingPrompt = null;
}

export function importPrompts() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                // Merge with existing
                Object.keys(imported).forEach(category => {
                    if (promptLibrary[category]) {
                        promptLibrary[category] = [...promptLibrary[category], ...imported[category]];
                    }
                });
                savePromptLibrary();
                renderPromptManagementLists();
                alert('✓ Prompts imported successfully!');
            } catch (error) {
                alert('Failed to import prompts. Invalid file format.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

export function exportPrompts() {
    const dataStr = JSON.stringify(promptLibrary, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `coffee-prompts-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);

    alert('✓ Prompts exported!');
}

// =====================================================
// A/B TESTING (Future Feature)
// =====================================================
export function enableABTesting() {
    alert('A/B Testing Mode: This feature allows you to run the same transcription through multiple system prompts simultaneously and compare outputs side-by-side. Coming soon!');
}

// =====================================================
// SESSION MANAGEMENT
// =====================================================
export function clearSession() {
    if (!confirm('This will delete all data from this session (transcription + outputs). Continue?')) return;

    // Clear all session data
    currentTranscription = '';
    currentSessionData = {
        transcription: '',
        outputs: [],
        timestamp: null
    };
    audioChunks = [];
    document.getElementById('transcription-text').value = '';
    document.getElementById('duration-display').textContent = '0:00';
    document.getElementById('process-btn').disabled = true;
    document.getElementById('outputs-container').innerHTML = '';
    document.getElementById('rec-status-text').textContent = 'Ready to Record';

    // Hide panels
    document.getElementById('prompt-selection-panel').classList.add('hidden');
    document.getElementById('processing-panel').classList.add('hidden');
    document.getElementById('outputs-panel').classList.add('hidden');

    alert('✓ Session cleared! All data deleted for privacy.');
}

// =====================================================
// INITIALIZATION & PWA SETUP
// =====================================================
export async function initializeApp() {
    const initBtn = document.getElementById('init-button');
    const initProgress = document.getElementById('init-progress');
    const initStatus = document.getElementById('init-status');
    const initDetails = document.getElementById('init-details');
    const initFill = document.getElementById('init-progress-fill');

    initBtn.disabled = true;
    initProgress.classList.remove('hidden');

    try {
        // Step 1: Load Whisper
        initStatus.textContent = 'Loading Whisper Large v3 Turbo...';
        initDetails.textContent = 'Downloading ~1.5GB speech recognition model (one-time download)';
        initFill.style.width = '10%';
        initFill.classList.add('loading');

        whisperModel = await pipeline(
            'automatic-speech-recognition',
            WHISPER_MODEL,
            {
                dtype: 'q8',
                device: 'webgpu',
                progress_callback: (progress) => {
                    const percent = 10 + (progress.progress * 40);
                    initFill.style.width = `${percent}%`;
                    if (progress.status === 'downloading') {
                        const loaded = (progress.loaded / 1024 / 1024).toFixed(0);
                        const total = (progress.total / 1024 / 1024).toFixed(0);
                        initDetails.textContent = `Downloading: ${loaded}MB / ${total}MB`;
                    }
                }
            }
        );

        initFill.style.width = '50%';
        initStatus.textContent = 'Whisper loaded successfully! ✓';

        // Step 2: Load Qwen
        initStatus.textContent = 'Loading Qwen 2.5-3B for clinical notes...';
        initDetails.textContent = 'Downloading ~2GB language model (one-time download)';

        llmEngine = await CreateMLCEngine(
            LLM_MODEL,
            {
                initProgressCallback: (progress) => {
                    const percent = 50 + (progress.progress * 50);
                    initFill.style.width = `${percent}%`;
                    initDetails.textContent = `${progress.text} (${(progress.progress * 100).toFixed(1)}%)`;
                }
            }
        );

        initFill.style.width = '100%';
        initFill.classList.remove('loading');
        initStatus.textContent = '✓ All models loaded! Coffee is ready to brew! ☕';
        initDetails.textContent = 'Models are cached - future visits will load instantly and work offline!';

        document.getElementById('models-status').textContent = 'Models: Ready ✓';

        // Show main app
        setTimeout(() => {
            document.getElementById('init-panel').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
        }, 2000);

    } catch (error) {
        console.error('[Coffee] Initialization failed:', error);
        initStatus.textContent = '✗ Initialization failed';
        initDetails.textContent = `Error: ${error.message}. Please refresh and try again.`;
        initFill.classList.remove('loading');
        initBtn.disabled = false;
        initBtn.textContent = 'RETRY';
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/scribe-pwa/service-worker.js');
            console.log('[Coffee] Service Worker registered:', registration);

            setInterval(() => registration.update(), 60 * 60 * 1000);

            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        if (confirm('New version available! Reload to update?')) {
                            window.location.reload();
                        }
                    }
                });
            });
        } catch (error) {
            console.error('[Coffee] Service Worker registration failed:', error);
        }
    });
}

// PWA Installation
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-prompt').classList.remove('hidden');
});

export async function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[Coffee] Install outcome:', outcome);
    deferredPrompt = null;
    document.getElementById('install-prompt').classList.add('hidden');
}

export function dismissInstallPrompt() {
    document.getElementById('install-prompt').classList.add('hidden');
}

// Connection Status
window.addEventListener('load', () => {
    updateConnectionStatus();
    loadPromptLibrary();
    updateCacheSize();

    setTimeout(() => {
        if (deferredPrompt && document.getElementById('install-prompt').classList.contains('hidden')) {
            document.getElementById('install-prompt').classList.remove('hidden');
        }
    }, 30000);
});

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

function updateConnectionStatus() {
    const dot = document.getElementById('connection-status');
    const text = document.getElementById('connection-text');

    if (navigator.onLine) {
        dot.classList.add('online');
        dot.classList.remove('offline');
        text.textContent = 'Online';
    } else {
        dot.classList.remove('online');
        dot.classList.add('offline');
        text.textContent = 'Offline (Fully Functional)';
    }
}

async function updateCacheSize() {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        try {
            const estimate = await navigator.storage.estimate();
            const usageGB = (estimate.usage / 1024 / 1024 / 1024).toFixed(2);
            const quotaGB = (estimate.quota / 1024 / 1024 / 1024).toFixed(2);
            document.getElementById('cache-size').textContent = `Storage: ${usageGB}GB / ${quotaGB}GB`;
        } catch (error) {
            console.error('[Coffee] Failed to get storage estimate:', error);
        }
    }
}

// Auto-clear on page unload for privacy
window.addEventListener('beforeunload', () => {
    // Session data is automatically cleared when page closes
    // No persistence = maximum privacy
});
