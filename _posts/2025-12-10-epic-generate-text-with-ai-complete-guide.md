---
layout: post
title: "Epic Users: Complete Guide to Generate Text with AI for Clinical Documentation"
date: 2025-12-10 09:00:00 -0500
categories: [AI, Epic, Documentation, Tutorial]
tags: [Epic AI, Generate Text with AI, Epic EMR, AI documentation, Epic tutorial]
excerpt: "Step-by-step tutorial for Epic users to master the built-in Generate Text with AI feature. Includes setup, workflow optimization, and custom prompt integration."
---

# Epic Users: Complete Guide to Generate Text with AI for Clinical Documentation

Your EMR already has powerful AI built in. Here's how to use it effectively.

---

## The Hidden Feature Most Epic Users Don't Know About

If you're an Epic user, you have AI-powered documentation tools **already available in your system**.

No third-party apps.  
No additional costs.  
No IT approval needed (in most cases—check your organization's policies).

It's called **"Generate Text with AI"** (or sometimes "AI Assistant" depending on your Epic version).

**And most physicians have no idea it exists.**

## What is Epic's Generate Text with AI?

**Generate Text with AI** is Epic's native integration of large language models directly into your EMR workflow.

**Key features:**
- Available in most note fields (H&P, progress notes, A&P, etc.)
- HIPAA-compliant (runs within Epic's secure environment)
- Customizable with your own prompts
- Works with speech recognition or typed input
- No character length limits (unlike some AI tools)

**Availability:**
- Epic version **May 2023** and later
- Most organizations have it enabled by default
- Check with IT if you don't see it

---

## Finding the Feature

### Method 1: The AI Icon

1. Open any clinical note
2. Click in a text field (e.g., Assessment & Plan section)
3. Look for the **small AI sparkle icon** (usually top-right of text field)
4. Click the icon

### Method 2: Right-Click Menu

1. Open any clinical note
2. Right-click in a text field
3. Select **"Generate Text with AI"** from the menu

### Method 3: SmartPhrase Shortcut

Some Epic implementations use:
- `.ai` - Triggers AI assistant
- `.gpt` - Alternative trigger (organization-specific)

Type the smartphrase and hit Enter.

**Can't find it?**  
Contact your IT or Epic administrator. They can:
- Verify it's enabled for your user role
- Show you the specific access method for your organization
- Enable it if currently disabled

---

## Basic Usage: Quick Start

### Example 1: Summarizing Encounter Notes

**Scenario:** You have verbose notes from a patient encounter and want a concise A&P.

**Steps:**

1. Click in Assessment & Plan field
2. Click the AI icon (or use `.ai` smartphrase)
3. A text box appears - enter this:

```
Summarize the following encounter into a concise, problem-oriented Assessment & Plan:

[Paste your encounter notes here]
```

4. Click "Generate"
5. Review the output
6. Edit as needed and accept

**Time: 30-60 seconds**

### Example 2: Creating Patient Instructions

**Scenario:** Need to generate after-visit instructions.

**Steps:**

1. In the AVS or patient instructions field
2. Trigger Generate Text with AI
3. Enter:

```
Create patient-friendly instructions for this visit. Use 6th-8th grade reading level.

Visit summary: [Brief description of visit]
```

4. Generate and review
5. Accept

**Time: 30 seconds**

---

## Advanced Usage: Custom Prompts

This is where the real power comes in.

### Creating Reusable Prompts

**The problem with basic usage:** Each time you use AI, you're starting from scratch.

**The solution:** Create custom prompts as SmartPhrases that you can reuse.

### Step-by-Step: Building a Custom A&P SmartPhrase

1. **Open SmartPhrase Manager**
   - Epic button → Tools → SmartPhrase Manager
   - Or search "SmartPhrase" in Epic toolbar

2. **Create New SmartPhrase**
   - Click "New"
   - Name: `.myanp` (or your preferred shortcut)
   - Description: "AI-powered A&P formatter"

3. **Build the Prompt**

Paste this structure into the SmartPhrase content:

```
Reformat the following encounter into a problem-oriented Assessment & Plan matching my style:

FORMATTING REQUIREMENTS:
- Bullet points, not paragraphs
- Standard medical abbreviations
- One problem per line when possible
- Plan: action-oriented, specific

EXAMPLES OF MY STYLE:

EXAMPLE 1:
1. HTN, controlled
   - BP 128/76 today on current regimen
   - Continue lisinopril 10mg daily
   - RTC 6 months

2. Hyperlipidemia
   - LDL 95 on atorvastatin 20mg
   - Continue current dose
   - Repeat lipids in 1 year

EXAMPLE 2:
1. Acute pharyngitis
   - Exam: Tonsillar erythema, no exudate. Neg rapid strep.
   - Likely viral etiology
   - Supportive care, rest, fluids
   - RTC PRN worsening

EXAMPLE 3:
1. T2DM, suboptimal control
   - A1C 8.2% (goal <7%)
   - Increase metformin to 1000mg BID
   - Continue home glucose monitoring
   - Diabetes education referral
   - RTC 6 weeks

ENCOUNTER DATA:
@
```

**Note the `@` symbol at the end** - this is where you'll paste encounter data each time.

4. **Save the SmartPhrase**

**Now you can use it:**

1. Type `.myanp` in any note field
2. The prompt appears with `@` cursor
3. Paste your encounter notes after `@`
4. Highlight all text (Cmd+A or Ctrl+A)
5. Right-click → Generate Text with AI
6. Review and accept

**Time per use: 15-20 seconds**  
**Setup time: 5-10 minutes once**

---

## Epic-Specific Workflows

### Workflow 1: Inpatient Progress Note

**Challenge:** 18 patients, need standardized progress notes, fast.

**Solution: Multi-stage prompt approach**

**SmartPhrase 1:** `.myprogress` - Basic progress note structure

```
Create an inpatient progress note from this data:

Overnight events: @EVENTS
Vitals: @VITALS
Labs: @LABS
Physical exam: @EXAM

SUBJECTIVE:
- Patient status, complaints

OBJECTIVE:
- Vitals, labs, exam findings

ASSESSMENT/PLAN:
- By problem list
- Specific plans for each
```

**SmartPhrase 2:** `.mybilling` - Add billing documentation

```
Analyze this progress note and provide:
1. Appropriate CPT code (99231-99233)
2. Medical decision making level
3. Supporting documentation excerpts

Progress note:
@
```

**Total time per patient: 2-3 minutes**

### Workflow 2: New Patient H&P

**Challenge:** Thorough H&P needed, lots of information to organize.

**Solution: Specialized prompts for each section**

**SmartPhrase Set:**
- `.myhpi` - HPI formatting
- `.myros` - Review of systems organization
- `.myphysex` - Physical exam standardization
- `.myassess` - Assessment & plan

**Use sequentially:**
1. Gather history → use `.myhpi`
2. Complete ROS → use `.myros`
3. Physical exam → use `.myphysex`
4. Finalize A&P → use `.myassess`

**Total time: 15-20 minutes for comprehensive new patient visit (vs 45-60 min traditional)**

### Workflow 3: Procedure Notes

**Challenge:** Standardized procedure documentation with case-specific details.

**Solution: Hybrid template + AI**

**SmartPhrase:** `.myprocedure`

```
Generate a [PROCEDURE NAME] note following this structure:

INDICATION:
[Extract indication from encounter notes below]

CONSENT:
Informed consent obtained discussing risks, benefits, alternatives

PROCEDURE:
[Standard procedure description]
- Site: @SITE
- Technique: @TECHNIQUE
- Findings: [Extract from notes below]

COMPLICATIONS:
None

DISPOSITION:
[Extract plan from notes below]

ENCOUNTER DATA:
@
```

**Fill in @SITE, @TECHNIQUE manually, let AI handle the rest.**

**Time: 2-3 minutes per procedure**

---

## Epic Integration Pro Tips

### Tip 1: Link with Dragon/Voice Recognition

**If you use Dragon or Epic's voice rec:**

1. Dictate encounter summary
2. Immediately trigger AI prompt
3. AI transforms dictation into structured note

**Workflow:**
- Dictate: "Patient with chest pain, 3 hour duration, pleuritic, improved with ibuprofen. Exam unremarkable. EKG normal. Diagnosis costochondritis."
- Paste into `.myap` SmartPhrase
- Generate
- Review and sign

**Total time from dictation to signed note: 90 seconds**

### Tip 2: Create Department-Specific Prompts

**For group practices:**

Create shared SmartPhrases for the department:
- `.deptap` - Department standard A&P format
- `.deptbill` - Department billing prompt
- `.deptavs` - Department AVS template

**Benefits:**
- Consistency across providers
- New physicians onboard faster
- Quality assurance easier

### Tip 3: Use with Epic Notification / InBasket

**Responding to inbox messages:**

SmartPhrase: `.myinbox`:

```
Draft a professional response to this patient message:

Patient message:
@PATIENTMESSAGE

Response should:
- Address all patient concerns
- Be professional but friendly
- Include any necessary medical advice
- Suggest follow-up if needed
```

**Time saved: 3-5 minutes per message × 20-30 messages/day = 60-150 minutes daily**

---

## Troubleshooting Common Issues

### Issue 1: "Generate Text with AI" Button Missing

**Possible causes:**
- Feature not enabled for your user role
- Epic version too old (pre-May 2023)
- Organization disabled it

**Solutions:**
1. Check Epic version (Help → About)
2. Contact IT/Biomedical Informatics
3. Ask to be added to approved user group

### Issue 2: Output is Too Generic

**Cause:** Using default prompts without examples.

**Solution:** Add 3-5 specific examples of YOUR style to prompts.

**Before:**
```
Summarize this encounter
```

**After:**
```
Summarize following these examples:

Example 1: [Your actual note]
Example 2: [Your actual note]
Example 3: [Your actual note]

Encounter: [data]
```

### Issue 3: AI Hallucinates Information

**Cause:** Prompt is too vague or asking AIto infer things not present.

**Solution:**
- Be explicit: "Use ONLY information from the encounter below"
- Add: "If information is not present, state 'Not documented'"
- Review all outputs carefully (you should always do this anyway)

### Issue 4: Too Slow to Generate

**Possible causes:**
- Epic server load
- Complex/long prompt
- Network issues

**Solutions:**
- Simplify prompt (remove unnecessary text)
- Break into smaller prompts (multi-stage approach)
- Use during off-peak hours if possible
- Report to IT if consistently slow

### Issue 5: Organization Blocked Access

**If your organization disabled the feature:**

**Build a business case:**
1. Document time currently spent on documentation
2. Estimate time savings with AI (cite studies, peer experiences)
3. Address security concerns (Epic's AI is HIPAA-compliant)
4. Propose pilot program (small group, measure results)
5. Present to CMIO / IT leadership

Include this data:
- "60-90% reduction in documentation time reported by physicians using AI prompts"
- "Physician burnout directly linked to documentation burden"
- "Epic's built-in AI is already HIPAA-compliant—no third-party risk"

---

## Measuring Your Impact

### What to Track

**Baseline (Week 1):**
- Average time per note
- After-hours charting time
- Notes requiring significant rework

**Implementation (Weeks 2-4):**
- Time per note with AI
- Number of prompts used
- Edits needed per note

**Steady State (Month 2+):**
- Total time savings per week
- Subjective satisfaction
- Quality metrics (peer review, billing queries)

**Expected results:**
- 60-80% time reduction on documentation
- 10-15 hours per week saved
- Minimal edits needed after 4-week learning curve

---

## Epic Version-Specific Features

### Epic May 2023 Update

**Added:**
- Generate Text with AI base feature
- Basic summarization
- SmartPhrase integration

### Epic August 2023 Update

**Added:**
- Enhanced natural language understanding
- Better medical terminology handling
- Faster processing

### Epic November 2023 Update

**Added:**
- Multi-language support
- Improved context awareness
- Integration with Epic's clinical decision support

### Epic February 2024+ Updates

**Added:**
- Advanced prompting features
- Template suggestions based on note type
- Auto-detection of note section for context-appropriate suggestions

**Check your version:** Help → About Epic Hyperspace

---

## Security and Compliance

### HIPAA Compliance

**Epic's Generate Text with AI:**
✅ Runs within Epic's secure environment  
✅ Data doesn't leave your organization  
✅ Covered by your organization's BAA with Epic  
✅ audit trails maintained  
✅ Meets HIPAA requirements

**Public AI tools (ChatGPT, Claude, etc.):**
❌ Data leaves your organization  
❌ No BAA coverage  
❌ Not HIPAA-compliant  
❌ **NEVER use with patient data**

### Best Practices

1. **Always review AI output** - You retain full responsibility
2. **Document AI use** if required by your organization
3. **Don't blindly accept** - Check for accuracy, completeness
4. **Follow institutional policies** - Some require disclosure in notes
5. **Report issues** - If AI makes consistent errors, report to IT/Epic

---

## Advanced Prompt Techniques for Epic

### Technique 1: Conditional Logic

Add rules that adapt based on context:

```
Generate A&P following these rules:

IF patient age < 2 years:
  Include developmental milestones

IF ICD-10 includes Z00 (well visit):
  Include health maintenance section
  Include anticipatory guidance

IF chronic disease present:
  Include disease-specific monitoring plan

Encounter: @
```

### Technique 2: Specialty Templates

Create prompts that mirror your specialty's workflow:

**Pediatrics ejemplo:**
```
Format as pediatric sick visit note:

INTERVAL HISTORY:
- Chief complaint and duration
- Associated symptoms
- Eating/drinking/voiding
- Fever curve
- Treatments tried

EXAM:
- General appearance and activity level
- Pertinent findings by system

ASSESSMENT & PLAN:
- Diagnosis
- Treatment plan
- Return precautions
- Follow-up

Data: @
```

### Technique 3: Integration with Epic SmartSets

Combine SmartSets (Epic's order sets) with AI prompts:

1. Open SmartSet for diagnosis
2. Add orders
3. Use AI prompt to generate matching documentation
4. Result: Orders + perfectly aligned note

Example for UTI SmartSet:
- Orders: UA, UCx, antibiotics
- AI prompt generates matching A&P
- Everything aligned for billing and clinical accuracy

---

## Your Implementation Roadmap

### Week 1: Discovery

- [ ] Verify you have access to Generate Text with AI
- [ ] Test basic summarization with 2-3 notes
- [ ] Identify highest-impact use case

### Week 2: First Custom Prompt

- [ ] Create 1 SmartPhrase for your main need (e.g., `.myap`)
- [ ] Include 3-5 examples of your style
- [ ] Test with 10 encounters
- [ ] Refine based on results

### Week 3-4: Daily Use

- [ ] Use your prompt for ALL applicable encounters
- [ ] Track time savings
- [ ] Make small adjustments
- [ ] Add 1-2 more specialized prompts

### Month 2+: Advanced Optimization

- [ ] Create full library (5-8 prompts for different scenarios)
- [ ] Share with colleagues
- [ ] Integrate with other Epic features (Dragon, SmartSets, etc.)
- [ ] Measure and document impact

---

## Resources

### Official Epic Resources

- Epic UserWeb: Search "Generate Text with AI"
- Epic training modules (if your organization provides)
- Epic's Galaxy conference presentations on AI

### Our Free Resources

[**Interactive Course**](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)  
Learn prompt engineering fundamentals, 30 minutes

[**Prompt Library**](https://physicianpromptengineering.com/prompt-library)  
Epic-compatible prompts ready to use

[**Prompt Remix Tool**](https://physicianpromptengineering.com/prompt-remix)  
Customize any prompt for your style

[**GitHub Discussions**](https://github.com/pedscoffee/PhysicianPromptEngineering/discussions)  
Epic user community sharing tips

---

## Conclusion

Epic's Generate Text with AI is powerful—but only if you use it right.

Default prompts = mediocre results = wasted time  
Custom prompts = excellent results = massive time savings

**The difference maker: 2-3 hours of setup this week to save 10-15 hours every week.**

You already have the tool. You're already paying for Epic.

**Now use it to its full potential.**

---

*Start with our [free Epic-compatible prompts](https://physicianpromptengineering.com/prompt-library) or learn prompt engineering fundamentals in our [30-minute interactive course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/).*

---

## Related Articles

- [What is Clinical Prompt Engineering?](../what-is-clinical-prompt-engineering-complete-guide/)
- [How to Reduce Documentation Time by 90%](../how-to-reduce-documentation-time-90-percent-ai-prompts/)
- [The 3 Principles of Effective Medical AI Prompts](../three-principles-medical-ai-prompts/)
- [Avoiding Common AI Documentation Pitfalls](../avoiding-ai-documentation-pitfalls/)
