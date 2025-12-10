---
layout: page
title: Clinical Flowchart Generator
description: Transform your clinical logic into visual and text-based flowcharts for better decision making and documentation.
permalink: /clinical-flowchart/
---



<!-- Mermaid JS -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
</script>

<div class="clinical-flowchart-wrapper">

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
    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; margin-bottom: 20px; border-radius: 6px;">
        <div style="display: flex; align-items: start; gap: 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <div>
                <strong style="color: #92400e; display: block; margin-bottom: 4px;">Educational Use Only</strong>
                <p style="color: #78350f; margin: 0; font-size: 0.9em;">
                    This tool is for educational and training purposes only. <strong>Do not input any patient health information (PHI)</strong> or other sensitive data. All processing occurs locally in your browser, but you are responsible for ensuring compliance with HIPAA and other privacy regulations.
                </p>
            </div>
        </div>
    </div>

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
            const mermaidCode = mermaidMatch[1];
            renderMermaid(mermaidCode);
            
            // Populate manual editor with generated code
            document.getElementById('mermaidCode').value = mermaidCode;
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
            <button class="btn-primary" style="width: auto;" onclick="downloadSVG()">Download SVG</button>
        </div>
        <div id="modalBody" class="modal-body"></div>
    </div>
</div>



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
        const statusBar = document.getElementById('statusBar');
        
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
            
            // Show tip if there's AI-generated code
            const manualCode = document.getElementById('mermaidCode').value;
            if (manualCode) {
                statusBar.style.display = 'block';
                statusBar.textContent = '💡 AI-generated code loaded! Edit and click "Render Flowchart" to update.';
                statusBar.style.background = '#f0f9ff';
                statusBar.style.color = '#0369a1';
                setTimeout(() => statusBar.style.display = 'none', 4000);
            }
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

{%- include software-2-banner.html -%}
