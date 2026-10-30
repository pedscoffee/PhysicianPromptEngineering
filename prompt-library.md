---
layout: default
title: Prompt Library
description: A library of clinical AI prompts organized by platform (Epic Art Memories, Epic Text Assistant, DAX). Copy and adapt prompts for A&P formatting, billing analysis, AVS generation, and more.
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
  .platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-4);
  }
  .platform-nav {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-4) var(--space-5);
  }
  .platform-nav h3 {
    margin: 0 0 var(--space-2);
    font-size: var(--font-size-lg);
  }
  .platform-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: var(--font-size-sm);
  }
  .platform-nav li {
    margin-bottom: var(--space-1);
  }
  .platform-heading {
    font-size: var(--font-size-3xl);
    padding-bottom: var(--space-2);
    border-bottom: 2px solid var(--color-primary);
  }
  .category-heading {
    margin: var(--space-8) 0 var(--space-4);
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
  }
</style>

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical Documentation Prompt Library</h1>
    <p class="hero-subtitle" style="margin-bottom: var(--space-6);">
      Tested starting points for AI scribe and EMR prompts, organized by platform. Copy one, make it yours, and review every note it produces.
    </p>
    <div style="display: flex; justify-content: center; gap: var(--space-4); flex-wrap: wrap;">
      <a href="{{ site.baseurl }}/prompt-style-guide/" class="btn btn-primary btn-lg">Compare A&P Styles</a>
      <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-outline btn-lg" style="border-color: var(--color-primary); color: var(--color-primary);">A&P Builder</a>
    </div>
  </div>
</div>

{%- comment -%}
  Platforms are the first level of organization; categories sit inside each platform.
  To add a platform or category, add it to these lists. Prompts whose model or
  category is missing from the lists are still shown under "Other".
{%- endcomment -%}
{%- assign platform_order = "Epic Art,Epic Text Assistant,DAX Custom Instructions,Any AI Assistant,Other" | split: "," -%}
{%- assign category_order = "Memories,Documentation,Orders,Administrative,Teaching,Prompt Tools,Other" | split: "," -%}
{%- assign known_models = platform_order | join: "|" | prepend: "|" | append: "|" -%}
{%- assign known_categories = category_order | join: "|" | prepend: "|" | append: "|" -%}

<!-- Quick Navigation -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">Browse by Platform</h2>

      <div class="platform-grid">
        {%- for platform in platform_order -%}
        {%- assign platform_prompts = site.prompts | where: "model", platform -%}
        {%- if platform == "Other" -%}
          {%- assign platform_prompts = "" | split: "" -%}
          {%- for prompt in site.prompts -%}
            {%- capture model_key -%}|{{ prompt.model }}|{%- endcapture -%}
            {%- if prompt.model == "Other" -%}{%- assign platform_prompts = platform_prompts | push: prompt -%}{%- else -%}{%- unless known_models contains model_key -%}{%- assign platform_prompts = platform_prompts | push: prompt -%}{%- endunless -%}{%- endif -%}
          {%- endfor -%}
        {%- endif -%}
        {%- if platform_prompts.size > 0 or platform == "Epic Art" -%}
        <div class="platform-nav">
          <h3><a href="#platform-{{ platform | slugify }}">{{ platform }}</a></h3>
          {%- if platform_prompts.size == 0 -%}
            <p class="text-sm text-secondary">Memories: coming soon</p>
          {%- else -%}
          <ul>
            {%- assign sorted_items = platform_prompts | sort: "title" -%}
            {%- for prompt in sorted_items -%}
            <li><a href="#{{ prompt.title | slugify }}">{{ prompt.title }}</a></li>
            {%- endfor -%}
          </ul>
          {%- endif -%}
        </div>
        {%- endif -%}
        {%- endfor -%}
      </div>

      <div class="text-center mt-6">
        <p class="text-secondary">
          Have a prompt that works well? <a href="{{ site.baseurl }}/support#contribute" class="text-primary">Share it</a>. See the <a href="{{ site.baseurl }}/disclaimer">disclaimer</a>.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Prompts -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">

      {%- for platform in platform_order -%}
      {%- assign platform_prompts = site.prompts | where: "model", platform -%}
      {%- if platform == "Other" -%}
        {%- assign platform_prompts = "" | split: "" -%}
        {%- for prompt in site.prompts -%}
          {%- capture model_key -%}|{{ prompt.model }}|{%- endcapture -%}
          {%- if prompt.model == "Other" -%}{%- assign platform_prompts = platform_prompts | push: prompt -%}{%- else -%}{%- unless known_models contains model_key -%}{%- assign platform_prompts = platform_prompts | push: prompt -%}{%- endunless -%}{%- endif -%}
        {%- endfor -%}
      {%- endif -%}
      {%- if platform_prompts.size > 0 or platform == "Epic Art" -%}
      <div class="platform-section mb-12" id="platform-{{ platform | slugify }}">
        <h2 class="platform-heading">{{ platform }}</h2>
        {%- case platform -%}
          {%- when "Epic Art" -%}
          <p class="text-secondary">Memories are Epic's name for the standing instructions you give Art, its ambient AI scribe. Instead of reformatting a finished note, they shape the draft as Art writes it.</p>
          {%- when "Epic Text Assistant" -%}
          <p class="text-secondary">Prompts for Epic's in-chart AI text generation. Run them on a section of a note, such as the A&amp;P, after the scribe has drafted it.</p>
          {%- when "DAX Custom Instructions" -%}
          <p class="text-secondary">Custom instructions for DAX, applied when the scribe generates each section of the note.</p>
          {%- when "Any AI Assistant" -%}
          <p class="text-secondary">Prompts for building and refining your own prompts. Use them with any current AI assistant your institution has approved. Start with the two "Quick" versions.</p>
          {%- when "Other" -%}
          <p class="text-secondary">Other scribe tools and platforms.</p>
        {%- endcase -%}

        {%- if platform == "Epic Art" and platform_prompts.size == 0 -%}
        <div class="card mb-8" id="memories">
          <div class="card-header">
            <h3 class="card-title">Memories: coming soon</h3>
          </div>
          <div class="card-body">
            <p>I'm writing up my first experience with Art and how Memories differ from the editor prompts in this library. Example Memories will be added here.</p>
            <p><a href="{{ '/notes/' | relative_url }}">Read the Chart with Art notes &rarr;</a></p>
          </div>
        </div>
        {%- endif -%}

        {%- for cat_name in category_order -%}
          {%- assign cat_prompts = platform_prompts | where: "category", cat_name -%}
          {%- if cat_name == "Other" -%}
            {%- assign cat_prompts = "" | split: "" -%}
            {%- for prompt in platform_prompts -%}
              {%- capture cat_key -%}|{{ prompt.category }}|{%- endcapture -%}
              {%- if prompt.category == "Other" -%}{%- assign cat_prompts = cat_prompts | push: prompt -%}{%- else -%}{%- unless known_categories contains cat_key -%}{%- assign cat_prompts = cat_prompts | push: prompt -%}{%- endunless -%}{%- endif -%}
            {%- endfor -%}
          {%- endif -%}
          {%- if cat_prompts.size > 0 -%}
          <h3 class="category-heading">{{ cat_name }}</h3>
          {%- assign sorted_items = cat_prompts | sort: "title" -%}
          {%- for prompt in sorted_items -%}
          <div class="card mb-8 prompt-card" id="{{ prompt.title | slugify }}">
            <div class="card-header">
              <h4 class="card-title">{{ prompt.title }}</h4>
              <p class="card-subtitle">{{ prompt.description }}</p>
            </div>
            <div class="card-body">
              <div class="prompt-meta">
                <div class="prompt-meta-item"><strong>Platform:</strong> {{ prompt.model }}</div>
                <div class="prompt-meta-item"><strong>Specialty:</strong> {{ prompt.specialty }}</div>
                <div class="prompt-meta-item"><strong>Length:</strong> {{ prompt.content | size }} characters</div>
              </div>

              <div class="prompt-actions">
                <button class="btn btn-primary btn-sm" onclick="copyToClipboard(this)">Copy Prompt</button>
                <button class="btn btn-secondary btn-sm" onclick="downloadPrompt(this)">Download .txt</button>
                {% if prompt.example_output or prompt.content contains '## Few' %}
                <button class="btn btn-outline btn-sm" onclick="toggleExample(this)">Show Sample Output</button>
                {% endif %}
              </div>

              {% if prompt.example_output %}
              <div class="hidden-example-data" style="display: none;">{{ prompt.example_output | escape }}</div>
              {% endif %}

              <div class="prompt-code-wrapper">
                <pre><code>{{ prompt.content | escape }}</code></pre>
              </div>
            </div>
          </div>
          {%- endfor -%}
          {%- endif -%}
        {%- endfor -%}
      </div>
      {%- endif -%}
      {%- endfor -%}

    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section bg-secondary">
  <div class="container">
    <div class="embed-container">
      {% include newsletter.html %}
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

function toggleExample(button) {
  const card = button.closest('.card');
  const codeBlock = card.querySelector('.prompt-code-wrapper code');
  let exampleContent = card.querySelector('.example-content');
  
  if (!exampleContent) {
    const fullText = codeBlock.innerText;
    let sampleText = "";
    
    // Check if there's explicit example data in the frontmatter
    const hiddenData = card.querySelector('.hidden-example-data');
    if (hiddenData) {
      sampleText = hiddenData.innerText;
    } else {
      // Extract few-shot example section from text
      const match = fullText.match(/## Few.*?Shot[^\n]*\n/i);
      if (match) {
        const parts = fullText.split(match[0]);
        if (parts.length > 1) {
          // Extract up to next --- or end
          let exampleSection = parts[1].split('---')[0].trim();
          const lines = exampleSection.split('\n');
          let startIndex = 0;
          // Skip conversational filler
          while (startIndex < lines.length && (lines[startIndex].trim() === '' || lines[startIndex].includes('Remember') || lines[startIndex].includes('own for best effect'))) {
            startIndex++;
          }
          sampleText = lines.slice(startIndex).join('\n').trim();
        }
      }
    }
    
    if (!sampleText) {
      sampleText = "No sample output available for this prompt.";
    }
    
    // Create the example element
    exampleContent = document.createElement('div');
    exampleContent.className = 'example-content mt-4 mb-4';
    exampleContent.style.background = 'var(--color-bg-tertiary)';
    exampleContent.style.padding = 'var(--space-4)';
    exampleContent.style.borderRadius = 'var(--radius-md)';
    exampleContent.style.border = '1px solid var(--color-border)';
    exampleContent.style.borderLeft = '4px solid var(--color-primary-light)';
    exampleContent.style.fontFamily = 'var(--font-family-mono)';
    exampleContent.style.fontSize = '14px';
    exampleContent.style.lineHeight = '1.6';
    exampleContent.style.whiteSpace = 'pre-wrap';
    exampleContent.style.display = 'none';
    exampleContent.innerText = sampleText;
    
    // Insert before prompt-code-wrapper
    const codeWrapper = card.querySelector('.prompt-code-wrapper');
    card.querySelector('.card-body').insertBefore(exampleContent, codeWrapper);
  }
  
  if (exampleContent.style.display === 'none') {
    exampleContent.style.display = 'block';
    button.innerText = 'Hide Sample Output';
    button.classList.remove('btn-outline');
    button.classList.add('btn-secondary');
  } else {
    exampleContent.style.display = 'none';
    button.innerText = 'Show Sample Output';
    button.classList.add('btn-outline');
    button.classList.remove('btn-secondary');
  }
}
</script>
