---
layout: default
title: Prompt Remix
description: Start from a proven clinical prompt and customize it with your own examples and preferences. The fastest way to create personalized AI documentation prompts.
permalink: /prompt-remix/
---

<style>
/* ============================================
   PROMPT REMIX - CUSTOM STYLES
   ============================================ */

.remix-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
}

.remix-header {
    background: linear-gradient(135deg, var(--color-primary-light, #dbeafe) 0%, var(--color-secondary-light, #e0f2fe) 100%);
    padding: 40px 30px;
    border-radius: var(--radius-lg, 8px);
    margin-bottom: 30px;
    text-align: center;
}

.remix-header h1 {
    color: var(--color-primary-dark, #1e5bb8);
    font-size: 2.2em;
    margin-bottom: 10px;
}

.remix-header p {
    color: var(--color-text-secondary, #666);
    font-size: 1.1em;
    max-width: 700px;
    margin: 0 auto;
}

/* Toolbar */
.remix-toolbar {
    background: var(--color-bg-primary, #fff);
    border: 1px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    padding: 15px 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.prompt-selector-group {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.prompt-selector-group label {
    font-weight: 600;
    color: var(--color-text-primary, #333);
    white-space: nowrap;
}

#prompt-selector {
    padding: 10px 16px;
    border: 2px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    font-size: 1em;
    min-width: 280px;
    background: var(--color-bg-primary, #fff);
    cursor: pointer;
    transition: border-color 0.2s;
}

#prompt-selector:focus {
    outline: none;
    border-color: var(--color-primary, #2a7ae2);
}

.toolbar-actions {
    display: flex;
    gap: 10px;
    align-items: center;
}

.toolbar-btn {
    padding: 8px 16px;
    border: 1px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    background: var(--color-bg-primary, #fff);
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 500;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 6px;
}

.toolbar-btn:hover:not(:disabled) {
    background: var(--color-bg-secondary, #f5f5f5);
    border-color: var(--color-primary, #2a7ae2);
}

.toolbar-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.toolbar-btn svg {
    width: 16px;
    height: 16px;
}

/* Main Layout */
.remix-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    align-items: start;
}

@media (max-width: 1200px) {
    .remix-main {
        grid-template-columns: 1fr;
    }
}

/* Editor Panel */
.editor-panel {
    background: var(--color-bg-primary, #fff);
    border: 1px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-lg, 8px);
    overflow: hidden;
}

.panel-header {
    background: var(--color-bg-secondary, #f5f5f5);
    padding: 15px 20px;
    border-bottom: 1px solid var(--color-border, #e8e8e8);
    font-weight: 600;
    color: var(--color-text-primary, #333);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.editor-content {
    padding: 0;
    max-height: 70vh;
    overflow-y: auto;
}

/* Section Accordion */
.section-item {
    border-bottom: 1px solid var(--color-border, #e8e8e8);
}

.section-item:last-child {
    border-bottom: none;
}

.section-header {
    padding: 15px 20px;
    background: var(--color-bg-primary, #fff);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;
    user-select: none;
}

.section-header:hover {
    background: var(--color-bg-secondary, #f5f5f5);
}

.section-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.section-title {
    font-weight: 600;
    color: var(--color-text-primary, #333);
    font-size: 0.95em;
}

.section-badge {
    background: var(--color-primary, #2a7ae2);
    color: white;
    padding: 2px 8px;
    border-radius: 9999px;
    font-size: 0.75em;
    font-weight: 600;
}

.section-badge.important {
    background: #f59e0b;
}

.section-toggle {
    color: var(--color-text-secondary, #666);
    transition: transform 0.2s;
    font-size: 0.8em;
}

.section-item.expanded .section-toggle {
    transform: rotate(180deg);
}

.section-content {
    display: none;
    padding: 0 20px 20px;
}

.section-item.expanded .section-content {
    display: block;
}

.section-textarea {
    width: 100%;
    min-height: 150px;
    padding: 15px;
    border: 2px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
    font-size: 0.9em;
    line-height: 1.6;
    resize: vertical;
    transition: border-color 0.2s;
    background: var(--color-bg-tertiary, #fafafa);
}

.section-textarea:focus {
    outline: none;
    border-color: var(--color-primary, #2a7ae2);
    background: var(--color-bg-primary, #fff);
}

/* Examples Section - Special Styling */
.section-item.examples-section .section-header {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-left: 4px solid #f59e0b;
}

.section-item.examples-section .section-header:hover {
    background: linear-gradient(135deg, #fde68a 0%, #fcd34d 100%);
}

/* Add Examples Button */
.add-examples-btn {
    width: 100%;
    padding: 15px;
    border: 2px dashed var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    background: var(--color-bg-secondary, #f5f5f5);
    cursor: pointer;
    font-size: 0.95em;
    color: var(--color-text-secondary, #666);
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.add-examples-btn:hover {
    border-color: var(--color-primary, #2a7ae2);
    color: var(--color-primary, #2a7ae2);
    background: var(--color-primary-light, #dbeafe);
}

/* Preview Panel */
.preview-panel {
    background: var(--color-bg-primary, #fff);
    border: 1px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-lg, 8px);
    position: sticky;
    top: 100px;
    max-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
}

@media (max-width: 1200px) {
    .preview-panel {
        position: relative;
        top: 0;
        max-height: none;
    }
}

.preview-header {
    background: var(--color-bg-secondary, #f5f5f5);
    padding: 15px 20px;
    border-bottom: 1px solid var(--color-border, #e8e8e8);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.preview-header-title {
    font-weight: 600;
    color: var(--color-text-primary, #333);
}

.char-counter {
    font-size: 0.9em;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 9999px;
    transition: all 0.2s;
}

.char-counter.good {
    background: #d1fae5;
    color: #065f46;
}

.char-counter.warning {
    background: #fef3c7;
    color: #92400e;
}

.char-counter.danger {
    background: #fee2e2;
    color: #991b1b;
}

.preview-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: var(--color-bg-tertiary, #fafafa);
}

#preview-text {
    font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
    font-size: 0.85em;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: var(--color-text-primary, #333);
}

.preview-empty {
    color: var(--color-text-secondary, #999);
    font-style: italic;
    text-align: center;
    padding: 40px 20px;
}

/* Action Buttons */
.action-buttons {
    padding: 20px;
    border-top: 1px solid var(--color-border, #e8e8e8);
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background: var(--color-bg-primary, #fff);
}

.action-btn {
    flex: 1;
    min-width: 120px;
    padding: 12px 20px;
    border: none;
    border-radius: var(--radius-md, 6px);
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.action-btn svg {
    width: 18px;
    height: 18px;
}

.action-btn-primary {
    background: var(--color-primary, #2a7ae2);
    color: white;
}

.action-btn-primary:hover:not(:disabled) {
    background: var(--color-primary-dark, #1e5bb8);
    transform: translateY(-1px);
}

.action-btn-secondary {
    background: var(--color-bg-secondary, #f5f5f5);
    color: var(--color-text-primary, #333);
    border: 1px solid var(--color-border, #e8e8e8);
}

.action-btn-secondary:hover:not(:disabled) {
    background: var(--color-bg-tertiary, #fafafa);
}

.action-btn-success {
    background: #059669;
    color: white;
}

.action-btn-success:hover:not(:disabled) {
    background: #047857;
}

/* Tip Box */
.tip-box {
    background: linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%);
    border-left: 4px solid var(--color-primary, #2a7ae2);
    padding: 15px 20px;
    border-radius: var(--radius-md, 6px);
    margin-top: 25px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.tip-box-icon {
    font-size: 1.3em;
    flex-shrink: 0;
}

.tip-box-content {
    flex: 1;
}

.tip-box-content strong {
    color: var(--color-primary-dark, #1e5bb8);
}

.tip-box-content p {
    margin: 0;
    color: var(--color-text-secondary, #666);
    font-size: 0.95em;
    line-height: 1.5;
}

/* Save Modal */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-overlay.active {
    display: flex;
}

.modal-content {
    background: var(--color-bg-primary, #fff);
    border-radius: var(--radius-lg, 8px);
    max-width: 500px;
    width: 100%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid var(--color-border, #e8e8e8);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    margin: 0;
    color: var(--color-primary, #2a7ae2);
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: var(--color-text-secondary, #999);
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-md, 6px);
    transition: all 0.2s;
}

.modal-close:hover {
    background: var(--color-bg-secondary, #f5f5f5);
    color: var(--color-text-primary, #333);
}

.modal-body {
    padding: 20px;
}

.modal-form-group {
    margin-bottom: 20px;
}

.modal-form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--color-text-primary, #333);
}

.modal-form-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--color-border, #e8e8e8);
    border-radius: var(--radius-md, 6px);
    font-size: 1em;
    transition: border-color 0.2s;
}

.modal-form-group input:focus {
    outline: none;
    border-color: var(--color-primary, #2a7ae2);
}

.modal-footer {
    padding: 20px;
    border-top: 1px solid var(--color-border, #e8e8e8);
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

/* Toast Notifications */
.toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--color-text-primary, #333);
    color: white;
    padding: 15px 25px;
    border-radius: var(--radius-md, 6px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1100;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s;
}

.toast.show {
    transform: translateY(0);
    opacity: 1;
}

.toast.success {
    background: #059669;
}

.toast.error {
    background: #dc2626;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .remix-header h1 {
        font-size: 1.6em;
    }

    .remix-toolbar {
        flex-direction: column;
        align-items: stretch;
    }

    .prompt-selector-group {
        flex-direction: column;
        align-items: stretch;
    }

    #prompt-selector {
        min-width: 100%;
    }

    .toolbar-actions {
        justify-content: center;
    }

    .action-buttons {
        flex-direction: column;
    }

    .action-btn {
        width: 100%;
    }

    .preview-panel {
        display: none;
    }

    .preview-panel.mobile-visible {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        border-radius: 0;
        max-height: 100vh;
    }

    .mobile-preview-toggle {
        display: block;
        width: 100%;
        padding: 12px;
        background: var(--color-bg-secondary, #f5f5f5);
        border: 1px solid var(--color-border, #e8e8e8);
        border-radius: var(--radius-md, 6px);
        margin-bottom: 15px;
        cursor: pointer;
        font-weight: 600;
        color: var(--color-primary, #2a7ae2);
    }

    .mobile-close-preview {
        display: flex;
    }
}

@media (min-width: 769px) {
    .mobile-preview-toggle {
        display: none;
    }

    .mobile-close-preview {
        display: none !important;
    }
}
</style>

<!-- Beta Notice -->
{% include beta-notice.html %}

<div class="remix-container">
    <!-- Header -->
    <div class="remix-header">
        <h1>✏️ Prompt Remix</h1>
        <p>Start from a proven prompt, make it yours. Customize any library prompt with your own examples and preferences.</p>
    </div>

    <!-- Toolbar -->
    <div class="remix-toolbar">
        <div class="prompt-selector-group">
            <label for="prompt-selector">Select Base Prompt:</label>
            <select id="prompt-selector">
                <option value="">-- Choose a prompt to customize --</option>
            </select>
        </div>
        <div class="toolbar-actions">
            <button class="toolbar-btn" id="undo-btn" disabled title="Undo (Ctrl+Z)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Undo
            </button>
            <button class="toolbar-btn" id="redo-btn" disabled title="Redo (Ctrl+Shift+Z)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                </svg>
                Redo
            </button>
        </div>
    </div>

    <!-- Mobile Preview Toggle -->
    <button class="mobile-preview-toggle" id="mobile-preview-toggle">
        📄 Show Preview & Actions
    </button>

    <!-- Main Content -->
    <div class="remix-main">
        <!-- Editor Panel -->
        <div class="editor-panel">
            <div class="panel-header">
                <span>📝 Editor</span>
                <span id="section-count" style="font-weight: normal; color: var(--color-text-secondary); font-size: 0.9em;">0 sections</span>
            </div>
            <div class="editor-content" id="editor-content">
                <div class="preview-empty" id="editor-empty-state">
                    Select a prompt from the dropdown above to start editing.
                </div>
            </div>
        </div>

        <!-- Preview Panel -->
        <div class="preview-panel" id="preview-panel">
            <div class="preview-header">
                <span class="preview-header-title">📋 Live Preview</span>
                <span class="char-counter good" id="char-counter">0 / 5,000</span>
                <button class="toolbar-btn mobile-close-preview" id="close-preview" style="margin-left: 10px;">✕ Close</button>
            </div>
            <div class="preview-content">
                <div id="preview-text" class="preview-empty">
                    Your assembled prompt will appear here as you edit.
                </div>
            </div>
            <div class="action-buttons">
                <button class="action-btn action-btn-primary" id="copy-btn" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                    Copy
                </button>
                <button class="action-btn action-btn-success" id="save-btn" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    Save
                </button>
                <button class="action-btn action-btn-secondary" id="download-btn" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                </button>
            </div>
        </div>
    </div>

    <!-- Tip Box -->
    <div class="tip-box">
        <div class="tip-box-icon">💡</div>
        <div class="tip-box-content">
            <p><strong>Tip:</strong> Few-shot examples are the most powerful part of your prompt. Replace the defaults with 3-5 examples of YOUR ideal A&P format to teach the AI exactly how you like your notes. The examples section is highlighted in yellow for easy access.</p>
        </div>
    </div>
</div>

<!-- Save Modal -->
<div class="modal-overlay" id="save-modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3>💾 Save to Prompt Manager</h3>
            <button class="modal-close" id="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-form-group">
                <label for="save-title">Prompt Title</label>
                <input type="text" id="save-title" placeholder="My Custom A&P Prompt">
            </div>
            <div class="modal-form-group">
                <label for="save-tags">Tags (comma-separated)</label>
                <input type="text" id="save-tags" placeholder="customized, pediatrics, pithy">
            </div>
        </div>
        <div class="modal-footer">
            <button class="action-btn action-btn-secondary" id="modal-cancel">Cancel</button>
            <button class="action-btn action-btn-success" id="modal-save">Save Prompt</button>
        </div>
    </div>
</div>

<!-- Toast Container -->
<div class="toast" id="toast"></div>

<!-- Prompt Library Data -->
<!-- 
  FIX: Added default values for all fields to prevent JavaScript syntax errors
  if any prompt file is missing front matter fields.
  
  Also added error handling around the entire block.
-->
<script>
(function() {
  try {
    window.PROMPT_LIBRARY = {
      {% assign sorted_prompts = site.prompts | sort: "order" %}
      {% for prompt in sorted_prompts %}
      "{{ prompt.title | slugify }}": {
        slug: "{{ prompt.title | slugify }}",
        title: {{ prompt.title | default: "Untitled" | jsonify }},
        description: {{ prompt.description | default: "" | jsonify }},
        specialty: {{ prompt.specialty | default: "General" | jsonify }},
        charCount: {{ prompt.char_count | default: 0 }},
        order: {{ prompt.order | default: 999 }},
        content: {{ prompt.content | default: "" | jsonify }}
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    };
    console.log('✅ PROMPT_LIBRARY loaded:', Object.keys(window.PROMPT_LIBRARY).length, 'prompts');
  } catch (e) {
    console.error('❌ Failed to load PROMPT_LIBRARY:', e);
    window.PROMPT_LIBRARY = {};
  }
})();
</script>

<!-- Prompt Remix JavaScript -->
<script src="{{ '/assets/js/prompt-remix.js' | relative_url }}"></script>

<!-- Newsletter -->
<section class="section" style="margin-top: 60px;">
  <div class="container">
    <h2 class="text-center mb-6">Get Notified of New Features</h2>
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

<!-- Share CTA -->
{% include share-prompt-cta.html %}
