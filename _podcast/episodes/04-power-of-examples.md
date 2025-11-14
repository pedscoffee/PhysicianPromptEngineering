# Episode 4: The Power of Examples

**Episode Title:** The Power of Examples: Why Few-Shot Learning Changes Everything

**Length:** 20-25 minutes

**Goal:** Deep dive into few-shot learning, help listeners optimize their examples

---

## Opening (2-3 min)

**Hook:**
- "Three good examples beat 1,000 words of instructions"
- "This sounds wrong, but it's the most important principle in prompt engineering"
- "Today you'll understand why"

**What we're covering:**
- What few-shot learning actually is
- Why it's so powerful for LLMs
- How to choose effective examples
- Common mistakes that kill your results

**Connect to last episode:**
- You wrote your first prompt
- Today we optimize the most important part: the examples

---

## What Is Few-Shot Learning? (5-6 min)

**The concept:**
- "Shot" = example
- "Few-shot" = learning from a few examples (3-10)
- LLMs pattern match from examples you provide
- Alternative: "zero-shot" (no examples) or "many-shot" (tons of examples)

**Why it works with LLMs:**
- Remember: LLMs predict patterns
- Examples show the pattern clearly
- Much easier than interpreting lengthy instructions
- Like showing vs telling

**The psychology behind it:**
- How humans learn new tasks (often from examples)
- "Can you show me one?" is powerful teaching
- AI follows same principle
- Concrete examples beat abstract rules

**Research backing:**
- Few-shot consistently outperforms lengthy instruction
- 3-5 examples often better than 100-page manual
- Quality of examples matters more than quantity
- This isn't hype—it's well-documented

**For clinical documentation:**
- Your example notes teach the AI your style
- Format, tone, abbreviation use, level of detail
- Pattern recognition does the rest
- This is why your notes, your examples = your style

---

## Choosing Effective Examples (7-8 min)

**What makes a good example:**

1. **Representative of typical cases**
   - Not your most complex case
   - Not your simplest either
   - Middle of the road
   - Common presentations you see daily

2. **Shows clear INPUT → OUTPUT pattern**
   - INPUT: verbose AI scribe text
   - OUTPUT: your formatted preference
   - Contrast should be obvious
   - Pattern should be easy to spot

3. **Demonstrates variety**
   - Different problems (HTN, DM, URI, etc.)
   - Different complexities
   - Different formats (when appropriate)
   - Shows flexibility within your style

4. **Matches your actual practice**
   - Don't use textbook examples
   - Use real notes (de-identified)
   - Your actual voice and style
   - What you actually document

5. **Length-appropriate**
   - Not too long (hard to parse pattern)
   - Not too short (pattern unclear)
   - Just enough to show the transformation
   - 3-5 sentences usually good

**How many examples:**
- Minimum: 3 (establishes pattern)
- Sweet spot: 3-5 (most effective)
- Maximum: 10 (diminishing returns)
- More examples ≠ better results after 5-7

**Coverage across examples:**
- Cover your common scenarios
- But don't need exhaustive coverage
- AI generalizes from patterns
- 5 good examples teach style better than 20 mediocre ones

---

## Common Example Mistakes (5-6 min)

**Mistake 1: Too perfect or textbook**
- Using examples that don't match your real notes
- "Textbook" language you'd never actually use
- AI will mimic the examples, not your intent
- Use real notes from your practice

**Mistake 2: Inconsistent across examples**
- Example 1 uses one format
- Example 2 uses different format
- AI confused about which pattern to follow
- Be consistent in your examples

**Mistake 3: Too much variety**
- Trying to show every possible scenario
- Different formats for different situations
- Creates confusion rather than clarity
- Better to make multiple specialized prompts

**Mistake 4: Examples too similar**
- All examples basically the same problem
- Doesn't show how to generalize
- AI might overfit to that one pattern
- Need some variety to demonstrate flexibility

**Mistake 5: Poor INPUT examples**
- Using already-formatted notes as INPUT
- Not showing actual AI scribe verbose output
- Pattern isn't clear
- Use real AI scribe text (verbose, unformatted)

**Mistake 6: No clear transformation**
- INPUT and OUTPUT too similar
- Not obvious what changed
- AI doesn't learn what to do
- Make the transformation clear and consistent

---

## Optimizing Your Examples (4-5 min)

**Test your examples:**
- Remove one example, does it still work?
- If yes, that example might be redundant
- If no, it's teaching something unique—keep it

**Iteration process:**
1. Start with 3 examples
2. Test on various notes
3. Where does it fail?
4. Add example addressing that failure
5. Repeat until reliable

**Version your examples:**
- Track what you change
- "v1: original 3 examples"
- "v2: added complex case example"
- Can roll back if something breaks

**Specialty-specific considerations:**
- Pediatrics: growth/development
- Surgery: procedure details
- Psychiatry: mental status
- Your examples should showcase your specialty needs

---

## Negative Examples (Optional Advanced Technique) (2-3 min)

**What are negative examples:**
- Showing what NOT to do
- "Don't format like this:"
- Can help prevent specific errors

**When to use them:**
- If AI consistently makes same mistake
- After trying to fix with constraints
- As last resort
- Usually not needed first try

**Format:**
```
Incorrect example:
INPUT: [text]
OUTPUT: [wrong format]

Correct example:
INPUT: [same text]
OUTPUT: [right format]
```

**Caution:**
- Can confuse the AI if overused
- Positive examples usually sufficient
- Only add if persistent problem

---

## Actionable Takeaway (2-3 min)

**Review your prompt from last episode:**
1. Look at your examples
2. Are they representative?
3. Is the pattern clear?
4. Is there variety?
5. Do they match your real practice?

**Optimization exercise:**
- Test your prompt on 10 different notes
- Track where it works well
- Track where it fails
- Add examples addressing failure points
- Re-test

**Share and learn:**
- Post your examples in community
- See what others are using
- Collective learning improves everyone's prompts
- Don't reinvent the wheel

---

## Closing (1-2 min)

**Recap:**
- Few-shot learning is the most powerful prompting technique
- 3-5 quality examples beat lengthy instructions
- Choose representative, clear, varied examples
- Iterate based on results

**Preview next episode:**
- Privacy, HIPAA, and doing this safely
- Institutional approval process
- De-identification best practices
- Compliance without barriers

**Final thought:**
- "Your examples are your teaching moments"
- "Invest time here, save time everywhere else"
- "Good examples make everything downstream easier"

---

## Personal Stories to Include

- [ ] When you realized examples mattered more than instructions
- [ ] Bad example that caused funny/frustrating output
- [ ] The example that made everything click
- [ ] Iteration process that perfected your prompt

## Examples to Reference

- [ ] Show 3 good vs 3 poor examples (actual comparison)
- [ ] Before/after of optimizing examples
- [ ] Common mistake with real consequence
- [ ] Specialty-specific example challenge

## Key Phrases to Remember

- "Show, don't tell"
- "Three good examples beat 1,000 words"
- "Quality over quantity"
- "Your examples teach your style"

## Listener Questions to Address

- "Can I use someone else's examples?" (Better to use yours)
- "How similar is too similar?" (Need some variety)
- "What if I don't have good notes to pull from?" (Fix formatting first, then use as examples)
- "Do examples need to be perfect?" (No, representative of your real practice)

---

**Recording Note:** This episode should make listeners rethink how they approached their first prompt. Give specific, actionable guidance on evaluating and improving examples.
