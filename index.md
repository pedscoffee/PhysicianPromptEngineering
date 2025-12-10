---
layout: default
image: /images/workflow-diagram.png
description: Open-source clinical LLM prompts for physicians. Automate medical documentation, improve AI scribe output, and reduce burnout. Get started with our free prompt library.
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
    <h1 class="hero-title">Master AI Clinical Documentation</h1>
    <p class="hero-subtitle">
     Physician-tested prompts and tools that transform AI scribe output into your exact documentation style—no manual editing required.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/get-started" class="btn btn-outline btn-lg">Get Started in 5 Minutes</a>
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Browse Prompt Library</a>
    </div>
  </div>
</div>

<!-- Problem & Solution Section -->
<section class="section">
  <div class="container">
    <div class="content-centered">
      <h2>The Problem We Solve</h2>
      <p class="text-lg text-secondary">
        AI scribes capture conversations but produce generic, verbose notes that require extensive editing. Our solution: <strong class="text-primary">precision-engineered prompts</strong> that transform raw AI output into concise, personalized documentation matching your exact preferences.
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
        Use your EMR's built-in AI features (like Epic's "Generate Text with AI") with our specialized prompts to achieve fully automated, preference-matched documentation.
      </p>
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
          <a href="{{ site.baseurl }}/prompt-library#ap-formatting" class="btn btn-sm btn-primary">View Prompt</a>
        </div>
      </div>

      <!-- Card 2: Billing Analysis -->
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-secondary">MDM</div>
          <h3 class="card-title">Medical Decision Making & Billing</h3>
        </div>
        <div class="card-body">
          <p>Analyzes clinical complexity and suggests appropriate CPT codes with supporting documentation automatically.</p>
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
          <a href="{{ site.baseurl }}/prompt-library#avs-generation" class="btn btn-sm btn-accent">View Prompt</a>
        </div>
      </div>

    </div>

    <div class="text-center mt-8">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Access Full Prompt Library</a>
    </div>
  </div>
</section>

<!-- Core Principles - Card Grid -->
<section class="section bg-secondary">
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
<!-- Interactive Course Feature -->
<section class="section" style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);">
  <div class="container">
    <div style="text-align: center; max-width: 900px; margin: 0 auto;">
      <h2 style="color: #065f46; font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">Learn Prompt Engineering Through Practice</h2>
      <p style="font-size: var(--font-size-xl); color: #047857; margin-bottom: var(--space-8);">
        Master AI-assisted clinical documentation with our <strong>interactive course</strong>. Write real prompts, get instant feedback from AI, and build skills through hands-on practice.
      </p>

      <div class="grid grid-cols-1 grid-cols-2" style="gap: 2rem; margin-bottom: 3rem; text-align: left;">
        <div style="background: rgba(255, 255, 255, 0.6); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: #059669;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <h3 style="color: #065f46; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Hands-On Exercises</h3>
          <p style="color: #064e3b; font-size: 0.95rem;">4 modules, 12 exercises, ~30 minutes. Write prompts, see outputs, iterate until you master each concept.</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.6); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: #059669;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <h3 style="color: #065f46; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Clinical Cases</h3>
          <p style="color: #064e3b; font-size: 0.95rem;">Practice with de-identified patient scenarios across multiple specialties. Learn safety, quality, and best practices.</p>
        </div>
      </div>

      <div class="text-center">
        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-lg shadow-lg" style="background: #059669; color: white; font-weight: 700; border: none;">
          Start Free Interactive Course →
        </a>
        <p class="mt-4 text-sm" style="color: #065f46; opacity: 0.9;">
          No sign up required • Complete at your own pace • Immediately practical
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Core Documentation Resources -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Core Documentation Resources</h2>
    
    <div class="grid grid-cols-1 grid-cols-3 mb-8">
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-primary">📚</div>
          <h3 class="card-title">Prompt Library</h3>
        </div>
        <div class="card-body">
          <p>Production-ready prompts for A&P formatting, billing documentation, patient instructions, and more.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-library" class="btn btn-sm btn-primary">Browse Library</a>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-secondary">🎯</div>
          <h3 class="card-title">Best Practices</h3>
        </div>
        <div class="card-body">
          <p>Learn the three core principles of effective prompt engineering for clinical documentation.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/best-practices" class="btn btn-sm btn-secondary">Learn Methodology</a>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-accent">🎓</div>
          <h3 class="card-title">Interactive Course</h3>
        </div>
        <div class="card-body">
          <p>Hands-on exercises with real clinical scenarios and instant AI feedback. Master prompt engineering through practice.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-sm btn-accent">Start Course</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Documentation Tools -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">Documentation Tools</h2>
    <div class="grid grid-cols-1 grid-cols-3 mb-8">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/prompt-manager">Prompt Manager</a></h4>
          <p>Save, organize, and quickly access your favorite prompts.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/prompt-remix">Prompt Remix</a></h4>
          <p>Start from a proven prompt, make it yours. Customize any library prompt with your own examples and preferences.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/prompt-assistant">AI Prompt Assistant</a></h4>
          <p>Get AI help to write or improve your custom prompts.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/prompt-generator">Quick Start A&P Builder</a></h4>
          <p>Rapidly build a structured Assessment & Plan prompt.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/dot-phrase-library">Dot Phrase Library</a></h4>
          <p>A collection of smart phrases for common clinical scenarios.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title"><a href="{{ site.baseurl }}/git-master">Git Tutor</a></h4>
          <p>Master version control for clinical tools and AI prompts.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started Section -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Getting Started</h2>

      <div class="two-col-grid">

        <div>
          <h3>Building Blocks</h3>
          <ul>
            <li>EMR with integrated AI text generation (Epic, Cerner, or equivalent)</li>
            <li>Institutional approval for AI documentation tools</li>
            <li>HIPAA-compliant AI scribe service (optional but recommended)</li>
          </ul>
        </div>

        <div>
          <h3>Implementation Steps</h3>
          <ol>
            <li>Copy relevant prompts from our library</li>
            <li>Customize examples to match your specialty</li>
            <li>Test with routine encounters first</li>
            <li>Scale to complex cases as confidence builds</li>
          </ol>
        </div>

      </div>

      <!-- Share Your Prompt CTA -->
      {%- include share-prompt-cta.html -%}
    </div>
  </div>
</section>

<!-- Newsletter Signup -->
<section class="section">
  <div class="container">
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

<!-- Footer CTA -->
<section class="section">
  <div class="container text-center">
    <h2 class="mb-6">Ready to Transform Your Documentation?</h2>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Get Started with Free Prompts</a>
      <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="btn btn-outline btn-lg" target="_blank">Star us on GitHub</a>
    </div>
    <p class="text-sm text-secondary mt-6">
      Open source under the MIT License. Free to use, modify, and share.
    </p>
  </div>
</section>
