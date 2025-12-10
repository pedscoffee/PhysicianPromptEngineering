---
layout: default
title: AI Scribe Best Practices
description: Practical guidance for maximizing the effectiveness of AI medical scribes, including consent, setup, review workflows, and advanced AI editing techniques.
permalink: /ai-scribe-best-practices/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">AI Scribe Best Practices</h1>
    <p class="hero-subtitle">
      Get the most out of your AI medical scribe with practical strategies for consent, setup, review, and advanced AI-powered editing workflows.
    </p>
  </div>
</div>

<!-- Introduction -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <div class="card">
        <div class="card-body">
          <p class="text-lg">
            AI medical scribes (like DAX, Abridge, Nuance Dragon Ambient, and others) can dramatically reduce documentation burden—but only when used correctly. This guide covers essential best practices for current AI scribe tools and introduces advanced techniques for further optimization.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Core Best Practices -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Essential Best Practices</h2>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">1. Verbal Consent & Patient Communication</h3>
        </div>
        <div class="card-body">
          <h4>Why It Matters</h4>
          <p>
            Patients have a right to know their conversation is being recorded and processed by AI. Transparency builds trust and protects you legally.
          </p>
          
          <h4>Best Practices</h4>
          <ul>
            <li><strong>Get verbal consent at the start of every visit</strong> - Even for established patients</li>
            <li><strong>Use clear, simple language</strong> - "I'm using an AI assistant to help with my notes. It will listen to our conversation. Is that okay with you?"</li>
            <li><strong>Offer alternatives</strong> - "If you prefer, I can turn it off and take notes the traditional way"</li>
            <li><strong>Document consent</strong> - Many scribes have a button to mark consent; if not, note it in your documentation</li>
            <li><strong>Respect refusals</strong> - Don't pressure patients who decline</li>
          </ul>
          
          <h4>Sample Consent Scripts</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);">
            <p><strong>Brief version:</strong></p>
            <p style="font-style: italic;">"I use an AI assistant to help with documentation. It records our conversation so I can focus on you instead of my computer. Any concerns with that?"</p>
            
            <p class="mt-4"><strong>Extended version:</strong></p>
            <p style="font-style: italic;">"I want to let you know I'm using an AI medical scribe today. It listens to our conversation and helps create my note, which I always review and edit before it becomes part of your medical record. This helps me spend more time looking at you instead of typing. The recording is processed securely and then deleted. Are you comfortable with that?"</p>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">2. Optimal Recording Setup</h3>
        </div>
        <div class="card-body">
          <h4>Device Placement</h4>
          <ul>
            <li><strong>Keep microphone accessible</strong> - On desk, in pocket, or worn on lanyard</li>
            <li><strong>Avoid obstructions</strong> - Don't bury phone under papers or in closed drawer</li>
            <li><strong>Position strategically</strong> - Closer to patient if they speak softly</li>
            <li><strong>Test positioning</strong> - Check quality on first few notes to find optimal placement</li>
          </ul>
          
          <h4>Environmental Considerations</h4>
          <ul>
            <li><strong>Minimize background noise</strong> - Close doors when possible</li>
            <li><strong>Speak clearly</strong> - Enunciate medical terms</li>
            <li><strong>Pause for interruptions</strong> - Use pause feature if available when leaving room</li>
            <li><strong>Be mindful of privacy</strong> - Don't record in hallways or shared spaces</li>
          </ul>
          
          <h4>Technical Checks</h4>
          <ul>
            <li><strong>Charge daily</strong> - Keep device charged; AI scribes drain battery</li>
            <li><strong>Update regularly</strong> - Install app updates promptly</li>
            <li><strong>Test audio</strong> - Do a test recording if you haven't used it in a while</li>
            <li><strong>Have backup plan</strong> - Know what to do if technology fails mid-day</li>
          </ul>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">3. Follow Your Scribe Company's Guidelines</h3>
        </div>
        <div class="card-body">
          <p>
            Each AI scribe platform has specific instructions for optimal performance. <strong>Actually read them.</strong> Common guidance includes:
          </p>
          
          <h4>Communication Style</h4>
          <ul>
            <li><strong>State the obvious</strong> - "The patient reports..." rather than assuming AI infers context</li>
            <li><strong>Use structured presentation</strong> - Some systems work better with organized verbal flow (HPI, then exam, then assessment)</li>
            <li><strong>Dictate key findings explicitly</strong> - "Normal cardiac exam" vs. hoping AI infers from silence</li>
            <li><strong>Signal plan clearly</strong> - "The plan is..." helps AI separate assessment from plan</li>
          </ul>
          
          <h4>Platform-Specific Features</h4>
          <ul>
            <li><strong>Learn voice commands</strong> - Many scribes respond to specific phrases</li>
            <li><strong>Use templates if available</strong> - Some platforms let you customize output structure</li>
            <li><strong>Tag important items</strong> - Some systems let you flag billing codes or critical findings</li>
            <li><strong>Utilize custom vocabularies</strong> - Add specialty-specific terms your scribe struggles with</li>
          </ul>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">4. Critical Review Process</h3>
        </div>
        <div class="card-body">
          <div class="notice-box notice-warning mb-4">
            <p><strong>⚠️ You are legally responsible for the note, not the AI.</strong></p>
            <p>Every word in the medical record is your attestation. Review carefully.</p>
          </div>
          
          <h4>What to Check</h4>
          <ul>
            <li><strong>Factual accuracy</strong> - Verify all clinical data (vitals, medications, allergies, exam findings)</li>
            <li><strong>Attribution errors</strong> - Ensure patient statements aren't attributed to you and vice versa</li>
            <li><strong>Omissions</strong> - Check that important findings weren't missed</li>
            <li><strong>Hallucinations</strong> - Watch for AI adding information that wasn't discussed</li>
            <li><strong>Contradictions</strong> - Look for internal inconsistencies</li>
            <li><strong>Billing accuracy</strong> - Verify suggested codes match actual encounter</li>
            <li><strong>Medical decision making</strong> - Ensure complexity is accurately represented</li>
          </ul>
          
          <h4>Common AI Scribe Errors</h4>
          <div class="two-col-grid mt-4">
            <div>
              <h5>Technical Errors</h5>
              <ul>
                <li>Mishearing medical terms</li>
                <li>Incorrect medication names or doses</li>
                <li>Swapping "right" and "left"</li>
                <li>Confusing negatives ("no chest pain" → "chest pain")</li>
              </ul>
            </div>
            <div>
              <h5>Contextual Errors</h5>
              <ul>
                <li>Including casual conversation in clinical note</li>
                <li>Misinterpreting teaching points as patient history</li>
                <li>Over-documenting normal findings</li>
                <li>Missing nuance or clinical reasoning</li>
              </ul>
            </div>
          </div>
          
          <h4>Efficient Review Workflow</h4>
          <ol>
            <li><strong>Scan for major issues first</strong> - Start with medications, allergies, exam findings</li>
            <li><strong>Read through assessment</strong> - Verify clinical reasoning makes sense</li>
            <li><strong>Check plan completeness</strong> - Ensure all discussed items are included</li>
            <li><strong>Verify billing</strong> - Confirm level of service and diagnosis codes</li>
            <li><strong>Final read-through</strong> - Does it tell the clinical story accurately?</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Advanced Optimization -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Advanced Optimization: The Two-Step Approach</h2>
      
      <div class="card mb-6">
        <div class="card-body">
          <h3>Beyond Basic AI Scribes</h3>
          <p class="text-lg">
            Current AI scribes get you ~80% of the way there, but they often produce notes that are:
          </p>
          <ul>
            <li>Too verbose or too sparse</li>
            <li>Inconsistent in style or formatting</li>
            <li>Missing your personal documentation preferences</li>
            <li>Not optimized for your specific EHR workflow</li>
          </ul>
          <p class="text-lg">
            <strong>The solution: Use a second AI step to refine the output.</strong>
          </p>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Two-Step Workflow</h3>
        </div>
        <div class="card-body">
          <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-6);">
            <div>
              <h4 style="color: var(--color-primary);">Step 1: AI Scribe</h4>
              <p>Your AI scribe (DAX, Abridge, etc.) creates the initial draft from the patient encounter.</p>
              <p><strong>Result:</strong> Raw clinical documentation capturing the conversation.</p>
            </div>
            <div>
              <h4 style="color: var(--color-secondary);">Step 2: AI Editor</h4>
              <p>Feed the draft to a general-purpose LLM (ChatGPT, Claude, Gemini) with a custom prompt that refines it to your exact specifications.</p>
              <p><strong>Result:</strong> Polished note matching your style, preferences, and workflow.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">What Second-Step AI Editing Can Do</h3>
        </div>
        <div class="card-body">
          <div class="two-col-grid">
            <div>
              <h4>Content Refinement</h4>
              <ul>
                <li>Remove unnecessary verbosity</li>
                <li>Enhance clinical reasoning</li>
                <li>Standardize formatting</li>
                <li>Add missing context</li>
                <li>Improve readability</li>
              </ul>
            </div>
            <div>
              <h4>Customization</h4>
              <ul>
                <li>Match your documentation style</li>
                <li>Apply specialty-specific templates</li>
                <li>Optimize for billing accuracy</li>
                <li>Integrate institutional preferences</li>
                <li>Maintain consistency across notes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Example Use Cases</h3>
        </div>
        <div class="card-body">
          <h4>Use Case 1: Tightening Verbose Notes</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-3) 0;">
            <p><strong>Prompt:</strong> "Condense this HPI to essential information only. Remove redundant phrasing. Maintain medical accuracy."</p>
          </div>
          
          <h4 class="mt-6">Use Case 2: Standardizing Format</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-3) 0;">
            <p><strong>Prompt:</strong> "Reformat this physical exam to use bullet points. Group by system. Use standard abbreviations (e.g., HEENT, CV, Resp, Abd, Ext, Neuro)."</p>
          </div>
          
          <h4 class="mt-6">Use Case 3: Enhancing Assessment</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-3) 0;">
            <p><strong>Prompt:</strong> "Strengthen the medical decision making section. Explicitly state what was considered, what was ruled out, and why this diagnosis is most likely. Cite relevant positives and pertinent negatives."</p>
          </div>
          
          <h4 class="mt-6">Use Case 4: Billing Optimization</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-3) 0;">
            <p><strong>Prompt:</strong> "Review this note for appropriate E&M level. Ensure MDM complexity is clearly documented with number of diagnoses, data reviewed, and risk level explicitly stated."</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Getting Started with AI Editing</h3>
        </div>
        <div class="card-body">
          <p class="mb-4">
            Our <a href="{{ site.baseurl }}/prompt-library">Prompt Library</a> includes specialized prompts for refining AI scribe output. These prompts are:
          </p>
          <ul>
            <li>Tested in real clinical workflows</li>
            <li>Designed for different specialties and note types</li>
            <li>Optimized for major AI platforms (ChatGPT, Claude, Gemini)</li>
            <li>Customizable to your specific needs</li>
            <li>Regularly updated based on community feedback</li>
          </ul>
          
          <div class="text-center mt-6">
            <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Explore the Prompt Library →</a>
          </div>
          
          <div class="notice-box notice-info mt-6">
            <p><strong>💡 Pro Tip:</strong> Create a custom prompt that captures your personal documentation style, then save it in the <a href="{{ site.baseurl }}/prompt-manager">Prompt Manager</a> for quick access during your workflow.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Implementation Tips -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Implementing the Two-Step Workflow</h2>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Workflow Integration</h3>
        </div>
        <div class="card-body">
          <h4>Option 1: Copy-Paste Method (Simplest)</h4>
          <ol>
            <li>Generate note with your AI scribe</li>
            <li>Copy the raw note</li>
            <li>Paste into ChatGPT/Claude/Gemini with your editing prompt</li>
            <li>Review AI-edited version</li>
            <li>Copy final version into EHR</li>
          </ol>
          <p class="mt-4"><strong>Time investment:</strong> Add ~30-60 seconds per note</p>
          
          <h4 class="mt-6">Option 2: API Integration (Advanced)</h4>
          <p>
            For high-volume users, consider automating the second step by integrating AI editing directly into your workflow using APIs. This requires technical setup but can be done with tools covered in our <a href="{{ site.baseurl }}/software-2.0">Software 2.0 section</a>.
          </p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Privacy & Compliance Considerations</h3>
        </div>
        <div class="card-body">
          <div class="notice-box notice-warning mb-4">
            <p><strong>⚠️ Check with your institution before implementing any AI workflow.</strong></p>
          </div>
          
          <ul>
            <li><strong>De-identify when possible</strong> - Remove patient names, MRN, dates of birth before sending to external AI</li>
            <li><strong>Use HIPAA-compliant platforms</strong> - Some AI providers offer BAA agreements</li>
            <li><strong>Understand data handling</strong> - Know where your data goes and how it's used for training</li>
            <li><strong>Follow institutional policies</strong> - Many hospitals have specific AI use policies</li>
            <li><strong>Document your process</strong> - Be able to explain your workflow if audited</li>
          </ul>
          
          <p class="mt-4">
            <strong>Alternative for maximum security:</strong> Run local AI models on your own device. See our <a href="{{ site.baseurl }}/prompt-assistant">AI Prompt Assistant</a> for an example of browser-based, fully private AI.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Summary & Next Steps -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Summary & Next Steps</h2>
      
      <div class="card">
        <div class="card-body">
          <h3>Remember the Fundamentals</h3>
          <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-4); margin: var(--space-4) 0;">
            <div>
              <h4>Essential Practices</h4>
              <ul style="margin: 0;">
                <li>✅ Get verbal consent</li>
                <li>✅ Optimize recording setup</li>
                <li>✅ Follow company guidelines</li>
                <li>✅ Review every note carefully</li>
              </ul>
            </div>
            <div>
              <h4>Advanced Optimization</h4>
              <ul style="margin: 0;">
                <li>🚀 Use two-step AI editing</li>
                <li>🚀 Customize with prompts</li>
                <li>🚀 Iterate and refine</li>
                <li>🚀 Share what works</li>
              </ul>
            </div>
          </div>
          
          <h3 class="mt-8">Continue Learning</h3>
          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-6);">
            <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Browse Prompt Library</a>
            <a href="{{ site.baseurl }}/prompt-manager" class="btn btn-outline btn-lg">Save Your Prompts</a>
            <a href="{{ site.baseurl }}/best-practices" class="btn btn-outline btn-lg">General Best Practices</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
