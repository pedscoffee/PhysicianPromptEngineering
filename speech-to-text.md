---
layout: page
title: Speech-to-Text Transcription
description: Browser-based batch transcription demonstration tool. For non-clinical use only (presentations, educational content). NOT for patient data or PHI.
permalink: /speech-to-text/
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background: #f5f5f5;
        color: #333;
        line-height: 1.6;
    }

    .wrapper {
        max-width: 1200px;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .header {
        background: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header h1 {
        font-size: 2em;
        margin-bottom: 10px;
        color: #2a7ae2;
    }

    .header p {
        color: #666;
        font-size: 1.05em;
        margin-bottom: 10px;
    }

    .privacy-banner {
        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        border-left: 4px solid #2a7ae2;
        padding: 15px 20px;
        border-radius: 6px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .privacy-icon {
        font-size: 1.5em;
    }

    .privacy-text {
        flex: 1;
    }

    .privacy-text strong {
        color: #1565c0;
    }

    .browser-support-warning {
        background: #fff3cd;
        border-left: 4px solid #ff9800;
        padding: 15px 20px;
        border-radius: 6px;
        margin-bottom: 20px;
        display: none;
    }

    .browser-support-warning.show {
        display: block;
    }

    .controls-panel {
        background: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .controls-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
    }

    .controls-header h2 {
        color: #2a7ae2;
        font-size: 1.3em;
    }

    .status-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.95em;
    }

    .status-indicator.ready {
        background: #e8f5e9;
        color: #2e7d32;
    }

    .status-indicator.listening {
        background: #ffebee;
        color: #c62828;
        animation: pulse 2s infinite;
    }

    .status-indicator.paused {
        background: #fff3e0;
        color: #e65100;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }

    .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: currentColor;
    }

    .controls-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
    }

    .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .control-group label {
        font-weight: 500;
        font-size: 0.95em;
        color: #555;
    }

    .control-group select {
        padding: 10px 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-size: 0.95em;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
    }

    .control-group select:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .main-controls {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        justify-content: center;
        min-width: 150px;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5bb8;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(42, 122, 226, 0.3);
    }

    .btn-danger {
        background: #dc3545;
        color: white;
    }

    .btn-danger:hover:not(:disabled) {
        background: #c82333;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #218838;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #5a6268;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
    }

    .btn-outline {
        background: white;
        color: #2a7ae2;
        border: 2px solid #2a7ae2;
    }

    .btn-outline:hover:not(:disabled) {
        background: #2a7ae2;
        color: white;
    }

    .editor-panel {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .editor-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
        flex-wrap: wrap;
        gap: 15px;
    }

    .editor-header h2 {
        color: #2a7ae2;
        font-size: 1.3em;
    }

    .editor-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .word-count {
        font-size: 0.9em;
        color: #666;
        padding: 8px 12px;
        background: #f5f5f5;
        border-radius: 6px;
    }

    .current-recording-panel {
        background: #fff9e6;
        border: 2px solid #ffc107;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
    }

    .current-recording-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .current-recording-header h3 {
        color: #e65100;
        font-size: 1.1em;
        margin: 0;
    }

    .recording-timer {
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 1.2em;
        font-weight: 600;
        color: #e65100;
    }

    #currentTranscript {
        width: 100%;
        min-height: 150px;
        padding: 15px;
        border: 2px solid #ffc107;
        border-radius: 6px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 1em;
        line-height: 1.8;
        resize: vertical;
        transition: border-color 0.2s;
        background: white;
    }

    #currentTranscript:focus {
        outline: none;
        border-color: #ff9800;
    }

    #currentTranscript.listening {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }

    .save-current-actions {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }

    .segments-panel {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .segments-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
    }

    .segments-header h2 {
        color: #2a7ae2;
        font-size: 1.3em;
    }

    .segments-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .segment-card {
        border: 2px solid #e8e8e8;
        border-radius: 8px;
        padding: 20px;
        transition: all 0.2s;
        animation: fadeIn 0.3s ease-out;
    }

    .segment-card:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.08);
        border-color: #2a7ae2;
    }

    .segment-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;
        flex-wrap: wrap;
        gap: 10px;
    }

    .segment-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #333;
        flex: 1;
    }

    .segment-title input {
        width: 100%;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 1em;
        font-weight: 600;
    }

    .segment-meta {
        display: flex;
        gap: 10px;
        font-size: 0.85em;
        color: #666;
        flex-wrap: wrap;
    }

    .segment-time {
        background: #f0f0f0;
        padding: 3px 8px;
        border-radius: 4px;
        font-weight: 500;
    }

    .segment-content {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 15px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.8;
        max-height: 200px;
        overflow-y: auto;
    }

    .segment-content.editing textarea {
        width: 100%;
        min-height: 150px;
        padding: 12px;
        border: 2px solid #2a7ae2;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1em;
        line-height: 1.8;
        resize: vertical;
    }

    .segment-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #666;
    }

    .empty-state-icon {
        font-size: 4em;
        margin-bottom: 20px;
    }

    .empty-state h3 {
        color: #333;
        margin-bottom: 10px;
    }

    .empty-state p {
        margin-bottom: 10px;
    }

    .tips-panel {
        background: white;
        padding: 25px;
        border-radius: 8px;
        margin-top: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .tips-panel h3 {
        color: #2a7ae2;
        margin-bottom: 15px;
        font-size: 1.2em;
    }

    .tips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .tip-item {
        padding: 15px;
        background: #f9f9f9;
        border-left: 3px solid #2a7ae2;
        border-radius: 4px;
    }

    .tip-item strong {
        color: #2a7ae2;
        display: block;
        margin-bottom: 8px;
    }

    .tip-item p {
        margin: 0;
        color: #666;
        font-size: 0.95em;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: #28a745;
        color: white;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        font-weight: 500;
        display: none;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    }

    .notification.show {
        display: flex;
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .controls-grid {
            grid-template-columns: 1fr;
        }
        
        .main-controls {
            flex-direction: column;
        }
        
        .btn {
            width: 100%;
        }
        
        .editor-actions {
            width: 100%;
        }
        
        .editor-actions .btn {
            flex: 1;
        }
    }
</style>

<div class="container">
    <div class="header">
        <h1>Demonstration: Speech-to-Text Transcription</h1>
        <p>Browser-based batch dictation tool for non-clinical use. Demonstrates speech recognition capabilities for educational content, presentations, or personal notes.</p>
        
        <div class="privacy-banner" style="background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border-left: 4px solid #ff9800;">
            <span class="privacy-icon" style="color: #e65100;">⚠️</span>
            <div class="privacy-text">
                <strong style="color: #e65100;">NOT FOR PATIENT DATA:</strong> This tool uses your device's speech-to-text API, which may send audio to external servers for processing. <strong>Do not use with any patient information or PHI.</strong> This is a demonstration tool for non-clinical content only (presentations, educational materials, personal notes, etc.).<a href="https://physicianpromptengineering.com/disclaimer/">See Disclaimer.</a>
            </div>
        </div>
        
        <div class="privacy-banner">
            <span class="privacy-icon">ℹ️</span>
            <div class="privacy-text">
                <strong>Why This Tool Exists:</strong> Speech recognition and transcription are discussed extensively elsewhere on this site as part of clinical AI workflows. This tool demonstrates the technical capabilities of browser-based speech-to-text for educational purposes, showing what's already possible with current technology.
            </div>
        </div>
    </div>

    <div class="browser-support-warning" id="browserWarning">
        <strong>⚠️ Browser Compatibility Notice:</strong> This tool works best in Google Chrome, Microsoft Edge, or Safari. Firefox does not currently support the Web Speech API. If you're experiencing issues, please try Chrome or Edge. <strong>Remember: This is a demonstration tool for non-clinical content only. Do not use with patient data.</strong>
    </div>

    <div class="controls-panel">
        <div class="controls-header">
            <h2>Recording Controls</h2>
            <div class="status-indicator ready" id="statusIndicator">
                <span class="status-dot"></span>
                <span id="statusText">Ready</span>
            </div>
        </div>

        <div class="controls-grid">
            <div class="control-group">
                <label for="language">Language</label>
                <select id="language">
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es-ES">Spanish (Spain)</option>
                    <option value="es-MX">Spanish (Mexico)</option>
                    <option value="fr-FR">French</option>
                    <option value="de-DE">German</option>
                    <option value="it-IT">Italian</option>
                    <option value="pt-BR">Portuguese (Brazil)</option>
                    <option value="zh-CN">Chinese (Mandarin)</option>
                    <option value="ja-JP">Japanese</option>
                    <option value="ko-KR">Korean</option>
                    <option value="ar-SA">Arabic</option>
                    <option value="hi-IN">Hindi</option>
                </select>
            </div>

            <div class="control-group">
                <label for="punctuation">Auto-Punctuation</label>
                <select id="punctuation">
                    <option value="on">Enabled</option>
                    <option value="off">Disabled</option>
                </select>
            </div>
        </div>

        <div class="main-controls">
            <button id="startBtn" class="btn btn-primary">
                🎤 Start New Recording
            </button>
            <button id="pauseBtn" class="btn btn-secondary" disabled>
                ⏸️ Pause
            </button>
            <button id="stopBtn" class="btn btn-danger" disabled>
                ⏹️ Stop & Save
            </button>
        </div>
    </div>

    <!-- Current Recording Panel (only visible when recording) -->
    <div class="current-recording-panel" id="currentRecordingPanel" style="display: none;">
        <div class="current-recording-header">
            <h3>🔴 Recording in Progress</h3>
            <div class="recording-timer" id="recordingTimer">00:00</div>
        </div>
        
        <textarea id="currentTranscript" placeholder="Speak now... Your transcription will appear here in real-time."></textarea>
        
        <div class="save-current-actions">
            <input type="text" id="segmentTitle" placeholder="Enter title for this recording (e.g., 'Thinking through this out loud')" 
                   style="flex: 1; padding: 10px 12px; border: 2px solid #e8e8e8; border-radius: 6px; font-size: 0.95em;">
            <button id="saveSegmentBtn" class="btn btn-success">
                💾 Save & Start New
            </button>
        </div>
    </div>

    <!-- Saved Segments Panel -->
    <div class="segments-panel">
        <div class="segments-header">
            <h2>Saved Transcriptions (<span id="segmentCount">0</span>)</h2>
            <div class="editor-actions">
                <button id="exportAllBtn" class="btn btn-primary btn-sm">
                    📤 Export All
                </button>
                <button id="clearAllBtn" class="btn btn-secondary btn-sm">
                    🗑️ Clear All
                </button>
            </div>
        </div>

        <div id="segmentsList" class="segments-list">
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <h3>No recordings yet!</h3>
                <p>Click "Start New Recording" to begin your first transcription.</p>
                <p><strong>Remember:</strong> This tool is for non-clinical content only (presentations, educational materials, personal notes).</p>
                <p><strong>Never use with patient data or PHI.</strong></p>
            </div>
        </div>
    </div>

    <div class="tips-panel">
        <h3>💡 Best Practices for Non-Clinical Use</h3>
        <div class="tips-grid">
            <div class="tip-item">
                <strong>Appropriate Use Cases</strong>
                <p>Educational presentations, research notes, personal documentation, meeting minutes, lecture transcripts, or blog post drafts.</p>
            </div>
            <div class="tip-item">
                <strong>NOT for Patient Information</strong>
                <p>Never use this tool with patient names, medical record numbers, diagnoses, or any protected health information (PHI).</p>
            </div>
            <div class="tip-item">
                <strong>Title Each Recording</strong>
                <p>Add descriptive titles like "Lecture Notes - Topic" or "Presentation Draft - Section 1" for easy organization.</p>
            </div>
            <div class="tip-item">
                <strong>Edit After Recording</strong>
                <p>Click the "Edit" button on any saved segment to make corrections or additions to your transcription.</p>
            </div>
            <div class="tip-item">
                <strong>Export Options</strong>
                <p>Export individual segments or all recordings at once. Each segment includes its title and timestamp.</p>
            </div>
            <div class="tip-item">
                <strong>Speak Naturally</strong>
                <p>Normal speaking pace works best. Say "period," "comma," or "new paragraph" to add punctuation.</p>
            </div>
        </div>
    </div>

    <div style="background: #ffebee; border-left: 4px solid #dc3545; padding: 20px; border-radius: 6px; margin-top: 30px;">
        <h3 style="color: #c62828; margin-bottom: 15px;">⚠️ Important Disclaimer</h3>
        <p style="color: #666; margin-bottom: 10px;">
            <strong>This tool is for demonstration and educational purposes only.</strong> The Web Speech API may transmit audio data to external servers for processing, making it unsuitable for confidential or sensitive information.
        </p>
        <p style="color: #666; margin-bottom: 10px;">
            For HIPAA-compliant clinical documentation, use only IT-approved tools within your EMR system that have proper Business Associate Agreements (BAAs) in place.
        </p>
        <p style="color: #666; margin: 0;">
            This page exists to demonstrate the technical capabilities discussed throughout this site, showing how speech recognition technology works in practice with non-sensitive content.
        </p>
    </div>
</div>

<div class="notification" id="notification">
    <span id="notificationText"></span>
</div>

<div class="embed-container" style="margin-top: 40px;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<script>
    // =====================================================
    // SPEECH RECOGNITION & STATE MANAGEMENT
    // =====================================================
    let recognition = null;
    let isRecording = false;
    let isPaused = false;
    let currentTranscript = '';
    let interimTranscript = '';
    let segments = [];
    let segmentIdCounter = 1;
    let recordingStartTime = null;
    let timerInterval = null;

    const STORAGE_KEY = 'speechTranscriptSegments';

    // DOM Elements
    const elements = {
        currentTranscript: document.getElementById('currentTranscript'),
        segmentTitle: document.getElementById('segmentTitle'),
        startBtn: document.getElementById('startBtn'),
        pauseBtn: document.getElementById('pauseBtn'),
        stopBtn: document.getElementById('stopBtn'),
        saveSegmentBtn: document.getElementById('saveSegmentBtn'),
        exportAllBtn: document.getElementById('exportAllBtn'),
        clearAllBtn: document.getElementById('clearAllBtn'),
        language: document.getElementById('language'),
        statusIndicator: document.getElementById('statusIndicator'),
        statusText: document.getElementById('statusText'),
        segmentCount: document.getElementById('segmentCount'),
        segmentsList: document.getElementById('segmentsList'),
        currentRecordingPanel: document.getElementById('currentRecordingPanel'),
        recordingTimer: document.getElementById('recordingTimer'),
        notification: document.getElementById('notification'),
        notificationText: document.getElementById('notificationText'),
        browserWarning: document.getElementById('browserWarning')
    };

    // =====================================================
    // INITIALIZATION
    // =====================================================
    function init() {
        checkBrowserSupport();
        loadSegments();
        renderSegments();
        attachEventListeners();
    }

    function checkBrowserSupport() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            elements.browserWarning.classList.add('show');
            elements.startBtn.disabled = true;
            showNotification('❌ Speech recognition not supported in this browser. Please use Chrome, Edge, or Safari.');
            return false;
        }

        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = elements.language.value;

        recognition.onstart = handleRecognitionStart;
        recognition.onresult = handleRecognitionResult;
        recognition.onerror = handleRecognitionError;
        recognition.onend = handleRecognitionEnd;

        return true;
    }

    function attachEventListeners() {
        elements.startBtn.addEventListener('click', startRecording);
        elements.pauseBtn.addEventListener('click', pauseRecording);
        elements.stopBtn.addEventListener('click', stopAndSaveRecording);
        elements.saveSegmentBtn.addEventListener('click', saveCurrentAndStartNew);
        elements.exportAllBtn.addEventListener('click', exportAllSegments);
        elements.clearAllBtn.addEventListener('click', clearAllSegments);
        elements.language.addEventListener('change', handleLanguageChange);
        elements.segmentsList.addEventListener('click', handleSegmentAction);
    }

    // =====================================================
    // STORAGE
    // =====================================================
    function loadSegments() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                segments = JSON.parse(stored);
                segmentIdCounter = Math.max(...segments.map(s => s.id), 0) + 1;
            }
        } catch (err) {
            console.error('Failed to load segments:', err);
            segments = [];
        }
    }

    function saveSegments() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(segments));
        } catch (err) {
            console.error('Failed to save segments:', err);
            showNotification('❌ Failed to save. Storage might be full.');
        }
    }

    // =====================================================
    // RECORDING CONTROLS
    // =====================================================
    function startRecording() {
        if (!recognition) {
            showNotification('❌ Speech recognition not available');
            return;
        }

        try {
            recognition.start();
            isRecording = true;
            isPaused = false;
            currentTranscript = '';
            interimTranscript = '';
            recordingStartTime = Date.now();
            
            elements.currentRecordingPanel.style.display = 'block';
            elements.currentTranscript.value = '';
            elements.segmentTitle.value = '';
            
            elements.startBtn.disabled = true;
            elements.pauseBtn.disabled = false;
            elements.stopBtn.disabled = false;
            
            updateStatus('listening', 'Recording...');
            elements.currentTranscript.classList.add('listening');
            
            startTimer();
            showNotification('🎤 Recording started');
        } catch (error) {
            console.error('Error starting recognition:', error);
            showNotification('❌ Error starting recording');
        }
    }

    function pauseRecording() {
        if (!isRecording) return;

        try {
            recognition.stop();
            isPaused = true;
            
            elements.pauseBtn.disabled = true;
            elements.startBtn.disabled = false;
            elements.startBtn.innerHTML = '▶️ Resume';
            
            updateStatus('paused', 'Paused');
            elements.currentTranscript.classList.remove('listening');
            
            stopTimer();
            showNotification('⏸️ Recording paused');
        } catch (error) {
            console.error('Error pausing recognition:', error);
        }
    }

    function stopAndSaveRecording() {
        if (!isRecording && !isPaused) return;

        const text = elements.currentTranscript.value.trim();
        
        if (!text) {
            showNotification('⚠️ No transcription to save');
            resetRecordingState();
            return;
        }

        saveSegment(text);
        resetRecordingState();
    }

    function saveCurrentAndStartNew() {
        const text = elements.currentTranscript.value.trim();
        
        if (!text) {
            showNotification('⚠️ No transcription to save');
            return;
        }

        saveSegment(text);
        
        // Reset current recording but stay in recording mode
        currentTranscript = '';
        interimTranscript = '';
        elements.currentTranscript.value = '';
        elements.segmentTitle.value = '';
        recordingStartTime = Date.now();
        
        showNotification('💾 Segment saved! Continue recording...');
    }

    function resetRecordingState() {
        try {
            if (recognition) recognition.stop();
        } catch (e) {}
        
        isRecording = false;
        isPaused = false;
        currentTranscript = '';
        interimTranscript = '';
        
        elements.currentRecordingPanel.style.display = 'none';
        elements.startBtn.disabled = false;
        elements.pauseBtn.disabled = true;
        elements.stopBtn.disabled = true;
        elements.startBtn.innerHTML = '🎤 Start New Recording';
        
        updateStatus('ready', 'Ready');
        elements.currentTranscript.classList.remove('listening');
        
        stopTimer();
    }

    function saveSegment(text) {
        const title = elements.segmentTitle.value.trim() || `Recording ${segmentIdCounter}`;
        const duration = recordingStartTime ? Math.floor((Date.now() - recordingStartTime) / 1000) : 0;
        
        const segment = {
            id: segmentIdCounter++,
            title: title,
            text: text,
            timestamp: new Date().toISOString(),
            duration: duration,
            wordCount: text.split(/\s+/).length
        };

        segments.unshift(segment); // Add to beginning
        saveSegments();
        renderSegments();
        
        showNotification('✓ Segment saved!');
    }

    // =====================================================
    // TIMER
    // =====================================================
    function startTimer() {
        timerInterval = setInterval(() => {
            if (!recordingStartTime) return;
            
            const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
            const seconds = (elapsed % 60).toString().padStart(2, '0');
            
            elements.recordingTimer.textContent = `${minutes}:${seconds}`;
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        elements.recordingTimer.textContent = '00:00';
    }

    // =====================================================
    // RECOGNITION EVENT HANDLERS
    // =====================================================
    function handleRecognitionStart() {
        console.log('Recognition started');
    }

    function handleRecognitionResult(event) {
        interimTranscript = '';
        let newFinalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            
            if (event.results[i].isFinal) {
                newFinalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        if (newFinalTranscript) {
            currentTranscript += newFinalTranscript;
        }

        elements.currentTranscript.value = currentTranscript + interimTranscript;
    }

    function handleRecognitionError(event) {
        console.error('Recognition error:', event.error);
        
        let message = 'Error occurred';
        switch (event.error) {
            case 'no-speech':
                message = 'No speech detected. Please try again.';
                break;
            case 'audio-capture':
                message = 'No microphone found or permission denied.';
                break;
            case 'not-allowed':
                message = 'Microphone permission denied. Please enable it in browser settings.';
                break;
            case 'network':
                message = 'Network error occurred.';
                break;
            default:
                message = `Error: ${event.error}`;
        }
        
        showNotification('❌ ' + message);
        resetRecordingState();
    }

    function handleRecognitionEnd() {
        if (isRecording && !isPaused) {
            try {
                recognition.start();
            } catch (error) {
                console.error('Error restarting recognition:', error);
                resetRecordingState();
            }
        }
    }

    function handleLanguageChange() {
        if (recognition) {
            recognition.lang = elements.language.value;
            if (isRecording) {
                recognition.stop();
                setTimeout(() => recognition.start(), 100);
            }
        }
    }

    // =====================================================
    // SEGMENT RENDERING
    // =====================================================
    function renderSegments() {
        elements.segmentCount.textContent = segments.length;

        if (segments.length === 0) {
            elements.segmentsList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📝</div>
                    <h3>No recordings yet!</h3>
                    <p>Click "Start New Recording" to begin your first transcription.</p>
                    <p><strong>Remember:</strong> This tool is for non-clinical content only (presentations, educational materials, personal notes).</p>
                    <p><strong>Never use with patient data or PHI.</strong></p>
                </div>
            `;
            return;
        }

        elements.segmentsList.innerHTML = segments.map(segment => {
            const date = new Date(segment.timestamp);
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dateStr = date.toLocaleDateString();
            const durationStr = formatDuration(segment.duration);

            return `
                <div class="segment-card" data-id="${segment.id}">
                    <div class="segment-header">
                        <div class="segment-title" data-editing="false">
                            <span class="title-text">${escapeHtml(segment.title)}</span>
                        </div>
                        <div class="segment-meta">
                            <span class="segment-time">${timeStr} • ${dateStr}</span>
                            <span class="segment-time">${durationStr}</span>
                            <span class="segment-time">${segment.wordCount} words</span>
                        </div>
                    </div>
                    <div class="segment-content" data-editing="false">
                        <div class="content-text">${escapeHtml(segment.text)}</div>
                    </div>
                    <div class="segment-actions">
                        <button class="btn btn-success btn-sm copy-segment" data-id="${segment.id}">
                            📋 Copy
                        </button>
                        <button class="btn btn-primary btn-sm edit-segment" data-id="${segment.id}">
                            ✏️ Edit
                        </button>
                        <button class="btn btn-outline btn-sm export-segment" data-id="${segment.id}">
                            💾 Export
                        </button>
                        <button class="btn btn-danger btn-sm delete-segment" data-id="${segment.id}">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function handleSegmentAction(e) {
        const button = e.target.closest('button');
        if (!button) return;

        const id = parseInt(button.dataset.id);
        const segment = segments.find(s => s.id === id);
        if (!segment) return;

        if (button.classList.contains('copy-segment')) {
            copySegment(segment);
        } else if (button.classList.contains('edit-segment')) {
            toggleEditSegment(button, segment);
        } else if (button.classList.contains('export-segment')) {
            exportSegment(segment);
        } else if (button.classList.contains('delete-segment')) {
            deleteSegment(id);
        }
    }

    function toggleEditSegment(button, segment) {
        const card = button.closest('.segment-card');
        const titleDiv = card.querySelector('.segment-title');
        const contentDiv = card.querySelector('.segment-content');
        
        const isEditing = contentDiv.dataset.editing === 'true';

        if (isEditing) {
            // Save changes
            const titleInput = titleDiv.querySelector('input');
            const textArea = contentDiv.querySelector('textarea');
            
            if (titleInput && textArea) {
                segment.title = titleInput.value.trim() || segment.title;
                segment.text = textArea.value.trim();
                segment.wordCount = segment.text.split(/\s+/).length;
                
                saveSegments();
                renderSegments();
                showNotification('✓ Changes saved!');
            }
        } else {
            // Enter edit mode
            titleDiv.dataset.editing = 'true';
            titleDiv.innerHTML = `<input type="text" value="${escapeHtml(segment.title)}">`;
            
            contentDiv.dataset.editing = 'true';
            contentDiv.classList.add('editing');
            contentDiv.innerHTML = `<textarea>${escapeHtml(segment.text)}</textarea>`;
            
            button.textContent = '💾 Save';
            
            // Focus the textarea
            setTimeout(() => contentDiv.querySelector('textarea').focus(), 50);
        }
    }

    async function copySegment(segment) {
        try {
            await navigator.clipboard.writeText(segment.text);
            showNotification('✓ Copied to clipboard!');
        } catch (error) {
            console.error('Copy failed:', error);
            showNotification('❌ Failed to copy');
        }
    }

    function exportSegment(segment) {
        const content = `Title: ${segment.title}\nDate: ${new Date(segment.timestamp).toLocaleString()}\nDuration: ${formatDuration(segment.duration)}\nWord Count: ${segment.wordCount}\n\n${segment.text}`;
        
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        const filename = segment.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        link.href = url;
        link.download = `${filename}.txt`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('💾 Segment exported');
    }

    function deleteSegment(id) {
        if (!confirm('Are you sure you want to delete this segment? This cannot be undone.')) {
            return;
        }

        segments = segments.filter(s => s.id !== id);
        saveSegments();
        renderSegments();
        showNotification('🗑️ Segment deleted');
    }

    function exportAllSegments() {
        if (segments.length === 0) {
            showNotification('⚠️ No segments to export');
            return;
        }

        let content = `Batch Transcription Export\nTotal Segments: ${segments.length}\nExported: ${new Date().toLocaleString()}\n\n`;
        content += '='.repeat(80) + '\n\n';

        segments.forEach((segment, index) => {
            content += `[${index + 1}] ${segment.title}\n`;
            content += `Date: ${new Date(segment.timestamp).toLocaleString()}\n`;
            content += `Duration: ${formatDuration(segment.duration)} | Words: ${segment.wordCount}\n`;
            content += '-'.repeat(80) + '\n';
            content += segment.text + '\n\n';
            content += '='.repeat(80) + '\n\n';
        });

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        link.href = url;
        link.download = `batch_transcription_${timestamp}.txt`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('💾 All segments exported');
    }

    function clearAllSegments() {
        if (!confirm(`Are you sure you want to delete all ${segments.length} segments? This cannot be undone.`)) {
            return;
        }

        segments = [];
        saveSegments();
        renderSegments();
        showNotification('🗑️ All segments cleared');
    }

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================
    function updateStatus(type, text) {
        elements.statusIndicator.className = `status-indicator ${type}`;
        elements.statusText.textContent = text;
    }

    function formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showNotification(message) {
        elements.notificationText.textContent = message;
        elements.notification.classList.add('show');
        
        setTimeout(() => {
            elements.notification.classList.remove('show');
        }, 3000);
    }

    // =====================================================
    // START APPLICATION
    // =====================================================
    document.addEventListener('DOMContentLoaded', init);
</script>
