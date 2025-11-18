---
layout: page
title: Clockwork Timebox
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
                <p>Clockwork Timebox v1.0</p>
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
                <label>Icon:</label>
                <input type="text" id="taskIcon" readonly placeholder="Select an icon" style="margin-bottom: 0.5rem; background: #f8f9fa; cursor: pointer;" onclick="toggleIconPicker()">
                <div id="iconPickerContainer" style="display: none; max-height: 400px; overflow-y: auto; border: 2px solid #e1e8ed; border-radius: 8px; padding: 1rem; background: white;">

                    <!-- Work & Productivity -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Work & Productivity</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('briefcase')" title="Briefcase">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('document')" title="Document">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('pencil')" title="Pencil">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('clipboard')" title="Clipboard">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('chart-bar')" title="Chart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('computer')" title="Computer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('code')" title="Code">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('folder')" title="Folder">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                        </button>
                    </div>

                    <!-- Communication -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Communication</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('envelope')" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('phone')" title="Phone">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('chat')" title="Chat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('megaphone')" title="Megaphone">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('video')" title="Video Call">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('presentation')" title="Presentation">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                        </button>
                    </div>

                    <!-- Planning & Organization -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Planning & Organization</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('calendar')" title="Calendar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('clock')" title="Clock">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('list')" title="List">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('check')" title="Checklist">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('target')" title="Target">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('bookmark')" title="Bookmark">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('flag')" title="Flag">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>
                        </button>
                    </div>

                    <!-- Learning & Reading -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Learning & Reading</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('book')" title="Book">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('academic')" title="Academic Cap">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('lightbulb')" title="Light Bulb">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('newspaper')" title="Newspaper">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('magnify')" title="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </button>
                    </div>

                    <!-- Creative & Design -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Creative & Design</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('paint')" title="Paint Brush">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('photo')" title="Photo">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('camera')" title="Camera">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('music')" title="Music">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('film')" title="Film">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('sparkles')" title="Sparkles">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                        </button>
                    </div>

                    <!-- Health & Wellness -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Health & Wellness</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('heart')" title="Heart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('fire')" title="Fire">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('bolt')" title="Bolt">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('sun')" title="Sun">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('moon')" title="Moon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('trophy')" title="Trophy">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>
                        </button>
                    </div>

                    <!-- Food & Break -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Food & Break</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('coffee')" title="Coffee">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('cake')" title="Cake">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('pause')" title="Pause">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                    </div>

                    <!-- Transportation & Travel -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Transportation & Travel</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('home')" title="Home">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('building')" title="Building">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('truck')" title="Truck">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('map')" title="Map">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('globe')" title="Globe">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                        </button>
                    </div>

                    <!-- Shopping & Finance -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Shopping & Finance</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('shopping')" title="Shopping Cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('currency')" title="Currency">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('credit-card')" title="Credit Card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('gift')" title="Gift">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
                        </button>
                    </div>

                    <!-- Miscellaneous -->
                    <h4 style="font-size: 0.9rem; margin-top: 0.5rem; margin-bottom: 0.5rem; color: #2c3e50;">Miscellaneous</h4>
                    <div class="icon-picker">
                        <button class="emoji-option" onclick="selectIcon('star')" title="Star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('bell')" title="Bell">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('lock')" title="Lock">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('key')" title="Key">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('cog')" title="Settings">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </button>
                        <button class="emoji-option" onclick="selectIcon('wifi')" title="WiFi">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>
                        </button>
                    </div>
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
            <h2>Welcome to Clockwork Timebox!</h2>
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
// Icon library mapping
const ICON_LIBRARY = {
    'briefcase': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>',
    'document': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>',
    'pencil': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>',
    'clipboard': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',
    'chart-bar': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',
    'computer': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>',
    'folder': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>',
    'envelope': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>',
    'phone': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>',
    'chat': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>',
    'megaphone': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>',
    'video': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>',
    'presentation': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>',
    'calendar': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    'list': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>',
    'check': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    'target': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>',
    'bookmark': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>',
    'flag': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>',
    'book': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>',
    'academic': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>',
    'lightbulb': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>',
    'newspaper': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>',
    'magnify': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',
    'paint': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>',
    'photo': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>',
    'camera': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>',
    'music': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>',
    'film': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" /></svg>',
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>',
    'heart': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
    'fire': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>',
    'bolt': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',
    'sun': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',
    'moon': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',
    'trophy': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>',
    'coffee': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>',
    'cake': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>',
    'pause': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    'home': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',
    'building': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>',
    'truck': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>',
    'map': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>',
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>',
    'shopping': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',
    'currency': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    'credit-card': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>',
    'gift': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>',
    'star': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>',
    'bell': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>',
    'lock': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
    'key': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>',
    'cog': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    'wifi': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>'
};

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

        // Create default "Idle" task if no tasks exist
        if (this.state.tasks.length === 0) {
            const idleTask = {
                id: this.generateUUID(),
                name: 'Idle',
                icon: 'pause',
                color: '#9ca3af',
                shape: 'circle'
            };
            this.state.tasks.push(idleTask);
            this.saveToStorage();
        }

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

            const iconSvg = ICON_LIBRARY[task.icon] || task.icon;
            icon.innerHTML = `
                <div class="icon-shape ${task.shape}" style="background-color: ${task.color};">
                    <span class="icon-emoji">${iconSvg}</span>
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
        this.renderTimeline(entries);
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

    renderTimeline(entries) {
        const container = document.getElementById('timelineContainer');
        container.innerHTML = '';

        if (entries.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No timeline data for selected date</p>';
            return;
        }

        // Sort entries by start time
        const sortedEntries = entries.slice().sort((a, b) =>
            new Date(a.startTime) - new Date(b.startTime)
        );

        // Create timeline visualization
        sortedEntries.forEach((entry, index) => {
            const task = this.state.tasks.find(t => t.id === entry.taskId);
            if (!task) return;

            const startTime = new Date(entry.startTime);
            const endTime = entry.endTime ? new Date(entry.endTime) : new Date();
            const duration = entry.duration || Math.floor((endTime - startTime) / 1000);

            const timelineItem = document.createElement('div');
            timelineItem.style.cssText = `
                display: flex;
                align-items: center;
                margin-bottom: 12px;
                padding: 12px;
                background: #f8f9fa;
                border-left: 4px solid ${task.color};
                border-radius: 4px;
            `;

            const iconSvg = ICON_LIBRARY[task.icon] || task.icon;
            timelineItem.innerHTML = `
                <div style="width: 32px; height: 32px; background: ${task.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                    <div style="width: 20px; height: 20px; color: white;">${iconSvg}</div>
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #2c3e50; margin-bottom: 4px;">${task.name}</div>
                    <div style="font-size: 0.875rem; color: #7f8c8d;">
                        ${startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} -
                        ${endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>
                <div style="font-size: 1rem; font-weight: 600; color: ${task.color};">
                    ${this.formatDuration(duration)}
                </div>
            `;

            container.appendChild(timelineItem);
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


function toggleIconPicker() {
    const picker = document.getElementById('iconPickerContainer');
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

function selectIcon(iconName) {
    WorkDayTracker.state.selectedEmoji = iconName;
    const iconSvg = ICON_LIBRARY[iconName];
    document.getElementById('taskIcon').value = iconName;
    document.getElementById('iconPickerContainer').style.display = 'none';
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
