/**
 * Newborn Exam Course Exercise System
 * Adapted from course-exercise.js for image-based clinical assessment
 */

class NewbornExercise {
  constructor(exerciseId, config) {
    this.exerciseId = exerciseId;
    this.config = config;
    this.llm = null;
    this.isInitialized = false;
    this.currentAttempt = 0;
    this.bestScore = 0;

    // UI Elements
    this.container = document.getElementById(exerciseId);
    if (!this.container) {
      console.error(`Exercise container not found: ${exerciseId}`);
      return;
    }

    this.promptInput = this.container.querySelector('.student-prompt');
    this.runButton = this.container.querySelector('.btn-run-exercise');
    this.outputPanel = this.container.querySelector('.exercise-output');
    this.feedbackPanel = this.container.querySelector('.exercise-feedback');
    this.statusIndicator = this.container.querySelector('.llm-status');

    this.bindEvents();
  }

  bindEvents() {
    if (this.runButton) {
      this.runButton.addEventListener('click', () => this.runExercise());
    }

    const retryButton = this.container.querySelector('.btn-retry');
    if (retryButton) {
      retryButton.addEventListener('click', () => this.resetExercise());
    }

    const hintButton = this.container.querySelector('.btn-hint');
    if (hintButton) {
      hintButton.addEventListener('click', () => this.showHint());
    }
  }

  async initializeLLM() {
    if (this.isInitialized) return true;

    // Check if there's a globally initialized LLM
    if (window.sharedLLM) {
      console.log('Using shared LLM instance');
      this.llm = window.sharedLLM;
      this.isInitialized = true;
      this.updateStatus('AI Ready ✓', 'ready');
      return true;
    }

    this.updateStatus('Please initialize AI using the button above', 'error');
    return false;
  }

  updateStatus(message, status) {
    if (!this.statusIndicator) return;
    this.statusIndicator.textContent = message;
    this.statusIndicator.className = 'llm-status status-' + status;
  }

  async runExercise() {
    const studentResponse = this.promptInput.value.trim();

    if (!studentResponse) {
      this.showError('Please provide your clinical assessment before submitting.');
      return;
    }

    // Initialize LLM if needed
    if (!this.isInitialized) {
      const initialized = await this.initializeLLM();
      if (!initialized) {
        this.showError('Please initialize the AI model first using the button at the top of the page.');
        return;
      }
    }

    this.runButton.disabled = true;
    this.runButton.textContent = 'Evaluating...';

    try {
      // Show the student's response
      this.displayOutput(studentResponse);

      // Evaluate the clinical assessment
      this.updateStatus('Evaluating your clinical reasoning...', 'loading');
      const feedback = await this.evaluateAssessment(studentResponse);

      // Show feedback
      this.displayFeedback(feedback);

      // Update progress
      this.currentAttempt++;
      this.bestScore = Math.max(this.bestScore, feedback.score);
      this.updateProgress();

      // Save to localStorage
      this.saveProgress(feedback.score);

      this.updateStatus('Evaluation complete!', 'ready');
    } catch (error) {
      console.error('Exercise error:', error);
      this.showError('An error occurred while evaluating your assessment. Please try again.');
      this.updateStatus('Error', 'error');
    } finally {
      this.runButton.disabled = false;
      this.runButton.textContent = 'Submit Assessment';
    }
  }

  async evaluateAssessment(studentResponse) {
    const scenario = this.config.scenario;
    const expectedFindings = this.config.expectedFindings || '';
    const rubric = this.config.rubric;
    const goal = this.config.goal;

    const evaluationPrompt = `You are an expert pediatrician evaluating a medical student's clinical assessment of a newborn physical exam finding.

EXERCISE GOAL: ${goal}

CLINICAL SCENARIO:
${scenario}

EXPECTED FINDINGS:
${expectedFindings}

STUDENT'S ASSESSMENT:
${studentResponse}

EVALUATION RUBRIC:
${JSON.stringify(rubric.criteria, null, 2)}
Total possible points: ${rubric.total_points}
Passing score: ${rubric.passing_score}

Please evaluate this clinical assessment and provide feedback in the following JSON format:
{
  "strengths": ["specific strength 1", "specific strength 2"],
  "improvements": ["specific improvement 1", "specific improvement 2", "specific improvement 3"],
  "score": 8,
  "criteria_scores": {
    "criterion_name": {"points": 2, "feedback": "brief explanation"}
  },
  "example_improvement": "Specific teaching point about this finding or what the student should learn...",
  "passed": true
}

Evaluation Guidelines:
- Assess accuracy of finding identification
- Evaluate clinical reasoning quality
- Check appropriateness of management recommendations
- Consider if they recognized concerning vs benign features
- Evaluate parent communication approach if mentioned
- Be constructive and educational in feedback
- Award points fairly based on demonstrated understanding`;

    try {
      const response = await this.llm.chat.completions.create({
        messages: [{ role: 'user', content: evaluationPrompt }],
        temperature: 0.3,
        max_tokens: 1000
      });

      const content = response.choices[0].message.content;

      // Extract JSON from response
      let jsonStr = content;
      if (content.includes('```json')) {
        jsonStr = content.split('```json')[1].split('```')[0].trim();
      } else if (content.includes('```')) {
        jsonStr = content.split('```')[1].split('```')[0].trim();
      }

      const feedback = JSON.parse(jsonStr);

      // Validate feedback structure
      if (!feedback.strengths || !feedback.improvements || typeof feedback.score !== 'number') {
        throw new Error('Invalid feedback structure');
      }

      return feedback;
    } catch (error) {
      console.error('Evaluation error:', error);

      // Fallback feedback
      return {
        strengths: ['You attempted a systematic assessment'],
        improvements: [
          'Ensure you identify the specific finding',
          'Explain the clinical significance',
          'Provide appropriate next steps or management',
          'Consider what you would tell the parents'
        ],
        score: 5,
        example_improvement: 'Review the expected findings for this case and compare with your assessment. Focus on accurate identification and appropriate clinical reasoning.',
        passed: false
      };
    }
  }

  displayOutput(output) {
    const outputContent = this.outputPanel.querySelector('.output-content');
    if (outputContent) {
      outputContent.textContent = output;
    }
    this.outputPanel.style.display = 'block';
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

    // Score
    const scoreValue = this.feedbackPanel.querySelector('.score-value');
    if (scoreValue) {
      scoreValue.textContent = feedback.score;
      scoreValue.setAttribute('data-score', feedback.score);
    }

    const scoreStatus = this.feedbackPanel.querySelector('.score-status');
    if (scoreStatus) {
      const passed = feedback.score >= this.config.rubric.passing_score;
      scoreStatus.textContent = passed ? '✅ Passed!' : '📝 Keep practicing';
      scoreStatus.className = 'score-status ' + (passed ? 'passed' : 'not-passed');
    }

    // Teaching points
    const exampleImprovement = this.feedbackPanel.querySelector('.example-improvement p');
    if (exampleImprovement && feedback.example_improvement) {
      exampleImprovement.textContent = feedback.example_improvement;
    }

    // Detailed criteria scores
    if (feedback.criteria_scores) {
      this.displayCriteriaScores(feedback.criteria_scores);
    }

    this.feedbackPanel.style.display = 'block';
    this.feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  displayCriteriaScores(criteriaScores) {
    const detailsContainer = this.feedbackPanel.querySelector('.criteria-details');
    if (!detailsContainer) return;

    detailsContainer.innerHTML = '<h5>Detailed Scoring:</h5>';

    for (const [criterion, details] of Object.entries(criteriaScores)) {
      const criterionDiv = document.createElement('div');
      criterionDiv.className = 'criterion-score';
      criterionDiv.innerHTML = `
        <strong>${criterion}:</strong> ${details.points} points
        <br><small>${details.feedback}</small>
      `;
      detailsContainer.appendChild(criterionDiv);
    }
  }

  updateProgress() {
    const attemptCount = this.container.querySelector('.attempt-count');
    if (attemptCount) {
      attemptCount.textContent = this.currentAttempt;
    }

    const bestScoreEl = this.container.querySelector('.best-score');
    if (bestScoreEl) {
      bestScoreEl.textContent = this.bestScore;
    }
  }

  resetExercise() {
    this.outputPanel.style.display = 'none';
    this.feedbackPanel.style.display = 'none';
    this.promptInput.focus();
  }

  showHint() {
    const hints = this.config.hints || [
      'Consider normal vs abnormal findings for this age',
      'Think about what would make you concerned as a clinician',
      'What would you tell the parents about this finding?',
      'Is this benign, requires monitoring, or needs urgent intervention?'
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
    const progress = this.loadProgress();

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

    this.saveProgressData(progress);
  }

  loadProgress() {
    const stored = localStorage.getItem('newborn_exam_course_progress');
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

  saveProgressData(progress) {
    progress.lastActivity = new Date().toISOString();
    localStorage.setItem('newborn_exam_course_progress', JSON.stringify(progress));
  }
}

// Initialize course data from YAML (will be loaded by Jekyll)
window.newbornExercises = {{ site.data.newborn_exam_exercises | jsonify }};
window.newbornScenarios = {{ site.data.newborn_exam_scenarios | jsonify }};
