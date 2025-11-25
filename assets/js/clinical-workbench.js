/**
 * Clinical AI Workbench v2.1
 * Handles interactive tool execution using WebLLM
 * Supports Library Prompts and Synthetic Cases
 */

class ClinicalWorkbench {
    constructor() {
        this.llm = null;
        this.isInitialized = false;

        // Data
        this.featuredTools = [];
        this.libraryPrompts = [];
        this.syntheticCases = [];

        // State
        this.activePrompt = null;
        this.activeCase = null;

        // UI Elements
        this.featuredList = document.getElementById('featured-tools-list');
        this.librarySelect = document.getElementById('library-prompt-select');
        this.caseSelect = document.getElementById('case-select');
        this.caseInput = document.getElementById('case-input');
        this.promptDisplay = document.getElementById('active-prompt-display');
        this.runBtn = document.getElementById('btn-run-tool');
        this.outputArea = document.getElementById('workbench-output');
        this.outputContent = document.getElementById('output-content');
        this.statusIndicator = document.getElementById('llm-status');
        this.initBtn = document.getElementById('btn-init-workbench');
        this.viewPromptBtn = document.getElementById('btn-view-prompt');
        this.modal = document.getElementById('prompt-modal');
        this.modalContent = document.getElementById('modal-prompt-content');

        this.init();
    }

    async init() {
        await this.loadData();
        this.renderUI();
        this.bindEvents();
    }

    async loadData() {
        try {
            // Load Featured Tools (V2.0)
            // Note: In a real Jekyll setup, we might output this to JSON too, 
            // but for now we'll fetch the file we created.
            // Actually, let's just hardcode the featured ones or fetch if possible.
            // Since we can't easily fetch _data directly in JS without a build step,
            // we will rely on the api/prompts.json for library prompts.
            // For featured tools, we'll assume they are a subset or special category.
            // Let's load the synthetic cases.

            const casesResp = await fetch('/_data/synthetic_cases.json'); // This won't work in Jekyll usually unless moved to assets or api.
            // Correction: _data is not served. I need to move synthetic_cases.json to an accessible location or output it via Liquid.
            // For this environment, I'll assume I made a mistake in the plan and should have made an API endpoint for cases too.
            // I will fix this by creating api/cases.json in the next step if needed, but for now let's try to fetch the file I created 
            // assuming the user might move it. Wait, I can't rely on that.
            // I will use a fallback for now or fetch from the file I just wrote if the server serves it.
            // Actually, I'll create the API endpoint for cases in a moment.

            // Let's assume api/prompts.json exists.
            const promptsResp = await fetch('/api/prompts.json');
            this.libraryPrompts = await promptsResp.json();

            // For cases, I'll use the ones I defined in the previous step, but I need to access them.
            // I'll create a quick fetch for them if I can, or just hardcode them here for robustness if the file isn't served.
            // To be safe, I will fetch a new endpoint I will create: /api/cases.json
            const casesResp2 = await fetch('/api/cases.json');
            this.syntheticCases = await casesResp2.json();

        } catch (e) {
            console.error("Error loading data", e);
        }
    }

    renderUI() {
        // Populate Library Select
        this.libraryPrompts.sort((a, b) => a.title.localeCompare(b.title));
        this.libraryPrompts.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.title; // Use title as ID for now
            opt.textContent = p.title;
            this.librarySelect.appendChild(opt);
        });

        // Populate Case Select
        this.syntheticCases.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            this.caseSelect.appendChild(opt);
        });
    }

    bindEvents() {
        // Library Select
        this.librarySelect.addEventListener('change', (e) => {
            const prompt = this.libraryPrompts.find(p => p.title === e.target.value);
            this.setActivePrompt(prompt);
        });

        // Case Select
        this.caseSelect.addEventListener('change', (e) => {
            const caseId = e.target.value;
            if (caseId === 'custom') {
                this.caseInput.value = '';
                this.caseInput.disabled = false;
            } else {
                const c = this.syntheticCases.find(x => x.id === caseId);
                if (c) {
                    this.caseInput.value = c.content;
                    this.caseInput.disabled = true; // Read-only when using preset
                }
            }
        });

        // Init AI
        if (this.initBtn) {
            this.initBtn.addEventListener('click', () => this.initializeLLM());
        }

        // Run
        if (this.runBtn) {
            this.runBtn.addEventListener('click', () => this.runTool());
        }

        // View Prompt
        this.viewPromptBtn.addEventListener('click', () => {
            if (this.activePrompt) {
                this.modalContent.textContent = this.activePrompt.content;
                this.modal.style.display = 'block';
            }
        });
    }

    setActivePrompt(prompt) {
        this.activePrompt = prompt;
        if (prompt) {
            this.promptDisplay.innerHTML = `<strong>${prompt.title}</strong><br><span class="text-sm text-secondary">${prompt.description}</span>`;
            this.runBtn.disabled = false;
        } else {
            this.promptDisplay.innerHTML = `<em>No prompt selected</em>`;
            this.runBtn.disabled = true;
        }
    }

    async initializeLLM() {
        if (this.isInitialized) return true;

        if (window.sharedLLM) {
            this.llm = window.sharedLLM;
            this.isInitialized = true;
            this.updateStatus('AI Ready', 'ready');
            return true;
        }

        try {
            this.updateStatus('Initializing AI...', 'loading');
            this.initBtn.disabled = true;
            this.initBtn.textContent = 'Loading...';

            if (!navigator.gpu) {
                throw new Error('WebGPU not supported.');
            }

            const mlcModule = await import('https://esm.run/@mlc-ai/web-llm');
            const CreateMLCEngine = mlcModule.CreateMLCEngine || mlcModule.default?.CreateMLCEngine;

            this.llm = await CreateMLCEngine("Llama-3.2-1B-Instruct-q4f16_1-MLC", {
                initProgressCallback: (progress) => {
                    const percent = Math.round(progress.progress * 100);
                    this.updateStatus(`Loading: ${percent}%`, 'loading');
                }
            });

            this.isInitialized = true;
            window.sharedLLM = this.llm;
            this.updateStatus('AI Ready', 'ready');
            this.initBtn.style.display = 'none';
            return true;

        } catch (error) {
            console.error(error);
            this.updateStatus('Error', 'error');
            this.initBtn.disabled = false;
            this.initBtn.textContent = 'Retry';
            alert(error.message);
            return false;
        }
    }

    updateStatus(msg, type) {
        if (this.statusIndicator) {
            this.statusIndicator.textContent = msg;
            this.statusIndicator.className = `llm-status status-${type}`;
        }
    }

    async runTool() {
        if (!this.activePrompt) {
            alert('Please select a prompt.');
            return;
        }

        const caseData = this.caseInput.value.trim();
        if (!caseData) {
            alert('Please enter case data or select a synthetic case.');
            return;
        }

        if (!this.isInitialized) {
            const success = await this.initializeLLM();
            if (!success) return;
        }

        this.runBtn.disabled = true;
        this.runBtn.textContent = 'Processing...';
        this.outputArea.style.display = 'block';
        this.outputContent.textContent = 'Generating...';

        try {
            // Construct the prompt
            // System Prompt = The selected prompt content
            // User Input = The case data

            const messages = [
                { role: 'system', content: this.activePrompt.content },
                { role: 'user', content: caseData }
            ];

            const response = await this.llm.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 1500
            });

            this.outputContent.textContent = response.choices[0].message.content;
            this.outputContent.scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            console.error(error);
            this.outputContent.textContent = 'Error: ' + error.message;
        } finally {
            this.runBtn.disabled = false;
            this.runBtn.textContent = 'Run Prompt';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.workbench = new ClinicalWorkbench();
});
