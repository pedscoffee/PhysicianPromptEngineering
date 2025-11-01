---
layout: home # or whatever your site's main page layout is
title: Blog
description: Explore the latest insights on AI in clinical documentation. Our blog covers large language models, AI scribe tools, and prompt engineering for physicians.
permalink: /blog/
---

# Latest Articles

{% for post in site.posts %}
  <article class="post-preview">
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <p class="post-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    </p>

    <p>{{ post.excerpt }}</p>

    <a href="{{ post.url | relative_url }}">Read More &rarr;</a>

    <hr>
  </article>
{% endfor %}