---
title: "A/P Formatting Prompt (Pithy v2.0)"
layout: page
permalink: /prompts/ap-formatting/
---

## Overview

**Purpose:** Transform AI scribe paragraphs into scannable, problem-oriented notes

**Character Count:** 3,277 / 5,000  
**Status:** ✅ Production Ready  
**Last Updated:** October 2025

This prompt achieves a ~50% cognitive load reduction during documentation. Notes should look indistinguishable from your handwritten notes but fully automated.

---

## Full Prompt

Copy everything below and paste it into your EMR's AI tool:
Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.

Output Structure for Each Problem/Diagnosis
[Problem/Diagnosis Name]

[A very brief bullet point summarizing a key finding, action, or follow-up plan]
[Each point should be a separate bullet, written as a short clinical shorthand phrase]


Conditional Boilerplate Text
[Insert after the bulleted list when applicable. This text should be italicized.]
If well child check or health maintenance discussed:
"All forms, labs, immunizations, and patient concerns reviewed and addressed appropriately. Screening questions, past medical history, past social history, medications, and growth chart reviewed. Age-appropriate anticipatory guidance reviewed and printed in AVS. Parent questions addressed."
If any illness discussed:
"Recommended supportive care with OTC medications as needed. Return precautions given including increasing pain, worsening fever, dehydration, new symptoms, prolonged symptoms, worsening symptoms, and other concerns. Caregiver expressed understanding and agreement with treatment plan."
If any injury discussed:
"Recommended supportive care with Tylenol, Motrin, rest, ice, compression, elevation, and gradual return to activity as appropriate. Return precautions given including increasing pain, swelling, or failure to improve."
If ear infection discussed:
"Risk of untreated otitis media includes persistent pain and fever, hearing loss, and mastoiditis."
If strep test discussed:
"Risk of untreated strep throat includes rheumatic fever and peritonsillar abscess. This problem is moderate risk due to pending lab results which may necessitate further pharmacologic management."
If dehydration, vomiting, diarrhea, or decreased urination discussed:
"Patient is at risk for dehydration, which would warrant emergency room care or admission for IV fluids."
If trouble breathing discussed:
"Patient is at risk for worsening respiratory distress and clinical deterioration, which would need emergency room care or hospital admission."
If ADHD, obesity, or strep throat discussed:
"PCMH Reminder"

Formatting Rules

Bold formatting for problem names
Italicized formatting for all boilerplate text
Do NOT use section headers like Assessment or Plan
Use a hyphen (-) for all bullets
Indent all bullets with 8 spaces
Write all bullet points in extremely brief, professional shorthand phrases
Keep bullets concise (ideally under 10 words per bullet)
Use standard medical abbreviations (RTC, PRN, BID, etc.)
Never fabricate or infer information not present in the source text
Insert a blank line between problems when multiple diagnoses exist
No references


Few-Shot Examples
Asthma

Flovent 44mcg 2 puff BID started
Continue albuterol PRN
Use spacer
RTC 3mo/PRN

Well Child Check

Growing and developing well
Reviewed anticipatory guidance
RTC 1yr/PRN

Vomiting, mild dehydration

NDNT on exam with MMM
Zofran PRN, pedialyte, Tylenol, Motrin
RTC PRN

ADHD

Concerta 27mg not effective
Transition to Vyvanse 20mg PO daily
RTC 1mo

Viral URI

Supportive care, fluids
Declined COVID test
RTC PRN


---

## How to Use

1. **Customize the few-shot examples** to match your specialty and style
2. **Update the boilerplate text** to match your documentation preferences
3. **Copy the entire prompt** (everything in the box)
4. **Paste into your EMR's AI tool** after your scribe output
5. **Review the output** - should need minimal to no editing

---

## Tips for Best Results

- The few-shot examples are the most important part
- Even slight changes to examples throw off the output
- Update examples to match your most common visit types
- Use your own abbreviations
- Test on 3-5 notes before relying on it daily

---

## Need Help?

Having issues? Check:
- Are all your examples formatted consistently?
- Is your boilerplate text appropriate for the visit type?
- Did you update the examples for your specialty?

[Back to Prompt Library]({{ site.baseurl }}/prompts/)