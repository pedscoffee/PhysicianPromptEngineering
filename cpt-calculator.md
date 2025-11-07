---
layout: page
title: CPT E/M Code Calculator
permalink: /cpt-calculator/
description: Calculate appropriate CPT E/M billing codes using 2021 guidelines with automated MDM assessment
---

<style>
    .calculator-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .page-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .page-header h1 {
        color: #2c3e50;
        font-size: 2.2em;
        margin-bottom: 10px;
    }

    .page-subtitle {
        color: #7f8c8d;
        font-size: 1.1em;
        font-weight: 300;
    }

    .instructions-container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 30px;
        color: white;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .instructions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .instructions-header h2 {
        color: white;
        margin: 0;
        font-size: 1.4em;
    }

    .toggle-instructions {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        font-size: 0.9em;
    }

    .toggle-instructions:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .instructions-content {
        display: none;
        animation: slideDown 0.3s ease;
    }

    .instructions-content.show {
        display: block;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .instructions-content ul {
        margin: 15px 0;
        padding-left: 25px;
    }

    .instructions-content li {
        margin-bottom: 10px;
        line-height: 1.6;
    }

    .instructions-content strong {
        color: #ffd700;
    }

    .patient-type-selector {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-bottom: 30px;
        flex-wrap: wrap;
    }

    .patient-type-btn {
        padding: 12px 35px;
        border: 2px solid #667eea;
        background: white;
        color: #667eea;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .patient-type-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .patient-type-btn.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-color: #764ba2;
    }

    .mdm-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 25px;
        margin-bottom: 30px;
    }

    .mdm-section {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        border: 1px solid #e8ecef;
    }

    .mdm-section h3 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        margin: -25px -25px 20px -25px;
        padding: 15px 25px;
        border-radius: 12px 12px 0 0;
        font-size: 1.1em;
        font-weight: 600;
    }

    .level-option {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 12px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .level-option:hover {
        border-color: #667eea;
        box-shadow: 0 2px 10px rgba(102, 126, 234, 0.15);
        transform: translateX(3px);
    }

    .level-option.selected {
        border-color: #667eea;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        box-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);
    }

    .level-option label {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        gap: 12px;
    }

    .level-option input {
        margin-top: 4px;
        cursor: pointer;
        width: 18px;
        height: 18px;
        accent-color: #667eea;
    }

    .level-title {
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 6px;
        font-size: 1.05em;
    }

    .level-description {
        font-size: 0.9em;
        color: #495057;
        line-height: 1.5;
    }

    .level-description ul {
        margin: 8px 0 0 20px;
        padding: 0;
    }

    .level-description li {
        margin-bottom: 5px;
    }

    .data-category {
        margin-bottom: 18px;
    }

    .data-category-title {
        font-weight: 700;
        color: #764ba2;
        margin-bottom: 10px;
        font-size: 0.95em;
        padding-bottom: 5px;
        border-bottom: 2px solid #f0f0f0;
    }

    .data-item {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        padding: 10px 14px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .data-item:hover {
        border-color: #667eea;
        background: #f0f4ff;
        transform: translateX(3px);
    }

    .data-item.selected {
        border-color: #667eea;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    }

    .data-item label {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        font-size: 0.9em;
        color: #2c3e50;
    }

    .data-item input {
        cursor: pointer;
        width: 18px;
        height: 18px;
        accent-color: #667eea;
    }

    .risk-example {
        font-size: 0.85em;
        color: #6c757d;
        font-style: italic;
        margin-top: 8px;
        padding-left: 30px;
        line-height: 1.4;
    }

    .action-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin: 30px 0;
        flex-wrap: wrap;
    }

    .btn {
        padding: 14px 40px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn-calculate {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .btn-calculate:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-reset {
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
    }

    .btn-reset:hover {
        background: #f0f4ff;
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
    }

    .validation-alert {
        background: #fff3cd;
        border: 2px solid #ffc107;
        border-radius: 8px;
        padding: 15px 20px;
        margin-bottom: 25px;
        color: #856404;
        display: none;
        animation: shake 0.5s;
    }

    .validation-alert.show {
        display: block;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .output-section {
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border: 2px solid #667eea;
        display: none;
        margin-top: 30px;
    }

    .output-section.show {
        display: block;
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e9ecef;
        flex-wrap: wrap;
        gap: 15px;
    }

    .output-header h3 {
        color: #2c3e50;
        font-size: 1.5em;
        margin: 0;
    }

    .btn-copy {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .btn-copy:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .output-content {
        background: #f8f9fa;
        padding: 25px;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        line-height: 1.8;
        white-space: pre-wrap;
        border: 1px solid #e9ecef;
        color: #2c3e50;
        font-size: 0.95em;
    }

    .code-result {
        font-size: 1.3em;
        font-weight: bold;
        color: #667eea;
    }

    .copy-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 1000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    }

    .copy-notification.show {
        display: block;
    }

    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .calculator-container {
            padding: 15px;
        }

        .page-header h1 {
            font-size: 1.6em;
        }

        .mdm-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .patient-type-selector {
            flex-direction: column;
        }

        .patient-type-btn {
            width: 100%;
        }

        .action-buttons {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }

        .output-header {
            flex-direction: column;
            align-items: stretch;
        }

        .btn-copy {
            width: 100%;
        }

        .instructions-header {
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
        }

        .toggle-instructions {
            width: 100%;
        }

        .copy-notification {
            right: 10px;
            left: 10px;
        }
    }
</style>

<div class="calculator-container">
    <div class="page-header">
        <h1>CPT E/M Code Calculator</h1>
        <p class="page-subtitle">2021 Guidelines - Office or Other Outpatient Services</p>
    </div>

    <div class="instructions-container">
        <div class="instructions-header">
            <h2>📋 How to Use This Tool</h2>
            <button class="toggle-instructions" id="toggleInstructions">Show Instructions</button>
        </div>
        <div class="instructions-content" id="instructionsContent">
            <ul>
                <li>Select whether this is a <strong>New Patient</strong> or <strong>Established Patient</strong> visit</li>
                <li>Choose <strong>ONE level</strong> for <strong>Problems Addressed</strong> that best describes the complexity</li>
                <li>Select applicable items in <strong>Data Reviewed/Analyzed</strong> (you can select multiple items across categories)</li>
                <li>Choose <strong>ONE level</strong> for <strong>Risk of Complications/Morbidity/Mortality</strong></li>
                <li>Click <strong>Calculate Code</strong> to see your result using the 2 of 3 rule</li>
                <li>Review the generated documentation and click <strong>Copy to Clipboard</strong> to paste into your note</li>
                <li>Use the <strong>Reset All</strong> button to start over with a new calculation</li>
            </ul>
            <p><strong>Note:</strong> The tool applies the 2021 E/M guidelines using the "2 of 3" rule, which means the final MDM level is determined by meeting at least 2 of the 3 MDM elements (Problems, Data, Risk) at a particular level.</p>
        </div>
    </div>

    <div class="patient-type-selector">
        <button class="patient-type-btn active" id="newPatientBtn">New Patient (99202-99205)</button>
        <button class="patient-type-btn" id="establishedPatientBtn">Established Patient (99212-99215)</button>
    </div>

    <div class="validation-alert" id="validationAlert"></div>

    <div class="mdm-grid">
        <!-- Problems Section -->
        <div class="mdm-section">
            <h3>Number and Complexity of Problems Addressed</h3>
            
            <div class="level-option" data-section="problems" data-level="minimal">
                <label>
                    <input type="radio" name="problems" value="minimal">
                    <div>
                        <div class="level-title">Minimal</div>
                        <div class="level-description">1 self-limited or minor problem</div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="problems" data-level="low">
                <label>
                    <input type="radio" name="problems" value="low">
                    <div>
                        <div class="level-title">Low</div>
                        <div class="level-description">
                            <ul>
                                <li>2 or more self-limited or minor problems; OR</li>
                                <li>1 stable chronic illness; OR</li>
                                <li>1 acute, uncomplicated illness or injury</li>
                            </ul>
                        </div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="problems" data-level="moderate">
                <label>
                    <input type="radio" name="problems" value="moderate">
                    <div>
                        <div class="level-title">Moderate</div>
                        <div class="level-description">
                            <ul>
                                <li>1 or more chronic illnesses with exacerbation, progression, or side effects; OR</li>
                                <li>2 or more stable chronic illnesses; OR</li>
                                <li>1 undiagnosed new problem with uncertain prognosis; OR</li>
                                <li>1 acute illness with systemic symptoms; OR</li>
                                <li>1 acute complicated injury</li>
                            </ul>
                        </div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="problems" data-level="high">
                <label>
                    <input type="radio" name="problems" value="high">
                    <div>
                        <div class="level-title">High</div>
                        <div class="level-description">
                            <ul>
                                <li>1 or more chronic illnesses with severe exacerbation, progression, or side effects; OR</li>
                                <li>1 acute or chronic illness or injury that poses a threat to life or bodily function</li>
                            </ul>
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <!-- Data Section -->
        <div class="mdm-section">
            <h3>Amount and/or Complexity of Data</h3>
            
            <div class="data-category">
                <div class="data-category-title">Category 1: Tests and Documents</div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="review_external_notes" data-category="tests_docs">
                        Review of prior external note(s) from unique source
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="review_test_results" data-category="tests_docs">
                        Review of result(s) of unique test
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="order_test" data-category="tests_docs">
                        Ordering of unique test
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="independent_historian" data-category="tests_docs">
                        Assessment requiring independent historian
                    </label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 2: Independent Interpretation</div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="independent_interpretation" data-category="interpretation">
                        Independent interpretation of test (not separately reported)
                    </label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 3: Discussion</div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="discussion_management" data-category="discussion">
                        Discussion of management or test interpretation with external provider
                    </label>
                </div>
            </div>
        </div>

        <!-- Risk Section -->
        <div class="mdm-section">
            <h3>Risk of Complications/Morbidity/Mortality</h3>
            
            <div class="level-option" data-section="risk" data-level="minimal">
                <label>
                    <input type="radio" name="risk" value="minimal">
                    <div>
                        <div class="level-title">Minimal Risk</div>
                        <div class="level-description">Minimal risk from additional diagnostic testing or treatment</div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="risk" data-level="low">
                <label>
                    <input type="radio" name="risk" value="low">
                    <div>
                        <div class="level-title">Low Risk</div>
                        <div class="level-description">Low risk of morbidity from additional diagnostic testing or treatment</div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="risk" data-level="moderate">
                <label>
                    <input type="radio" name="risk" value="moderate">
                    <div>
                        <div class="level-title">Moderate Risk</div>
                        <div class="level-description">Moderate risk of morbidity from additional diagnostic testing or treatment</div>
                        <div class="risk-example">
                            Examples: Prescription drug management; Decision regarding minor surgery with identified patient/procedure risk factors; Decision regarding elective major surgery without identified patient/procedure risk factors; Diagnosis or treatment significantly limited by social determinants of health
                        </div>
                    </div>
                </label>
            </div>

            <div class="level-option" data-section="risk" data-level="high">
                <label>
                    <input type="radio" name="risk" value="high">
                    <div>
                        <div class="level-title">High Risk</div>
                        <div class="level-description">High risk of morbidity from additional diagnostic testing or treatment</div>
                        <div class="risk-example">
                            Examples: Drug therapy requiring intensive monitoring for toxicity; Decision regarding elective major surgery with identified patient/procedure risk factors; Decision regarding emergency major surgery; Decision regarding hospitalization; Decision not to resuscitate or to de-escalate care
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>

    <div class="action-buttons">
        <button class="btn btn-calculate" id="calculateBtn">Calculate Code</button>
        <button class="btn btn-reset" id="resetBtn">Reset All</button>
    </div>

    <div class="output-section" id="outputSection">
        <div class="output-header">
            <h3>📄 Generated Documentation</h3>
            <button class="btn-copy" id="copyBtn">Copy to Clipboard</button>
        </div>
        <div class="output-content" id="outputContent"></div>
    </div>
</div>

<div class="copy-notification" id="copyNotification">
    ✓ Copied to clipboard!
</div>

<script>
    // State management
    let state = {
        patientType: 'new',
        problems: null,
        data: [],
        risk: null
    };

    // Code mappings
    const codeMappings = {
        new: {
            straightforward: '99202',
            low: '99203',
            moderate: '99204',
            high: '99205'
        },
        established: {
            straightforward: '99212',
            low: '99213',
            moderate: '99214',
            high: '99215'
        }
    };

    // Level mappings
    const levelMap = {
        minimal: 'straightforward',
        low: 'low',
        moderate: 'moderate',
        high: 'high'
    };

    // Problem descriptions
    const problemDescriptions = {
        minimal: '1 self-limited or minor problem',
        low: '2 or more self-limited or minor problems, OR 1 stable chronic illness, OR 1 acute uncomplicated illness or injury',
        moderate: '1 or more chronic illnesses with exacerbation/progression/side effects, OR 2 or more stable chronic illnesses, OR 1 undiagnosed new problem with uncertain prognosis, OR 1 acute illness with systemic symptoms, OR 1 acute complicated injury',
        high: '1 or more chronic illnesses with severe exacerbation/progression/side effects, OR 1 acute or chronic illness or injury that poses a threat to life or bodily function'
    };

    // Risk descriptions
    const riskDescriptions = {
        minimal: 'Minimal risk from additional diagnostic testing or treatment',
        low: 'Low risk of morbidity from additional diagnostic testing or treatment',
        moderate: 'Moderate risk of morbidity from additional diagnostic testing or treatment (Examples: Prescription drug management; minor surgery with risk factors; elective major surgery without risk factors; diagnosis/treatment limited by social determinants)',
        high: 'High risk of morbidity from additional diagnostic testing or treatment (Examples: Drug therapy requiring intensive monitoring; elective major surgery with risk factors; emergency major surgery; hospitalization decision; DNR/de-escalation decision)'
    };

    // Data descriptions
    const dataDescriptions = {
        review_external_notes: 'Review of prior external note(s) from unique source',
        review_test_results: 'Review of result(s) of unique test',
        order_test: 'Ordering of unique test',
        independent_historian: 'Assessment requiring independent historian',
        independent_interpretation: 'Independent interpretation of test (not separately reported)',
        discussion_management: 'Discussion of management or test interpretation with external provider'
    };

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        initializeEventListeners();
    });

    function initializeEventListeners() {
        // Toggle instructions
        document.getElementById('toggleInstructions').addEventListener('click', toggleInstructions);

        // Patient type buttons
        document.getElementById('newPatientBtn').addEventListener('click', function() {
            setPatientType('new');
        });
        document.getElementById('establishedPatientBtn').addEventListener('click', function() {
            setPatientType('established');
        });

        // Problem radio buttons
        document.querySelectorAll('input[name="problems"]').forEach(input => {
            input.addEventListener('change', function() {
                state.problems = this.value;
                updateLevelOptionStyles('problems');
            });
        });

        // Data checkboxes
        document.querySelectorAll('input[name="data"]').forEach(input => {
            input.addEventListener('change', function() {
                if (this.checked) {
                    state.data.push(this.value);
                } else {
                    state.data = state.data.filter(item => item !== this.value);
                }
                updateDataItemStyles();
            });
        });

        // Risk radio buttons
        document.querySelectorAll('input[name="risk"]').forEach(input => {
            input.addEventListener('change', function() {
                state.risk = this.value;
                updateLevelOptionStyles('risk');
            });
        });

        // Calculate button
        document.getElementById('calculateBtn').addEventListener('click', calculateCode);

        // Reset button
        document.getElementById('resetBtn').addEventListener('click', resetAll);

        // Copy button
        document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
    }

    function toggleInstructions() {
        const content = document.getElementById('instructionsContent');
        const button = document.getElementById('toggleInstructions');
        
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            button.textContent = 'Show Instructions';
        } else {
            content.classList.add('show');
            button.textContent = 'Hide Instructions';
        }
    }

    function setPatientType(type) {
        state.patientType = type;
        document.getElementById('newPatientBtn').classList.toggle('active', type === 'new');
        document.getElementById('establishedPatientBtn').classList.toggle('active', type === 'established');
    }

    function updateLevelOptionStyles(section) {
        document.querySelectorAll(`[data-section="${section}"]`).forEach(option => {
            const input = option.querySelector('input');
            option.classList.toggle('selected', input.checked);
        });
    }

    function updateDataItemStyles() {
        document.querySelectorAll('.data-item').forEach(item => {
            const input = item.querySelector('input');
            item.classList.toggle('selected', input.checked);
        });
    }

    function calculateCode() {
        // Validate inputs
        if (!state.problems) {
            showValidation('Please select a level for Problems Addressed.');
            return;
        }
        if (!state.risk) {
            showValidation('Please select a Risk level.');
            return;
        }

        // Calculate data level
        const dataLevel = calculateDataLevel();

        // Apply 2 of 3 rule
        const problemLevel = levelMap[state.problems];
        const riskLevel = levelMap[state.risk];

        const levels = [problemLevel, dataLevel, riskLevel];
        const finalLevel = determine2of3Level(levels);

        // Get CPT code
        const cptCode = codeMappings[state.patientType][finalLevel];

        // Generate output
        generateOutput(problemLevel, dataLevel, riskLevel, finalLevel, cptCode);

        // Hide validation and show output
        hideValidation();
        document.getElementById('outputSection').classList.add('show');
        document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function calculateDataLevel() {
        const testDocsCount = state.data.filter(item => 
            ['review_external_notes', 'review_test_results', 'order_test', 'independent_historian'].includes(item)
        ).length;
        const hasInterpretation = state.data.includes('independent_interpretation');
        const hasDiscussion = state.data.includes('discussion_management');

        // High: meets moderate (3+ items OR interpretation OR discussion) AND has interpretation OR discussion
        if ((testDocsCount >= 3 || hasInterpretation || hasDiscussion) && 
            (hasInterpretation || hasDiscussion)) {
            return 'high';
        }

        // Moderate: 3 items from category 1, OR independent interpretation, OR discussion
        if (testDocsCount >= 3 || hasInterpretation || hasDiscussion) {
            return 'moderate';
        }

        // Low: 2 items from category 1, OR independent historian
        if (testDocsCount === 2 || state.data.includes('independent_historian')) {
            return 'low';
        }

        // Minimal/Straightforward: 0-1 items
        return 'straightforward';
    }

    function determine2of3Level(levels) {
        // Count occurrences of each level
        const counts = {
            straightforward: 0,
            low: 0,
            moderate: 0,
            high: 0
        };

        levels.forEach(level => counts[level]++);

        // If any level appears 2 or more times, that's the result
        if (counts.high >= 2) return 'high';
        if (counts.moderate >= 2) return 'moderate';
        if (counts.low >= 2) return 'low';
        if (counts.straightforward >= 2) return 'straightforward';

        // If all three are different, take the middle value
        const levelOrder = ['straightforward', 'low', 'moderate', 'high'];
        const sortedLevels = levels.sort((a, b) => 
            levelOrder.indexOf(a) - levelOrder.indexOf(b)
        );
        return sortedLevels[1];
    }

    function generateOutput(problemLevel, dataLevel, riskLevel, finalLevel, cptCode) {
        let output = `CPT E/M Code: ${cptCode}\n\n`;
        output += `Medical Decision Making Assessment:\n`;
        output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        // Problems
        output += `Problems Addressed (${capitalizeFirst(problemLevel)}):\n`;
        output += `${problemDescriptions[state.problems]}\n\n`;

        // Data
        output += `Data Reviewed and Analyzed (${capitalizeFirst(dataLevel)}):\n`;
        if (state.data.length === 0) {
            output += `Minimal or none\n`;
        } else {
            state.data.forEach(item => {
                output += `• ${dataDescriptions[item]}\n`;
            });
        }
        output += `\n`;

        // Risk
        output += `Risk of Complications/Morbidity/Mortality (${capitalizeFirst(riskLevel)}):\n`;
        output += `${riskDescriptions[state.risk]}\n\n`;

        // 2 of 3 rule explanation
        output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        output += `MDM Level Determination (2 of 3 Rule):\n`;
        output += `Problems: ${capitalizeFirst(problemLevel)} | `;
        output += `Data: ${capitalizeFirst(dataLevel)} | `;
        output += `Risk: ${capitalizeFirst(riskLevel)}\n\n`;
        output += `Final MDM Level: ${capitalizeFirst(finalLevel)}\n`;
        output += `CPT Code: ${cptCode} (${state.patientType === 'new' ? 'New' : 'Established'} Patient)`;

        document.getElementById('outputContent').textContent = output;
    }

    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function showValidation(message) {
        const validationEl = document.getElementById('validationAlert');
        validationEl.textContent = '⚠️ ' + message;
        validationEl.classList.add('show');
        validationEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function hideValidation() {
        document.getElementById('validationAlert').classList.remove('show');
    }

    function resetAll() {
        // Reset state
        state = {
            patientType: state.patientType,
            problems: null,
            data: [],
            risk: null
        };

        // Uncheck all inputs
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);

        // Remove selected styles
        document.querySelectorAll('.level-option').forEach(option => option.classList.remove('selected'));
        document.querySelectorAll('.data-item').forEach(item => item.classList.remove('selected'));

        // Hide output and validation
        document.getElementById('outputSection').classList.remove('show');
        hideValidation();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function copyToClipboard() {
        const output = document.getElementById('outputContent').textContent;
        navigator.clipboard.writeText(output).then(() => {
            showCopyNotification();
        }).catch(err => {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = output;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyNotification();
        });
    }

    function showCopyNotification() {
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
</script>