# Physician Prompt Engineering - Project Handoff Document
**Last Updated:** October 24, 2025  
**Project Owner:** PedsCoffee  
**Status:** GitHub Pages Migration Complete ✅

---

# PROJECT OVERVIEW

## Mission
Provide production-ready AI prompts that transform raw clinical conversation transcripts into perfectly formatted clinical notes using AI Scribes + AI Editor Prompts workflow.

## Current Status
- ✅ Successfully migrated from WordPress to GitHub Pages
- ✅ 3 production prompts deployed
- ✅ Professional GitHub Pages site live at: https://pedscoffee.github.io/PhysicianPromptEngineering
- ✅ All core content migrated and enhanced
- ⏳ WordPress site still live (to be decommissioned)

## Repository
**GitHub URL:** https://github.com/pedscoffee/PhysicianPromptEngineering  
**Live Site:** https://pedscoffee.github.io/PhysicianPromptEngineering  
**Specialty:** Pediatrics (but prompts are adaptable to all specialties)

---

# STRATEGIC GOALS

## PRIMARY GOAL
**Replace WordPress site entirely** with the GitHub Pages version as the official home.

### Success Criteria:
- Site is fully functional and matches WordPress content
- All navigation works properly
- Mobile responsive design verified
- Ready for custom domain

---

## SECONDARY GOALS (Short-term: Next 3 months)

### 1. **Professional Polish & Design**
- Enhance visual design beyond current minimalist approach
- Ensure mobile responsiveness is excellent
- Improve visual hierarchy and user experience
- Add professional touches without losing clarity

### 2. **SEO Optimization**
- Add meta descriptions and SEO tags
- Improve page titles for search visibility
- Ensure proper heading hierarchy
- Add structured data for rich snippets
- Submit sitemap to search engines

### 3. **Custom Domain**
- Register domain (likely something like `physicianpromptengineering.com`)
- Configure GitHub Pages to use custom domain
- Update all documentation/links

### 4. **Expand Prompt Library**
- Create specialty-specific versions of existing prompts (OB, Surgery, IM, Emergency Medicine, etc.)
- Document prompt variations and adaptations
- Build infrastructure for community contributions

### 5. **Build Community Infrastructure**
- Set up GitHub Issues template for bug reports/feature requests
- Set up GitHub Discussions for community Q&A
- Create detailed CONTRIBUTING.md guide
- Set up PR template for prompt submissions
- Create "Good First Issue" labels for newcomers

---

## TERTIARY GOALS (Medium-term: 3-6 months)

### 1. **Blog & Video Content**
- Create regular blog posts about AI efficiency in clinical practice
- Record and publish video tutorials
- Document case studies and real-world results
- Write specialty-specific adaptation guides

### 2. **Prompt Library Explosion**
- Establish system for organizing and tagging prompts
- Create searchable prompt database
- Build specialty filters
- Track prompt versions and improvements
- Celebrate community contributors

### 3. **Analytics & Learning**
- Track which prompts are most popular
- Gather user feedback systematically
- Document lessons learned
- Create best practices guide for prompt creation

---

# TECHNICAL SETUP

## Development Environment
**What You Use:**
- **Editor:** VS Code
- **Git Client:** GitHub Desktop
- **Technology Stack:** Jekyll + GitHub Pages
- **No Terminal Required:** All work done through GUI

## Repository Structure

```
PhysicianPromptEngineering/
├── _config.yml                 # Jekyll configuration (DO NOT MODIFY without care)
├── _layouts/                   # Page templates
│   ├── default.html           # Base layout for all pages
│   ├── page.html              # Single page layout
│   └── post.html              # Blog post layout
├── _includes/                 # Reusable components
│   ├── navigation.html        # Main menu
│   └── footer.html            # Footer
├── _posts/                    # Blog posts (use date format: YYYY-MM-DD-title.md)
├── pages/                     # Static pages (not dated)
│   ├── introduction.md        # Full introduction/narrative
│   ├── about.md              # Project overview
│   ├── all-about-scribes.md  # AI scribe best practices
│   ├── quick-start.md        # 5-minute getting started
│   ├── faq.md                # FAQ & disclaimers
│   ├── prompts.md            # Prompt library hub
│   └── videos.md             # Embedded videos
├── prompts/                  # Individual prompt pages
│   ├── ap-formatting.md      # A/P Formatting prompt (v2.0)
│   ├── billing-analysis.md   # Billing prompt (v1.2)
│   └── avs-generation.md     # AVS prompt (v1.0)
├── assets/
│   └── css/
│       └── style.css         # All styling
├── index.md                  # Homepage
├── README.md                 # GitHub repo homepage
├── CONTRIBUTING.md           # How to contribute
├── LICENSE                   # MIT License
├── .gitignore               # Files to ignore
└── .git/                    # Git history (hidden)
```

## Key Files Explained

### `_config.yml`
Controls how Jekyll builds the site. Contains:
- Site title and description
- Theme (minima)
- Build settings
- Plugins
- **Never modify accidentally**—this breaks the build

### `assets/css/style.css`
All styling for the entire site. Current features:
- Professional blue color scheme (#0066cc)
- Responsive mobile design
- Clean typography
- Code block styling

### Navigation Flow
1. User enters site
2. `_includes/navigation.html` renders menu
3. Links go to pages or posts
4. Pages use `_layouts/page.html`
5. Posts use `_layouts/post.html`
6. Both wrapped in `_layouts/default.html`

---

# CURRENT CONTENT INVENTORY

## Pages (Static, not dated)
| File | Purpose | Status |
|------|---------|--------|
| `index.md` | Homepage with storytelling | ✅ Complete |
| `pages/introduction.md` | Full introduction narrative | ✅ Complete |
| `pages/about.md` | Project overview | ✅ Complete |
| `pages/all-about-scribes.md` | AI scribe best practices | ✅ Complete |
| `pages/quick-start.md` | 5-minute getting started | ✅ Complete |
| `pages/faq.md` | FAQ & disclaimers | ✅ Complete |
| `pages/prompts.md` | Prompt library hub | ✅ Complete |
| `pages/videos.md` | Embedded YouTube videos | ✅ Complete |

## Prompts (Individual Pages)
| File | Title | Status | Char Count | Version |
|------|-------|--------|------------|---------|
| `prompts/ap-formatting.md` | A/P Formatting ("Pithy") | ✅ Production | 3,277/5,000 | v2.0 |
| `prompts/billing-analysis.md` | Billing Analysis | ✅ Production | 4,951/5,000 | v1.2 |
| `prompts/avs-generation.md` | AVS Generation | ✅ Production | 4,715/5,000 | v1.0 |

## Videos
- "A New Way Forward" - https://www.youtube.com/embed/KUBCUTD8T_c
- "See One, Do One, Teach One" - https://www.youtube.com/embed/CmmU8azT6as

---

# WORKFLOW FOR UPDATES

## Adding/Updating Content

### To Update a Page:
1. Open GitHub Desktop
2. Open the repo folder
3. Edit `.md` file in VS Code
4. Save file
5. Go to GitHub Desktop
6. See changes in "Changes" tab
7. Write commit message: `Update [page name]`
8. Click "Commit to main"
9. Click "Push origin"
10. Wait 1-2 minutes for GitHub to build
11. Check site for changes

### To Add a New Blog Post:
1. Create new file in `_posts/` folder
2. Name format: `YYYY-MM-DD-title-slug.md`
3. Use this template:

```markdown
---
title: "Your Blog Post Title"
layout: post
date: 2025-10-24
categories: [Category Name]
---

Your content here...
```

4. Follow same commit/push process as above

### To Add a New Prompt:
1. Create new file in `prompts/` folder
2. Name: `prompts/prompt-name.md`
3. Use this template:

```markdown
---
title: "Your Prompt Title"
layout: page
permalink: /prompts/prompt-name/
---

## Overview
**Purpose:** [What it does]
**Character Count:** [X] / 5,000
**Status:** [Testing/Production Ready]
**Specialty:** [Pediatrics/etc]

## Full Prompt
[Complete prompt text]

## How to Use
[Instructions]

## Customization
[Tips for adaptation]
```

4. Update `pages/prompts.md` to link to new prompt
5. Commit and push

---

# FUTURE ENHANCEMENTS

## Immediate (Next Session)

### 1. SEO Improvements
**What to do:**
- Add SEO title tags to each page
- Add meta descriptions (160 characters)
- Ensure all headings use proper hierarchy (h1, h2, h3)
- Add alt text to any images
- Create sitemap.xml (Jekyll can auto-generate)

**Files to update:**
- `_layouts/default.html` - Add meta tags
- Individual pages - Add descriptions to front matter

### 2. Visual Polish
**What to do:**
- Review design on mobile
- Improve button styles
- Add hover effects
- Improve spacing and padding
- Consider adding hero images or graphics

**Files to update:**
- `assets/css/style.css` - Enhanced styling
- Possibly add `assets/images/` folder

### 3. Custom Domain Setup
**What to do:**
1. Register domain (e.g., physicianpromptengineering.com)
2. Go to repo Settings → Pages
3. Add custom domain
4. Update DNS records
5. Test that it works
6. Update README with new URL

---

## Medium-term (Next 2-4 weeks)

### 1. Community Infrastructure
**Files to create/update:**
- `CONTRIBUTING.md` - Already exists, but enhance it
- `.github/ISSUE_TEMPLATE/bug_report.md` - Template for bug reports
- `.github/ISSUE_TEMPLATE/feature_request.md` - Template for feature requests
- `.github/PULL_REQUEST_TEMPLATE.md` - Template for PRs
- `.github/DISCUSSIONS.md` - Guidelines for discussions

**How to create GitHub templates:**
- Create folder: `.github/` (if doesn't exist)
- Create subfolders: `ISSUE_TEMPLATE/`, etc.
- Add `.md` files with templates

### 2. Specialty-Specific Prompts
**What to do:**
- Create OB/GYN versions of all 3 prompts
- Create Surgery versions
- Create Internal Medicine versions
- Create Emergency Medicine versions
- Document variations clearly

**File structure:**
```
prompts/
├── ap-formatting.md          # Generic pediatrics
├── ap-formatting-obgyn.md    # OB/GYN specific
├── ap-formatting-surgery.md  # Surgery specific
└── ap-formatting-im.md       # Internal Medicine specific
```

**Update:**
- `pages/prompts.md` to show specialty filters

### 3. Blog Post Plan
**Topics to consider:**
- "Getting Started with AI Scribes" - Beginner guide
- "Customizing Prompts for Your Specialty" - Advanced tutorial
- "Real-World Results: 50% Documentation Time Reduction" - Case study
- "Why Few-Shot Examples Matter" - Deep dive
- "Billing with AI: How Accurate Are They?" - Practical guide

**Create in:** `_posts/` folder with proper date format

---

## Long-term (Ongoing)

### 1. Prompt Library Growth
**Target:** 30+ prompts (core + specialty variations)
**Strategy:** 
- Community contributions
- Internal development
- User feedback-driven improvements

### 2. Analytics & Feedback
**Track:**
- Which prompts get used most
- Which pages get visited most
- Community engagement
- Pain points from users

### 3. Documentation Site Expansion
**Consider:**
- Specialty-specific guides
- Video tutorials for each prompt
- Quick reference cards (PDF downloads)
- Integration guides (different EMRs)

---

# COMMON TASKS & HOW-TOs

## Task: Add a YouTube Video to a Page

```markdown
<div style="margin: 30px 0; text-align: center;">
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/[VIDEO_ID]" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
</div>
```

## Task: Add a Link to Another Page

```markdown
[Link Text]({{ site.baseurl }}/page-name/)
```

## Task: Add Styling to Text

```markdown
**Bold**
*Italic*
`Code`
> Blockquote
```

## Task: Add a List

```markdown
- Item 1
- Item 2
- Item 3

OR

1. First
2. Second
3. Third
```

## Task: Debug a Broken Site

**If something looks wrong:**
1. Wait 2-3 minutes (GitHub needs time to build)
2. Refresh page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check for typos in filenames (case-sensitive)
4. Go to repo Settings → Pages to see build status
5. Check recent commits in GitHub Desktop to see what changed

**If pages are missing:**
- Check that filename matches exactly what's in navigation.html
- Check that file is in correct folder
- Check that front matter is valid YAML

---

# KNOWLEDGE BASE

## Key Concepts

### Few-Shot Examples
The most important part of any prompt. Instead of writing long instructions, show 3-5 examples of perfect output. The model learns the pattern from examples better than from rules.

### 2-of-3 Rule (Billing Prompt)
MDM (Medical Decision Making) is determined by: Problems, Data, Risk. If 2 out of 3 components meet a level, that's the overall level. This is how E/M codes are determined.

### Character Limits
Epic EMR's Generate Text with AI feature has a 5,000 character limit. All prompts must fit within this. Current usage:
- A/P: 3,277 chars (64% of limit)
- Billing: 4,951 chars (99% of limit)
- AVS: 4,715 chars (94% of limit)

### HIPAA Compliance
Never use public AI tools (ChatGPT, Gemini, Claude) with patient data. Only use within EMR's integrated LLM or HIPAA-compliant tools. This is critical and non-negotiable.

---

# IMPORTANT NOTES

## Don't Touch Without Care
- `_config.yml` - Controls Jekyll build settings
- `.git` folder - Git history, leave it alone
- `_layouts/default.html` - Base layout for all pages

## These Can Be Modified Freely
- `assets/css/style.css` - Safe to enhance
- Page content files - Update as needed
- `README.md` and `CONTRIBUTING.md` - Improve anytime

## Naming Conventions
- Folders: use underscores for special folders (`_posts`, `_layouts`, etc.)
- Files: use hyphens for slugs (`my-prompt.md`, not `my_prompt.md`)
- No spaces in filenames
- Lowercase always

---

# TESTING CHECKLIST

Before announcing any major update:

- [ ] All pages load without errors
- [ ] All navigation links work
- [ ] All prompts pages display full text
- [ ] Videos embed and play properly
- [ ] Site looks good on mobile (test on phone or browser dev tools)
- [ ] No broken links (manually check or use online tool)
- [ ] Spelling/grammar checked
- [ ] URLs are correct (use baseurl: {{ site.baseurl }})

---

# QUICK REFERENCE: File Locations

| What I Need to Do | File to Edit |
|------------------|-------------|
| Change homepage content | `index.md` |
| Update navigation menu | `_includes/navigation.html` |
| Change site styling | `assets/css/style.css` |
| Add new page | Create in `pages/` folder |
| Add new blog post | Create in `_posts/` folder |
| Add new prompt | Create in `prompts/` folder |
| Update prompt library hub | `pages/prompts.md` |
| Change site title | `_config.yml` |
| Update contributing guide | `CONTRIBUTING.md` |

---

# CONTACT & RESOURCES

**Project Owner:** PedsCoffee
**Repository:** https://github.com/pedscoffee/PhysicianPromptEngineering  
**Live Site:** https://pedscoffee.github.io/PhysicianPromptEngineering  

**Useful Links:**
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [YAML Front Matter Format](https://jekyllrb.com/docs/front-matter/)

---

# VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-10-24 | Initial migration from WordPress to GitHub Pages complete |
| (Next) | TBD | SEO optimization and visual polish |
| (Next) | TBD | Custom domain implementation |
| (Next) | TBD | Community infrastructure setup |

---

**This document was created to provide a complete handoff for continuing work on this project. Update this file as the project evolves.**

**Last Updated:** October 24, 2025  
**Next Review Date:** [To be determined]