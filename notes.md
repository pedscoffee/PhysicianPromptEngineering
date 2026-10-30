---
layout: default
title: Notes
description: Dated write-ups on AI scribes, Epic Art Memories, and clinical prompting.
permalink: /notes/
---

<div class="hero">
  <div class="container">
    <h1 class="hero-title">Notes</h1>
    <p class="hero-subtitle">Dated write-ups on AI scribes and prompting. AI tools change quickly, so check the date on each one.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div style="max-width: 800px; margin: 0 auto;">
      {%- if site.posts.size == 0 -%}
      <p class="text-secondary">Nothing here yet.</p>
      {%- endif -%}
      {%- for post in site.posts -%}
      <div class="card mb-6">
        <div class="card-body">
          <p class="text-sm text-secondary" style="margin-bottom: var(--space-2);"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
          <h2 class="card-title" style="margin-top: 0;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          {%- if post.description %}<p>{{ post.description }}</p>{% endif -%}
        </div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</section>
