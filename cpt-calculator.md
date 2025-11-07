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

    .mdm-section > p {
        font-size: 0.9em;
        color: #666;
        margin-bottom: 15px;
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
        box-shadow: 0 2px 8px rgba(0, 136, 187, 0.2);
    }

    .data-item input[type="checkbox"] {
        margin-right: 10px;
        cursor: pointer;
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }

    .data-item label {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.5;
        font-size: 0.95em;
    }

    .quantity-input-container {
        display: none;
        margin-top: 10px;
        padding: 10px;
        background: white;
        border-radius: 4px;
    }

    .quantity-input-container.show {
        display: block;
    }

    .quantity-input-container label {
        display: block;
        font-size: 0.85em;
        color: #666;
        margin-bottom: 5px;
    }

    .quantity-input-container input[type="number"] {
        width: 80px;
        padding: 6px;
        border: 2px solid #0088bb;
        border-radius: 4px;
        font-size: 0.9em;
    }

    .output-section {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 12px;
        padding: 30px;
        margin-top: 30px;
        border: 2px solid #0088bb;
        display: none;
    }

    .output-section.show {
        display: block;
        animation: slideDown 0.3s ease;
    }

    .output-section h2 {
        color: #006b94;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.5em;
        text-align: center;
    }

    .output-content {
        background: white;
        padding: 25px;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        font-size: 0.95em;
        line-height: 1.8;
        white-space: pre-wrap;
        color: #2c3e50;
        border: 1px solid #dee2e6;
        max-height: 600px;
        overflow-y: auto;
    }

    .output-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .action-btn {
        padding: 12px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .copy-btn {
        background: linear-gradient(135deg, #28a745 0%, #218838 100%);
        color: white;
    }

    .copy-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
    }

    .reset-btn {
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        color: white;
    }

    .reset-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(220, 53, 69, 0.4);
    }

    .copy-notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        display: none;
        animation: slideIn 0.3s ease;
        z-index: 1000;
    }

    .copy-notification.show {
        display: block;
    }

    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .validation-alert {
        background: #fff3cd;
        border: 2px solid #ffc107;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        color: #856404;
        display: none;
    }

    .validation-alert.show {
        display: block;
    }

    @media (max-width: 768px) {
        .mdm-grid {
            grid-template-columns: 1fr;
        }
        
        .patient-type-selector {
            flex-direction: column;
        }
        
        .patient-type-btn {
            width: 100%;
        }
    }
</style>

<div class="calculator-container">
    <div class="page-header">
        <h1>CPT E/M Code Calculator</h1>
        <p class="page-subtitle">Updated for 2025 AMA Guidelines | Supports MDM and Time-Based Coding</p>
    </div>

    <div class="instructions-container">
        <div class="instructions-header">
            <h2>How to Use This Calculator</h2>
            <button class="toggle-instructions" id="toggleInstructions">Show Instructions</button>
        </div>
        <div class="instructions-content" id="instructionsContent">
            <ul>
                <li><strong>Step 1:</strong> Select whether this is a New or Established patient visit.</li>
                <li><strong>Step 2 (Optional):</strong> If this is a preventive well visit, select the appropriate age category to get the well visit code.</li>
                <li><strong>Step 3:</strong> If adding E/M services to the well visit (or conducting a problem-focused visit), fill out the MDM section. If you select E/M options, a 25 modifier will automatically be added.</li>
                <li><strong>Step 4:</strong> Alternatively, you can use time-based coding by entering total time spent on the date of encounter.</li>
                <li><strong>Step 5:</strong> Your CPT code will automatically update as you make selections. Copy your results when ready.</li>
                <li><strong>Step 6:</strong> Use the Reset button to start over.</li>
            </ul>
            <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.9;">
                <strong>Note:</strong> This calculator implements the 2025 AMA CPT guidelines. For MDM-based coding, 2 of 3 elements (Problems, Data, Risk) must be met. Code 99201 has been deleted and is no longer used. For established patients, 99211 represents minimal service without physician MDM.
            </p>
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
        <h2>Preventive Well Visit (Optional)</h2>
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

    <!-- Time-Based Coding Section -->
    <div class="well-visit-section">
        <h2>Time-Based Coding (Optional Alternative)</h2>
        <p style="font-size: 0.9em; color: #666; margin-bottom: 15px;">You can select CPT code based on total time spent on the date of the encounter (includes non-face-to-face work like documentation, coordination of care, etc.)</p>
        <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap; margin-bottom: 15px;">
            <div style="flex: 1; min-width: 200px;">
                <label for="totalTime" style="display: block; font-weight: 600; color: #006b94; margin-bottom: 8px;">Total Time (minutes):</label>
                <input type="number" id="totalTime" placeholder="Enter total time" min="0" max="300" style="width: 100%; padding: 10px; border: 2px solid #0088bb; border-radius: 6px; font-size: 1em;">
            </div>
        </div>
        <div class="well-visit-code-display" id="timeBasedDisplay"></div>
    </div>

    <!-- MDM Section -->
    <div class="mdm-grid">
        <!-- Problems Section -->
        <div class="mdm-section">
            <h3>Problems Addressed</h3>
            <p>Select all that apply to determine complexity level</p>
            <div class="data-category">
                <div class="data-category-title">Minimal/Straightforward</div>
                <div class="data-item">
                    <input type="checkbox" id="self_limited_minor" name="problems" value="self_limited_minor">
                    <label for="self_limited_minor">Self-limited or minor problem</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">Low Complexity</div>
                <div class="data-item">
                    <input type="checkbox" id="stable_chronic" name="problems" value="stable_chronic">
                    <label for="stable_chronic">Stable chronic illness (at treatment goal)</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="acute_uncomplicated" name="problems" value="acute_uncomplicated">
                    <label for="acute_uncomplicated">Acute, uncomplicated illness or injury</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">Moderate Complexity</div>
                <div class="data-item">
                    <input type="checkbox" id="chronic_mild_exacerbation" name="problems" value="chronic_mild_exacerbation">
                    <label for="chronic_mild_exacerbation">Chronic illness with mild exacerbation/progression</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="multiple_stable_chronic" name="problems" value="multiple_stable_chronic">
                    <label for="multiple_stable_chronic">Two or more stable chronic illnesses</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="newly_diagnosed_acute" name="problems" value="newly_diagnosed_acute">
                    <label for="newly_diagnosed_acute">Undiagnosed new problem OR acute illness with systemic symptoms</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">High Complexity</div>
                <div class="data-item">
                    <input type="checkbox" id="chronic_severe_exacerbation" name="problems" value="chronic_severe_exacerbation">
                    <label for="chronic_severe_exacerbation">Chronic illness with severe exacerbation/progression</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="undiagnosed_with_workup" name="problems" value="undiagnosed_with_workup">
                    <label for="undiagnosed_with_workup">Undiagnosed problem with uncertain prognosis requiring extensive workup</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="multiple_new_problems" name="problems" value="multiple_new_problems">
                    <label for="multiple_new_problems">Acute or chronic illness/injury that poses threat to life or bodily function</label>
                </div>
            </div>
        </div>

        <!-- Data Review Section -->
        <div class="mdm-section">
            <h3>Data Reviewed & Analyzed</h3>
            <p>Select items reviewed/analyzed during this encounter</p>
            <div class="data-category">
                <div class="data-category-title">Category 1: Tests & Documents</div>
                <div class="data-item">
                    <input type="checkbox" id="review_external_notes" name="data" value="review_external_notes">
                    <label for="review_external_notes">Review external notes/records from unique source</label>
                    <div class="quantity-input-container" id="review_external_notes_qty">
                        <label>Number of unique sources:</label>
                        <input type="number" min="0" max="20" value="0" data-field="review_external_notes">
                    </div>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="review_test_results" name="data" value="review_test_results">
                    <label for="review_test_results">Review results of unique test(s)</label>
                    <div class="quantity-input-container" id="review_test_results_qty">
                        <label>Number of unique tests:</label>
                        <input type="number" min="0" max="20" value="0" data-field="review_test_results">
                    </div>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="order_test" name="data" value="order_test">
                    <label for="order_test">Order unique test(s)</label>
                    <div class="quantity-input-container" id="order_test_qty">
                        <label>Number of unique tests ordered:</label>
                        <input type="number" min="0" max="20" value="0" data-field="order_test">
                    </div>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="independent_historian" name="data" value="independent_historian">
                    <label for="independent_historian">Assessment requiring independent historian</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">Category 2: Advanced Analysis</div>
                <div class="data-item">
                    <input type="checkbox" id="independent_interpretation" name="data" value="independent_interpretation">
                    <label for="independent_interpretation">Independent interpretation of test (not separately billed)</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="discussion_management" name="data" value="discussion_management">
                    <label for="discussion_management">Discussion of management/test interpretation with external provider</label>
                </div>
            </div>
        </div>

        <!-- Risk Section -->
        <div class="mdm-section">
            <h3>Risk of Complications</h3>
            <p>Select all risk factors that apply</p>
            <div class="data-category">
                <div class="data-category-title">Minimal Risk</div>
                <div class="data-item">
                    <input type="checkbox" id="self_limited_illness" name="risk" value="self_limited_illness">
                    <label for="self_limited_illness">Self-limited illness (e.g., cold, simple rash)</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="minor_procedure" name="risk" value="minor_procedure">
                    <label for="minor_procedure">Minor procedure with no risk factors</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="minor_otc_management" name="risk" value="minor_otc_management">
                    <label for="minor_otc_management">OTC medication management</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">Low Risk</div>
                <div class="data-item">
                    <input type="checkbox" id="minor_with_minimal_side_effects" name="risk" value="minor_with_minimal_side_effects">
                    <label for="minor_with_minimal_side_effects">Minor procedure with minimal side effect risk</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="stable_chronic_risk" name="risk" value="stable_chronic_risk">
                    <label for="stable_chronic_risk">Stable chronic condition management</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="otc_moderate_symptoms" name="risk" value="otc_moderate_symptoms">
                    <label for="otc_moderate_symptoms">OTC drugs for moderate symptoms</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">Moderate Risk</div>
                <div class="data-item">
                    <input type="checkbox" id="moderate_problem" name="risk" value="moderate_problem">
                    <label for="moderate_problem">Minor surgery with identified risk factors</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="prescription_medication" name="risk" value="prescription_medication">
                    <label for="prescription_medication">Prescription drug management</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="acute_systemic" name="risk" value="acute_systemic">
                    <label for="acute_systemic">Diagnosis/treatment limited by social determinants of health</label>
                </div>
            </div>
            <div class="data-category">
                <div class="data-category-title">High Risk</div>
                <div class="data-item">
                    <input type="checkbox" id="high_surgical_risk" name="risk" value="high_surgical_risk">
                    <label for="high_surgical_risk">Major surgery or emergency surgery decision</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="severe_illness" name="risk" value="severe_illness">
                    <label for="severe_illness">Drug therapy requiring intensive monitoring for toxicity</label>
                </div>
                <div class="data-item">
                    <input type="checkbox" id="unstable_chronic" name="risk" value="unstable_chronic">
                    <label for="unstable_chronic">Decision regarding hospitalization/escalation of care</label>
                </div>
            </div>
        </div>
    </div>

    <!-- Output Section -->
    <div class="output-section" id="outputSection">
        <h2>Your CPT Code Results</h2>
        <div class="output-content" id="outputContent"></div>
        <div class="output-actions">
            <button class="action-btn copy-btn" onclick="copyToClipboard()">Copy to Clipboard</button>
            <button class="action-btn reset-btn" onclick="resetAll()">Reset Calculator</button>
        </div>
    </div>

    <div class="copy-notification" id="copyNotification">✓ Copied to clipboard!</div>
</div>

<script>
    // State management
    const state = {
        patientType: null,
        wellVisitCode: null,
        problems: [],
        data: [],
        dataQuantities: {
            review_external_notes: 0,
            review_test_results: 0,
            order_test: 0
        },
        risk: [],
        totalTime: null
    };

    // FIXED: CPT code mappings for E/M (Updated for 2025 AMA Guidelines)
    // 99201 was deleted in 2021 and is no longer used
    const codeMappings = {
        new: {
            0: '99202',  // straightforward (MINIMUM for new patients)
            1: '99203',  // low
            2: '99204',  // moderate
            3: '99205',  // high
        },
        established: {
            0: '99211',  // minimal (no physician/QHP MDM required)
            1: '99212',  // straightforward
            2: '99213',  // low
            3: '99214',  // moderate
            4: '99215',  // high
        }
    };

    // Problem level mappings
    const problemLevelMap = {
        'self_limited_minor': 0,
        'stable_chronic': 1,
        'acute_uncomplicated': 1,
        'chronic_mild_exacerbation': 2,
        'multiple_stable_chronic': 2,
        'newly_diagnosed_acute': 2,
        'chronic_severe_exacerbation': 3,
        'undiagnosed_with_workup': 3,
        'multiple_new_problems': 3
    };

    // Risk level mappings
    const riskLevelMap = {
        'self_limited_illness': 0,
        'minor_procedure': 0,
        'minor_otc_management': 0,
        'minor_with_minimal_side_effects': 1,
        'stable_chronic_risk': 1,
        'otc_moderate_symptoms': 1,
        'moderate_problem': 2,
        'prescription_medication': 2,
        'acute_systemic': 2,
        'high_surgical_risk': 3,
        'severe_illness': 3,
        'unstable_chronic': 3
    };

    // Data descriptions for output
    const dataDescriptions = {
        review_external_notes: 'Review external notes/records',
        review_test_results: 'Review prior test results',
        order_test: 'Order new tests',
        independent_historian: 'Independent historian',
        independent_interpretation: 'Independent interpretation of tests',
        discussion_management: 'Discussion with other provider re: management'
    };

    // FIXED: Time-based CPT code mappings (Updated for 2025 AMA Guidelines)
    // Removed upper limits - codes apply for stated time and above
    const timeBasedCodes = {
        new: {
            15: '99202',   // 15-29 minutes
            30: '99203',   // 30-44 minutes
            45: '99204',   // 45-59 minutes
            60: '99205'    // 60+ minutes
        },
        established: {
            10: '99212',   // 10-19 minutes
            20: '99213',   // 20-29 minutes
            30: '99214',   // 30-39 minutes
            40: '99215'    // 40+ minutes
        }
    };

    // FIXED: Function to determine code from time (Updated for 2025)
    function getCodeFromTime(minutes, patientType) {
        const time = parseInt(minutes);
        
        if (patientType === 'new') {
            if (time >= 60) return { code: '99205', range: '60+ min' };
            if (time >= 45) return { code: '99204', range: '45-59 min' };
            if (time >= 30) return { code: '99203', range: '30-44 min' };
            if (time >= 15) return { code: '99202', range: '15-29 min' };
            return null; // Less than 15 minutes doesn't meet threshold
        } else if (patientType === 'established') {
            if (time >= 40) return { code: '99215', range: '40+ min' };
            if (time >= 30) return { code: '99214', range: '30-39 min' };
            if (time >= 20) return { code: '99213', range: '20-29 min' };
            if (time >= 10) return { code: '99212', range: '10-19 min' };
            // Note: 99211 has no time component (minimal service without physician MDM)
            return null;
        }
        
        return null;
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Patient type buttons
        document.getElementById('newPatientBtn').addEventListener('click', () => setPatientType('new'));
        document.getElementById('establishedPatientBtn').addEventListener('click', () => setPatientType('established'));

        // Toggle instructions
        document.getElementById('toggleInstructions').addEventListener('click', toggleInstructions);

        // Well visit buttons
        document.querySelectorAll('.well-visit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const code = this.getAttribute('data-code');
                const label = this.textContent;
                setWellVisit(code, label);
            });
        });

        // Total time input
        document.getElementById('totalTime').addEventListener('input', function() {
            state.totalTime = this.value ? parseInt(this.value) : null;
            updateOutput();
        });

        // Problem checkboxes
        document.querySelectorAll('input[name="problems"]').forEach(input => {
            input.addEventListener('change', function() {
                if (this.checked) {
                    state.problems.push(this.value);
                } else {
                    state.problems = state.problems.filter(p => p !== this.value);
                }
                updateDataItemStyles('problems');
                updateOutput();
            });
        });

        // Data checkboxes and quantity inputs
        document.querySelectorAll('input[name="data"]').forEach(input => {
            input.addEventListener('change', function() {
                if (this.checked) {
                    state.data.push(this.value);
                    // Show quantity input if applicable
                    const qtyContainer = document.getElementById(this.id + '_qty');
                    if (qtyContainer) {
                        qtyContainer.classList.add('show');
                    }
                } else {
                    state.data = state.data.filter(d => d !== this.value);
                    // Hide and reset quantity input
                    const qtyContainer = document.getElementById(this.id + '_qty');
                    if (qtyContainer) {
                        qtyContainer.classList.remove('show');
                        const qtyInput = qtyContainer.querySelector('input[type="number"]');
                        if (qtyInput) {
                            qtyInput.value = 0;
                            state.dataQuantities[this.value] = 0;
                        }
                    }
                }
                updateDataItemStyles('data');
                updateOutput();
            });
        });

        // Quantity inputs for data
        document.querySelectorAll('.quantity-input-container input[type="number"]').forEach(input => {
            input.addEventListener('input', function() {
                const field = this.getAttribute('data-field');
                state.dataQuantities[field] = parseInt(this.value) || 0;
                updateOutput();
            });
        });

        // Risk checkboxes
        document.querySelectorAll('input[name="risk"]').forEach(input => {
            input.addEventListener('change', function() {
                if (this.checked) {
                    state.risk.push(this.value);
                } else {
                    state.risk = state.risk.filter(r => r !== this.value);
                }
                updateDataItemStyles('risk');
                updateOutput();
            });
        });
    });

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

    function updateDataItemStyles(fieldName) {
        const checkboxes = document.querySelectorAll(`input[name="${fieldName}"]`);
        checkboxes.forEach(checkbox => {
            const item = checkbox.closest('.data-item');
            if (checkbox.checked) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function calculateProblemLevel() {
        if (state.problems.length === 0) return null;
        
        // Get the highest level among selected problems
        let maxLevel = 0;
        state.problems.forEach(problem => {
            const level = problemLevelMap[problem];
            if (level > maxLevel) {
                maxLevel = level;
            }
        });
        return maxLevel;
    }

    function calculateRiskLevel() {
        if (state.risk.length === 0) return null;
        
        // Get the highest level among selected risk factors
        let maxLevel = 0;
        state.risk.forEach(risk => {
            const level = riskLevelMap[risk];
            if (level > maxLevel) {
                maxLevel = level;
            }
        });
        return maxLevel;
    }

    function calculateDataLevel() {
        if (state.data.length === 0) return null;

        // Category 1: External notes, test results, ordered tests (each unique item counts)
        const category1Count = (state.dataQuantities.review_external_notes || 0) + 
                               (state.dataQuantities.review_test_results || 0) + 
                               (state.dataQuantities.order_test || 0);
        
        // Category 2: Independent interpretation + discussion with provider
        const category2Count = (state.data.includes('independent_interpretation') ? 1 : 0) + 
                               (state.data.includes('discussion_management') ? 1 : 0);
        
        const hasIndependentHistorian = state.data.includes('independent_historian');

        // Extensive (High): 3+ elements from Category 1 AND both elements from Category 2
        if (category1Count >= 3 && category2Count >= 2) {
            return 3;
        }

        // Moderate: 3+ elements from Category 1 OR any element from Category 2 OR independent historian
        if (category1Count >= 3 || category2Count >= 1 || hasIndependentHistorian) {
            return 2;
        }

        // Limited (Low): 2 elements from Category 1
        if (category1Count >= 2) {
            return 1;
        }

        // Minimal/Straightforward: 0-1 items from Category 1
        return 0;
    }

    function determine2of3Level(levels) {
        // Remove null values
        const validLevels = levels.filter(l => l !== null);
        
        if (validLevels.length < 2) return null;

        // Count occurrences of each level
        const counts = {
            0: 0,
            1: 0,
            2: 0,
            3: 0
        };

        validLevels.forEach(level => counts[level]++);

        // If any level appears 2 or more times, that's the result
        if (counts[3] >= 2) return 3;
        if (counts[2] >= 2) return 2;
        if (counts[1] >= 2) return 1;
        if (counts[0] >= 2) return 0;

        // If all three are different, take the middle value
        const sortedLevels = validLevels.sort((a, b) => a - b);
        return sortedLevels[Math.floor(sortedLevels.length / 2)];
    }

    function getLevelName(level) {
        switch(level) {
            case 0: return 'Minimal/Straightforward';
            case 1: return 'Low';
            case 2: return 'Moderate';
            case 3: return 'High';
            default: return 'N/A';
        }
    }

    function updateOutput() {
        // Only show output if patient type is selected
        if (!state.patientType) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        // Check if we have a well visit OR complete E/M data
        const hasWellVisit = state.wellVisitCode !== null;
        const problemLevel = calculateProblemLevel();
        const riskLevel = calculateRiskLevel();
        const hasCompleteEMData = problemLevel !== null && riskLevel !== null;

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
        const problemLevel = calculateProblemLevel();
        const riskLevel = calculateRiskLevel();
        
        if (problemLevel !== null && riskLevel !== null) {
            const dataLevel = calculateDataLevel();

            // Apply 2 of 3 rule
            const levels = [problemLevel, dataLevel, riskLevel];
            let finalLevel = determine2of3Level(levels);

            // FIXED: Adjust for established patients - they start at 99212 (straightforward), not 99211
            // 99211 is minimal level without physician MDM, not typically used in this calculator
            if (state.patientType === 'established' && finalLevel !== null) {
                finalLevel = finalLevel + 1;  // Shift up one level for established patients
            }

            // Get CPT code
            const cptCode = codeMappings[state.patientType][finalLevel];

            // Add modifier 25 if we have a well visit
            const modifiedCode = state.wellVisitCode ? cptCode + '-25' : cptCode;

            if (state.wellVisitCode) {
                output += `E/M CODE: ${modifiedCode}\n`;
            } else {
                output += `E/M CODE: ${cptCode}\n`;
            }

            output += `\n`;
            output += `MEDICAL DECISION MAKING DETAILS\n`;
            output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

            // Show selected problems
            if (state.problems.length > 0) {
                output += `Problems Addressed: ${getLevelName(problemLevel)}\n`;
                state.problems.forEach(problem => {
                    // Convert problem key to display text
                    const displayText = problem.split('_').join(' ').replace(/\b\w/g, l => l.toUpperCase());
                    output += `• ${displayText}\n`;
                });
            } else {
                output += `Problems Addressed: N/A\n`;
            }
            output += `\n`;

            // Show selected data
            if (state.data.length > 0) {
                output += `Data Reviewed & Analyzed: ${getLevelName(dataLevel)}\n`;
                state.data.forEach(item => {
                    let displayText = dataDescriptions[item];
                    // Add quantity for Category 1 items
                    if (['review_external_notes', 'review_test_results', 'order_test'].includes(item)) {
                        const qty = state.dataQuantities[item];
                        if (qty > 0) {
                            displayText += ` (${qty})`;
                        }
                    }
                    output += `• ${displayText}\n`;
                });
            } else {
                output += `Data Reviewed & Analyzed: N/A\n`;
            }
            output += `\n`;

            // Show selected risk
            if (state.risk.length > 0) {
                output += `Risk Level: ${getLevelName(riskLevel)}\n`;
                state.risk.forEach(risk => {
                    // Convert risk key to display text
                    const displayText = risk.split('_').join(' ').replace(/\b\w/g, l => l.toUpperCase());
                    output += `• ${displayText}\n`;
                });
            } else {
                output += `Risk Level: N/A\n`;
            }
            
            output += `\n`;
            output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
            output += `2 of 3 Rule Applied:\n`;
            output += `Problems: ${getLevelName(problemLevel)} | Data: ${getLevelName(dataLevel)} | Risk: ${getLevelName(riskLevel)}\n`;
            // Subtract 1 from finalLevel for display since we added 1 for established patients
            const displayLevel = state.patientType === 'established' ? finalLevel - 1 : finalLevel;
            output += `Final MDM Level: ${getLevelName(displayLevel)}\n`;
            
            // Add time-based alternative if provided
            if (state.totalTime) {
                const timeCode = getCodeFromTime(state.totalTime, state.patientType);
                if (timeCode) {
                    output += `\n`;
                    output += `TIME-BASED ALTERNATIVE:\n`;
                    output += `Total Time: ${state.totalTime} minutes\n`;
                    output += `Code by Time: ${timeCode.code} (${timeCode.range})\n`;
                    output += `Note: Use the higher of MDM-based or time-based code.\n`;
                }
            }
        }

        document.getElementById('outputContent').textContent = output;
        
        // Update time-based display
        updateTimeBasedDisplay();
    }

    function updateTimeBasedDisplay() {
        const display = document.getElementById('timeBasedDisplay');
        
        if (!state.patientType || !state.totalTime) {
            display.classList.remove('show');
            return;
        }
        
        const timeCode = getCodeFromTime(state.totalTime, state.patientType);
        if (timeCode) {
            display.textContent = `Code by Time: ${timeCode.code} (${timeCode.range})`;
            display.classList.add('show');
        } else {
            display.textContent = 'Time does not meet minimum requirements';
            display.classList.add('show');
        }
    }

    function resetAll() {
        // Reset state
        state.patientType = null;
        state.wellVisitCode = null;
        state.problems = [];
        state.data = [];
        state.risk = [];
        state.totalTime = null;
        state.dataQuantities = {
            review_external_notes: 0,
            review_test_results: 0,
            order_test: 0
        };

        // Uncheck all inputs
        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
        document.getElementById('totalTime').value = '';

        // Remove active classes
        document.querySelectorAll('.patient-type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.well-visit-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.data-item').forEach(item => item.classList.remove('selected'));

        // Hide quantity containers
        document.querySelectorAll('.quantity-input-container').forEach(container => {
            container.classList.remove('show');
        });

        // Hide output and time display
        document.getElementById('outputSection').classList.remove('show');
        document.getElementById('timeBasedDisplay').classList.remove('show');
        document.getElementById('wellVisitDisplay').classList.remove('show');

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
