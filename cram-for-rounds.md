---
layout: page
title: "Doc Pixel's Cram for Rounds"
description: AI-powered study guide generator to help medical students prepare for rounds. Get quizzed on clinical cases and topics.
permalink: /cram-for-rounds/
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

    /* Input Section */
    .input-section {
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .input-section.hidden {
        display: none;
    }

    .input-section h2 {
        color: #2a7ae2;
        margin-bottom: 15px;
    }

    .input-section p {
        color: #666;
        margin-bottom: 20px;
    }

    #case-input {
        width: 100%;
        min-height: 200px;
        padding: 15px;
        border: 2px solid #d1d5db;
        border-radius: 6px;
        font-size: 1em;
        font-family: inherit;
        resize: vertical;
        margin-bottom: 20px;
    }

    #case-input:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .example-box {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        padding: 15px;
        margin-top: 20px;
    }

    .example-box h4 {
        color: #374151;
        margin-bottom: 10px;
        font-size: 0.95em;
    }

    .example-box p {
        color: #6b7280;
        font-size: 0.9em;
        margin-bottom: 8px;
        font-style: italic;
    }

    /* Chat Container */
    .chat-container {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        display: none;
    }

    .chat-container.active {
        display: block;
    }

    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e5e7eb;
    }

    .chat-header h2 {
        color: #2a7ae2;
        margin: 0;
    }

    .chat-actions {
        display: flex;
        gap: 10px;
    }

    .chat-messages {
        height: 600px;
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
        padding: 15px 18px;
        border-radius: 8px;
        line-height: 1.7;
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

    .message-system .message-bubble {
        background: #fef3c7;
        color: #92400e;
        border: 1px solid #fbbf24;
        text-align: center;
        font-weight: 500;
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

    .empty-chat {
        text-align: center;
        padding: 60px 20px;
        color: #9ca3af;
    }

    .empty-chat svg {
        margin-bottom: 15px;
        color: #d1d5db;
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

    /* Study guide styling */
    .message-assistant .message-bubble h1,
    .message-assistant .message-bubble h2,
    .message-assistant .message-bubble h3 {
        color: #1e40af;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .message-assistant .message-bubble ul,
    .message-assistant .message-bubble ol {
        margin-left: 20px;
        margin-bottom: 15px;
    }

    .message-assistant .message-bubble li {
        margin-bottom: 8px;
    }

    /* Banner Image */
    .banner-image {
        width: 100%;
        max-width: 1200px;
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
    <img src="{{ '/images/doc pixels cram for rounds.jpg' | relative_url }}" alt="Doc Pixel's Cram for Rounds">
</div>

<div class="container">
    <div class="header">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 36px; height: 36px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            Doc Pixel's Cram for Rounds
        </h1>
        <p>Upload a clinical case or topic and get an AI-generated study guide with case presentation, learning objectives, discussion questions, and teaching points. Then practice being quizzed in rounds-style questioning.</p>
    </div>

    <div class="warning-box">
        <h3>Educational Tool Only - Important Disclaimers</h3>
        <ul>
            <li><strong>For studying only:</strong> This is a learning tool to prepare for rounds. Always verify information with authoritative sources.</li>
            <li><strong>No real patient data:</strong> Use synthesized or de-identified cases only. Never input actual patient information.</li>
            <li><strong>AI limitations:</strong> AI may make errors. Always double-check clinical facts and management recommendations.</li>
            <li><strong>Not medical advice:</strong> This tool is for educational preparation, not clinical decision-making.</li>
            <li><strong>Session only:</strong> Nothing is saved between sessions. Export your study guide before closing.</li>
            <li><strong>First use delay:</strong> AI model downloads once (5-15 min), then loads much more quickly.</li>
        </ul>
    </div>

    <!-- Status Panel -->
    <div id="status-panel" class="status-panel">
        <div id="status-message">Click "Initialize AI" to begin</div>
        <div id="status-details">Model is cached locally for instant loading on future visits.</div>
        <div id="progress-bar" class="progress-bar">
            <div id="progress-fill" class="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary" onclick="initializeAI()" style="margin-top: 20px;">
            Initialize AI
        </button>
    </div>

    <!-- Input Section -->
    <div id="input-section" class="input-section hidden">
        <h2>Enter Your Case or Topic</h2>
        <p>Paste a clinical note, describe a patient case, or enter a topic you need to study. The AI will create a comprehensive study guide and then quiz you on it.</p>

        <textarea id="case-input" placeholder="Example: 5yo male, fever 102.5 x 2 days, sore throat, + strep test, started amoxicillin

Or: Topic - Pediatric asthma management and step therapy

Be as detailed or brief as you like - the AI will work with what you provide."></textarea>

        <button class="btn btn-primary" onclick="generateStudyGuide()">
            Generate Study Guide & Start Practice
        </button>

        <div class="example-box">
            <h4>Tips for Best Results:</h4>
            <p><strong>Clinical cases:</strong> Include age, chief complaint, key history, exam findings, and management</p>
            <p><strong>Topics:</strong> Be specific about what you need to know (e.g., "DDx for pediatric limp" vs just "pediatrics")</p>
            <p><strong>De-identify:</strong> Remove all patient identifiers before pasting</p>
        </div>
    </div>

    <!-- Chat Container -->
    <div id="chat-container" class="chat-container">
        <div class="chat-header">
            <h2>Study Session</h2>
            <div class="chat-actions">
                <button class="btn btn-secondary btn-sm" onclick="clearChat()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    New Case
                </button>
                <button class="btn btn-success btn-sm" onclick="exportStudySession()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 4px;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Export
                </button>
            </div>
        </div>

        <div id="chat-messages" class="chat-messages">
            <div class="empty-chat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <p style="margin-top: 15px;">Your study guide will appear here!</p>
            </div>
        </div>

        <div class="typing-indicator" id="typing-indicator">
            AI is thinking...
        </div>

        <div class="chat-input-area">
            <textarea id="chat-input" rows="3" placeholder="Answer the question above, or ask your own follow-up questions..."></textarea>
            <button class="btn btn-primary" onclick="sendMessage()" id="send-btn">
                Send
            </button>
        </div>

        <div class="info-box">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 6px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                How it works:
            </h4>
            <ul>
                <li><strong>Study Guide:</strong> AI creates a structured guide with case presentation, learning objectives, discussion questions, and teaching points</li>
                <li><strong>Practice Mode:</strong> After generating your guide, the AI will quiz you with rounds-style questions</li>
                <li><strong>Flexible:</strong> Answer the questions or ask your own - the conversation adapts to your needs</li>
                <li><strong>Export:</strong> Save your complete study session as markdown for review later</li>
            </ul>
        </div>
    </div>
</div>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let llmEngine = null;
    let conversationHistory = [];
    let studyGuideGenerated = false;
    let currentCase = '';
    const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";

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
            statusDetails.textContent = 'Enter your case or topic to get started';
            progressBar.classList.remove('active');

            setTimeout(() => {
                document.getElementById('input-section').classList.remove('hidden');
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
    // STUDY GUIDE GENERATION
    // =====================================================
    window.generateStudyGuide = async function() {
        const caseInput = document.getElementById('case-input').value.trim();
        if (!caseInput) {
            alert('Please enter a clinical case or topic first');
            return;
        }

        currentCase = caseInput;

        // Hide input section, show chat
        document.getElementById('input-section').style.display = 'none';
        document.getElementById('chat-container').classList.add('active');

        // Clear chat and add user input
        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.innerHTML = '';

        addMessage('user', caseInput);
        addMessage('system', '📚 Generating your study guide...');

        document.getElementById('typing-indicator').classList.add('active');

        try {
            // Limit input to avoid context window issues
            const maxChars = 8000;
            const truncatedCase = caseInput.substring(0, maxChars);

            const prompt = `You are a medical educator helping a student prepare to be quizzed on rounds. Convert this clinical case or topic into a comprehensive study guide.

Output Structure:

CASE PRESENTATION
[Rewrite the case in standard presentation format: Demographics (age/gender only), Chief Complaint, HPI, Pertinent Physical Exam, Assessment and Plan. If the input is a topic rather than a case, briefly describe what this topic covers]

LEARNING OBJECTIVES
1. [Specific, measurable objective related to diagnosis]
2. [Specific, measurable objective related to management]
3. [Specific, measurable objective related to clinical reasoning]

DISCUSSION QUESTIONS
1. [Open-ended question about differential diagnosis]
   - Answer
2. [Question about diagnostic approach or testing]
   - Answer
3. [Question about management decisions]
   - Answer
4. [Question about when to escalate or refer]
   - Answer

KEY TEACHING POINTS
• [Clinical pearl #1]
• [Clinical pearl #2]
• [Clinical pearl #3]

Student input:
${truncatedCase}

Create a thorough study guide following the exact structure above. Be specific, accurate, and clinically relevant.`;

            const response = await llmEngine.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 2000,
                stream: true
            });

            document.getElementById('typing-indicator').classList.remove('active');

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">Study Guide</div>
                <div class="message-bubble" id="streaming-bubble"></div>
            `;
            messagesDiv.appendChild(messageDiv);

            let fullResponse = '';
            const streamingBubble = document.getElementById('streaming-bubble');

            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.innerHTML = renderMarkdown(fullResponse);
                scrollToBottom();
            }

            streamingBubble.id = '';
            studyGuideGenerated = true;

            conversationHistory.push(
                { role: 'user', content: truncatedCase },
                { role: 'assistant', content: fullResponse }
            );

            // Now start practice mode
            setTimeout(() => startPracticeMode(), 2000);

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            addMessage('assistant', 'Sorry, I encountered an error generating the study guide. Please try again.');
            console.error('Study guide error:', error);
        }
    };

    // =====================================================
    // PRACTICE MODE
    // =====================================================
    async function startPracticeMode() {
        addMessage('system', '🎯 Entering Practice Mode - Get ready to be quizzed!');

        document.getElementById('typing-indicator').classList.add('active');

        try {
            const prompt = `You are now acting as Doc Pixel, quizzing a medical student on rounds. Based on the study guide you just created, ask the student ONE specific, challenging question about the case. Make it a rounds-style question that tests clinical reasoning.

Don't reference the study guide - just ask a natural, probing question like Doc Pixel would. Keep it conversational but challenging.`;

            const response = await llmEngine.chat.completions.create({
                messages: [
                    ...conversationHistory,
                    { role: 'user', content: prompt }
                ],
                temperature: 0.8,
                max_tokens: 300,
                stream: true
            });

            document.getElementById('typing-indicator').classList.remove('active');

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">Doc Pixel's Question</div>
                <div class="message-bubble" id="streaming-bubble"></div>
            `;
            document.getElementById('chat-messages').appendChild(messageDiv);

            let fullResponse = '';
            const streamingBubble = document.getElementById('streaming-bubble');

            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.innerHTML = renderMarkdown(fullResponse);
                scrollToBottom();
            }

            streamingBubble.id = '';

            conversationHistory.push(
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            console.error('Practice mode error:', error);
        }
    }

    // =====================================================
    // CHAT INTERACTION
    // =====================================================
    window.sendMessage = async function() {
        const input = document.getElementById('chat-input');
        const userMessage = input.value.trim();
        if (!userMessage) return;

        input.value = '';
        addMessage('user', userMessage);
        document.getElementById('typing-indicator').classList.add('active');
        document.getElementById('send-btn').disabled = true;

        try {
            // Context-aware response
            const systemContext = studyGuideGenerated ?
                `You are helping a medical student prepare for rounds. You've already provided a study guide. Now you're in practice mode - acting as Doc Pixel who quizzes students.

The student just responded to your question or asked a follow-up. If they answered your question, provide feedback on their answer (praise good thinking, gently correct errors, provide teaching points). Then ask another challenging rounds-style question.

If they asked their own question, answer it helpfully and educationally, then continue the quiz with a new question.

Keep the conversation dynamic, encouraging, and educational. Reference the original case context when relevant.`
                :
                `You are a medical educator helping a student understand clinical concepts. Answer their question clearly and helpfully.`;

            const response = await llmEngine.chat.completions.create({
                messages: [
                    { role: 'system', content: systemContext },
                    ...conversationHistory.slice(-6), // Keep last 6 messages for context
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 800,
                stream: true
            });

            document.getElementById('typing-indicator').classList.remove('active');

            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">Doc Pixel</div>
                <div class="message-bubble" id="streaming-bubble"></div>
            `;
            document.getElementById('chat-messages').appendChild(messageDiv);

            let fullResponse = '';
            const streamingBubble = document.getElementById('streaming-bubble');

            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.innerHTML = renderMarkdown(fullResponse);
                scrollToBottom();
            }

            streamingBubble.id = '';

            conversationHistory.push(
                { role: 'user', content: userMessage },
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            addMessage('assistant', 'Sorry, I encountered an error. Please try again.');
            console.error('Chat error:', error);
        }

        document.getElementById('send-btn').disabled = false;
        input.focus();
    };

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================
    function addMessage(role, content) {
        const messagesDiv = document.getElementById('chat-messages');
        const emptyChat = messagesDiv.querySelector('.empty-chat');
        if (emptyChat) emptyChat.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${role}`;

        let label = '';
        if (role === 'user') label = 'You';
        else if (role === 'assistant') label = 'Doc Pixel';
        else if (role === 'system') label = 'System';

        const formattedContent = role === 'assistant' || role === 'system' ?
            renderMarkdown(content) : escapeHtml(content);

        messageDiv.innerHTML = `
            <div class="message-label">${label}</div>
            <div class="message-bubble">${formattedContent}</div>
        `;

        messagesDiv.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    window.clearChat = function() {
        if (!confirm('Start a new case? Your current study session will be lost.')) return;

        conversationHistory = [];
        studyGuideGenerated = false;
        currentCase = '';

        document.getElementById('chat-container').classList.remove('active');
        document.getElementById('input-section').style.display = 'block';
        document.getElementById('case-input').value = '';

        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.innerHTML = `
            <div class="empty-chat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 64px; height: 64px; margin: 0 auto;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <p style="margin-top: 15px;">Your study guide will appear here!</p>
            </div>
        `;
    };

    window.exportStudySession = function() {
        if (conversationHistory.length === 0) {
            alert('No study session to export');
            return;
        }

        let markdown = `# Doc Pixel's Cram for Rounds - Study Session\n\n`;
        markdown += `**Date:** ${new Date().toLocaleString()}\n\n`;
        markdown += `**Original Case/Topic:**\n${currentCase}\n\n`;
        markdown += `---\n\n`;

        conversationHistory.forEach((msg, index) => {
            if (msg.role === 'user') {
                markdown += `## Student Response\n\n${msg.content}\n\n`;
            } else if (msg.role === 'assistant') {
                if (index === 1) {
                    markdown += `## Study Guide\n\n${msg.content}\n\n---\n\n`;
                    markdown += `## Practice Session\n\n`;
                } else {
                    markdown += `**Doc Pixel:**\n\n${msg.content}\n\n`;
                }
            }
        });

        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `cram-session-${new Date().toISOString().split('T')[0]}.md`;
        link.click();
        URL.revokeObjectURL(url);
    };

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
        html = html.replace(/^[\-\*•] (.+)$/gm, '<li style="margin-left: 20px; margin-bottom: 5px;">$1</li>');
        html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul style="margin: 10px 0;">$&</ul>');

        // Numbered lists
        html = html.replace(/^\d+\. (.+)$/gm, '<li style="margin-left: 20px; margin-bottom: 5px;">$1</li>');

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

    // Enter to send
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('chat-input');
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }
    });
</script>
