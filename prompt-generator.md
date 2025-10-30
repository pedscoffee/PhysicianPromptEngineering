---
layout: page
title: A/P Prompt Generator
permalink: /prompt-generator/
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .header {
        text-align: center;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e8e8e8;
    }

    .header h1 {
        font-size: 2.5em;
        font-weight: 300;
        color: #111;
        margin-bottom: 10px;
    }

    .header p {
        color: #828282;
        font-size: 1.1em;
        line-height: 1.6;
    }

    /* Template selector */
    .template-section {
        background: #f0f7ff;
        border: 2px solid #2a7ae2;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
    }

    .template-section h3 {
        color: #2a7ae2;
        margin-bottom: 15px;
        font-size: 1.2em;
    }

    .template-buttons {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    .template-btn {
        flex: 1;
        min-width: 200px;
        padding: 15px 20px;
        border: 2px solid #2a7ae2;
        background: white;
        color: #2a7ae2;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
    }

    .template-btn:hover {
        background: #2a7ae2;
        color: white;
    }

    .template-btn.active {
        background: #2a7ae2;
        color: white;
    }

    /* Form sections */
    .form-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 20px;
    }

    .form-section h3 {
        color: #111;
        margin-bottom: 20px;
        font-size: 1.3em;
        padding-bottom: 10px;
        border-bottom: 2px solid #2a7ae2;
    }

    .field {
        margin-bottom: 25px;
    }

    .field label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #111;
        font-size: 1.05em;
    }

    .required {
        color: #e74c3c;
    }

    .help-text {
        font-size: 0.9em;
        color: #828282;
        margin-top: 5px;
        line-height: 1.5;
    }

    input[type="text"],
    textarea,
    select {
        width: 100%;
        padding: 12px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-family: inherit;
        font-size: 14px;
        transition: border-color 0.2s;
    }

    input[type="text"]:focus,
    textarea:focus,
    select:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    textarea {
        font-family: 'Monaco', 'Courier New', monospace;
        line-height: 1.5;
        resize: vertical;
        min-height: 100px;
    }

    /* Example examples section */
    .example-helper {
        background: #f9f9f9;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        padding: 15px;
        margin-top: 10px;
    }

    .example-helper-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }

    .example-helper-header h4 {
        color: #2a7ae2;
        font-size: 1em;
    }

    .toggle-icon {
        color: #2a7ae2;
        font-size: 1.2em;
        font-weight: bold;
    }

    .example-content {
        display: none;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #e8e8e8;
    }

    .example-content.show {
        display: block;
    }

    .example-item {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 12px;
        margin-bottom: 10px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        white-space: pre-wrap;
        line-height: 1.6;
    }

    /* Pattern detection feedback */
    .pattern-feedback {
        background: #d4edda;
        border: 2px solid #28a745;
        border-radius: 6px;
        padding: 15px;
        margin-top: 15px;
        display: none;
    }

    .pattern-feedback.show {
        display: block;
    }

    .pattern-feedback h4 {
        color: #155724;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .pattern-feedback ul {
        margin-left: 20px;
        color: #155724;
    }

    .pattern-feedback li {
        margin-bottom: 5px;
    }

    /* Boilerplate section */
    .boilerplate-entry {
        background: #f9f9f9;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        padding: 20px;
        margin-bottom: 15px;
    }

    .boilerplate-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .boilerplate-header h4 {
        font-size: 1em;
        color: #111;
        font-weight: 600;
    }

    .remove-btn {
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 6px 12px;
        font-size: 0.85em;
        cursor: pointer;
        transition: background 0.2s;
    }

    .remove-btn:hover {
        background: #c0392b;
    }

    .add-boilerplate-btn {
        width: 100%;
        padding: 15px;
        background: white;
        color: #2a7ae2;
        border: 2px dashed #2a7ae2;
        border-radius: 6px;
        font-weight: 600;
        font-size: 1em;
        cursor: pointer;
        transition: all 0.2s;
    }

    .add-boilerplate-btn:hover {
        background: #f0f7ff;
        border-style: solid;
    }

    /* Custom rules */
    .custom-rules-toggle {
        background: #f9f9f9;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        padding: 15px;
        margin-top: 20px;
        cursor: pointer;
        text-align: center;
        font-weight: 600;
        color: #2a7ae2;
        transition: all 0.2s;
    }

    .custom-rules-toggle:hover {
        background: #f0f0f0;
    }

    .custom-rules-content {
        display: none;
        margin-top: 15px;
    }

    .custom-rules-content.show {
        display: block;
    }

    /* Generate button */
    .generate-btn {
        width: 100%;
        padding: 18px;
        background: #28a745;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.2em;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        margin-top: 20px;
    }

    .generate-btn:hover {
        background: #218838;
    }

    .generate-btn:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    /* Output section */
    .output-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        padding: 30px;
        margin-top: 30px;
    }

    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-wrap: wrap;
        gap: 15px;
    }

    .output-title {
        font-size: 1.5em;
        font-weight: 600;
        color: #111;
    }

    .char-count {
        font-size: 1em;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 600;
    }

    .char-count.good {
        background: #d4edda;
        color: #155724;
    }

    .char-count.warning {
        background: #fff3cd;
        color: #856404;
    }

    .char-count.danger {
        background: #f8d7da;
        color: #721c24;
    }

    .output-content {
        background: #f9f9f9;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        padding: 20px;
        min-height: 400px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.7;
        white-space: pre-wrap;
        word-wrap: break-word;
        max-height: 600px;
        overflow-y: auto;
    }

    .output-content.empty {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #828282;
        font-family: inherit;
        font-style: italic;
        text-align: center;
    }

    .action-buttons {
        display: flex;
        gap: 15px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .copy-btn,
    .download-btn {
        flex: 1;
        min-width: 150px;
        padding: 12px 20px;
        border: 2px solid #2a7ae2;
        background: white;
        color: #2a7ae2;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .copy-btn:hover,
    .download-btn:hover {
        background: #2a7ae2;
        color: white;
    }

    .copy-btn.copied {
        background: #28a745;
        border-color: #28a745;
        color: white;
    }

    .copy-btn:disabled,
    .download-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #f0f0f0;
        border-color: #ccc;
        color: #999;
    }

    /* Support section */
    .support-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        padding: 25px;
        margin-top: 30px;
        text-align: center;
    }

    .support-section h3 {
        font-size: 1.3em;
        font-weight: 600;
        color: #111;
        margin-bottom: 15px;
    }

    .support-section p {
        color: #828282;
        margin-bottom: 15px;
        line-height: 1.6;
    }

    .tip-jar-btn {
        display: inline-block;
        padding: 12px 30px;
        background: #2a7ae2;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        transition: background 0.2s;
    }

    .tip-jar-btn:hover {
        background: #1e59a8;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .header h1 {
            font-size: 1.8em;
        }

        .template-buttons {
            flex-direction: column;
        }

        .template-btn {
            min-width: 100%;
        }

        .form-section,
        .output-section {
            padding: 20px;
        }

        .output-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .action-buttons {
            flex-direction: column;
        }

        .copy-btn,
        .download-btn {
            width: 100%;
        }
    }
</style>

<div class="header">
    <h1>Assessment & Plan Prompt Generator</h1>
    <p>Create custom prompts to format AI scribe output into your perfect clinical notes.<br>
    Designed for physicians new to AI - no technical knowledge required.</p>
</div>

<!-- Template Selection -->
<div class="template-section">
    <h3>How would you like to start?</h3>
    <div class="template-buttons">
        <button class="template-btn active" onclick="selectTemplate('scratch')">
            Start from Scratch
        </button>
        <button class="template-btn" onclick="selectTemplate('pithy')">
            Use "Pithy" Template
        </button>
    </div>
    <div class="help-text" style="margin-top: 15px; text-align: center;">
        Starting from scratch lets you build your own style. Using a template pre-fills the form with a proven format you can customize.
    </div>
</div>

<!-- Main Form -->
<form id="promptForm">
    <!-- Few-Shot Examples Section -->
    <div class="form-section">
        <h3>Your Few-Shot Examples</h3>
        <div class="field">
            <label>Paste 3-5 Examples of Your Ideal A/P Output <span class="required">*</span></label>
            <div class="help-text" style="margin-bottom: 10px;">
                These examples are the most important part! They teach the AI your exact style.
                Show how YOU want problems formatted, how brief you want bullets, what abbreviations you use.
            </div>
            <textarea id="examples" rows="14" placeholder="Paste your examples here. Separate each example clearly.

Example:
**Viral URI**
        - Supportive care, fluids
        - Tylenol PRN for fever
        - RTC if not improving in 3-5 days

**Acute Otitis Media**
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - F/U 2wk or PRN
        - Return precautions given" required></textarea>
            
            <!-- Example Helper -->
            <div class="example-helper">
                <div class="example-helper-header" onclick="toggleExamples()">
                    <h4>💡 Show me good examples</h4>
                    <span class="toggle-icon" id="exampleToggle">+</span>
                </div>
                <div class="example-content" id="exampleContent">
                    <p style="color: #666; margin-bottom: 15px; font-size: 0.95em;">
                        Here are examples from a proven pediatric prompt. Copy the structure and adapt to your specialty:
                    </p>
                    <div class="example-item">**Asthma**
        - Flovent 44mcg 2 puff BID started
        - Continue albuterol PRN
        - Use spacer
        - RTC 3mo/PRN</div>
                    <div class="example-item">**Well Child Check**
        - Growing and developing well
        - Reviewed anticipatory guidance
        - RTC 1yr/PRN</div>
                    <div class="example-item">**Vomiting, mild dehydration**
        - NDNT on exam with MMM
        - Zofran PRN, pedialyte, Tylenol, Motrin
        - RTC PRN</div>
                    <p style="color: #666; margin-top: 15px; font-size: 0.9em; font-style: italic;">
                        Notice: Bold problem names, short bullets (under 10 words), clinical abbreviations, and clear follow-up plans.
                    </p>
                </div>
            </div>

            <!-- Pattern Detection Feedback -->
            <div class="pattern-feedback" id="patternFeedback">
                <h4>✓ Pattern Detection Results</h4>
                <ul id="patternList"></ul>
                <p style="margin-top: 10px; font-size: 0.9em; color: #155724;">
                    The generator will use these patterns. If something looks wrong, adjust your examples above and click "Analyze Examples" again.
                </p>
            </div>

            <button type="button" class="add-boilerplate-btn" onclick="analyzeExamples()" style="margin-top: 15px; background: #2a7ae2; color: white; border: 2px solid #2a7ae2;">
                📊 Analyze Examples
            </button>
        </div>
    </div>

    <!-- Boilerplate Phrases Section -->
    <div class="form-section">
        <h3>Boilerplate Phrases (Optional)</h3>
        <p class="help-text" style="margin-bottom: 20px;">
            Add conditional text that appears after your bullets when certain visit types occur.
            For example: "If well child check → insert standard anticipatory guidance text"
        </p>
        
        <div id="boilerplateContainer"></div>
        
        <button type="button" class="add-boilerplate-btn" onclick="addBoilerplate()">
            + Add Boilerplate Phrase
        </button>
    </div>

    <!-- Custom Rules Section -->
    <div class="form-section">
        <h3>Formatting Rules</h3>
        <p class="help-text" style="margin-bottom: 15px;">
            The generator will automatically create rules based on your examples. Most users don't need to add anything here.
        </p>
        
        <div class="custom-rules-toggle" onclick="toggleCustomRules()">
            ⚙️ Add Custom Rules (Advanced)
        </div>
        
        <div class="custom-rules-content" id="customRulesContent">
            <textarea id="customRules" rows="6" placeholder="Add any specialty-specific requirements...

Example:
- Always include growth chart interpretation for peds
- Reference specific guidelines when applicable
- Include specific return precautions for each diagnosis"></textarea>
        </div>
    </div>

    <button type="submit" class="generate-btn">✨ Generate My Prompt</button>
</form>

<!-- Output Section -->
<div class="output-section">
    <div class="output-header">
        <div class="output-title">Your Generated Prompt</div>
        <div id="charCount" class="char-count good">0 / 5,000</div>
    </div>
    <div id="output" class="output-content empty">
        Fill out the form above and click "Generate My Prompt" to create your custom A/P formatting prompt.
    </div>
    <div class="action-buttons">
        <button id="copyBtn" class="copy-btn" disabled>📋 Copy to Clipboard</button>
        <button id="downloadBtn" class="download-btn" disabled>💾 Download as TXT</button>
    </div>
</div>

<!-- Support Section -->
<div class="support-section">
    <h3>Found this useful?</h3>
    <p>If this tool has helped streamline your clinical workflow, consider supporting the project with a small tip.<br>
    Your support helps keep this resource free and ad-free for all clinicians.</p>
    <p><strong>Students: Don't even think about it.</strong></p>
    <a href="https://donate.stripe.com/14A9ANf3K8VjeAW7pT8bS00" target="_blank" class="tip-jar-btn">☕ Support with a Tip</a>
</div>

<script>
// =============================================================================
// STATE MANAGEMENT
// =============================================================================
let boilerplateCount = 0;
let currentTemplate = 'scratch';
let detectedPatterns = null;

// Template data (from existing ap-formatting.txt)
const TEMPLATES = {
    pithy: {
        examples: `**Asthma**
        - Flovent 44mcg 2 puff BID started
        - Continue albuterol PRN
        - Use spacer
        - RTC 3mo/PRN

**Well Child Check**
        - Growing and developing well
        - Reviewed anticipatory guidance
        - RTC 1yr/PRN

**Vomiting, mild dehydration**
        - NDNT on exam with MMM
        - Zofran PRN, pedialyte, Tylenol, Motrin
        - RTC PRN

**ADHD**
        - Concerta 27mg not effective
        - Transition to Vyvanse 20mg PO daily
        - RTC 1mo

**Viral URI**
        - Supportive care, fluids
        - Declined COVID test
        - RTC PRN`,
        boilerplates: [
            {
                hook: 'well child check or health maintenance',
                text: 'All forms, labs, immunizations, and patient concerns reviewed and addressed appropriately. Screening questions, past medical history, past social history, medications, and growth chart reviewed. Age-appropriate anticipatory guidance reviewed and printed in AVS. Parent questions addressed.'
            },
            {
                hook: 'any illness',
                text: 'Recommended supportive care with OTC medications as needed. Return precautions given including increasing pain, worsening fever, dehydration, new symptoms, prolonged symptoms, worsening symptoms, and other concerns. Caregiver expressed understanding and agreement with treatment plan.'
            },
            {
                hook: 'any injury',
                text: 'Recommended supportive care with Tylenol, Motrin, rest, ice, compression, elevation, and gradual return to activity as appropriate. Return precautions given including increasing pain, swelling, or failure to improve.'
            }
        ]
    }
};

// =============================================================================
// TEMPLATE MANAGEMENT
// =============================================================================
function selectTemplate(templateName) {
    currentTemplate = templateName;
    
    // Update button states
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Clear form
    document.getElementById('examples').value = '';
    document.getElementById('customRules').value = '';
    document.getElementById('boilerplateContainer').innerHTML = '';
    document.getElementById('patternFeedback').classList.remove('show');
    boilerplateCount = 0;
    
    // Load template if not scratch
    if (templateName === 'pithy') {
        loadTemplate(TEMPLATES.pithy);
    }
}

function loadTemplate(template) {
    // Load examples
    document.getElementById('examples').value = template.examples;
    
    // Load boilerplates
    template.boilerplates.forEach(bp => {
        addBoilerplate();
        const entries = document.querySelectorAll('.boilerplate-entry');
        const lastEntry = entries[entries.length - 1];
        lastEntry.querySelector('.boilerplate-hook').value = bp.hook;
        lastEntry.querySelector('.boilerplate-text').value = bp.text;
    });
    
    // Auto-analyze
    setTimeout(() => analyzeExamples(), 500);
}

// =============================================================================
// PATTERN ANALYZER
// =============================================================================
const PatternAnalyzer = {
    analyze(text) {
        return {
            bulletStyle: this.analyzeBulletStyle(text),
            brevity: this.analyzeBrevity(text),
            abbreviations: this.findAbbreviations(text),
            formatting: this.analyzeFormatting(text),
            structure: this.analyzeStructure(text)
        };
    },

    analyzeBulletStyle(text) {
        const lines = text.split('\n').filter(l => l.trim());
        
        // Count hyphen bullets
        const hyphenCount = lines.filter(l => /^\s*-\s+/.test(l)).length;
        // Count asterisk bullets (but not bold markers)
        const asteriskCount = lines.filter(l => /^\s*\*\s+/.test(l) && !/\*\*/.test(l)).length;
        
        if (hyphenCount > asteriskCount) {
            const hyphenLines = lines.filter(l => /^\s*-\s+/.test(l));
            const indent = hyphenLines.length > 0 ? hyphenLines[0].search(/\S/) : 8;
            return { style: 'hyphen', indent: indent, count: hyphenCount };
        } else if (asteriskCount > 0) {
            const asteriskLines = lines.filter(l => /^\s*\*\s+/.test(l) && !/\*\*/.test(l));
            const indent = asteriskLines.length > 0 ? asteriskLines[0].search(/\S/) : 0;
            return { style: 'asterisk', indent: indent, count: asteriskCount };
        }
        
        return { style: 'hyphen', indent: 8, count: 0 };
    },

    analyzeBrevity(text) {
        const bullets = text.split('\n')
            .filter(l => /^\s*[-*]\s+/.test(l))
            .map(l => l.replace(/^\s*[-*]\s+/, '').trim());
        
        if (bullets.length === 0) return null;
        
        const wordCounts = bullets.map(b => b.split(/\s+/).length);
        const avg = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
        const max = Math.max(...wordCounts);
        
        return {
            average: Math.round(avg),
            max: max,
            isVeryBrief: avg <= 10
        };
    },

    findAbbreviations(text) {
        const common = [
            'RTC', 'PRN', 'BID', 'TID', 'QID', 'PO', 'IM', 'IV', 
            'F/U', 'MMM', 'NDNT', 'OTC', 'AVS', 'PCMH'
        ];
        return common.filter(abbr => text.includes(abbr));
    },

    analyzeFormatting(text) {
        return {
            hasBold: /\*\*[^*]+\*\*/.test(text),
            problemOriented: /\*\*[^*]+\*\*\s*\n\s*[-*]/.test(text),
            hasBlankLines: /\n\s*\n/.test(text)
        };
    },

    analyzeStructure(text) {
        const problems = (text.match(/\*\*[^*]+\*\*/g) || []).length;
        const bullets = (text.match(/^\s*[-*]\s+/gm) || []).length;
        
        return {
            problemCount: problems,
            bulletCount: bullets,
            bulletsPerProblem: problems > 0 ? Math.round(bullets / problems) : 0
        };
    }
};

// =============================================================================
// UI INTERACTIONS
// =============================================================================
function toggleExamples() {
    const content = document.getElementById('exampleContent');
    const icon = document.getElementById('exampleToggle');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.textContent = '+';
    } else {
        content.classList.add('show');
        icon.textContent = '−';
    }
}

function toggleCustomRules() {
    const content = document.getElementById('customRulesContent');
    content.classList.toggle('show');
}

function analyzeExamples() {
    const examples = document.getElementById('examples').value;
    
    if (!examples.trim()) {
        alert('Please paste your examples first!');
        return;
    }
    
    // Analyze patterns
    detectedPatterns = PatternAnalyzer.analyze(examples);
    
    // Display results
    displayPatternFeedback(detectedPatterns);
}

function displayPatternFeedback(patterns) {
    const feedback = document.getElementById('patternFeedback');
    const list = document.getElementById('patternList');
    
    let items = [];
    
    // Bullet style
    const bulletChar = patterns.bulletStyle.style === 'hyphen' ? 'Hyphen (-)' : 'Asterisk (*)';
    items.push(`<strong>Bullet style:</strong> ${bulletChar} with ${patterns.bulletStyle.indent}-space indent`);
    
    // Problem-oriented
    if (patterns.formatting.problemOriented) {
        items.push(`<strong>Structure:</strong> Problem-oriented format with bold problem names`);
    } else {
        items.push(`<strong>Structure:</strong> Standard bullet list format`);
    }
    
    // Brevity
    if (patterns.brevity) {
        const brevityDesc = patterns.brevity.isVeryBrief ? 'Very brief' : 'Moderate length';
        items.push(`<strong>Brevity:</strong> ${brevityDesc} (average ${patterns.brevity.average} words per bullet)`);
    }
    
    // Abbreviations
    if (patterns.abbreviations.length > 0) {
        items.push(`<strong>Abbreviations detected:</strong> ${patterns.abbreviations.slice(0, 5).join(', ')}${patterns.abbreviations.length > 5 ? '...' : ''}`);
    }
    
    // Structure
    if (patterns.structure.problemCount > 0) {
        items.push(`<strong>Example structure:</strong> ${patterns.structure.problemCount} problems, averaging ${patterns.structure.bulletsPerProblem} bullets each`);
    }
    
    list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    feedback.classList.add('show');
}

// =============================================================================
// BOILERPLATE MANAGEMENT
// =============================================================================
function addBoilerplate() {
    boilerplateCount++;
    const container = document.getElementById('boilerplateContainer');
    
    const entry = document.createElement('div');
    entry.className = 'boilerplate-entry';
    entry.id = `boilerplate-${boilerplateCount}`;
    entry.innerHTML = `
        <div class="boilerplate-header">
            <h4>Boilerplate Phrase ${boilerplateCount}</h4>
            <button type="button" class="remove-btn" onclick="removeBoilerplate(${boilerplateCount})">Remove</button>
        </div>
        <div style="margin-bottom: 15px;">
            <label style="font-weight: 500; font-size: 0.95em; margin-bottom: 5px; display: block;">When to insert this?</label>
            <input type="text" class="boilerplate-hook" placeholder='e.g., "well child check", "illness", "injury", "ear infection"' style="width: 100%;">
            <div class="help-text">What triggers this text to appear?</div>
        </div>
        <div>
            <label style="font-weight: 500; font-size: 0.95em; margin-bottom: 5px; display: block;">Boilerplate Text</label>
            <textarea class="boilerplate-text" rows="3" placeholder="Enter the text to insert when this condition is met..." style="width: 100%;"></textarea>
        </div>
    `;
    
    container.appendChild(entry);
}

function removeBoilerplate(id) {
    const entry = document.getElementById(`boilerplate-${id}`);
    if (entry) {
        entry.remove();
    }
}

function collectBoilerplates() {
    const entries = document.querySelectorAll('.boilerplate-entry');
    const boilerplates = [];
    
    entries.forEach(entry => {
        const hook = entry.querySelector('.boilerplate-hook').value.trim();
        const text = entry.querySelector('.boilerplate-text').value.trim();
        
        if (hook && text) {
            boilerplates.push({ hook, text });
        }
    });
    
    return boilerplates;
}

// =============================================================================
// PROMPT GENERATOR
// =============================================================================
const PromptGenerator = {
    generate(data) {
        const sections = [];
        
        // Task
        sections.push(this.generateTask(data));
        sections.push('\n---\n');
        
        // Output structure
        sections.push(this.generateOutputStructure(data));
        sections.push('\n---\n');
        
        // Rules
        sections.push(this.generateRules(data));
        sections.push('\n---\n');
        
        // Boilerplate (if any)
        if (data.boilerplates.length > 0) {
            sections.push(this.generateBoilerplate(data));
            sections.push('\n---\n');
        }
        
        // Few-shot examples
        sections.push('## Few-Shot Examples\n\n');
        sections.push(data.examples.trim());
        
        return sections.join('');
    },

    generateTask(data) {
        return 'Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.';
    },

    generateOutputStructure(data) {
        const patterns = data.patterns;
        let output = '## Output Structure for Each Problem/Diagnosis\n\n';
        
        if (patterns.formatting.problemOriented) {
            output += '**[Problem/Diagnosis Name]**\n';
        }
        
        const indent = ' '.repeat(patterns.bulletStyle.indent);
        const bullet = patterns.bulletStyle.style === 'hyphen' ? '-' : '*';
        
        output += `${indent}${bullet} [A very brief bullet point summarizing a key finding, action, or follow-up plan]\n`;
        output += `${indent}${bullet} [Each point should be a separate bullet, written as a short clinical shorthand phrase]\n`;
        
        return output;
    },

    generateRules(data) {
        const patterns = data.patterns;
        const rules = ['## Formatting Rules\n'];
        let num = 1;
        
        // Bold formatting
        if (patterns.formatting.problemOriented) {
            rules.push(`${num}. Bold formatting for problem names\n`);
            num++;
        }
        
        // Bullet style
        const bulletChar = patterns.bulletStyle.style === 'hyphen' ? 'hyphen (-)' : 'asterisk (*)';
        rules.push(`${num}. Use a ${bulletChar} for all bullets\n`);
        num++;
        
        // Indentation
        if (patterns.bulletStyle.indent > 0) {
            rules.push(`${num}. Indent all bullets with ${patterns.bulletStyle.indent} spaces\n`);
            num++;
        }
        
        // Brevity
        if (patterns.brevity && patterns.brevity.isVeryBrief) {
            rules.push(`${num}. Write all bullet points in extremely brief, professional shorthand phrases\n`);
            num++;
            rules.push(`${num}. Keep bullets concise (ideally under ${Math.max(10, patterns.brevity.max)} words per bullet)\n`);
            num++;
        }
        
        // Abbreviations
        if (patterns.abbreviations.length > 0) {
            const abbrList = patterns.abbreviations.join(', ');
            rules.push(`${num}. Use standard medical abbreviations (${abbrList}, etc.)\n`);
            num++;
        }
        
        // Core rules
        rules.push(`${num}. Never fabricate or infer information not present in the source text\n`);
        num++;
        
        if (patterns.formatting.hasBlankLines) {
            rules.push(`${num}. Insert a blank line between problems when multiple diagnoses exist\n`);
            num++;
        }
        
        rules.push(`${num}. No references\n`);
        num++;
        
        // Custom rules
        if (data.customRules.trim()) {
            const customList = data.customRules.split('\n').filter(r => r.trim());
            customList.forEach(rule => {
                const clean = rule.replace(/^[\s\-*\d.]+/, '').trim();
                if (clean) {
                    rules.push(`${num}. ${clean}\n`);
                    num++;
                }
            });
        }
        
        return rules.join('');
    },

    generateBoilerplate(data) {
        let section = '## Conditional Boilerplate Text\n\n';
        section += '[Insert after the bulleted list when applicable. This text should be italicized.]\n\n';
        
        data.boilerplates.forEach(bp => {
            section += `If ${bp.hook} discussed:\n`;
            section += `"${bp.text}"\n\n`;
        });
        
        return section;
    }
};

// =============================================================================
// FORM SUBMISSION
// =============================================================================
document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const examples = document.getElementById('examples').value;
    
    if (!examples.trim()) {
        alert('Please provide your few-shot examples!');
        return;
    }
    
    // Analyze if not already done
    if (!detectedPatterns) {
        detectedPatterns = PatternAnalyzer.analyze(examples);
        displayPatternFeedback(detectedPatterns);
    }
    
    // Collect data
    const data = {
        examples: examples,
        boilerplates: collectBoilerplates(),
        customRules: document.getElementById('customRules').value,
        patterns: detectedPatterns
    };
    
    // Generate prompt
    const prompt = PromptGenerator.generate(data);
    
    // Display output
    const output = document.getElementById('output');
    output.textContent = prompt;
    output.classList.remove('empty');
    
    // Update character count
    updateCharCount(prompt.length);
    
    // Enable buttons
    document.getElementById('copyBtn').disabled = false;
    document.getElementById('downloadBtn').disabled = false;
    
    // Scroll to output
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// =============================================================================
// OUTPUT ACTIONS
// =============================================================================
function updateCharCount(count) {
    const charCount = document.getElementById('charCount');
    charCount.textContent = `${count.toLocaleString()} / 5,000`;
    
    charCount.classList.remove('good', 'warning', 'danger');
    if (count > 5000) {
        charCount.classList.add('danger');
    } else if (count > 4500) {
        charCount.classList.add('warning');
    } else {
        charCount.classList.add('good');
    }
}

document.getElementById('copyBtn').addEventListener('click', async function() {
    const text = document.getElementById('output').textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        this.textContent = '✓ Copied!';
        this.classList.add('copied');
        
        setTimeout(() => {
            this.textContent = '📋 Copy to Clipboard';
            this.classList.remove('copied');
        }, 2000);
    } catch (err) {
        alert('Failed to copy. Please select and copy manually.');
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const text = document.getElementById('output').textContent;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `ap_prompt_${timestamp}.txt`;
    
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
</script>