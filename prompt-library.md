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
  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
    flex-wrap: wrap;
  }
  .filter-btn.active {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
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
      
      <div class="filter-buttons">
        <button class="btn btn-primary btn-sm filter-btn active" onclick="filterPrompts('all', this)">All Models</button>
        {% assign models = site.prompts | map: "model" | uniq %}
        {% for model in models %}
          {% if model %}
          <button class="btn btn-secondary btn-sm filter-btn" onclick="filterPrompts('{{ model }}', this)">{{ model }}</button>
          {% endif %}
        {% endfor %}
      </div>
      <div style="background: var(--color-bg-primary); padding: var(--space-5); border-radius: var(--radius-lg);">
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: var(--space-8);">
          {% assign all_groups = site.prompts | group_by: "category" %}
          
          <!-- Left Column -->
          <div style="flex: 1; min-width: 300px;">
            {% assign left_cats = "Documentation,Administrative,Orders" | split: "," %}
            {% for cat_name in left_cats %}
              {% assign group = all_groups | where: "name", cat_name | first %}
              {% if group %}
              <div class="category-nav-section" style="margin-bottom: var(--space-6);">
                <h3 style="font-size: var(--font-size-lg); font-weight: 600; margin-top: 0; margin-bottom: var(--space-3); color: var(--color-text-primary);">{{ group.name }}</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  {% assign sorted_items = group.items | sort: "order" %}
                  {% for prompt in sorted_items %}
                  <li class="prompt-nav-item" data-model="{{ prompt.model }}" style="margin-bottom: var(--space-2);">
                    <a href="#{{ prompt.title | slugify }}" class="text-primary">{{ prompt.title }}</a>
                  </li>
                  {% endfor %}
                </ul>
              </div>
              {% endif %}
            {% endfor %}
          </div>

          <!-- Right Column -->
          <div style="flex: 1; min-width: 300px;">
            {% assign right_cats = "Teaching,Prompt Tools,Other" | split: "," %}
            {% for cat_name in right_cats %}
              {% assign group = all_groups | where: "name", cat_name | first %}
              {% if group %}
              <div class="category-nav-section" style="margin-bottom: var(--space-6);">
                <h3 style="font-size: var(--font-size-lg); font-weight: 600; margin-top: 0; margin-bottom: var(--space-3); color: var(--color-text-primary);">{{ group.name }}</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  {% assign sorted_items = group.items | sort: "order" %}
                  {% for prompt in sorted_items %}
                  <li class="prompt-nav-item" data-model="{{ prompt.model }}" style="margin-bottom: var(--space-2);">
                    <a href="#{{ prompt.title | slugify }}" class="text-primary">{{ prompt.title }}</a>
                  </li>
                  {% endfor %}
                </ul>
              </div>
              {% endif %}
            {% endfor %}
          </div>
        </div>
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

      {% assign all_groups = site.prompts | group_by: "category" %}
      {% assign ordered_cats = "Documentation,Teaching,Administrative,Prompt Tools,Orders,Other" | split: "," %}
      
      {% for cat_name in ordered_cats %}
      {% assign group = all_groups | where: "name", cat_name | first %}
      {% if group %}
      <div class="category-card-section mb-12">
        <h2 class="mb-6 pb-2 border-b border-gray-200" style="font-size: var(--font-size-2xl); font-weight: 700; color: var(--color-text-primary);">{{ group.name }}</h2>
        {% assign sorted_items = group.items | sort: "order" %}
        {% for prompt in sorted_items %}
        <div class="card mb-8 prompt-card" data-model="{{ prompt.model }}" id="{{ prompt.title | slugify }}">
          <div class="card-header">
            <h2 class="card-title">{{ prompt.title }}</h2>
            <p class="card-subtitle">{{ prompt.description }}</p>
          </div>
          <div class="card-body">
            <div class="prompt-meta">
              <div class="prompt-meta-item">
                <strong>Model:</strong> {{ prompt.model }}
              </div>
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
      </div>
      {% endif %}
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

function filterPrompts(model, btn) {
  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.remove('btn-primary');
    b.classList.add('btn-secondary');
  });
  btn.classList.add('active');
  btn.classList.add('btn-primary');
  btn.classList.remove('btn-secondary');

  // Filter Nav Items
  const navItems = document.querySelectorAll('.prompt-nav-item');
  navItems.forEach(item => {
    if (model === 'all' || item.dataset.model === model) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });

  // Filter Nav Categories
  document.querySelectorAll('.category-nav-section').forEach(section => {
    const hasVisible = Array.from(section.querySelectorAll('.prompt-nav-item')).some(item => item.style.display !== 'none');
    section.style.display = hasVisible ? '' : 'none';
  });

  // Filter Cards
  const cards = document.querySelectorAll('.prompt-card');
  cards.forEach(card => {
    if (model === 'all' || card.dataset.model === model) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  // Filter Card Categories
  document.querySelectorAll('.category-card-section').forEach(section => {
    const hasVisible = Array.from(section.querySelectorAll('.prompt-card')).some(card => card.style.display !== 'none');
    section.style.display = hasVisible ? '' : 'none';
  });
}
</script>
