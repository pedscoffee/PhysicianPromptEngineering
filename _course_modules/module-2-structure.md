---
layout: course_module
title: "Module 2: Structure & Specificity"
course: clinical-prompt-engineering
module_number: 2
permalink: /courses/clinical-prompt-engineering/module-2/
description: "Apply AI basics to clinical documentation: SOAP notes, formatting, and templates"
duration: "60 minutes"
difficulty: "beginner"
next_module: "/courses/clinical-prompt-engineering/module-3/"
---

## Welcome to Module 2!

Now that you speak "AI", let's speak "Medicine".

In this module, we will apply the concepts of **Input -> Prompt -> Output** to create clinical documentation. We will focus on **Structure** (SOAP notes) and **Specificity** (getting exactly what you want).

### Learning Objectives

- ✅ **Generate a basic SOAP note** from a transcript
- ✅ **Control formatting** (lists, bullet points, order)
- ✅ **Use Templates** to ensure consistency

---

## Lesson 1: The Standard SOAP Note

The most common clinical document is the SOAP note. AI is very good at this *if* you tell it exactly how to organize the information.

### Exercise 2.1: Your First SOAP Note

You have a transcript of a hypertension follow-up. Your goal is to turn this conversation into a structured note.

<div class="course-exercise" id="m2e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.1: Your First SOAP Note</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Write a prompt that generates a standard SOAP note from the transcript.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m2e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m2e1">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m2e1" class="student-prompt" rows="8" placeholder="Generate a SOAP note..."></textarea>
    <div class="editor-hints">
      💡 Tip: Explicitly list the sections you want: Subjective, Objective, Assessment, Plan.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example Solution</button>
  </div>

  <div class="exercise-output">
    <h4>Generated Output:</h4>
    <div class="output-content"></div>
  </div>

  <div class="exercise-feedback">
    <div class="feedback-strengths">
      <h4>✅ Strengths</h4>
      <ul></ul>
    </div>
    <div class="feedback-improvements">
      <h4>💡 Ways to Improve</h4>
      <ul></ul>
    </div>
    <div class="feedback-score">
      <h4>Your Score</h4>
      <div class="score-value" data-score="0">0</div>
      <div class="score-status"></div>
    </div>
    <div class="example-improvement">
      <h4>Example Improvement:</h4>
      <p></p>
    </div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <button class="btn-next-exercise" onclick="document.getElementById('lesson-2').scrollIntoView({behavior: 'smooth'});">Next Lesson →</button>
    </div>
  </div>
  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best Score: <span class="best-score">-</span>/10
  </div>
</div>

<script>
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;
    if (!transcripts || !exercises) return;
    const exerciseConfig = exercises.module2_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m2e1').textContent = transcript.transcript;
    new CourseExercise('m2e1', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

<div id="lesson-2"></div>

## Lesson 2: Formatting & Lists

"Make it a SOAP note" is good.
"Make it a SOAP note with a numbered plan and bulleted HPI" is better.

**Specificity** is the key to saving time. If you have to reformat the note manually, the AI hasn't done its job.

### Exercise 2.2: Formatting Control

Let's try a new patient (Diabetes). This time, be very specific about the format.

<div class="course-exercise" id="m2e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.2: Formatting & Lists</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Create a SOAP note where the HPI uses bullet points and the Plan is a numbered list.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m2e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m2e2">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m2e2" class="student-prompt" rows="8" placeholder="Create a SOAP note.
    
Subjective: Use bullet points...
Plan: Use a numbered list..."></textarea>
    <div class="editor-hints">
      💡 Tip: Tell the AI exactly how to format each section.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example Solution</button>
  </div>

  <div class="exercise-output">
    <h4>Generated Output:</h4>
    <div class="output-content"></div>
  </div>

  <div class="exercise-feedback">
    <div class="feedback-strengths">
      <h4>✅ Strengths</h4>
      <ul></ul>
    </div>
    <div class="feedback-improvements">
      <h4>💡 Ways to Improve</h4>
      <ul></ul>
    </div>
    <div class="feedback-score">
      <h4>Your Score</h4>
      <div class="score-value" data-score="0">0</div>
      <div class="score-status"></div>
    </div>
    <div class="example-improvement">
      <h4>Example Improvement:</h4>
      <p></p>
    </div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <button class="btn-next-exercise" onclick="document.getElementById('lesson-3').scrollIntoView({behavior: 'smooth'});">Next Lesson →</button>
    </div>
  </div>
  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best Score: <span class="best-score">-</span>/10
  </div>
</div>

<script>
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;
    if (!transcripts || !exercises) return;
    const exerciseConfig = exercises.module2_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m2e2').textContent = transcript.transcript;
    new CourseExercise('m2e2', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

<div id="lesson-3"></div>

## Lesson 3: Using Templates

Remember "Few-Shot" prompting from Module 1? **Templates** are the ultimate form of Few-Shot prompting.

Instead of describing the format, you simply **show** the AI the empty shell you want it to fill.

### Exercise 2.3: The Template Approach

<div class="course-exercise" id="m2e3">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.3: Using Templates</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Provide a specific template for the AI to fill in. Include placeholders like [Patient Name] and [Diagnosis].</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m2e3">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m2e3">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m2e3" class="student-prompt" rows="12" placeholder="Fill in this template:

Patient: [Name]
CC: [Complaint]

S:
...

O:
..."></textarea>
    <div class="editor-hints">
      💡 Tip: Copy-paste the structure you use in your EHR.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example Solution</button>
  </div>

  <div class="exercise-output">
    <h4>Generated Output:</h4>
    <div class="output-content"></div>
  </div>

  <div class="exercise-feedback">
    <div class="feedback-strengths">
      <h4>✅ Strengths</h4>
      <ul></ul>
    </div>
    <div class="feedback-improvements">
      <h4>💡 Ways to Improve</h4>
      <ul></ul>
    </div>
    <div class="feedback-score">
      <h4>Your Score</h4>
      <div class="score-value" data-score="0">0</div>
      <div class="score-status"></div>
    </div>
    <div class="example-improvement">
      <h4>Example Improvement:</h4>
      <p></p>
    </div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <a href="/courses/clinical-prompt-engineering/module-3/" class="btn-next-exercise">Continue to Module 3 →</a>
    </div>
  </div>
  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best Score: <span class="best-score">-</span>/10
  </div>
</div>

<script>
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;
    if (!transcripts || !exercises) return;
    const exerciseConfig = exercises.module2_exercise3;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m2e3').textContent = transcript.transcript;
    new CourseExercise('m2e3', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

## Module 2 Complete! 🎉

You now have the tools to build solid, structured clinical notes.

Next, we'll explore a completely different way to use AI: **Refinement**. Instead of generating notes from scratch, you'll learn to fix and polish existing text.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-3/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; font-size: 1.125rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 3 →</a>
</div>
