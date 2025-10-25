# Contributing to Physician Prompt Engineering

Thank you for your interest in contributing! This is an open-source community project, and we welcome submissions.

---

## How to Contribute

### 1. Submit a New Prompt

Do you have a prompt that works great in your practice?

**What we're looking for:**
- Focused on a single, specific task
- Tested in real clinical workflows
- 3-5 few-shot examples included
- Relevant to multiple clinicians (not hyper-specific)

**Submission process:**

1. Create a new file: `prompts/your-prompt-name.md`
2. Use this template:
```markdown
---
title: "Your Prompt Title"
layout: page
permalink: /prompts/your-prompt-name/
---

## Overview

**Purpose:** [What this prompt does]

**Character Count:** [X] / 5,000  
**Status:** Testing  
**Specialty:** [Your specialty]

## The Prompt

[Full prompt text here]

## How to Use

[Your instructions]

## Customization

[Tips for adapting to other specialties]

## Testing Results

[What cases you tested on]

## Known Limitations

[What it doesn't do well]
```

3. **Create a Pull Request:**
   - Go to GitHub
   - Click "Create Pull Request"
   - Add title: "Add [Prompt Name] prompt"
   - Add description of what it does
   - Submit!

4. **Community review:** Others test and provide feedback
5. **Revise as needed:** Update based on feedback
6. **Merged!** Your prompt goes live on the site

---

### 2. Improve an Existing Prompt

Found a way to make our prompts better?

**Options:**
- Create an improved version
- Report an issue you found
- Suggest a modification

**Process:**
1. Create a new version file: `prompts/ap-formatting-v2-1.md`
2. Explain what you changed and why
3. Include before/after examples showing improvement
4. Submit a Pull Request

---

### 3. Contribute Content

Want to write guides, documentation, or tutorials?

We welcome:
- Specialty-specific adaptations (OB, Surgery, IM, etc.)
- Video tutorials or walkthroughs
- Case studies showing results
- Translation to other languages

---

### 4. Report Issues

Found a bug or confusing part?

Go to **Issues** and:
1. Click "New Issue"
2. Clearly describe the problem
3. Include:
   - What you were trying to do
   - What happened
   - What you expected
4. Submit!

---

## Submission Checklist

Before submitting, verify:

- [ ] Prompt is tested in real clinical use (not theoretical)
- [ ] Few-shot examples are included and realistic
- [ ] Prompt works in your EMR's LLM tool
- [ ] Clear instructions for how to use
- [ ] Character count checked (must be under 5,000)
- [ ] No patient PHI included
- [ ] Follows template format
- [ ] Specialty clearly identified

---

## Code of Conduct

- **Respect:** Treat all contributors with respect
- **Professionalism:** Keep discussions focused on improving the project
- **Quality:** Maintain clinical accuracy and safety standards
- **Collaboration:** Help others succeed

---

## Questions About Contributing?

Create an Issue or Discussion in GitHub and tag it with "question"

---

## Licensing

By contributing, you agree your work will be released under the MIT License. This allows others to use and improve your prompts.

---

**Thank you for making clinical documentation better for everyone!**