---
layout: page
title: Prompt Manager
description: Manage and organize your AI-generated clinical prompts. Save, edit, and export your custom A&P formatting prompts.
permalink: /prompt-manager/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
        background: var(--color-bg-secondary, #f9fafb);
        color: var(--color-text-primary, #1f2937);
    }

    .wrapper {
        max-width: 1400px;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section */
    .hero {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #065f46;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #047857;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    /* Stats Bar */
    .stats-bar {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
    }

    .stat-item {
        text-align: center;
    }

    .stat-value {
        font-size: 2em;
        font-weight: 700;
        color: #059669;
    }

    .stat-label {
        color: #6b7280;
        font-size: 0.9em;
        margin-top: 5px;
    }

    /* Toolbar */
    .toolbar {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        align-items: center;
    }

    .search-box {
        flex: 1;
        min-width: 250px;
        position: relative;
    }

    .search-box input {
        width: 100%;
        padding: 12px 16px 12px 40px;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-size: 1em;
        transition: border-color 0.2s;
    }

    .search-box input:focus {
        outline: none;
        border-color: #059669;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
    }

    .filter-select {
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-size: 1em;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
    }

    .filter-select:focus {
        outline: none;
        border-color: #059669;
    }

    /* Buttons */
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #059669;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #047857;
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: #6b7280;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #4b5563;
    }

    .btn-danger {
        background: #dc2626;
        color: white;
    }

    .btn-danger:hover:not(:disabled) {
        background: #b91c1c;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    /* Snippet Grid */
    .snippets-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }

    .snippet-card {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: all 0.2s;
        border-left: 4px solid #059669;
        display: flex;
        flex-direction: column;
    }

    .snippet-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .snippet-header {
        margin-bottom: 15px;
    }

    .snippet-title {
        font-size: 1.2em;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 8px;
        word-break: break-word;
    }

    .snippet-meta {
        display: flex;
        gap: 15px;
        font-size: 0.85em;
        color: #6b7280;
        flex-wrap: wrap;
    }

    .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .snippet-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 15px;
    }

    .tag {
        background: #f0fdf4;
        color: #166534;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.85em;
        font-weight: 500;
    }

    .snippet-preview {
        background: #f9fafb;
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 15px;
        flex: 1;
        overflow: hidden;
    }

    .snippet-preview pre {
        margin: 0;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.85em;
        color: #374151;
        white-space: pre-wrap;
        word-break: break-word;
        max-height: 150px;
        overflow: hidden;
        position: relative;
    }

    .snippet-preview pre::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30px;
        background: linear-gradient(to bottom, transparent, #f9fafb);
    }

    .snippet-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    /* Empty State */
    .empty-state {
        text-align: center;
        padding: 80px 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .empty-state-icon {
        font-size: 4em;
        margin-bottom: 20px;
        opacity: 0.5;
    }

    .empty-state h2 {
        color: #6b7280;
        margin-bottom: 15px;
    }

    .empty-state p {
        color: #9ca3af;
        margin-bottom: 25px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Modal */
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        padding: 20px;
        overflow-y: auto;
    }

    .modal.active {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background: white;
        border-radius: 12px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
    }

    .modal-header {
        padding: 20px 30px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-header h2 {
        margin: 0;
        color: #059669;
    }

    .modal-close {
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: #9ca3af;
        padding: 0;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        transition: all 0.2s;
    }

    .modal-close:hover {
        background: #f3f4f6;
        color: #1f2937;
    }

    .modal-body {
        padding: 30px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #374151;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1em;
        transition: border-color 0.2s;
    }

    .form-group textarea {
        min-height: 300px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #059669;
    }

    .char-count {
        text-align: right;
        font-size: 0.9em;
        color: #6b7280;
        margin-top: 5px;
    }

    .char-count.warning {
        color: #f59e0b;
        font-weight: 600;
    }

    .char-count.error {
        color: #dc2626;
        font-weight: 600;
    }

    .modal-footer {
        padding: 20px 30px;
        border-top: 1px solid #e5e7eb;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    /* Info Box */
    .info-box {
        background: #f0fdf4;
        border-left: 4px solid #059669;
        padding: 20px;
        border-radius: 6px;
        margin-bottom: 30px;
    }

    .info-box h3 {
        color: #065f46;
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    .info-box ul {
        margin-left: 20px;
        color: #047857;
    }

    .info-box li {
        margin-bottom: 8px;
        line-height: 1.6;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .hero h1 {
            font-size: 1.8em;
        }

        .hero-subtitle {
            font-size: 1em;
        }

        .snippets-grid {
            grid-template-columns: 1fr;
        }

        .toolbar {
            flex-direction: column;
        }

        .search-box {
            width: 100%;
        }

        .stats-bar {
            flex-direction: column;
            gap: 15px;
        }

        .snippet-actions {
            flex-direction: column;
        }

        .snippet-actions .btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: text-bottom; margin-right: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>Prompt Manager</h1>
        <p class="hero-subtitle">
            Organize and manage your AI-generated clinical prompts. Save, edit, and export your custom A&P formatting prompts for easy access.
        </p>
    </div>
</div>

<div class="container">
    <!-- Premium Banner -->
    <div style="background: #fff7ed; border: 1px solid #fdba74; padding: 15px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; color: #f59e0b;">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
        <div>
            <strong style="color: #9a3412;">Premium Feature</strong>
            <p style="margin: 0; color: #c2410c; font-size: 0.9em;">This tool is part of our Premium suite. Please consider supporting the project if you find it useful.</p>
        </div>
    </div>

    <!-- Info Box -->
    <div class="info-box">
        <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>How to Use This Tool</h3>
        <ul>
            <li><strong>Save prompts</strong> from the AI Prompt Assistant tool</li>
            <li><strong>Organize</strong> with tags and meaningful titles</li>
            <li><strong>Search & Filter</strong> to quickly find the right prompt</li>
            <li><strong>Edit & Refine</strong> your saved prompts over time</li>
            <li><strong>Export</strong> your entire collection or individual prompts</li>
        </ul>
    </div>

    <!-- Stats Bar -->
    <div class="stats-bar" id="stats-bar">
        <div class="stat-item">
            <div class="stat-value" id="total-snippets">0</div>
            <div class="stat-label">Total Prompts</div>
        </div>
        <div class="stat-item">
            <div class="stat-value" id="total-tags">0</div>
            <div class="stat-label">Unique Tags</div>
        </div>
        <div class="stat-item">
            <div class="stat-value" id="storage-used">0 KB</div>
            <div class="stat-label">Storage Used</div>
        </div>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
        <div class="search-box">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input type="text" id="search-input" placeholder="Search prompts by title or content...">
        </div>

        <select id="tag-filter" class="filter-select">
            <option value="">All Tags</option>
        </select>

        <button class="btn btn-primary btn-sm" onclick="createNewSnippet()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg> New Snippet
        </button>

        <button class="btn btn-secondary btn-sm" onclick="exportAllSnippets()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" /></svg> Export All
        </button>

        <button class="btn btn-primary btn-sm" onclick="importSnippets()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" /></svg> Import
        </button>

        <button class="btn btn-danger btn-sm" onclick="clearAllSnippets()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg> Clear All
        </button>
    </div>

    <!-- Snippets Grid -->
    <div id="snippets-container">
        <!-- Snippets will be inserted here -->
    </div>
</div>

<!-- View/Edit Modal -->
<div class="modal" id="edit-modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="modal-title">Edit Prompt</h2>
            <button class="modal-close" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <form id="edit-form">
                <input type="hidden" id="edit-id">

                <div class="form-group">
                    <label for="edit-title">Title</label>
                    <input type="text" id="edit-title" placeholder="Enter a descriptive title" required>
                </div>

                <div class="form-group">
                    <label for="edit-tags">Tags (comma-separated)</label>
                    <input type="text" id="edit-tags" placeholder="e.g., a&p-formatting, pediatrics, concise">
                </div>

                <div class="form-group">
                    <label for="edit-content">Prompt Content</label>
                    <textarea id="edit-content" placeholder="Paste or edit your prompt here..." required></textarea>
                    <div class="char-count" id="edit-char-count">0 characters</div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveEdit()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg> Save Changes</button>
        </div>
    </div>
</div>

<!-- View Modal -->
<div class="modal" id="view-modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="view-title">Prompt Details</h2>
            <button class="modal-close" onclick="closeViewModal()">&times;</button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>Title</label>
                <div id="view-modal-title" style="padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 15px;"></div>
            </div>

            <div class="form-group">
                <label>Tags</label>
                <div id="view-modal-tags" style="padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 15px;"></div>
            </div>

            <div class="form-group">
                <label>Content</label>
                <pre id="view-modal-content" style="padding: 15px; background: #f9fafb; border-radius: 6px; white-space: pre-wrap; word-break: break-word; max-height: 400px; overflow-y: auto; font-family: 'Monaco', 'Courier New', monospace; font-size: 0.9em;"></pre>
                <div class="char-count" id="view-char-count">0 characters</div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeViewModal()">Close</button>
            <button class="btn btn-primary" onclick="copyFromView()"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg> Copy to Clipboard</button>
        </div>
    </div>
</div>

<script>
    // =====================================================
    // STATE
    // =====================================================
    let snippets = [];
    let filteredSnippets = [];
    let currentEditId = null;
    let currentViewContent = '';

    // =====================================================
    // INITIALIZATION
    // =====================================================
    document.addEventListener('DOMContentLoaded', () => {
        loadSnippets();
        renderSnippets();
        updateStats();
        populateTagFilter();

        // Add event listeners
        document.getElementById('search-input').addEventListener('input', filterSnippets);
        document.getElementById('tag-filter').addEventListener('change', filterSnippets);
        document.getElementById('edit-content').addEventListener('input', updateCharCount);

        // Close modal on background click
        document.getElementById('edit-modal').addEventListener('click', (e) => {
            if (e.target.id === 'edit-modal') closeModal();
        });

        document.getElementById('view-modal').addEventListener('click', (e) => {
            if (e.target.id === 'view-modal') closeViewModal();
        });
    });

    // =====================================================
    // LOAD & SAVE
    // =====================================================
    function loadSnippets() {
        try {
            const stored = localStorage.getItem('aiPromptSnippets');
            snippets = stored ? JSON.parse(stored) : [];
            filteredSnippets = [...snippets];
        } catch (error) {
            console.error('Error loading snippets:', error);
            snippets = [];
            filteredSnippets = [];
        }
    }

    function saveSnippets() {
        try {
            localStorage.setItem('aiPromptSnippets', JSON.stringify(snippets));
        } catch (error) {
            alert('Failed to save snippets. Storage might be full.');
            console.error('Save error:', error);
        }
    }

    // =====================================================
    // RENDER
    // =====================================================
    function renderSnippets() {
        const container = document.getElementById('snippets-container');

        if (filteredSnippets.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg></div>
                    <h2>No Prompts Yet</h2>
                    <p>Start by creating prompts in the AI Prompt Assistant tool, then save them here for easy access.</p>
                    <a href="/prompt-assistant" class="btn btn-primary">Go to AI Prompt Assistant</a>
                </div>
            `;
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'snippets-grid';

        filteredSnippets.forEach(snippet => {
            const card = document.createElement('div');
            card.className = 'snippet-card';

            const formattedDate = new Date(snippet.created).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            card.innerHTML = `
                <div class="snippet-header">
                    <div class="snippet-title">${escapeHtml(snippet.title)}</div>
                    <div class="snippet-meta">
                        <div class="meta-item">
                            📅 ${formattedDate}
                        </div>
                        <div class="meta-item">
                            📏 ${snippet.charCount.toLocaleString()} chars
                        </div>
                    </div>
                </div>
                <div class="snippet-tags">
                    ${snippet.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
                <div class="snippet-preview">
                    <pre>${escapeHtml(snippet.content.substring(0, 200))}${snippet.content.length > 200 ? '...' : ''}</pre>
                </div>
                <div class="snippet-actions">
                    <button class="btn btn-sm btn-primary" onclick="viewSnippet(${snippet.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg> View
                    </button>
                    <button class="btn btn-sm btn-secondary" onclick="editSnippet(${snippet.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg> Edit
                    </button>
                    <button class="btn btn-sm btn-secondary" onclick="copySnippet(${snippet.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg> Copy
                    </button>
                    <button class="btn btn-sm btn-secondary" onclick="duplicateSnippet(${snippet.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg> Duplicate
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteSnippet(${snippet.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg> Delete
                    </button>
                </div>
            `;

            grid.appendChild(card);
        });

        container.innerHTML = '';
        container.appendChild(grid);
    }

    // =====================================================
    // FILTER & SEARCH
    // =====================================================
    function filterSnippets() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const tagFilter = document.getElementById('tag-filter').value;

        filteredSnippets = snippets.filter(snippet => {
            const matchesSearch = !searchTerm ||
                snippet.title.toLowerCase().includes(searchTerm) ||
                snippet.content.toLowerCase().includes(searchTerm) ||
                snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm));

            const matchesTag = !tagFilter || snippet.tags.includes(tagFilter);

            return matchesSearch && matchesTag;
        });

        renderSnippets();
    }

    function populateTagFilter() {
        const allTags = new Set();
        snippets.forEach(snippet => {
            snippet.tags.forEach(tag => allTags.add(tag));
        });

        const select = document.getElementById('tag-filter');
        const currentValue = select.value;

        select.innerHTML = '<option value="">All Tags</option>';

        Array.from(allTags).sort().forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            option.textContent = tag;
            select.appendChild(option);
        });

        select.value = currentValue;
    }

    // =====================================================
    // VIEW SNIPPET
    // =====================================================
    window.viewSnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        currentViewContent = snippet.content;

        document.getElementById('view-title').textContent = snippet.title;
        document.getElementById('view-modal-title').textContent = snippet.title;
        document.getElementById('view-modal-tags').innerHTML = snippet.tags.map(tag =>
            `<span class="tag">${escapeHtml(tag)}</span>`
        ).join(' ');
        document.getElementById('view-modal-content').textContent = snippet.content;
        document.getElementById('view-char-count').textContent = `${snippet.charCount.toLocaleString()} characters`;

        document.getElementById('view-modal').classList.add('active');
    };

    window.closeViewModal = function() {
        document.getElementById('view-modal').classList.remove('active');
    };

    window.copyFromView = function() {
        navigator.clipboard.writeText(currentViewContent).then(() => {
            const btn = event.currentTarget || event.target.closest('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            alert('Failed to copy to clipboard');
            console.error(err);
        });
    };

    // =====================================================
    // CREATE NEW SNIPPET
    // =====================================================
    window.createNewSnippet = function() {
        currentEditId = null;

        document.getElementById('modal-title').textContent = 'Create New Prompt';
        document.getElementById('edit-id').value = '';
        document.getElementById('edit-title').value = '';
        document.getElementById('edit-tags').value = '';
        document.getElementById('edit-content').value = '';

        updateCharCount();

        document.getElementById('edit-modal').classList.add('active');
        document.getElementById('edit-title').focus();
    };

    // =====================================================
    // EDIT SNIPPET
    // =====================================================
    window.editSnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        currentEditId = id;

        document.getElementById('modal-title').textContent = 'Edit Prompt';
        document.getElementById('edit-id').value = id;
        document.getElementById('edit-title').value = snippet.title;
        document.getElementById('edit-tags').value = snippet.tags.join(', ');
        document.getElementById('edit-content').value = snippet.content;

        updateCharCount();

        document.getElementById('edit-modal').classList.add('active');
    };

    window.saveEdit = function() {
        const title = document.getElementById('edit-title').value.trim();
        const tags = document.getElementById('edit-tags').value
            .split(',')
            .map(t => t.trim())
            .filter(t => t.length > 0);
        const content = document.getElementById('edit-content').value.trim();

        if (!title || !content) {
            alert('Title and content are required');
            return;
        }

        if (currentEditId === null) {
            // Create new snippet
            const newSnippet = {
                id: Date.now(),
                title: title,
                content: content,
                tags: tags.length > 0 ? tags : ['custom'],
                created: new Date().toISOString(),
                charCount: content.length
            };
            snippets.unshift(newSnippet);
        } else {
            // Edit existing snippet
            const snippetIndex = snippets.findIndex(s => s.id === currentEditId);
            if (snippetIndex === -1) return;

            snippets[snippetIndex].title = title;
            snippets[snippetIndex].tags = tags.length > 0 ? tags : snippets[snippetIndex].tags;
            snippets[snippetIndex].content = content;
            snippets[snippetIndex].charCount = content.length;
        }

        saveSnippets();
        closeModal();
        filterSnippets();
        updateStats();
        populateTagFilter();
    };

    window.closeModal = function() {
        document.getElementById('edit-modal').classList.remove('active');
        document.getElementById('edit-form').reset();
        currentEditId = null;
    };

    function updateCharCount() {
        const content = document.getElementById('edit-content').value;
        const count = content.length;
        const counter = document.getElementById('edit-char-count');

        let message = `${count.toLocaleString()} characters`;

        counter.className = 'char-count';
        if (count > 5000) {
            counter.classList.add('error');
            message += ' ⚠️ Over Epic limit (5,000)';
        } else if (count > 4500) {
            counter.classList.add('warning');
            message += ' ⚠️ Close to Epic limit';
        } else {
            message += ' ✅';
        }

        counter.textContent = message;
    }

    // =====================================================
    // COPY SNIPPET
    // =====================================================
    window.copySnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        navigator.clipboard.writeText(snippet.content).then(() => {
            const btn = event.currentTarget || event.target.closest('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            alert('Failed to copy to clipboard');
            console.error(err);
        });
    };

    // =====================================================
    // DUPLICATE SNIPPET
    // =====================================================
    window.duplicateSnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        const newSnippet = {
            ...snippet,
            id: Date.now(),
            title: `${snippet.title} (Copy)`,
            created: new Date().toISOString()
        };

        snippets.unshift(newSnippet);
        saveSnippets();
        filterSnippets();
        updateStats();
    };

    // =====================================================
    // DELETE SNIPPET
    // =====================================================
    window.deleteSnippet = function(id) {
        if (!confirm('Are you sure you want to delete this prompt?')) return;

        const index = snippets.findIndex(s => s.id === id);
        if (index === -1) return;

        snippets.splice(index, 1);
        saveSnippets();
        filterSnippets();
        updateStats();
        populateTagFilter();
    };

    // =====================================================
    // EXPORT & IMPORT
    // =====================================================
    window.exportAllSnippets = function() {
        if (snippets.length === 0) {
            alert('No prompts to export');
            return;
        }

        const dataStr = JSON.stringify(snippets, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `prompt-snippets-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.importSnippets = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';

        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);

                    if (!Array.isArray(imported)) {
                        alert('Invalid import file format');
                        return;
                    }

                    const validSnippets = imported.filter(s =>
                        s.id && s.title && s.content && s.created
                    );

                    if (validSnippets.length === 0) {
                        alert('No valid prompts found in import file');
                        return;
                    }

                    // Add imported snippets (avoid duplicates by checking IDs)
                    const existingIds = new Set(snippets.map(s => s.id));
                    const newSnippets = validSnippets.filter(s => !existingIds.has(s.id));

                    if (newSnippets.length === 0) {
                        alert('All prompts in the import file already exist');
                        return;
                    }

                    snippets = [...snippets, ...newSnippets];
                    saveSnippets();
                    filterSnippets();
                    updateStats();
                    populateTagFilter();

                    alert(`Successfully imported ${newSnippets.length} prompt(s)`);
                } catch (error) {
                    alert('Error importing file: ' + error.message);
                    console.error(error);
                }
            };

            reader.readAsText(file);
        };

        input.click();
    };

    window.clearAllSnippets = function() {
        if (!confirm('⚠️ WARNING: This will delete ALL saved prompts. This action cannot be undone.\n\nAre you sure?')) {
            return;
        }

        if (!confirm('This is your last chance. Really delete everything?')) {
            return;
        }

        snippets = [];
        filteredSnippets = [];
        saveSnippets();
        renderSnippets();
        updateStats();
        populateTagFilter();
    };

    // =====================================================
    // STATS
    // =====================================================
    function updateStats() {
        const allTags = new Set();
        snippets.forEach(snippet => {
            snippet.tags.forEach(tag => allTags.add(tag));
        });

        const storageSize = new Blob([JSON.stringify(snippets)]).size;
        const sizeKB = (storageSize / 1024).toFixed(1);

        document.getElementById('total-snippets').textContent = snippets.length;
        document.getElementById('total-tags').textContent = allTags.size;
        document.getElementById('storage-used').textContent = `${sizeKB} KB`;
    }

    // =====================================================
    // UTILITIES
    // =====================================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
</script>

<div class="embed-container" style="text-align: center; margin: 30px auto;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #059669; border-radius: 6px; margin-top: 30px; text-align: center;">
    <h3 style="color: #065f46; font-size: 1.2em; margin-bottom: 12px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>Pro Tips
    </h3>
    <p style="margin-bottom: 15px;">Use meaningful titles and tags to organize your prompts. Export your collection regularly as a backup. Consider versioning your prompts by including dates in titles.</p>
    <p><strong>Storage:</strong> All data is stored locally in your browser. Clear your browser data = lose your prompts. Always export important prompts!</p>
</div>

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1SNVZe7Uvbzj9s15pCFsmFpr"
  publishable-key="pk_live_51SNUyr7Uvbzj9s15RUuLxFZ59ZIV0Mlh9sZSz01SpTxbvAgHyUmPDYSKWxLfi352CPXoaG2ztf1FE349LaMp18Wj00Saf0EVjo"
>
</stripe-buy-button>