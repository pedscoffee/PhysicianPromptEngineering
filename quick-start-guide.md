---
layout: default
title: Quick Start Guide - Clinical Prompt Engineering
description: A free quick start guide to clinical AI prompt engineering for physicians
permalink: /quick-start-guide/
---

<style>
    @media print {
        .site-header, .site-footer, .no-print, .hero-cta { display: none !important; }
        .print-only { display: block !important; }
        body { font-size: 11pt; }
        .guide-container { max-width: 100% !important; padding: 0 !important; }
        .guide-section { break-inside: avoid; page-break-inside: avoid; }
        .prompt-box { border: 1px solid #ccc !important; }
    }
    
    .guide-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }
    
    .guide-header {
        text-align: center;
        padding: 2rem 0;
        border-bottom: 3px solid var(--color-primary);
        margin-bottom: 2rem;
    }
    
    .guide-header h1 {
        color: var(--color-primary);
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .guide-header .subtitle {
        color: var(--color-text-secondary);
        font-size: 1.1rem;
    }
    
    .guide-section {
        margin-bottom: 2.5rem;
    }
    
    .guide-section h2 {
        color: var(--color-primary);
        border-left: 4px solid var(--color-primary);
        padding-left: 1rem;
        margin-bottom: 1rem;
    }
    
    .principle-card {
        background: #f0fdf4;
        border-radius: 8px;
        padding: 1.25rem;
        margin-bottom: 1rem;
        border-left: 4px solid #059669;
    }
    
    .principle-card h3 {
        color: #065f46;
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .principle-card p {
        margin: 0;
        color: #047857;
    }
    
    .prompt-box {
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.25rem;
        margin: 1rem 0;
    }
    
    .prompt-box h4 {
        color: var(--color-primary);
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
    }
    
    .prompt-box pre {
        background: #1e293b;
        color: #e2e8f0;
        padding: 1rem;
        border-radius: 6px;
        font-size: 0.85rem;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        margin: 0;
    }
    
    .tip-box {
        background: #fffbeb;
        border: 1px solid #fcd34d;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
    }
    
    .tip-box strong {
        color: #92400e;
    }
    
    .checklist {
        list-style: none;
        padding: 0;
    }
    
    .checklist li {
        padding: 0.5rem 0 0.5rem 2rem;
        position: relative;
    }
    
    .checklist li::before {
        content: "☐";
        position: absolute;
        left: 0;
        color: var(--color-primary);
        font-size: 1.2rem;
    }
    
    .download-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: var(--color-primary);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.2s;
    }
    
    .download-btn:hover {
        background: #047857;
        color: white;
        text-decoration: none;
    }
    
    .print-only {
        display: none;
    }
</style>

<!-- Hero Section -->
<div class="hero no-print">
    <div class="container">
        <h1 class="hero-title">Quick Start Guide</h1>
        <p class="hero-subtitle">
            Everything you need to start using AI for clinical documentation in 10 minutes
        </p>
        <div class="hero-cta">
            <button onclick="window.print()" class="download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 20px; height: 20px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download / Print PDF
            </button>
        </div>
    </div>
</div>

<div class="guide-container">

<!-- Print Header -->
<div class="print-only guide-header">
    <h1>Quick Start Guide to Clinical Prompt Engineering</h1>
    <p class="subtitle">Physician Prompt Engineering • physicianpromptengineering.com</p>
</div>

<!-- Section 1: The 3 Core Principles -->
<div class="guide-section">
    <h2>The 3 Core Principles</h2>
    
    <div class="principle-card">
        <h3>1. Examples > Instructions</h3>
        <p>Show the AI 3-5 examples of your preferred output format. LLMs learn patterns better through demonstration than explanation.</p>
    </div>
    
    <div class="principle-card">
        <h3>2. Brevity = Quality</h3>
        <p>Concise outputs scan faster, edit easier, and sound more natural. Request bullet points over paragraphs.</p>
    </div>
    
    <div class="principle-card">
        <h3>3. One Prompt, One Purpose</h3>
        <p>Specialized prompts outperform multi-function ones. Chain simple prompts together for complex workflows.</p>
    </div>
</div>

<!-- Section 2: Your First Prompt -->
<div class="guide-section">
    <h2>Your First Prompt: A&P Formatter</h2>
    
    <p>This prompt transforms verbose AI scribe output into concise, problem-oriented documentation:</p>
    
    <div class="prompt-box">
        <h4>📋 Copy This Prompt</h4>
        <pre>Transform this clinical note into a concise Assessment & Plan.

FORMAT RULES:
- Number each problem with **bold** heading
- Use bullet points for plans
- Max 2-3 sentences per problem
- Preserve all medications and dosages

EXAMPLE OUTPUT:
1. **Hypertension** - Controlled on current regimen
   • Continue lisinopril 10mg daily
   • Recheck BP in 3 months

2. **Type 2 Diabetes** - A1c 7.2%, at goal
   • Continue metformin 1000mg BID
   • Annual eye exam due

---
[PASTE YOUR CLINICAL NOTE HERE]</pre>
    </div>
    
    <div class="tip-box">
        <strong>💡 Pro Tip:</strong> Replace the example problems with conditions you commonly see in your specialty. The AI will match your style.
    </div>
</div>

<!-- Section 3: Quick Reference Prompts -->
<div class="guide-section">
    <h2>3 More Essential Prompts</h2>
    
    <div class="prompt-box">
        <h4>🏥 MDM & Billing Documentation</h4>
        <pre>Analyze this note for MDM complexity. List:
1. Number of problems addressed
2. Data reviewed (labs, imaging, records)
3. Risk level of management
4. Suggested E/M code with justification

Note: [PASTE NOTE]</pre>
    </div>
    
    <div class="prompt-box">
        <h4>📄 Patient Instructions (AVS)</h4>
        <pre>Create patient-friendly instructions from this visit note.
- Use 6th grade reading level
- Include: diagnosis, medications, warning signs, follow-up
- Format as numbered lists
- Avoid medical jargon

Note: [PASTE NOTE]</pre>
    </div>
    
    <div class="prompt-box">
        <h4>✂️ Condense Verbose Notes</h4>
        <pre>Shorten this clinical note by 50% while keeping:
- All diagnoses and problems
- Medication names and doses
- Key exam findings
- Follow-up plans

Remove filler phrases and redundancy.

Note: [PASTE NOTE]</pre>
    </div>
</div>

<!-- Section 4: Implementation Checklist -->
<div class="guide-section">
    <h2>Implementation Checklist</h2>
    
    <ul class="checklist">
        <li>Verify your institution allows AI documentation tools</li>
        <li>Identify where to use prompts (Epic "Generate Text", Cerner, etc.)</li>
        <li>Copy the A&P Formatter prompt and customize the examples</li>
        <li>Test on 5-10 routine encounters before complex cases</li>
        <li>Always review AI output before signing notes</li>
        <li>Iterate and refine based on results</li>
    </ul>
</div>

<!-- Section 5: Safety Reminders -->
<div class="guide-section">
    <h2>Safety Reminders</h2>
    
    <div style="background: #fef2f2; border: 2px solid #fca5a5; border-radius: 8px; padding: 1.25rem;">
        <p style="margin: 0 0 0.75rem 0;"><strong style="color: #991b1b;">⚠️ Critical Rules:</strong></p>
        <ul style="margin: 0; padding-left: 1.25rem; color: #7f1d1d;">
            <li>Never enter PHI into non-HIPAA-compliant tools</li>
            <li>Always review AI output before finalizing</li>
            <li>You remain responsible for clinical accuracy</li>
            <li>AI can hallucinate - verify medications and dosages</li>
        </ul>
    </div>
</div>

<!-- CTA Section -->
<div class="guide-section no-print" style="text-align: center; padding: 2rem; background: #f0fdf4; border-radius: 12px;">
    <h2 style="border: none; padding: 0;">Ready for More?</h2>
    <p style="margin-bottom: 1.5rem;">Explore our full library of prompts and interactive learning tools.</p>
    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary">Browse Prompt Library</a>
        <a href="{{ site.baseurl }}/courses/clinical-prompt-engineering/" class="btn btn-outline">Take the Free Course</a>
    </div>
</div>

<!-- Print Footer -->
<div class="print-only" style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.9rem; color: #6b7280;">
    <p>© 2025 Physician Prompt Engineering • physicianpromptengineering.com • MIT License</p>
    <p>More prompts, tools, and courses available at our website.</p>
</div>

</div>
