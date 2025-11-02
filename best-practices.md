---
layout: page
title: Prompting Best Practices
description: Learn how to write effective medical prompts. Our definitive guide for physicians covers few-shot examples, brevity, and modular prompt design for EMRs.

<!-- MailerLite Universal -->
<script>
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1890984');
</script>
<!-- End MailerLite Universal -->
---
![AP Prompt Generator Banner](./images/Best_practices.jpg)
<style>
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

<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/haSZOP6fiFM?si=a7yZiRBuRdaB95Y9" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## The Big Three Insights

These are the core principles derived from real-world clinical use that lead to successful and effective prompts.

### 1. Few-Shot Examples Are Critical
* This is the most important element for prompt success.
* **Show, don’t tell.** Providing 3-5 examples of your desired output guides the AI much more effectively than complex instructions.

### 2. Brevity Improves Quality
* Shorter bullets and concise phrases are faster to scan and easier for a physician to approve.
* This results in less editing and a note that feels more human-written.

### 3. Separate Prompts for Separate Functions
* Have each prompt do one thing well (e.g., one for A/P, one for billing).
* Prompts can be used independently or chained together.
* This modular approach makes it much easier to refine, test, and iterate on each function.

---

## LLM Prompt Engineering Best Practices for EMR Scribes: A Definitive Guide to Using AI for Clinical Documentation   

The integration of Large Language Models (LLMs) into clinical workflows represents a potential transformative leap in efficiency.  Close to complete automation of notes is now possible. For physicians this technology promises to reclaim countless hours lost to administrative burden. However, the quality of the output is directly proportional to the quality of the prompt.  The current AI scribe products can only get so far.  Each clinician needs to next personalize the outputs to meet the exact needs and standards of their own practice setting to unlock the full benefits of these tools.

Developing prompts that generate usable, accurate, and safe clinical notes—ready for a physician's quick review and signature—requires a specialized understanding of prompt engineering. Based on real-world clinical application and extensive iteration, a core set of **"Big Three Insights"** has emerged as the foundation for achieving consistent, high-quality results.

This definitive guide breaks down these three critical principles, providing the deep, actionable detail necessary for medical professionals to create robust, production-ready LLM prompts for their electronic medical record (EMR) systems.

---

### 1. Few-Shot Examples Are Critical: Show, Don't Tell

The single most impactful finding in clinical prompt engineering is that **few-shot examples are critical** for success. This principle is the "secret sauce" that elevates prompt performance from good to great. Rather than relying on verbose, abstract instructions, LLM's thrive when given concrete examples of the desired final product.

#### The Philosophy of Modeling vs. Describing

LLMs excel at pattern recognition. The most effective approach is to leverage the LLM’s ability to emulate a style, structure, and tone. The **"show, don't tell"** method is superior. This concept can be understood through an analogy:

*It’s almost like a knitting pattern.  Abstractly describing the type of scarf you want is way more difficult than giving someone a pattern to follow...What’s even better than a pattern is handing them the scarf that you want to see and saying, 'Just make more of these.'*

By providing **three to five perfect examples** of a finished note section (e.g., an Assessment and Plan), you give the model a concrete blueprint. It uses these few-shot examples to infer the implicit rules of your desired output, such as:

* The required **clinical tone** (e.g., professional, direct, empathetic).
* The exact **structure** (e.g., bolding problem names, using nested bullet points, spacing).
* The **logic** for clinical reasoning and planning.

#### Few-Shot Examples in Action: Programming Logic

Few-shot examples become essential when programming complex, conditional logic into the prompt, such as medical decision-making (MDM) or billing code selection. Initial attempts to verbally explain complex coding rules failed consistently.

The solution was to abandon the attempt at complex explanations and use few-shot examples as the primary teaching mechanism. For instance, in E/M coding, instead of writing out how the two-of-three rule works, the prompt showed scenarios where the two-of-three rule was applied correctly.  By showing the model the **pattern** of the clinical situation, the MDM components, and the final coded outcome, the LLM learned the necessary logical connections for itself, dramatically increasing the tool's accuracy.

#### Optimizing Few-Shot Learning: The Six Variables

Few-shot examples are not a monolithic tool.  There are six key variables that can be modified to optimize few-shot performance. These adjustments are essential for fine-tuning prompts to handle the necessary clinical nuance and consistency.

| Variable | Description & Clinical Application |
| :--- | :--- |
| **1. Quantity** | The number of examples. Find the **"sweet spot"**: enough to capture all nuance and edge cases, but not so many that the model defaults to merely **copying** an example. |
| **2. Ordering** | The sequence of the examples. Simply rearranging the order of identical examples can fundamentally change the model's perceived pattern, impacting performance. |
| **3. Label Distribution** | The relative frequency of output types. If 9 out of 10 examples are for a "Well Child Check," the model may become **biased** and inappropriately apply that output to a "Sick Visit." The distribution should reflect reality or be intentionally biased if that is the goal. |
| **4. Quality** | The accuracy and correctness of the examples. The model **prioritizes the few-shot examples** over any conflicting explicit written instructions. An erroneous example will lead to learned and repeated inconsistency. |
| **5. Format** | The structural elements used to separate the input and output (e.g., using "Input:" and "Output:", or a simpler "Q:" and "A:"). Changing the format changes the fundamental pattern the model is learning, impacting performance. |
| **6. Similarity** | The relationship between the examples. Use **similar** examples to reinforce a specific pattern, or use very **different** ones to help the model learn the **chain of thought (COT)**—the logical transitions—required to move from one complex scenario to another. |

**Credit:** Sander Schulhoff's [Prompt Report](https://sanderschulhoff.com/Prompt_Survey_Site/) was the most practical resource I found on this topic, and is a great resource in general.

---

### 2. Brevity Improves Quality: Write for Scanability

The second principle is paramount for clinical utility: **brevity improves quality**. While LLMs can generate verbose prose, this is often to the detriment of the note’s function in a busy clinic. The primary goal of a clinical note—after safety and compliance—is **scanability**.

#### The "Pithy" vs. "Formal" A/P

The most effective A/P style is the **"pithy"** version, which mimics the concise notes a physician would manually type to save time. It features **short bullets, uses quick phrases, and minimizes complex sentences**.

* **Clinical Value:** It is "much more refreshing to use during an actual workday" because the physician can **scan it very quickly**. Quick scanning allows for a rapid check for **hallucinations**, confirmation that the plan is correct, and a swift signature.

The alternative, the **"formal"** note (verbose, highly structured), is generally **overkill** for general practice. Reviewing a wall of long-form text slows down the physician, decreasing the overall workflow efficiency.

---

### 3. Separate Prompts for Separate Tasks: The Power of Modular Design

The third core tenet is to embrace **modularity**: **separate prompts for separate functions**. This means creating a dedicated prompt for each unique documentation task (e.g., one for A/P, one for billing, one for the AVS to-do list).

#### The Problem with Conflation

The principle is simple: **it is very difficult to ask a Large Language Model to do two things at once.**

When an LLM is asked to perform two tasks simultaneously (e.g., write the Assessment and Plan *and* generate the After Visit Summary), the complexity does not simply add; it **multiplies**. The pattern the LLM needs to follow becomes infinitely more complex.

*"You're taking the pattern of the two tasks and you're multiplying them together. You’ll find that making a small change to one of the two tasks might break the other one or it might break the whole thing."*

While it is *possible* to combine tasks, it can make the output fragile.

#### The Benefits of Modular Prompts

A modular design provides three advantages for a clinical setting:

1.  **Ease of Iteration:** A single-function prompt is easier to debug.
2.  **Specialized Performance:** A prompt dedicated solely to **Assessment and Plan** will master that output. A prompt dedicated solely to **Billing Justification** will internalize coding logic. This specialization leads to more robust and accurate output.
3.  **Flexible Workflows:** Modular prompts can be used independently or chained together, providing flexibility across different types of patient visits.

---

### Helpful Supporting Best Practices

* **Prioritize the Task Statement:** Start your prompt with a clear, concise **task statement** to direct the LLM immediately to its objective.
* **Skip Role-Prompting:** Avoid the common technique of role-prompting ("Act as a board-certified...") as it often consumes context without practically improving the clinical output.
* **Use Specific Hooks for Boilerplate Text:** If you struggle to get conditional text (dot phrases) to fire reliably, try using the **ICD-10 code** itself as the hook, as many LLM tools are already processing or looking for these codes.
* **Formatting Rules Last:** The section of the prompt dedicated to explicit **formatting rules** is often the least important. The LLM will learn most of its formatting from the few-shot examples; only resort to explicit rules when an edge case is discovered.
* **Maintain Clinical Responsibility:** Recognize that the goal of the LLM is to be **accurate the vast majority of the time** (e.g., 90–95%). The physician must maintain responsibility for the final, signed note. View the LLM as an advanced, responsive draft generator.  Recognizing the limitations of LLMs allows us to get the more out of them.