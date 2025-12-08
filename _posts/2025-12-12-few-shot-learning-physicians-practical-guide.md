---
layout: post
title: "Few-Shot Learning for Physicians: A Practical Guide"
date: 2025-12-12 09:00:00 -0500
categories: [AI, Education, Prompt Engineering, Machine Learning]
tags: [few-shot learning, prompt examples, AI training, clinical documentation, medical AI]
excerpt: "Understand how few-shot learning works and why it's the secret weapon for creating effective clinical AI prompts. Includes practical examples and implementation guide."
---

# Few-Shot Learning for Physicians: A Practical Guide

The one technique that separates good prompts from great ones.

---

## What isEw-Shot Learning?

**Few-shot learning** is teaching AI through 3-5 examples instead of thousands of training datapoints or lengthy instructions.

**Think of it like this:**

**Traditional ML:** "We trained this model on 100,000 radiology reports."  
**Zero-shot:** "Rad AI, interpret this X-ray." (no examples)  
**Few-shot:** "Here are 3 examples of how I describe pneumonia on X-ray. Now describe this one."

**Why this matters for physicians:** You don't need to be a data scientist or have thousands of examples. You need 3-5 good ones.

---

## Why It Works

### The Pattern Recognition Advantage

Large language models (like the AI in your EMR) are fundamentally pattern recognition systems.

**They excel at:**
- Identifying structure and format
- Matching tone and style
- Mimicking organization
- Applying implicit rules

**They struggle with:**
- Vague instructions ("be concise")
- Abstract concepts ("sound professional")
- Novel requirements they haven't seen

**Example comparison:**

❌ **Instruction-based (struggles):**
```
Create an Assessment & Plan that is concise, problem-oriented,
uses bullet points, follows standard medical convention, and
matches my documentation style.
```

✅ **Few-shot (excels):**
```
Format like these examples:

1. HTN, controlled
   - BP 128/76 on lisinopril 10mg
   - Continue current regimen
   - RTC 6 months

1. Acute pharyngitis
   - Viral etiology likely
   - Supportive care
   - Return precautions given
```

**The AI "sees" your style instantly from examples, no explanation needed.**

---

## The Science (Simplified)

### How LLMs Process Few-Shot Examples

When you provide examples, the AI:

1. **Analyzes structure** - Identifies formatting patterns
2. **Extracts rules** - Infers implicit guidelines
3. **Matches context** - Applies learned patterns to new input
4. **Generates output** - Produces similar format/style

This happens through **in-context learning** - the model temporarily adapts based on examples in your prompt.

**Key insight:** The examples become temporary training data for that specific task.

### Why 3-5 Examples Is Optimal

**Research shows:**

- **1 example:** AI might think it's unique/specific case
- **2 examples:** Starting to see pattern, but still uncertain
- **3-5 examples:** Clear pattern established, robust performance
- **6-10 examples:** Diminishing returns, longer processing
- **10+ examples:** Risk of overfitting, confusion

**Clinical translation:** 3-5 of YOUR best notes = AI learns YOUR style.

---

## Clinical Applications

### Application 1: Assessment & Plan Formatting

**Goal:** Transform verbose AI scribe output into concise, problem-oriented A&P.

**Few-shot prompt structure:**

```
Reformat into problem-oriented A&P following these examples:

EXAMPLE 1 - SINGLE PROBLEM:
1. UTI
   - UA: +nitrites, +leukesterase. UCx pending.
   - Start cipro 500mg BID x 3 days
   - Increase fluids
   - RTC if worsening

EXAMPLE 2 - MULTIPLE CHRONIC CONDITIONS:
1. DM2, suboptimal control
   - A1C 8.3%
   - Increase metformin 1000mg BID
   - Nutrition referral
   - RTC 8 weeks

2. HTN, controlled
   - BP 132/78
   - Continue lisinopril 20mg
   - RTC 6 months

EXAMPLE 3 - ACUTE + CHRONIC:
1. Acute bronchitis
   - No pneumonia on exam
   - Supportive care, tessalon PRN
   - Return if fever/SOB

2. Asthma, well-controlled
   - No recent exacerbations
   - Continue Advair
   - RTC 6 months

ENCOUNTER DATA:
[Paste scribe output]
```

**Why this works:**
- Shows 3 different scenarios (single, multiple, acute+chronic)
- Demonstrates your concise style
- Models your formatting preferences
- Teaches implicit rules (line length, abbreviations, organization)

### Application 2: Billing Documentation

**Goal:** Generate appropriate E/M level with supporting MDM documentation.

**Few-shot prompt:**

```
Analyze encounter and provide billing documentation following these examples:

EXAMPLE 1 - LEVEL 99213:
E/M CODE: 99213

MEDICAL DECISION MAKING:
- Problems: Low complexity (2 stable chronic conditions)
- Data: Minimal (reviewed BP log)
- Risk: Low (stable meds, routine follow-up)

SUPPORTING DOCUMENTATION:
Patient with HTN and hyperlipidemia, both well-controlled on current 
medications. No changes needed. Low complexity MDM.

EXAMPLE 2 - LEVEL 99214:
E/M CODE: 99214

MEDICAL DECISION MAKING:
- Problems: Moderate complexity (3+ conditions, 1 exacerbation)
- Data: Moderate (reviewed labs, adjusted meds)
- Risk: Moderate (prescription drug management)

SUPPORTING DOCUMENTATION:
Diabetic patient with suboptimal control (A1C 8.3%), requiring medication
adjustment. Also managing HTN and hyperlipidemia. Reviewed recent labs.
Moderate complexity MDM due to multiple chronic conditions requiring 
medication titration.

EXAMPLE 3 - LEVEL 99215:
E/M CODE: 99215

MEDICAL DECISION MAKING:
- Problems: High complexity (4+ conditions, new diagnosis)
- Data: Extensive (reviewed multiple tests, imaging)
- Risk: Moderate-high (new diagnosis requiring workup)

SUPPORTING DOCUMENTATION:
Complex patient with multiple comorbidities (DM, HTN, CKD, CAD). New diagnosis
of CHF based on BNP elevation and echo findings. Initiated diuretics, adjusted
cardiac meds, ordered additional testing. High complexity MDM.

ENCOUNTER DATA:
[Paste encounter summary]
```

**Why this works:**
- Shows progression across complexity levels
- Models MDM element documentation
- Demonstrates billing justification language
- Teaches appropriate level assignment

### Application 3: Patient Instructions (AVS)

**Goal:** Generate patient-friendly after-visit summaries.

**Few-shot prompt:**

```
Create patient instructions following these examples (6th-8th grade reading level):

EXAMPLE 1 - ACUTE ILLNESS:
WHAT WE FOUND TODAY:
You have a sinus infection (sinusitis)

WHAT TO DO:
• Take amoxicillin 500mg 3 times daily for 10 days
• Use saline nasal rinses 2-3 times daily
• Rest and drink plenty of fluids
• Use acetaminophen or ibuprofen for pain/fever

CALL US IF:
• Fever over 102°F
• Severe headache or vision changes
• Symptoms not better in 3-4 days

FOLLOW-UP:
Call if not improving in 1 week

EXAMPLE 2 - CHRONIC DISEASE:
WHAT WE DISCUSSED TODAY:
Your diabetes sugar levels have been higher than we want (A1C is 8.2%)

WHAT TO DO:
• Increase your metformin to 2 pills twice daily (morning and evening)
• Check your blood sugar before breakfast each day
• Write down your readings to bring next visit
• Meet with diabetes educator (we made appointment)

CALL US IF:
• Blood sugar over 300
• Feeling very tired, confused, or sick to stomach

FOLLOW-UP:
Return in 6 weeks to recheck

EXAMPLE 3 - PREVENTIVE CARE:
WHAT WE DID TODAY:
Annual check-up - everything looks good!

WHAT TO DO:
• Continue current medications as prescribed
• Keep exercising 30 minutes most days
• Schedule colonoscopy (you're due)
• Get flu shot this fall

TESTS WE ORDERED:
• Blood work - we'll call you with results in 3-5 days

FOLLOW-UP:
Return in 1 year for next check-up

ENCOUNTER DATA:
[Paste visit summary]
```

**Why this works:**
- Demonstrates patient-friendly language
- Shows structure for different visit types
- Models appropriate reading level
- Teaches when to include different elements

---

## Building Your First Few-Shot Prompt

### Step 1: Choose the Task

Pick ONE specific documentation task:
- A&P formatting
- Billing documentation  
- Patient instructions
- Procedure notes
- Consultation letters

Start with whichever takes you the most time currently.

### Step 2: Collect Your Best Examples

**How to find them:**

1. Review notes from past 1-2 months
2. Identify 10-15 notes you're proud of
3. Look for variety:
   - Simple cases
   - Complex cases
   - Different clinical scenarios
4. Select your best 3-5

**What makes a good example:**

✅ Your actual notes (not fabricated)  
✅ Recent (<3 months old)  
✅ Representative of your practice  
✅ Varied complexity  
✅ Clean, professional formatting

❌ Someone else's notes  
❌ Old notes (>6 months)  
❌ Theoretical/idealized  
❌ All the same type  
❌ Messy or inconsistent

### Step 3: Structure Your Prompt

**Basic template:**

```
[TASK STATEMENT]
Short, clear instruction

[EXAMPLES]
EXAMPLE 1:
[Your first example]

EXAMPLE 2:
[Your second example]

EXAMPLE 3:
[Your third example]

[Optional: EXAMPLE 4]
[Optional: EXAMPLE 5]

[INPUT SECTION]
[Where encounter data goes]
```

### Step 4: Test with Real Cases

**Don't just assume it works. Test it.**

1. Use prompt with 5 recent encounters
2. Review each output critically
3. Note what works and what doesn't
4. Refine examples or add rules as needed

**Common first-test findings:**
- Output too verbose → Use more concise examples
- Missing key details → Add example showing those details
- Wrong format → Check your examples format consistency
- Inconsistent quality → May need 1-2 more examples

### Step 5: Iterate

**Refinement is essential.**

After initial testing:
- Replace weaker examples with better ones
- Add edge cases if needed
- Simplify task statement
- Remove unnecessary instructions

**Expect 2-3 iterations before it feels "right."**

---

## Advanced Few-Shot Techniques

### Technique 1: Graduated Complexity

Show examples in order of increasing complexity:

```
EXAMPLE 1 - SIMPLE:
[Straightforward case]

EXAMPLE 2 - MODERATE:
[More complex case]

EXAMPLE 3 - COMPLEX:
[Most challenging scenario]
```

This teaches AI to scale appropriately based on input complexity.

### Technique 2: Negative Examples

Sometimes showing what NOT to do helps:

```
GOOD EXAMPLE:
1. HTN, controlled
   - BP 128/76
   - Continue lisinopril 10mg
   - RTC 6 months

DON'T DO THIS:
The patient's hypertension is currently well-controlled on their
existing antihypertensive regimen consisting of lisinopril 10mg daily,
with today's blood pressure reading of 128/76 indicating adequate
disease management. Plan is to continue the current medication without
changes and schedule follow-up appointment in approximately six months.
```

Use sparingly—positive examples usually work better.

### Technique 3: Annotated Examples

Add brief explanations within examples:

```
EXAMPLE:
1. DM2, suboptimal control
   - A1C 8.3% (goal <7%)          ← Include goal for context
   - Increase metformin 1000mg BID ← Specific dose change
   - RTC 8 weeks                   ← Specific timeframe

Not: "Adjust diabetes meds, follow up soon"
```

### Technique 4: Specialty-Specific Adaptations

**Pediatrics few-shot example:**

Include growth/development if relevant:
```
EXAMPLE:
18-month well visit
- Growth: 50th %ile wt/ht ← Percentiles for peds
- Development: Walking, 10 words ← Milestones
- Vaccines: DTaP, IPV given today
- Anticipatory guidance: Toddler safety
- RTC: 24 months
```

**Surgery few-shot example:**

Procedure-specific format:
```
EXAMPLE:
PROCEDURE: Lap appendectomy
INDICATION: Acute appendicitis
FINDINGS: Inflamed appendix, no perforation
TECHNIQUE: [Standard 3-port approach]
EBL: <50mL
COMPLICATIONS: None
DISPOSITION: PACU → floor
```

### Technique 5: Chain-of-Thought Examples

For complex reasoning tasks, show the thinking:

```
EXAMPLE - Billing Level 99215:

ENCOUNTER: 67yo F, DM+HTN+CKD, new CP, multiple tests

REASONING:
- Problems: 4 chronic (DM/HTN/CKD) + 1 new/serious (CP)
  → HIGH complexity
- Data: EKG, troponin, BMP, medication review
  → EXTENSIVE
- Risk: ACS workup, multiple chronic conditions
  → MODERATE-HIGH

MDM LEVEL: High complexity → 99215

JUSTIFICATION:
Multiple chronic conditions plus new chest pain requiring 
extensive workup including cardiac enzymes and EKG. High 
complexity medical decision making.
```

---

## Common Pitfalls

### Pitfall 1: Too Few Examples (1-2)

**Problem:** AI can't reliably identify pattern.

**Solution:** Always use at least 3 examples.

### Pitfall 2: Examples Too Similar

**Problem:** AI doesn't learn to adapt to variety.

**Solution:** Include simple, moderate, and complex cases.

### Pitfall 3: Using Someone Else's Examples

**Problem:** AI learns THEIR style, not yours.

**Solution:** Use only YOUR actual notes.

### Pitfall 4: Outdated Examples

**Problem:** Your style evolves; old examples don't reflect current preferences.

**Solution:** Refresh examples every 3-6 months.

### Pitfall 5: Too Many Examples (>7)

**Problem:** Diminishing returns, slower processing, potential confusion.

**Solution:** Stick to 3-5 high-quality examples.

### Pitfall 6: Inconsistent Format

**Problem:** Examples formatted differently confuse AI.

**Solution:** Ensure all examples follow same structure/format.

---

## Measuring Success

### Quantitative Metrics

**Track these:**
- Time per note (before vs after)
- Number of edits needed
- Percentage of notes accepted with minimal changes

**Goals:**
- 60-80% time reduction
- <3 minor edits per note
- 80%+ acceptance rate

### Qualitative Assessment

**Ask yourself:**
- Does output match my style?
- Would I be comfortable signing without edits?
- Are the right details emphasized?
- Is clinical reasoning sound?

**Peer review:**
- Show colleagues AI-generated vs your manual notes
- Can they tell the difference?
- Do they prefer the AI version?

---

## Next Steps

### This Week
- [ ] Choose one documentation task to improve
- [ ] Collect 5-10 of your best notes in that category
- [ ] Select the best 3-5 as examples
- [ ] Build your first few-shot prompt

### This Month
- [ ] Test prompt with 10-15 real encounters
- [ ] Refine based on results
- [ ] Build 2-3 additional prompts for other tasks
- [ ] Measure time savings

### Long Term
- [ ] Create complete prompt library (6-10 prompts)
- [ ] Update examples quarterly
- [ ] Share effective prompts with colleagues
- [ ] Contribute to open-source community

---

## Resources

### Learn More

[**Interactive Course**](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)  
Practice few-shot learning with real clinical scenarios, 30 minutes

[**Prompt Library**](https://physicianpromptengineering.com/prompt-library)  
See few-shot prompts in action, copy and customize

[**Prompt Remix Tool**](https://physicianpromptengineering.com/prompt-remix)  
Add YOUR examples to any library prompt

[**Best Practices Guide**](https://physicianpromptengineering.com/best-practices)  
Deep dive into few-shot and other techniques

---

## Conclusion

Few-shot learning is the single most powerful technique in clinical prompt engineering.

**Why?** Because it works with how AI actually learns—through pattern recognition—rather than fighting against it with lengthy instructions.

**The formula:**
1. Find 3-5 of your best notes
2. Add them to a clear task statement
3. Test with real cases
4. Refine as needed

**That's it.**

No data science degree needed. No complex AI knowledge required.

Just your clinical expertise translated into examples the AI can learn from.

**The physicians saving 10-15 hours per week aren't using magic.**

**They're using few-shot learning.**

---

*Ready to master few-shot prompting? Take our [free interactive course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/) with hands-on examples and instant feedback.*

---

## Related Articles

- [The 3 Principles of Effective Medical AI Prompts](../three-principles-effective-medical-ai-prompts/)
- [What is Clinical Prompt Engineering?](../what-is-clinical-prompt-engineering-complete-guide/)
- [How to Reduce Documentation Time by 90%](../how-to-reduce-documentation-time-90-percent-ai-prompts/)
- [Advanced Prompt Engineering Techniques](../advanced-prompt-engineering-techniques-clinical-documentation/)
