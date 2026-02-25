---
layout: default
title: Prompt Style Guide — Compare Formats
description: Compare all available clinical prompt styles side by side. See example outputs for DAX and Epic Text Assistant (ETA) to choose the best format for your documentation.
permalink: /prompt-style-guide/
---

<style>
  .style-card {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-8);
    overflow: hidden;
    transition: box-shadow 0.2s;
  }
  .style-card:hover {
    box-shadow: var(--shadow-md);
  }
  .style-card-header {
    padding: var(--space-5) var(--space-6);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
  }
  .style-card-icon {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    color: var(--color-primary);
  }
  .style-card-icon svg {
    width: 100%;
    height: 100%;
  }
  .style-card-header-text h3 {
    margin: 0 0 var(--space-2) 0;
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
  }
  .style-card-header-text p {
    margin: 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    line-height: 1.5;
  }
  .style-badges {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
    margin-top: var(--space-2);
  }
  .style-badge {
    display: inline-block;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .badge-concise {
    background: #e0f2fe;
    color: #0369a1;
  }
  .badge-detailed {
    background: #fef3c7;
    color: #92400e;
  }
  .badge-prose {
    background: #f3e8ff;
    color: #6b21a8;
  }
  .badge-bullets {
    background: #dcfce7;
    color: #166534;
  }
  .badge-hybrid {
    background: #fce7f3;
    color: #9d174d;
  }
  .badge-inpatient {
    background: #fee2e2;
    color: #991b1b;
  }
  .badge-chronic {
    background: #e0e7ff;
    color: #3730a3;
  }
  .badge-outpatient {
    background: #d1fae5;
    color: #065f46;
  }
  .badge-numbered {
    background: #fff7ed;
    color: #c2410c;
  }
  .style-example {
    padding: var(--space-5) var(--space-6);
    background: var(--color-bg-tertiary);
    font-family: var(--font-family-mono, 'SF Mono', 'Consolas', monospace);
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--color-text-primary);
    border-top: 2px solid var(--color-primary-light, #a5b4fc);
    max-height: none;
  }
  .style-example-label {
    display: inline-block;
    background: var(--color-primary, #4f46e5);
    color: white;
    font-family: var(--font-family-base, sans-serif);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: var(--space-3);
  }
  .style-card-footer {
    padding: var(--space-3) var(--space-6);
    border-top: 1px solid var(--color-border);
    display: flex;
    gap: var(--space-3);
    align-items: center;
    background: var(--color-bg-primary);
  }
  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: var(--space-3);
    margin-bottom: var(--space-8);
  }
  .comparison-item {
    text-align: center;
    padding: var(--space-4);
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    color: var(--color-text-primary);
  }
  .comparison-item:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }
  .comparison-item .ci-icon {
    width: 2rem;
    height: 2rem;
    margin: 0 auto var(--space-2);
    display: block;
    color: var(--color-primary);
  }
  .comparison-item .ci-icon svg {
    width: 100%;
    height: 100%;
  }
  .comparison-item .ci-label {
    font-size: var(--font-size-sm);
    font-weight: 600;
  }
  @media screen and (max-width: 640px) {
    .style-card-header {
      flex-direction: column;
      gap: var(--space-2);
    }
    .comparison-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Prompt Style Guide</h1>
    <p class="hero-subtitle">
      Choose how your AI scribe documents each encounter. Compare model outputs side by side to find your perfect fit.
    </p>
  </div>
</div>

<!-- Quick Jump Grid -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-4">Quick Jump</h2>
      <p class="text-center text-secondary mb-6" style="font-size: var(--font-size-sm);">Every card below shows the same clinical scenario — a child presenting with asthma — so you can see exactly how each style differs.</p>
      <div class="comparison-grid">
        <a href="#concise-bullets" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5h-2.25a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 15.75 18.75Zm-9 0H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h2.25a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 6.75 18.75Zm.75-12h9v.75a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 7.5v-.75Z" /></svg></span>
          <span class="ci-label">Concise Bullets</span>
        </a>
        <a href="#one-liner-bullets" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg></span>
          <span class="ci-label">One-Liner + Bullets</span>
        </a>
        <a href="#numbered-plan" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
</svg></span>
          <span class="ci-label">Numbered Plan</span>
        </a>
        <a href="#ultra-minimal" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg></span>
          <span class="ci-label">Ultra-Minimal</span>
        </a>
        <a href="#prose-blurb" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg></span>
          <span class="ci-label">Prose Blurb</span>
        </a>
        <a href="#concise-prose" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg></span>
          <span class="ci-label">Concise Prose</span>
        </a>
        <a href="#hybrid" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg></span>
          <span class="ci-label">Hybrid</span>
        </a>
        <a href="#soap-within" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg></span>
          <span class="ci-label">SOAP-Within</span>
        </a>
        <a href="#formal" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" /></svg></span>
          <span class="ci-label">Formal A/P</span>
        </a>
        <a href="#chronic" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg></span>
          <span class="ci-label">Chronic</span>
        </a>
        <a href="#assessment-only" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg></span>
          <span class="ci-label">Assessment Only</span>
        </a>
        <a href="#no-diagnosis" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.14 2.14 0 0 0 3.027 0l4.318-4.318a2.14 2.14 0 0 0 0-3.027L11.159 3.659A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" /></svg></span>
          <span class="ci-label">No Dx Headers</span>
        </a>
        <a href="#system-based" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 7.125c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM2.25 14.625c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 14.625c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75Z" /></svg></span>
          <span class="ci-label">System-Based</span>
        </a>
        <a href="#generalized" class="comparison-item">
          <span class="ci-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-.991 0-1.105-.895-2-2-2s-2 .895-2 2c0 .357.128.702.349.991.215.283.401.604.401.959v3.326a.75.75 0 0 1-.75.75H7.323c-.355 0-.676-.186-.959-.401-.29-.221-.634-.349-.991-.349-1.105 0-2 .895-2 2s.895 2 2 2c.357 0 .702-.128.991-.349.283-.215.604-.401.959-.401h3.326a.75.75 0 0 1 .75.75v3.326c0 .355-.186.676-.401.959-.221.29-.349.634-.349.991 0 1.105.895 2 2 2s2-.895 2-2c0-.357-.128-.702-.349-.991-.215-.283-.401-.604-.401-.959V15c0-.414.336-.75.75-.75h3.326c.355 0 .676.186.959.401.29.221.634.349.991.349 1.105 0 2-.895 2-2s-.895-2-2-2c-.357 0-.702.128-.991.349-.283.215-.604.401-.959.401H15a.75.75 0 0 1-.75-.75V6.087Z" /></svg></span>
          <span class="ci-label">Generalized</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- How To Use -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-4">How to Use These</h2>
      <div class="card mb-8">
        <div class="card-body">
          <ol style="margin: 0; padding-left: var(--space-5); line-height: 1.8;">
            <li><strong>Browse the examples below</strong> — each card shows the same patient scenario formatted in a different style</li>
            <li><strong>Pick the one closest to how you like to write</strong> — there's no wrong answer</li>
            <li><strong>Choose your tool</strong> — pick the model version depending on which AI scribe tool you are using</li>
            <li><strong>Find it in the <a href="{{ site.baseurl }}/prompt-library">Prompt Library</a></strong> — click the buttons below to copy the full prompt and paste it into your LLM or tool's custom instructions</li>
            <li><strong>Customize</strong> — swap in your own dot phrases, adjust the few-shot examples to your specialty, and iterate from there</li>
            <li><strong>Contribute</strong> — consider sharing your prompts back with the community! As these tools continue to evolve we can all benefit from learning from each other</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Style Cards -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">

      <h2 class="mb-2">Outpatient Styles</h2>
      <p class="text-secondary mb-8">These are organized from most concise to most detailed.</p>

      <!-- Ultra-Minimal -->
      <div class="style-card" id="ultra-minimal">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>Ultra-Minimal One-Liner</h3>
            <p>The most compact format possible. One telegraphic sentence per problem fuses assessment and plan with a semicolon. For high-volume clinicians who want the absolute minimum.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Most Concise</span>
              <span class="style-badge badge-prose">Prose</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
Persistent symptoms despite albuterol; starting Flovent 44mcg 2 puffs BID with spacer.

Follow-Up: RTC 3mo or PRN.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-ultra-minimal-one-liner-per-problem" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-ultra-minimal-one-liner-per-problem" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Concise Bullets -->
      <div class="style-card" id="concise-bullets">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5h-2.25a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 15.75 18.75Zm-9 0H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h2.25a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 6.75 18.75Zm.75-12h9v.75a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7.5 7.5v-.75Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>Concise Bullets with Follow-Up</h3>
            <p>Problem-oriented with extremely brief bulleted plan items. No assessment line, no one-liner — just the diagnosis name and the plan. Clean and scannable.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Concise</span>
              <span class="style-badge badge-bullets">Bullets</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
        - Flovent 44mcg 2 puff BID started
        - Continue albuterol PRN
        - Use spacer

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-concise-bullets-with-follow-up-statement" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- One-Liner + Bullets -->
      <div class="style-card" id="one-liner-bullets">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>One-Liner + Concise Bullets</h3>
            <p>Starts with a brief one-liner assessment (&lt;20 words) that captures the visit reason and key decision, followed by bulleted plan items. The editor's current favorite — a great starting point.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Concise</span>
              <span class="style-badge badge-bullets">Bullets</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
8yo with acute asthma exacerbation; starting ICS given persistent symptoms despite albuterol.

Asthma
        - Flovent 44mcg 2 puff BID started
        - Continue albuterol PRN
        - Use spacer

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-pithy-with-one-liner" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-editor-s-current-favorite-a-p" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Numbered Plan -->
      <div class="style-card" id="numbered-plan">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
</svg></span>
          <div class="style-card-header-text">
            <h3>Numbered Plan with One-Liner</h3>
            <p>Same structure as the one-liner + bullets, but uses numbered items (1. 2. 3.) instead of hyphens. Great for physicians who reference plan items by number during handoffs.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Concise</span>
              <span class="style-badge badge-numbered">Numbered</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
8yo with acute asthma exacerbation; starting ICS given persistent symptoms despite albuterol.

Asthma
        1. Flovent 44mcg 2 puff BID started
        2. Continue albuterol PRN
        3. Use spacer

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-numbered-plan-with-one-liner" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-numbered-plan" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Prose Blurb -->
      <div class="style-card" id="prose-blurb">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg></span>
          <div class="style-card-header-text">
            <h3>Prose Blurb (Resident-Style)</h3>
            <p>Each problem gets a single concise blurb in the style of a resident's oral presentation: flowing prose that covers assessment, plan, and forward-directed thinking in one paragraph. No bullets.</p>
            <div class="style-badges">
              <span class="style-badge badge-prose">Prose</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
Persistent symptoms despite albuterol consistent with inadequately controlled asthma; starting Flovent 44mcg 2 puffs BID with spacer, continue albuterol as needed, and will reassess control at follow-up.

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-short-blurb" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-short-blurb" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Concise Prose -->
      <div class="style-card" id="concise-prose">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>Concise Prose (Two Sentences)</h3>
            <p>Exactly two sentences per problem: Sentence 1 = assessment rationale, Sentence 2 = plan (tests, treatments, referrals). Tight, grammatical, telegraphic prose. No bullets.</p>
            <div class="style-badges">
              <span class="style-badge badge-prose">Prose</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
Mild persistent asthma with current flare and daily albuterol use. Start Flovent 44 mcg 2 puffs BID with spacer and continue albuterol PRN; no testing or referrals today.

Follow up in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-concise-prose" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Hybrid -->
      <div class="style-card" id="hybrid">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg></span>
          <div class="style-card-header-text">
            <h3>Hybrid: Prose Assessment + Bulleted Plan</h3>
            <p>Cleanly separates clinical thinking from management actions. One prose sentence for the assessment, then bullet points for the plan beneath it.</p>
            <div class="style-badges">
              <span class="style-badge badge-hybrid">Hybrid</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
Persistent symptoms despite albuterol consistent with inadequately controlled asthma.
        - Flovent 44mcg 2 puffs BID started
        - Continue albuterol PRN
        - Use spacer
        - Reassess control at follow-up

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-hybrid-assessment-prose-plan-bullets" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- SOAP-Within-Problems -->
      <div class="style-card" id="soap-within">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg></span>
          <div class="style-card-header-text">
            <h3>SOAP-Within-Problems</h3>
            <p>Two unlabeled prose lines per problem: the first captures findings and interpretation (assessment), the second describes management (plan). Great for physicians who prefer full-sentence structure.</p>
            <div class="style-badges">
              <span class="style-badge badge-prose">Prose</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma
Persistent symptoms despite albuterol consistent with inadequately controlled asthma.
Starting Flovent 44mcg 2 puffs BID with spacer; continue albuterol PRN; will reassess control at follow-up.

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-soap-within-problems" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Formal A/P -->
      <div class="style-card" id="formal">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" /></svg></span>
          <div class="style-card-header-text">
            <h3>Formal A/P (Assessment / Plan / Next Steps)</h3>
            <p>Labeled subsections per problem with clear visual hierarchy. Most structured and detailed outpatient style. Good for complex cases or liability-sensitive documentation.</p>
            <div class="style-badges">
              <span class="style-badge badge-detailed">Detailed</span>
              <span class="style-badge badge-bullets">Bullets</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Asthma

Assessment:
        - Mild persistent asthma with current flare
        - Albuterol use multiple times per week
        - Exam reassuring with clear breath sounds today

Plan:
        - Flovent 44mcg 2 puffs BID with spacer started
        - Continue albuterol as rescue inhaler
        - Asthma action plan provided to family

Next Steps:
        - Return sooner for increased rescue use, nighttime symptoms, or respiratory distress
        - If control remains poor, consider montelukast or referral to Allergy

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-formal-assessment-plan-next-steps" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-formal" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <h2 class="mb-2 mt-12">Specialty Styles</h2>
      <p class="text-secondary mb-8">Tailored for specific clinical scenarios or workflows.</p>

      <!-- Chronic Disease Follow-Up -->
      <div class="style-card" id="chronic">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg></span>
          <div class="style-card-header-text">
            <h3>Chronic Disease Follow-Up</h3>
            <p>Optimized for follow-up visits. Chronic problems include trend language (improved/stable/worsening) and current medication status in the assessment. Acute problems use standard structure.</p>
            <div class="style-badges">
              <span class="style-badge badge-chronic">Chronic Mgmt</span>
              <span class="style-badge badge-hybrid">Hybrid</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output — Stable chronic problem</span>
Asthma
Stable on Flovent 44mcg 2 puffs BID with spacer; albuterol use minimal.
        - Continue Flovent 44mcg 2 puffs BID
        - Continue albuterol PRN
        - Reassess control at next visit

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-concise-assessment-statement-and-bulleted-plan-with-follow-up-statement" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- Assessment Only -->
      <div class="style-card" id="assessment-only">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746-3.746 0 0 1-3.296-1.043 3.745-3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>Assessment Only (Dx & Orders in Chart)</h3>
            <p>Only the assessment — no plan bullets, no diagnosis headers. Designed for workflows where diagnosis codes and orders (meds, labs, referrals) are already entered as discrete data in the chart.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Concise</span>
              <span class="style-badge badge-prose">Assessment Only</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
Persistent symptoms despite current controller therapy consistent with inadequately controlled asthma; stepping up treatment given ongoing rescue inhaler use multiple times per week.

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-assessment-only-orders-and-dx-in-chart" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-assessment-plan-no-diagnosis-headers" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- No Diagnosis Headers -->
      <div class="style-card" id="no-diagnosis">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.14 2.14 0 0 0 3.027 0l4.318-4.318a2.14 2.14 0 0 0 0-3.027L11.159 3.659A2.25 2.25 0 0 0 9.568 3Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>No Diagnosis Headers</h3>
            <p>Assessment + bulleted plan per problem, but without the diagnosis name. Designed for EHRs where the diagnosis is already recorded in a separate problem list field.</p>
            <div class="style-badges">
              <span class="style-badge badge-hybrid">Hybrid</span>
              <span class="style-badge badge-chronic">Chronic Mgmt</span>
              <span class="style-badge badge-outpatient">Outpatient</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output — New acute problem</span>
Persistent symptoms despite albuterol consistent with inadequately controlled asthma.
        - Flovent 44mcg 2 puffs BID started
        - Continue albuterol PRN
        - Reassess control at next visit

Follow-Up: Return to clinic in 3 months or as needed.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-assessment-plan-no-diagnosis-headers" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-assessment-plan-no-diagnosis-headers" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <!-- System-Based -->
      <div class="style-card" id="system-based">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 7.125c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM2.25 14.625c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 14.625c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>System-Based (Inpatient / ED)</h3>
            <p>Organized by organ system instead of by problem: Respiratory, Cardiovascular, FEN/GI, ID, HO, Neuro, Psych, Social, Dispo. Stable systems get a one-line negative statement. For hospitalists and ED physicians.</p>
            <div class="style-badges">
              <span class="style-badge badge-inpatient">Inpatient / ED</span>
              <span class="style-badge badge-detailed">Detailed</span>
              <span class="style-badge badge-hybrid">Hybrid</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">Example Output</span>
8yo admitted for acute asthma exacerbation with hypoxia requiring supplemental O2; HD#2.

Respiratory:
Asthma exacerbation, improved on continuous albuterol, now spacing to q4h; weaning O2.
        - Albuterol neb q4h
        - Wean O2 to maintain SpO2 >92%
        - Start Flovent 44mcg 2 puffs BID once spacing to q6h

Cardiovascular: Hemodynamically stable, no concerns.

FEN/GI: Tolerating regular diet, adequate PO intake.

ID: Afebrile, no signs of infection.

HO: No hematologic or oncologic concerns.

Neuro: Alert, age-appropriate, no focal deficits.

Psych: Appropriate affect, coping well with hospitalization.

Social: Parents at bedside, family meeting completed.

Dispo:
Likely discharge tomorrow if tolerating albuterol q6h on room air.
        - Discharge with Flovent 44mcg 2 puffs BID, albuterol PRN
        - Follow-up with PCP in 1 week</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-system-based-inpatient-ed" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-system-based-inpatient-ed" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

      <h2 class="mb-2 mt-12">Templates</h2>
      <p class="text-secondary mb-8">Starting points for building your own custom style.</p>

      <!-- Generalized Template -->
      <div class="style-card" id="generalized">
        <div class="style-card-header">
          <span class="style-card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-.991 0-1.105-.895-2-2-2s-2 .895-2 2c0 .357.128.702.349.991.215.283.401.604.401.959v3.326a.75.75 0 0 1-.75.75H7.323c-.355 0-.676-.186-.959-.401-.29-.221-.634-.349-.991-.349-1.105 0-2 .895-2 2s.895 2 2 2c.357 0 .702-.128.991-.349.283-.215.604-.401.959-.401h3.326a.75.75 0 0 1 .75.75v3.326c0 .355-.186.676-.401.959-.221.29-.349.634-.349.991 0 1.105.895 2 2 2s2-.895 2-2c0-.357-.128-.702-.349-.991-.215-.283-.401-.604-.401-.959V15c0-.414.336-.75.75-.75h3.326c.355 0 .676.186.959.401.29.221.634.349.991.349 1.105 0 2-.895 2-2s-.895-2-2-2c-.357 0-.702.128-.991.349-.283.215-.604.401-.959.401H15a.75.75 0 0 1-.75-.75V6.087Z" /></svg></span>
          <div class="style-card-header-text">
            <h3>Generalized Template (Build Your Own)</h3>
            <p>A blank-slate version of the one-liner + bullets format with placeholder examples and guidance on how to fill in your own specialty's details, dot phrases, and few-shot examples.</p>
            <div class="style-badges">
              <span class="style-badge badge-concise">Template</span>
              <span class="style-badge badge-outpatient">Any Specialty</span>
            </div>
          </div>
        </div>
        <div class="style-example">
<span class="style-example-label">What You Get</span>
A ready-to-customize prompt with:
• Placeholder boilerplate triggers you replace with your own dot phrases
• Generic few-shot examples you swap for your specialty's cases
• Guidance notes on customization best practices

Start here if none of the other styles are quite right.</div>
        <div class="style-card-footer">
          <span class="text-xs text-secondary mr-2">Use in:</span>
          <a href="{{ site.baseurl }}/prompt-library#dax-a-p-pithy-generalized" class="btn btn-primary btn-sm">DAX Prompt</a>
          <a href="{{ site.baseurl }}/prompt-library#eta-a-p-formatting-pithy" class="btn btn-outline btn-sm">ETA Prompt</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Decision Helper -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-6">Not Sure Where to Start?</h2>
      <div class="card mb-8">
        <div class="card-body">
          <table style="width: 100%; border-collapse: collapse; font-size: var(--font-size-sm);">
            <thead>
              <tr style="border-bottom: 2px solid var(--color-border);">
                <th style="text-align: left; padding: var(--space-3);">If you want…</th>
                <th style="text-align: left; padding: var(--space-3);">Try this style</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Absolute minimum words</td>
                <td style="padding: var(--space-3);"><a href="#ultra-minimal">Ultra-Minimal One-Liner</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Quick scannable bullets</td>
                <td style="padding: var(--space-3);"><a href="#concise-bullets">Concise Bullets</a> or <a href="#one-liner-bullets">One-Liner + Bullets</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">To reference items by number in handoffs</td>
                <td style="padding: var(--space-3);"><a href="#numbered-plan">Numbered Plan</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Flowing sentences, no bullets</td>
                <td style="padding: var(--space-3);"><a href="#prose-blurb">Prose Blurb</a> or <a href="#concise-prose">Concise Prose</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Assessment and plan clearly separated</td>
                <td style="padding: var(--space-3);"><a href="#soap-within">SOAP-Within</a> or <a href="#hybrid">Hybrid</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Maximum structure and detail</td>
                <td style="padding: var(--space-3);"><a href="#formal">Formal A/P</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Trend language for chronic conditions</td>
                <td style="padding: var(--space-3);"><a href="#chronic">Chronic Follow-Up</a></td>
              </tr>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: var(--space-3);">Dx codes & orders already in chart</td>
                <td style="padding: var(--space-3);"><a href="#assessment-only">Assessment Only</a> or <a href="#no-diagnosis">No Dx Headers</a></td>
              </tr>
              <tr>
                <td style="padding: var(--space-3);">Inpatient / ED systems-based notes</td>
                <td style="padding: var(--space-3);"><a href="#system-based">System-Based</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card bg-secondary">
        <div class="card-body text-center">
          <h2 class="mb-4">Ready to Build Your Own?</h2>
          <p class="text-lg mb-6">
            The Quick Start A&P Builder lets you click through your preferences and generates a customized prompt automatically.
          </p>
          <div style="display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap;">
            <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-primary btn-lg">Launch A&P Builder</a>
            <a href="{{ site.baseurl }}/prompt-library" class="btn btn-outline btn-lg">Browse Full Library</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
