---
layout: default
image: /images/workflow-diagram.png
description: Open-source clinical LLM prompts for physicians. Automate medical documentation, improve AI scribe output, and reduce burnout. Get started with our free prompt library.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    {%- include beta-notice.html -%}
    <h1 class="hero-title">Transform Your Clinical Documentation in Minutes</h1>
    <p class="hero-subtitle">
     Physician-tested AI prompts that convert AI scribe output into your exact documentation style—no manual editing required.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Explore Prompt Library</a>
      <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-outline btn-lg">Try Prompt Generator</a>
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
        <iframe
          src="https://www.youtube-nocookie.com/embed/-2ivdNTM7SY?si=ci0EitG8wKOxEp3e"
          title="Clinical AI Documentation Workflow"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">How It Works</h2>
    <div class="content-centered-wide">
      <img src="./images/workflow-diagram.png" alt="Workflow diagram" class="border-radius-lg shadow-lg" style="width: 100%; height: auto;">
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
<section class="section bg-gradient-primary text-shadow">
  <div class="container">
    <div style="text-align: center; max-width: 900px; margin: 0 auto;">
      <h2 style="color: white; font-size: var(--font-size-4xl); margin-bottom: var(--space-4);">Learn Prompt Engineering Through Practice</h2>
      <p style="font-size: var(--font-size-xl); opacity: 0.95; margin-bottom: var(--space-8);">
        Master AI-assisted clinical documentation with our <strong>interactive course</strong>. Write real prompts, get instant feedback from AI, and build skills through hands-on practice.
      </p>

      <div class="grid grid-cols-1 grid-cols-3" style="gap: 2rem; margin-bottom: 3rem; text-align: left;">
        <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: white;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Hands-On Exercises</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">14 interactive exercises with real clinical scenarios. Write prompts, see outputs, iterate until you master each concept.</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: white;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">AI-Powered Feedback</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">Get instant, specific feedback on your work. AI evaluates your prompts and suggests concrete improvements.</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <div style="margin-bottom: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: white;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Real Clinical Cases</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">Practice with de-identified patient scenarios across multiple specialties. Learn safety, quality, and best practices.</p>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.15); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem; backdrop-filter: blur(10px);">
        <h3 style="color: white; margin-bottom: 1rem; font-size: var(--font-size-xl);">Course Includes:</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; text-align: left;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>5 comprehensive modules (6 hours total)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Beginner to advanced techniques</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>10 clinical scenarios across specialties</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Build your personal prompt library</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Runs locally in your browser (Requires Chrome and a modern computer)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px; color: #10b981; flex-shrink: 0;">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Progress tracking & scoring</span>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-lg shadow-lg" style="background: white; color: var(--color-primary); font-weight: 700;">
          Start Free Interactive Course →
        </a>
        <p class="mt-4 text-sm" style="opacity: 0.9;">
          No sign up required • Complete at your own pace • Immediately practical
        </p>
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
{%- include newsletter.html -%}

<!-- FAQ Section with Progressive Disclosure -->
<section class="section">
  <div class="container">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 class="text-center mb-8">Frequently Asked Questions</h2>

      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <strong>What EMR systems are compatible?</strong>
        </div>
        <div class="accordion-content">
          <p>These prompts work with any EMR featuring AI text generation capabilities such as Epic's "Generate Text with AI".</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <strong>How much time can I realistically save?</strong>
        </div>
        <div class="accordion-content">
          <p>Physicians report saving 2-5 minutes per routine encounter and up to 15 minutes on complex visits. Results vary by specialty and documentation requirements.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <strong>Do I need programming experience?</strong>
        </div>
        <div class="accordion-content">
          <p>No technical expertise required. If you can copy and paste text, you can implement these prompts immediately.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <strong>Are these prompts specialty-specific?</strong>
        </div>
        <div class="accordion-content">
          <p>The core framework applies to all specialties. The library includes templates you can customize with specialty-specific examples for optimal results.</p>
        </div>
      </div>

      <div class="accordion-item">
        <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
          <strong>How do I ensure compliance and safety?</strong>
        </div>
        <div class="accordion-content">
          <p>Always use prompts within your institution's approved AI tools. Review all AI-generated content before signing. These prompts enhance efficiency while maintaining your clinical responsibility for accuracy.</p>
        </div>
      </div>

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
