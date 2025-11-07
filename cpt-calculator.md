---
layout: page
title: CPT E/M Code Calculator
permalink: /cpt-calculator/
description: Calculate appropriate CPT E/M billing codes with well visit support and automated MDM assessment
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
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 30px;
        color: white;
        box-shadow: 0 4px 15px rgba(0, 136, 187, 0.3);
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
        color: #ffeb3b;
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
        border: 2px solid #0088bb;
        background: white;
        color: #0088bb;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .patient-type-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 136, 187, 0.3);
    }

    .patient-type-btn.active {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        color: white;
        border-color: #006b94;
    }

    .well-visit-section {
        background: linear-gradient(135deg, rgba(0, 136, 187, 0.08) 0%, rgba(0, 107, 148, 0.08) 100%);
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 30px;
        border: 2px solid #0088bb;
    }

    .well-visit-section h2 {
        color: #006b94;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3em;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .well-visit-buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        margin-bottom: 20px;
    }

    .well-visit-btn {
        padding: 12px 20px;
        border: 2px solid #b0e0e6;
        background: white;
        color: #0088bb;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.95em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .well-visit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 136, 187, 0.2);
        border-color: #0088bb;
    }

    .well-visit-btn.active {
        background: #0088bb;
        color: white;
        border-color: #006b94;
    }

    .well-visit-code-display {
        background: white;
        border: 2px solid #0088bb;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        font-size: 1.1em;
        font-weight: 600;
        color: #006b94;
        display: none;
    }

    .well-visit-code-display.show {
        display: block;
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
        background: linear-gradient(135deg, #0088bb 0%, #00a8d8 100%);
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
        border-color: #0088bb;
        box-shadow: 0 2px 10px rgba(0, 136, 187, 0.15);
        transform: translateX(3px);
    }

    .level-option.selected {
        border-color: #0088bb;
        background: linear-gradient(135deg, rgba(0, 136, 187, 0.1) 0%, rgba(0, 168, 216, 0.1) 100%);
        box-shadow: 0 2px 10px rgba(0, 136, 187, 0.2);
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
        accent-color: #0088bb;
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
        color: #006b94;
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
        border-color: #0088bb;
        background: #f0f8ff;
        transform: translateX(3px);
    }

    .data-item.selected {
        border-color: #0088bb;
        background: linear-gradient(135deg, rgba(0, 136, 187, 0.1) 0%, rgba(0, 168, 216, 0.1) 100%);
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
        accent-color: #0088bb;
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

    .btn-reset {
        background: white;
        color: #0088bb;
        border: 2px solid #0088bb;
    }

    .btn-reset:hover {
        background: #f0f8ff;
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 136, 187, 0.2);
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
        border: 2px solid #0088bb;
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
        border-bottom: 2px solid #0088bb;
        flex-wrap: wrap;
        gap: 15px;
    }

    .output-header h3 {
        color: #2c3e50;
        font-size: 1.5em;
        margin: 0;
    }

    .btn-copy {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
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
        box-shadow: 0 4px 15px rgba(0, 136, 187, 0.4);
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
        color: #0088bb;
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

        .well-visit-buttons {
            grid-template-columns: 1fr;
        }

        .well-visit-btn {
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
            width: auto;
        }
    }
</style>

<div class="calculator-container">
    <div class="page-header">
        <h1>💙 CPT E/M Code Calculator</h1>
        <p class="page-subtitle">Determine appropriate E/M codes with well visit support</p>
    </div>

    <div class="instructions-container">
        <div class="instructions-header">
            <h2>ℹ️ How to Use This Calculator</h2>
            <button class="toggle-instructions" id="toggleInstructions">Show Instructions</button>
        </div>
        <div class="instructions-content" id="instructionsContent">
            <ul>
                <li><strong>Step 1:</strong> Select whether this is a New or Established patient visit.</li>
                <li><strong>Step 2 (Optional):</strong> If this is a preventive well visit, select the appropriate age category to get the well visit code.</li>
                <li><strong>Step 3:</strong> If adding E/M services to the well visit (or conducting a problem-focused visit), fill out the MDM section. If you select E/M options, a 25 modifier will automatically be added.</li>
                <li><strong>Step 4:</strong> Your CPT code will automatically update as you make selections. Copy your results when ready.</li>
                <li><strong>Step 5:</strong> Use the Reset button to start over.</li>
            </ul>
        </div>
    </div>

    <div class="validation-alert" id="validationAlert"></div>

    <!-- Patient Type Selection -->
    <div class="patient-type-selector">
        <button class="patient-type-btn" id="newPatientBtn">New Patient</button>
        <button class="patient-type-btn" id="establishedPatientBtn">Established Patient</button>
    </div>

    <!-- Well Visit Section -->
    <div class="well-visit-section">
        <h2>🏥 Preventive Well Visit (Optional)</h2>
        <div class="well-visit-buttons">
            <button class="well-visit-btn" data-code="99381">Infant (Under 1 year)</button>
            <button class="well-visit-btn" data-code="99382">Early Childhood (1-4 years)</button>
            <button class="well-visit-btn" data-code="99383">Late Childhood (5-11 years)</button>
            <button class="well-visit-btn" data-code="99384">Adolescent (12-17 years)</button>
            <button class="well-visit-btn" data-code="99385">Young Adult (18-39 years)</button>
            <button class="well-visit-btn" data-code="99386">Middle Age (40-64 years)</button>
            <button class="well-visit-btn" data-code="99387">Mature Adult (65+ years)</button>
        </div>
        <div class="well-visit-code-display" id="wellVisitDisplay"></div>
    </div>

    <!-- MDM Section -->
    <div class="mdm-grid">
        <!-- Problems Section -->
        <div class="mdm-section">
            <h3>Problems Addressed</h3>
            <div class="level-option" data-section="problems">
                <label>
                    <input type="radio" name="problems" value="straightforward">
                    <div>
                        <div class="level-title">Straightforward</div>
                        <div class="level-description">One self-limited or minor problem</div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="problems">
                <label>
                    <input type="radio" name="problems" value="low">
                    <div>
                        <div class="level-title">Low Complexity</div>
                        <div class="level-description">
                            Two or more self-limited problems, OR one stable chronic illness, OR one acute uncomplicated illness
                        </div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="problems">
                <label>
                    <input type="radio" name="problems" value="moderate">
                    <div>
                        <div class="level-title">Moderate Complexity</div>
                        <div class="level-description">
                            One or more chronic illnesses with mild exacerbation, OR multiple stable chronic illnesses, OR newly diagnosed acute illness
                        </div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="problems">
                <label>
                    <input type="radio" name="problems" value="high">
                    <div>
                        <div class="level-title">High Complexity</div>
                        <div class="level-description">
                            Chronic illness with severe exacerbation, OR undiagnosed with workup, OR multiple new problems
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <!-- Data Section -->
        <div class="mdm-section">
            <h3>Data Reviewed & Analyzed</h3>
            <div class="data-category">
                <div class="data-category-title">Tests/Documents Reviewed (pick any)</div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="review_external_notes">
                        Review external notes/records
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="review_test_results">
                        Review prior test results
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="order_test">
                        Order new tests
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="independent_historian">
                        Independent historian
                    </label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">High Data (pick any)</div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="independent_interpretation">
                        Independent interpretation of tests
                    </label>
                </div>
                <div class="data-item">
                    <label>
                        <input type="checkbox" name="data" value="discussion_management">
                        Discussion with other provider re: management
                    </label>
                </div>
            </div>
        </div>

        <!-- Risk Section -->
        <div class="mdm-section">
            <h3>Risk of Complications/Morbidity/Mortality</h3>
            <div class="level-option" data-section="risk">
                <label>
                    <input type="radio" name="risk" value="straightforward">
                    <div>
                        <div class="level-title">Straightforward</div>
                        <div class="level-description">Self-limited or minor illnesses, minor procedures (e.g., simple laceration repair)</div>
                        <div class="risk-example">Examples: Cold, flu, minor laceration, uncomplicated UTI</div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="risk">
                <label>
                    <input type="radio" name="risk" value="low">
                    <div>
                        <div class="level-title">Low</div>
                        <div class="level-description">Minor problems with procedures, medications with minimal side effects, stable chronic illnesses</div>
                        <div class="risk-example">Examples: Stable hypertension, medication refill, minor rash</div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="risk">
                <label>
                    <input type="radio" name="risk" value="moderate">
                    <div>
                        <div class="level-title">Moderate</div>
                        <div class="level-description">Moderate problem with procedures, moderate medications, acute illness with systemic effects</div>
                        <div class="risk-example">Examples: Pneumonia, poorly controlled diabetes, starting new psychotropic</div>
                    </div>
                </label>
            </div>
            <div class="level-option" data-section="risk">
                <label>
                    <input type="radio" name="risk" value="high">
                    <div>
                        <div class="level-title">High</div>
                        <div class="level-description">High-risk surgical procedure, severe illness, significant medication risks, unstable chronic condition</div>
                        <div class="risk-example">Examples: Sepsis, acute MI, severe diabetic ketoacidosis</div>
                    </div>
                </label>
            </div>
        </div>
    </div>

    <div class="action-buttons">
        <button class="btn btn-reset" id="resetBtn">Reset Form</button>
    </div>

    <!-- Output Section -->
    <div class="output-section" id="outputSection">
        <div class="output-header">
            <h3>📋 Your CPT Codes</h3>
            <button class="btn-copy" id="copyBtn">Copy Results</button>
        </div>
        <div class="output-content" id="outputContent"></div>
    </div>

    <div class="copy-notification" id="copyNotification">✓ Copied to clipboard!</div>
</div>

<script>
    // State management
    const state = {
        patientType: null,
        wellVisitCode: null,
        problems: null,
        data: [],
        risk: null
    };

    // CPT code mappings for E/M
    const codeMappings = {
        new: {
            straightforward: '99201',
            low: '99202',
            moderate: '99203',
            high: '99204',
        },
        established: {
            straightforward: '99211',
            low: '99212',
            moderate: '99213',
            high: '99214',
        }
    };

    // Problem descriptions
    const problemDescriptions = {
        straightforward: 'One self-limited or minor problem',
        low: 'Two or more self-limited problems OR one stable chronic illness OR one acute uncomplicated illness',
        moderate: 'One or more chronic illnesses with mild exacerbation OR multiple stable chronic illnesses OR newly diagnosed acute illness',
        high: 'Chronic illness with severe exacerbation OR undiagnosed with workup OR multiple new problems'
    };

    // Data descriptions
    const dataDescriptions = {
        review_external_notes: 'Review external notes/records',
        review_test_results: 'Review prior test results',
        order_test: 'Order new tests',
        independent_historian: 'Independent historian',
        independent_interpretation: 'Independent interpretation of tests',
        discussion_management: 'Discussion with other provider re: management'
    };

    // Risk descriptions
    const riskDescriptions = {
        straightforward: 'Self-limited or minor illnesses, minor procedures (e.g., simple laceration repair)',
        low: 'Minor problems with procedures, medications with minimal side effects, stable chronic illnesses',
        moderate: 'Moderate problem with procedures, moderate medications, acute illness with systemic effects',
        high: 'High-risk surgical procedure, severe illness, significant medication risks, unstable chronic condition'
    };

    // Level to number mapping for 2 of 3 rule
    const levelMap = {
        straightforward: 0,
        low: 1,
        moderate: 2,
        high: 3
    };

    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        initializeEventListeners();
    });

    function initializeEventListeners() {
        // Instructions toggle
        document.getElementById('toggleInstructions').addEventListener('click', toggleInstructions);

        // Patient type buttons
        document.getElementById('newPatientBtn').addEventListener('click', function() {
            setPatientType('new');
        });
        document.getElementById('establishedPatientBtn').addEventListener('click', function() {
            setPatientType('established');
        });

        // Well visit buttons
        document.querySelectorAll('.well-visit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                setWellVisit(this.getAttribute('data-code'), this.textContent);
                updateOutput();
            });
        });

        // Problem radio buttons
        document.querySelectorAll('input[name="problems"]').forEach(input => {
            input.addEventListener('change', function() {
                state.problems = this.value;
                updateLevelOptionStyles('problems');
                updateOutput();
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
                updateOutput();
            });
        });

        // Risk radio buttons
        document.querySelectorAll('input[name="risk"]').forEach(input => {
            input.addEventListener('change', function() {
                state.risk = this.value;
                updateLevelOptionStyles('risk');
                updateOutput();
            });
        });

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
        updateOutput();
    }

    function setWellVisit(code, label) {
        const buttons = document.querySelectorAll('.well-visit-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Find and activate the clicked button
        buttons.forEach(btn => {
            if (btn.getAttribute('data-code') === code) {
                btn.classList.add('active');
            }
        });

        state.wellVisitCode = code;
        updateOutput();
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

    function updateOutput() {
        // Only show output if patient type is selected
        if (!state.patientType) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        // Check if we have a well visit OR complete E/M data
        const hasWellVisit = state.wellVisitCode !== null;
        const hasCompleteEMData = state.problems !== null && state.risk !== null;

        if (!hasWellVisit && !hasCompleteEMData) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        generateOutput();
        document.getElementById('outputSection').classList.add('show');
    }

    function generateOutput() {
        let output = '';

        // Add well visit code if selected
        if (state.wellVisitCode) {
            output += `PREVENTIVE WELL VISIT: ${state.wellVisitCode}\n`;
        }

        // Add E/M code if we have complete data
        if (state.problems !== null && state.risk !== null) {
            // Calculate data level
            const dataLevel = calculateDataLevel();

            // Apply 2 of 3 rule
            const problemLevel = levelMap[state.problems];
            const riskLevel = levelMap[state.risk];
            const dataLevelNum = levelMap[dataLevel];

            const levels = [problemLevel, dataLevelNum, riskLevel];
            const finalLevelNum = determine2of3Level(levels);
            const finalLevel = Object.keys(levelMap).find(key => levelMap[key] === finalLevelNum);

            // Get CPT code
            const cptCode = codeMappings[state.patientType][finalLevel];

            // Add modifier 25 if we have a well visit
            const modifiedCode = state.wellVisitCode ? cptCode + ' 25' : cptCode;

            if (state.wellVisitCode) {
                output += `E/M CODE: ${modifiedCode}\n`;
            } else {
                output += `E/M CODE: ${cptCode}\n`;
            }

            output += `\n`;
            output += `MEDICAL DECISION MAKING DETAILS\n`;
            output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

            // Show selected problems
            output += `Problems Addressed: ${capitalizeFirst(state.problems)}\n`;
            output += `${problemDescriptions[state.problems]}\n\n`;

            // Show selected data
            if (state.data.length > 0) {
                output += `Data Reviewed & Analyzed: ${capitalizeFirst(dataLevel)}\n`;
                state.data.forEach(item => {
                    output += `• ${dataDescriptions[item]}\n`;
                });
            } else {
                output += `Data Reviewed & Analyzed: N/A\n`;
            }
            output += `\n`;

            // Show selected risk
            output += `Risk Level: ${capitalizeFirst(state.risk)}\n`;
            output += `${riskDescriptions[state.risk]}\n`;
        }

        document.getElementById('outputContent').textContent = output;
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
            0: 0,
            1: 0,
            2: 0,
            3: 0
        };

        levels.forEach(level => counts[level]++);

        // If any level appears 2 or more times, that's the result
        if (counts[3] >= 2) return 3;
        if (counts[2] >= 2) return 2;
        if (counts[1] >= 2) return 1;
        if (counts[0] >= 2) return 0;

        // If all three are different, take the middle value
        const sortedLevels = levels.sort((a, b) => a - b);
        return sortedLevels[1];
    }

    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function resetAll() {
        // Reset state
        state.patientType = null;
        state.wellVisitCode = null;
        state.problems = null;
        state.data = [];
        state.risk = null;

        // Uncheck all inputs
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);

        // Remove active classes
        document.querySelectorAll('.patient-type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.well-visit-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.level-option').forEach(option => option.classList.remove('selected'));
        document.querySelectorAll('.data-item').forEach(item => item.classList.remove('selected'));

        // Hide output
        document.getElementById('outputSection').classList.remove('show');

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
