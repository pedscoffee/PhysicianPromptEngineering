# CLAUDE.md - AI Assistant Guide for Physician Prompt Engineering

## Project Overview

**Physician Prompt Engineering** is an open-source Jekyll-based static website that provides production-ready clinical documentation prompts for physicians. The project helps transform AI scribe output into physician-ready notes using evidence-based prompt engineering principles.

**Website**: https://physicianpromptengineering.com
**License**: MIT
**Platform**: Jekyll static site generator with GitHub Pages
**Primary Audience**: Practicing physicians seeking to optimize AI-assisted clinical documentation

---

## Core Mission & Principles

### The Problem
AI scribes capture clinical conversations but produce generic, verbose notes requiring extensive manual editing.

### The Solution
Precision-engineered prompts that transform raw AI output into concise, personalized documentation compatible with EMR systems.

### Three Evidence-Based Principles
1. **Few-Shot Examples > Instructions**: 3-5 examples of desired output teach AI better than lengthy explanations
2. **Brevity = Quality**: Concise notes reduce cognitive load and minimize review time
3. **Modular Design**: Specialized prompts for specific tasks outperform multi-purpose solutions

---

## Repository Structure

```
/home/user/Overhaul/
├── _config.yml                    # Jekyll configuration
├── Gemfile                        # Ruby dependencies (github-pages gem)
├── README.md                      # Public-facing project documentation
├── CLAUDE.md                      # This file - AI assistant guide
├── .gitignore                     # Git ignore patterns
│
├── _layouts/                      # HTML templates
│   ├── default.html              # Main site layout with navigation
│   ├── post.html                 # Blog post layout
│   ├── course.html               # Course overview layout
│   └── course_module.html        # Individual course module layout
│
├── _includes/                     # Reusable HTML components
│   ├── head.html                 # HTML head section
│   ├── footer.html               # Site footer
│   ├── google-analytics.html     # Analytics tracking
│   ├── beta-notice.html          # Beta feature warning
│   ├── newsletter.html           # Newsletter subscription
│   └── share-prompt-cta.html     # Call-to-action for contributions
│
├── _prompts/                      # Clinical prompt collection
│   ├── ap-formatting.txt         # Assessment & Plan formatting
│   ├── avs-generation.txt        # After-Visit Summary generation
│   ├── billing-analysis.txt      # Medical decision making & billing
│   └── [15+ other prompts]       # Various specialty-specific prompts
│
├── _dotphrases/                   # EMR dot phrase templates
│   ├── appointment-reminder.md   # Common appointment reminders
│   ├── diabetes-plan.md          # Diabetes management plans
│   ├── fever-management.md       # Fever care instructions
│   └── [7+ other dotphrases]     # Reusable clinical text snippets
│
├── _posts/                        # Blog articles
│   └── YYYY-MM-DD-title.md       # Date-prefixed markdown posts
│
├── _course_modules/               # Interactive course content
│   ├── module-1-fundamentals.md
│   ├── module-2-context-clarity.md
│   ├── module-3-advanced-techniques.md
│   ├── module-4-safety-best-practices.md
│   └── module-5-specialty-final-project.md
│
├── _data/                         # Structured data files
│   ├── course_exercises.yml      # Interactive course exercises
│   ├── course_transcripts.yml    # Sample clinical transcripts
│   └── diagnosis_cases.yml       # Differential diagnosis game data
│
├── assets/
│   ├── css/
│   │   └── style.scss            # Custom site styles
│   └── js/
│       ├── course-exercise.js    # Course interactivity
│       └── dropdown.js           # Navigation dropdowns
│
├── images/                        # Image assets
│
└── [Root-level pages]            # Main site pages (see below)
    ├── index.md                  # Homepage
    ├── about.md                  # Project information
    ├── blog.md                   # Blog listing page
    ├── best-practices.md         # Evidence-based guidelines
    ├── prompt-library.md         # Browse all prompts
    ├── prompt-generator.md       # Interactive prompt builder
    ├── snippet-manager.md        # Local prompt organization tool
    ├── dot-phrase-library.md     # Browse all dot phrases
    ├── cpt-calculator.md         # E&M code complexity analyzer
    ├── clinical-ai-course.md     # Course overview
    ├── ppe-ai.md                 # Browser-based AI tools overview
    ├── scribe-tool.md            # Speech-to-text demo (beta)
    ├── prompt-assistant.md       # Meta-prompting tool (beta)
    ├── ask-ai.md                 # Contextual chat (beta)
    ├── diagnosis-case-creator.md # Case creation tool (beta)
    ├── differential-diagnosis-game.md # DDX challenge game
    ├── anki-arcade.html          # Anki card game (beta)
    ├── contribute.md             # Contribution guidelines
    └── disclaimer.md             # Legal/medical disclaimers
```

---

## Key Technologies & Dependencies

### Core Stack
- **Jekyll 3.x+**: Static site generator
- **GitHub Pages**: Hosting platform (via `github-pages` gem)
- **Minima Theme**: Base Jekyll theme with custom overrides
- **Liquid**: Templating language for Jekyll
- **Kramdown**: Markdown processor
- **SCSS/Sass**: CSS preprocessing

### Plugins (via github-pages gem)
- `jekyll-seo-tag`: SEO optimization
- `jekyll-sitemap`: Automatic sitemap generation

### Frontend
- Vanilla JavaScript (no frameworks)
- Custom CSS via SCSS
- Responsive design
- Browser-based AI tools (experimental, using client-side APIs)

### Build Process
Jekyll automatically builds the site from source files:
- Processes Liquid templates
- Converts Markdown to HTML
- Compiles SCSS to CSS
- Generates collection pages
- Creates blog post pages

---

## Content Types & Collections

### 1. **Prompts Collection** (`_prompts/`)

**Purpose**: Clinical documentation prompts for EMR AI features

**File Format**: `.txt` files with YAML frontmatter

**Frontmatter Structure**:
```yaml
---
title: "Prompt Title (Usually Descriptive)"
description: "Brief description of prompt's purpose"
specialty: "Medical specialty (e.g., 'Pediatrics', 'Family Medicine')"
char_count: 3277  # Character count for EMR compatibility
order: 1  # Display order in library
---
```

**Content Guidelines**:
- Must be ≤5,000 characters for EMR compatibility
- Include clear output structure instructions
- Provide 3-5 few-shot examples
- Use specific formatting rules (bold, italics, bullets)
- Include conditional boilerplate sections when applicable
- Never fabricate clinical information
- Use standard medical abbreviations

**Naming Convention**: `descriptive-name.txt` (lowercase, hyphenated)

---

### 2. **Dot Phrases Collection** (`_dotphrases/`)

**Purpose**: Reusable EMR text snippets for common clinical scenarios

**File Format**: `.md` files with YAML frontmatter

**Frontmatter Structure**:
```yaml
---
title: "Dot Phrase Name"
category: "patient-education" or "clinical-documentation"
specialty: "General" or specific specialty
common_use: "Brief use case description"
---
```

**Content Guidelines**:
- Brief, ready-to-paste text blocks
- Common patient education materials
- Standard follow-up instructions
- Billing/coding templates

**Naming Convention**: `descriptive-name.md` (lowercase, hyphenated)

---

### 3. **Blog Posts** (`_posts/`)

**Purpose**: Educational content, case studies, tool announcements

**File Format**: Markdown with strict naming convention

**Naming Convention**: `YYYY-MM-DD-descriptive-title.md` (REQUIRED format)

**Frontmatter Structure**:
```yaml
---
layout: post
title: "Article Title"
date: 2025-11-01 10:00:00 -0500
author: AuthorName
categories: [AI, Documentation, Tools]
tags: [tag1, tag2, tag3]
excerpt: "Brief description for previews"
---
```

**Content Guidelines**:
- Use clear headings (##, ###)
- Include practical examples
- Link to related tools/prompts
- Cite evidence when making claims
- Target audience: practicing physicians

---

### 4. **Course Modules** (`_course_modules/`)

**Purpose**: Interactive educational modules for prompt engineering

**File Format**: Markdown with YAML frontmatter

**Frontmatter Structure**:
```yaml
---
layout: course_module
title: "Module Title"
course: clinical-prompt-engineering
module_number: 1
permalink: /courses/clinical-prompt-engineering/module-1/
description: "Module description"
duration: "60 minutes"
difficulty: "beginner|intermediate|advanced"
next_module: "/courses/clinical-prompt-engineering/module-2/"
---
```

**Content Guidelines**:
- Start with learning objectives
- Include interactive exercises (references `_data/course_exercises.yml`)
- Provide progressive complexity
- Use clinical scenarios from `_data/course_transcripts.yml`
- Include practice prompts and expected outputs

**Naming Convention**: `module-N-topic.md` (where N is module number)

---

### 5. **Data Files** (`_data/`)

**Purpose**: Structured content for dynamic features

**Files**:
- `course_exercises.yml`: Interactive course exercises with AI feedback
- `course_transcripts.yml`: Sample clinical encounters for practice
- `diagnosis_cases.yml`: Cases for differential diagnosis game

**Format**: YAML structured data

**Usage**: Referenced in pages via `site.data.filename`

---

### 6. **Root-Level Pages**

**Purpose**: Main site functionality and tools

**File Format**: Markdown or HTML with extensive embedded JavaScript

**Common Features**:
- Interactive web tools (prompt generator, snippet manager)
- Browser-based AI integration (experimental)
- Forms and calculators
- Educational games

**Frontmatter**: Minimal (usually just title and layout)

---

## File Naming Conventions

### General Rules
1. **All lowercase**: Use lowercase for all files and directories
2. **Hyphen-separated**: Use hyphens, not underscores (except collection directories)
3. **Descriptive**: Names should clearly indicate content
4. **No spaces**: Never use spaces in filenames

### Specific Patterns

| Content Type | Pattern | Example |
|-------------|---------|---------|
| Blog posts | `YYYY-MM-DD-title.md` | `2025-11-01-Introducing-our-Prompt-Generator.md` |
| Prompts | `descriptive-name.txt` | `ap-formatting.txt` |
| Dot phrases | `clinical-context.md` | `diabetes-plan.md` |
| Course modules | `module-N-topic.md` | `module-1-fundamentals.md` |
| Pages | `tool-or-page-name.md` | `prompt-generator.md` |
| Images | `descriptive-name.ext` | `thank-you-banner.jpg` |

---

## Development Workflow

### Local Development

**Prerequisites**:
- Ruby 2.7+ installed
- Bundler gem installed

**Setup**:
```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Serve with drafts
bundle exec jekyll serve --drafts

# Build site (output to _site/)
bundle exec jekyll build
```

**Local URL**: http://localhost:4000

### File Change Detection
Jekyll automatically rebuilds on file changes to:
- Markdown files
- HTML templates
- SCSS files
- Data files
- Configuration (requires restart)

### Testing Changes
1. Run local Jekyll server
2. Navigate to modified page
3. Verify layout, formatting, and functionality
4. Check browser console for JavaScript errors
5. Test on mobile viewport for responsive design

---

## Git Workflow & Branch Strategy

### Branch Naming
- **Feature branches**: `claude/descriptive-name-sessionid`
- **Main branch**: Production-ready code
- Always develop on feature branches, never directly on main

### Commit Guidelines
1. **Descriptive messages**: Explain what and why, not just what
2. **Focused commits**: One logical change per commit
3. **Format**: Use conventional commit style when appropriate
   - `feat: Add new X prompt for Y specialty`
   - `fix: Correct character count in Z prompt`
   - `docs: Update best practices guide`
   - `style: Improve mobile navigation layout`

### Push Process
```bash
# Push to feature branch
git push -u origin claude/branch-name-sessionid

# NEVER push directly to main without PR
```

### Pull Request Creation
Use web submission form or GitHub interface (gh CLI not available in this environment)

---

## Content Guidelines for AI Assistants

### When Adding/Editing Prompts

**Critical Requirements**:
1. **Character Limit**: Keep total prompt ≤5,000 characters for EMR compatibility
2. **Few-Shot Examples**: Include 3-5 concrete examples of desired output
3. **Medical Accuracy**: Never fabricate clinical information
4. **Formatting Specificity**: Define exact formatting (bold, italic, bullets, spacing)
5. **Boilerplate Sections**: Include conditional standard text when applicable
6. **Specialty Context**: Tag with appropriate medical specialty
7. **Testing Notes**: Document how the prompt was tested/validated

**What NOT to Do**:
- ❌ Create prompts that could be used outside HIPAA-compliant systems
- ❌ Include actual patient data (even de-identified)
- ❌ Make medical recommendations (prompts are for documentation only)
- ❌ Exceed character limits for EMR compatibility
- ❌ Use vague instructions instead of few-shot examples

### When Writing Blog Posts

**Structure**:
1. Start with clear problem statement
2. Provide practical solution
3. Include concrete examples
4. Link to related tools/resources
5. End with actionable takeaways

**Tone**:
- Professional but conversational
- Evidence-based (cite sources when making claims)
- Physician-to-physician communication
- Focus on practical implementation

**SEO Considerations**:
- Descriptive title (appears in frontmatter)
- Clear excerpt for previews
- Relevant tags and categories
- Internal links to related content

### When Creating Course Content

**Pedagogical Approach**:
1. Start with learning objectives
2. Explain concepts with clinical context
3. Provide hands-on exercises
4. Include realistic clinical scenarios
5. Progressive difficulty (basic → advanced)
6. Immediate feedback (via course exercise system)

**Interactive Elements**:
- Reference exercises from `_data/course_exercises.yml`
- Use transcripts from `_data/course_transcripts.yml`
- Include prompts students can test
- Provide model answers

---

## Common Tasks & Commands

### Adding a New Prompt

```bash
# 1. Create file in _prompts/
touch _prompts/new-prompt-name.txt

# 2. Add frontmatter and content (see Prompts Collection section)

# 3. Test character count
wc -m _prompts/new-prompt-name.txt

# 4. Preview locally
bundle exec jekyll serve

# 5. Commit and push
git add _prompts/new-prompt-name.txt
git commit -m "feat: Add [specialty] prompt for [use case]"
git push -u origin claude/branch-name-sessionid
```

### Adding a Blog Post

```bash
# 1. Create file with proper date format
touch _posts/2025-11-15-descriptive-title.md

# 2. Add frontmatter and content (see Blog Posts section)

# 3. Preview locally
bundle exec jekyll serve

# 4. Check on /blog page that post appears

# 5. Commit and push
git add _posts/2025-11-15-descriptive-title.md
git commit -m "docs: Publish blog post about [topic]"
git push -u origin claude/branch-name-sessionid
```

### Adding a Dot Phrase

```bash
# 1. Create file in _dotphrases/
touch _dotphrases/clinical-scenario.md

# 2. Add frontmatter and reusable text

# 3. Preview on dot phrase library page

# 4. Commit and push
git add _dotphrases/clinical-scenario.md
git commit -m "feat: Add dot phrase for [scenario]"
git push -u origin claude/branch-name-sessionid
```

### Updating Site Configuration

```bash
# Edit _config.yml
# Note: Requires Jekyll server restart

# Restart server to see changes
# Press Ctrl+C to stop
bundle exec jekyll serve
```

### Finding Content

```bash
# Search prompts for keyword
grep -r "keyword" _prompts/

# Search all markdown for term
grep -r "term" --include="*.md"

# List all prompts by character count
for f in _prompts/*.txt; do echo "$(wc -m < "$f") $f"; done | sort -n

# Count total content files
find . -name "*.md" -o -name "*.txt" | wc -l
```

---

## Important Disclaimers & Security

### Medical/Legal Boundaries

**CRITICAL - AI Assistants Must Understand**:

1. **No Medical Advice**: This project provides educational tools only, NOT medical advice
2. **Physician Review Required**: All AI-generated content requires physician review before finalization
3. **HIPAA Compliance**:
   - ONLY use prompts within HIPAA-compliant EMR environments
   - NEVER use public AI tools (ChatGPT, Claude, etc.) with patient data
   - NEVER include actual patient data in examples or documentation
4. **Clinical Responsibility**: Physicians retain full responsibility for documentation accuracy
5. **Institutional Policies**: Users must follow their institution's AI usage policies

### Security Requirements

**When Creating Content**:
- ✅ Use fictional patient scenarios only
- ✅ Generic medical conditions for examples
- ✅ De-identified, synthesized clinical data
- ❌ Never include real patient information
- ❌ Never include specific identifiers (names, dates, MRNs)
- ❌ Never create prompts for public AI tools

---

## Special Features & Tools

### Interactive Browser-Based AI (Beta)

Several pages use client-side AI APIs (experimental):
- **Interactive Course**: AI feedback on prompt exercises
- **Scribe Tool**: Speech-to-text with formatting
- **Prompt Assistant**: Meta-prompting exploration
- **Chat**: Contextual AI with embedded knowledge
- **Diagnosis Game**: DDX challenge with AI scoring
- **Anki Arcade**: Flashcard game with spaced repetition

**Technical Notes**:
- Use browser-native AI APIs (Chrome AI, etc.)
- Client-side only (no server processing)
- Clearly marked as beta/experimental
- Include disclaimers about clinical use

### Data-Driven Features

**Course Exercises** (`_data/course_exercises.yml`):
- YAML structure with exercise prompts
- Expected outputs for comparison
- Rubric criteria for AI evaluation
- Accessed via JavaScript in course modules

**Clinical Transcripts** (`_data/course_transcripts.yml`):
- Sample clinical encounters
- Various specialties and scenarios
- Used for practice exercises
- Synthesized data only

**Diagnosis Cases** (`_data/diagnosis_cases.yml`):
- Differential diagnosis game content
- Patient presentations
- Diagnostic findings
- Teaching points

---

## Navigation Structure

The site uses a **dropdown menu system** defined in `_layouts/default.html`:

### Main Navigation
1. **Best Practices** (direct link)
2. **Resources** (dropdown)
   - Prompt Library
   - Blog
3. **Prompt Tools** (dropdown)
   - A&P Prompt Generator
   - Snippet Manager
   - Dot Phrase Library
   - E&M Calculator
4. **Browser AI (Beta)** (dropdown)
   - Overview
   - Interactive Course
   - Doc Pixel's DDX Challenge
   - Scribe
   - Prompt Assistant
   - Chat
   - Case Creator
5. **Contribute** (direct link)
6. **About** (direct link)

**Navigation Changes**: Edit `_layouts/default.html` lines 28-70

---

## Style Guide

### Markdown Formatting

**Headings**:
```markdown
# Page Title (H1) - Use once per page
## Major Section (H2)
### Subsection (H3)
#### Minor Heading (H4)
```

**Emphasis**:
- **Bold** for problem names in clinical notes
- *Italic* for boilerplate text in prompts
- `Code` for technical terms, file paths, commands

**Lists**:
- Use `-` for unordered lists
- Use `1.` for ordered lists
- Indent sublists with 2 spaces

**Links**:
```markdown
[Link text](https://url)
[Internal link](/page-name)
[Relative link](../path/to/file)
```

**Code Blocks**:
````markdown
```language
code here
```
````

### Clinical Writing Style

**Abbreviations**:
- Use standard medical abbreviations (RTC, PRN, BID, etc.)
- Spell out on first use if uncommon
- Never create new/non-standard abbreviations

**Problem-Oriented Format**:
```
**[Diagnosis Name]**
- Concise bullet point (< 10 words)
- Key action or finding
- Follow-up plan
```

**Boilerplate Text**:
- Use italic formatting
- Include conditional logic (if X discussed, add Y)
- Keep generic (no patient-specific details)

---

## Testing Checklist for AI Assistants

Before committing changes, verify:

### Content Changes
- [ ] Markdown renders correctly locally
- [ ] All links work (internal and external)
- [ ] Images display properly
- [ ] Frontmatter is complete and properly formatted
- [ ] Character count ≤5,000 for prompts
- [ ] No patient data included
- [ ] Spelling and grammar checked

### Prompts Specifically
- [ ] 3-5 few-shot examples included
- [ ] Formatting rules are explicit
- [ ] Conditional boilerplate sections present
- [ ] Specialty tagged correctly
- [ ] Order number assigned (for library display)
- [ ] Description is clear and concise

### Blog Posts Specifically
- [ ] Date in filename matches frontmatter
- [ ] Excerpt provided
- [ ] Categories and tags appropriate
- [ ] Author specified
- [ ] Appears correctly on /blog page

### Technical
- [ ] Jekyll build succeeds without errors
- [ ] No broken Liquid syntax
- [ ] JavaScript console shows no errors
- [ ] Mobile-responsive (check viewport)
- [ ] Navigation works correctly

### Git
- [ ] On correct feature branch (claude/*)
- [ ] Commit message is descriptive
- [ ] Only relevant files included in commit
- [ ] No generated files committed (_site/, .jekyll-cache/)
- [ ] No sensitive data in commit history

---

## Troubleshooting Common Issues

### Jekyll Build Errors

**"Liquid syntax error"**
- Check for unescaped `{` or `}` in markdown
- Escape with `{% raw %}` and `{% endraw %}`

**"Frontmatter is not valid YAML"**
- Check for proper indentation (2 spaces)
- Ensure all strings with special chars are quoted
- Verify `---` delimiters are on their own lines

**"Collection not found"**
- Verify collection defined in `_config.yml`
- Check directory name starts with `_`
- Restart Jekyll server after config changes

### Content Display Issues

**Prompt not appearing in library**
- Check frontmatter includes `order` field
- Verify file is in `_prompts/` directory
- Ensure file extension is `.txt`
- Check Jekyll build output for errors

**Blog post missing from /blog**
- Verify filename starts with `YYYY-MM-DD-`
- Check date in frontmatter matches filename
- Ensure `layout: post` in frontmatter
- Date cannot be in future

**Course module not linking**
- Check `permalink` matches navigation links
- Verify `layout: course_module` specified
- Ensure `course` field matches course name
- Check `next_module` path is correct

### JavaScript Errors

**Interactive tool not working**
- Check browser console for errors
- Verify script file linked in page
- Test in different browser (compatibility)
- Check for syntax errors in embedded JS

---

## Key Files Reference

### Configuration
- `_config.yml`: Site configuration, collections, plugins
- `Gemfile`: Ruby dependencies
- `.gitignore`: Git exclusion patterns

### Core Templates
- `_layouts/default.html`: Main site template with navigation
- `_layouts/post.html`: Blog post template
- `_layouts/course_module.html`: Course module template

### Styling
- `assets/css/style.scss`: All custom site styles
- Theme uses Minima base with extensive overrides

### Navigation
- Defined in: `_layouts/default.html` (lines 28-70)
- Dropdown JS: `assets/js/dropdown.js`

### Data Sources
- `_data/course_exercises.yml`: Course exercise data
- `_data/course_transcripts.yml`: Sample clinical encounters
- `_data/diagnosis_cases.yml`: DDX game cases

### Key Pages
- `index.md`: Homepage
- `best-practices.md`: Core methodology guide
- `prompt-library.md`: Browse all prompts
- `contribute.md`: Contribution guidelines

---

## Contributing Workflow for AI Assistants

### When User Requests New Content

1. **Clarify Requirements**
   - What type of content? (prompt, blog post, dot phrase, etc.)
   - What specialty/use case?
   - Any specific formatting needs?

2. **Check Existing Content**
   - Search for similar prompts/posts
   - Avoid duplication
   - Build on existing patterns

3. **Create Content**
   - Follow naming conventions
   - Use appropriate frontmatter
   - Include all required sections
   - Stay within character limits

4. **Test Locally**
   - Build with Jekyll
   - Preview in browser
   - Check all links
   - Verify formatting

5. **Commit & Push**
   - Descriptive commit message
   - Push to feature branch (claude/*)
   - Never push directly to main

6. **Document Changes**
   - Explain what was added/changed
   - Note any testing performed
   - Mention related content

### When User Requests Updates

1. **Identify Files**
   - Use grep/find to locate content
   - Check frontmatter for metadata
   - Review related files

2. **Make Changes**
   - Preserve existing formatting
   - Update frontmatter if needed
   - Maintain consistency

3. **Verify Impact**
   - Check for broken links
   - Test affected pages
   - Ensure no cascading issues

4. **Document Updates**
   - Clear commit message
   - Explain reasoning
   - Note any side effects

---

## Analytics & SEO

### Google Analytics
- ID: `G-VNYGW8RWMY`
- Configured in: `_config.yml`
- Included via: `_includes/google-analytics.html`

### SEO Optimization
- Uses `jekyll-seo-tag` plugin
- Automatic meta tags from frontmatter
- Sitemap generated automatically
- Structured data in templates

### Social Sharing
- Open Graph tags from SEO plugin
- Twitter Card support
- Excerpt field used for previews

---

## Future Considerations

### Potential Additions AI Assistants Should Know

1. **Multi-language Support**: Currently English-only
2. **EMR Integration Guides**: Platform-specific instructions
3. **Validation Studies**: Time savings data
4. **Community Submissions**: Web form integration
5. **Version Control for Prompts**: Track iterations and improvements

### Scalability Notes

- Collections can grow indefinitely
- Data files may need pagination if > 100 entries
- Consider search functionality if prompts > 50
- Monitor character counts in data files (YAML size)

---

## Contact & Support Information

**Website**: https://physicianpromptengineering.com
**GitHub**: https://github.com/pedscoffee/PhysicianPromptEngineering
**Discussions**: GitHub Discussions
**Issues**: GitHub Issues

**AI Assistants**: When users need help beyond code changes, direct them to the above resources.

---

## Version History

**Current Version**: 2025-11-15 (Initial CLAUDE.md creation)

**Document Maintenance**:
- Update when major structural changes occur
- Keep in sync with README.md
- Add new sections as features are developed
- Document breaking changes clearly

---

## Quick Reference Commands

```bash
# Start local development
bundle exec jekyll serve

# Build site
bundle exec jekyll build

# Find prompts by keyword
grep -r "keyword" _prompts/

# Count prompt characters
wc -m _prompts/filename.txt

# List all collections
ls -d _*/

# Check for broken frontmatter
grep -r "^---$" --include="*.md" | grep -v "^[^:]*:[^:]*:"

# Find all TODO comments
grep -r "TODO\|FIXME" --include="*.md" --include="*.html"

# Validate YAML data files
ruby -e "require 'yaml'; YAML.load_file('_data/filename.yml')"
```

---

## Final Notes for AI Assistants

### Core Responsibilities
1. **Medical Safety**: Never create content that could be clinically dangerous
2. **Privacy**: No real patient data, ever
3. **Accuracy**: Verify medical terminology and abbreviations
4. **Usability**: Physicians are busy—make content scannable and practical
5. **Evidence-Based**: Support claims with research when possible

### Communication Style with Users
- **Be professional**: You're assisting healthcare professionals
- **Be practical**: Focus on real-world implementation
- **Be concise**: Time is precious in medicine
- **Be accurate**: Medical errors have consequences
- **Be helpful**: Guide users to resources when you can't code the solution

### When in Doubt
1. Check existing content for patterns
2. Review best-practices.md for methodology
3. Search GitHub issues/discussions for precedent
4. Ask user for clarification rather than guessing
5. Default to conservative approach (especially with medical content)

---

**This document is maintained to help AI assistants work effectively with the Physician Prompt Engineering codebase. Keep it updated as the project evolves.**

Last updated: 2025-11-15
