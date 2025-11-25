/**
 * Clinical AI Workbench
 * Test prompts with synthetic cases using local WebLLM
 */

class ClinicalWorkbench {
    constructor() {
        this.llm = null;
        this.isInitialized = false;
        this.prompts = [];
        this.cases = [];
        this.selectedPrompt = null;

        // UI Elements
        this.promptSelect = document.getElementById('prompt-select');
        this.caseSelect = document.getElementById('case-select');
        this.caseInput = document.getElementById('case-input');
        this.runBtn = document.getElementById('btn-run');
        this.viewPromptBtn = document.getElementById('btn-view-prompt');
        this.outputBox = document.getElementById('output-box');
        this.outputContent = document.getElementById('output-content');
        this.statusIndicator = document.getElementById('llm-status');
        this.initBtn = document.getElementById('btn-init-ai');
        this.modal = document.getElementById('prompt-modal');
        this.modalContent = document.getElementById('modal-prompt-content');

        this.init();
    }

    async init() {
        await this.loadData();
        this.populateUI();
        this.bindEvents();
    }

    async loadData() {
        try {
            const [promptsResp, casesResp] = await Promise.all([
                fetch('/api/prompts.json'),
                fetch('/api/cases.json')
            ]);

            this.prompts = await promptsResp.json();
            this.cases = await casesResp.json();
        } catch (e) {
            console.error('Error loading data:', e);
            alert('Failed to load prompts and cases. Please refresh the page.');
        }
    }

    populateUI() {
        // Populate prompts
        this.prompts.sort((a, b) => a.title.localeCompare(b.title));
        this.prompts.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.title;
            opt.textContent = p.title;
            opt.dataset.content = p.content;
            this.promptSelect.appendChild(opt);
        });

        // Populate cases
        this.cases.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            opt.dataset.content = c.content;
            this.caseSelect.appendChild(opt);
        });
    }

    bindEvents() {
        // Prompt selection
        this.promptSelect.addEventListener('change', (e) => {
            const selected = e.target.selectedOptions[0];
            if (selected && selected.value) {
                this.selectedPrompt = {
                    title: selected.value,
                    content: selected.dataset.content
                };
                this.viewPromptBtn.disabled = false;
                this.updateRunButton();
            } else {
                this.selectedPrompt = null;
                this.viewPromptBtn.disabled = true;
                this.updateRunButton();
            }
        });

        // Case selection
        this.caseSelect.addEventListener('change', (e) => {
            const selected = e.target.selectedOptions[0];
            if (selected.value === 'custom') {
                this.caseInput.value = '';
                this.caseInput.disabled = false;
            } else {
                this.caseInput.value = selected.dataset.content;
                this.caseInput.disabled = true;
            }
            this.updateRunButton();
        });

        // Case input
        this.caseInput.addEventListener('input', () => {
            this.updateRunButton();
        });

        // View prompt
        this.viewPromptBtn.addEventListener('click', () => {
            if (this.selectedPrompt) {
                this.modalContent.textContent = this.selectedPrompt.content;
                this.modal.style.display = 'block';
            }
        });

        // Init AI
        this.initBtn.addEventListener('click', () => this.initializeLLM());

        // Run
        this.runBtn.addEventListener('click', () => this.runPrompt());
    }

    updateRunButton() {
        const hasPrompt = this.selectedPrompt !== null;
        const hasCase = this.caseInput.value.trim().length > 0;
        this.runBtn.disabled = !(hasPrompt && hasCase);
    }

    async initializeLLM() {
        if (this.isInitialized) return true;

        if (window.sharedLLM) {
            this.llm = window.sharedLLM;
            this.isInitialized = true;
            this.updateStatus('AI Ready', 'ready');
            this.initBtn.style.display = 'none';
            return true;
        }

        try {
            this.updateStatus('Initializing AI (downloading ~2GB)...', 'loading');
            this.initBtn.disabled = true;
            this.initBtn.textContent = 'Loading...';

            if (!navigator.gpu) {
                throw new Error('WebGPU not supported. Please use Chrome or Edge 113+');
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
            this.updateStatus('Error loading AI', 'error');
            this.initBtn.disabled = false;
            this.initBtn.textContent = 'Retry Initialization';
            alert(`Failed to load AI: ${error.message}`);
            return false;
        }
    }

    updateStatus(msg, type) {
        this.statusIndicator.textContent = msg;
        this.statusIndicator.className = `status-indicator status-${type}`;
    }

    async runPrompt() {
        const caseData = this.caseInput.value.trim();
        if (!this.selectedPrompt || !caseData) return;

        if (!this.isInitialized) {
            const success = await this.initializeLLM();
            if (!success) return;
        }

        this.runBtn.disabled = true;
        this.runBtn.textContent = 'Processing...';
        this.outputBox.style.display = 'block';
        this.outputContent.textContent = 'Generating...';

        try {
            const messages = [
                { role: 'system', content: this.selectedPrompt.content },
                { role: 'user', content: caseData }
            ];

            const response = await this.llm.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 1500
            });

            this.outputContent.textContent = response.choices[0].message.content;
            this.outputBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            console.error(error);
            this.outputContent.textContent = `Error: ${error.message}`;
        } finally {
            this.runBtn.disabled = false;
            this.runBtn.textContent = 'Run Prompt';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.workbench = new ClinicalWorkbench();
});
