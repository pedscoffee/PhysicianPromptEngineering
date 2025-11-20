---
layout: course_module
title: "Module 1: AI Concepts & Terminology"
course: clinical-prompt-engineering
module_number: 1
permalink: /courses/clinical-prompt-engineering/module-1/
description: "Master the vocabulary of AI and understand how LLMs actually work"
duration: "45 minutes"
difficulty: "beginner"
next_module: "/courses/clinical-prompt-engineering/module-2/"
---

## Welcome to Module 1!

Before we jump into writing complex medical notes, we need to speak the same language. This module is designed for **absolute beginners**. If you've never used ChatGPT or an LLM before, you are in the right place.

### Learning Objectives

By the end of this module, you will understand:

- ✅ **What a "Prompt" actually is** (Input vs Output)
- ✅ **Zero-Shot vs. Few-Shot Prompting** (The power of examples)
- ✅ **The Context Window** (How much can the AI remember?)
- ✅ **Hallucinations** (Why AI lies and how to catch it)

---

## Lesson 1: The "Hello World" of Prompting

An **LLM (Large Language Model)** is like a very advanced autocomplete engine. It predicts the next word based on the text you give it.

The text you give it is called the **Prompt**.
The text it generates is called the **Output**.

The quality of the Output depends entirely on the quality of the Prompt. This is called **"Garbage In, Garbage Out."**

### Exercise 1.1: Your First Prompt

Let's start with something simple. You have an email from a practice manager, Sarah. She wants to schedule a meeting. Your job is to extract the available times.

<div class="course-exercise" id="m1e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.1: The "Hello World" of Prompting</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 10 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Write a prompt to extract the available meeting times from Sarah's email.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Source Email</span></summary>
    <div class="transcript-content" id="transcript-content-m1e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e1">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m1e1" class="student-prompt" rows="5" placeholder="Write your prompt here..."></textarea>
    <div class="editor-hints">
      💡 Tip: Just ask for what you want clearly. "List the times..."
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
    const exerciseConfig = exercises.module1_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m1e1').textContent = transcript.transcript;
    new CourseExercise('m1e1', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

<div id="lesson-2"></div>

## Lesson 2: Zero-Shot vs. Few-Shot

In AI terms, a "Shot" is an example.

- **Zero-Shot**: Asking the AI to do something without giving any examples.
  - *Example: "Translate this to Spanish."*
- **Few-Shot**: Giving the AI one or more examples of what you want.
  - *Example: "Translate this to Spanish. Example: Hello -> Hola. Text: Goodbye."*

**Few-Shot is almost always better.** It shows the AI the *pattern* you want it to follow.

### Exercise 1.2: The Power of Examples

Now, let's try to get that same email data into a specific format: **JSON** (a format computers use). This is hard to describe in words, but easy to show with an example.

<div class="course-exercise" id="m1e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.2: Zero-Shot vs Few-Shot</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Extract the meeting times into a JSON object. Try providing an example (Few-Shot) to get the format exactly right.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Source Email</span></summary>
    <div class="transcript-content" id="transcript-content-m1e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e2">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m1e2" class="student-prompt" rows="10" placeholder="Try giving an example...
    
Example format:
{
  'name': '...'
}

Now process this email:"></textarea>
    <div class="editor-hints">
      💡 Tip: Define the structure you want by showing an example of it.
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
    const exerciseConfig = exercises.module1_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m1e2').textContent = transcript.transcript;
    new CourseExercise('m1e2', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

<div id="lesson-3"></div>

## Lesson 3: The Context Window

The **Context Window** is the "short-term memory" of the AI. It's the maximum amount of text the AI can consider at one time.

If you paste a 50-page medical record, the AI might "forget" the beginning by the time it reads the end. Or, it might hallucinate details because it's overwhelmed.

**Key Concept**: You must be specific about *where* the AI should look.

### Exercise 1.3: Finding the Needle

Now we switch to a medical transcript. It's long. Your job is to find one specific detail without making the AI hallucinate.

<div class="course-exercise" id="m1e3">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.3: The Context Window</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Find exactly what the patient said about their diet. Do not include other details.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View <span class="input-label-text">Patient Transcript</span></summary>
    <div class="transcript-content" id="transcript-content-m1e3">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e3">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m1e3" class="student-prompt" rows="5" placeholder="Based on the transcript..."></textarea>
    <div class="editor-hints">
      💡 Tip: Use phrases like "Based ONLY on the text provided..."
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
      <a href="/courses/clinical-prompt-engineering/module-2/" class="btn-next-exercise">Continue to Module 2 →</a>
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
    const exerciseConfig = exercises.module1_exercise3;
    const transcript = transcripts[exerciseConfig.transcript];
    document.getElementById('transcript-content-m1e3').textContent = transcript.transcript;
    new CourseExercise('m1e3', { ...exerciseConfig, transcript: transcript.transcript, input_label: exerciseConfig.input_label });
  })();
</script>

---

## Module 1 Complete! 🎉

You've mastered the basics! You now understand:
- **Prompts** are just instructions.
- **Examples (Few-Shot)** make prompts much more powerful.
- **Context** is key to accuracy.

Next, we'll apply these concepts to build full clinical notes.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-2/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; font-size: 1.125rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 2 →</a>
</div>
