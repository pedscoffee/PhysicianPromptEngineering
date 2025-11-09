---
layout: default
title: Prompting Best Practices
description: Learn how to write effective medical prompts. Our definitive guide for physicians covers few-shot examples, brevity, and modular prompt design for EMRs.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical Prompt Engineering Best Practices</h1>
    <p class="hero-subtitle">
      Master the art of writing effective prompts for AI-powered clinical documentation
    </p>
  </div>
</div>

<!-- Video Tutorial -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl);">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube-nocookie.com/embed/haSZOP6fiFM?si=a7yZiRBuRdaB95Y9"
          title="Prompt Engineering Tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</section>

<!-- Three Core Principles - Cards -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">Three Core Principles</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">1. Examples > Instructions</h3>
        </div>
        <div class="card-body">
          <p><strong>Show the AI what you want through 3-5 concrete examples rather than explaining it.</strong></p>
          <p class="text-sm text-secondary">LLMs excel at pattern recognition. Examples allow the model to infer your implicit rules more effectively than explicit instructions.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">2. Brevity = Quality</h3>
        </div>
        <div class="card-body">
          <p><strong>Concise outputs scan faster, edit easier, and feel more natural.</strong></p>
          <p class="text-sm text-secondary">Brief documentation reduces cognitive load, makes error detection easier, and maintains physician-like language.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">3. One Prompt, One Purpose</h3>
        </div>
        <div class="card-body">
          <p><strong>Specialized prompts outperform multi-function alternatives.</strong></p>
          <p class="text-sm text-secondary">Modular design allows independent refinement, easier troubleshooting, and better reliability.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section">
  <div class="container">
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

<!-- Detailed Implementation Guide -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Detailed Implementation Guide</h2>

      <!-- Principle 1 -->
      <div class="card mb-8">
        <div class="card-header">
          <h3 class="card-title">Principle 1: Few-Shot Learning in Clinical Context</h3>
        </div>
        <div class="card-body">
          <p>Few-shot examples are the foundation of effective clinical prompts. Rather than describing your preferred format, demonstrate it.</p>

          <p><strong>Why it works:</strong> LLMs excel at pattern recognition. Examples allow the model to infer your implicit rules—tone, structure, clinical reasoning—more effectively than explicit instructions.</p>

          <h4 class="mt-6 mb-4">Clinical Application:</h4>
          <ul>
            <li>For Assessment & Plan formatting: Provide 3-5 examples of your actual A&P sections</li>
            <li>For billing documentation: Show examples with correct MDM levels and corresponding documentation</li>
            <li>For patient instructions: Include samples demonstrating your communication style</li>
          </ul>

          <h4 class="mt-6 mb-4">Optimizing Few-Shot Examples</h4>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin-top: var(--space-4);">
              <thead>
                <tr style="background-color: var(--color-bg-tertiary);">
                  <th style="padding: var(--space-3); text-align: left; border: 1px solid var(--color-border);">Variable</th>
                  <th style="padding: var(--space-3); text-align: left; border: 1px solid var(--color-border);">Clinical Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Quantity</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">3-5 examples typically optimal; more risks overfitting</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Ordering</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Place most common scenarios first</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Distribution</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Match your actual case mix (e.g., 60% routine, 40% complex)</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Quality</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Create examples similar to what you actually see</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Format</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Consistent structure: Input → Output</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Diversity</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Include edge cases you encounter regularly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Principle 2 -->
      <div class="card mb-8">
        <div class="card-header">
          <h3 class="card-title">Principle 2: Documentation Brevity</h3>
        </div>
        <div class="card-body">
          <p>Concise documentation serves both efficiency and safety:</p>

          <h4 class="mt-6 mb-4">Benefits:</h4>
          <ul>
            <li>Faster physician review (30-60 seconds vs 2-3 minutes)</li>
            <li>Easier identification of errors or hallucinations</li>
            <li>Reduced cognitive load during busy clinic days</li>
            <li>More natural, physician-like language</li>
          </ul>

          <h4 class="mt-6 mb-4">Implementation:</h4>
          <ul>
            <li>Use bullet points over paragraphs</li>
            <li>Employ medical abbreviations appropriately</li>
            <li>Eliminate redundant phrases</li>
            <li>Focus on clinically relevant details only</li>
          </ul>
        </div>
      </div>

      <!-- Principle 3 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Principle 3: Modular Prompt Architecture</h3>
        </div>
        <div class="card-body">
          <p>Complex multi-function prompts fail because they multiply complexity exponentially. Instead, chain specialized prompts:</p>

          <h4 class="mt-6 mb-4">Workflow Example:</h4>
          <ol>
            <li>Prompt 1: Raw transcript → Structured HPI</li>
            <li>Prompt 2: Examination findings → Formatted physical exam</li>
            <li>Prompt 3: Combined data → Assessment & Plan</li>
            <li>Prompt 4: A&P → Billing analysis</li>
          </ol>

          <h4 class="mt-6 mb-4">Advantages:</h4>
          <ul>
            <li>Each prompt can be refined independently</li>
            <li>Failures isolate to specific functions</li>
            <li>Easier troubleshooting and iteration</li>
            <li>Mix and match based on encounter type</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Advanced Techniques -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="mb-8">Advanced Techniques</h2>

      <div class="grid grid-cols-1 grid-cols-2">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Task Statement Optimization</h3>
          </div>
          <div class="card-body">
            <p>Begin every prompt with a clear, action-oriented instruction:</p>
            <p class="mt-4"><span class="badge badge-success">Good</span></p>
            <p class="text-sm">"Convert the following transcript into a problem-based assessment and plan"</p>
            <p class="mt-4"><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">Avoid</span></p>
            <p class="text-sm">"You are a physician who needs to write notes"</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Conditional Logic Implementation</h3>
          </div>
          <div class="card-body">
            <p>Use ICD-10 codes as triggers for boilerplate text:</p>
            <pre class="mt-4"><code>If diagnosis includes J06.9, add:
"Supportive care discussed
including rest, fluids, and
symptomatic relief."</code></pre>
          </div>
        </div>

      </div>

      <div class="card mt-6">
        <div class="card-header">
          <h3 class="card-title">Format Rules Hierarchy</h3>
        </div>
        <div class="card-body">
          <ol>
            <li><strong>Few-shot examples</strong> (highest priority)</li>
            <li><strong>Task statement</strong></li>
            <li><strong>Explicit formatting rules</strong> (lowest priority, use sparingly)</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Safety and Compliance -->
<section class="section bg-tertiary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <div style="padding: var(--space-6); background: var(--color-bg-primary); border-radius: var(--radius-lg); border: 2px solid var(--color-warning);">
        <h2 style="color: var(--color-warning); margin-bottom: var(--space-6);">Safety and Compliance</h2>

        <h3 class="mb-4">Critical Reminders</h3>
        <em><a href="https://physicianpromptengineering.com/disclaimer/">See Disclaimer.</a></em>
        <ul>
          <li><strong>Always review</strong> AI output before finalizing</li>
          <li><strong>Maintain responsibility</strong> for clinical accuracy</li>
          <li><strong>Document within</strong> approved institutional tools only</li>
          <li><strong>Expect 90-95% accuracy</strong>, not perfection</li>
        </ul>

        <h3 class="mt-6 mb-4">Quality Assurance Checklist</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li>☐ Factual accuracy verified</li>
          <li>☐ Medications and dosages confirmed</li>
          <li>☐ Follow-up instructions appropriate</li>
          <li>☐ Billing documentation sufficient</li>
          <li>☐ No hallucinated findings</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Getting Started</h2>

      <div class="card">
        <div class="card-body">
          <ol style="line-height: var(--line-height-relaxed);">
            <li><strong>Select one workflow</strong> (e.g., Assessment & Plan only)</li>
            <li><strong>Gather 5 examples</strong> from your recent notes</li>
            <li><strong>Create initial prompt</strong> using our template</li>
            <li><strong>Test on 10 encounters</strong> before scaling</li>
            <li><strong>Iterate based</strong> on specific failures</li>
          </ol>
        </div>
      </div>

      <div class="text-center mt-8">
        <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Browse Prompt Library</a>
        <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-outline btn-lg">Try Prompt Generator</a>
      </div>

      <!-- Additional Resources -->
      <div class="text-center mt-8 text-secondary">
        <p>Questions about setup or best practices? Ask in our <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/discussions" class="text-primary">GitHub Discussions</a> or share your workflow on the <a href="{{ site.baseurl }}/contributions" class="text-primary">Contributions page</a>.</p>
      </div>

      <!-- Share Your Prompt CTA -->
      <div style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-accent-light) 100%); padding: 2rem; border-radius: var(--radius-lg); border-left: 4px solid var(--color-primary); margin-top: 3rem;">
        <h3 style="color: var(--color-primary); font-size: var(--font-size-xl); margin-bottom: var(--space-4); text-align: center;">Share Your Prompt</h3>
        <p style="text-align: center; margin-bottom: var(--space-4);">
          Refined a prompt that consistently delivers quality output? Consider sharing it on the contributions page. Your tested solution could save colleagues hours of iteration and help build a stronger resource for the entire clinical community.
        </p>
        <div style="text-align: center;">
          <a href="{{ site.baseurl }}/contributions" class="btn btn-primary">Contribute Your Prompt</a>
        </div>
      </div>

      <p class="text-sm text-secondary text-center mt-8">
        <em>Reference: Adapted from Schulhoff, S. "The Prompt Report: A Systematic Survey of Prompting Techniques" (2024)</em>
      </p>
    </div>
  </div>
</section>
