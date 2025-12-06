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
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    padding: 40px 30px;
    border-radius: var(--radius-lg, 8px);
    margin-bottom: 30px;
    text-align: center;
}

.remix-header h1 {
    color: #065f46;
    font-size: 2.2em;
    margin-bottom: 10px;
}

.remix-header p {
    color: #047857;
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

<div class="remix-container">
    <!-- Header -->
    <div class="remix-header">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: middle; margin-right: 10px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Prompt Remix
        </h1>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 6px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Show Preview & Actions
    </button>

    <!-- Main Content -->
    <div class="remix-main">
        <!-- Editor Panel -->
        <div class="editor-panel">
            <div class="panel-header">
                <span style="display: flex; align-items: center; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    Editor
                </span>
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
                <span class="preview-header-title" style="display: flex; align-items: center; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    Live Preview
                </span>
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
                <button class="action-btn" id="test-btn" style="background: #8b5cf6; color: white;" onclick="window.promptRemix.testInWorkbench()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    Test in Workbench
                </button>
            </div>
        </div>
    </div>

    <!-- Tip Box -->
    <div class="tip-box">
        <div class="tip-box-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-11.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        </div>
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

<!-- Workbench Section -->
<div id="workbench-section" style="margin-top: 60px; padding-top: 40px; border-top: 1px solid #e5e7eb;">
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 30px; color: #1e5bb8;"> Clinical AI Workbench</h2>
    
    <!-- Educational Context -->
    <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 6px; margin-bottom: 24px;">
      <h3 style="margin-top: 0; color: #0369a1; font-size: 1.1em; display: flex; align-items: center; gap: 8px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.499 5.258 50.55 50.55 0 0 0-2.658.813m-15.482 0A50.55 50.55 0 0 1 12 13.489a50.55 50.55 0 0 1 6.74-3.342" />
        </svg>
        Learning Goal: Iterative Testing
      </h3>
      <p style="margin-bottom: 10px; color: #334155; line-height: 1.6;">
        The goal of this workbench is to teach the <strong>process</strong> of building a case library and iteratively testing your prompts.
      </p>
      <ul style="margin: 0; padding-left: 20px; color: #475569; line-height: 1.6;">
        <li style="margin-bottom: 8px;"><strong>Model Differences:</strong> This tool runs a small AI model directly in your browser for privacy. It is less powerful than the large models you likely use at work (like Claude or Gemini).</li>
        <li style="margin-bottom: 8px;"><strong>Performance:</strong> Some complex prompts from the library may not work perfectly here. That's expected! If a prompt works well on this small model, it will likely work <em>even better</em> on larger models.</li>
        <li><strong>Best Practice:</strong> Use this tool to refine the <em>structure</em> and <em>logic</em> of your prompt. Once the logic holds up here, you can be confident testing it in your actual work environment and continuing to fine tune from there.</li>
      </ul>
    </div>

    <div class="safety-banner" style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; align-items: flex-start; gap: 12px;">
      <div class="safety-icon" style="font-size: 24px;">⚠️</div>
      <div>
        <strong>Safety First: Synthetic Data Only</strong><br>
        This tool is for <strong>prompt refinement and testing only</strong>. Do not enter real patient data. Use the provided synthetic cases or create your own de-identified examples.
      </div>
    </div>

    <div style="text-align: right; margin-bottom: 16px;">
      <span id="llm-status" class="status-indicator status-loading" style="display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-left: 8px; background: #dbeafe; color: #1e40af;">AI Not Loaded</span>
      <button id="btn-init-ai" class="btn btn-sm btn-outline" style="padding: 8px 16px; border: 1px solid #e5e7eb; border-radius: 6px; background: white; cursor: pointer;">Initialize AI Engine</button>
    </div>

    <div class="workbench-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
      
      <div class="selector-card" style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
        <h3 style="margin-top: 0; font-size: 18px; margin-bottom: 12px;">1. Select Prompt</h3>
        <select id="prompt-select" class="form-select" style="width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px;">
          <option value="">Choose a prompt...</option>
        </select>
        <div style="margin-top: 12px;">
          <button id="btn-view-prompt" class="btn btn-xs btn-text" disabled style="background: none; border: none; color: #2a7ae2; cursor: pointer; padding: 0;">View Full Prompt</button>
        </div>
      </div>

      <div class="selector-card" style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
        <h3 style="margin-top: 0; font-size: 18px; margin-bottom: 12px;">2. Select Case Data</h3>
        <select id="case-select" class="form-select" style="width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px;">
          <option value="custom">Custom Input</option>
        </select>
        <div style="margin-top: 12px;">
          <textarea id="case-input" class="form-textarea" placeholder="Paste your synthetic case data here..." style="width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px; min-height: 150px; font-family: monospace;"></textarea>
        </div>
      </div>

    </div>

    <div style="text-align: center; margin-bottom: 24px;">
      <button id="btn-run" class="btn btn-primary btn-lg" disabled style="padding: 12px 24px; background: #2a7ae2; color: white; border: none; border-radius: 6px; font-size: 1.1em; cursor: pointer;">Run Prompt</button>
    </div>

    <div id="output-box" class="output-box" style="background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 20px; border-radius: 4px; margin-top: 24px; display: none;">
      <h3 style="margin-top: 0;">Output</h3>
      <div id="output-content" class="output-content" style="white-space: pre-wrap; font-family: monospace;"></div>
    </div>

  </div>
</div>

<div id="prompt-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10000; padding: 40px;">
  <div style="background: white; max-width: 800px; margin: 0 auto; padding: 30px; border-radius: 8px; max-height: 80vh; overflow-y: auto;">
    <h3>Full Prompt</h3>
    <pre id="modal-prompt-content" style="background: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-size: 13px;"></pre>
    <button class="btn btn-secondary mt-3" onclick="document.getElementById('prompt-modal').style.display='none'" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 15px;">Close</button>
  </div>
</div>

<!-- Workbench Scripts -->
<script type="module" src="{{ '/assets/js/clinical-workbench.js' | relative_url }}"></script>

<!-- Prompt Remix JavaScript -->
<script src="{{ '/assets/js/prompt-remix.js' | relative_url }}"></script>

<!-- Newsletter -->
<section class="section" style="margin-top: 60px;">
  <div class="container">

    <div class="embed-container">
      {% include newsletter.html %}
    </div>
  </div>
</section>

<!-- Share CTA -->
{% include share-prompt-cta.html %}
