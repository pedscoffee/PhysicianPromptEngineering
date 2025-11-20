---
layout: course_module
title: "Module 3: The Art of Refinement"
course: clinical-prompt-engineering
module_number: 3
permalink: /courses/clinical-prompt-engineering/module-3/
description: "Learn to be a 'Human in the Loop': Editing, refining, and fixing AI outputs"
duration: "60 minutes"
difficulty: "intermediate"
next_module: "/courses/clinical-prompt-engineering/module-4/"
---

## Welcome to Module 3!

So far, we've focused on generating notes from scratch. But in the real world, AI is often a **collaborator**, not just a scribe.

Sometimes the AI gives you a draft that is *almost* right, but needs work. This is where **Refinement** comes in.

### Learning Objectives

- ✅ **Shorten verbose notes** (Summarization)
- ✅ **Catch and fix hallucinations** (Fact-checking)
- ✅ **Adjust the tone** (Professionalism)

---

## Lesson 1: The "Too Long" Note

AI models love to talk. They often include every single detail, even irrelevant ones. A key skill is teaching the AI to be **concise**.

### Exercise 3.1: Summarizing and Condensing

You are given a "Draft Note" that is accurate but extremely wordy and conversational. Your job is to prompt the AI to rewrite it into a crisp, professional medical record.

<div class="course-exercise" id="m3e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 3.1: The "Too Long" Note</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Rewrite the verbose draft note to be concise and professional. Remove conversational fluff.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Draft Note (Too Verbose)</span></summary>
    <div class="transcript-content" id="transcript-content-m3e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m3e1">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m3e1" class="student-prompt" rows="8" placeholder="Rewrite the following note..."></textarea>
    <div class="editor-hints">
      💡 Tip: Use instructions like "Be concise", "Remove conversational language", "Use medical abbreviations".
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
    const exerciseConfig = exercises.module3_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m3e1').textContent = transcript.transcript;
    new CourseExercise('m3e1', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

<div id="lesson-2"></div>

## Lesson 2: Fixing Hallucinations

**Hallucination** is when the AI confidently states something that isn't true. This is the biggest risk in clinical AI.

You must always be the "Human in the Loop" to verify facts.

### Exercise 3.2: The Detective

You are given a "Patient Encounter Summary" (the truth) and an "AI Generated Note" (which contains errors). Your job is to find the errors and rewrite the note correctly.

<div class="course-exercise" id="m3e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 3.2: Fixing Hallucinations</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Identify the hallucinations in the draft note and rewrite it using ONLY the facts from the summary.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Draft Note (With Errors)</span></summary>
    <div class="transcript-content" id="transcript-content-m3e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m3e2">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m3e2" class="student-prompt" rows="10" placeholder="Compare the Summary and the Note.
    
Identify errors:
...

Rewrite the note:
..."></textarea>
    <div class="editor-hints">
      💡 Tip: Explicitly ask the AI to "List the discrepancies" first, then rewrite. This forces it to "think" before writing.
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
    const exerciseConfig = exercises.module3_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m3e2').textContent = transcript.transcript;
    new CourseExercise('m3e2', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

<div id="lesson-3"></div>

## Lesson 3: Tone Shift

Sometimes the facts are right, but the **Tone** is wrong. Maybe a scribe wrote "Kid is acting crazy" instead of "Patient is agitated."

### Exercise 3.3: Professional Polish

You have a note written in very casual, unprofessional language. Polish it up.

<div class="course-exercise" id="m3e3">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 3.3: Tone Shift</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Rewrite the unprofessional draft into a formal medical record.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Draft Note (Unprofessional)</span></summary>
    <div class="transcript-content" id="transcript-content-m3e3">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m3e3">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m3e3" class="student-prompt" rows="8" placeholder="Rewrite this note to be formal..."></textarea>
    <div class="editor-hints">
      💡 Tip: Ask to replace slang with medical terminology.
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
      <a href="/courses/clinical-prompt-engineering/module-4/" class="btn-next-exercise">Continue to Module 4 →</a>
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
    const exerciseConfig = exercises.module3_exercise3;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m3e3').textContent = transcript.transcript;
    new CourseExercise('m3e3', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

## Module 3 Complete! 🎉

You are now a master of **Refinement**. You can take rough drafts and turn them into polished documentation.

Next, we'll tackle the hard stuff: **Advanced Applications** like complex multi-system disease and procedure notes.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-4/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; font-size: 1.125rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 4 →</a>
</div>
