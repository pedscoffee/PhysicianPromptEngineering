---
layout: page
title: Personal Prompt Snippet Manager
description: Save and manage your favorite AI prompts with our free, privacy-first snippet manager. Store prompts locally in your browser—no account needed, 100% HIPAA-compliant.
permalink: /prompt-manager/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background: #f5f5f5;
        color: #333;
        line-height: 1.6;
    }

    .wrapper {
        max-width: 1640px;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .header {
        background: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header h1 {
        font-size: 2em;
        margin-bottom: 10px;
        color: #2a7ae2;
    }

    .header p {
        color: #666;
        font-size: 1.05em;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .privacy-icon {
        color: #2a7ae2;
        font-size: 1.2em;
    }

    .controls-bar {
        background: white;
        padding: 20px 30px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
    }

    .controls-group {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
    }

    .controls-group label {
        font-size: 0.95em;
        font-weight: 500;
        color: #333;
    }

    select {
        padding: 8px 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-size: 0.95em;
        color: #333;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
    }

    select:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        font-size: 0.95em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
    }

    .btn-primary:hover {
        background: #1e5bb8;
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover {
        background: #218838;
    }

    .btn-secondary {
        background: #e8e8e8;
        color: #333;
    }

    .btn-secondary:hover {
        background: #d4d4d4;
    }

    .btn-danger {
        background: #dc3545;
        color: white;
    }

    .btn-danger:hover {
        background: #c82333;
    }

    .main-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: start;
    }

    @media (max-width: 1200px) {
        .main-layout {
            grid-template-columns: 1fr;
        }
    }

    .panel {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
    }

    .panel-header h2 {
        color: #2a7ae2;
        font-size: 1.3em;
    }

    .form-panel {
        position: sticky;
        top: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        font-weight: 500;
        margin-bottom: 8px;
        color: #333;
    }

    .form-group label span {
        color: #999;
        font-size: 0.85em;
        font-weight: 400;
    }

    .form-group input[type="text"],
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: inherit;
        font-size: 0.95em;
        transition: border-color 0.2s;
    }

    .form-group textarea {
        font-family: 'Monaco', 'Courier New', monospace;
        resize: vertical;
        min-height: 250px;
    }

    .form-group input[type="text"]:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .char-counter {
        text-align: right;
        font-size: 0.85em;
        color: #666;
        margin-top: 5px;
    }

    .form-actions {
        display: flex;
        gap: 10px;
    }

    .form-actions .btn {
        flex: 1;
    }

    .snippet-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .snippet-card {
        border: 2px solid #e8e8e8;
        border-radius: 8px;
        padding: 20px;
        transition: all 0.2s;
        animation: fadeIn 0.3s ease-out;
    }

    .snippet-card:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.08);
        border-color: #2a7ae2;
    }

    .snippet-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #333;
        margin-bottom: 10px;
    }

    .snippet-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 12px;
    }

    .tag {
        background: #e3f2fd;
        color: #2a7ae2;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 0.85em;
        font-weight: 500;
    }

    .snippet-preview {
        color: #666;
        font-size: 0.95em;
        margin-bottom: 15px;
        line-height: 1.5;
    }

    .snippet-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .snippet-actions .btn {
        font-size: 0.9em;
        padding: 6px 14px;
    }

    .empty-state {
        text-align: center;
        padding: 60px 30px;
        background: #fafafa;
        border: 2px dashed #e8e8e8;
        border-radius: 8px;
    }

    .empty-state-icon {
        font-size: 4em;
        color: #2a7ae2;
        margin-bottom: 20px;
    }

    .empty-state h3 {
        color: #333;
        font-size: 1.3em;
        margin-bottom: 10px;
    }

    .empty-state p {
        color: #666;
        margin-bottom: 8px;
    }

    .empty-state p:last-child {
        color: #999;
        font-size: 0.9em;
    }

    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
    }

    .modal {
        background: white;
        border-radius: 8px;
        padding: 30px;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        animation: fadeIn 0.2s ease-out;
    }

    .modal h3 {
        font-size: 1.3em;
        color: #333;
        margin-bottom: 15px;
    }

    .modal p {
        color: #666;
        margin-bottom: 25px;
        line-height: 1.6;
    }

    .modal-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .hidden {
        display: none !important;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    input[type="file"] {
        display: none;
    }
</style>

<div class="container">
    <!-- Header -->
    <header class="header">
        <h1>Prompt Snippet Manager</h1>
        <p>
            <span class="privacy-icon">🔒</span>
            Your data is saved 100% in your browser. It never leaves this device.
        </p>
    </header>

    <!-- Controls Bar -->
    <div class="controls-bar">
        <div class="controls-group">
            <label>Sort by:</label>
            <select id="sort-select">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
                <option value="tag">By Tag</option>
            </select>

            <label>Filter by tag:</label>
            <select id="tag-filter">
                <option value="">All Tags</option>
            </select>
        </div>

        <div class="controls-group">
            <button id="export-btn" class="btn btn-success">
                <span>⬇</span> Export
            </button>
            <button id="import-btn" class="btn btn-primary">
                <span>⬆</span> Import
            </button>
            <input type="file" id="import-file" accept=".json">
        </div>
    </div>

    <!-- Main Layout -->
    <div class="main-layout">
        <!-- Left: Snippet List -->
        <div>
            <div class="panel">
                <div class="panel-header">
                    <h2>Saved Snippets</h2>
                </div>
                <div id="snippet-list" class="snippet-list">
                    <!-- Snippets rendered here -->
                </div>
            </div>
        </div>

        <!-- Right: Form -->
        <div>
            <div class="panel form-panel">
                <div class="panel-header">
                    <h2 id="form-title">Add New Snippet</h2>
                </div>

                <form id="prompt-form">
                    <input type="hidden" id="snippet-id">

                    <div class="form-group">
                        <label>Title <span>(max 100 characters)</span></label>
                        <input type="text" id="snippet-title" maxlength="100" required placeholder="e.g., Patient-Friendly Explainer">
                    </div>

                    <div class="form-group">
                        <label>Tags <span>(comma-separated)</span></label>
                        <input type="text" id="snippet-tags" placeholder="e.g., diagnosis, patient-education, clinical">
                    </div>

                    <div class="form-group">
                        <label>Prompt Text <span>(max 5000 characters)</span></label>
                        <textarea id="snippet-prompt" maxlength="5000" required placeholder="Enter your AI prompt here..."></textarea>
                        <div class="char-counter">
                            <span id="char-count">0</span> / 5,000 characters
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" id="save-btn" class="btn btn-primary">Save Snippet</button>
                        <button type="button" id="cancel-btn" class="btn btn-secondary hidden">Cancel</button>
                        <button type="button" id="clear-btn" class="btn btn-secondary">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Delete Modal -->
<div id="delete-modal" class="modal-overlay hidden">
    <div class="modal">
        <h3>Delete Snippet?</h3>
        <p>Are you sure you want to delete this snippet? This action cannot be undone.</p>
        <div class="modal-actions">
            <button id="cancel-delete" class="btn btn-secondary">Cancel</button>
            <button id="confirm-delete" class="btn btn-danger">Delete</button>
        </div>
    </div>
</div>

<script>
    // =====================================================
    // STATE & DOM ELEMENTS
    // =====================================================
    let snippets = [];
    let deleteTargetId = null;
    let currentSort = 'newest';
    let currentTagFilter = '';

    const elements = {
        snippetList: document.getElementById('snippet-list'),
        form: document.getElementById('prompt-form'),
        snippetId: document.getElementById('snippet-id'),
        title: document.getElementById('snippet-title'),
        tags: document.getElementById('snippet-tags'),
        prompt: document.getElementById('snippet-prompt'),
        saveBtn: document.getElementById('save-btn'),
        cancelBtn: document.getElementById('cancel-btn'),
        clearBtn: document.getElementById('clear-btn'),
        charCount: document.getElementById('char-count'),
        formTitle: document.getElementById('form-title'),
        sortSelect: document.getElementById('sort-select'),
        tagFilter: document.getElementById('tag-filter'),
        exportBtn: document.getElementById('export-btn'),
        importBtn: document.getElementById('import-btn'),
        importFile: document.getElementById('import-file'),
        deleteModal: document.getElementById('delete-modal'),
        confirmDelete: document.getElementById('confirm-delete'),
        cancelDelete: document.getElementById('cancel-delete')
    };

    // =====================================================
    // INITIALIZATION
    // =====================================================
    function init() {
        loadSnippets();
        attachEventListeners();
    }

    function attachEventListeners() {
        elements.form.addEventListener('submit', handleFormSubmit);
        elements.clearBtn.addEventListener('click', clearForm);
        elements.cancelBtn.addEventListener('click', clearForm);
        elements.snippetList.addEventListener('click', handleListClick);
        elements.prompt.addEventListener('input', updateCharCount);
        elements.sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderSnippets();
        });
        elements.tagFilter.addEventListener('change', (e) => {
            currentTagFilter = e.target.value;
            renderSnippets();
        });
        elements.exportBtn.addEventListener('click', exportSnippets);
        elements.importBtn.addEventListener('click', () => elements.importFile.click());
        elements.importFile.addEventListener('change', handleFileImport);
        elements.confirmDelete.addEventListener('click', confirmDelete);
        elements.cancelDelete.addEventListener('click', cancelDelete);
        elements.deleteModal.addEventListener('click', (e) => {
            if (e.target === elements.deleteModal) cancelDelete();
        });
    }

    // =====================================================
    // DATA MANAGEMENT
    // =====================================================
    function loadSnippets() {
        const stored = localStorage.getItem('physicianPromptSnippets');
        if (stored) {
            try {
                snippets = JSON.parse(stored);
            } catch (e) {
                console.error('Error parsing snippets:', e);
                snippets = [];
            }
        }
        updateTagFilter();
        renderSnippets();
    }

    function saveSnippets() {
        localStorage.setItem('physicianPromptSnippets', JSON.stringify(snippets));
        updateTagFilter();
    }

    function getAllTags() {
        const tagSet = new Set();
        snippets.forEach(snippet => {
            if (snippet.tags) {
                snippet.tags.forEach(tag => tagSet.add(tag.trim().toLowerCase()));
            }
        });
        return Array.from(tagSet).sort();
    }

    function updateTagFilter() {
        const allTags = getAllTags();
        const currentValue = elements.tagFilter.value;
        
        elements.tagFilter.innerHTML = '<option value="">All Tags</option>';
        allTags.forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            option.textContent = tag;
            if (tag === currentValue) option.selected = true;
            elements.tagFilter.appendChild(option);
        });
    }

    // =====================================================
    // SORTING & FILTERING
    // =====================================================
    function sortSnippets(snippetsToSort) {
        const sorted = [...snippetsToSort];
        switch (currentSort) {
            case 'newest':
                sorted.sort((a, b) => b.id - a.id);
                break;
            case 'oldest':
                sorted.sort((a, b) => a.id - b.id);
                break;
            case 'alphabetical':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'tag':
                sorted.sort((a, b) => {
                    const aTag = a.tags && a.tags.length > 0 ? a.tags[0] : 'zzz';
                    const bTag = b.tags && b.tags.length > 0 ? b.tags[0] : 'zzz';
                    return aTag.localeCompare(bTag);
                });
                break;
        }
        return sorted;
    }

    function filterSnippets(snippetsToFilter) {
        if (!currentTagFilter) return snippetsToFilter;
        return snippetsToFilter.filter(snippet => {
            if (!snippet.tags) return false;
            return snippet.tags.some(tag => tag.trim().toLowerCase() === currentTagFilter);
        });
    }

    // =====================================================
    // RENDERING
    // =====================================================
    function renderSnippets() {
        let displaySnippets = filterSnippets(snippets);
        displaySnippets = sortSnippets(displaySnippets);

        if (displaySnippets.length === 0) {
            if (snippets.length === 0) {
                elements.snippetList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📝</div>
                        <h3>No snippets yet!</h3>
                        <p>Get started by creating your first AI prompt snippet.</p>
                        <p>Your snippets will be saved securely in your browser.</p>
                    </div>
                `;
            } else {
                elements.snippetList.innerHTML = `
                    <div class="empty-state">
                        <p style="margin-bottom: 15px;">No snippets match the current filter.</p>
                        <button onclick="document.getElementById('tag-filter').value = ''; currentTagFilter = ''; renderSnippets();" class="btn btn-primary">
                            Clear filter
                        </button>
                    </div>
                `;
            }
            return;
        }

        elements.snippetList.innerHTML = displaySnippets.map(snippet => {
            const tagsHtml = snippet.tags && snippet.tags.length > 0
                ? `<div class="snippet-tags">${snippet.tags.map(tag => 
                    `<span class="tag">${escapeHtml(tag)}</span>`
                ).join('')}</div>`
                : '';

            const preview = snippet.prompt.length > 120 
                ? snippet.prompt.substring(0, 120) + '...' 
                : snippet.prompt;

            return `
                <div class="snippet-card" data-id="${snippet.id}">
                    <div class="snippet-title">${escapeHtml(snippet.title)}</div>
                    ${tagsHtml}
                    <div class="snippet-preview">${escapeHtml(preview)}</div>
                    <div class="snippet-actions">
                        <button class="btn btn-success copy-btn" data-id="${snippet.id}">
                            📋 Copy
                        </button>
                        <button class="btn btn-primary edit-btn" data-id="${snippet.id}">
                            Edit
                        </button>
                        <button class="btn btn-danger delete-btn" data-id="${snippet.id}">
                            Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // =====================================================
    // FORM HANDLING
    // =====================================================
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const id = elements.snippetId.value;
        const title = elements.title.value.trim();
        const tagsRaw = elements.tags.value.trim();
        const tags = tagsRaw ? tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
        const prompt = elements.prompt.value.trim();

        if (!title || !prompt) return;

        if (id) {
            const snippet = snippets.find(s => s.id == id);
            if (snippet) {
                snippet.title = title;
                snippet.tags = tags;
                snippet.prompt = prompt;
            }
        } else {
            snippets.push({
                id: Date.now(),
                title,
                tags,
                prompt
            });
        }

        saveSnippets();
        renderSnippets();
        clearForm();
    }

    function clearForm() {
        elements.snippetId.value = '';
        elements.title.value = '';
        elements.tags.value = '';
        elements.prompt.value = '';
        elements.charCount.textContent = '0';
        elements.saveBtn.textContent = 'Save Snippet';
        elements.formTitle.textContent = 'Add New Snippet';
        elements.cancelBtn.classList.add('hidden');
    }

    function updateCharCount() {
        elements.charCount.textContent = elements.prompt.value.length;
    }

    // =====================================================
    // LIST ACTIONS
    // =====================================================
    function handleListClick(e) {
        const target = e.target.closest('button');
        if (!target) return;

        const id = parseInt(target.dataset.id);
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        if (target.classList.contains('copy-btn')) {
            handleCopy(target, snippet);
        } else if (target.classList.contains('edit-btn')) {
            handleEdit(snippet);
        } else if (target.classList.contains('delete-btn')) {
            handleDeleteClick(id);
        }
    }

    async function handleCopy(button, snippet) {
        try {
            await navigator.clipboard.writeText(snippet.prompt);
            const originalText = button.textContent;
            button.textContent = '✓ Copied!';
            
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard. Please try again.');
        }
    }

    function handleEdit(snippet) {
        elements.snippetId.value = snippet.id;
        elements.title.value = snippet.title;
        elements.tags.value = snippet.tags ? snippet.tags.join(', ') : '';
        elements.prompt.value = snippet.prompt;
        elements.charCount.textContent = snippet.prompt.length;
        elements.saveBtn.textContent = 'Update Snippet';
        elements.formTitle.textContent = 'Edit Snippet';
        elements.cancelBtn.classList.remove('hidden');

        if (window.innerWidth < 1200) {
            elements.form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function handleDeleteClick(id) {
        deleteTargetId = id;
        elements.deleteModal.classList.remove('hidden');
    }

    function confirmDelete() {
        if (deleteTargetId !== null) {
            snippets = snippets.filter(s => s.id !== deleteTargetId);
            saveSnippets();
            renderSnippets();
            deleteTargetId = null;
        }
        elements.deleteModal.classList.add('hidden');
    }

    function cancelDelete() {
        deleteTargetId = null;
        elements.deleteModal.classList.add('hidden');
    }

    // =====================================================
    // IMPORT/EXPORT
    // =====================================================
    function exportSnippets() {
        const dataStr = JSON.stringify(snippets, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `prompt-snippets-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    function handleFileImport(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const imported = JSON.parse(event.target.result);
                if (!Array.isArray(imported)) {
                    throw new Error('Invalid format');
                }
                
                const existingIds = new Set(snippets.map(s => s.id));
                const newSnippets = imported.filter(s => !existingIds.has(s.id));
                
                snippets = [...snippets, ...newSnippets];
                saveSnippets();
                renderSnippets();
                
                alert(`Successfully imported ${newSnippets.length} snippet(s)!`);
            } catch (err) {
                console.error('Import error:', err);
                alert('Failed to import snippets. Please check the file format.');
            }
        };
        reader.readAsText(file);
        elements.importFile.value = '';
    }

    // =====================================================
    // UTILITIES
    // =====================================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Start the application
    document.addEventListener('DOMContentLoaded', init);
</script>
