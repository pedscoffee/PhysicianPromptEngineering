---
layout: page
title: QI Project Tracker
permalink: /qi-project-tracker/
description: Create and track quality improvement projects with custom variables data collection visualization and analysis
---

<style>
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
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: text-bottom; margin-right: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>QI Project Tracker</h1>
        <p class="hero-subtitle">
            Create and track quality improvement projects with custom variables, data collection, visualization, and analysis.
        </p>
    </div>
</div>

<div class="container" style="max-width: 1400px; margin: 0 auto; padding: 0 1.5rem;">
    <!-- Free Tool Banner -->
    <div style="background: #d1fae5; border: 1px solid #6ee7b7; padding: 15px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; color: #059669;">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <div>
            <strong style="color: #065f46;">100% Free Tool</strong>
            <p style="margin: 0; color: #047857; font-size: 0.9em;">This tool is completely free. If you find it valuable, please consider <a href="/premium" style="color: #047857; text-decoration: underline;">supporting the project</a>.</p>
        </div>
    </div>

<!-- Data Warning Notice -->
<div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 1rem 1.5rem; margin-bottom: 1.5rem; margin-top: 1.5rem;">
    <p style="margin: 0; color: #856404;">
        <strong>⚠️ Important:</strong> Your project data is stored in your browser's local storage.
        <strong>Export your data regularly</strong> to avoid losing it if you clear your browser cache or use a different device.
    </p>
</div>

<!-- Flash Message -->
<div class="flash-message" id="flashMessage" style="display: none; background-color: #27ae60; color: white; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
    ✓ Success!
</div>

<style>
    .flash-message.show {
        display: block;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }

    .btn-primary {
        background: #0088bb;
        color: white;
    }

    .btn-primary:hover {
        background: #006b94;
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: #95a5a6;
        color: white;
    }

    .btn-secondary:hover {
        background: #7f8c8d;
    }

    .btn-success {
        background: #27ae60;
        color: white;
    }

    .btn-success:hover {
        background: #229954;
    }

    .btn-danger {
        background: #e74c3c;
        color: white;
    }

    .btn-danger:hover {
        background: #c0392b;
    }

    .btn-warning {
        background: #f39c12;
        color: white;
    }

    .btn-warning:hover {
        background: #e67e22;
    }

    .btn-small {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }

    .card {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .project-card {
        cursor: pointer;
        transition: all 0.3s;
    }

    .project-card:hover {
        border-color: #0088bb;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 136, 187, 0.2);
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1rem;
    }

    .project-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 0;
    }

    .project-description {
        color: #7f8c8d;
        margin: 0.5rem 0;
    }

    .project-stats {
        display: flex;
        gap: 1.5rem;
        font-size: 0.9rem;
        color: #7f8c8d;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    .form-input, select, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
    }

    .form-input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: #0088bb;
    }

    textarea {
        resize: vertical;
    }

    .variable-item {
        background: #f8f9fa;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .variable-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .tab-buttons {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #e1e8ed;
    }

    .tab-btn {
        padding: 0.75rem 1.5rem;
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        font-weight: 600;
        color: #7f8c8d;
        transition: all 0.3s;
    }

    .tab-btn.active {
        color: #0088bb;
        border-bottom-color: #0088bb;
    }

    .view {
        display: none;
    }

    .view.active {
        display: block;
    }

    .data-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }

    .data-table th {
        background: #f8f9fa;
        padding: 0.75rem;
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid #e1e8ed;
        cursor: pointer;
        user-select: none;
    }

    .data-table th:hover {
        background: #e9ecef;
    }

    .data-table td {
        padding: 0.75rem;
        border-bottom: 1px solid #e1e8ed;
    }

    .data-table tr:hover {
        background: #f8f9fa;
    }

    .chart-container {
        margin: 2rem 0;
        padding: 1.5rem;
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
    }

    .chart-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }

    .stat-card {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid #0088bb;
    }

    .stat-label {
        font-size: 0.85rem;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2c3e50;
        margin-top: 0.25rem;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .checkbox-group input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .sortable::after {
        content: ' ⇅';
        opacity: 0.3;
    }

    .action-buttons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>

<!-- Main Dashboard View -->
<div id="dashboardView" class="view active">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1 style="margin: 0;">QI Project Dashboard</h1>
        <button class="btn btn-primary" onclick="showCreateProject()">+ Create New Project</button>
    </div>

    <div id="projectsList"></div>

    <div id="noProjects" style="text-align: center; padding: 4rem 2rem; color: #7f8c8d;">
        <h2>No projects yet</h2>
        <p>Click "Create New Project" to get started with your first quality improvement project.</p>
    </div>
</div>

<!-- Create/Edit Project View -->
<div id="createProjectView" class="view">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1 style="margin: 0;" id="createProjectTitle">Create New Project</h1>
        <button class="btn btn-secondary" onclick="showDashboard()">← Back to Dashboard</button>
    </div>

    <div class="card">
        <div class="form-group">
            <label class="form-label">Project Name *</label>
            <input type="text" id="projectName" class="form-input" placeholder="e.g., Hand Hygiene Compliance">
        </div>

        <div class="form-group">
            <label class="form-label">Project Description</label>
            <textarea id="projectDescription" rows="3" placeholder="Describe the goals and scope of this QI project..."></textarea>
        </div>

        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Data Collection Variables</h3>
        <p style="color: #7f8c8d; margin-bottom: 1rem;">Define the variables you want to track for each data entry.</p>

        <div id="variablesList"></div>

        <button class="btn btn-secondary" onclick="addVariable()">+ Add Variable</button>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e1e8ed;">
            <button class="btn btn-success" onclick="saveProject()">Save Project</button>
            <button class="btn btn-secondary" onclick="showDashboard()" style="margin-left: 1rem;">Cancel</button>
        </div>
    </div>
</div>

<!-- Project Detail View -->
<div id="projectDetailView" class="view">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h1 style="margin: 0;" id="projectDetailTitle"></h1>
        <div class="action-buttons">
            <button class="btn btn-secondary btn-small" onclick="editCurrentProject()">Edit Project</button>
            <button class="btn btn-danger btn-small" onclick="deleteCurrentProject()">Delete Project</button>
            <button class="btn btn-secondary" onclick="showDashboard()">← Dashboard</button>
        </div>
    </div>

    <p id="projectDetailDescription" style="color: #7f8c8d; margin-bottom: 1.5rem;"></p>

    <div class="tab-buttons">
        <button class="tab-btn active" onclick="switchProjectTab('collect')">Collect Data</button>
        <button class="tab-btn" onclick="switchProjectTab('view')">View Data</button>
        <button class="tab-btn" onclick="switchProjectTab('analyze')">Analysis & Charts</button>
    </div>

    <!-- Data Collection Tab -->
    <div id="collectTab" class="view active">
        <div class="card">
            <h2 style="margin-top: 0;">Add New Entry</h2>
            <form id="dataEntryForm"></form>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                <button class="btn btn-success" onclick="saveDataEntry()">Save Entry</button>
                <button class="btn btn-warning" onclick="repeatLastEntry()">Repeat Last Entry</button>
                <button class="btn btn-secondary" onclick="clearDataForm()">Clear Form</button>
            </div>
        </div>
    </div>

    <!-- View Data Tab -->
    <div id="viewTab" class="view">
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h2 style="margin: 0;">Data Entries (<span id="entryCount">0</span>)</h2>
                <button class="btn btn-warning" onclick="exportProjectData()">Export to CSV</button>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table" id="dataTable"></table>
            </div>
        </div>
    </div>

    <!-- Analysis Tab -->
    <div id="analyzeTab" class="view">
        <div class="card">
            <h2 style="margin-top: 0;">Statistical Summary</h2>
            <div id="statsContainer"></div>
        </div>

        <div id="chartsContainer"></div>
    </div>
</div>

</div><!-- End container -->

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns"></script>
<script>
// Global state
let projects = [];
let currentProject = null;
let currentProjectId = null;
let editingProjectId = null;
let variableCounter = 0;
let chartInstances = [];

// Initialize
loadProjects();
renderDashboard();

// Local Storage Functions
function loadProjects() {
    const data = localStorage.getItem('qiProjects');
    projects = data ? JSON.parse(data) : [];
}

function saveProjects() {
    localStorage.setItem('qiProjects', JSON.stringify(projects));
}

function getProjectData(projectId) {
    const data = localStorage.getItem(`qiProjectData_${projectId}`);
    return data ? JSON.parse(data) : [];
}

function saveProjectData(projectId, entries) {
    localStorage.setItem(`qiProjectData_${projectId}`, JSON.stringify(entries));
}

// View Navigation
function showDashboard() {
    document.getElementById('dashboardView').classList.add('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.remove('active');
    currentProject = null;
    currentProjectId = null;
    editingProjectId = null;
    renderDashboard();
}

function showCreateProject() {
    editingProjectId = null;
    document.getElementById('createProjectTitle').textContent = 'Create New Project';
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('variablesList').innerHTML = '';
    variableCounter = 0;
    
    document.getElementById('dashboardView').classList.remove('active');
    document.getElementById('createProjectView').classList.add('active');
    document.getElementById('projectDetailView').classList.remove('active');
}

function showProjectDetail(projectId) {
    currentProjectId = projectId;
    currentProject = projects.find(p => p.id === projectId);
    
    if (!currentProject) return;
    
    document.getElementById('projectDetailTitle').textContent = currentProject.name;
    document.getElementById('projectDetailDescription').textContent = currentProject.description || 'No description';
    
    document.getElementById('dashboardView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    switchProjectTab('collect');
    renderDataEntryForm();
}

function editCurrentProject() {
    if (!currentProject) return;
    
    editingProjectId = currentProject.id;
    document.getElementById('createProjectTitle').textContent = 'Edit Project';
    document.getElementById('projectName').value = currentProject.name;
    document.getElementById('projectDescription').value = currentProject.description || '';
    
    // Render existing variables
    document.getElementById('variablesList').innerHTML = '';
    variableCounter = 0;
    currentProject.variables.forEach(variable => {
        addVariable(variable);
    });
    
    document.getElementById('projectDetailView').classList.remove('active');
    document.getElementById('createProjectView').classList.add('active');
}

function switchProjectTab(tab) {
    const tabs = ['collect', 'view', 'analyze'];
    const buttons = document.querySelectorAll('#projectDetailView .tab-btn');
    
    tabs.forEach((t, index) => {
        const tabElement = document.getElementById(`${t}Tab`);
        if (t === tab) {
            tabElement.classList.add('active');
            buttons[index].classList.add('active');
        } else {
            tabElement.classList.remove('active');
            buttons[index].classList.remove('active');
        }
    });
    
    if (tab === 'view') {
        renderDataTable();
    } else if (tab === 'analyze') {
        renderAnalysis();
    }
}

// Dashboard Rendering
function renderDashboard() {
    const container = document.getElementById('projectsList');
    const noProjects = document.getElementById('noProjects');
    
    if (projects.length === 0) {
        container.innerHTML = '';
        noProjects.style.display = 'block';
        return;
    }
    
    noProjects.style.display = 'none';
    
    let html = '';
    projects.forEach(project => {
        const entries = getProjectData(project.id);
        const lastUpdated = entries.length > 0 
            ? new Date(entries[entries.length - 1].timestamp).toLocaleDateString()
            : 'No entries yet';
        
        html += `
            <div class="card project-card" onclick="showProjectDetail('${project.id}')">
                <div class="project-header">
                    <div>
                        <h2 class="project-title">${project.name}</h2>
                        <p class="project-description">${project.description || 'No description'}</p>
                    </div>
                </div>
                <div class="project-stats">
                    <div><strong>Variables:</strong> ${project.variables.length}</div>
                    <div><strong>Entries:</strong> ${entries.length}</div>
                    <div><strong>Last Updated:</strong> ${lastUpdated}</div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Variable Management
function addVariable(existingVariable = null) {
    const id = existingVariable ? existingVariable.id : `var_${variableCounter++}`;
    const container = document.getElementById('variablesList');
    
    const div = document.createElement('div');
    div.className = 'variable-item';
    div.dataset.varId = id;
    
    const type = existingVariable?.type || 'text';
    const name = existingVariable?.name || '';
    const required = existingVariable?.required || false;
    const options = existingVariable?.options || [];
    
    div.innerHTML = `
        <div class="variable-header">
            <strong>Variable ${container.children.length + 1}</strong>
            <button type="button" class="btn btn-danger btn-small" onclick="removeVariable('${id}')">Remove</button>
        </div>
        <div class="form-group">
            <label class="form-label">Variable Name</label>
            <input type="text" class="form-input variable-name" value="${name}" placeholder="e.g., Provider Name, Compliance Rate">
        </div>
        <div class="form-group">
            <label class="form-label">Variable Type</label>
            <select class="variable-type" onchange="updateVariableOptions('${id}')">
                <option value="text" ${type === 'text' ? 'selected' : ''}>Free Text</option>
                <option value="number" ${type === 'number' ? 'selected' : ''}>Number</option>
                <option value="dropdown" ${type === 'dropdown' ? 'selected' : ''}>Dropdown (Single Select)</option>
                <option value="multiselect" ${type === 'multiselect' ? 'selected' : ''}>Multi-Select</option>
                <option value="date" ${type === 'date' ? 'selected' : ''}>Date</option>
                <option value="boolean" ${type === 'boolean' ? 'selected' : ''}>Yes/No</option>
            </select>
        </div>
        <div class="variable-options" style="display: ${type === 'dropdown' || type === 'multiselect' ? 'block' : 'none'}">
            <div class="form-group">
                <label class="form-label">Options (comma-separated)</label>
                <input type="text" class="form-input variable-options-input" value="${options.join(', ')}" placeholder="e.g., Option 1, Option 2, Option 3">
            </div>
        </div>
        <div class="checkbox-group">
            <input type="checkbox" class="variable-required" ${required ? 'checked' : ''}>
            <label>Required field</label>
        </div>
    `;
    
    container.appendChild(div);
}

function removeVariable(varId) {
    const element = document.querySelector(`[data-var-id="${varId}"]`);
    if (element) {
        element.remove();
    }
}

function updateVariableOptions(varId) {
    const container = document.querySelector(`[data-var-id="${varId}"]`);
    const type = container.querySelector('.variable-type').value;
    const optionsDiv = container.querySelector('.variable-options');
    
    if (type === 'dropdown' || type === 'multiselect') {
        optionsDiv.style.display = 'block';
    } else {
        optionsDiv.style.display = 'none';
    }
}

// Project CRUD
function saveProject() {
    const name = document.getElementById('projectName').value.trim();
    
    if (!name) {
        alert('Please enter a project name');
        return;
    }
    
    // Collect variables
    const variableElements = document.querySelectorAll('.variable-item');
    const variables = [];
    
    variableElements.forEach(el => {
        const varName = el.querySelector('.variable-name').value.trim();
        if (!varName) return;
        
        const type = el.querySelector('.variable-type').value;
        const required = el.querySelector('.variable-required').checked;
        const optionsInput = el.querySelector('.variable-options-input')?.value || '';
        const options = (type === 'dropdown' || type === 'multiselect') 
            ? optionsInput.split(',').map(o => o.trim()).filter(o => o)
            : [];
        
        variables.push({
            id: el.dataset.varId,
            name: varName,
            type: type,
            required: required,
            options: options
        });
    });
    
    if (variables.length === 0) {
        alert('Please add at least one variable');
        return;
    }
    
    const description = document.getElementById('projectDescription').value.trim();
    
    if (editingProjectId) {
        // Update existing project
        const project = projects.find(p => p.id === editingProjectId);
        if (project) {
            project.name = name;
            project.description = description;
            project.variables = variables;
            project.updatedAt = new Date().toISOString();
        }
    } else {
        // Create new project
        const project = {
            id: `proj_${Date.now()}`,
            name: name,
            description: description,
            variables: variables,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        projects.push(project);
    }
    
    saveProjects();
    showFlashMessage(editingProjectId ? 'Project updated!' : 'Project created!');
    showDashboard();
}

function deleteCurrentProject() {
    if (!currentProject) return;
    
    if (!confirm(`Are you sure you want to delete "${currentProject.name}"? This will delete all collected data.`)) {
        return;
    }
    
    // Remove project
    projects = projects.filter(p => p.id !== currentProject.id);
    
    // Remove project data
    localStorage.removeItem(`qiProjectData_${currentProject.id}`);
    
    saveProjects();
    showFlashMessage('Project deleted');
    showDashboard();
}

// Data Entry
function renderDataEntryForm() {
    const form = document.getElementById('dataEntryForm');
    form.innerHTML = '';
    
    if (!currentProject) return;
    
    currentProject.variables.forEach(variable => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.className = 'form-label';
        label.textContent = variable.name + (variable.required ? ' *' : '');
        formGroup.appendChild(label);
        
        let input;
        
        switch (variable.type) {
            case 'text':
                input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-input';
                break;
                
            case 'number':
                input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-input';
                input.step = 'any';
                break;
                
            case 'date':
                input = document.createElement('input');
                input.type = 'date';
                input.className = 'form-input';
                break;
                
            case 'boolean':
                input = document.createElement('select');
                input.className = 'form-input';
                input.innerHTML = `
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                `;
                break;
                
            case 'dropdown':
                input = document.createElement('select');
                input.className = 'form-input';
                input.innerHTML = '<option value="">-- Select --</option>';
                variable.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    input.appendChild(opt);
                });
                break;
                
            case 'multiselect':
                input = document.createElement('div');
                variable.options.forEach(option => {
                    const checkboxDiv = document.createElement('div');
                    checkboxDiv.className = 'checkbox-group';
                    checkboxDiv.innerHTML = `
                        <input type="checkbox" value="${option}" class="multiselect-option">
                        <label>${option}</label>
                    `;
                    input.appendChild(checkboxDiv);
                });
                break;
        }
        
        input.dataset.varId = variable.id;
        input.dataset.required = variable.required;
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });
}

function saveDataEntry() {
    if (!currentProject) return;
    
    const data = {};
    let isValid = true;
    
    currentProject.variables.forEach(variable => {
        const element = document.querySelector(`[data-var-id="${variable.id}"]`);
        let value;
        
        if (variable.type === 'multiselect') {
            const checked = element.querySelectorAll('input[type="checkbox"]:checked');
            value = Array.from(checked).map(cb => cb.value);
        } else {
            value = element.value;
        }
        
        if (variable.required && (!value || (Array.isArray(value) && value.length === 0))) {
            isValid = false;
            element.style.borderColor = '#e74c3c';
        } else {
            element.style.borderColor = '#e1e8ed';
        }
        
        data[variable.id] = value;
    });
    
    if (!isValid) {
        alert('Please fill out all required fields');
        return;
    }
    
    const entry = {
        id: `entry_${Date.now()}`,
        timestamp: new Date().toISOString(),
        data: data
    };
    
    const entries = getProjectData(currentProject.id);
    entries.push(entry);
    saveProjectData(currentProject.id, entries);
    
    showFlashMessage('Entry saved!');
    clearDataForm();
}

function clearDataForm() {
    currentProject.variables.forEach(variable => {
        const element = document.querySelector(`[data-var-id="${variable.id}"]`);
        
        if (variable.type === 'multiselect') {
            element.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        } else {
            element.value = '';
        }
        
        element.style.borderColor = '#e1e8ed';
    });
}

function repeatLastEntry() {
    if (!currentProject) return;
    
    const entries = getProjectData(currentProject.id);
    if (entries.length === 0) {
        alert('No previous entries to repeat');
        return;
    }
    
    const lastEntry = entries[entries.length - 1];
    
    currentProject.variables.forEach(variable => {
        const element = document.querySelector(`[data-var-id="${variable.id}"]`);
        const value = lastEntry.data[variable.id];
        
        if (variable.type === 'multiselect') {
            element.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.checked = value && value.includes(cb.value);
            });
        } else {
            element.value = value || '';
        }
    });
    
    showFlashMessage('Last entry loaded');
}

// Data Table
let currentSortColumn = null;
let currentSortDirection = 'asc';

function renderDataTable() {
    if (!currentProject) return;
    
    const entries = getProjectData(currentProject.id);
    const table = document.getElementById('dataTable');
    document.getElementById('entryCount').textContent = entries.length;
    
    if (entries.length === 0) {
        table.innerHTML = '<tr><td colspan="100" style="text-align: center; padding: 2rem; color: #7f8c8d;">No data entries yet</td></tr>';
        return;
    }
    
    // Create header
    let headerHTML = '<thead><tr>';
    headerHTML += '<th class="sortable" onclick="sortTable(\'timestamp\')">Timestamp</th>';
    currentProject.variables.forEach(variable => {
        headerHTML += `<th class="sortable" onclick="sortTable('${variable.id}')">${variable.name}</th>`;
    });
    headerHTML += '<th>Actions</th>';
    headerHTML += '</tr></thead>';
    
    // Create body
    let bodyHTML = '<tbody>';
    entries.forEach(entry => {
        bodyHTML += '<tr>';
        bodyHTML += `<td>${new Date(entry.timestamp).toLocaleString()}</td>`;
        
        currentProject.variables.forEach(variable => {
            const value = entry.data[variable.id];
            const displayValue = Array.isArray(value) ? value.join(', ') : (value || '—');
            bodyHTML += `<td>${displayValue}</td>`;
        });
        
        bodyHTML += `<td><button class="btn btn-danger btn-small" onclick="deleteEntry('${entry.id}')">Delete</button></td>`;
        bodyHTML += '</tr>';
    });
    bodyHTML += '</tbody>';
    
    table.innerHTML = headerHTML + bodyHTML;
}

function sortTable(column) {
    if (!currentProject) return;
    
    const entries = getProjectData(currentProject.id);
    
    if (currentSortColumn === column) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = column;
        currentSortDirection = 'asc';
    }
    
    entries.sort((a, b) => {
        let valA, valB;
        
        if (column === 'timestamp') {
            valA = new Date(a.timestamp);
            valB = new Date(b.timestamp);
        } else {
            valA = a.data[column];
            valB = b.data[column];
            
            // Handle arrays
            if (Array.isArray(valA)) valA = valA.join(', ');
            if (Array.isArray(valB)) valB = valB.join(', ');
            
            // Convert to numbers if possible
            const numA = parseFloat(valA);
            const numB = parseFloat(valB);
            if (!isNaN(numA) && !isNaN(numB)) {
                valA = numA;
                valB = numB;
            }
        }
        
        if (valA < valB) return currentSortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return currentSortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    
    saveProjectData(currentProject.id, entries);
    renderDataTable();
}

function deleteEntry(entryId) {
    if (!currentProject) return;
    
    if (!confirm('Delete this entry?')) return;
    
    let entries = getProjectData(currentProject.id);
    entries = entries.filter(e => e.id !== entryId);
    saveProjectData(currentProject.id, entries);
    
    showFlashMessage('Entry deleted');
    renderDataTable();
}

// Analysis & Charts
function renderAnalysis() {
    if (!currentProject) return;
    
    const entries = getProjectData(currentProject.id);
    
    // Clear existing charts
    chartInstances.forEach(chart => chart.destroy());
    chartInstances = [];
    
    // Render statistics
    renderStatistics(entries);
    
    // Render charts
    renderCharts(entries);
}

function renderStatistics(entries) {
    const container = document.getElementById('statsContainer');
    
    if (entries.length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d;">No data to analyze yet</p>';
        return;
    }
    
    let html = '<div class="stats-grid">';
    
    // Total entries
    html += `
        <div class="stat-card">
            <div class="stat-label">Total Entries</div>
            <div class="stat-value">${entries.length}</div>
        </div>
    `;
    
    // Stats for each variable
    currentProject.variables.forEach(variable => {
        if (variable.type === 'number') {
            const values = entries.map(e => parseFloat(e.data[variable.id])).filter(v => !isNaN(v));
            
            if (values.length > 0) {
                const mean = values.reduce((a, b) => a + b, 0) / values.length;
                const sorted = [...values].sort((a, b) => a - b);
                const median = sorted.length % 2 === 0
                    ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
                    : sorted[Math.floor(sorted.length / 2)];
                const min = Math.min(...values);
                const max = Math.max(...values);
                
                html += `
                    <div class="stat-card">
                        <div class="stat-label">${variable.name} - Mean</div>
                        <div class="stat-value">${mean.toFixed(2)}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">${variable.name} - Median</div>
                        <div class="stat-value">${median.toFixed(2)}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">${variable.name} - Range</div>
                        <div class="stat-value">${min.toFixed(2)} - ${max.toFixed(2)}</div>
                    </div>
                `;
            }
        } else if (variable.type === 'dropdown' || variable.type === 'boolean') {
            const counts = {};
            entries.forEach(e => {
                const value = e.data[variable.id];
                if (value) {
                    counts[value] = (counts[value] || 0) + 1;
                }
            });
            
            const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
            if (mostCommon) {
                html += `
                    <div class="stat-card">
                        <div class="stat-label">${variable.name} - Most Common</div>
                        <div class="stat-value" style="font-size: 1.2rem;">${mostCommon[0]}</div>
                        <div style="color: #7f8c8d; margin-top: 0.5rem;">${mostCommon[1]} occurrences</div>
                    </div>
                `;
            }
        }
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderCharts(entries) {
    const container = document.getElementById('chartsContainer');
    container.innerHTML = '';
    
    if (entries.length === 0) return;
    
    currentProject.variables.forEach(variable => {
        if (variable.type === 'number') {
            createLineChart(variable, entries, container);
        } else if (variable.type === 'dropdown' || variable.type === 'boolean') {
            createBarChart(variable, entries, container);
        } else if (variable.type === 'multiselect') {
            createMultiSelectChart(variable, entries, container);
        }
    });
}

function createLineChart(variable, entries, container) {
    const chartDiv = document.createElement('div');
    chartDiv.className = 'chart-container';
    
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.textContent = `${variable.name} Over Time`;
    chartDiv.appendChild(title);
    
    const canvas = document.createElement('canvas');
    chartDiv.appendChild(canvas);
    container.appendChild(chartDiv);
    
    const values = entries.map(e => ({
        x: new Date(e.timestamp),
        y: parseFloat(e.data[variable.id])
    })).filter(v => !isNaN(v.y));
    
    const chart = new Chart(canvas, {
        type: 'line',
        data: {
            datasets: [{
                label: variable.name,
                data: values,
                borderColor: '#0088bb',
                backgroundColor: 'rgba(0, 136, 187, 0.1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: variable.name
                    }
                }
            }
        }
    });
    
    chartInstances.push(chart);
}

function createBarChart(variable, entries, container) {
    const chartDiv = document.createElement('div');
    chartDiv.className = 'chart-container';
    
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.textContent = `${variable.name} Distribution`;
    chartDiv.appendChild(title);
    
    const canvas = document.createElement('canvas');
    chartDiv.appendChild(canvas);
    container.appendChild(chartDiv);
    
    const counts = {};
    entries.forEach(e => {
        const value = e.data[variable.id];
        if (value) {
            counts[value] = (counts[value] || 0) + 1;
        }
    });
    
    const labels = Object.keys(counts);
    const values = Object.values(counts);
    
    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Count',
                data: values,
                backgroundColor: '#0088bb'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Count'
                    }
                }
            }
        }
    });
    
    chartInstances.push(chart);
}

function createMultiSelectChart(variable, entries, container) {
    const chartDiv = document.createElement('div');
    chartDiv.className = 'chart-container';
    
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.textContent = `${variable.name} Distribution`;
    chartDiv.appendChild(title);
    
    const canvas = document.createElement('canvas');
    chartDiv.appendChild(canvas);
    container.appendChild(chartDiv);
    
    const counts = {};
    entries.forEach(e => {
        const values = e.data[variable.id];
        if (Array.isArray(values)) {
            values.forEach(v => {
                counts[v] = (counts[v] || 0) + 1;
            });
        }
    });
    
    const labels = Object.keys(counts);
    const values = Object.values(counts);
    
    const chart = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Count',
                data: values,
                backgroundColor: '#27ae60'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Count'
                    }
                }
            }
        }
    });
    
    chartInstances.push(chart);
}

// Export
function exportProjectData() {
    if (!currentProject) return;
    
    const entries = getProjectData(currentProject.id);
    
    if (entries.length === 0) {
        alert('No data to export');
        return;
    }
    
    // Create CSV
    let csv = 'Timestamp,';
    csv += currentProject.variables.map(v => `"${v.name}"`).join(',') + '\n';
    
    entries.forEach(entry => {
        csv += `"${new Date(entry.timestamp).toLocaleString()}",`;
        
        const values = currentProject.variables.map(v => {
            const value = entry.data[v.id];
            if (Array.isArray(value)) {
                return `"${value.join('; ')}"`;
            }
            return `"${value || ''}"`;
        });
        
        csv += values.join(',') + '\n';
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProject.name.replace(/[^a-z0-9]/gi, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showFlashMessage('Data exported successfully!');
}

// Utility
function showFlashMessage(message) {
    const flash = document.getElementById('flashMessage');
    flash.textContent = '✓ ' + message;
    flash.classList.add('show');
    setTimeout(() => flash.classList.remove('show'), 3000);
}
</script>
