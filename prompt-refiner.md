---
layout: page
title: Prompt Refiner
description: Refine and optimize your AI prompts with intelligent suggestions.
permalink: /prompt-refiner/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
        background: var(--color-bg-secondary, #f9fafb);
        color: var(--color-text-primary, #1f2937);
        line-height: 1.6;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section */
    .hero {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #065f46;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #047857;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    .privacy-highlight {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #059669;
        font-weight: 600;
        font-size: 1.1em;
        margin-top: 15px;
    }

    /* Status Panel */
    .status-panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
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
        background: #2563eb;
        width: 0%;
        transition: width 0.3s ease;
    }

    /* Main Layout */
    .main-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: start;
    }

    @media (max-width: 1000px) {
        .main-layout {
            grid-template-columns: 1fr;
        }
    }

    .panel {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .panel h2 {
        color: #2563eb;
        margin-bottom: 20px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    /* Form Elements */
    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #374151;
    }

    .form-control {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1em;
        resize: vertical;
        transition: border-color 0.2s;
    }

    .form-control:focus {
        outline: none;
        border-color: #2563eb;
    }

    textarea.form-control {
        min-height: 150px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
    }

    /* Buttons */
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
        justify-content: center;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #2563eb;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e40af;
        transform: translateY(-1px);
    }

    .btn-success {
        background: #059669;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #047857;
    }
    
    .btn-secondary {
        background: #6b7280;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #4b5563;
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
        width: 100%;
    }

    /* Output Section */
    .output-section {
        margin-bottom: 20px;
    }
    
    .output-label {
        font-weight: 600;
        color: #374151;
        margin-bottom: 10px;
        display: block;
    }

    .summary-list {
        background: #f0f9ff;
        border-left: 4px solid #0ea5e9;
        padding: 15px 15px 15px 30px;
        border-radius: 6px;
        margin-bottom: 20px;
    }
    
    .summary-list ul {
        margin: 0;
        color: #0369a1;
    }
    
    .summary-list li {
        margin-bottom: 5px;
    }

    .refined-output {
        background: #f9fafb;
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #e5e7eb;
        min-height: 300px;
        white-space: pre-wrap;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        color: #374151;
    }

    .loading-spinner {
        display: none;
        text-align: center;
        padding: 20px;
        color: #6b7280;
    }
    
    .loading-spinner.active {
        display: block;
    }
    
    .spinner-icon {
        animation: spin 1s linear infinite;
        margin-bottom: 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 48px; height: 48px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            Prompt Refiner
        </h1>
        <p class="hero-subtitle">
            Intelligently refine your prompts by describing exactly what you want to change. The AI summarizes your requests and integrates them seamlessly.
        </p>
        <div class="privacy-highlight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            100% Private - AI runs locally in your browser
        </div>
    </div>
</div>

<div class="container">
    <!-- Status Panel -->
    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Initialize AI" to load the model</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        
        <div class="model-selector" id="model-selector" style="text-align: left; background: rgba(0,0,0,0.05); padding: 15px; border-radius: 8px; margin: 15px 0;">
            <div style="font-weight: 600; margin-bottom: 10px; color: #374151;">Select AI Model:</div>
            <label class="model-option" style="display: flex; gap: 10px; margin-bottom: 10px; cursor: pointer;">
                <input type="radio" name="model-choice" value="thinking">
                <div class="model-info">
                    <strong style="display: block; color: #1f2937;">Thinking (Phi-3.5 Mini)</strong>
                    <span style="font-size: 0.9em; color: #4b5563;">Higher quality, better reasoning. Best for complex prompts. (~2.2GB)</span>
                </div>
            </label>
            <label class="model-option" style="display: flex; gap: 10px; cursor: pointer;">
                <input type="radio" name="model-choice" value="fast" checked>
                <div class="model-info">
                    <strong style="display: block; color: #1f2937;">Fast (Llama 3.2 1B)</strong>
                    <span style="font-size: 0.9em; color: #4b5563;">Lightning fast, lower memory. Good for older devices. (~870MB)</span>
                </div>
            </label>
        </div>
        <button id="init-btn" class="btn btn-success btn-lg" onclick="initializeEngine()" style="margin-top: 15px; max-width: 300px;">
            Initialize AI
        </button>
    </div>

    <div class="main-layout">
        <!-- Input Panel -->
        <div class="panel">
            <h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                Input
            </h2>

            <div class="form-group">
                <label for="current-prompt">Current Prompt</label>
                <textarea id="current-prompt" class="form-control" placeholder="Paste your existing prompt here..."></textarea>
            </div>

            <div class="form-group">
                <label for="desired-changes">Desired Changes</label>
                <textarea id="desired-changes" class="form-control" placeholder="Describe what you want to change (e.g., 'Make it more concise', 'Add a section for medications', 'Remove the subjective part')..." style="min-height: 100px;"></textarea>
            </div>

            <button id="refine-btn" class="btn btn-primary btn-lg" onclick="refinePrompt()" disabled>
                Refine Prompt
            </button>
        </div>

        <!-- Output Panel -->
        <div class="panel">
            <h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                Output
            </h2>

            <div class="loading-spinner" id="loading-spinner">
                <svg class="spinner-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <div>Refining your prompt...</div>
            </div>

            <div id="output-container" style="display: none;">
                <div class="output-section">
                    <span class="output-label">Summary of Changes</span>
                    <div class="summary-list" id="summary-list">
                        <!-- Summary items will go here -->
                    </div>
                </div>

                <div class="output-section">
                    <span class="output-label">Refined Prompt</span>
                    <div class="refined-output" id="refined-prompt"></div>
                </div>

                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button class="btn btn-success" onclick="copyOutput()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        Copy Prompt
                    </button>
                    <button class="btn btn-secondary" onclick="saveToPromptManager()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Save to Manager
                    </button>
                </div>
            </div>
            
            <div id="empty-output" style="text-align: center; padding: 40px; color: #9ca3af;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" style="width: 48px; height: 48px; margin-bottom: 10px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <p>Refined prompt will appear here</p>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    let engine = null;
    let isLoading = false;
    
    // Expose functions to global scope
    window.initializeEngine = initializeEngine;
    window.refinePrompt = refinePrompt;
    window.copyOutput = copyOutput;
    window.saveToPromptManager = saveToPromptManager;

    const MODELS = {
        thinking: {
            id: "Phi-3.5-mini-instruct-q4f16_1-MLC",
            name: "Thinking (Phi-3.5 Mini)"
        },
        fast: {
            id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
            name: "Fast (Llama 3.2 1B)"
        }
    };

    const SYSTEM_PROMPT = `You are an expert prompt engineer. Your task is to refine an existing prompt based on the user's desired changes.

You will be given:
1. The Current Prompt.
2. A list of Desired Changes.

Your output must contain two parts:
1. A list of concise short phrases summarizing the desired changes.
2. The Refined Prompt, where you have integrated the desired changes into the original prompt, resolving any contradictions.

Format your response exactly as follows:

### Summary of Changes
- [Change 1]
- [Change 2]
...

### Refined Prompt
[The full text of the refined prompt]
`;

    async function initializeEngine() {
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        try {
            initBtn.disabled = true;
            progressBar.classList.add('active');
            statusPanel.classList.remove('error');
            
            // Get selected model
            const modelChoice = document.querySelector('input[name="model-choice"]:checked').value;
            const selectedModel = MODELS[modelChoice].id;

            engine = await CreateMLCEngine(
                selectedModel,
                {
                    initProgressCallback: (initProgress) => {
                        statusMessage.textContent = initProgress.text;
                        const percent = Math.round(initProgress.progress * 100);
                        progressFill.style.width = `${percent}%`;
                        statusDetails.textContent = `${percent}% Complete`;
                    }
                }
            );

            statusPanel.classList.add('ready');
            statusMessage.textContent = "AI Ready!";
            statusDetails.textContent = "You can now refine your prompts.";
            initBtn.style.display = 'none';
            progressBar.style.display = 'none';
            document.getElementById('model-selector').style.display = 'none';
            
            document.getElementById('refine-btn').disabled = false;

        } catch (error) {
            console.error("Initialization error:", error);
            statusPanel.classList.add('error');
            statusMessage.textContent = "Error Loading AI";
            statusDetails.textContent = error.message;
            initBtn.disabled = false;
            initBtn.textContent = "Try Again";
        }
    }

    async function refinePrompt() {
        const currentPrompt = document.getElementById('current-prompt').value;
        const desiredChanges = document.getElementById('desired-changes').value;
        
        if (!currentPrompt || !desiredChanges) {
            alert("Please provide both the current prompt and desired changes.");
            return;
        }

        if (!engine) {
            alert("Please initialize the AI first.");
            return;
        }

        // UI Updates
        document.getElementById('refine-btn').disabled = true;
        document.getElementById('loading-spinner').classList.add('active');
        document.getElementById('output-container').style.display = 'none';
        document.getElementById('empty-output').style.display = 'none';

        try {
            const userMessage = `Current Prompt:
${currentPrompt}

Desired Changes:
${desiredChanges}`;

            const messages = [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userMessage }
            ];

            const response = await engine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 4000,
            });

            const result = response.choices[0].message.content;
            parseAndDisplayResult(result);

        } catch (error) {
            console.error("Refinement error:", error);
            alert("An error occurred while refining the prompt: " + error.message);
        } finally {
            document.getElementById('refine-btn').disabled = false;
            document.getElementById('loading-spinner').classList.remove('active');
        }
    }

    function parseAndDisplayResult(text) {
        const summaryMatch = text.match(/### Summary of Changes([\s\S]*?)(?=### Refined Prompt|$)/i);
        const refinedMatch = text.match(/### Refined Prompt([\s\S]*)/i);

        const summaryHtml = summaryMatch 
            ? '<ul>' + summaryMatch[1].trim().split('\n').filter(line => line.trim().startsWith('-')).map(line => `<li>${line.replace(/^-\s*/, '')}</li>`).join('') + '</ul>'
            : '<p>No summary provided.</p>';

        const refinedText = refinedMatch ? refinedMatch[1].trim() : text;

        document.getElementById('summary-list').innerHTML = summaryHtml;
        document.getElementById('refined-prompt').textContent = refinedText;
        
        document.getElementById('output-container').style.display = 'block';
    }

    function copyOutput() {
        const text = document.getElementById('refined-prompt').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.btn-success');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Copied!';
            setTimeout(() => btn.innerHTML = originalText, 2000);
        });
    }

    function saveToPromptManager() {
        const content = document.getElementById('refined-prompt').textContent;
        if (!content) return;

        try {
            const snippets = JSON.parse(localStorage.getItem('aiPromptSnippets') || '[]');
            const title = prompt('Enter a title for this prompt:', 'Refined Prompt');
            if (!title) return;

            const tags = prompt('Enter tags (comma-separated):', 'refined, ai-generated');
            const tagArray = tags ? tags.split(',').map(t => t.trim()) : ['refined'];

            snippets.push({
                id: Date.now(),
                title: title,
                content: content,
                tags: tagArray,
                created: new Date().toISOString(),
                charCount: content.length
            });

            localStorage.setItem('aiPromptSnippets', JSON.stringify(snippets));

            if (confirm('Saved to Prompt Manager! Would you like to open it now?')) {
                window.open('/prompt-manager', '_blank');
            }
        } catch (error) {
            alert('Failed to save. Storage might be full.');
        }
    }
</script>
