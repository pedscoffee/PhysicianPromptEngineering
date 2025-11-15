---
layout: page
title: "Doc Pixel's Librarian"
description: Upload and analyze research papers and clinical guidelines with AI-powered summaries, Q&A, and interactive case generation. Educational tool only.
permalink: /paper-librarian/
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
        max-width: 1400px;
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
        margin-bottom: 15px;
        color: #2a7ae2;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .header p {
        color: #666;
        font-size: 1.05em;
        margin-bottom: 10px;
        line-height: 1.8;
    }

    .privacy-highlight {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #059669;
        font-weight: 500;
        font-size: 1.1em;
        margin-top: 15px;
        padding: 15px;
        background: #d1fae5;
        border-radius: 6px;
        border-left: 4px solid #059669;
    }

    .warning-box {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left: 4px solid #f59e0b;
        padding: 20px;
        border-radius: 6px;
        margin-bottom: 30px;
    }

    .warning-box h3 {
        color: #92400e;
        margin-bottom: 12px;
        font-size: 1.1em;
    }

    .warning-box ul {
        margin-left: 20px;
        color: #78350f;
    }

    .warning-box li {
        margin-bottom: 6px;
    }

    .warning-box strong {
        color: #92400e;
    }

    .status-panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
    }

    .status-panel.loading {
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    }

    .status-panel.ready {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    }

    .status-panel.error {
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    }

    #status-message {
        font-size: 1.1em;
        margin-bottom: 15px;
        font-weight: 500;
    }

    #status-details {
        font-size: 0.95em;
        color: #666;
        margin-top: 10px;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 15px;
        display: none;
    }

    .progress-bar.active {
        display: block;
    }

    .progress-fill {
        height: 100%;
        background: #2a7ae2;
        width: 0%;
        transition: width 0.3s ease;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-block;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5bb8;
    }

    .btn-secondary {
        background: #6b7280;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #4b5563;
    }

    .btn-success {
        background: #059669;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #047857;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    /* Upload Section */
    .upload-section {
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .upload-section.hidden {
        display: none;
    }

    .upload-area {
        border: 3px dashed #d1d5db;
        border-radius: 8px;
        padding: 40px;
        text-align: center;
        transition: all 0.3s;
        cursor: pointer;
        background: #f9fafb;
    }

    .upload-area:hover {
        border-color: #2a7ae2;
        background: #eff6ff;
    }

    .upload-area.dragover {
        border-color: #2a7ae2;
        background: #dbeafe;
    }

    #file-input {
        display: none;
    }

    /* Main Content Grid */
    .main-content {
        display: none;
    }

    .main-content.active {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
        margin-bottom: 30px;
    }

    @media (max-width: 1024px) {
        .main-content.active {
            grid-template-columns: 1fr;
        }
    }

    /* Sidebar */
    .sidebar {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        height: fit-content;
        position: sticky;
        top: 20px;
    }

    .sidebar h3 {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2a7ae2;
    }

    .paper-info {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e7eb;
    }

    .paper-info p {
        font-size: 0.9em;
        color: #666;
        margin-bottom: 8px;
    }

    .paper-info strong {
        color: #333;
    }

    .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .action-btn {
        padding: 10px 15px;
        border: none;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
        background: #f3f4f6;
        color: #374151;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .action-btn:hover:not(:disabled) {
        background: #e5e7eb;
    }

    .action-btn.active {
        background: #2a7ae2;
        color: white;
    }

    .action-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Content Area */
    .content-area {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        min-height: 500px;
    }

    .content-section {
        display: none;
    }

    .content-section.active {
        display: block;
    }

    .content-section h2 {
        color: #2a7ae2;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e5e7eb;
    }

    /* Summary Section */
    .summary-content {
        line-height: 1.8;
    }

    .summary-content h3 {
        color: #1e40af;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .summary-content ul, .summary-content ol {
        margin-left: 20px;
        margin-bottom: 15px;
    }

    .summary-content li {
        margin-bottom: 8px;
    }

    .summary-loading {
        text-align: center;
        padding: 40px;
        color: #666;
    }

    /* Chat Interface */
    .chat-container {
        display: flex;
        flex-direction: column;
        height: 600px;
    }

    .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        background: #f9fafb;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .message {
        margin-bottom: 20px;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .message-label {
        font-size: 0.85em;
        font-weight: 600;
        margin-bottom: 5px;
        color: #6b7280;
    }

    .message-bubble {
        padding: 12px 16px;
        border-radius: 8px;
        line-height: 1.6;
    }

    .message-user .message-bubble {
        background: #2a7ae2;
        color: white;
        margin-left: 20%;
    }

    .message-assistant .message-bubble {
        background: white;
        color: #333;
        border: 1px solid #e5e7eb;
        margin-right: 20%;
    }

    .chat-input-area {
        display: flex;
        gap: 10px;
    }

    #chat-input {
        flex: 1;
        padding: 12px;
        border: 2px solid #d1d5db;
        border-radius: 6px;
        font-size: 1em;
        resize: none;
        font-family: inherit;
    }

    #chat-input:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .typing-indicator {
        display: none;
        padding: 10px;
        color: #666;
        font-style: italic;
    }

    .typing-indicator.active {
        display: block;
    }

    .empty-chat {
        text-align: center;
        padding: 60px 20px;
        color: #9ca3af;
    }

    .empty-chat svg {
        margin-bottom: 15px;
        color: #d1d5db;
    }

    /* Discussion Questions */
    .question-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .question-card {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 20px;
        background: #f9fafb;
    }

    .question-card h4 {
        color: #1e40af;
        margin-bottom: 10px;
    }

    .question-answer {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #e5e7eb;
        display: none;
    }

    .question-answer.active {
        display: block;
    }

    .toggle-answer-btn {
        margin-top: 10px;
        padding: 6px 12px;
        background: #2a7ae2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
    }

    .toggle-answer-btn:hover {
        background: #1e5bb8;
    }

    /* Patient Cases */
    .case-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .case-card {
        border: 2px solid #d1d5db;
        border-radius: 8px;
        padding: 25px;
        background: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .case-card:hover {
        border-color: #2a7ae2;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .case-card h4 {
        color: #1e40af;
        margin-bottom: 15px;
    }

    .case-preview {
        color: #666;
        line-height: 1.6;
    }

    .case-walkthrough {
        display: none;
    }

    .case-walkthrough.active {
        display: block;
    }

    /* Export Button */
    .export-section {
        margin-top: 30px;
        padding-top: 20px;
        border-top: 2px solid #e5e7eb;
        text-align: center;
    }

    .info-box {
        background: #eff6ff;
        border-left: 4px solid #2a7ae2;
        padding: 20px;
        border-radius: 6px;
        margin-top: 20px;
    }

    .info-box h4 {
        color: #1e40af;
        margin-bottom: 10px;
    }

    .info-box ul {
        margin-left: 20px;
        color: #1e3a8a;
    }

    .info-box li {
        margin-bottom: 6px;
    }

    .generate-btn-container {
        text-align: center;
        padding: 30px;
    }

    /* Banner Image */
    .banner-image {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto 30px auto;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .banner-image img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
    }
</style>

<!-- Banner Image -->
<div class="banner-image">
    <img src="{{ '/images/Dox Pixels librarian.jpg' | relative_url }}" alt="Doc Pixel's Librarian">
</div>

<div class="container">
    <div class="header">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 36px; height: 36px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            Doc Pixel's Librarian
        </h1>
        <p>Upload research papers and clinical guidelines for AI-powered analysis. Get summaries, ask questions, generate discussion points, and create interactive patient cases based on the literature.</p>
        <div class="privacy-highlight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            100% Private: All processing happens in your browser. No uploads to servers.
        </div>
    </div>

    <div class="warning-box">
        <h3>Educational Tool Only - Important Disclaimers</h3>
        <ul>
            <li><strong>Not for clinical decisions:</strong> This tool is for educational exploration only. All clinical decisions require professional judgment and verification of primary sources.</li>
            <li><strong>AI limitations:</strong> AI may misinterpret, hallucinate, or miss critical details. Always verify information against the original paper.</li>
            <li><strong>No data persistence:</strong> Papers and analyses are NOT saved between sessions. Export important content before closing.</li>
            <li><strong>First use takes 5-15 minutes:</strong> AI model downloads to your browser once, then loads instantly.</li>
            <li><strong>Browser requirements:</strong> Chrome/Edge 113+ with WebGPU support required.</li>
        </ul>
    </div>

    <!-- Status Panel -->
    <div id="status-panel" class="status-panel">
        <div id="status-message">Click "Initialize AI" to begin</div>
        <div id="status-details">Models are cached locally for instant loading on future visits.</div>
        <div id="progress-bar" class="progress-bar">
            <div id="progress-fill" class="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary" onclick="initializeAI()" style="margin-top: 20px;">
            Initialize AI
        </button>
    </div>

    <!-- Upload Section -->
    <div id="upload-section" class="upload-section hidden">
        <h2 style="margin-bottom: 20px; color: #2a7ae2;">Upload Research Paper or Clinical Guideline</h2>
        <div class="upload-area" id="upload-area">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto 20px auto; color: #9ca3af;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <h3>Drag & Drop PDF Here</h3>
            <p style="color: #6b7280; margin: 10px 0;">or</p>
            <button class="btn btn-primary" onclick="document.getElementById('file-input').click()">
                Choose PDF File
            </button>
            <p style="color: #9ca3af; font-size: 0.9em; margin-top: 15px;">Supported: PDF files up to 50MB</p>
        </div>
        <input type="file" id="file-input" accept=".pdf" onchange="handleFileSelect(event)">
    </div>

    <!-- Main Content -->
    <div id="main-content" class="main-content">
        <!-- Sidebar -->
        <div class="sidebar">
            <h3>Paper Info</h3>
            <div class="paper-info">
                <p><strong>File:</strong> <span id="paper-filename">-</span></p>
                <p><strong>Pages:</strong> <span id="paper-pages">-</span></p>
                <p><strong>Words:</strong> <span id="paper-words">-</span></p>
            </div>

            <h3 style="margin-top: 20px;">🔧 Actions</h3>
            <div class="action-buttons">
                <button class="action-btn active" onclick="showSection('summary')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    Summary
                </button>
                <button class="action-btn" onclick="showSection('chat')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    Ask Questions
                </button>
                <button class="action-btn" onclick="showSection('discussion')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    Discussion Questions
                </button>
                <button class="action-btn" onclick="showSection('cases')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    Patient Cases
                </button>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <button class="btn btn-secondary btn-sm" onclick="uploadNewPaper()" style="width: 100%;">
                    Upload New Paper
                </button>
            </div>
        </div>

        <!-- Content Area -->
        <div class="content-area">
            <!-- Summary Section -->
            <div id="summary-section" class="content-section active">
                <h2>📋 Paper Summary</h2>
                <div id="summary-content" class="summary-content">
                    <div class="summary-loading">
                        <p>Generating comprehensive summary...</p>
                        <p style="font-size: 0.9em; color: #9ca3af; margin-top: 10px;">This may take 1-2 minutes</p>
                    </div>
                </div>
                <div class="export-section">
                    <button class="btn btn-success" onclick="exportSummary()" id="export-summary-btn" disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 18px; height: 18px; display: inline-block; vertical-align: middle; margin-right: 6px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Export Summary as Markdown
                    </button>
                </div>
            </div>

            <!-- Chat Section -->
            <div id="chat-section" class="content-section">
                <h2>💬 Ask Questions</h2>
                <div class="chat-container">
                    <div id="chat-messages" class="chat-messages">
                        <div class="empty-chat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>
                            <p style="margin-top: 15px;">Ask anything about the paper!</p>
                        </div>
                    </div>
                    <div class="typing-indicator" id="typing-indicator">
                        AI is thinking...
                    </div>
                    <div class="chat-input-area">
                        <textarea id="chat-input" rows="3" placeholder="Ask a question about the paper..."></textarea>
                        <button class="btn btn-primary" onclick="sendChatMessage()" id="send-btn">
                            Send
                        </button>
                    </div>
                </div>
                <div class="export-section">
                    <button class="btn btn-success btn-sm" onclick="exportChat()">
                        Export Q&A as Markdown
                    </button>
                </div>
            </div>

            <!-- Discussion Questions Section -->
            <div id="discussion-section" class="content-section">
                <h2>🤔 Discussion Questions</h2>
                <p style="color: #666; margin-bottom: 20px;">AI-generated discussion questions to deepen understanding of this paper.</p>
                <div class="generate-btn-container">
                    <button class="btn btn-primary" onclick="generateDiscussionQuestions()" id="generate-discussion-btn">
                        Generate Discussion Questions
                    </button>
                </div>
                <div id="discussion-content" class="question-list"></div>
                <div class="export-section" id="discussion-export" style="display: none;">
                    <button class="btn btn-success btn-sm" onclick="exportDiscussion()">
                        Export Questions as Markdown
                    </button>
                </div>
            </div>

            <!-- Patient Cases Section -->
            <div id="cases-section" class="content-section">
                <h2>🩺 Interactive Patient Cases</h2>
                <p style="color: #666; margin-bottom: 20px;">AI-generated patient cases based on the paper's content. Click a case to explore it interactively.</p>
                <div class="generate-btn-container">
                    <button class="btn btn-primary" onclick="generatePatientCases()" id="generate-cases-btn">
                        Generate Patient Cases
                    </button>
                </div>
                <div id="cases-content" class="case-list"></div>
                <div id="case-walkthrough" class="case-walkthrough"></div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let llmEngine = null;
    let paperText = '';
    let paperMetadata = {};
    let summaryText = '';
    let chatHistory = [];
    let discussionQuestions = [];
    let patientCases = [];
    const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";

    // Configure PDF.js worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    // =====================================================
    // AI INITIALIZATION
    // =====================================================
    window.initializeAI = async function() {
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = 'Loading AI model...';
        statusDetails.textContent = 'This may take 5-15 minutes on first use. Models are cached for instant loading next time.';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            llmEngine = await CreateMLCEngine(
                LLM_MODEL,
                {
                    initProgressCallback: (progress) => {
                        const percent = (progress.progress * 100).toFixed(1);
                        progressFill.style.width = `${percent}%`;
                        statusMessage.textContent = `Loading: ${percent}%`;
                        statusDetails.textContent = progress.text;
                    }
                }
            );

            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = 'AI Ready!';
            statusDetails.textContent = 'Upload a PDF to begin analysis';
            progressBar.classList.remove('active');

            setTimeout(() => {
                document.getElementById('upload-section').classList.remove('hidden');
                statusPanel.style.display = 'none';
            }, 1500);

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = 'Failed to load AI model';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Try:</strong> Chrome/Edge 113+ on desktop, or refresh the page
            `;
            console.error('Initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }
    };

    // =====================================================
    // PDF UPLOAD & EXTRACTION
    // =====================================================
    window.handleFileSelect = async function(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            alert('Please upload a PDF file');
            return;
        }

        if (file.size > 50 * 1024 * 1024) {
            alert('File too large. Please upload a PDF under 50MB');
            return;
        }

        await processPDF(file);
    };

    async function processPDF(file) {
        const uploadSection = document.getElementById('upload-section');
        uploadSection.innerHTML = '<div style="text-align: center; padding: 40px;"><h3>Processing PDF...</h3><p>Extracting text from document</p></div>';

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

            let fullText = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                fullText += pageText + '\n\n';
            }

            paperText = fullText;
            const wordCount = fullText.split(/\s+/).filter(word => word.length > 0).length;

            paperMetadata = {
                filename: file.name,
                pages: pdf.numPages,
                words: wordCount
            };

            // Update UI
            document.getElementById('paper-filename').textContent = file.name;
            document.getElementById('paper-pages').textContent = pdf.numPages;
            document.getElementById('paper-words').textContent = wordCount.toLocaleString();

            // Hide upload, show main content
            uploadSection.style.display = 'none';
            document.getElementById('main-content').classList.add('active');

            // Generate summary automatically
            await generateSummary();

        } catch (error) {
            console.error('PDF processing error:', error);
            alert('Error processing PDF: ' + error.message);
            uploadSection.innerHTML = '<div style="text-align: center; padding: 40px;"><h3>Error processing PDF</h3><p>' + error.message + '</p><button class="btn btn-primary" onclick="location.reload()">Try Again</button></div>';
        }
    }

    // Drag and drop handlers
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) {
                document.getElementById('file-input').files = e.dataTransfer.files;
                handleFileSelect({ target: { files: [file] } });
            }
        });

        uploadArea.addEventListener('click', () => {
            document.getElementById('file-input').click();
        });
    }

    // =====================================================
    // SUMMARY GENERATION
    // =====================================================
    async function generateSummary() {
        const summaryContent = document.getElementById('summary-content');
        summaryContent.innerHTML = '<div class="summary-loading"><p>Generating comprehensive summary...</p><p style="font-size: 0.9em; color: #9ca3af; margin-top: 10px;">This may take 1-2 minutes</p></div>';

        try {
            // Limit paper text to avoid context window issues (roughly 3000 words = ~4000 tokens)
            const maxChars = 12000;
            const truncatedText = paperText.substring(0, maxChars);

            const prompt = `You are analyzing a research paper or clinical guideline. Provide a comprehensive summary with the following sections:

# Summary

## Key Points
[3-5 main takeaways as bullet points]

## Background & Context
[Brief context and why this paper matters]

## Methods (if applicable)
[Study design, population, interventions]

## Main Findings
[Core results and conclusions]

## Clinical Implications
[How this impacts clinical practice]

## Limitations
[Key limitations to consider]

## Bottom Line
[One sentence summary for busy clinicians]

Paper text:
${truncatedText}

Provide the summary in markdown format. Be concise but comprehensive.`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 1500
            });

            summaryText = response.choices[0].message.content;
            summaryContent.innerHTML = renderMarkdown(summaryText);
            document.getElementById('export-summary-btn').disabled = false;

        } catch (error) {
            console.error('Summary generation error:', error);
            summaryContent.innerHTML = '<p style="color: #ef4444;">Error generating summary. Please try refreshing the page.</p>';
        }
    }

    // =====================================================
    // CHAT INTERFACE
    // =====================================================
    window.sendChatMessage = async function() {
        const input = document.getElementById('chat-input');
        const question = input.value.trim();
        if (!question) return;

        input.value = '';
        addChatMessage('user', question);
        document.getElementById('typing-indicator').classList.add('active');
        document.getElementById('send-btn').disabled = true;

        try {
            // Limit context to avoid exceeding window (roughly 2500 words)
            const maxChars = 10000;
            const truncatedPaper = paperText.substring(0, maxChars);

            const contextPrompt = `You are helping a user understand a research paper or clinical guideline. Answer their question based on the paper content. Be accurate, cite specific findings, and note if information isn't in the paper.

Paper excerpt:
${truncatedPaper}

User question: ${question}

Provide a clear, helpful answer.`;

            const response = await llmEngine.chat.completions.create({
                messages: [
                    { role: 'user', content: contextPrompt }
                ],
                temperature: 0.7,
                max_tokens: 800,
                stream: true
            });

            document.getElementById('typing-indicator').classList.remove('active');

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">AI Assistant</div>
                <div class="message-bubble" id="streaming-bubble"></div>
            `;
            document.getElementById('chat-messages').appendChild(messageDiv);

            let fullResponse = '';
            const streamingBubble = document.getElementById('streaming-bubble');

            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.innerHTML = renderMarkdown(fullResponse);
                scrollChatToBottom();
            }

            streamingBubble.id = '';

            chatHistory.push(
                { role: 'user', content: question },
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            addChatMessage('assistant', 'Sorry, I encountered an error. Please try again.');
            console.error('Chat error:', error);
        }

        document.getElementById('send-btn').disabled = false;
        input.focus();
    };

    function addChatMessage(role, content) {
        const messagesDiv = document.getElementById('chat-messages');
        const emptyChat = messagesDiv.querySelector('.empty-chat');
        if (emptyChat) emptyChat.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${role}`;

        const label = role === 'user' ? 'You' : 'AI Assistant';
        const formattedContent = role === 'assistant' ? renderMarkdown(content) : escapeHtml(content);

        messageDiv.innerHTML = `
            <div class="message-label">${label}</div>
            <div class="message-bubble">${formattedContent}</div>
        `;

        messagesDiv.appendChild(messageDiv);
        scrollChatToBottom();
    }

    function scrollChatToBottom() {
        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Enter to send
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('chat-input');
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendChatMessage();
                }
            });
        }
    });

    // =====================================================
    // DISCUSSION QUESTIONS
    // =====================================================
    window.generateDiscussionQuestions = async function() {
        const btn = document.getElementById('generate-discussion-btn');
        const content = document.getElementById('discussion-content');

        btn.disabled = true;
        btn.textContent = 'Generating Questions...';
        content.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Generating discussion questions...</div>';

        try {
            // Limit context to avoid window overflow
            const maxChars = 10000;
            const truncatedPaper = paperText.substring(0, maxChars);

            const prompt = `Based on this research paper or clinical guideline, generate 5 thought-provoking discussion questions for medical education. For each question, provide a comprehensive answer.

Format as:
Q1: [Question]
A1: [Answer]

Q2: [Question]
A2: [Answer]

... etc

Paper excerpt:
${truncatedPaper}

Generate questions that promote critical thinking about methodology, clinical application, limitations, and future directions.`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.8,
                max_tokens: 2000
            });

            const text = response.choices[0].message.content;
            parseDiscussionQuestions(text);

        } catch (error) {
            console.error('Discussion generation error:', error);
            content.innerHTML = '<p style="color: #ef4444;">Error generating questions. Please try again.</p>';
            btn.disabled = false;
            btn.textContent = 'Generate Discussion Questions';
        }
    };

    function parseDiscussionQuestions(text) {
        const content = document.getElementById('discussion-content');
        const btn = document.getElementById('generate-discussion-btn');

        // Parse Q/A pairs
        const lines = text.split('\n');
        discussionQuestions = [];
        let currentQ = null;
        let currentA = '';

        lines.forEach(line => {
            if (line.match(/^Q\d+:/)) {
                if (currentQ) {
                    discussionQuestions.push({ question: currentQ, answer: currentA.trim() });
                }
                currentQ = line.replace(/^Q\d+:\s*/, '');
                currentA = '';
            } else if (line.match(/^A\d+:/)) {
                currentA = line.replace(/^A\d+:\s*/, '');
            } else if (currentA !== '' && line.trim()) {
                currentA += ' ' + line.trim();
            }
        });

        if (currentQ) {
            discussionQuestions.push({ question: currentQ, answer: currentA.trim() });
        }

        // Render questions
        content.innerHTML = '';
        discussionQuestions.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.innerHTML = `
                <h4>Question ${index + 1}</h4>
                <p>${item.question}</p>
                <button class="toggle-answer-btn" onclick="toggleAnswer(${index})">Show Answer</button>
                <div class="question-answer" id="answer-${index}">
                    ${renderMarkdown(item.answer)}
                </div>
            `;
            content.appendChild(card);
        });

        btn.style.display = 'none';
        document.getElementById('discussion-export').style.display = 'block';
    }

    window.toggleAnswer = function(index) {
        const answer = document.getElementById(`answer-${index}`);
        const btn = event.target;

        if (answer.classList.contains('active')) {
            answer.classList.remove('active');
            btn.textContent = 'Show Answer';
        } else {
            answer.classList.add('active');
            btn.textContent = 'Hide Answer';
        }
    };

    // =====================================================
    // PATIENT CASES
    // =====================================================
    window.generatePatientCases = async function() {
        const btn = document.getElementById('generate-cases-btn');
        const content = document.getElementById('cases-content');

        btn.disabled = true;
        btn.textContent = 'Generating Cases...';
        content.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Generating patient cases...</div>';

        try {
            // Limit context to avoid window overflow
            const maxChars = 10000;
            const truncatedPaper = paperText.substring(0, maxChars);

            const prompt = `Based on this research paper or clinical guideline, create 3 realistic patient cases that illustrate key concepts. Each case should include:

1. Patient presentation (age, chief complaint, brief history)
2. Physical exam findings
3. Initial workup results
4. Key teaching points from the paper

Format each case clearly with headings. Make cases clinically realistic and educational.

Paper excerpt:
${truncatedPaper}`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.8,
                max_tokens: 2000
            });

            const text = response.choices[0].message.content;
            parsePatientCases(text);

        } catch (error) {
            console.error('Case generation error:', error);
            content.innerHTML = '<p style="color: #ef4444;">Error generating cases. Please try again.</p>';
            btn.disabled = false;
            btn.textContent = 'Generate Patient Cases';
        }
    };

    function parsePatientCases(text) {
        const content = document.getElementById('cases-content');
        const btn = document.getElementById('generate-cases-btn');

        // Split into cases (look for Case 1, Case 2, etc.)
        const caseParts = text.split(/Case \d+:/i);
        patientCases = caseParts.slice(1).map((caseText, index) => {
            const lines = caseText.trim().split('\n');
            const title = lines[0].trim() || `Case ${index + 1}`;
            const preview = caseText.substring(0, 200) + '...';
            return { title, fullText: caseText.trim(), preview };
        });

        // Render case cards
        content.innerHTML = '';
        patientCases.forEach((caseItem, index) => {
            const card = document.createElement('div');
            card.className = 'case-card';
            card.innerHTML = `
                <h4>${caseItem.title}</h4>
                <div class="case-preview">${caseItem.preview}</div>
            `;
            card.onclick = () => openCaseWalkthrough(index);
            content.appendChild(card);
        });

        btn.style.display = 'none';
    }

    function openCaseWalkthrough(caseIndex) {
        const caseItem = patientCases[caseIndex];
        const walkthrough = document.getElementById('case-walkthrough');

        walkthrough.innerHTML = `
            <div style="background: white; border: 2px solid #2a7ae2; border-radius: 8px; padding: 30px; margin-top: 30px;">
                <h3 style="color: #2a7ae2; margin-bottom: 20px;">${caseItem.title}</h3>
                ${renderMarkdown(caseItem.fullText)}
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                    <h4 style="margin-bottom: 15px;">💬 Discuss This Case</h4>
                    <div id="case-chat-${caseIndex}" style="background: #f9fafb; border-radius: 8px; padding: 20px; min-height: 200px; max-height: 400px; overflow-y: auto; margin-bottom: 15px;">
                        <p style="color: #666; text-align: center;">Ask questions about this case, explore differential diagnosis, or discuss management...</p>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <input type="text" id="case-input-${caseIndex}" placeholder="Ask about this case..." style="flex: 1; padding: 10px; border: 2px solid #d1d5db; border-radius: 6px;">
                        <button class="btn btn-primary" onclick="askAboutCase(${caseIndex})">Ask</button>
                    </div>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-secondary" onclick="closeCaseWalkthrough()">Close Case</button>
                </div>
            </div>
        `;

        walkthrough.classList.add('active');
        walkthrough.scrollIntoView({ behavior: 'smooth' });
    }

    window.askAboutCase = async function(caseIndex) {
        const input = document.getElementById(`case-input-${caseIndex}`);
        const question = input.value.trim();
        if (!question) return;

        const chat = document.getElementById(`case-chat-${caseIndex}`);
        const caseItem = patientCases[caseIndex];

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.style.cssText = 'background: #2a7ae2; color: white; padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; margin-left: 20%;';
        userMsg.textContent = question;
        chat.appendChild(userMsg);

        input.value = '';
        input.disabled = true;

        try {
            // Limit context to avoid window overflow
            const maxChars = 6000;
            const truncatedPaper = paperText.substring(0, maxChars);

            const prompt = `You are discussing a clinical case with a learner. Answer their question about this case, helping them think through clinical reasoning.

Case:
${caseItem.fullText}

Related paper context:
${truncatedPaper}

Question: ${question}

Provide a helpful, educational response that encourages clinical thinking.`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 600
            });

            const answer = response.choices[0].message.content;

            const aiMsg = document.createElement('div');
            aiMsg.style.cssText = 'background: white; border: 1px solid #e5e7eb; padding: 10px 15px; border-radius: 8px; margin-bottom: 10px; margin-right: 20%;';
            aiMsg.innerHTML = renderMarkdown(answer);
            chat.appendChild(aiMsg);

            chat.scrollTop = chat.scrollHeight;

        } catch (error) {
            console.error('Case chat error:', error);
            alert('Error processing question. Please try again.');
        }

        input.disabled = false;
        input.focus();
    };

    window.closeCaseWalkthrough = function() {
        document.getElementById('case-walkthrough').classList.remove('active');
        document.getElementById('case-walkthrough').innerHTML = '';
    };

    // =====================================================
    // SECTION NAVIGATION
    // =====================================================
    window.showSection = function(sectionName) {
        // Update buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // Update sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');
    };

    // =====================================================
    // EXPORT FUNCTIONS
    // =====================================================
    window.exportSummary = function() {
        let markdown = `# Paper Summary: ${paperMetadata.filename}\n\n`;
        markdown += `**Date:** ${new Date().toLocaleDateString()}\n\n`;
        markdown += `**Pages:** ${paperMetadata.pages} | **Words:** ${paperMetadata.words.toLocaleString()}\n\n`;
        markdown += `---\n\n`;
        markdown += summaryText;

        downloadMarkdown(markdown, `summary-${sanitizeFilename(paperMetadata.filename)}.md`);
    };

    window.exportChat = function() {
        if (chatHistory.length === 0) {
            alert('No Q&A to export');
            return;
        }

        let markdown = `# Q&A Session: ${paperMetadata.filename}\n\n`;
        markdown += `**Date:** ${new Date().toLocaleDateString()}\n\n`;
        markdown += `---\n\n`;

        chatHistory.forEach((msg, index) => {
            if (msg.role === 'user') {
                markdown += `## Question ${Math.floor(index / 2) + 1}\n\n`;
                markdown += `${msg.content}\n\n`;
            } else {
                markdown += `**Answer:**\n\n${msg.content}\n\n`;
                markdown += `---\n\n`;
            }
        });

        downloadMarkdown(markdown, `qa-${sanitizeFilename(paperMetadata.filename)}.md`);
    };

    window.exportDiscussion = function() {
        let markdown = `# Discussion Questions: ${paperMetadata.filename}\n\n`;
        markdown += `**Date:** ${new Date().toLocaleDateString()}\n\n`;
        markdown += `---\n\n`;

        discussionQuestions.forEach((item, index) => {
            markdown += `## Question ${index + 1}\n\n`;
            markdown += `${item.question}\n\n`;
            markdown += `**Answer:**\n\n${item.answer}\n\n`;
            markdown += `---\n\n`;
        });

        downloadMarkdown(markdown, `discussion-${sanitizeFilename(paperMetadata.filename)}.md`);
    };

    function downloadMarkdown(content, filename) {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }

    function sanitizeFilename(filename) {
        return filename.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    }

    window.uploadNewPaper = function() {
        if (confirm('Upload a new paper? Current analysis will be lost.')) {
            location.reload();
        }
    };

    // =====================================================
    // UTILITIES
    // =====================================================
    function renderMarkdown(text) {
        let html = text;

        // Code blocks
        html = html.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace;">$1</code>');

        // Bold and italic
        html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h4 style="margin: 15px 0 10px 0; color: #1e40af;">$1</h4>');
        html = html.replace(/^## (.+)$/gm, '<h3 style="margin: 20px 0 10px 0; color: #1e40af;">$1</h3>');
        html = html.replace(/^# (.+)$/gm, '<h2 style="margin: 25px 0 15px 0; color: #2a7ae2;">$1</h2>');

        // Lists
        html = html.replace(/^[\-\*] (.+)$/gm, '<li style="margin-left: 20px; margin-bottom: 5px;">$1</li>');
        html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul style="margin: 10px 0;">$&</ul>');

        // Line breaks
        html = html.replace(/\n\n/g, '<br><br>');
        html = html.replace(/\n/g, '<br>');

        return html;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
</script>
