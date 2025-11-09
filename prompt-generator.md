---
layout: page
title: A/P Prompt Generator
description: Build custom AI prompts for your clinical workflow. Use our free A/P Prompt Generator to format AI scribe output to your exact style. Try it now.
permalink: /prompt-generator/
---
<style>
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
            max-width: 1640px; 
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
            margin-bottom: 10px;
            color: #2a7ae2;
        }

        .header p {
            color: #666;
            font-size: 1.05em;
        }

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
        }

        .form-panel {
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .output-panel {
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 20px;
        }

        .section {
            margin-bottom: 35px;
            padding-bottom: 30px;
            border-bottom: 1px solid #e8e8e8;
        }

        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .section-title {
            font-size: 1.2em;
            font-weight: 600;
            color: #2a7ae2;
            margin-bottom: 15px;
        }

        .section-subtitle {
            font-size: 0.95em;
            color: #666;
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .radio-option {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px;
            border-radius: 6px;
            border: 2px solid #e8e8e8;
            cursor: pointer;
            transition: all 0.2s;
        }

        .radio-option:hover {
            background: #f9f9f9;
            border-color: #2a7ae2;
        }

        .radio-option input[type="radio"] {
            margin-top: 3px;
            cursor: pointer;
            accent-color: #2a7ae2;
            width: 18px;
            height: 18px;
            flex-shrink: 0;
        }

        .radio-option input[type="radio"]:checked + .radio-content {
            font-weight: 600;
            color: #2a7ae2;
        }

        .radio-content {
            flex: 1;
        }

        .radio-label {
            display: block;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .radio-description {
            font-size: 0.9em;
            color: #999;
            margin-bottom: 8px;
        }

        .radio-example {
            background: #f5f5f5;
            border-left: 3px solid #2a7ae2;
            padding: 8px 12px;
            border-radius: 3px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.85em;
            color: #333;
            line-height: 1.4;
            white-space: pre-wrap;
            word-break: break-word;
        }

        textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e8e8e8;
            border-radius: 6px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.95em;
            resize: vertical;
            min-height: 100px;
            transition: border-color 0.2s;
        }

        textarea:focus {
            outline: none;
            border-color: #2a7ae2;
        }

        .output-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #e8e8e8;
        }

        .output-header h2 {
            color: #2a7ae2;
            font-size: 1.3em;
        }

        .char-count {
            font-size: 0.9em;
            color: #666;
        }

        .char-count.warning {
            color: #ff9800;
        }

        .char-count.danger {
            color: #f44336;
        }

        #outputContent {
            background: #fafafa;
            border: 1px solid #e8e8e8;
            border-radius: 6px;
            padding: 20px;
            min-height: 400px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.9em;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-y: auto;
        }

        #outputContent.empty {
            color: #999;
            font-style: italic;
        }

        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        button {
            flex: 1;
            padding: 12px 20px;
            background: #2a7ae2;
            color: white;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        button:hover:not(:disabled) {
            background: #1e5bb8;
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        button.copied {
            background: #4caf50;
        }
    </style>

<div class="container">
        <div class="header">
            <h1>A/P Prompt Generator</h1>
            <p>Create customized prompts for formatting clinical assessment and plan documentation.</p>
        </div>

<div class="main-layout">
            <!-- FORM PANEL -->
            <div class="form-panel">
                <!-- Assessment Format -->
                <div class="section">
                    <div class="section-title">Assessment Format</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="diagnosis" checked>
                            <div class="radio-content">
                                <div class="radio-label">Diagnosis Only</div>
                                <div class="radio-description">Print diagnosis/problem name only</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="oneliner">
                            <div class="radio-content">
                                <div class="radio-label">One Liner</div>
                                <div class="radio-description">One sentence summary of assessment in formal tone</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="bullets">
                            <div class="radio-content">
                                <div class="radio-label">Bullet Form</div>
                                <div class="radio-description">Concise assessment summary with bullet points</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="assessment" value="narrative">
                            <div class="radio-content">
                                <div class="radio-label">Narrative</div>
                                <div class="radio-description">Assessment presented in full sentences</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Plan Format -->
<div class="section">
                    <div class="section-title">Plan Format</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="bullets" checked>
                            <div class="radio-content">
                                <div class="radio-label">Bullet Form</div>
                                <div class="radio-description">Plan presented as bullet points</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="oneliner">
                            <div class="radio-content">
                                <div class="radio-label">One Liner</div>
                                <div class="radio-description">One sentence summary of plan in formal tone</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="planFormat" value="narrative">
                            <div class="radio-content">
                                <div class="radio-label">Narrative</div>
                                <div class="radio-description">Plan presented in full sentences</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Problem Name Formatting -->
<div class="section">
                    <div class="section-title">Problem Name Formatting</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="problemFormat" value="bold" checked>
                            <div class="radio-content">
                                <div class="radio-label">Bold</div>
                                <div class="radio-description">**Problem Name**</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="problemFormat" value="italics">
                            <div class="radio-content">
                                <div class="radio-label">Italics</div>
                                <div class="radio-description">*Problem Name*</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="problemFormat" value="caps">
                            <div class="radio-content">
                                <div class="radio-label">ALL CAPS</div>
                                <div class="radio-description">PROBLEM NAME</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="problemFormat" value="uppercase">
                            <div class="radio-content">
                                <div class="radio-label">Uppercase</div>
                                <div class="radio-description">Problem Name</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Bullet Character -->
<div class="section">
                    <div class="section-title">Bullet Character</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle" value="hyphen" checked>
                            <div class="radio-content">
                                <div class="radio-label">Hyphen</div>
                                <div class="radio-description">Use - for bullets</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle" value="bullet">
                            <div class="radio-content">
                                <div class="radio-label">Bullet Point</div>
                                <div class="radio-description">Use • for bullets</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle" value="asterisk">
                            <div class="radio-content">
                                <div class="radio-label">Asterisk</div>
                                <div class="radio-description">Use * for bullets</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle" value="none">
                            <div class="radio-content">
                                <div class="radio-label">No bullets</div>
                                <div class="radio-description">Line breaks only, no bullet characters</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Bullet Indentation -->
<div class="section">
                    <div class="section-title">Bullet Indentation</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="bulletIndent" value="none" checked>
                            <div class="radio-content">
                                <div class="radio-label">No Indent</div>
                                <div class="radio-description">No indentation before bullets</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletIndent" value="four">
                            <div class="radio-content">
                                <div class="radio-label">4 Spaces</div>
                                <div class="radio-description">4-space indentation</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletIndent" value="eight">
                            <div class="radio-content">
                                <div class="radio-label">8 Spaces</div>
                                <div class="radio-description">8-space indentation</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Detail Level -->
 <div class="section">
                    <div class="section-title">Detail Level</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="detail" value="pithy" checked>
                            <div class="radio-content">
                                <div class="radio-label">Pithy</div>
                                <div class="radio-description">Extremely brief, under 10 words per bullet</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="detail" value="detailed">
                            <div class="radio-content">
                                <div class="radio-label">Detailed</div>
                                <div class="radio-description">More verbose</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Writing Style (Shorthand vs Sentences) -->
<div class="section">
                    <div class="section-title">Writing Style</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle2" value="shorthand" checked>
                            <div class="radio-content">
                                <div class="radio-label">Shorthand Phrases</div>
                                <div class="radio-description">Professional shorthand phrases without full sentences</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="bulletStyle2" value="sentences">
                            <div class="radio-content">
                                <div class="radio-label">Full Sentences</div>
                                <div class="radio-description">Complete sentences for each bullet point</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Abbreviations -->
<div class="section">
                    <div class="section-title">Medical Abbreviations</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="abbreviations" value="standard" checked>
                            <div class="radio-content">
                                <div class="radio-label">Standard</div>
                                <div class="radio-description">Use standard medical abbreviations (RTC, PRN, BID, etc.)</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="abbreviations" value="none">
                            <div class="radio-content">
                                <div class="radio-label">No Abbreviations</div>
                                <div class="radio-description">Minimize abbreviations, spell out most terms</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Return Precautions -->
 <div class="section">
                    <div class="section-title">Return Precautions</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="returnPrecautions" value="off" checked>
                            <div class="radio-content">
                                <div class="radio-label">Off</div>
                                <div class="radio-description">Do not include return precautions</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="returnPrecautions" value="simple">
                            <div class="radio-content">
                                <div class="radio-label">Simple</div>
                                <div class="radio-description">Simple return precautions (e.g., "return if fever persists")</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="returnPrecautions" value="detailed">
                            <div class="radio-content">
                                <div class="radio-label">Detailed</div>
                                <div class="radio-description">Detailed if/then contingency plans with scenario-based language</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Boilerplate Text Formatting -->
 <div class="section">
                    <div class="section-title">Boilerplate Text Formatting</div>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="boilerplateFormat" value="italics" checked>
                            <div class="radio-content">
                                <div class="radio-label">Italics</div>
                                <div class="radio-description">Format as *italicized text*</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="boilerplateFormat" value="bold">
                            <div class="radio-content">
                                <div class="radio-label">Bold</div>
                                <div class="radio-description">Format as **bold text**</div>
                            </div>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="boilerplateFormat" value="plain">
                            <div class="radio-content">
                                <div class="radio-label">Plain</div>
                                <div class="radio-description">No special formatting</div>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Custom Rules -->
 <div class="section">
                    <div class="section-title">Custom Rules</div>
                    <div class="section-subtitle">Add any additional rules or instructions (one per line)</div>
                    <textarea id="customRules" placeholder="Example: Include relevant vital signs&#10;Example: Format medication names in brackets"></textarea>
                </div>
            </div>

            <!-- OUTPUT PANEL -->
<div class="output-panel">
                <div class="output-header">
                    <h2>Generated Prompt</h2>
                    <div class="char-count" id="charCount">0 / 5,000</div>
                </div>
                <pre id="outputContent" class="empty">Start making selections to see your prompt appear here.</pre>
                <div class="button-group">
                    <button id="copyBtn" onclick="copyToClipboard()" disabled>📋 Copy</button>
                    <button id="downloadBtn" onclick="downloadPrompt()" disabled>⬇️ Download</button>
                </div>
            </div>
        </div>

<div class="embed-container">
  <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

        <!-- NEXT STEPS SECTION -->
<div class="header" style="margin-top: 40px;">
            <h2 style="color: #2a7ae2; font-size: 1.5em; margin-bottom: 20px;">Next Steps: Customizing Your Prompt</h2>
            *<a href="https://physicianpromptengineering.com/disclaimer/">See Disclaimer.</a>
            
            <div style="margin-bottom: 20px;">
                <h3 style="color: #333; font-size: 1.1em; margin-bottom: 10px;">1. Add Conditional Boilerplate Text</h3>
                <p>In the generated prompt, find the "Conditional Boilerplate Text" section. Replace the placeholder with your actual conditional text that the LLM Editor should insert. Examples might include:</p>
                <ul style="margin-left: 20px; margin-top: 10px; color: #666;">
                    <li>Common counseling points for specific conditions</li>
                    <li>Standard follow-up instructions for certain diagnoses</li>
                    <li>Return precaution templates you use frequently</li>
                </ul>
            </div>

<div style="margin-bottom: 20px;">
                <h3 style="color: #333; font-size: 1.1em; margin-bottom: 10px;">2. Add Few-Shot Examples</h3>
                <p>Find the "Few-Shot Examples" section in the generated prompt. Add 2-3 of your actual A/P notes that match your desired output format. These examples are crucial—they teach the LLM Editor your exact style, tone, clinical reasoning pattern, and formatting preferences far better than any rule can.</p>
                <p style="margin-top: 10px; color: #666;"><strong>Tip:</strong> Choose examples from different clinical scenarios to show the LLM the diversity of your style.</p>
            </div>

 <div style="margin-bottom: 20px;">
                <h3 style="color: #333; font-size: 1.1em; margin-bottom: 10px;">3. Test and Refine</h3>
                <p>Once you've added your boilerplate and examples, test your prompt with your LLM. Make adjustments to the formatting rules or custom rules as needed until the output matches your expectations.</p>
            </div>

<div style="background: #e3f2fd; padding: 15px; border-left: 4px solid #2a7ae2; border-radius: 4px; margin-top: 20px;">
    <h3 style="color: #2a7ae2; font-size: 1.1em; margin-bottom: 10px; text-align: center;">Share Your Prompt</h3>
    <p style="text-align: center;">Refined a prompt that consistently delivers quality output? Consider sharing it on the <a href="https://physicianpromptengineering.com/contributions" style="color: #2a7ae2; font-weight: 600;">contributions page</a>. Your tested solution could save colleagues hours of iteration and help build a stronger resource for the entire clinical community.</p>
</div>

<script>
        let updateTimeout;

        // =====================================================
        // EVENT LISTENERS
        // =====================================================
        document.querySelectorAll('input[type="radio"], textarea').forEach(input => {
            input.addEventListener('change', updateOutput);
        });

        // =====================================================
        // HELPER FUNCTIONS
        // =====================================================
        function getBulletMarker(style) {
            const markers = {
                'hyphen': '-',
                'bullet': '•',
                'asterisk': '*',
                'none': '  '
            };
            return markers[style] || '-';
        }

        function getBulletIndent(indent) {
            const indents = {
                'none': '0',
                'four': '4',
                'eight': '8'
            };
            return indents[indent] || '0';
        }

        function getRadioValue(name) {
            return document.querySelector(`input[name="${name}"]:checked`)?.value || '';
        }

        // =====================================================
        // PROMPT GENERATION
        // =====================================================
        function generatePrompt() {
            const assessment = getRadioValue('assessment');
            const planFormat = getRadioValue('planFormat');
            const problemFormat = getRadioValue('problemFormat');
            const bulletStyle = getRadioValue('bulletStyle');
            const bulletIndent = getRadioValue('bulletIndent');
            const detail = getRadioValue('detail');
            const bulletStyle2 = getRadioValue('bulletStyle2');
            const abbreviations = getRadioValue('abbreviations');
            const returnPrecautions = getRadioValue('returnPrecautions');
            const boilerplateFormat = getRadioValue('boilerplateFormat');
            const customRules = document.getElementById('customRules').value;

            const prompt = [];

            // INTRO
            prompt.push('Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.\n\n');
            prompt.push('---\n\n');

            // OUTPUT STRUCTURE
            prompt.push('## Output Structure for Each Problem/Diagnosis\n\n');

            // Problem name formatting example
            let problemExample = 'Problem/Diagnosis Name';
            if (problemFormat === 'bold') problemExample = '**Problem/Diagnosis Name**';
            else if (problemFormat === 'italics') problemExample = '*Problem/Diagnosis Name*';
            else if (problemFormat === 'caps') problemExample = 'PROBLEM/DIAGNOSIS NAME';

            prompt.push(`${problemExample}\n`);

            // Generate example content based on assessment and plan formats
            const indent = bulletIndent === 'none' ? '' : (bulletIndent === 'four' ? '    ' : '        ');
            const marker = getBulletMarker(bulletStyle);
            const markerSpace = marker ? marker + ' ' : '';
            
            // Check if either bullet format is selected
            const hasBulletFormat = assessment === 'bullets' || planFormat === 'bullets';

            // Assessment section based on format
            if (assessment === 'diagnosis') {
                // No assessment section - skip to plan
            } else if (assessment === 'oneliner') {
                prompt.push(`${indent}${markerSpace}One sentence clinical impression summarizing the key finding or impression.\n`);
            } else if (assessment === 'bullets') {
                prompt.push(`${indent}${markerSpace}Brief assessment findings\n`);
            } else if (assessment === 'narrative') {
                prompt.push(`${indent}${markerSpace}Assessment presented as a flowing narrative paragraph with complete sentences explaining clinical reasoning and key findings.\n`);
            }

            // Plan section based on format
            if (planFormat === 'bullets') {
                prompt.push(`${indent}${markerSpace}Action items or plans\n`);
                if (returnPrecautions !== 'off') {
                    prompt.push(`${indent}${markerSpace}Return precaution or follow-up instruction\n`);
                }
                prompt.push('\n');
            } else if (planFormat === 'oneliner') {
                prompt.push(`${indent}${markerSpace}One sentence plan summary in formal tone describing the clinical actions to be taken.\n\n`);
            } else if (planFormat === 'narrative') {
                prompt.push(`${indent}${markerSpace}Plan presented as a flowing paragraph using complete sentences with future tense describing all actions and follow-up.\n\n`);
            }
            
            // Add instruction line once if either bullet format is selected
            if (hasBulletFormat) {
                prompt.push(`Each point should be a separate line\n`);
            }

            // Boilerplate section
            prompt.push('## Conditional Boilerplate Text\n\n');
            prompt.push('[⚠️ USER ACTION REQUIRED: Add your conditional boilerplate text here. This text should be ');
            if (boilerplateFormat === 'bold') prompt.push('bold');
            else if (boilerplateFormat === 'italics') prompt.push('italicized');
            else prompt.push('plain text');
            prompt.push('.]\n\n');
            prompt.push('If trigger discussed:\n');
            let boilerplateExample = '"Boilerplate goes here"';
            if (boilerplateFormat === 'bold') boilerplateExample = '**"Boilerplate goes here"**';
            else if (boilerplateFormat === 'italics') boilerplateExample = '*"Boilerplate goes here"*';
            prompt.push(`${boilerplateExample}\n\n`);
            prompt.push('---\n\n');

            // FORMATTING RULES
            prompt.push('## Formatting Rules\n\n');
            
            const rules = [];
            let ruleNum = 1;

            // Assessment format rule
            if (assessment === 'diagnosis') {
                rules.push(`${ruleNum}. Include only the diagnosis/problem name. Do not include assessment details.`);
            } else if (assessment === 'oneliner') {
                rules.push(`${ruleNum}. Write assessment as one sentence summary in formal tone explaining the clinical impression.`);
            } else if (assessment === 'bullets') {
                rules.push(`${ruleNum}. Include Assessment section with bulleted key findings using concise shorthand.`);
            } else if (assessment === 'narrative') {
                rules.push(`${ruleNum}. Write assessment as flowing narrative paragraph with complete sentences explaining clinical reasoning.`);
            }
            ruleNum++;

            // Plan format rule
            if (planFormat === 'bullets') {
                rules.push(`${ruleNum}. Format plan as bullet list.`);
            } else if (planFormat === 'oneliner') {
                rules.push(`${ruleNum}. Write plan as one sentence summary in formal tone.`);
            } else if (planFormat === 'narrative') {
                rules.push(`${ruleNum}. Write plan as flowing paragraph using complete sentences with future tense.`);
            }
            ruleNum++;

            // Problem name formatting rule
            if (problemFormat === 'bold') {
                rules.push(`${ruleNum}. Bold all problem/diagnosis names using **Problem Name** format.`);
            } else if (problemFormat === 'italics') {
                rules.push(`${ruleNum}. Italicize all problem/diagnosis names using *Problem Name* format.`);
            } else if (problemFormat === 'caps') {
                rules.push(`${ruleNum}. Format all problem/diagnosis names in ALL CAPS.`);
            } else if (problemFormat === 'uppercase') {
                rules.push(`${ruleNum}. Format all problem/diagnosis names with first letter capitalized (Uppercase).`);
            }
            ruleNum++;

            // Bullet style rule
            if (bulletStyle === 'none') {
                rules.push(`${ruleNum}. Use line breaks only, no bullet characters.`);
            } else {
                rules.push(`${ruleNum}. Use ${getBulletMarker(bulletStyle)} for all bullets with ${getBulletIndent(bulletIndent)}-space indentation.`);
            }
            ruleNum++;

            // Writing style rule
            if (bulletStyle2 === 'shorthand') {
                rules.push(`${ruleNum}. Write all bullet points in extremely brief, professional shorthand phrases.`);
                ruleNum++;
            }
            // No rule needed for 'sentences' as this is the default for LLMs

            // Detail level rule
            if (detail === 'pithy') {
                rules.push(`${ruleNum}. Keep bullets concise (ideally under 10 words per bullet).`);
            } else {
                rules.push(`${ruleNum}. Write comprehensive bullets with full clinical context, no word limit.`);
            }
            ruleNum++;

            // Abbreviation rule
            if (abbreviations === 'standard') {
                rules.push(`${ruleNum}. Use standard medical abbreviations (RTC, PRN, BID, etc.).`);
            } else {
                rules.push(`${ruleNum}. Do not use abbreviations. Spell out all terms completely.`);
            }
            ruleNum++;

            // Return precautions rule
            if (returnPrecautions === 'simple') {
                rules.push(`${ruleNum}. Include simple return precautions (e.g., "return if fever persists," "return sooner for worsening symptoms").`);
            } else if (returnPrecautions === 'detailed') {
                rules.push(`${ruleNum}. Include detailed if/then contingency plans with scenario-based language for anticipated outcomes.`);
            }
            ruleNum++;

            // Core rules (always present)
            rules.push(`${ruleNum}. Never fabricate or infer information not present in the source text.`);
            ruleNum++;
            rules.push(`${ruleNum}. Insert a blank line between problems when multiple diagnoses exist.`);
            ruleNum++;
            rules.push(`${ruleNum}. No references.`);
            ruleNum++;

            // Custom rules
            if (customRules.trim()) {
                const customRulesList = customRules.split('\n').filter(r => r.trim());
                customRulesList.forEach(rule => {
                    const clean = rule.replace(/^[\s\-*\d.]+/, '').trim();
                    if (clean) {
                        rules.push(`${ruleNum}. ${clean}`);
                        ruleNum++;
                    }
                });
            }

            prompt.push(rules.join('\n'));
            prompt.push('\n\n---\n\n');

            // FEW-SHOT EXAMPLES
            prompt.push('## Few-Shot Examples\n\n');
            prompt.push('[⚠️ USER ACTION REQUIRED: Add 2-3 of your actual A/P examples here. These are essential for teaching the AI your exact style and format.]');

            return prompt.join('');
        }

        // =====================================================
        // OUTPUT MANAGEMENT
        // =====================================================
        function updateOutput() {
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => {
                const generatedPrompt = generatePrompt();
                const outputElement = document.getElementById('outputContent');
                
                if (generatedPrompt.trim()) {
                    outputElement.textContent = generatedPrompt;
                    outputElement.classList.remove('empty');
                    document.getElementById('copyBtn').disabled = false;
                    document.getElementById('downloadBtn').disabled = false;
                } else {
                    outputElement.textContent = 'Start making selections to see your prompt appear here.';
                    outputElement.classList.add('empty');
                    document.getElementById('copyBtn').disabled = true;
                    document.getElementById('downloadBtn').disabled = true;
                }

                updateCharCount(generatedPrompt.length);
                outputElement.scrollTop = 0;
            }, 300);
        }

        function updateCharCount(count) {
            const charCount = document.getElementById('charCount');
            charCount.textContent = `${count.toLocaleString()} / 5,000`;
            charCount.classList.remove('warning', 'danger');
            
            if (count > 5000) {
                charCount.classList.add('danger');
            } else if (count > 4500) {
                charCount.classList.add('warning');
            }
        }

        // =====================================================
        // COPY & DOWNLOAD
        // =====================================================
        async function copyToClipboard() {
            const text = document.getElementById('outputContent').textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                const btn = document.getElementById('copyBtn');
                btn.textContent = '✓ Copied!';
                btn.classList.add('copied');
                
                setTimeout(() => {
                    btn.textContent = '📋 Copy';
                    btn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                alert('Failed to copy. Please try again.');
            }
        }

        function downloadPrompt() {
            const text = document.getElementById('outputContent').textContent;
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            
            const timestamp = new Date().toISOString().split('T')[0];
            link.href = url;
            link.download = `ap_prompt_${timestamp}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        // =====================================================
        // INITIALIZATION
        // =====================================================
        document.addEventListener('DOMContentLoaded', () => {
            updateOutput();
        });
    </script>
