---
layout: page
title: RVU Data Tracker
permalink: /clinic-visit-tracker/
description: Track clinic encounters with automated billing codes, wRVU calculations, and daily summaries
---
<div style="background: #fff7ed; border: 1px solid #fdba74; padding: 15px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
    <span style="font-size: 24px;">👑</span>
    <div>
        <strong style="color: #9a3412;">Premium Feature</strong>
        <p style="margin: 0; color: #c2410c; font-size: 0.9em;">This tool is part of our Premium suite. Please consider supporting the project if you find it useful.</p>
    </div>
</div>

<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">

<!-- Data Warning Notice -->
<div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 1rem 1.5rem; margin-bottom: 1.5rem; margin-top: 1.5rem;">
    <p style="margin: 0; color: #856404;">
        <strong>⚠️ Important:</strong> Your visit data is stored in your browser's local storage.
        <strong>Export your data regularly</strong> to avoid losing it if you clear your browser cache or use a different device.
    </p>
</div>

<!-- Flash Message -->
<div class="flash-message" id="flashMessage" style="display: none; background-color: #27ae60; color: white; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
    ✓ Visit saved successfully!
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

    /* Timer Section */
    .timer-section {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .timer-display {
        font-size: 4rem;
        font-weight: bold;
        color: #2c3e50;
        text-align: center;
        margin: 2rem 0;
        font-family: 'Courier New', monospace;
    }

    .timer-controls {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
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

    /* Billing Codes */
    .billing-category {
        margin-bottom: 1.5rem;
    }

    .billing-category-title {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.75rem;
        font-size: 0.95rem;
    }

    .billing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 0.75rem;
    }

    .billing-btn {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 0.75rem;
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
    }

    .billing-btn:hover {
        border-color: #0088bb;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 136, 187, 0.2);
    }

    .billing-btn.selected {
        background: #0088bb;
        border-color: #0088bb;
        color: white;
    }

    .billing-btn-code {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .billing-btn-desc {
        font-size: 0.75rem;
        color: #7f8c8d;
    }

    .billing-btn.selected .billing-btn-desc {
        color: rgba(255, 255, 255, 0.9);
    }

    .billing-btn-wrvu {
        font-size: 0.7rem;
        margin-top: 0.25rem;
        font-weight: 600;
        color: #27ae60;
    }

    .billing-btn.selected .billing-btn-wrvu {
        color: rgba(255, 255, 255, 0.95);
    }

    /* Visit Type Indicator */
    .visit-type-indicator {
        text-align: center;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        font-weight: 600;
        display: none;
    }

    .visit-type-indicator.show {
        display: block;
    }

    .visit-type-indicator.well {
        background: #d5f4e6;
        color: #27ae60;
    }

    .visit-type-indicator.sick {
        background: #fadbd8;
        color: #e74c3c;
    }

    /* Form Elements */
    .form-group {
        margin-bottom: 1rem;
    }

    .form-label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
        resize: vertical;
    }

    textarea:focus {
        outline: none;
        border-color: #0088bb;
    }

    /* Stats Display */
    .stats-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 2rem 0;
    }

    .stat-card {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
    }

    .stat-label {
        font-size: 0.85rem;
        color: #7f8c8d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
    }

    .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: #2c3e50;
    }

    /* Visits List */
    .visits-list {
        margin-top: 2rem;
    }

    .visit-item {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .visit-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .visit-time {
        font-weight: 600;
        color: #2c3e50;
    }

    .visit-type-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }

    .visit-type-badge.well {
        background: #d5f4e6;
        color: #27ae60;
    }

    .visit-type-badge.sick {
        background: #fadbd8;
        color: #e74c3c;
    }

    .visit-details {
        color: #7f8c8d;
        font-size: 0.9rem;
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

    /* Auto-start toggle */
    .auto-start-toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        justify-content: center;
    }

    .auto-start-toggle input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    .auto-start-toggle label {
        cursor: pointer;
        user-select: none;
    }
</style>

<!-- Tab Navigation -->
<div class="tab-container">
    <div class="tab-buttons">
        <button class="tab-btn active" onclick="switchTab('timer')">Timer Mode</button>
        <button class="tab-btn" onclick="switchTab('summary')">Daily Summary</button>
        <button class="tab-btn" onclick="switchTab('learning')">Learning Log</button>
    </div>

    <!-- Timer Mode Tab -->
    <div class="tab-content active" id="timerTab">
        <div class="auto-start-toggle">
            <input type="checkbox" id="autoStartToggle" checked>
            <label for="autoStartToggle">Auto-start timer after save</label>
        </div>

        <div class="timer-section">
            <h2 style="margin-top: 0;">Timer Mode</h2>

            <div class="timer-display" id="timerDisplay">00:00</div>

            <div class="timer-controls">
                <button class="btn btn-primary" id="startBtn" onclick="startTimer()">Start Visit</button>
                <button class="btn btn-secondary" id="pauseBtn" onclick="pauseTimer()" style="display: none;">Pause</button>
                <button class="btn btn-secondary" id="resumeBtn" onclick="resumeTimer()" style="display: none;">Resume</button>
                <button class="btn btn-success" id="finishBtn" onclick="finishVisit()" style="display: none;">Finish Visit</button>
                <button class="btn btn-danger" id="cancelBtn" onclick="cancelVisit()" style="display: none;">Cancel</button>
            </div>

            <!-- Time-Based Billing Automation -->
            <div style="text-align: center; margin: 1.5rem 0; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                <p style="color: #2c3e50; font-weight: 600; margin-bottom: 0.75rem;">⏱️ Time-Based Billing</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-warning" onclick="applyTimeBasedBilling('established')" id="timeBasedEstBtn" style="display: none;">
                        Established Patient (Time-Based)
                    </button>
                    <button class="btn btn-warning" onclick="applyTimeBasedBilling('new')" id="timeBasedNewBtn" style="display: none;">
                        New Patient (Time-Based)
                    </button>
                </div>
            </div>

            <div class="visit-type-indicator" id="visitTypeIndicator"></div>

            <!-- Billing Codes -->
            <div id="billingCodesContainer"></div>

            <!-- Comments -->
            <div class="form-group" style="margin-top: 1.5rem;">
                <label class="form-label">Comments (Optional)</label>
                <textarea id="comments" rows="3" placeholder="Enter any notes about this visit..."></textarea>
            </div>

            <!-- Learning Log -->
            <div class="form-group" style="margin-top: 1rem;">
                <label class="form-label">Learning Log (Optional)</label>
                <textarea id="learningLog" rows="3" placeholder="What did you learn from this case? (e.g., new diagnosis, interesting finding, teaching point)"></textarea>
            </div>

            <!-- Save Button (for manual entry without timer) -->
            <div style="text-align: center; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid #e1e8ed;">
                <p style="color: #7f8c8d; margin-bottom: 1rem; font-size: 0.9rem;">
                    <strong>Manual Entry:</strong> Select billing codes and click save below (no timer needed)
                </p>
                <button class="btn btn-success" onclick="saveManualVisit()">💾 Save Visit (No Timer)</button>
            </div>
        </div>
    </div>

    <!-- Daily Summary Tab -->
    <div class="tab-content" id="summaryTab">
        <div class="timer-section">
            <h2 style="margin-top: 0;">Daily Summary</h2>

            <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                <input type="date" id="summaryDate" style="padding: 0.5rem 1rem; border: 2px solid #e1e8ed; border-radius: 8px; font-size: 1rem;">
                <button class="btn btn-primary" onclick="loadDailySummary()">Load Date</button>
                <button class="btn btn-warning" onclick="exportToCSV()" style="margin-left: auto;">📥 Export All Data (CSV)</button>
            </div>

            <!-- Stats -->
            <div class="stats-container" id="statsContainer">
                <div class="stat-card">
                    <div class="stat-label">Total Visits</div>
                    <div class="stat-value" id="statTotalVisits">0</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Total wRVUs</div>
                    <div class="stat-value" id="statTotalWRVU">0.0</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Well Visits</div>
                    <div class="stat-value" id="statWellVisits">0</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Sick Visits</div>
                    <div class="stat-value" id="statSickVisits">0</div>
                </div>
            </div>

            <!-- Visits List -->
            <div class="visits-list" id="visitsList"></div>
        </div>
    </div>

    <!-- Learning Log Tab -->
    <div class="tab-content" id="learningTab">
        <div class="timer-section">
            <h2 style="margin-top: 0;">Learning Log</h2>
            <p style="color: #7f8c8d; margin-bottom: 1.5rem;">Track interesting cases, teaching points, and clinical pearls from your practice.</p>

            <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                <input type="date" id="learningDate" style="padding: 0.5rem 1rem; border: 2px solid #e1e8ed; border-radius: 8px; font-size: 1rem;">
                <button class="btn btn-primary" onclick="loadLearningLog()">Load Date</button>
                <button class="btn btn-secondary" onclick="loadAllLearning()">Show All</button>
                <button class="btn btn-warning" onclick="exportLearningToText()" style="margin-left: auto;">📥 Export Learning Log</button>
            </div>

            <!-- Learning Items List -->
            <div id="learningList" style="background: white; border: 2px solid #e1e8ed; border-radius: 8px; padding: 1.5rem; min-height: 200px;">
                <p style="text-align: center; color: #7f8c8d;">Select a date or click "Show All" to view your learning log entries.</p>
            </div>
        </div>
    </div>
</div>

</div><!-- End container -->

<script>
// wRVU Lookup - includes adult preventative codes
const WRVU_LOOKUP = {
    '99202': { description: 'Level 2 new', wrvu: 0.93 },
    '99203': { description: 'Level 3 new', wrvu: 1.6 },
    '99204': { description: 'Level 4 new', wrvu: 2.6 },
    '99205': { description: 'Level 5 new', wrvu: 3.5 },
    '99212': { description: 'Level 2 est', wrvu: 0.7 },
    '99213': { description: 'Level 3 est', wrvu: 1.3 },
    '99214': { description: 'Level 4 est', wrvu: 1.92 },
    '99215': { description: 'Level 5 est', wrvu: 2.8 },
    '99381': { description: '< 1yr new', wrvu: 1.5 },
    '99382': { description: '1-4yr new', wrvu: 1.6 },
    '99383': { description: '5-11yr new', wrvu: 1.7 },
    '99384': { description: '12-17yr new', wrvu: 2.0 },
    '99385': { description: '18-39yr new', wrvu: 1.92 },
    '99386': { description: '40-64yr new', wrvu: 2.33 },
    '99387': { description: '65+ yr new', wrvu: 2.5 },
    '99391': { description: '< 1yr est', wrvu: 1.37 },
    '99392': { description: '1-4yr est', wrvu: 1.5 },
    '99393': { description: '5-11yr est', wrvu: 1.5 },
    '99394': { description: '12-17yr est', wrvu: 1.7 },
    '99395': { description: '18-39yr est', wrvu: 1.75 },
    '99396': { description: '40-64yr est', wrvu: 1.9 },
    '99397': { description: '65+ yr est', wrvu: 2.0 },
    '25': { description: '25 Modifier', wrvu: 0.0 }
};

const WELL_VISIT_CODES = ['99381', '99382', '99383', '99384', '99385', '99386', '99387', '99391', '99392', '99393', '99394', '99395', '99396', '99397'];
const SICK_VISIT_CODES = ['99212', '99213', '99214', '99215', '99202', '99203', '99204', '99205'];

// Timer State
let timerInterval = null;
let startTime = null;
let pausedTime = 0;
let totalPausedDuration = 0;
let isPaused = false;

// Tab Switching
function switchTab(tab) {
    const timerTab = document.getElementById('timerTab');
    const summaryTab = document.getElementById('summaryTab');
    const learningTab = document.getElementById('learningTab');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));

    // Hide all tabs
    timerTab.classList.remove('active');
    summaryTab.classList.remove('active');
    learningTab.classList.remove('active');

    if (tab === 'timer') {
        timerTab.classList.add('active');
        tabBtns[0].classList.add('active');
    } else if (tab === 'summary') {
        summaryTab.classList.add('active');
        tabBtns[1].classList.add('active');
        loadDailySummary();
    } else if (tab === 'learning') {
        learningTab.classList.add('active');
        tabBtns[2].classList.add('active');
        // Set default date and load
        document.getElementById('learningDate').value = new Date().toISOString().split('T')[0];
    }
}

// Load billing codes
function loadBillingCodes() {
    const container = document.getElementById('billingCodesContainer');
    container.innerHTML = '';

    // Sick visits - organized in 2 rows of 4
    const sickRow1 = ['99202', '99203', '99204', '99205']; // New patient
    const sickRow2 = ['99212', '99213', '99214', '99215']; // Established
    
    // Well visits - organized in 4 rows 
    const wellRow1 = ['99381', '99382', '99383', '99384', '99385', '99386', '99387']; // New 
    const wellRow2 = ['99391', '99392', '99393', '99394', '99395', '99396', '99397']; // Established
    
    const modifier = ['25'];

    const categories = [
        { title: 'Sick Visits - New Patient', codes: sickRow1 },
        { title: 'Sick Visits - Established Patient', codes: sickRow2 },
        { title: 'Well Visits - New Patient', codes: wellRow1 },
        { title: 'Well Visits - Established Patient', codes: wellRow2 },
        { title: 'Modifier', codes: modifier }
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'billing-category';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'billing-category-title';
        titleDiv.textContent = category.title;
        categoryDiv.appendChild(titleDiv);

        const gridDiv = document.createElement('div');
        gridDiv.className = 'billing-grid';

        category.codes.forEach(code => {
            const info = WRVU_LOOKUP[code];
            const btn = document.createElement('div');
            btn.className = 'billing-btn';
            btn.dataset.code = code;

            btn.innerHTML = `
                <div class="billing-btn-code">${code}</div>
                <div class="billing-btn-desc">${info.description}</div>
                <div class="billing-btn-wrvu">${info.wrvu} wRVU</div>
            `;

            btn.onclick = () => toggleBillingCode(btn, code);
            gridDiv.appendChild(btn);
        });

        categoryDiv.appendChild(gridDiv);
        container.appendChild(categoryDiv);
    });
}

// Toggle billing code
function toggleBillingCode(btn, code) {
    btn.classList.toggle('selected');
    updateVisitTypeIndicator();
}

// Update visit type indicator with auto 25 modifier
function updateVisitTypeIndicator() {
    const selectedCodes = Array.from(document.querySelectorAll('.billing-btn.selected')).map(btn => btn.dataset.code);
    const wellVisitCodes = selectedCodes.filter(code => WELL_VISIT_CODES.includes(code));
    const hasSickCode = selectedCodes.some(code => SICK_VISIT_CODES.includes(code));

    // Auto-activate 25 modifier
    const modifier25Button = document.querySelector('.billing-btn[data-code="25"]');
    if (modifier25Button) {
        if (wellVisitCodes.length > 0 && hasSickCode) {
            if (!modifier25Button.classList.contains('selected')) {
                modifier25Button.classList.add('selected');
            }
        } else {
            if (modifier25Button.classList.contains('selected')) {
                modifier25Button.classList.remove('selected');
            }
        }
    }

    const indicator = document.getElementById('visitTypeIndicator');

    if (wellVisitCodes.length > 0 || hasSickCode) {
        indicator.classList.add('show');
        if (wellVisitCodes.length > 0) {
            indicator.className = 'visit-type-indicator show well';
            indicator.textContent = 'Well Visit';
        } else {
            indicator.className = 'visit-type-indicator show sick';
            indicator.textContent = 'Sick Visit';
        }
    } else {
        indicator.classList.remove('show');
    }
}

// Get elapsed time in minutes
function getElapsedMinutes() {
    if (!startTime) return 0;
    const now = new Date();
    const elapsed = Math.floor((now - startTime - totalPausedDuration) / 1000);
    return Math.floor(elapsed / 60);
}

// Apply time-based billing
function applyTimeBasedBilling(patientType) {
    // Pause the timer when using time-based billing
    if (!isPaused && startTime) {
        pauseTimer();
    }
    
    const minutes = getElapsedMinutes();
    let selectedCode = '';

    if (patientType === 'established') {
        // Established Patient Time Ranges
        if (minutes < 15) {
            selectedCode = '99212';
        } else if (minutes < 30) {
            selectedCode = '99213';
        } else if (minutes < 40) {
            selectedCode = '99214';
        } else {
            selectedCode = '99215';
        }
    } else if (patientType === 'new') {
        // New Patient Time Ranges
        if (minutes < 15) {
            selectedCode = '99202';
        } else if (minutes < 30) {
            selectedCode = '99203';
        } else if (minutes < 40) {
            selectedCode = '99204';
        } else {
            selectedCode = '99205';
        }
    }

    // Clear any previously selected sick visit codes
    const sickCodes = ['99212', '99213', '99214', '99215', '99202', '99203', '99204', '99205'];
    sickCodes.forEach(code => {
        const btn = document.querySelector(`.billing-btn[data-code="${code}"]`);
        if (btn) {
            btn.classList.remove('selected');
        }
    });

    // Select the appropriate code
    const targetBtn = document.querySelector(`.billing-btn[data-code="${selectedCode}"]`);
    if (targetBtn) {
        targetBtn.classList.add('selected');
        updateVisitTypeIndicator();
    }
}

// Timer Functions
function startTimer() {
    startTime = new Date();
    totalPausedDuration = 0;
    isPaused = false;

    timerInterval = setInterval(updateTimerDisplay, 100);

    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('finishBtn').style.display = 'inline-block';
    document.getElementById('cancelBtn').style.display = 'inline-block';
    document.getElementById('timeBasedEstBtn').style.display = 'inline-block';
    document.getElementById('timeBasedNewBtn').style.display = 'inline-block';
}

function pauseTimer() {
    isPaused = true;
    pausedTime = new Date();
    clearInterval(timerInterval);

    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'inline-block';
}

function resumeTimer() {
    totalPausedDuration += new Date() - pausedTime;
    isPaused = false;
    timerInterval = setInterval(updateTimerDisplay, 100);

    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('resumeBtn').style.display = 'none';
}

function updateTimerDisplay() {
    if (isPaused) return;

    const now = new Date();
    const elapsed = Math.floor((now - startTime - totalPausedDuration) / 1000);

    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('timerDisplay').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function finishVisit() {
    const endTime = new Date();
    const activeDuration = Math.floor((endTime - startTime - totalPausedDuration) / 1000);

    const selectedCodes = Array.from(document.querySelectorAll('.billing-btn.selected')).map(btn => btn.dataset.code);

    if (selectedCodes.length === 0) {
        alert('Please select at least one billing code');
        return;
    }

    const wellVisitCodes = selectedCodes.filter(code => WELL_VISIT_CODES.includes(code));
    const visitType = wellVisitCodes.length > 0 ? 'Well' : 'Sick';

    const visit = {
        date: new Date().toISOString().split('T')[0],
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        activeDuration: activeDuration,
        visitType: visitType,
        billingCodes: selectedCodes,
        comments: document.getElementById('comments').value
    };

    saveVisit(visit);
    
    // Save learning log entry if present
    const learningText = document.getElementById('learningLog').value.trim();
    if (learningText) {
        saveLearningEntry(learningText);
    }
    
    resetForm();
    showFlashMessage();

    // Auto-start if enabled
    if (document.getElementById('autoStartToggle').checked) {
        setTimeout(startTimer, 1000);
    }
}

function cancelVisit() {
    if (!confirm('Are you sure you want to cancel this visit?')) return;

    clearInterval(timerInterval);
    startTime = null;
    document.getElementById('timerDisplay').textContent = '00:00';

    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
    document.getElementById('timeBasedEstBtn').style.display = 'none';
    document.getElementById('timeBasedNewBtn').style.display = 'none';
}

// Save visit without timer (manual entry)
function saveManualVisit() {
    const selectedCodes = Array.from(document.querySelectorAll('.billing-btn.selected')).map(btn => btn.dataset.code);

    if (selectedCodes.length === 0) {
        alert('Please select at least one billing code');
        return;
    }

    const wellVisitCodes = selectedCodes.filter(code => WELL_VISIT_CODES.includes(code));
    const visitType = wellVisitCodes.length > 0 ? 'Well' : 'Sick';

    const now = new Date();
    const visit = {
        date: now.toISOString().split('T')[0],
        startTime: now.toISOString(),
        endTime: now.toISOString(),
        activeDuration: 0,
        visitType: visitType,
        billingCodes: selectedCodes,
        comments: document.getElementById('comments').value
    };

    saveVisit(visit);
    
    // Save learning log entry if present
    const learningText = document.getElementById('learningLog').value.trim();
    if (learningText) {
        saveLearningEntry(learningText);
    }
    
    resetForm();
    showFlashMessage();
}

function resetForm() {
    clearInterval(timerInterval);
    startTime = null;
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('comments').value = '';
    document.getElementById('learningLog').value = '';
    document.querySelectorAll('.billing-btn.selected').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('visitTypeIndicator').classList.remove('show');

    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
    document.getElementById('timeBasedEstBtn').style.display = 'none';
    document.getElementById('timeBasedNewBtn').style.display = 'none';
}

// Data Storage (localStorage)
function saveVisit(visit) {
    const visits = getVisits();
    visits.push(visit);
    localStorage.setItem('clinicVisits', JSON.stringify(visits));
}

function getVisits() {
    const data = localStorage.getItem('clinicVisits');
    return data ? JSON.parse(data) : [];
}

function getVisitsByDate(date) {
    return getVisits().filter(v => v.date === date);
}

// Show flash message
function showFlashMessage() {
    const flash = document.getElementById('flashMessage');
    flash.classList.add('show');
    setTimeout(() => flash.classList.remove('show'), 3000);
}

// Load daily summary
function loadDailySummary() {
    const date = document.getElementById('summaryDate').value;
    if (!date) return;

    const visits = getVisitsByDate(date);

    // Calculate stats
    let totalWRVU = 0;
    let wellCount = 0;
    let sickCount = 0;

    visits.forEach(visit => {
        visit.billingCodes.forEach(code => {
            if (WRVU_LOOKUP[code]) {
                totalWRVU += WRVU_LOOKUP[code].wrvu;
            }
        });
        if (visit.visitType === 'Well') wellCount++;
        else sickCount++;
    });

    document.getElementById('statTotalVisits').textContent = visits.length;
    document.getElementById('statTotalWRVU').textContent = totalWRVU.toFixed(2);
    document.getElementById('statWellVisits').textContent = wellCount;
    document.getElementById('statSickVisits').textContent = sickCount;

    // Display visits
    const visitsList = document.getElementById('visitsList');
    visitsList.innerHTML = '';

    if (visits.length === 0) {
        visitsList.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No visits recorded for this date.</p>';
        return;
    }

    visits.forEach((visit, index) => {
        const startTime = new Date(visit.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const duration = Math.floor(visit.activeDuration / 60);
        const wrvu = visit.billingCodes.reduce((sum, code) => sum + (WRVU_LOOKUP[code]?.wrvu || 0), 0);

        const item = document.createElement('div');
        item.className = 'visit-item';
        item.innerHTML = `
            <div class="visit-header">
                <div class="visit-time">${startTime}</div>
                <div class="visit-type-badge ${visit.visitType.toLowerCase()}">${visit.visitType}</div>
            </div>
            <div class="visit-details">
                <strong>Duration:</strong> ${duration} min |
                <strong>Codes:</strong> ${visit.billingCodes.join(', ')} |
                <strong>wRVU:</strong> ${wrvu.toFixed(2)}
                ${visit.comments ? '<br><strong>Notes:</strong> ' + visit.comments : ''}
            </div>
        `;
        visitsList.appendChild(item);
    });
}

// Export to CSV
function exportToCSV() {
    const visits = getVisits();

    if (visits.length === 0) {
        alert('No visits to export!');
        return;
    }

    // CSV Header
    let csv = 'Date,Start Time,End Time,Duration (min),Visit Type,Billing Codes,wRVU,Comments\n';

    // CSV Rows
    visits.forEach(visit => {
        const date = visit.date;
        const startTime = new Date(visit.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const endTime = new Date(visit.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const duration = Math.floor(visit.activeDuration / 60);
        const visitType = visit.visitType;
        const codes = visit.billingCodes.join(' + ');
        const wrvu = visit.billingCodes.reduce((sum, code) => sum + (WRVU_LOOKUP[code]?.wrvu || 0), 0).toFixed(2);
        const comments = (visit.comments || '').replace(/"/g, '""'); // Escape quotes

        csv += `${date},${startTime},${endTime},${duration},${visitType},"${codes}",${wrvu},"${comments}"\n`;
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clinic-visits-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    alert('✓ Data exported successfully!');
}

// Learning Log Functions
function saveLearningEntry(text) {
    const entry = {
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString(),
        text: text
    };
    
    const learningEntries = getLearningEntries();
    learningEntries.push(entry);
    localStorage.setItem('learningLog', JSON.stringify(learningEntries));
}

function getLearningEntries() {
    const data = localStorage.getItem('learningLog');
    return data ? JSON.parse(data) : [];
}

function getLearningByDate(date) {
    return getLearningEntries().filter(entry => entry.date === date);
}

function loadLearningLog() {
    const date = document.getElementById('learningDate').value;
    if (!date) return;
    
    const entries = getLearningByDate(date);
    displayLearningEntries(entries, `Learning Log for ${date}`);
}

function loadAllLearning() {
    const entries = getLearningEntries();
    displayLearningEntries(entries, 'All Learning Log Entries');
}

function displayLearningEntries(entries, title) {
    const container = document.getElementById('learningList');
    
    if (entries.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">No learning log entries found.</p>';
        return;
    }
    
    let html = `<h3 style="margin-top: 0; color: #2c3e50;">${title}</h3>`;
    html += '<ul style="list-style: none; padding: 0;">';
    
    entries.forEach((entry, index) => {
        const date = entry.date;
        const time = new Date(entry.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        html += `
            <li style="background: #f8f9fa; border-left: 4px solid #0088bb; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong style="color: #2c3e50;">${date}</strong>
                    <span style="color: #7f8c8d; font-size: 0.9rem;">${time}</span>
                </div>
                <p style="margin: 0; color: #34495e;">${entry.text}</p>
            </li>
        `;
    });
    
    html += '</ul>';
    container.innerHTML = html;
}

function exportLearningToText() {
    const entries = getLearningEntries();
    
    if (entries.length === 0) {
        alert('No learning log entries to export!');
        return;
    }
    
    // Create text content
    let text = '=== LEARNING LOG ===\n\n';
    
    // Group by date
    const byDate = {};
    entries.forEach(entry => {
        if (!byDate[entry.date]) {
            byDate[entry.date] = [];
        }
        byDate[entry.date].push(entry);
    });
    
    // Sort dates
    const sortedDates = Object.keys(byDate).sort().reverse();
    
    sortedDates.forEach(date => {
        text += `${date}\n`;
        text += '─'.repeat(50) + '\n';
        byDate[date].forEach(entry => {
            const time = new Date(entry.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            text += `• [${time}] ${entry.text}\n`;
        });
        text += '\n';
    });
    
    // Download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-log-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('✓ Learning log exported successfully!');
}

// Initialize
loadBillingCodes();
document.getElementById('summaryDate').value = new Date().toISOString().split('T')[0];
</script>