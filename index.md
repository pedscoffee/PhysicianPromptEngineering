---
layout: default
image: /images/workflow-diagram.png
description: Free clinical AI prompts for physicians, organized by platform (Epic Art Memories, Epic Text Assistant, DAX). Shape AI scribe output to your documentation style.
redirect_from:
  - /cram-for-rounds/
  - /diagnosis-case-creator/
  - /differential-diagnosis-game/
  - /paper-librarian/
  - /ppe-ai/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Get Your Notes Done</h1>
    <p class="hero-subtitle">
     Clinical AI prompts that help adapt AI scribe output to your documentation style. Review every generated note before use.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Explore Prompt Library</a>
      <a href="{{ site.baseurl }}/quick-guide" class="btn btn-outline btn-lg">Busy? 2-Minute Quick Start</a>
    </div>
  </div>
</div>

<!-- Problem & Solution Section -->
<section class="section">
  <div class="container">
    <div class="content-centered">
      <h2>The Problem We Solve</h2>
      <p class="text-lg text-secondary">
        AI scribes capture the conversation well, but their default notes are written to satisfy everyone, so they rarely sound like you. A few well-built prompts, either instructions given to the scribe itself or an editor prompt run on its draft, close most of that gap.
      </p>
    </div>

    <!-- Video Demo -->
    <div class="content-centered-wide mt-8">
      <div class="video-container">
        {% include youtube-facade.html video_id="-2ivdNTM7SY" title="Clinical AI Documentation Workflow" %}
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">How It Works</h2>
    <div class="content-centered-wide">
      {% include workflow-diagram.html %}
      <p class="text-center mt-8 text-lg">
        Use the prompt features already in your tools, such as Epic Art Memories, Epic's in-chart text generation, or DAX custom instructions, to get more consistent notes that match your preferences.
      </p>
    </div>
  </div>
</section>

<!-- Chart with Art -->
<section class="section">
  <div class="container">
    <div class="card" style="max-width: 800px; margin: 0 auto; border: 2px solid var(--color-primary);">
      <div class="card-body" style="text-align: center; padding: var(--space-8);">
        <p class="text-sm text-secondary" style="text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-2);">Coming soon</p>
        <h2 class="mb-4">Charting with Epic Art and Memories</h2>
        <p class="text-lg text-secondary mb-6">A first-hand look at Epic's ambient scribe and its Memories, plus how they differ from the editor prompts in the library.</p>
        <div class="hero-cta">
          <a href="{{ site.baseurl }}/notes/" class="btn btn-primary">Read the Notes</a>
          <a href="{{ site.baseurl }}/prompt-library#platform-epic-art" class="btn btn-outline">Memories in the Library</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Three Essential Prompts - Card Grid -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Three Essential Clinical Prompts</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <!-- Card 1: A&P Formatting -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-primary">A&P</div>
          <h3 class="card-title">Assessment & Plan Formatting</h3>
        </div>
        <div class="card-body">
          <p>Converts verbose paragraphs into concise, problem-oriented documentation that matches your exact clinical style.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-sm btn-primary">View Prompt</a>
        </div>
      </div>

      <!-- Card 2: Billing Analysis -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-secondary">MDM</div>
          <h3 class="card-title">Medical Decision Making & Billing</h3>
        </div>
        <div class="card-body">
          <p>Walks through MDM complexity and suggests an E&M level with its reasoning, for you to verify.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-library#billing-analysis" class="btn btn-sm btn-secondary">View Prompt</a>
        </div>
      </div>

      <!-- Card 3: AVS Generation -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-accent">AVS</div>
          <h3 class="card-title">After-Visit Summaries</h3>
        </div>
        <div class="card-body">
          <p>Generates patient-friendly instructions and follow-up plans that improve comprehension and compliance.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-library#eta-after-visit-summary-avs-generation" class="btn btn-sm btn-accent">View Prompt</a>
        </div>
      </div>

    </div>

    <div class="text-center mt-8">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Access Full Prompt Library</a>
    </div>
  </div>
</section>

<!-- AI Scribe Best Practices Section -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered">
      <h2 class="mb-6">New to AI Scribes?</h2>
      <p class="text-lg text-secondary mb-6">
        If you are already using an AI scribe or just simply curious to find out more, start here. Learn essential best practices for getting accurate documentation, avoiding common errors, and building confidence with AI-generated notes.
      </p>
      <div class="card" style="max-width: 700px; margin: 0 auto;">
        <div class="card-body" style="text-align: center; padding: var(--space-6);">
          <h3 class="mb-4">AI Scribe Best Practices</h3>
          <p class="mb-6">
            Master the fundamentals: verbal consent, end-of-visit recaps, a staged learning approach to getting comfortable with a new way of doing things, and the "reviewer mindset" that ensures clinical accuracy.  
          </p>
          <a href="{{ site.baseurl }}/ai-scribe-best-practices" class="btn btn-primary btn-lg">
            Read AI Scribe Best Practices →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Core Principles - Card Grid -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Core Documentation Principles</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">1. Examples Drive Quality</h3>
        </div>
        <div class="card-body">
          <p>Providing 3-5 examples of your preferred output format produces superior results compared to lengthy instructions.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">2. Conciseness Improves Efficiency</h3>
        </div>
        <div class="card-body">
          <p>Brief, scannable notes reduce review time and minimize editing requirements for busy clinicians.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">3. Modular Design Ensures Reliability</h3>
        </div>
        <div class="card-body">
          <p>Dedicated prompts for specific tasks outperform multi-purpose solutions and reduce errors.</p>
        </div>
      </div>

    </div>

    <div class="text-center mt-8">
      <a href="{{ site.baseurl }}/best-practices" class="btn btn-outline btn-lg">Learn the Complete Methodology</a>
    </div>
  </div>
</section>

<!-- Interactive Course Feature -->
<section class="section" style="background: var(--gradient-success);">
  <div class="container">
    <div style="text-align: center; max-width: 900px; margin: 0 auto;">
      <h2 style="color: var(--color-success-text); font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">Learn Prompt Engineering Through Practice</h2>
      <p style="font-size: var(--font-size-xl); color: var(--color-success-text); margin-bottom: var(--space-8);">
        Master AI-assisted clinical documentation with our <strong>interactive course</strong>. Write real prompts, review AI output, and build skills through hands-on practice.
      </p>

      <div class="grid grid-cols-1 grid-cols-2" style="gap: 2rem; margin-bottom: 3rem; text-align: left;">
        <div style="background: var(--color-glass); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: var(--color-success);">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <h3 style="color: var(--color-success-text); font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Hands-On Exercises</h3>
          <p style="color: var(--color-success-text); font-size: 0.95rem;">4 modules, 12 exercises, ~4 hours. Write prompts, run them in your own AI assistant, and compare with example solutions.</p>
        </div>

        <div style="background: var(--color-glass); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: var(--color-success);">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <h3 style="color: var(--color-success-text); font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Clinical Cases</h3>
          <p style="color: var(--color-success-text); font-size: 0.95rem;">Practice with de-identified patient scenarios across multiple specialties. Learn safety, quality, and best practices.</p>
        </div>
      </div>

      <div class="text-center">
        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-lg shadow-lg" style="background: var(--color-success-solid); color: white; font-weight: 700; border: none;">
          Start Free Interactive Course →
        </a>
        <p class="mt-4 text-sm" style="color: var(--color-success-text); opacity: 0.9;">
          No sign up required • Complete at your own pace • Immediately practical
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Explore Tools Section -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Tools for Building Your Own Prompts</h2>
    <div class="grid grid-cols-1 grid-cols-3 mb-8">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="{{ site.baseurl }}/prompt-generator">Quick Start A&P Builder</a></h3>
          <p>Answer a few questions to assemble a structured Assessment &amp; Plan prompt.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="{{ site.baseurl }}/prompt-remix">Prompt Remix</a></h3>
          <p>Start from a library prompt and swap in your own examples and preferences.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="{{ site.baseurl }}/prompt-manager">Prompt Manager</a></h3>
          <p>Save and organize the prompts you use, right in your browser.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="{{ site.baseurl }}/dot-phrase-library">Dot Phrase Library</a></h3>
          <p>Smart phrases for common clinical scenarios, plus a builder for your own.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="https://www.noterepertoire.com/">Repertoire: Note Templates</a></h3>
          <p>Organize, assemble, and maintain reusable clinical note templates in an editable browser workspace. A separate project from the same creator.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><a href="{{ site.baseurl }}/prompt-style-guide/">A&amp;P Style Guide</a></h3>
          <p>See the same visit written in different A&amp;P styles to pick the one closest to yours.</p>
        </div>
      </div>
    </div>
    <p class="text-center text-sm text-secondary">
      Looking for the older productivity and visualization tools? They're on the <a href="{{ site.baseurl }}/legacy/">Legacy Side Projects</a> page.
    </p>
  </div>
</section>

<!-- Newsletter Signup -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-4">Get Occasional Updates</h2>
    <p class="text-center text-secondary mb-6">New prompts, Epic Art Memories, and write-ups, sent only when there's something worth sharing.</p>
    <div class="embed-container">
      {%- include newsletter.html -%}
    </div>
  </div>
</section>



<!-- Clinical Responsibility Notice -->
<section class="section bg-tertiary">
  <div class="container">
    <div class="content-centered notice-box notice-warning">
      <h3 class="text-warning mb-4">Clinical Responsibility Notice</h3>
      <p>
        These prompts are tools for documentation efficiency, not substitutes for clinical judgment. Healthcare providers retain full responsibility for reviewing and approving all AI-generated content before finalizing patient records. Always verify accuracy, completeness, and compliance with institutional policies. <a href="{{ site.baseurl }}/disclaimer">Review our disclaimer</a>.
      </p>
    </div>
  </div>
</section>

{% include recent-updates-bubble.html %}
