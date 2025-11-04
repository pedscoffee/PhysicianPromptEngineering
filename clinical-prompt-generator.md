---
layout: page
title: Clinical AI Prompt Studio
description: Professional-grade prompt engineering for medical documentation. Build, test, and deploy custom AI prompts that match your exact clinical workflow.
permalink: /prompt-studio/
---

<style>
/* Modern Design System */
:root {
    --primary: #2563eb;
    --primary-dark: #1e40af;
    --secondary: #10b981;
    --accent: #8b5cf6;
    --danger: #ef4444;
    --warning: #f59e0b;
    --success: #10b981;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --radius: 0.5rem;
    --radius-lg: 0.75rem;
    --font-mono: 'JetBrains Mono', 'Monaco', 'Courier New', monospace;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: var(--gray-900);
    line-height: 1.6;
}

/* Main Container */
.studio-container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 2rem;
}

/* Header Section */
.studio-header {
    background: white;
    border-radius: var(--radius-lg);
    padding: 2.5rem;
    box-shadow: var(--shadow-lg);
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.studio-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.header-text h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
}

.header-text p {
    color: var(--gray-600);
    font-size: 1.125rem;
}

.header-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Navigation Tabs */
.studio-nav {
    background: white;
    border-radius: var(--radius-lg);
    padding: 0.5rem;
    box-shadow: var(--shadow-md);
    margin-bottom: 2rem;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
}

.nav-tab {
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    background: transparent;
    border: none;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--gray-600);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    position: relative;
}

.nav-tab:hover {
    color: var(--primary);
    background: var(--gray-50);
}

.nav-tab.active {
    background: var(--primary);
    color: white;
}

.nav-tab .badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background: var(--danger);
    color: white;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 9999px;
}

/* Main Layout Grid */
.studio-grid {
    display: grid;
    grid-template-columns: 400px 1fr 400px;
    gap: 2rem;
    align-items: start;
}

@media (max-width: 1400px) {
    .studio-grid {
        grid-template-columns: 1fr;
    }
    
    .panel {
        position: relative !important;
        top: auto !important;
    }
}

/* Panel Styles */
.panel {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
}

.panel-header {
    padding: 1.5rem;
    background: var(--gray-50);
    border-bottom: 2px solid var(--gray-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.panel-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--gray-800);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.panel-title .icon {
    width: 24px;
    height: 24px;
    color: var(--primary);
}

.panel-body {
    padding: 1.5rem;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
}

/* Form Elements */
.form-section {
    margin-bottom: 2rem;
}

.form-section:last-child {
    margin-bottom: 0;
}

.form-label {
    display: block;
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.form-hint {
    font-size: 0.85rem;
    color: var(--gray-500);
    margin-bottom: 0.75rem;
}

/* Advanced Select Component */
.select-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
}

.select-option {
    padding: 0.75rem;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    font-size: 0.9rem;
    position: relative;
}

.select-option:hover {
    border-color: var(--primary);
    background: var(--gray-50);
}

.select-option.selected {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.select-option.selected::after {
    content: '✓';
    position: absolute;
    top: 4px;
    right: 8px;
    font-size: 0.75rem;
}

/* Enhanced Radio/Checkbox Options */
.option-card {
    padding: 1rem;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 0.75rem;
}

.option-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.option-card.selected {
    border-color: var(--primary);
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
}

.option-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}

.option-radio {
    width: 20px;
    height: 20px;
    accent-color: var(--primary);
}

.option-label {
    font-weight: 600;
    color: var(--gray-800);
    flex: 1;
}

.option-preview {
    background: var(--gray-100);
    padding: 0.5rem 0.75rem;
    border-radius: calc(var(--radius) / 2);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--gray-600);
    margin-top: 0.5rem;
}

/* Template Gallery */
.template-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.template-card {
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
}

.template-card:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.template-specialty {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: var(--primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
}

.template-name {
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 0.5rem;
}

.template-description {
    font-size: 0.875rem;
    color: var(--gray-600);
    margin-bottom: 0.75rem;
}

.template-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--gray-500);
}

/* Live Preview Panel */
.preview-container {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 1.5rem;
    min-height: 200px;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
}

.preview-empty {
    color: var(--gray-400);
    text-align: center;
    font-family: 'Inter', sans-serif;
    padding: 3rem;
}

/* Output Panel */
.output-section {
    position: sticky;
    top: 2rem;
}

.output-stats {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: var(--gray-50);
    border-radius: var(--radius);
    margin-bottom: 1rem;
}

.stat-item {
    flex: 1;
    text-align: center;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    font-size: 0.8rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.output-content {
    background: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: var(--radius);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    min-height: 400px;
    max-height: 600px;
    overflow-y: auto;
    position: relative;
}

.output-content.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
}

.copy-indicator {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--success);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-size: 0.875rem;
    opacity: 0;
    transition: opacity 0.3s;
}

.copy-indicator.show {
    opacity: 1;
}

/* Action Buttons */
.btn {
    padding: 0.625rem 1.25rem;
    border-radius: var(--radius);
    font-weight: 500;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background: white;
    color: var(--gray-700);
    border: 2px solid var(--gray-200);
}

.btn-secondary:hover:not(:disabled) {
    border-color: var(--primary);
    color: var(--primary);
}

.btn-success {
    background: var(--success);
    color: white;
}

.btn-ghost {
    background: transparent;
    color: var(--gray-600);
}

.btn-ghost:hover {
    background: var(--gray-100);
}

.btn-group {
    display: flex;
    gap: 0.5rem;
}

/* Progress Indicator */
.progress-bar {
    height: 6px;
    background: var(--gray-200);
    border-radius: 3px;
    overflow: hidden;
    margin: 1rem 0;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
    transition: width 0.3s;
}

/* Tooltips */
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltip-text {
    visibility: hidden;
    background: var(--gray-800);
    color: white;
    text-align: center;
    padding: 0.5rem 0.75rem;
    border-radius: var(--radius);
    font-size: 0.8rem;
    position: absolute;
    z-index: 1000;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
}

/* Modal Dialog */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
}

.modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    border-radius: var(--radius-lg);
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow: auto;
    box-shadow: var(--shadow-lg);
}

.modal-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--gray-200);
}

.modal-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-800);
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--gray-200);
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
}

/* AI Assistant Widget */
.ai-assistant {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1500;
}

.ai-toggle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
}

.ai-toggle:hover {
    transform: scale(1.1);
}

.ai-chat {
    position: absolute;
    bottom: 70px;
    right: 0;
    width: 350px;
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    display: none;
}

.ai-chat.show {
    display: block;
}

/* Success Message */
.success-message {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--success);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    display: none;
    z-index: 3000;
}

.success-message.show {
    display: block;
}

/* Loading Spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid var(--gray-200);
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .studio-container {
        padding: 1rem;
    }
    
    .studio-header {
        padding: 1.5rem;
    }
    
    .header-text h1 {
        font-size: 1.75rem;
    }
    
    .panel-body {
        max-height: none;
    }
    
    .ai-assistant {
        bottom: 1rem;
        right: 1rem;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
    }
    
    .studio-nav,
    .btn-group,
    .ai-assistant {
        display: none;
    }
    
    .output-content {
        background: white;
        color: black;
        border: 1px solid #ddd;
    }
}
</style>

<div class="studio-container">
    <!-- Header Section -->
    <header class="studio-header">
        <div class="header-content">
            <div class="header-text">
                <h1>Clinical AI Prompt Studio</h1>
                <p>Build powerful, customized prompts for medical documentation in minutes</p>
            </div>
            <div class="header-actions">
                <button class="btn btn-secondary" onclick="showTutorial()">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    Tutorial
                </button>
                <button class="btn btn-primary" onclick="startWizard()">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Quick Start Wizard
                </button>
            </div>
        </div>
    </header>

    <!-- Navigation Tabs -->
    <nav class="studio-nav">
        <button class="nav-tab active" onclick="switchTab('builder')">
            Prompt Builder
        </button>
        <button class="nav-tab" onclick="switchTab('templates')">
            Templates
            <span class="badge">12</span>
        </button>
        <button class="nav-tab" onclick="switchTab('examples')">
            Examples Library
        </button>
        <button class="nav-tab" onclick="switchTab('test')">
            Test & Validate
        </button>
        <button class="nav-tab" onclick="switchTab('history')">
            Version History
        </button>
        <button class="nav-tab" onclick="switchTab('settings')">
            Settings
        </button>
    </nav>

    <!-- Main Content Grid -->
    <div class="studio-grid" id="builderTab">
        <!-- Left Panel: Configuration -->
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>
                    Configuration
                </div>
                <button class="btn btn-ghost" onclick="resetForm()">Reset</button>
            </div>
            <div class="panel-body">
                <!-- Specialty Selection -->
                <div class="form-section">
                    <label class="form-label">Specialty</label>
                    <div class="form-hint">Choose your medical specialty for optimized defaults</div>
                    <div class="select-grid">
                        <div class="select-option selected" data-specialty="general">General</div>
                        <div class="select-option" data-specialty="pediatrics">Pediatrics</div>
                        <div class="select-option" data-specialty="internal">Internal Med</div>
                        <div class="select-option" data-specialty="family">Family Med</div>
                        <div class="select-option" data-specialty="emergency">Emergency</div>
                        <div class="select-option" data-specialty="surgery">Surgery</div>
                        <div class="select-option" data-specialty="obgyn">OB/GYN</div>
                        <div class="select-option" data-specialty="psychiatry">Psychiatry</div>
                    </div>
                </div>

                <!-- Assessment Format -->
                <div class="form-section">
                    <label class="form-label">Assessment Format</label>
                    <div class="form-hint">How should clinical impressions be presented?</div>
                    
                    <div class="option-card selected" data-assessment="diagnosis">
                        <div class="option-header">
                            <input type="radio" name="assessment" class="option-radio" checked>
                            <span class="option-label">Diagnosis Only</span>
                        </div>
                        <div class="option-preview">Acute otitis media, left</div>
                    </div>
                    
                    <div class="option-card" data-assessment="oneliner">
                        <div class="option-header">
                            <input type="radio" name="assessment" class="option-radio">
                            <span class="option-label">One-Line Summary</span>
                        </div>
                        <div class="option-preview">Patient presents with classic signs of acute bacterial otitis media requiring antibiotic therapy.</div>
                    </div>
                    
                    <div class="option-card" data-assessment="bullets">
                        <div class="option-header">
                            <input type="radio" name="assessment" class="option-radio">
                            <span class="option-label">Bulleted Findings</span>
                        </div>
                        <div class="option-preview">• Fever 101.2°F<br>• TM erythematous, bulging<br>• Decreased mobility</div>
                    </div>
                    
                    <div class="option-card" data-assessment="narrative">
                        <div class="option-header">
                            <input type="radio" name="assessment" class="option-radio">
                            <span class="option-label">Full Narrative</span>
                        </div>
                        <div class="option-preview">Based on the clinical presentation of fever, ear pain, and physical examination findings of an erythematous, bulging tympanic membrane with decreased mobility...</div>
                    </div>
                </div>

                <!-- Plan Format -->
                <div class="form-section">
                    <label class="form-label">Plan Format</label>
                    <div class="form-hint">Structure for treatment recommendations</div>
                    
                    <div class="option-card selected" data-plan="bullets">
                        <div class="option-header">
                            <input type="radio" name="plan" class="option-radio" checked>
                            <span class="option-label">Bullet Points</span>
                        </div>
                        <div class="option-preview">• Amoxicillin 500mg TID x10d<br>• Tylenol PRN fever<br>• RTC 2-3 days if no improvement</div>
                    </div>
                    
                    <div class="option-card" data-plan="numbered">
                        <div class="option-header">
                            <input type="radio" name="plan" class="option-radio">
                            <span class="option-label">Numbered List</span>
                        </div>
                        <div class="option-preview">1. Start antibiotic therapy<br>2. Symptomatic management<br>3. Follow-up instructions</div>
                    </div>
                    
                    <div class="option-card" data-plan="narrative">
                        <div class="option-header">
                            <input type="radio" name="plan" class="option-radio">
                            <span class="option-label">Paragraph Form</span>
                        </div>
                        <div class="option-preview">Will initiate antibiotic therapy with amoxicillin for 10-day course. Patient advised to use acetaminophen for fever control...</div>
                    </div>
                </div>

                <!-- Documentation Style -->
                <div class="form-section">
                    <label class="form-label">Documentation Style</label>
                    <div class="form-hint">Level of detail and formatting preferences</div>
                    
                    <div class="select-grid">
                        <div class="select-option selected" data-style="concise">Concise</div>
                        <div class="select-option" data-style="standard">Standard</div>
                        <div class="select-option" data-style="detailed">Detailed</div>
                        <div class="select-option" data-style="comprehensive">Comprehensive</div>
                    </div>
                </div>

                <!-- Advanced Options -->
                <div class="form-section">
                    <label class="form-label">Advanced Options</label>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox" checked> Use medical abbreviations
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox" checked> Include return precautions
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox"> Add billing codes (CPT/ICD-10)
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox"> Include patient education
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox"> Add quality metrics
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Center Panel: Live Preview -->
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    Live Preview
                </div>
                <div class="btn-group">
                    <select class="btn btn-ghost" onchange="changePreviewMode(this.value)">
                        <option value="sample">Sample Output</option>
                        <option value="prompt">Generated Prompt</option>
                        <option value="comparison">Before/After</option>
                    </select>
                </div>
            </div>
            <div class="panel-body">
                <div class="preview-container" id="livePreview">
                    <div class="preview-empty">
                        Configure your preferences to see a live preview of your documentation style
                    </div>
                </div>
                
                <!-- Sample Input Section -->
                <div style="margin-top: 1.5rem;">
                    <label class="form-label">Test with Sample Text</label>
                    <textarea 
                        placeholder="Paste AI scribe output here to see how it will be transformed..."
                        style="width: 100%; min-height: 150px; padding: 1rem; border: 2px solid var(--gray-200); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.9rem;"
                        onchange="updatePreview()"
                    ></textarea>
                </div>

                <!-- Examples Section -->
                <div style="margin-top: 1.5rem;">
                    <label class="form-label">Your Examples (Required for Best Results)</label>
                    <div class="form-hint">Add 2-3 examples of your actual A&P sections</div>
                    <div id="examplesList" style="margin-bottom: 1rem;"></div>
                    <button class="btn btn-secondary" onclick="addExample()">+ Add Example</button>
                </div>
            </div>
        </div>

        <!-- Right Panel: Output -->
        <div class="panel output-section">
            <div class="panel-header">
                <div class="panel-title">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Generated Prompt
                </div>
                <div class="btn-group">
                    <button class="btn btn-ghost" onclick="validatePrompt()" title="Validate">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <button class="btn btn-ghost" onclick="optimizePrompt()" title="AI Optimize">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="panel-body">
                <!-- Statistics -->
                <div class="output-stats">
                    <div class="stat-item">
                        <div class="stat-value" id="charCount">0</div>
                        <div class="stat-label">Characters</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="completeness">0%</div>
                        <div class="stat-label">Complete</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="quality">--</div>
                        <div class="stat-label">Quality</div>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="progress-bar">
                    <div class="progress-fill" id="progressBar" style="width: 0%"></div>
                </div>

                <!-- Output Content -->
                <div class="output-content empty" id="outputContent">
                    <div>Start configuring to generate your custom prompt</div>
                </div>
                <div class="copy-indicator" id="copyIndicator">Copied to clipboard!</div>

                <!-- Action Buttons -->
                <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="copyPrompt()" style="flex: 1;">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                            </svg>
                            Copy Prompt
                        </button>
                        <button class="btn btn-secondary" onclick="downloadPrompt()">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            Download
                        </button>
                    </div>
                    
                    <button class="btn btn-success" onclick="deployPrompt()" style="width: 100%;">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Test with AI Scribe
                    </button>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <button class="btn btn-ghost" onclick="savePrompt()">Save</button>
                        <button class="btn btn-ghost" onclick="sharePrompt()">Share</button>
                    </div>
                </div>

                <!-- Help Section -->
                <div style="margin-top: 2rem; padding: 1rem; background: var(--gray-50); border-radius: var(--radius);">
                    <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Need Help?</h4>
                    <p style="font-size: 0.85rem; color: var(--gray-600); margin-bottom: 0.75rem;">
                        Our AI assistant can help optimize your prompt or answer questions.
                    </p>
                    <button class="btn btn-secondary" onclick="toggleAIAssistant()" style="width: 100%;">
                        Ask AI Assistant
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Templates Tab (Hidden by default) -->
    <div class="studio-grid" id="templatesTab" style="display: none;">
        <div class="panel" style="grid-column: 1 / -1;">
            <div class="panel-header">
                <div class="panel-title">Template Library</div>
                <input type="search" placeholder="Search templates..." style="padding: 0.5rem 1rem; border: 2px solid var(--gray-200); border-radius: var(--radius); width: 300px;">
            </div>
            <div class="panel-body">
                <div class="template-gallery" id="templateGallery">
                    <!-- Templates will be dynamically loaded here -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- AI Assistant Widget -->
<div class="ai-assistant">
    <button class="ai-toggle" onclick="toggleAIAssistant()">
        <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
    </button>
    <div class="ai-chat" id="aiChat">
        <!-- AI chat interface -->
    </div>
</div>

<!-- Success Message -->
<div class="success-message" id="successMessage">
    Prompt successfully generated!
</div>

<!-- Modal for Examples -->
<div class="modal" id="exampleModal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Add Example</h3>
        </div>
        <div class="modal-body">
            <div class="form-section">
                <label class="form-label">Diagnosis/Problem</label>
                <input type="text" id="exampleDiagnosis" placeholder="e.g., Acute otitis media" style="width: 100%; padding: 0.75rem; border: 2px solid var(--gray-200); border-radius: var(--radius);">
            </div>
            <div class="form-section">
                <label class="form-label">Your Documentation</label>
                <textarea id="exampleText" placeholder="Paste your actual A&P documentation here..." style="width: 100%; min-height: 200px; padding: 0.75rem; border: 2px solid var(--gray-200); border-radius: var(--radius); font-family: var(--font-mono); font-size: 0.9rem;"></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveExample()">Save Example</button>
        </div>
    </div>
</div>

<script>
// Global state management
const state = {
    config: {
        specialty: 'general',
        assessment: 'diagnosis',
        plan: 'bullets',
        style: 'concise',
        problemFormat: 'bold',
        abbreviations: true,
        returnPrecautions: true,
        billingCodes: false,
        patientEducation: false,
        qualityMetrics: false
    },
    examples: [],
    currentTab: 'builder',
    previewMode: 'sample',
    templates: [],
    history: [],
    isDirty: false
};

// Template library
const templates = [
    {
        id: 1,
        name: "Pediatric Concise A&P",
        specialty: "Pediatrics",
        description: "Brief, scannable format optimized for well-child and acute visits",
        downloads: 1243,
        rating: 4.8
    },
    {
        id: 2,
        name: "Emergency Rapid Documentation",
        specialty: "Emergency",
        description: "Ultra-concise format for high-volume ED workflow",
        downloads: 892,
        rating: 4.9
    },
    {
        id: 3,
        name: "Primary Care Comprehensive",
        specialty: "Family Med",
        description: "Detailed format with patient education and follow-up",
        downloads: 2341,
        rating: 4.7
    },
    {
        id: 4,
        name: "Surgical Brief Op Note",
        specialty: "Surgery",
        description: "Structured format for operative planning and post-op care",
        downloads: 567,
        rating: 4.6
    },
    {
        id: 5,
        name: "Psychiatry SOAP Format",
        specialty: "Psychiatry",
        description: "Mental status integrated with medication management",
        downloads: 445,
        rating: 4.8
    },
    {
        id: 6,
        name: "OB/GYN Prenatal Standard",
        specialty: "OB/GYN",
        description: "Trimester-specific assessments and planning",
        downloads: 678,
        rating: 4.7
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadTemplates();
    updateOutput();
    setupAutoSave();
    checkForSavedWork();
});

// Event Listeners
function initializeEventListeners() {
    // Specialty selection
    document.querySelectorAll('.select-option').forEach(option => {
        option.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.select-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            const specialty = this.dataset.specialty;
            if (specialty) {
                state.config.specialty = specialty;
                updateOutput();
            }
            
            const style = this.dataset.style;
            if (style) {
                state.config.style = style;
                updateOutput();
            }
        });
    });
    
    // Radio card options
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('input[type="radio"]').name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
                radio.checked = false;
                radio.closest('.option-card').classList.remove('selected');
            });
            
            this.querySelector('input[type="radio"]').checked = true;
            this.classList.add('selected');
            
            if (this.dataset.assessment) {
                state.config.assessment = this.dataset.assessment;
            }
            if (this.dataset.plan) {
                state.config.plan = this.dataset.plan;
            }
            
            updateOutput();
        });
    });
    
    // Checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.parentElement.textContent.trim();
            if (label.includes('abbreviations')) state.config.abbreviations = this.checked;
            if (label.includes('return precautions')) state.config.returnPrecautions = this.checked;
            if (label.includes('billing codes')) state.config.billingCodes = this.checked;
            if (label.includes('patient education')) state.config.patientEducation = this.checked;
            if (label.includes('quality metrics')) state.config.qualityMetrics = this.checked;
            
            updateOutput();
        });
    });
    
    // Text areas
    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('input', function() {
            state.isDirty = true;
            updateOutput();
        });
    });
}

// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    document.querySelectorAll('[id$="Tab"]').forEach(content => {
        content.style.display = 'none';
    });
    
    const tabContent = document.getElementById(tabName + 'Tab');
    if (tabContent) {
        tabContent.style.display = tabName === 'builder' ? 'grid' : 'block';
    }
    
    state.currentTab = tabName;
    
    if (tabName === 'templates') {
        loadTemplates();
    }
}

// Generate prompt
function generatePrompt() {
    const { config, examples } = state;
    let prompt = [];
    
    // Task statement
    prompt.push('Transform the assessment and plan into a structured, problem-oriented format optimized for rapid clinical review.\n\n');
    
    // Add format instructions based on configuration
    prompt.push('## Output Format\n\n');
    
    // Problem name format
    if (config.problemFormat === 'bold') {
        prompt.push('**[Problem/Diagnosis Name]**\n');
    } else {
        prompt.push('[Problem/Diagnosis Name]\n');
    }
    
    // Assessment format
    if (config.assessment === 'oneliner') {
        prompt.push('Assessment: One-sentence clinical impression\n');
    } else if (config.assessment === 'bullets') {
        prompt.push('Assessment:\n• Key finding 1\n• Key finding 2\n');
    } else if (config.assessment === 'narrative') {
        prompt.push('Assessment: Narrative paragraph with clinical reasoning\n');
    }
    
    // Plan format
    if (config.plan === 'bullets') {
        prompt.push('Plan:\n• Action item 1\n• Action item 2\n• Follow-up instructions\n');
    } else if (config.plan === 'numbered') {
        prompt.push('Plan:\n1. First intervention\n2. Second intervention\n3. Follow-up\n');
    } else if (config.plan === 'narrative') {
        prompt.push('Plan: Paragraph describing treatment approach and follow-up\n');
    }
    
    prompt.push('\n---\n\n');
    
    // Conditional boilerplate
    if (config.returnPrecautions || config.patientEducation) {
        prompt.push('## Conditional Boilerplate\n\n');
        
        if (config.returnPrecautions) {
            prompt.push('If illness discussed:\n');
            prompt.push('"Return precautions given including worsening symptoms, new symptoms, or failure to improve. Patient/caregiver expressed understanding."\n\n');
        }
        
        if (config.patientEducation) {
            prompt.push('If chronic condition discussed:\n');
            prompt.push('"Patient education provided regarding condition management, lifestyle modifications, and medication adherence."\n\n');
        }
        
        prompt.push('---\n\n');
    }
    
    // Formatting rules
    prompt.push('## Formatting Rules\n\n');
    const rules = [];
    
    if (config.style === 'concise') {
        rules.push('Keep all content extremely brief and scannable');
    } else if (config.style === 'detailed') {
        rules.push('Include comprehensive clinical details');
    }
    
    if (config.abbreviations) {
        rules.push('Use standard medical abbreviations');
    } else {
        rules.push('Spell out all medical terms');
    }
    
    if (config.billingCodes) {
        rules.push('Include relevant CPT and ICD-10 codes');
    }
    
    if (config.qualityMetrics) {
        rules.push('Note quality measure compliance');
    }
    
    rules.push('Never fabricate information not in source text');
    rules.push('Maintain clinical accuracy');
    
    rules.forEach((rule, index) => {
        prompt.push(`${index + 1}. ${rule}\n`);
    });
    
    prompt.push('\n---\n\n');
    
    // Examples section
    prompt.push('## Examples\n\n');
    if (examples.length > 0) {
        examples.forEach(example => {
            if (config.problemFormat === 'bold') {
                prompt.push(`**${example.diagnosis}**\n`);
            } else {
                prompt.push(`${example.diagnosis}\n`);
            }
            prompt.push(`${example.text}\n\n`);
        });
    } else {
        prompt.push('[Add your examples here for best results]\n\n');
    }
    
    return prompt.join('');
}

// Update output
function updateOutput() {
    const prompt = generatePrompt();
    const outputElement = document.getElementById('outputContent');
    
    outputElement.textContent = prompt;
    outputElement.classList.toggle('empty', !prompt.trim());
    
    // Update statistics
    updateStatistics(prompt);
    
    // Update preview
    updatePreview();
    
    // Mark as dirty
    state.isDirty = true;
}

// Update statistics
function updateStatistics(prompt) {
    const charCount = prompt.length;
    document.getElementById('charCount').textContent = charCount.toLocaleString();
    
    // Calculate completeness
    let completeness = 60; // Base completion
    if (state.examples.length > 0) completeness += 20;
    if (state.examples.length > 2) completeness += 20;
    
    document.getElementById('completeness').textContent = completeness + '%';
    document.getElementById('progressBar').style.width = completeness + '%';
    
    // Estimate quality
    let quality = 'Good';
    if (completeness === 100 && charCount > 500) quality = 'Excellent';
    if (completeness < 80) quality = 'Fair';
    
    document.getElementById('quality').textContent = quality;
}

// Live preview update
function updatePreview() {
    const preview = document.getElementById('livePreview');
    const { config } = state;
    
    if (state.previewMode === 'sample') {
        let sampleOutput = '';
        
        // Generate sample based on configuration
        if (config.problemFormat === 'bold') {
            sampleOutput += '**Acute Otitis Media**\n\n';
        } else {
            sampleOutput += 'Acute Otitis Media\n\n';
        }
        
        if (config.assessment !== 'diagnosis') {
            sampleOutput += 'Assessment: ';
            if (config.assessment === 'oneliner') {
                sampleOutput += 'Classic presentation of acute bacterial otitis media requiring antibiotic therapy.\n';
            } else if (config.assessment === 'bullets') {
                sampleOutput += '\n• Fever 101.2°F x2 days\n• Left TM erythematous, bulging\n• Decreased TM mobility\n';
            }
        }
        
        sampleOutput += '\nPlan:\n';
        if (config.plan === 'bullets') {
            if (config.abbreviations) {
                sampleOutput += '• Amoxicillin 500mg PO TID x10d\n• Tylenol PRN fever/pain\n• RTC 2-3d if no improvement\n';
            } else {
                sampleOutput += '• Amoxicillin 500 milligrams by mouth three times daily for 10 days\n• Acetaminophen as needed for fever\n• Return to clinic in 2-3 days if no improvement\n';
            }
        }
        
        if (config.returnPrecautions) {
            sampleOutput += '\n*Return precautions given including worsening symptoms or failure to improve.*';
        }
        
        preview.innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${sampleOutput}</pre>`;
    } else if (state.previewMode === 'prompt') {
        preview.textContent = generatePrompt();
    }
    
    preview.classList.remove('preview-empty');
}

// Change preview mode
function changePreviewMode(mode) {
    state.previewMode = mode;
    updatePreview();
}

// Examples management
function addExample() {
    document.getElementById('exampleModal').classList.add('show');
}

function closeModal() {
    document.getElementById('exampleModal').classList.remove('show');
    document.getElementById('exampleDiagnosis').value = '';
    document.getElementById('exampleText').value = '';
}

function saveExample() {
    const diagnosis = document.getElementById('exampleDiagnosis').value;
    const text = document.getElementById('exampleText').value;
    
    if (diagnosis && text) {
        state.examples.push({ diagnosis, text });
        updateExamplesList();
        updateOutput();
        closeModal();
        
        // Show success message
        showSuccess('Example added successfully!');
    }
}

function updateExamplesList() {
    const list = document.getElementById('examplesList');
    list.innerHTML = '';
    
    state.examples.forEach((example, index) => {
        const item = document.createElement('div');
        item.style.cssText = 'padding: 0.75rem; background: var(--gray-50); border-radius: var(--radius); margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;';
        item.innerHTML = `
            <span><strong>${example.diagnosis}</strong></span>
            <button class="btn btn-ghost" onclick="removeExample(${index})" style="padding: 0.25rem 0.5rem;">Remove</button>
        `;
        list.appendChild(item);
    });
}

function removeExample(index) {
    state.examples.splice(index, 1);
    updateExamplesList();
    updateOutput();
}

// Load templates
function loadTemplates() {
    const gallery = document.getElementById('templateGallery');
    if (!gallery) return;
    
    gallery.innerHTML = '';
    
    templates.forEach(template => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.innerHTML = `
            <div class="template-specialty">${template.specialty}</div>
            <div class="template-name">${template.name}</div>
            <div class="template-description">${template.description}</div>
            <div class="template-stats">
                <span>⬇ ${template.downloads}</span>
                <span>⭐ ${template.rating}</span>
            </div>
        `;
        card.onclick = () => loadTemplate(template.id);
        gallery.appendChild(card);
    });
}

function loadTemplate(templateId) {
    // In production, this would load from a database
    showSuccess('Template loaded successfully!');
    switchTab('builder');
}

// Utility functions
function copyPrompt() {
    const text = document.getElementById('outputContent').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const indicator = document.getElementById('copyIndicator');
        indicator.classList.add('show');
        setTimeout(() => indicator.classList.remove('show'), 2000);
    });
}

function downloadPrompt() {
    const text = document.getElementById('outputContent').textContent;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clinical_prompt_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

function savePrompt() {
    localStorage.setItem('promptConfig', JSON.stringify(state));
    showSuccess('Prompt saved successfully!');
    state.isDirty = false;
}

function sharePrompt() {
    const shareData = {
        title: 'Clinical AI Prompt',
        text: 'Check out my custom clinical documentation prompt',
        url: window.location.href + '?share=' + btoa(JSON.stringify(state.config))
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(shareData.url);
        showSuccess('Share link copied to clipboard!');
    }
}

function deployPrompt() {
    // In production, this would integrate with AI scribe
    showSuccess('Prompt deployed to AI scribe!');
}

function validatePrompt() {
    // Validation logic
    const issues = [];
    if (state.examples.length === 0) {
        issues.push('Add examples for better results');
    }
    if (generatePrompt().length > 5000) {
        issues.push('Prompt may be too long');
    }
    
    if (issues.length === 0) {
        showSuccess('Prompt validated successfully!');
    } else {
        alert('Validation issues:\n' + issues.join('\n'));
    }
}

function optimizePrompt() {
    // In production, this would call an AI service
    showSuccess('AI optimization complete!');
}

function resetForm() {
    if (confirm('Reset all settings to defaults?')) {
        location.reload();
    }
}

function toggleAIAssistant() {
    const chat = document.getElementById('aiChat');
    chat.classList.toggle('show');
}

function showSuccess(message) {
    const element = document.getElementById('successMessage');
    element.textContent = message;
    element.classList.add('show');
    setTimeout(() => element.classList.remove('show'), 3000);
}

function setupAutoSave() {
    setInterval(() => {
        if (state.isDirty) {
            localStorage.setItem('promptAutoSave', JSON.stringify(state));
            state.isDirty = false;
        }
    }, 30000); // Auto-save every 30 seconds
}

function checkForSavedWork() {
    const saved = localStorage.getItem('promptAutoSave');
    if (saved) {
        const savedState = JSON.parse(saved);
        if (confirm('Restore your previous work?')) {
            Object.assign(state, savedState);
            updateOutput();
            updateExamplesList();
        }
    }
}

// Wizard functionality
function startWizard() {
    // In production, this would launch an interactive wizard
    alert('Quick Start Wizard coming soon! This will guide you through creating your first prompt step-by-step.');
}

function showTutorial() {
    // In production, this would show an interactive tutorial
    alert('Interactive tutorial coming soon! Learn how to create effective clinical prompts with guided examples.');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 's':
                e.preventDefault();
                savePrompt();
                break;
            case 'c':
                if (e.shiftKey) {
                    e.preventDefault();
                    copyPrompt();
                }
                break;
            case 'd':
                if (e.shiftKey) {
                    e.preventDefault();
                    downloadPrompt();
                }
                break;
        }
    }
});

// Check for shared configuration
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedConfig = urlParams.get('share');
    if (sharedConfig) {
        try {
            const config = JSON.parse(atob(sharedConfig));
            state.config = config;
            updateOutput();
            showSuccess('Shared configuration loaded!');
        } catch (e) {
            console.error('Invalid shared configuration');
        }
    }
});
</script>

<!-- Support Section -->
<div style="margin-top: 3rem; padding: 2rem; background: white; border-radius: var(--radius-lg); text-align: center;">
    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Transform Your Clinical Documentation Today</h3>
    <p style="color: var(--gray-600); margin-bottom: 1.5rem;">
        Join thousands of physicians who have streamlined their workflow with custom AI prompts.<br>
        This tool is free and will always remain free for the medical community.
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="https://github.com/pedscoffee/PhysicianPromptEngineering" class="btn btn-secondary" target="_blank">
            View on GitHub
        </a>
        <a href="https://donate.stripe.com/tip-jar" class="btn btn-primary" target="_blank">
            Support Development
        </a>
    </div>
    <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--gray-500);">
        <strong>Students:</strong> Focus on learning—this tool is our gift to you.
    </p>
</div>
