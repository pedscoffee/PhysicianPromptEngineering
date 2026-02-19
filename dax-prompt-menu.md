---
layout: default
title: DAX A&P Prompt Menu
description: Compare different Assessment & Plan output styles for DAX Custom Instructions. Choose the format that best fits your workflow and documentation style.
---

<style>
  .menu-header {
    margin-bottom: var(--space-10);
  }

  .comparison-legend {
    display: flex;
    justify-content: center;
    gap: var(--space-6);
    margin-bottom: var(--space-8);
    flex-wrap: wrap;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    background: var(--color-bg-secondary);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border);
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: var(--space-8);
  }
  
  @media (max-width: 600px) {
    .menu-grid {
      grid-template-columns: 1fr;
    }
  }

  .menu-card {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
    position: relative;
  }

  .menu-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary-light);
  }

  .menu-card-header {
    background: linear-gradient(to bottom right, var(--color-bg-primary), var(--color-bg-tertiary));
    padding: var(--space-6);
    border-bottom: 1px solid var(--color-border-light);
    position: relative;
  }

  .badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-3);
  }

  .specialty-badge {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 4px 10px;
    border-radius: var(--radius-full);
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
  }

  .menu-card-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin: 0;
    color: var(--color-text-primary);
  }

  .menu-card-description {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    margin-top: var(--space-2);
    margin-bottom: 0;
    line-height: 1.5;
  }

  .menu-card-body {
    padding: var(--space-6);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .example-toggle-group {
    display: flex;
    gap: var(--space-1);
    background: var(--color-bg-tertiary);
    padding: var(--space-1);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-6);
    border: 1px solid var(--color-border-light);
  }

  .example-toggle {
    flex: 1;
    border: none;
    background: transparent;
    padding: var(--space-2);
    font-size: 11px;
    font-weight: 700;
    color: var(--color-text-secondary);
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .example-toggle.active {
    background: var(--color-bg-primary);
    color: var(--color-primary-dark);
    box-shadow: var(--shadow-sm);
  }

  .output-display {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    font-family: var(--font-family-mono);
    font-size: 13px;
    white-space: pre-wrap;
    min-height: 250px;
    max-height: 450px;
    overflow-y: auto;
    color: var(--color-text-primary);
    line-height: 1.6;
    border-left: 4px solid var(--color-primary-light);
  }

  .prompt-actions {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-6);
  }

  .case-label {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--color-text-tertiary);
    margin-bottom: var(--space-3);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  .case-label::before {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-primary);
  }

  .hidden-prompt-content {
    display: none;
  }

  .btn-success {
    background-color: var(--color-success) !important;
    color: white !important;
  }
</style>

<!-- Hero Section -->
<div class="hero" style="background: var(--gradient-hero); padding: var(--space-12) 0; margin-bottom: 0;">
  <div class="container text-center">
    <h1 class="hero-title">DAX A&P Prompt Menu</h1>
    <p class="hero-subtitle" style="max-width: 800px; margin-left: auto; margin-right: auto;">
      Compare and choose from our specialized A&P output styles designed for DAX Custom Instructions.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    
    <div class="menu-header text-center">
      <div class="comparison-legend">
        <span class="legend-item">🔹 Sourcing: Documentation Category</span>
        <span class="legend-item">🔹 Specialties: Pediatrics Emphasis</span>
        <span class="legend-item">🔹 Cases: Consistent Acute & Chronic</span>
      </div>
      <p class="text-secondary" style="max-width: 700px; margin: 0 auto;">Every prompt below transforms the same raw input into different structured formats. Switch between <strong>Case 1 (Acute)</strong> and <strong>Case 2 (Chronic)</strong> to see the results.</p>
    </div>

    <div class="menu-grid">
      
      <!-- 1. Pithy DAX with One-Liner -->
      <div class="menu-card" id="pithy-one-liner">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
            <span class="specialty-badge" style="background: var(--gradient-primary); color: white;">Favorite</span>
          </div>
          <h2 class="menu-card-title">Pithy with One-Liner</h2>
          <p class="menu-card-description">Precision-engineered bullets with a summary line. Optimized for rapid scanning and billing clarity.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle active" onclick="showCase('pithy-one-liner', 1)">Case 1: Acute</button>
            <button class="example-toggle" onclick="showCase('pithy-one-liner', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="pithy-one-liner-output">
5yo with URI and acute otitis media; starting amoxicillin for bulging TM.

Viral URI
        - Supportive care, fluids
        - Tylenol/Motrin PRN

Acute Otitis Media
        - Right TM bulging, erythematous
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: RTC PRN</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('pithy-one-liner')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('pithy-one-liner')">Download</button>
            <a href="{{ '/prompt-library#a-p-pithy-dax-with-one-liner' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P Pithy DAX with One Liner" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

      <!-- 2. Pithy DAX (Standard) -->
      <div class="menu-card" id="pithy-standard">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
          </div>
          <h2 class="menu-card-title">Pithy (Standard)</h2>
          <p class="menu-card-description">Classic problem-oriented bullets. No summary line, just the clinical facts in rapid-read shorthand.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle active" onclick="showCase('pithy-standard', 1)">Case 1: Acute</button>
            <button class="example-toggle" onclick="showCase('pithy-standard', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="pithy-standard-output">
Viral URI
        - Supportive care, fluids
        - Tylenol/Motrin PRN

Acute Otitis Media
        - Right TM bulging, erythematous
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: RTC PRN</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('pithy-standard')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('pithy-standard')">Download</button>
            <a href="{{ '/prompt-library#a-p-pithy-dax' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P Pithy DAX" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

      <!-- 3. Short Blurb DAX -->
      <div class="menu-card" id="short-blurb">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
          </div>
          <h2 class="menu-card-title">Short Blurb / Prose</h2>
          <p class="menu-card-description">Resident-style oral presentation style. Flows as professional prose without bullet points.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle active" onclick="showCase('short-blurb', 1)">Case 1: Acute</button>
            <button class="example-toggle" onclick="showCase('short-blurb', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="short-blurb-output">
Viral URI
Mild rhinorrhea and cough consistent with viral URI; supportive care with fluids and Tylenol/Motrin as needed, return precautions reviewed.

Acute Otitis Media
Right TM bulging and erythematous consistent with bacterial AOM; started amoxicillin 400mg/5mL 8mL PO BID x10d with Tylenol/Motrin for pain control, return precautions given for worsening or failure to improve.

Recommended supportive care with OTC medications as needed. Return precautions given including increasing pain, worsening fever, dehydration, new symptoms, prolonged symptoms, worsening symptoms, and other concerns. Caregiver expressed understanding and agreement with treatment plan.

Follow-Up: Return to clinic as needed.</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('short-blurb')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('short-blurb')">Download</button>
            <a href="{{ '/prompt-library#a-p-short-blurb-for-dax' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P Short Blurb for DAX" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

      <!-- 4. SOAP-Within-Problems -->
      <div class="menu-card" id="soap-within">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
          </div>
          <h2 class="menu-card-title">SOAP-Within-Problems</h2>
          <p class="menu-card-description">Unlabeled prose lines for assessment and plan. High clinical formality without documentation labels.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle active" onclick="showCase('soap-within', 1)">Case 1: Acute</button>
            <button class="example-toggle" onclick="showCase('soap-within', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="soap-within-output">
Viral URI
Presentation consistent with viral upper respiratory infection.
Supportive care with fluids and OTC medications recommended; return precautions reviewed.

Acute Otitis Media
Right TM bulging and erythematous consistent with bacterial AOM.
Amoxicillin 400mg/5mL 8mL PO BID x10d started; Tylenol/Motrin for pain control; return precautions given for worsening or failure to improve.

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding and agreement with treatment plan.

Follow-Up: Return to clinic as needed.</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('soap-within')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('soap-within')">Download</button>
            <a href="{{ '/prompt-library#a-p-soap-within-problems' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P SOAP-Within-Problems" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

      <!-- 5. SOAP Hybrid -->
      <div class="menu-card" id="soap-hybrid">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
          </div>
          <h2 class="menu-card-title">SOAP Hybrid</h2>
          <p class="menu-card-description">Combined approach: prose for the clinical assessment and bullets for management. Clear decision-making structure.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle active" onclick="showCase('soap-hybrid', 1)">Case 1: Acute</button>
            <button class="example-toggle" onclick="showCase('soap-hybrid', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="soap-hybrid-output">
Viral URI
Presentation consistent with viral upper respiratory infection.
        - Supportive care, fluids
        - OTC medications PRN
        - Return precautions reviewed

Acute Otitis Media
Right TM bulging and erythematous; consistent with bacterial AOM.
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: Return to clinic as needed.</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('soap-hybrid')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('soap-hybrid')">Download</button>
            <a href="{{ '/prompt-library#a-p-hybrid-assessment-prose-plan-bullets' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P Hybrid Assessment-Prose + Plan-Bullets" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

      <!-- 6. Chronic Disease Follow-up -->
      <div class="menu-card" id="chronic-follow">
        <div class="menu-card-header">
          <div class="badge-row">
            <span class="specialty-badge">Any / Pediatrics</span>
          </div>
          <h2 class="menu-card-title">Chronic Follow-Up</h2>
          <p class="menu-card-description">Optimized for chronic disease trends. Tracks "Stable/Improved" status and current medications automatically.</p>
        </div>
        <div class="menu-card-body">
          <div class="example-toggle-group">
            <button class="example-toggle" onclick="showCase('chronic-follow', 1)">Case 1: Acute</button>
            <button class="example-toggle active" onclick="showCase('chronic-follow', 2)">Case 2: Chronic</button>
          </div>
          
          <div class="output-wrapper">
            <span class="case-label">Simulated Output</span>
            <div class="output-display" id="chronic-follow-output">
Asthma
Stable on Flovent 44mcg 2 puffs BID with spacer; albuterol use minimal.
        - Continue Flovent 44mcg 2 puffs BID
        - Continue albuterol PRN
        - Reassess control at next visit

Follow-Up: Return to clinic in 3-6 months or as needed.</div>
          </div>

          <div class="prompt-actions">
            <button class="btn btn-primary btn-sm" onclick="copyPrompt('chronic-follow')">Copy Prompt</button>
            <button class="btn btn-secondary btn-sm" onclick="downloadPrompt('chronic-follow')">Download</button>
            <a href="{{ '/prompt-library#a-p-chronic-disease-follow-up' | relative_url }}" class="btn btn-outline btn-sm">Library</a>
          </div>
          
          <div class="hidden-prompt-content">
            {% assign prompt = site.prompts | where: "title", "A&P Chronic Disease Follow-Up" | first %}
            {{ prompt.content }}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
  const cases = {
    'pithy-one-liner': {
      1: `5yo with URI and acute otitis media; starting amoxicillin for bulging TM.

Viral URI
        - Supportive care, fluids
        - Tylenol/Motrin PRN

Acute Otitis Media
        - Right TM bulging, erythematous
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: RTC PRN`,
      2: `8yo with stable asthma; continuing current daily Flovent given good control.

Asthma
        - Controlled on Flovent 44mcg BID
        - No nighttime awakening or cough
        - Minimal albuterol use
        - Continue current regimen

Follow-Up: Return to clinic in 3-6 months`
    },
    'pithy-standard': {
      1: `Viral URI
        - Supportive care, fluids
        - Tylenol/Motrin PRN

Acute Otitis Media
        - Right TM bulging, erythematous
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: RTC PRN`,
      2: `Asthma
        - Controlled on Flovent 44mcg BID
        - No nighttime awakening or cough
        - Minimal albuterol use
        - Continue current regimen

Follow-Up: Return to clinic in 3-6 months`
    },
    'short-blurb': {
      1: `Viral URI
Mild rhinorrhea and cough consistent with viral URI; supportive care with fluids and Tylenol/Motrin as needed, return precautions reviewed.

Acute Otitis Media
Right TM bulging and erythematous consistent with bacterial AOM; started amoxicillin 400mg/5mL 8mL PO BID x10d with Tylenol/Motrin for pain control, return precautions given for worsening or failure to improve.

Recommended supportive care with OTC medications as needed. Return precautions given including increasing pain, worsening fever, dehydration, new symptoms, prolonged symptoms, worsening symptoms, and other concerns. Caregiver expressed understanding and agreement with treatment plan.

Follow-Up: Return to clinic as needed.`,
      2: `Asthma
Well-controlled asthma on Flovent 44mcg 2 puffs BID with spacer; no nighttime symptoms or cough reported, and albuterol use is minimal. Continue current daily regimen and spacer use, with follow-up in 3-6 months to reassess control.

Follow-Up: Return to clinic in 3-6 months.`
    },
    'soap-within': {
      1: `Viral URI
Presentation consistent with viral upper respiratory infection.
Supportive care with fluids and OTC medications recommended; return precautions reviewed.

Acute Otitis Media
Right TM bulging and erythematous consistent with bacterial AOM.
Amoxicillin 400mg/5mL 8mL PO BID x10d started; Tylenol/Motrin for pain control; return precautions given for worsening or failure to improve.

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding and agreement with treatment plan.

Follow-Up: Return to clinic as needed.`,
      2: `Asthma
Stable asthma symptoms on daily Flovent 44mcg 2 puffs BID with spacer.
Continue current daily regimen; albuterol as needed; reassess control in 3-6 months.

Follow-Up: Return to clinic in 3-6 months.`
    },
    'soap-hybrid': {
      1: `Viral URI
Presentation consistent with viral upper respiratory infection.
        - Supportive care, fluids
        - OTC medications PRN
        - Return precautions reviewed

Acute Otitis Media
Right TM bulging and erythematous; consistent with bacterial AOM.
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Recommended supportive care with OTC medications as needed. Return precautions given. Caregiver expressed understanding.

Follow-Up: Return to clinic as needed.`,
      2: `Asthma
Well-controlled asthma on Flovent 44mcg BID; no nighttime cough or frequent albuterol use.
        - Continue Flovent 44mcg BID
        - Continue albuterol PRN
        - Reassess in 3-6 months

Follow-Up: Return to clinic in 3-6 months.`
    },
    'chronic-follow': {
      1: `Viral URI
Mild rhinorrhea and cough; consistent with viral URI.
        - Supportive care, fluids
        - Tylenol/Motrin PRN

Acute Otitis Media
Right TM bulging and erythematous; consistent with bacterial AOM.
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - Pain control with Tylenol/Motrin

Follow-Up: Return to clinic as needed.`,
      2: `Asthma
Stable on Flovent 44mcg 2 puffs BID with spacer; albuterol use minimal.
        - Continue Flovent 44mcg 2 puffs BID
        - Continue albuterol PRN
        - Reassess control at next visit

Follow-Up: Return to clinic in 3-6 months or as needed.`
    }
  };

  function showCase(cardId, caseNum) {
    document.getElementById(cardId + '-output').innerText = cases[cardId][caseNum];
    const card = document.getElementById(cardId);
    card.querySelectorAll('.example-toggle').forEach(btn => btn.classList.remove('active'));
    const buttons = card.querySelectorAll('.example-toggle');
    if (caseNum === 1) buttons[0].classList.add('active');
    else buttons[1].classList.add('active');
  }

  function copyPrompt(cardId) {
    const card = document.getElementById(cardId);
    const text = card.querySelector('.hidden-prompt-content').innerText.trim();
    const btn = card.querySelector('.btn-primary');
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btn.innerText;
      btn.innerText = 'Copied!';
      btn.classList.add('btn-success');
      setTimeout(() => { btn.innerText = originalText; btn.classList.remove('btn-success'); }, 2000);
    });
  }

  function downloadPrompt(cardId) {
    const card = document.getElementById(cardId);
    const text = card.querySelector('.hidden-prompt-content').innerText.trim();
    const title = card.querySelector('.menu-card-title').innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = title.replace(/\s+/g, '_').toLowerCase() + '.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }
</script>
