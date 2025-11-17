---
layout: default
title: Prompt Library
description: Access a free library of production-ready clinical LLM prompts. Copy and paste prompts for A&P formatting, billing analysis, AVS generation, and more.
---

<style>
  .prompt-code-wrapper {
    position: relative;
    margin-top: var(--space-4);
  }
  .prompt-code-wrapper pre {
    background-color: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    padding: var(--space-4);
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 400px;
    overflow-y: auto;
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-family: var(--font-family-mono);
  }
  .prompt-actions {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
  }
  .prompt-meta {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    margin-bottom: var(--space-4);
  }
  .prompt-meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    font-family: var(--font-family-ui);
  }
  .database-header {
    border-bottom: 2px solid var(--color-text-primary);
    padding-bottom: var(--space-4);
    margin-bottom: var(--space-8);
  }
  .database-title {
    font-family: var(--font-family-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
  }
  .database-subtitle {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    line-height: 1.7;
  }
  .filter-bar {
    background-color: var(--color-bg-secondary);
    padding: var(--space-5);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-8);
  }
  .filter-label {
    font-family: var(--font-family-ui);
    font-size: var(--font-size-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-2);
  }
  .prompt-entry {
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-6) 0;
  }
  .prompt-entry:last-child {
    border-bottom: none;
  }
  .prompt-number {
    font-family: var(--font-family-ui);
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .prompt-title {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: var(--space-2) 0;
    line-height: 1.3;
  }
  .prompt-description {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--space-4);
  }
  @media screen and (max-width: 640px) {
    .prompt-actions {
      flex-direction: column;
    }
    .prompt-actions .btn {
      width: 100%;
    }
  }
</style>

<!-- Database Header -->
<div class="section">
  <div class="container">
    <div class="editorial-content-wide">
      <div class="database-header">
        <p class="hero-badge" style="text-align: left; margin-bottom: var(--space-4);">Clinical Prompt Database</p>
        <h1 class="database-title">Production-Ready Clinical Prompts</h1>
        <p class="database-subtitle">
          A comprehensive, peer-reviewed collection of AI prompts designed by physicians for clinical documentation. Each prompt is tested in real-world workflows and optimized for accuracy, efficiency, and ease of use.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Filter and Sort Bar -->
<section class="section" style="padding-top: 0;">
  <div class="container">
    <div class="editorial-content-wide">
      <div class="filter-bar">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-4);">
          <div>
            <label class="filter-label">Search</label>
            <input type="text" id="prompt-search" placeholder="Search prompts..." style="width: 100%; padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: var(--font-family-ui);">
          </div>
          <div>
            <label class="filter-label">Filter by Specialty</label>
            <select style="width: 100%; padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: var(--font-family-ui);">
              <option>All Specialties</option>
              <option>General Medicine</option>
              <option>Internal Medicine</option>
              <option>Emergency Medicine</option>
              <option>Pediatrics</option>
            </select>
          </div>
          <div>
            <label class="filter-label">Sort By</label>
            <select style="width: 100%; padding: var(--space-2); border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-family: var(--font-family-ui);">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-tertiary); font-family: var(--font-family-ui);">
          Showing all prompts • Visit our <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="text-primary">GitHub repository</a> for the complete collection
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter Subscription -->
<section class="section" style="padding-top: 0;">
  <div class="container">
    <div class="editorial-content-wide">
      <div class="info-box">
        <h3 class="info-box-title">Stay Updated</h3>
        <div class="info-box-content">
          <p style="margin-bottom: var(--space-4);">Subscribe to receive notifications when new prompts are added to the library.</p>
          <div class="embed-container" style="margin: 0;">
            <iframe src="https://pedscoffee.substack.com/embed" width="480" height="150" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Prompts Database -->
<section class="section">
  <div class="container">
    <div class="editorial-content-wide">

      {% assign sorted_prompts = site.prompts | sort: "order" %}
      {% for prompt in sorted_prompts %}
      <div class="prompt-entry" id="{{ prompt.title | slugify }}">
        <p class="prompt-number">Entry {{ prompt.order }}</p>
        <h2 class="prompt-title">{{ prompt.title }}</h2>
        <p class="prompt-description">{{ prompt.description }}</p>

        <div class="prompt-meta">
          <div class="prompt-meta-item">
            <strong>Specialty:</strong> {{ prompt.specialty }}
          </div>
          <div class="prompt-meta-item">
            <strong>Updated:</strong> Nov 2023
          </div>
          <div class="prompt-meta-item">
            <strong>Length:</strong> {{ prompt.char_count }} / 5,000 characters
          </div>
        </div>

        <div class="prompt-actions">
          <button class="btn btn-editorial btn-sm" onclick="copyToClipboard(this)">Copy Prompt</button>
          <button class="btn btn-editorial-outline btn-sm" onclick="downloadPrompt(this)">Download .txt</button>
        </div>

        <div class="prompt-code-wrapper">
          <pre><code>{{ prompt.content | escape }}</code></pre>
        </div>
      </div>
      {% endfor %}

      <!-- Sample prompt for demonstration if collection is empty -->
      {% if site.prompts.size == 0 %}
      <div class="prompt-entry" id="sample-prompt">
        <p class="prompt-number">Entry 1</p>
        <h2 class="prompt-title">Assessment & Plan Formatter</h2>
        <p class="prompt-description">Transforms verbose AI scribe output into concise, problem-based documentation. Designed for general medicine workflows but adaptable to all specialties.</p>

        <div class="prompt-meta">
          <div class="prompt-meta-item">
            <strong>Specialty:</strong> General Medicine
          </div>
          <div class="prompt-meta-item">
            <strong>Updated:</strong> Nov 2023
          </div>
          <div class="prompt-meta-item">
            <strong>Length:</strong> 850 / 5,000 characters
          </div>
        </div>

        <div class="prompt-actions">
          <button class="btn btn-editorial btn-sm" onclick="copyToClipboard(this)">Copy Prompt</button>
          <button class="btn btn-editorial-outline btn-sm" onclick="downloadPrompt(this)">Download .txt</button>
        </div>

        <div class="prompt-code-wrapper">
          <pre><code>Transform the following clinical note into a concise Assessment & Plan format.

Requirements:
- List each problem as a numbered item with bold heading
- Include only essential clinical details
- Use bullet points for plans
- Maximum 2-3 sentences per problem
- Preserve all medications and specific instructions

Example format:
1. **Hypertension** - Controlled on current regimen
   • Continue lisinopril 10mg daily
   • Recheck BP in 3 months

2. **Type 2 Diabetes** - A1c 7.2%, at goal
   • Continue metformin 1000mg BID
   • Annual eye exam due

[Insert your clinical note here]</code></pre>
        </div>
      </div>
      {% endif %}

    </div>
  </div>
</section>

<hr class="section-divider">

<!-- Disclaimer -->
<section class="section bg-secondary">
  <div class="container">
    <div class="editorial-content">
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); text-align: center; line-height: 1.7;">
        All prompts are provided for educational purposes. Healthcare providers retain full responsibility for reviewing AI-generated content before finalizing documentation. See our <a href="{{ site.baseurl }}/disclaimer" class="text-primary">full disclaimer</a>.
      </p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container text-center">
    <div class="editorial-content">
      <h2 class="mb-6">Contribute to the Library</h2>
      <p class="text-lg text-secondary mb-8">
        Help the community by sharing your tested prompts. Your contribution could save thousands of hours for fellow physicians.
      </p>
      <div class="hero-cta">
        <a href="{{ site.baseurl }}/contribute" class="btn btn-editorial btn-lg">Share Your Prompt</a>
        <a href="{{ site.baseurl }}/best-practices" class="btn btn-editorial-outline btn-lg">Learn Best Practices</a>
      </div>
    </div>
  </div>
</section>

<script>
function copyToClipboard(button) {
  const entry = button.closest('.prompt-entry');
  const code = entry.querySelector('.prompt-code-wrapper code');
  const text = code.innerText;

  navigator.clipboard.writeText(text).then(function() {
    const originalText = button.innerText;
    button.innerText = 'Copied!';
    button.style.backgroundColor = 'var(--color-success)';
    setTimeout(function() {
      button.innerText = originalText;
      button.style.backgroundColor = '';
    }, 2000);
  }, function(err) {
    button.innerText = 'Failed';
    console.error('Could not copy text: ', err);
  });
}

function downloadPrompt(button) {
  const entry = button.closest('.prompt-entry');
  const code = entry.querySelector('.prompt-code-wrapper code');
  const text = code.innerText;

  const title = entry.querySelector('.prompt-title').innerText;
  const filename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';

  const blob = new Blob([text], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);

  const originalText = button.innerText;
  button.innerText = 'Downloaded!';
  setTimeout(function() {
    button.innerText = originalText;
  }, 2000);
}
</script>
