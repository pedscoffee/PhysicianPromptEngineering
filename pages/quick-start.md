---
title: "Quick Start Guide"
layout: page
permalink: /quick-start/
---

Prerequisites Checklist
Before you begin, make sure you have:
✅ AI Scribe Access – Your EMR’s ambient listening tool configured and working
✅ EMR LLM Access – Epic’s “Generate Text with AI” feature enabled (or equivalent)
✅ IT/HIPAA Approval – Confirm your institution allows use of these tools for clinical documentation
✅ 15-20 Deidentified Transcripts – From your own recent notes (ideal but not strictly necessary)
Don’t have AI scribe yet? Doximity’s is free; just make sure it’s approved by IT.
Don’t have Epic? These prompts can be adapted for other LLMs (again Doximity has a free version) but you MUST verify HIPAA compliance with your IT department first. Never use public AI tools with identifiable patient data.
Quick Start: Three Steps to Your First Automated Note
Step 1: Set Up Your First Prompt (5 minutes)
Copy the A/P Formatting prompt from the post on this site or GitHub
Open your EMR and navigate to where you write notes
Access the LLM tool (In Epic: Right-click in note field → “Generate Text with AI” or press Ctrl-F6)
Paste the prompt into the prompt library
Pin it to your favorites (Epic allows 5 pinned prompts)
Step 2: Test With a Simple Case (10 minutes)
Pull up a recent simple sick visit note (viral URI, ear infection, etc.)
Copy the raw AI scribe output (just the assessment/plan paragraphs)
Trigger your A/P prompt on that text
Review the output – Does it match the style you want?
Compare to your original – Would you approve this as-is?
What to look for:
Formatted the way you wanted?
Appropriate boilerplate appearing
Clinical shorthand matching your style (Short phrases or full sentences? Brief or verbose? What do you like?)
If something looks off: Check the few-shot examples in your prompt. Even small discrepancies in examples will throw off the pattern matching.
Step 3: Use It Live (15 minutes)
Choose a low-stakes visit for your first live test (simple sick visit ideal)
See your patient with AI scribe running as usual
After the visit, let the AI scribe generate its paragraph output
Apply your A/P prompt to transform it
Review and approve (or make quick edits)
Your goal: Notes should require minimal to no editing. If you’re doing much editing, the prompt needs adjustment.
Building Your Test Library
Testing with real cases is essential to iterate quickly. Here’s how:
What to Include in Your Library
Aim for 15-20+ transcripts to start covering:
✅ Simple sick visits (URI, ear infection, minor injury)
✅ Well child checks (various ages)
✅ Chronic conditions (asthma, ADHD)
✅ Complex cases (multiple problems, serious illness)
✅ Edge cases (unusual presentations, medication changes)
Why this matters: Your prompt will only be as good as your testing. A diverse test library catches problems before they appear in real clinical use.
What Success Looks Like
After your first day using the A/P prompt, you should notice:
✅ Notes generated in seconds instead of minutes
✅ Minimal editing required – mostly approve as-is
✅ Notes match your existing style – could be your handwriting
✅ Less cognitive load during documentation
✅ More energy for patient care instead of clerical work
If you’re not seeing this: Your prompt needs refinement. Focus on adjusting few-shot examples to better match your voice.
Common First-Day Issues
“The output doesn’t look like my style”
→ Fix: Adjust your few-shot examples. They’re the most powerful part of the prompt.
“Boilerplate text isn’t appearing”
→ Fix: Check that your AI scribe output includes the trigger words (“illness,” “injury,” “well child check”). The prompt looks for specific language.
“It’s too verbose / not verbose enough”
→ Fix: Adjust the word count guidance in the prompt and examples. My A/P prioritizes extreme brevity.
“I want section headers for Assessment and Plan…or something completely different”
→ Fix: Go for it! Start with your few shot examples and build it out from there.
Next Steps After Day One
Once you’re comfortable with the A/P prompt:
Add the Billing Analysis prompt – Helpful audit trail and documentation gap identification
Try the AVS Generation prompt (10 minutes setup) – Personalized sign-offs for families; needs to use your own examples for authenticity
Build your test library to 40+ transcripts for robust testing of edge cases
Share your experience on GitHub and help others iterate. We’d love to see your prompts!
Part of the beauty of this is you only have to figure out the prompt once. The more people share what they’ve made the more others can benefit.
Advanced: Creating Your Own Custom Prompts
Once you’ve mastered the three core prompts, you might want to create your own for specific workflows:
Key Principles:
Start with 3-5 perfect examples of your desired output
Let examples do the heavy lifting – less instruction is often better
Test extensively before real-world use
Iterate one variable at a time
Ideas for Custom Prompts:
Physical exam formatting
Teaching/metacognition notes for learners
In the moment feedback for QI projects: process measure tracker
Need Help?
Technical issues with Epic? Contact your IT department
Prompt not working as expected? Check your few-shot examples first
Want to share your adaptations? Visit our GitHub repository
Questions or feedback? [Contact us or contribute to the community]
Quick Reference: First Day Checklist
[ ] Verify AI scribe and EMR LLM access
[ ] Copy and pin A/P Formatting prompt
[ ] Test on 2-3 recent note transcripts
[ ] Use live on simple sick visit
[ ] Review output – minimal editing needed?
[ ] If yes: celebrate and continue using
[ ] If no: adjust few-shot examples and retest
Remember: The goal is to create notes indistinguishable from your handwritten work but fully automated. Start simple, test thoroughly, and iterate based on real-world use.
Ready to see it in action? Watch the video walkthrough above, then dive in with your first prompt!