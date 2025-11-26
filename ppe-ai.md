---
layout: default
title: Page Moved
permalink: /ppe-ai/
redirect_to: /
---

<div class="container" style="max-width: 800px; margin: 4rem auto; padding: 2rem;">
  <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 2rem; border-radius: 8px;">
    <h1 style="color: #92400e; margin-top: 0;">🔄 Page Has Moved</h1>
    <p style="color: #78350f; font-size: 1.1rem;">
      This page has been reorganized as part of our site restructuring to better focus on clinical documentation and prompt engineering.
    </p>
    <p style="color: #78350f;">
      <strong>Explore our main resources:</strong>
    </p>
    <ul style="color: #78350f; margin-left: 1.5rem;">
      <li><a href="{{ site.baseurl }}/prompt-library">Prompt Library</a> - Ready-to-use clinical prompts</li>
      <li><a href="{{ site.baseurl }}/best-practices">Best Practices</a> - Learn prompt engineering methodology</li>
      <li><a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/">Interactive Course</a> - Hands-on prompt engineering training</li>
      <li><a href="{{ site.baseurl }}/git-master">Git Tutor</a> - Version control for medical projects</li>
    </ul>
    <p style="margin-top: 1.5rem;">
      <a href="{{ site.baseurl }}/" class="btn btn-primary">← Return to Homepage</a>
    </p>
  </div>
</div>

<script>
  // Redirect after 5 seconds
  setTimeout(function() {
    window.location.href = "{{ site.baseurl }}/";
  }, 5000);
</script>
