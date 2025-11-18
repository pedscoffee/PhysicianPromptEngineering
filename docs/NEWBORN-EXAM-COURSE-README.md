# Newborn Pediatric Physical Exam Course - README

## Overview

This interactive course teaches the newborn physical exam through visual learning and AI-powered clinical reasoning assessment. Students analyze clinical images and scenarios, then receive detailed feedback on their diagnostic and decision-making skills.

## Course Structure

### 5 Modules, 15 Exercises, ~5 Hours Total

1. **Module 1: General Assessment & Vital Signs** (45 min, Beginner)
   - APGAR scoring
   - Vital signs interpretation
   - General appearance assessment

2. **Module 2: Head, Eyes, Ears, Nose, Throat** (60 min, Beginner)
   - Cranial findings (caput, cephalohematoma, fontanelles)
   - Eye exam and red reflex
   - Oral cavity findings

3. **Module 3: Cardiovascular & Respiratory** (60 min, Intermediate)
   - Heart murmur assessment
   - Respiratory distress recognition
   - Cyanosis evaluation

4. **Module 4: Abdomen, GU, & Musculoskeletal** (60 min, Intermediate)
   - Abdominal exam findings
   - Hip dysplasia screening
   - Extremity and spine assessment

5. **Module 5: Skin & Neurological** (75 min, Advanced)
   - Newborn skin findings
   - Primitive reflexes
   - Tone and neurological exam

## File Structure

```
PhysicianPromptEngineering/
├── newborn-exam-course.md                    # Main course landing page
├── _course_modules/
│   ├── newborn-module-1-general-assessment.md
│   ├── newborn-module-2-heent.md
│   ├── newborn-module-3-cardiac-respiratory.md
│   ├── newborn-module-4-abdomen-msk.md
│   └── newborn-module-5-skin-neuro.md
├── _data/
│   ├── newborn_exam_exercises.yml            # Exercise configurations
│   └── newborn_exam_scenarios.yml            # Clinical scenarios and cases
├── assets/js/
│   └── newborn-exam-exercise.js              # Exercise evaluation engine
└── docs/
    ├── newborn-exam-image-sources.md         # Image attribution & sourcing
    ├── newborn-exam-evaluation-prompts.md    # LLM evaluation system
    └── NEWBORN-EXAM-COURSE-README.md         # This file
```

## Technical Architecture

### Frontend
- **Jekyll static site** with Markdown content
- **Responsive HTML/CSS** for module pages
- **JavaScript exercise system** for interactivity
- **Browser-based LLM** for evaluation (MLC Web LLM)

### AI Evaluation
- **Model**: Llama-3.1-8B-Instruct (quantized for browser use)
- **First load**: ~2GB download (cached afterward)
- **Privacy**: All processing in-browser, no data sent to servers
- **Evaluation**: Clinical reasoning, finding identification, management decisions

### Data Files
- **YAML format** for exercises and scenarios
- **Jekyll integration** converts YAML to JSON for JavaScript
- **Modular design** allows easy content updates

## How to Add New Exercises

### Step 1: Create Clinical Scenario

Add to `_data/newborn_exam_scenarios.yml`:

```yaml
your_new_scenario:
  title: "Descriptive Title"
  difficulty: "beginner|intermediate|advanced"
  scenario: |
    Clinical case description...
    Patient demographics...
    Examination findings...
  expected_findings: |
    Correct interpretation...
    Teaching points...
  image_needed:
    type: "Description of image needed"
    source: "Where to find it"
    license: "Required license type"
```

### Step 2: Create Exercise Configuration

Add to `_data/newborn_exam_exercises.yml`:

```yaml
your_new_exercise:
  id: "unique_id"
  title: "Exercise Title"
  module: 1-5
  difficulty: "beginner|intermediate|advanced"
  estimated_time: "X minutes"
  scenario: "your_new_scenario"
  goal: "Learning objective for this exercise"
  instructions: |
    What the student should do...
  rubric:
    criteria:
      - name: "Criterion Name"
        points: 3
        description: "What this evaluates"
      - name: "Another Criterion"
        points: 2
        description: "What this evaluates"
    total_points: 10
    passing_score: 7
  hints:
    - "Helpful hint 1"
    - "Helpful hint 2"
```

### Step 3: Add Exercise to Module Page

In the appropriate module file (`_course_modules/newborn-module-X-*.md`), add exercise HTML:

```html
<div class="course-exercise" id="your_exercise_id">
  <div class="exercise-header">
    <h3 class="exercise-title">Exercise Title</h3>
    <div class="exercise-meta">
      <span class="exercise-difficulty difficulty-beginner">Beginner</span>
      <span class="exercise-time">⏱ 15 minutes</span>
    </div>
  </div>

  <div class="llm-status">Ready to start</div>

  <div class="exercise-goal">
    <h3>🎯 Your Challenge</h3>
    <p>Exercise goal description...</p>
  </div>

  <details class="exercise-transcript">
    <summary>📋 View Clinical Scenario</summary>
    <div class="transcript-content" id="transcript-content-your-id">Loading...</div>
  </details>

  <div class="exercise-editor">
    <label for="student-prompt-your-id">✍️ Your Assessment:</label>
    <textarea id="student-prompt-your-id" class="student-prompt" rows="12"
              placeholder="Assessment guidance..."></textarea>
    <div class="editor-hints">
      💡 Tip: Helpful tip for students
    </div>
    <div class="hint-display"></div>
    <div class="error-message"></div>
    <button class="btn-run-exercise">Submit Assessment</button>
    <button class="btn-hint">Get Hint</button>
  </div>

  <!-- Output, feedback, and progress sections follow same pattern -->
</div>

<script>
  (function() {
    const scenarios = window.newbornScenarios;
    const exercises = window.newbornExercises;

    if (!scenarios || !exercises) return;

    const exerciseConfig = exercises.your_new_exercise;
    const scenario = scenarios[exerciseConfig.scenario];

    document.getElementById('transcript-content-your-id').textContent = scenario.scenario;

    const exercise = new NewbornExercise('your_exercise_id', {
      ...exerciseConfig,
      scenario: scenario.scenario,
      expectedFindings: scenario.expected_findings
    });
  })();
</script>
```

## How to Add Clinical Images

### Image Sourcing Process

1. **Identify needed images** from `docs/newborn-exam-image-sources.md`
2. **Search approved sources**:
   - Wikimedia Commons
   - CDC Public Health Image Library
   - NIH MedPix
   - OpenPediatrics

3. **Verify license**: CC0, CC-BY, or Public Domain only

4. **Download and optimize**:
   ```bash
   # Resize to max 1200px width
   # Compress to <500KB
   # Save as JPEG or PNG
   ```

5. **Add to repository**:
   ```
   assets/images/newborn-exam/
   ├── module-1/
   ├── module-2/
   └── ...
   ```

6. **Document attribution** in `newborn-exam-image-sources.md`:
   ```markdown
   **Image**: Caput Succedaneum
   **Source**: https://commons.wikimedia.org/wiki/File:...
   **Author**: [Author name]
   **License**: CC-BY-SA 4.0
   **Modifications**: Cropped for educational focus
   **Attribution**: "Image by [Author], CC-BY-SA 4.0, via Wikimedia Commons"
   ```

7. **Add to module page**:
   ```html
   <div class="clinical-image">
     <img src="/assets/images/newborn-exam/module-2/caput-succedaneum.jpg"
          alt="Newborn head showing caput succedaneum - diffuse scalp swelling crossing suture lines"
          loading="lazy">
     <p class="image-attribution">
       Image: <a href="source-url">Caput Succedaneum</a> by Author Name,
       <a href="license-url">CC-BY-SA 4.0</a>
     </p>
   </div>
   ```

### Image Accessibility

Always include:
- **Descriptive alt text** (what the image shows clinically)
- **Figure captions** explaining the finding
- **Attribution** per license requirements

## Customizing LLM Evaluation

### Modify Evaluation Criteria

Edit rubric in `_data/newborn_exam_exercises.yml`:

```yaml
rubric:
  criteria:
    - name: "Finding Identification"
      points: 4
      description: "Accurately identifies the clinical finding"
    - name: "Clinical Significance"
      points: 3
      description: "Understands importance and implications"
    - name: "Management"
      points: 2
      description: "Appropriate next steps"
    - name: "Parent Communication"
      points: 1
      description: "Clear, empathetic counseling"
  total_points: 10
  passing_score: 7
```

### Adjust Evaluation Prompts

The evaluation logic is in `assets/js/newborn-exam-exercise.js` in the `evaluateAssessment()` method. Key parameters:

- **Temperature**: Currently 0.3 (lower = more consistent grading)
- **Max tokens**: 1000 (allows detailed feedback)
- **Rubric weight**: Adjust point distribution per criterion

### Add Custom Feedback

Modify the evaluation prompt template to emphasize specific teaching points:

```javascript
const evaluationPrompt = `You are an expert pediatrician...

SPECIAL EMPHASIS FOR THIS EXERCISE:
- [Add specific teaching points to emphasize]
- [Safety concerns to flag]
- [Common mistakes to watch for]

...rest of prompt...`;
```

## Deployment

### Local Development

```bash
# Install Jekyll
gem install jekyll bundler

# Navigate to project directory
cd PhysicianPromptEngineering

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open browser to http://localhost:4000
```

### Production Deployment

This course is designed for Jekyll-based static site hosting (GitHub Pages, Netlify, etc.).

**Build:**
```bash
bundle exec jekyll build
```

**Deploy** the `_site/` directory to your hosting platform.

### Important Notes

- **WebGPU requirement**: Users need Chrome/Edge 113+ with WebGPU support
- **First load**: ~2GB model download (one-time, then cached)
- **Browser storage**: Progress saved to localStorage
- **No backend required**: Fully client-side application

## Troubleshooting

### Common Issues

**"WebGPU not supported"**
- User needs Chrome 113+ or Edge 113+
- WebGPU must be enabled (chrome://flags)
- Some older devices don't support WebGPU

**"Model failed to load"**
- Check internet connection (first load only)
- Clear browser cache and retry
- Verify ~2GB free disk space

**"Exercise won't submit"**
- Ensure AI is initialized (button at top of module)
- Check browser console for errors
- Verify YAML data is valid JSON

**Images not displaying**
- Check file paths in HTML
- Verify images exist in assets/images/
- Check image file permissions

### Debug Mode

Enable debug logging:

```javascript
// In browser console
localStorage.setItem('newborn_exam_debug', 'true');
location.reload();
```

## Content Guidelines

### Clinical Accuracy

- All content reviewed by board-certified pediatricians
- Based on AAP (American Academy of Pediatrics) guidelines
- Evidence-based management recommendations
- Updated annually or as guidelines change

### Educational Approach

- **Competency-based**: Focus on skills mastery
- **Formative feedback**: Learn from mistakes
- **Spaced repetition**: Encourage multiple attempts
- **Active learning**: Case-based, not passive reading

### Inclusivity & Sensitivity

- Use diverse patient examples
- Culturally sensitive language
- Respectful image selection
- Accessible design (WCAG 2.1 AA)

## Future Enhancements

### Planned Features

- [ ] Video demonstrations of exam techniques
- [ ] Interactive image annotations
- [ ] Difficulty adaptive exercises
- [ ] Peer comparison (anonymized)
- [ ] Certificate of completion
- [ ] Mobile app version
- [ ] Expanded case library
- [ ] Multi-language support

### Contributing

Contributions welcome! Please see main project CONTRIBUTING.md for:
- Code style guidelines
- Pull request process
- Content submission guidelines
- Review criteria

## License

### Course Content
- Licensed under CC-BY-SA 4.0
- Attribution required
- Share-alike requirement

### Code
- MIT License
- Free to use and modify
- Attribution appreciated

### Images
- Individually licensed (see image-sources.md)
- Follow attribution requirements per image
- Do not remove watermarks or credits

## Support & Contact

### Getting Help

- **Documentation**: Check docs/ folder
- **Issues**: GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for questions
- **Email**: [Project maintainers]

### Citing This Course

```
Newborn Pediatric Physical Exam Course. (2025).
Physician Prompt Engineering Project.
Retrieved from https://github.com/YourOrg/PhysicianPromptEngineering
```

## Acknowledgments

- **Medical reviewers**: [Names/affiliations]
- **Image contributors**: See image-sources.md
- **Technology**: MLC AI team for Web LLM
- **Community**: Contributors and testers

---

**Version**: 1.0
**Last Updated**: 2025-11-18
**Maintained By**: Physician Prompt Engineering Project
**Status**: Beta - Core structure complete, images pending
