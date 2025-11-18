---
layout: page
title: WorkDay Tracker
permalink: /workday-tracker/
description: Visual time-tracking and workday planning tool with task management, analytics, and Pomodoro timer
---
<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">

<!-- Data Warning Notice -->
<div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 1rem 1.5rem; margin-bottom: 1.5rem; margin-top: 1.5rem;">
    <p style="margin: 0; color: #856404;">
        <strong>⚠️ Important:</strong> Your workday data is stored in your browser's local storage.
        <strong>Export your data regularly</strong> to avoid losing it if you clear your browser cache or use a different device.
    </p>
</div>

<!-- Flash Message -->
<div class="flash-message" id="flashMessage" style="display: none;"></div>

<style>
    /* Flash Messages */
    .flash-message {
        padding: 1rem 1.5rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        animation: slideDown 0.3s ease-out;
    }

    .flash-message.success {
        background-color: #27ae60;
        color: white;
    }

    .flash-message.error {
        background-color: #e74c3c;
        color: white;
    }

    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
    }

    /* Buttons */
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

    .btn-outline {
        background: white;
        color: #0088bb;
        border: 2px solid #0088bb;
    }

    .btn-outline:hover {
        background: #0088bb;
        color: white;
    }

    .btn-large {
        padding: 1rem 2rem;
        font-size: 1.2rem;
    }

    /* Tabs */
    .tab-container {
        margin-bottom: 2rem;
    }

    .tab-buttons {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #e1e8ed;
        flex-wrap: wrap;
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

    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }

    /* Status Bar */
    .status-bar {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .day-status, .current-task {
        flex: 1;
        min-width: 200px;
    }

    .status-label {
        font-size: 0.85rem;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: block;
        margin-bottom: 0.25rem;
    }

    .day-timer, .task-timer {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2c3e50;
        font-family: 'Courier New', monospace;
    }

    .task-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #0088bb;
    }

    /* Task Grid */
    .task-grid {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .breadcrumb {
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #7f8c8d;
    }

    .crumb {
        cursor: pointer;
        color: #0088bb;
    }

    .crumb:hover {
        text-decoration: underline;
    }

    .task-icons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 20px;
    }

    .task-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: transform 0.2s ease;
        user-select: none;
    }

    .task-icon:hover {
        transform: scale(1.05);
    }

    .task-icon.active .icon-shape {
        border: 3px solid #0088bb;
        box-shadow: 0 0 20px rgba(0, 136, 187, 0.5);
        animation: pulse 2s infinite;
    }

    .task-icon.dragging {
        opacity: 0.5;
    }

    .icon-shape {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        margin-bottom: 8px;
        transition: all 0.3s ease;
        position: relative;
    }

    .icon-shape.circle { border-radius: 50%; }
    .icon-shape.square { border-radius: 0; }
    .icon-shape.rounded-square { border-radius: 15px; }

    .icon-label {
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        max-width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #2c3e50;
    }

    .time-indicator {
        font-size: 10px;
        color: #6B7280;
        margin-top: 4px;
    }

    .folder-preview {
        background: #f8f9fa;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2px;
        padding: 5px;
    }

    .folder-preview .mini-icon {
        font-size: 18px;
    }

    /* Quick Actions */
    .quick-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1.5rem;
        flex-wrap: wrap;
    }

    /* Modal */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        animation: fadeIn 0.3s;
    }

    .modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal-content {
        background: white;
        border-radius: 12px;
        padding: 0;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s;
    }

    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .modal-large .modal-content {
        max-width: 800px;
    }

    .modal-header {
        padding: 1.5rem;
        border-bottom: 2px solid #e1e8ed;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-header h3 {
        margin: 0;
        color: #2c3e50;
    }

    .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        color: #7f8c8d;
        cursor: pointer;
        line-height: 1;
        padding: 0;
    }

    .modal-close:hover {
        color: #2c3e50;
    }

    .modal-body {
        padding: 1.5rem;
    }

    .modal-footer {
        padding: 1.5rem;
        border-top: 2px solid #e1e8ed;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    .form-group input[type="text"],
    .form-group input[type="number"],
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #0088bb;
    }

    .icon-picker, .color-picker, .shape-picker {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }

    .emoji-option, .color-option, .shape-option {
        width: 40px;
        height: 40px;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        background: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        transition: all 0.2s;
    }

    .emoji-option:hover, .color-option:hover, .shape-option:hover {
        border-color: #0088bb;
        transform: scale(1.1);
    }

    .emoji-option.selected, .color-option.selected, .shape-option.selected {
        border-color: #0088bb;
        background: #e6f4f9;
    }

    .shape-option {
        width: auto;
        padding: 0.5rem 1rem;
        height: auto;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
    }

    .shape-preview {
        width: 30px;
        height: 30px;
        background: #0088bb;
    }

    /* Analytics */
    .summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }

    .card {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
    }

    .card-label {
        font-size: 0.85rem;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
    }

    .card-value {
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
    }

    .visualizations {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: 2rem 0;
    }

    .viz-container {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
    }

    .viz-container h3 {
        margin-top: 0;
        color: #2c3e50;
    }

    .viz-container canvas {
        max-width: 100%;
    }

    .task-breakdown {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 2rem 0;
    }

    .task-breakdown h3 {
        margin-top: 0;
        color: #2c3e50;
    }

    .task-breakdown table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }

    .task-breakdown th,
    .task-breakdown td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #e1e8ed;
    }

    .task-breakdown th {
        font-weight: 600;
        color: #2c3e50;
        background: #f8f9fa;
    }

    .export-section {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 2rem 0;
    }

    .export-section h3 {
        margin-top: 0;
        color: #2c3e50;
    }

    .export-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .export-controls select {
        padding: 0.75rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-size: 1rem;
    }

    .date-selector {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .date-selector input[type="date"] {
        padding: 0.5rem 1rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-size: 1rem;
    }

    .btn-nav {
        background: #0088bb;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
    }

    .btn-nav:hover {
        background: #006b94;
    }

    /* Pomodoro */
    .pomodoro-container {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 2rem;
    }

    .pomodoro-timer {
        text-align: center;
        margin-bottom: 3rem;
    }

    .timer-display {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 0 auto 2rem;
    }

    .timer-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Courier New', monospace;
        font-size: 3rem;
        font-weight: 700;
        color: #2c3e50;
    }

    .session-type {
        font-size: 1.2rem;
        font-weight: 600;
        color: #7f8c8d;
        margin-bottom: 1rem;
    }

    .pomodoro-progress {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .pomodoro-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #e1e8ed;
    }

    .pomodoro-dot.filled {
        background: #0088bb;
    }

    .current-task-label {
        font-size: 1rem;
        color: #7f8c8d;
        margin-bottom: 1.5rem;
    }

    .pomodoro-controls {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .pomodoro-settings, .pomodoro-stats {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .pomodoro-settings h3, .pomodoro-stats h3 {
        margin-top: 0;
        color: #2c3e50;
    }

    .setting-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .setting-row label {
        flex: 1;
        font-weight: 600;
        color: #2c3e50;
    }

    .setting-row input[type="number"],
    .setting-row select {
        width: 100px;
        padding: 0.5rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
    }

    .setting-row input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .stat-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
    }

    .stat-card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
    }

    .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: #0088bb;
    }

    .stat-label {
        font-size: 0.85rem;
        color: #7f8c8d;
        margin-top: 0.5rem;
    }

    /* Journal */
    .journal-container {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 2rem;
    }

    .journal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .journal-header h2 {
        margin: 0;
        color: #2c3e50;
    }

    .journal-entry {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .entry-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .mood-selector label, .energy-selector label {
        display: block;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }

    .mood-options, .energy-options {
        display: flex;
        gap: 0.5rem;
    }

    .mood-btn, .energy-btn {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 0.75rem;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .mood-btn:hover, .energy-btn:hover {
        border-color: #0088bb;
        transform: scale(1.1);
    }

    .mood-btn.selected, .energy-btn.selected {
        border-color: #0088bb;
        background: #e6f4f9;
    }

    .journal-editor {
        margin-bottom: 1.5rem;
    }

    .editor-toolbar {
        background: white;
        border: 2px solid #e1e8ed;
        border-bottom: none;
        border-radius: 8px 8px 0 0;
        padding: 0.5rem;
        display: flex;
        gap: 0.5rem;
    }

    .toolbar-btn {
        background: white;
        border: 1px solid #e1e8ed;
        border-radius: 4px;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .toolbar-btn:hover {
        background: #f8f9fa;
        border-color: #0088bb;
    }

    .editor-content {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 0 0 8px 8px;
        padding: 1rem;
        min-height: 200px;
        font-size: 1rem;
        line-height: 1.6;
    }

    .editor-content:focus {
        outline: none;
        border-color: #0088bb;
    }

    .journal-prompts {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .prompt-btn {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s;
    }

    .prompt-btn:hover {
        border-color: #0088bb;
        background: #e6f4f9;
    }

    .journal-history {
        margin-top: 2rem;
    }

    .journal-history h3 {
        color: #2c3e50;
    }

    /* Settings */
    .settings-container {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 2rem;
    }

    .settings-container h2 {
        margin-top: 0;
        color: #2c3e50;
    }

    .settings-section {
        background: #f8f9fa;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .settings-section h3 {
        margin-top: 0;
        color: #2c3e50;
    }

    /* Onboarding */
    .onboarding-step {
        text-align: center;
        padding: 2rem;
    }

    .onboarding-step h2 {
        color: #2c3e50;
        margin-bottom: 1rem;
    }

    .onboarding-step p {
        color: #7f8c8d;
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }

    .feature-list {
        text-align: left;
        max-width: 500px;
        margin: 2rem auto;
        list-style: none;
        padding: 0;
    }

    .feature-list li {
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }

    .preset-options {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
    }

    .preset-btn {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 2rem;
        cursor: pointer;
        transition: all 0.3s;
        max-width: 300px;
        text-align: center;
    }

    .preset-btn:hover {
        border-color: #0088bb;
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0, 136, 187, 0.2);
    }

    .preset-btn small {
        display: block;
        color: #7f8c8d;
        margin-top: 0.5rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .task-icons {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            padding: 15px;
        }

        .icon-shape {
            width: 60px;
            height: 60px;
            font-size: 30px;
        }

        .status-bar {
            flex-direction: column;
            align-items: flex-start;
        }

        .tab-buttons {
            overflow-x: auto;
        }

        .entry-header {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .timer-display {
            width: 250px;
            height: 250px;
        }

        .timer-text {
            font-size: 2.5rem;
        }
    }

    @media (min-width: 992px) {
        .visualizations {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<!-- Tab Navigation -->
<div class="tab-container">
    <div class="tab-buttons">
        <button class="tab-btn active" onclick="switchTab('home')">Home</button>
        <button class="tab-btn" onclick="switchTab('analytics')">Analytics</button>
        <button class="tab-btn" onclick="switchTab('pomodoro')">Pomodoro</button>
        <button class="tab-btn" onclick="switchTab('journal')">Journal</button>
        <button class="tab-btn" onclick="switchTab('settings')">Settings</button>
    </div>

    <!-- Home Tab -->
    <div class="tab-content active" id="homeTab">
        <!-- Status Bar -->
        <div class="status-bar">
            <div class="day-status">
                <span class="status-label">Day Timer:</span>
                <span class="day-timer" id="dayTimer">--:--</span>
            </div>
            <div class="current-task">
                <span class="status-label">Current:</span>
                <span class="task-name" id="currentTaskName">No active task</span>
                <span class="task-timer" id="taskTimer">--:--</span>
            </div>
            <div class="day-controls">
                <button id="startDayBtn" class="btn btn-success" onclick="startDay()">Start Day</button>
                <button id="endDayBtn" class="btn btn-danger" onclick="endDay()" style="display:none">End Day</button>
            </div>
        </div>

        <!-- Task Grid -->
        <div class="task-grid">
            <div class="breadcrumb" id="breadcrumb">
                <span class="crumb" onclick="navigateToFolder(null)">Home</span>
            </div>

            <div class="task-icons" id="taskIcons">
                <!-- Populated by JavaScript -->
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
            <button class="btn btn-outline" onclick="switchTab('pomodoro')">
                🍅 Start Pomodoro
            </button>
            <button class="btn btn-outline" onclick="openTaskModal()">
                ➕ Add Task
            </button>
        </div>
    </div>

    <!-- Analytics Tab -->
    <div class="tab-content" id="analyticsTab">
        <div class="date-selector">
            <button class="btn-nav" onclick="changeAnalyticsDate(-1)">&lt;</button>
            <input type="date" id="analyticsDate">
            <button class="btn-nav" onclick="changeAnalyticsDate(1)">&gt;</button>
            <button class="btn btn-outline" onclick="setAnalyticsToday()">Today</button>
        </div>

        <div class="summary-cards">
            <div class="card">
                <div class="card-label">Total Time</div>
                <div class="card-value" id="totalTime">0h 0m</div>
            </div>
            <div class="card">
                <div class="card-label">Tasks Worked</div>
                <div class="card-value" id="tasksCompleted">0</div>
            </div>
            <div class="card">
                <div class="card-label">Pomodoros</div>
                <div class="card-value" id="pomodorosCount">0</div>
            </div>
            <div class="card">
                <div class="card-label">Most Productive</div>
                <div class="card-value" id="topTask">-</div>
            </div>
        </div>

        <div class="visualizations">
            <div class="viz-container">
                <h3>Time by Task</h3>
                <canvas id="categoryPieChart" height="250"></canvas>
            </div>

            <div class="viz-container">
                <h3>Timeline</h3>
                <div id="timelineContainer" style="min-height: 200px;"></div>
            </div>
        </div>

        <div class="task-breakdown">
            <h3>Task Breakdown</h3>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Time</th>
                        <th>%</th>
                        <th>Switches</th>
                    </tr>
                </thead>
                <tbody id="taskBreakdownTable">
                    <tr>
                        <td colspan="4" style="text-align: center; color: #7f8c8d;">No data for selected date</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="export-section">
            <h3>Export Data</h3>
            <div class="export-controls">
                <select id="exportRange">
                    <option value="today">Today Only</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="all">All Time</option>
                </select>
                <button class="btn btn-primary" onclick="exportToCSV()">
                    📊 Export to CSV
                </button>
                <button class="btn btn-outline" onclick="exportToJSON()">
                    💾 Export to JSON
                </button>
            </div>
        </div>
    </div>

    <!-- Pomodoro Tab -->
    <div class="tab-content" id="pomodoroTab">
        <div class="pomodoro-container">
            <div class="pomodoro-timer">
                <div class="timer-display">
                    <canvas id="pomodoroCanvas" width="300" height="300"></canvas>
                    <div class="timer-text">
                        <div id="pomodoroTime">25:00</div>
                    </div>
                </div>

                <div class="session-type" id="sessionType">Work Session</div>

                <div class="pomodoro-progress" id="pomodoroProgress">
                    <!-- Dots populated by JS -->
                </div>

                <div class="current-task-label">
                    Current Task: <span id="pomodoroCurrentTask">None</span>
                </div>

                <div class="pomodoro-controls">
                    <button class="btn btn-large btn-success" id="pomodoroStart" onclick="startPomodoro()">Start</button>
                    <button class="btn btn-large btn-danger" id="pomodoroStop" onclick="stopPomodoro()" style="display:none">Stop</button>
                    <button class="btn btn-outline" id="pomodoroSkip" onclick="skipPomodoro()" style="display:none">Skip</button>
                </div>
            </div>

            <div class="pomodoro-settings">
                <h3>Pomodoro Settings</h3>
                <div class="setting-row">
                    <label>Work Duration:</label>
                    <input type="number" id="workDuration" value="25" min="5" max="60"> minutes
                </div>
                <div class="setting-row">
                    <label>Short Break:</label>
                    <input type="number" id="shortBreak" value="5" min="1" max="15"> minutes
                </div>
                <div class="setting-row">
                    <label>Long Break:</label>
                    <input type="number" id="longBreak" value="15" min="5" max="30"> minutes
                </div>
                <div class="setting-row">
                    <label>Long Break After:</label>
                    <input type="number" id="longBreakInterval" value="4" min="2" max="6"> pomodoros
                </div>
                <button class="btn btn-primary" onclick="savePomodoroSettings()">Save Settings</button>
            </div>

            <div class="pomodoro-stats">
                <h3>Today's Pomodoros</h3>
                <div class="stat-cards">
                    <div class="stat-card">
                        <div class="stat-value" id="pomodorosToday">0</div>
                        <div class="stat-label">Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="focusTime">0h 0m</div>
                        <div class="stat-label">Focus Time</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Journal Tab -->
    <div class="tab-content" id="journalTab">
        <div class="journal-container">
            <div class="journal-header">
                <h2>Daily Journal</h2>
                <div class="date-selector">
                    <button class="btn-nav" onclick="changeJournalDate(-1)">&lt;</button>
                    <input type="date" id="journalDate">
                    <button class="btn-nav" onclick="changeJournalDate(1)">&gt;</button>
                </div>
            </div>

            <div class="journal-entry">
                <div class="entry-header">
                    <div class="mood-selector">
                        <label>How was your day?</label>
                        <div class="mood-options">
                            <button class="mood-btn" data-mood="😊" onclick="selectMood('😊')">😊</button>
                            <button class="mood-btn" data-mood="😐" onclick="selectMood('😐')">😐</button>
                            <button class="mood-btn" data-mood="😞" onclick="selectMood('😞')">😞</button>
                            <button class="mood-btn" data-mood="😤" onclick="selectMood('😤')">😤</button>
                            <button class="mood-btn" data-mood="🤩" onclick="selectMood('🤩')">🤩</button>
                        </div>
                    </div>

                    <div class="energy-selector">
                        <label>Energy Level:</label>
                        <div class="energy-options">
                            <button class="energy-btn" data-energy="1" onclick="selectEnergy(1)">⚡</button>
                            <button class="energy-btn" data-energy="2" onclick="selectEnergy(2)">⚡⚡</button>
                            <button class="energy-btn" data-energy="3" onclick="selectEnergy(3)">⚡⚡⚡</button>
                            <button class="energy-btn" data-energy="4" onclick="selectEnergy(4)">⚡⚡⚡⚡</button>
                            <button class="energy-btn" data-energy="5" onclick="selectEnergy(5)">⚡⚡⚡⚡⚡</button>
                        </div>
                    </div>
                </div>

                <div class="journal-editor">
                    <div class="editor-toolbar">
                        <button class="toolbar-btn" onclick="formatText('bold')" title="Bold">
                            <strong>B</strong>
                        </button>
                        <button class="toolbar-btn" onclick="formatText('italic')" title="Italic">
                            <em>I</em>
                        </button>
                        <button class="toolbar-btn" onclick="formatText('insertUnorderedList')" title="Bullet List">
                            • List
                        </button>
                    </div>

                    <div contenteditable="true" class="editor-content" id="journalEditor">
                        Write your thoughts here...
                    </div>
                </div>

                <div class="journal-prompts">
                    <button class="prompt-btn" onclick="insertPrompt('What went well today?\n\n')">What went well today?</button>
                    <button class="prompt-btn" onclick="insertPrompt('What could be improved?\n\n')">What could be improved?</button>
                    <button class="prompt-btn" onclick="insertPrompt('What did you learn?\n\n')">What did you learn?</button>
                    <button class="prompt-btn" onclick="insertPrompt('Top priorities for tomorrow?\n\n')">Top priorities for tomorrow?</button>
                </div>

                <button class="btn btn-primary" onclick="saveJournal()">Save Entry</button>
            </div>
        </div>
    </div>

    <!-- Settings Tab -->
    <div class="tab-content" id="settingsTab">
        <div class="settings-container">
            <h2>Settings</h2>

            <section class="settings-section">
                <h3>Display</h3>
                <div class="setting-row">
                    <label>Icon Size:</label>
                    <select id="iconSize" onchange="saveSettings()">
                        <option value="small">Small</option>
                        <option value="medium" selected>Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div class="setting-row">
                    <label>Grid Columns:</label>
                    <select id="gridColumns" onchange="saveSettings()">
                        <option value="3">3</option>
                        <option value="4" selected>4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </section>

            <section class="settings-section">
                <h3>Notifications</h3>
                <div class="setting-row">
                    <label>Enable Notifications:</label>
                    <input type="checkbox" id="notificationsEnabled" onchange="saveSettings()" checked>
                </div>
                <div class="setting-row">
                    <label>Sound Alerts:</label>
                    <input type="checkbox" id="soundEnabled" onchange="saveSettings()" checked>
                </div>
                <button class="btn btn-outline" onclick="testNotification()">Test Notification</button>
            </section>

            <section class="settings-section">
                <h3>Data Management</h3>
                <div class="setting-row">
                    <button class="btn btn-primary" onclick="exportAllData()">
                        📊 Export All Data (JSON)
                    </button>
                </div>
                <div class="setting-row">
                    <label>Import Data:</label>
                    <input type="file" id="importFile" accept=".json" style="flex: 2;">
                    <button class="btn btn-outline" onclick="importData()">Import</button>
                </div>
                <div class="setting-row">
                    <button class="btn btn-warning" onclick="clearOldData()">
                        🗑️ Clear Data Older Than 90 Days
                    </button>
                </div>
                <div class="setting-row">
                    <button class="btn btn-danger" onclick="resetApp()">
                        ⚠️ Reset App (Delete All Data)
                    </button>
                </div>
            </section>

            <section class="settings-section">
                <h3>About</h3>
                <p>WorkDay Tracker v1.0</p>
                <p>Created by Physician Prompt Engineering</p>
            </section>
        </div>
    </div>
</div>

<!-- Task Modal -->
<div class="modal" id="taskModal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 id="taskModalTitle">Create New Task</h3>
            <button class="modal-close" onclick="closeTaskModal()">&times;</button>
        </div>

        <div class="modal-body">
            <div class="form-group">
                <label>Task Name:</label>
                <input type="text" id="taskName" placeholder="e.g., Deep Work" maxlength="20">
            </div>

            <div class="form-group">
                <label>Icon/Emoji:</label>
                <input type="text" id="taskIcon" maxlength="2" placeholder="📝" style="margin-bottom: 0.5rem;">
                <div class="icon-picker">
                    <button class="emoji-option" onclick="selectEmoji('📝')">📝</button>
                    <button class="emoji-option" onclick="selectEmoji('💻')">💻</button>
                    <button class="emoji-option" onclick="selectEmoji('📧')">📧</button>
                    <button class="emoji-option" onclick="selectEmoji('📞')">📞</button>
                    <button class="emoji-option" onclick="selectEmoji('🗓️')">🗓️</button>
                    <button class="emoji-option" onclick="selectEmoji('📊')">📊</button>
                    <button class="emoji-option" onclick="selectEmoji('✏️')">✏️</button>
                    <button class="emoji-option" onclick="selectEmoji('🎯')">🎯</button>
                    <button class="emoji-option" onclick="selectEmoji('📚')">📚</button>
                    <button class="emoji-option" onclick="selectEmoji('💬')">💬</button>
                    <button class="emoji-option" onclick="selectEmoji('🎨')">🎨</button>
                    <button class="emoji-option" onclick="selectEmoji('☕')">☕</button>
                </div>
            </div>

            <div class="form-group">
                <label>Color:</label>
                <div class="color-picker">
                    <button class="color-option" style="background: #EF4444;" onclick="selectColor('#EF4444')"></button>
                    <button class="color-option" style="background: #F59E0B;" onclick="selectColor('#F59E0B')"></button>
                    <button class="color-option" style="background: #10B981;" onclick="selectColor('#10B981')"></button>
                    <button class="color-option" style="background: #3B82F6;" onclick="selectColor('#3B82F6')"></button>
                    <button class="color-option" style="background: #8B5CF6;" onclick="selectColor('#8B5CF6')"></button>
                    <button class="color-option" style="background: #EC4899;" onclick="selectColor('#EC4899')"></button>
                    <button class="color-option" style="background: #6B7280;" onclick="selectColor('#6B7280')"></button>
                    <button class="color-option" style="background: #0088bb;" onclick="selectColor('#0088bb')"></button>
                </div>
            </div>

            <div class="form-group">
                <label>Shape:</label>
                <div class="shape-picker">
                    <button class="shape-option" onclick="selectShape('circle')">
                        <div class="shape-preview circle"></div>
                        Circle
                    </button>
                    <button class="shape-option" onclick="selectShape('rounded-square')">
                        <div class="shape-preview rounded-square"></div>
                        Rounded
                    </button>
                    <button class="shape-option" onclick="selectShape('square')">
                        <div class="shape-preview square"></div>
                        Square
                    </button>
                </div>
            </div>
        </div>

        <div class="modal-footer">
            <button class="btn btn-outline" onclick="closeTaskModal()">Cancel</button>
            <button class="btn btn-success" id="deleteTaskBtn" onclick="deleteTask()" style="display:none; margin-right: auto;">Delete</button>
            <button class="btn btn-primary" onclick="saveTaskFromModal()">Save Task</button>
        </div>
    </div>
</div>

<!-- Onboarding Modal -->
<div class="modal modal-large" id="onboardingModal">
    <div class="modal-content">
        <div class="onboarding-step" id="onboardingStep1">
            <h2>Welcome to WorkDay Tracker!</h2>
            <p>Track your time effortlessly and implement your daily time-block plan.</p>
            <button class="btn btn-primary btn-large" onclick="nextOnboardingStep()">Get Started</button>
        </div>

        <div class="onboarding-step" id="onboardingStep2" style="display:none;">
            <h2>How It Works</h2>
            <ul class="feature-list">
                <li>🎯 Click any task icon to start tracking time</li>
                <li>📊 Review your day with detailed analytics</li>
                <li>🍅 Use Pomodoro timer to stay focused</li>
                <li>📝 Keep a daily journal</li>
            </ul>
            <button class="btn btn-outline" onclick="prevOnboardingStep()">Back</button>
            <button class="btn btn-primary" onclick="nextOnboardingStep()">Continue</button>
        </div>

        <div class="onboarding-step" id="onboardingStep3" style="display:none;">
            <h2>Let's Create Your First Tasks</h2>
            <p>We can set up some common tasks, or you can start from scratch.</p>

            <div class="preset-options">
                <button class="preset-btn" onclick="usePresets()">
                    <strong>Use Suggested Tasks</strong>
                    <small>Deep Work, Communication, Planning, etc.</small>
                </button>
                <button class="preset-btn" onclick="startBlank()">
                    <strong>Start from Scratch</strong>
                    <small>Create your own tasks</small>
                </button>
            </div>
        </div>

        <div class="onboarding-step" id="onboardingStep4" style="display:none;">
            <h2>You're All Set!</h2>
            <p>Click "Start Tracking" to begin your workday.</p>
            <button class="btn btn-primary btn-large" onclick="finishOnboarding()">Start Tracking</button>
        </div>
    </div>
</div>

</div><!-- End container -->

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
// WorkDay Tracker App
const WorkDayTracker = {
    state: {
        currentView: 'home',
        currentDay: null,
        activeTask: null,
        tasks: [],
        workDays: [],
        entries: [],
        settings: {
            pomodoro: {
                workDuration: 1500,
                shortBreak: 300,
                longBreak: 900,
                longBreakInterval: 4
            },
            notifications: {
                enabled: true,
                sound: true
            },
            display: {
                iconSize: 'medium',
                gridColumns: 4
            }
        },
        isTracking: false,
        pomodoroState: {
            isRunning: false,
            sessionType: 'work',
            remainingSeconds: 1500,
            pomodorosCompleted: 0,
            interval: null
        },
        currentFolder: null,
        editingTaskId: null,
        selectedEmoji: '📝',
        selectedColor: '#3B82F6',
        selectedShape: 'circle',
        onboardingStep: 1,
        charts: {}
    },

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.initializeTimers();
        this.checkFirstRun();
        this.render();
        this.loadAnalytics();

        // Set dates to today
        const today = this.formatDate(new Date());
        document.getElementById('analyticsDate').value = today;
        document.getElementById('journalDate').value = today;
    },

    loadFromStorage() {
        const tasks = localStorage.getItem('wdt_tasks');
        if (tasks) this.state.tasks = JSON.parse(tasks);

        const workDays = localStorage.getItem('wdt_workdays');
        if (workDays) this.state.workDays = JSON.parse(workDays);

        const entries = localStorage.getItem('wdt_entries');
        if (entries) this.state.entries = JSON.parse(entries);

        const settings = localStorage.getItem('wdt_settings');
        if (settings) this.state.settings = JSON.parse(settings);

        const currentDay = localStorage.getItem('wdt_currentDay');
        if (currentDay) {
            const day = JSON.parse(currentDay);
            if (this.isToday(day.date)) {
                this.state.currentDay = day;
                this.state.isTracking = !day.endTime;
            }
        }

        const activeTask = localStorage.getItem('wdt_activeTask');
        if (activeTask && this.state.isTracking) {
            this.state.activeTask = JSON.parse(activeTask);
        }
    },

    saveToStorage() {
        localStorage.setItem('wdt_tasks', JSON.stringify(this.state.tasks));
        localStorage.setItem('wdt_workdays', JSON.stringify(this.state.workDays));
        localStorage.setItem('wdt_entries', JSON.stringify(this.state.entries));
        localStorage.setItem('wdt_settings', JSON.stringify(this.state.settings));
        localStorage.setItem('wdt_currentDay', JSON.stringify(this.state.currentDay));
        localStorage.setItem('wdt_activeTask', JSON.stringify(this.state.activeTask));
    },

    checkFirstRun() {
        const hasRun = localStorage.getItem('wdt_hasRun');
        if (!hasRun) {
            this.showOnboarding();
        }
    },

    showOnboarding() {
        document.getElementById('onboardingModal').classList.add('show');
    },

    setupEventListeners() {
        // Close modal on outside click
        window.onclick = (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        };
    },

    initializeTimers() {
        setInterval(() => {
            this.updateTimerDisplays();
        }, 1000);
    },

    updateTimerDisplays() {
        if (!this.state.isTracking) return;

        const now = new Date();
        const dayStart = new Date(this.state.currentDay.startTime);
        const dayElapsed = Math.floor((now - dayStart) / 1000);
        document.getElementById('dayTimer').textContent = this.formatDuration(dayElapsed);

        if (this.state.activeTask) {
            const entry = this.getCurrentTimeEntry();
            if (entry) {
                const taskElapsed = Math.floor((now - new Date(entry.startTime)) / 1000);
                document.getElementById('taskTimer').textContent = this.formatDuration(taskElapsed);
            }
        }
    },

    render() {
        this.renderTaskGrid();
        this.updateStatusBar();
        this.applyDisplaySettings();
    },

    renderTaskGrid() {
        const container = document.getElementById('taskIcons');
        container.innerHTML = '';

        const tasks = this.state.tasks;

        tasks.forEach(task => {
            const icon = document.createElement('div');
            icon.className = 'task-icon';
            if (this.state.activeTask && this.state.activeTask.id === task.id) {
                icon.classList.add('active');
            }
            icon.draggable = true;
            icon.dataset.taskId = task.id;

            const timeToday = this.getTaskTimeToday(task.id);

            icon.innerHTML = `
                <div class="icon-shape ${task.shape}" style="background-color: ${task.color};">
                    <span class="icon-emoji">${task.icon}</span>
                </div>
                <div class="icon-label">${task.name}</div>
                <div class="time-indicator">${this.formatDuration(timeToday)}</div>
            `;

            icon.onclick = () => this.onTaskClick(task.id);
            icon.oncontextmenu = (e) => {
                e.preventDefault();
                this.editTask(task.id);
            };

            container.appendChild(icon);
        });

        // Add "Add Task" button
        const addBtn = document.createElement('div');
        addBtn.className = 'task-icon';
        addBtn.innerHTML = `
            <div class="icon-shape circle" style="background-color: #E5E7EB;">
                <span class="icon-emoji">➕</span>
            </div>
            <div class="icon-label">Add Task</div>
        `;
        addBtn.onclick = () => this.openTaskModal();
        container.appendChild(addBtn);
    },

    updateStatusBar() {
        if (this.state.isTracking) {
            document.getElementById('startDayBtn').style.display = 'none';
            document.getElementById('endDayBtn').style.display = 'inline-block';
        } else {
            document.getElementById('startDayBtn').style.display = 'inline-block';
            document.getElementById('endDayBtn').style.display = 'none';
            document.getElementById('dayTimer').textContent = '--:--';
            document.getElementById('currentTaskName').textContent = 'No active task';
            document.getElementById('taskTimer').textContent = '--:--';
        }

        if (this.state.activeTask) {
            document.getElementById('currentTaskName').textContent = this.state.activeTask.name;
            document.getElementById('pomodoroCurrentTask').textContent = this.state.activeTask.name;
        }
    },

    applyDisplaySettings() {
        const columns = this.state.settings.display.gridColumns;
        document.querySelector('.task-icons').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    },

    onTaskClick(taskId) {
        if (!this.state.isTracking) {
            this.showFlash('Please start your day first!', 'error');
            return;
        }

        if (this.state.activeTask && this.state.activeTask.id === taskId) {
            return; // Already active
        }

        this.switchToTask(taskId);
    },

    switchToTask(taskId) {
        const now = new Date();

        // End current entry
        if (this.state.activeTask) {
            const currentEntry = this.getCurrentTimeEntry();
            if (currentEntry) {
                currentEntry.endTime = now.toISOString();
                currentEntry.duration = Math.floor((new Date(currentEntry.endTime) - new Date(currentEntry.startTime)) / 1000);
            }
        }

        // Create new entry
        const newEntry = {
            id: this.generateUUID(),
            taskId: taskId,
            startTime: now.toISOString(),
            endTime: null,
            duration: 0,
            dayId: this.state.currentDay.id
        };

        this.state.entries.push(newEntry);

        // Update active task
        this.state.activeTask = this.state.tasks.find(t => t.id === taskId);

        this.saveToStorage();
        this.render();
        this.showFlash(`Switched to ${this.state.activeTask.name}`, 'success');
    },

    getCurrentTimeEntry() {
        if (!this.state.currentDay) return null;
        return this.state.entries.find(e => e.dayId === this.state.currentDay.id && !e.endTime);
    },

    getTaskTimeToday(taskId) {
        if (!this.state.currentDay) return 0;
        const entries = this.state.entries.filter(e =>
            e.dayId === this.state.currentDay.id && e.taskId === taskId
        );
        return entries.reduce((sum, e) => {
            if (e.endTime) {
                return sum + e.duration;
            } else {
                const elapsed = Math.floor((new Date() - new Date(e.startTime)) / 1000);
                return sum + elapsed;
            }
        }, 0);
    },

    openTaskModal() {
        this.state.editingTaskId = null;
        document.getElementById('taskModalTitle').textContent = 'Create New Task';
        document.getElementById('taskName').value = '';
        document.getElementById('taskIcon').value = this.state.selectedEmoji;
        document.getElementById('deleteTaskBtn').style.display = 'none';

        // Reset selections
        this.state.selectedEmoji = '📝';
        this.state.selectedColor = '#3B82F6';
        this.state.selectedShape = 'circle';

        document.getElementById('taskModal').classList.add('show');
    },

    editTask(taskId) {
        const task = this.state.tasks.find(t => t.id === taskId);
        if (!task) return;

        this.state.editingTaskId = taskId;
        document.getElementById('taskModalTitle').textContent = 'Edit Task';
        document.getElementById('taskName').value = task.name;
        document.getElementById('taskIcon').value = task.icon;
        document.getElementById('deleteTaskBtn').style.display = 'inline-block';

        this.state.selectedEmoji = task.icon;
        this.state.selectedColor = task.color;
        this.state.selectedShape = task.shape;

        document.getElementById('taskModal').classList.add('show');
    },

    saveTaskFromModal() {
        const name = document.getElementById('taskName').value.trim();
        if (!name) {
            alert('Please enter a task name');
            return;
        }

        if (this.state.editingTaskId) {
            // Update existing
            const task = this.state.tasks.find(t => t.id === this.state.editingTaskId);
            task.name = name;
            task.icon = this.state.selectedEmoji;
            task.color = this.state.selectedColor;
            task.shape = this.state.selectedShape;
        } else {
            // Create new
            const newTask = {
                id: this.generateUUID(),
                name: name,
                icon: this.state.selectedEmoji,
                color: this.state.selectedColor,
                shape: this.state.selectedShape,
                createdDate: new Date().toISOString()
            };
            this.state.tasks.push(newTask);
        }

        this.saveToStorage();
        this.render();
        this.closeTaskModal();
        this.showFlash('Task saved!', 'success');
    },

    deleteTask() {
        if (!confirm('Delete this task? Time entries will be preserved.')) return;

        this.state.tasks = this.state.tasks.filter(t => t.id !== this.state.editingTaskId);
        this.saveToStorage();
        this.render();
        this.closeTaskModal();
        this.showFlash('Task deleted', 'success');
    },

    closeTaskModal() {
        document.getElementById('taskModal').classList.remove('show');
    },

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    formatDuration(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    },

    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    isToday(dateString) {
        return dateString === this.formatDate(new Date());
    },

    showFlash(message, type = 'success') {
        const flash = document.getElementById('flashMessage');
        flash.textContent = message;
        flash.className = `flash-message ${type}`;
        flash.style.display = 'block';
        setTimeout(() => {
            flash.style.display = 'none';
        }, 3000);
    },

    loadAnalytics() {
        const date = document.getElementById('analyticsDate').value;
        if (!date) return;

        const day = this.state.workDays.find(d => d.date === date) ||
                    (this.state.currentDay && this.state.currentDay.date === date ? this.state.currentDay : null);

        if (!day) {
            this.clearAnalytics();
            return;
        }

        const entries = this.state.entries.filter(e => e.dayId === day.id);

        // Calculate stats
        const totalDuration = entries.reduce((sum, e) => sum + (e.duration || 0), 0);
        const taskCounts = {};
        const taskDurations = {};

        entries.forEach(e => {
            if (!taskCounts[e.taskId]) {
                taskCounts[e.taskId] = 0;
                taskDurations[e.taskId] = 0;
            }
            taskCounts[e.taskId]++;
            taskDurations[e.taskId] += e.duration || 0;
        });

        // Update summary cards
        document.getElementById('totalTime').textContent = this.formatDuration(totalDuration);
        document.getElementById('tasksCompleted').textContent = Object.keys(taskCounts).length;
        document.getElementById('pomodorosCount').textContent = day.pomodorosCompleted || 0;

        const topTaskId = Object.keys(taskDurations).reduce((a, b) =>
            taskDurations[a] > taskDurations[b] ? a : b, null
        );
        const topTask = topTaskId ? this.state.tasks.find(t => t.id === topTaskId) : null;
        document.getElementById('topTask').textContent = topTask ? topTask.name : '-';

        // Render charts
        this.renderPieChart(taskDurations);
        this.renderTaskBreakdown(taskDurations, taskCounts, totalDuration);
    },

    clearAnalytics() {
        document.getElementById('totalTime').textContent = '0h 0m';
        document.getElementById('tasksCompleted').textContent = '0';
        document.getElementById('pomodorosCount').textContent = '0';
        document.getElementById('topTask').textContent = '-';
        document.getElementById('taskBreakdownTable').innerHTML = '<tr><td colspan="4" style="text-align: center; color: #7f8c8d;">No data for selected date</td></tr>';
    },

    renderPieChart(taskDurations) {
        const ctx = document.getElementById('categoryPieChart');

        if (this.state.charts.pie) {
            this.state.charts.pie.destroy();
        }

        const labels = [];
        const data = [];
        const colors = [];

        Object.keys(taskDurations).forEach(taskId => {
            const task = this.state.tasks.find(t => t.id === taskId);
            if (task) {
                labels.push(task.name);
                data.push(taskDurations[taskId]);
                colors.push(task.color);
            }
        });

        if (data.length === 0) {
            ctx.getContext('2d').clearRect(0, 0, ctx.width, ctx.height);
            return;
        }

        this.state.charts.pie = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    },

    renderTaskBreakdown(taskDurations, taskCounts, totalDuration) {
        const tbody = document.getElementById('taskBreakdownTable');
        tbody.innerHTML = '';

        if (Object.keys(taskDurations).length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: #7f8c8d;">No data for selected date</td></tr>';
            return;
        }

        Object.keys(taskDurations).forEach(taskId => {
            const task = this.state.tasks.find(t => t.id === taskId);
            if (!task) return;

            const duration = taskDurations[taskId];
            const percentage = totalDuration > 0 ? ((duration / totalDuration) * 100).toFixed(1) : 0;
            const switches = taskCounts[taskId];

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><span style="display: inline-block; width: 20px; height: 20px; background: ${task.color}; border-radius: 4px; margin-right: 8px;"></span>${task.name}</td>
                <td>${this.formatDuration(duration)}</td>
                <td>${percentage}%</td>
                <td>${switches}</td>
            `;
            tbody.appendChild(row);
        });
    },

    // Pomodoro methods
    drawPomodoroTimer() {
        const canvas = document.getElementById('pomodoroCanvas');
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 120;

        const total = this.state.pomodoroState.sessionType === 'work'
            ? this.state.settings.pomodoro.workDuration
            : this.state.pomodoroState.sessionType === 'shortBreak'
            ? this.state.settings.pomodoro.shortBreak
            : this.state.settings.pomodoro.longBreak;

        const percentage = this.state.pomodoroState.remainingSeconds / total;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#E5E7EB';
        ctx.lineWidth = 15;
        ctx.stroke();

        // Progress arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, (-0.5 + 2 * percentage) * Math.PI);
        ctx.strokeStyle = this.state.pomodoroState.sessionType === 'work' ? '#3B82F6' : '#10B981';
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.stroke();
    },

    updatePomodoroDisplay() {
        const minutes = Math.floor(this.state.pomodoroState.remainingSeconds / 60);
        const seconds = this.state.pomodoroState.remainingSeconds % 60;
        document.getElementById('pomodoroTime').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const type = this.state.pomodoroState.sessionType === 'work' ? 'Work Session' :
                     this.state.pomodoroState.sessionType === 'shortBreak' ? 'Short Break' : 'Long Break';
        document.getElementById('sessionType').textContent = type;

        this.drawPomodoroTimer();
        this.updatePomodoroProgress();
    },

    updatePomodoroProgress() {
        const container = document.getElementById('pomodoroProgress');
        container.innerHTML = '';

        const total = this.state.settings.pomodoro.longBreakInterval;
        const completed = this.state.pomodoroState.pomodorosCompleted % total;

        for (let i = 0; i < total; i++) {
            const dot = document.createElement('span');
            dot.className = 'pomodoro-dot';
            if (i < completed) {
                dot.classList.add('filled');
            }
            container.appendChild(dot);
        }
    },

    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    },

    showNotification(title, body) {
        if (!this.state.settings.notifications.enabled) return;

        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, { body: body });
        }
    }
};

// Global functions
function switchTab(tab) {
    const tabs = ['home', 'analytics', 'pomodoro', 'journal', 'settings'];
    tabs.forEach(t => {
        document.getElementById(t + 'Tab').classList.remove('active');
    });
    document.getElementById(tab + 'Tab').classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    WorkDayTracker.state.currentView = tab;

    if (tab === 'analytics') {
        WorkDayTracker.loadAnalytics();
    } else if (tab === 'pomodoro') {
        WorkDayTracker.updatePomodoroDisplay();
    }
}

function startDay() {
    const now = new Date();
    WorkDayTracker.state.currentDay = {
        id: WorkDayTracker.generateUUID(),
        date: WorkDayTracker.formatDate(now),
        startTime: now.toISOString(),
        endTime: null,
        pomodorosCompleted: 0
    };
    WorkDayTracker.state.isTracking = true;

    // Auto-start idle task
    if (WorkDayTracker.state.tasks.length > 0) {
        WorkDayTracker.switchToTask(WorkDayTracker.state.tasks[0].id);
    }

    WorkDayTracker.saveToStorage();
    WorkDayTracker.render();
    WorkDayTracker.showFlash('Workday started!', 'success');
}

function endDay() {
    if (!confirm('End your workday? This will stop tracking and save your day.')) return;

    const now = new Date();

    // End current entry
    if (WorkDayTracker.state.activeTask) {
        const entry = WorkDayTracker.getCurrentTimeEntry();
        if (entry) {
            entry.endTime = now.toISOString();
            entry.duration = Math.floor((new Date(entry.endTime) - new Date(entry.startTime)) / 1000);
        }
    }

    WorkDayTracker.state.currentDay.endTime = now.toISOString();
    WorkDayTracker.state.workDays.push(WorkDayTracker.state.currentDay);

    WorkDayTracker.state.isTracking = false;
    WorkDayTracker.state.activeTask = null;

    WorkDayTracker.saveToStorage();
    WorkDayTracker.render();
    WorkDayTracker.showFlash('Workday ended!', 'success');

    // Switch to analytics
    switchTab('analytics');
}

function openTaskModal() {
    WorkDayTracker.openTaskModal();
}

function closeTaskModal() {
    WorkDayTracker.closeTaskModal();
}

function saveTaskFromModal() {
    WorkDayTracker.saveTaskFromModal();
}

function deleteTask() {
    WorkDayTracker.deleteTask();
}

function selectEmoji(emoji) {
    WorkDayTracker.state.selectedEmoji = emoji;
    document.getElementById('taskIcon').value = emoji;
}

function selectColor(color) {
    WorkDayTracker.state.selectedColor = color;
}

function selectShape(shape) {
    WorkDayTracker.state.selectedShape = shape;
}

// Analytics functions
function changeAnalyticsDate(days) {
    const input = document.getElementById('analyticsDate');
    const date = new Date(input.value);
    date.setDate(date.getDate() + days);
    input.value = WorkDayTracker.formatDate(date);
    WorkDayTracker.loadAnalytics();
}

function setAnalyticsToday() {
    document.getElementById('analyticsDate').value = WorkDayTracker.formatDate(new Date());
    WorkDayTracker.loadAnalytics();
}

function exportToCSV() {
    const range = document.getElementById('exportRange').value;
    const entries = WorkDayTracker.state.entries;

    let csv = 'Date,Task,Start Time,End Time,Duration (minutes)\n';

    entries.forEach(entry => {
        if (!entry.endTime) return;

        const task = WorkDayTracker.state.tasks.find(t => t.id === entry.taskId);
        if (!task) return;

        const date = entry.startTime.split('T')[0];
        const start = new Date(entry.startTime).toLocaleTimeString();
        const end = new Date(entry.endTime).toLocaleTimeString();
        const minutes = Math.round(entry.duration / 60);

        csv += `${date},"${task.name}",${start},${end},${minutes}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workday-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    WorkDayTracker.showFlash('Data exported!', 'success');
}

function exportToJSON() {
    const data = {
        tasks: WorkDayTracker.state.tasks,
        workDays: WorkDayTracker.state.workDays,
        entries: WorkDayTracker.state.entries
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workday-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    WorkDayTracker.showFlash('Data exported!', 'success');
}

// Pomodoro functions
function startPomodoro() {
    if (!WorkDayTracker.state.isTracking) {
        WorkDayTracker.showFlash('Please start your day first!', 'error');
        return;
    }

    WorkDayTracker.state.pomodoroState.isRunning = true;
    WorkDayTracker.state.pomodoroState.sessionType = 'work';
    WorkDayTracker.state.pomodoroState.remainingSeconds = WorkDayTracker.state.settings.pomodoro.workDuration;

    document.getElementById('pomodoroStart').style.display = 'none';
    document.getElementById('pomodoroStop').style.display = 'inline-block';
    document.getElementById('pomodoroSkip').style.display = 'inline-block';

    WorkDayTracker.requestNotificationPermission();

    WorkDayTracker.state.pomodoroState.interval = setInterval(() => {
        WorkDayTracker.state.pomodoroState.remainingSeconds--;
        WorkDayTracker.updatePomodoroDisplay();

        if (WorkDayTracker.state.pomodoroState.remainingSeconds <= 0) {
            pomodoroComplete();
        }
    }, 1000);
}

function stopPomodoro() {
    clearInterval(WorkDayTracker.state.pomodoroState.interval);
    WorkDayTracker.state.pomodoroState.isRunning = false;

    document.getElementById('pomodoroStart').style.display = 'inline-block';
    document.getElementById('pomodoroStop').style.display = 'none';
    document.getElementById('pomodoroSkip').style.display = 'none';
}

function skipPomodoro() {
    pomodoroComplete();
}

function pomodoroComplete() {
    clearInterval(WorkDayTracker.state.pomodoroState.interval);

    const sessionType = WorkDayTracker.state.pomodoroState.sessionType;

    if (sessionType === 'work') {
        WorkDayTracker.state.pomodoroState.pomodorosCompleted++;
        if (WorkDayTracker.state.currentDay) {
            WorkDayTracker.state.currentDay.pomodorosCompleted++;
        }

        const needsLongBreak = WorkDayTracker.state.pomodoroState.pomodorosCompleted %
            WorkDayTracker.state.settings.pomodoro.longBreakInterval === 0;

        WorkDayTracker.state.pomodoroState.sessionType = needsLongBreak ? 'longBreak' : 'shortBreak';
        WorkDayTracker.state.pomodoroState.remainingSeconds = needsLongBreak
            ? WorkDayTracker.state.settings.pomodoro.longBreak
            : WorkDayTracker.state.settings.pomodoro.shortBreak;

        WorkDayTracker.showNotification('Pomodoro Complete!', 'Time for a break!');
    } else {
        WorkDayTracker.state.pomodoroState.sessionType = 'work';
        WorkDayTracker.state.pomodoroState.remainingSeconds = WorkDayTracker.state.settings.pomodoro.workDuration;
        WorkDayTracker.showNotification('Break Over!', 'Ready to focus again?');
    }

    WorkDayTracker.state.pomodoroState.isRunning = false;
    document.getElementById('pomodoroStart').style.display = 'inline-block';
    document.getElementById('pomodoroStop').style.display = 'none';
    document.getElementById('pomodoroSkip').style.display = 'none';

    WorkDayTracker.updatePomodoroDisplay();
    WorkDayTracker.saveToStorage();
}

function savePomodoroSettings() {
    WorkDayTracker.state.settings.pomodoro = {
        workDuration: parseInt(document.getElementById('workDuration').value) * 60,
        shortBreak: parseInt(document.getElementById('shortBreak').value) * 60,
        longBreak: parseInt(document.getElementById('longBreak').value) * 60,
        longBreakInterval: parseInt(document.getElementById('longBreakInterval').value)
    };
    WorkDayTracker.saveToStorage();
    WorkDayTracker.showFlash('Settings saved!', 'success');
}

// Journal functions
function changeJournalDate(days) {
    const input = document.getElementById('journalDate');
    const date = new Date(input.value);
    date.setDate(date.getDate() + days);
    input.value = WorkDayTracker.formatDate(date);
    loadJournal();
}

function loadJournal() {
    const date = document.getElementById('journalDate').value;
    const day = WorkDayTracker.state.workDays.find(d => d.date === date) ||
                (WorkDayTracker.state.currentDay && WorkDayTracker.state.currentDay.date === date ? WorkDayTracker.state.currentDay : null);

    if (day && day.journalEntry) {
        document.getElementById('journalEditor').innerHTML = day.journalEntry.text || '';

        // Set mood and energy
        if (day.journalEntry.mood) {
            document.querySelectorAll('.mood-btn').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.mood === day.journalEntry.mood);
            });
        }
        if (day.journalEntry.energy) {
            document.querySelectorAll('.energy-btn').forEach(btn => {
                btn.classList.toggle('selected', parseInt(btn.dataset.energy) === day.journalEntry.energy);
            });
        }
    } else {
        document.getElementById('journalEditor').innerHTML = 'Write your thoughts here...';
        document.querySelectorAll('.mood-btn, .energy-btn').forEach(btn => btn.classList.remove('selected'));
    }
}

function selectMood(mood) {
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

function selectEnergy(energy) {
    document.querySelectorAll('.energy-btn').forEach(btn => btn.classList.remove('selected'));
    event.target.classList.add('selected');
}

function formatText(command) {
    document.execCommand(command, false, null);
}

function insertPrompt(text) {
    const editor = document.getElementById('journalEditor');
    editor.focus();
    document.execCommand('insertText', false, text);
}

function saveJournal() {
    const date = document.getElementById('journalDate').value;
    let day = WorkDayTracker.state.workDays.find(d => d.date === date);

    if (!day && WorkDayTracker.state.currentDay && WorkDayTracker.state.currentDay.date === date) {
        day = WorkDayTracker.state.currentDay;
    }

    if (!day) {
        WorkDayTracker.showFlash('No workday found for this date', 'error');
        return;
    }

    const selectedMood = document.querySelector('.mood-btn.selected');
    const selectedEnergy = document.querySelector('.energy-btn.selected');

    if (!day.journalEntry) {
        day.journalEntry = {};
    }

    day.journalEntry.text = document.getElementById('journalEditor').innerHTML;
    day.journalEntry.mood = selectedMood ? selectedMood.dataset.mood : null;
    day.journalEntry.energy = selectedEnergy ? parseInt(selectedEnergy.dataset.energy) : null;

    WorkDayTracker.saveToStorage();
    WorkDayTracker.showFlash('Journal saved!', 'success');
}

// Settings functions
function saveSettings() {
    WorkDayTracker.state.settings.display = {
        iconSize: document.getElementById('iconSize').value,
        gridColumns: parseInt(document.getElementById('gridColumns').value)
    };
    WorkDayTracker.state.settings.notifications = {
        enabled: document.getElementById('notificationsEnabled').checked,
        sound: document.getElementById('soundEnabled').checked
    };
    WorkDayTracker.saveToStorage();
    WorkDayTracker.applyDisplaySettings();
    WorkDayTracker.showFlash('Settings saved!', 'success');
}

function testNotification() {
    WorkDayTracker.requestNotificationPermission();
    setTimeout(() => {
        WorkDayTracker.showNotification('Test Notification', 'Notifications are working!');
    }, 100);
}

function exportAllData() {
    const data = {
        tasks: WorkDayTracker.state.tasks,
        workDays: WorkDayTracker.state.workDays,
        entries: WorkDayTracker.state.entries,
        settings: WorkDayTracker.state.settings
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workday-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    WorkDayTracker.showFlash('Backup exported!', 'success');
}

function importData() {
    const file = document.getElementById('importFile').files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (confirm('This will replace all current data. Continue?')) {
                WorkDayTracker.state.tasks = data.tasks || [];
                WorkDayTracker.state.workDays = data.workDays || [];
                WorkDayTracker.state.entries = data.entries || [];
                if (data.settings) WorkDayTracker.state.settings = data.settings;

                WorkDayTracker.saveToStorage();
                WorkDayTracker.render();
                WorkDayTracker.showFlash('Data imported successfully!', 'success');
            }
        } catch (err) {
            WorkDayTracker.showFlash('Invalid file format', 'error');
        }
    };
    reader.readAsText(file);
}

function clearOldData() {
    if (!confirm('Delete all data older than 90 days?')) return;

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 90);
    const cutoff = WorkDayTracker.formatDate(cutoffDate);

    WorkDayTracker.state.workDays = WorkDayTracker.state.workDays.filter(d => d.date >= cutoff);
    const validDayIds = new Set(WorkDayTracker.state.workDays.map(d => d.id));
    WorkDayTracker.state.entries = WorkDayTracker.state.entries.filter(e => validDayIds.has(e.dayId));

    WorkDayTracker.saveToStorage();
    WorkDayTracker.showFlash('Old data cleared!', 'success');
}

function resetApp() {
    if (!confirm('DELETE ALL DATA? This cannot be undone!')) return;
    if (!confirm('Are you absolutely sure? All tasks, entries, and settings will be deleted.')) return;

    localStorage.clear();
    location.reload();
}

// Onboarding functions
function nextOnboardingStep() {
    WorkDayTracker.state.onboardingStep++;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('onboardingStep' + i).style.display =
            i === WorkDayTracker.state.onboardingStep ? 'block' : 'none';
    }
}

function prevOnboardingStep() {
    WorkDayTracker.state.onboardingStep--;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('onboardingStep' + i).style.display =
            i === WorkDayTracker.state.onboardingStep ? 'block' : 'none';
    }
}

function usePresets() {
    const presets = [
        { name: 'Deep Work', icon: '📝', color: '#3B82F6', shape: 'circle' },
        { name: 'Email', icon: '📧', color: '#10B981', shape: 'circle' },
        { name: 'Meetings', icon: '🗓️', color: '#F59E0B', shape: 'circle' },
        { name: 'Planning', icon: '🎯', color: '#8B5CF6', shape: 'circle' },
        { name: 'Break', icon: '☕', color: '#6B7280', shape: 'circle' }
    ];

    presets.forEach(preset => {
        WorkDayTracker.state.tasks.push({
            id: WorkDayTracker.generateUUID(),
            ...preset,
            createdDate: new Date().toISOString()
        });
    });

    WorkDayTracker.saveToStorage();
    nextOnboardingStep();
}

function startBlank() {
    nextOnboardingStep();
}

function finishOnboarding() {
    localStorage.setItem('wdt_hasRun', 'true');
    document.getElementById('onboardingModal').classList.remove('show');
    WorkDayTracker.render();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    WorkDayTracker.init();

    // Load analytics when date changes
    document.getElementById('analyticsDate').addEventListener('change', () => {
        WorkDayTracker.loadAnalytics();
    });

    // Load journal when date changes
    document.getElementById('journalDate').addEventListener('change', () => {
        loadJournal();
    });
});
</script>
