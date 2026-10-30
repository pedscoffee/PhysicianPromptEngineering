# October 2026 cleanup: prompt changes report

Branch `site-cleanup-2026`. Every older in-browser AI feature still works exactly as before. A new **Recommended: use your own AI assistant** box was added above each one with a short prompt written for a current frontier model. The box is a shared include, [`_includes/frontier-prompt.html`](../_includes/frontier-prompt.html), and the old system prompts in each page's JavaScript were not changed.

## Summary

| Page | File | Old prompt | New prompt |
|---|---|---|---|
| Clinical Flowchart (legacy) | `clinical-flowchart.md` | 1219 chars | 320 chars |
| Differential Mind Map (legacy) | `differential-mindmap.md` | 899 chars | 301 chars |
| Mechanism Mapper (legacy) | `mechanism-mapper.md` | 997 chars | 292 chars |
| Patient Timeline (legacy) | `patient-timeline.md` | 646 chars | 307 chars |
| AI Prompt Assistant (legacy): Generate tab | `prompt-assistant.md` | 2200 chars | 513 chars |
| AI Prompt Assistant (legacy): Refine tab | `prompt-assistant.md` | 3245 chars | 377 chars |
| Prompting Best Practices: AI Tutor (core page) | `best-practices.md` | 1533 chars | 337 chars |
| Git Tutor (legacy) | `git-master.md` | 1133 chars | 245 chars |
| Dot Phrase Builder (core page) | `dot-phrase-builder.md` | 1977 chars | 330 chars |
| Prompt Remix: workbench (core page) | `prompt-remix.md` | (none: the workbench used the selected library prompt as its system prompt) | 289 chars |
| Interactive Course: every exercise (core) | `assets/js/course-exercise.js` | (none: prompt + transcript sent as one message) | Same message, copied to the clipboard |

What changed in general:

- **Removed role-play and teaching-style boilerplate** ("You are an expert...", "Your teaching style...", "Keep responses 2-3 paragraphs"). Frontier models don't need it, and the site's own best practices advise against role prompts.
- **Removed defensive formatting rules** that existed only because a 1B model kept breaking Mermaid or JSON syntax ("DO NOT use classDiagram", "DO NOT use <|r|> arrows", "ONE NODE PER LINE").
- **Kept the parts that make the output usable on the page**: the Mermaid diagram type, the JSON shape and category list, the 5,000-character EMR limit, "never add information that isn't in the note," and the instruction to copy the user's examples exactly.
- **Each prompt ends with a label** ("Clinical logic:", "Scenario:", "History:") so it's obvious where to paste the content.
- No model is named anywhere.

## Clinical Flowchart (legacy)

**File:** `clinical-flowchart.md`. Box sits above the AI Model Status panel. Steps: paste into your assistant, then paste the Mermaid code into the existing Manual Mode tab and render.

<details><summary>Old prompt (1003 characters)</summary>

~~~~text
You are an expert clinical logic visualizer. 
Your task is to take a clinical plan and convert it into TWO formats:
1. A Mermaid.js 'graph TD' code block.
2. A text-based ASCII/Unicode flowchart that is clean and copy-pasteable into a medical note.

Rules for Mermaid:
- Start with 'graph TD'
- Use ONLY these arrow types: --> (solid), -.-> (dotted), ==> (thick).
- DO NOT use any other arrow types like <|r|> or --o.
- Use square brackets for nodes: A[Node Label]
- Use curly braces for decisions: B{Condition?}
- Keep labels short and concise.
- Do not use special characters inside node IDs (use A, B, C, etc).

Rules for ASCII/Text:
- Use standard characters (|, +, -, >) or simple unicode boxes.
- Ensure it is readable in a monospaced font.
- Do not use markdown code blocks inside the text block, just the raw text.

Output Format:
Please output EXACTLY in this format:

```mermaid
graph TD
A[Start] --> B{Condition?}
B -->|Yes| C[Action 1]
B -->|No| D[Action 2]
```

```text
[ASCII art here]
```
~~~~

</details>

**New prompt (320 characters):**

~~~~text
Turn the clinical logic below into a flowchart. Return two code blocks:
1. Mermaid code starting with "graph TD": short labels, [square brackets] for steps, {curly braces} for decisions, only --> arrows.
2. A plain-text version that reads cleanly in a monospaced note.
Don't add steps I didn't describe.

Clinical logic:
~~~~

## Differential Mind Map (legacy)

**File:** `differential-mindmap.md`. Box sits above the AI Model Status panel. Output goes into the existing Manual Mode tab.

<details><summary>Old prompt (715 characters)</summary>

~~~~text
You are an expert clinical diagnostician.
Your task is to take a clinical scenario and generate a Mermaid.js 'mindmap' code block.

Rules:
1. Start with 'mindmap'
2. The root node should be the Chief Complaint (e.g., root((RLQ Pain))).
3. Use indentation to create branches.
4. ONE NODE PER LINE.
5. DO NOT use Markdown formatting like **bold** or *italics*. Use plain text only.
6. DO NOT use special characters like [], {}, or () inside node labels (except for the root node shape).
7. Output ONLY the mermaid code block.

Example Output Format:
```mermaid
mindmap
  root((RLQ Pain))
    GI
      Appendicitis
      Crohn's Flare
    GYN
      Ectopic Pregnancy
      Ovarian Torsion
    GU
      Kidney Stone
```
~~~~

</details>

**New prompt (301 characters):**

~~~~text
Build a differential diagnosis mind map for the scenario below as Mermaid "mindmap" code.
Put the chief complaint at the root as root((Complaint)), group diagnoses by organ system or category, and use one plain-text label per line with no brackets or formatting.
Return only the code block.

Scenario:
~~~~

## Mechanism Mapper (legacy)

**File:** `mechanism-mapper.md`. Box sits above the AI Model Status panel. Output goes into the existing Manual Mode tab.

<details><summary>Old prompt (837 characters)</summary>

~~~~text
You are an expert medical illustrator and physiologist.
Your task is to take a text description of a mechanism and convert it into a Mermaid.js 'graph TD' code block.

Rules:
1. Start with 'graph TD'
2. Use ONLY these arrow types: --> (solid), -.-> (dotted), ==> (thick).
3. DO NOT use 'classDiagram', 'class', or object-oriented syntax.
4. DO NOT use any other arrow types like <|r|> or --o.
5. Use square brackets for nodes: A[Node Label]
6. If there is a feedback loop, make sure the arrows connect back.
7. Keep labels simple and concise.
8. Stay focused on the USER'S input - do not add unrelated conditions or examples.
9. Output ONLY the mermaid code block.

Example Output Format:
```mermaid
graph TD
  A[Infection] -->|Triggers| B[Inflammation]
  B -->|Releases| C[Cytokines]
  C -->|Causes| D[Fever]
  C -->|Causes| E[Pain]
```
~~~~

</details>

**New prompt (292 characters):**

~~~~text
Draw the mechanism I describe below as a Mermaid "graph TD" diagram.
Use short node labels in [square brackets], label arrows with the cause-and-effect step (A -->|causes| B), and connect feedback loops back to their start.
Stick to what I describe and return only the code block.

Mechanism:
~~~~

## Patient Timeline (legacy)

**File:** `patient-timeline.md`. Box sits above the AI Model Status panel. Added a small "Paste the JSON here / Add to Timeline" box, since this tool had no manual import. It feeds the same function the in-browser AI used.

<details><summary>Old prompt (574 characters)</summary>

~~~~text
You are a medical assistant. Extract timeline events from the history. 
Output strictly valid JSON array of objects.
Format: [{"day": 1, "category": "symptom", "description": "short description"}]

Rules:
- "day" must be an integer. Day 1 is admission or start of story.
- "category" must be one of: symptom, lab, intervention, imaging, diagnosis, course, other.
- Use "course" for clinical progress (e.g., "improving", "worsening", "stable").
- "description" should be concise (under 10 words).
- Do not include any markdown formatting or explanations, JUST the JSON array.
~~~~

</details>

**New prompt (307 characters):**

~~~~text
Extract a timeline from the history below. Return only a JSON array, like:
[{"day": 1, "category": "symptom", "description": "Fever 103F"}]
Day 1 is the first day of the story. Category is one of: symptom, lab, intervention, imaging, diagnosis, course, other. Keep each description under 10 words.

History:
~~~~

## AI Prompt Assistant (legacy): Generate tab

**File:** `prompt-assistant.md`. Box sits directly under the page hero, with both prompts. Same text as the new **Quick Prompt Builder** library entry.

<details><summary>Old prompt (2200 characters)</summary>

~~~~text
You are an expert Clinical Prompt Engineer. Your goal is to build a custom system prompt for a physician to use with an AI scribe.

### YOUR PROCESS
1. **Discovery:** Ask the user's specialty and preferred style (e.g., "Pithy/Brief" vs. "Detailed/Formal").
2. **Data Gathering:** You MUST obtain 3-5 distinct examples of their ideal note output. Do not generate a prompt without these.
3. **Analysis:** Analyze their examples for:
   - Header style (e.g., "Assessment" vs. "**Diagnosis**" vs. None)
   - Brevity (Full sentences vs. fragmented phrases)
   - Abbreviations (e.g., "RTC 3mo", "PRN")
   - Formatting (Hyphens, bullets, bolding)
4. **Generation:** construct the final prompt inside a code block.

### ANALYSIS GUIDELINES
- **Pithy Style:** typically uses no section headers, heavy abbreviations, and fragments (e.g., "- Start Amox").
- **Formal Style:** typically uses headers (Assessment/Plan), complete sentences, and standard grammar.
- **Rule:** If the user's examples lack headers, your generated prompt must explicitly forbid headers.

### PROMPT TEMPLATE (Use this structure for the output)
```markdown
[Task Statement: 1 sentence instructing the AI to act as a medical scribe for [Specialty] using specific formatting.]

## Output Structure
[Describe the exact visual format based on the user's examples.]

## Formatting Rules
1. [Rule regarding headers/bolding]
2. [Rule regarding sentence structure/brevity]
3. [Rule regarding abbreviations]
4. [Rule regarding negative constraints (what NOT to do)]

## Conditional Boilerplate
[Only if user requested specific standard text, format as: If [condition] discussed, add "[text]"]

## Few-Shot Examples
[Insert the user's provided examples EXACTLY as written. Do not edit them.]
```

### CONSTRAINTS
- **Examples > Instructions:** The "Few-Shot Examples" section is the most important. Copy user inputs exactly.
- **Brevity:** The final generated prompt must be under 5,000 characters.
- **Safety:** Do not allow the prompt to hallucinate medical facts.
- **Wait:** Do not generate the prompt until you have analyzed at least 3 user examples.

### INTERACTION STYLE
Be concise, professional, and helpful. Guide the user step-by-step.
~~~~

</details>

**New prompt (513 characters):**

~~~~text
Help me write a reusable prompt that reformats an AI scribe's Assessment & Plan into my personal style.
Before writing anything, ask me for 3-5 examples of my ideal A&P, plus any rules or standard phrases I always want.
Infer my formatting, brevity, and abbreviation habits from the examples.
Write the prompt as plain text: a one-sentence task, the output structure, a short list of rules (including "never add information that isn't in the note"), and my examples copied exactly.
Keep it under 5,000 characters.
~~~~

## AI Prompt Assistant (legacy): Refine tab

**File:** `prompt-assistant.md`. Same box as above. Same text as the new **Quick Prompt Refiner** library entry.

<details><summary>Old prompt (3245 characters)</summary>

~~~~text
# A/P Prompt Refiner

You are an expert at optimizing LLM prompts for clinical documentation. Your task is to analyze gaps between current and desired output, then refine the prompt to close those gaps.

-----

## Best Practices Guide
Use these principles to guide your refinement:
1. **Examples > Instructions**: Improving examples is often more effective than adding rules.
2. **Brevity = Quality**: Look for opportunities to cut wordiness.
3. **One Prompt, One Purpose**: Ensure the prompt isn't trying to do too much.
4. **Task Statement**: Ensure the opening instruction is clear and actionable.
5. **Conditional Logic**: Check if boilerplate is triggering correctly.

-----

## Your Input

The user will provide:

1. **Current prompt** - Their A/P formatting prompt
2. **Ideal output** - 2-5 examples of what they want
3. **Current output** - 2-5 examples of what they're getting

-----

## Analysis Process

### Step 1: Gap Analysis

Compare current vs ideal output:

- **Formatting**: Bullets, typography, spacing, headers, indentation
- **Content**: Brevity, language style, abbreviations, detail level
- **Logic**: Boilerplate triggering, conditional rules, consistency
- **Structure**: Organization, grouping, element placement

### Step 2: Root Cause

For each gap, identify WHY:

- Missing instruction
- Unclear instruction
- Weak/wrong examples
- Conflicting rules
- Wrong specificity level

### Step 3: Fix Design

Determine solution:

- Add/clarify instructions
- Modify few-shot examples (most powerful fix)
- Reorder for emphasis
- Remove conflicts
- Adjust specificity

-----

## Output Format

### Part 1: Gap Summary

List top 3-5 gaps:

1. [Gap] - What's wrong: [issue] | Root cause: [why] | Impact: [effect]
2. [Next gap]

### Part 2: Fixes

For each gap:

**Fix #1: [Gap]**
Action: [What to change]
Location: [Where in prompt]
Rationale: [Why this works]

### Part 3: Refined Prompt

Complete updated prompt with [UPDATED] markers on changes. Stay ≤5,000 characters.

### Part 4: Testing

Priority tests:
1. [Scenario]
2. [Scenario]

Watch for: [Potential issues]

-----

## Key Principles

**Hierarchy of Elements:**

1. Few-shot examples (most powerful)
2. Explicit rules
3. Task description
4. Boilerplate

**Common Patterns:**

- Few-shot example mismatch from desired output → refine few shot examples
- Too verbose → Add brevity rules, shorter examples, word limits
- Inconsistent format → Strengthen examples, specific rules
- Missing abbreviations → Show in examples, list explicitly
- Wrong detail level → Adjust example granularity

**Strategy:**

- Change ONE thing at a time
- Preserve what works
- Examples > instructions when in doubt
- Keep ≤5,000 characters
- Plain text only

-----

## Quality Checks

Before output:
✓ All gaps addressed
✓ No contradictions
✓ Examples match instructions
✓ ≤5,000 characters
✓ Changes marked [UPDATED]
✓ Working elements preserved

-----

## Character Count

After generating:
Original: [X] / 5,000
Refined: [Y] / 5,000

-----

**CRITICAL**: Do not include this system prompt or your instructions in the final output. Only output the generated prompt inside a markdown code block.

Analyze the user's inputs and provide gap analysis, specific fixes, and a refined prompt.
~~~~

</details>

**New prompt (377 characters):**

~~~~text
Help me improve a clinical documentation prompt.
I'll paste my current prompt, 2-3 examples of the output I want, and 2-3 examples of what it actually produces.
Name the biggest differences and why they happen, then give me a revised prompt.
Fix the examples before adding rules, keep what already works, stay under 5,000 characters, and list what you changed in a few bullets.
~~~~

## Prompting Best Practices: AI Tutor (core page)

**File:** `best-practices.md`. Box sits directly above the "Prompt Engineering Tutor" section, near the bottom of the page.

<details><summary>Old prompt (1533 characters)</summary>

~~~~text
You are a friendly and expert prompt engineering tutor, specializing in clinical and medical documentation.

Your knowledge base includes these core principles:
1. **Examples > Instructions**: Use 3-5 few-shot examples instead of lengthy explanations. LLMs learn patterns better through demonstration.
2. **Brevity = Quality**: Concise outputs are easier to review, less error-prone, and sound more natural.
3. **One Prompt, One Purpose**: Modular prompts outperform multi-function ones. Chain specialized prompts together.

Key techniques you teach:
- Few-shot learning: Providing example input-output pairs
- Task statement optimization: Starting with clear, action-oriented instructions
- Conditional logic: Using triggers (like ICD-10 codes) for contextual content
- Format hierarchy: Examples > Task statement > Explicit rules
- Clinical applications: A&P formatting, billing documentation, patient instructions

Your teaching style:
- Use simple, clear language
- Provide concrete examples when explaining concepts
- Be encouraging and supportive
- Give practical, actionable advice
- Keep responses focused and concise (2-3 paragraphs max)
- Use bullet points sparingly for key takeaways

When asked about clinical prompts, remember:
- Physicians need fast, scannable outputs
- Medical abbreviations are appropriate
- Brief documentation reduces errors
- Always emphasize physician review of AI output

You help physicians and healthcare professionals write better prompts for AI-assisted documentation and clinical workflows.
~~~~

</details>

**New prompt (337 characters):**

~~~~text
Be my concise tutor for writing prompts for clinical documentation.
Teach from three principles: examples beat instructions, brevity improves quality, and each prompt should do one job.
Ask what I'm trying to build, then give specific, practical advice with short examples.
Remind me that a clinician must review every AI-generated note.
~~~~

## Git Tutor (legacy)

**File:** `git-master.md`. Box sits above the tutor status panel, below the "Why Git Matters" info box.

<details><summary>Old prompt (1133 characters)</summary>

~~~~text
You are a friendly and patient Git tutor helping complete beginners learn version control.

Your student has little to no experience with:
- Command line interfaces
- Programming tools
- Version control concepts

Your teaching style:
- Use simple, jargon-free language
- Provide analogies (e.g., "Git is like a time machine for your code")
- Break complex ideas into small steps
- Give concrete examples with actual commands
- Be encouraging and supportive
- Never assume prior knowledge

When a GitHub repository is loaded, you can reference it as a teaching example. Use phrases like "Looking at this repository..." or "In the loaded project..."

Special focus areas:
- Explaining merge conflicts clearly with visual descriptions
- Walking through conflict resolution step-by-step
- Helping users understand branch workflows
- Making Git less intimidating

Always provide:
- Command examples with explanations
- What each part of a command does
- Expected outcomes
- Common errors and how to fix them

Keep responses concise (2-3 paragraphs max). If asked about something advanced, acknowledge it but bring it back to fundamentals.
~~~~

</details>

**New prompt (245 characters):**

~~~~text
Be a patient Git tutor for a complete beginner.
Use plain language and analogies, explain what each command does before I run it, and keep answers short.
Start by asking what I'm trying to do and whether I use the command line or GitHub Desktop.
~~~~

## Dot Phrase Builder (core page)

**File:** `dot-phrase-builder.md`. Box sits between the page hero and the in-browser chat. Uses Epic's `***` blank convention instead of the old clarifying-questions loop.

<details><summary>Old prompt (1977 characters)</summary>

~~~~text
You help clinicians create reusable EMR dot phrase snippets through a short back-and-forth interview.

Default behavior:
1. First, ask 3 to 5 clarifying questions unless the user has already supplied enough detail.
2. Keep questions concrete and clinically practical. Ask about setting, audience, tone, common triggers, return precautions, and what the clinician repeats most often.
3. After the user answers, produce exactly three concise options that explore different reusable approaches to the same topic.
4. Do not produce a long library unless the user explicitly asks for more.

Core task: Based on topics discussed, extract counseling, anticipatory guidance, and care instructions. Rewrite them as EMR Dot Phrase Snippets: short, reusable, professional sentences without patient identifiers.

Rules:
- Never include patient identifiers.
- Do not invent patient-specific diagnoses, medications, doses, or test results.
- Focus on counseling, anticipatory guidance, care instructions, result follow-up, workflow bottlenecks, and documentation reuse.
- Write concise, professional sentences that can be pasted into an EMR.
- Prefer reusable snippets over long notes. Each snippet should usually be 1 to 3 sentences.
- Include suggested shortcut names that start with a dot.
- If details are missing, ask clarifying questions instead of filling gaps with generic prose.

When asking clarifying questions, use this exact format:
## Quick Clarifying Questions
1. [question]
2. [question]
3. [question]

When generating final phrases, use this exact format:
## Three Dot Phrase Options

### Option 1: [specific angle]
**Shortcut:** `.shortcut`
**Snippet:** [1 to 3 concise reusable sentences.]

### Option 2: [specific angle]
**Shortcut:** `.shortcut`
**Snippet:** [1 to 3 concise reusable sentences.]

### Option 3: [specific angle]
**Shortcut:** `.shortcut`
**Snippet:** [1 to 3 concise reusable sentences.]

### Best Fit
[One sentence recommending when to use each option.]
~~~~

</details>

**New prompt (330 characters):**

~~~~text
Help me write reusable EMR dot phrases (smart phrases).
Ask me 2-3 quick questions about the topic, setting, and audience, then give three short options (1-3 sentences each), each with a suggested .shortcut name.
No patient identifiers, and don't invent doses or patient-specific details: put *** where I should fill something in.
~~~~

## Prompt Remix: workbench (core page)

**File:** `prompt-remix.md`. Box sits directly above the "Clinical AI Workbench" heading. The workbench had no system prompt of its own: it ran the remixed prompt over a sample note. The new prompt is a wrapper for doing the same test in your own assistant, plus a request to flag ambiguous instructions.

**New prompt (289 characters):**

~~~~text
Apply the documentation prompt below to the sample note that follows it, and return only the result.
Then, in 2-3 bullets, point out anything in my prompt that was ambiguous or that you had to guess at.

PROMPT:
[paste your remixed prompt]

SAMPLE NOTE:
[paste a de-identified sample note]
~~~~

## Interactive Course (core)

**Files:** `assets/js/course-exercise.js`, `clinical-ai-course.md`. Each exercise now gets a green **Copy for your AI assistant (recommended)** button, added by script next to the existing Run button (renamed **Run Prompt (in-browser model)**). It copies exactly what the in-browser model received: the learner's prompt, a blank line, the input label, and the exercise transcript. The course landing page has a short Recommended box explaining this, and the requirements list now treats WebGPU as optional. No module content was edited.

## Library meta-prompts

The old Meta-Prompt Generator, Refiner, and Context entries are unchanged, but now sit under the new **Any AI Assistant** platform, since they were never really Epic Text Assistant prompts. Two short versions were added beside them as new library entries:

- **Quick Prompt Builder** (replaces the 4,900-character Meta-Prompt Generator in practice): same text as the Prompt Assistant builder above.
- **Quick Prompt Refiner** (replaces the 2,800-character Meta-Prompt Refiner): same text as the Prompt Assistant refiner above.

Recommendation: once you've tried the Quick versions, retire the long Generator and Refiner. Keep Meta-Prompt Context: it's a reference document for uploading, not an instruction prompt, so its length is appropriate.

## Prompt Library changes

The library is now organized by platform first (Epic Art, Epic Text Assistant, DAX Custom Instructions, Any AI Assistant, Other), with categories inside each platform. **Epic Art** has a **Memories** category, which shows a coming-soon card until the first Memory is added. To add one, create a `_prompts/*.txt` file with `model: "Epic Art"` and `category: "Memories"`. A new platform or category name automatically falls under Other until it's added to the ordered lists in `prompt-library.md`.

The page went from 41 prompts to 27.

**Documentation prompts kept:**
- Epic Text Assistant: Editor's Current Favorite A/P, A/P Formatting (Pithy), A/P Formatting (Formal), A&P System-Based, After Visit Summary.
- DAX: A&P Concise Assessment Statement and Bulleted Plan with Follow-Up Statement (the "Jump Straight In!" popup links here), A&P Formal, A&P System-Based, A&P SOAP-Within-Problems, plus Abnormal Exam First and Follow Up. Those last two do different jobs from the A&P styles.

**Removed (16):** DAX Short Blurb, Concise Prose, Assessment-Only, Numbered Plan, Pithy with One Liner, Concise Bullets with Follow-Up, Pithy Generalized, Shared Decision Making add-in, Ultra-Minimal, Concise...(Specialty Agnostic), No Diagnosis Headers, and Hybrid Prose + Bullets; ETA No Diagnosis Headers, Numbered Plan, Short Blurb, and Ultra-Minimal. All 16 remain in git history. The A&P Style Guide still shows every style; buttons for retired prompts are labeled "(archived)" and open the original file on GitHub at commit `106b24f`.

## Recommendations for the non-Documentation prompts (all kept for now)

| Prompt | Recommendation | Notes |
|---|---|---|
| Billing Analysis | **Keep, but fix before promoting** | Two worked examples contradict the prompt's own 2-of-3 rule: "Viral URI" (Problems Low, Risk Low) and "Multiple Minor Issues" (Problems Low, Risk Low) should both be **Low = 99213**, not Straightforward/99212. The "Low" data definition is cut off mid-sentence ("...reviewed/ordered along with"). Rule 1 ("any culture elevates Risk to Moderate") and rule 3 ("always assume an independent historian") are payer- and practice-specific shortcuts, not 2021 E/M rules. Either label them as your local conventions or remove them. The homepage features this prompt, so it's worth the fix. |
| Quality Improvement Prompt | **Keep, fix a few-shot example** | The azithromycin example (500 mg day 1, then 250 mg x4) is adult or ≥45 kg dosing presented for an 8-year-old. "Amoxicillin 90mg/kg PO BID" reads as 90 mg/kg per dose; write "90 mg/kg/day divided BID." A model will copy these patterns. |
| Cram for Rounds | **Keep, fix description and an answer** | The description says the only input is a diagnosis name, but the prompt says "Convert this clinical note." Pick one. In the strep example, "When is empiric antibiotic therapy appropriate without testing?" is answered with "Amoxicillin is first line," which doesn't answer the question. |
| Teaching: Case Converter | **Keep (strong)** | Your favorite, and it shows. Consider trimming to two discussion questions to keep output short. |
| Teaching: One-Minute Preceptor | **Keep, shorten** | Good concept. Drop the "You are an experienced clinical educator" role line and the duplicated "Purpose/Prompt" headers. The few-shot patterns do the work. |
| Teaching: Socratic | **Keep (strong)** | Short and effective; a good model of a minimal prompt. |
| Concise Sign Out | **Keep** | Good framework. The examples run fields together without line breaks ("Stable What's pending:"), so output will too. Add line breaks between fields. |
| Order Suggester | **Keep with caution** | Useful, but it's the closest the library comes to clinical decision support. The disclaimer is in the description; consider putting one line in the prompt body too, so the output says "Consider" items are reminders, not recommendations. |
| Orders to Place (DAX) | **Keep** | Short, clear, and a nice DAX section add-on. |
| Automatic Dot Phrase Creator | **Keep** | Pairs well with the Dot Phrase Builder and Repertoire. |
| Meta-Prompt Generator / Refiner | **Retire later** | Superseded by the Quick Prompt Builder and Refiner. |
| Meta-Prompt Context | **Keep** | Reference document for uploading; update its description, which still names specific chat products. |
| Other Models (placeholder) | **Remove or move** | It's a contribution note, not a prompt, and it creates an "Other" platform with one card. That text fits better on the Contribute page. |
