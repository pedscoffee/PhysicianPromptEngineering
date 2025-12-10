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

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical Documentation Prompt Library</h1>
    <p class="hero-subtitle">
      Production-ready prompts for AI-powered clinical documentation. Copy, customize, and deploy.
    </p>
  </div>
</div>

<!-- Quick Navigation -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">Browse Prompts</h2>
      <div style="background: var(--color-bg-primary); padding: var(--space-5); border-radius: var(--radius-lg);">
        <ul style="columns: 2; column-gap: var(--space-6); list-style: none; padding: 0; margin: 0;">
          {% assign sorted_prompts = site.prompts | sort: "order" %}
          {% for prompt in sorted_prompts %}
          <li style="margin-bottom: var(--space-2); break-inside: avoid;">
            <a href="#{{ prompt.title | slugify }}" class="text-primary">{{ prompt.order }}. {{ prompt.title }}</a>
          </li>
          {% endfor %}
        </ul>
      </div>
      <div class="text-center mt-6">
        <p class="text-secondary">
          Visit our <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="text-primary">GitHub repository</a> for the complete collection or <a href="{{ site.baseurl }}/support#contribute" class="text-primary">contribute your own</a>.  See <a href="{{ site.baseurl }}/disclaimer">Disclaimer.</a>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section">
  <div class="container">

    <div class="embed-container">
      {% include newsletter.html %}
    </div>
  </div>
</section>

<!-- Prompts -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">

      {% assign sorted_prompts = site.prompts | sort: "order" %}
      {% for prompt in sorted_prompts %}
      <div class="card mb-8" id="{{ prompt.title | slugify }}">
        <div class="card-header">
          <h2 class="card-title">{{ prompt.title }}</h2>
          <p class="card-subtitle">{{ prompt.description }}</p>
        </div>
        <div class="card-body">
          <div class="prompt-meta">
            <div class="prompt-meta-item">
              <strong>Specialty:</strong> {{ prompt.specialty }}
            </div>
            <div class="prompt-meta-item">
              <strong>Character Count:</strong> {{ prompt.char_count }} / 5,000
            </div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyToClipboard(this)">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt(this)">Download .txt</button>
          </div>

          <div class="prompt-code-wrapper">
            <pre><code>{{ prompt.content | escape }}</code></pre>
          </div>
        </div>
      </div>
      {% endfor %}

      <!-- Sample prompt for demonstration if collection is empty -->
      {% if site.prompts.size == 0 %}
      <div class="card" id="sample-prompt">
        <div class="card-header">
          <h2 class="card-title">Assessment & Plan Formatter (Sample)</h2>
          <p class="card-subtitle">Transforms verbose AI scribe output into concise, problem-based documentation</p>
        </div>
        <div class="card-body">
          <div class="prompt-meta">
            <div class="prompt-meta-item">
              <strong>Specialty:</strong> General Medicine
            </div>
            <div class="prompt-meta-item">
              <strong>Character Count:</strong> 850 / 5,000
            </div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyToClipboard(this)">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt(this)">Download .txt</button>
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
      </div>
      {% endif %}

    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container text-center">
    <h2 class="mb-6">Have a Prompt to Share?</h2>
    <p class="text-lg text-secondary mb-8" style="max-width: 700px; margin-left: auto; margin-right: auto;">
      Help the community by contributing your tested prompts to our library.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/support#contribute" class="btn btn-primary btn-lg">Contribute Your Prompt</a>
      <a href="{{ site.baseurl }}/best-practices" class="btn btn-outline btn-lg">Learn Best Practices</a>
    </div>
  </div>
</section>

<script>
function copyToClipboard(button) {
  const card = button.closest('.card');
  const code = card.querySelector('.prompt-code-wrapper code');
  const text = code.innerText;

  navigator.clipboard.writeText(text).then(function() {
    const originalText = button.innerText;
    button.innerText = 'Copied!';
    button.classList.add('btn-success');
    button.classList.remove('btn-primary');
    setTimeout(function() {
      button.innerText = originalText;
      button.classList.remove('btn-success');
      button.classList.add('btn-primary');
    }, 2000);
  }, function(err) {
    button.innerText = 'Failed';
    console.error('Could not copy text: ', err);
  });
}

function downloadPrompt(button) {
  const card = button.closest('.card');
  const code = card.querySelector('.prompt-code-wrapper code');
  const text = code.innerText;

  const title = card.querySelector('.card-title').innerText;
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

<!-- Customize & Manage Section -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">Customize & Manage Your Prompts</h2>

    <div class="grid grid-cols-1 grid-cols-3 mb-8">
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-primary">🎨</div>
          <h3 class="card-title">Customize a Prompt</h3>
        </div>
        <div class="card-body">
          <p>Start with a library prompt and make it yours with your own examples and clinical preferences.</p>
          <ul style="margin-top: var(--space-3);">
            <li>Add your examples</li>
            <li>Adjust formatting preferences</li>
            <li>Fine-tune for your workflow</li>
            <li>Test and refine</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-remix" class="btn btn-secondary">Open Prompt Remix →</a>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-secondary">📁</div>
          <h3 class="card-title">Save & Organize</h3>
        </div>
        <div class="card-body">
          <p>Keep your favorite prompts organized and accessible wherever you need them.</p>
          <ul style="margin-top: var(--space-3);">
            <li>Personal prompt library</li>
            <li>Quick access</li>
            <li>Categorize by use case</li>
            <li>Export for backup</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-manager" class="btn btn-secondary">Open Prompt Manager →</a>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <div class="card-icon card-icon-accent">✨</div>
          <h3 class="card-title">Create From Scratch</h3>
        </div>
        <div class="card-body">
          <p>Use AI assistance to build completely custom prompts for specialized workflows or unique documentation needs.</p>
          <ul style="margin-top: var(--space-3);">
            <li>AI-guided creation</li>
            <li>Custom templates</li>
            <li>Best practices built-in</li>
            <li>Instant feedback</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-assistant" class="btn btn-accent">Try AI Assistant →</a>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <p class="text-lg">Want to understand why these prompts work? Read our <a href="{{ site.baseurl }}/best-practices">Best Practices guide</a> to learn the core principles.</p>
    </div>
  </div>
</section>
