---
layout: default
title: Clinical AI Workbench
description: Test your prompts with synthetic cases. Refine and validate prompts safely in your browser.
---

<style>
  .safety-banner {
    background: #fff3cd;
    border: 2px solid #ffc107;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  .safety-icon { font-size: 24px; flex-shrink: 0; }
  .workbench-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 24px;
  }
  .selector-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
  }
  .selector-card h3 {
    margin-top: 0;
    font-size: 18px;
    margin-bottom: 12px;
  }
  .form-select, .form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
  }
  .form-textarea {
    min-height: 150px;
    font-family: 'Courier New', monospace;
    resize: vertical;
  }
  .output-box {
    background: #f8f9fa;
    border-left: 4px solid #0d6efd;
    padding: 20px;
    border-radius: 4px;
    margin-top: 24px;
    display: none;
  }
  .output-content {
    white-space: pre-wrap;
    font-family: 'Courier New', monospace;
    font-size: 14px;
  }
  .status-indicator {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    margin-left: 8px;
  }
  .status-ready { background: #d1fae5; color: #065f46; }
  .status-loading { background: #dbeafe; color: #1e40af; }
  .status-error { background: #fee2e2; color: #991b1b; }
  @media (max-width: 768px) {
    .workbench-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical AI Workbench</h1>
    <p class="hero-subtitle">
      Test and refine your prompts using synthetic cases. All processing happens locally in your browser.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    
    <div class="safety-banner">
      <div class="safety-icon">⚠️</div>
      <div>
        <strong>Safety First: Synthetic Data Only</strong><br>
        This tool is for <strong>prompt refinement and testing only</strong>. Do not enter real patient data. Use the provided synthetic cases or create your own de-identified examples.
      </div>
    </div>

    <div style="text-align: right; margin-bottom: 16px;">
      <span id="llm-status" class="status-indicator status-loading">AI Not Loaded</span>
      <button id="btn-init-ai" class="btn btn-sm btn-outline">Initialize AI Engine</button>
    </div>

    <div class="workbench-grid">
      
      <div class="selector-card">
        <h3>1. Select Prompt</h3>
        <select id="prompt-select" class="form-select">
          <option value="">Choose a prompt...</option>
        </select>
        <div style="margin-top: 12px;">
          <button id="btn-view-prompt" class="btn btn-xs btn-text" disabled>View Full Prompt</button>
        </div>
      </div>

      <div class="selector-card">
        <h3>2. Select Case Data</h3>
        <select id="case-select" class="form-select">
          <option value="custom">Custom Input</option>
        </select>
        <div style="margin-top: 12px;">
          <textarea id="case-input" class="form-textarea" placeholder="Paste your synthetic case data here..."></textarea>
        </div>
      </div>

    </div>

    <div style="text-align: center; margin-bottom: 24px;">
      <button id="btn-run" class="btn btn-primary btn-lg" disabled>Run Prompt</button>
    </div>

    <div id="output-box" class="output-box">
      <h3>Output</h3>
      <div id="output-content" class="output-content"></div>
    </div>

  </div>
</section>

<div id="prompt-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; padding: 40px;">
  <div style="background: white; max-width: 800px; margin: 0 auto; padding: 30px; border-radius: 8px; max-height: 80vh; overflow-y: auto;">
    <h3>Full Prompt</h3>
    <pre id="modal-prompt-content" style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-size: 13px;"></pre>
    <button class="btn btn-secondary mt-3" onclick="document.getElementById('prompt-modal').style.display='none'">Close</button>
  </div>
</div>

<script type="module" src="{{ '/assets/js/clinical-workbench.js' | relative_url }}"></script>
