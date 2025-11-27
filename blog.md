---
layout: default
title: Blog
description: Explore the latest insights on AI in clinical documentation. Our blog covers large language models, AI scribe tools, and prompt engineering for physicians.
permalink: /blog/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical AI Documentation Blog</h1>
    <p class="hero-subtitle">
      Latest insights on prompt engineering, AI scribe tools, and clinical documentation automation
    </p>
  </div>
</div>

<!-- Blog Posts Grid -->
<section class="section">
  <div class="container">
    {% if site.posts.size > 0 %}
      <div class="grid grid-cols-1 grid-cols-2 grid-cols-3">
        {% for post in site.posts %}
          <a href="{{ post.url | relative_url }}" class="card-link">
            <article class="card">
              <div class="card-header">
                <p class="card-subtitle">
                  <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                </p>
                <h2 class="card-title">{{ post.title }}</h2>
              </div>
              <div class="card-body">
                <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              </div>
              <div class="card-footer">
                <span class="btn btn-sm btn-primary">Read Article</span>
              </div>
            </article>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div class="text-center" style="padding: var(--space-10) 0;">
        <h2 class="mb-6">Articles Coming Soon</h2>
        <p class="text-lg text-secondary mb-8">
          We're preparing in-depth guides on clinical prompt engineering, EMR integration strategies, and real-world case studies.
        </p>
        <div class="hero-cta">
          <a href="{{ site.baseurl }}/best-practices" class="btn btn-primary btn-lg">Explore Best Practices</a>
          <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Browse Prompt Library</a>
        </div>
      </div>
    {% endif %}
  </div>
</section>

<!-- Newsletter Section -->
<section class="section bg-secondary">
  <div class="container">

    <div id="newsletter" class="embed-container">
      {% include newsletter.html %}
    </div>
  </div>
</section>

<!-- Featured Resources -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Featured Resources</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Prompt Library</h3>
        </div>
        <div class="card-body">
          <p>Browse our collection of physician-tested prompts for clinical documentation automation.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-library" class="btn btn-sm btn-primary">Explore Library</a>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Best Practices</h3>
        </div>
        <div class="card-body">
          <p>Learn the complete methodology for effective clinical prompt engineering.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/best-practices" class="btn btn-sm btn-secondary">Read Guide</a>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Prompt Assistant</h3>
        </div>
        <div class="card-body">
          <p>Create custom AI editor prompts for your clinical workflow using AI-powered metaprompting.</p>
        </div>
        <div class="card-footer">
          <a href="{{ site.baseurl }}/prompt-assistant" class="btn btn-sm btn-accent">Try Assistant</a>
        </div>
      </div>

    </div>
  </div>
</section>
