---
layout: course_module
title: "Module 4: Advanced Applications"
course: clinical-prompt-engineering
module_number: 4
permalink: /courses/clinical-prompt-engineering/module-4/
description: "Tackle complex cases, procedure notes, and diagnostic reasoning"
duration: "75 minutes"
difficulty: "advanced"
next_module: "/courses/clinical-prompt-engineering/module-5/"
---

## Welcome to Module 4!

You've mastered the basics and learned to refine output. Now it's time for the heavy lifting.

In this module, we'll handle **Complex Cases** that require more than just a simple summary. We'll look at multi-system disease, legal-heavy procedure notes, and showing your clinical work.

### Learning Objectives

- **Document complex multi-system patients**
- **Create detailed procedure notes**
- **Show diagnostic reasoning (Differential Diagnosis)**

---

## Lesson 1: The Complex Patient

A simple SOAP note works for a sore throat. It fails for a patient with CHF, CKD, and Diabetes who is admitted for volume overload.

You need **Problem-Oriented Charting**.

### Exercise 4.1: Multi-System Documentation

<div class="course-exercise" id="m4e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 4.1: Complex Multi-System Case</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 25 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>Your Challenge</h3>
    <p>Create a comprehensive note for a complex patient. Organize the Assessment & Plan by problem, prioritizing acute issues.</p>
  </div>

  <details class="exercise-transcript">
    <summary>View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m4e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m4e1">Your Prompt:</label>
    <textarea id="student-prompt-m4e1" class="student-prompt" rows="12" placeholder="Create a comprehensive note...

Assessment & Plan:
Organize by problem:
1. [Acute Problem]
2. [Chronic Problem]
..."></textarea>
    <div class="editor-hints">
      Tip: Tell the AI to "Prioritize acute conditions" and "List each problem separately".
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
    const exerciseConfig = exercises.module4_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m4e1').textContent = transcript.transcript;
    new CourseExercise('m4e1', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

<div id="lesson-2"></div>

## Lesson 2: Procedure Notes

Procedure notes are legal documents. If you didn't document the consent, it didn't happen. If you didn't document the timeout, you're liable.

Templates are critical here.

### Exercise 4.2: The Procedure Note

<div class="course-exercise" id="m4e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 4.2: Procedure Documentation</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 25 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>Your Challenge</h3>
    <p>Generate a complete colonoscopy note. Ensure ALL required elements (Consent, Timeout, Findings, Complications) are present.</p>
  </div>

  <details class="exercise-transcript">
    <summary>View <span class="input-label-text">Procedure Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m4e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m4e2">Your Prompt:</label>
    <textarea id="student-prompt-m4e2" class="student-prompt" rows="10" placeholder="Generate a procedure note.

Required Elements:
- Indication
- Consent
..."></textarea>
    <div class="editor-hints">
      Tip: List the "Required Elements" explicitly in your prompt.
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
    const exerciseConfig = exercises.module4_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m4e2').textContent = transcript.transcript;
    new CourseExercise('m4e2', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

<div id="lesson-3"></div>

## Lesson 3: Diagnostic Reasoning

The "Assessment" section shouldn't just be a diagnosis. It should show **why** you think that.

### Exercise 4.3: Differential Diagnosis

<div class="course-exercise" id="m4e3">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 4.3: Differential Diagnosis</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 25 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>Your Challenge</h3>
    <p>Generate a note that explicitly lists the Differential Diagnosis and explains why you ruled out other causes.</p>
  </div>

  <details class="exercise-transcript">
    <summary>View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m4e3">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m4e3">Your Prompt:</label>
    <textarea id="student-prompt-m4e3" class="student-prompt" rows="10" placeholder="Create an ED note.

Assessment:
Include a Differential Diagnosis section.
For each item, explain the evidence for/against..."></textarea>
    <div class="editor-hints">
      Tip: Ask the AI to "Show its work" or "Explain its reasoning".
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
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <a href="/courses/clinical-prompt-engineering/module-5/" class="btn-next-exercise">Continue to Module 5 →</a>
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
    const exerciseConfig = exercises.module4_exercise3;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m4e3').textContent = transcript.transcript;
    new CourseExercise('m4e3', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

## Module 4 Complete! 🎉

You are now handling the most complex documentation tasks.

One final module remains: **Safety & Ethics**. We'll cover how to protect your patients and yourself.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-5/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; font-size: 1.125rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 5 →</a>
</div>
