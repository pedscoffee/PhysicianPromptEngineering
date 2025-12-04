---
layout: page
title: Clinical Flowchart Generator
description: Transform your clinical logic into visual and text-based flowcharts for better decision making and documentation.
permalink: /clinical-flowchart/
---

<style>
    .flowchart-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-top: 20px;
        align-items: start;
    }

    @media (max-width: 1024px) {
        .flowchart-container {
            grid-template-columns: 1fr;
        }
    }

    .input-panel, .output-panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
    }

    .output-panel {
        min-height: 600px;
        display: flex;
        flex-direction: column;
    }

    textarea {
        width: 100%;
        min-height: 300px;
        padding: 15px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.95em;
        resize: vertical;
        margin-bottom: 15px;
        transition: border-color 0.2s;
    }

    textarea:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 1rem;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5bb8;
    }

    .btn-primary:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    .tabs {
        display: flex;
        border-bottom: 2px solid #e8e8e8;
        margin-bottom: 20px;
    }

    .tab {
        padding: 10px 20px;
        cursor: pointer;
        font-weight: 600;
        color: #666;
        border-bottom: 2px solid transparent;
        margin-bottom: -2px;
    }

    .tab.active {
        color: #2a7ae2;
        border-bottom-color: #2a7ae2;
    }

    .tab-content {
        display: none;
        flex: 1;
        overflow: auto;
    }

    .tab-content.active {
        display: block;
    }

    #mermaid-output {
        text-align: center;
    }

    #ascii-output {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 6px;
        font-family: 'Monaco', 'Courier New', monospace;
        white-space: pre;
        overflow-x: auto;
        font-size: 0.9em;
        line-height: 1.4;
    }

    .status-bar {
        margin-top: 15px;
        padding: 10px;
        background: #f0f9ff;
        border-radius: 6px;
        color: #0369a1;
        font-size: 0.9em;
        display: none;
    }

    .model-status {
        margin-bottom: 15px;
        padding: 15px;
        background: #fffbeb;
        border: 1px solid #fcd34d;
        border-radius: 6px;
        color: #92400e;
        font-size: 0.9em;
    }

    .copy-btn {
        margin-top: 10px;
        background: white;
        border: 1px solid #e8e8e8;
        color: #333;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .copy-btn:hover {
        background: #f5f5f5;
    }
</style>

<!-- Mermaid JS -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
</script>

<div class="hero" style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); padding: 3rem 0; text-align: center; margin-bottom: 2rem; border-radius: 1rem;">
    <div class="container">
        <h1 class="hero-title" style="color: #0369a1; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Clinical Flowchart Generator
        </h1>
        <p class="hero-subtitle" style="color: #0284c7; font-size: 1.1rem; max-width: 800px; margin: 0 auto;">
            Turn your conditional treatment plans into visual diagrams for clarity and text-based flowcharts for your notes.
        </p>
    </div>
</div>

<div class="container">
    <div class="model-status" id="modelStatus">
        <strong>AI Model Status:</strong> Not Loaded. 
        <button id="loadModelBtn" class="copy-btn" style="margin-left: 10px; border-color: #fcd34d;">Load AI Model (~1GB)</button>
        <div id="progressContainer" style="margin-top: 10px; display: none;">
            <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                <div id="progressBar" style="background: #0284c7; width: 0%; height: 100%; transition: width 0.3s;"></div>
            </div>
            <div id="progressText" style="font-size: 0.8em; margin-top: 4px; color: #666;">Initializing...</div>
        </div>
    </div>

    <div class="flowchart-container">
        <!-- Input Panel -->
        <div class="input-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Clinical Logic / Plan</h3>
            <p style="font-size: 0.9em; color: #666; margin-bottom: 15px;">
                Describe your plan in natural language. Use "if/then" logic.
            </p>
            <textarea id="inputLogic" placeholder="Example:
If patient has fever > 38.5C:
  - Start Tylenol 650mg q6h
  - Order CBC and Blood Culture
  - If WBC > 15k, start Ceftriaxone
Else if afebrile:
  - Observation only
  - Discharge if stable for 24h"></textarea>
            
            <button id="generateBtn" class="btn-primary" disabled>Generate Flowchart</button>
            <div id="statusBar" class="status-bar"></div>
        </div>

        <!-- Output Panel -->
        <div class="output-panel">
            <div class="tabs">
                <div class="tab active" onclick="switchTab('visual')">Visual Flowchart</div>
                <div class="tab" onclick="switchTab('text')">Text for Note</div>
            </div>

            <div id="visualTab" class="tab-content active">
                <div id="mermaid-output">
                    <div style="color: #999; margin-top: 100px; font-style: italic;">
                        Visual flowchart will appear here...
                    </div>
                </div>
            </div>

            <div id="textTab" class="tab-content">
                <div style="position: relative;">
                    <pre id="ascii-output">Text-based flowchart will appear here...</pre>
                    <button class="copy-btn" onclick="copyAscii()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                        Copy to Clipboard
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    let engine = null;
    let isModelLoaded = false;

    const loadModelBtn = document.getElementById('loadModelBtn');
    const generateBtn = document.getElementById('generateBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const statusBar = document.getElementById('statusBar');
    const modelStatus = document.getElementById('modelStatus');

    // Load Model Handler
    loadModelBtn.addEventListener('click', async () => {
        loadModelBtn.disabled = true;
        loadModelBtn.textContent = 'Loading...';
        progressContainer.style.display = 'block';

        try {
            engine = await CreateMLCEngine(
                "Phi-3.5-mini-instruct-q4f16_1-MLC",
                {
                    initProgressCallback: (progress) => {
                        const percent = (progress.progress * 100).toFixed(1);
                        progressBar.style.width = `${percent}%`;
                        progressText.textContent = progress.text;
                    }
                }
            );
            
            isModelLoaded = true;
            generateBtn.disabled = false;
            modelStatus.innerHTML = '<strong>AI Model Status:</strong> <span style="color: green;">Ready</span>';
            modelStatus.style.borderColor = '#86efac';
            modelStatus.style.background = '#f0fdf4';
            modelStatus.style.color = '#166534';
            
        } catch (error) {
            console.error(error);
            progressText.textContent = "Error loading model: " + error.message;
            progressText.style.color = 'red';
            loadModelBtn.disabled = false;
            loadModelBtn.textContent = 'Retry Load';
        }
    });

    // Generate Handler
    generateBtn.addEventListener('click', async () => {
        const input = document.getElementById('inputLogic').value;
        if (!input.trim()) return;

        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
        statusBar.style.display = 'block';
        statusBar.textContent = 'Analyzing clinical logic...';

        const systemPrompt = `You are an expert clinical logic visualizer. 
        Your task is to take a clinical plan and convert it into TWO formats:
        1. A Mermaid.js 'graph TD' code block.
        2. A text-based ASCII/Unicode flowchart that is clean and copy-pasteable into a medical note.

        Rules for Mermaid:
        - Start with 'graph TD'
        - Use ONLY these arrow types: --> (solid), -.-> (dotted), ==> (thick).
        - DO NOT use any other arrow types like <|r|> or --o.
        - Use square brackets for nodes: A[Node Label]
        - Use curly braces for decisions: B{Condition?}
        - Keep labels short and concise.
        - Do not use special characters inside node IDs (use A, B, C, etc).

        Rules for ASCII/Text:
        - Use standard characters (|, +, -, >) or simple unicode boxes.
        - Ensure it is readable in a monospaced font.
        - Do not use markdown code blocks inside the text block, just the raw text.

        Output Format:
        Please output EXACTLY in this format:
        
        \`\`\`mermaid
        graph TD
        A[Start] --> B{Condition?}
        B -->|Yes| C[Action 1]
        B -->|No| D[Action 2]
        \`\`\`

        \`\`\`text
        [ASCII art here]
        \`\`\`
        `;

        try {
            const response = await engine.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: input }
                ],
                temperature: 0.1,
            });

            const content = response.choices[0].message.content;
            parseAndRender(content);
            
            statusBar.textContent = 'Generation complete!';
        } catch (error) {
            console.error(error);
            statusBar.textContent = 'Error: ' + error.message;
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Flowchart';
        }
    });

    function parseAndRender(content) {
        // Extract Mermaid
        const mermaidMatch = content.match(/```mermaid\n([\s\S]*?)\n```/);
        if (mermaidMatch && mermaidMatch[1]) {
            renderMermaid(mermaidMatch[1]);
        }

        // Extract Text
        const textMatch = content.match(/```text\n([\s\S]*?)\n```/);
        if (textMatch && textMatch[1]) {
            document.getElementById('ascii-output').textContent = textMatch[1];
        } else {
            // Fallback if regex fails, just try to find the second block
             document.getElementById('ascii-output').textContent = "Could not parse text output. Raw output:\n" + content;
        }
    }

    async function renderMermaid(code) {
        const outputDiv = document.getElementById('mermaid-output');
        outputDiv.innerHTML = ''; // Clear previous
        
        try {
            const { svg } = await mermaid.render('graphDiv', code);
            outputDiv.innerHTML = svg;
        } catch (error) {
            outputDiv.innerHTML = `<div style="color:red">Mermaid Render Error: ${error.message}</div><pre>${code}</pre>`;
        }
    }
</script>

<script>
    // Tab Switching
    window.switchTab = function(tabName) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        if (tabName === 'visual') {
            document.querySelectorAll('.tab')[0].classList.add('active');
            document.getElementById('visualTab').classList.add('active');
        } else {
            document.querySelectorAll('.tab')[1].classList.add('active');
            document.getElementById('textTab').classList.add('active');
        }
    }

    // Copy Function
    window.copyAscii = function() {
        const text = document.getElementById('ascii-output').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '✓ Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
    }
</script>
