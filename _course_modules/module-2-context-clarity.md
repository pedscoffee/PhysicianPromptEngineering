---
layout: course_module
title: "Module 2: Context & Clarity"
course: clinical-prompt-engineering
module_number: 2
permalink: /courses/clinical-prompt-engineering/module-2/
description: "Learn to enhance prompts with clinical context and handle ambiguous information"
duration: "75 minutes"
difficulty: "intermediate"
previous_module: "/courses/clinical-prompt-engineering/module-1/"
next_module: "/courses/clinical-prompt-engineering/module-3/"
---

## Welcome to Module 2!

Now that you've mastered the basics, it's time to add clinical sophistication to your prompts. In this module, you'll learn how to provide context, handle ambiguity, and create specialty-specific documentation.

### Learning Objectives

- ✅ Add clinical context to guide AI decision-making
- ✅ Handle incomplete or ambiguous information appropriately
- ✅ Create specialty-specific prompt templates
- ✅ Emphasize medically important information

---

## Lesson 1: The Importance of Clinical Context

### Why Context Matters in Clinical AI

Generic prompts create generic notes. But clinical documentation requires understanding of:

- **Clinical setting** (ED vs outpatient vs inpatient)
- **Purpose of the note** (handoff vs billing vs medicolegal)
- **Clinical priorities** (what's most important to emphasize)
- **Risk considerations** (what could be dangerous to miss)

### Adding Context to Your Prompts

**Without Context:**
```
Create a SOAP note from this ER visit.
```

**With Context:**
```
Create an Emergency Department SOAP note for this chest pain case.
Emphasize:
- Risk stratification (cardiac vs non-cardiac)
- Key negatives supporting the diagnosis
- Return precautions for dangerous symptoms

This note will be used for handoff to PCP and medical-legal documentation.
```

### Clinical Decision Support Through Prompts

You can guide the AI to highlight clinically important elements:

- "Note any red flags for serious pathology"
- "Include relevant risk scoring if applicable"
- "Emphasize pertinent negatives"
- "Show clinical reasoning for the diagnosis"

---

## Exercise 2.1: Adding Clinical Context

Practice adding meaningful clinical context to your prompts.

<div class="course-exercise" id="m2e1">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.1: Adding Clinical Context</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Enhance your prompt with clinical context and decision-making guidance for an Emergency Department chest pain case.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Sample Patient Transcript (ER - Chest Pain)</summary>
    <div class="transcript-content" id="transcript-m2e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label>✍️ Your Context-Rich Prompt:</label>
    <textarea id="student-prompt-m2e1" class="student-prompt" rows="10" placeholder="Think about:
- What setting is this? (Emergency Department)
- What are the critical decisions? (Cardiac vs non-cardiac)
- What MUST be documented for safety? (Risk factors, red flags)
- How will this note be used? (Handoff, medical-legal)"></textarea>
    <div class="editor-hints">
      💡 Tip: Consider what a cardiologist reviewing this note would want to see emphasized.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example</button>
  </div>

  <div class="exercise-output">
    <h4>Generated Output:</h4>
    <div class="output-content"></div>
  </div>

  <div class="exercise-feedback">
    <div class="feedback-strengths"><h4>✅ Strengths</h4><ul></ul></div>
    <div class="feedback-improvements"><h4>💡 Improvements</h4><ul></ul></div>
    <div class="feedback-score"><h4>Your Score</h4><div class="score-value">0</div><div class="score-status"></div></div>
    <div class="example-improvement"><h4>Example:</h4><p></p></div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <button class="btn-next-exercise" onclick="document.getElementById('m2e2').scrollIntoView({behavior: 'smooth'});">Next Exercise →</button>
    </div>
  </div>

  <div class="exercise-progress">
    Attempts: <span class="attempt-count">0</span> | Best: <span class="best-score">-</span>/10
  </div>
</div>

<script>
(function() {
  const ex = window.courseExercises.module2_exercise1;
  const tr = window.courseTranscripts[ex.transcript];
  document.getElementById('transcript-m2e1').textContent = tr.transcript;
  new CourseExercise('m2e1', { ...ex, transcript: tr.transcript });
})();
</script>

---

## Lesson 2: Handling Ambiguous Information

### The Reality of Clinical Documentation

Real-world clinical data is messy:
- Information may be incomplete
- Details might be unclear or contradictory
- Not everything is always documented

### Your Prompt Should Handle This

Instead of letting the AI make assumptions, instruct it to:

**Mark Missing Information:**
```
If vital information is missing, note "[not documented]"
rather than inventing data.
```

**Distinguish Sources:**
```
Differentiate between:
- Patient reports: "Patient states..."
- Objective findings: "Exam reveals..."
- Unclear data: "History unclear for..."
```

**Request Clarification Flags:**
```
If severity assessment is ambiguous, state:
"Appears [mild/moderate/severe] based on [specific criteria]"
```

---

## Exercise 2.2: Handling Ambiguous Information

Learn to write prompts that preserve accuracy when information is unclear.

<div class="course-exercise" id="m2e2">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.2: Handling Ambiguity</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Write a prompt that handles incomplete or ambiguous information appropriately without making unsafe assumptions.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Patient Transcript (Pediatric Asthma)</summary>
    <div class="transcript-content" id="transcript-m2e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label>✍️ Your Ambiguity-Aware Prompt:</label>
    <textarea id="student-prompt-m2e2" class="student-prompt" rows="10" placeholder="Your prompt should instruct the AI to:
- Note missing information clearly
- Distinguish between facts and reports
- Indicate uncertainty appropriately
- Never invent data"></textarea>
    <div class="editor-hints">
      💡 Tip: Clinical safety requires accuracy over completeness. Flag gaps rather than guessing.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example</button>
  </div>

  <div class="exercise-output"><h4>Generated Output:</h4><div class="output-content"></div></div>
  <div class="exercise-feedback">
    <div class="feedback-strengths"><h4>✅ Strengths</h4><ul></ul></div>
    <div class="feedback-improvements"><h4>💡 Improvements</h4><ul></ul></div>
    <div class="feedback-score"><h4>Your Score</h4><div class="score-value">0</div><div class="score-status"></div></div>
    <div class="example-improvement"><h4>Example:</h4><p></p></div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <button class="btn-next-exercise" onclick="document.getElementById('m2e3').scrollIntoView({behavior: 'smooth'});">Next Exercise →</button>
    </div>
  </div>
  <div class="exercise-progress">Attempts: <span class="attempt-count">0</span> | Best: <span class="best-score">-</span>/10</div>
</div>

<script>
(function() {
  const ex = window.courseExercises.module2_exercise2;
  const tr = window.courseTranscripts[ex.transcript];
  document.getElementById('transcript-m2e2').textContent = tr.transcript;
  new CourseExercise('m2e2', { ...ex, transcript: tr.transcript });
})();
</script>

---

## Lesson 3: Specialty-Specific Templates

### Adapting to Different Specialties

Each specialty has unique documentation needs:
- **OB/GYN**: G/P notation, gestational age, fetal monitoring
- **Pediatrics**: Growth percentiles, developmental milestones
- **Surgery**: Procedure details, operative findings
- **Psychiatry**: Mental status exam, risk assessment

### Creating Specialty Templates

Your prompts should incorporate specialty-specific:

1. **Terminology** (G2P1001 for OB, Tanner staging for peds)
2. **Required elements** (fundal height in OB visits)
3. **Standard assessments** (PHQ-9 in psychiatry)
4. **Formatting conventions** (problem-based in internal medicine)

---

## Exercise 2.3: Specialty-Specific Prompts

Create a prompt tailored for OB prenatal documentation.

<div class="course-exercise" id="m2e3">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise 2.3: OB-Specific Template</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-intermediate">Intermediate</span>
      <span class="exercise-time">⏱ 20 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Create a prompt with specialty-specific requirements and terminology for an OB prenatal visit.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Patient Transcript (OB Prenatal Visit)</summary>
    <div class="transcript-content" id="transcript-m2e3">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label>✍️ Your Specialty-Specific Prompt:</label>
    <textarea id="student-prompt-m2e3" class="student-prompt" rows="12" placeholder="Include OB-specific elements:
- G/P notation and gestational age
- Fetal assessment (heart tones, movement, position)
- Maternal vitals and weight gain
- Screening tests and results
- Standard OB abbreviations and format"></textarea>
    <div class="editor-hints">
      💡 Tip: Think about what an OB colleague would expect to see in a prenatal visit note.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run Prompt</button>
    <button class="btn-hint">Get Hint</button>
    <button class="btn-view-example">View Example</button>
  </div>

  <div class="exercise-output"><h4>Generated Output:</h4><div class="output-content"></div></div>
  <div class="exercise-feedback">
    <div class="feedback-strengths"><h4>✅ Strengths</h4><ul></ul></div>
    <div class="feedback-improvements"><h4>💡 Improvements</h4><ul></ul></div>
    <div class="feedback-score"><h4>Your Score</h4><div class="score-value">0</div><div class="score-status"></div></div>
    <div class="example-improvement"><h4>Example:</h4><p></p></div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Try Again</button>
      <a href="/courses/clinical-prompt-engineering/module-3/" class="btn-next-exercise">Continue to Module 3 →</a>
    </div>
  </div>
  <div class="exercise-progress">Attempts: <span class="attempt-count">0</span> | Best: <span class="best-score">-</span>/10</div>
</div>

<script>
(function() {
  const ex = window.courseExercises.module2_exercise3;
  const tr = window.courseTranscripts[ex.transcript];
  document.getElementById('transcript-m2e3').textContent = tr.transcript;
  new CourseExercise('m2e3', { ...ex, transcript: tr.transcript });
})();
</script>

---

## Module 2 Complete! 🎉

Great work! You've learned how to add clinical sophistication to your prompts:

✅ Providing clinical context and priorities
✅ Handling ambiguous information safely
✅ Creating specialty-specific templates

### Key Takeaways

1. **Context guides quality**: Tell the AI what's clinically important
2. **Accuracy over completeness**: Flag gaps rather than inventing data
3. **Specialty matters**: Customize for your field's needs
4. **Clinical thinking**: Your prompts should reflect medical reasoning

### What's Next?

In **Module 3**, you'll tackle advanced techniques for complex cases, procedure notes, and clinical reasoning documentation.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/courses/clinical-prompt-engineering/module-3/" class="btn-primary" style="display: inline-block; padding: 1rem 2rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">Continue to Module 3 →</a>
</div>

---

<div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
  <a href="/courses/clinical-prompt-engineering/">← Back to Course Overview</a>
</div>
