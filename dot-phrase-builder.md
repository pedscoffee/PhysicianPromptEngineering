---
layout: page
title: Dot Phrase Builder
description: Build custom EMR dot phrase snippets locally in your browser with WebLLM.
permalink: /dot-phrase-builder/
---

<style>
  .dot-builder-page {
    background: var(--color-bg-secondary);
    min-height: 100vh;
  }

  .dot-builder-hero {
    background: var(--gradient-hero);
    padding: var(--space-10) var(--space-5);
    text-align: center;
  }

  .dot-builder-hero .container {
    max-width: 980px;
  }

  .dot-builder-hero h1 {
    color: var(--color-primary-dark);
    font-size: var(--font-size-5xl);
    margin-bottom: var(--space-4);
  }

  .dot-builder-hero p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-xl);
    line-height: var(--line-height-relaxed);
    margin: 0 auto;
    max-width: 760px;
  }

  .dot-builder-shell {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: var(--space-5);
    margin: var(--space-6) auto;
    max-width: 1180px;
    padding: 0 var(--space-4);
  }

  .dot-builder-panel,
  .dot-builder-sidebar {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
  }

  .dot-builder-toolbar {
    align-items: center;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    justify-content: space-between;
    padding: var(--space-4);
  }

  .dot-builder-status {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    min-height: 1.5rem;
  }

  .dot-builder-controls {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .dot-builder-select,
  .dot-builder-input,
  .dot-builder-textarea {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font: inherit;
  }

  .dot-builder-select {
    max-width: 260px;
    padding: 0.55rem 0.75rem;
  }

  .dot-builder-chat {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    height: 620px;
    overflow-y: auto;
    padding: var(--space-5);
  }

  .dot-builder-message {
    border-radius: var(--radius-md);
    line-height: var(--line-height-relaxed);
    max-width: 86%;
    padding: var(--space-4);
    white-space: pre-wrap;
  }

  .dot-builder-message.assistant {
    align-self: flex-start;
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
  }

  .dot-builder-message.user {
    align-self: flex-end;
    background: var(--color-primary);
    color: #fff;
  }

  .dot-builder-message.error {
    align-self: flex-start;
    background: var(--gradient-error);
    border-left: 4px solid var(--color-error);
    color: #7f1d1d;
  }

  .dot-builder-composer {
    border-top: 1px solid var(--color-border);
    display: grid;
    gap: var(--space-3);
    padding: var(--space-4);
  }

  .dot-builder-textarea {
    min-height: 120px;
    padding: var(--space-3);
    resize: vertical;
    width: 100%;
  }

  .dot-builder-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    justify-content: space-between;
  }

  .dot-builder-button {
    align-items: center;
    background: var(--color-primary);
    border: 0;
    border-radius: var(--radius-sm);
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-weight: var(--font-weight-semibold);
    gap: var(--space-2);
    justify-content: center;
    min-height: 42px;
    padding: 0.7rem 1rem;
    transition: background var(--transition-fast), transform var(--transition-fast);
  }

  .dot-builder-button:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }

  .dot-builder-button:disabled {
    background: var(--color-text-tertiary);
    cursor: not-allowed;
    transform: none;
  }

  .dot-builder-button.secondary {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
  }

  .dot-builder-button.secondary:hover {
    background: var(--color-bg-tertiary);
  }

  .dot-builder-sidebar {
    align-self: start;
    display: grid;
    gap: var(--space-4);
    padding: var(--space-4);
  }

  .dot-builder-sidebar h2,
  .dot-builder-sidebar h3 {
    color: var(--color-primary-dark);
    margin: 0;
  }

  .dot-builder-chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .dot-builder-chip {
    background: var(--color-primary-light);
    border: 1px solid transparent;
    border-radius: var(--radius-full);
    color: var(--color-primary-dark);
    cursor: pointer;
    font-size: var(--font-size-sm);
    padding: 0.45rem 0.75rem;
  }

  .dot-builder-chip:hover {
    border-color: var(--color-primary);
  }

  .dot-builder-output {
    background: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    min-height: 220px;
    overflow: auto;
    padding: var(--space-3);
    white-space: pre-wrap;
  }

  .dot-builder-note {
    border-left: 4px solid var(--color-secondary);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    padding-left: var(--space-3);
  }

  @media (prefers-color-scheme: dark) {
    .dot-builder-hero h1,
    .dot-builder-sidebar h2,
    .dot-builder-sidebar h3 {
      color: var(--color-text-primary);
    }

    .dot-builder-message.error {
      color: var(--color-text-primary);
    }
  }

  @media (max-width: 920px) {
    .dot-builder-shell {
      grid-template-columns: 1fr;
    }

    .dot-builder-sidebar {
      order: -1;
    }

    .dot-builder-chat {
      height: 520px;
    }
  }

  @media (max-width: 640px) {
    .dot-builder-hero {
      padding: var(--space-8) var(--space-4);
    }

    .dot-builder-hero h1 {
      font-size: var(--font-size-4xl);
    }

    .dot-builder-message {
      max-width: 100%;
    }

    .dot-builder-toolbar,
    .dot-builder-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .dot-builder-button,
    .dot-builder-select {
      width: 100%;
    }
  }
</style>

<div class="dot-builder-page">
  <section class="dot-builder-hero">
    <div class="container">
      <h1>Dot Phrase Builder</h1>
      <p>Create reusable EMR snippets through a local browser chat. The model helps turn common conditions, counseling points, and charting bottlenecks into concise dot phrases.</p>
    </div>
  </section>

  <div class="dot-builder-shell" id="dotPhraseBuilder">
    <main class="dot-builder-panel" aria-label="Dot phrase builder chat">
      <div class="dot-builder-toolbar">
        <div>
          <strong>Local LLM session</strong>
          <div class="dot-builder-status" id="dotBuilderStatus">Ready to load the model.</div>
        </div>
        <div class="dot-builder-controls">
          <select class="dot-builder-select" id="dotBuilderModel" aria-label="Model">
            <option value="Llama-3.2-1B-Instruct-q4f16_1-MLC">Llama 3.2 1B, q4f16</option>
            <option value="Llama-3.2-1B-Instruct-q4f32_1-MLC">Llama 3.2 1B, q4f32</option>
          </select>
          <button class="dot-builder-button" id="dotBuilderLoad" type="button">Load Model</button>
        </div>
      </div>

      <div class="dot-builder-chat" id="dotBuilderChat" aria-live="polite"></div>

      <form class="dot-builder-composer" id="dotBuilderForm">
        <label for="dotBuilderInput"><strong>Describe the workflow, condition, or counseling topic</strong></label>
        <textarea class="dot-builder-textarea" id="dotBuilderInput" placeholder="Example: Parents ask about fever dosing, red flags, and when to return to clinic. I want this to be short enough for after-visit instructions." required></textarea>
        <div class="dot-builder-actions">
          <button class="dot-builder-button secondary" id="dotBuilderReset" type="button">Reset</button>
          <button class="dot-builder-button" id="dotBuilderSend" type="submit">Send</button>
        </div>
      </form>
    </main>

    <aside class="dot-builder-sidebar" aria-label="Dot phrase workspace">
      <section>
        <h2>Draft Library</h2>
        <p class="dot-builder-note">Generated phrases stay in this browser session until copied. Avoid patient identifiers or protected health information.</p>
      </section>

      <section>
        <h3>Common Starts</h3>
        <div class="dot-builder-chip-group">
          <button class="dot-builder-chip" type="button" data-example="Create dot phrases for diabetes follow-up counseling, medication adherence, home glucose logs, and return precautions.">Diabetes follow-up</button>
          <button class="dot-builder-chip" type="button" data-example="Create dot phrases for pediatric fever advice, dosing reminders, hydration, red flags, and when to seek urgent care.">Pediatric fever</button>
          <button class="dot-builder-chip" type="button" data-example="Create dot phrases for medication refills when labs or follow-up visits are overdue.">Refill bottlenecks</button>
          <button class="dot-builder-chip" type="button" data-example="Create dot phrases for abnormal imaging results, next steps, reassurance, and follow-up planning.">Abnormal results</button>
        </div>
      </section>

      <section>
        <h3>Latest Output</h3>
        <pre class="dot-builder-output" id="dotBuilderOutput">No dot phrases generated yet.</pre>
        <div class="dot-builder-actions" style="margin-top: var(--space-3);">
          <button class="dot-builder-button secondary" id="dotBuilderCopy" type="button">Copy</button>
          <button class="dot-builder-button secondary" id="dotBuilderDownload" type="button">Download</button>
        </div>
      </section>
    </aside>
  </div>
</div>

<script type="module" src="{{ '/assets/js/dot-phrase-builder.js' | relative_url }}"></script>
