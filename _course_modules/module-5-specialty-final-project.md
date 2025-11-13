---
layout: course_module
title: "Module 5: Specialty Applications & Final Project"
course: clinical-prompt-engineering
module_number: 5
permalink: /courses/clinical-prompt-engineering/module-5/
description: "Create custom prompts for your specialty and build your personal prompt library"
duration: "120 minutes"
difficulty: "advanced"
previous_module: "/courses/clinical-prompt-engineering/module-4/"
---

## Welcome to the Final Module!

You've learned the fundamentals, mastered advanced techniques, and understood safety principles. Now it's time to apply everything to YOUR practice. In this module, you'll create specialty-specific prompts and build a personal prompt library you can actually use.

### Learning Objectives

- ✅ Adapt prompts to your specialty's unique needs
- ✅ Create comprehensive specialty-specific workflows
- ✅ Build a reusable prompt library
- ✅ Integrate AI documentation into your practice

---

## Lesson 1: Specialty Customization

### Every Specialty is Unique

Different specialties have different needs:

**Gastroenterology**:
- Procedure-heavy documentation
- Quality metrics (cecal intubation, withdrawal time)
- Specific anatomic descriptions
- Billing code requirements

**Cardiology**:
- Hemodynamic parameters
- ECG interpretation
- Stress test protocols
- Device interrogation

**Emergency Medicine**:
- Risk stratification emphasis
- Disposition planning
- Medical-legal considerations
- Quick but thorough documentation

**Family Medicine**:
- Preventive care tracking
- Chronic disease management
- Comprehensive care coordination
- Broad differential considerations

### Building Your Specialty System

To create effective specialty prompts:

1. **Identify common scenarios** in your practice
2. **List required elements** for each scenario
3. **Define specialty terminology** and abbreviations
4. **Incorporate quality metrics** relevant to your field
5. **Consider billing/coding** requirements
6. **Include safety checks** specific to your specialty

---

## Exercise 5.1: Custom Specialty Workflow

<div class="course-exercise" id="m5e1">
  <div class="exercise-header">
    <h3>Exercise 5.1: Specialty-Specific System</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span>⏱ 30 min</span>
    </div>
  </div>

  <div class="llm-status">Ready</div>

  <div class="exercise-goal">
    <h3>🎯 Challenge</h3>
    <p>Create a comprehensive prompt system tailored to a specific specialty's documentation needs, including quality metrics and billing considerations.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 Sample Scenario (Gastroenterology Procedure)</summary>
    <div class="transcript-content" id="transcript-m5e1">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label>✍️ Your Specialty System Prompt:</label>
    <textarea id="student-prompt-m5e1" class="student-prompt" rows="14" placeholder="Create a comprehensive specialty-specific prompt:

1. Specialty requirements (terminology, standards)
2. Common visit/procedure types
3. Quality metrics tracking
4. Billing code optimization
5. Safety checks
6. Workflow integration points

Make it detailed and ready for real-world use!"></textarea>
    <div class="editor-hints">💡 This should be a production-ready system you could actually use in your practice.</div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run</button>
    <button class="btn-hint">Hint</button>
    <button class="btn-view-example">Example</button>
  </div>

  <div class="exercise-output"><h4>Output:</h4><div class="output-content"></div></div>
  <div class="exercise-feedback">
    <div class="feedback-strengths"><h4>✅ Strengths</h4><ul></ul></div>
    <div class="feedback-improvements"><h4>💡 Improvements</h4><ul></ul></div>
    <div class="feedback-score"><h4>Score</h4><div class="score-value">0</div><div class="score-status"></div></div>
    <div class="example-improvement"><h4>Example:</h4><p></p></div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Retry</button>
      <button class="btn-next-exercise" onclick="document.getElementById('m5e2').scrollIntoView({behavior: 'smooth'});">Next →</button>
    </div>
  </div>
  <div class="exercise-progress">Attempts: <span class="attempt-count">0</span> | Best: <span class="best-score">-</span>/10</div>
</div>

<script>
(function() {
  const ex = window.courseExercises.module5_exercise1;
  const tr = window.courseTranscripts[ex.transcript];
  document.getElementById('transcript-m5e1').textContent = tr.transcript;
  new CourseExercise('m5e1', { ...ex, transcript: tr.transcript });
})();
</script>

---

## Lesson 2: Multi-Encounter Documentation

### Beyond Single Visits

Real practice requires:
- **Continuity summaries** for transitions of care
- **Problem tracking** across multiple visits
- **Longitudinal trends** in chronic disease management
- **Care coordination** documentation

### Creating Summary Documentation

For complex or longitudinal care:

```
Purpose: Create continuity of care summary

Include:
1. Problem list with status and dates
2. Current medications with recent changes
3. Recent clinical course and hospitalizations
4. Consultant involvement
5. Upcoming needs and pending tests
6. Goals of care
7. Social determinants affecting care

Format for easy scanning - provider should grasp
patient's status in <2 minutes of reading.
```

---

## Exercise 5.2: Multi-Encounter Summary

<div class="course-exercise" id="m5e2">
  <div class="exercise-header">
    <h3>Exercise 5.2: Longitudinal Care Summary</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span>⏱ 30 min</span>
    </div>
  </div>

  <div class="llm-status">Ready</div>

  <div class="exercise-goal">
    <h3>🎯 Challenge</h3>
    <p>Create a prompt that synthesizes information across time to produce comprehensive continuity summaries.</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 Complex Patient Summary Scenario</summary>
    <div class="transcript-content" id="transcript-m5e2">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label>✍️ Your Longitudinal Summary Prompt:</label>
    <textarea id="student-prompt-m5e2" class="student-prompt" rows="14" placeholder="Create a prompt for continuity summaries:

- Synthesize longitudinal information
- Track problem evolution
- Identify trends
- Coordinate care
- Plan future needs

This should help with handoffs, referrals, and care transitions."></textarea>
    <div class="editor-hints">💡 Think about receiving a complex patient - what summary would help you understand them quickly?</div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Run</button>
    <button class="btn-hint">Hint</button>
    <button class="btn-view-example">Example</button>
  </div>

  <div class="exercise-output"><h4>Output:</h4><div class="output-content"></div></div>
  <div class="exercise-feedback">
    <div class="feedback-strengths"><h4>✅ Strengths</h4><ul></ul></div>
    <div class="feedback-improvements"><h4>💡 Improvements</h4><ul></ul></div>
    <div class="feedback-score"><h4>Score</h4><div class="score-value">0</div><div class="score-status"></div></div>
    <div class="example-improvement"><h4>Example:</h4><p></p></div>
    <div class="criteria-details"></div>
    <div class="exercise-actions">
      <button class="btn-retry">Retry</button>
      <button class="btn-next-exercise" onclick="document.getElementById('final-project').scrollIntoView({behavior: 'smooth'});">Continue to Final Project →</button>
    </div>
  </div>
  <div class="exercise-progress">Attempts: <span class="attempt-count">0</span> | Best: <span class="best-score">-</span>/10</div>
</div>

<script>
(function() {
  const ex = window.courseExercises.module5_exercise2;
  const tr = window.courseTranscripts[ex.transcript];
  document.getElementById('transcript-m5e2').textContent = tr.transcript;
  new CourseExercise('m5e2', { ...ex, transcript: tr.transcript });
})();
</script>

---

## Final Project: Build Your Personal Prompt Library

<div id="final-project" style="background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%); color: white; padding: 3rem 2rem; border-radius: 1rem; margin: 3rem 0;">
  <h2 style="color: white; margin-bottom: 1.5rem;">🏆 Final Project</h2>
  <p style="font-size: 1.125rem; opacity: 0.95; margin-bottom: 1rem;">
    Now it's time to create something you'll actually use in your practice: a personal prompt library tailored to YOUR specific needs.
  </p>
</div>

### Project Requirements

Create a comprehensive prompt library with **at least 5 prompts** covering:

1. **Your most common visit type**
   - Example: Routine follow-up, new patient, annual physical
   - Should be highly optimized since you'll use it often

2. **A complex/comprehensive visit**
   - For patients with multiple problems
   - Problem-based organization
   - Care coordination elements

3. **A procedure note** (if applicable) or **specialized documentation**
   - All required elements for billing and medical-legal
   - Quality metrics if applicable
   - Specialty-specific standards

4. **A follow-up visit template**
   - Tracks changes from baseline
   - Documents interval history
   - Plans next steps

5. **Your specialty-specific scenario**
   - Whatever unique situation your field encounters
   - Could be urgent care, specialty consult, discharge summary, etc.

### Quality Standards

Each prompt should include:

✅ **Clear purpose**: What is this prompt for?
✅ **Specific formatting**: Exact structure desired
✅ **Quality checks**: Built-in verification
✅ **Safety measures**: Appropriate for clinical use
✅ **Specialty appropriateness**: Tailored to your field
✅ **Tested and refined**: Actually works well

### Organization

Format your library for real-world use:

- **Easy to access**: How will you find the right prompt quickly?
- **Clear labeling**: Each prompt clearly described
- **Version tracking**: Date your prompts as you improve them
- **Usage notes**: When to use each prompt
- **Examples**: Sample outputs to verify quality

### Deliverable Format

Create your prompt library as a document (text file, note, spreadsheet, etc.) that you could actually use during clinic.

**Suggested structure:**
```
MY CLINICAL PROMPT LIBRARY
Last Updated: [Date]

=================================
PROMPT 1: [Name/Purpose]
=================================
Use for: [When to use this]
Last tested: [Date]
Version: 1.0

Prompt:
[Your full prompt text]

Notes:
- [Usage tips]
- [Things to watch for]
- [When to modify]

=================================
PROMPT 2: [Name/Purpose]
=================================
[Continue for all 5+ prompts]
```

### Evaluation Criteria

Your prompt library will be evaluated on:

**Comprehensiveness** (20 points)
- All required prompt types included
- Covers your common scenarios
- Detailed and complete

**Quality & Safety** (20 points)
- Built-in quality checks
- Appropriate safety measures
- Clinically sound

**Specialty Customization** (20 points)
- Tailored to your specific practice
- Uses appropriate terminology
- Meets specialty standards

**Practical Usability** (20 points)
- Organized for real-world use
- Easy to find what you need
- Actually usable in practice

**Refinement & Polish** (20 points)
- Shows thoughtful iteration
- Evidence of testing
- Professional presentation

**Total: 100 points** (Passing: 70+)

---

### Project Workspace

<div class="course-exercise" id="m5fp">
  <div class="exercise-header">
    <h3>Final Project: Personal Prompt Library</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-advanced">Advanced</span>
      <span>⏱ 60+ min</span>
    </div>
  </div>

  <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
    <h4 style="margin-top: 0; color: #92400e;">📝 Project Instructions</h4>
    <p style="color: #78350f; margin-bottom: 0;">
      Create your prompt library in your preferred format (document, note-taking app, etc.). When ready, you can test individual prompts using the exercise area below, or simply save your library for real-world use.
    </p>
  </div>

  <div class="exercise-editor">
    <label>✍️ Test Your Prompts Here:</label>
    <textarea id="student-prompt-m5fp" class="student-prompt" rows="16" placeholder="Use this space to test prompts from your library.

Copy and paste prompts you've created, then test them with the provided transcripts (or imagine your own scenarios).

This is your workspace to refine and perfect your prompts before adding them to your final library."></textarea>
    <div class="editor-hints">
      💡 Test each prompt thoroughly. Iterate based on the output. A good prompt might take 3-5 revisions to perfect.
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Test Prompt</button>
  </div>

  <div class="exercise-output"><h4>Output:</h4><div class="output-content"></div></div>
  <div class="exercise-progress">Test Runs: <span class="attempt-count">0</span></div>
</div>

<script>
(function() {
  // For final project, allow testing with any available transcript
  const transcripts = window.courseTranscripts;

  // Use a general configuration for testing
  const projectConfig = {
    id: 'm5fp',
    goal: 'Build and test your personal prompt library',
    transcript: transcripts.outpatient_hypertension_followup.transcript,
    rubric: {
      criteria: [
        { name: "Comprehensiveness", points: 20, description: "Covers all required elements" },
        { name: "Quality & Safety", points: 20, description: "Includes appropriate checks" },
        { name: "Specialty Customization", points: 20, description: "Tailored to practice" },
        { name: "Practical Usability", points: 20, description: "Organized for real use" },
        { name: "Refinement", points: 20, description: "Shows iteration and polish" }
      ],
      total_points: 100,
      passing_score: 70
    }
  };

  new CourseExercise('m5fp', projectConfig);
})();
</script>

---

## Submission & Next Steps

### Your Prompt Library is Complete When:

✅ You have at least 5 comprehensive prompts
✅ Each prompt has been tested and refined
✅ Everything is organized for easy access
✅ You feel confident using it in real practice
✅ You've documented usage notes and tips

### Real-World Integration

To actually use your prompt library:

1. **Save it accessibly**: Quick access during clinic
   - Cloud note (Google Docs, OneNote, Notion)
   - Text file on desktop
   - Snippet manager tool
   - EMR macro system (if supported)

2. **Create shortcuts**:
   - Keyboard shortcuts for common prompts
   - Bookmarks or quick links
   - Voice commands (if using dictation)

3. **Iterate continuously**:
   - Note what works and what doesn't
   - Refine based on actual use
   - Add new prompts as needs arise
   - Version control your improvements

4. **Share with colleagues** (if appropriate):
   - Teach others prompt engineering
   - Collaborate on specialty-specific prompts
   - Contribute to open-source libraries

### Continuing Education

Keep improving your prompt engineering:

- **Stay updated**: AI capabilities evolve quickly
- **Join communities**: Share and learn from others
- **Contribute back**: Help improve open-source prompts
- **Teach**: The best way to master is to teach others

---

## Course Complete! 🎉🏆

### Congratulations!

You've completed the Clinical Prompt Engineering for Physicians course! You now have:

✅ Solid foundation in prompt engineering principles
✅ Understanding of clinical context and safety
✅ Advanced techniques for complex documentation
✅ Knowledge of AI limitations and quality assurance
✅ A personal prompt library ready for real-world use

### What You've Learned

**Module 1**: Fundamentals of structure and formatting
**Module 2**: Clinical context and ambiguity handling
**Module 3**: Advanced techniques for complex cases
**Module 4**: Safety, quality, and privacy
**Module 5**: Specialty customization and real-world application

### Impact on Your Practice

With these skills, you can:

- **Save time** on clinical documentation
- **Improve consistency** across your notes
- **Reduce cognitive load** during busy clinics
- **Maintain quality** with built-in checks
- **Focus more on patients** and less on typing

### Stay Connected

This is an evolving field. Consider:

- Revisiting modules as AI technology improves
- Sharing your successful prompts with the community
- Providing feedback on course content
- Helping other physicians learn prompt engineering

### Thank You!

Thank you for investing time in learning these skills. Better tools for documentation mean more time for what matters most: patient care.

---

<div style="text-align: center; margin: 4rem 0; padding: 3rem 2rem; background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); border-radius: 1rem; color: white;">
  <h2 style="color: white; margin-bottom: 1rem;">🎓 Certificate of Completion</h2>
  <p style="font-size: 1.25rem; margin-bottom: 1.5rem;">You have successfully completed:</p>
  <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">Clinical Prompt Engineering for Physicians</p>
  <p style="opacity: 0.9;">An interactive course in AI-assisted clinical documentation</p>

  <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.3);">
    <button onclick="CourseProgress.exportProgress()" class="btn-secondary" style="background: white; color: #2563eb; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; margin-right: 1rem;">Export Your Progress</button>
    <a href="/courses/clinical-prompt-engineering/" style="color: white; text-decoration: underline;">Review Course Overview</a>
  </div>
</div>

---

<div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
  <a href="/courses/clinical-prompt-engineering/">← Back to Course Overview</a>
</div>
