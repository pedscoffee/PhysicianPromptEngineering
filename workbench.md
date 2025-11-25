---
layout: default
title: Clinical AI Workbench
description: Interactive tools for clinical documentation, education, and safety. Run advanced prompts directly in your browser.
---

<style>
  .workbench-container {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: var(--space-6);
    min-height: 600px;
  }

  /* Sidebar */
  .sidebar-section {
    margin-bottom: var(--space-6);
  }

  .sidebar-title {
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-3);
    font-weight: 700;
  }

  .tool-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    padding: var(--space-3);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: var(--space-2);
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .tool-card:hover {
    border-color: var(--color-primary);
    transform: translateX(2px);
  }

  .tool-card.active {
    background: var(--color-primary-light);
    border-color: var(--color-primary);
    box-shadow: 0 0 0 1px var(--color-primary-light);
  }

  .tool-icon { font-size: 1.2rem; }
  .tool-name { font-weight: 600; font-size: var(--font-size-sm); }

  /* Workspace */
  .workspace-area {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .safety-banner {
    background: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    padding: var(--space-3);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .selector-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }

  .form-select {
    width: 100%;
    padding: var(--space-2);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg-secondary);
  }

  .preview-box {
    background: var(--color-bg-tertiary);
    padding: var(--space-4);
    border-radius: var(--radius-md);
    font-family: var(--font-mono);
    font-size: var(--font-size-xs);
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--color-border);
  }

  .output-area {
    background: var(--color-bg-tertiary);
    padding: var(--space-4);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--color-primary);
    min-height: 100px;
  }

  .output-content {
    white-space: pre-wrap;
    font-family: var(--font-mono);
    font-size: var(--font-size-sm);
  }

  @media (max-width: 768px) {
    .workbench-container { grid-template-columns: 1fr; }
    .selector-group { grid-template-columns: 1fr; }
  }
</style>

<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical AI Workbench <span class="badge badge-primary" style="font-size: 0.5em; vertical-align: middle;">BETA</span></h1>
    <p class="hero-subtitle">
      Refine your prompts using synthetic cases. Test any prompt from the library safely.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    
    <div class="safety-banner mb-4">
      <span style="font-size: 1.5em;">⚠️</span>
      <div>
        <strong>Safety First:</strong> This tool is for <strong>prompt refinement only</strong>. Do not enter real patient data. Use the provided synthetic cases or de-identified data only.
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mb-4">
      <div><!-- Spacer --></div>
      <div>
        <span id="llm-status" class="llm-status status-loading">AI Not Loaded</span>
        <button id="btn-init-workbench" class="btn btn-sm btn-outline">Initialize AI Engine</button>
      </div>
    </div>

    <div class="workbench-container">
      
      <!-- Sidebar: Quick Tools -->
      <div class="sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Featured Tools</div>
          <div id="featured-tools-list">
            <!-- Populated by JS -->
          </div>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Library Prompts</div>
          <select id="library-prompt-select" class="form-select" style="width: 100%;">
            <option value="">Select a prompt...</option>
            <!-- Populated by JS -->
          </select>
        </div>
      </div>

      <!-- Main Workspace -->
      <div class="workspace-area">
        
        <!-- Configuration -->
        <div class="selector-group">
          <div>
            <label class="input-label">1. Select Prompt</label>
            <div id="active-prompt-display" class="p-2 border rounded bg-white mb-2">
              <em>No prompt selected</em>
            </div>
            <button id="btn-view-prompt" class="btn btn-xs btn-text">View System Prompt</button>
          </div>
          
          <div>
            <label class="input-label">2. Select Case Data</label>
            <select id="case-select" class="form-select mb-2">
              <option value="custom">Custom Input</option>
              <!-- Populated by JS -->
            </select>
            <textarea id="case-input" class="form-control" placeholder="Enter case data..." style="height: 100px;"></textarea>
          </div>
        </div>

        <!-- Action -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="text-sm text-secondary">
            Model: Llama-3.2-1B-Instruct
          </div>
          <button id="btn-run-tool" class="btn btn-primary" disabled>Run Prompt</button>
        </div>

        <!-- Output -->
        <div id="workbench-output" class="output-area" style="display: none;">
          <h4 class="mb-2">Output</h4>
          <div id="output-content" class="output-content"></div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- Modal for System Prompt -->
<div id="prompt-modal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;">
  <div class="modal-content" style="background: white; margin: 10% auto; padding: 20px; width: 80%; max-width: 600px; border-radius: 8px;">
    <h3>System Prompt</h3>
    <pre id="modal-prompt-content" style="background: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap;"></pre>
    <button class="btn btn-secondary mt-3" onclick="document.getElementById('prompt-modal').style.display='none'">Close</button>
  </div>
</div>

<script type="module" src="{{ '/assets/js/clinical-workbench.js' | relative_url }}"></script>
