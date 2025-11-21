/**
 * Interactive Course Exercise System
 * Handles LLM-powered exercises with real-time feedback
 */

// ============================================
// COURSE EXERCISE ENGINE
// ============================================

class CourseExercise {
  constructor(exerciseId, config) {
    this.exerciseId = exerciseId;
    this.config = config;
    this.llm = null;
    this.isInitialized = false;
    this.currentAttempt = 0;
    this.bestScore = 0;

    // UI Elements
    this.container = document.getElementById(exerciseId);
    this.promptInput = this.container.querySelector('.student-prompt');
    this.runButton = this.container.querySelector('.btn-run-exercise');
    this.outputPanel = this.container.querySelector('.exercise-output');
    this.feedbackPanel = this.container.querySelector('.exercise-feedback');
    this.statusIndicator = this.container.querySelector('.llm-status');

    // Set custom input label if provided
    if (this.config.input_label) {
      const labelEl = this.container.querySelector('.input-label-text');
      if (labelEl) labelEl.textContent = this.config.input_label;

      // Also update the summary text if it exists directly
      const summaryEl = this.container.querySelector('.exercise-transcript summary');
      if (summaryEl && !labelEl) {
        summaryEl.textContent = `📋 View ${this.config.input_label}`;
      }
    }

    this.bindEvents();
    this.updateProgress();
  }

  bindEvents() {
    if (this.runButton) {
      this.runButton.addEventListener('click', () => this.runExercise());
    }

    const retryButton = this.container.querySelector('.btn-retry');
    if (retryButton) {
      retryButton.addEventListener('click', () => this.resetExercise());
    }

    const viewExampleButton = this.container.querySelector('.btn-view-example');
    if (viewExampleButton) {
      viewExampleButton.addEventListener('click', () => this.showExamplePrompt());
    }

    const hintButton = this.container.querySelector('.btn-hint');
    if (hintButton) {
      hintButton.addEventListener('click', () => this.showHint());
    }

    // Add Initialize AI button handler
    const initButton = this.container.querySelector('.btn-init-ai');
    if (initButton) {
      initButton.addEventListener('click', async () => {
        initButton.disabled = true;
        initButton.textContent = 'Initializing...';
        const success = await this.initializeLLM();
        if (success) {
          initButton.style.display = 'none';
          this.updateStatus('AI Ready - You can now run exercises!', 'ready');
        } else {
          initButton.disabled = false;
          initButton.textContent = 'Initialize AI (Required)';
        }
      });
    }
  }

  async initializeLLM() {
    if (this.isInitialized) return true;

    // Check if there's a globally initialized LLM we can use
    if (window.sharedLLM) {
      console.log('Using shared LLM instance');
      this.llm = window.sharedLLM;
      this.isInitialized = true;
      this.updateStatus('AI Ready ✓', 'ready');
      return true;
    }

    try {
      this.updateStatus('Initializing AI model (first time: ~2GB download)...', 'loading');

      // Check for WebGPU support
      if (!navigator.gpu) {
        this.updateStatus('Error: WebGPU not supported. Use Chrome/Edge 113+', 'error');
        this.showError('Your browser does not support WebGPU. Please use Chrome or Edge version 113 or later.');
        return false;
      }

      console.log('Loading MLC Web LLM...');

      // Import MLC Web LLM
      const mlcModule = await import('https://esm.run/@mlc-ai/web-llm');
      const CreateMLCEngine = mlcModule.CreateMLCEngine || mlcModule.default?.CreateMLCEngine;

      if (!CreateMLCEngine) {
        throw new Error('Failed to load CreateMLCEngine from @mlc-ai/web-llm');
      }

      console.log('Creating LLM engine...');

      // Initialize engine with Llama 3.2 1B model for faster loading and better performance
      // Alternative models: "Phi-3.5-mini-instruct-q4f16_1-MLC", "Qwen2.5-7B-Instruct-q4f16_1-MLC"
      this.llm = await CreateMLCEngine("Llama-3.2-1B-Instruct-q4f16_1-MLC", {
        initProgressCallback: (progress) => {
          const percent = Math.round(progress.progress * 100);
          this.updateStatus(`Loading AI model: ${percent}% (${progress.text || 'downloading...'})`, 'loading');
          console.log(`Loading progress: ${percent}%`, progress);
        }
      });

      console.log('LLM initialized successfully!');
      this.isInitialized = true;
      this.updateStatus('AI Ready ✓', 'ready');

      // Share this instance globally for other exercises
      window.sharedLLM = this.llm;

      return true;
    } catch (error) {
      console.error('LLM initialization error:', error);
      this.updateStatus('Error loading AI model', 'error');
      this.showError(`Failed to load AI: ${error.message}. Please refresh and try again. Make sure you're using Chrome/Edge 113+ with WebGPU enabled.`);
      return false;
    }
  }

  updateStatus(message, status) {
    if (!this.statusIndicator) return;

    this.statusIndicator.textContent = message;
    this.statusIndicator.className = 'llm-status status-' + status;
  }

  async runExercise() {
    const studentPrompt = this.promptInput.value.trim();

    if (!studentPrompt) {
      this.showError('Please write a prompt before running the exercise.');
      return;
    }

    // Initialize LLM if needed
    if (!this.isInitialized) {
      const initialized = await this.initializeLLM();
      if (!initialized) return;
    }

    this.runButton.disabled = true;
    this.runButton.textContent = 'Processing...';

    try {
      // Step 1: Run student's prompt with the sample transcript
      this.updateStatus('Running your prompt...', 'loading');
      const generatedOutput = await this.executeStudentPrompt(studentPrompt);

      // Show output
      this.displayOutput(generatedOutput);

      // Step 2: Evaluate the output
      this.updateStatus('Evaluating your work...', 'loading');
      const feedback = await this.evaluateOutput(studentPrompt, generatedOutput);

      // Show feedback
      this.displayFeedback(feedback);

      // Update progress
      this.currentAttempt++;
      this.bestScore = Math.max(this.bestScore, feedback.score);
      this.updateProgress();

      // Save to localStorage
      this.saveProgress(feedback.score);

      this.updateStatus('Complete!', 'ready');
    } catch (error) {
      console.error('Exercise error:', error);
      this.showError('An error occurred while processing your prompt. Please try again.');
      this.updateStatus('Error', 'error');
    } finally {
      this.runButton.disabled = false;
      this.runButton.textContent = 'Run Prompt';
    }
  }

  async executeStudentPrompt(studentPrompt) {
    const transcript = this.config.transcript;

    const inputLabel = this.config.input_label || "Patient Encounter Transcript";
    const fullPrompt = `${studentPrompt}\n\n${inputLabel}:\n${transcript}`;

    const response = await this.llm.chat.completions.create({
      messages: [{ role: 'user', content: fullPrompt }],
      temperature: 0.7,
      max_tokens: 1500
    });

    return response.choices[0].message.content;
  }

  async evaluateOutput(studentPrompt, generatedOutput) {
    const rubric = this.config.rubric;
    const goal = this.config.goal;
    const examplePrompt = this.config.example_good_prompt;

    const evaluationPrompt = `You are an expert medical educator evaluating a student's prompt engineering exercise.

EXERCISE GOAL: ${goal}

STUDENT'S PROMPT:
${studentPrompt}

GENERATED OUTPUT FROM THAT PROMPT:
${generatedOutput}

REFERENCE "GOOD" PROMPT (For comparison only):
${examplePrompt}

EVALUATION INSTRUCTIONS:
Compare the student's prompt to the reference prompt and the exercise goal.
Do NOT assign a score.
Focus on what the student did well and exactly how they can improve to match the quality of the reference prompt.

Provide feedback in the following JSON format:
{
  "strengths": ["specific strength 1", "specific strength 2"],
  "improvements": ["specific improvement 1", "specific improvement 2"],
  "example_improvement": "A specific suggestion on how to rephrase a part of their prompt"
}

Be specific, constructive, and encouraging.`;

    try {
      const response = await this.llm.chat.completions.create({
        messages: [{ role: 'user', content: evaluationPrompt }],
        temperature: 0.3,
        max_tokens: 1000
      });

      const content = response.choices[0].message.content;

      // Extract JSON from response
      let jsonStr = content;

      // Try to find JSON object boundaries
      const firstOpen = content.indexOf('{');
      const lastClose = content.lastIndexOf('}');

      if (firstOpen !== -1 && lastClose !== -1 && lastClose > firstOpen) {
        jsonStr = content.substring(firstOpen, lastClose + 1);
      } else {
        console.warn('Could not find JSON object in response:', content);
        throw new Error('No JSON found in response');
      }

      const feedback = JSON.parse(jsonStr);

      // Validate feedback structure
      if (!feedback.strengths || !feedback.improvements) {
        throw new Error('Invalid feedback structure');
      }

      return feedback;
    } catch (error) {
      console.error('Evaluation error:', error);

      // Fallback feedback
      return {
        strengths: ['Your prompt generated a response'],
        improvements: [
          'Try to be more specific in your instructions',
          'Consider adding formatting requirements',
          'Compare your prompt to the example solution'
        ],
        example_improvement: 'Check the "View Example Solution" for ideas.'
      };
    }
  }

  displayOutput(output) {
    const outputContent = this.outputPanel.querySelector('.output-content');
    if (outputContent) {
      outputContent.textContent = output;
    }

    this.outputPanel.style.display = 'block';
    this.outputPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  displayFeedback(feedback) {
    // Strengths
    const strengthsList = this.feedbackPanel.querySelector('.feedback-strengths ul');
    if (strengthsList) {
      strengthsList.innerHTML = '';
      feedback.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
      });
    }

    // Improvements
    const improvementsList = this.feedbackPanel.querySelector('.feedback-improvements ul');
    if (improvementsList) {
      improvementsList.innerHTML = '';
      feedback.improvements.forEach(improvement => {
        const li = document.createElement('li');
        li.textContent = improvement;
        improvementsList.appendChild(li);
      });
    }

    // Hide Score Elements
    const scoreContainer = this.feedbackPanel.querySelector('.feedback-score');
    if (scoreContainer) {
      scoreContainer.style.display = 'none';
    }

    // Example improvement
    const exampleImprovement = this.feedbackPanel.querySelector('.example-improvement p');
    if (exampleImprovement && feedback.example_improvement) {
      exampleImprovement.textContent = feedback.example_improvement;
      this.feedbackPanel.querySelector('.example-improvement').style.display = 'block';
    } else {
      const exImpDiv = this.feedbackPanel.querySelector('.example-improvement');
      if (exImpDiv) exImpDiv.style.display = 'none';
    }

    // Hide detailed criteria scores
    const criteriaDetails = this.feedbackPanel.querySelector('.criteria-details');
    if (criteriaDetails) {
      criteriaDetails.style.display = 'none';
    }

    this.feedbackPanel.style.display = 'block';
    this.feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  displayCriteriaScores(criteriaScores) {
    // Deprecated
  }

  updateProgress() {
    const attemptCount = this.container.querySelector('.attempt-count');
    if (attemptCount) {
      attemptCount.textContent = this.currentAttempt;
    }

    // Hide best score
    const progressDiv = this.container.querySelector('.exercise-progress');
    if (progressDiv) {
      // Just show attempts
      progressDiv.innerHTML = `Attempts: <span class="attempt-count">${this.currentAttempt}</span>`;
    }
  }

  resetExercise() {
    this.outputPanel.style.display = 'none';
    this.feedbackPanel.style.display = 'none';
    this.promptInput.focus();
  }

  showExamplePrompt() {
    if (!this.config.example_good_prompt) return;

    const modal = this.createModal(
      'Example Prompt',
      `<p class="modal-note">Here's an example of a good prompt for this exercise. Try not to copy it exactly - use it as inspiration to create your own!</p>
       <pre class="example-prompt">${this.escapeHtml(this.config.example_good_prompt)}</pre>
       <p class="modal-note"><em>Note: There are many ways to write a good prompt. This is just one example!</em></p>`
    );

    document.body.appendChild(modal);
  }

  showHint() {
    const hints = this.config.hints || [
      'Start by clearly stating what format you want the output in',
      'Be specific about what information to include or exclude',
      'Consider what makes clinical documentation high-quality',
      'Think about how you would explain this task to a colleague'
    ];

    const randomHint = hints[Math.floor(Math.random() * hints.length)];

    const hintEl = this.container.querySelector('.hint-display');
    if (hintEl) {
      hintEl.textContent = `💡 ${randomHint}`;
      hintEl.style.display = 'block';

      setTimeout(() => {
        hintEl.style.display = 'none';
      }, 10000);
    }
  }

  showError(message) {
    const errorEl = this.container.querySelector('.error-message');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';

      setTimeout(() => {
        errorEl.style.display = 'none';
      }, 5000);
    } else {
      alert(message);
    }
  }

  saveProgress(score) {
    const progress = CourseProgress.loadProgress();

    if (!progress.exercises[this.exerciseId]) {
      progress.exercises[this.exerciseId] = {
        attempts: 0,
        bestScore: 0,
        completed: false,
        lastAttempt: null
      };
    }

    progress.exercises[this.exerciseId].attempts++;
    progress.exercises[this.exerciseId].bestScore = Math.max(
      progress.exercises[this.exerciseId].bestScore,
      score
    );
    progress.exercises[this.exerciseId].lastAttempt = new Date().toISOString();

    if (score >= this.config.rubric.passing_score) {
      progress.exercises[this.exerciseId].completed = true;
    }

    CourseProgress.saveProgress(progress);

    // Update overall course progress display
    CourseProgress.updateProgressBar();
  }

  createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
      </div>
    `;

    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    const closeModal = () => modal.remove();

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    return modal;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// ============================================
// COURSE PROGRESS TRACKING
// ============================================

class CourseProgress {
  static STORAGE_KEY = 'clinical_prompt_course_progress';

  static loadProgress() {
    const stored = localStorage.getItem(CourseProgress.STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Error parsing progress:', e);
      }
    }

    return {
      exercises: {},
      modulesCompleted: [],
      courseStarted: new Date().toISOString(),
      lastActivity: new Date().toISOString()
    };
  }

  static saveProgress(progress) {
    progress.lastActivity = new Date().toISOString();
    localStorage.setItem(CourseProgress.STORAGE_KEY, JSON.stringify(progress));
  }

  static getExerciseProgress(exerciseId) {
    const progress = CourseProgress.loadProgress();
    return progress.exercises[exerciseId] || {
      attempts: 0,
      bestScore: 0,
      completed: false
    };
  }

  static getModuleProgress(moduleNumber) {
    const progress = CourseProgress.loadProgress();
    const moduleExercises = Object.keys(progress.exercises).filter(id =>
      id.startsWith(`m${moduleNumber}`)
    );

    if (moduleExercises.length === 0) return { completed: 0, total: 0, percentage: 0 };

    const completed = moduleExercises.filter(id =>
      progress.exercises[id].completed
    ).length;

    return {
      completed,
      total: moduleExercises.length,
      percentage: Math.round((completed / moduleExercises.length) * 100)
    };
  }

  static getCourseProgress() {
    const progress = CourseProgress.loadProgress();
    const allExercises = Object.keys(progress.exercises);

    if (allExercises.length === 0) return { completed: 0, total: 0, percentage: 0 };

    const completed = allExercises.filter(id =>
      progress.exercises[id].completed
    ).length;

    return {
      completed,
      total: allExercises.length,
      percentage: Math.round((completed / allExercises.length) * 100)
    };
  }

  static updateProgressBar() {
    const progressBar = document.querySelector('.course-progress-bar');
    if (!progressBar) return;

    const courseProgress = CourseProgress.getCourseProgress();
    const fill = progressBar.querySelector('.progress-fill');
    const text = progressBar.querySelector('.progress-text');

    if (fill) {
      fill.style.width = `${courseProgress.percentage}%`;
    }

    if (text) {
      text.textContent = `${courseProgress.completed} of ${courseProgress.total} exercises completed (${courseProgress.percentage}%)`;
    }
  }

  static markModuleComplete(moduleNumber) {
    const progress = CourseProgress.loadProgress();

    if (!progress.modulesCompleted.includes(moduleNumber)) {
      progress.modulesCompleted.push(moduleNumber);
      CourseProgress.saveProgress(progress);
    }
  }

  static isModuleUnlocked(moduleNumber) {
    // Module 1 is always unlocked
    if (moduleNumber === 1) return true;

    // Check if previous module is complete
    const progress = CourseProgress.loadProgress();
    return progress.modulesCompleted.includes(moduleNumber - 1);
  }

  static resetProgress() {
    if (confirm('Are you sure you want to reset all course progress? This cannot be undone.')) {
      localStorage.removeItem(CourseProgress.STORAGE_KEY);
      location.reload();
    }
  }

  static exportProgress() {
    const progress = CourseProgress.loadProgress();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `course_progress_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
  }
}

// ============================================
// INITIALIZATION
// ============================================

// Auto-initialize exercises when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Update progress bar if present
  CourseProgress.updateProgressBar();

  // Initialize module progress displays
  document.querySelectorAll('[data-module-number]').forEach(moduleEl => {
    const moduleNumber = parseInt(moduleEl.dataset.moduleNumber);
    const moduleProgress = CourseProgress.getModuleProgress(moduleNumber);

    const progressEl = moduleEl.querySelector('.module-progress');
    if (progressEl) {
      progressEl.textContent = `${moduleProgress.completed}/${moduleProgress.total} exercises completed`;
    }
  });

  // Add reset button functionality if present
  const resetButton = document.querySelector('.btn-reset-progress');
  if (resetButton) {
    resetButton.addEventListener('click', () => CourseProgress.resetProgress());
  }

  // Add export button functionality if present
  const exportButton = document.querySelector('.btn-export-progress');
  if (exportButton) {
    exportButton.addEventListener('click', () => CourseProgress.exportProgress());
  }

  // Note: Module locking removed - users can explore at their own pace
  // Progress tracking and gamification remain active
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CourseExercise, CourseProgress };
}
