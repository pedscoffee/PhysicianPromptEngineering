---
layout: default
image: /images/workflow-diagram.png
description: Open-source clinical LLM prompts for physicians. Automate medical documentation, improve AI scribe output, and reduce burnout. Get started with our free prompt library.
---

<!-- Hero Section - Magazine Style -->
<div class="hero">
  <div class="container">
    {%- include beta-notice.html -%}

    <p class="hero-badge">Vol. 1, 2023 Edition • Your Clinical AI Companion</p>

    <div class="hero-divider"></div>

    <h1 class="hero-title">Transform Clinical Documentation with Physician-Tested AI Prompts</h1>

    <p class="hero-subtitle">
      A comprehensive library of production-ready prompts designed to reduce documentation burden and improve clinical efficiency. Built by physicians, for physicians.
    </p>

    <div class="hero-cta">
      <a href="{{ site.baseurl }}/prompt-library" class="btn btn-editorial btn-lg">Explore Prompt Library</a>
      <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-editorial-outline btn-lg">Start Learning</a>
    </div>
  </div>
</div>

<!-- Featured Article Section -->
<section class="section">
  <div class="container">
    <div class="featured-article">
      <span class="featured-label">Featured</span>
      <h2 class="featured-title">How AI-Powered Prompts Save Physicians 2-5 Minutes Per Patient</h2>
      <p class="featured-description">
        AI scribes capture conversations but produce generic, verbose notes that require extensive editing. Our solution: precision-engineered prompts that transform raw AI output into concise, personalized documentation matching your exact preferences.
      </p>
      <span class="featured-meta">Read time: 5 minutes</span>

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
  </div>
</section>

<!-- Statistics Bar -->
<section class="stats-bar">
  <div class="stat-item">
    <span class="stat-value">1,200+</span>
    <span class="stat-label">Physicians</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">342</span>
    <span class="stat-label">Prompts</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">15,000+</span>
    <span class="stat-label">Hours Saved</span>
  </div>
</section>

<!-- Three Column Article Grid - Essential Resources -->
<section class="section bg-secondary">
  <div class="container">
    <div class="editorial-content-wide">
      <h2 class="text-center mb-8">Essential Resources</h2>

      <div class="article-grid">
        <!-- Article 1 -->
        <a href="{{ site.baseurl }}/prompt-library" class="article-card">
          <div class="article-card-image" style="background: linear-gradient(135deg, #E6F0F7 0%, #0F4C81 100%);"></div>
          <div class="article-card-meta">Prompt Library</div>
          <h3 class="article-card-title">Essential Clinical Prompts</h3>
          <p class="article-card-description">
            Get started with our core templates for A&P formatting, billing analysis, and patient instructions.
          </p>
          <span class="read-more">Browse Library</span>
        </a>

        <!-- Article 2 -->
        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="article-card">
          <div class="article-card-image" style="background: linear-gradient(135deg, #FDECEA 0%, #E94B3C 100%);"></div>
          <div class="article-card-meta">Interactive Course</div>
          <h3 class="article-card-title">Master Prompt Engineering</h3>
          <p class="article-card-description">
            Learn advanced techniques through hands-on practice with real clinical scenarios and AI feedback.
          </p>
          <span class="read-more">Start Course</span>
        </a>

        <!-- Article 3 -->
        <a href="{{ site.baseurl }}/contribute" class="article-card">
          <div class="article-card-image" style="background: linear-gradient(135deg, #F0F2F5 0%, #2D6A4F 100%);"></div>
          <div class="article-card-meta">Community</div>
          <h3 class="article-card-title">Join & Contribute</h3>
          <p class="article-card-description">
            Share your prompts, join discussions, and help build the future of clinical AI documentation.
          </p>
          <span class="read-more">Get Involved</span>
        </a>
      </div>
    </div>
  </div>
</section>

<hr class="section-divider">

<!-- Departments Section - Magazine Navigation -->
<section class="section">
  <div class="container">
    <div class="editorial-content-wide">
      <div class="department-section">
        <h3 class="department-title">Departments</h3>

        <a href="{{ site.baseurl }}/prompt-generator" class="department-link">
          <strong>Documentation Tools</strong>
          <div class="department-meta">A&P Formatter • E&M Calculator • RVU Tracker • Snippet Manager</div>
        </a>

        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="department-link">
          <strong>Educational Resources</strong>
          <div class="department-meta">Interactive Course • Best Practices • Case Studies</div>
        </a>

        <a href="{{ site.baseurl }}/ppe-ai" class="department-link">
          <strong>Doc Pixel AI Suite</strong>
          <div class="department-meta">Diagnosis Challenge • Research Assistant • Study Tools</div>
        </a>

        <a href="{{ site.baseurl }}/contribute" class="department-link">
          <strong>Community Hub</strong>
          <div class="department-meta">Discussions • Contributors • Success Stories</div>
        </a>
      </div>
    </div>
  </div>
</section>

<hr class="section-divider">

<!-- Core Prompts Section -->
<section class="section bg-secondary">
  <div class="container">
    <div class="editorial-content-wide">
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
    </div>
  </div>
</section>

<!-- Pull Quote -->
<section class="section">
  <div class="container">
    <div class="editorial-content">
      <div class="pull-quote">
        <p class="pull-quote-text">
          "These prompts have transformed my documentation workflow. I'm saving an hour per day and spending more time with patients."
        </p>
        <p class="pull-quote-attribution">— Dr. Sarah Chen, Family Medicine</p>
      </div>
    </div>
  </div>
</section>

<!-- Info Box - Getting Started -->
<section class="section bg-secondary">
  <div class="container">
    <div class="editorial-content-wide">
      <div class="info-box">
        <h3 class="info-box-title">New to Prompt Engineering?</h3>
        <div class="info-box-content">
          <p>Begin with our comprehensive guide to AI-assisted clinical documentation. Learn the fundamentals in 30 minutes and start implementing prompts immediately.</p>
          <p style="margin-top: var(--space-4);">
            <a href="{{ site.baseurl }}/best-practices" class="btn btn-editorial-outline">Read the Guide</a>
          </p>
        </div>
      </div>
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
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Hands-On Exercises</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">14 interactive exercises with real clinical scenarios. Write prompts, see outputs, iterate until you master each concept.</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">AI-Powered Feedback</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">Get instant, specific feedback on your work. AI evaluates your prompts and suggests concrete improvements.</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
          <h3 style="color: white; font-size: var(--font-size-lg); margin-bottom: 0.5rem;">Real Clinical Cases</h3>
          <p style="opacity: 0.9; font-size: 0.95rem;">Practice with de-identified patient scenarios across multiple specialties. Learn safety, quality, and best practices.</p>
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

<hr class="section-divider">

<!-- Newsletter Signup -->
{%- include newsletter.html -%}

<hr class="section-divider">

<!-- Clinical Responsibility Notice -->
<section class="section">
  <div class="container">
    <div class="editorial-content">
      <div class="notice-box notice-warning">
        <h3 class="text-warning mb-4">Clinical Responsibility Notice</h3>
        <p>
          These prompts are tools for documentation efficiency, not substitutes for clinical judgment. Healthcare providers retain full responsibility for reviewing and approving all AI-generated content before finalizing patient records. Always verify accuracy, completeness, and compliance with institutional policies.
        </p>
        <p style="margin-top: var(--space-4);">
          <a href="{{ site.baseurl }}/disclaimer" class="read-more">Review Full Disclaimer</a>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Footer CTA -->
<section class="section bg-secondary">
  <div class="container text-center">
    <div class="editorial-content">
      <h2 class="mb-6">Ready to Transform Your Documentation?</h2>
      <p class="text-lg text-secondary mb-8">
        Join over 1,200 physicians using AI-powered prompts to reduce documentation burden and reclaim time for patient care.
      </p>
      <div class="hero-cta">
        <a href="{{ site.baseurl }}/prompt-library" class="btn btn-editorial btn-lg">Get Started with Free Prompts</a>
        <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="btn btn-editorial-outline btn-lg" target="_blank">Star us on GitHub</a>
      </div>
      <p class="text-sm text-secondary mt-6">
        Open source under the MIT License. Free to use, modify, and share.
      </p>
    </div>
  </div>
</section>
