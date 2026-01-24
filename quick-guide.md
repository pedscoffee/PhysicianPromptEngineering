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
      Get your time back by making it yours.
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

<div style="position: relative; margin-bottom: 2rem;">
  <button onclick="copyQuickPrompt(this)" style="position: absolute; top: 1rem; right: 1rem; padding: 0.5rem 1rem; background: white; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 0.9em; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; box-shadow: var(--shadow-sm); z-index: 10; color: var(--color-text-primary); transition: all 0.2s;">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg>
    Copy
  </button>
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

[⚠️ Add 3-5 examples of what would be an ideal A&P.  Do not use real patient data. These greatly help the output match your voice and preferences. See library for fully worked examples.]
</pre>
</div>

<script>
function copyQuickPrompt(btn) {
  const code = document.getElementById('prompt-code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<span>✓ Copied!</span>';
    btn.style.color = 'var(--color-primary)';
    btn.style.borderColor = 'var(--color-primary)';
    
    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
}
</script>

      <!-- Customization -->
      <h2 class="mb-4">3. Make It Yours</h2>

      <div class="grid grid-cols-1 grid-cols-3" style="gap: 20px;">
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Add Your Dot Phrases</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">You already worked hard to figure out exactly what you like to say, and now we can make it automatic.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Add Examples</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">Give it a pattern to follow to make it look just right. Start with three and adjust as needed.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">Brainstorm</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">What do you really want to see?  Previously our note writing habits were forced to be focused on what could be done quickly, but this is no longer the case.  What would make the note most useful to you?  If you can describe it, then you can build it.</p>
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
