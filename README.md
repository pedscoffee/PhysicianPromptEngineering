# Physician Prompt Engineering

[![Website](https://img.shields.io/badge/Website-physicianpromptengineering.com-blue?logo=github)](https://physicianpromptengineering.com/)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.17449352-green)](https://doi.org/10.5281/zenodo.17449352)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](support.md)
![Community Contributions](./images/thank-you-banner.jpg)

> Clinical AI prompts that help adapt AI scribe output to your documentation style. Review every generated note before use.

## Overview

**Physician Prompt Engineering** is a small, physician-run site sharing free prompts for AI scribes and EMR text generation, plus guidance on using them well.

AI scribes capture the conversation well, but their default notes are written to satisfy everyone. A few well-built prompts, either instructions given to the scribe itself (such as Epic Art Memories) or an editor prompt run on its draft, close most of that gap.

## What's on the site

### Prompts
- **[Prompt Library](https://physicianpromptengineering.com/prompt-library)**: prompts organized by platform: Epic Art (Memories, coming soon), Epic Text Assistant, DAX custom instructions, and any AI assistant
- **[A&P Style Guide](https://physicianpromptengineering.com/prompt-style-guide/)**: the same visit written in different A&P styles

### Learning
- **[2-Minute Quick Start](https://physicianpromptengineering.com/quick-guide)**
- **[AI Scribe Best Practices](https://physicianpromptengineering.com/ai-scribe-best-practices)**
- **[Prompting Best Practices](https://physicianpromptengineering.com/best-practices)**
- **[Interactive Course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)**: 4 modules, 12 exercises; run each exercise in your own AI assistant or the optional in-browser model
- **[Notes](https://physicianpromptengineering.com/notes/)**: dated write-ups, starting with Charting with Epic Art

### Tools
- **[Quick Start A&P Builder](https://physicianpromptengineering.com/prompt-generator)**, **[Prompt Remix](https://physicianpromptengineering.com/prompt-remix)**, **[Prompt Manager](https://physicianpromptengineering.com/prompt-manager)**
- **[Dot Phrase Library](https://physicianpromptengineering.com/dot-phrase-library)** and **[Dot Phrase Builder](https://physicianpromptengineering.com/dot-phrase-builder)**
- **[Repertoire](https://www.noterepertoire.com/)**: a separate project for organizing reusable note templates

### Legacy Side Projects
Productivity, visualization, and in-browser AI tools built while learning web development are kept as-is on the **[Legacy Side Projects](https://physicianpromptengineering.com/legacy/)** page. They're not actively maintained. Pages that used an in-browser model now start with a short prompt to paste into your own AI assistant.

## Core Principles

1. **Examples drive quality**: 3-5 examples of your desired output teach AI better than lengthy instructions
2. **Conciseness improves efficiency**: brief, scannable notes reduce review time
3. **One prompt, one purpose**: dedicated prompts outperform multi-purpose ones

## Local Development

Use Ruby 3.3 or newer, Bundler, Node.js 18 or newer, and Python 3. The Gemfile uses Jekyll 3.x to match GitHub Pages.

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To verify a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
python3 scripts/check_site.py _site
node --test tests/*.test.js
```

Generated output in `_site/` is ignored. Repository notes and unfinished newborn-course modules are excluded from the public build; their source remains available for future work.

## Contributing

We welcome contributions from the medical community! This project thrives on shared knowledge.

### How to Contribute

#### Option 1: Web Submission (Recommended)
Use our [submission form](https://physicianpromptengineering.com/support#contribute) on the website.

#### Option 2: GitHub Pull Request
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-prompt-name`)
3. Add your prompt following our template
4. Include testing notes and use cases
5. Submit a Pull Request

### What We Need
- Specialty-specific prompts
- EMR-specific optimizations
- International/multilingual adaptations
- Testing feedback and refinements

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Important Disclaimers

### Clinical Responsibility
- All AI-generated content requires physician review before finalizing
- These tools enhance efficiency, not replace clinical judgment
- You retain full responsibility for the output including anything assisted or produced by these tools

### Security Requirements
- **ONLY** use within HIPAA-compliant and IT approved environments and workflows
- **NEVER** use public AI tools (ChatGPT, Claude, Gemini) with patient data
- Follow your institution's AI usage policies

### No Medical Advice
This project provides educational tools only. It does not constitute medical, legal, or billing advice.
See full [Disclaimer](https://physicianpromptengineering.com/disclaimer)

## Citation

If you use this project in your research or practice, please cite:

```bibtex
@software{physician_prompt_engineering,
  author = {Physician Prompt Engineering Contributors},
  title = {Physician Prompt Engineering: Open-Source Clinical Documentation Prompts},
  year = {2025},
  url = {https://physicianpromptengineering.com},
  doi = {10.5281/zenodo.17449352}
}
```

## Support & Contact

- **Website**: [physicianpromptengineering.com](https://physicianpromptengineering.com)
- **Discussions**: [GitHub Discussions](https://github.com/pedscoffee/PhysicianPromptEngineering/discussions)
- **Issues**: [GitHub Issues](https://github.com/pedscoffee/PhysicianPromptEngineering/issues)
- **About**: [Learn about the project](https://physicianpromptengineering.com/about)

## Acknowledgments

Special thanks to the free online medical education community that inspired this project.

---

<p align="center">
  <strong>If this project saves you time, please star it and share with colleagues!</strong>
</p>

<p align="center">
  <sub>Built by physicians, for physicians.</sub>
</p>

<p align="center">
  <a href="https://physicianpromptengineering.com">Visit Website</a> ·
  <a href="https://physicianpromptengineering.com/best-practices">Best Practices</a> ·
  <a href="https://physicianpromptengineering.com/support#contribute">Contribute</a> ·
  <a href="https://physicianpromptengineering.com/about">About</a>
</p>
