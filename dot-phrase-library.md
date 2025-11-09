---
layout: default
title: Dot Phrase Library
description: Access a free library of clinical dot phrases with formatting preserved. Copy and paste directly into your EMR.
permalink: /dot-phrase-library/
---

<style>
  .search-filter-bar {
    background: white;
    padding: 20px 30px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-input {
    flex: 1;
    min-width: 250px;
    padding: 10px 15px;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    transition: border-color var(--transition-fast);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .filter-select {
    padding: 10px 15px;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    background: white;
    cursor: pointer;
    transition: border-color var(--transition-fast);
  }

  .filter-select:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .group-section {
    margin-bottom: var(--space-8);
  }

  .group-header {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: white;
    padding: var(--space-5);
    border-radius: var(--radius-lg);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-4);
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
  }

  .group-header:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .group-header h2 {
    margin: 0;
    font-size: var(--font-size-2xl);
    color: white;
  }

  .group-count {
    background: rgba(255, 255, 255, 0.2);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
  }

  .group-actions {
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }

  .expand-icon {
    font-size: var(--font-size-xl);
    transition: transform var(--transition-base);
  }

  .group-header.collapsed .expand-icon {
    transform: rotate(-90deg);
  }

  .group-content {
    max-height: 5000px;
    overflow: hidden;
    transition: max-height var(--transition-slow), opacity var(--transition-slow);
    opacity: 1;
  }

  .group-content.collapsed {
    max-height: 0;
    opacity: 0;
  }

  .dotphrase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-4);
  }

  .dotphrase-card {
    background: white;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-sm);
  }

  .dotphrase-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }

  .dotphrase-header {
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-3);
    border-bottom: 2px solid var(--color-border-light);
  }

  .dotphrase-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
  }

  .dotphrase-shortcut {
    display: inline-block;
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-md);
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
  }

  .dotphrase-content {
    flex: 1;
    margin-bottom: var(--space-4);
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-primary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  .dotphrase-content p {
    margin-bottom: var(--space-3);
  }

  .dotphrase-content p:last-child {
    margin-bottom: 0;
  }

  .dotphrase-content ul,
  .dotphrase-content ol {
    margin-left: var(--space-5);
    margin-bottom: var(--space-3);
  }

  .dotphrase-content li {
    margin-bottom: var(--space-2);
  }

  .dotphrase-actions {
    display: flex;
    gap: var(--space-2);
  }

  .copy-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    font-weight: var(--font-weight-semibold);
    opacity: 0;
    transform: translateY(-20px);
    transition: all var(--transition-base);
    z-index: 1000;
    pointer-events: none;
  }

  .copy-notification.show {
    opacity: 1;
    transform: translateY(0);
  }

  .no-results {
    text-align: center;
    padding: var(--space-10);
    color: var(--color-text-secondary);
  }

  .no-results h3 {
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
  }

  @media screen and (max-width: 768px) {
    .dotphrase-grid {
      grid-template-columns: 1fr;
    }

    .search-filter-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .search-input,
    .filter-select {
      width: 100%;
    }

    .group-actions {
      flex-direction: column;
      align-items: flex-end;
    }
  }
</style>

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical Dot Phrase Library</h1>
    <p class="hero-subtitle">
      Copy formatted dot phrases directly into your EMR. Organized by clinical workflow.
    </p>
  </div>
</div>

<!-- Search and Filter Bar -->
<section class="section">
  <div class="container">
    <div class="search-filter-bar">
      <input 
        type="text" 
        id="searchInput" 
        class="search-input" 
        placeholder="🔍 Search dot phrases..."
      >
      <select id="groupFilter" class="filter-select">
        <option value="">All Groups</option>
      </select>
      <button id="expandAllBtn" class="btn btn-secondary">Expand All</button>
      <button id="collapseAllBtn" class="btn btn-secondary">Collapse All</button>
    </div>
  </div>
</section>

<!-- Dot Phrases by Group -->
<section class="section bg-secondary">
  <div class="container">
    <div id="dotphraseContainer">
      <!-- Groups will be dynamically inserted here -->
    </div>
    <div id="noResults" class="no-results" style="display: none;">
      <h3>No results found</h3>
      <p>Try adjusting your search or filter criteria.</p>
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-6">Get Notified of New Dot Phrases</h2>
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section bg-secondary">
  <div class="container text-center">
    <h2 class="mb-6">Have Dot Phrases to Share?</h2>
    <p class="text-lg text-secondary mb-8" style="max-width: 700px; margin-left: auto; margin-right: auto;">
      Help the community by contributing your clinical dot phrases to our library.
    </p>
    <div class="hero-cta">
      <a href="{{ site.baseurl }}/contributions" class="btn btn-primary btn-lg">Contribute Dot Phrases</a>
      <a href="{{ site.baseurl }}/best-practices" class="btn btn-outline btn-lg">Learn Best Practices</a>
    </div>
  </div>
</section>

<!-- Copy Notification -->
<div id="copyNotification" class="copy-notification">✓ Copied to clipboard!</div>

<script>
// =====================================================
// DATA STRUCTURE
// =====================================================
// This will be populated by Jekyll
const dotPhraseData = [
  {% assign groups = site.dotphrases | group_by: "group" | sort: "name" %}
  {% for group in groups %}
  {
    name: "{{ group.name }}",
    phrases: [
      {% for phrase in group.items %}
      {
        title: "{{ phrase.title | escape }}",
        shortcut: "{{ phrase.shortcut | escape }}",
        content: `{{ phrase.content | strip_html | newline_to_br | strip_newlines }}`,
        contentHtml: `{{ phrase.content }}`
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

// =====================================================
// STATE
// =====================================================
let searchTerm = '';
let selectedGroup = '';
let expandedGroups = new Set();

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
  populateGroupFilter();
  renderDotPhrases();
  attachEventListeners();
  
  // Start with all groups expanded
  dotPhraseData.forEach(group => expandedGroups.add(group.name));
});

// =====================================================
// EVENT LISTENERS
// =====================================================
function attachEventListeners() {
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.getElementById('groupFilter').addEventListener('change', handleGroupFilter);
  document.getElementById('expandAllBtn').addEventListener('click', expandAll);
  document.getElementById('collapseAllBtn').addEventListener('click', collapseAll);
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  renderDotPhrases();
}

function handleGroupFilter(e) {
  selectedGroup = e.target.value;
  renderDotPhrases();
}

function expandAll() {
  dotPhraseData.forEach(group => expandedGroups.add(group.name));
  updateGroupStates();
}

function collapseAll() {
  expandedGroups.clear();
  updateGroupStates();
}

function toggleGroup(groupName) {
  if (expandedGroups.has(groupName)) {
    expandedGroups.delete(groupName);
  } else {
    expandedGroups.add(groupName);
  }
  updateGroupStates();
}

function updateGroupStates() {
  dotPhraseData.forEach(group => {
    const header = document.querySelector(`[data-group="${group.name}"]`);
    const content = document.getElementById(`group-content-${group.name.replace(/\s+/g, '-')}`);
    
    if (header && content) {
      if (expandedGroups.has(group.name)) {
        header.classList.remove('collapsed');
        content.classList.remove('collapsed');
      } else {
        header.classList.add('collapsed');
        content.classList.add('collapsed');
      }
    }
  });
}

// =====================================================
// FILTERING
// =====================================================
function populateGroupFilter() {
  const select = document.getElementById('groupFilter');
  dotPhraseData.forEach(group => {
    const option = document.createElement('option');
    option.value = group.name;
    option.textContent = `${group.name} (${group.phrases.length})`;
    select.appendChild(option);
  });
}

function filterData() {
  let filtered = dotPhraseData;

  // Filter by selected group
  if (selectedGroup) {
    filtered = filtered.filter(group => group.name === selectedGroup);
  }

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.map(group => ({
      ...group,
      phrases: group.phrases.filter(phrase => 
        phrase.title.toLowerCase().includes(searchTerm) ||
        phrase.shortcut.toLowerCase().includes(searchTerm) ||
        phrase.content.toLowerCase().includes(searchTerm)
      )
    })).filter(group => group.phrases.length > 0);
  }

  return filtered;
}

// =====================================================
// RENDERING
// =====================================================
function renderDotPhrases() {
  const container = document.getElementById('dotphraseContainer');
  const noResults = document.getElementById('noResults');
  const filtered = filterData();

  if (filtered.length === 0 || filtered.every(g => g.phrases.length === 0)) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  
  container.innerHTML = filtered.map(group => {
    const groupId = group.name.replace(/\s+/g, '-');
    const isExpanded = expandedGroups.has(group.name);
    
    return `
      <div class="group-section">
        <div class="group-header ${isExpanded ? '' : 'collapsed'}" 
             data-group="${group.name}"
             onclick="toggleGroup('${group.name}')">
          <h2>${escapeHtml(group.name)}</h2>
          <div class="group-actions">
            <span class="group-count">${group.phrases.length} phrase${group.phrases.length !== 1 ? 's' : ''}</span>
            <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); exportGroup('${group.name}')">
              📥 Export Group
            </button>
            <span class="expand-icon">▼</span>
          </div>
        </div>
        
        <div id="group-content-${groupId}" class="group-content ${isExpanded ? '' : 'collapsed'}">
          <div class="dotphrase-grid">
            ${group.phrases.map((phrase, index) => renderPhraseCard(phrase, group.name, index)).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderPhraseCard(phrase, groupName, index) {
  return `
    <div class="dotphrase-card">
      <div class="dotphrase-header">
        <div class="dotphrase-title">${escapeHtml(phrase.title)}</div>
        <span class="dotphrase-shortcut">${escapeHtml(phrase.shortcut)}</span>
      </div>
      
      <div class="dotphrase-content" id="phrase-content-${groupName}-${index}">
        ${phrase.contentHtml}
      </div>
      
      <div class="dotphrase-actions">
        <button class="btn btn-primary btn-sm" onclick="copyPhrase('${groupName}', ${index})">
          📋 Copy
        </button>
        <button class="btn btn-secondary btn-sm" onclick="downloadPhrase('${groupName}', ${index})">
          ⬇️ Download
        </button>
      </div>
    </div>
  `;
}

// =====================================================
// COPY & EXPORT FUNCTIONS
// =====================================================
async function copyPhrase(groupName, index) {
  const group = dotPhraseData.find(g => g.name === groupName);
  if (!group) return;
  
  const phrase = group.phrases[index];
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  try {
    // Create a temporary element to hold the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentElement.innerHTML;
    
    // Copy both HTML and plain text to clipboard
    const blob = new Blob([contentElement.innerHTML], { type: 'text/html' });
    const plainText = contentElement.innerText;
    
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      })
    ]);
    
    showCopyNotification();
  } catch (err) {
    console.error('Copy failed:', err);
    // Fallback to plain text copy
    try {
      await navigator.clipboard.writeText(contentElement.innerText);
      showCopyNotification();
    } catch (fallbackErr) {
      alert('Failed to copy. Please try selecting and copying manually.');
    }
  }
}

function showCopyNotification() {
  const notification = document.getElementById('copyNotification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

function downloadPhrase(groupName, index) {
  const group = dotPhraseData.find(g => g.name === groupName);
  if (!group) return;
  
  const phrase = group.phrases[index];
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  // Create HTML content for download
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${phrase.title}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
    h1 { color: #2a7ae2; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; }
    .content { margin-top: 20px; line-height: 1.6; }
  </style>
</head>
<body>
  <h1>${escapeHtml(phrase.title)}</h1>
  <p><strong>Shortcut:</strong> <span class="shortcut">${escapeHtml(phrase.shortcut)}</span></p>
  <div class="content">
    ${contentElement.innerHTML}
  </div>
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${phrase.shortcut.replace(/\./g, '')}-${phrase.title.replace(/[^a-z0-9]/gi, '_')}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportGroup(groupName) {
  const group = dotPhraseData.find(g => g.name === groupName);
  if (!group) return;
  
  // Create HTML content for the entire group
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${groupName} - Dot Phrases</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; }
    h1 { color: #2a7ae2; border-bottom: 3px solid #2a7ae2; padding-bottom: 10px; }
    .phrase { margin: 30px 0; padding: 20px; border: 2px solid #e8e8e8; border-radius: 8px; }
    .phrase-title { font-size: 1.2em; font-weight: bold; color: #333; margin-bottom: 10px; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; display: inline-block; margin-bottom: 15px; }
    .content { line-height: 1.6; }
    @media print {
      .phrase { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>${escapeHtml(groupName)}</h1>
  <p><strong>${group.phrases.length}</strong> dot phrase${group.phrases.length !== 1 ? 's' : ''}</p>
  
  ${group.phrases.map((phrase, index) => `
    <div class="phrase">
      <div class="phrase-title">${escapeHtml(phrase.title)}</div>
      <div class="shortcut">${escapeHtml(phrase.shortcut)}</div>
      <div class="content">
        ${phrase.contentHtml}
      </div>
    </div>
  `).join('')}
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${groupName.replace(/[^a-z0-9]/gi, '_')}-dot-phrases.html`;
  a.click();
  URL.revokeObjectURL(url);
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
