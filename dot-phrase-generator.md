---
layout: page
title: Dot Phrase Generator
description: AI-powered tool to generate reusable EMR dot phrases for clinical documentation
permalink: /dot-phrase-generator/
---

<style>
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: start;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .main-layout {
      grid-template-columns: 1fr;
    }
  }

  .panel {
    background: white;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .output-panel {
    position: sticky;
    top: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    min-height: 400px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 15px;
    font-family: inherit;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #2a7ae2;
    box-shadow: 0 0 0 3px rgba(42, 122, 226, 0.1);
  }

  .form-group textarea {
    min-height: 100px;
    resize: vertical;
    font-family: inherit;
  }

  .char-counter {
    font-size: 13px;
    color: #666;
    text-align: right;
    margin-top: 4px;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    text-decoration: none;
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
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(42, 122, 226, 0.3);
  }

  .btn-success {
    background: #28a745;
    color: white;
  }

  .btn-success:hover:not(:disabled) {
    background: #218838;
  }

  .btn-secondary {
    background: #6c757d;
    color: white;
  }

  .btn-secondary:hover:not(:disabled) {
    background: #5a6268;
  }

  .btn-sm {
    padding: 8px 16px;
    font-size: 14px;
  }

  .status-panel {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }

  .status-panel.ready {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  }

  .status-panel.error {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  }

  #status-message {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  #status-details {
    font-size: 14px;
    opacity: 0.9;
    margin-bottom: 15px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255,255,255,0.3);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .progress-fill {
    height: 100%;
    background: white;
    width: 0%;
    transition: width 0.3s ease;
  }

  .dot-phrase-suggestion {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    border: 2px solid #e9ecef;
    transition: all 0.3s ease;
  }

  .dot-phrase-suggestion:hover {
    border-color: #2a7ae2;
    box-shadow: 0 4px 12px rgba(42, 122, 226, 0.15);
  }

  .dot-phrase-suggestion h4 {
    margin-top: 0;
    color: #2a7ae2;
    font-size: 16px;
    margin-bottom: 12px;
  }

  .dot-phrase-content {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-bottom: 12px;
    border-left: 3px solid #2a7ae2;
  }

  .dot-phrase-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .info-box {
    background: #e7f3ff;
    border-left: 4px solid #2a7ae2;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .info-box h4 {
    margin-top: 0;
    color: #1e5bb8;
    font-size: 14px;
  }

  .info-box ul {
    margin: 8px 0 0 0;
    padding-left: 20px;
    font-size: 13px;
    line-height: 1.6;
  }

  .quick-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 12px;
    margin-bottom: 20px;
  }

  .example-btn {
    background: white;
    border: 2px solid #e9ecef;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    font-size: 13px;
  }

  .example-btn:hover {
    border-color: #2a7ae2;
    background: #f8f9fa;
  }

  .example-btn strong {
    display: block;
    color: #2a7ae2;
    margin-bottom: 4px;
  }

  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .wildcard {
    color: #dc3545;
    font-weight: bold;
  }

  .smartlist {
    color: #28a745;
    font-style: italic;
  }

  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #6c757d;
  }

  .empty-state svg {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    opacity: 0.3;
  }
</style>

<div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; max-width: 100%;">
  <h3 style="color: #78350f; margin-top: 0;">⚠️ Educational Tool - No PHI</h3>
  <p style="color: #78350f; margin-bottom: 0;">
    <strong>Do not use with real patient data.</strong> This tool is for educational purposes only and is NOT HIPAA-compliant. Create only fictional, synthesized examples for dot phrases.
  </p>
</div>

<div class="status-panel" id="status-panel">
  <div id="status-message">AI Model Not Loaded</div>
  <div id="status-details">Click the button below to initialize the AI model (~2GB download, one-time only)</div>
  <div class="progress-bar" style="display: none;">
    <div class="progress-fill" id="progress-fill"></div>
  </div>
  <button class="btn btn-primary" onclick="initializeModel()" id="init-btn">
    Initialize AI Model
  </button>
</div>

<div class="info-box">
  <h4>About Dot Phrase Generation</h4>
  <ul>
    <li><strong>Wildcards (***)</strong>: Placeholders for physicians to fill in patient-specific details</li>
    <li><strong>Smart Lists</strong>: Dropdown menus formatted as (option1, option2, option3) for quick selection</li>
    <li><strong>Best Practices</strong>: Short, reusable, professional sentences without patient identifiers</li>
    <li><strong>Focus Areas</strong>: Formatting, counseling, anticipatory guidance, and care instructions</li>
  </ul>
</div>

<div class="main-layout">
  <div class="panel">
    <h3 style="margin-top: 0;">Generate Dot Phrases</h3>

    <div class="form-group">
      <label for="topic-input">Topic / Clinical Scenario</label>
      <input
        type="text"
        id="topic-input"
        placeholder="e.g., Diabetes management, UTI treatment, Well-child visit"
      >
    </div>

    <div class="form-group">
      <label for="instructions-input">Instructions / Specific Requirements</label>
      <textarea
        id="instructions-input"
        placeholder="Describe what you want the dot phrase to include, the tone, specific elements to cover, etc."
      ></textarea>
      <div class="char-counter">
        <span id="char-count">0</span> characters
      </div>
    </div>

    <div class="form-group">
      <label for="focus-select">Primary Focus</label>
      <select id="focus-select">
        <option value="general">General Documentation</option>
        <option value="counseling">Patient Counseling</option>
        <option value="anticipatory">Anticipatory Guidance</option>
        <option value="care-instructions">Care Instructions</option>
        <option value="formatting">Clinical Formatting</option>
      </select>
    </div>

    <button
      class="btn btn-success"
      onclick="generateDotPhrases()"
      id="generate-btn"
      disabled
      style="width: 100%; margin-bottom: 20px;"
    >
      Generate 3 Dot Phrases
    </button>

    <h4 style="margin-top: 30px; margin-bottom: 15px;">Quick Examples</h4>
    <div class="quick-examples">
      <button class="example-btn" onclick="loadExample('diabetes')">
        <strong>Diabetes</strong>
        Management counseling
      </button>
      <button class="example-btn" onclick="loadExample('uti')">
        <strong>UTI Treatment</strong>
        Care instructions
      </button>
      <button class="example-btn" onclick="loadExample('wellchild')">
        <strong>Well-Child</strong>
        Anticipatory guidance
      </button>
      <button class="example-btn" onclick="loadExample('asthma')">
        <strong>Asthma</strong>
        Action plan
      </button>
    </div>
  </div>

  <div class="output-panel">
    <h3 style="margin-top: 0;">Generated Dot Phrases</h3>
    <div id="output-container">
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <p>Your generated dot phrases will appear here</p>
      </div>
    </div>
  </div>
</div>

<script type="module">
  import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

  // Global state
  let engine = null;
  const MODEL_ID = "Phi-3.5-mini-instruct-q4f16_1-MLC";
  let isGenerating = false;

  // System prompt for dot phrase generation
  const SYSTEM_PROMPT = `You are an expert medical documentation specialist who creates concise, professional EMR dot phrases.

CRITICAL REQUIREMENTS:
- Create exactly 3 different dot phrase suggestions
- Each phrase should be SHORT (1-4 sentences maximum)
- Use professional medical language without patient identifiers
- Focus on: formatting, counseling, anticipatory guidance, and care instructions
- Include *** wildcards SPARINGLY for user-fillable details (e.g., "*** medication" or "*** days")
- Include smart lists SPARINGLY using format: (option1, option2, option3) for dropdown menus
- Make phrases REUSABLE across different patients
- Keep tone professional and clinical

FORMAT YOUR RESPONSE EXACTLY LIKE THIS:

PHRASE 1:
[Your dot phrase text here]

PHRASE 2:
[Your dot phrase text here]

PHRASE 3:
[Your dot phrase text here]

Do NOT include shortcut codes, descriptions, or any other text. ONLY provide the three phrases in the exact format shown above.`;

  // Make functions globally available
  window.initializeModel = initializeModel;
  window.generateDotPhrases = generateDotPhrases;
  window.loadExample = loadExample;
  window.copyPhrase = copyPhrase;
  window.saveToSnippets = saveToSnippets;

  // Character counter
  const instructionsInput = document.getElementById('instructions-input');
  const charCount = document.getElementById('char-count');

  instructionsInput.addEventListener('input', () => {
    charCount.textContent = instructionsInput.value.length;
  });

  async function initializeModel() {
    const statusPanel = document.getElementById('status-panel');
    const statusMessage = document.getElementById('status-message');
    const statusDetails = document.getElementById('status-details');
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const initBtn = document.getElementById('init-btn');
    const generateBtn = document.getElementById('generate-btn');

    initBtn.disabled = true;
    statusMessage.innerHTML = '<span class="loading-spinner"></span> Initializing AI Model...';
    statusDetails.textContent = 'This may take a few minutes on first load...';
    progressBar.style.display = 'block';

    try {
      engine = await CreateMLCEngine(MODEL_ID, {
        initProgressCallback: (progress) => {
          const percent = Math.round(progress.progress * 100);
          progressFill.style.width = percent + '%';
          statusDetails.textContent = progress.text || `Loading: ${percent}%`;
        }
      });

      statusPanel.classList.add('ready');
      statusMessage.textContent = '✓ AI Model Ready';
      statusDetails.textContent = 'You can now generate dot phrases!';
      progressBar.style.display = 'none';
      initBtn.style.display = 'none';
      generateBtn.disabled = false;
    } catch (error) {
      console.error('Model initialization error:', error);
      statusPanel.classList.add('error');
      statusMessage.textContent = '✗ Initialization Failed';
      statusDetails.textContent = error.message || 'Please try again or check browser compatibility.';
      initBtn.disabled = false;
      initBtn.textContent = 'Retry Initialization';
    }
  }

  async function generateDotPhrases() {
    if (!engine || isGenerating) return;

    const topic = document.getElementById('topic-input').value.trim();
    const instructions = document.getElementById('instructions-input').value.trim();
    const focus = document.getElementById('focus-select').value;
    const generateBtn = document.getElementById('generate-btn');
    const outputContainer = document.getElementById('output-container');

    if (!topic) {
      alert('Please enter a topic or clinical scenario.');
      return;
    }

    // Prepare user message
    let userMessage = `Topic: ${topic}\n`;
    if (instructions) {
      userMessage += `Instructions: ${instructions}\n`;
    }

    const focusDescriptions = {
      'general': 'general clinical documentation',
      'counseling': 'patient counseling and education',
      'anticipatory': 'anticipatory guidance',
      'care-instructions': 'care instructions and patient directions',
      'formatting': 'clinical formatting and structure'
    };

    userMessage += `Primary Focus: ${focusDescriptions[focus]}\n\n`;
    userMessage += `Generate 3 different professional dot phrases for this scenario.`;

    // Update UI
    isGenerating = true;
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<span class="loading-spinner"></span> Generating...';
    outputContainer.innerHTML = '<div class="empty-state"><p>Generating your dot phrases...</p></div>';

    try {
      // Stream the response
      let fullResponse = '';
      const response = await engine.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 1500,
        stream: true
      });

      for await (const chunk of response) {
        const delta = chunk.choices[0]?.delta?.content || '';
        fullResponse += delta;
      }

      // Parse and display the phrases
      displayPhrases(fullResponse, topic);

    } catch (error) {
      console.error('Generation error:', error);
      outputContainer.innerHTML = `
        <div class="empty-state">
          <p style="color: #dc3545;">Error generating dot phrases: ${error.message}</p>
          <button class="btn btn-secondary btn-sm" onclick="generateDotPhrases()">Try Again</button>
        </div>
      `;
    } finally {
      isGenerating = false;
      generateBtn.disabled = false;
      generateBtn.textContent = 'Generate 3 Dot Phrases';
    }
  }

  function displayPhrases(responseText, topic) {
    const outputContainer = document.getElementById('output-container');

    // Parse the response to extract phrases
    const phrases = [];
    const phraseMatches = responseText.matchAll(/PHRASE \d+:\s*\n([\s\S]*?)(?=PHRASE \d+:|$)/gi);

    for (const match of phraseMatches) {
      let phrase = match[1].trim();
      if (phrase) {
        phrases.push(phrase);
      }
    }

    // Fallback: if structured parsing fails, try to split by newlines
    if (phrases.length === 0) {
      const lines = responseText.split('\n').filter(line => {
        line = line.trim();
        return line &&
               !line.startsWith('PHRASE') &&
               !line.startsWith('#') &&
               line.length > 20;
      });
      phrases.push(...lines.slice(0, 3));
    }

    if (phrases.length === 0) {
      outputContainer.innerHTML = `
        <div class="empty-state">
          <p style="color: #dc3545;">Unable to parse generated phrases. Please try again.</p>
          <button class="btn btn-secondary btn-sm" onclick="generateDotPhrases()">Try Again</button>
        </div>
      `;
      return;
    }

    // Display the phrases
    let html = '';
    phrases.slice(0, 3).forEach((phrase, index) => {
      // Highlight wildcards and smart lists
      let highlightedPhrase = phrase
        .replace(/\*\*\*/g, '<span class="wildcard">***</span>')
        .replace(/\([^)]+(?:,\s*[^)]+)+\)/g, match => `<span class="smartlist">${match}</span>`);

      html += `
        <div class="dot-phrase-suggestion">
          <h4>Suggestion ${index + 1}</h4>
          <div class="dot-phrase-content">${highlightedPhrase}</div>
          <div class="dot-phrase-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPhrase(${index})">
              Copy to Clipboard
            </button>
            <button class="btn btn-secondary btn-sm" onclick="saveToSnippets(${index})">
              Save to Snippets
            </button>
          </div>
        </div>
      `;
    });

    outputContainer.innerHTML = html;

    // Store phrases in global variable for copy/save functions
    window.currentPhrases = phrases.slice(0, 3);
    window.currentTopic = topic;
  }

  function copyPhrase(index) {
    const phrase = window.currentPhrases[index];
    if (!phrase) return;

    navigator.clipboard.writeText(phrase).then(() => {
      // Visual feedback
      const btn = event.target;
      const originalText = btn.textContent;
      btn.textContent = '✓ Copied!';
      btn.style.background = '#28a745';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);
    }).catch(err => {
      console.error('Copy failed:', err);
      alert('Failed to copy to clipboard');
    });
  }

  function saveToSnippets(index) {
    const phrase = window.currentPhrases[index];
    const topic = window.currentTopic || 'Dot Phrase';

    if (!phrase) return;

    try {
      // Get existing snippets from localStorage
      const snippetsData = localStorage.getItem('snippetsData');
      let snippets = snippetsData ? JSON.parse(snippetsData) : [];

      // Create new snippet
      const newSnippet = {
        id: Date.now().toString(),
        title: `${topic} - Phrase ${index + 1}`,
        version: '1.0',
        tags: ['dot-phrase', topic.toLowerCase().replace(/\s+/g, '-')],
        prompt: phrase,
        created: new Date().toISOString()
      };

      snippets.push(newSnippet);
      localStorage.setItem('snippetsData', JSON.stringify(snippets));

      // Visual feedback
      const btn = event.target;
      const originalText = btn.textContent;
      btn.textContent = '✓ Saved!';
      btn.style.background = '#28a745';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2000);

      console.log('Saved to snippets:', newSnippet);
    } catch (error) {
      console.error('Error saving to snippets:', error);
      alert('Failed to save to snippets: ' + error.message);
    }
  }

  function loadExample(type) {
    const examples = {
      diabetes: {
        topic: 'Diabetes Management Counseling',
        instructions: 'Create counseling phrases for newly diagnosed type 2 diabetes, focusing on lifestyle modifications and monitoring',
        focus: 'counseling'
      },
      uti: {
        topic: 'Urinary Tract Infection Treatment',
        instructions: 'Patient care instructions for uncomplicated UTI, including medication compliance and follow-up',
        focus: 'care-instructions'
      },
      wellchild: {
        topic: 'Well-Child Visit 12-Month',
        instructions: 'Anticipatory guidance for parents of 12-month-old, covering development, safety, and nutrition',
        focus: 'anticipatory'
      },
      asthma: {
        topic: 'Asthma Action Plan',
        instructions: 'Brief asthma management instructions with zones for symptom control',
        focus: 'care-instructions'
      }
    };

    const example = examples[type];
    if (example) {
      document.getElementById('topic-input').value = example.topic;
      document.getElementById('instructions-input').value = example.instructions;
      document.getElementById('focus-select').value = example.focus;

      // Update character counter
      charCount.textContent = example.instructions.length;
    }
  }
</script>
