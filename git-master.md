---
layout: page
title: "Git Tutor - Version Control for Physicians"
description: Master Git and GitHub for managing your AI prompts, collaborating on clinical tools, and contributing to open-source medical resources. Interactive learning with AI guidance.
permalink: /git-master/
---

<style>
    /* =====================================================
       GIT TUTOR STYLES - Consistent with Site Theme
       ===================================================== */
    
    .git-master-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section - Using site color variables */
    .git-tutor-hero {
        background: linear-gradient(135deg, var(--color-primary, #2563eb) 0%, var(--color-accent, #7c3aed) 100%);
        color: white;
        padding: 60px 40px;
        border-radius: var(--radius-lg, 12px);
        margin-bottom: 40px;
        box-shadow: var(--shadow-lg, 0 4px 12px rgba(0,0,0,0.15));
        text-align: center;
    }

    .git-tutor-hero h1 {
        font-size: 2.8em;
        margin-bottom: 20px;
        font-weight: 700;
        color: white;
    }

    .git-tutor-hero .subtitle {
        font-size: 1.3em;
        opacity: 0.95;
        line-height: 1.8;
        max-width: 900px;
        margin: 0 auto 30px auto;
    }

    .hero-stats {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 30px;
        flex-wrap: wrap;
    }

    .hero-stat {
        text-align: center;
    }

    .hero-stat-value {
        font-size: 2em;
        font-weight: 700;
        display: block;
        margin-bottom: 5px;
    }

    .hero-stat-label {
        font-size: 0.95em;
        opacity: 0.9;
    }

    /* Info Box - Consistent with site cards */
    .info-box {
        background: var(--color-bg-primary, white);
        border-left: 4px solid var(--color-primary, #2563eb);
        padding: 30px;
        border-radius: var(--radius-md, 8px);
        margin-bottom: 30px;
        box-shadow: var(--shadow-sm, 0 2px 4px rgba(0,0,0,0.1));
    }

    .info-box h3 {
        color: var(--color-primary, #2563eb);
        margin-bottom: 15px;
        font-size: 1.4em;
        font-weight: 600;
    }

    .info-box p {
        color: var(--color-text-secondary, #4b5563);
        line-height: 1.8;
        margin-bottom: 15px;
    }

    .info-box ul {
        margin-left: 25px;
        color: var(--color-text-secondary, #4b5563);
    }

    .info-box li {
        margin-bottom: 10px;
        line-height: 1.6;
    }

    /* Status Panel */
    .status-panel {
        background: var(--color-bg-primary, white);
        border-radius: var(--radius-md, 8px);
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: var(--shadow-sm, 0 2px 4px rgba(0,0,0,0.1));
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
        font-size: 1.2em;
        margin-bottom: 15px;
        font-weight: 600;
        color: var(--color-text-primary, #333);
    }

    #status-details {
        font-size: 0.95em;
        color: var(--color-text-secondary, #666);
        margin-top: 10px;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(0,0,0,0.1);
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
        background: var(--color-primary, #2563eb);
        width: 0%;
        transition: width 0.3s ease;
    }

    /* URL Input Section */
    .url-input-section {
        background: var(--color-bg-primary, white);
        border-radius: var(--radius-lg, 12px);
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: var(--shadow-sm, 0 2px 6px rgba(0,0,0,0.1));
        display: none;
    }

    .url-input-section.active {
        display: block;
    }

    .url-input-section h2 {
        color: var(--color-primary, #2563eb);
        margin-bottom: 20px;
        font-size: 1.6em;
    }

    .url-input-wrapper {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }

    #repo-url-input {
        flex: 1;
        padding: 15px;
        border: 2px solid var(--color-border, #d1d5db);
        border-radius: var(--radius-md, 8px);
        font-size: 1em;
        font-family: 'Monaco', 'Courier New', monospace;
        transition: border-color 0.2s;
    }

    #repo-url-input:focus {
        outline: none;
        border-color: var(--color-primary, #2563eb);
    }

    #analyze-btn {
        padding: 15px 35px;
        background: var(--color-primary, #2563eb);
        color: white;
        border: none;
        border-radius: var(--radius-md, 8px);
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    #analyze-btn:hover:not(:disabled) {
        background: var(--color-primary-dark, #1d4ed8);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
    }

    #analyze-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .example-repos {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 15px;
    }

    .example-repo {
        padding: 8px 16px;
        background: var(--color-bg-secondary, #f3f4f6);
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid var(--color-border, #e5e7eb);
    }

    .example-repo:hover {
        background: var(--color-primary, #2563eb);
        color: white;
        border-color: var(--color-primary, #2563eb);
    }

    /* Main Content Grid */
    .main-content {
        display: none;
        grid-template-columns: 1fr 2fr;
        gap: 25px;
        margin-bottom: 30px;
        align-items: start;
    }

    .main-content.active {
        display: grid;
    }

    @media (max-width: 1200px) {
        .main-content.active {
            grid-template-columns: 1fr;
        }

        .chat-sidebar {
            order: 1;
        }

        .visualization-area {
            order: 2;
        }
    }

    /* Chat Sidebar */
    .chat-sidebar {
        background: var(--color-bg-primary, white);
        border-radius: var(--radius-lg, 12px);
        padding: 25px;
        box-shadow: var(--shadow-sm, 0 2px 6px rgba(0,0,0,0.1));
        display: flex;
        flex-direction: column;
        min-height: 600px;
    }

    .chat-sidebar h3 {
        color: var(--color-primary, #2563eb);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.3em;
    }

    .quick-questions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--color-border-light, #f3f4f6);
    }

    .quick-question-btn {
        padding: 10px 15px;
        background: var(--color-bg-secondary, #f3f4f6);
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s;
        color: var(--color-text-primary, #374151);
    }

    .quick-question-btn:hover:not(:disabled) {
        background: var(--color-primary, #2563eb);
        color: white;
        border-color: var(--color-primary, #2563eb);
    }

    .quick-question-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .chat-messages {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 20px;
        background: var(--color-bg-secondary, #f9fafb);
        border-radius: var(--radius-md, 8px);
        min-height: 400px;
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
        color: var(--color-text-secondary, #6b7280);
    }

    .message-bubble {
        padding: 12px 16px;
        border-radius: 12px;
        line-height: 1.6;
    }

    .message-user .message-bubble {
        background: var(--color-primary, #2563eb);
        color: white;
        margin-left: 10%;
        border-bottom-right-radius: 4px;
    }

    .message-assistant .message-bubble {
        background: var(--color-bg-primary, white);
        color: var(--color-text-primary, #333);
        border: 1px solid var(--color-border, #e5e7eb);
        margin-right: 10%;
        border-bottom-left-radius: 4px;
    }

    .chat-input-area {
        display: flex;
        gap: 10px;
    }

    #chat-input {
        flex: 1;
        padding: 12px;
        border: 2px solid var(--color-border, #d1d5db);
        border-radius: var(--radius-md, 6px);
        font-size: 0.95em;
        resize: none;
        font-family: inherit;
        transition: border-color 0.2s;
    }

    #chat-input:focus {
        outline: none;
        border-color: var(--color-primary, #2563eb);
    }

    #send-chat-btn {
        padding: 12px 20px;
        background: var(--color-primary, #2563eb);
        color: white;
        border: none;
        border-radius: var(--radius-md, 6px);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    #send-chat-btn:hover:not(:disabled) {
        background: var(--color-primary-dark, #1d4ed8);
    }

    #send-chat-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .typing-indicator {
        display: none;
        padding: 10px;
        color: var(--color-text-secondary, #666);
        font-style: italic;
        font-size: 0.9em;
    }

    .typing-indicator.active {
        display: block;
    }

    .empty-chat {
        text-align: center;
        padding: 40px 20px;
        color: var(--color-text-tertiary, #9ca3af);
    }

    /* Visualization Area */
    .visualization-area {
        background: var(--color-bg-primary, white);
        border-radius: var(--radius-lg, 12px);
        padding: 30px;
        box-shadow: var(--shadow-sm, 0 2px 6px rgba(0,0,0,0.1));
    }

    .repo-header {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--color-border-light, #f3f4f6);
    }

    .repo-header h2 {
        color: var(--color-primary, #2563eb);
        font-size: 1.8em;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .repo-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        color: var(--color-text-secondary, #6b7280);
        font-size: 0.95em;
    }

    .repo-meta-item {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .visualization-canvas {
        background: var(--color-bg-secondary, #fafafa);
        border-radius: var(--radius-md, 8px);
        padding: 20px;
        min-height: 500px;
        margin-bottom: 20px;
        overflow-x: auto;
        position: relative;
    }

    #git-graph {
        width: 100%;
        min-height: 500px;
    }

    .commit-tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 15px;
        border-radius: var(--radius-md, 8px);
        font-size: 0.9em;
        max-width: 350px;
        z-index: 1000;
        display: none;
        pointer-events: none;
        box-shadow: var(--shadow-lg, 0 4px 12px rgba(0,0,0,0.3));
    }

    .commit-tooltip.active {
        display: block;
    }

    .tooltip-commit-msg {
        font-weight: 600;
        margin-bottom: 8px;
        color: #a5b4fc;
    }

    .tooltip-meta {
        font-size: 0.85em;
        color: #d1d5db;
        margin-bottom: 5px;
    }

    .merge-conflict-section {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left: 4px solid var(--color-warning, #f59e0b);
        border-radius: var(--radius-md, 8px);
        padding: 25px;
        margin-top: 30px;
    }

    .merge-conflict-section h3 {
        color: #92400e;
        margin-bottom: 15px;
        font-size: 1.4em;
    }

    .conflict-example {
        background: #1e293b;
        color: #e2e8f0;
        padding: 20px;
        border-radius: var(--radius-md, 6px);
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        margin: 15px 0;
        overflow-x: auto;
    }

    .conflict-marker {
        color: #fbbf24;
        font-weight: bold;
    }

    .conflict-head {
        color: #60a5fa;
    }

    .conflict-incoming {
        color: #34d399;
    }

    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: var(--radius-md, 6px);
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-block;
    }

    .btn-primary {
        background: var(--color-primary, #2563eb);
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: var(--color-primary-dark, #1d4ed8);
    }

    .btn-secondary {
        background: var(--color-text-secondary, #6b7280);
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #4b5563;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    /* Branch Legend */
    .branch-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 20px;
        padding: 15px;
        background: var(--color-bg-secondary, #f9fafb);
        border-radius: var(--radius-md, 8px);
    }

    .branch-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9em;
    }

    .branch-color {
        width: 20px;
        height: 20px;
        border-radius: 4px;
    }

    /* Code styling in chat */
    .message-bubble code {
        background: #f0f0f0;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        color: #e11d48;
    }

    .message-bubble pre {
        background: #1e293b;
        color: #e2e8f0;
        padding: 15px;
        border-radius: var(--radius-md, 6px);
        overflow-x: auto;
        margin: 10px 0;
    }

    .message-bubble pre code {
        background: none;
        color: inherit;
        padding: 0;
    }

    /* Model Selector */
    .model-selector {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
        text-align: left;
    }

    .model-option {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px 15px;
        background: var(--color-bg-secondary, #f9fafb);
        border: 2px solid var(--color-border, #e5e7eb);
        border-radius: var(--radius-md, 8px);
        cursor: pointer;
        transition: all 0.2s;
        max-width: 300px;
    }

    .model-option:hover {
        border-color: var(--color-primary, #2563eb);
        background: #eff6ff;
    }

    .model-option input {
        margin-top: 4px;
    }

    .model-info strong {
        display: block;
        color: var(--color-text-primary, #333);
        margin-bottom: 2px;
    }

    .model-info span {
        font-size: 0.85em;
        color: var(--color-text-secondary, #666);
        display: block;
        line-height: 1.4;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .git-tutor-hero h1 {
            font-size: 2em;
        }

        .git-tutor-hero .subtitle {
            font-size: 1.1em;
        }

        .hero-stats {
            gap: 20px;
        }

        .url-input-wrapper {
            flex-direction: column;
        }

        .example-repos {
            flex-direction: column;
        }

        .repo-meta {
            flex-direction: column;
            gap: 10px;
        }

        .model-selector {
            flex-direction: column;
            align-items: center;
        }

        .model-option {
            max-width: 100%;
        }
    }
</style>

<div class="git-master-container">
    <!-- Hero Section -->
    <div class="git-tutor-hero">
        <h1>🔀 Git Tutor</h1>
        <p class="subtitle">Master version control for managing AI prompts, collaborating on clinical tools, and contributing to open-source medical resources. Learn Git interactively with AI guidance.</p>
        <div class="hero-stats">
            <div class="hero-stat">
                <span class="hero-stat-value">∞</span>
                <span class="hero-stat-label">Public Repositories</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-value">🤖</span>
                <span class="hero-stat-label">AI-Powered Guidance</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-value">100%</span>
                <span class="hero-stat-label">Browser-Based</span>
            </div>
        </div>
    </div>

    <!-- Info Box -->
    <div class="info-box">
        <h3>Why Git Matters for Physicians in the AI Era</h3>
        <p>As you build your prompt library and explore AI-assisted documentation, Git becomes essential. It's the industry-standard tool for:</p>
        <ul>
            <li><strong>Version Control for Prompts:</strong> Track changes to your clinical prompts over time, experiment with variations, and revert to previous versions that worked better</li>
            <li><strong>Collaboration:</strong> Share your prompt libraries with colleagues, contribute improvements to open-source medical tools, and learn from other physicians' approaches</li>
            <li><strong>Professional Development:</strong> Join the growing community of physician-developers building the future of healthcare technology</li>
            <li><strong>Portfolio Building:</strong> Showcase your contributions to medical informatics and AI implementation projects</li>
        </ul>
        <p style="margin-top: 15px;"><strong>No coding experience required.</strong> This interactive tool uses real GitHub repositories and an AI tutor to teach you Git concepts through exploration and conversation.</p>
    </div>

    <!-- Status Panel -->
    <div id="status-panel" class="status-panel">
        <div id="status-message">Select an AI model and click "Initialize AI Tutor" to begin</div>
        
        <div class="model-selector" id="model-selector">
            <label class="model-option">
                <input type="radio" name="model-choice" value="thinking">
                <div class="model-info">
                    <strong>Thinking (Phi-3.5 Mini)</strong>
                    <span>Higher quality, better reasoning. Best for complex concepts. (~2.2GB)</span>
                </div>
            </label>
            <label class="model-option">
                <input type="radio" name="model-choice" value="fast" checked>
                <div class="model-info">
                    <strong>Fast (Llama 3.2 1B)</strong>
                    <span>Lightning fast, lower memory. Good for quick answers. (~870MB)</span>
                </div>
            </label>
        </div>

        <div id="status-details">The AI tutor downloads to your browser once (5-15 minutes), then loads instantly on future visits.</div>
        <div id="progress-bar" class="progress-bar">
            <div id="progress-fill" class="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary" onclick="initializeAI()" style="margin-top: 20px;">
            Initialize AI Tutor
        </button>
    </div>

    <!-- URL Input Section -->
    <div id="url-input-section" class="url-input-section">
        <h2>🔍 Analyze a GitHub Repository</h2>
        <div class="url-input-wrapper">
            <input
                type="text"
                id="repo-url-input"
                placeholder="https://github.com/owner/repository"
                aria-label="GitHub repository URL"
            />
            <button id="analyze-btn" onclick="analyzeRepository()">
                <span id="analyze-btn-text">Analyze Repository</span>
            </button>
        </div>
        <div style="margin-top: 10px; color: var(--color-text-secondary, #6b7280); font-size: 0.9em;">
            <strong>Try these examples:</strong>
        </div>
        <div class="example-repos">
            <span class="example-repo" onclick="loadExampleRepo('https://github.com/octocat/Hello-World')">octocat/Hello-World (Simple)</span>
            <span class="example-repo" onclick="loadExampleRepo('https://github.com/nodejs/node')">nodejs/node (Medium)</span>
            <span class="example-repo" onclick="loadExampleRepo('https://github.com/facebook/react')">facebook/react (Large)</span>
        </div>
    </div>

    <!-- Main Content: Visualization + Chat -->
    <div id="main-content" class="main-content">
        <!-- Chat Sidebar -->
        <div class="chat-sidebar">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                AI Tutor
            </h3>

            <div class="quick-questions">
                <button class="quick-question-btn" onclick="askQuickQuestion('What is Git and why should I use it?')" id="q1-btn">
                    What is Git?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('How do I start using Git?')" id="q2-btn">
                    How do I start?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('What is a branch and why does it matter?')" id="q3-btn">
                    What's a branch?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('How do I fix merge conflicts?')" id="q4-btn">
                    Fix merge conflicts?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('Explain this repository structure')" id="q5-btn" disabled>
                    Explain this repo
                </button>
            </div>

            <div id="chat-messages" class="chat-messages">
                <div class="empty-chat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 48px; height: 48px; margin: 0 auto; color: #d1d5db;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    <p style="margin-top: 15px;">Ask me anything about Git!</p>
                    <p style="font-size: 0.85em; margin-top: 5px;">Click a quick question above or type your own below.</p>
                </div>
            </div>

            <div class="typing-indicator" id="typing-indicator">
                AI is thinking...
            </div>

            <div class="chat-input-area">
                <textarea
                    id="chat-input"
                    rows="3"
                    placeholder="Ask about Git concepts, this repository, or anything else..."
                    aria-label="Chat message input"
                ></textarea>
                <button id="send-chat-btn" onclick="sendChatMessage()">
                    Send
                </button>
            </div>
        </div>

        <!-- Visualization Area -->
        <div class="visualization-area">
            <div class="repo-header">
                <h2 id="repo-name">Repository Visualization</h2>
                <div class="repo-meta" id="repo-meta">
                    <div class="repo-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <span id="commit-count">-- commits</span>
                    </div>
                    <div class="repo-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span id="branch-count">-- branches</span>
                    </div>
                    <div class="repo-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span id="contributor-count">-- contributors</span>
                    </div>
                </div>
            </div>

            <div class="branch-legend" id="branch-legend">
                <!-- Branch colors will be inserted here -->
            </div>

            <div class="visualization-canvas">
                <div id="git-graph"></div>
                <div id="commit-tooltip" class="commit-tooltip">
                    <!-- Tooltip content populated dynamically -->
                </div>
            </div>

            <!-- Merge Conflict Education Section -->
            <div class="merge-conflict-section">
                <h3>🔀 Understanding Merge Conflicts</h3>
                <p style="color: #78350f; margin-bottom: 15px;">
                    Merge conflicts happen when two people edit the same part of a file. Don't worry—they're normal and easy to fix! Here's what conflict markers look like:
                </p>

                <div class="conflict-example">
<span class="conflict-marker">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
<span class="conflict-head">Your changes here</span>
<span class="conflict-marker">=======</span>
<span class="conflict-incoming">Their changes here</span>
<span class="conflict-marker">&gt;&gt;&gt;&gt;&gt;&gt;&gt; branch-name</span>
                </div>

                <div style="margin-top: 20px;">
                    <strong style="color: #92400e; display: block; margin-bottom: 10px;">How to resolve:</strong>
                    <ol style="margin-left: 25px; color: #78350f;">
                        <li style="margin-bottom: 8px;">Open the conflicted file in your editor</li>
                        <li style="margin-bottom: 8px;">Look for the conflict markers (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;)</li>
                        <li style="margin-bottom: 8px;">Decide which changes to keep (or combine both!)</li>
                        <li style="margin-bottom: 8px;">Remove all the conflict markers</li>
                        <li style="margin-bottom: 8px;">Save the file and test your code</li>
                        <li style="margin-bottom: 8px;">Stage the file: <code style="background: #1e293b; color: #fbbf24; padding: 2px 8px; border-radius: 4px;">git add &lt;filename&gt;</code></li>
                        <li style="margin-bottom: 8px;">Complete the merge: <code style="background: #1e293b; color: #fbbf24; padding: 2px 8px; border-radius: 4px;">git commit</code></li>
                    </ol>
                </div>

                <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.5); border-radius: 6px;">
                    <strong style="color: #92400e;">💡 Pro Tip:</strong>
                    <p style="color: #78350f; margin-top: 5px;">Ask the AI Tutor to walk you through a specific merge conflict scenario. Just type "Help me understand merge conflicts" in the chat!</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@gitgraph/js"></script>
<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let llmEngine = null;
    let currentRepo = null;
    let commits = [];
    let branches = [];
    let chatHistory = [];
    
    const MODELS = {
        thinking: {
            id: "Phi-3.5-mini-instruct-q4f16_1-MLC",
            name: "Thinking (Phi-3.5 Mini)"
        },
        fast: {
            id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
            name: "Fast (Llama 3.2 1B)"
        }
    };

    const SYSTEM_PROMPT = `You are a friendly and patient Git tutor helping complete beginners learn version control.

Your student has little to no experience with:
- Command line interfaces
- Programming tools
- Version control concepts

Your teaching style:
- Use simple, jargon-free language
- Provide analogies (e.g., "Git is like a time machine for your code")
- Break complex ideas into small steps
- Give concrete examples with actual commands
- Be encouraging and supportive
- Never assume prior knowledge

When a GitHub repository is loaded, you can reference it as a teaching example. Use phrases like "Looking at this repository..." or "In the loaded project..."

Special focus areas:
- Explaining merge conflicts clearly with visual descriptions
- Walking through conflict resolution step-by-step
- Helping users understand branch workflows
- Making Git less intimidating

Always provide:
- Command examples with explanations
- What each part of a command does
- Expected outcomes
- Common errors and how to fix them

Keep responses concise (2-3 paragraphs max). If asked about something advanced, acknowledge it but bring it back to fundamentals.`;

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
        const modelSelector = document.getElementById('model-selector');

        // Get selected model
        const selectedValue = document.querySelector('input[name="model-choice"]:checked').value;
        const selectedModel = MODELS[selectedValue];

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = `Loading ${selectedModel.name}...`;
        statusDetails.textContent = 'This may take 5-15 minutes on first use. The model is cached for instant loading next time.';
        progressBar.classList.add('active');
        initBtn.disabled = true;
        
        // Disable model selection during load
        const radioButtons = document.querySelectorAll('input[name="model-choice"]');
        radioButtons.forEach(rb => rb.disabled = true);

        try {
            llmEngine = await CreateMLCEngine(
                selectedModel.id,
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
            statusMessage.textContent = 'AI Tutor Ready! 🎉';
            statusDetails.textContent = 'Now paste a GitHub repository URL below to start exploring';
            progressBar.classList.remove('active');
            
            // Hide model selector after successful load
            modelSelector.style.display = 'none';

            setTimeout(() => {
                document.getElementById('url-input-section').classList.add('active');
                statusPanel.style.display = 'none';
            }, 1500);

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = 'Failed to load AI tutor';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Requirements:</strong> Chrome/Edge 113+ on desktop with WebGPU support
            `;
            console.error('AI initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry Initialization';
            
            // Re-enable model selection
            radioButtons.forEach(rb => rb.disabled = false);
        }
    };

    // =====================================================
    // GITHUB API & REPOSITORY ANALYSIS
    // =====================================================
    window.analyzeRepository = async function() {
        const input = document.getElementById('repo-url-input');
        const url = input.value.trim();

        if (!url) {
            alert('Please enter a GitHub repository URL');
            return;
        }

        // Parse GitHub URL
        const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
            alert('Invalid GitHub URL. Please use format: https://github.com/owner/repository');
            return;
        }

        const [, owner, repo] = match;
        const repoName = repo.replace(/\.git$/, '');

        const analyzeBtn = document.getElementById('analyze-btn');
        const analyzeBtnText = document.getElementById('analyze-btn-text');

        analyzeBtn.disabled = true;
        analyzeBtnText.innerHTML = '<span class="loading-spinner"></span> Analyzing...';

        try {
            // Fetch repository data
            const repoData = await fetchGitHubAPI(`/repos/${owner}/${repoName}`);
            const commitsData = await fetchGitHubAPI(`/repos/${owner}/${repoName}/commits?per_page=100`);
            const branchesData = await fetchGitHubAPI(`/repos/${owner}/${repoName}/branches`);

            currentRepo = {
                owner,
                name: repoName,
                fullName: `${owner}/${repoName}`,
                description: repoData.description,
                url: repoData.html_url
            };

            commits = commitsData;
            branches = branchesData;

            // Update UI
            document.getElementById('repo-name').textContent = currentRepo.fullName;
            document.getElementById('commit-count').textContent = `${commits.length}+ commits`;
            document.getElementById('branch-count').textContent = `${branches.length} branches`;
            document.getElementById('contributor-count').textContent = repoData.network_count || 'Multiple contributors';

            // Enable repo-specific question
            document.getElementById('q5-btn').disabled = false;

            // Show main content
            document.getElementById('url-input-section').style.display = 'none';
            document.getElementById('main-content').classList.add('active');

            // Render visualization
            renderGitGraph();

            // Send welcome message from AI
            setTimeout(() => {
                const welcomeMsg = `I've analyzed the **${currentRepo.fullName}** repository! This repository has ${commits.length}+ commits across ${branches.length} branches.

What would you like to know about Git? I can explain what you're seeing in the visualization, or we can start with the basics of version control.`;
                addChatMessage('assistant', welcomeMsg);
            }, 500);

        } catch (error) {
            console.error('Repository analysis error:', error);
            alert(`Error analyzing repository: ${error.message}\n\nMake sure:\n1. The repository is public\n2. The URL is correct\n3. You haven't exceeded GitHub's rate limit`);
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtnText.textContent = 'Analyze Repository';
        }
    };

    async function fetchGitHubAPI(endpoint) {
        const response = await fetch(`https://api.github.com${endpoint}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('GitHub API rate limit exceeded. Please try again in an hour.');
            } else if (response.status === 404) {
                throw new Error('Repository not found. Make sure it\'s public and the URL is correct.');
            }
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        return await response.json();
    }

    window.loadExampleRepo = function(url) {
        document.getElementById('repo-url-input').value = url;
        analyzeRepository();
    };

    // =====================================================
    // GIT VISUALIZATION
    // =====================================================
    function renderGitGraph() {
        const graphContainer = document.getElementById('git-graph');
        graphContainer.innerHTML = '';

        // Create branch legend
        const branchColors = ['#2563eb', '#34d399', '#f59e0b', '#ec4899', '#8b5cf6'];
        const legendContainer = document.getElementById('branch-legend');
        legendContainer.innerHTML = '<strong style="margin-right: 15px;">Branches:</strong>';

        branches.slice(0, 5).forEach((branch, index) => {
            const color = branchColors[index % branchColors.length];
            const item = document.createElement('div');
            item.className = 'branch-item';
            item.innerHTML = `
                <div class="branch-color" style="background: ${color};"></div>
                <span>${branch.name}</span>
            `;
            legendContainer.appendChild(item);
        });

        // Simple visualization using HTML/CSS
        const timeline = document.createElement('div');
        timeline.style.cssText = 'position: relative; padding: 20px;';

        commits.slice(0, 50).forEach((commit, index) => {
            const commitNode = document.createElement('div');
            const date = new Date(commit.commit.author.date);

            commitNode.style.cssText = `
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
                cursor: pointer;
                transition: all 0.2s;
            `;

            commitNode.innerHTML = `
                <div style="flex-shrink: 0; width: 40px; height: 40px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">
                    ${index + 1}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #333; margin-bottom: 5px;">
                        ${escapeHtml(commit.commit.message.split('\n')[0])}
                    </div>
                    <div style="font-size: 0.85em; color: #6b7280;">
                        <strong>${escapeHtml(commit.commit.author.name)}</strong> •
                        ${date.toLocaleDateString()} ${date.toLocaleTimeString()}
                    </div>
                </div>
                <div style="text-align: right; color: #2563eb; font-size: 0.85em;">
                    ${commit.sha.substring(0, 7)}
                </div>
            `;

            commitNode.onmouseenter = (e) => {
                commitNode.style.background = '#f3f4f6';
                commitNode.style.transform = 'translateX(5px)';
                showCommitTooltip(commit, e);
            };

            commitNode.onmouseleave = () => {
                commitNode.style.background = 'white';
                commitNode.style.transform = 'translateX(0)';
                hideCommitTooltip();
            };

            timeline.appendChild(commitNode);
        });

        graphContainer.appendChild(timeline);
    }

    function showCommitTooltip(commit, event) {
        const tooltip = document.getElementById('commit-tooltip');
        const date = new Date(commit.commit.author.date);

        tooltip.innerHTML = `
            <div class="tooltip-commit-msg">${escapeHtml(commit.commit.message)}</div>
            <div class="tooltip-meta">
                <strong>Author:</strong> ${escapeHtml(commit.commit.author.name)}<br>
                <strong>Date:</strong> ${date.toLocaleString()}<br>
                <strong>SHA:</strong> ${commit.sha.substring(0, 7)}<br>
                <strong>Changes:</strong> ${commit.stats ? `+${commit.stats.additions || 0} -${commit.stats.deletions || 0}` : 'View on GitHub'}
            </div>
        `;

        tooltip.classList.add('active');
        tooltip.style.left = (event.pageX + 15) + 'px';
        tooltip.style.top = (event.pageY - 50) + 'px';
    }

    function hideCommitTooltip() {
        const tooltip = document.getElementById('commit-tooltip');
        tooltip.classList.remove('active');
    }

    // =====================================================
    // CHAT INTERFACE
    // =====================================================
    window.sendChatMessage = async function() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (!message) return;

        input.value = '';
        await processChatMessage(message);
    };

    window.askQuickQuestion = async function(question) {
        await processChatMessage(question);
    };

    async function processChatMessage(userMessage) {
        if (!llmEngine) {
            alert('AI tutor is not initialized yet. Please wait for it to load.');
            return;
        }

        // Disable inputs
        document.getElementById('chat-input').disabled = true;
        document.getElementById('send-chat-btn').disabled = true;
        document.querySelectorAll('.quick-question-btn').forEach(btn => btn.disabled = true);

        // Add user message
        addChatMessage('user', userMessage);

        // Show typing indicator
        document.getElementById('typing-indicator').classList.add('active');

        try {
            // Build context
            let contextInfo = '';
            if (currentRepo) {
                contextInfo = `\n\nCurrent repository context: The user is viewing the "${currentRepo.fullName}" repository which has ${commits.length}+ commits and ${branches.length} branches.`;
            }

            // Create messages array
            const messages = [
                { role: 'system', content: SYSTEM_PROMPT + contextInfo },
                ...chatHistory.slice(-10), // Keep last 10 messages for context
                { role: 'user', content: userMessage }
            ];

            // Get AI response with streaming
            const response = await llmEngine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 500,
                stream: true
            });

            document.getElementById('typing-indicator').classList.remove('active');

            // Create message bubble for streaming
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">AI Tutor</div>
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

            // Update chat history
            chatHistory.push(
                { role: 'user', content: userMessage },
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            addChatMessage('assistant', 'Sorry, I encountered an error. Please try again.');
            console.error('Chat error:', error);
        }

        // Re-enable inputs
        document.getElementById('chat-input').disabled = false;
        document.getElementById('send-chat-btn').disabled = false;
        document.querySelectorAll('.quick-question-btn').forEach(btn => {
            if (btn.id !== 'q5-btn' || currentRepo) {
                btn.disabled = false;
            }
        });
        document.getElementById('chat-input').focus();
    }

    function addChatMessage(role, content) {
        const messagesDiv = document.getElementById('chat-messages');
        const emptyChat = messagesDiv.querySelector('.empty-chat');
        if (emptyChat) emptyChat.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${role}`;

        const label = role === 'user' ? 'You' : 'AI Tutor';
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

    // Enter to send (Shift+Enter for new line)
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
    // UTILITIES
    // =====================================================
    function renderMarkdown(text) {
        let html = text;

        // Code blocks
        html = html.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Bold and italic
        html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h4 style="margin: 15px 0 10px 0;">$1</h4>');
        html = html.replace(/^## (.+)$/gm, '<h3 style="margin: 20px 0 10px 0;">$1</h3>');
        html = html.replace(/^# (.+)$/gm, '<h2 style="margin: 25px 0 15px 0;">$1</h2>');

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
