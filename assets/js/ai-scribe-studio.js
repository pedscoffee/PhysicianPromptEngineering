
import * as webllm from "https://esm.run/@mlc-ai/web-llm";

// Configuration
const SAMPLE_RATE = 16000; // Whisper models trained on 16kHz

// State
let isRecording = false;
let mediaRecorder = null;
let audioChunks = [];
let audioContext = null;
let worker = null;
let llmEngine = null;
let selectedModel = 'Llama-3-8B-Instruct-q4f32_1-1k'; // Default model
let transcriptText = "";

// DOM Elements
const recordBtn = document.getElementById('record-btn');
const statusText = document.getElementById('status-text');
const transcriptArea = document.getElementById('transcript-area');
const promptSelect = document.getElementById('prompt-select');
const generateBtn = document.getElementById('generate-btn');
const outputArea = document.getElementById('output-area');
const copyBtn = document.getElementById('copy-btn');
const modelStatus = document.getElementById('model-status');

// Worker Initialization
if (window.Worker) {
    worker = new Worker('/assets/js/scribe-worker.js', { type: 'module' });

    worker.onmessage = (e) => {
        const { status, output, message } = e.data;
        console.log('Worker Message:', status, message);

        if (status === 'loading') {
            updateStatus('Loading transcription model...', 'loading');
        } else if (status === 'ready') {
            updateStatus('Ready to record', 'ready');
            recordBtn.disabled = false;
        } else if (status === 'transcribing') {
            updateStatus('Transcribing audio...', 'processing');
        } else if (status === 'complete') {
            transcriptText = output.text;
            transcriptArea.value = transcriptText;
            updateStatus('Transcription complete', 'success');
            generateBtn.disabled = false;
        } else if (status === 'error') {
            updateStatus(`Error: ${message}`, 'error');
        }
    };

    // Start loading the model immediately
    worker.postMessage({ type: 'load' });
} else {
    updateStatus('Web Workers not supported in this browser.', 'error');
}

// Audio Recording Logic
async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = processAudio;

        mediaRecorder.start();
        isRecording = true;
        recordBtn.textContent = 'Stop Recording';
        recordBtn.classList.add('recording');
        updateStatus('Recording...', 'recording');
    } catch (err) {
        console.error('Error accessing microphone:', err);
        updateStatus('Microphone access denied', 'error');
    }
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        recordBtn.textContent = 'Data Processed';
        // Logic handled in onstop
    }
}

async function processAudio() {
    updateStatus('Processing audio...', 'processing');
    const blob = new Blob(audioChunks, { type: 'audio/webm' }); // Chrome/Firefox default
    const arrayBuffer = await blob.arrayBuffer();

    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: SAMPLE_RATE });
    }

    try {
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const float32Data = audioBuffer.getChannelData(0); // Mono channel

        // Send to worker
        worker.postMessage({
            type: 'transcribe',
            audio: float32Data
        });

    } catch (err) {
        console.error('Error processing audio:', err);
        updateStatus('Error processing audio data', 'error');
    }
}

// LLM Initialization & Generation
async function initLLM() {
    if (!llmEngine) {
        updateModelStatus('Initializing WebLLM...');
        try {
            // Check WebGPU
            if (!("gpu" in navigator)) {
                updateModelStatus('WebGPU not supported. LLM features disabled.', 'error');
                return;
            }

            const initProgressCallback = (report) => {
                updateModelStatus(report.text, 'loading');
            };

            llmEngine = new webllm.MLCEngine();

            // We reload only when generation is requested to save resources initially?
            // Or preload? Preloading is better for UX.
            // But let's load on first generate click or page load if requested.
            // For now, let's just wait for user to click generate to load, to save initial bandwidth, 
            // unless we want it ready.
        } catch (err) {
            updateModelStatus(`LLM Error: ${err.message}`, 'error');
        }
    }
}

async function generateNote() {
    if (!transcriptArea.value.trim()) {
        alert('Please record or paste a transcript first.');
        return;
    }

    const selectedPromptValue = promptSelect.value;
    const customPromptInstructions = document.getElementById('custom-prompt-input')?.value || "";

    // Construct the prompt
    // We need the actual prompt content. 
    // In a real app we'd fetch this from a DB or local storage logic.
    // For now I'll hardcode a few or pull from the select value.

    let instructions = "";
    if (selectedPromptValue === 'soap') {
        instructions = "Generate a professional SOAP note based on the transcript.";
    } else if (selectedPromptValue === 'consult') {
        instructions = "Generate a Consult Note including History, Exam, Assessment, and Plan.";
    } else if (selectedPromptValue === 'custom') {
        instructions = customPromptInstructions;
    } else {
        // Fetch from stored prompts if ID provided
        const stored = getPromptById(selectedPromptValue);
        if (stored) instructions = stored.content;
        else instructions = "Summarize the medical encounter.";
    }

    const messages = [
        { role: "system", content: "You are an expert medical scribe. " + instructions },
        { role: "user", content: transcriptArea.value }
    ];

    try {
        updateStatus('Generating note...', 'processing');

        // Ensure engine loaded
        if (!llmEngine) await initLLM();

        // Load model if not loaded (reload handles internal state)
        // Note: this might take time on first run
        await llmEngine.reload(selectedModel);

        const reply = await llmEngine.chat.completions.create({
            messages,
            temperature: 0.1, // Low temp for factual notes
            max_tokens: 2048
        });

        const result = reply.choices[0].message.content;
        outputArea.value = result;
        updateStatus('Note generated successfully', 'success');

    } catch (err) {
        console.error('Generation Enrror:', err);
        updateStatus(`Generation failed: ${err.message}`, 'error');
    }
}

// Utility Functions
function updateStatus(msg, type) {
    if (statusText) {
        statusText.textContent = msg;
        statusText.className = `status-${type}`;
    }
    console.log(`[Status] ${msg}`);
}

function updateModelStatus(msg, type) {
    if (modelStatus) {
        modelStatus.textContent = msg;
        modelStatus.className = `model-status-${type}`;
    }
}

function getPromptById(id) {
    const prompts = JSON.parse(localStorage.getItem('scribe_prompts') || '[]');
    return prompts.find(p => p.id === id);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
            if (isRecording) stopRecording();
            else startRecording();
        });
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', generateNote);
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            outputArea.select();
            document.execCommand('copy');
            updateStatus('Copied to clipboard', 'success');
        });
    }

    // Initial Load of Prompts
    loadPrompts();
    setupModalLogic();
});

function loadPrompts() {
    // Populate select with Default + LocalStorage prompts
    const defaults = [
        { id: 'soap', title: 'Standard SOAP Note' },
        { id: 'consult', title: 'Consultation Note' },
        { id: 'discharge', title: 'Discharge Summary' },
        { id: 'custom', title: 'Custom Instructions' }
    ];

    const stored = JSON.parse(localStorage.getItem('scribe_prompts') || '[]');
    const all = [...defaults, ...stored];

    if (promptSelect) {
        const currentVal = promptSelect.value;
        promptSelect.innerHTML = all.map(p => `<option value="${p.id}">${p.title}</option>`).join('');

        if (all.some(p => p.id === currentVal)) {
            promptSelect.value = currentVal;
        }

        // Re-attach change listener logic if not already handled or just handle it here
        // The previous listener might be lost if we replace innerHTML? 
        // No, the listener is on the element, replacing innerHTML of options is fine.
        // But let's trigger change just in case to set custom box visibility
        promptSelect.dispatchEvent(new Event('change'));
    }
}

// Ensure change listener is persistent (moved out of loadPrompts to avoid duplicates if called multiple times)
if (promptSelect) {
    promptSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const customInputDiv = document.getElementById('custom-prompt-container');
        if (val === 'custom') {
            if (customInputDiv) customInputDiv.style.display = 'block';
        } else {
            if (customInputDiv) customInputDiv.style.display = 'none';
        }
    });
}


// Modal & Prompts Logic
function setupModalLogic() {
    const modal = document.getElementById('prompt-modal');
    const openBtn = document.getElementById('edit-prompts-btn');
    const closeBtn = document.querySelector('.close-modal');
    const saveBtn = document.getElementById('save-prompt-btn');

    if (openBtn) openBtn.onclick = () => {
        renderPromptList();
        if (modal) modal.style.display = 'block';
    };

    if (closeBtn) closeBtn.onclick = () => { if (modal) modal.style.display = 'none'; };

    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = 'none';
    };

    if (saveBtn) saveBtn.onclick = saveNewPrompt;
}

function renderPromptList() {
    const list = document.getElementById('prompt-list');
    if (!list) return;

    const stored = JSON.parse(localStorage.getItem('scribe_prompts') || '[]');

    if (stored.length === 0) {
        list.innerHTML = '<p class="text-muted">No custom prompts saved.</p>';
        return;
    }

    list.innerHTML = stored.map(p => `
        <div class="prompt-item">
            <span>${p.title}</span>
            <span class="delete-prompt-btn" onclick="window.deletePrompt('${p.id}')">Delete</span>
        </div>
    `).join('');
}

function saveNewPrompt() {
    const titleInput = document.getElementById('new-prompt-title');
    const contentInput = document.getElementById('new-prompt-content');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
        alert('Please fill in both title and content.');
        return;
    }

    const newPrompt = {
        id: 'cust_' + Date.now(),
        title: title,
        content: content,
        type: 'user'
    };

    const stored = JSON.parse(localStorage.getItem('scribe_prompts') || '[]');
    stored.push(newPrompt);
    localStorage.setItem('scribe_prompts', JSON.stringify(stored));

    // Reset Form
    titleInput.value = '';
    contentInput.value = '';

    // Refresh UI
    renderPromptList();
    loadPrompts(); // Refresh dropdown

    // Select the new prompt
    if (promptSelect) promptSelect.value = newPrompt.id;

    updateStatus('Prompt saved!', 'success');
}

// Global scope for onclick handler from HTML string
window.deletePrompt = (id) => {
    if (!confirm('Are you sure you want to delete this prompt?')) return;

    const stored = JSON.parse(localStorage.getItem('scribe_prompts') || '[]');
    const updated = stored.filter(p => p.id !== id);
    localStorage.setItem('scribe_prompts', JSON.stringify(updated));

    renderPromptList();
    loadPrompts();
};
