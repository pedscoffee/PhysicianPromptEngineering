---
layout: post
title: "Specialty-Specific AI Prompts: Customization Guide for Family Medicine"
date: 2025-12-15 09:00:00
- 0500
categories: [AI, Family Medicine, Specialty Guide, Documentation]
tags: [family medicine AI, specialty prompts, primary care documentation, FM documentation, AI customization]
excerpt: "Complete guide to customizing AI documentation prompts for family medicine practice. Includes well-visit templates, chronic disease management, acute care, and FM-specific formatting."
---

# Specialty-Specific AI Prompts: Customization Guide for Family Medicine

Generic prompts work. Specialty  please-specific prompts work better.

Here's how to optimize AI documentation for family medicine practice.

---

## Why Family Medicine Needs Custom Prompts

**Family medicine is unique:**
- Widest breadth of any specialty (newborn to geriatric, preventive to acute)
- Mix of well visits, chronic disease, acute illness, procedures
- Continuity of care emphasis
- Preventive care requirements
- Wide variety of documentation needs

**Generic "medical documentation" prompts miss:**
- Well-child/adult visit formatting
- Chronic disease panel management
- Health maintenance tracking
- Family-centered care documentation
- Age-specific anticipatory guidance

**Solution: prompts built for FM workflows.**

---

## FM Documentation Archetypes

### 1. Well Visits (Pediatric)

**Challenge:** Standardized screening + individualized care

**Prompt structure:**

```
Format pediatric well visit following these examples:

EXAMPLE - 18 MONTH:
INTERVAL HISTORY:
- Development: Walking, 10-15 words, follows 1-step commands
- Nutrition: Whole milk 16oz/day, table foods, self-feeding
- Safety: Car seat RF, gates on stairs, outlet covers

PHYSICAL EXAM:
- Growth: 50th %ile wt/ht/HC, tracking curve
- General: Active, interactive, appropriate for age
- HEENT/CV/Resp/Abd/Skin/Neuro: WNL

ASSESSMENT:
18-month well visit - healthy, meeting milestones

PLAN:
- Vaccines: DTaP, IPV, Hib, PCV13 given today. VIS provided.
- Anticipatory guidance: Toddler safety, nutrition, screen time limits
- RTC: 24 months

[3-4 more examples at different ages]

VISIT DATA:
@
```

**Key FM elements:**
- Development milestones
- Growth percentiles
- Age-specific anticipatory guidance
- Immunization documentation
- Family engagement

### 2. Well Visits (Adult)

**Prompt:**

```
Format adult preventive visit:

EXAMPLE - 45YO FEMALE:
HEALTH MAINTENANCE REVIEW:
- Mammogram: Due (age 45, no FH breast CA)
- Pap: Current (2023, normal)
- Colonoscopy: Not due until age 50
- Vaccines: Tdap current, flu today

CHRONIC CONDITIONS:
- HTN: Controlled on lisinopril 10mg, BP 128/76
- Hyperlipidemia: LDL 95 on atorvastatin 20mg

LIFESTYLE:
- Exercise: 3x/week
- Diet: Working on reducing processed foods
- Tobacco: Never
- Alcohol: Occasional

ASSESSMENT:
Annual exam - overall healthy

PLAN:
- Schedule mammogram (order placed)
- Continue current medications
- Reviewed diet/exercise
- Flu vaccine given today
- Labs: Lipids, HgbA1c, TSH (family hx thyroid)
- RTC 1 year

[2-3 more examples]

VISIT DATA:
@
```

**Key elements:**
- Health maintenance tracking
- Chronic disease management
- Preventive care "wins
- Lifestyle counseling
- Anticipatory scheduling

### 3. Chronic Disease Follow-Up

**Prompt:**

```
Format chronic disease follow-up:

EXAMPLE - DIABETES:
INTERVAL HISTORY:
- Home glucose: Fasting 140s-160s (goal <130)
- Medications: Adherent to metformin 1000mg BID
- Diet: Trying to reduce carbs, difficult
- Exercise: Walking 20 min 3x/week

PHYSICAL:
- BP 132/78 (goal <130/80)
- Foot exam: Intact sensation, no ulcers
- BMI 32 (was 33 last visit)

LABS REVIEWED:
- A1C 8.2% (was 8.8%, goal <7%)
- eGFR 72 (stable)
- Urine microalbumin: Negative

ASSESSMENT:
1. T2DM, improving but suboptimal control
2. HTN, near goal
3. Obesity

PLAN:
1. DM: Add glipizide 5mg daily (in addition to metformin)
   - Reviewed hypoglycemia symptoms
   - Continue home monitoring
   - Diabetes education referral (signed up for class)
   - RTC 8 weeks for med adjustment

2. HTN: Increase lisinopril 10mg → 20mg daily
   - Home BP monitoring
   - RTC 8 weeks

3. Obesity: Nutrition referral placed
   - discussed realistic goals (5-10% weight loss)
   - RTC 8 weeks

[2-3 more examples]

VISIT DATA:
@
```

**FM-specific chronic disease elements:**
- Tracking trends (not just snapshots)
- Patient engagement in self-management
- Realistic goal-setting
- Resource referrals
- Close follow-up intervals

### 4. Acute Visits

**Prompt:**

```
Format acute visit note:

EXAMPLE - URI:
CHIEF COMPLAINT:
Sore throat x 3 days

HPI:
Progressive sore throat with difficulty swallowing. +fever to 101°F. 
+headache. -cough, congestion, or ear pain. No known sick contacts. 
Tried acetaminophen with temp relief.

EXAM:
- Vitals: T 100.8, other VS WNL
- HEENT: Pharyngeal erythema, no exudate. TMs clear. No sinus 
  tenderness.
- Neck: No LAD
- Lungs: Clear

RAPID STREP: Negative

ASSESSMENT:
Viral pharyngitis

PLAN:
- Supportive care: Rest, fluids, throat lozenges
- Acetaminophen or ibuprofen PRN fever/pain
- Return precautions: Worsening symptoms, difficulty breathing/
  swallowing, fever >3 days
- No antibiotics indicated
- RTC PRN or if not improving in 5-7 days

[3 more examples: sinusitis, bronchitis, UTI]

VISIT DATA:
@
```

**FM acute care elements:**
- Clear RTC precautions
- Antibiotic stewardship
- Patient education
- Symptom-focused management

---

## FM-Specific Billing Prompts

**Challenge:** Documenting complexity in "simple" visits

**Billing prompt for FM:**

```
Analyze FM encounter and provide billing documentation:

EXAMPLE - 99214 WELL+CHRONIC:
E/M CODE: 99214

VISIT TYPE: Annual exam + chronic disease management

CHRONIC CONDITIONS MANAGED:
-Type 2 diabetes (suboptimal control, medication adjustment)
- Hypertension (medication titration)
- Hyperlipidemia (stable, continued therapy)

MDM COMPLEXITY: Moderate
- Problems: 3 chronic conditions, 1 exacerbation requiring med change
- Data: Labs reviewed (A1C, lipids, BMP), medication list updated
- Risk: Moderate (prescription drug management with monitoring)

PREVENTIVE SERVICES:
- Mammogram ordered
- Flu vaccine administered
- Lipid panel, HgbA1c ordered

TIME DOCUMENTATION (if applicable):
Total face-to-face time: 35 minutes
- >50% spent counseling on diabetes management, diet, exercise

JUSTIFICATION:
Moderate complexity visit addressing multiple chronic conditions 
with medication adjustments based on laboratory data review. 
Prescription drug management with associated monitoring requirements.

ICD-10:
- Z00.00 Annual exam
- E11.9 Type 2 diabetes without complications
- I10 Essential hypertension
- E78.5 Hyperlipidemia

[2 more examples: 99213, 99215]

ENCOUNTER:
@
```

**FM billing nuances:**
- Well visit + problem visits (split billing when appropriate)
- Time-based coding for counseling-heavy visits
- Documenting multiple chronic conditions
- Preventive service capture

---

## Advanced FM Techniques

### Managing Panel of Patients

**Panel Management Prompt:**

```
Generate panel outreach list from this data:

CRITERIA:
- HgbA1c >9% in past 3 months
- No follow-up scheduled
- Last visit >6 months ago

OUTPUT FORMAT:
Patient Name | MRN | Last A1C | Last Visit | Action Needed

[Example output showing formatted list]

PANEL DATA:
@
```

Use for:
- DM panel management
- HTN control initiatives
- Overdue preventive care
- Care gaps closure

### Patient Education Materials

**Education prompt for FM:**

```
Create patient education handout (6th-grade reading level):

TOPIC: Starting Metformin for Diabetes

MUST INCLUDE:
- What the medicine does
- How to take it
- Common side effects (what's normal)
- Warning signs (when to call)
- Why it's important
- Questions to ask

EXAMPLE OUTPUT:
[Shows clear, simple patient handout]

TOPIC:
@
```

### Procedure Notes in FM

**Common FM procedures:**

```
Generate procedure note:

EXAMPLE - JOINT INJECTION:
PROCEDURE: Right knee intra-articular injection

INDICATION: Osteoarthritis, failed conservative management

CONSENT: Informed consent obtained, risks/benefits discussed

TECHNIQUE:
- Sterile prep with chlorhexidine
- Local anesthesia: 1% lidocaine 2mL
- Lateral approach, 22g needle
- Aspiration: No effusion
- Injection: 40mg triamcinolone + 2mL 1% lidocaine

TOLERANCE: Well-tolerated, no immediate complications

POST-PROCEDURE:
- Rest, ice x 24-48hrs
- Avoid strenuous activity x 2 days
- Expect temporary increased pain possible
- Call if severe pain, swelling, redness, fever

FOLLOW-UP:
RTC 4-6 weeks to assess response

[Examples: Skin biopsy, I&D, IUD insertion]

PROCEDURE DATA:
@
```

---

## Implementing FM Prompts

### Week 1: Build Core Prompts

**Priority order for FM:**
1. Chronic disease follow-up (highest volume)
2. Acute sick visits
3. Adult well visits
4. Pediatric well visits (if see peds)
5. Billing documentation

**Time investment:** 3-4 hours total

### Week 2-3: Test and Refine

Use daily, refine based on real encounters.

**Track:**
- Which visits types work best
- Where additional examples needed
- Formatting adjustments

### Week 4+: Expand Library

Add specialty prompts:
- Mental health visits (depression screening, anxiety management)
- Women's health (contraception visits,pregnancy management)
- Geriatrics (polypharmacy management, falls prevention)
- Sports medicine (injury evaluation)

---

## FM-Specific Tips

### Tip 1: Continuity Documentation

Include prior visit reference:

```
Last visit 6 months ago: A1C was 8.8%, started metformin
Today: A1C 8.2% - improved but not at goal
```

AI learns to show progress over time.

### Tip 2: Family Context

FM often involves family dynamics:

```
Discussed medication compliance barriers. Patient caring 
for elderly mother, difficult to prioritize own health.
Discussed strategies for self-care.
```

### Tip 3: Resource Referrals

FM coordinates care frequently:

```
REFERRALS PLACED:
- Diabetes education (scheduled 2/15)
- Nutrition (patient to call)
- Podiatry (for diabetic foot care)
```

Include in examples to capture coordination effort.

---

## Measuring Success in FM

### Time Metrics

**Before prompts:**
- Well visit note: 12-15 min
- Chronic disease visit: 15-20 min
- Acute visit: 8-10 min

**After prompts:**
- Well visit: 3-4 min
- Chronic disease: 4-5 min
- Acute visit: 2-3 min

**Goal: 60-75% time reduction**

### Quality Metrics

- Patient education materials rated by comprehension
- Billing compliance (fewer downgrades/denials)
- Preventive care capture rates
- Peer review feedback

---

## Resources

**More specialty guides coming:**
- Pediatrics
- Internal Medicine
- Emergency Medicine
- Psychiatry

[Interactive Course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)  
[Prompt Library](https://physicianpromptengineering.com/prompt-library)  
[GitHub Discussions](https://github.com/pedscoffee/PhysicianPromptEngineering/discussions)

---

## Conclusion

Family medicine's breadth requires flexible, robust prompts.

**The formula:**
1. Build prompts for your common encounter types
2. Include FM-specific elements (continuity, prevention, coordination)
3. Test with real patients
4. Refine monthly

**Family medicine physicians using specialty-specific prompts see:**
- 60-80% documentation time reduction
- Better capture of preventive care
- Improved billing accuracy
- More time for patient care

**Your FM practice deserves FM-specific tools.**

---

*Get FM-specific prompts: [Free library](https://physicianpromptengineering.com/prompt-library) | [Interactive course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)*

---

## Related Articles

- [What is Clinical Prompt Engineering?](../what-is-clinical-prompt-engineering-complete-guide/)
- [How to Reduce Documentation Time by 90%](../how-to-reduce-documentation-time-90-percent-ai-prompts/)
- [The 3 Principles of Effective Medical AI Prompts](../three-principles-effective-medical-ai-prompts/)
