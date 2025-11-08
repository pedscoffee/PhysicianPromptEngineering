---
layout: default
image: /images/workflow-diagram.png
description: Open-source clinical LLM prompts for physicians. Automate medical documentation, improve AI scribe output, and reduce burnout. Get started with our free prompt library.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Transform Your Clinical Documentation in Minutes</h1>
    <p class="hero-subtitle">
      Save 2-5 minutes per patient encounter with physician-tested AI prompts that convert AI scribe output into your exact documentation style—no manual editing required.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Explore Prompt Library</a>
      <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-outline btn-lg">Try Prompt Generator</a>
    </div>
  </div>
</div>

<!-- Problem & Solution Section -->
<section class="section">
  <div class="container">
    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
      <h2>The Problem We Solve</h2>
      <p class="text-lg text-secondary">
        AI scribes capture conversations but produce generic, verbose notes that require extensive editing. Our solution: <strong class="text-primary">precision-engineered prompts</strong> that transform raw AI output into concise, personalized documentation matching your exact preferences.
      </p>
    </div>

    <!-- Video Demo -->
    <div style="max-width: 900px; margin: 3rem auto;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl);">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
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
    <div style="max-width: 900px; margin: 0 auto;">
      <img src="./images/workflow-diagram.png" alt="Workflow diagram" style="width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
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
        <div class="card-icon card-icon-primary">📋</div>
        <div class="card-header">
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
        <div class="card-icon card-icon-secondary">💰</div>
        <div class="card-header">
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
        <div class="card-icon card-icon-accent">📄</div>
        <div class="card-header">
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
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Access Full Prompt Library →</a>
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
      <a href="{{ site.baseurl }}/best-practices" class="btn btn-outline btn-lg">Learn the Complete Methodology →</a>
    </div>
  </div>
</section>

<!-- Getting Started Section -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Getting Started</h2>

      <div class="grid grid-cols-1 grid-cols-2" style="margin-bottom: 3rem;">

        <div>
          <h3>Requirements</h3>
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
      <div style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-accent-light) 100%); padding: 2rem; border-radius: var(--radius-lg); border-left: 4px solid var(--color-primary); margin-top: 2rem;">
        <h3 style="color: var(--color-primary); font-size: var(--font-size-xl); margin-bottom: var(--space-4); text-align: center;">Share Your Prompt</h3>
        <p style="text-align: center; margin-bottom: var(--space-4);">
          Refined a prompt that consistently delivers quality output? Consider sharing it on the contributions page. Your tested solution could save colleagues hours of iteration and help build a stronger resource for the entire clinical community.
        </p>
        <div style="text-align: center;">
          <a href="{{ site.baseurl }}/contributions" class="btn btn-primary">Contribute Your Prompt →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter Signup -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-6">Stay Updated</h2>
    <p class="text-center text-secondary mb-6">Get the latest prompts, techniques, and AI documentation strategies.</p>
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

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
          <p>These prompts work with any EMR featuring AI text generation capabilities. Confirmed compatible systems include Epic's "Generate Text with AI," Cerner, and similar platforms with LLM integration.</p>
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
    <div style="max-width: 800px; margin: 0 auto; padding: var(--space-6); background: var(--color-bg-primary); border-radius: var(--radius-lg); border: 2px solid var(--color-warning);">
      <h3 style="color: var(--color-warning); margin-bottom: var(--space-4);">⚠️ Clinical Responsibility Notice</h3>
      <p>
        These prompts are tools for documentation efficiency, not substitutes for clinical judgment. Healthcare providers retain full responsibility for reviewing and approving all AI-generated content before finalizing patient records. Always verify accuracy, completeness, and compliance with institutional policies.
      </p>
    </div>
  </div>
</section>

<!-- Footer CTA -->
<section class="section">
  <div class="container text-center">
    <h2 class="mb-6">Ready to Transform Your Documentation?</h2>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Get Started with Free Prompts</a>
      <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="btn btn-outline btn-lg" target="_blank">Star us on GitHub ⭐</a>
    </div>
    <p class="text-sm text-secondary mt-6">
      Open source under the MIT License. Free to use, modify, and share.
    </p>
  </div>
</section>
