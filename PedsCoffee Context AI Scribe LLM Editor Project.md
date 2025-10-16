# Pediatric AI Scribe Workflow - Quick Reference v2.2

**Status:** Production - All three prompts deployed successfully

---

## System Overview

**Goal:** Transform AI scribe output into structured clinical documentation using EMR's internal LLM.

**Workflow:** AI scribe records visit → Generates paragraph text → EMR LLM applies formatting prompts → Structured output

**Three Production Prompts:**
1. **A/P Formatting** - Transforms paragraphs into concise, problem-oriented notes
2. **Billing Analysis** - Assesses MDM and suggests CPT codes with audit trail
3. **AVS Generation** - Creates personalized sign-offs + family to-do lists

**Key Constraint:** EMR LLM only accepts plain text (no markdown, no rich formatting). All prompts must be ≤5,000 characters.

---

## Core Design Principles

### The Big Three Insights

1. **Few-shot examples are critical** (v1.0 insight)
   - Most important element for prompt success
   - Show, don't tell - examples guide output better than instructions

2. **Brevity improves quality** (v2.0 insight - for A/P)
   - Shorter bullets = faster scanning, easier approval
   - Less editing required, more human-feeling
   - ~50% cognitive load reduction

3. **Separate prompts for separate functions** (v2.1 insight)
   - Each prompt does one thing well
   - Can be used independently or together
   - Easier to refine and iterate

### Key Success Factors

- **Match your natural style** - Don't force unfamiliar formats
- **Build test library early** - 50+ deidentified transcripts critical for validation
- **Plain text only** - Describe all formatting in natural language
- **Iterate scientifically** - Change one thing at a time, test thoroughly
- **Real-world testing reveals value** - Be open to unexpected benefits

---

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
```
**Viral URI**
- Supportive care, fluids
- Declined COVID test
- RTC PRN

*Recommended supportive care with OTC medications...*
```

### 2. Billing Analysis v1.2

**Purpose:** Assess MDM components and suggest CPT E/M codes with detailed reasoning  
**Character Count:** 4,951 / 5,000
**Status:** Exceeding expectations - valuable audit trail

**Key Features:**
- Evaluates Problems, Data, Risk per 2021 E/M guidelines
- Applies 2-of-3 rule
- Handles modifier 25 for well visits
- Provides traceable reasoning for audits

**Example Output:**
```
Problems: Moderate (systemic symptoms)
Data: Moderate (test ordered)
Risk: Moderate (prescription antibiotic)
2-of-3 Analysis: All 3 meet Moderate. Overall=Moderate.
Final Code: 99214
```

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
```
Great seeing y'all today! Good luck with soccer and kindergarten!

To-Do List:
Tests/Results:
  - Strep test: Results pending, we will call tomorrow
Appointments:
  - Return to clinic if no improvement in 7 days
```

---

## AI Scribe Configuration

**Current Settings:**
- Output: One paragraph per diagnosis
- Multiple problems: Numbered (1., 2., 3.)
- Filtering: Minimal (let LLM refine)
- Rationale: Reduces susceptibility to scribe prompt drift

---

## Testing & Validation

### Test Transcript Library
- **Current Size:** 50+ deidentified cases
- **Coverage:** Sick visits, well visits, chronic conditions, complex cases, newborns
- **Gap:** Teenage well checks (planned addition)
- **Critical Insight:** 40+ is more important than initially thought - enables rapid validation

### Testing Protocol
1. Test through entire transcript library first
2. Iterate as appropriate
3. Once ready, incorporate into real work day and see how it fits into overall workflow
4. Ongoing iterative improvement and edge case identification

---

## Common Issues & Solutions

### A/P Formatting
- **Problem:** Boilerplate not triggering
- **Fix:** Check "If X discussed" conditional language in AI scribe output, make sure note says what you think it says

### Billing Analysis
- **Problem:** Disagrees with intended code
- **Use as flag:** Often indicates documentation should be enhanced
- **Remember:** Primary value is audit trail, not absolute accuracy

### AVS Generation
- **Uncertainty:** Interaction with EMR's auto-population in AVS
- **Plan:** Iterate based on real-world clinic feedback

---

## Version History

**Version 2.2** - Current
- All three prompts (A/P, Billing, and AVS) in production
- Billing exceeding expectations
- AVS ready for clinic use
- Test library: 50+ transcripts

**Version 2.0** - A/P breakthrough
- "Pithy" format with extreme brevity
- ~50% cognitive load reduction
- 1,697 characters headroom

**Version 1.0** - Archived
- Detailed format with section headers
- May be preferred by some clinicians
- Few-shot examples established as critical
- Gemini Gem to assist with prompt creation created

---

## Quick Start for New Prompts

1. **Define YOUR desired output first** (hardest step)
   - Collect 3-5 examples of perfect notes in YOUR style
   - Create clear few-shot examples

2. **Build test library early**
   - Aim for 40+ deidentified transcripts
   - Include variety: sick, well, chronic, complex

3. **Start simple**
   - Few-shot examples do heavy lifting
   - Less instruction often = better output

4. **Test extensively**
   - Run through entire test library
   - Limited production before full rollout

5. **Iterate based on real-world use**
   - Edge cases are normal
   - Refine based on patterns

---

## Key Metrics

**Performance (v2.2):**
- A/P editing: Significantly reduced from v1.0
- Billing accuracy: More accurate than expected
- AVS: Working well in testing

**What's Working:**
- Minimal cognitive load during visits
- Rapid review after visits
- Natural, human-feeling output
- Sustainable workflow

---

## Technical Specs

**EMR LLM Constraints:**
- Max 5,000 characters per prompt
- Plain text only (no markdown)
- Access via right-click or Ctrl-F6
- Can pin up to 5 favorite prompts

**Formatting Rules:**
- Describe all formatting in natural language
- 8-space indentation for bullets (works well)
- Bold/italics specified verbally, not with symbols

**Security:**
- All patient data stays in EMR
- Never use external LLMs with patient data
- Only use deidentified examples for development

---

## When to Use Each Prompt

**A/P Formatting** (Essential)
- Every visit after AI scribe generates output
- Core documentation workflow

**Billing Analysis** (Recommended)
- When uncertain about complexity level
- For audit trail documentation
- To identify documentation gaps

**AVS Generation** (Optional)
- When personalization adds value
- For complex visits needing clarity
- When to-do list would help families

---

## Future Development

**Immediate:**
- Offer team onboarding with menu of starter prompts
- AVS refinement based on clinic feedback
- Billing edge case refinement
- Continue to expand transcript library with edge cases

**Future:**
- Teaching/metacognition prompts (prototyped but not yet finished)
- Consider physical exam workflow integration (lower priority)

--- 