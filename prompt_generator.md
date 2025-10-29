---
layout: page
title: Prompt Generator
permalink: /prompt-generator/
---
{% raw %}
<style>
    /* The style block must remain inside the {% raw %} block
    to ensure it's not processed by Jekyll's Markdown engine.
    */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* The main Minima theme already handles body and container styles,
       but keeping this block for any custom overrides. */
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        line-height: 1.6;
        color: #111;
        background: #fdfdfd;
        /* Padding removed as Minima's layout provides it */
    }

    .container {
        /* Remove max-width/margin as the Minima theme handles the page wrapper */
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
    }

    .form-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 20px;
    }

    .field {
        margin-bottom: 25px;
    }

    .field label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #111;
    }

    .required {
        color: #e74c3c;
    }

    .help-text {
        font-size: 0.9em;
        color: #828282;
        margin-top: 5px;
        font-style: italic;
    }

    input[type="text"],
    textarea,
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        font-family: inherit;
        font-size: 14px;
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
    }

    .examples-box {
        background: #f9f9f9;
        border-left: 4px solid #2a7ae2;
        padding: 15px;
        margin-top: 10px;
        font-size: 0.9em;
    }

    .examples-box strong {
        color: #2a7ae2;
    }

    .advanced-toggle {
        background: #f9f9f9;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 20px;
        cursor: pointer;
        text-align: center;
        font-weight: 600;
        color: #2a7ae2;
        transition: background 0.2s;
    }

    .advanced-toggle:hover {
        background: #f0f0f0;
    }

    .advanced-options {
        display: none;
        margin-top: 10px;
    }

    .advanced-options.show {
        display: block;
    }

    .checkbox-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .checkbox-item {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .checkbox-item input[type="checkbox"] {
        width: 18px;
        height: 18px;
    }

    .checkbox-item label {
        margin: 0;
        font-weight: 400;
    }

    .boilerplate-entry {
        background: #f9f9f9;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 15px;
    }

    .boilerplate-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .boilerplate-header h4 {
        font-size: 0.95em;
        color: #111;
        font-weight: 600;
    }

    .remove-btn {
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 0.85em;
        cursor: pointer;
        transition: background 0.2s;
    }

    .remove-btn:hover {
        background: #c0392b;
    }

    .add-boilerplate-btn {
        width: 100%;
        padding: 10px;
        background: white;
        color: #2a7ae2;
        border: 2px dashed #2a7ae2;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }

    .add-boilerplate-btn:hover {
        background: #f0f0f0;
    }

    .generate-btn {
        width: 100%;
        padding: 15px;
        background: #2a7ae2;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1.1em;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
    }

    .generate-btn:hover {
        background: #1e59a8;
    }

    .output-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 30px;
    }

    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .output-title {
        font-size: 1.3em;
        font-weight: 600;
    }

    .char-count {
        font-size: 0.9em;
        padding: 5px 12px;
        border-radius: 3px;
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
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 20px;
        min-height: 300px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
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
    }

    .action-buttons {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }

    .copy-btn,
    .download-btn {
        flex: 1;
        padding: 12px;
        border: 1px solid #2a7ae2;
        background: white;
        color: #2a7ae2;
        border-radius: 4px;
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
    }

    .support-section {
        background: white;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 20px;
        margin-top: 20px;
        text-align: center;
    }

    .support-section h3 {
        font-size: 1.2em;
        font-weight: 600;
        color: #111;
        margin-bottom: 10px;
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
        border-radius: 4px;
        font-weight: 600;
        transition: background 0.2s;
    }

    .tip-jar-btn:hover {
        background: #1e59a8;
    }
</style>
<div class="container">
    <div class="header">
        <h1>Clinical A/P Prompt Generator</h1>
        <p>Create custom prompts for formatting AI scribe output into structured clinical notes</p>
    </div>

    <form id="promptForm">
        <div class="form-section">
            <div class="field">
                <label>Goal <span class="required">*</span></label>
                <input type="text" id="goal" placeholder="e.g., Structured, problem-oriented format. The output should be extremely concise for rapid scanning." required>
                <div class="help-text">What should this prompt accomplish?</div>
            </div>

            <div class="field">
                <label>Input Type <span class="required">*</span></label>
                <select id="inputType" required>
                    <option value="">Select input type...</option>
                    <option value="ai_scribe_paragraphs" selected>AI Scribe Paragraphs</option>
                    <option value="full_note">Full Clinical Note</option>
                    <option value="visit_summary">Visit Summary</option>
                    <option value="custom">Custom</option>
                </select>
                <input type="text" id="customInput" placeholder="Describe your input format..." style="margin-top: 10px; display: none;">
            </div>

            <div class="field">
                <label>Few-Shot Examples <span class="required">*</span></label>
                <textarea id="examples" rows="12" placeholder="Paste 3-5 examples of your ideal A/P output here...

Example 1:
**Viral URI**
        - Supportive care, fluids
        - Declined COVID test
        - RTC PRN

Example 2:
**Acute Otitis Media**
        - Amoxicillin 400mg/5mL, 8mL PO BID x10d
        - F/U 2wk or PRN" required></textarea>
                <div class="examples-box">
                    <strong>💡 Most important part!</strong> These examples teach the AI your style better than any instructions.
                </div>
            </div>

            <div class="advanced-toggle" onclick="toggleAdvanced()">
                ⚙️ Advanced Options (Optional)
            </div>

            <div id="advancedOptions" class="advanced-options">
                <div class="field">
                    <label>Boilerplate Phrases (Optional)</label>
                    <div class="help-text" style="margin-bottom: 15px;">Add conditional text that appears after bulleted lists when specific visit types occur.</div>
                    
                    <div id="boilerplateContainer"></div>
                    
                    <button type="button" class="add-boilerplate-btn" onclick="addBoilerplate()">+ Add Boilerplate Phrase</button>
                </div>

                <div class="field">
                    <label>Custom Rules (Optional)</label>
                    <textarea id="customRules" rows="4" placeholder="Add any specific requirements...

Example:
- Always include follow-up timeframe
- Bold all problem names
- Use 8-space indentation"></textarea>
                </div>

                <div class="field">
                    <label>Override Settings</label>
                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <input type="checkbox" id="forceAbbreviations">
                            <label for="forceAbbreviations">Force clinical abbreviations (even if not in examples)</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="forceBrevity">
                            <label for="forceBrevity">Force extreme brevity (≤10 words/bullet)</label>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" class="generate-btn">Generate Prompt</button>
        </div>
    </form>

    <div class="output-section">
        <div class="output-header">
            <div class="output-title">Generated Prompt</div>
            <div id="charCount" class="char-count good">0 / 5,000</div>
        </div>
        <div id="output" class="output-content empty">
            Fill out the form above and click "Generate Prompt" to create your custom prompt.
        </div>
        <div class="action-buttons">
            <button id="copyBtn" class="copy-btn" disabled>Copy to Clipboard</button>
            <button id="downloadBtn" class="download-btn" disabled>Download as TXT</button>
        </div>
    </div>

    <div class="support-section">
        <h3>Found this useful?</h3>
        <p>If this tool has helped streamline your clinical workflow, consider supporting the project with a small tip. Your support helps keep this resource free and ad-free for all clinicians.</p>
        <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/sponsors" target="_blank" class="tip-jar-btn">☕ Support with a Tip</a>
    </div>
</div>

<script>
    let boilerplateCount = 0;

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
            <div style="margin-bottom: 10px;">
                <label style="font-weight: 500; font-size: 0.9em; margin-bottom: 5px;">Hook/Trigger</label>
                <input type="text" class="boilerplate-hook" placeholder='e.g., "well child check", "illness", "injury"' style="width: 100%;">
                <div class="help-text">What condition triggers this text?</div>
            </div>
            <div>
                <label style="font-weight: 500; font-size: 0.9em; margin-bottom: 5px;">Dot Phrase Text</label>
                <textarea class="boilerplate-text" rows="3" placeholder="Enter the text to insert when this condition is met..." style="width: 100%;"></textarea>
            </div>
            <div style="margin-top: 10px;">
                <label style="font-weight: 500; font-size: 0.9em; margin-bottom: 5px;">Text Formatting</label>
                <select class="boilerplate-format" style="width: 100%;">
                    <option value="italic">Italicized</option>
                    <option value="bold">Bold</option>
                    <option value="plain">Plain text</option>
                </select>
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
            const format = entry.querySelector('.boilerplate-format').value;
            
            if (hook && text) {
                boilerplates.push({ hook, text, format });
            }
        });
        
        return boilerplates;
    }

    // Pattern analyzer
    const PatternAnalyzer = {
        analyzeBulletStyle(text) {
            const lines = text.split('\n');
            
            // Check for hyphen bullets
            const hyphenMatches = lines.filter(l => /^\s*-\s+/.test(l));
            if (hyphenMatches.length > 0) {
                const indent = hyphenMatches[0].search(/\S/);
                return { style: 'hyphen', indent: indent };
            }
            
            // Check for asterisk bullets
            const asteriskMatches = lines.filter(l => /^\s*\*\s+/.test(l) && !/\*\*/.test(l));
            if (asteriskMatches.length > 0) {
                const indent = asteriskMatches[0].search(/\S/);
                return { style: 'asterisk', indent: indent };
            }
            
            return { style: 'hyphen', indent: 0 };
        },

        detectBrevity(text) {
            const bullets = text.split('\n').filter(l => /^\s*[-*]\s+/.test(l));
            if (bullets.length === 0) return null;
            
            const wordCounts = bullets.map(b => {
                const content = b.replace(/^\s*[-*]\s+/, '').trim();
                return content.split(/\s+/).length;
            });
            
            const avg = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
            return Math.round(avg);
        },

        findAbbreviations(text) {
            const common = ['RTC', 'PRN', 'BID', 'TID', 'QID', 'PO', 'IM', 'IV', 'F/U'];
            return common.filter(abbr => text.includes(abbr));
        },

        detectFormatting(text) {
            return {
                hasBold: /\*\*[^*]+\*\*/.test(text),
                problemOriented: /\*\*[^*]+\*\*\s*\n\s*[-*]/.test(text)
            };
        }
    };

    // Prompt generator
    const PromptGenerator = {
        generate(data) {
            const sections = [];
            const analysis = this.analyzeExamples(data.examples);
            
            // Task description
            sections.push(this.generateTask(data, analysis));
            sections.push('\n---\n');
            
            // Input description
            sections.push(this.generateInput(data));
            sections.push('\n---\n');
            
            // Output structure
            sections.push(this.generateOutput(data, analysis));
            sections.push('\n---\n');
            
            // Rules
            sections.push(this.generateRules(data, analysis));
            sections.push('\n---\n');
            
            // Boilerplate (if provided)
            if (data.boilerplates.length > 0) {
                sections.push(this.generateBoilerplate(data));
                sections.push('\n---\n');
            }
            
            // Few-shot examples
            sections.push('## Few-Shot Examples\n\n');
            sections.push(data.examples.trim());
            sections.push('\n\n---');
            
            return sections.join('');
        },

        analyzeExamples(examples) {
            return {
                bulletStyle: PatternAnalyzer.analyzeBulletStyle(examples),
                brevity: PatternAnalyzer.detectBrevity(examples),
                abbreviations: PatternAnalyzer.findAbbreviations(examples),
                formatting: PatternAnalyzer.detectFormatting(examples)
            };
        },

        generateTask(data, analysis) {
            const inputMap = {
                'ai_scribe_paragraphs': 'AI scribe paragraph text',
                'full_note': 'full clinical note',
                'visit_summary': 'visit summary',
                'custom': data.customInput || 'provided input'
            };
            
            const brevityDesc = analysis.brevity && analysis.brevity <= 10 
                ? 'extremely concise and scannable' 
                : 'concise and well-organized';
            
            return `Reformat ${inputMap[data.inputType]} to ${data.goal.toLowerCase()}. The output should be ${brevityDesc}.`;
        },

        generateInput(data) {
            const inputMap = {
                'ai_scribe_paragraphs': 'The input will be paragraph-formatted text from an AI medical scribe, with one paragraph per diagnosis or topic.',
                'full_note': 'The input will be a complete clinical note.',
                'visit_summary': 'The input will be a summary of the patient visit.',
                'custom': data.customInput || 'The input format is as specified.'
            };
            
            return '## Input\n\n' + inputMap[data.inputType];
        },

        generateOutput(data, analysis) {
            let output = '## Output Structure\n\n';
            
            if (analysis.formatting.problemOriented) {
                output += '**[Problem/Diagnosis Name]**\n';
            }
            
            const indent = ' '.repeat(analysis.bulletStyle.indent);
            const bullet = analysis.bulletStyle.style === 'hyphen' ? '-' : '*';
            output += `${indent}${bullet} [Brief clinical point]\n`;
            output += `${indent}${bullet} [Action or plan item]\n\n`;
            
            if (analysis.brevity && analysis.brevity <= 10) {
                output += `Keep bullets very brief (approximately ${analysis.brevity} words per bullet).\n\n`;
            }
            
            return output;
        },

        generateRules(data, analysis) {
            const rules = ['## Formatting Rules\n'];
            let num = 1;
            
            // Formatting
            if (analysis.formatting.hasBold) {
                rules.push(`${num}. Bold problem/diagnosis names using **Problem Name** format\n`);
                num++;
            }
            
            // Bullet style
            const bulletChar = analysis.bulletStyle.style === 'hyphen' ? '-' : '*';
            rules.push(`${num}. Use ${bulletChar} for all bullets\n`);
            num++;
            
            if (analysis.bulletStyle.indent > 0) {
                rules.push(`${num}. Indent all bullets with ${analysis.bulletStyle.indent} spaces\n`);
                num++;
            }
            
            // Brevity
            if (data.forceBrevity || (analysis.brevity && analysis.brevity <= 10)) {
                rules.push(`${num}. Keep bullets extremely concise (under 10 words per bullet)\n`);
                num++;
                rules.push(`${num}. Use clinical shorthand and abbreviations\n`);
                num++;
            }
            
            // Abbreviations
            if (data.forceAbbreviations || analysis.abbreviations.length > 0) {
                const abbrs = analysis.abbreviations.length > 0 
                    ? analysis.abbreviations.join(', ')
                    : 'RTC, PRN, BID, TID, PO, etc.';
                rules.push(`${num}. Use standard medical abbreviations: ${abbrs}\n`);
                num++;
            }
            
            // Never fabricate
            rules.push(`${num}. Never fabricate or infer information not present in the source text\n`);
            num++;
            
            // Problem spacing
            if (analysis.formatting.problemOriented) {
                rules.push(`${num}. Insert a blank line between different problems\n`);
                num++;
            }
            
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
            section += '[Insert after the bulleted list when applicable.]\n\n';
            
            data.boilerplates.forEach(bp => {
                section += `If ${bp.hook} discussed:\n`;
                
                // Add formatting instruction based on user selection
                if (bp.format === 'italic') {
                    section += `"${bp.text}" [Format this text in italics]\n\n`;
                } else if (bp.format === 'bold') {
                    section += `"${bp.text}" [Format this text in bold]\n\n`;
                } else {
                    section += `"${bp.text}"\n\n`;
                }
            });
            
            return section;
        }
    };

    // UI Controller
    const UI = {
        init() {
            this.form = document.getElementById('promptForm');
            this.output = document.getElementById('output');
            this.charCount = document.getElementById('charCount');
            this.copyBtn = document.getElementById('copyBtn');
            this.downloadBtn = document.getElementById('downloadBtn');
            this.inputType = document.getElementById('inputType');
            this.customInput = document.getElementById('customInput');
            
            this.bindEvents();
        },

        bindEvents() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generatePrompt();
            });
            
            this.copyBtn.addEventListener('click', () => this.copyToClipboard());
            this.downloadBtn.addEventListener('click', () => this.downloadPrompt());
            
            this.inputType.addEventListener('change', (e) => {
                this.customInput.style.display = e.target.value === 'custom' ? 'block' : 'none';
            });
        },

        generatePrompt() {
            const data = {
                goal: document.getElementById('goal').value,
                inputType: document.getElementById('inputType').value,
                customInput: document.getElementById('customInput').value,
                examples: document.getElementById('examples').value,
                boilerplates: collectBoilerplates(),
                customRules: document.getElementById('customRules').value,
                forceAbbreviations: document.getElementById('forceAbbreviations').checked,
                forceBrevity: document.getElementById('forceBrevity').checked
            };
            
            const prompt = PromptGenerator.generate(data);
            
            this.output.textContent = prompt;
            this.output.classList.remove('empty');
            this.updateCharCount(prompt.length);
            this.copyBtn.disabled = false;
            this.downloadBtn.disabled = false;
        },

        updateCharCount(count) {
            this.charCount.textContent = `${count.toLocaleString()} / 5,000`;
            
            this.charCount.classList.remove('good', 'warning', 'danger');
            if (count > 5000) {
                this.charCount.classList.add('danger');
            } else if (count > 4500) {
                this.charCount.classList.add('warning');
            } else {
                this.charCount.classList.add('good');
            }
        },

        async copyToClipboard() {
            const text = this.output.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                this.copyBtn.textContent = '✓ Copied!';
                this.copyBtn.classList.add('copied');
                
                setTimeout(() => {
                    this.copyBtn.textContent = 'Copy to Clipboard';
                    this.copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Copy failed:', err);
            }
        },

        downloadPrompt() {
            const text = this.output.textContent;
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            
            const goal = document.getElementById('goal').value;
            const filename = `clinical_prompt_${goal.toLowerCase().replace(/\s+/g, '_').substring(0, 30)}.txt`;
            
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    function toggleAdvanced() {
        const options = document.getElementById('advancedOptions');
        options.classList.toggle('show');
    }

    document.addEventListener('DOMContentLoaded', () => {
        UI.init();
    });
</script>
{% endraw %}