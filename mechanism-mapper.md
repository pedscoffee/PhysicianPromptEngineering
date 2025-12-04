---
layout: page
title: Pathophysiology Mechanism Mapper
description: Visualize complex disease mechanisms and drug actions with AI-generated diagrams.
permalink: /mechanism-mapper/
---

<style>
    .mapper-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-top: 20px;
        align-items: start;
    }

    @media (max-width: 1024px) {
        .mapper-container {
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
        min-height: 200px;
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

    #mermaid-output {
        text-align: center;
        overflow: auto;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
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
</style>

<!-- Mermaid JS -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
</script>

<div class="hero" style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 3rem 0; text-align: center; margin-bottom: 2rem; border-radius: 1rem;">
    <div class="container">
        <h1 class="hero-title" style="color: #991b1b; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Pathophysiology Mechanism Mapper
        </h1>
        <p class="hero-subtitle" style="color: #b91c1c; font-size: 1.1rem; max-width: 800px; margin: 0 auto;">
            Visualize disease processes, feedback loops, and drug mechanisms for education and explanation.
        </p>
    </div>
</div>

<div class="container">
    <div class="model-status" id="modelStatus">
        <strong>AI Model Status:</strong> Not Loaded. 
        <button id="loadModelBtn" class="copy-btn" style="margin-left: 10px; border-color: #fcd34d;">Load AI Model (~1GB)</button>
        <div id="progressContainer" style="margin-top: 10px; display: none;">
            <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                <div id="progressBar" style="background: #b91c1c; width: 0%; height: 100%; transition: width 0.3s;"></div>
            </div>
            <div id="progressText" style="font-size: 0.8em; margin-top: 4px; color: #666;">Initializing...</div>
        </div>
    </div>

    <div class="mapper-container">
        <!-- Input Panel -->
        <div class="input-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Mechanism Description</h3>
            <p style="font-size: 0.9em; color: #666; margin-bottom: 15px;">
                Describe the step-by-step mechanism or feedback loop.
            </p>
            <textarea id="inputLogic" placeholder="Example:
Heart Failure leads to reduced Cardiac Output.
This activates the Sympathetic Nervous System (SNS) and RAAS.
RAAS causes Sodium Retention and Vasoconstriction.
Vasoconstriction increases Afterload.
Sodium Retention increases Preload.
Increased Preload and Afterload worsen Heart Failure (Vicious Cycle)."></textarea>
            
            <button id="generateBtn" class="btn-primary" disabled>Generate Diagram</button>
            <div id="statusBar" style="margin-top: 15px; color: #666; font-size: 0.9em; display: none;"></div>
        </div>

        <!-- Output Panel -->
        <div class="output-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Mechanism Diagram</h3>
            <div id="mermaid-output">
                <div style="color: #999; font-style: italic;">
                    Diagram will appear here...
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
                "Gemma-2-2b-it-q4f16_1-MLC",
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
        statusBar.textContent = 'Mapping mechanism...';

        const systemPrompt = `You are an expert medical illustrator and physiologist.
        Your task is to take a text description of a mechanism and convert it into a Mermaid.js 'stateDiagram-v2' or 'graph TD'.
        
        Rules:
        1. Identify key entities (e.g., "Heart Failure", "RAAS").
        2. Identify relationships (e.g., "activates", "inhibits", "causes").
        3. Create a flowchart showing the flow.
        4. If there is a feedback loop, make sure the arrows connect back.
        5. Use simple labels.
        6. Output ONLY the mermaid code block.

        Example Output Format:
        \`\`\`mermaid
        graph TD
          HF[Heart Failure] -->|Reduces| CO[Cardiac Output]
          CO -->|Activates| SNS
          CO -->|Activates| RAAS
          RAAS -->|Causes| Na[Na+ Retention]
          RAAS -->|Causes| VC[Vasoconstriction]
          Na -->|Increases| Preload
          VC -->|Increases| Afterload
          Preload -->|Worsens| HF
          Afterload -->|Worsens| HF
        \`\`\`
        `;

        try {
            const response = await engine.chat.completions.create({
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: input }
                ],
                temperature: 0.2,
            });

            const content = response.choices[0].message.content;
            const mermaidMatch = content.match(/```mermaid\n([\s\S]*?)\n```/);
            
            if (mermaidMatch && mermaidMatch[1]) {
                renderMermaid(mermaidMatch[1]);
                statusBar.textContent = 'Generation complete!';
            } else {
                statusBar.textContent = 'Error parsing output. Raw output: ' + content.substring(0, 50) + '...';
            }
        } catch (error) {
            console.error(error);
            statusBar.textContent = 'Error: ' + error.message;
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Diagram';
        }
    });

    async function renderMermaid(code) {
        const outputDiv = document.getElementById('mermaid-output');
        outputDiv.innerHTML = ''; 
        
        try {
            const { svg } = await mermaid.render('mechanismDiv', code);
            outputDiv.innerHTML = svg;
        } catch (error) {
            outputDiv.innerHTML = `<div style="color:red">Mermaid Render Error: ${error.message}</div><pre>${code}</pre>`;
        }
    }
</script>
