---
layout: page
title: "CME & Budget Tracker"
description: Track your Continuing Medical Education budget, expenses, and days off with this easy-to-use ledger.
permalink: /cme-tracker/
---
<style>
    :root {
        --primary: #059669; /* Emerald 600 */
        --primary-hover: #047857;
        --secondary: #2563eb; /* Blue 600 */
        --bg-light: #f3f4f6;
        --card-bg: #ffffff;
        --text-main: #1f2937;
        --text-muted: #6b7280;
        --border: #e5e7eb;
        --danger: #dc2626;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-light);
        color: var(--text-main);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .app-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Header */
    .app-header {
        background: var(--card-bg);
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
    }

    .header-content h1 {
        font-size: 1.8rem;
        color: var(--text-main);
        margin: 0 0 8px 0;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .header-content p {
        color: var(--text-muted);
        margin: 0;
    }

    .header-actions {
        display: flex;
        gap: 12px;
    }

    /* Dashboard Cards */
    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-bottom: 24px;
    }

    .stat-card {
        background: var(--card-bg);
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
    }

    .stat-card h3 {
        margin: 0 0 16px 0;
        font-size: 1.1rem;
        color: var(--text-muted);
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .stat-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-main);
        margin-bottom: 8px;
    }

    .stat-sub {
        font-size: 0.9rem;
        color: var(--text-muted);
        display: flex;
        justify-content: space-between;
    }

    .progress-bar-bg {
        height: 8px;
        background: #e5e7eb;
        border-radius: 4px;
        margin-top: 16px;
        overflow: hidden;
    }

    .progress-bar-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease;
    }

    .money-fill { background: var(--primary); }
    .days-fill { background: var(--secondary); }

    /* Controls */
    .controls-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        flex-wrap: wrap;
        gap: 12px;
    }

    .btn {
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.95rem;
    }

    .btn-primary {
        background: var(--primary);
        color: white;
    }
    .btn-primary:hover { background: var(--primary-hover); }

    .btn-secondary {
        background: white;
        border: 1px solid var(--border);
        color: var(--text-main);
    }
    .btn-secondary:hover { background: #f9fafb; border-color: #d1d5db; }

    .btn-danger {
        background: #fee2e2;
        color: var(--danger);
    }
    .btn-danger:hover { background: #fecaca; }

    /* Table */
    .table-container {
        background: var(--card-bg);
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        overflow: hidden;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        background: #f9fafb;
        text-align: left;
        padding: 16px;
        font-weight: 600;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border);
    }

    td {
        padding: 16px;
        border-bottom: 1px solid var(--border);
        color: var(--text-main);
    }

    tr:last-child td { border-bottom: none; }
    tr:hover { background: #f9fafb; }

    .category-badge {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        background: #e5e7eb;
        color: #374151;
    }

    .badge-travel { background: #dbeafe; color: #1e40af; }
    .badge-registration { background: #d1fae5; color: #065f46; }
    .badge-materials { background: #fef3c7; color: #92400e; }
    .badge-other { background: #f3f4f6; color: #4b5563; }

    .empty-state {
        text-align: center;
        padding: 48px;
        color: var(--text-muted);
    }

    /* Modal */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    .modal-overlay.active {
        opacity: 1;
        pointer-events: all;
    }

    .modal {
        background: var(--card-bg);
        padding: 32px;
        border-radius: 16px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        transform: translateY(20px);
        transition: transform 0.2s;
    }

    .modal-overlay.active .modal {
        transform: translateY(0);
    }

    .modal h2 {
        margin-top: 0;
        margin-bottom: 24px;
        color: var(--text-main);
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--text-main);
    }

    .form-control {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    .form-control:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
    }

    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 32px;
    }

    /* Settings Panel */
    .settings-panel {
        background: #f8fafc;
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 24px;
        display: none;
    }
    
    .settings-panel.active {
        display: block;
        animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .settings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
    }

    /* Responsive */
    @media (max-width: 640px) {
        .header-content h1 { font-size: 1.5rem; }
        .stat-value { font-size: 2rem; }
        .controls-bar { flex-direction: column; align-items: stretch; }
        .btn { justify-content: center; }
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
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            CME & Budget Tracker
        </h1>
        <p class="hero-subtitle">
            Plan your work schedule, vacation days, and CME time for the entire year with this interactive calendar tool.
        </p>
    </div>
</div>

<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
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


<div class="app-container">
    <!-- Header -->
    <div class="app-header">
        <div class="header-content">
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                CME & Budget Tracker
            </h1>
            <p>Manage your annual CME allowance and educational leave days.</p>
        </div>
        <div class="header-actions">
            <button class="btn btn-secondary" onclick="toggleSettings()">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                Settings
            </button>
            <button class="btn btn-secondary" onclick="exportData()">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export
            </button>
            <button class="btn btn-secondary" onclick="document.getElementById('import-file').click()">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Import
            </button>
            <input type="file" id="import-file" accept=".csv" style="display:none" onchange="importData(this)">
        </div>
    </div>

    <!-- Settings Panel -->
    <div id="settings-panel" class="settings-panel">
        <h3 style="margin-top: 0; margin-bottom: 16px;">Configuration</h3>
        <div class="settings-grid">
            <div class="form-group">
                <label>Annual Budget ($)</label>
                <input type="number" id="setting-budget" class="form-control" value="3000">
            </div>
            <div class="form-group">
                <label>Annual Days Off</label>
                <input type="number" id="setting-days" class="form-control" value="5">
            </div>
            <div class="form-group">
                <label>Fiscal Year Start</label>
                <select id="setting-start-month" class="form-control">
                    <option value="0">January</option>
                    <option value="6">July</option>
                    <option value="9">October</option>
                </select>
            </div>
        </div>
        <div style="text-align: right; margin-top: 16px;">
            <button class="btn btn-primary" onclick="saveSettings()">Save Configuration</button>
        </div>
    </div>

    <!-- Dashboard -->
    <div class="dashboard-grid">
        <!-- Budget Card -->
        <div class="stat-card">
            <h3>
                Budget Remaining
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </h3>
            <div class="stat-value" id="display-budget-remaining">$0.00</div>
            <div class="stat-sub">
                <span>Spent: <span id="display-budget-spent">$0.00</span></span>
                <span>Total: <span id="display-budget-total">$0.00</span></span>
            </div>
            <div class="progress-bar-bg">
                <div id="progress-budget" class="progress-bar-fill money-fill" style="width: 0%"></div>
            </div>
        </div>

        <!-- Days Card -->
        <div class="stat-card">
            <h3>
                Days Remaining
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--secondary);"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </h3>
            <div class="stat-value" id="display-days-remaining">0</div>
            <div class="stat-sub">
                <span>Used: <span id="display-days-used">0</span></span>
                <span>Total: <span id="display-days-total">0</span></span>
            </div>
            <div class="progress-bar-bg">
                <div id="progress-days" class="progress-bar-fill days-fill" style="width: 0%"></div>
            </div>
        </div>
    </div>

    <!-- Transactions -->
    <div class="controls-bar">
        <h2 style="margin: 0;">Expenses & Activities</h2>
        <button class="btn btn-primary" onclick="openModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Entry
        </button>
    </div>

    <div class="table-container">
        <table id="expense-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Cost</th>
                    <th>Days</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="expense-list">
                <!-- Rows will be populated by JS -->
            </tbody>
        </table>
        <div id="empty-state" class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <p>No expenses recorded yet. Click "Add Entry" to begin.</p>
        </div>
    </div>
</div>

<!-- Add/Edit Modal -->
<div id="entry-modal" class="modal-overlay">
    <div class="modal">
        <h2 id="modal-title">Add Expense</h2>
        <form id="entry-form" onsubmit="handleFormSubmit(event)">
            <input type="hidden" id="entry-id">
            
            <div class="form-group">
                <label>Date</label>
                <input type="date" id="entry-date" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label>Description</label>
                <input type="text" id="entry-desc" class="form-control" placeholder="e.g. Conference Registration" required>
            </div>
            
            <div class="form-group">
                <label>Category</label>
                <select id="entry-category" class="form-control">
                    <option value="Registration">Conference</option>
                    <option value="Travel">Travel</option>
                    <option value="Materials">Books</option>
                    <option value="Courses">Courses</option>
                    <option value="Subscriptions">Subscriptions</option>
                    <option value="Supplies">Supplies </option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div class="settings-grid">
                <div class="form-group">
                    <label>Cost ($)</label>
                    <input type="number" id="entry-cost" class="form-control" step="0.01" min="0" placeholder="0.00">
                </div>
                <div class="form-group">
                    <label>Days Used</label>
                    <input type="number" id="entry-days" class="form-control" step="0.5" min="0" placeholder="0">
                </div>
            </div>

            <div class="modal-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Entry</button>
            </div>
        </form>
    </div>
</div>

<script>
    // State
    let state = {
        settings: {
            budget: 3000,
            days: 5,
            startMonth: 0 // 0 = Jan
        },
        entries: []
    };

    // Init
    document.addEventListener('DOMContentLoaded', () => {
        loadState();
        render();
        
        // Set default date to today
        document.getElementById('entry-date').valueAsDate = new Date();
    });

    // Persistence
    function loadState() {
        const saved = localStorage.getItem('cme_tracker_data');
        if (saved) {
            state = JSON.parse(saved);
        }
        
        // Populate settings inputs
        document.getElementById('setting-budget').value = state.settings.budget;
        document.getElementById('setting-days').value = state.settings.days;
        document.getElementById('setting-start-month').value = state.settings.startMonth;
    }

    function saveState() {
        localStorage.setItem('cme_tracker_data', JSON.stringify(state));
        render();
    }

    // Core Logic
    function render() {
        const list = document.getElementById('expense-list');
        const emptyState = document.getElementById('empty-state');
        
        // Clear list
        list.innerHTML = '';

        // Calculate Totals
        let totalSpent = 0;
        let totalDaysUsed = 0;

        // Sort entries by date (newest first)
        const sortedEntries = [...state.entries].sort((a, b) => new Date(b.date) - new Date(a.date));

        if (sortedEntries.length === 0) {
            emptyState.style.display = 'block';
            document.getElementById('expense-table').style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            document.getElementById('expense-table').style.display = 'table';
            
            sortedEntries.forEach(entry => {
                totalSpent += parseFloat(entry.cost) || 0;
                totalDaysUsed += parseFloat(entry.days) || 0;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formatDate(entry.date)}</td>
                    <td>${entry.desc}</td>
                    <td><span class="category-badge badge-${entry.category.toLowerCase()}">${entry.category}</span></td>
                    <td>${formatMoney(entry.cost)}</td>
                    <td>${entry.days || '-'}</td>
                    <td>
                        <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.8rem;" onclick="editEntry('${entry.id}')">Edit</button>
                        <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="deleteEntry('${entry.id}')">Delete</button>
                    </td>
                `;
                list.appendChild(row);
            });
        }

        // Update Dashboard
        const budgetRemaining = state.settings.budget - totalSpent;
        const daysRemaining = state.settings.days - totalDaysUsed;

        document.getElementById('display-budget-remaining').textContent = formatMoney(budgetRemaining);
        document.getElementById('display-budget-spent').textContent = formatMoney(totalSpent);
        document.getElementById('display-budget-total').textContent = formatMoney(state.settings.budget);
        
        document.getElementById('display-days-remaining').textContent = daysRemaining;
        document.getElementById('display-days-used').textContent = totalDaysUsed;
        document.getElementById('display-days-total').textContent = state.settings.days;

        // Progress Bars
        const budgetPercent = Math.min(100, (totalSpent / state.settings.budget) * 100);
        const daysPercent = Math.min(100, (totalDaysUsed / state.settings.days) * 100);
        
        document.getElementById('progress-budget').style.width = `${budgetPercent}%`;
        document.getElementById('progress-days').style.width = `${daysPercent}%`;
        
        // Color logic for budget
        if (budgetPercent > 100) {
            document.getElementById('progress-budget').style.backgroundColor = 'var(--danger)';
        } else {
            document.getElementById('progress-budget').style.backgroundColor = 'var(--primary)';
        }
    }

    // Actions
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const id = document.getElementById('entry-id').value;
        const entry = {
            id: id || Date.now().toString(),
            date: document.getElementById('entry-date').value,
            desc: document.getElementById('entry-desc').value,
            category: document.getElementById('entry-category').value,
            cost: parseFloat(document.getElementById('entry-cost').value) || 0,
            days: parseFloat(document.getElementById('entry-days').value) || 0
        };

        if (id) {
            // Edit
            const index = state.entries.findIndex(x => x.id === id);
            if (index !== -1) state.entries[index] = entry;
        } else {
            // Add
            state.entries.push(entry);
        }

        saveState();
        closeModal();
    }

    function deleteEntry(id) {
        if(confirm('Are you sure you want to delete this entry?')) {
            state.entries = state.entries.filter(x => x.id !== id);
            saveState();
        }
    }

    function editEntry(id) {
        const entry = state.entries.find(x => x.id === id);
        if (!entry) return;

        document.getElementById('entry-id').value = entry.id;
        document.getElementById('entry-date').value = entry.date;
        document.getElementById('entry-desc').value = entry.desc;
        document.getElementById('entry-category').value = entry.category;
        document.getElementById('entry-cost').value = entry.cost;
        document.getElementById('entry-days').value = entry.days;
        
        document.getElementById('modal-title').textContent = 'Edit Expense';
        openModal();
    }

    function saveSettings() {
        state.settings.budget = parseFloat(document.getElementById('setting-budget').value) || 0;
        state.settings.days = parseFloat(document.getElementById('setting-days').value) || 0;
        state.settings.startMonth = parseInt(document.getElementById('setting-start-month').value);
        
        saveState();
        toggleSettings();
    }

    // UI Helpers
    function openModal() {
        document.getElementById('entry-modal').classList.add('active');
    }

    function closeModal() {
        document.getElementById('entry-modal').classList.remove('active');
        document.getElementById('entry-form').reset();
        document.getElementById('entry-id').value = '';
        document.getElementById('modal-title').textContent = 'Add Expense';
        // Reset date to today
        document.getElementById('entry-date').valueAsDate = new Date();
    }

    function toggleSettings() {
        const panel = document.getElementById('settings-panel');
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
            panel.classList.add('active');
        }
    }

    function formatMoney(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        const date = new Date(dateStr + 'T00:00:00'); // Fix timezone offset
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
    }

    function exportData() {
        const headers = ['Date', 'Description', 'Category', 'Cost', 'Days Used'];
        const rows = state.entries.map(e => [
            e.date,
            `"${e.desc.replace(/"/g, '""')}"`, // Escape quotes
            e.category,
            e.cost,
            e.days
        ]);
        
        const csvContent = [
            headers.join(','),
            ...rows.map(r => r.join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'cme_expenses.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function importData(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const text = e.target.result;
                const rows = parseCSV(text);
                
                // Skip header row if it exists
                const startIdx = rows.length > 0 && rows[0][0] === 'Date' ? 1 : 0;
                
                let addedCount = 0;
                for (let i = startIdx; i < rows.length; i++) {
                    const row = rows[i];
                    if (row.length < 4) continue; // Skip invalid rows

                    // Map CSV columns to entry object
                    // Expected: Date, Description, Category, Cost, Days Used
                    const entry = {
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        date: row[0],
                        desc: row[1],
                        category: row[2],
                        cost: parseFloat(row[3]) || 0,
                        days: parseFloat(row[4]) || 0
                    };

                    if (entry.date && entry.desc) {
                        state.entries.push(entry);
                        addedCount++;
                    }
                }

                saveState();
                alert(`Successfully imported ${addedCount} entries.`);
            } catch (err) {
                console.error(err);
                alert('Error parsing CSV file. Please check the format.');
            }
            
            // Reset input
            input.value = '';
        };
        reader.readAsText(file);
    }

    // Simple CSV Parser that handles quotes
    function parseCSV(text) {
        const rows = [];
        let currentRow = [];
        let currentCell = '';
        let inQuotes = false;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const nextChar = text[i + 1];
            
            if (inQuotes) {
                if (char === '"' && nextChar === '"') {
                    currentCell += '"';
                    i++; // Skip next quote
                } else if (char === '"') {
                    inQuotes = false;
                } else {
                    currentCell += char;
                }
            } else {
                if (char === '"') {
                    inQuotes = true;
                } else if (char === ',') {
                    currentRow.push(currentCell);
                    currentCell = '';
                } else if (char === '\n' || char === '\r') {
                    if (currentCell || currentRow.length > 0) {
                        currentRow.push(currentCell);
                        rows.push(currentRow);
                    }
                    currentRow = [];
                    currentCell = '';
                    // Handle \r\n
                    if (char === '\r' && nextChar === '\n') i++;
                } else {
                    currentCell += char;
                }
            }
        }
        
        // Push last row if exists
        if (currentCell || currentRow.length > 0) {
            currentRow.push(currentCell);
            rows.push(currentRow);
        }
        
        return rows;
    }

    // Close modal on outside click
    document.getElementById('entry-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('entry-modal')) {
            closeModal();
        }
    });
</script>
