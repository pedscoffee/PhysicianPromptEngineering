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
      Understand the core concepts of AI-assisted documentation in under two minutes.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      
      <!-- Core Concept -->
      <h2 class="mb-4">1. The Core Idea</h2>
      <p class="text-lg mb-6">
        Most AI scribes give you a generic "good enough" note. Our workflow adds one simple step to give you a <strong>perfect</strong> note every time.
      </p>

      <div class="card mb-8">
        <div class="card-body">
          <div class="grid grid-cols-1 grid-cols-3" style="text-align: center; align-items: center; gap: 20px;">
            
            <div style="padding: 1rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎤</div>
              <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.25rem;">1. AI Scribe</h3>
              <p class="text-sm text-secondary">Captures the transcript of your visit.</p>
            </div>

            <div style="font-size: 2rem; color: var(--color-text-secondary); display: flex; justify-content: center;">➜</div>

            <div style="padding: 1rem; background: var(--color-bg-secondary); border-radius: var(--radius-md); border: 2px solid var(--color-primary);">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✨</div>
              <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.25rem;">2. LLM Editor</h3>
              <p class="text-sm text-secondary">You paste the transcript + <strong>Your Custom Prompt</strong>.</p>
            </div>

            <div style="font-size: 2rem; color: var(--color-text-secondary); display: flex; justify-content: center;">➜</div>

            <div style="padding: 1rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📄</div>
              <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.25rem;">3. Perfect Note</h3>
              <p class="text-sm text-secondary">Formatted exactly how you like it.</p>
            </div>

          </div>
          <!-- Mobile fallback for grid if needed, but grid-cols-3 usually handles it with media queries in this simplified grid setup found in index.md. 
               However, index.md often uses grid-cols-1 grid-cols-3 which implies responsive behavior. 
               I'll adjust the arrows for mobile if the layout stacks, but for this quick implementation, I'll assume standard behavior. -->
        </div>
      </div>

      <!-- The Prompt -->
      <h2 class="mb-4">2. The "Specialty Agnostic" Prompt</h2>
      <p class="mb-4">
        This is a universal Assessment & Plan prompt that works for almost any specialty. It turns a messy transcript into a clean, problem-oriented list.
      </p>

      <div class="card mb-8">
        <div class="card-header bg-secondary">
          <h3 class="card-title" style="font-family: monospace;">Universal A/P Prompt</h3>
        </div>
        <div class="card-body" style="background: var(--color-bg-tertiary); padding: 0;">
<pre style="padding: 1.5rem; overflow-x: auto; margin: 0; white-space: pre-wrap;" id="prompt-code">
Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.

---

## Output Structure for Each Problem/Diagnosis

**[Problem/Diagnosis Name]**
- [A very brief bullet point summarizing a key finding, action, or follow-up plan]
- [Each point should be a separate bullet, written as a short clinical shorthand phrase]
</pre>
        </div>
      </div>

      <!-- Customization -->
      <h2 class="mb-4">3. Make It Yours</h2>
      <p class="mb-6">
        To make this prompt sound like <em>you</em>, just follow these three core principles:
      </p>

      <div class="grid grid-cols-1 grid-cols-3" style="gap: 20px;">
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">1. Examples > Instructions</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">Don't explain <em>how</em> to write the note. Just paste 3-5 examples of notes you've already written. The AI will mimic your style perfectly.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">2. Brevity = Quality</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">Ask for bullet points and short phrases. Long paragraphs hide hallucinations and are harder to review.</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title text-primary">3. One Prompt, One Purpose</h3>
          </div>
          <div class="card-body">
            <p class="text-sm">Don't try to do the whole chart in one go. Have one prompt for HPI, one for A/P. It's more reliable.</p>
          </div>
        </div>

      </div>

      <div class="text-center mt-12">
        <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Browse the Full Library</a>
      </div>

    </div>
  </div>
</section>
