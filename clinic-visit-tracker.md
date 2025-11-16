---
layout: page
title: Clinic Visit Tracker
permalink: /clinic-visit-tracker/
description: Track pediatric clinic encounters with automated billing codes, wRVU calculations, and daily summaries
---

<style>
    .wrapper {
        max-width: 1400px;
    }

    /* Bible Verse Banner */
    .verse-banner {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        border-radius: 8px;
        padding: 1rem 1.5rem;
        margin-bottom: 1.5rem;
        font-style: italic;
        color: white;
        box-shadow: 0 2px 10px rgba(0, 136, 187, 0.3);
    }

    .verse-text {
        font-size: 1rem;
        line-height: 1.6;
    }

    /* Flash Message */
    .flash-message {
        display: none;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        animation: slideDown 0.3s ease-out;
    }

    .flash-message.show {
        display: block;
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

<!-- Bible Verse Banner -->
<div class="verse-banner">
    <div class="verse-text" id="verseText"></div>
</div>

<!-- Flash Message -->
<div class="flash-message" id="flashMessage">
    ✓ Visit saved successfully!
</div>

<!-- Tab Navigation -->
<div class="tab-container">
    <div class="tab-buttons">
        <button class="tab-btn active" onclick="switchTab('timer')">Timer Mode</button>
        <button class="tab-btn" onclick="switchTab('summary')">Daily Summary</button>
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

            <div class="visit-type-indicator" id="visitTypeIndicator"></div>

            <!-- Billing Codes -->
            <div id="billingCodesContainer"></div>

            <!-- Comments -->
            <div class="form-group" style="margin-top: 1.5rem;">
                <label class="form-label">Comments (Optional)</label>
                <textarea id="comments" rows="3" placeholder="Enter any notes about this visit..."></textarea>
            </div>
        </div>
    </div>

    <!-- Daily Summary Tab -->
    <div class="tab-content" id="summaryTab">
        <div class="timer-section">
            <h2 style="margin-top: 0;">Daily Summary</h2>

            <div style="margin-bottom: 1.5rem;">
                <input type="date" id="summaryDate" style="padding: 0.5rem 1rem; border: 2px solid #e1e8ed; border-radius: 8px; font-size: 1rem;">
                <button class="btn btn-primary" onclick="loadDailySummary()" style="margin-left: 0.5rem;">Load Date</button>
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
</div>

<script>
// Bible Verses
const BIBLE_VERSES = [
    "Galatians 6:9 - \"And let us not grow weary of doing good, for in due season we will reap, if we do not give up.\"",
    "Colossians 3:23 - \"Whatever you do, work heartily, as for the Lord and not for men.\"",
    "Proverbs 16:3 - \"Commit your work to the Lord, and your plans will be established.\"",
    "Philippians 4:13 - \"I can do all things through him who strengthens me.\"",
    "Psalm 90:17 - \"Let the favor of the Lord our God be upon us, and establish the work of our hands upon us.\"",
    "Isaiah 40:31 - \"But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.\"",
    "Matthew 11:28 - \"Come to me, all who labor and are heavy laden, and I will give you rest.\"",
    "Proverbs 3:5-6 - \"Trust in the Lord with all your heart, and do not lean on your own understanding.\"",
    "2 Thessalonians 3:13 - \"As for you, brothers, do not grow weary in doing good.\"",
    "Psalm 127:1 - \"Unless the Lord builds the house, those who build it labor in vain.\"",
    "1 Corinthians 15:58 - \"Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord.\"",
    "Proverbs 16:9 - \"The heart of man plans his way, but the Lord establishes his steps.\"",
    "Ecclesiastes 9:10 - \"Whatever your hand finds to do, do it with your might.\"",
    "Psalm 37:5 - \"Commit your way to the Lord; trust in him, and he will act.\"",
    "Isaiah 41:10 - \"Fear not, for I am with you; be not dismayed, for I am your God.\"",
    "Proverbs 21:5 - \"The plans of the diligent lead surely to abundance.\"",
    "Philippians 4:6-7 - \"Do not be anxious about anything, but in everything by prayer present your requests to God.\"",
    "James 1:12 - \"Blessed is the man who remains steadfast under trial.\"",
    "Psalm 121:1-2 - \"I lift up my eyes to the hills. From where does my help come? My help comes from the Lord.\"",
    "Matthew 6:34 - \"Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself.\"",
    "2 Corinthians 12:9 - \"My grace is sufficient for you, for my power is made perfect in weakness.\"",
    "Hebrews 12:1 - \"Let us run with endurance the race that is set before us.\"",
    "Psalm 46:1 - \"God is our refuge and strength, a very present help in trouble.\"",
    "Romans 8:28 - \"And we know that for those who love God all things work together for good.\"",
    "Proverbs 16:20 - \"Whoever gives thought to the word will discover good, and blessed is he who trusts in the Lord.\"",
    "Isaiah 26:3 - \"You keep him in perfect peace whose mind is stayed on you.\"",
    "Psalm 55:22 - \"Cast your burden on the Lord, and he will sustain you.\"",
    "1 Peter 5:7 - \"Casting all your anxieties on him, because he cares for you.\"",
    "Nehemiah 8:10 - \"The joy of the Lord is your strength.\"",
    "Proverbs 18:10 - \"The name of the Lord is a strong tower; the righteous man runs into it and is safe.\"",
    "Psalm 118:24 - \"This is the day that the Lord has made; let us rejoice and be glad in it.\"",
    "Jeremiah 29:11 - \"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil.\"",
    "Matthew 5:16 - \"Let your light shine before others, so that they may see your good works.\"",
    "Psalm 31:24 - \"Be strong, and let your heart take courage, all you who wait for the Lord!\"",
    "2 Timothy 1:7 - \"For God gave us a spirit not of fear but of power and love and self-control.\"",
    "Proverbs 3:24 - \"If you lie down, you will not be afraid; when you lie down, your sleep will be sweet.\"",
    "John 16:33 - \"In the world you will have tribulation. But take heart; I have overcome the world.\"",
    "Lamentations 3:22-23 - \"The steadfast love of the Lord never ceases; his mercies never come to an end.\"",
    "Psalm 73:26 - \"My flesh and my heart may fail, but God is the strength of my heart and my portion forever.\"",
    "Isaiah 40:29 - \"He gives power to the faint, and to him who has no might he increases strength.\""
];

// wRVU Lookup
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
    '99391': { description: '< 1yr est', wrvu: 1.37 },
    '99392': { description: '1-4yr est', wrvu: 1.5 },
    '99393': { description: '5-11yr est', wrvu: 1.5 },
    '99394': { description: '12-17yr est', wrvu: 1.7 },
    '99395': { description: '18-39yr est', wrvu: 1.75 },
    '25': { description: '25 Modifier', wrvu: 0.0 }
};

const WELL_VISIT_CODES = ['99381', '99382', '99383', '99384', '99385', '99391', '99392', '99393', '99394', '99395'];
const SICK_VISIT_CODES = ['99212', '99213', '99214', '99215', '99202', '99203', '99204', '99205'];

// Timer State
let timerInterval = null;
let startTime = null;
let pausedTime = 0;
let totalPausedDuration = 0;
let isPaused = false;
let currentVisitData = null;

// Display random verse
function displayRandomVerse() {
    const randomIndex = Math.floor(Math.random() * BIBLE_VERSES.length);
    document.getElementById('verseText').textContent = BIBLE_VERSES[randomIndex];
}

// Tab Switching
function switchTab(tab) {
    const timerTab = document.getElementById('timerTab');
    const summaryTab = document.getElementById('summaryTab');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));

    if (tab === 'timer') {
        timerTab.classList.add('active');
        summaryTab.classList.remove('active');
        tabBtns[0].classList.add('active');
    } else {
        timerTab.classList.remove('active');
        summaryTab.classList.add('active');
        tabBtns[1].classList.add('active');
        loadDailySummary();
    }
}

// Load billing codes
function loadBillingCodes() {
    const container = document.getElementById('billingCodesContainer');
    container.innerHTML = '';

    const established = ['99212', '99213', '99214', '99215'];
    const newPatient = ['99202', '99203', '99204', '99205'];
    const wellNew = ['99381', '99382', '99383', '99384', '99385'];
    const wellEst = ['99391', '99392', '99393', '99394', '99395'];
    const modifier = ['25'];

    const categories = [
        { title: 'Established Patient', codes: established },
        { title: 'New Patient', codes: newPatient },
        { title: 'Well Visit (New)', codes: wellNew },
        { title: 'Well Visit (Established)', codes: wellEst },
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

    // Reset
    clearInterval(timerInterval);
    startTime = null;
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('comments').value = '';
    document.querySelectorAll('.billing-btn.selected').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('visitTypeIndicator').classList.remove('show');

    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';

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

// Initialize
displayRandomVerse();
loadBillingCodes();
document.getElementById('summaryDate').value = new Date().toISOString().split('T')[0];
</script>
