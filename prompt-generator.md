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

    /* Example helper */
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
        border-radius: 8px;
        padding: 20px;
        margin-top: 15px;
        display: none;
    }

    .pattern-feedback.show {
        display: block;
    }

    .pattern-feedback.warning {
        background: #fff3cd;
        border-color: #ffc107;
    }

    .pattern-feedback h4 {
        color: #155724;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.1em;
    }

    .pattern-feedback.warning h4 {
        color: #856404;
    }

    .pattern-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin-bottom: 15px;
    }

    .pattern-item {
        background: white;
        border: 1px solid #c3e6cb;
        border-radius: 6px;
        padding: 12px;
    }

    .pattern-feedback.warning .pattern-item {
        border-color: #ffeaa7;
    }

    .pattern-item strong {
        display: block;
        color: #155724;
        margin-bottom: 5px;
        font-size: 0.9em;
    }

    .pattern-feedback.warning .pattern-item strong {
        color: #856404;
    }

    .pattern-value {
        color: #155724;
        font-size: 1.05em;
        font-weight: 600;
    }

    .pattern-feedback.warning .pattern-value {
        color: #856404;
    }

    .consistency-issues {
        background: white;
        border: 1px solid #ffeaa7;
        border-radius: 6px;
        padding: 15px;
        margin-top: 15px;
    }

    .consistency-issues h5 {
        color: #856404;
        margin-bottom: 10px;
        font-size: 1em;
    }

    .consistency-issues ul {
        margin-left: 20px;
        color: #856404;
    }

    .consistency-issues li {
        margin-bottom: 8px;
        line-height: 1.5;
    }

    .pattern-note {
        margin-top: 15px;
        padding: 12px;
        background: white;
        border-left: 4px solid #28a745;
        font-size: 0.95em;
        color: #155724;
        line-height: 1.6;
    }

    .pattern-feedback.warning .pattern-note {
        border-left-color: #ffc107;
        color: #856404;
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

        .pattern-grid {
            grid-template-columns: 1fr;
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
                <div class="pattern-grid" id="patternGrid"></div>
                <div id="consistencyIssues"></div>
                <div class="pattern-note" id="patternNote"></div>
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

// Template data
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
// ENHANCED PATTERN ANALYZER
// =============================================================================
const PatternAnalyzer = {
    analyze(text) {
        // Parse text into problems
        const problems = this.parseProblems(text);
        
        if (problems.length === 0) {
            return null;
        }
        
        // Detect all pattern categories
        const patterns = {
            assessment: this.detectAssessmentFormat(problems),
            plan: this.detectPlanFormat(problems),
            brevity: this.measureBrevity(problems),
            justification: this.detectJustification(problems),
            contingency: this.detectContingency(text),
            structure: {
                problemFormat: this.detectProblemFormatting(text),
                bulletStyle: this.detectBulletStyle(text),
                spacing: this.detectSpacing(text)
            },
            voice: this.detectVoice(text),
            abbreviations: this.measureAbbreviationDensity(text)
        };
        
        // Check consistency
        const consistency = this.checkConsistency(patterns, problems);
        patterns.consistency = consistency;
        
        return patterns;
    },

    // Parse problems from text
    parseProblems(text) {
        const problems = [];
        
        // Split by bold problem markers
        const sections = text.split(/\*\*([^*]+)\*\*/);
        
        for (let i = 1; i < sections.length; i += 2) {
            const problemName = sections[i].trim();
            const content = sections[i + 1] || '';
            
            if (problemName && content.trim()) {
                problems.push({
                    name: problemName,
                    content: content,
                    lines: content.split('\n').filter(l => l.trim())
                });
            }
        }
        
        return problems;
    },

    // CATEGORY 1: ASSESSMENT FORMAT DETECTION
    detectAssessmentFormat(problems) {
        const formats = problems.map(problem => {
            const content = problem.content;
            const firstLine = problem.lines[0] || '';
            
            // Check for narrative (multiple sentences with connecting words)
            if (this.isNarrative(content)) {
                return 'narrative';
            }
            
            // Check for one-liner (single line with dash/colon)
            if (this.isOneLiner(content, firstLine)) {
                return 'oneliner';
            }
            
            // Check for discrete bullets
            if (this.hasDiscreteBullets(content)) {
                return 'discrete';
            }
            
            // Minimal (just problem name, very little after)
            return 'minimal';
        });
        
        return {
            primary: this.mostCommon(formats),
            consistency: [...new Set(formats)].length === 1,
            variations: [...new Set(formats)],
            distribution: this.countOccurrences(formats)
        };
    },

    isNarrative(text) {
        // Multiple sentences with connecting words
        const sentences = (text.match(/[.!?]+/g) || []).length;
        const connectingWords = ['given', 'therefore', 'likely', 'suggests', 
                                 'because', 'thus', 'however', 'although', 
                                 'since', 'as', 'due to'];
        const hasConnectors = connectingWords.some(word => 
            text.toLowerCase().includes(word)
        );
        
        // Check for paragraph structure (not just bullet points)
        const bulletCount = (text.match(/^\s*[-*]\s+/gm) || []).length;
        const isNotBulletList = bulletCount < 2;
        
        return sentences >= 2 && hasConnectors && isNotBulletList;
    },

    isOneLiner(content, firstLine) {
        const lines = content.split('\n').filter(l => l.trim());
        
        // Single line with dash or colon separator
        if (lines.length === 1) {
            return /[-:,]/.test(firstLine);
        }
        
        // Or first line is summary, rest are bullets
        if (lines.length > 1 && /[-:,]/.test(firstLine)) {
            const restAreBullets = lines.slice(1).every(l => /^\s*[-*]\s+/.test(l));
            return restAreBullets;
        }
        
        return false;
    },

    hasDiscreteBullets(text) {
        const bulletLines = text.split('\n')
            .filter(l => /^\s*[-*]\s+/.test(l));
        return bulletLines.length >= 2;
    },

    // CATEGORY 2: PLAN FORMAT DETECTION
    detectPlanFormat(problems) {
        const formats = problems.map(problem => {
            const content = problem.content;
            
            // Check for category subheadings
            if (this.hasCategorySubheadings(content)) {
                return 'categorized';
            }
            
            // Check for narrative plan
            if (this.isPlanNarrative(content)) {
                return 'narrative';
            }
            
            // Check for hybrid (narrative + bullets)
            if (this.isHybridPlan(content)) {
                return 'hybrid';
            }
            
            // Default to simple bullets
            return 'simple_bullets';
        });
        
        return {
            primary: this.mostCommon(formats),
            consistency: [...new Set(formats)].length === 1,
            variations: [...new Set(formats)],
            distribution: this.countOccurrences(formats)
        };
    },

    hasCategorySubheadings(text) {
        const subheadingPatterns = [
            /\*\*Diagnostics:\*\*/i,
            /\*\*Therapeutics:\*\*/i,
            /\*\*Medications:\*\*/i,
            /\*\*Follow-up:\*\*/i,
            /\*\*Referrals:\*\*/i,
            /\*\*Consults:\*\*/i,
            /\*\*Patient Education:\*\*/i,
            /Diagnostics:/i,
            /Therapeutics:/i,
            /Follow-up:/i
        ];
        
        return subheadingPatterns.some(pattern => pattern.test(text));
    },

    isPlanNarrative(text) {
        const futureTenseVerbs = ['will', 'plan to', 'going to', 'intend to'];
        const hasFutureTense = futureTenseVerbs.some(verb => 
            text.toLowerCase().includes(verb)
        );
        
        const sentences = (text.match(/[.!?]+/g) || []).length;
        const hasParagraphStructure = sentences >= 2;
        
        const bulletCount = (text.match(/^\s*[-*]\s+/gm) || []).length;
        const noBullets = bulletCount === 0;
        
        return hasFutureTense && hasParagraphStructure && noBullets;
    },

    isHybridPlan(text) {
        const lines = text.split('\n').filter(l => l.trim());
        
        let foundSentence = false;
        let foundBullet = false;
        
        for (const line of lines) {
            if (/[.!?]$/.test(line.trim()) && !/^\s*[-*]/.test(line)) {
                foundSentence = true;
            }
            if (/^\s*[-*]\s+/.test(line)) {
                foundBullet = true;
            }
        }
        
        return foundSentence && foundBullet;
    },

    // CATEGORY 3: DETAIL MODIFIERS
    measureBrevity(problems) {
        const allItems = [];
        
        problems.forEach(problem => {
            const bullets = problem.content
                .split('\n')
                .filter(l => /^\s*[-*]\s+/.test(l))
                .map(l => l.replace(/^\s*[-*]\s+/, '').trim());
            
            allItems.push(...bullets);
        });
        
        if (allItems.length === 0) return null;
        
        const wordCounts = allItems.map(item => item.split(/\s+/).length);
        const avg = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
        const max = Math.max(...wordCounts);
        const min = Math.min(...wordCounts);
        
        let level;
        if (avg < 6) level = 'terse';
        else if (avg < 12) level = 'moderate';
        else level = 'verbose';
        
        return {
            average: Math.round(avg * 10) / 10,
            max: max,
            min: min,
            level: level
        };
    },

    detectJustification(problems) {
        let noneCount = 0;
        let briefCount = 0;
        let detailedCount = 0;
        
        problems.forEach(problem => {
            const bullets = problem.content.split('\n')
                .filter(l => /^\s*[-*]\s+/.test(l));
            
            bullets.forEach(bullet => {
                const rationaleWords = [' for ', ' to ', ' per ', ' given ', ' because '];
                const hasRationale = rationaleWords.some(word => 
                    bullet.toLowerCase().includes(word)
                );
                
                if (!hasRationale) {
                    noneCount++;
                } else {
                    const detailedWords = ['guideline', 'target', 'goal', 'standard', 'achieve'];
                    const isDetailed = detailedWords.some(word => 
                        bullet.toLowerCase().includes(word)
                    );
                    
                    if (isDetailed) detailedCount++;
                    else briefCount++;
                }
            });
        });
        
        const total = noneCount + briefCount + detailedCount;
        if (total === 0) return { level: 'unknown' };
        
        const percentNone = noneCount / total;
        const percentDetailed = detailedCount / total;
        
        let level;
        if (percentNone > 0.7) level = 'none';
        else if (percentDetailed > 0.4) level = 'detailed';
        else level = 'brief';
        
        return { level: level };
    },

    detectContingency(text) {
        const contingencyPatterns = [
            /if\s+(?:no|inadequate|poor)\s+response/i,
            /if\s+(?:worsening|worsens)/i,
            /return\s+if/i,
            /rtc\s+if/i,
            /escalate\s+to/i,
            /→/g,
            /consider\s+adding/i,
            /if\s+persistent/i
        ];
        
        const matches = contingencyPatterns
            .filter(pattern => pattern.test(text))
            .length;
        
        let level;
        if (matches === 0) level = 'none';
        else if (matches <= 2) level = 'simple';
        else level = 'detailed';
        
        return { level: level, present: matches > 0 };
    },

    // CATEGORY 4: STRUCTURAL ELEMENTS
    detectProblemFormatting(text) {
        if (/\*\*[^*]+\*\*/.test(text)) return 'bold';
        if (/[A-Z\s]{3,}:/.test(text)) return 'caps';
        return 'plain';
    },

    detectBulletStyle(text) {
        const lines = text.split('\n');
        
        const hyphenCount = lines.filter(l => /^\s+-\s+/.test(l)).length;
        const asteriskCount = lines.filter(l => /^\s*\*\s+/.test(l) && !/\*\*/.test(l)).length;
        const numberCount = lines.filter(l => /^\s*\d+\.\s+/.test(l)).length;
        
        let style, count;
        if (hyphenCount > asteriskCount && hyphenCount > numberCount) {
            style = 'hyphen';
            count = hyphenCount;
        } else if (asteriskCount > numberCount) {
            style = 'asterisk';
            count = asteriskCount;
        } else if (numberCount > 0) {
            style = 'number';
            count = numberCount;
        } else {
            return { style: 'none', indent: 0 };
        }
        
        // Measure indentation
        const bulletLines = lines.filter(l => {
            if (style === 'hyphen') return /^\s+-\s+/.test(l);
            if (style === 'asterisk') return /^\s*\*\s+/.test(l) && !/\*\*/.test(l);
            if (style === 'number') return /^\s*\d+\.\s+/.test(l);
            return false;
        });
        
        const indent = bulletLines.length > 0 ? bulletLines[0].search(/\S/) : 0;
        
        return { style: style, indent: indent, count: count };
    },

    detectSpacing(text) {
        const hasBlankLines = /\n\s*\n/.test(text);
        return { blankLinesBetweenProblems: hasBlankLines };
    },

    // CATEGORY 5: VOICE & TONE
    detectVoice(text) {
        const firstPerson = (text.match(/\b(I will|I recommend|I plan|I started|I discussed)\b/gi) || []).length;
        const thirdPerson = (text.match(/\b(will|plan to|started|continue|recommend)\b/gi) || []).length - firstPerson;
        const passive = (text.match(/\b(was|were|will be|to be started|to be continued)\b/gi) || []).length;
        const patientCentric = (text.match(/\bpatient (will|prefers|wants|agrees|to)\b/gi) || []).length;
        
        const total = firstPerson + thirdPerson + passive + patientCentric;
        
        if (total === 0) return { voice: 'unknown' };
        
        const scores = {
            first_person: firstPerson,
            third_person: thirdPerson,
            passive: passive,
            patient_centric: patientCentric
        };
        
        const dominant = Object.keys(scores).reduce((a, b) => 
            scores[a] > scores[b] ? a : b
        );
        
        return { voice: dominant };
    },

    measureAbbreviationDensity(text) {
        const commonAbbreviations = [
            'RTC', 'PRN', 'BID', 'TID', 'QID', 'PO', 'IV', 'IM',
            'F/U', 'MMM', 'NDNT', 'OTC', 'AVS', 'PCMH', 'HTN',
            'DM', 'CHF', 'COPD', 'URI', 'UTI', 'SOB', 'CP', 'N/V'
        ];
        
        const found = commonAbbreviations.filter(abbr => 
            text.includes(abbr)
        );
        
        const words = text.split(/\s+/).length;
        const density = found.length / words * 100;
        
        let level;
        if (density > 5) level = 'high';
        else if (density > 2) level = 'moderate';
        else level = 'low';
        
        return {
            level: level,
            found: found,
            count: found.length
        };
    },

    // CONSISTENCY CHECKING
    checkConsistency(patterns, problems) {
        const issues = [];
        
        // Check assessment format consistency
        if (patterns.assessment.variations.length > 1) {
            issues.push({
                category: 'Assessment Format',
                message: `Mixed formats: ${patterns.assessment.variations.join(', ')}`,
                suggestion: 'Use consistent format, or vary by problem complexity'
            });
        }
        
        // Check plan format consistency
        if (patterns.plan.variations.length > 1) {
            issues.push({
                category: 'Plan Format',
                message: `Mixed formats: ${patterns.plan.variations.join(', ')}`,
                suggestion: 'Consider narrative for complex, bullets for simple'
            });
        }
        
        // Check brevity variance
        if (patterns.brevity && patterns.brevity.max - patterns.brevity.min > 10) {
            issues.push({
                category: 'Brevity',
                message: `Wide range: ${patterns.brevity.min}-${patterns.brevity.max} words per bullet`,
                suggestion: 'AI will match source content complexity'
            });
        }
        
        return {
            isConsistent: issues.length === 0,
            issues: issues
        };
    },

    // UTILITY FUNCTIONS
    mostCommon(arr) {
        const counts = {};
        arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    },

    countOccurrences(arr) {
        const counts = {};
        arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
        return counts;
    }
};

// =============================================================================
// PROMPT GENERATOR
// =============================================================================
const PromptGenerator = {
    generate(data) {
        const sections = [];
        
        // Task
        sections.push(this.generateTask());
        sections.push('\n---\n');
        
        // Output structure
        sections.push(this.generateOutputStructure(data.patterns));
        sections.push('\n---\n');
        
        // Rules
        sections.push(this.generateRules(data.patterns, data.customRules));
        sections.push('\n---\n');
        
        // Boilerplate
        if (data.boilerplates.length > 0) {
            sections.push(this.generateBoilerplate(data.boilerplates));
            sections.push('\n---\n');
        }
        
        // Few-shot examples
        sections.push('## Few-Shot Examples\n\n');
        sections.push(data.examples.trim());
        
        return sections.join('');
    },

    generateTask() {
        return 'Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.';
    },

    generateOutputStructure(patterns) {
        let output = '## Output Structure for Each Problem/Diagnosis\n\n';
        
        // Problem header based on formatting
        if (patterns.structure.problemFormat === 'bold') {
            output += '**[Problem/Diagnosis Name]**\n';
        } else {
            output += '[Problem/Diagnosis Name]\n';
        }
        
        // Assessment structure
        output += this.generateAssessmentStructure(patterns.assessment);
        
        // Plan structure
        output += this.generatePlanStructure(patterns.plan, patterns.structure.bulletStyle);
        
        return output;
    },

    generateAssessmentStructure(assessment) {
        const templates = {
            narrative: '[Write assessment as a flowing paragraph with clinical reasoning]\n\n',
            oneliner: '[Single-line summary after diagnosis with key clinical facts]\n\n',
            discrete: '[List assessment findings as separate bullets]\n\n',
            minimal: ''
        };
        
        return templates[assessment.primary] || '';
    },

    generatePlanStructure(plan, bulletStyle) {
        const indent = ' '.repeat(bulletStyle.indent || 8);
        const bullet = bulletStyle.style === 'hyphen' ? '-' : 
                      bulletStyle.style === 'asterisk' ? '*' : 
                      bulletStyle.style === 'number' ? '1.' : '-';
        
        const templates = {
            narrative: '[Write plan as flowing paragraph with future tense verbs]\n',
            
            simple_bullets: `${indent}${bullet} [Action item]\n${indent}${bullet} [Action item]\n`,
            
            categorized: `**Diagnostics:**\n${indent}${bullet} [Test/study]\n\n**Therapeutics:**\n${indent}${bullet} [Medication/treatment]\n\n**Follow-up:**\n${indent}${bullet} [Follow-up plan]\n`,
            
            hybrid: `[Opening narrative sentence explaining plan strategy]\n${indent}${bullet} [Action item]\n${indent}${bullet} [Action item]\n`
        };
        
        return templates[plan.primary] || templates.simple_bullets;
    },

    generateRules(patterns, customRules) {
        const rules = [];
        let num = 1;
        
        // Assessment instructions
        const assessmentInst = this.getAssessmentInstruction(patterns.assessment);
        if (assessmentInst) {
            rules.push(`${num}. ${assessmentInst}`);
            num++;
        }
        
        // Plan instructions
        const planInst = this.getPlanInstruction(patterns.plan);
        if (planInst) {
            rules.push(`${num}. ${planInst}`);
            num++;
        }
        
        // Problem formatting
        if (patterns.structure.problemFormat === 'bold') {
            rules.push(`${num}. Bold all problem/diagnosis names using **Problem** format`);
            num++;
        }
        
        // Bullet style
        if (patterns.structure.bulletStyle.style !== 'none') {
            const bulletChar = patterns.structure.bulletStyle.style === 'hyphen' ? 'hyphen (-)' :
                             patterns.structure.bulletStyle.style === 'asterisk' ? 'asterisk (*)' :
                             'numbers';
            rules.push(`${num}. Use ${bulletChar} for all bullets`);
            num++;
            
            if (patterns.structure.bulletStyle.indent > 0) {
                rules.push(`${num}. Indent all bullets with ${patterns.structure.bulletStyle.indent} spaces`);
                num++;
            }
        }
        
        // Brevity
        if (patterns.brevity) {
            if (patterns.brevity.level === 'terse') {
                rules.push(`${num}. Keep bullets extremely brief (under ${Math.ceil(patterns.brevity.average + 2)} words per bullet)`);
                num++;
            } else if (patterns.brevity.level === 'verbose') {
                rules.push(`${num}. Write detailed bullets with full context (approximately ${Math.ceil(patterns.brevity.average)} words each)`);
                num++;
            }
        }
        
        // Justification
        if (patterns.justification.level === 'none') {
            rules.push(`${num}. List actions only without explanation or rationale`);
            num++;
        } else if (patterns.justification.level === 'detailed') {
            rules.push(`${num}. Include detailed rationale for each action, referencing guidelines when relevant`);
            num++;
        }
        
        // Abbreviations
        if (patterns.abbreviations.level === 'high') {
            const abbrList = patterns.abbreviations.found.slice(0, 8).join(', ');
            rules.push(`${num}. Use extensive medical abbreviations (e.g., ${abbrList}, etc.)`);
            num++;
        } else if (patterns.abbreviations.level === 'low') {
            rules.push(`${num}. Minimize abbreviations. Write out most terms in full`);
            num++;
        }
        
        // Contingency planning
        if (patterns.contingency.level === 'detailed') {
            rules.push(`${num}. Include detailed if/then contingency plans for anticipated scenarios`);
            num++;
        } else if (patterns.contingency.level === 'simple') {
            rules.push(`${num}. Include simple return precautions (e.g., "return if symptoms worsen")`);
            num++;
        }
        
        // Voice
        if (patterns.voice.voice === 'first_person') {
            rules.push(`${num}. Use first-person active voice (e.g., "I will start," "I recommend")`);
            num++;
        } else if (patterns.voice.voice === 'passive') {
            rules.push(`${num}. Use passive voice constructions where appropriate`);
            num++;
        }
        
        // Core rules
        rules.push(`${num}. Never fabricate or infer information not present in the source text`);
        num++;
        
        if (patterns.structure.spacing.blankLinesBetweenProblems) {
            rules.push(`${num}. Insert a blank line between different problems`);
            num++;
        }
        
        rules.push(`${num}. No references`);
        num++;
        
        // Custom rules
        if (customRules.trim()) {
            const customList = customRules.split('\n').filter(r => r.trim());
            customList.forEach(rule => {
                const clean = rule.replace(/^[\s\-*\d.]+/, '').trim();
                if (clean) {
                    rules.push(`${num}. ${clean}`);
                    num++;
                }
            });
        }
        
        return '## Formatting Rules\n\n' + rules.join('\n');
    },

    getAssessmentInstruction(assessment) {
        const templates = {
            narrative: "Write the assessment as a flowing narrative paragraph. Use complete sentences that explain clinical reasoning. Connect findings to conclusions using words like 'given,' 'therefore,' and 'likely'",
            oneliner: "After each bolded diagnosis, write a single-line summary. Use dashes or commas to separate 2-4 key clinical facts. Keep it to one sentence maximum",
            discrete: "List key assessment findings as separate bullet points under each diagnosis. Use brief phrases, not complete sentences. Each clinical finding gets its own bullet",
            minimal: null
        };
        
        return templates[assessment.primary];
    },

    getPlanInstruction(plan) {
        const templates = {
            narrative: "Write the plan as a flowing paragraph using complete sentences. Use future tense ('will start,' 'plan to'). Explain actions in narrative form",
            simple_bullets: "Format the plan as bullet points. Write brief action phrases. Do not use category subheadings",
            categorized: "Organize the plan into categories with bold subheadings (Diagnostics:, Therapeutics:, Follow-up:). Under each subheading, list relevant action items as bullet points",
            hybrid: "Begin with a brief narrative sentence explaining the overall plan strategy. Then list specific action items as bullet points below"
        };
        
        return templates[plan.primary];
    },

    generateBoilerplate(boilerplates) {
        let section = '## Conditional Boilerplate Text\n\n';
        section += '[Insert after the bulleted list when applicable. This text should be italicized.]\n\n';
        
        boilerplates.forEach(bp => {
            section += `If ${bp.hook} discussed:\n`;
            section += `"${bp.text}"\n\n`;
        });
        
        return section;
    }
};

// =============================================================================
// TEMPLATE MANAGEMENT
// =============================================================================
function selectTemplate(templateName) {
    currentTemplate = templateName;
    
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.getElementById('examples').value = '';
    document.getElementById('customRules').value = '';
    document.getElementById('boilerplateContainer').innerHTML = '';
    document.getElementById('patternFeedback').classList.remove('show');
    boilerplateCount = 0;
    detectedPatterns = null;
    
    if (templateName === 'pithy') {
        loadTemplate(TEMPLATES.pithy);
    }
}

function loadTemplate(template) {
    document.getElementById('examples').value = template.examples;
    
    template.boilerplates.forEach(bp => {
        addBoilerplate();
        const entries = document.querySelectorAll('.boilerplate-entry');
        const lastEntry = entries[entries.length - 1];
        lastEntry.querySelector('.boilerplate-hook').value = bp.hook;
        lastEntry.querySelector('.boilerplate-text').value = bp.text;
    });
    
    setTimeout(() => analyzeExamples(), 500);
}

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
    
    detectedPatterns = PatternAnalyzer.analyze(examples);
    
    if (!detectedPatterns) {
        alert('Could not detect patterns. Please make sure your examples include problem names in **bold**.');
        return;
    }
    
    displayPatternFeedback(detectedPatterns);
}

function displayPatternFeedback(patterns) {
    const feedback = document.getElementById('patternFeedback');
    const grid = document.getElementById('patternGrid');
    const issuesDiv = document.getElementById('consistencyIssues');
    const noteDiv = document.getElementById('patternNote');
    
    // Build pattern grid
    let gridHTML = '';
    
    // Assessment format
    gridHTML += `
        <div class="pattern-item">
            <strong>Assessment Format</strong>
            <div class="pattern-value">${formatPatternName(patterns.assessment.primary)}</div>
        </div>
    `;
    
    // Plan format
    gridHTML += `
        <div class="pattern-item">
            <strong>Plan Format</strong>
            <div class="pattern-value">${formatPatternName(patterns.plan.primary)}</div>
        </div>
    `;
    
    // Brevity
    if (patterns.brevity) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Brevity Level</strong>
                <div class="pattern-value">${capitalize(patterns.brevity.level)} (avg ${patterns.brevity.average} words)</div>
            </div>
        `;
    }
    
    // Justification
    if (patterns.justification.level !== 'unknown') {
        gridHTML += `
            <div class="pattern-item">
                <strong>Justification</strong>
                <div class="pattern-value">${capitalize(patterns.justification.level)}</div>
            </div>
        `;
    }
    
    // Bullet style
    if (patterns.structure.bulletStyle.style !== 'none') {
        const bulletName = patterns.structure.bulletStyle.style === 'hyphen' ? 'Hyphen (-)' :
                          patterns.structure.bulletStyle.style === 'asterisk' ? 'Asterisk (*)' :
                          'Numbered';
        gridHTML += `
            <div class="pattern-item">
                <strong>Bullet Style</strong>
                <div class="pattern-value">${bulletName}, ${patterns.structure.bulletStyle.indent}-space indent</div>
            </div>
        `;
    }
    
    // Problem formatting
    gridHTML += `
        <div class="pattern-item">
            <strong>Problem Names</strong>
            <div class="pattern-value">${capitalize(patterns.structure.problemFormat)}</div>
        </div>
    `;
    
    // Voice
    if (patterns.voice.voice !== 'unknown') {
        gridHTML += `
            <div class="pattern-item">
                <strong>Voice</strong>
                <div class="pattern-value">${formatPatternName(patterns.voice.voice)}</div>
            </div>
        `;
    }
    
    // Abbreviations
    gridHTML += `
        <div class="pattern-item">
            <strong>Abbreviations</strong>
            <div class="pattern-value">${capitalize(patterns.abbreviations.level)} density (${patterns.abbreviations.count} found)</div>
        </div>
    `;
    
    // Contingency
    if (patterns.contingency.present) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Contingency Planning</strong>
                <div class="pattern-value">${capitalize(patterns.contingency.level)}</div>
            </div>
        `;
    }
    
    grid.innerHTML = gridHTML;
    
    // Handle consistency issues
    if (!patterns.consistency.isConsistent) {
        feedback.classList.add('warning');
        issuesDiv.innerHTML = `
            <div class="consistency-issues">
                <h5>⚠️ Inconsistencies Detected</h5>
                <ul>
                    ${patterns.consistency.issues.map(issue => `
                        <li><strong>${issue.category}:</strong> ${issue.message}. ${issue.suggestion}</li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        noteDiv.textContent = 'The generator will create flexible instructions to handle these variations. The AI will adapt based on content complexity.';
    } else {
        feedback.classList.remove('warning');
        issuesDiv.innerHTML = '';
        noteDiv.textContent = 'Patterns are consistent! The generator will create precise instructions matching your style.';
    }
    
    feedback.classList.add('show');
}

function formatPatternName(name) {
    return name.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
// FORM SUBMISSION
// =============================================================================
document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const examples = document.getElementById('examples').value;
    
    if (!examples.trim()) {
        alert('Please provide your few-shot examples!');
        return;
    }
    
    if (!detectedPatterns) {
        detectedPatterns = PatternAnalyzer.analyze(examples);
        if (detectedPatterns) {
            displayPatternFeedback(detectedPatterns);
        }
    }
    
    if (!detectedPatterns) {
        alert('Could not analyze patterns. Please make sure your examples are properly formatted.');
        return;
    }
    
    const data = {
        examples: examples,
        boilerplates: collectBoilerplates(),
        customRules: document.getElementById('customRules').value,
        patterns: detectedPatterns
    };
    
    const prompt = PromptGenerator.generate(data);
    
    const output = document.getElementById('output');
    output.textContent = prompt;
    output.classList.remove('empty');
    
    updateCharCount(prompt.length);
    
    document.getElementById('copyBtn').disabled = false;
    document.getElementById('downloadBtn').disabled = false;
    
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
