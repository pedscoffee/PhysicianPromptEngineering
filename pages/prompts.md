---
title: "Prompt Library"
layout: page
permalink: /prompts/
---

# Production-Ready Prompts

Welcome to the Physician Prompt Engineering prompt library. Each prompt is designed for a specific task and tested in real clinical workflows.

---

## 1. A/P Formatting ("Pithy") - v2.0

**Purpose:** Transform AI scribe paragraphs into scannable, problem-oriented notes

**Status:** ✅ Production Ready  
**Character Count:** 3,277 / 5,000  
**Specialty:** Pediatrics (adaptable to all specialties)

### Key Features:
- Extremely brief bullets (≤10 words)
- Clinical shorthand (RTC, PRN, BID)
- No section headers
- Conditional boilerplate
- 8-space indentation for bullets

[**View Full Prompt →**]({{ site.baseurl }}/prompts/ap-formatting/)

---

## 2. Billing Analysis - v1.2

**Purpose:** Assess MDM components and suggest CPT E/M codes with detailed reasoning

**Status:** ✅ Production Ready  
**Character Count:** 4,951 / 5,000  
**Specialty:** Pediatrics (adaptable to all specialties)

### Key Features:
- Evaluates Problems, Data, Risk per 2021 E/M guidelines
- Applies 2-of-3 rule
- Handles modifier 25 for well visits
- Provides traceable reasoning for audits

[**View Full Prompt →**]({{ site.baseurl }}/prompts/billing-analysis/)

---

## 3. After Visit Summary (AVS) Generation - v1.0

**Purpose:** Generate personalized sign-offs + actionable family to-do lists

**Status:** ✅ Production Ready  
**Character Count:** 4,715 / 5,000  
**Specialty:** Pediatrics (adaptable to all specialties)

### Key Features:
- Three sign-off options (≤25 words each)
- Visit-specific acknowledgment
- Actionable-only to-do list
- Complements EMR's auto-population

[**View Full Prompt →**]({{ site.baseurl }}/prompts/avs-generation/)

---

## How to Use These Prompts

1. **Choose your prompt** based on your task
2. **Copy the full prompt text**
3. **Paste into your EMR's AI tool** (e.g., Epic's "Generate Text with AI")
4. **Add your AI scribe output** after the prompt
5. **Review and approve** the generated text

---

## Need to Customize?

All prompts are starting points. You should customize:
- **Few-shot examples** to match your specialty and style
- **Boilerplate text** to match your documentation preferences
- **Abbreviations** to match your EMR and practice

**The more you customize, the better the output.**