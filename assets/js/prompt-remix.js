/**
 * Prompt Remix - JavaScript Module
 * Allows users to customize library prompts with their own examples and preferences
 */

(function() {
    'use strict';

    // =====================================================
    // STATE MANAGEMENT
    // =====================================================
    
    let currentPromptSlug = null;
    let sections = [];
    let undoManager = null;

    // =====================================================
    // UNDO/REDO MANAGER
    // =====================================================

    class UndoManager {
        constructor(maxHistory = 50) {
            this.history = [];
            this.currentIndex = -1;
            this.maxHistory = maxHistory;
        }

        push(state) {
            // Remove any "future" states if we're not at the end
            this.history = this.history.slice(0, this.currentIndex + 1);

            // Add new state (deep clone)
            this.history.push(JSON.parse(JSON.stringify(state)));

            // Trim if over max
            if (this.history.length > this.maxHistory) {
                this.history.shift();
            } else {
                this.currentIndex++;
            }

            this.updateButtons();
        }

        undo() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateButtons();
                return JSON.parse(JSON.stringify(this.history[this.currentIndex]));
            }
            return null;
        }

        redo() {
            if (this.currentIndex < this.history.length - 1) {
                this.currentIndex++;
                this.updateButtons();
                return JSON.parse(JSON.stringify(this.history[this.currentIndex]));
            }
            return null;
        }

        canUndo() {
            return this.currentIndex > 0;
        }

        canRedo() {
            return this.currentIndex < this.history.length - 1;
        }

        updateButtons() {
            const undoBtn = document.getElementById('undo-btn');
            const redoBtn = document.getElementById('redo-btn');

            if (undoBtn) undoBtn.disabled = !this.canUndo();
            if (redoBtn) redoBtn.disabled = !this.canRedo();
        }

        reset() {
            this.history = [];
            this.currentIndex = -1;
            this.updateButtons();
        }
    }

    // =====================================================
    // SECTION PARSING
    // =====================================================

    function parsePromptSections(promptText) {
        const parsedSections = [];
        const lines = promptText.split('\n');

        let currentSection = { name: '_preamble', content: [] };

        for (const line of lines) {
            if (line.startsWith('## ')) {
                // Save previous section if it has content
                if (currentSection.content.length > 0 || currentSection.name !== '_preamble') {
                    parsedSections.push({
                        name: currentSection.name,
                        content: currentSection.content.join('\n').trim()
                    });
                }
                // Start new section
                currentSection = {
                    name: line.replace('## ', '').trim(),
                    content: []
                };
            } else if (line.trim() === '---') {
                // Skip dividers but preserve flow
                continue;
            } else {
                currentSection.content.push(line);
            }
        }

        // Don't forget last section
        if (currentSection.content.length > 0 || currentSection.name !== '_preamble') {
            parsedSections.push({
                name: currentSection.name,
                content: currentSection.content.join('\n').trim()
            });
        }

        return parsedSections;
    }

    function assembleSections(sectionList) {
        let output = '';

        for (let i = 0; i < sectionList.length; i++) {
            const section = sectionList[i];

            if (section.name === '_preamble') {
                output += section.content;
                if (i < sectionList.length - 1) {
                    output += '\n\n---\n\n';
                }
            } else {
                output += `## ${section.name}\n\n${section.content}`;
                if (i < sectionList.length - 1) {
                    output += '\n\n---\n\n';
                }
            }
        }

        return output.trim();
    }

    function isExamplesSection(sectionName) {
        const lower = sectionName.toLowerCase();
        return lower.includes('example') || lower.includes('sample') || lower.includes('few-shot');
    }

    // =====================================================
    // UI RENDERING
    // =====================================================

    function renderSections() {
        const editorContent = document.getElementById('editor-content');
        const emptyState = document.getElementById('editor-empty-state');

        if (!sections || sections.length === 0) {
            editorContent.innerHTML = '';
            editorContent.appendChild(emptyState);
            emptyState.style.display = 'block';
            return;
        }

        if (emptyState) {
            emptyState.style.display = 'none';
        }

        let html = '';
        let hasExamplesSection = sections.some(s => isExamplesSection(s.name));

        sections.forEach((section, index) => {
            const isExamples = isExamplesSection(section.name);
            const sectionClass = isExamples ? 'section-item examples-section' : 'section-item';
            const expanded = index === 0 || isExamples ? 'expanded' : '';
            const badge = isExamples ? '<span class="section-badge important">★ IMPORTANT</span>' : '';

            const displayName = section.name === '_preamble' ? 'Task Statement' : section.name;

            html += `
                <div class="${sectionClass} ${expanded}" data-index="${index}">
                    <div class="section-header" onclick="window.promptRemix.toggleSection(${index})">
                        <div class="section-header-left">
                            <span class="section-title">${escapeHtml(displayName)}</span>
                            ${badge}
                        </div>
                        <span class="section-toggle">▼</span>
                    </div>
                    <div class="section-content">
                        <textarea 
                            class="section-textarea" 
                            data-index="${index}"
                            placeholder="Enter content for this section..."
                            oninput="window.promptRemix.handleSectionEdit(${index}, this.value)"
                        >${escapeHtml(section.content)}</textarea>
                    </div>
                </div>
            `;
        });

        // Add "Add Examples Section" button if no examples section exists
        if (!hasExamplesSection) {
            html += `
                <button class="add-examples-btn" onclick="window.promptRemix.addExamplesSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Few-Shot Examples Section
                </button>
            `;
        }

        editorContent.innerHTML = html;
        updateSectionCount();
    }

    function toggleSection(index) {
        const sectionItems = document.querySelectorAll('.section-item');
        if (sectionItems[index]) {
            sectionItems[index].classList.toggle('expanded');
        }
    }

    function updateSectionCount() {
        const countEl = document.getElementById('section-count');
        if (countEl && sections) {
            countEl.textContent = `${sections.length} section${sections.length !== 1 ? 's' : ''}`;
        }
    }

    // =====================================================
    // PREVIEW & CHARACTER COUNT
    // =====================================================

    function updatePreview() {
        const previewEl = document.getElementById('preview-text');
        const charCounter = document.getElementById('char-counter');
        const copyBtn = document.getElementById('copy-btn');
        const saveBtn = document.getElementById('save-btn');
        const downloadBtn = document.getElementById('download-btn');

        if (!sections || sections.length === 0) {
            previewEl.textContent = 'Your assembled prompt will appear here as you edit.';
            previewEl.classList.add('preview-empty');
            charCounter.textContent = '0 / 5,000';
            charCounter.className = 'char-counter good';
            
            if (copyBtn) copyBtn.disabled = true;
            if (saveBtn) saveBtn.disabled = true;
            if (downloadBtn) downloadBtn.disabled = true;
            return;
        }

        const assembled = assembleSections(sections);
        const charCount = assembled.length;

        previewEl.textContent = assembled;
        previewEl.classList.remove('preview-empty');

        // Update character counter
        charCounter.textContent = `${charCount.toLocaleString()} / 5,000`;

        // Update counter color
        charCounter.classList.remove('good', 'warning', 'danger');
        if (charCount > 5000) {
            charCounter.classList.add('danger');
        } else if (charCount > 4500) {
            charCounter.classList.add('warning');
        } else {
            charCounter.classList.add('good');
        }

        // Enable action buttons
        if (copyBtn) copyBtn.disabled = false;
        if (saveBtn) saveBtn.disabled = false;
        if (downloadBtn) downloadBtn.disabled = false;
    }

    // =====================================================
    // SECTION EDITING
    // =====================================================

    function handleSectionEdit(index, value) {
        if (sections[index]) {
            sections[index].content = value;
            updatePreview();

            // Debounce undo state saving
            clearTimeout(window.undoTimeout);
            window.undoTimeout = setTimeout(() => {
                undoManager.push(sections);
            }, 500);
        }
    }

    function addExamplesSection() {
        const examplesTemplate = `[Add 3-5 examples of your ideal output here. Examples teach the AI your exact style better than any rules.]

**Example 1**
[Your example here]

**Example 2**
[Your example here]

**Example 3**
[Your example here]`;

        sections.push({
            name: 'Few-Shot Examples',
            content: examplesTemplate
        });

        undoManager.push(sections);
        renderSections();
        updatePreview();
        showToast('Examples section added! Scroll down to customize.', 'success');

        // Scroll to the new section
        setTimeout(() => {
            const newSection = document.querySelector('.examples-section');
            if (newSection) {
                newSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    // =====================================================
    // PROMPT LOADING
    // =====================================================

    function loadPrompt(slug) {
        const prompt = window.PROMPT_LIBRARY[slug];
        if (!prompt) {
            showToast('Prompt not found', 'error');
            return;
        }

        currentPromptSlug = slug;

        // Parse sections
        sections = parsePromptSections(prompt.content);

        // Reset undo manager
        undoManager.reset();
        undoManager.push(sections);

        // Render and update
        renderSections();
        updatePreview();

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('prompt', slug);
        window.history.replaceState({}, '', url);

        showToast(`Loaded: ${prompt.title}`, 'success');
    }

    function populatePromptSelector() {
        const selector = document.getElementById('prompt-selector');
        if (!selector || !window.PROMPT_LIBRARY) return;

        // Clear existing options except first
        selector.innerHTML = '<option value="">-- Choose a prompt to customize --</option>';

        // Sort prompts by order if available, otherwise alphabetically
        const prompts = Object.values(window.PROMPT_LIBRARY);
        prompts.sort((a, b) => {
            if (a.order && b.order) return a.order - b.order;
            return a.title.localeCompare(b.title);
        });

        prompts.forEach(prompt => {
            const option = document.createElement('option');
            option.value = prompt.slug;
            option.textContent = prompt.title;
            selector.appendChild(option);
        });
    }

    // =====================================================
    // ACTIONS: COPY, SAVE, DOWNLOAD
    // =====================================================

    function copyToClipboard() {
        if (!sections || sections.length === 0) return;

        const text = assembleSections(sections);

        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('copy-btn');
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '✓ Copied!';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            }
            showToast('Copied to clipboard!', 'success');
        }).catch(err => {
            console.error('Copy failed:', err);
            showToast('Failed to copy', 'error');
        });
    }

    function downloadPrompt() {
        if (!sections || sections.length === 0) return;

        const text = assembleSections(sections);
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        const timestamp = new Date().toISOString().split('T')[0];
        const baseTitle = currentPromptSlug || 'custom-prompt';
        link.href = url;
        link.download = `${baseTitle}_customized_${timestamp}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showToast('Downloaded!', 'success');
    }

    function openSaveModal() {
        const modal = document.getElementById('save-modal');
        const titleInput = document.getElementById('save-title');
        const tagsInput = document.getElementById('save-tags');

        // Pre-fill with base prompt info
        const basePrompt = window.PROMPT_LIBRARY[currentPromptSlug];
        if (basePrompt) {
            titleInput.value = `${basePrompt.title} (Customized)`;
        } else {
            titleInput.value = 'My Custom Prompt';
        }
        tagsInput.value = 'customized';

        modal.classList.add('active');
        titleInput.focus();
        titleInput.select();
    }

    function closeSaveModal() {
        const modal = document.getElementById('save-modal');
        modal.classList.remove('active');
    }

    function saveToPromptManager() {
        const titleInput = document.getElementById('save-title');
        const tagsInput = document.getElementById('save-tags');

        const title = titleInput.value.trim();
        if (!title) {
            showToast('Please enter a title', 'error');
            return;
        }

        const content = assembleSections(sections);
        const tags = tagsInput.value
            .split(',')
            .map(t => t.trim())
            .filter(t => t.length > 0);

        // Load existing snippets
        let snippets = [];
        try {
            const stored = localStorage.getItem('aiPromptSnippets');
            snippets = stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading snippets:', e);
            snippets = [];
        }

        // Create new snippet
        const newSnippet = {
            id: Date.now(),
            title: title,
            content: content,
            tags: tags.length > 0 ? tags : ['customized'],
            basePrompt: currentPromptSlug || null,
            created: new Date().toISOString(),
            charCount: content.length
        };

        // Add to beginning
        snippets.unshift(newSnippet);

        // Save
        try {
            localStorage.setItem('aiPromptSnippets', JSON.stringify(snippets));
            closeSaveModal();
            showToast('Saved to Prompt Manager!', 'success');
        } catch (e) {
            console.error('Save error:', e);
            showToast('Failed to save. Storage might be full.', 'error');
        }
    }

    // =====================================================
    // UNDO/REDO
    // =====================================================

    function undo() {
        const state = undoManager.undo();
        if (state) {
            sections = state;
            renderSections();
            updatePreview();
        }
    }

    function redo() {
        const state = undoManager.redo();
        if (state) {
            sections = state;
            renderSections();
            updatePreview();
        }
    }

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = 'toast ' + type;

        // Show
        setTimeout(() => toast.classList.add('show'), 10);

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // =====================================================
    // MOBILE SUPPORT
    // =====================================================

    function setupMobilePreview() {
        const toggleBtn = document.getElementById('mobile-preview-toggle');
        const closeBtn = document.getElementById('close-preview');
        const previewPanel = document.getElementById('preview-panel');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                previewPanel.classList.add('mobile-visible');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                previewPanel.classList.remove('mobile-visible');
            });
        }
    }

    // =====================================================
    // KEYBOARD SHORTCUTS
    // =====================================================

    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Z = Undo
            if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                undo();
            }

            // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y = Redo
            if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
                e.preventDefault();
                redo();
            }

            // Escape = Close modal
            if (e.key === 'Escape') {
                closeSaveModal();
                const previewPanel = document.getElementById('preview-panel');
                if (previewPanel) {
                    previewPanel.classList.remove('mobile-visible');
                }
            }
        });
    }

    // =====================================================
    // EVENT LISTENERS
    // =====================================================

    function setupEventListeners() {
        // Prompt selector
        const selector = document.getElementById('prompt-selector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                if (e.target.value) {
                    loadPrompt(e.target.value);
                }
            });
        }

        // Action buttons
        const copyBtn = document.getElementById('copy-btn');
        const saveBtn = document.getElementById('save-btn');
        const downloadBtn = document.getElementById('download-btn');
        const undoBtn = document.getElementById('undo-btn');
        const redoBtn = document.getElementById('redo-btn');

        if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);
        if (saveBtn) saveBtn.addEventListener('click', openSaveModal);
        if (downloadBtn) downloadBtn.addEventListener('click', downloadPrompt);
        if (undoBtn) undoBtn.addEventListener('click', undo);
        if (redoBtn) redoBtn.addEventListener('click', redo);

        // Modal buttons
        const modalClose = document.getElementById('modal-close');
        const modalCancel = document.getElementById('modal-cancel');
        const modalSave = document.getElementById('modal-save');
        const modalOverlay = document.getElementById('save-modal');

        if (modalClose) modalClose.addEventListener('click', closeSaveModal);
        if (modalCancel) modalCancel.addEventListener('click', closeSaveModal);
        if (modalSave) modalSave.addEventListener('click', saveToPromptManager);

        // Close modal on overlay click
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeSaveModal();
                }
            });
        }
    }

    // =====================================================
    // INITIALIZATION
    // =====================================================

    function init() {
        // Initialize undo manager
        undoManager = new UndoManager(50);

        // Populate prompt selector
        populatePromptSelector();

        // Set up event listeners
        setupEventListeners();
        setupKeyboardShortcuts();
        setupMobilePreview();

        // Check URL for prompt parameter
        const params = new URLSearchParams(window.location.search);
        const promptSlug = params.get('prompt');

        if (promptSlug && window.PROMPT_LIBRARY && window.PROMPT_LIBRARY[promptSlug]) {
            // Load the specified prompt
            const selector = document.getElementById('prompt-selector');
            if (selector) {
                selector.value = promptSlug;
            }
            loadPrompt(promptSlug);
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // =====================================================
    // PUBLIC API
    // =====================================================

    window.promptRemix = {
        loadPrompt,
        toggleSection,
        handleSectionEdit,
        addExamplesSection,
        undo,
        redo,
        copyToClipboard,
        downloadPrompt,
        openSaveModal,
        closeSaveModal,
        saveToPromptManager
    };

})();
