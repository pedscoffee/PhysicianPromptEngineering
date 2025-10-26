---
layout: page
title: Prompt Library
---

<style>
  .prompt-entry {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .prompt-header {
    background-color: #f9f9f9;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e0e0e0;
  }
  .prompt-header h2 {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }
  .prompt-body {
    padding: 1.5rem;
  }
  .prompt-code-wrapper {
    position: relative;
  }
  .prompt-code-wrapper pre {
    background-color: #fdfdfd;
    border: 1px solid #ddd;
    padding: 1rem;
    white-space: pre-wrap; /* Allow prompt text to wrap */
    word-wrap: break-word; /* Break long words */
  }
  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.85rem;
  }
  .copy-button:hover {
    background-color: #0056b3;
  }
</style>

Welcome to the Physician Prompt Engineering prompt library. Each prompt is designed for a specific task and tested in real clinical workflows.

To add a new prompt, simply [contribute one]({{ site.baseurl }}/contributions) or add a new file to the `_prompts` folder in the repository.

---

{% for prompt in site.prompts %}
  <div class="prompt-entry">
    <div class="prompt-header">
      <h2>{{ prompt.title }}</h2>
      <p><strong>{{ prompt.description }}</strong></p>
    </div>
    <div class="prompt-body">
      <p><strong>Specialty:</strong> {{ prompt.specialty }}</p>
      <p><strong>Character Count:</strong> {{ prompt.char_count }} / 5,000</p>
      
      <div class="prompt-code-wrapper">
        <button class="copy-button" onclick="copyToClipboard(this)">Copy Prompt</button>
        <pre><code>{{ prompt.content | escape }}</code></pre>
      </div>
    </div>
  </div>
{% endfor %}

<script>
function copyToClipboard(button) {
  const pre = button.nextElementSibling;
  const code = pre.querySelector('code');
  const text = code.innerText;
  
  navigator.clipboard.writeText(text).then(function() {
    button.innerText = 'Copied!';
    setTimeout(function() {
      button.innerText = 'Copy Prompt';
    }, 2000);
  }, function(err) {
    button.innerText = 'Failed';
    console.error('Could not copy text: ', err);
  });
}
</script>