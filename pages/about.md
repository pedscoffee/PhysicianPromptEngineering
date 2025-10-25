---
title: "Project Overview"
layout: page
permalink: /about/
---

# Project Overview - Physician Prompt Engineering

## A New Way Forward

The key innovation shared here is physician use of a large language model as a personalized AI Editor to accelerate and enhance medical documentation.

![Workflow diagram](../images/workflow-diagram.png){: style="max-width: 80%; height: auto; display: block; margin: 0 auto;" }

**Goal:** Transform AI scribe output into your exact preferences using EMR's internal LLM. Notes should be fully automated to your exact preferences with no editing required.

While it is tempting to take this in all sorts of directions, it's recommended to start with a goal of creating notes that are indistinguishable from your current handwritten notes but are fully automatic. That way you can start to reap the benefits immediately.

## Three Production Prompts

- **A/P Formatting** – Transforms paragraphs into concise, problem-oriented notes
- **Billing Analysis** – Assesses MDM and suggests CPT codes with audit trail
- **AVS Generation** – Creates personalized sign-offs + family to-do lists

### Key Constraint

Epic EMR LLM only accepts plain text (no markdown, no rich formatting). All prompts must be ≤5,000 characters.

These prompts were made to work with Epic's Generate Text with AI feature. This same workflow could be done with other LLMs and not necessarily inside the EMR (and probably more successfully!), but be sure that whatever you're using is approved by your IT department and safe for HIPAA.

Get the prompts as separate posts on this site that you can directly copy and paste or check out the GitHub repository: https://pedscoffee.github.io/PediatriciansCoffee/

## The Big Three Insights

### Few-Shot Examples Are Critical

- Most important element for prompt success
- Show, don't tell – examples guide output better than instructions

### Brevity Improves Quality

- Shorter bullets = faster scanning, easier approval
- Less editing required, more human-feeling

### Separate Prompts for Separate Functions

- Each prompt does one thing well
- Can be used independently or together
- Easier to refine and iterate

## Key Success Factors

- **Match your natural style** – Don't force unfamiliar formats
- **Build test library early** – Deidentified transcripts can greatly speed iteration while improving prompts
- **Iterate scientifically** – Change one thing at a time, test thoroughly
- **Real-world testing reveals value** – Be open to unexpected benefits

## Current Production Prompts

### 1. A/P Formatting v2.0 ("Pithy")

**Purpose:** Transform AI scribe paragraphs into scannable, problem-oriented notes

**Character Count:** 3,277 / 5,000

**Status:** Excellent performance across diverse clinical contexts

**Key Features:**
- Extremely brief bullets (≤10 words)
- Clinical shorthand (RTC, PRN, BID)
- No section headers
- Conditional boilerplate (illness, injury, well visit, etc.)
- 8-space indentation for bullets
- Bold problem names, italicized boilerplate

**Example Output:**

**Viral URI**
- Supportive care, fluids
- Declined COVID test
- RTC PRN

*Recommended supportive care with OTC medications...*

### 2. Billing Analysis v1.2

**Purpose:** Assess MDM components and suggest CPT E/M codes with detailed reasoning

**Character Count:** 4,951 / 5,000

**Status:** Exceeding expectations – valuable audit trail

**Key Features:**
- Evaluates Problems, Data, Risk per 2021 E/M guidelines
- Applies 2-of-3 rule
- Handles modifier 25 for well visits
- Provides traceable reasoning for audits

**Example Output:**

Problems: Moderate (systemic symptoms)
Data: Moderate (test ordered)
Risk: Moderate (prescription antibiotic)
2-of-3 Analysis: All 3 meet Moderate. Overall=Moderate.
Final Code: 99214

### 3. AVS Generation v1.0

**Purpose:** Generate personalized sign-offs + actionable family to-do lists

**Character Count:** 4,715 / 5000

**Status:** Working well in testing, ready for production use

**Key Features:**
- Three sign-off options (≤25 words each)
- Visit-specific acknowledgment
- Actionable-only to-do list
- Complements EMR's auto-population

**Example Output:**

Great seeing y'all today! Good luck with soccer and kindergarten!

To-Do List:

Tests/Results:
- Strep test: Results pending, we will call tomorrow

Appointments:
- Return to clinic if no improvement in 7 days

## AI Scribe Configuration

**Current Settings:**
- Output: One paragraph per diagnosis
- Multiple problems: Numbered (1., 2., 3.)
- Filtering: Minimal (let LLM refine)
- Rationale: Reduces susceptibility to scribe prompt drift

## Testing & Validation

### Test Transcript Library

- HIPAA compliance is a must
- Current Size: 50+ deidentified cases
- Coverage: Sick visits, well visits, chronic conditions, complex cases, newborns
- Critical Insight: More important than initially thought – enables rapid validation, especially once broad enough to capture the full array of common visits and different edge cases

### Testing Protocol for New Prompts

1. Test through entire transcript library first
2. Iterate as appropriate
3. Once ready, incorporate into real work day and see how it fits into overall workflow
4. Ongoing iterative improvement and edge case identification

**Important Note:** Edge cases do not all need to be addressed to have a successful prompt. They are valuable to identify, but all of this work assumes a physician in the loop. Creating a tool that covers the most common situations is still incredibly useful so long as the physician using the prompts understands the edge cases when the tool may miss something.

## Common Issues & Solutions

### A/P Formatting

**Problem:** Format not as intended

**Fix:** Check few-shot examples. If one of them is even slightly off target, it will throw the pattern matching out of whack.

### Billing Analysis

**Problem:** Physician disagrees with intended code

**Use as flag:** Often indicates documentation is missing a detail.

**Remember:** The primary value of the billing prompt is quick documentation of why a code was chosen, not intended for absolute accuracy. If a part of the coding is incorrect, just change it quickly and move on.

### AVS Generation

**Problem:** Tone mismatch between visit and sign-offs generated

**Fix:** Adjust few-shot examples to better match your voice. Consider using additional time gained from previous steps in workflow to personalize it even more.

## Personal Project Version History

### Version 2.2 – Current

- All three prompts (A/P, Billing, and AVS) in production
- Billing exceeding expectations
- AVS ready for clinic use
- Test library: 50+ transcripts

**Anticipated Next Steps/Goals:**
- Refine Gemini Gem to assist with prompt creation until ready to share publically
- Continue to iterate on teaching "Questions for Rounds" and metacognition prompts
- Create opportunity on GitHub for public sharing of prompts amongst clinicians

### Version 2.0 – A/P Breakthrough

- "Pithy" format with extreme brevity
- Felt like a ~50% cognitive load reduction during the work day; huge win
- 1,697 characters headroom

### Version 1.0 – Archived

- Detailed format with section headers
- May be preferred by some clinicians or for really complex visits
- Few-shot examples established as critical

## Quick Start for New Prompts

### Define YOUR Desired Output First

This is the hardest step. Collect 3-5 examples of perfect notes in YOUR style.

### Create Clear Few-Shot Examples

- Start simple
- Few-shot examples do heavy lifting
- Less instructions often equals better output as it is an easier pattern for the LLM to follow

### Build Test Library Early

- Aim for 40+ deidentified transcripts
- Include variety: sick, well, chronic, complex

### Test Extensively

- Run through entire test library
- Limit real clinic day use until you feel comfortable with prompt's typical output and confident that task of reviewing output is better than writing from scratch

### Iterate Based on Real-World Use

- Edge cases are normal
- Refine based on patterns

## Technical Specs

### Epic EMR Generate Text with AI Constraints

- Max 5,000 characters per prompt
- Plain text only (no markdown)
- Access via right-click or Ctrl-F6
- Can pin up to 5 favorite prompts

### Formatting Rules

- Describe all formatting in natural language
- 8-space indentation for bullets (works well)
- Bold/italics specified verbally, not with symbols (sometimes a challenge)

## When to Use Each Prompt

### A/P Formatting (Essential)

- Every visit after AI scribe generates output
- Core documentation workflow

### Billing Analysis (Recommended)

- When uncertain about complexity level
- For audit trail documentation
- To identify documentation gaps

### AVS Generation (Optional)

- When personalization adds value
- For complex visits needing clarity
- When to-do list would help families