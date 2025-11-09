---
layout: page
title: Speech-to-Text Transcription Tool
description: Privacy-first speech-to-text tool for physicians. Dictate notes, presentations, or documentation directly in your browser—100% client-side, no data sent to servers.
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

    #transcript {
        width: 100%;
        min-height: 400px;
        padding: 20px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 1em;
        line-height: 1.8;
        resize: vertical;
        transition: border-color 0.2s;
    }

    #transcript:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    #transcript.listening {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }

    .interim-text {
        color: #999;
        font-style: italic;
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
        <h1>Speech-to-Text Transcription Tool</h1>
        <p>Privacy-first dictation tool for physicians is the goal. A work in progress.</p>
        
        <div class="privacy-banner">
            <span class="privacy-icon">🔒</span>
            <div class="privacy-text">
                <strong>100% Still in process</strong> Powered by your Device's Speech to Text API.  NOTE: Like the rest of this site this is currently in BETA.  Do not share any patient or senstive informstion.
            </div>
        </div>
    </div>

    <div class="browser-support-warning" id="browserWarning">
        <strong>⚠️ Browser Compatibility Notice:</strong> This tool works best in Google Chrome, Microsoft Edge, or Safari. Firefox does not currently support the Web Speech API. If you're experiencing issues, please try Chrome or Edge.
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
                🎤 Start Recording
            </button>
            <button id="pauseBtn" class="btn btn-secondary" disabled>
                ⏸️ Pause
            </button>
            <button id="stopBtn" class="btn btn-danger" disabled>
                ⏹️ Stop
            </button>
        </div>
    </div>

    <div class="editor-panel">
        <div class="editor-header">
            <h2>Transcript</h2>
            <div class="editor-actions">
                <span class="word-count" id="wordCount">0 words</span>
                <button id="copyBtn" class="btn btn-success btn-sm">
                    📋 Copy Text
                </button>
                <button id="downloadBtn" class="btn btn-outline btn-sm">
                    💾 Download
                </button>
                <button id="clearBtn" class="btn btn-secondary btn-sm">
                    🗑️ Clear
                </button>
            </div>
        </div>

        <textarea id="transcript" placeholder="Your transcription will appear here. Click 'Start Recording' and begin speaking..."></textarea>
    </div>

    <div class="tips-panel">
        <h3>💡 Tips for Best Results</h3>
        <div class="tips-grid">
            <div class="tip-item">
                <strong>Use a Quality Microphone</strong>
                <p>External microphones or headsets provide clearer audio than built-in laptop mics.</p>
            </div>
            <div class="tip-item">
                <strong>Minimize Background Noise</strong>
                <p>Find a quiet environment for more accurate transcription results.</p>
            </div>
            <div class="tip-item">
                <strong>Speak Clearly & Naturally</strong>
                <p>Normal speaking pace works best. No need to speak slowly or over-enunciate.</p>
            </div>
            <div class="tip-item">
                <strong>Say Punctuation</strong>
                <p>Say "period," "comma," "question mark," or "new paragraph" to add punctuation.</p>
            </div>
            <div class="tip-item">
                <strong>Edit as You Go</strong>
                <p>You can edit the text directly in the transcript box while recording continues.</p>
            </div>
            <div class="tip-item">
                <strong>Grant Microphone Permission</strong>
                <p>Your browser will ask for microphone access.  None of the data is sent to this site but how your device API handles the information is dependnet on your device.  No patient information should be shared.</p>
            </div>
        </div>
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
    // SPEECH RECOGNITION SETUP
    // =====================================================
    let recognition = null;
    let isRecording = false;
    let isPaused = false;
    let finalTranscript = '';
    let interimTranscript = '';

    // DOM Elements
    const elements = {
        transcript: document.getElementById('transcript'),
        startBtn: document.getElementById('startBtn'),
        pauseBtn: document.getElementById('pauseBtn'),
        stopBtn: document.getElementById('stopBtn'),
        copyBtn: document.getElementById('copyBtn'),
        downloadBtn: document.getElementById('downloadBtn'),
        clearBtn: document.getElementById('clearBtn'),
        language: document.getElementById('language'),
        punctuation: document.getElementById('punctuation'),
        statusIndicator: document.getElementById('statusIndicator'),
        statusText: document.getElementById('statusText'),
        wordCount: document.getElementById('wordCount'),
        notification: document.getElementById('notification'),
        notificationText: document.getElementById('notificationText'),
        browserWarning: document.getElementById('browserWarning')
    };

    // =====================================================
    // INITIALIZATION
    // =====================================================
    function init() {
        checkBrowserSupport();
        attachEventListeners();
        updateWordCount();
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

        // Event handlers
        recognition.onstart = handleRecognitionStart;
        recognition.onresult = handleRecognitionResult;
        recognition.onerror = handleRecognitionError;
        recognition.onend = handleRecognitionEnd;

        return true;
    }

    function attachEventListeners() {
        elements.startBtn.addEventListener('click', startRecording);
        elements.pauseBtn.addEventListener('click', pauseRecording);
        elements.stopBtn.addEventListener('click', stopRecording);
        elements.copyBtn.addEventListener('click', copyToClipboard);
        elements.downloadBtn.addEventListener('click', downloadTranscript);
        elements.clearBtn.addEventListener('click', clearTranscript);
        elements.transcript.addEventListener('input', updateWordCount);
        elements.language.addEventListener('change', handleLanguageChange);
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
            
            elements.startBtn.disabled = true;
            elements.pauseBtn.disabled = false;
            elements.stopBtn.disabled = false;
            
            updateStatus('listening', 'Recording...');
            elements.transcript.classList.add('listening');
            
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
            
            elements.startBtn.disabled = false;
            elements.pauseBtn.disabled = true;
            elements.startBtn.innerHTML = '▶️ Resume';
            
            updateStatus('paused', 'Paused');
            elements.transcript.classList.remove('listening');
            
            showNotification('⏸️ Recording paused');
        } catch (error) {
            console.error('Error pausing recognition:', error);
        }
    }

    function stopRecording() {
        if (!isRecording && !isPaused) return;

        try {
            recognition.stop();
            isRecording = false;
            isPaused = false;
            
            elements.startBtn.disabled = false;
            elements.pauseBtn.disabled = true;
            elements.stopBtn.disabled = true;
            elements.startBtn.innerHTML = '🎤 Start Recording';
            
            updateStatus('ready', 'Ready');
            elements.transcript.classList.remove('listening');
            
            showNotification('⏹️ Recording stopped');
        } catch (error) {
            console.error('Error stopping recognition:', error);
        }
    }

    // =====================================================
    // RECOGNITION EVENT HANDLERS
    // =====================================================
    function handleRecognitionStart() {
        console.log('Recognition started');
    }

    function handleRecognitionResult(event) {
        interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            
            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        // Update the textarea with both final and interim results
        const currentText = elements.transcript.value;
        const cursorPos = elements.transcript.selectionStart;
        
        // If user hasn't manually edited, update with speech results
        if (currentText === finalTranscript.trim() + interimTranscript || currentText === finalTranscript.trim()) {
            elements.transcript.value = finalTranscript.trim() + (interimTranscript ? ' ' + interimTranscript : '');
            updateWordCount();
        } else {
            // User has edited, append new speech at cursor position
            const before = currentText.substring(0, cursorPos);
            const after = currentText.substring(cursorPos);
            elements.transcript.value = before + finalTranscript.substring(before.length) + interimTranscript + after;
            updateWordCount();
        }
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
        stopRecording();
    }

    function handleRecognitionEnd() {
        if (isRecording && !isPaused) {
            // Automatically restart if we're supposed to be recording
            try {
                recognition.start();
            } catch (error) {
                console.error('Error restarting recognition:', error);
                stopRecording();
            }
        }
    }

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================
    function handleLanguageChange() {
        if (recognition) {
            recognition.lang = elements.language.value;
            if (isRecording) {
                recognition.stop();
                setTimeout(() => {
                    recognition.start();
                }, 100);
            }
        }
    }

    function updateStatus(type, text) {
        elements.statusIndicator.className = `status-indicator ${type}`;
        elements.statusText.textContent = text;
    }

    function updateWordCount() {
        const text = elements.transcript.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        elements.wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
    }

    async function copyToClipboard() {
        const text = elements.transcript.value;
        
        if (!text) {
            showNotification('⚠️ Nothing to copy');
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            showNotification('✓ Copied to clipboard!');
        } catch (error) {
            console.error('Copy failed:', error);
            
            // Fallback method
            elements.transcript.select();
            document.execCommand('copy');
            showNotification('✓ Copied to clipboard!');
        }
    }

    function downloadTranscript() {
        const text = elements.transcript.value;
        
        if (!text) {
            showNotification('⚠️ Nothing to download');
            return;
        }

        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        link.href = url;
        link.download = `transcript_${timestamp}.txt`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('💾 Transcript downloaded');
    }

    function clearTranscript() {
        if (elements.transcript.value && !confirm('Are you sure you want to clear the transcript? This cannot be undone.')) {
            return;
        }

        elements.transcript.value = '';
        finalTranscript = '';
        interimTranscript = '';
        updateWordCount();
        showNotification('🗑️ Transcript cleared');
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
