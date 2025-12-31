---
layout: page
title: Prompt Manager
description: Manage and organize your AI-generated clinical prompts. Save, edit, and export your custom A&P formatting prompts.
permalink: /prompt-manager/
---

<div class="prompt-manager-wrapper">
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
            <strong style="color: #9a3412;">Make this Your Own</strong>
            <p style="margin: 0; color: #c2410c; font-size: 0.9em;">We hope you find this tool useful. Consider making it your own by taking the code from GitHub and using a coding LLM to personalize it to your exact needs! Please share your work with us on the contributions page or on GitHub - we would love to see what you can build!</p>
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
            <h2 id="modal-title">Edit Snippet</h2>
            <button class="modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
            <input type="hidden" id="snippet-id">
            
            <div class="form-group">
                <label for="snippet-title-input">Title</label>
                <input type="text" id="snippet-title-input" placeholder="e.g., General A&P Format">
            </div>

            <div class="form-group">
                <label for="snippet-tags-input">Tags (comma separated)</label>
                <input type="text" id="snippet-tags-input" placeholder="e.g., formatting, general, note">
            </div>

            <div class="form-group">
                <label for="snippet-content-input">Content</label>
                <textarea id="snippet-content-input" placeholder="Enter your prompt content here..."></textarea>
                <div class="char-count" id="char-count">0 characters</div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveSnippet()">Save</button>
        </div>
    </div>
</div>

<script>
    // =====================================================
    // STATE MANAGEMENT
    // =====================================================
    let snippets = [];
    let filteredSnippets = [];

    // =====================================================
    // INITIALIZATION
    // =====================================================
    document.addEventListener('DOMContentLoaded', () => {
        loadSnippets();
        setupEventListeners();
        updateStats();
    });

    function setupEventListeners() {
        document.getElementById('search-input').addEventListener('input', (e) => {
            filterSnippets(e.target.value, document.getElementById('tag-filter').value);
        });

        document.getElementById('tag-filter').addEventListener('change', (e) => {
            filterSnippets(document.getElementById('search-input').value, e.target.value);
        });

        document.getElementById('snippet-content-input').addEventListener('input', (e) => {
            updateCharCount(e.target.value.length);
        });
    }

    // =====================================================
    // CORE FUNCTIONS
    // =====================================================
    function loadSnippets() {
        const stored = localStorage.getItem('ppe_snippets');
        if (stored) {
            try {
                snippets = JSON.parse(stored);
            } catch (e) {
                console.error('Failed to parse snippets', e);
                snippets = [];
            }
        }
        filteredSnippets = [...snippets];
        populateTagFilter();
        renderSnippets();
    }

    function saveSnippets() {
        localStorage.setItem('ppe_snippets', JSON.stringify(snippets));
        updateStats();
    }

    function renderSnippets() {
        const container = document.getElementById('snippets-container');
        container.innerHTML = '';

        if (filteredSnippets.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📝</div>
                    <h2>No prompts found</h2>
                    <p>Create a new snippet or adjust your search filters.</p>
                </div>
            `;
            return;
        }

        filteredSnippets.forEach(snippet => {
            const card = document.createElement('div');
            card.className = 'snippet-card';
            
            const tagsHtml = snippet.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
            
            card.innerHTML = `
                <div class="snippet-header">
                    <div class="snippet-title">${escapeHtml(snippet.title)}</div>
                    <div class="snippet-tags">${tagsHtml}</div>
                    <div class="snippet-meta">
                        <div class="meta-item">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> ${new Date(snippet.updatedAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div class="snippet-preview">
                    <pre>${escapeHtml(snippet.content)}</pre>
                </div>
                <div class="snippet-actions">
                    <button class="btn btn-secondary btn-sm" onclick="copySnippet('${snippet.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg> Copy
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="editSnippet('${snippet.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg> Edit
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteSnippet('${snippet.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg> Delete
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function populateTagFilter() {
        const filter = document.getElementById('tag-filter');
        const currentVal = filter.value;
        const allTags = new Set();
        
        snippets.forEach(s => s.tags.forEach(t => allTags.add(t)));
        
        filter.innerHTML = '<option value="">All Tags</option>';
        [...allTags].sort().forEach(tag => {
            const option = document.createElement('option');
            option.value = tag;
            option.textContent = tag;
            filter.appendChild(option);
        });
        
        filter.value = currentVal;
    }

    function filterSnippets(searchText, tagFilter) {
        const searchLower = searchText.toLowerCase();
        
        filteredSnippets = snippets.filter(snippet => {
            const matchesSearch = snippet.title.toLowerCase().includes(searchLower) || 
                                  snippet.content.toLowerCase().includes(searchLower) ||
                                  snippet.tags.some(t => t.toLowerCase().includes(searchLower));
            
            const matchesTag = tagFilter === '' || snippet.tags.includes(tagFilter);
            
            return matchesSearch && matchesTag;
        });

        renderSnippets();
    }

    // =====================================================
    // CRUD OPERATIONS
    // =====================================================
    window.createNewSnippet = function() {
        document.getElementById('snippet-id').value = '';
        document.getElementById('snippet-title-input').value = '';
        document.getElementById('snippet-tags-input').value = '';
        document.getElementById('snippet-content-input').value = '';
        document.getElementById('modal-title').textContent = 'New Snippet';
        document.getElementById('edit-modal').classList.add('active');
        updateCharCount(0);
    };

    window.editSnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (!snippet) return;

        document.getElementById('snippet-id').value = snippet.id;
        document.getElementById('snippet-title-input').value = snippet.title;
        document.getElementById('snippet-tags-input').value = snippet.tags.join(', ');
        document.getElementById('snippet-content-input').value = snippet.content;
        document.getElementById('modal-title').textContent = 'Edit Snippet';
        document.getElementById('edit-modal').classList.add('active');
        updateCharCount(snippet.content.length);
    };

    window.saveSnippet = function() {
        const id = document.getElementById('snippet-id').value;
        const title = document.getElementById('snippet-title-input').value.trim();
        const content = document.getElementById('snippet-content-input').value.trim();
        const tagsInput = document.getElementById('snippet-tags-input').value;
        
        if (!title || !content) {
            alert('Title and Content are required');
            return;
        }

        const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t.length > 0);
        const timestamp = new Date().toISOString();

        if (id) {
            // Update
            const index = snippets.findIndex(s => s.id === id);
            if (index !== -1) {
                snippets[index] = { ...snippets[index], title, content, tags, updatedAt: timestamp };
            }
        } else {
            // Create
            const newSnippet = {
                id: Date.now().toString(),
                title,
                content,
                tags,
                createdAt: timestamp,
                updatedAt: timestamp
            };
            snippets.unshift(newSnippet);
        }

        saveSnippets();
        closeModal();
        
        // Refresh filter
        const currentSearch = document.getElementById('search-input').value;
        const currentTag = document.getElementById('tag-filter').value;
        filterSnippets(currentSearch, currentTag);
        populateTagFilter();
        
        // Restore filter selection if possible
        if (currentTag) {
            const option = document.querySelector(`#tag-filter option[value="${currentTag}"]`);
            if (option) document.getElementById('tag-filter').value = currentTag;
        }
    };

    window.deleteSnippet = function(id) {
        if (confirm('Are you sure you want to delete this prompt?')) {
            snippets = snippets.filter(s => s.id !== id);
            saveSnippets();
            
            const currentSearch = document.getElementById('search-input').value;
            const currentTag = document.getElementById('tag-filter').value;
            filterSnippets(currentSearch, currentTag);
            populateTagFilter();
        }
    };

    window.copySnippet = function(id) {
        const snippet = snippets.find(s => s.id === id);
        if (snippet) {
            navigator.clipboard.writeText(snippet.content).then(() => {
                alert('Copied to clipboard!');
            });
        }
    };

    window.closeModal = function() {
        document.getElementById('edit-modal').classList.remove('active');
    };

    function updateCharCount(count) {
        const el = document.getElementById('char-count');
        el.textContent = `${count} characters`;
    }

    // =====================================================
    // EXPORT / IMPORT
    // =====================================================
    window.exportAllSnippets = function() {
        const dataStr = JSON.stringify(snippets, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ppe_prompts_backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    window.importSnippets = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = event => {
                try {
                    const newSnippets = JSON.parse(event.target.result);
                    if (!Array.isArray(newSnippets)) throw new Error('Invalid format');
                    
                    // Merge strategy: Append new ones, but don't duplicate EXACT IDs?
                    // Or just add them with new IDs?
                    // Let's just append and let user manage duplicates for now
                    
                    // Simple validation
                    const validSnippets = newSnippets.filter(s => s.title && s.content);
                    
                    snippets = [...validSnippets, ...snippets];
                    saveSnippets();
                    
                    // Apply current filters
                    const currentSearch = document.getElementById('search-input').value;
                    const currentTag = document.getElementById('tag-filter').value;
                    filterSnippets(currentSearch, currentTag);
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
    {% include newsletter.html %}
</div>

<div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #059669; border-radius: 6px; margin-top: 30px; text-align: center;">
    <h3 style="color: #065f46; font-size: 1.2em; margin-bottom: 12px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>Pro Tips
    </h3>
    <p style="margin-bottom: 15px;">Use meaningful titles and tags to organize your prompts. Export your collection regularly as a backup. Consider versioning your prompts by including dates in titles (e.g., "A&P Format v2 - 2025-01-15").</p>
    <p><strong>Storage:</strong> All data is stored locally in your browser. Clear your browser data = lose your prompts. Always export important prompts!</p>
</div>
</div>