---
layout: post
title: "The 3 Principles of Effective Medical AI Prompts"
date: 2025-12-11 09:00:00 -0500
categories: [AI, Best Practices, Documentation, Education]
tags: [prompt engineering, best practices, AI prompts, medical documentation, few-shot learning]
excerpt:"Master the three core principles that separate effective medical AI prompts from mediocre ones. Learn why examples beat instructions, brevity improves quality, and modular design ensures reliability."
---

# The 3 Principles of Effective Medical AI Prompts

Three simple rules. Every effective prompt follows them.

---

## Why Most AI Prompts Fail

You're probably using AI wrong for clinical documentation.

Not because you're doing something wrong—you're doing exactly what seems logical.

**The problem:** What seems logical to humans often isn't how large language models work best.

**Common approaches that fail:**
- "Please summarize this encounter concisely"
- "Create an A&P in my style"
- "Make this note better"

These seem reasonable. They don't work.

**Why they fail:**
- Too vague ("concisely" means nothing to AI)
- No examples of "your style"
- No concrete criteria for "better"

Result? Generic, verbose output requiring extensive editing.

## The Three Principles

After testing hundreds of prompts with physicians across 15+ specialties, three principles consistently separate effective prompts from mediocre ones:

1. **Examples Over Instructions**
2. **Brevity Equals Quality**
3. **One Prompt, One Purpose**

Master these three, and your prompts will outperform 95% of physicians using AI.

---

## Principle 1: Examples Over Instructions

### The Core Insight

**Human assumption:** "If I describe what I want clearly enough, AI will produce it."

**Reality:** AI learns patterns from examples far better than from descriptions.

This isn't a limitation—it's how large language models are fundamentally designed.

### The Science: Few-Shot Learning

**Few-shot learning** is the technique of teaching AI through examples rather than explicit instructions.

**Why it works:**
- AI excels at pattern recognition
- Examples contain implicit rules you didn't know you had
- Captures your voice, tone, structure automatically
- Adapts to specialty conventions without explanation

### Clinical Application

**Instead of this:**
```
Create a concise, problem-oriented Assessment & Plan.
Use bullet points. Be brief.
```

**Do this:**
```
Format following these examples:

EXAMPLE 1:
1. HTN, controlled
   - BP 128/76 on current regimen
   - Continue lisinopril 10mg daily
   - RTC 6 months

2. Hyperlipidemia
   - LDL 95 on atorvastatin 20mg
   - Continue current dose
   - Repeat lipids in 1 year

EXAMPLE 2:
1. Acute pharyngitis
   - Tonsillar erythema, neg strep
   - Likely viral
   - Supportive care, rest, fluids
   - RTC PRN worsening

ENCOUNTER DATA:
[Paste encounter here]
```

**The difference:**

First prompt: AI guesses what "concise" and "brief" mean  
Second prompt: AI sees exactly what you want

### How Many Examples?

**Sweet spot: 3-5 examples**

**Why not more?**
- Diminishing returns after 5
- Risk of overfitting (AI becomes too rigid)
- Slower processing

**Why not fewer?**
- 1-2 examples often insufficient
- AI can't distinguish pattern from coincidence
- Less robust across case variety

### Choosing Good Examples

**Quality beats quantity:**

✅ **Good examples:**
- Representative of your actual practice
- Varied complexity (simple, moderate, complex)
- Recent (your style evolves)
- Your actual notes (not idealized versions)
- Different clinical scenarios

❌ **Poor examples:**
- Theoretical/fabricated
- All the same complexity
- Old (>6 months)
- Someone else's style
- Too similar to each other

### Example Selection Strategy

**For A&P prompts:**
- Example 1: Routine visit, 1-2 straightforward problems
- Example 2: Moderate complexity, 3-4 problems
- Example 3: Complex case, multiple comorbidities
- Example 4: Acute issue requiring immediate plan
- Example 5: Specialty-specific scenario

**For billing documentation:**
- Example 1: Level 99213 visit with justification
- Example 2: Level 99214 visit with justification
- Example 3: Level 99215 visit with justification

**For patient instructions:**
- Example 1: Acute illness (URI, gastroenteritis)
- Example 2: Chronic disease management
- Example 3: New diagnosis requiring education

---

## Principle 2: Brevity Equals Quality

### Why Concise Documentation Works Better

**Counterintuitive fact:** Briefer notes are higher quality.

**Why?**

**1. Faster physician review**
- 30-60 seconds vs 2-3 minutes per note
- Easier to spot errors or omissions
- Reduced cognitive load

**2. Better error detection**
- Hallucinations more obvious in brief text
- Missing data stands out
- Inconsistencies easier to catch

**3. More physician-like**
- Medical communication is inherently condensed
- Bullet points mimic clinical thinking
- Abbreviations are professional standard

**4. Improved downstream use**
- Other clinicians scan faster
- Consultants find key info quickly
- Reduces information overload

### The Verbosity Problem

**AI's natural tendency: Verbosity**

Without explicit brevity instructions, AI produces:
- Long-winded paragraphs
- Redundant information
- Unnecessary qualifiers
- Over-explanation

**Example - Verbose AI output:**
```
The patient presents today with complaints of an acute onset 
headache that began approximately three hours prior to arrival 
in the emergency department. The headache is described as 
throbbing in nature and is located primarily in the frontal 
region of the head. Associated symptoms that the patient reports 
include sensitivity to light (photophobia) as well as sensitivity 
to sound (phonophobia), however the patient denies experiencing 
any nausea or vomiting at this current time.
```

**Same information, concise:**
```
Acute frontal HA x 3hrs, throbbing. + photophobia/phonophobia.
- N/V.
```

**From 64 words to 10 words. Same clinical information.**

### How to Teach Brevity

**Method 1: Show brief examples**

The most effective method. AI learns your concise style from examples.

**Method 2: Explicit brevity rules** (use sparingly, examples are better)

```
FORMATTING RULES:
- Maximum 1-2 lines per problem
- Use standard abbreviations
- Bullet points, not paragraphs
- Omit unnecessary words
```

**Method 3: Word count limits** (last resort)

```
Create A&P with maximum 50 words total.
```

Use only if examples aren't working.

### Brevity vs. Completeness

**Important: Brevity doesn't mean incomplete.**

✅ **Brief and complete:**
```
1. DKA
   - Glucose 425, pH 7.18, + ketones
   - IV insulin protocol initiated
   - Q1h BG checks, lytes Q4h
   - ICU admission
```

❌ **Brief but incomplete:**
```
1. DKA
   - Started insulin
```

❌ **Complete but verbose:**
```
The patient was diagnosed with diabetic ketoacidosis based on 
laboratory findings including an elevated blood glucose level of 
425 mg/dL, arterial pH of 7.18 indicating acidosis, and the 
presence of ketones in the urine. Treatment was initiated with 
an intravenous insulin protocol following standard DKA management 
guidelines. Frequent monitoring will include hourly blood glucose 
checks as well as electrolyte panels every four hours. The patient 
has been admitted to the intensive care unit for close monitoring.
```

**The key:** Include all clinically relevant information, just say it efficiently.

---

## Principle 3: One Prompt, One Purpose

### The Complexity Trap

**Human intuition:** "I'll make one powerful prompt that does everything!"

**Reality:** Complex multi-purpose prompts fail exponentially.

**Why?**

**Cognitive complexity compounds:**
- 1 task = 1 complexity unit
- 2 tasks = 4 complexity units (not 2)
- 3 tasks = 9 complexity units
- 4 tasks = 16 complexity units

Each additional function multiplies potential failure points.

### The Modular Approach

**Instead of one mega-prompt, create specialized prompts:**

❌ **Multi-purpose (fails):**
```
Analyze this encounter and create:
1. HPI
2. Physical exam
3. Assessment & Plan
4. Billing documentation
5. Patient instructions
6. Follow-up tasks
```

✅ **Modular (succeeds):**

**Prompt 1:** `.myhpi` - HPI formatting only
**Prompt 2:** `.myexam` - Physical exam only  
**Prompt 3:** `.myap` - A&P only
**Prompt 4:** `.mybilling` - Billing documentation only
**Prompt 5:** `.myavs` - Patient instructions only

### Workflow: Chaining Specialized Prompts

**Example clinical workflow:**

1. **After encounter:** AI scribe has captured transcript
2. **Use `.myhpi`:** Transform transcript → structured HPI (15 seconds)
  3. **Use `.myexam`:** Format exam findings (10 seconds)
4. **Use `.myap`:** Generate A&P from HPI + exam (20 seconds)
5. **Use `.mybilling`:** Add billing documentation (15 seconds)
6. **Use `.myavs`:** Create patient instructions (20 seconds)

**Total time: 80 seconds**  
**Total quality: High (each prompt optimized for one task)**

Compare to one mega-prompt:
- Time: 30-45 seconds
- Quality: Low (trying to do too much)
- Editing needed: 5-10 minutes

**Modular prompts save time despite appearing slower.**

### Benefits of Modularity

**1. Independent refinement**
- Each prompt can be improved separately
- Changes don't break other functions
- Easier troubleshooting

**2. Mix and match**
- Use only the prompts you need
- Different workflows for different scenarios
- Adapt to encounter type

**3. Easier collaboration**
- Share specific prompts with colleagues
- Department-wide standard prompts
- Specialty-specific variations

**4. Graceful failure**
- If one prompt fails, others still work
- Isolate problem to specific function
- Faster debugging

### When to Combine vs. Separate

**Combine when:**
- Tasks are always done together
- Output of one feeds directly into next
- Total prompt complexity stays low

**Example - acceptable combination:**
```
Create A&P and billing documentation:

A&P:
[formatted assessment/plan]

BILLING:
- E/M code: [code]
- Justification: [brief rationale]
```

Still focused on one logical unit (the documentation package).

**Separate when:**
- Tasks can be done independently
- Different use cases need different subsets
- combined prompt becomes hard to maintain

---

## Putting It All Together

### Building the Perfect Prompt

**Template structure:**

```
[TASK STATEMENT]
Clear, specific instruction about what to produce

[EXAMPLES]
3-5 concrete examples showing desired output

[FORMAT RULES] (optional, use sparingly)
Explicit rules only if examples don't convey it

[INPUT]
Where source data goes
```

### Real-World Example: A&P Prompt

```
Reformat the following encounter into a problem-oriented 
Assessment & Plan matching my documentation style.

EXAMPLE 1 - ROUTINE VISIT:
1. HTN, controlled
   - BP 128/76 today on current regimen
   - Continue lisinopril 10mg daily
   - RTC 6 months

2. Hyperlipidemia
   - LDL 95 on atorvastatin 20mg
   - Continue current dose
   - Repeat lipids in 1 year

EXAMPLE 2 - ACUTE VISIT:
1. Acute pharyngitis
   - Exam: Tonsillar erythema, no exudate. Neg rapid strep.
   - Likely viral etiology
   - Supportive care: rest, fluids, acetaminophen PRN
   - Return precautions given
   - RTC PRN worsening or 7-10 days if not improving

EXAMPLE 3 - COMPLEX VISIT:
1. T2DM, suboptimal control
   - A1C 8.2% (goal <7%)
   - Increase metformin to 1000mg BID
   - Continue home glucose monitoring
   - Diabetes education referral placed
   - RTC 6 weeks for recheck

2. Obesity (BMI 34)
   - Discussed diet, exercise
   - Nutrition referral placed
   - GLP-1 agonist discussed, pt wants to try lifestyle first
   - Reassess in 3 months

FORMATTING NOTE: Use bullet points, standard abbreviations, 
1-2 lines per problem when possible.

ENCOUNTER DATA:
[Paste encounter notes here]
```

**This prompt demonstrates all three principles:**
1. ✅ Examples (three varied clinical scenarios)
2. ✅ Brevity (examples model concise format)
3. ✅ Single purpose (A&P formatting only)

---

## Common Mistakes

### Mistake 1: Verbose Instructions Instead of Examples

❌ **Don't:**
```
Please create an Assessment & Plan that is concise but 
complete, using bullet points for readability, organized 
by problem in order of clinical significance, with each 
problem including assessment of current status and specific 
plan items including medications, follow-up timing, patient 
education needs, and any referrals or testing ordered.
```

✅ **Do:**
```
Format like these examples:

[3-5 actual examples]
```

### Mistake 2: Too Many Examples

❌ **Don't:**
```
[10 examples of different scenarios]
```

✅ **Do:**
```
[3-5 well-chosen examples covering variety]
```

### Mistake 3: Multi-Purpose Prompts

❌ **Don't:**
```
Create HPI, exam, A&P, billing codes, and patient 
instructions from this encounter
```

✅ **Do:**
Create separate prompts for each task

### Mistake 4: Generic Examples

❌ **Don't:**
Use examples from the internet or other physicians

✅ **Do:**
Use YOUR actual notes from YOUR practice

### Mistake 5: No Iteration

❌ **Don't:**
Create prompt once, never refine

✅ **Do:**
Test, get feedback, refine monthly

---

## Testing Your Principles Mastery

**Quick self-check: Rate your current prompts**

### Principle 1: Examples Over Instructions

- [ ] I provide 3-5 concrete examples
- [ ] Examples are from my actual practice
- [ ] Examples show variety (simple to complex)
- [ ] Examples are recent (<6 months)
- [ ] Very few explicit instructions

**Score: 0-5 checkmarks**

### Principle 2: Brevity Equals Quality

- [ ] My example notes are concise
- [ ] I use bullet points over paragraphs
- [ ] Standard medical abbreviations present
- [ ] No redundant information
- [ ] Each line serves a purpose

**Score: 0-5 checkmarks**

### Principle 3: One Prompt, One Purpose

- [ ] Each prompt has one clear task
- [ ] I have separate prompts for different needs
- [ ] I chain prompts when needed
- [ ] No prompt tries to do "everything"
- [ ] Each prompt can be refined independently

**Score: 0-5 checkmarks**

**Total possible: 15 points**

**13-15:** You've mastered the principles  
**10-12:** Strong foundation, minor refinements needed  
**7-9:** Good start, significant improvement possible  
**<7:** Review this guide and rebuild prompts

---

## Next Steps

### This Week

- [ ] Review your current prompts against the three principles
- [ ] Identify which principle you're violating most
- [ ] Fix one prompt using that principle

### This Month

- [ ] Rebuild all major prompts following the three principles
- [ ] Test and iterate based on real use
- [ ] Measure time savings and quality improvements

### Long Term

- [ ] Build library of 6-10 specialized prompts
- [ ] Share and collaborate with colleagues
- [ ] Contribute improvements back to community

---

## Resources

### Learn More

[**Interactive Course**](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/)  
Practice these principles hands-on, 30 minutes

[**Best Practices Guide**](https://physicianpromptengineering.com/best-practices)  
Deep dive with advanced techniques

[**Prompt Library**](https://physicianpromptengineering.com/prompt-library)  
See the three principles in action

[**Prompt Remix Tool**](https://physicianpromptengineering.com/prompt-remix)  
Build prompts following these principles

---

## Conclusion

Three principles. That's it.

**1. Examples over instructions** - Show, don't tell  
**2. Brevity equals quality** - Concise beats verbose  
**3. One prompt, one purpose** - Specialize, don't generalize

Master these, and your AI-assisted documentation will outperform 95% of physicians.

**It's not complex. It's just different from what seems intuitive.**

The physicians saving 10-15 hours per week aren't using better AI.

They're using better prompts.

**Better prompts = these three principles + your examples.**

---

*Ready to rebuild your prompts? Use our [Prompt Remix tool](https://physicianpromptengineering.com/prompt-remix) to apply these principles to any prompt. Or start from scratch with our [interactive course](https://physicianpromptengineering.com/courses/clinical-prompt-engineering/).*

---

## Related Articles

- [What is Clinical Prompt Engineering?](../what-is-clinical-prompt-engineering-complete-guide/)
- [How to Reduce Documentation Time by 90%](../how-to-reduce-documentation-time-90-percent-ai-prompts/)
- [Epic Users: Complete Guide to Generate Text with AI](../epic-generate-text-with-ai-complete-guide/)
- [Few-Shot Learning for Physicians: A Practical Guide](../few-shot-learning-physicians-guide/)
