---
layout: page
title: RVU Tracker Mobile
permalink: /rvu-tracker-mobile/
description: Mobile-optimized RVU tracking with iOS-native design for physicians on the go
---

<style>
/* iOS Design System */
:root {
    --ios-blue: #007AFF;
    --ios-green: #34C759;
    --ios-orange: #FF9500;
    --ios-red: #FF3B30;
    --ios-gray: #8E8E93;
    --ios-gray-2: #AEAEB2;
    --ios-gray-3: #C7C7CC;
    --ios-gray-4: #D1D1D6;
    --ios-gray-5: #E5E5EA;
    --ios-gray-6: #F2F2F7;
    --ios-bg: #FFFFFF;
    --ios-card: #FFFFFF;
    --ios-text: #000000;
    --ios-text-secondary: #3C3C43;
    --ios-separator: rgba(60, 60, 67, 0.12);
}

@media (prefers-color-scheme: dark) {
    :root {
        --ios-bg: #000000;
        --ios-card: #1C1C1E;
        --ios-text: #FFFFFF;
        --ios-text-secondary: #EBEBF5;
        --ios-separator: rgba(84, 84, 88, 0.65);
        --ios-gray-6: #1C1C1E;
    }
}

/* Reset and Base */
.mobile-app {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, sans-serif;
    background: var(--ios-gray-6);
    min-height: 100vh;
    padding-bottom: 100px;
    -webkit-font-smoothing: antialiased;
}

.mobile-app * {
    box-sizing: border-box;
}

/* Hide default page elements */
.mobile-app ~ .page-footer,
.mobile-app .hero {
    display: none;
}

/* Header */
.mobile-header {
    background: var(--ios-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 12px 16px;
    border-bottom: 0.5px solid var(--ios-separator);
}

.mobile-header-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--ios-text);
    text-align: center;
    margin: 0;
}

.mobile-header-link {
    font-size: 17px;
    color: var(--ios-blue);
    text-decoration: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
}

/* Timer Section */
.timer-container {
    background: var(--ios-card);
    margin: 16px;
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.timer-ring-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 24px;
}

.timer-ring {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.timer-ring-bg {
    fill: none;
    stroke: var(--ios-gray-5);
    stroke-width: 8;
}

.timer-ring-progress {
    fill: none;
    stroke: var(--ios-blue);
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 565;
    stroke-dashoffset: 565;
    transition: stroke-dashoffset 0.3s ease, stroke 0.3s ease;
}

.timer-ring-progress.running {
    stroke: var(--ios-blue);
}

.timer-ring-progress.paused {
    stroke: var(--ios-orange);
}

.timer-display {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-weight: 300;
    font-variant-numeric: tabular-nums;
    color: var(--ios-text);
    letter-spacing: -1px;
}

.timer-status {
    font-size: 13px;
    color: var(--ios-gray);
    margin-top: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Timer Controls */
.timer-controls {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-ios {
    padding: 14px 28px;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.btn-ios:active {
    transform: scale(0.96);
    opacity: 0.8;
}

.btn-primary {
    background: var(--ios-blue);
    color: white;
    min-width: 140px;
}

.btn-secondary {
    background: var(--ios-gray-5);
    color: var(--ios-text);
}

.btn-success {
    background: var(--ios-green);
    color: white;
}

.btn-danger {
    background: var(--ios-red);
    color: white;
}

.btn-block {
    width: 100%;
    margin-top: 12px;
}

/* Time-based suggestion */
.time-suggestion {
    background: linear-gradient(135deg, #FF9500 0%, #FF6B00 100%);
    color: white;
    padding: 16px;
    border-radius: 12px;
    margin-top: 20px;
    display: none;
}

.time-suggestion.show {
    display: block;
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.time-suggestion-title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
}

.time-suggestion-buttons {
    display: flex;
    gap: 8px;
}

.time-suggestion-btn {
    flex: 1;
    padding: 10px;
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
}

.time-suggestion-btn:active {
    background: rgba(255,255,255,0.3);
}

/* Segmented Control */
.segment-container {
    background: var(--ios-card);
    margin: 0 16px 16px;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.segment-control {
    display: flex;
    background: var(--ios-gray-6);
    border-radius: 10px;
    padding: 2px;
    margin-bottom: 16px;
}

.segment-btn {
    flex: 1;
    padding: 10px 16px;
    border: none;
    background: transparent;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--ios-text);
    cursor: pointer;
    transition: all 0.2s ease;
}

.segment-btn.active {
    background: var(--ios-card);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Code Buttons */
.code-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.code-btn {
    padding: 16px 12px;
    border: 2px solid var(--ios-gray-5);
    background: var(--ios-bg);
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.code-btn:active {
    transform: scale(0.96);
}

.code-btn.selected {
    border-color: var(--ios-blue);
    background: rgba(0, 122, 255, 0.08);
}

.code-btn-code {
    font-size: 18px;
    font-weight: 700;
    color: var(--ios-text);
    margin-bottom: 4px;
}

.code-btn-desc {
    font-size: 11px;
    color: var(--ios-gray);
    margin-bottom: 4px;
}

.code-btn-wrvu {
    font-size: 12px;
    font-weight: 600;
    color: var(--ios-green);
}

.code-btn.selected .code-btn-code {
    color: var(--ios-blue);
}

/* Selected Codes Chips */
.selected-codes {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    min-height: 36px;
}

.code-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: var(--ios-blue);
    color: white;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
}

.code-chip-remove {
    width: 18px;
    height: 18px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    cursor: pointer;
}

/* Comments Section */
.comments-container {
    background: var(--ios-card);
    margin: 0 16px 16px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.comments-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.comments-header-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--ios-text);
}

.comments-header-icon {
    font-size: 16px;
    color: var(--ios-gray);
    transition: transform 0.3s ease;
}

.comments-header-icon.open {
    transform: rotate(180deg);
}

.comments-body {
    display: none;
    padding: 0 16px 16px;
}

.comments-body.show {
    display: block;
}

.comments-input {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--ios-gray-4);
    border-radius: 10px;
    font-size: 16px;
    font-family: inherit;
    resize: none;
    background: var(--ios-bg);
    color: var(--ios-text);
}

.comments-input:focus {
    outline: none;
    border-color: var(--ios-blue);
}

/* Tab Bar */
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--ios-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 0.5px solid var(--ios-separator);
    display: flex;
    padding: 8px 0;
    padding-bottom: max(8px, env(safe-area-inset-bottom));
    z-index: 100;
}

.tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.tab-icon {
    font-size: 24px;
}

.tab-label {
    font-size: 10px;
    font-weight: 500;
    color: var(--ios-gray);
}

.tab-item.active .tab-label {
    color: var(--ios-blue);
}

/* Summary Sheet */
.summary-sheet {
    display: none;
}

.summary-sheet.active {
    display: block;
}

.tracker-view {
    display: block;
}

.tracker-view.hidden {
    display: none;
}

/* Stats Row */
.stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 16px;
}

.stat-card {
    background: var(--ios-card);
    border-radius: 16px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.stat-value {
    font-size: 28px;
    font-weight: 700;
    color: var(--ios-text);
}

.stat-label {
    font-size: 11px;
    color: var(--ios-gray);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
}

/* Visit List */
.visit-list {
    background: var(--ios-card);
    margin: 0 16px 16px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.visit-list-header {
    padding: 12px 16px;
    font-size: 13px;
    font-weight: 600;
    color: var(--ios-gray);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: var(--ios-gray-6);
}

.visit-item {
    display: flex;
    align-items: center;
    padding: 14px 16px;
    border-bottom: 0.5px solid var(--ios-separator);
}

.visit-item:last-child {
    border-bottom: none;
}

.visit-time {
    font-size: 15px;
    font-weight: 600;
    color: var(--ios-text);
    width: 70px;
}

.visit-info {
    flex: 1;
}

.visit-codes {
    font-size: 14px;
    color: var(--ios-text);
}

.visit-duration {
    font-size: 12px;
    color: var(--ios-gray);
    margin-top: 2px;
}

.visit-wrvu {
    font-size: 15px;
    font-weight: 600;
    color: var(--ios-green);
}

.visit-type-badge {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    margin-left: 8px;
}

.visit-type-badge.well {
    background: rgba(52, 199, 89, 0.15);
    color: var(--ios-green);
}

.visit-type-badge.sick {
    background: rgba(0, 122, 255, 0.15);
    color: var(--ios-blue);
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--ios-gray);
}

.empty-state-icon {
    font-size: 48px;
    margin-bottom: 12px;
    opacity: 0.5;
}

.empty-state-text {
    font-size: 15px;
}

/* Flash Message */
.flash-toast {
    position: fixed;
    top: 60px;
    left: 16px;
    right: 16px;
    background: var(--ios-green);
    color: white;
    padding: 14px 20px;
    border-radius: 12px;
    font-weight: 600;
    text-align: center;
    z-index: 200;
    transform: translateY(-100px);
    opacity: 0;
    transition: all 0.3s ease;
}

.flash-toast.show {
    transform: translateY(0);
    opacity: 1;
}

/* Link back to desktop */
.desktop-link {
    text-align: center;
    padding: 20px;
    margin: 16px;
    background: var(--ios-card);
    border-radius: 16px;
}

.desktop-link a {
    color: var(--ios-blue);
    text-decoration: none;
    font-size: 15px;
}

/* Hide wrapper max-width for mobile */
.wrapper {
    max-width: 100% !important;
    padding: 0 !important;
}
</style>

<div class="mobile-app">
    <!-- Header -->
    <div class="mobile-header">
        <a href="/clinic-visit-tracker/" class="mobile-header-link">← Desktop</a>
        <h1 class="mobile-header-title">RVU Tracker</h1>
    </div>

    <!-- Flash Toast -->
    <div class="flash-toast" id="flashToast">✓ Visit Saved!</div>

    <!-- Tracker View -->
    <div class="tracker-view" id="trackerView">
        <!-- Timer -->
        <div class="timer-container">
            <div class="timer-ring-container">
                <svg class="timer-ring" viewBox="0 0 200 200">
                    <circle class="timer-ring-bg" cx="100" cy="100" r="90"/>
                    <circle class="timer-ring-progress" id="timerProgress" cx="100" cy="100" r="90"/>
                </svg>
                <div class="timer-display" id="timerDisplay">00:00</div>
            </div>
            <div class="timer-status" id="timerStatus">Tap to start</div>
            
            <div class="timer-controls" id="timerControls">
                <button class="btn-ios btn-primary" id="startBtn" onclick="startTimer()">Start Visit</button>
            </div>
            
            <div class="timer-controls" id="runningControls" style="display: none;">
                <button class="btn-ios btn-secondary" id="pauseBtn" onclick="togglePause()">Pause</button>
                <button class="btn-ios btn-success" onclick="finishVisit()">Finish</button>
                <button class="btn-ios btn-danger" onclick="cancelVisit()">Cancel</button>
            </div>

            <!-- Time-based suggestion -->
            <div class="time-suggestion" id="timeSuggestion">
                <div class="time-suggestion-title">⏱️ Time-Based Billing Suggestion</div>
                <div class="time-suggestion-buttons">
                    <button class="time-suggestion-btn" onclick="applyTimeCode('new')">New Patient</button>
                    <button class="time-suggestion-btn" onclick="applyTimeCode('est')">Established</button>
                </div>
            </div>
        </div>

        <!-- Code Selection -->
        <div class="segment-container">
            <div class="segment-control">
                <button class="segment-btn active" onclick="switchSegment('est')">Established</button>
                <button class="segment-btn" onclick="switchSegment('new')">New Patient</button>
                <button class="segment-btn" onclick="switchSegment('well')">Well Visit</button>
            </div>

            <!-- Established Codes -->
            <div class="code-panel active" id="estPanel">
                <div class="code-grid">
                    <div class="code-btn" data-code="99212" onclick="toggleCode(this)">
                        <div class="code-btn-code">99212</div>
                        <div class="code-btn-desc">Level 2</div>
                        <div class="code-btn-wrvu">0.70 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99213" onclick="toggleCode(this)">
                        <div class="code-btn-code">99213</div>
                        <div class="code-btn-desc">Level 3</div>
                        <div class="code-btn-wrvu">1.30 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99214" onclick="toggleCode(this)">
                        <div class="code-btn-code">99214</div>
                        <div class="code-btn-desc">Level 4</div>
                        <div class="code-btn-wrvu">1.92 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99215" onclick="toggleCode(this)">
                        <div class="code-btn-code">99215</div>
                        <div class="code-btn-desc">Level 5</div>
                        <div class="code-btn-wrvu">2.80 wRVU</div>
                    </div>
                </div>
            </div>

            <!-- New Patient Codes -->
            <div class="code-panel" id="newPanel" style="display: none;">
                <div class="code-grid">
                    <div class="code-btn" data-code="99202" onclick="toggleCode(this)">
                        <div class="code-btn-code">99202</div>
                        <div class="code-btn-desc">Level 2</div>
                        <div class="code-btn-wrvu">0.93 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99203" onclick="toggleCode(this)">
                        <div class="code-btn-code">99203</div>
                        <div class="code-btn-desc">Level 3</div>
                        <div class="code-btn-wrvu">1.60 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99204" onclick="toggleCode(this)">
                        <div class="code-btn-code">99204</div>
                        <div class="code-btn-desc">Level 4</div>
                        <div class="code-btn-wrvu">2.60 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99205" onclick="toggleCode(this)">
                        <div class="code-btn-code">99205</div>
                        <div class="code-btn-desc">Level 5</div>
                        <div class="code-btn-wrvu">3.50 wRVU</div>
                    </div>
                </div>
            </div>

            <!-- Well Visit Codes -->
            <div class="code-panel" id="wellPanel" style="display: none;">
                <div style="margin-bottom: 12px; font-size: 13px; font-weight: 600; color: var(--ios-gray);">NEW PATIENT</div>
                <div class="code-grid" style="margin-bottom: 16px;">
                    <div class="code-btn" data-code="99381" onclick="toggleCode(this)">
                        <div class="code-btn-code">99381</div>
                        <div class="code-btn-desc">&lt;1 yr</div>
                        <div class="code-btn-wrvu">1.50 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99382" onclick="toggleCode(this)">
                        <div class="code-btn-code">99382</div>
                        <div class="code-btn-desc">1-4 yr</div>
                        <div class="code-btn-wrvu">1.60 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99383" onclick="toggleCode(this)">
                        <div class="code-btn-code">99383</div>
                        <div class="code-btn-desc">5-11 yr</div>
                        <div class="code-btn-wrvu">1.70 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99384" onclick="toggleCode(this)">
                        <div class="code-btn-code">99384</div>
                        <div class="code-btn-desc">12-17 yr</div>
                        <div class="code-btn-wrvu">2.00 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99385" onclick="toggleCode(this)">
                        <div class="code-btn-code">99385</div>
                        <div class="code-btn-desc">18-39 yr</div>
                        <div class="code-btn-wrvu">1.92 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99386" onclick="toggleCode(this)">
                        <div class="code-btn-code">99386</div>
                        <div class="code-btn-desc">40-64 yr</div>
                        <div class="code-btn-wrvu">2.33 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99387" onclick="toggleCode(this)">
                        <div class="code-btn-code">99387</div>
                        <div class="code-btn-desc">65+ yr</div>
                        <div class="code-btn-wrvu">2.50 wRVU</div>
                    </div>
                </div>
                <div style="margin-bottom: 12px; font-size: 13px; font-weight: 600; color: var(--ios-gray);">ESTABLISHED PATIENT</div>
                <div class="code-grid">
                    <div class="code-btn" data-code="99391" onclick="toggleCode(this)">
                        <div class="code-btn-code">99391</div>
                        <div class="code-btn-desc">&lt;1 yr</div>
                        <div class="code-btn-wrvu">1.37 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99392" onclick="toggleCode(this)">
                        <div class="code-btn-code">99392</div>
                        <div class="code-btn-desc">1-4 yr</div>
                        <div class="code-btn-wrvu">1.50 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99393" onclick="toggleCode(this)">
                        <div class="code-btn-code">99393</div>
                        <div class="code-btn-desc">5-11 yr</div>
                        <div class="code-btn-wrvu">1.50 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99394" onclick="toggleCode(this)">
                        <div class="code-btn-code">99394</div>
                        <div class="code-btn-desc">12-17 yr</div>
                        <div class="code-btn-wrvu">1.70 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99395" onclick="toggleCode(this)">
                        <div class="code-btn-code">99395</div>
                        <div class="code-btn-desc">18-39 yr</div>
                        <div class="code-btn-wrvu">1.75 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99396" onclick="toggleCode(this)">
                        <div class="code-btn-code">99396</div>
                        <div class="code-btn-desc">40-64 yr</div>
                        <div class="code-btn-wrvu">1.90 wRVU</div>
                    </div>
                    <div class="code-btn" data-code="99397" onclick="toggleCode(this)">
                        <div class="code-btn-code">99397</div>
                        <div class="code-btn-desc">65+ yr</div>
                        <div class="code-btn-wrvu">2.00 wRVU</div>
                    </div>
                </div>
            </div>

            <!-- Selected Codes Display -->
            <div class="selected-codes" id="selectedCodes"></div>
        </div>

        <!-- Comments -->
        <div class="comments-container">
            <div class="comments-header" onclick="toggleComments()">
                <span class="comments-header-title">Add Notes</span>
                <span class="comments-header-icon" id="commentsIcon">▼</span>
            </div>
            <div class="comments-body" id="commentsBody">
                <textarea class="comments-input" id="commentsInput" rows="3" placeholder="Optional notes about this visit..."></textarea>
            </div>
        </div>

        <!-- Save without timer -->
        <div style="padding: 0 16px 16px;">
            <button class="btn-ios btn-success btn-block" onclick="saveManual()">💾 Save Visit (No Timer)</button>
        </div>
    </div>

    <!-- Summary View -->
    <div class="summary-sheet" id="summaryView">
        <!-- Stats -->
        <div class="stats-row">
            <div class="stat-card">
                <div class="stat-value" id="statVisits">0</div>
                <div class="stat-label">Visits</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" id="statWRVU">0.0</div>
                <div class="stat-label">wRVU</div>
            </div>
            <div class="stat-card">
                <div class="stat-value" id="statMinutes">0</div>
                <div class="stat-label">Minutes</div>
            </div>
        </div>

        <!-- Visit List -->
        <div class="visit-list" id="visitList">
            <div class="visit-list-header">Today's Visits</div>
            <div id="visitListContent"></div>
        </div>

        <!-- Desktop Link -->
        <div class="desktop-link">
            <a href="/clinic-visit-tracker/">View Full Desktop Version →</a>
        </div>
    </div>

    <!-- Tab Bar -->
    <div class="tab-bar">
        <button class="tab-item active" id="tabTracker" onclick="switchView('tracker')">
            <span class="tab-icon">⏱️</span>
            <span class="tab-label">Track</span>
        </button>
        <button class="tab-item" id="tabSummary" onclick="switchView('summary')">
            <span class="tab-icon">📊</span>
            <span class="tab-label">Summary</span>
        </button>
    </div>
</div>

<script>
// wRVU Lookup (shared with desktop)
const WRVU_LOOKUP = {
    '99202': { description: 'Level 2 new', wrvu: 0.93 },
    '99203': { description: 'Level 3 new', wrvu: 1.6 },
    '99204': { description: 'Level 4 new', wrvu: 2.6 },
    '99205': { description: 'Level 5 new', wrvu: 3.5 },
    '99212': { description: 'Level 2 est', wrvu: 0.7 },
    '99213': { description: 'Level 3 est', wrvu: 1.3 },
    '99214': { description: 'Level 4 est', wrvu: 1.92 },
    '99215': { description: 'Level 5 est', wrvu: 2.8 },
    '99381': { description: '<1yr new', wrvu: 1.5 },
    '99382': { description: '1-4yr new', wrvu: 1.6 },
    '99383': { description: '5-11yr new', wrvu: 1.7 },
    '99384': { description: '12-17yr new', wrvu: 2.0 },
    '99385': { description: '18-39yr new', wrvu: 1.92 },
    '99386': { description: '40-64yr new', wrvu: 2.33 },
    '99387': { description: '65+ yr new', wrvu: 2.5 },
    '99391': { description: '<1yr est', wrvu: 1.37 },
    '99392': { description: '1-4yr est', wrvu: 1.5 },
    '99393': { description: '5-11yr est', wrvu: 1.5 },
    '99394': { description: '12-17yr est', wrvu: 1.7 },
    '99395': { description: '18-39yr est', wrvu: 1.75 },
    '99396': { description: '40-64yr est', wrvu: 1.9 },
    '99397': { description: '65+ yr est', wrvu: 2.0 },
    '25': { description: '25 Modifier', wrvu: 0.0 }
};

const WELL_VISIT_CODES = ['99381', '99382', '99383', '99384', '99385', '99386', '99387', '99391', '99392', '99393', '99394', '99395', '99396', '99397'];

// State
let timerInterval = null;
let startTime = null;
let pausedTime = 0;
let totalPausedDuration = 0;
let isPaused = false;
let selectedCodes = new Set();

// Timer Functions
function startTimer() {
    startTime = new Date();
    totalPausedDuration = 0;
    isPaused = false;
    
    timerInterval = setInterval(updateTimer, 100);
    
    document.getElementById('timerControls').style.display = 'none';
    document.getElementById('runningControls').style.display = 'flex';
    document.getElementById('timerStatus').textContent = 'Running';
    document.getElementById('timerProgress').classList.add('running');
    document.getElementById('timerProgress').classList.remove('paused');
}

function togglePause() {
    if (isPaused) {
        // Resume
        totalPausedDuration += new Date() - pausedTime;
        isPaused = false;
        timerInterval = setInterval(updateTimer, 100);
        document.getElementById('pauseBtn').textContent = 'Pause';
        document.getElementById('timerStatus').textContent = 'Running';
        document.getElementById('timerProgress').classList.add('running');
        document.getElementById('timerProgress').classList.remove('paused');
    } else {
        // Pause
        isPaused = true;
        pausedTime = new Date();
        clearInterval(timerInterval);
        document.getElementById('pauseBtn').textContent = 'Resume';
        document.getElementById('timerStatus').textContent = 'Paused';
        document.getElementById('timerProgress').classList.remove('running');
        document.getElementById('timerProgress').classList.add('paused');
    }
}

function updateTimer() {
    if (isPaused) return;
    
    const now = new Date();
    const elapsed = Math.floor((now - startTime - totalPausedDuration) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    document.getElementById('timerDisplay').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Update progress ring (cap at 60 minutes)
    const progress = Math.min(elapsed / 3600, 1);
    const offset = 565 - (565 * progress);
    document.getElementById('timerProgress').style.strokeDashoffset = offset;
    
    // Show time-based suggestion after 10 minutes
    if (minutes >= 10 && selectedCodes.size === 0) {
        document.getElementById('timeSuggestion').classList.add('show');
    }
}

function getElapsedMinutes() {
    if (!startTime) return 0;
    const now = new Date();
    return Math.floor((now - startTime - totalPausedDuration) / 60000);
}

function applyTimeCode(type) {
    const minutes = getElapsedMinutes();
    let code = '';
    
    if (type === 'est') {
        if (minutes < 15) code = '99212';
        else if (minutes < 30) code = '99213';
        else if (minutes < 40) code = '99214';
        else code = '99215';
        switchSegment('est');
    } else {
        if (minutes < 15) code = '99202';
        else if (minutes < 30) code = '99203';
        else if (minutes < 40) code = '99204';
        else code = '99205';
        switchSegment('new');
    }
    
    // Clear existing sick codes and select suggested one
    ['99202','99203','99204','99205','99212','99213','99214','99215'].forEach(c => {
        selectedCodes.delete(c);
        const btn = document.querySelector(`.code-btn[data-code="${c}"]`);
        if (btn) btn.classList.remove('selected');
    });
    
    selectedCodes.add(code);
    const targetBtn = document.querySelector(`.code-btn[data-code="${code}"]`);
    if (targetBtn) targetBtn.classList.add('selected');
    
    updateSelectedDisplay();
    document.getElementById('timeSuggestion').classList.remove('show');
    
    // Pause timer
    if (!isPaused) togglePause();
}

function finishVisit() {
    if (selectedCodes.size === 0) {
        alert('Please select at least one billing code');
        return;
    }
    
    const endTime = new Date();
    const activeDuration = Math.floor((endTime - startTime - totalPausedDuration) / 1000);
    
    const codesArray = Array.from(selectedCodes);
    const hasWell = codesArray.some(c => WELL_VISIT_CODES.includes(c));
    
    const visit = {
        date: new Date().toISOString().split('T')[0],
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        activeDuration: activeDuration,
        visitType: hasWell ? 'Well' : 'Sick',
        billingCodes: codesArray,
        comments: document.getElementById('commentsInput').value
    };
    
    saveVisit(visit);
    resetForm();
    showToast();
    
    // Auto-start new timer
    setTimeout(startTimer, 500);
}

function cancelVisit() {
    if (!confirm('Cancel this visit?')) return;
    resetForm();
}

function saveManual() {
    if (selectedCodes.size === 0) {
        alert('Please select at least one billing code');
        return;
    }
    
    const now = new Date();
    const codesArray = Array.from(selectedCodes);
    const hasWell = codesArray.some(c => WELL_VISIT_CODES.includes(c));
    
    const visit = {
        date: now.toISOString().split('T')[0],
        startTime: now.toISOString(),
        endTime: now.toISOString(),
        activeDuration: 0,
        visitType: hasWell ? 'Well' : 'Sick',
        billingCodes: codesArray,
        comments: document.getElementById('commentsInput').value
    };
    
    saveVisit(visit);
    resetForm();
    showToast();
}

function resetForm() {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = null;
    isPaused = false;
    
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('timerProgress').style.strokeDashoffset = 565;
    document.getElementById('timerProgress').classList.remove('running', 'paused');
    document.getElementById('timerStatus').textContent = 'Tap to start';
    document.getElementById('timerControls').style.display = 'flex';
    document.getElementById('runningControls').style.display = 'none';
    document.getElementById('timeSuggestion').classList.remove('show');
    document.getElementById('commentsInput').value = '';
    document.getElementById('pauseBtn').textContent = 'Pause';
    
    // Clear selected codes
    selectedCodes.clear();
    document.querySelectorAll('.code-btn.selected').forEach(btn => btn.classList.remove('selected'));
    updateSelectedDisplay();
}

// Data Storage (shared localStorage keys)
function saveVisit(visit) {
    const visits = getVisits();
    visits.push(visit);
    localStorage.setItem('clinicVisits', JSON.stringify(visits));
}

function getVisits() {
    const data = localStorage.getItem('clinicVisits');
    return data ? JSON.parse(data) : [];
}

function getTodayVisits() {
    const today = new Date().toISOString().split('T')[0];
    return getVisits().filter(v => v.date === today);
}

// UI Functions
function switchSegment(panel) {
    document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.code-panel').forEach(p => p.style.display = 'none');
    
    if (panel === 'est') {
        document.querySelectorAll('.segment-btn')[0].classList.add('active');
        document.getElementById('estPanel').style.display = 'block';
    } else if (panel === 'new') {
        document.querySelectorAll('.segment-btn')[1].classList.add('active');
        document.getElementById('newPanel').style.display = 'block';
    } else {
        document.querySelectorAll('.segment-btn')[2].classList.add('active');
        document.getElementById('wellPanel').style.display = 'block';
    }
}

function toggleCode(btn) {
    const code = btn.dataset.code;
    
    if (selectedCodes.has(code)) {
        selectedCodes.delete(code);
        btn.classList.remove('selected');
    } else {
        selectedCodes.add(code);
        btn.classList.add('selected');
    }
    
    // Auto-add modifier 25 if well + sick selected
    const hasSick = Array.from(selectedCodes).some(c => ['99202','99203','99204','99205','99212','99213','99214','99215'].includes(c));
    const hasWell = Array.from(selectedCodes).some(c => WELL_VISIT_CODES.includes(c));
    
    if (hasWell && hasSick) {
        selectedCodes.add('25');
    } else {
        selectedCodes.delete('25');
    }
    
    updateSelectedDisplay();
}

function updateSelectedDisplay() {
    const container = document.getElementById('selectedCodes');
    container.innerHTML = '';
    
    selectedCodes.forEach(code => {
        const chip = document.createElement('div');
        chip.className = 'code-chip';
        chip.innerHTML = `${code} <span class="code-chip-remove" onclick="removeCode('${code}')">×</span>`;
        container.appendChild(chip);
    });
}

function removeCode(code) {
    selectedCodes.delete(code);
    const btn = document.querySelector(`.code-btn[data-code="${code}"]`);
    if (btn) btn.classList.remove('selected');
    updateSelectedDisplay();
}

function toggleComments() {
    const body = document.getElementById('commentsBody');
    const icon = document.getElementById('commentsIcon');
    body.classList.toggle('show');
    icon.classList.toggle('open');
}

function switchView(view) {
    const trackerView = document.getElementById('trackerView');
    const summaryView = document.getElementById('summaryView');
    const tabTracker = document.getElementById('tabTracker');
    const tabSummary = document.getElementById('tabSummary');
    
    if (view === 'tracker') {
        trackerView.classList.remove('hidden');
        summaryView.classList.remove('active');
        tabTracker.classList.add('active');
        tabSummary.classList.remove('active');
    } else {
        trackerView.classList.add('hidden');
        summaryView.classList.add('active');
        tabTracker.classList.remove('active');
        tabSummary.classList.add('active');
        loadSummary();
    }
}

function loadSummary() {
    const visits = getTodayVisits();
    
    // Stats
    let totalWRVU = 0;
    let totalMinutes = 0;
    
    visits.forEach(v => {
        v.billingCodes.forEach(code => {
            if (WRVU_LOOKUP[code]) totalWRVU += WRVU_LOOKUP[code].wrvu;
        });
        totalMinutes += Math.floor(v.activeDuration / 60);
    });
    
    document.getElementById('statVisits').textContent = visits.length;
    document.getElementById('statWRVU').textContent = totalWRVU.toFixed(1);
    document.getElementById('statMinutes').textContent = totalMinutes;
    
    // Visit list
    const container = document.getElementById('visitListContent');
    
    if (visits.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-text">No visits recorded today</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = visits.map(v => {
        const time = new Date(v.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        const duration = Math.floor(v.activeDuration / 60);
        const wrvu = v.billingCodes.reduce((sum, code) => sum + (WRVU_LOOKUP[code]?.wrvu || 0), 0);
        
        return `
            <div class="visit-item">
                <div class="visit-time">${time}</div>
                <div class="visit-info">
                    <div class="visit-codes">${v.billingCodes.join(', ')}</div>
                    <div class="visit-duration">${duration} min</div>
                </div>
                <div class="visit-wrvu">${wrvu.toFixed(1)}</div>
                <div class="visit-type-badge ${v.visitType.toLowerCase()}">${v.visitType}</div>
            </div>
        `;
    }).join('');
}

function showToast() {
    const toast = document.getElementById('flashToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Nothing special needed on load
});
</script>
