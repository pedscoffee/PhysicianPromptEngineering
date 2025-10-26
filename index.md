---
layout: home
---

<style>
  .hero-banner {
    width: 100%;
    height: 300px;
    background-image: url('https://images.unsplash.com/photo-1576091160550-2173dba999NI?auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
    margin-bottom: 2rem;
  }
  .hero-banner h1 {
    color: white;
    font-size: 3rem;
    margin: 0;
  }
  .hero-banner p {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin-bottom: 1.5rem;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="hero-banner">
  <h1>Physician Prompt Engineering</h1>
  <p>An open-source initiative to improve clinical documentation with practical AI.</p>
</div>

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