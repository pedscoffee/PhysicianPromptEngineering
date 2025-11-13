---
layout: course_module
title: "Module 1: Fundamentals of AI-Assisted Documentation"
course: clinical-prompt-engineering
module_number: 1
permalink: /courses/clinical-prompt-engineering/module-1/
description: "Master the basics of prompt engineering for clinical documentation"
duration: "60 minutes"
difficulty: "beginner"
next_module: "/courses/clinical-prompt-engineering/module-2/"
---

## Welcome to Module 1!

In this module, you'll learn the fundamentals of writing effective prompts for AI-assisted clinical documentation. We'll start with basic SOAP notes and progressively add more sophistication to your prompts.

### Learning Objectives

By the end of this module, you will be able to:

- ✅ Write prompts that generate properly formatted SOAP notes
- ✅ Add specificity to improve output quality
- ✅ Control formatting and structure through prompt design
- ✅ Understand the relationship between prompt clarity and output quality

---

## Lesson 1: Introduction to Clinical AI Prompting

### Why Prompt Engineering Matters

When you use AI to assist with clinical documentation, the quality of your prompt directly impacts the quality of the output. A well-crafted prompt:

- **Saves time** by generating accurate documentation on the first try
- **Improves consistency** across your notes
- **Reduces cognitive load** by clearly specifying what you need
- **Ensures compliance** with documentation standards

### The Anatomy of a Good Clinical Prompt

A good prompt for clinical documentation typically includes:

1. **Clear Objective**: What type of note are you creating?
2. **Format Specification**: How should the output be structured?
3. **Content Guidelines**: What information to include/exclude?
4. **Context**: Any special considerations for this case?

### Example: From Basic to Better

**Basic (Vague) Prompt:**
```
Write a note about this patient.
```

**Better (Specific) Prompt:**
```
Create a SOAP note from this patient encounter.
Format with clear sections for Subjective, Objective,
Assessment, and Plan. Use professional medical terminology.
```

**Best (Detailed) Prompt:**
```
Generate a SOAP note from the following patient encounter:

Subjective: Include chief complaint and HPI
Objective: List vitals first, then exam findings by system
Assessment: Primary diagnosis
Plan: Numbered list of interventions and follow-up

Use standard medical abbreviations. Keep it concise and professional.
```

---

## Exercise 1.1: Your First SOAP Note Prompt

Let's put this into practice! For this exercise, you'll write a prompt that generates a basic SOAP note.

<div class="course-exercise" id="m1e1">

  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.1: Your First SOAP Note Prompt</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p id="exercise-goal-text">Create a prompt that generates a basic SOAP note from the patient transcript provided.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Sample Patient Transcript</summary>
    <div class="transcript-content" id="transcript-content">Loading transcript...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e1">✍️ Your Prompt:</label>
    <textarea id="student-prompt-m1e1" class="student-prompt" rows="8" placeholder="Write your prompt here...

Example to get you started:
Generate a SOAP note from the following patient encounter..."></textarea>
    <div class="editor-hints">
      💡 Tip: Be specific about the output format you want. Mention SOAP sections explicitly.
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
      <button class="btn-next-exercise" onclick="document.getElementById('m1e2').scrollIntoView({behavior: 'smooth'});">Next Exercise →</button>
    </div>
  </div>

  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best Score: <span class="best-score">-</span>/10
  </div>

</div>

<script>
  // Initialize Exercise 1.1
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;

    if (!transcripts || !exercises) {
      console.error('Course data not loaded');
      return;
    }

    const exerciseConfig = exercises.module1_exercise1;
    const transcript = transcripts[exerciseConfig.transcript];

    // Populate transcript
    document.getElementById('transcript-content').textContent = transcript.transcript;

    // Initialize exercise with config
    const exercise = new CourseExercise('m1e1', {
      ...exerciseConfig,
      transcript: transcript.transcript
    });
  })();
</script>

---

## Lesson 2: Adding Specificity

Great job on your first exercise! Now let's level up. You've seen how a basic prompt works, but clinical documentation requires precision. Let's learn how to add specificity.

### Why Specificity Matters

Generic prompts often produce generic outputs. In clinical documentation, you need:

- **Consistent formatting** for easy scanning
- **Appropriate level of detail** (not too brief, not too verbose)
- **Standard medical terminology** and abbreviations
- **Logical organization** of information

### Techniques for Adding Specificity

1. **Specify formatting details**
   - "Use bullet points for the plan"
   - "Number each plan item"
   - "List vitals in this order: BP, HR, Temp, RR"

2. **Set length guidelines**
   - "Keep the note concise, approximately 200-300 words"
   - "Provide a brief one-line assessment"

3. **Request specific content**
   - "Include ICD-10 codes if applicable"
   - "Emphasize patient education in the plan"
   - "Note any pertinent negatives"

4. **Use examples or templates**
   - "Format the assessment as: [Diagnosis] - [Status]"
   - "Start each plan item with an action verb"

---

## Exercise 1.2: Adding Specificity to Your Prompts

Now you'll enhance your prompting skills by adding specific formatting and content requirements.

<div class="course-exercise" id="m1e2">

  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.2: Adding Specificity to Your Prompts</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Improve your prompt with specific formatting and content requirements. Your prompt should specify exactly how the SOAP note should be structured and what details to emphasize.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Sample Patient Transcript (New Patient - Diabetes)</summary>
    <div class="transcript-content" id="transcript-content-m1e2">Loading transcript...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e2">✍️ Your Enhanced Prompt:</label>
    <textarea id="student-prompt-m1e2" class="student-prompt" rows="10" placeholder="Build on what you learned in Exercise 1.1...

This time, add specific instructions about:
- How to format each section
- What level of detail to include
- Any special emphasis or requirements"></textarea>
    <div class="editor-hints">
      💡 Tip: Think about how YOU would want to see this note formatted if you were reviewing it later. Be specific!
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
      <button class="btn-next-exercise" onclick="document.getElementById('m1e3').scrollIntoView({behavior: 'smooth'});">Next Exercise →</button>
    </div>
  </div>

  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best Score: <span class="best-score">-</span>/10
  </div>

</div>

<script>
  // Initialize Exercise 1.2
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;

    if (!transcripts || !exercises) return;

    const exerciseConfig = exercises.module1_exercise2;
    const transcript = transcripts[exerciseConfig.transcript];

    document.getElementById('transcript-content-m1e2').textContent = transcript.transcript;

    const exercise = new CourseExercise('m1e2', {
      ...exerciseConfig,
      transcript: transcript.transcript
    });
  })();
</script>

---

## Lesson 3: Format Control and Templates

Excellent progress! You've learned to write specific prompts. Now let's take it further with template-based prompting.

### The Power of Templates

Templates provide consistency and ensure nothing is missed. They're especially valuable when:

- You create the same type of note repeatedly
- You need to ensure compliance with specific formats
- You're working with team members who need standardized notes

### Creating Effective Templates

A good template:

1. **Has clear placeholders** for where information should go
2. **Maintains professional structure** that's easy to scan
3. **Includes all required elements** for that note type
4. **Uses consistent formatting** (bullets, numbering, etc.)

### Template Example

Instead of just describing what you want, provide the actual structure:

```
Fill in the following template based on the encounter:

SUBJECTIVE:
Chief Complaint: [State in patient's own words]
HPI: [Chronological narrative]
PMH: [Relevant history]

OBJECTIVE:
Vitals: [BP, HR, Temp]
Physical Exam:
  - General: [Appearance]
  - [Relevant systems]: [Findings]

ASSESSMENT:
[Primary diagnosis]

PLAN:
1. [Treatment/medication]
2. [Follow-up]
3. [Patient education]
```

---

## Exercise 1.3: Format Control and Templates

For your final exercise in this module, you'll create a prompt that uses a template structure.

<div class="course-exercise" id="m1e3">

  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 1.3: Format Control and Templates</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Create a prompt that provides a specific template for the AI to fill in. This ensures consistent formatting across all notes generated with this prompt.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Sample Patient Transcript (Urgent Care - Ankle Injury)</summary>
    <div class="transcript-content" id="transcript-content-m1e3">Loading transcript...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-m1e3">✍️ Your Template-Based Prompt:</label>
    <textarea id="student-prompt-m1e3" class="student-prompt" rows="12" placeholder="Create a prompt that includes an actual template structure...

Your prompt should:
1. Instruct the AI to fill in a template
2. Provide the template with clear placeholders
3. Specify formatting rules
4. Be reusable for similar cases"></textarea>
    <div class="editor-hints">
      💡 Tip: Think of this as creating a reusable template you could use for every urgent care visit.
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
  // Initialize Exercise 1.3
  (function() {
    const transcripts = window.courseTranscripts;
    const exercises = window.courseExercises;

    if (!transcripts || !exercises) return;

    const exerciseConfig = exercises.module1_exercise3;
    const transcript = transcripts[exerciseConfig.transcript];

    document.getElementById('transcript-content-m1e3').textContent = transcript.transcript;

    const exercise = new CourseExercise('m1e3', {
      ...exerciseConfig,
      transcript: transcript.transcript
    });
  })();
</script>

---

## Module 1 Complete! 🎉

Congratulations on completing Module 1! You've learned the fundamentals of prompt engineering for clinical documentation:

✅ Writing clear, structured prompts for SOAP notes
✅ Adding specificity to improve output quality
✅ Using templates for consistent formatting

### Key Takeaways

1. **Clarity is king**: The more specific your prompt, the better your output
2. **Structure matters**: Provide clear formatting instructions
3. **Templates ensure consistency**: Reusable templates save time and improve quality
4. **Iteration improves results**: Don't expect perfection on the first try

### What's Next?

In **Module 2**, you'll learn how to add clinical context to your prompts, handle ambiguous information, and create specialty-specific templates.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-2/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; font-size: 1.125rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 2 →</a>
</div>

---

<div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
  <a href="/courses/clinical-prompt-engineering/">← Back to Course Overview</a>
</div>
