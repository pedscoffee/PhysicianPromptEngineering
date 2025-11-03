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

# Clinical Documentation Prompt Library

## How to Use These Prompts

### Step 1: Select Your Prompt
Browse the library below to find prompts matching your documentation needs.

### Step 2: Copy to Your EMR
Click "Copy Prompt" and paste into your EMR's AI text generation feature (e.g., Epic's "Generate Text with AI").

### Step 3: Customize for Your Practice
Replace the example content with samples from your own documentation style for best results.

### Step 4: Review and Approve
Always review AI-generated content for accuracy before finalizing.

---

<script async src="https://eomail5.com/form/bbb56cb2-b806-11f0-9ae9-71cfcd46639b.js" data-form="bbb56cb2-b806-11f0-9ae9-71cfcd46639b"></script>

---

## Available Prompts

*Note: If no prompts appear below, visit our [GitHub repository](https://github.com/pedscoffee/PhysicianPromptEngineering/) for the complete collection or [contribute your own]({{ site.baseurl }}/contributions).*

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

<!-- Sample prompt for demonstration if collection is empty -->
{% if site.prompts.size == 0 %}
<div class="prompt-entry">
  <div class="prompt-header">
    <h2>Assessment & Plan Formatter (Sample)</h2>
    <p><strong>Transforms verbose AI scribe output into concise, problem-based documentation</strong></p>
  </div>
  <div class="prompt-body">
    <p><strong>Specialty:</strong> General Medicine</p>
    <p><strong>Character Count:</strong> 850 / 5,000</p>
    
    <div class="prompt-code-wrapper">
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