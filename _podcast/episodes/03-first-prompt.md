# Episode 3: Your First Prompt

**Episode Title:** Your First Prompt: A Practical Walkthrough

**Length:** 25-30 minutes

**Goal:** Get listeners to actually write and use their first prompt

---

## Opening (2-3 min)

**Hook:**
- "By the end of this episode, you'll have written your first clinical documentation prompt"
- "No coding. No complexity. Just practical steps."
- "Some of you will use it tomorrow and save time on your first try"

**What we're building:**
- A basic Assessment & Plan formatting prompt
- Takes AI scribe output, makes it concise and problem-oriented
- Real example you can modify for your specialty

**Why start with A&P:**
- Universal across specialties
- High impact (saves most time)
- Easy to evaluate if it worked
- Foundation for more advanced prompts

---

## Before You Write: What You Need (4-5 min)

**Check if you have these:**
1. **EMR with AI text generation**
   - Epic's "Generate Text with AI" feature
   - Cerner's equivalent
   - Or standalone tool (ChatGPT, Claude with copy-paste)

2. **AI scribe output or example note**
   - Doesn't have to be perfect
   - Can even be a typed transcript
   - Just needs to have clinical content

3. **3-5 examples of your preferred output**
   - Pull old notes you're proud of
   - Focus on A&P sections
   - Show the format/style you want
   - This is the most important part

4. **15 minutes of uninterrupted time**
   - You're going to write this now
   - Have these materials ready
   - Pause the podcast if you need to gather them

**If you don't have institutional approval yet:**
- Don't use real patient data
- Practice with fake examples
- Or use de-identified old notes
- Get approval before clinical use

---

## The Anatomy of a Good Prompt (5-7 min)

**Three essential parts:**

1. **Clear instruction (what to do)**
   - "Format the following clinical note into a problem-oriented Assessment & Plan"
   - Be specific about output format
   - State what you want, not what you don't want

2. **Few-shot examples (how to do it)**
   - 3-5 examples of INPUT → OUTPUT
   - Shows the AI the pattern you want
   - Examples are more powerful than lengthy instructions
   - This is 80% of prompt effectiveness

3. **Constraints (boundaries)**
   - "Be concise. Use bullet points. Limit to 2-3 bullets per problem."
   - Character or length limits if needed
   - Specific formatting requirements
   - Abbreviation preferences

**What you don't need:**
- Fancy prompting techniques
- Special syntax or code
- More than 3,000 characters usually
- Perfect language (conversational is fine)

---

## Writing Your Prompt: Step by Step (8-10 min)

**Step 1: Write the instruction**
```
Example:
"You are a clinical documentation assistant. Format the following AI scribe output into a concise, problem-oriented Assessment and Plan. Use the format shown in the examples below."
```

Talk through:
- Keep it simple and direct
- Tell it what role to play
- State the task clearly
- Reference examples (we'll add next)

**Step 2: Add your few-shot examples**

Structure:
```
Example 1:
INPUT: [Verbose AI scribe paragraph about HTN]
OUTPUT: [Your concise bullet format]

Example 2:
INPUT: [Another verbose example]
OUTPUT: [Your format again]

Example 3:
[etc.]
```

Talk through:
- Use real examples from your notes
- Show clear INPUT → OUTPUT pairs
- 3-5 examples (more isn't always better)
- Make sure they demonstrate the pattern you want
- Variety is good (different problems, complexity levels)

**Step 3: Add constraints**

```
Example:
"Constraints:
- Be concise (2-3 bullets per problem)
- Use problem-oriented format
- Start each problem with diagnosis
- Include plan as sub-bullets
- Use medical abbreviations appropriately
- Omit unnecessary detail"
```

Talk through:
- What do you always want?
- What do you never want?
- Format preferences
- Length requirements
- Style choices

**Step 4: Add the variable section**

```
"Here is the AI scribe output to format:

[PASTE AI SCRIBE OUTPUT HERE]"
```

Talk through:
- This is where you'll paste different notes each time
- Everything above stays the same
- Only this part changes per patient
- Make it clear where to paste

---

## Testing Your Prompt (4-5 min)

**First test:**
- Use a recent note (de-identified if needed)
- Paste AI scribe output into prompt
- Run it through your EMR's AI feature
- Review the output

**What to look for:**
- Format matches your examples?
- Appropriate level of detail?
- Missed any important information?
- Added anything wrong or hallucinated?
- Abbreviations used correctly?

**Common issues on first try:**
- Too verbose → add "be concise" to constraints
- Wrong format → improve your examples
- Missing key info → check if it was in input
- Hallucinated details → emphasize "only use information provided"

**Iterate:**
- Adjust based on what you see
- Re-run with same input
- Should improve quickly
- 3-5 iterations usually gets you 90% there

---

## From Test to Practice (3-4 min)

**When it's working well:**
- Test on 5-10 different notes
- Variety of simple and complex
- Different problem types
- Make sure it's reliable

**Save it somewhere:**
- Snippet manager tool (on website)
- EMR quick text if possible
- Document somewhere accessible
- Version it (v1.0)

**Start using it:**
- Begin with routine cases
- Review extra carefully at first
- Build confidence
- Expand to complex cases gradually

**Track the impact:**
- How much time did it save?
- Quality acceptable?
- What still needs editing?
- Is it worth continuing?

---

## Actionable Takeaway (2-3 min)

**Do this today:**
1. Gather 3-5 example A&P sections from your notes
2. Write a basic prompt using the structure from this episode
3. Test it on one de-identified note
4. Iterate based on results
5. Share in GitHub Discussions (optional but encouraged)

**Resources:**
- Full prompt template on website
- Example prompts in the library
- Prompt generator tool for guided creation
- Community for troubleshooting

**Next episode preview:**
- We'll go deep on few-shot examples
- Why they're so powerful
- How to choose good ones
- Advanced techniques for better results

---

## Closing (1-2 min)

**Recap:**
- Good prompts have three parts: instruction, examples, constraints
- Examples are the most important part
- Start simple, iterate based on results
- Test before clinical use

**Challenge:**
- Write your first prompt before next episode
- Doesn't have to be perfect
- Just has to exist
- You'll improve it as you learn more

**Final thought:**
- "Every physician using AI documentation started with their first prompt"
- "Yours doesn't have to be perfect"
- "It just has to be started"

---

## Personal Stories to Include

- [ ] Your very first prompt attempt (probably overcomplicated)
- [ ] The moment it actually worked
- [ ] A specific iteration that made it much better
- [ ] First time you used it on a real note

## Examples to Walk Through

- [ ] Actual A&P prompt you use
- [ ] Before/after of one note
- [ ] Common mistake and how to fix it
- [ ] Show the iteration process

## Key Phrases to Remember

- "Examples are 80% of prompt effectiveness"
- "Start simple, iterate based on results"
- "Your first prompt won't be perfect, but it'll work"
- "Three parts: instruction, examples, constraints"

## Listener Questions to Address

- "How long should my prompt be?"
- "How many examples do I need?"
- "What if it doesn't work first try?"
- "Can I use someone else's prompt?"

---

**Recording Note:** This is the most practical episode. Consider pausing to let listeners actually write along with you. Be very specific with examples. This is where theory meets practice.
