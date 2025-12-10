# Clinical Toolkit

Open-source productivity and visualization tools designed by physicians, for physicians.

## About This Project

Clinical Toolkit is a collection of practical web-based tools to help physicians manage their professional lives more efficiently. From tracking RVUs and planning PTO to visualizing clinical workflows and creating educational diagrams, these tools address real pain points in modern medical practice.

All tools run entirely in your browser with local data storage—no server uploads, no PHI exposure, no tracking.

## Tools Included

### Productivity & Tracking (9 Tools)
- **ClockWork TimeBox** - Visual time-tracking and task management
- **RVU Data Tracker** - Track clinic volume and RVU production
- **QI Project Tracker** - Manage Quality Improvement projects
- **QI Project Planner** - Plan QI projects with IHI methodology
- **Trainee Goal Setter** - Set rotation goals and track feedback
- **Annual PTO Planner** - Visualize and plan time off
- **CME & Budget Tracker** - Track continuing education credits
- **Reflect** - Daily clinical reflection journaling
- **E&M Calculator** - Calculate E/M billing codes

### Visualization & Education (7 Tools)
- **Clinical Flowchart Generator** - AI-powered clinical algorithms
- **Differential Mind Map** - Organized differential diagnosis maps
- **Pathophysiology Mechanism Mapper** - Disease mechanism diagrams
- **Patient Timeline Visualizer** - Interactive case timelines
- **Clinical Workflow Optimizer** - Map and optimize workflows
- **Interactive Anatomy Tool** - Visual anatomy reference
- **Pediatric Airway Visualizer** - Asthma/bronchiolitis physiology

## Technology Stack

- **Framework:** Jekyll (Static Site Generator)
- **Hosting:** GitHub Pages
- **CSS:** Custom design system with CSS variables
- **JavaScript:** Vanilla JS, WebLLM for AI features
- **PWA:** Progressive Web App support for offline use

## Quick Start

### For Users
1. Visit the live site: [URL]
2. Browse tools and click to use
3. Install PWA versions for offline access (select tools)
4. No signup or installation required

### For Developers
```bash
# Clone the repository
git clone https://github.com/[USERNAME]/ClinicalToolkit.git
cd ClinicalToolkit

# Install Jekyll
gem install bundler jekyll

# Run locally
bundle install
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Local Data Storage

All tools store data locally in your browser using `localStorage`. Your data:
- ✅ Never leaves your device
- ✅ Persists between sessions
- ✅ Can be exported for backup
- ❌ NOT HIPAA compliant - never enter PHI

## PWA (Progressive Web App) Support

Several tools support installation as standalone apps:
- ClockWork TimeBox
- RVU Data Tracker
- QI Project Tracker
- Annual PTO Planner
- CME & Budget Tracker
- E&M Calculator

Install for offline access and home screen shortcuts.

## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or creating new tools:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-tool`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines
- Keep tools simple and focused
- Use local storage only (no server calls)
- Follow existing code style
- Test on mobile and desktop
- Document your code

## Privacy & Security

This website:
- Collects minimal analytics (Google Analytics - anonymous)
- Uses no authentication or accounts
- Stores NO data on servers
- Is NOT HIPAA compliant
- Should NEVER contain PHI

**IMPORTANT:** Never enter Protected Health Information (PHI) or patient-identifying data into any tool.

## License

MIT License - Free to use, modify, and distribute.

## Support

- **Issues:** [GitHub Issues](https://github.com/[USERNAME]/ClinicalToolkit/issues)
- **Discussions:** [GitHub Discussions](https://github.com/[USERNAME]/ClinicalToolkit/discussions)
- **Contact:** [Your contact method]

## Acknowledgments

Built with the belief that physicians deserve better tools for the administrative aspects of medicine. These tools are by physicians, for physicians.

## Related Projects

- **[Physician Prompt Engineering](https://github.com/pedscoffee/PhysicianPromptEngineering)** - AI documentation tools and prompt engineering resources

---

**Built by physicians, for physicians. Open source, always free.**
