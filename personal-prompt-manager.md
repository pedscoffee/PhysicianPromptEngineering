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
0
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
        margin-bottom: 10px;
    }

    .header p:first-of-type {
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

    .snippet-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;
    }

    .snippet-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #333;
    }

    .snippet-version {
        font-size: 0.85em;
        color: #666;
        background: #f0f0f0;
        padding: 3px 8px;
        border-radius: 4px;
        font-weight: 500;
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
        font-family: 'Monaco', 'Courier New', monospace;
        background: #f9f9f9;
        padding: 12px;
        border-radius: 4px;
        border-left: 3px solid #2a7ae2;
    }

    .snippet-actions {
        display: flex;
        gap: 10px;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s;
    }

    .modal-content {
        background: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        animation: slideUp 0.2s;
    }

    .modal-content h3 {
        margin-bottom: 15px;
        color: #333;
    }

    .modal-content p {
        margin-bottom: 20px;
        color: #666;
    }

    .modal-actions {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #666;
    }

    .empty-state-icon {
        font-size: 4em;
        margin-bottom: 20px;
    }

    .empty-state h3 {
        color: #333;
        margin-bottom: 10px;
    }

    .empty-state p {
        margin-bottom: 10px;
    }

    .hidden {
        display: none !important;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>

<div class="container">
    <div class="header">
        <h1>Personal Prompt Snippet Manager</h1>
        <p><span class="privacy-icon">🔒</span> Your snippets are stored locally in your browser—100% private and secure</p>
        <p>If you work with AI prompts regularly, you know how quickly things can get messy. You iterate on a prompt, save it somewhere, then create another version, maybe copy it into a different file, and before long you have dozens of variations scattered across documents, notes apps, and browser tabs. It becomes impossible to remember which version worked best or where you saved that perfect prompt from last week.</p>
        <p>This tool solves that problem by giving you a single, organized place to store and manage all your AI prompts. Everything is saved locally on your device—no account required and no data sent to servers. Your prompts stay private on your computer. Need to access your prompts on another device or create a backup? Use the Export button to download all your snippets as a JSON file, then use Import on any other device to load them back in. You can also save exports to your preferred cloud storage or backup location for safekeeping.</p>
    </div>

    <div class="controls-bar">
        <div class="controls-group">
            <label for="sort-by">Sort by:</label>
            <select id="sort-by">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="tag">By Tag</option>
            </select>
            
            <label for="tag-filter">Filter by tag:</label>
            <select id="tag-filter">
                <option value="">All Tags</option>
            </select>
        </div>

        <div class="controls-group">
            <button id="export-btn" class="btn btn-primary">📤 Export</button>
            <label for="import-file" class="btn btn-secondary" style="margin: 0; cursor: pointer;">
                📥 Import
                <input type="file" id="import-file" accept=".json" style="display: none;">
            </label>
        </div>
    </div>

    <div class="main-layout">
        <div class="panel form-panel">
            <div class="panel-header">
                <h2 id="form-title">Add New Snippet</h2>
            </div>
            
            <form id="snippet-form">
                <input type="hidden" id="snippet-id">
                
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" required placeholder="Enter a descriptive title">
                </div>

                <div class="form-group">
                    <label for="version">Version <span>(optional, e.g., 1.0, 2.1, etc.)</span></label>
                    <input type="text" id="version" placeholder="1.0">
                </div>

                <div class="form-group">
                    <label for="tags">Tags <span>(comma-separated, optional)</span></label>
                    <input type="text" id="tags" placeholder="e.g., writing, code, research">
                </div>

                <div class="form-group">
                    <label for="prompt">Prompt</label>
                    <textarea id="prompt" required placeholder="Enter your AI prompt here..."></textarea>
                    <div class="char-counter"><span id="char-count">0</span> characters</div>
                </div>

                <div class="form-actions">
                    <button type="submit" id="save-btn" class="btn btn-success">Save Snippet</button>
                    <button type="button" id="cancel-btn" class="btn btn-secondary hidden">Cancel</button>
                </div>
            </form>
        </div>

        <div class="panel">
            <div class="panel-header">
                <h2>Your Snippets</h2>
            </div>
            <div id="snippet-list" class="snippet-list">
                <div class="empty-state">
                    <div class="empty-state-icon">📝</div>
                    <h3>No snippets yet!</h3>
                    <p>Get started by creating your first AI prompt snippet.</p>
                    <p>Your snippets will be saved securely in your browser.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="delete-modal" class="modal-overlay hidden">
    <div class="modal-content">
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
    // STATE & DATA
    // =====================================================
    const STORAGE_KEY = 'promptSnippets';
    let snippets = [];
    let currentSort = 'newest';
    let currentTagFilter = '';
    let deleteTargetId = null;

    // =====================================================
    // DOM ELEMENTS
    // =====================================================
    const elements = {
        form: document.getElementById('snippet-form'),
        snippetId: document.getElementById('snippet-id'),
        title: document.getElementById('title'),
        version: document.getElementById('version'),
        tags: document.getElementById('tags'),
        prompt: document.getElementById('prompt'),
        charCount: document.getElementById('char-count'),
        saveBtn: document.getElementById('save-btn'),
        cancelBtn: document.getElementById('cancel-btn'),
        formTitle: document.getElementById('form-title'),
        snippetList: document.getElementById('snippet-list'),
        sortBy: document.getElementById('sort-by'),
        tagFilter: document.getElementById('tag-filter'),
        exportBtn: document.getElementById('export-btn'),
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
        renderSnippets();
        updateTagFilter();
        attachEventListeners();
    }

    function attachEventListeners() {
        elements.form.addEventListener('submit', handleFormSubmit);
        elements.prompt.addEventListener('input', updateCharCount);
        elements.cancelBtn.addEventListener('click', clearForm);
        elements.snippetList.addEventListener('click', handleListClick);
        elements.sortBy.addEventListener('change', handleSortChange);
        elements.tagFilter.addEventListener('change', handleTagFilterChange);
        elements.exportBtn.addEventListener('click', exportSnippets);
        elements.importFile.addEventListener('change', handleFileImport);
        elements.confirmDelete.addEventListener('click', confirmDelete);
        elements.cancelDelete.addEventListener('click', cancelDelete);
        elements.deleteModal.addEventListener('click', (e) => {
            if (e.target === elements.deleteModal) cancelDelete();
        });
    }

    function handleSortChange(e) {
        currentSort = e.target.value;
        renderSnippets();
    }

    function handleTagFilterChange(e) {
        currentTagFilter = e.target.value.toLowerCase();
        renderSnippets();
    }

    // =====================================================
    // STORAGE
    // =====================================================
    function loadSnippets() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            snippets = stored ? JSON.parse(stored) : [];
        } catch (err) {
            console.error('Failed to load snippets:', err);
            snippets = [];
        }
    }

    function saveSnippets() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
            updateTagFilter();
        } catch (err) {
            console.error('Failed to save snippets:', err);
            alert('Failed to save snippets. Your storage might be full.');
        }
    }

    // =====================================================
    // TAG MANAGEMENT
    // =====================================================
    function updateTagFilter() {
        const allTags = new Set();
        snippets.forEach(snippet => {
            if (snippet.tags) {
                snippet.tags.forEach(tag => allTags.add(tag.trim().toLowerCase()));
            }
        });

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

            const versionHtml = snippet.version 
                ? `<span class="snippet-version">v${escapeHtml(snippet.version)}</span>`
                : '';

            const preview = snippet.prompt.length > 120 
                ? snippet.prompt.substring(0, 120) + '...' 
                : snippet.prompt;

            return `
                <div class="snippet-card" data-id="${snippet.id}">
                    <div class="snippet-header">
                        <div class="snippet-title">${escapeHtml(snippet.title)}</div>
                        ${versionHtml}
                    </div>
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
        const version = elements.version.value.trim();
        const tagsRaw = elements.tags.value.trim();
        const tags = tagsRaw ? tagsRaw.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
        const prompt = elements.prompt.value.trim();

        if (!title || !prompt) return;

        if (id) {
            const snippet = snippets.find(s => s.id == id);
            if (snippet) {
                snippet.title = title;
                snippet.version = version;
                snippet.tags = tags;
                snippet.prompt = prompt;
            }
        } else {
            snippets.push({
                id: Date.now(),
                title,
                version,
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
        elements.version.value = '';
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
        elements.version.value = snippet.version || '';
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
