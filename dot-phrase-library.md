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

  .tag-filter-container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  .tag-badge {
    display: inline-block;
    padding: 4px 12px;
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all var(--transition-fast);
    border: 2px solid transparent;
  }

  .tag-badge:hover {
    background: var(--color-primary);
    color: white;
  }

  .tag-badge.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary-dark);
  }

  .tags-in-card {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    margin-top: var(--space-2);
  }

  .tags-in-card .tag-badge {
    font-size: var(--font-size-xs);
    padding: 2px 8px;
    cursor: default;
  }

  .group-section {
    margin-bottom: var(--space-6);
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
    margin-bottom: var(--space-3);
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

  /* Nested group styling */
  .group-section.level-1 {
    margin-left: 0;
  }

  .group-section.level-2 {
    margin-left: var(--space-6);
  }

  .group-section.level-3 {
    margin-left: calc(var(--space-6) * 2);
  }

  .group-section.level-4 {
    margin-left: calc(var(--space-6) * 3);
  }

  .group-header.level-1 {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  }

  .group-header.level-2 {
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    font-size: var(--font-size-xl);
  }

  .group-header.level-3 {
    background: linear-gradient(135deg, #5da3f0 0%, #4a90e2 100%);
    font-size: var(--font-size-lg);
  }

  .group-header.level-4 {
    background: linear-gradient(135deg, #7eb8f5 0%, #5da3f0 100%);
    font-size: var(--font-size-base);
  }

  .group-header.level-2 h2,
  .group-header.level-3 h2,
  .group-header.level-4 h2 {
    font-size: inherit;
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
    max-height: 10000px;
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
    max-height: 300px;
    overflow-y: auto;
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

    .group-section.level-2,
    .group-section.level-3,
    .group-section.level-4 {
      margin-left: var(--space-4);
    }
  }

  .info-section {
    background: white;
    padding: 20px 30px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-left: 4px solid var(--color-primary);
  }

  .info-section h3 {
    margin-top: 0;
    color: var(--color-primary);
  }

  .info-section p {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .info-section ul {
    margin-left: 20px;
  }

  .info-section li {
    margin-bottom: 8px;
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

<!-- Three Core Principles - Cards -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">Your Dot Phrases: Automated</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Inbox Zero Meets Real Life</h3>
        </div>
        <div class="card-body">
          <p><strong>Use an organized system of dot phrases for quick responses.</strong></p>
          <p class="text-sm text-secondary">Don't type the same types of messages over and over.  Use generalizable task focused messages based on general themes.  It requires a bit of an investment to set up but you'll get that time back within a week.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Guide Your LLM Editor</h3>
        </div>
        <div class="card-body">
          <p><strong>Incorporate your favorite dot phrases into your LLM editor to further personalize your note automation.</strong></p>
          <p class="text-sm text-secondary">Remember brevity improves quality.  Don't over bloat your phrases or it will degrade LLM performance.  Not using an LLM Editor workflow yet? Learn more at <a href="{{ site.baseurl }}/best-practices">Best Practices</a> </p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Prompt Snippet</h3>
        </div>
        <div class="card-body">
          <p><strong>Customize the following prompt snippet to incorporate your favorite dot phrases into your prompt:</strong></p>
          <p class="text-sm text-secondary">## Conditional Boilerplate Text</p>
          <p class="text-sm text-secondary">[Insert after the bulleted list when applicable. This text should be italicized.]</p>
          <p class="text-sm text-secondary">If trigger discussed:</p>
          <p class="text-sm text-secondary">"Your dot phrase goes here."</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section">
  <div class="container">
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="search-filter-bar">
      <input 
        type="text" 
        id="searchInput" 
        class="search-input" 
        placeholder="Search dot phrases..."
        onkeyup="renderDotPhrases()"
      />
      
      <select id="groupFilter" class="filter-select" onchange="renderDotPhrases()">
        <option value="">All Groups</option>
      </select>

      <select id="tagFilter" class="filter-select" onchange="handleTagFilterChange()">
        <option value="">All Tags</option>
      </select>
    </div>

    <div id="activeTagsContainer" class="tag-filter-container" style="margin-bottom: 20px; display: none;">
      <span style="font-weight: 600; color: var(--color-text-secondary);">Active filters:</span>
      <div id="activeTags"></div>
    </div>

    <div id="dotphraseContainer"></div>

    <div id="noResults" class="no-results" style="display: none;">
      <h3>No phrases found</h3>
      <p>Try adjusting your search or filters</p>
    </div>
  </div>
</section>

<div id="copyNotification" class="copy-notification">
  ✓ Copied to clipboard!
</div>

<script>
// =====================================================
// DATA STRUCTURE
// =====================================================
const dotPhraseData = [
  {
    name: "Inbox Management System",
    level: 1,
    subgroups: [
      {
        name: "Results Management",
        level: 2,
        subgroups: [
          {
            name: "Normal Results",
            level: 3,
            phrases: [
              {
                title: "Normal Result - No Action",
                shortcut: ".resnorm",
                tags: ["results", "normal", "no-action"],
                contentHtml: `<p>Results are normal. No further action needed. Please notify patient.</p><p>Thank you.</p>`
              },
              {
                title: "Normal Result - Continue Plan",
                shortcut: ".resnormcont",
                tags: ["results", "normal", "plan"],
                contentHtml: `<p>Results are normal. Please notify patient and advise to continue current management plan.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Abnormal Results",
            level: 3,
            phrases: [
              {
                title: "Abnormal - Call Patient",
                shortcut: ".rescall",
                tags: ["results", "abnormal", "call"],
                contentHtml: `<p>Results are abnormal. Please call patient to discuss findings and next steps regarding ***.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal - Repeat Test",
                shortcut: ".resrpt",
                tags: ["results", "abnormal", "repeat"],
                contentHtml: `<p>Results require confirmation. Please contact patient to repeat *** in ***.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal - Schedule Visit",
                shortcut: ".resappt",
                tags: ["results", "abnormal", "appt"],
                contentHtml: `<p>Results require discussion. Please schedule patient for a follow-up visit within *** to review.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Prescriptions",
        level: 2,
        subgroups: [
          {
            name: "Refill Responses",
            level: 3,
            phrases: [
              {
                title: "Refill Approved",
                shortcut: ".rxok",
                tags: ["rx", "refill", "approved"],
                contentHtml: `<p>Refill approved and sent to pharmacy. Please notify patient.</p><p>Thank you.</p>`
              },
              {
                title: "Refill Denied - Needs Appt",
                shortcut: ".rxappt",
                tags: ["rx", "refill", "denied", "appt"],
                contentHtml: `<p>Unable to refill. Patient requires an appointment for monitoring prior to next refill. Please schedule.</p><p>Thank you.</p>`
              },
              {
                title: "Refill Denied - Other",
                shortcut: ".rxno",
                tags: ["rx", "refill", "denied"],
                contentHtml: `<p>Refill denied due to ***. Please notify patient.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "New Prescriptions",
            level: 3,
            phrases: [
              {
                title: "New Rx Sent",
                shortcut: ".rxnew",
                tags: ["rx", "new"],
                contentHtml: `<p>New prescription for *** sent to pharmacy. Please notify patient and review instructions.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Patient Messages",
        level: 2,
        subgroups: [
          {
            name: "Triage & Action",
            level: 3,
            phrases: [
              {
                title: "Call Patient",
                shortcut: ".msgcall",
                tags: ["msg", "call"],
                contentHtml: `<p>Please call patient regarding ***. Document response.</p><p>Thank you.</p>`
              },
              {
                title: "Schedule Appointment",
                shortcut: ".msgappt",
                tags: ["msg", "appt"],
                contentHtml: `<p>Please contact patient to schedule an appointment for ***.</p><p>Thank you.</p>`
              },
              {
                title: "Message Acknowledged",
                shortcut: ".msgok",
                tags: ["msg", "ack"],
                contentHtml: `<p>Message received and reviewed. No further action needed at this time.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Advice",
            level: 3,
            phrases: [
              {
                title: "Medical Advice",
                shortcut: ".msgadvice",
                tags: ["msg", "advice"],
                contentHtml: `<p>Please advise patient to ***. If symptoms worsen or persist, they should call back or seek urgent care.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Orders & Admin",
        level: 2,
        subgroups: [
          {
            name: "Orders",
            level: 3,
            phrases: [
              {
                title: "Order Labs",
                shortcut: ".ordlab",
                tags: ["order", "lab"],
                contentHtml: `<p>Please order the following labs: ***. Notify patient when order is placed.</p><p>Thank you.</p>`
              },
              {
                title: "Order Imaging",
                shortcut: ".ordimg",
                tags: ["order", "imaging"],
                contentHtml: `<p>Please order ***. Ensure pre-authorization if needed.</p><p>Thank you.</p>`
              },
              {
                title: "Order Referral",
                shortcut: ".ordref",
                tags: ["order", "referral"],
                contentHtml: `<p>Please place referral to *** for ***. Include recent notes and relevant results.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Administrative",
            level: 3,
            phrases: [
              {
                title: "Forms Completed",
                shortcut: ".admform",
                tags: ["admin", "forms"],
                contentHtml: `<p>Forms have been completed and signed. Please return to patient via ***.</p><p>Thank you.</p>`
              },
              {
                title: "Work/School Note",
                shortcut: ".admwork",
                tags: ["admin", "note"],
                contentHtml: `<p>Please provide patient with a note excusing them from *** until ***.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      }
    ]
  }
];

// =====================================================
// STATE MANAGEMENT
// =====================================================
let expandedGroups = new Set();
let activeTagFilters = new Set();

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
  populateFilters();
  renderDotPhrases();
});

// =====================================================
// FILTER POPULATION
// =====================================================
function populateFilters() {
  const groupFilter = document.getElementById('groupFilter');
  const tagFilter = document.getElementById('tagFilter');
  
  // Collect all groups (including nested)
  const allGroups = [];
  function collectGroups(groups, level = 1) {
    groups.forEach(group => {
      allGroups.push({ name: group.name, level: level });
      if (group.subgroups) {
        collectGroups(group.subgroups, level + 1);
      }
    });
  }
  collectGroups(dotPhraseData);
  
  // Populate group filter
  allGroups.forEach(group => {
    const option = document.createElement('option');
    const indent = '　'.repeat(group.level - 1);
    option.value = group.name;
    option.textContent = indent + group.name;
    groupFilter.appendChild(option);
  });
  
  // Collect all unique tags
  const allTags = new Set();
  function collectTags(groups) {
    groups.forEach(group => {
      if (group.phrases) {
        group.phrases.forEach(phrase => {
          phrase.tags.forEach(tag => allTags.add(tag));
        });
      }
      if (group.subgroups) {
        collectTags(group.subgroups);
      }
    });
  }
  collectTags(dotPhraseData);
  
  // Populate tag filter
  Array.from(allTags).sort().forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
}

// =====================================================
// TAG FILTER HANDLING
// =====================================================
function handleTagFilterChange() {
  const tagFilter = document.getElementById('tagFilter');
  const selectedTag = tagFilter.value;
  
  if (selectedTag && !activeTagFilters.has(selectedTag)) {
    activeTagFilters.add(selectedTag);
    updateActiveTagsDisplay();
    renderDotPhrases();
  }
  
  // Reset select to "All Tags"
  tagFilter.value = '';
}

function removeTagFilter(tag) {
  activeTagFilters.delete(tag);
  updateActiveTagsDisplay();
  renderDotPhrases();
}

function updateActiveTagsDisplay() {
  const container = document.getElementById('activeTagsContainer');
  const activeTags = document.getElementById('activeTags');
  
  if (activeTagFilters.size === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'flex';
  activeTags.innerHTML = Array.from(activeTagFilters).map(tag => 
    `<span class="tag-badge active" onclick="removeTagFilter('${tag}')" style="cursor: pointer;" title="Click to remove">
      ${escapeHtml(tag)} ✕
    </span>`
  ).join('');
}

// =====================================================
// GROUP MANAGEMENT
// =====================================================
function toggleGroup(groupName) {
  if (expandedGroups.has(groupName)) {
    expandedGroups.delete(groupName);
  } else {
    expandedGroups.add(groupName);
  }
  renderDotPhrases();
}

function expandAll() {
  function collectAllGroups(groups) {
    groups.forEach(group => {
      expandedGroups.add(group.name);
      if (group.subgroups) {
        collectAllGroups(group.subgroups);
      }
    });
  }
  collectAllGroups(dotPhraseData);
  renderDotPhrases();
}

function collapseAll() {
  expandedGroups.clear();
  renderDotPhrases();
}

// =====================================================
// FILTERING LOGIC
// =====================================================
function filterData() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const groupFilter = document.getElementById('groupFilter').value;
  
  function filterGroups(groups) {
    return groups.map(group => {
      let filteredGroup = { ...group };
      
      // Filter phrases
      if (group.phrases) {
        filteredGroup.phrases = group.phrases.filter(phrase => {
          const matchesSearch = !searchTerm || 
            phrase.title.toLowerCase().includes(searchTerm) ||
            phrase.shortcut.toLowerCase().includes(searchTerm) ||
            phrase.contentHtml.toLowerCase().includes(searchTerm) ||
            phrase.tags.some(tag => tag.toLowerCase().includes(searchTerm));
          
          const matchesTags = activeTagFilters.size === 0 ||
            Array.from(activeTagFilters).every(tag => phrase.tags.includes(tag));
          
          return matchesSearch && matchesTags;
        });
      }
      
      // Filter subgroups recursively
      if (group.subgroups) {
        filteredGroup.subgroups = filterGroups(group.subgroups);
      }
      
      return filteredGroup;
    }).filter(group => {
      // Only include groups that match the group filter
      const matchesGroupFilter = !groupFilter || group.name === groupFilter;
      
      // Check if group has any content (phrases or subgroups with content)
      const hasContent = (group.phrases && group.phrases.length > 0) ||
        (group.subgroups && group.subgroups.length > 0);
      
      return matchesGroupFilter && hasContent;
    });
  }
  
  return filterGroups(dotPhraseData);
}

// =====================================================
// RENDERING
// =====================================================
function renderDotPhrases() {
  const container = document.getElementById('dotphraseContainer');
  const noResults = document.getElementById('noResults');
  const filtered = filterData();
  
  if (filtered.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  container.innerHTML = renderGroups(filtered);
}

function renderGroups(groups, level = 1) {
  return groups.map(group => {
    const isExpanded = expandedGroups.has(group.name);
    const groupId = group.name.replace(/\s+/g, '-');
    const totalPhrases = countPhrases(group);
    
    let content = '';
    
    // Render phrases if this group has any
    if (group.phrases && group.phrases.length > 0) {
      content += `<div class="dotphrase-grid">
        ${group.phrases.map((phrase, index) => renderPhraseCard(phrase, group.name, index)).join('')}
      </div>`;
    }
    
    // Render subgroups if this group has any
    if (group.subgroups && group.subgroups.length > 0) {
      content += renderGroups(group.subgroups, level + 1);
    }
    
    return `
      <div class="group-section level-${level}">
        <div class="group-header level-${level} ${isExpanded ? '' : 'collapsed'}" 
             onclick="toggleGroup('${group.name}')">
          <h2>${escapeHtml(group.name)}</h2>
          <div class="group-actions">
            <span class="group-count">${totalPhrases} phrase${totalPhrases !== 1 ? 's' : ''}</span>
            <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); exportGroup('${group.name}')">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Export
            </button>
            <span class="expand-icon">▼</span>
          </div>
        </div>
        
        <div id="group-content-${groupId}" class="group-content ${isExpanded ? '' : 'collapsed'}">
          ${content}
        </div>
      </div>
    `;
  }).join('');
}

function countPhrases(group) {
  let count = 0;
  if (group.phrases) {
    count += group.phrases.length;
  }
  if (group.subgroups) {
    group.subgroups.forEach(subgroup => {
      count += countPhrases(subgroup);
    });
  }
  return count;
}

function renderPhraseCard(phrase, groupName, index) {
  const tagsHtml = phrase.tags.map(tag => 
    `<span class="tag-badge">${escapeHtml(tag)}</span>`
  ).join('');
  
  return `
    <div class="dotphrase-card">
      <div class="dotphrase-header">
        <div class="dotphrase-title">${escapeHtml(phrase.title)}</div>
        <span class="dotphrase-shortcut">${escapeHtml(phrase.shortcut)}</span>
        <div class="tags-in-card">${tagsHtml}</div>
      </div>
      
      <div class="dotphrase-content" id="phrase-content-${groupName}-${index}">
        ${phrase.contentHtml}
      </div>
      
      <div class="dotphrase-actions">
        <button class="btn btn-primary btn-sm" onclick="copyPhrase('${groupName}', ${index})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
          </svg>
          Copy
        </button>
        <button class="btn btn-secondary btn-sm" onclick="downloadPhrase('${groupName}', ${index})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download
        </button>
      </div>
    </div>
  `;
}

// =====================================================
// COPY & EXPORT FUNCTIONS
// =====================================================
async function copyPhrase(groupName, index) {
  const phrase = findPhrase(groupName, index);
  if (!phrase) return;
  
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  try {
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
  const phrase = findPhrase(groupName, index);
  if (!phrase) return;
  
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${phrase.title}</title>
  <link rel="icon" type="image/png" href="https://physicianpromptengineering.com/favicon.png">
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
    .header { text-align: center; border-bottom: 2px solid #2a7ae2; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #2a7ae2; margin-bottom: 5px; font-size: 1.8em; }
    .header .tagline { color: #666; font-size: 0.9em; margin-bottom: 10px; }
    .header .link { color: #2a7ae2; text-decoration: none; font-weight: 600; }
    h2 { color: #2a7ae2; margin-top: 30px; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; }
    .content { margin-top: 20px; line-height: 1.6; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8e8e8; text-align: center; color: #666; font-size: 0.85em; }
    @media print {
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Physician Prompt Engineering</h1>
    <p class="tagline">Open-source clinical AI prompts for physicians</p>
    <a href="https://physicianpromptengineering.com" class="link no-print">physicianpromptengineering.com</a>
  </div>
  
  <h2>${escapeHtml(phrase.title)}</h2>
  <p><strong>Shortcut:</strong> <span class="shortcut">${escapeHtml(phrase.shortcut)}</span></p>
  <div class="content">
    ${contentElement.innerHTML}
  </div>
  
  <div class="footer">
    <p><strong>Physician Prompt Engineering</strong> | Open-source clinical AI prompts for physicians</p>
    <p class="no-print">Visit <a href="https://physicianpromptengineering.com">physicianpromptengineering.com</a> for more resources</p>
    <p><em>Always review content before using in patient care. See disclaimer at physicianpromptengineering.com</em></p>
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
  const group = findGroup(groupName);
  if (!group) return;
  
  const allPhrases = collectAllPhrases(group);
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${groupName} - Dot Phrases</title>
  <link rel="icon" type="image/png" href="https://physicianpromptengineering.com/favicon.png">
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; }
    .site-header { text-align: center; border-bottom: 3px solid #2a7ae2; padding-bottom: 20px; margin-bottom: 40px; }
    .site-header h1 { color: #2a7ae2; margin-bottom: 5px; font-size: 2em; }
    .site-header .tagline { color: #666; font-size: 1em; margin-bottom: 10px; }
    .site-header .link { color: #2a7ae2; text-decoration: none; font-weight: 600; font-size: 1.1em; }
    .group-title { color: #2a7ae2; border-bottom: 2px solid #2a7ae2; padding-bottom: 10px; margin-top: 30px; }
    .phrase { margin: 30px 0; padding: 20px; border: 2px solid #e8e8e8; border-radius: 8px; }
    .phrase-title { font-size: 1.2em; font-weight: bold; color: #333; margin-bottom: 10px; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; display: inline-block; margin-bottom: 15px; color: #2a7ae2; font-weight: 600; }
    .content { line-height: 1.6; }
    .footer { margin-top: 50px; padding-top: 20px; border-top: 2px solid #e8e8e8; text-align: center; color: #666; }
    .footer p { margin: 10px 0; }
    .footer strong { color: #2a7ae2; }
    @media print {
      .phrase { page-break-inside: avoid; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="site-header">
    <h1>Physician Prompt Engineering</h1>
    <p class="tagline">Open-source clinical AI prompts for physicians</p>
    <a href="https://physicianpromptengineering.com" class="link no-print">physicianpromptengineering.com</a>
  </div>
  
  <h1 class="group-title">${escapeHtml(groupName)}</h1>
  <p><strong>${allPhrases.length}</strong> dot phrase${allPhrases.length !== 1 ? 's' : ''}</p>
  
  ${allPhrases.map(phrase => `
    <div class="phrase">
      <div class="phrase-title">${escapeHtml(phrase.title)}</div>
      <div class="shortcut">${escapeHtml(phrase.shortcut)}</div>
      <div class="content">
        ${phrase.contentHtml}
      </div>
    </div>
  `).join('')}
  
  <div class="footer">
    <p><strong>Physician Prompt Engineering</strong></p>
    <p>Open-source clinical AI prompts for physicians</p>
    <p class="no-print">Visit <a href="https://physicianpromptengineering.com" style="color: #2a7ae2; text-decoration: none; font-weight: 600;">physicianpromptengineering.com</a> for more resources</p>
    <p style="margin-top: 20px;"><em>Always review content before using in patient care. See disclaimer at physicianpromptengineering.com</em></p>
  </div>
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
// HELPER FUNCTIONS
// =====================================================
function findGroup(groupName, groups = dotPhraseData) {
  for (const group of groups) {
    if (group.name === groupName) {
      return group;
    }
    if (group.subgroups) {
      const found = findGroup(groupName, group.subgroups);
      if (found) return found;
    }
  }
  return null;
}

function findPhrase(groupName, index, groups = dotPhraseData) {
  for (const group of groups) {
    if (group.name === groupName && group.phrases) {
      return group.phrases[index];
    }
    if (group.subgroups) {
      const found = findPhrase(groupName, index, group.subgroups);
      if (found) return found;
    }
  }
  return null;
}

function collectAllPhrases(group) {
  let phrases = [];
  if (group.phrases) {
    phrases = [...group.phrases];
  }
  if (group.subgroups) {
    group.subgroups.forEach(subgroup => {
      phrases = phrases.concat(collectAllPhrases(subgroup));
    });
  }
  return phrases;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}