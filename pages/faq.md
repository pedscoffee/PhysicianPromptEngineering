---
title: "FAQ & Disclaimers"
layout: page
permalink: /faq/
---

FAQ/Disclaimers
Frequently Asked Questions (FAQ)
1. What is Peds Coffee and who is it for?
Peds Coffee is an open-source initiative dedicated to improving the efficiency and quality of clinical documentation using large language models (LLMs). Our goal is to create, test, and share high-quality prompts that reduce documentation burden for doctors so they can focus more on patient care.
2. How do I use these prompts?
You use these prompts within an LLM integrated into your Electronic Medical Record (EMR). The most common example is Epic’s “Generate Text with AI” feature, but they can be adapted for any secure, HIPAA-compliant LLM or AI scribe environment your system provides.
1. Copy the prompt from the website.
2. Paste the prompt into your EMR’s AI text generation window, followed by the source text (e.g., the raw note, dictation, or encounter summary).
3. Review the output, make any necessary edits, and drop it into your note.
3. Will these prompts work for other specialties?
While the prompts are written with specific pediatric “few-shot examples” and boilerplate text, the underlying structure and logic are applicable to any specialty.
You are encouraged to:
• Customize the few-shot examples (the sample outputs) and boilerplate text to reflect the common diagnoses and phrasing used in your practice. This will dramatically improve performance for your specialty. The core functionality though of these prompts is very generalizable.
4. Why are the prompts so long?
The length is intentional. Longer prompts that provide clear rules, formatting instructions, and few-shot examples (samples of the desired output) are necessary to overcome common AI pitfalls and achieve the concise, high-quality output required for clinical notes. This detailed structure is what transforms a generic AI summary into a perfectly formatted, usable clinical note. Brevity improves output consistency though so it is an ongoing goal to make them shorter.
5. How can I contribute to Peds Coffee?
We welcome contributions! GitHub is the best place at the moment but this entire site is a work in progress and plan to update this soon.
Disclaimer and Terms of Use
1. No Medical or Legal Advice
The content on the Peds Coffee website, including all AI prompts, examples, and discussions, is provided for educational and informational purposes only. It is not intended as a substitute for professional medical, billing, or legal advice.
2. Clinical Responsibility and Verification
The prompts are tools, not substitutes for clinical judgment. As the practicing clinician, you retain full and final responsibility for the accuracy and completeness of anything related to using these prompts if you decide to use them. Anything here is provided AS IS without any guarantee or promise of any functionality or usefulness. The goal is to give a starting place for you to learn from on your own. These prompts are not products or services. We are simply sharing what we’ve learned.
• Always read and verify the AI-generated output before finalizing anything.
• Prompts cannot account for every nuance of a patient encounter; you must ensure the final text accurately reflects your work.
3. Billing and Coding
The Billing Prompt is provided as a suggested tool based on public E/M guidelines.
• It is the responsibility of the user to confirm the appropriateness of any suggested CPT code with their compliance officer or medical coder.
• Peds Coffee makes no guarantee that any suggested code will be compliant, payable, or accurate in all circumstances.
4. HIPAA and Data Security
These prompts are designed to be used within a secure, HIPAA-compliant environment (e.g., your EMR’s built-in AI tool).
• DO NOT copy and paste protected health information (PHI) from your EMR into public or commercial large language models (LLMs) (e.g., ChatGPT, Gemini, etc.) for use with these prompts.
• You must adhere to your organization’s policies regarding the use of AI tools in clinical care.

Contribution Guidelines
Note: This section is a work in progress. In meantime feel free to use comments.
True note automation is an open-source problem. The collective knowledge of the clinical community is the only way to build a comprehensive, high-quality, and useful library of AI documentation prompts. We invite you to join the Physician Prompt Engineering community by sharing your successful prompts.
How to Contribute
We are looking for prompts that perform a single, focused task with high fidelity. This could be a new visit type, a new specialty’s formatting, an improved version of one of our existing prompts, or something new! The key theme is prompts to be used during real documentation workflows.
1. Test and refine your prompt in your secure EMR environment until you consistently achieve the high-quality output you desire.
2. Use the submission form below (works via GitHub) to share the finalized prompt and its examples with the Peds Coffee community.
Contribution Checklist & Requirements
Clarity and Structure
• Prompt Title: Provide a clear, descriptive title (e.g., “Pithy A/P,” “Billing Prompt,” “OB Triage Note”).
• Target: Clearly state the intended specialty, use case, and documentation system (e.g., “General Peds, Well Visit,” “Internal Medicine, H&P,” “Epic Generate Text”).
If the prompt is accepted, we will publish it on the site as a new post, with full credit given to you (e.g., “Prompt submitted by [Your Handle/Name]”). We will notify you when it goes live.