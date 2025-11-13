---
layout: page
title: Ask AI - Site Assistant
description: Get instant answers about our clinical AI tools, prompts, and best practices. Powered by AI running entirely in your browser with complete privacy.
permalink: /ask-ai/
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
        display: inline-flex;
        align-items: center;
        gap: 8px;
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
    }

    .btn-success {
        background: #28a745;
        color: white;
    }

    .btn-success:hover:not(:disabled) {
        background: #218838;
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover:not(:disabled) {
        background: #5a6268;
    }

    .btn-lg {
        padding: 16px 32px;
        font-size: 1.1em;
    }

    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    .chat-container {
        background: white;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        max-width: 900px;
        margin: 0 auto;
        display: none;
    }

    .chat-container.active {
        display: block;
    }

    .quick-questions {
        margin-bottom: 25px;
        padding: 20px;
        background: #f0f7ff;
        border-radius: 8px;
        border-left: 4px solid #2a7ae2;
    }

    .quick-questions h3 {
        color: #2a7ae2;
        margin-bottom: 15px;
        font-size: 1.1em;
    }

    .quick-questions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 10px;
    }

    .quick-question-btn {
        padding: 12px 16px;
        background: white;
        border: 2px solid #2a7ae2;
        border-radius: 6px;
        color: #2a7ae2;
        font-size: 0.95em;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
        font-weight: 500;
    }

    .quick-question-btn:hover {
        background: #2a7ae2;
        color: white;
    }

    .chat-messages {
        max-height: 500px;
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 15px;
        background: #f9f9f9;
        border-radius: 6px;
        min-height: 200px;
    }

    .message {
        margin-bottom: 20px;
        animation: fadeIn 0.3s;
    }

    .message-user {
        text-align: right;
    }

    .message-bubble {
        display: inline-block;
        max-width: 80%;
        padding: 12px 18px;
        border-radius: 18px;
        font-size: 0.95em;
        line-height: 1.6;
    }

    .message-user .message-bubble {
        background: #2a7ae2;
        color: white;
        border-bottom-right-radius: 4px;
    }

    .message-assistant .message-bubble {
        background: white;
        color: #333;
        border: 1px solid #e8e8e8;
        border-bottom-left-radius: 4px;
    }

    .message-label {
        font-size: 0.75em;
        color: #999;
        margin-bottom: 5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .message-assistant .message-label {
        text-align: left;
    }

    .message-user .message-label {
        text-align: right;
    }

    .chat-input-area {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }

    .chat-input-area textarea {
        flex: 1;
        padding: 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1em;
        resize: vertical;
        min-height: 60px;
        max-height: 150px;
    }

    .chat-input-area textarea:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .chat-actions {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .empty-chat {
        text-align: center;
        padding: 60px 20px;
        color: #999;
    }

    .empty-chat-icon {
        font-size: 4em;
        margin-bottom: 15px;
    }

    .spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #2a7ae2;
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

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .typing-indicator {
        display: none;
        padding: 12px 18px;
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 18px;
        border-bottom-left-radius: 4px;
        max-width: 80px;
        margin-bottom: 20px;
    }

    .typing-indicator.active {
        display: inline-block;
    }

    .typing-dots {
        display: flex;
        gap: 4px;
    }

    .typing-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #999;
        animation: typingDot 1.4s infinite;
    }

    .typing-dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .typing-dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes typingDot {
        0%, 60%, 100% {
            opacity: 0.3;
            transform: translateY(0);
        }
        30% {
            opacity: 1;
            transform: translateY(-8px);
        }
    }

    .info-box {
        background: #f0f7ff;
        border-left: 4px solid #2a7ae2;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
    }

    .info-box h4 {
        color: #2a7ae2;
        margin-bottom: 8px;
        font-size: 1em;
    }

    .info-box ul {
        margin-left: 20px;
        color: #555;
        font-size: 0.95em;
    }

    .info-box li {
        margin-bottom: 5px;
    }
</style>

<div class="container">
    <div class="header">
        <h1>💬 Ask AI About This Site</h1>
        <p>Have questions about our tools, prompts, or best practices? This AI assistant knows everything about Physician Prompt Engineering and can help you find exactly what you need.</p>
        <p class="privacy-highlight">🔒 Complete Privacy: All conversations happen locally in your browser. Your questions never leave your device.</p>
    </div>

    <div class="warning-box" id="browser-warning">
        <h3>⚠️ Browser Requirements</h3>
        <ul>
            <li><strong>Recommended:</strong> Chrome or Edge version 113+ (with WebGPU support)</li>
            <li><strong>First-time setup:</strong> Downloads ~2GB AI model (shared with other tools if already downloaded)</li>
            <li><strong>Works offline:</strong> After initial setup, no internet required</li>
        </ul>
    </div>

    <div class="status-panel" id="status-panel">
        <div id="status-message">Click "Start AI Assistant" to begin chatting</div>
        <div id="status-details"></div>
        <div class="progress-bar" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button id="init-btn" class="btn btn-primary btn-lg" onclick="initializeAI()">
            🚀 Start AI Assistant
        </button>
    </div>

    <div class="chat-container" id="chat-container">
        <div class="quick-questions">
            <h3>💡 Quick Questions</h3>
            <div class="quick-questions-grid">
                <button class="quick-question-btn" onclick="askQuickQuestion('What tools are available on this site?')">
                    What tools are available?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('How do I use the AI Medical Scribe?')">
                    How do I use the AI Scribe?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('What prompts are in the library?')">
                    What prompts are available?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('What are the best practices for prompt engineering?')">
                    What are the best practices?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('How do I save and manage my custom prompts?')">
                    How do I manage prompts?
                </button>
                <button class="quick-question-btn" onclick="askQuickQuestion('How does the CPT calculator work?')">
                    How does CPT calculator work?
                </button>
            </div>
        </div>

        <div class="chat-messages" id="chat-messages">
            <div class="empty-chat">
                <div class="empty-chat-icon">💬</div>
                <p>Ask me anything about this site!</p>
                <p style="font-size: 0.9em; margin-top: 10px;">I can help you find tools, understand prompts, or explain best practices.</p>
            </div>
        </div>

        <div class="typing-indicator" id="typing-indicator">
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>

        <div class="chat-input-area">
            <textarea
                id="user-input"
                placeholder="Ask me anything about Physician Prompt Engineering..."
                rows="2"></textarea>
            <button class="btn btn-success btn-lg" onclick="sendMessage()" id="send-btn">
                Send
            </button>
        </div>

        <div class="chat-actions">
            <button class="btn btn-secondary btn-sm" onclick="clearChat()">
                🗑️ Clear Chat
            </button>
            <button class="btn btn-primary btn-sm" onclick="exportChat()">
                💾 Export Chat
            </button>
        </div>

        <div class="info-box">
            <h4>💡 I can help you with:</h4>
            <ul>
                <li><strong>Tools:</strong> AI Scribe, Prompt Assistant, Prompt Generator, Snippet Manager, CPT Calculator, Dot Phrases</li>
                <li><strong>Prompts:</strong> 15+ prompts for A/P formatting, billing, teaching, and more</li>
                <li><strong>Best Practices:</strong> Prompt engineering principles, few-shot learning, documentation tips</li>
                <li><strong>Workflows:</strong> How to integrate these tools into your daily practice</li>
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
    const LLM_MODEL = "Phi-3.5-mini-instruct-q4f16_1-MLC";

    // Comprehensive knowledge base about the site
    const KNOWLEDGE_BASE = `You are an AI assistant for Physician Prompt Engineering (physicianpromptengineering.com), a website dedicated to helping physicians use AI for clinical documentation.

## CORE MISSION
Teach physicians prompt engineering principles and provide free, production-ready AI tools and prompts for medical documentation that reduce burnout and improve efficiency.

## CORE PRINCIPLES (Best Practices)
1. **Examples > Instructions**: Provide 2-5 concrete examples rather than lengthy instructions. Few-shot learning is the most effective prompt engineering technique.
2. **Brevity = Quality**: Concise outputs are easier to scan, edit, and use. Avoid verbose AI scribe output.
3. **One Prompt, One Purpose**: Modular design beats multi-function prompts. Separate prompts for separate tasks ensures reliability.

## AVAILABLE TOOLS

### 1. AI Medical Scribe (🎤)
- **Purpose**: Complete privacy-first AI scribe for clinical documentation
- **How it works**: Record audio → Whisper transcribes → AI formats with custom prompts → Copy to EMR
- **Key features**:
  * 100% client-side (Whisper + Phi-3.5)
  * Record or upload audio files
  * 6 clinical formats + fully editable prompts
  * Save custom prompts to Snippet Manager
  * ~2-3 min processing for 5-min encounter
- **Cost**: $0 (saves $3,600-8,400/year vs commercial scribes like Nuance DAX/Suki)
- **Privacy**: HIPAA-compliant by design - audio never leaves browser
- **URL**: /scribe-tool

### 2. AI Prompt Assistant (🤖)
- **Purpose**: Generate custom clinical documentation prompts using AI
- **How it works**: Describe your needs in plain English → AI generates production-ready prompt → Refine iteratively
- **Key features**:
  * Template-based quick starts
  * Conversation history for refinement
  * Character counter (5,000 char max recommended)
  * Save to Snippet Manager
  * Copy/download/export
- **Models**: Phi-3.5-mini (2GB, runs locally)
- **URL**: /prompt-assistant

### 3. A/P Prompt Generator
- **Purpose**: Interactive form-based custom prompt builder
- **How it works**: Select options from 13 categories → Real-time prompt generation → Copy to EMR
- **Configuration options**: Assessment format, plan format, problem formatting, bullets, detail level, abbreviations, return precautions, custom rules
- **Best practice**: Add 2-3 few-shot examples after generation for best results
- **URL**: /prompt-generator

### 4. Snippet Manager (💾)
- **Purpose**: Personal library for storing and managing custom prompts
- **Key features**:
  * 100% local storage (no account needed)
  * Organize by tags, versions, dates
  * Search and filter
  * Export/import as JSON (for backup or device transfer)
  * CRUD operations (Create, Read, Update, Delete)
- **Privacy**: Uses browser localStorage - HIPAA compliant
- **URL**: /snippet-manager

### 5. CPT E/M Calculator
- **Purpose**: Help physicians select appropriate billing codes (99213-99215)
- **How it works**: Medical Decision Making (MDM) calculator based on 2015 E/M guidelines
- **Features**:
  * Two modes: Well-visit (age-based) and Acute/Sick visit (MDM-based)
  * Assesses problems, data reviewed, and risk
  * Recommends CPT code with supporting documentation
- **URL**: /cpt-calculator

### 6. Dot Phrase Library
- **Purpose**: Ready-made EMR shortcuts (like ".dmplan" for diabetes management)
- **How it works**: Browse templates → Copy → Paste into EMR's dot phrase system
- **Categories**: Appointment reminders, chronic disease management, fever protocols, lab results, wound care, post-op notes
- **Features**: Search, filter by tags, copy-to-clipboard
- **URL**: /dot-phrase-library

## PROMPT LIBRARY (15+ Prompts)

### Documentation Prompts
1. **A/P Formatting (Pithy)** - Concise, scannable assessment & plan with bold problem headers and bullet points
2. **A/P Formatting (Formal)** - Detailed, professional assessment & plan with full sentences
3. **Billing Analysis & MDM** - Medical decision-making documentation for CPT coding
4. **After-Visit Summary (AVS)** - Patient-friendly instructions (6th-8th grade reading level)
5. **Concise Sign-Out** - Brief patient handoffs (2-4 lines per patient)

### Teaching Prompts
6. **Teaching (Socratic Method)** - Socratic questioning for medical education
7. **Teaching (One-Minute Preceptor)** - Structured teaching framework
8. **Teaching Case Converter** - Convert cases into teaching points

### Advanced/Meta Prompts
9. **Metaprompt Generator** - Create prompts that generate other prompts
10. **Metaprompt Refiner** - Improve existing metaprompts
11. **Dot Phrase Creator** - Generate EMR shortcuts
12. **Order Suggester** - Clinical decision support for orders
13. **Quality Improvement Prompt** - QI project documentation
14. **Cram For Rounds** - Rapid clinical synopsis generation

All prompts are:
- Free and open source (MIT license)
- Under 5,000 characters (recommended)
- Production-tested by physicians
- Customizable with your own examples

## WORKFLOWS & INTEGRATION

### Basic Workflow (for AI Scribe in EMR)
1. Record patient encounter (in person or via scribe tool)
2. Use AI scribe feature in EMR (e.g., Epic's "Generate Text with AI")
3. Paste custom prompt from this site
4. AI formats note according to your specifications
5. Copy formatted note to appropriate EMR section

### Advanced Workflow (using AI Medical Scribe tool)
1. Record encounter using browser tool
2. Whisper transcribes automatically
3. Select or customize prompt
4. AI generates formatted note
5. Copy to EMR

### Prompt Customization Workflow
1. Start with template from Prompt Library or Generator
2. Test with real clinical encounters
3. Add 2-3 few-shot examples (critical for quality)
4. Refine based on output quality
5. Save successful version to Snippet Manager
6. Deploy in daily practice

## COMMON QUESTIONS

**Q: What EMRs work with these tools?**
A: Any EMR with AI text generation (Epic's "Generate Text with AI", Cerner, etc.). Prompts work with any LLM-powered system.

**Q: Do I need technical skills?**
A: No. If you can copy and paste text, you can use these tools.

**Q: How much time can I save?**
A: Physicians report 2-5 minutes per routine encounter, up to 15 minutes on complex visits.

**Q: Are these tools HIPAA compliant?**
A: Yes, when using browser-based tools (Scribe, Prompt Assistant). All processing is local - no PHI transmission. When using prompts in your EMR, follow your institution's AI policies.

**Q: What's the difference between the Prompt Generator and Prompt Assistant?**
A: Generator is form-based (select options from dropdowns). Assistant uses AI to create prompts from natural language descriptions. Use Generator for quick standard formats, Assistant for complex custom needs.

**Q: How do I add examples to prompts?**
A: After copying a prompt, add a section like:
---
## Examples

[Example 1 - Real clinical case]
[Example 2 - Different scenario]
[Example 3 - Edge case]
---
This dramatically improves output quality.

**Q: Can I share my successful prompts?**
A: Yes! Use the Contributions page to submit prompts to the library.

## TECHNICAL DETAILS

**Browser Requirements:**
- Chrome/Edge 113+ with WebGPU support (for AI tools)
- ~2-3GB free disk space (one-time download)
- Works completely offline after initial setup

**Models Used:**
- Whisper-base (75MB) for speech-to-text in AI Scribe
- Phi-3.5-mini (2GB) for prompt generation and chat
- All processing happens locally in browser (WebGPU accelerated)

**Privacy Architecture:**
- No backend servers
- No API calls
- No data transmission
- localStorage for snippet management
- IndexedDB for model caching

## CONTRIBUTION
Users can contribute prompts via the Contributions page. All submissions are reviewed before being added to the library.

When answering questions:
- Be concise and helpful
- Cite specific tools/prompts when relevant
- Provide URLs when mentioning specific pages
- Encourage experimentation and iteration
- Always emphasize the importance of few-shot examples
- Remind users that all browser-based tools are completely private

If asked about something not on the site, be honest and suggest alternatives or refer them to the blog for general AI/LLM information.`;

    // =====================================================
    // INITIALIZATION
    // =====================================================
    window.initializeAI = async function() {
        const statusPanel = document.getElementById('status-panel');
        const statusMessage = document.getElementById('status-message');
        const statusDetails = document.getElementById('status-details');
        const progressBar = document.getElementById('progress-bar');
        const progressFill = document.getElementById('progress-fill');
        const initBtn = document.getElementById('init-btn');

        statusPanel.className = 'status-panel loading';
        statusMessage.textContent = '⏳ Loading AI model...';
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
                        statusMessage.textContent = `⏳ Loading: ${percent}%`;
                        statusDetails.textContent = progress.text;
                    }
                }
            );

            statusPanel.className = 'status-panel ready';
            statusMessage.textContent = '✅ AI Assistant Ready!';
            statusDetails.textContent = 'Ask me anything about this site!';
            progressBar.classList.remove('active');

            // Hide status panel, show chat
            setTimeout(() => {
                document.getElementById('status-panel').style.display = 'none';
                document.getElementById('chat-container').classList.add('active');
                document.getElementById('user-input').focus();
            }, 1500);

        } catch (error) {
            statusPanel.className = 'status-panel error';
            statusMessage.textContent = '❌ Failed to load AI model';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Try:</strong> Chrome/Edge 113+ on desktop, or refresh the page
            `;
            console.error('Initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = '🔄 Retry';
        }
    };

    // =====================================================
    // CHAT FUNCTIONS
    // =====================================================
    window.sendMessage = async function() {
        const userInput = document.getElementById('user-input').value.trim();
        if (!userInput || !llmEngine) return;

        // Clear input
        document.getElementById('user-input').value = '';

        // Add user message to chat
        addMessageToChat('user', userInput);

        // Show typing indicator
        document.getElementById('typing-indicator').classList.add('active');
        document.getElementById('send-btn').disabled = true;

        // Scroll to bottom
        scrollToBottom();

        try {
            // Build message history
            const messages = [
                { role: 'system', content: KNOWLEDGE_BASE },
                ...conversationHistory,
                { role: 'user', content: userInput }
            ];

            // Generate response
            const response = await llmEngine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 1500,
                stream: true
            });

            // Hide typing indicator, prepare for streaming
            document.getElementById('typing-indicator').classList.remove('active');

            // Create assistant message bubble
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message message-assistant';
            messageDiv.innerHTML = `
                <div class="message-label">AI Assistant</div>
                <div class="message-bubble" id="streaming-bubble"></div>
            `;
            document.getElementById('chat-messages').appendChild(messageDiv);

            // Remove empty state if present
            const emptyChat = document.querySelector('.empty-chat');
            if (emptyChat) emptyChat.remove();

            let fullResponse = '';
            const streamingBubble = document.getElementById('streaming-bubble');

            // Stream response
            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.textContent = fullResponse;
                scrollToBottom();
            }

            // Remove streaming ID
            streamingBubble.id = '';

            // Add to conversation history
            conversationHistory.push(
                { role: 'user', content: userInput },
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('typing-indicator').classList.remove('active');
            addMessageToChat('assistant', `Sorry, I encountered an error: ${error.message}. Please try again.`);
            console.error('Chat error:', error);
        }

        document.getElementById('send-btn').disabled = false;
        document.getElementById('user-input').focus();
    };

    window.askQuickQuestion = function(question) {
        document.getElementById('user-input').value = question;
        sendMessage();
    };

    function addMessageToChat(role, content) {
        const messagesDiv = document.getElementById('chat-messages');

        // Remove empty state if present
        const emptyChat = messagesDiv.querySelector('.empty-chat');
        if (emptyChat) emptyChat.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${role}`;

        const label = role === 'user' ? 'You' : 'AI Assistant';

        messageDiv.innerHTML = `
            <div class="message-label">${label}</div>
            <div class="message-bubble">${escapeHtml(content)}</div>
        `;

        messagesDiv.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    window.clearChat = function() {
        if (conversationHistory.length === 0) {
            alert('Chat is already empty.');
            return;
        }

        if (!confirm('Clear all chat history? This cannot be undone.')) return;

        conversationHistory = [];
        const messagesDiv = document.getElementById('chat-messages');
        messagesDiv.innerHTML = `
            <div class="empty-chat">
                <div class="empty-chat-icon">💬</div>
                <p>Ask me anything about this site!</p>
                <p style="font-size: 0.9em; margin-top: 10px;">I can help you find tools, understand prompts, or explain best practices.</p>
            </div>
        `;
    };

    window.exportChat = function() {
        if (conversationHistory.length === 0) {
            alert('No chat history to export.');
            return;
        }

        let chatText = '# Chat with Physician Prompt Engineering AI\n\n';
        chatText += `Date: ${new Date().toLocaleString()}\n\n`;
        chatText += '---\n\n';

        conversationHistory.forEach(msg => {
            const role = msg.role === 'user' ? 'You' : 'AI Assistant';
            chatText += `**${role}:**\n${msg.content}\n\n`;
        });

        const blob = new Blob([chatText], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `chat-${new Date().toISOString().split('T')[0]}.md`;
        link.click();
        URL.revokeObjectURL(url);
    };

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Allow Enter to send (Shift+Enter for new line)
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('user-input');
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

<div class="embed-container" style="text-align: center; margin: 30px auto;">
    <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

<div style="background: #e3f2fd; padding: 20px; border-left: 4px solid #2a7ae2; border-radius: 6px; margin-top: 30px;">
    <h3 style="color: #2a7ae2; font-size: 1.2em; margin-bottom: 12px; text-align: center;">💡 About This AI Assistant</h3>
    <p style="margin-bottom: 15px; text-align: center;">This chatbot knows everything about Physician Prompt Engineering. It's powered by Phi-3.5-mini running entirely in your browser with complete privacy.</p>
    <p style="text-align: center;"><strong>Knowledge Base:</strong> 6 tools • 15+ prompts • Best practices • Workflows • Common questions</p>
    <p style="text-align: center;"><strong>Privacy:</strong> All conversations stay on your device. Nothing is sent to any server.</p>
</div>
