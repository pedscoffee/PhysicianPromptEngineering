---
layout: page
title: Prompt Library
description: Access a free library of production-ready clinical LLM prompts. Copy and paste prompts for A/P formatting, billing analysis, AVS generation, and more.
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
    max-height: 300px;
    overflow-y: auto;  
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

  .download-button {
    position: absolute;
    top: 10px;
    right: 140px;  /* Position it to the left of the copy button */
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.85rem;
  }
  .download-button:hover {
    background-color: #218838;
  }
</style>

# Clinical Documentation Prompt Library
{% assign sorted_prompts = site.prompts | sort: "order" %}
{% for prompt in sorted_prompts %}
- [{{ prompt.title }}](#{{ prompt.title | slugify }})
{% endfor %}

*Visit our [GitHub repository](https://github.com/pedscoffee/PhysicianPromptEngineering/) for the complete collection or [contribute your own]({{ site.baseurl }}/contributions).*

---

<div class="embed-container">
  <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

---

{% assign sorted_prompts = site.prompts | sort: "order" %}
{% for prompt in sorted_prompts %}
  <div class="prompt-entry" id="{{ prompt.title | slugify }}">
    <div class="prompt-header">
      <h2>{{ prompt.title }}</h2>
      <p>{{ prompt.description }}</p>
    </div>
    <div class="prompt-body">
      <p><strong>Specialty:</strong> {{ prompt.specialty }}</p>
      <p><strong>Character Count:</strong> {{ prompt.char_count }} / 5,000</p>
      <div class="prompt-code-wrapper">
        <button class="download-button" onclick="downloadPrompt(this)">Download .txt</button>
        <button class="copy-button" onclick="copyToClipboard(this)">Copy Prompt</button>
        <pre><code>{{ prompt.content | escape }}</code></pre>
      </div>
    </div>
  </div>
{% endfor %}

<!-- Sample prompt for demonstration if collection is empty -->
{% if site.prompts.size == 0 %}
<div class="prompt-entry">
  <div class="prompt-header">
    <h2>Assessment & Plan Formatter (Sample)</h2>
    <p>Transforms verbose AI scribe output into concise, problem-based documentation</p>
  </div>
  <div class="prompt-body">
    <p><strong>Specialty:</strong> General Medicine</p>
    <p><strong>Character Count:</strong> 850 / 5,000</p>
    
    <div class="prompt-code-wrapper">
      <button class="download-button" onclick="downloadPrompt(this)">Download .txt</button>
      <button class="copy-button" onclick="copyToClipboard(this)">Copy Prompt</button>
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

<script>
function copyToClipboard(button) {
  // The <pre><code> is the next element after the button
  const wrapper = button.parentElement;
  const pre = wrapper.querySelector('pre');
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

function downloadPrompt(button) {
  // The <pre><code> is in the same wrapper as the button
  const wrapper = button.parentElement;
  const pre = wrapper.querySelector('pre');
  const code = pre.querySelector('code');
  const text = code.innerText;
  
  // Get the prompt title from the header
  const promptEntry = button.closest('.prompt-entry');
  const title = promptEntry.querySelector('.prompt-header h2').innerText;
  const filename = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
  
  button.innerText = 'Downloaded!';
  setTimeout(function() {
    button.innerText = 'Download .txt';
  }, 2000);
}
</script>


