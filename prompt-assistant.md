---
layout: page
title: AI Prompt Assistant
description: Create custom AI editor prompts for your clinical workflow using AI-powered metaprompting. Generate or refine prompts to match your exact documentation style.
permalink: /prompt-assistant/
---
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-family-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
        background: var(--color-bg-secondary, #f9fafb);
        color: var(--color-text-primary, #1f2937);
        line-height: 1.6;
    }

    .wrapper {
        max-width: 1640px;
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section */
    .hero {
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #1e40af;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #1e40af;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    .privacy-highlight {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #059669;
        font-weight: 600;
        font-size: 1.1em;
        margin-top: 15px;
    }

    /* Paywall Notice */
    .paywall-notice {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left: 4px solid #f59e0b;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
    }

    .paywall-notice h3 {
        color: #92400e;
        margin-bottom: 10px;
        font-size: 1.3em;
    }

    .paywall-notice p {
        color: #78350f;
        margin-bottom: 15px;
    }

    .paywall-notice .btn {
        background: #f59e0b;
        color: white;
        padding: 12px 30px;
        border-radius: 6px;
        text-decoration: none;
        display: inline-block;
        font-weight: 600;
        transition: background 0.2s;
    }

    .paywall-notice .btn:hover {
        background: #d97706;
    }

    /* Warning Box */
    .warning-box {
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
        border-left: 4px solid #dc2626;
        padding: 20px;
        border-radius: 6px;
        margin-bottom: 30px;
    }

    .warning-box h3 {
        color: #991b1b;
        margin-bottom: 12px;
        font-size: 1.1em;
    }

    .warning-box ul {
        margin-left: 20px;
        color: #7f1d1d;
    }

    .warning-box li {
        margin-bottom: 6px;
    }

    /* Status Panel */
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
        background: #2563eb;
        width: 0%;
        transition: width 0.3s ease;
    }

    /* Tab Navigation */
    .tab-navigation {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        border-bottom: 2px solid #e5e7eb;
    }

    .tab-button {
        padding: 15px 30px;
        background: none;
        border: none;
        border-bottom: 3px solid transparent;
        font-size: 1.1em;
        font-weight: 600;
        color: #6b7280;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
        top: 2px;
    }

    .tab-button:hover {
        color: #2563eb;
    }

    .tab-button.active {
        color: #2563eb;
        border-bottom-color: #2563eb;
    }

    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }

    /* Settings Panel */
    .settings-panel {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .settings-panel h3 {
        color: #2563eb;
        margin-bottom: 15px;
        font-size: 1.1em;
    }

    .settings-group {
        margin-bottom: 15px;
    }

    .settings-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #374151;
    }

    .settings-group input {
        width: 200px;
        padding: 10px;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        font-size: 1em;
    }

    .settings-group input:focus {
        outline: none;
        border-color: #2563eb;
    }

    .settings-group small {
        display: block;
        color: #6b7280;
        margin-top: 5px;
        font-size: 0.9em;
    }

    /* Main Layout */
    .main-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        align-items: start;
    }

    @media (max-width: 1200px) {
        .main-layout {
            grid-template-columns: 1fr;
        }

        .output-panel {
            position: static !important;
            top: auto !important;
        }
    }

    .panel {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .panel h2 {
        color: #2563eb;
        margin-bottom: 20px;
        font-size: 1.4em;
    }

    .output-panel {
        position: sticky;
        top: 20px;
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
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .chat-message {
        display: flex;
        gap: 12px;
        animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .message-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        flex-shrink: 0;
        font-size: 0.9em;
    }

    .message-avatar.user {
        background: #dbeafe;
        color: #1e40af;
    }

    .message-avatar.assistant {
        background: #d1fae5;
        color: #065f46;
    }

    .message-content {
        flex: 1;
        padding: 12px 16px;
        border-radius: 8px;
        line-height: 1.6;
    }

    .message-content.user {
        background: #dbeafe;
        color: #1e40af;
    }

    .message-content.assistant {
        background: white;
        color: #374151;
        border: 1px solid #e5e7eb;
    }

    .message-content pre {
        background: #f3f4f6;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
        margin: 10px 0;
        font-size: 0.9em;
    }

    .typing-indicator {
        display: none;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        color: #6b7280;
        font-style: italic;
    }

    .typing-indicator.active {
        display: flex;
    }

    .typing-dots {
        display: flex;
        gap: 4px;
    }

    .typing-dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #9ca3af;
        animation: bounce 1.4s infinite;
    }

    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

    @keyframes bounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-10px); }
    }

    .chat-input-container {
        display: flex;
        gap: 10px;
    }

    #chat-input {
        flex: 1;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1em;
        resize: none;
        min-height: 80px;
        transition: border-color 0.2s;
    }

    #chat-input:focus {
        outline: none;
        border-color: #2563eb;
    }

    #chat-input:disabled {
        background: #f3f4f6;
        cursor: not-allowed;
    }

    /* Buttons */
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary {
        background: #2563eb;
        color: white;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e40af;
        transform: translateY(-1px);
    }

    .btn-success {
        background: #059669;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #047857;
    }

    .btn-secondary {
        background: #6b7280;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #4b5563;
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    /* Chat Actions */
    .chat-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    /* Output Panel */
    #output-content {
        background: #f9fafb;
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #e5e7eb;
        min-height: 300px;
        white-space: pre-wrap;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        color: #374151;
        margin-bottom: 20px;
        max-height: 600px;
        overflow-y: auto;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #9ca3af;
    }

    .empty-state-icon {
        font-size: 3em;
        margin-bottom: 15px;
    }

    .char-counter {
        text-align: right;
        font-size: 0.9em;
        margin-bottom: 15px;
        color: #6b7280;
        font-weight: 600;
    }

    .char-counter.warning {
        color: #f59e0b;
    }

    .char-counter.error {
        color: #dc2626;
    }

    .output-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    /* Info Box */
    .info-box {
        background: #f0f7ff;
        border-left: 4px solid #2563eb;
        padding: 20px;
        border-radius: 6px;
        margin-bottom: 20px;
    }

    .info-box h4 {
        color: #1e40af;
        margin-bottom: 10px;
        font-size: 1.05em;
    }

    .info-box ul {
        margin-left: 20px;
        color: #1e40af;
    }

    .info-box li {
        margin-bottom: 8px;
        line-height: 1.6;
    }

    .info-box strong {
        color: #1e40af;
    }

    /* Spinner */
    .spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #2563eb;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
        display: none;
    }

    .spinner.active {
        display: block;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Welcome Message */
    .welcome-message {
        background: linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%);
        border: 2px solid #bfdbfe;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 15px;
    }

    .welcome-message h3 {
        color: #1e40af;
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    .welcome-message p {
        color: #1e40af;
        margin-bottom: 10px;
        line-height: 1.7;
    }

    .welcome-message ol {
        margin-left: 20px;
        color: #1e40af;
    }

    .welcome-message li {
        margin-bottom: 8px;
        line-height: 1.6;
    }

    .welcome-message strong {
        color: #1e3a8a;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .hero h1 {
            font-size: 1.8em;
        }

        .hero-subtitle {
            font-size: 1em;
        }

        .tab-button {
            padding: 12px 20px;
            font-size: 1em;
        }

        .chat-container {
            height: 400px;
        }

        .output-actions {
            flex-direction: column;
        }

        .output-actions .btn {
            width: 100%;
        }
    }
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1 style="display: flex; align-items: center; justify-content: center; gap: 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 48px; height: 48px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            AI Prompt Assistant
        </h1>
        <p class="hero-subtitle">
            Create custom AI editor prompts for your clinical workflow. Generate new prompts from examples or refine existing ones using AI-powered metaprompting.
        </p>
        <div class="privacy-highlight">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            100% Private - AI runs locally in your browser
        </div>
    </div>
</div>

<div class="container">
    <!-- Paywall Notice -->
    <div class="paywall-notice">
        <h3 style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Premium Feature
        </h3>
        <p>
            This AI-powered prompt assistant and the integrated snippet manager are available to premium subscribers.
            Support the development of free tools for physicians while getting access to advanced features.
        </p>
        <a href="/contribute" class="btn">Learn More About Premium Access</a>
    </div>

    <!-- Warning Box -->
    <div class="warning-box">
        <h3 style="display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            Educational Tool - No PHI
        </h3>
        <ul>
            <li><strong>Do not</strong> enter any patient data, protected health information, or sensitive information</li>
            <li>This tool is for creating prompt templates, not processing actual patient notes</li>
            <li>Use de-identified examples only when demonstrating your desired output format</li>
            <li>First-time setup downloads a ~2GB AI model (cached for future use)</li>
        </ul>
    </div>

    <!-- Status Panel -->
    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Initialize AI Assistant" to load the AI model</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-success btn-lg" onclick="initializeEngine()">
            Initialize AI Assistant
        </button>
    </div>

    <!-- Settings Panel -->
    <div class="settings-panel" id="settings-panel" style="display: none;">
        <h3 style="display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Settings
        </h3>
        <div class="settings-group">
            <label for="char-limit">Character Limit for Your EMR System</label>
            <input type="number" id="char-limit" value="5000" min="1000" max="50000" step="100">
            <small>Default: 5,000 (Epic standard). Adjust if your system has different limits.</small>
        </div>
    </div>

    <!-- Tab Navigation -->
    <div class="tab-navigation" id="tab-navigation" style="display: none;">
        <button class="tab-button active" onclick="switchTab('generate')" style="display: flex; align-items: center; gap: 8px; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            Generate from Scratch
        </button>
        <button class="tab-button" onclick="switchTab('refine')" style="display: flex; align-items: center; gap: 8px; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            Refine Existing
        </button>
    </div>

    <!-- Tab Content: Generate from Scratch -->
    <div id="tab-generate" class="tab-content active" style="display: none;">
        <div class="main-layout">
            <div class="panel">
                <h2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>Chat with AI Prompt Generator</h2>

                <div class="info-box">
                    <h4>How to use this tool:</h4>
                    <ul>
                        <li><strong>Provide 3-5 examples</strong> of your ideal A&P output format</li>
                        <li><strong>Optionally</strong> specify any explicit formatting rules</li>
                        <li><strong>Optionally</strong> provide boilerplate phrases for common scenarios</li>
                        <li>The AI will analyze patterns and generate a custom prompt for you</li>
                    </ul>
                </div>

                <div class="chat-container">
                    <div class="chat-messages" id="chat-messages-generate">
                        <!-- Messages will be inserted here -->
                    </div>

                    <div class="chat-input-container">
                        <textarea
                            id="chat-input"
                            placeholder="Paste your first example A&P output here, or describe what you need..."
                            disabled
                        ></textarea>
                    </div>

                    <div class="chat-actions">
                        <button id="send-btn" class="btn btn-primary" onclick="sendMessage()" disabled>
                            Send Message
                        </button>
                        <button class="btn btn-secondary" onclick="clearChat()">
                            Clear Chat
                        </button>
                    </div>
                </div>
            </div>

            <div class="output-panel">
                <h2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>Generated Prompt</h2>

                <div id="output-empty" class="empty-state">
                    <div class="empty-state-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" /></svg></div>
                    <p>Your AI-generated prompt will appear here</p>
                </div>

                <div class="char-counter" id="char-counter" style="display: none;"></div>

                <div id="output-content" style="display: none;"></div>

                <div class="output-actions" id="output-actions" style="display: none;">
                    <button class="btn btn-success" onclick="copyPrompt()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg> Copy to Clipboard
                    </button>
                    <button class="btn btn-primary" onclick="saveToSnippetManager()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg> Save to Snippet Manager
                    </button>
                    <button class="btn btn-secondary" onclick="downloadPrompt()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg> Download as .txt
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Tab Content: Refine Existing -->
    <div id="tab-refine" class="tab-content" style="display: none;">
        <div class="main-layout">
            <div class="panel">
                <h2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>Chat with AI Prompt Refiner</h2>

                <div class="info-box">
                    <h4>How to use this tool:</h4>
                    <ul>
                        <li><strong>Paste your current prompt</strong> that needs improvement</li>
                        <li><strong>Provide 2-5 examples</strong> of your ideal desired output</li>
                        <li><strong>Provide 2-5 examples</strong> of what you're currently getting</li>
                        <li>The AI will identify gaps and generate a refined version</li>
                    </ul>
                </div>

                <div class="chat-container">
                    <div class="chat-messages" id="chat-messages-refine">
                        <!-- Messages will be inserted here -->
                    </div>

                    <div class="chat-input-container">
                        <textarea
                            id="chat-input-refine"
                            placeholder="Paste your current prompt or describe what needs improvement..."
                            disabled
                        ></textarea>
                    </div>

                    <div class="chat-actions">
                        <button id="send-btn-refine" class="btn btn-primary" onclick="sendMessageRefine()" disabled>
                            Send Message
                        </button>
                        <button class="btn btn-secondary" onclick="clearChatRefine()">
                            Clear Chat
                        </button>
                    </div>
                </div>
            </div>

            <div class="output-panel">
                <h2>🔧 Refined Prompt</h2>

                <div id="output-empty-refine" class="empty-state">
                    <div class="empty-state-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></div>
                    <p>Your refined prompt will appear here</p>
                </div>

                <div class="char-counter" id="char-counter-refine" style="display: none;"></div>

                <div id="output-content-refine" style="display: none;"></div>

                <div class="output-actions" id="output-actions-refine" style="display: none;">
                    <button class="btn btn-success" onclick="copyPromptRefine()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg> Copy to Clipboard
                    </button>
                    <button class="btn btn-primary" onclick="saveToSnippetManagerRefine()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg> Save to Snippet Manager
                    </button>
                    <button class="btn btn-secondary" onclick="downloadPromptRefine()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg> Download as .txt
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let engine = null;
    let isLoading = false;
    let conversationHistoryGenerate = [];
    let conversationHistoryRefine = [];
    let currentOutput = '';
    let currentOutputRefine = '';
    let currentTab = 'generate';
    let charLimit = 5000;

    // Model configuration
    const MODEL_ID = "Phi-3.5-mini-instruct-q4f16_1-MLC";

    // System prompts from metaprompt files
    const SYSTEM_PROMPT_GENERATOR = `# Custom A/P Formatting Prompt Generator

You are an expert at analyzing clinical documentation patterns and creating LLM prompts. Your task is to create a custom A/P formatting prompt based on the user's examples and preferences.

-----

## Your Input Requirements

The user will provide:

1. **Few-shot examples** - 3-5 examples of their ideal A/P output (these are CRITICAL)
2. **Explicit formatting rules** (optional) - Any specific requirements they know they want
3. **Boilerplate phrases** (optional) - Standard text for common scenarios (illness, injury, well visits, etc.)

-----

## Your Analysis Process

### Step 1: Pattern Recognition

Analyze the few-shot examples for:

- **Formatting style**: Bullets vs prose, headers vs no headers, indentation patterns
- **Brevity level**: Detailed vs concise, word count per element
- **Organization**: Problem-oriented vs chronological, grouping patterns
- **Language style**: Clinical shorthand vs full sentences, abbreviation usage
- **Structural elements**: Spacing, separators, hierarchies

### Step 2: Extract Implicit Rules

Identify patterns the user may not have explicitly stated:

- Consistent abbreviations (RTC, PRN, BID, PO, etc.)
- Formatting conventions (bold, italics, capitalization)
- One-liner assessment if applicable
- Problem naming conventions
- Follow-up instruction patterns
- Medication notation style
- Conditional logic (when to include certain elements)

### Step 3: Synthesize Requirements

Combine:

- Patterns from few-shot examples (highest priority)
- User's explicit rules
- User's boilerplate phrases

-----

## Your Output Format

Generate a complete, ready-to-use A/P formatting prompt with these sections:

### Section 1: Task Description (1-2 sentences)

Brief, clear statement of what the prompt does.

### Section 2: Output Structure

Describe the exact format, matching the user's examples:

- How problems/diagnoses are presented
- Bullet structure and content
- Spacing and organization
- Any conditional elements

### Section 3: Formatting Rules (numbered list)

Explicit instructions for:

1. Typography (bold, italics, etc.)
2. Indentation and spacing
3. Bullet styles
4. Brevity requirements
5. Abbreviation usage
6. Problem naming
7. Never fabricate information
8. Any other formatting specifics

### Section 4: Boilerplate Text (if applicable)

Include user's boilerplate with clear conditional triggers:

- When to use each phrase
- How to format it (italics, placement, etc.)

### Section 5: Few-Shot Examples

Include the user's examples exactly as provided, with the label:
"## Few-Shot Examples"

-----

## Quality Checks

Before outputting, verify your prompt:

1. Matches the user's example patterns precisely
2. Includes all user-provided boilerplate
3. Incorporates explicit rules they mentioned
4. Is ≤5,000 characters (for EMR LLM constraint)
5. Uses plain text descriptions (no markdown in instructions)
6. Has clear, actionable formatting rules
7. Includes their exact few-shot examples

-----

## Important Constraints

- **Character limit**: Your output prompt must be ≤5,000 characters
- **Plain text only**: Describe formatting in words (e.g., "Bold the problem name" not "**Problem**")
- **Preserve examples exactly**: Don't modify the user's few-shot examples
- **No fabrication**: Emphasize that the LLM should never infer missing information
- **Show don't tell**: Few-shot examples are the most powerful teaching tool

-----

## Character Count

After generating the prompt, state:

- **Character count**: [X] / 5,000
- **Remaining headroom**: [Y] characters

If over 5,000 characters, identify what can be condensed without losing critical pattern information.

-----

Take the user's input and generate their custom A/P formatting prompt following this structure.`;

    const SYSTEM_PROMPT_REFINER = `# A/P Prompt Refiner

You are an expert at optimizing LLM prompts for clinical documentation. Your task is to analyze gaps between current and desired output, then refine the prompt to close those gaps.

-----

## Your Input

The user will provide:

1. **Current prompt** - Their A/P formatting prompt
2. **Ideal output** - 2-5 examples of what they want
3. **Current output** - 2-5 examples of what they're getting

-----

## Analysis Process

### Step 1: Gap Analysis

Compare current vs ideal output:

- **Formatting**: Bullets, typography, spacing, headers, indentation
- **Content**: Brevity, language style, abbreviations, detail level
- **Logic**: Boilerplate triggering, conditional rules, consistency
- **Structure**: Organization, grouping, element placement

### Step 2: Root Cause

For each gap, identify WHY:

- Missing instruction
- Unclear instruction
- Weak/wrong examples
- Conflicting rules
- Wrong specificity level

### Step 3: Fix Design

Determine solution:

- Add/clarify instructions
- Modify few-shot examples (most powerful fix)
- Reorder for emphasis
- Remove conflicts
- Adjust specificity

-----

## Output Format

### Part 1: Gap Summary

List top 3-5 gaps:

1. [Gap] - What's wrong: [issue] | Root cause: [why] | Impact: [effect]
2. [Next gap]

### Part 2: Fixes

For each gap:

**Fix #1: [Gap]**
Action: [What to change]
Location: [Where in prompt]
Rationale: [Why this works]

### Part 3: Refined Prompt

Complete updated prompt with [UPDATED] markers on changes. Stay ≤5,000 characters.

### Part 4: Testing

Priority tests:
1. [Scenario]
2. [Scenario]

Watch for: [Potential issues]

-----

## Key Principles

**Hierarchy of Elements:**

1. Few-shot examples (most powerful)
2. Explicit rules
3. Task description
4. Boilerplate

**Common Patterns:**

- Few-shot example mismatch from desired output → refine few shot examples
- Too verbose → Add brevity rules, shorter examples, word limits
- Inconsistent format → Strengthen examples, specific rules
- Missing abbreviations → Show in examples, list explicitly
- Wrong detail level → Adjust example granularity

**Strategy:**

- Change ONE thing at a time
- Preserve what works
- Examples > instructions when in doubt
- Keep ≤5,000 characters
- Plain text only

-----

## Quality Checks

Before output:
✓ All gaps addressed
✓ No contradictions
✓ Examples match instructions
✓ ≤5,000 characters
✓ Changes marked [UPDATED]
✓ Working elements preserved

-----

## Character Count

After generating:
Original: [X] / 5,000
Refined: [Y] / 5,000

-----

Analyze the user's inputs and provide gap analysis, specific fixes, and a refined prompt.`;

    // =====================================================
    // ENGINE INITIALIZATION
    // =====================================================
    window.initializeEngine = async function() {
        if (engine || isLoading) return;

        const supportsWebGPU = await checkWebGPUSupport();
        if (!supportsWebGPU) return;

        isLoading = true;
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Initializing AI model...';
        statusDetails.textContent = 'First time: ~2GB download (cached for future visits)';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            engine = await CreateMLCEngine(
                MODEL_ID,
                {
                    initProgressCallback: (progress) => {
                        const percent = (progress.progress * 100).toFixed(1);
                        progressFill.style.width = `${percent}%`;
                        statusMessage.textContent = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Loading: ${percent}%`;
                        statusDetails.textContent = progress.text;
                    }
                }
            );

            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> AI Assistant Ready!';
            statusDetails.textContent = 'Model loaded and running locally in your browser.';
            progressBar.classList.remove('active');
            initBtn.style.display = 'none';

            // Show UI elements
            document.getElementById('settings-panel').style.display = 'block';
            document.getElementById('tab-navigation').style.display = 'flex';
            document.getElementById('tab-generate').style.display = 'block';

            // Enable chat inputs
            document.getElementById('chat-input').disabled = false;
            document.getElementById('send-btn').disabled = false;
            document.getElementById('chat-input-refine').disabled = false;
            document.getElementById('send-btn-refine').disabled = false;

            // Add welcome messages
            addWelcomeMessage('generate');
            addWelcomeMessage('refine');

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Failed to load AI model';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Troubleshooting:</strong><br>
                • Check your internet connection<br>
                • Ensure you have ~3GB free disk space<br>
                • Try refreshing the page<br>
                • Use Chrome/Edge 113+ on desktop
            `;
            console.error('Engine initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }

        isLoading = false;
    };

    async function checkWebGPUSupport() {
        if (!navigator.gpu) {
            document.getElementById('status-panel').className = 'status-panel error';
            document.getElementById('status-message').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> WebGPU Not Supported';
            document.getElementById('status-details').innerHTML = `
                Your browser doesn't support WebGPU, which is required for running AI models locally.
                <br><br>
                <strong>Try:</strong><br>
                • Chrome or Edge version 113+ on desktop<br>
                • Enable WebGPU in experimental flags (chrome://flags)<br>
            `;
            document.getElementById('init-btn').style.display = 'none';
            return false;
        }
        return true;
    }

    // =====================================================
    // TAB SWITCHING
    // =====================================================
    window.switchTab = function(tab) {
        currentTab = tab;

        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Update tab content
        document.getElementById('tab-generate').classList.remove('active');
        document.getElementById('tab-refine').classList.remove('active');

        if (tab === 'generate') {
            document.getElementById('tab-generate').classList.add('active');
            document.getElementById('tab-generate').style.display = 'block';
            document.getElementById('tab-refine').style.display = 'none';
        } else {
            document.getElementById('tab-refine').classList.add('active');
            document.getElementById('tab-refine').style.display = 'block';
            document.getElementById('tab-generate').style.display = 'none';
        }
    };

    // =====================================================
    // WELCOME MESSAGES
    // =====================================================
    function addWelcomeMessage(tab) {
        const messagesContainer = tab === 'generate' ?
            document.getElementById('chat-messages-generate') :
            document.getElementById('chat-messages-refine');

        const welcomeHTML = tab === 'generate' ? `
            <div class="welcome-message">
                <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" /></svg>Welcome to the Prompt Generator!</h3>
                <p>I'll help you create a custom A/P formatting prompt. Here's how we'll work together:</p>
                <ol>
                    <li><strong>Share 3-5 examples</strong> of your ideal A&P output format (paste them one at a time or all together)</li>
                    <li><strong>Optional:</strong> Tell me any specific formatting rules you want</li>
                    <li><strong>Optional:</strong> Provide standard boilerplate phrases for common scenarios</li>
                </ol>
                <p>I'll analyze your examples, identify patterns, and generate a complete prompt that matches your style!</p>
                <p><strong>Let's start:</strong> Paste your first example of ideal A&P output, or describe what you're looking for.</p>
            </div>
        ` : `
            <div class="welcome-message">
                <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" /></svg>Welcome to the Prompt Refiner!</h3>
                <p>I'll help you improve your existing A/P formatting prompt. Here's what I need:</p>
                <ol>
                    <li><strong>Your current prompt</strong> - The prompt you're currently using</li>
                    <li><strong>2-5 examples of ideal output</strong> - What you want to get</li>
                    <li><strong>2-5 examples of current output</strong> - What you're actually getting</li>
                </ol>
                <p>I'll compare them, identify gaps, and create a refined version with specific improvements marked.</p>
                <p><strong>Let's start:</strong> Paste your current prompt that needs improvement.</p>
            </div>
        `;

        messagesContainer.innerHTML = welcomeHTML;
    }

    // =====================================================
    // CHAT MESSAGING - Generate Tab
    // =====================================================
    window.sendMessage = async function() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (!message || !engine) return;

        // Add user message to UI
        addMessageToChat('generate', 'user', message);
        input.value = '';

        // Add to conversation history
        conversationHistoryGenerate.push({
            role: 'user',
            content: message
        });

        // Disable input while processing
        input.disabled = true;
        document.getElementById('send-btn').disabled = true;

        // Show typing indicator
        showTypingIndicator('generate');

        try {
            // Get character limit
            charLimit = parseInt(document.getElementById('char-limit').value) || 5000;

            // Build system prompt with character limit
            const systemPromptWithLimit = SYSTEM_PROMPT_GENERATOR + `\n\n**IMPORTANT**: Keep the final prompt under ${charLimit} characters for EMR compatibility.`;

            // Build messages array
            const messages = [
                { role: 'system', content: systemPromptWithLimit },
                ...conversationHistoryGenerate
            ];

            // Generate response
            const response = await engine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 3000,
                stream: false
            });

            const assistantMessage = response.choices[0].message.content;

            // Add assistant response to conversation
            conversationHistoryGenerate.push({
                role: 'assistant',
                content: assistantMessage
            });

            // Hide typing indicator
            hideTypingIndicator('generate');

            // Add assistant message to UI
            addMessageToChat('generate', 'assistant', assistantMessage);

            // Extract and display prompt if present
            extractAndDisplayPrompt(assistantMessage, 'generate');

        } catch (error) {
            console.error('Generation error:', error);
            hideTypingIndicator('generate');
            addMessageToChat('generate', 'assistant', `Error: ${error.message}\n\nPlease try again.`);
        }

        // Re-enable input
        input.disabled = false;
        document.getElementById('send-btn').disabled = false;
        input.focus();
    };

    // =====================================================
    // CHAT MESSAGING - Refine Tab
    // =====================================================
    window.sendMessageRefine = async function() {
        const input = document.getElementById('chat-input-refine');
        const message = input.value.trim();

        if (!message || !engine) return;

        // Add user message to UI
        addMessageToChat('refine', 'user', message);
        input.value = '';

        // Add to conversation history
        conversationHistoryRefine.push({
            role: 'user',
            content: message
        });

        // Disable input while processing
        input.disabled = true;
        document.getElementById('send-btn-refine').disabled = true;

        // Show typing indicator
        showTypingIndicator('refine');

        try {
            // Get character limit
            charLimit = parseInt(document.getElementById('char-limit').value) || 5000;

            // Build system prompt with character limit
            const systemPromptWithLimit = SYSTEM_PROMPT_REFINER + `\n\n**IMPORTANT**: Keep the refined prompt under ${charLimit} characters for EMR compatibility.`;

            // Build messages array
            const messages = [
                { role: 'system', content: systemPromptWithLimit },
                ...conversationHistoryRefine
            ];

            // Generate response
            const response = await engine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 3000,
                stream: false
            });

            const assistantMessage = response.choices[0].message.content;

            // Add assistant response to conversation
            conversationHistoryRefine.push({
                role: 'assistant',
                content: assistantMessage
            });

            // Hide typing indicator
            hideTypingIndicator('refine');

            // Add assistant message to UI
            addMessageToChat('refine', 'assistant', assistantMessage);

            // Extract and display prompt if present
            extractAndDisplayPrompt(assistantMessage, 'refine');

        } catch (error) {
            console.error('Generation error:', error);
            hideTypingIndicator('refine');
            addMessageToChat('refine', 'assistant', `Error: ${error.message}\n\nPlease try again.`);
        }

        // Re-enable input
        input.disabled = false;
        document.getElementById('send-btn-refine').disabled = false;
        input.focus();
    };

    // =====================================================
    // CHAT UI HELPERS
    // =====================================================
    function addMessageToChat(tab, role, content) {
        const messagesContainer = tab === 'generate' ?
            document.getElementById('chat-messages-generate') :
            document.getElementById('chat-messages-refine');

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';

        const avatar = document.createElement('div');
        avatar.className = `message-avatar ${role}`;
        avatar.textContent = role === 'user' ? 'You' : 'AI';

        const messageContent = document.createElement('div');
        messageContent.className = `message-content ${role}`;
        messageContent.textContent = content;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator(tab) {
        const messagesContainer = tab === 'generate' ?
            document.getElementById('chat-messages-generate') :
            document.getElementById('chat-messages-refine');

        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator active';
        typingDiv.id = `typing-${tab}`;
        typingDiv.innerHTML = `
            <div class="message-avatar assistant">AI</div>
            <div>
                Thinking
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTypingIndicator(tab) {
        const indicator = document.getElementById(`typing-${tab}`);
        if (indicator) {
            indicator.remove();
        }
    }

    // =====================================================
    // PROMPT EXTRACTION AND DISPLAY
    // =====================================================
    function extractAndDisplayPrompt(message, tab) {
        // Try to find a complete prompt in the message
        // Look for common patterns like "---" separators or complete structured content

        // For now, just display the entire message as the prompt
        // In a more sophisticated version, we could parse sections

        const outputContent = tab === 'generate' ?
            document.getElementById('output-content') :
            document.getElementById('output-content-refine');

        const outputEmpty = tab === 'generate' ?
            document.getElementById('output-empty') :
            document.getElementById('output-empty-refine');

        const outputActions = tab === 'generate' ?
            document.getElementById('output-actions') :
            document.getElementById('output-actions-refine');

        const charCounter = tab === 'generate' ?
            document.getElementById('char-counter') :
            document.getElementById('char-counter-refine');

        if (tab === 'generate') {
            currentOutput = message;
        } else {
            currentOutputRefine = message;
        }

        outputEmpty.style.display = 'none';
        outputContent.style.display = 'block';
        outputContent.textContent = message;
        outputActions.style.display = 'flex';

        updateCharCount(message.length, tab);
    }

    function updateCharCount(count, tab) {
        const charCounter = tab === 'generate' ?
            document.getElementById('char-counter') :
            document.getElementById('char-counter-refine');

        charCounter.style.display = 'block';

        const limit = parseInt(document.getElementById('char-limit').value) || 5000;
        let className = 'char-counter';
        let message = `${count.toLocaleString()} / ${limit.toLocaleString()} characters`;

        if (count > limit) {
            className += ' error';
            message += ' ⚠️ Over limit!';
        } else if (count > limit * 0.9) {
            className += ' warning';
            message += ' ⚠️ Close to limit';
        } else {
            message += ' <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Good';
        }

        charCounter.className = className;
        charCounter.textContent = message;
    }

    // =====================================================
    // CLEAR CHAT
    // =====================================================
    window.clearChat = function() {
        if (conversationHistoryGenerate.length > 0) {
            if (!confirm('Clear conversation history and start fresh?')) return;
        }

        conversationHistoryGenerate = [];
        currentOutput = '';

        document.getElementById('chat-messages-generate').innerHTML = '';
        addWelcomeMessage('generate');

        document.getElementById('output-content').style.display = 'none';
        document.getElementById('output-empty').style.display = 'block';
        document.getElementById('output-actions').style.display = 'none';
        document.getElementById('char-counter').style.display = 'none';
        document.getElementById('chat-input').value = '';
    };

    window.clearChatRefine = function() {
        if (conversationHistoryRefine.length > 0) {
            if (!confirm('Clear conversation history and start fresh?')) return;
        }

        conversationHistoryRefine = [];
        currentOutputRefine = '';

        document.getElementById('chat-messages-refine').innerHTML = '';
        addWelcomeMessage('refine');

        document.getElementById('output-content-refine').style.display = 'none';
        document.getElementById('output-empty-refine').style.display = 'block';
        document.getElementById('output-actions-refine').style.display = 'none';
        document.getElementById('char-counter-refine').style.display = 'none';
        document.getElementById('chat-input-refine').value = '';
    };

    // =====================================================
    // OUTPUT ACTIONS
    // =====================================================
    window.copyPrompt = async function() {
        try {
            await navigator.clipboard.writeText(currentOutput);
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Copied!';
            setTimeout(() => btn.innerHTML = originalText, 2000);
        } catch (error) {
            alert('Failed to copy to clipboard. Please select and copy manually.');
        }
    };

    window.copyPromptRefine = async function() {
        try {
            await navigator.clipboard.writeText(currentOutputRefine);
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Copied!';
            setTimeout(() => btn.innerHTML = originalText, 2000);
        } catch (error) {
            alert('Failed to copy to clipboard. Please select and copy manually.');
        }
    };

    window.downloadPrompt = function() {
        const blob = new Blob([currentOutput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ap-prompt-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.downloadPromptRefine = function() {
        const blob = new Blob([currentOutputRefine], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ap-prompt-refined-${new Date().toISOString().split('T')[0]}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };

    window.saveToSnippetManager = function() {
        saveSnippet(currentOutput, 'Generated Prompt');
    };

    window.saveToSnippetManagerRefine = function() {
        saveSnippet(currentOutputRefine, 'Refined Prompt');
    };

    function saveSnippet(content, defaultTitle) {
        try {
            const snippets = JSON.parse(localStorage.getItem('aiPromptSnippets') || '[]');

            const title = prompt('Enter a title for this prompt:', defaultTitle);
            if (!title) return;

            const tags = prompt('Enter tags (comma-separated):', 'ai-generated, a&p-formatting');
            const tagArray = tags ? tags.split(',').map(t => t.trim()) : ['ai-generated'];

            snippets.push({
                id: Date.now(),
                title: title,
                content: content,
                tags: tagArray,
                created: new Date().toISOString(),
                charCount: content.length
            });

            localStorage.setItem('aiPromptSnippets', JSON.stringify(snippets));

            if (confirm('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-bottom;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Saved to Snippet Manager!\n\nWould you like to open the Snippet Manager now?')) {
                window.location.href = '/prompt-snippet-manager';
            }
        } catch (error) {
            alert('Failed to save to Snippet Manager. Storage might be full.');
            console.error('Save error:', error);
        }
    }

    // =====================================================
    // KEYBOARD SHORTCUTS
    // =====================================================
    document.addEventListener('DOMContentLoaded', () => {
        // Enter to send (Ctrl+Enter for newline)
        document.getElementById('chat-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
                e.preventDefault();
                if (!e.target.disabled) {
                    sendMessage();
                }
            }
        });

        document.getElementById('chat-input-refine').addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
                e.preventDefault();
                if (!e.target.disabled) {
                    sendMessageRefine();
                }
            }
        });
    });
</script>

<div class="embed-container" style="text-align: center; margin: 30px auto;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<div style="background: #e3f2fd; padding: 20px; border-left: 4px solid #2563eb; border-radius: 6px; margin-top: 30px; text-align: center;">
    <h3 style="color: #1e40af; font-size: 1.2em; margin-bottom: 12px;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: text-bottom; margin-right: 8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>Privacy & How It Works
    </h3>
    <p style="margin-bottom: 15px;">This tool downloads a 2GB AI model (Phi-3.5-mini) to your browser on first use. After that, everything runs locally—no internet required, complete privacy. The AI analyzes your examples and helps you craft the perfect prompt.</p>
    <p><strong>Performance:</strong> Expect 10-30 tokens/second on most laptops, faster with dedicated GPUs. First download takes 5-15 minutes, then it's cached forever.</p>
</div>
