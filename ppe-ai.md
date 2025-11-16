---
layout: default
title: AI Tools
description: Browser-based AI tools for clinical documentation - experimental educational demonstrations of what's possible with client-side AI.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">AI Tools</h1>
    <p class="hero-subtitle">
      Experimental browser-based AI tools demonstrating the potential of client-side machine learning for clinical workflows. Educational purposes only.
    </p>
  </div>
</div>

<!-- BETA Warning -->
<section class="section" style="padding-top: 2rem;">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto; padding: 1.5rem; background: #fef3c7; border-radius: var(--radius-lg); border-left: 4px solid #f59e0b; margin-bottom: 2rem;">
      <h3 style="color: #78350f; margin-top: 0; font-size: var(--font-size-lg);">BETA - Educational Demonstration Only</h3>
      <p style="color: #78350f; margin-bottom: 0;">
        <strong>These tools are experimental prototypes for educational purposes.</strong> Do not use with any patient data, protected health information, or sensitive information. These demonstrations are not HIPAA-compliant and are not intended for clinical use. They exist to show what's technically possible with browser-based AI.
      </p>
    </div>
  </div>
</section>

<!-- Why Download Required -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">How This Works</h2>

      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Client-Side AI Processing</h3>
        </div>
        <div class="card-body">
          <p style="margin-bottom: var(--space-4);">
            Unlike some AI tools that send your data to cloud servers, these tools run in your browser using WebGPU acceleration.
          </p>

          <h4 style="margin-bottom: var(--space-3);">Why So Large?</h4>
          <p style="margin-bottom: var(--space-4);">
            AI models are essentially compressed knowledge. Phi-3.5 contains 3.8 billion parameters - the "weights" that determine how it processes language. We use a quantized version (reduced precision) to make it small enough for browsers while maintaining quality.  The trade off here is downloading something bigger once but then it being free since it is open source. You can always clear your cache once you leave the site and get that space back.
          </p>

          <h4 style="margin-bottom: var(--space-3);">First-Time Setup</h4>
          <ul>
            <li><strong>5-15 minutes</strong> - Initial model download and browser caching</li>
            <li><strong>10-30 seconds</strong> - Subsequent page loads (models load from cache)</li>
            <li><strong>Permanent</strong> - Models stay cached until you clear browser data</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">System Requirements</h3>
        </div>
        <div class="card-body">
          <ul>
            <li><strong>Browser:</strong> Chrome 113+ or Edge 113+ (WebGPU support required)</li>
            <li><strong>Storage:</strong> 2.5GB available space for model cache</li>
            <li><strong>Memory:</strong> 8GB+ RAM recommended</li>
            <li><strong>GPU:</strong> Modern GPU recommended for better performance</li>
            <li><strong>Connection:</strong> Broadband for initial download (then works offline)</li>
          </ul>
          <p style="margin-top: var(--space-4); margin-bottom: 0; color: var(--color-text-secondary);">
            Performance varies by hardware. Expect 10-40 tokens/second on typical systems.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
