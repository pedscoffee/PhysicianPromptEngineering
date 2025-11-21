---
layout: course_module
title: "Module 5: Safety & Ethics"
course: clinical-prompt-engineering
module_number: 5
permalink: /courses/clinical-prompt-engineering/module-5/
description: "Identify bias, catch errors, and protect patient privacy"
duration: "45 minutes"
difficulty: "advanced"
next_module: "/courses/clinical-prompt-engineering/"
---

## Welcome to Module 5!

You've made it to the final module.

AI is powerful, but it's not perfect. It can be biased, it can make mistakes, and it can leak data if you aren't careful.

In this module, we'll focus on **Safety First**.

### Learning Objectives

- **Identify and mitigate bias**
- **Implement safety checks** for high-risk patients
- **De-identify data** to protect patient privacy

---

## Lesson 1: Safety Checks

If a patient mentions suicide, the AI *must* catch it. If the AI isn't sure, it *must* tell you.

You can program these safety checks directly into your prompts.

### Exercise 5.1: The Safety Layer

<div class="course-exercise" id="m5e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 5.1: Identifying Risk</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>Your Challenge</h3>
    <p>Create a prompt that explicitly checks for suicide risk. If risk is not assessed in the transcript, the AI should flag it.</p>
  </div>

  <details class="exercise-transcript">
    <summary>View <span class="input-label-text">Psych Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m5e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m5e1">Your Prompt:</label>
    <textarea id="student-prompt-m5e1" class="student-prompt" rows="10" placeholder="Create a psych note.

SAFETY CHECK:
- If suicide risk is mentioned, document it.
- If NOT mentioned, write 'RISK NOT ASSESSED' in bold."></textarea>
    <div class="editor-hints">
      Tip: Use "If/Then" logic in your prompt to handle missing information.
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
    const exerciseConfig = exercises.module5_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m5e1').textContent = transcript.transcript;
    new CourseExercise('m5e1', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

<div id="lesson-2"></div>

## Lesson 2: De-identification

Never paste real patient names into a public AI tool. Ever.

But you can use AI to *help* you de-identify notes for teaching or research (using a secure, local, or HIPAA-compliant tool).

### Exercise 5.2: The Anonymizer

<div class="course-exercise" id="m5e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 5.2: De-identification</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>Your Challenge</h3>
    <p>Create a prompt that removes ALL PHI (Names, Dates, Locations) and replaces them with placeholders like [Name].</p>
  </div>

  <details class="exercise-transcript">
    <summary>View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m5e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m5e2">Your Prompt:</label>
    <textarea id="student-prompt-m5e2" class="student-prompt" rows="8" placeholder="Remove all PHI.
    
Replace:
- Names -> [Name]
- Dates -> [Date]
..."></textarea>
    <div class="editor-hints">
      Tip: Be exhaustive. List every type of PHI you want removed.
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
      <a href="/courses/clinical-prompt-engineering/" class="btn-next-exercise">Finish Course 🎓</a>
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
    const exerciseConfig = exercises.module5_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m5e2').textContent = transcript.transcript;
    new CourseExercise('m5e2', { ...exerciseConfig, transcript: transcript.transcript });
  })();
</script>

---

## Course Complete!

Congratulations! You have completed the **Clinical Prompt Engineering Course**.

You now possess a skill set that puts you ahead of 99% of your peers. You can:
- Speak the language of AI
- Structure clinical notes effectively
- Refine and polish AI output
- Handle complex cases
- Do it all safely and ethically

**Go forth and prompt!**
