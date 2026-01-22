---
layout: default
title: 2 Minute Guide
description: The essential guide to Physician Prompt Engineering for busy clinicians. Learn the core workflow and get started in 2 minutes.
permalink: /quick-guide/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">The 2 Minute Guide</h1>
    <p class="hero-subtitle">
      We know you're busy. This is a game changer.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      
      <!-- Core Concept -->
      <h2 class="mb-4">1. The Core Idea</h2>
      <p class="text-lg mb-6">
        Most AI scribes give you a generic "good enough" note. Our workflow adds one simple step to <strong>make it yours.</strong>
      </p>

      <div class="card mb-8">
        <div class="card-body">
          {% include workflow-diagram.html %}
        </div>
      </div>

      <!-- The Prompt -->
      <h2 class="mb-4">2. The "Editor" Prompt</h2>
      <p class="mb-4">
        This prompt is a starting point to take your AI scribe tool's output and transform it with a large language model into your exact documentation style.
      </p>

<pre style="padding: 1.5rem; overflow-x: auto; margin: 0; white-space: pre-wrap; background: var(--color-bg-tertiary); border-radius: var(--radius-md);" id="prompt-code">
Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.

---

## Output Structure for Each Problem/Diagnosis

**Problem/Diagnosis Name**
- Action items or plans

Each point should be a separate line

## Conditional Boilerplate Text

[⚠️ Add your best dot phrases here.]

If trigger discussed:
*"Dot phrase goes here"*

---

## Formatting Rules

1. Include only the diagnosis/problem name. Do not include assessment details.
2. Format plan as bullet list.
3. Bold all problem/diagnosis names using **Problem Name** format.
4. Use - for all bullets with 0-space indentation.
5. Write all bullet points in extremely brief, professional shorthand phrases.
6. Keep bullets concise (ideally under 10 words per bullet).
7. Use standard medical abbreviations (RTC, PRN, BID, etc.).
8. Never fabricate or infer information not present in the source text.
9. Insert a blank line between problems when multiple diagnoses exist.
10. No references.

---

## Few-Shot Examples

[⚠️ Add 3-5 examples of what would be an ideal A&P.  Do not use real patient data. These greatly help the output match your voice and preferences.]
</pre>

      <!-- Customization -->
      <h2 class="mb-4">3. Make It Yours</h2>

      <div class="grid grid-cols-1 grid-cols-3" style="gap: 20px;">
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Add Dot Phrases</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">You already worked hard to figure out exactly what you like to say, let's make it automatic.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Add Examples</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">Give it a pattern to follow to make it look just right.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Brainstorm</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">What would be truly ideal for your practice?  Previously our habits were limited by our speed, but no longer.  What would make the note most useful?</p>
          </div>
        </div>

      </div>

      <div class="card bg-secondary mt-12">
        <div class="card-body text-center">
          <h2 class="mb-4">Ready to Build Your Own?</h2>
          <p class="text-lg mb-6">
            The "Quick Start A&P Builder" writes the prompt for you.  Just click on your preferences and add your most common dot phrases and you'll have a great customized prompt to get you started.
          </p>
          <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-primary btn-lg">Launch A&P Builder</a>
        </div>
      </div>

    </div>
  </div>
</section>
