# Archived Tools - December 2025

This document lists tools that were part of Physician Prompt Engineering but have been archived to focus the platform exclusively on **AI clinical documentation**.

These tools remain available in the repository history and may be spun off as a separate "Clinical Productivity Toolkit" project in the future.

---

## Productivity & Tracking Tools

### Time Management
- **ClockWork TimeBox** (`clockwork-timebox.md`) - Visual time-tracking and task management with Pomodoro timer
  - PWA-enabled
  - Analytics and reporting
  - Archived: December 2025

### Clinical Tracking
- **RVU Data Tracker** (`clinic-visit-tracker.md`) - Track clinic volume and RVU production
  - PWA-enabled
  - Billing code automation
  - Archived: December 2025

- **QI Project Tracker** (`qi-project-tracker.md`) - Manage Quality Improvement projects and milestones
  - Data entry and tracking
  - Export functionality
  - Archived: December 2025

- **QI Project Planner** (`qi-project-planner.md`) - Plan QI projects with IHI methodology wizard
  - Step-by-step planning
  - IHI framework integration
  - Archived: December 2025

- **Trainee Goal Setter** (`trainee-goal-setter.md`) - Set rotation goals and get attending feedback
  - Goal tracking
  - Feedback forms
  - Archived: December 2025

- **CME & Budget Tracker** (`cme-tracker.md`) - Track CME credits and educational budget
  - PWA-enabled
  - Budget management
  - Archived: December 2025

- **Annual PTO Planner** (`pto-planner.md`) - Visualize and plan time off for the year
  - PWA-enabled
  - Calendar visualization
  - Archived: December 2025

- **Reflect** (`reflect.md`) - Daily clinical reflection and journaling tool
  - Simple journaling interface
  - Private, local storage
  - Archived: December 2025

### Billing & Coding
- **E&M Calculator** (`cpt-calculator.md`) - Calculate E/M billing codes based on MDM
  - PWA-enabled
  - CPT code recommendations
  - Archived: December 2025
  - Note: Could be reconsidered as documentation-adjacent

---

## Visualization & Education Tools

- **Clinical Flowchart Generator** (`clinical-flowchart.md`) - AI-powered clinical algorithm visualization
  - AI and manual modes
  - Export to image/PDF
  - Archived: December 2025

- **Differential Mind Map** (`differential-mindmap.md`) - Generate organized differential diagnosis mind maps
  - AI-powered
  - System-based organization
  - Archived: December 2025

- **Pathophysiology Mechanism Mapper** (`mechanism-mapper.md`) - Visualize disease mechanisms and pathways
  - AI-powered
  - Educational focus
  - Archived: December 2025

- **Patient Timeline Visualizer** (`patient-timeline.md`) - Interactive patient timelines for presentations
  - AI-powered from HPI text
  - Case presentation tool
  - Archived: December 2025

- **Clinical Workflow Optimizer** (`workflow-optimizer.md`) - Map and optimize clinical workflows
  - Drag-and-drop interface
  - Workflow library
  - Archived: December 2025

- **Interactive Anatomy Tool** (`interactive-anatomy.md`) - Visual anatomy reference for patient education
  - Interactive diagrams
  - Patient education focus
  - Archived: December 2025

- **Pediatric Airway Visualizer** (`pediatric-airway-enhanced.md`) - Asthma/bronchiolitis physiology simulation
  - Interactive visualization
  - Treatment effects demonstration
  - Archived: December 2025

---

## Associated Files Archived

### Service Workers (PWA)
- `cme-sw.js` and `cme-manifest.json` (CME Tracker)
- `pto-sw.js` and `pto-manifest.json` (PTO Planner)
- `timebox-sw.js` and `timebox-manifest.json` (TimeBox)
- `rvu-sw.js` and `rvu-manifest.json` (RVU Tracker)
- `em-calc-sw.js` and `em-calc-manifest.json` (E&M Calculator)
- `dotphrase-sw.js` and `dotphrase-manifest.json` (Note: Dot Phrase Library retained, but PWA may be reconsidered)

### Demo Files
- `emr-demo.html` (EMR interface demo)

---

## Future Plans

These tools represent significant development effort and address real physician pain points. Potential future directions:

1. **Spin-off Project:** "Clinical Productivity Toolkit" as separate website/repository
2. **Open Source Handoff:** Release to community for independent maintenance
3. **Selective Reintegration:** If documentation-connection emerges (e.g., workflow optimizer for documentation processes)

---

## For Developers

Tools are preserved in git history at commit [COMMIT_HASH]. To access:

```bash
git log --all --full-history -- clockwork-timebox.md
git checkout [COMMIT_HASH] -- clockwork-timebox.md
```

Or browse the archived-tools branch (if created).

---

**Archive Date:** December 9, 2025  
**Decision:** Focus platform exclusively on AI clinical documentation  
**Archived By:** Site maintainer  
**Status:** Tools remain in repository, removed from active navigation
