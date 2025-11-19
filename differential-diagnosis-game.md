---
layout: default
title: Doc Pixel's DDX Challenge
permalink: /diagnosis-game/
---

<style>
/* ============================================
   DOC PIXEL'S DDX CHALLENGE STYLING
   Inspired by classic games like Mario and Baba is You
   ============================================ */

/* Force dark mode styling for this page only */
body {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
}

.page-content {
  background-color: #0d1117 !important;
}

.game-container {
  background-color: #0d1117;
  color: #c9d1d9;
}

.game-container p,
.game-container div,
.game-container span,
.game-container label {
  color: #c9d1d9;
}

:root {
  --pixel-size: 4px;
  --game-bg: #87CEEB;
  --ground-color: #8B7355;
  --ui-bg: #2C1810;
  --ui-border: #D4A76A;
  --text-color: #FFFFFF;
  --health-green: #00FF00;
  --health-yellow: #FFFF00;
  --health-red: #FF0000;
  --patient-base: #FFD1A3;
  --doctor-coat: #E0F7FA;
}

/* Container */
.game-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: 'Courier New', monospace;
}

/* Header */
.game-header {
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  border-radius: 0;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.game-header h1 {
  color: var(--text-color);
  text-align: center;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
}

.game-header p {
  color: #D4A76A;
  text-align: center;
  margin: 0;
  font-size: 1rem;
}

/* Progress Bar */
.progress-container {
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.progress-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 0.5rem;
}

.progress-level {
  flex: 1;
  height: 24px;
  background: #333;
  border: 2px solid #666;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
}

.progress-level:hover {
  border-color: #FFD700;
}

.progress-level.completed {
  background: linear-gradient(to bottom, #4CAF50 0%, #2E7D32 100%);
  border-color: #81C784;
}

.progress-level.current {
  background: linear-gradient(to bottom, #2196F3 0%, #1565C0 100%);
  border-color: #64B5F6;
  animation: pulse 1.5s infinite;
}

.progress-level.locked {
  background: #222;
  border-color: #444;
  opacity: 0.5;
  cursor: not-allowed;
}

.progress-level-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
}

.progress-info {
  color: var(--text-color);
  text-align: center;
  font-size: 0.9rem;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Game Banner */
.game-banner {
  width: 100%;
  margin-bottom: 2rem;
  border: 4px solid var(--ui-border);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 8px;
}

.game-banner img {
  width: 100%;
  height: auto;
  display: block;
}

/* Case Panel */
.case-panel {
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.case-panel h2 {
  color: #FFD700;
  margin-top: 0;
  font-size: 1.5rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
}

.case-panel h3 {
  color: #FFA500;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.case-panel p, .case-panel ul {
  color: var(--text-color);
  line-height: 1.6;
}

.case-panel ul {
  list-style: none;
  padding-left: 0;
}

.case-panel li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.case-panel li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #FFD700;
}

.vital-signs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.vital-sign {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border: 2px solid rgba(255, 215, 0, 0.3);
}

/* Input Section */
.input-section {
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.input-section h2 {
  color: #FFD700;
  margin-top: 0;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  color: #FFA500;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.input-group textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.75rem;
  background: #1a1a1a;
  border: 3px solid #666;
  color: var(--text-color);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  resize: vertical;
  box-sizing: border-box;
}

.input-group textarea:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.input-hint {
  color: #999;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-style: italic;
}

/* Buttons */
.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.pixel-button {
  background: linear-gradient(to bottom, #4CAF50 0%, #2E7D32 100%);
  color: white;
  border: 4px solid #81C784;
  padding: 1rem 2rem;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.1s;
  position: relative;
  image-rendering: pixelated;
}

.pixel-button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);
}

.pixel-button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
}

.pixel-button:disabled {
  background: linear-gradient(to bottom, #666 0%, #444 100%);
  border-color: #888;
  cursor: not-allowed;
  opacity: 0.6;
}

.pixel-button.secondary {
  background: linear-gradient(to bottom, #2196F3 0%, #1565C0 100%);
  border-color: #64B5F6;
}

.pixel-button.danger {
  background: linear-gradient(to bottom, #F44336 0%, #C62828 100%);
  border-color: #E57373;
}

/* Results Panel */
.results-panel {
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
  display: none;
}

.results-panel.show {
  display: block;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.score-display {
  text-align: center;
  margin-bottom: 2rem;
}

.score-number {
  font-size: 4rem;
  font-weight: bold;
  color: #FFD700;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
  display: block;
  margin-bottom: 0.5rem;
}

.score-label {
  color: var(--text-color);
  font-size: 1.2rem;
}

.score-rank {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 3px solid;
  border-radius: 0;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.score-rank.excellent {
  background: #4CAF50;
  color: white;
  border-color: #81C784;
}

.score-rank.good {
  background: #2196F3;
  color: white;
  border-color: #64B5F6;
}

.score-rank.fair {
  background: #FF9800;
  color: white;
  border-color: #FFB74D;
}

.score-rank.poor {
  background: #F44336;
  color: white;
  border-color: #E57373;
}

.feedback-section {
  margin-bottom: 1.5rem;
}

.feedback-section h3 {
  color: #FFD700;
  margin-bottom: 0.75rem;
}

.feedback-section p, .feedback-section ul {
  color: var(--text-color);
  line-height: 1.6;
}

.feedback-section ul {
  list-style: none;
  padding-left: 0;
}

.feedback-section li {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid;
}

.feedback-section li.correct {
  border-color: #4CAF50;
}

.feedback-section li.partial {
  border-color: #FF9800;
}

.feedback-section li.missing {
  border-color: #F44336;
}

/* Patient Reaction */
.patient-reaction {
  text-align: center;
  font-size: 3rem;
  padding: 2rem;
  animation: reactionPop 0.5s ease-out;
}

@keyframes reactionPop {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Loading Screen */
.loading-screen {
  text-align: center;
  padding: 3rem;
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  margin: 2rem 0;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.loading-text {
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.loading-bar {
  width: 100%;
  height: 30px;
  background: #333;
  border: 3px solid #666;
  position: relative;
  overflow: hidden;
}

.loading-fill {
  height: 100%;
  background: linear-gradient(to right, #4CAF50, #FFD700, #4CAF50);
  background-size: 200% 100%;
  animation: loadingProgress 2s linear infinite;
}

@keyframes loadingProgress {
  0% { background-position: 0% 0%; width: 0%; }
  50% { width: 100%; }
  100% { background-position: 200% 0%; width: 100%; }
}

/* AI Status */
.ai-status {
  background: rgba(33, 150, 243, 0.2);
  border: 2px solid #2196F3;
  padding: 1rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  display: none;
}

.ai-status.show {
  display: block;
}

/* Instructions */
.instructions {
  background: rgba(255, 152, 0, 0.1);
  border: 3px solid #FF9800;
  padding: 1rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.instructions h3 {
  color: #FFD700;
  margin-top: 0;
}

/* Hidden */
.hidden {
  display: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .game-header h1 {
    font-size: 1.5rem;
  }

  .score-number {
    font-size: 3rem;
  }

  .progress-level-number {
    font-size: 0.75rem;
  }

    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

/* Model Selector Styles */
.model-selector-container {
  margin-bottom: 2rem;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: var(--ui-bg);
  border: 4px solid var(--ui-border);
  padding: 1rem;
}

.model-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border: 2px solid #444;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.05);
}

.model-option:hover {
  border-color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.model-option input[type="radio"] {
  margin-top: 4px;
  accent-color: #FFD700;
}

.model-info strong {
  color: #FFD700;
  display: block;
  margin-bottom: 4px;
}

.model-info span {
  color: #c9d1d9;
  font-size: 0.9em;
}
</style>

<div class="game-container">
  <!-- Header -->
  <div class="game-header">
    <h1>DOC PIXEL'S DDX CHALLENGE</h1>
    <p>Test your clinical reasoning skills!</p>
  </div>

  <!-- Instructions -->
  <div class="instructions">
    <h3>How to Play</h3>
    <p>
      You're a doctor seeing patients in the clinic. For each case, you'll review the patient's
      symptoms and physical exam findings. Your job is to write a differential diagnosis and
      recommend appropriate next steps (labs, imaging, treatment). The AI will evaluate your
      answer and give you feedback. All levels are unlocked - play any case you want!
    </p>
    <p><strong>Passing Score:</strong> Get at least 3 key items correct to pass!</p>
  </div>

  <!-- AI Status -->
  <div class="ai-status" id="aiStatus">
    <strong>AI Loading:</strong> <span id="aiStatusText">Initializing medical AI...</span>
  </div>

  <!-- Progress Bar -->
  <div class="progress-container">
    <div class="progress-bar" id="progressBar">
      <!-- Progress levels will be inserted here -->
    </div>
    <div class="progress-info" id="progressInfo">
      Level 1 of 6 | Score: 0%
    </div>
  </div>

  <!-- Game Banner -->
  <div class="game-banner">
    <img src="{{ '/images/gamehero.jpg' | relative_url }}" alt="Differential Diagnosis Game">
  </div>

  <!-- Case Information Panel -->
  <div class="case-panel hidden" id="casePanel">
    <h2 id="caseTitle">Case Information</h2>

    <h3>Patient Information</h3>
    <p id="patientInfo"></p>

    <h3>Chief Complaint</h3>
    <p id="chiefComplaint"></p>

    <h3>Symptoms</h3>
    <ul id="symptomsList"></ul>

    <h3>Physical Examination</h3>
    <div id="physicalExam">
      <h4 style="color: #FFD700; margin-top: 1rem;">Vital Signs:</h4>
      <div class="vital-signs" id="vitalSigns"></div>
      <h4 style="color: #FFD700; margin-top: 1rem;">Examination Findings:</h4>
      <ul id="examFindings"></ul>
    </div>
  </div>

  <!-- Input Section -->
  <div class="input-section hidden" id="inputSection">
    <h2>Your Medical Assessment</h2>

    <div class="input-group">
      <label for="differentialInput">
        1. Differential Diagnosis
      </label>
      <textarea
        id="differentialInput"
        placeholder="List your differential diagnoses (most likely first)...&#10;&#10;Example:&#10;1. Acute coronary syndrome&#10;2. Pulmonary embolism&#10;3. Aortic dissection"></textarea>
      <div class="input-hint">List at least 3 potential diagnoses in order of likelihood</div>
    </div>

    <div class="input-group">
      <label for="labsInput">
        2. Laboratory Tests
      </label>
      <textarea
        id="labsInput"
        placeholder="List laboratory tests you would order...&#10;&#10;Example:&#10;- Troponin&#10;- CBC&#10;- BMP"></textarea>
      <div class="input-hint">What labs would help confirm or rule out your differential?</div>
    </div>

    <div class="input-group">
      <label for="imagingInput">
        3. Imaging Studies
      </label>
      <textarea
        id="imagingInput"
        placeholder="List imaging studies you would order...&#10;&#10;Example:&#10;- Chest X-ray&#10;- ECG&#10;- CT angiography"></textarea>
      <div class="input-hint">What imaging is appropriate for this case?</div>
    </div>

    <div class="input-group">
      <label for="treatmentInput">
        4. Initial Treatment/Management
      </label>
      <textarea
        id="treatmentInput"
        placeholder="Describe your immediate management plan...&#10;&#10;Example:&#10;- Aspirin 325mg&#10;- Oxygen supplementation&#10;- IV access&#10;- Cardiology consult"></textarea>
      <div class="input-hint">What would you do right now to help this patient?</div>
    </div>

    <div class="button-group">
      <button class="pixel-button" id="submitBtn" onclick="submitAnswer()">
        Submit Assessment
      </button>
      <button class="pixel-button secondary" id="hintBtn" onclick="showHint()">
        Hint
      </button>
    </div>
  </div>

  <!-- Results Panel -->
  <div class="results-panel" id="resultsPanel">
    <div class="patient-reaction" id="patientReaction">
      <!-- Reaction will be inserted here -->
    </div>

    <div class="score-display">
      <span class="score-number" id="scoreNumber">0</span>
      <div class="score-label">Your Score</div>
      <div class="score-rank" id="scoreRank">Evaluating...</div>
    </div>

    <div class="feedback-section">
      <h3>Detailed Feedback</h3>
      <div id="feedbackContent"></div>
    </div>

    <div class="feedback-section">
      <h3>Learning Points</h3>
      <div id="learningPoints"></div>
    </div>

    <div class="button-group">
      <button class="pixel-button" id="nextLevelBtn" onclick="nextLevel()" style="display: none;">
        Next Level
      </button>
      <button class="pixel-button secondary" id="retryBtn" onclick="retryLevel()">
        Try Again
      </button>
      <button class="pixel-button danger" id="viewAnswerBtn" onclick="viewAnswer()">
        View Answer
      </button>
    </div>
  </div>

  <!-- Start Button -->
  <div class="button-group" id="startSection" style="flex-direction: column; align-items: center;">
    <div class="model-selector-container">
        <h3 style="color: #FFD700; margin-top: 0; margin-bottom: 1rem; text-align: center;">Select AI Model</h3>
        <label class="model-option">
            <input type="radio" name="model-choice" value="thinking">
            <div class="model-info">
                <strong>Thinking (Phi-3.5 Mini)</strong>
                <span>Higher quality reasoning. Best for complex cases. (~2.2GB)</span>
            </div>
        </label>
        <label class="model-option">
            <input type="radio" name="model-choice" value="fast" checked>
            <div class="model-info">
                <strong>Fast (Llama 3.2 1B)</strong>
                <span>Lightning fast speed. Good for older devices. (~870MB)</span>
            </div>
        </label>
    </div>

    <button class="pixel-button" onclick="startGame()">
      Start Game
    </button>
  </div>

  <!-- Loading Screen -->
  <div class="loading-screen hidden" id="loadingScreen">
    <div class="loading-text" id="loadingText">Evaluating your assessment...</div>
    <div class="loading-bar">
      <div class="loading-fill"></div>
    </div>
  </div>
</div>

<script>
// ============================================
// GAME STATE AND DATA
// ============================================

let gameState = {
  currentLevel: 0,
  completedLevels: [],
  scores: [],
  llm: null,
  llmLoaded: false,
  cases: []
};

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

// ============================================
// LOAD CASE DATA FROM YAML
// ============================================

async function loadCases() {
  try {
    // The Jekyll site will render this data for us
    const casesData = {{ site.data.diagnosis_cases | jsonify }};

    // Convert to array and sort by level
    gameState.cases = Object.values(casesData).sort((a, b) => a.level - b.level);

    console.log('Loaded cases:', gameState.cases.length);
    return true;
  } catch (error) {
    console.error('Error loading cases:', error);
    return false;
  }
}

// ============================================
// LLM INITIALIZATION
// ============================================

async function initializeLLM() {
  if (gameState.llmLoaded) return true;

  const statusEl = document.getElementById('aiStatus');
  const statusTextEl = document.getElementById('aiStatusText');
  statusEl.classList.add('show');

  try {
    statusTextEl.textContent = 'Loading AI model (this may take a minute on first load)...';

    // Import MLC Web LLM
    const { CreateMLCEngine } = await import('https://esm.run/@mlc-ai/web-llm');

    // Get selected model
    const selectedValue = document.querySelector('input[name="model-choice"]:checked').value;
    const selectedModel = MODELS[selectedValue];
    
    console.log("Initializing model:", selectedModel.name);

    // Initialize the engine with progress callback
    gameState.llm = await CreateMLCEngine(selectedModel.id, {
      initProgressCallback: (progress) => {
        const percent = Math.round(progress.progress * 100);
        statusTextEl.textContent = `Loading AI model: ${percent}% - ${progress.text || ''}`;
      }
    });

    gameState.llmLoaded = true;
    statusTextEl.textContent = '✅ AI Ready!';

    setTimeout(() => {
      statusEl.classList.remove('show');
    }, 2000);

    console.log('LLM initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing LLM:', error);
    statusTextEl.textContent = '❌ AI failed to load. You can still play but scoring will be limited.';
    return false;
  }
}

// ============================================
// GAME INITIALIZATION
// ============================================

async function startGame() {
  document.getElementById('startSection').classList.add('hidden');

  // Load cases
  await loadCases();

  // Initialize progress bar
  renderProgressBar();

  // Load first level
  loadLevel(0);

  // Initialize LLM in background
  initializeLLM();
}

// ============================================
// PROGRESS BAR
// ============================================

function renderProgressBar() {
  const progressBar = document.getElementById('progressBar');
  progressBar.innerHTML = '';

  gameState.cases.forEach((caseData, index) => {
    const levelDiv = document.createElement('div');
    levelDiv.className = 'progress-level';

    if (gameState.completedLevels.includes(index)) {
      levelDiv.classList.add('completed');
    } else if (index === gameState.currentLevel) {
      levelDiv.classList.add('current');
    }
    // All levels are unlocked - no locked state!

    levelDiv.innerHTML = `<div class="progress-level-number">${index + 1}</div>`;
    levelDiv.onclick = () => {
      // Allow clicking any level
      loadLevel(index);
    };

    progressBar.appendChild(levelDiv);
  });

  updateProgressInfo();
}

function updateProgressInfo() {
  const progressInfo = document.getElementById('progressInfo');
  const currentScore = gameState.scores[gameState.currentLevel] || 0;
  progressInfo.textContent = `Level ${gameState.currentLevel + 1} of ${gameState.cases.length} | Best Score: ${currentScore}%`;
}

// ============================================
// LOAD LEVEL
// ============================================

function loadLevel(levelIndex) {
  gameState.currentLevel = levelIndex;
  const caseData = gameState.cases[levelIndex];

  if (!caseData) {
    alert('Case not found!');
    return;
  }

  // Update progress bar
  renderProgressBar();

  // Hide results
  document.getElementById('resultsPanel').classList.remove('show');

  // Show case and input sections
  document.getElementById('casePanel').classList.remove('hidden');
  document.getElementById('inputSection').classList.remove('hidden');

  // Clear inputs
  document.getElementById('differentialInput').value = '';
  document.getElementById('labsInput').value = '';
  document.getElementById('imagingInput').value = '';
  document.getElementById('treatmentInput').value = '';

  // Update case information
  document.getElementById('caseTitle').textContent = caseData.title;

  document.getElementById('patientInfo').textContent =
    `${caseData.patient.name}, ${caseData.patient.age}-year-old ${caseData.patient.gender}`;

  document.getElementById('chiefComplaint').textContent = caseData.chief_complaint;

  // Symptoms
  const symptomsList = document.getElementById('symptomsList');
  symptomsList.innerHTML = '';
  caseData.symptoms.forEach(symptom => {
    const li = document.createElement('li');
    li.textContent = symptom;
    symptomsList.appendChild(li);
  });

  // Vital signs
  const vitalSigns = document.getElementById('vitalSigns');
  vitalSigns.innerHTML = '';
  caseData.physical_exam.vital_signs.forEach(vital => {
    const div = document.createElement('div');
    div.className = 'vital-sign';
    div.textContent = vital;
    vitalSigns.appendChild(div);
  });

  // Exam findings
  const examFindings = document.getElementById('examFindings');
  examFindings.innerHTML = '';
  caseData.physical_exam.findings.forEach(finding => {
    const li = document.createElement('li');
    li.textContent = finding;
    examFindings.appendChild(li);
  });

  // Scroll to case
  document.getElementById('casePanel').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// SUBMIT ANSWER
// ============================================

async function submitAnswer() {
  const differential = document.getElementById('differentialInput').value.trim();
  const labs = document.getElementById('labsInput').value.trim();
  const imaging = document.getElementById('imagingInput').value.trim();
  const treatment = document.getElementById('treatmentInput').value.trim();

  // Validation
  if (!differential || !labs || !imaging || !treatment) {
    alert('Please fill in all fields before submitting!');
    return;
  }

  // Show loading
  document.getElementById('loadingScreen').classList.remove('hidden');
  document.getElementById('inputSection').classList.add('hidden');

  // Evaluate answer
  const result = await evaluateAnswer(differential, labs, imaging, treatment);

  // Hide loading
  document.getElementById('loadingScreen').classList.add('hidden');

  // Show results
  showResults(result);
}

// ============================================
// EVALUATE ANSWER WITH LLM
// ============================================

async function evaluateAnswer(differential, labs, imaging, treatment) {
  const caseData = gameState.cases[gameState.currentLevel];

  // Build evaluation prompt
  const prompt = `You are a supportive medical educator evaluating a medical student's response to a clinical case.

CASE: ${caseData.title}
Chief Complaint: ${caseData.chief_complaint}

STUDENT'S ANSWER:
Differential Diagnosis: ${differential}
Labs: ${labs}
Imaging: ${imaging}
Treatment: ${treatment}

EXPECTED ANSWERS:
Differential: ${caseData.expected_differential.join(', ')}
Critical Diagnoses to Include: ${caseData.scoring_notes.critical_diagnoses.join(', ')}
Critical Actions: ${caseData.scoring_notes.critical_actions.join(', ')}
Expected Labs: ${Object.values(caseData.expected_next_steps.labs || []).join(', ')}
Expected Imaging: ${Object.values(caseData.expected_next_steps.imaging || []).join(', ')}
Expected Treatment: ${Object.values(caseData.expected_next_steps.immediate || []).concat(Object.values(caseData.expected_next_steps.treatment || [])).join(', ')}

EVALUATE THE STUDENT'S ANSWER:
1. Count how many KEY ITEMS they got correct:
   - Each critical diagnosis identified = 1 point
   - Each critical action included = 1 point
   - Other correct diagnoses/actions = 0.5 points

2. Calculate percentage score based on items correct out of total key items

3. The student PASSES if they get 3 or more key items correct!

4. Provide specific, encouraging feedback on what they got right and what they missed.

5. List any dangerous omissions or errors.

Format your response EXACTLY as follows:
SCORE: [number 0-100]
CORRECT: [list what they got right]
MISSING: [list critical items they missed]
ERRORS: [list any dangerous mistakes or inappropriate choices]
FEEDBACK: [2-3 sentences of constructive, encouraging feedback]`;

  try {
    if (gameState.llmLoaded && gameState.llm) {
      // Use LLM for evaluation
      const response = await gameState.llm.chat.completions.create({
        messages: [
          { role: "system", content: "You are a thorough medical educator who provides detailed, constructive feedback." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 1024
      });

      const evaluation = response.choices[0].message.content;
      return parseLLMEvaluation(evaluation, caseData);
    } else {
      // Fallback to rule-based evaluation
      return ruleBasedEvaluation(differential, labs, imaging, treatment, caseData);
    }
  } catch (error) {
    console.error('Error in evaluation:', error);
    return ruleBasedEvaluation(differential, labs, imaging, treatment, caseData);
  }
}

// ============================================
// PARSE LLM EVALUATION
// ============================================

function parseLLMEvaluation(evaluation, caseData) {
  const scoreMatch = evaluation.match(/SCORE:\s*(\d+)/i);
  const correctMatch = evaluation.match(/CORRECT:\s*([^\n]+(?:\n(?!MISSING:|ERRORS:|FEEDBACK:)[^\n]+)*)/i);
  const missingMatch = evaluation.match(/MISSING:\s*([^\n]+(?:\n(?!CORRECT:|ERRORS:|FEEDBACK:)[^\n]+)*)/i);
  const errorsMatch = evaluation.match(/ERRORS:\s*([^\n]+(?:\n(?!CORRECT:|MISSING:|FEEDBACK:)[^\n]+)*)/i);
  const feedbackMatch = evaluation.match(/FEEDBACK:\s*([^\n]+(?:\n(?!CORRECT:|MISSING:|ERRORS:)[^\n]+)*)/i);

  return {
    score: scoreMatch ? parseInt(scoreMatch[1]) : 50,
    correct: correctMatch ? correctMatch[1].trim() : 'Some correct elements identified',
    missing: missingMatch ? missingMatch[1].trim() : 'Review expected answers',
    errors: errorsMatch ? errorsMatch[1].trim() : 'None identified',
    feedback: feedbackMatch ? feedbackMatch[1].trim() : 'Keep practicing!',
    educationalNotes: caseData.educational_notes
  };
}

// ============================================
// RULE-BASED EVALUATION (FALLBACK)
// ============================================

function ruleBasedEvaluation(differential, labs, imaging, treatment, caseData) {
  let correctCount = 0;
  const feedback = {
    correct: [],
    missing: [],
    errors: []
  };

  // Normalize inputs for comparison
  const diffLower = differential.toLowerCase();
  const labsLower = labs.toLowerCase();
  const imagingLower = imaging.toLowerCase();
  const treatmentLower = treatment.toLowerCase();

  // Check differential diagnosis - count each correct diagnosis
  caseData.scoring_notes.critical_diagnoses.forEach(diagnosis => {
    if (diffLower.includes(diagnosis.toLowerCase())) {
      correctCount++;
      feedback.correct.push(`Included critical diagnosis: ${diagnosis}`);
    } else {
      feedback.missing.push(`Missed critical diagnosis: ${diagnosis}`);
    }
  });

  // Bonus for other correct differentials
  caseData.expected_differential.forEach(diagnosis => {
    if (diffLower.includes(diagnosis.toLowerCase()) &&
        !caseData.scoring_notes.critical_diagnoses.some(cd => cd.toLowerCase() === diagnosis.toLowerCase())) {
      correctCount += 0.5; // Half point for non-critical but correct diagnoses
      feedback.correct.push(`Good differential: ${diagnosis}`);
    }
  });

  // Check critical actions in labs/imaging/treatment - count each correct action
  caseData.scoring_notes.critical_actions.forEach(action => {
    const actionLower = action.toLowerCase();
    if (labsLower.includes(actionLower) ||
        imagingLower.includes(actionLower) ||
        treatmentLower.includes(actionLower)) {
      correctCount++;
      feedback.correct.push(`Critical action included: ${action}`);
    } else {
      feedback.missing.push(`Missing critical action: ${action}`);
    }
  });

  // Check for common pitfalls
  if (caseData.scoring_notes.common_pitfalls) {
    caseData.scoring_notes.common_pitfalls.forEach(pitfall => {
      feedback.errors.push(`Common pitfall to avoid: ${pitfall}`);
    });
  }

  // Calculate score out of 100 based on correct count
  // If they get 3+ items correct, they pass (score >= 50)
  const totalPossible = caseData.scoring_notes.critical_diagnoses.length +
                       caseData.scoring_notes.critical_actions.length;
  const scorePercentage = Math.min(Math.round((correctCount / totalPossible) * 100), 100);

  return {
    score: scorePercentage,
    correctCount: Math.floor(correctCount),
    correct: feedback.correct.join('\n'),
    missing: feedback.missing.join('\n'),
    errors: feedback.errors.join('\n'),
    feedback: correctCount >= 3 ?
      `Great work! You got ${Math.floor(correctCount)} key items correct!` :
      `You got ${Math.floor(correctCount)} key items correct. Try to identify at least 3 key diagnoses or actions.`,
    educationalNotes: caseData.educational_notes
  };
}

// ============================================
// SHOW RESULTS
// ============================================

function showResults(result) {
  // Save score
  gameState.scores[gameState.currentLevel] = Math.max(
    gameState.scores[gameState.currentLevel] || 0,
    result.score
  );

  // Get correct count (use correctCount if available, otherwise estimate from score)
  const correctCount = result.correctCount !== undefined ? result.correctCount : Math.floor(result.score / 20);

  // Update progress - mark as completed if they got 3+ items correct
  if (correctCount >= 3 && !gameState.completedLevels.includes(gameState.currentLevel)) {
    gameState.completedLevels.push(gameState.currentLevel);
  }

  // Show results panel
  const resultsPanel = document.getElementById('resultsPanel');
  resultsPanel.classList.add('show');

  // Patient reaction based on correct count
  const patientReaction = document.getElementById('patientReaction');
  if (correctCount >= 5) {
    patientReaction.textContent = 'I feel so much better! Thank you, doctor!';
  } else if (correctCount >= 3) {
    patientReaction.textContent = 'Thank you for helping me!';
  } else if (correctCount >= 2) {
    patientReaction.textContent = 'I think I need a second opinion...';
  } else {
    patientReaction.textContent = 'Ohhhhh noooooo...';
  }

  // Score display - show percentage
  document.getElementById('scoreNumber').textContent = result.score + '%';

  // Score rank based on correct count
  const scoreRank = document.getElementById('scoreRank');
  if (correctCount >= 5) {
    scoreRank.textContent = `EXCELLENT (${correctCount} correct!)`;
    scoreRank.className = 'score-rank excellent';
  } else if (correctCount >= 3) {
    scoreRank.textContent = `PASSED (${correctCount} correct!)`;
    scoreRank.className = 'score-rank good';
  } else if (correctCount >= 2) {
    scoreRank.textContent = `CLOSE (${correctCount} correct)`;
    scoreRank.className = 'score-rank fair';
  } else {
    scoreRank.textContent = `TRY AGAIN (${correctCount} correct)`;
    scoreRank.className = 'score-rank poor';
  }

  // Feedback content
  const feedbackContent = document.getElementById('feedbackContent');
  feedbackContent.innerHTML = `
    <p><strong>Overall:</strong> ${result.feedback}</p>
    ${result.correct ? `<div style="margin-top: 1rem;"><strong style="color: #4CAF50;">What you got right:</strong><br>${result.correct.replace(/\n/g, '<br>')}</div>` : ''}
    ${result.missing ? `<div style="margin-top: 1rem;"><strong style="color: #FF9800;">What you missed:</strong><br>${result.missing.replace(/\n/g, '<br>')}</div>` : ''}
    ${result.errors && result.errors !== 'None identified' ? `<div style="margin-top: 1rem;"><strong style="color: #F44336;">Important notes:</strong><br>${result.errors.replace(/\n/g, '<br>')}</div>` : ''}
  `;

  // Learning points
  document.getElementById('learningPoints').innerHTML = `
    <p>${result.educationalNotes}</p>
  `;

  // Show next level button if there are more levels (since all are unlocked)
  const nextLevelBtn = document.getElementById('nextLevelBtn');
  if (gameState.currentLevel < gameState.cases.length - 1) {
    nextLevelBtn.style.display = 'inline-block';
  } else {
    nextLevelBtn.style.display = 'none';
  }

  // Update progress bar
  renderProgressBar();

  // Scroll to results
  resultsPanel.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function nextLevel() {
  if (gameState.currentLevel < gameState.cases.length - 1) {
    loadLevel(gameState.currentLevel + 1);
  }
}

function retryLevel() {
  loadLevel(gameState.currentLevel);
}

function showHint() {
  const caseData = gameState.cases[gameState.currentLevel];
  const hints = [
    `Consider these critical diagnoses: ${caseData.scoring_notes.critical_diagnoses.slice(0, 2).join(', ')}`,
    `Don't forget these critical actions: ${caseData.scoring_notes.critical_actions.slice(0, 2).join(', ')}`,
    `Common pitfall: ${caseData.scoring_notes.common_pitfalls[0]}`
  ];

  alert(hints.join('\n\n'));
}

function viewAnswer() {
  const caseData = gameState.cases[gameState.currentLevel];

  let answerText = `COMPLETE ANSWER FOR: ${caseData.title}\n\n`;
  answerText += `DIFFERENTIAL DIAGNOSIS:\n${caseData.expected_differential.map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\n`;
  answerText += `LABS:\n${Object.values(caseData.expected_next_steps.labs || []).map(l => `• ${l}`).join('\n')}\n\n`;
  answerText += `IMAGING:\n${Object.values(caseData.expected_next_steps.imaging || []).map(i => `• ${i}`).join('\n')}\n\n`;
  answerText += `IMMEDIATE ACTIONS:\n${Object.values(caseData.expected_next_steps.immediate || []).map(a => `• ${a}`).join('\n')}\n\n`;
  answerText += `TREATMENT:\n${Object.values(caseData.expected_next_steps.treatment || []).map(t => `• ${t}`).join('\n')}\n\n`;
  answerText += `KEY LEARNING POINT:\n${caseData.educational_notes}`;

  alert(answerText);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Differential Diagnosis Game loaded!');
});
</script>
