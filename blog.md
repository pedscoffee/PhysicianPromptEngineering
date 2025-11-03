---
layout: home
title: Blog
description: Explore the latest insights on AI in clinical documentation. Our blog covers large language models, AI scribe tools, and prompt engineering for physicians.
permalink: /blog/
---

# Clinical AI Documentation Blog

## Latest Articles

{% for post in site.posts %}
  <article class="post-preview">
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <p class="post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    </p>

    <p>{{ post.excerpt }}</p>

    <a href="{{ post.url | relative_url }}" class="read-more">Continue reading →</a>

    <hr>
  </article>
{% endfor %}

{% if site.posts.size == 0 %}
<div class="no-posts">
  <p><strong>Articles coming soon.</strong></p>
  <p>We're preparing in-depth guides on clinical prompt engineering, EMR integration strategies, and real-world case studies.</p>
  <p>In the meantime, explore our <a href="{{ site.baseurl }}/best-practices">Best Practices Guide</a> or browse the <a href="{{ site.baseurl }}/prompt-library">Prompt Library</a>.</p>
</div>
{% endif %}

---

<script async src="https://eomail5.com/form/bbb56cb2-b806-11f0-9ae9-71cfcd46639b.js" data-form="bbb56cb2-b806-11f0-9ae9-71cfcd46639b"></script>

---

## Subscribe for Updates

Stay informed about new prompts, EMR integration tips, and clinical AI developments by joining our mailing list above.