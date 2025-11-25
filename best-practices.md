---
layout: default
title: Prompting Best Practices
description: Learn how to write effective medical prompts. Our definitive guide for physicians covers few-shot examples, brevity, and modular prompt design for EMRs.
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Clinical Prompt Engineering Best Practices</h1>
    <p class="hero-subtitle">
      Master the art of writing effective prompts for AI-powered clinical documentation
    </p>
  </div>
</div>

<!-- Video Tutorial -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl);">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube-nocookie.com/embed/haSZOP6fiFM?si=a7yZiRBuRdaB95Y9"
          title="Prompt Engineering Tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</section>

<!-- Three Core Principles - Cards -->
<section class="section bg-secondary">
  <div class="container">
    <h2 class="text-center mb-8">Three Core Principles</h2>
    <div class="grid grid-cols-1 grid-cols-3">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">1. Examples > Instructions</h3>
        </div>
        <div class="card-body">
          <p><strong>Show the AI what you want through 3-5 concrete examples rather than explaining it.</strong></p>
          <p class="text-sm text-secondary">LLMs excel at pattern recognition. Examples allow the model to infer your implicit rules more effectively than explicit instructions.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">2. Brevity = Quality</h3>
        </div>
        <div class="card-body">
          <p><strong>Concise outputs scan faster, edit easier, and feel more natural.</strong></p>
          <p class="text-sm text-secondary">Brief documentation reduces cognitive load, makes error detection easier, and maintains physician-like language.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">3. One Prompt, One Purpose</h3>
        </div>
        <div class="card-body">
          <p><strong>Specialized prompts outperform multi-function alternatives.</strong></p>
          <p class="text-sm text-secondary">Modular design allows independent refinement, easier troubleshooting, and better reliability.</p>
        </div>
      </div>

    </div>

    <!-- AI Tutor Callout -->
    <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 1.25rem 1.5rem; border-radius: var(--radius-lg, 12px); margin-top: 2rem; display: flex; align-items: center; gap: 15px; border-left: 4px solid #059669;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 32px; height: 32px; color: #047857; flex-shrink: 0;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
      <div style="flex: 1;">
        <strong style="color: #065f46; font-size: 1.05em;">Have questions? Ask the AI Tutor!</strong>
        <p style="margin: 0.25rem 0 0 0; color: #047857; font-size: 0.95em;">Get personalized guidance on these principles and more from our interactive AI Prompt Engineering Tutor below.</p>
      </div>
      <a href="#prompt-tutor" style="background: #059669; color: white; padding: 0.6rem 1.25rem; border-radius: 8px; font-weight: 600; text-decoration: none; white-space: nowrap; transition: all 0.2s;" onmouseover="this.style.background='#047857'" onmouseout="this.style.background='#059669'">Jump to Tutor ↓</a>
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="section">
  <div class="container">
    <div class="embed-container">
      <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
    </div>
  </div>
</section>

<!-- Detailed Implementation Guide -->
<section class="section bg-secondary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Detailed Implementation Guide</h2>

      <!-- Principle 1 -->
      <div class="card mb-8">
        <div class="card-header">
          <h3 class="card-title">Principle 1: Few-Shot Learning in Clinical Context</h3>
        </div>
        <div class="card-body">
          <p>Few-shot examples are the foundation of effective clinical prompts. Rather than describing your preferred format, demonstrate it.</p>

          <p><strong>Why it works:</strong> LLMs excel at pattern recognition. Examples allow the model to infer your implicit rules—tone, structure, clinical reasoning—more effectively than explicit instructions.</p>

          <h4 class="mt-6 mb-4">Clinical Application:</h4>
          <ul>
            <li>For Assessment & Plan formatting: Provide 3-5 examples of your actual A&P sections</li>
            <li>For billing documentation: Show examples with correct MDM levels and corresponding documentation</li>
            <li>For patient instructions: Include samples demonstrating your communication style</li>
          </ul>

          <h4 class="mt-6 mb-4">Optimizing Few-Shot Examples</h4>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin-top: var(--space-4);">
              <thead>
                <tr style="background-color: var(--color-bg-tertiary);">
                  <th style="padding: var(--space-3); text-align: left; border: 1px solid var(--color-border);">Variable</th>
                  <th style="padding: var(--space-3); text-align: left; border: 1px solid var(--color-border);">Clinical Implementation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Quantity</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">3-5 examples typically optimal; more risks overfitting</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Ordering</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Place most common scenarios first</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Distribution</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Match your actual case mix (e.g., 60% routine, 40% complex)</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Quality</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Create examples similar to what you actually see</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Format</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Consistent structure: Input → Output</td>
                </tr>
                <tr>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);"><strong>Diversity</strong></td>
                  <td style="padding: var(--space-3); border: 1px solid var(--color-border);">Include edge cases you encounter regularly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Principle 2 -->
      <div class="card mb-8">
        <div class="card-header">
          <h3 class="card-title">Principle 2: Documentation Brevity</h3>
        </div>
        <div class="card-body">
          <p>Concise documentation serves both efficiency and safety:</p>

          <h4 class="mt-6 mb-4">Benefits:</h4>
          <ul>
            <li>Faster physician review (30-60 seconds vs 2-3 minutes)</li>
            <li>Easier identification of errors or hallucinations</li>
            <li>Reduced cognitive load during busy clinic days</li>
            <li>More natural, physician-like language</li>
          </ul>

          <h4 class="mt-6 mb-4">Implementation:</h4>
          <ul>
            <li>Use bullet points over paragraphs</li>
            <li>Employ medical abbreviations appropriately</li>
            <li>Eliminate redundant phrases</li>
            <li>Focus on clinically relevant details only</li>
          </ul>
        </div>
      </div>

      <!-- Principle 3 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Principle 3: Modular Prompt Architecture</h3>
        </div>
        <div class="card-body">
          <p>Complex multi-function prompts fail because they multiply complexity exponentially. Instead, chain specialized prompts:</p>

          <h4 class="mt-6 mb-4">Workflow Example:</h4>
          <ol>
            <li>Prompt 1: Raw transcript → Structured HPI</li>
            <li>Prompt 2: Examination findings → Formatted physical exam</li>
            <li>Prompt 3: Combined data → Assessment & Plan</li>
            <li>Prompt 4: A&P → Billing analysis</li>
          </ol>

          <h4 class="mt-6 mb-4">Advantages:</h4>
          <ul>
            <li>Each prompt can be refined independently</li>
            <li>Failures isolate to specific functions</li>
            <li>Easier troubleshooting and iteration</li>
            <li>Mix and match based on encounter type</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================== -->
<!-- PROMPT ENGINEERING TUTOR SECTION -->
<!-- ============================================== -->

<style>
    /* Prompt Tutor Specific Styles - Green Theme */
    .prompt-tutor-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    /* Hero Section - Green like ClockWork TimeBox */
    .prompt-tutor-hero {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        padding: 60px 40px;
        border-radius: var(--radius-lg, 12px);
        margin-bottom: 40px;
        text-align: center;
    }

    .prompt-tutor-hero h2 {
        font-size: 2.5em;
        margin-bottom: 15px;
        font-weight: 700;
        color: #065f46;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .prompt-tutor-hero h2 svg {
        width: 48px;
        height: 48px;
    }

    .prompt-tutor-hero .subtitle {
        font-size: 1.2em;
        color: #047857;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    .hero-features {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 30px;
        flex-wrap: wrap;
    }

    .hero-feature {
        text-align: center;
    }

    .hero-feature-icon {
        font-size: 2em;
        margin-bottom: 8px;
        display: block;
    }

    .hero-feature-label {
        font-size: 0.95em;
        color: #047857;
        font-weight: 500;
    }

    /* Status Panel */
    .tutor-status-panel {
        background: white;
        border-radius: var(--radius-md, 8px);
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: var(--shadow-sm, 0 2px 4px rgba(0,0,0,0.1));
        text-align: center;
    }

    .tutor-status-panel.loading {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    }

    .tutor-status-panel.ready {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    }

    .tutor-status-panel.error {
        background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    }

    #tutor-status-message {
        font-size: 1.2em;
        margin-bottom: 15px;
        font-weight: 600;
        color: #065f46;
    }

    #tutor-status-details {
        font-size: 0.95em;
        color: #047857;
        margin-top: 10px;
    }

    .tutor-progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255,255,255,0.5);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 15px;
        display: none;
    }

    .tutor-progress-bar.active {
        display: block;
    }

    .tutor-progress-fill {
        height: 100%;
        background: #059669;
        width: 0%;
        transition: width 0.3s ease;
    }

    /* Chat Interface - Green Theme */
    .tutor-chat-container {
        display: none;
        background: white;
        border-radius: var(--radius-lg, 12px);
        box-shadow: var(--shadow-md, 0 2px 6px rgba(0,0,0,0.1));
        overflow: hidden;
        max-width: 900px;
        margin: 0 auto;
    }

    .tutor-chat-container.active {
        display: block;
    }

    .tutor-chat-header {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        color: #065f46;
        padding: 20px 25px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .tutor-chat-header h3 {
        margin: 0;
        font-size: 1.3em;
        color: #065f46;
    }

    .tutor-chat-header svg {
        width: 28px;
        height: 28px;
        color: #047857;
    }

    .tutor-quick-questions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 15px 20px;
        background: #f0fdf4;
        border-bottom: 1px solid #a7f3d0;
    }

    .tutor-quick-btn {
        padding: 8px 14px;
        background: white;
        border: 1px solid #a7f3d0;
        border-radius: 20px;
        font-size: 0.85em;
        cursor: pointer;
        transition: all 0.2s;
        color: #065f46;
    }

    .tutor-quick-btn:hover:not(:disabled) {
        background: #059669;
        color: white;
        border-color: #059669;
    }

    .tutor-quick-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .tutor-chat-messages {
        height: 450px;
        overflow-y: auto;
        padding: 20px;
        background: #fafafa;
    }

    .tutor-message {
        margin-bottom: 20px;
        animation: tutorFadeIn 0.3s ease;
    }

    @keyframes tutorFadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .tutor-message-label {
        font-size: 0.8em;
        font-weight: 600;
        margin-bottom: 5px;
        color: #6b7280;
    }

    .tutor-message-bubble {
        padding: 12px 16px;
        border-radius: 12px;
        line-height: 1.6;
        max-width: 85%;
    }

    .tutor-message-user .tutor-message-bubble {
        background: #059669;
        color: white;
        margin-left: auto;
        border-bottom-right-radius: 4px;
    }

    .tutor-message-assistant .tutor-message-bubble {
        background: white;
        color: #333;
        border: 1px solid #e5e7eb;
        border-bottom-left-radius: 4px;
    }

    .tutor-typing-indicator {
        display: none;
        padding: 10px 20px;
        color: #047857;
        font-style: italic;
        font-size: 0.9em;
    }

    .tutor-typing-indicator.active {
        display: block;
    }

    .tutor-typing-dots {
        display: inline-flex;
        gap: 4px;
    }

    .tutor-typing-dots span {
        width: 6px;
        height: 6px;
        background: #059669;
        border-radius: 50%;
        animation: tutorBounce 1.4s infinite ease-in-out both;
    }

    .tutor-typing-dots span:nth-child(1) { animation-delay: -0.32s; }
    .tutor-typing-dots span:nth-child(2) { animation-delay: -0.16s; }

    @keyframes tutorBounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
    }

    .tutor-chat-input-area {
        display: flex;
        gap: 10px;
        padding: 15px 20px;
        background: white;
        border-top: 1px solid #e5e7eb;
    }

    #tutor-chat-input {
        flex: 1;
        padding: 12px 15px;
        border: 2px solid #a7f3d0;
        border-radius: 8px;
        font-size: 0.95em;
        resize: none;
        font-family: inherit;
        transition: border-color 0.2s;
    }

    #tutor-chat-input:focus {
        outline: none;
        border-color: #059669;
    }

    #tutor-send-btn {
        padding: 12px 24px;
        background: #059669;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    #tutor-send-btn:hover:not(:disabled) {
        background: #047857;
        transform: translateY(-1px);
    }

    #tutor-send-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .tutor-empty-chat {
        text-align: center;
        padding: 60px 20px;
        color: #9ca3af;
    }

    .tutor-empty-chat svg {
        width: 64px;
        height: 64px;
        margin: 0 auto 20px;
        color: #a7f3d0;
    }

    .tutor-empty-chat p {
        margin-bottom: 8px;
    }

    /* Init Button - Green */
    .tutor-init-btn {
        padding: 15px 35px;
        background: #059669;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        margin-top: 20px;
    }

    .tutor-init-btn:hover:not(:disabled) {
        background: #047857;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
    }

    .tutor-init-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    /* Code styling in chat */
    .tutor-message-bubble code {
        background: #f0fdf4;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        color: #047857;
    }

    .tutor-message-bubble pre {
        background: #1e293b;
        color: #e2e8f0;
        padding: 15px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 10px 0;
        font-size: 0.85em;
    }

    .tutor-message-bubble pre code {
        background: none;
        color: inherit;
        padding: 0;
    }

    .tutor-message-bubble ul, .tutor-message-bubble ol {
        margin: 10px 0;
        padding-left: 25px;
    }

    .tutor-message-bubble li {
        margin-bottom: 5px;
    }

    .tutor-message-bubble strong {
        color: #059669;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .prompt-tutor-hero h2 {
            font-size: 1.8em;
        }

        .prompt-tutor-hero .subtitle {
            font-size: 1em;
        }

        .hero-features {
            gap: 20px;
        }

        .tutor-quick-questions {
            flex-direction: column;
        }

        .tutor-chat-messages {
            height: 350px;
        }

        .tutor-chat-input-area {
            flex-direction: column;
        }

        #tutor-send-btn {
            width: 100%;
        }
    }
</style>

<section class="section" id="prompt-tutor">
  <div class="container">
    <div class="prompt-tutor-container">
      
      <!-- Tutor Hero - Green Theme -->
      <div class="prompt-tutor-hero">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
          Prompt Engineering Tutor
        </h2>
        <p class="subtitle">
          Have questions about the best practices above? Ask the AI tutor! Get personalized guidance on few-shot learning, prompt structure, clinical documentation, and more.
        </p>
      </div>

      <!-- Status Panel -->
      <div id="tutor-status-panel" class="tutor-status-panel">
        <div id="tutor-status-message">Click below to initialize the AI Tutor</div>
        <div id="tutor-status-details">The AI downloads to your browser once (~870MB), then loads instantly on future visits. Requires Chrome/Edge 113+ with WebGPU.</div>
        <div id="tutor-progress-bar" class="tutor-progress-bar">
          <div id="tutor-progress-fill" class="tutor-progress-fill"></div>
        </div>
        <button id="tutor-init-btn" class="tutor-init-btn" onclick="initializePromptTutor()">
          Initialize AI Tutor
        </button>
      </div>

      <!-- Chat Interface -->
      <div id="tutor-chat-container" class="tutor-chat-container">
        <div class="tutor-chat-header">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
          <h3>Prompt Engineering Tutor</h3>
        </div>

        <div class="tutor-quick-questions">
          <button class="tutor-quick-btn" onclick="askTutorQuestion('What are few-shot examples and how do I use them?')">
            Few-shot examples?
          </button>
          <button class="tutor-quick-btn" onclick="askTutorQuestion('How do I make my prompts more concise?')">
            Make prompts concise
          </button>
          <button class="tutor-quick-btn" onclick="askTutorQuestion('Explain modular prompt architecture')">
            Modular prompts
          </button>
          <button class="tutor-quick-btn" onclick="askTutorQuestion('What makes a good task statement?')">
            Task statements
          </button>
          <button class="tutor-quick-btn" onclick="askTutorQuestion('How do I write prompts for clinical documentation?')">
            Clinical documentation
          </button>
        </div>

        <div id="tutor-chat-messages" class="tutor-chat-messages">
          <div class="tutor-empty-chat">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <p style="font-size: 1.1em; font-weight: 500; color: #065f46;">Ask me about prompt engineering!</p>
            <p style="font-size: 0.9em; color: #047857;">Click a quick question above or type your own below.</p>
          </div>
        </div>

        <div class="tutor-typing-indicator" id="tutor-typing-indicator">
          <span class="tutor-typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
          AI is thinking...
        </div>

        <div class="tutor-chat-input-area">
          <textarea
            id="tutor-chat-input"
            rows="2"
            placeholder="Ask about prompt engineering, few-shot learning, clinical prompts..."
            aria-label="Chat message input"
          ></textarea>
          <button id="tutor-send-btn" onclick="sendTutorMessage()">
            Send
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

<script type="module">
    import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

    // =====================================================
    // STATE
    // =====================================================
    let promptTutorEngine = null;
    let tutorChatHistory = [];

    const PROMPT_TUTOR_SYSTEM = `You are a friendly and expert prompt engineering tutor, specializing in clinical and medical documentation.

Your knowledge base includes these core principles:
1. **Examples > Instructions**: Use 3-5 few-shot examples instead of lengthy explanations. LLMs learn patterns better through demonstration.
2. **Brevity = Quality**: Concise outputs are easier to review, less error-prone, and sound more natural.
3. **One Prompt, One Purpose**: Modular prompts outperform multi-function ones. Chain specialized prompts together.

Key techniques you teach:
- Few-shot learning: Providing example input-output pairs
- Task statement optimization: Starting with clear, action-oriented instructions
- Conditional logic: Using triggers (like ICD-10 codes) for contextual content
- Format hierarchy: Examples > Task statement > Explicit rules
- Clinical applications: A&P formatting, billing documentation, patient instructions

Your teaching style:
- Use simple, clear language
- Provide concrete examples when explaining concepts
- Be encouraging and supportive
- Give practical, actionable advice
- Keep responses focused and concise (2-3 paragraphs max)
- Use bullet points sparingly for key takeaways

When asked about clinical prompts, remember:
- Physicians need fast, scannable outputs
- Medical abbreviations are appropriate
- Brief documentation reduces errors
- Always emphasize physician review of AI output

You help physicians and healthcare professionals write better prompts for AI-assisted documentation and clinical workflows.`;

    // =====================================================
    // AI INITIALIZATION
    // =====================================================
    window.initializePromptTutor = async function() {
        const statusPanel = document.getElementById('tutor-status-panel');
        const statusMessage = document.getElementById('tutor-status-message');
        const statusDetails = document.getElementById('tutor-status-details');
        const progressBar = document.getElementById('tutor-progress-bar');
        const progressFill = document.getElementById('tutor-progress-fill');
        const initBtn = document.getElementById('tutor-init-btn');

        statusPanel.className = 'tutor-status-panel loading';
        statusMessage.textContent = 'Loading AI Tutor...';
        statusDetails.textContent = 'This may take 5-15 minutes on first use. The model is cached for instant loading next time.';
        progressBar.classList.add('active');
        initBtn.disabled = true;

        try {
            promptTutorEngine = await CreateMLCEngine(
                "Llama-3.2-1B-Instruct-q4f16_1-MLC",
                {
                    initProgressCallback: (progress) => {
                        const percent = (progress.progress * 100).toFixed(1);
                        progressFill.style.width = `${percent}%`;
                        statusMessage.textContent = `Loading: ${percent}%`;
                        statusDetails.textContent = progress.text;
                    }
                }
            );

            statusPanel.className = 'tutor-status-panel ready';
            statusMessage.textContent = 'AI Tutor Ready! 🎉';
            statusDetails.textContent = 'Start asking questions about prompt engineering!';
            progressBar.classList.remove('active');

            setTimeout(() => {
                statusPanel.style.display = 'none';
                document.getElementById('tutor-chat-container').classList.add('active');
                
                // Send welcome message
                addTutorMessage('assistant', "Hello! I'm your prompt engineering tutor. I can help you understand few-shot learning, modular prompt design, clinical documentation prompts, and more. What would you like to learn about?");
            }, 1000);

        } catch (error) {
            statusPanel.className = 'tutor-status-panel error';
            statusMessage.textContent = 'Failed to load AI tutor';
            statusMessage.style.color = '#991b1b';
            statusDetails.innerHTML = `
                Error: ${error.message}
                <br><br>
                <strong>Requirements:</strong> Chrome/Edge 113+ on desktop with WebGPU support.
                <br>Make sure you have sufficient memory (~2GB free).
            `;
            statusDetails.style.color = '#991b1b';
            console.error('AI initialization error:', error);
            initBtn.disabled = false;
            initBtn.textContent = 'Retry';
        }
    };

    // =====================================================
    // CHAT FUNCTIONS
    // =====================================================
    window.sendTutorMessage = async function() {
        const input = document.getElementById('tutor-chat-input');
        const message = input.value.trim();

        if (!message) return;

        input.value = '';
        await processTutorMessage(message);
    };

    window.askTutorQuestion = async function(question) {
        await processTutorMessage(question);
    };

    async function processTutorMessage(userMessage) {
        if (!promptTutorEngine) {
            alert('AI tutor is not initialized yet. Please wait for it to load.');
            return;
        }

        // Disable inputs
        document.getElementById('tutor-chat-input').disabled = true;
        document.getElementById('tutor-send-btn').disabled = true;
        document.querySelectorAll('.tutor-quick-btn').forEach(btn => btn.disabled = true);

        // Add user message
        addTutorMessage('user', userMessage);

        // Show typing indicator
        document.getElementById('tutor-typing-indicator').classList.add('active');

        try {
            // Build messages array with history
            const messages = [
                { role: 'system', content: PROMPT_TUTOR_SYSTEM },
                ...tutorChatHistory.slice(-8), // Keep last 8 messages for context
                { role: 'user', content: userMessage }
            ];

            // Get AI response with streaming
            const response = await promptTutorEngine.chat.completions.create({
                messages: messages,
                temperature: 0.7,
                max_tokens: 500,
                stream: true
            });

            document.getElementById('tutor-typing-indicator').classList.remove('active');

            // Create message bubble for streaming
            const messageDiv = document.createElement('div');
            messageDiv.className = 'tutor-message tutor-message-assistant';
            messageDiv.innerHTML = `
                <div class="tutor-message-label">AI Tutor</div>
                <div class="tutor-message-bubble" id="tutor-streaming-bubble"></div>
            `;
            document.getElementById('tutor-chat-messages').appendChild(messageDiv);

            let fullResponse = '';
            const streamingBubble = document.getElementById('tutor-streaming-bubble');

            for await (const chunk of response) {
                const delta = chunk.choices[0]?.delta?.content || '';
                fullResponse += delta;
                streamingBubble.innerHTML = renderTutorMarkdown(fullResponse);
                scrollTutorToBottom();
            }

            streamingBubble.id = '';

            // Update chat history
            tutorChatHistory.push(
                { role: 'user', content: userMessage },
                { role: 'assistant', content: fullResponse }
            );

        } catch (error) {
            document.getElementById('tutor-typing-indicator').classList.remove('active');
            addTutorMessage('assistant', 'Sorry, I encountered an error. Please try again.');
            console.error('Chat error:', error);
        }

        // Re-enable inputs
        document.getElementById('tutor-chat-input').disabled = false;
        document.getElementById('tutor-send-btn').disabled = false;
        document.querySelectorAll('.tutor-quick-btn').forEach(btn => btn.disabled = false);
        document.getElementById('tutor-chat-input').focus();
    }

    function addTutorMessage(role, content) {
        const messagesDiv = document.getElementById('tutor-chat-messages');
        const emptyChat = messagesDiv.querySelector('.tutor-empty-chat');
        if (emptyChat) emptyChat.remove();

        const messageDiv = document.createElement('div');
        messageDiv.className = `tutor-message tutor-message-${role}`;

        const label = role === 'user' ? 'You' : 'AI Tutor';
        const formattedContent = role === 'assistant' ? renderTutorMarkdown(content) : escapeHtml(content);

        messageDiv.innerHTML = `
            <div class="tutor-message-label">${label}</div>
            <div class="tutor-message-bubble">${formattedContent}</div>
        `;

        messagesDiv.appendChild(messageDiv);
        scrollTutorToBottom();
    }

    function scrollTutorToBottom() {
        const messagesDiv = document.getElementById('tutor-chat-messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // =====================================================
    // UTILITIES
    // =====================================================
    function renderTutorMarkdown(text) {
        let html = text;

        // Code blocks
        html = html.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Bold and italic
        html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h4 style="margin: 15px 0 10px 0; font-size: 1em;">$1</h4>');
        html = html.replace(/^## (.+)$/gm, '<h3 style="margin: 15px 0 10px 0; font-size: 1.1em;">$1</h3>');

        // Lists
        html = html.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

        // Numbered lists
        html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

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

    // Enter to send (Shift+Enter for new line)
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('tutor-chat-input');
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendTutorMessage();
                }
            });
        }
    });
</script>

<!-- Advanced Techniques -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="mb-8">Advanced Techniques</h2>

      <div class="grid grid-cols-1 grid-cols-2">

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Task Statement Optimization</h3>
          </div>
          <div class="card-body">
            <p>Begin every prompt with a clear, action-oriented instruction:</p>
            <p class="mt-4"><span class="badge badge-success">Good</span></p>
            <p class="text-sm">"Convert the following transcript into a problem-based assessment and plan"</p>
            <p class="mt-4"><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">Avoid</span></p>
            <p class="text-sm">"You are a physician who needs to write notes"</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Conditional Logic Implementation</h3>
          </div>
          <div class="card-body">
            <p>Use ICD-10 codes as triggers for boilerplate text:</p>
            <pre class="mt-4"><code>If diagnosis includes J06.9, add:
"Supportive care discussed
including rest, fluids, and
symptomatic relief."</code></pre>
          </div>
        </div>

      </div>

      <div class="card mt-6">
        <div class="card-header">
          <h3 class="card-title">Format Rules Hierarchy</h3>
        </div>
        <div class="card-body">
          <ol>
            <li><strong>Few-shot examples</strong> (highest priority)</li>
            <li><strong>Task statement</strong></li>
            <li><strong>Explicit formatting rules</strong> (lowest priority, use sparingly)</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Safety and Compliance -->
<section class="section bg-tertiary">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <div style="padding: var(--space-6); background: var(--color-bg-primary); border-radius: var(--radius-lg); border: 2px solid var(--color-warning);">
        <h2 style="color: var(--color-warning); margin-bottom: var(--space-6);">Safety and Compliance</h2>

        <h3 class="mb-4">Critical Reminders</h3>
        <ul>
          <li><strong>Always review</strong> AI output before finalizing</li>
          <li><strong>Maintain responsibility</strong> for clinical accuracy</li>
          <li><strong>Document within</strong> approved institutional tools only</li>
          <li><strong>Expect output to be helpful</strong>, but also expect errors</li>
        </ul>

        <h3 class="mt-6 mb-4">Quality Assurance Checklist</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li>☐ Factual accuracy verified</li>
          <li>☐ Medications and dosages confirmed</li>
          <li>☐ Follow-up instructions appropriate</li>
          <li>☐ Billing documentation sufficient</li>
          <li>☐ No hallucinated findings</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started -->
<section class="section">
  <div class="container">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 class="text-center mb-8">Getting Started</h2>

      <div class="card">
        <div class="card-body">
          <ol style="line-height: var(--line-height-relaxed);">
            <li><strong>Select one workflow</strong> (e.g., Assessment & Plan only)</li>
            <li><strong>Gather 5 examples</strong> from your recent notes</li>
            <li><strong>Create initial prompt</strong> using our template</li>
            <li><strong>Test on 10 encounters</strong> before scaling</li>
            <li><strong>Iterate based</strong> on specific failures</li>
          </ol>
        </div>
      </div>

      <div class="text-center mt-8">
        <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Browse Prompt Library</a>
        <a href="{{ site.baseurl }}/prompt-generator" class="btn btn-outline btn-lg">Try Prompt Generator</a>
      </div>

      <!-- Additional Resources -->
      <div class="text-center mt-8 text-secondary">
        <p><a href="{{ site.baseurl }}/disclaimer">See Disclaimer.</a>  Questions about setup or best practices? Ask in our <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/discussions" class="text-primary">GitHub Discussions</a> or share your workflow on the <a href="{{ site.baseurl }}/contributions" class="text-primary">Contributions page</a>.</p>
      </div>

      <!-- Share Your Prompt CTA -->
      <div style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-accent-light) 100%); padding: 2rem; border-radius: var(--radius-lg); border-left: 4px solid var(--color-primary); margin-top: 3rem;">
        <h3 style="color: var(--color-primary); font-size: var(--font-size-xl); margin-bottom: var(--space-4); text-align: center;">Share Your Prompt</h3>
        <p style="text-align: center; margin-bottom: var(--space-4);">
          Refined a prompt that consistently delivers quality output? Consider sharing it on the contributions page. Your tested solution could save colleagues hours of iteration and help build a stronger resource for the entire clinical community.
        </p>
        <div style="text-align: center;">
          <a href="{{ site.baseurl }}/contributions" class="btn btn-primary">Contribute Your Prompt</a>
        </div>
      </div>

      <p class="text-sm text-secondary text-center mt-8">
        <em>Reference: Adapted from Schulhoff, S. "The Prompt Report: A Systematic Survey of Prompting Techniques" (2024)</em>
      </p>
    </div>
  </div>
</section>
