---
title: "Billing Analysis Prompt - v1.2"
layout: page
permalink: /prompts/billing-analysis/
---

## Overview

**Purpose:** Assess MDM components and suggest CPT E/M codes with detailed reasoning

**Character Count:** 4,951 / 5,000  
**Status:** ✅ Production Ready  
**Last Updated:** October 2025

This prompt is a great example of "Dot Phrases 2.0" for billing. It outputs a thought process (level for problem, data, and risk) that's mostly correct, allowing you to make final adjustments quickly.

---

## Full Prompt

Copy everything below and paste it into your EMR's AI tool:
Analyze this note and determine the appropriate CPT E/M billing code using 2021 E/M guidelines for an ESTABLISHED patient.
MDM Component Assessment
A. PROBLEMS ADDRESSED
·   Straightforward: 1 self-limited/minor problem
·   Low: 2+ self-limited/minor problems OR 1 stable chronic illness OR 1 acute uncomplicated illness
·   Moderate: Chronic illness with exacerbation/progression OR 2+ stable chronic illnesses OR undiagnosed new problem OR acute illness with systemic symptoms OR acute complicated injury
·   High: Chronic illness with severe exacerbation OR illness posing threat to life/bodily function
B. DATA COMPLEXITY
·   Low: Assessment requires independent historian, None or one piece of data reviewed/ordered
·   Moderate: Any combination of two tests ordered, test results reviewed, or prior external notes reviewed along with assessment requiring an independent historian
·   High: Meets criteria for Moderate AND discussion with external physician regarding interpretation of tests OR independent test interpretation
C. RISK LEVEL
·   Minimal: Minimal risk from testing/treatment
·   Low: OTC medications, rest, observation
·   Moderate: Prescription drugs, Dx or Rx limited by social factors
·   High: Decision regarding hospitalization
2-of-3 Rule
Overall MDM = level met by at least 2 of 3 components.
·   Straightforward = 99212
·   Low = 99213
·   Moderate = 99214
·   High = 99215
Modifier 25 Check
Add modifier 25 for a separately identifiable E/M service during a Well Child Check/Routine child health examination.
Output Format
Problems: [Level] [Brief explanation]
Data: [Level] [What was reviewed/ordered]
Risk: [Level] [Treatment risk level and why]
MDM Score: Problems ([Level]) + Data ([Level]) + Risk ([Level]) = [Overall Level] (based on 2 of 3)
Final Code: 99XXX
Modifier 25 Format:
Modifier 25: Well visit with separate E/M for:

[Problem 1] ([brief intervention])
[Problem 2] ([brief intervention])

Critical Coding Rules

Ordering any culture (e.g., strep, urine) implies consideration of prescription management and elevates Risk to at least Moderate.
Acute illness with systemic symptoms + any culture ordered = 99214 (Moderate Problems + Moderate Data + Moderate Risk).
Assume Assessment requiring an independent historian is always true.

Examples
Viral URI (simple)
Runny nose, cough. Exam: clear. Plan: supportive care.
Problems: Low (1 acute uncomplicated)
Data: Minimal
Risk: Low (supportive care only)
MDM Score: Problems (Low) + Data (Minimal) + Risk (Low) = Straightforward (based on 2 of 3)
Final Code: 99212
Strep Throat
Sore throat, fever 102F, body aches. Exam: exudates. Plan: strep test, amox if positive.
Problems: Moderate (Acute illness with systemic symptoms)
Data: Moderate (test ordered)
Risk: Moderate (prescription antibiotic)
MDM Score: Problems (Moderate) + Data (Moderate) + Risk (Moderate) = Moderate (based on 2 of 3)
Final Code: 99214
UTI with Fever
Toddler with fever 102.5, crying with urination. Exam: suprapubic tenderness. Urine dipstick positive. Plan: send urine culture.
Problems: Moderate (acute illness with systemic symptoms)
Data: Moderate (2 tests ordered and independent historian)
Risk: Moderate (culture implies potential prescription)
MDM Score: Problems (Moderate) + Data (Moderate) + Risk (Moderate) = Moderate (based on 2 of 3)
Final Code: 99214
Well Visit + Ear Infection
5yo well child check. Parent reports ear pain, fever x2 days. Exam: acute otitis media. Plan: amoxicillin.
Problems: Low (1 acute uncomplicated)
Data: Minimal
Risk: Moderate (prescription)
MDM Score: Problems (Low) + Data (Minimal) + Risk (Moderate) = Low (based on 2 of 3)
Final Code: 99393 + 99213-25
Modifier 25: Well visit with separate E/M for: - Acute otitis media (amoxicillin)
Well Visit + Multiple Issues
18-month well child check. Also has URI and diaper rash. Exam: clear rhinorrhea, diaper dermatitis. Plan: supportive care for URI, barrier cream for rash.
Problems: Low (2 self-limited problems: URI, diaper rash)
Data: Minimal
Risk: Low (OTC/supportive care)
MDM Score: Problems (Low) + Data (Minimal) + Risk (Low) = Low (based on 2 of 3)
Final Code: 99392 + 99213-25
Modifier 25: Well visit with separate E/M for: - Viral URI (supportive care) - Diaper rash (barrier cream)
Asthma Exacerbation
Using albuterol 4-5x/day, night cough. Exam: mild wheezing. Plan: increase Flovent.
Problems: Moderate (chronic with exacerbation)
Data: Minimal
Risk: Moderate (prescription adjustment)
MDM Score: Problems (Moderate) + Data (Minimal) + Risk (Moderate) = Moderate (based on 2 of 3)
Final Code: 99214
Multiple Minor Issues
Viral URI, diaper rash, small bruise. Exam unremarkable. Plan: supportive care, barrier cream, observation.
Problems: Low (3 self-limited problems)
Data: Minimal
Risk: Low (OTC only)
MDM Score: Problems (Low) + Data (Minimal) + Risk (Low) = Straightforward (based on 2 of 3)
Final Code: 99212
Do not list any references that were used

---

## Key Insight

The power of this prompt is **few-shot examples**. Instead of trying to explain all the coding rules, we show the model examples with reasoning. It learns the pattern and applies it to new notes.

---

## How to Use

1. **Copy the entire prompt** above
2. **Paste into your EMR's AI tool** after your scribe output
3. **Review the output** - check the code against your documentation
4. **If incorrect, note what's missing** - often means documentation needs detail

---

## Important Disclaimer

This prompt uses oversimplifications to work quickly. It's not meant to teach billing. The goal is to get "mostly right" so you can approve or quickly fix it.

**Always verify with your compliance officer or medical coder before submitting codes.**

---

## Pro Tips

- Use as an audit trail tool to document your coding logic
- If it disagrees with your code, check if documentation is missing details
- The reasoning is more valuable than the code suggestion
- Customize the examples to your most common visit types

---

## Need Help?

Questions about coding? Consult your institution's compliance officer or coder. This is just a productivity tool!

[Back to Prompt Library]({{ site.baseurl }}/prompts/)