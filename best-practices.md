---
layout: page
title: Prompt Engineering Best Practices
description: "Learn the three core principles of effective AI prompt engineering for clinical documentation: few-shot examples, brevity, and modular design."
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
    src="https://www.youtube-nocookie.com/embed/CmmU8azT6as?si=_cbEoEEsZtTJW-_c" 
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