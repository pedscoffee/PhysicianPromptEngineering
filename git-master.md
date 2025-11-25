---
layout: page
title: "Git Tutor - Version Control for Physicians"
description: Master Git and GitHub for managing your AI prompts, collaborating on clinical tools, and contributing to open-source medical resources. Interactive learning with AI guidance.
permalink: /git-master/
---

<style>
    /* Scoped styles for Git Tutor specific elements not covered by global CSS */
    
    .git-master-container {
        max-width: 100%;
        margin: 0 auto;
    }

    /* Hero Section */
    .git-tutor-hero {
        background: var(--gradient-hero);
        color: white;
        padding: var(--space-8) var(--space-4);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-8);
        box-shadow: var(--shadow-xl);
        text-align: center;
    }

    .git-tutor-hero h1 {
        font-size: var(--font-size-4xl);
        margin-bottom: var(--space-4);
        color: white;
    }

    .git-tutor-hero .subtitle {
        font-size: var(--font-size-xl);
        opacity: 0.95;
        line-height: var(--line-height-relaxed);
        max-width: 800px;
        margin: 0 auto var(--space-6) auto;
    }

    .hero-stats {
        display: flex;
        justify-content: center;
        gap: var(--space-8);
        margin-top: var(--space-6);
        flex-wrap: wrap;
    }

    .hero-stat {
        text-align: center;
    }

    .hero-stat-value {
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        display: block;
        margin-bottom: var(--space-1);
    }

    .hero-stat-label {
        font-size: var(--font-size-sm);
        opacity: 0.9;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Info Box */
    .info-box {
        background: var(--color-bg-primary);
        border-left: 4px solid var(--color-primary);
        padding: var(--space-6);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-6);
        box-shadow: var(--shadow-md);
        border: 1px solid var(--color-border);
    }

    .info-box h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
        font-size: var(--font-size-xl);
    }

    /* Status Panel */
    .status-panel {
        background: var(--color-bg-primary);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        margin-bottom: var(--space-6);
        box-shadow: var(--shadow-md);
        text-align: center;
        border: 1px solid var(--color-border);
    }

    .status-panel.loading {
        background: var(--gradient-info);
        border: none;
    }

    .status-panel.ready {
        background: var(--gradient-success);
        border: none;
    }

    .status-panel.error {
        background: var(--gradient-error);
        border: none;
    }

    #status-message {
        font-size: var(--font-size-lg);
        margin-bottom: var(--space-4);
        font-weight: var(--font-weight-semibold);
    }

    #status-details {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        margin-top: var(--space-2);
    }

    .status-panel.loading #status-details,
    .status-panel.ready #status-details,
    .status-panel.error #status-details {
        color: rgba(0,0,0,0.7);
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: var(--radius-full);
        overflow: hidden;
        margin-top: var(--space-4);
        display: none;
    }

    .progress-bar.active {
        display: block;
    }

    .progress-fill {
        height: 100%;
        background: var(--color-primary);
        width: 0%;
        transition: width 0.3s ease;
    }

    /* URL Input Section */
    .url-input-section {
        background: var(--color-bg-primary);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        margin-bottom: var(--space-6);
        box-shadow: var(--shadow-md);
        display: none;
        border: 1px solid var(--color-border);
    }

    .url-input-section.active {
        display: block;
    }

    .url-input-section h2 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
    }

    .url-input-wrapper {
        display: flex;
        gap: var(--space-4);
        margin-bottom: var(--space-4);
    }

    #repo-url-input {
        flex: 1;
        padding: var(--space-3);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-md);
        font-size: var(--font-size-base);
        font-family: var(--font-family-mono);
        background: var(--color-bg-primary);
        color: var(--color-text-primary);
    }

    #repo-url-input:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    #analyze-btn {
        padding: var(--space-3) var(--space-6);
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        cursor: pointer;
        transition: var(--transition-base);
    }

    #analyze-btn:hover:not(:disabled) {
        background: var(--color-primary-dark);
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
    }

    #analyze-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .example-repos {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
        margin-top: var(--space-4);
    }

    .example-repo {
        padding: var(--space-2) var(--space-4);
        background: var(--color-bg-tertiary);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        cursor: pointer;
        transition: var(--transition-fast);
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
    }

    .example-repo:hover {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }

    /* Main Content Grid */
    .main-content {
        display: none;
        grid-template-columns: 7fr 3fr;
        gap: var(--space-6);
        margin-bottom: var(--space-6);
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
        background: var(--color-bg-primary);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        box-shadow: var(--shadow-md);
        display: flex;
        flex-direction: column;
        min-height: 70vh;
        border: 1px solid var(--color-border);
    }

    .chat-sidebar h3 {
        color: var(--color-primary);
        margin-bottom: var(--space-4);
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: var(--font-size-xl);
    }

    .quick-questions {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        margin-bottom: var(--space-4);
        padding-bottom: var(--space-4);
        border-bottom: 1px solid var(--color-border-light);
    }

    .quick-question-btn {
        padding: var(--space-2) var(--space-4);
        background: var(--color-bg-tertiary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        cursor: pointer;
        text-align: left;
        transition: var(--transition-fast);
        color: var(--color-text-primary);
    }

    .quick-question-btn:hover:not(:disabled) {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }

    .quick-question-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .chat-messages {
        flex: 1;
        overflow-y: auto;
        margin-bottom: var(--space-4);
        padding: var(--space-4);
        background: var(--color-bg-secondary);
        border-radius: var(--radius-md);
        min-height: 500px;
        border: 1px solid var(--color-border);
    }

    .message {
        margin-bottom: var(--space-4);
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .message-label {
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-1);
        color: var(--color-text-tertiary);
    }

    .message-bubble {
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius-lg);
        line-height: var(--line-height-normal);
        font-size: var(--font-size-sm);
    }

    .message-user .message-bubble {
        background: var(--color-primary);
        color: white;
        margin-left: 10%;
        border-bottom-right-radius: var(--radius-sm);
    }

    .message-assistant .message-bubble {
        background: var(--color-bg-primary);
        color: var(--color-text-primary);
        border: 1px solid var(--color-border);
        margin-right: 10%;
        border-bottom-left-radius: var(--radius-sm);
    }

    .chat-input-area {
        display: flex;
        gap: var(--space-2);
    }

    #chat-input {
        flex: 1;
        padding: var(--space-3);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-md);
        font-size: var(--font-size-base);
        resize: none;
        font-family: inherit;
        background: var(--color-bg-primary);
        color: var(--color-text-primary);
    }

    #chat-input:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    #send-chat-btn {
        padding: var(--space-3) var(--space-5);
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        font-weight: var(--font-weight-semibold);
        cursor: pointer;
        transition: var(--transition-fast);
    }

    #send-chat-btn:hover:not(:disabled) {
        background: var(--color-primary-dark);
    }

    #send-chat-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .typing-indicator {
        display: none;
        padding: var(--space-2);
        color: var(--color-text-secondary);
        font-style: italic;
        font-size: var(--font-size-sm);
    }

    .typing-indicator.active {
        display: block;
    }

    .empty-chat {
        text-align: center;
        padding: var(--space-8) var(--space-4);
        color: var(--color-text-tertiary);
    }

    /* Visualization Area */
    .visualization-area {
        background: var(--color-bg-primary);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        box-shadow: var(--shadow-md);
        border: 1px solid var(--color-border);
    }

    .repo-header {
        margin-bottom: var(--space-6);
        padding-bottom: var(--space-4);
        border-bottom: 1px solid var(--color-border-light);
    }

    .repo-header h2 {
        color: var(--color-primary);
        font-size: var(--font-size-2xl);
        margin-bottom: var(--space-2);
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .repo-meta {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
    }

    .repo-meta-item {
        display: flex;
        align-items: center;
        gap: var(--space-1);
    }

    .visualization-canvas {
        background: var(--color-bg-tertiary);
        border-radius: var(--radius-md);
        padding: var(--space-4);
        min-height: 500px;
        margin-bottom: var(--space-4);
        overflow-x: auto;
        position: relative;
        border: 1px solid var(--color-border);
    }

    #git-graph {
        width: 100%;
        min-height: 500px;
    }

    .commit-tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: var(--space-3);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        max-width: 350px;
        z-index: var(--z-tooltip);
        display: none;
        pointer-events: none;
        box-shadow: var(--shadow-xl);
    }

    .commit-tooltip.active {
        display: block;
    }

    .tooltip-commit-msg {
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-2);
        color: var(--color-primary-light);
    }

    .tooltip-meta {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        margin-bottom: 0;
    }

    .merge-conflict-section {
        background: var(--gradient-warning);
        border-left: 4px solid var(--color-warning);
        border-radius: var(--radius-md);
        padding: var(--space-6);
        margin-top: var(--space-6);
    }

    .merge-conflict-section h3 {
        color: #78350f;
        margin-bottom: var(--space-3);
        font-size: var(--font-size-lg);
    }

    .conflict-example {
        background: #1e293b;
        color: #e2e8f0;
        padding: var(--space-4);
        border-radius: var(--radius-md);
        font-family: var(--font-family-mono);
        font-size: var(--font-size-sm);
        margin: var(--space-4) 0;
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
        gap: var(--space-3);
        margin-bottom: var(--space-4);
        padding: var(--space-3);
        background: var(--color-bg-secondary);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
    }

    .branch-item {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: var(--font-size-sm);
    }

    .branch-color {
        width: 16px;
        height: 16px;
        border-radius: var(--radius-sm);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .git-tutor-hero h1 {
            font-size: var(--font-size-3xl);
        }

        .git-tutor-hero .subtitle {
            font-size: var(--font-size-lg);
        }

        .hero-stats {
            gap: var(--space-4);
        }

        .url-input-wrapper {
            flex-direction: column;
        }

        .example-repos {
            flex-direction: column;
        }

        .repo-meta {
            flex-direction: column;
            gap: var(--space-2);
        }
    }

    /* Model Selector */
    .model-selector {
        display: flex;
        justify-content: center;
        gap: var(--space-4);
        margin-bottom: var(--space-4);
        text-align: left;
    }

    .model-option {
        display: flex;
        align-items: flex-start;
        gap: var(--space-2);
        padding: var(--space-3);
        background: var(--color-bg-secondary);
        border: 2px solid var(--color-border);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: var(--transition-fast);
        max-width: 300px;
        color: var(--color-text-primary);
    }

    .model-option:hover {
        border-color: var(--color-primary);
        background: var(--color-bg-tertiary);
    }

    .model-option input {
        margin-top: 4px;
    }

    .model-info strong {
        display: block;
        color: var(--color-text-primary);
        margin-bottom: 2px;
    }

    .model-info span {
        font-size: var(--font-size-xs);
        color: var(--color-text-secondary);
        display: block;
        line-height: 1.4;
    }
</style>

<div class="git-master-container">
    <!-- Hero Section -->
    <div class="git-tutor-hero">
        <h1>Git Tutor</h1>
        <p class="subtitle">Master version control for managing AI prompts, collaborating on clinical tools, and contributing to open-source medical resources. Learn Git interactively with AI guidance.</p>
        <div class="hero-stats">
            <div class="hero-stat">
                <span class="hero-stat-value">∞</span>
                <span class="hero-stat-label">Public Repositories</span>
            </div>
            <div class="hero-stat">
                <span class="hero-stat-value">AI</span>
                <span class="hero-stat-label">Powered Guidance</span>
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
        <p style="margin-top: var(--space-4);"><strong>No coding experience required.</strong> This interactive tool uses real GitHub repositories and an AI tutor to teach you Git concepts through exploration and conversation.</p>
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
        <button id="init-btn" class="btn btn-primary" onclick="initializeAI()" style="margin-top: var(--space-4);">
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
        <div style="margin-top: var(--space-2); color: var(--color-text-secondary); font-size: var(--font-size-sm);">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 48px; height: 48px; margin: 0 auto; color: var(--color-text-tertiary);">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    <p style="margin-top: var(--space-4);">Ask me anything about Git!</p>
                    <p style="font-size: var(--font-size-sm); margin-top: var(--space-1);">Click a quick question above or type your own below.</p>
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
                <p style="color: #78350f; margin-bottom: var(--space-4);">
                    Merge conflicts happen when two people edit the same part of a file. Don't worry—they're normal and easy to fix! Here's what conflict markers look like:
                </p>

                <div class="conflict-example">
<span class="conflict-marker">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
<span class="conflict-head">Your changes here</span>
<span class="conflict-marker">=======</span>
<span class="conflict-incoming">Their changes here</span>
<span class="conflict-marker">&gt;&gt;&gt;&gt;&gt;&gt;&gt; branch-name</span>
                </div>

                <div style="margin-top: var(--space-4);">
                    <strong style="color: #92400e; display: block; margin-bottom: var(--space-2);">How to resolve:</strong>
                    <ol style="margin-left: 25px; color: #78350f;">
                        <li style="margin-bottom: var(--space-2);">Open the conflicted file in your editor</li>
                        <li style="margin-bottom: var(--space-2);">Look for the conflict markers (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;)</li>
                        <li style="margin-bottom: var(--space-2);">Decide which changes to keep (or combine both!)</li>
                        <li style="margin-bottom: var(--space-2);">Remove all the conflict markers</li>
                        <li style="margin-bottom: var(--space-2);">Save the file and test your code</li>
                        <li style="margin-bottom: var(--space-2);">Stage the file: <code style="background: #1e293b; color: #fbbf24; padding: 2px 8px; border-radius: 4px;">git add &lt;filename&gt;</code></li>
                        <li style="margin-bottom: var(--space-2);">Complete the merge: <code style="background: #1e293b; color: #fbbf24; padding: 2px 8px; border-radius: 4px;">git commit</code></li>
                    </ol>
                </div>

                <div style="margin-top: var(--space-4); padding: var(--space-4); background: rgba(255,255,255,0.5); border-radius: var(--radius-md);">
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

If asked about something advanced, acknowledge it but bring it back to fundamentals.`;

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
        const branchColors = ['#667eea', '#34d399', '#f59e0b', '#ec4899', '#8b5cf6'];
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

        // Simple visualization using HTML/CSS (since gitgraph.js might have issues)
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
                border-left: 4px solid #667eea;
                cursor: pointer;
                transition: all 0.2s;
            `;

            commitNode.innerHTML = `
                <div style="flex-shrink: 0; width: 40px; height: 40px; background: #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; margin-right: 15px;">
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
                <div style="text-align: right; color: #667eea; font-size: 0.85em;">
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
                max_tokens: 800,
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
        html = html.replace(/```([^`]+)```/g, '<pre style="background: #1e293b; color: #e2e8f0; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 10px 0;"><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-family: monospace; color: #e11d48;">$1</code>');

        // Bold and italic
        html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h4 style="margin: 15px 0 10px 0; color: #667eea;">$1</h4>');
        html = html.replace(/^## (.+)$/gm, '<h3 style="margin: 20px 0 10px 0; color: #667eea;">$1</h3>');
        html = html.replace(/^# (.+)$/gm, '<h2 style="margin: 25px 0 15px 0; color: #667eea;">$1</h2>');

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
