---
layout: page
title: Prompt Assistant
description: Experimental browser-based prompt generator demonstrating AI-powered meta-prompting capabilities. Educational purposes only.
permalink: /prompt-assistant/
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
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #218838;
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
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

    .form-group label span {
        color: #999;
        font-size: 0.9em;
        font-weight: 400;
    }

    .form-group textarea {
        width: 100%;
        padding: 15px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1em;
        transition: border-color 0.2s;
        resize: vertical;
        min-height: 150px;
    }

    .form-group textarea:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .template-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px;
        margin-bottom: 20px;
    }

    .template-btn {
        padding: 12px 16px;
        background: #f0f0f0;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.95em;
        text-align: left;
        font-weight: 500;
    }

    .template-btn:hover {
        background: #e3f2fd;
        border-color: #2a7ae2;
        color: #2a7ae2;
    }

    #conversation-history {
        max-height: 500px;
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 6px;
        display: none;
    }

    #conversation-history.active {
        display: block;
    }

    .message {
        margin-bottom: 15px;
        padding: 12px;
        border-radius: 6px;
        animation: fadeIn 0.3s;
    }

    .message.user {
        background: #e3f2fd;
        border-left: 3px solid #2a7ae2;
    }

    .message.assistant {
        background: #f0f0f0;
        border-left: 3px solid #666;
    }

    .message-label {
        font-weight: 600;
        font-size: 0.85em;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .message.user .message-label {
        color: #2a7ae2;
    }

    .message.assistant .message-label {
        color: #666;
    }

    .message-content {
        color: #333;
        white-space: pre-wrap;
        font-size: 0.95em;
    }

    #output-content {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 6px;
        border-left: 3px solid #2a7ae2;
        min-height: 200px;
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
    }

    .empty-state {
        text-align: center;
        padding: 40px 20px;
        color: #999;
    }

    .empty-state-icon {
        font-size: 3em;
        margin-bottom: 15px;
    }

    .tips-section {
        background: #f0f7ff;
        border-left: 4px solid #2a7ae2;
        padding: 20px;
        border-radius: 6px;
        margin-top: 25px;
    }

    .tips-section h4 {
        color: #2a7ae2;
        margin-bottom: 12px;
        font-size: 1.05em;
    }

    .tips-section ul {
        margin-left: 20px;
        color: #555;
    }

    .tips-section li {
        margin-bottom: 8px;
        line-height: 1.6;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .generating {
        animation: pulse 1.5s ease-in-out infinite;
    }

    .fallback-message {
        background: #fee2e2;
        border-left: 4px solid #dc2626;
        padding: 20px;
        border-radius: 6px;
        margin-top: 20px;
    }

    .fallback-message h3 {
        color: #991b1b;
        margin-bottom: 10px;
    }

    .fallback-message p {
        color: #7f1d1d;
        margin-bottom: 10px;
    }

    .fallback-message ul {
        margin-left: 20px;
        color: #7f1d1d;
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
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1 class="hero-title">Prompt Assistant</h1>
        <p class="hero-subtitle">
            Experimental meta-prompting tool demonstrating AI-powered prompt generation. Educational purposes only.
        </p>
    </div>
</div>

<div class="container">
    <div class="warning-box" style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
        <h3 style="color: #78350f; margin-bottom: 12px; font-size: 1.1em;">BETA - Educational Demonstration Only</h3>
        <p style="color: #78350f; margin-bottom: 10px;">
            <strong>This is an experimental prototype for educational purposes.</strong> Do not use with any patient data, protected health information, or sensitive information. This tool is not intended for clinical use.
        </p>
    </div>

    <div class="warning-box" id="browser-warning">
        <h3>Browser Requirements</h3>
        <ul>
            <li><strong>Recommended:</strong> Chrome or Edge version 113+ (with WebGPU support)</li>
            <li><strong>First-time setup:</strong> Downloads ~2GB AI model (cached for future use)</li>
            <li><strong>Hardware:</strong> Works best with GPU; functional on CPU but slower</li>
            <li><strong>Offline capable:</strong> After initial download, works without internet connection</li>
        </ul>
    </div>

    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Start AI Assistant" to load the AI model</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary btn-lg" onclick="initializeEngine()">
            Initialize Prompt Assistant
        </button>
    </div>

    <div class="main-layout">
        <div class="panel">
            <h2>Describe Your Prompt Need</h2>

            <h3>Quick Start Templates</h3>
            <div class="template-buttons">
                <button class="template-btn" onclick="loadTemplate('meta-generator')">
                    Meta-Prompt Generator
                </button>
                <button class="template-btn" onclick="loadTemplate('meta-refiner')">
                    Meta-Prompt Refiner
                </button>
                <button class="template-btn" onclick="loadTemplate('ap-formatting')">
                    A&P Formatting
                </button>
                <button class="template-btn" onclick="loadTemplate('billing')">
                    Billing Documentation
                </button>
                <button class="template-btn" onclick="loadTemplate('avs')">
                    After-Visit Summary
                </button>
                <button class="template-btn" onclick="loadTemplate('signout')">
                    Patient Sign-Out
                </button>
                <button class="template-btn" onclick="loadTemplate('custom')">
                    Start from Scratch
                </button>
            </div>

            <div class="form-group">
                <label for="user-input">
                    Your Requirements
                    <span>(Be specific about formatting, style, and clinical context)</span>
                </label>
                <textarea
                    id="user-input"
                    placeholder="Example: I need a prompt that converts my pediatric sick visit notes into a concise assessment and plan. I want each problem as a bold header, followed by bullet points for the plan. Keep it brief and scannable, using standard medical abbreviations. Include return precautions when appropriate."
                ></textarea>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button id="generate-btn" class="btn btn-success btn-lg" onclick="generatePrompt()" disabled>
                    Generate Prompt
                </button>
                <button id="refine-btn" class="btn btn-primary" onclick="refinePrompt()" disabled style="display: none;">
                    Refine Further
                </button>
                <button id="clear-btn" class="btn" style="background: #6b7280; color: white;" onclick="clearConversation()">
                    Clear
                </button>
            </div>

            <div id="conversation-history"></div>

            <div class="tips-section">
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 6px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    Tips for Best Results
                </h4>
                <ul>
                    <li><strong>Be specific:</strong> Mention your specialty, note type, and formatting preferences</li>
                    <li><strong>Include examples:</strong> Describe what good output looks like</li>
                    <li><strong>Iterative refinement:</strong> Generate, test, then use "Refine Further" to improve</li>
                    <li><strong>Add context:</strong> After generation, add 2-3 real examples to the prompt</li>
                    <li><strong>Stay under 5,000 characters:</strong> Prompts work best when concise</li>
                </ul>
            </div>
        </div>

        <div class="output-panel">
            <h2>Generated Prompt</h2>

            <div id="output-empty" class="empty-state">
                <div class="empty-state-icon"></div>
                <p>Your AI-generated prompt will appear here</p>
            </div>

            <div class="spinner" id="spinner"></div>

            <div id="output-content"></div>

            <div class="char-counter" id="char-counter" style="display: none;"></div>

            <div class="output-actions" id="output-actions" style="display: none;">
                <button class="btn btn-success" onclick="copyPrompt()">
                    Copy to Clipboard
                </button>
                <button class="btn btn-primary" onclick="saveToSnippetManager()">
                    Save to Snippet Manager
                </button>
                <button class="btn" style="background: #6b7280; color: white;" onclick="downloadPrompt()">
                    Download as .txt
                </button>
            </div>

            <div class="tips-section" style="margin-top: 25px;">
                <h4>Next Steps</h4>
                <ul>
                    <li><strong>Add examples:</strong> Include 2-3 real before/after examples in your prompt</li>
                    <li><strong>Test it:</strong> Try the prompt in your AI scribe and iterate</li>
                    <li><strong>Save it:</strong> Use Snippet Manager to organize versions</li>
                    <li><strong>Share it:</strong> Consider submitting to our <a href="/contributions">Prompt Library</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let engine = null;
    let isLoading = false;
    let conversationHistory = [];
    let currentOutput = '';

    // Model configuration - using Phi-3.5-mini (best balance of quality and speed)
    const MODEL_ID = "Phi-3.5-mini-instruct-q4f16_1-MLC";

    // System prompt optimized for clinical prompt engineering
    const SYSTEM_PROMPT = `You are an expert medical prompt engineer specializing in clinical documentation AI systems. Your role is to help physicians create effective prompts for AI medical scribes.

Core Principles:
1. **Few-shot examples are critical**: Always recommend including 2-3 concrete before/after examples
2. **Brevity = Quality**: Concise outputs are easier to scan and edit
3. **One purpose per prompt**: Avoid multi-function prompts
4. **Specific formatting**: Include exact formatting rules (bold, bullets, structure)
5. **Medical context matters**: Consider specialty, visit type, and workflow

Output Format:
- Start with clear, direct instructions to the AI
- Include specific formatting requirements
- Provide template structure with examples
- Leave space for user to add their own examples
- Keep total output under 5,000 characters when possible
- Use professional medical language

Generate production-ready prompts that physicians can immediately deploy in their EMR AI systems.`;

    // =====================================================
    // TEMPLATES
    // =====================================================
    const templates = {
        'meta-generator': `I want to create a custom A&P formatting prompt using the Meta-Prompt Generator methodology.

Please help me generate a complete, production-ready prompt based on my examples and preferences.

What I'll provide:
1. FEW-SHOT EXAMPLES (3-5 examples of my ideal A&P output - these are critical!)
   [Paste your 3-5 examples of ideal output here]

2. EXPLICIT FORMATTING RULES (optional - any specific requirements I know I want)
   [List any specific formatting rules here, such as:
   - Use bullets vs prose
   - Brevity requirements
   - Abbreviation preferences
   - etc.]

3. BOILERPLATE PHRASES (optional - standard text for common scenarios)
   [List any boilerplate text you want automatically inserted, such as:
   - Standard illness return precautions
   - Well visit counseling
   - etc.]

Please analyze my examples, extract implicit patterns, and create a complete prompt that matches my style exactly. Keep it under 5,000 characters for EMR compatibility.`,

        'meta-refiner': `I have an existing A&P formatting prompt that needs improvement. Please help me refine it using gap analysis.

What I'll provide:
1. CURRENT PROMPT
   [Paste your current A&P formatting prompt here]

2. IDEAL OUTPUT (2-5 examples of what I want)
   [Paste 2-5 examples of your desired output here]

3. CURRENT OUTPUT (2-5 examples of what I'm actually getting)
   [Paste 2-5 examples of what your current prompt produces]

Please:
1. Identify the top 3-5 gaps between current and ideal output
2. Explain the root cause of each gap
3. Provide specific fixes with rationale
4. Generate a refined version of my prompt with [UPDATED] markers
5. Suggest priority tests and potential issues to watch for

Focus on few-shot examples as the most powerful fix. Keep the refined prompt under 5,000 characters.`,

        'ap-formatting': `I need a prompt that formats my clinical notes into a structured Assessment and Plan section.

Requirements:
- Each problem should be a bold header
- Plan items as bullet points under each problem
- Use concise, scannable language
- Include standard medical abbreviations
- Remove unnecessary verbosity from AI scribe output

My specialty: [Add your specialty]
Typical visit types: [Add visit types]`,

        'billing': `I need a prompt that analyzes my clinical documentation and generates medical decision-making (MDM) summaries for billing purposes.

Requirements:
- Identify complexity level (straightforward/low/moderate/high)
- List data reviewed (labs, imaging, external records)
- Summarize risk assessment
- Document time spent if appropriate
- Format for easy copy-paste into billing section

My typical cases: [Describe your case mix]`,

        'avs': `I need a prompt that converts my clinical notes into patient-friendly after-visit summaries (AVS).

Requirements:
- Use 6th-8th grade reading level
- Explain diagnoses in plain language
- Clear medication instructions
- Specific follow-up plan
- When to seek urgent care (return precautions)

My patient population: [Describe your patients]`,

        'signout': `I need a prompt that creates concise patient sign-out/handoff documentation.

Requirements:
- One-liner summary per patient
- Key overnight tasks
- If/then contingency plans
- Code status if relevant
- Critical labs/vitals to monitor

My practice setting: [Hospital/clinic/specialty]`,

        'custom': `Describe your prompt needs in detail. Include:
- What type of documentation you're working with
- Your desired output format
- Your specialty and typical cases
- Any specific formatting requirements
- Example of what good output looks like`
    };

    // =====================================================
    // BROWSER COMPATIBILITY CHECK
    // =====================================================
    async function checkWebGPUSupport() {
        if (!navigator.gpu) {
            document.getElementById('status-panel').className = 'status-panel error';
            document.getElementById('status-message').innerHTML = `
                ❌ WebGPU Not Supported
            `;
            document.getElementById('status-details').innerHTML = `
                Your browser doesn't support WebGPU, which is required for running AI models locally.
                <br><br>
                <strong>Try:</strong><br>
                • Chrome or Edge version 113+ on desktop<br>
                • Enable WebGPU in experimental flags (chrome://flags)<br>
                <br>
                <strong>Alternative:</strong> Use our <a href="/prompt-generator">standard Prompt Generator</a> instead.
            `;
            document.getElementById('init-btn').style.display = 'none';
            return false;
        }
        return true;
    }

    // =====================================================
    // ENGINE INITIALIZATION
    // =====================================================
    window.initializeEngine = async function() {
        if (engine || isLoading) return;

        const supportsWebGPU = await checkWebGPUSupport();
        if (!supportsWebGPU) return;

        isLoading = true;
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = '⏳ Initializing AI model...';
        statusDetails.textContent = 'First time: ~2GB download (cached for future visits)';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            engine = await CreateMLCEngine(
                MODEL_ID,
                {
                    initProgressCallback: (progress) => {
                        const percent = (progress.progress * 100).toFixed(1);
                        progressFill.style.width = `${percent}%`;
                        statusMessage.textContent = `⏳ Loading: ${percent}%`;
                        statusDetails.textContent = progress.text;
                    }
                }
            );

            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = '✅ AI Ready!';
            statusDetails.textContent = 'Model loaded and running locally in your browser. You can now generate prompts.';
            progressBar.classList.remove('active');

            document.getElementById('generate-btn').disabled = false;
            initBtn.style.display = 'none';

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = '❌ Failed to load AI model';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Troubleshooting:</strong><br>
                • Check your internet connection<br>
                • Ensure you have ~3GB free disk space<br>
                • Try refreshing the page<br>
                • Use Chrome/Edge 113+ on desktop
            `;
            console.error('Engine initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }

        isLoading = false;
    };

    // =====================================================
    // TEMPLATE LOADING
    // =====================================================
    window.loadTemplate = function(templateId) {
        const textarea = document.getElementById('user-input');
        textarea.value = templates[templateId] || templates.custom;
        textarea.focus();
    };

    // =====================================================
    // PROMPT GENERATION
    // =====================================================
    window.generatePrompt = async function() {
        const userInput = document.getElementById('user-input').value.trim();

        if (!userInput) {
            alert('Please describe what kind of prompt you need.');
            return;
        }

        if (!engine) {
            alert('Please start the AI Assistant first.');
            return;
        }

        // Show generating state
        document.getElementById('output-empty').style.display = 'none';
        document.getElementById('spinner').classList.add('active');
        document.getElementById('output-content').classList.remove('active');
        document.getElementById('output-actions').style.display = 'none';
        document.getElementById('char-counter').style.display = 'none';
        document.getElementById('generate-btn').disabled = true;

        try {
            // Add user message to conversation
            conversationHistory.push({
                role: 'user',
                content: userInput
            });

            // Build messages array
            const messages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...conversationHistory
            ];

            // Generate response with streaming
            const response = await engine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 2000,
                stream: true
            });

            currentOutput = '';
            const outputDiv = document.getElementById('output-content');
            outputDiv.textContent = '';
            outputDiv.classList.add('active');
            document.getElementById('spinner').classList.remove('active');

            // Stream the response
            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                currentOutput += delta;
                outputDiv.textContent = currentOutput;
                updateCharCount(currentOutput.length);
            }

            // Add assistant response to conversation
            conversationHistory.push({
                role: 'assistant',
                content: currentOutput
            });

            // Update UI
            document.getElementById('output-actions').style.display = 'flex';
            document.getElementById('char-counter').style.display = 'block';
            document.getElementById('refine-btn').style.display = 'inline-flex';
            document.getElementById('refine-btn').disabled = false;
            updateConversationHistory();

        } catch (error) {
            console.error('Generation error:', error);
            document.getElementById('output-content').textContent = `Error generating prompt: ${error.message}\n\nPlease try again.`;
            document.getElementById('output-content').classList.add('active');
            document.getElementById('spinner').classList.remove('active');
        }

        document.getElementById('generate-btn').disabled = false;
        document.getElementById('user-input').value = '';
    };

    // =====================================================
    // REFINEMENT
    // =====================================================
    window.refinePrompt = async function() {
        const refinementInput = prompt('How would you like to refine this prompt?\n\nExample:\n- "Make it more concise"\n- "Add a section for return precautions"\n- "Use more bullet points, fewer sentences"');

        if (!refinementInput || !refinementInput.trim()) return;

        document.getElementById('user-input').value = refinementInput.trim();
        await generatePrompt();
    };

    // =====================================================
    // CONVERSATION HISTORY
    // =====================================================
    function updateConversationHistory() {
        const historyDiv = document.getElementById('conversation-history');

        if (conversationHistory.length === 0) {
            historyDiv.classList.remove('active');
            return;
        }

        historyDiv.classList.add('active');
        historyDiv.innerHTML = conversationHistory.map(msg => `
            <div class="message ${msg.role}">
                <div class="message-label">${msg.role === 'user' ? 'You asked' : 'AI generated'}</div>
                <div class="message-content">${escapeHtml(msg.content)}</div>
            </div>
        `).join('');

        // Scroll to bottom
        historyDiv.scrollTop = historyDiv.scrollHeight;
    }

    window.clearConversation = function() {
        if (conversationHistory.length > 0) {
            if (!confirm('Clear conversation history and start fresh?')) return;
        }

        conversationHistory = [];
        currentOutput = '';
        document.getElementById('conversation-history').classList.remove('active');
        document.getElementById('output-content').classList.remove('active');
        document.getElementById('output-empty').style.display = 'block';
        document.getElementById('output-actions').style.display = 'none';
        document.getElementById('char-counter').style.display = 'none';
        document.getElementById('refine-btn').style.display = 'none';
        document.getElementById('user-input').value = '';
    };

    // =====================================================
    // OUTPUT ACTIONS
    // =====================================================
    window.copyPrompt = async function() {
        try {
            await navigator.clipboard.writeText(currentOutput);
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => btn.textContent = originalText, 2000);
        } catch (error) {
            alert('Failed to copy to clipboard. Please select and copy manually.');
            console.error('Copy error:', error);
        }
    };

    window.downloadPrompt = function() {
        const blob = new Blob([currentOutput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `clinical-prompt-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.saveToSnippetManager = function() {
        try {
            const snippets = JSON.parse(localStorage.getItem('promptSnippets') || '[]');

            const title = prompt('Enter a title for this snippet:', 'AI-Generated Clinical Prompt');
            if (!title) return;

            snippets.push({
                id: Date.now(),
                title: title,
                version: '1.0',
                tags: ['ai-generated', 'clinical'],
                prompt: currentOutput
            });

            localStorage.setItem('promptSnippets', JSON.stringify(snippets));

            if (confirm('✅ Saved to Snippet Manager!\n\nWould you like to open the Snippet Manager now?')) {
                window.location.href = '/snippet-manager';
            }
        } catch (error) {
            alert('Failed to save to Snippet Manager. Storage might be full.');
            console.error('Save error:', error);
        }
    };

    // =====================================================
    // UTILITIES
    // =====================================================
    function updateCharCount(count) {
        const counter = document.getElementById('char-counter');
        counter.style.display = 'block';

        let className = 'char-counter';
        let message = `${count.toLocaleString()} characters`;

        if (count > 5000) {
            className += ' error';
            message += ' ⚠️ Too long! Recommended: under 5,000 characters';
        } else if (count > 4500) {
            className += ' warning';
            message += ' ⚠️ Getting long. Consider shortening.';
        } else {
            message += ' ✅ Good length';
        }

        counter.className = className;
        counter.textContent = message;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // =====================================================
    // INITIALIZATION
    // =====================================================
    document.addEventListener('DOMContentLoaded', async () => {
        // Check WebGPU support on load
        await checkWebGPUSupport();
    });
</script>

<div class="embed-container" style="text-align: center; margin: 30px auto;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<div style="background: #e3f2fd; padding: 20px; border-left: 4px solid #2a7ae2; border-radius: 6px; margin-top: 30px; text-align: center;">
    <h3 style="color: #2a7ae2; font-size: 1.2em; margin-bottom: 12px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 6px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        How It Works
    </h3>
    <p style="margin-bottom: 15px;">This tool downloads a 2GB AI model to your browser on first use. After that, everything runs locally—no internet required, complete privacy. The AI (Phi-3.5-mini) is optimized for prompt engineering tasks and runs surprisingly fast on modern hardware.</p>
    <p><strong>Performance:</strong> Expect 10-30 tokens/second on most laptops, faster with dedicated GPUs. First download takes 5-15 minutes, then it's cached forever.</p>
</div>
