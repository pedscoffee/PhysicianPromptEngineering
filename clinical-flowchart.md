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

    .mode-toggle {
        display: flex;
        gap: 8px;
        background: #f3f4f6;
        padding: 4px;
        border-radius: 8px;
    }

    .mode-btn {
        background: transparent;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 600;
        color: #6b7280;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .mode-btn:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    .mode-btn.active {
        background: white;
        color: #0369a1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .mode-panel {
        animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; color: #333;">Input</h3>
                <div class="mode-toggle">
                    <button id="aiModeBtn" class="mode-btn active" onclick="switchMode('ai')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                        </svg>
                        AI Mode
                    </button>
                    <button id="manualModeBtn" class="mode-btn" onclick="switchMode('manual')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        Manual Mode
                    </button>
                </div>
            </div>
            
            <!-- AI Mode -->
            <div id="aiMode" class="mode-panel">
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
            </div>
            
            <!-- Manual Mode -->
            <div id="manualMode" class="mode-panel" style="display: none;">
                <p style="font-size: 0.9em; color: #666; margin-bottom: 15px;">
                    Edit Mermaid code directly. <a href="https://mermaid.js.org/syntax/flowchart.html" target="_blank" style="color: #2a7ae2;">View syntax guide →</a>
                </p>
                <textarea id="mermaidCode" placeholder="graph TD
  A[Start] --> B{Fever > 38.5?}
  B -->|Yes| C[Tylenol 650mg q6h]
  B -->|No| D[Observation]" style="font-family: 'Monaco', 'Courier New', monospace; min-height: 300px;"></textarea>
                
                <button id="renderBtn" class="btn-primary" onclick="renderManualCode()">Render Flowchart</button>
            </div>
            
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
                <button id="fullscreenBtn" class="copy-btn" style="margin-top: 15px; display: none;" onclick="openFullscreen()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    Full Screen & Download
                </button>
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

    // ... (previous code) ...

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
            document.getElementById('fullscreenBtn').style.display = 'inline-flex';
        } catch (error) {
            console.error(error);
            statusBar.textContent = 'Error: ' + error.message;
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Flowchart';
        }
    });

    // ... (existing parseAndRender and renderMermaid) ...

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

<div id="fullscreenModal" class="modal-overlay">
    <div class="modal-content">
        <div class="modal-header">
            <button class="btn-secondary" onclick="closeModal()">Close</button>
            <button class="btn-secondary" onclick="downloadSVG()">Download SVG</button>
            <button class="btn-primary" style="width: auto;" onclick="downloadPNG()">Download PNG</button>
        </div>
        <div id="modalBody" class="modal-body"></div>
    </div>
</div>

<style>
    .modal-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 99999;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
    }

    .modal-content {
        background: white;
        width: 95%;
        height: 95%;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .modal-header {
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e5e7eb;
    }

    .modal-body {
        flex: 1;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f9fafb;
        border-radius: 8px;
        padding: 20px;
    }

    .btn-secondary {
        background: white;
        border: 1px solid #d1d5db;
        color: #374151;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
    }
    
    .btn-secondary:hover {
        background: #f3f4f6;
    }
</style>

<script>
    function openFullscreen() {
        const outputDiv = document.getElementById('mermaid-output');
        const svg = outputDiv.querySelector('svg');
        if (!svg) return;
        
        const modal = document.getElementById('fullscreenModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = '';
        const clone = svg.cloneNode(true);
        
        // Reset dimensions for full scaling
        clone.style.width = '100%';
        clone.style.height = '100%';
        clone.style.maxWidth = 'none';
        clone.removeAttribute('height');
        clone.removeAttribute('width');
        
        modalBody.appendChild(clone);
        modal.style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('fullscreenModal').style.display = 'none';
    }

    function downloadSVG() {
        const svg = document.querySelector('#modalBody svg');
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(svgBlob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'clinical-flowchart.svg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }

    function downloadPNG() {
        const svg = document.querySelector('#modalBody svg');
        if (!svg) return;

        // Clone and prepare SVG for rendering
        const svgClone = svg.cloneNode(true);
        const svgData = new XMLSerializer().serializeToString(svgClone);
        
        // Get dimensions
        const viewBox = svg.viewBox.baseVal;
        const width = viewBox.width * 2; // 2x scale for high res
        const height = viewBox.height * 2;
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(svgBlob);
        
        img.onload = function() {
            try {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, width, height);
                
                const pngUrl = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = 'clinical-flowchart.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } catch (error) {
                console.error('PNG export failed:', error);
                alert('PNG export failed due to browser security restrictions. Please use "Download SVG" instead.');
            } finally {
                URL.revokeObjectURL(url);
            }
        };
        
        img.onerror = function() {
            alert('Failed to load image for PNG export. Please use "Download SVG" instead.');
            URL.revokeObjectURL(url);
        };
        
        img.src = url;
    }

    // Close on click outside
    document.getElementById('fullscreenModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Mode Switching
    window.switchMode = function(mode) {
        const aiMode = document.getElementById('aiMode');
        const manualMode = document.getElementById('manualMode');
        const aiModeBtn = document.getElementById('aiModeBtn');
        const manualModeBtn = document.getElementById('manualModeBtn');
        
        if (mode === 'ai') {
            aiMode.style.display = 'block';
            manualMode.style.display = 'none';
            aiModeBtn.classList.add('active');
            manualModeBtn.classList.remove('active');
        } else {
            aiMode.style.display = 'none';
            manualMode.style.display = 'block';
            aiModeBtn.classList.remove('active');
            manualModeBtn.classList.add('active');
        }
    }

    // Manual Code Rendering
    window.renderManualCode = function() {
        const code = document.getElementById('mermaidCode').value.trim();
        if (!code) return;
        
        const outputDiv = document.getElementById('mermaid-output');
        outputDiv.innerHTML = '';
        
        document.getElementById('fullscreenBtn').style.display = 'inline-flex';
        
        mermaid.render('graphDiv', code).then(result => {
            outputDiv.innerHTML = result.svg;
            const statusBar = document.getElementById('statusBar');
            statusBar.style.display = 'block';
            statusBar.textContent = 'Flowchart rendered successfully!';
            statusBar.style.background = '#f0fdf4';
            statusBar.style.color = '#166534';
            setTimeout(() => {
                statusBar.style.display = 'none';
                statusBar.style.background = '#f0f9ff';
                statusBar.style.color = '#0369a1';
            }, 2000);
        }).catch(error => {
            outputDiv.innerHTML = `<div style="color:red; padding: 20px;">
                <strong>Mermaid Syntax Error:</strong><br>
                ${error.message}<br><br>
                <a href="https://mermaid.js.org/syntax/flowchart.html" target="_blank" style="color: #2a7ae2;">View syntax guide →</a>
            </div>`;
        });
    }
</script>
