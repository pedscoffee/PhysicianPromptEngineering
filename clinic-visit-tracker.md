---
layout: page
title: RVU Data Tracker
permalink: /clinic-visit-tracker/
description: Track clinic encounters with automated billing codes, wRVU calculations, and daily summaries
---

<!-- PWA Meta Tags -->
<link rel="manifest" href="{{ '/rvu-manifest.json' | relative_url }}">
<meta name="theme-color" content="#065f46">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="RVU Tracker">
<link rel="apple-touch-icon" href="{{ '/apple-touch-icon.png' | relative_url }}">

<!-- Service Worker Registration -->
<script>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('{{ "/rvu-sw.js" | relative_url }}')
            .then(reg => console.log('[RVU PWA] Service Worker registered'))
            .catch(err => console.log('[RVU PWA] Service Worker registration failed:', err));
    });
}
</script>



<div class="clinic-visit-tracker-wrapper">
    <!-- Hero Section -->
    <div class="hero">
    <div class="container">
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: text-bottom; margin-right: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>RVU Data Tracker</h1>
        <p class="hero-subtitle">
            Track clinic encounters with automated billing codes, wRVU calculations, and daily summaries.
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
            <p style="margin: 0; color: #c2410c; font-size: 0.9em;">This tool is free thanks to the support of our community. Please consider supporting the project if you find it useful.</p>
        </div>
    </div>

<!-- PWA Install Banner -->
<div id="pwaInstallBanner" style="display: none; background: linear-gradient(135deg, #065f46 0%, #047857 100%); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" style="width: 28px; height: 28px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <div>
                <strong style="color: white; font-size: 1rem;">Install RVU Tracker</strong>
                <p style="margin: 0; color: rgba(255,255,255,0.85); font-size: 0.85em;">Add to your home screen for quick access</p>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <button id="pwaInstallBtn" onclick="installPWA()" style="background: white; color: #065f46; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                📲 Install App
            </button>
            <button onclick="dismissInstallBanner()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.5); padding: 10px 15px; border-radius: 6px; cursor: pointer;">
                ✕
            </button>
        </div>
    </div>
</div>

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

// ==========================================
// PWA Installation
// ==========================================
let deferredPrompt = null;

// Check if already installed as PWA
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true;
}

// Listen for the install prompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Only show banner if not dismissed and not already installed
    if (!localStorage.getItem('pwaInstallDismissed') && !isRunningAsPWA()) {
        document.getElementById('pwaInstallBanner').style.display = 'block';
    }
});

// Handle install button click
function installPWA() {
    if (!deferredPrompt) {
        // Fallback for iOS or if prompt not available
        alert('To install: tap the Share button in your browser, then "Add to Home Screen"');
        return;
    }
    
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('[RVU PWA] User accepted install');
            document.getElementById('pwaInstallBanner').style.display = 'none';
        }
        deferredPrompt = null;
    });
}

// Dismiss install banner
function dismissInstallBanner() {
    document.getElementById('pwaInstallBanner').style.display = 'none';
    localStorage.setItem('pwaInstallDismissed', 'true');
}

// Hide install banner if already running as PWA
if (isRunningAsPWA()) {
    document.getElementById('pwaInstallBanner').style.display = 'none';
}
</script>
{%- include software-2-banner.html -%}
