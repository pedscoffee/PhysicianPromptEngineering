---
layout: home
image: /images/workflow-diagram.png
---
<style>
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin-bottom: 1.5rem;
    z-index: 1;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
/* Ensure site navigation appears above video */
  .site-header {
    position: relative;
    z-index: 100;
  }
  
  .site-nav {
    z-index: 100;
  }
  
  .site-nav .trigger {
    z-index: 200;
  }

</style>

<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/-2ivdNTM7SY?si=ci0EitG8wKOxEp3e" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

# Physician Prompt Engineering | AI Scribe Large Language Model Editor

## A New Way Forward

The key innovation shared here is physician use of a large language model as a personalized AI Editor to accelerate and enhance medical documentation.

### Workflow diagram

![Workflow diagram](./images/workflow-diagram.png){: style="max-width: 80%; height: auto; display: block; margin: 0 auto;" }

**Goal:** Transform AI scribe output into your exact preferences using EMR’s internal LLM. Notes should be fully automated to your exact preferences with no editing required.

While it is tempting to take this in all sorts of directions, it’s recommended to start with a goal of creating notes that are indistinguishable from your current handwritten notes but are fully automatic. That way you can start to reap the benefits immediately.

### Three Production Prompts

* **A/P Formatting** – Transforms paragraphs into concise, problem-oriented notes
* **Billing Analysis** – Assesses MDM and suggests CPT codes with audit trail
* **AVS Generation** – Creates personalized sign-offs + family to-do lists

These are available to copy and paste from our [Prompt Library]({{ site.baseurl }}/prompt-library).

### Key Constraint

Epic EMR LLM only accepts plain text (no markdown, no rich formatting). All prompts must be ≤5,000 characters.

These prompts were made to work with Epic’s Generate Text with AI feature. This same workflow could be done with other LLMs and not necessarily inside the EMR (and probably more successfully!), but be sure that whatever you’re using is approved by your IT department and safe for HIPAA.

Get the prompts from the [Prompt Library]({{ site.baseurl }}/prompt-library) or check out the [GitHub repository](https://github.com/pedscoffee/PhysicianPromptEngineering/).

---

### The Big Three Insights

For a deeper dive, see our [Prompt Engineering Best Practices]({{ site.baseurl }}/best-practices).

**1. Few-Shot Examples Are Critical**
* Most important element for prompt success
* Show, don’t tell – examples guide output better than instructions

**2. Brevity Improves Quality**
* Shorter bullets = faster scanning, easier approval
* Less editing required, more human-feeling

**3. Separate Prompts for Separate Functions**
* Each prompt does one thing well
* Can be used independently or together
* Easier to refine and iterate

Ready to contribute? [Share your prompts with us.]({{ site.baseurl }}/contributions)

---
 
## Frequently Asked Questions (FAQ)
*1. What is Physician Prompt Engineering and who is it for?*

Physician Prompt Engineering is an open-source initiative dedicated to improving the efficiency and quality of clinical documentation using large language models (LLMs). Our goal is to create, test, and share high-quality prompts that reduce documentation burden for doctors so they can focus more on patient care.

*2. How do I use these prompts?*

You use these prompts within an LLM integrated into your Electronic Medical Record (EMR). The most common example is Epic’s “Generate Text with AI” feature, but they can be adapted for any secure, HIPAA-compliant LLM or AI scribe environment your system provides.
- Copy the prompt from the website.
- Paste the prompt into your EMR’s AI text generation prompt window, and run it on the source text (e.g., note, dictation, or encounter summary).
- Review the output, make any necessary edits, and drop it into your note.

*3. Will these prompts work for other specialties?*

While theses initial prompts are written with specific pediatric “few-shot examples” and boilerplate text, the underlying structure and logic are applicable to any specialty.  If you make them your own, please contribute!  The goal is to create a resource that can benefit the entire medical community.  To start, customize the few-shot examples and boilerplate text (dot phrase insertion) to reflect the common diagnoses and phrasing used in your practice. This will dramatically improve performance for your specialty. The core functionality though of these prompts is very generalizable.

## Important Disclaimers
- **Only use within HIPAA-compliant EMR environments**
- **DO NOT use public AI tools** (ChatGPT, Claude, Gemini) with patient data
- Use your EMR's integrated LLM or approved tools only
- All prompts assume human in the loop taking responsbility for final accuracy and output.

## Disclaimer and Terms of Use
### 1. No Medical or Legal Advice
The content on the Peds Coffee website, including all AI prompts, examples, and discussions, is provided for educational and informational purposes only. It is not intended as a substitute for professional medical, billing, or legal advice.

### 2. Clinical Responsibility and Verification
All prompts assume human in the loop taking responsbility for final accuracy and output.  The prompts are tools for documentation efficiency, not substitutes for clinical judgment. As the practicing clinician, you retain full and final responsibility for the accuracy and completeness of anything related to using these prompts if you decide to use them. Anything here is provided AS IS without any guarantee or promise of any functionality or usefulness. The goal is to give a starting place for you to learn and create from on your own.  Always read and verify the AI-generated output before finalizing anything. Follow terms of service for any AI scribe tools used.  These tools cannot account for every nuance of a patient encounter; you must ensure the final text accurately reflects your judgement.

### 3. HIPAA and Data Security
These prompts are designed to be used within a secure, HIPAA-compliant environment (e.g., your EMR’s built-in AI tool).  Do not share protected health information (PHI) from your EMR (Epic, Cerner, or others) with public or commercial large language models (LLMs) (e.g., ChatGPT, Gemini, etc.) for use with these prompts.  You must adhere to your organization’s policies regarding the use of AI tools in clinical care.  Ensure IT approval of any AI scribe, large language model, or any other piece of software prior to use.

## License
This project is open source under the [MIT License](LICENSE).

⭐ **Consider giving us a star on GitHub and sharing with others!**