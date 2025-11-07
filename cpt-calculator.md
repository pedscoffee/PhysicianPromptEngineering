---
layout: page
title: CPT E/M Code Calculator
permalink: /cpt-calculator/
description: Calculate appropriate CPT E/M billing codes with well visit support and automated MDM assessment
---

<style>
    .wrapper {
        max-width: 1640px;
    }

    .calculator-container {
        max-width: 100%;
        margin: 0;
        padding: 15px;
    }

    .page-header {
        text-align: center;
        margin-bottom: 20px;
    }

    .page-header h1 {
        color: #2c3e50;
        font-size: 1.8em;
        margin-bottom: 5px;
    }

    .page-subtitle {
        color: #7f8c8d;
        font-size: 0.95em;
        font-weight: 300;
    }

    .instructions-container {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        color: white;
        box-shadow: 0 2px 10px rgba(0, 136, 187, 0.3);
    }

    .instructions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .instructions-header h2 {
        color: white;
        margin: 0;
        font-size: 1.1em;
    }

    .toggle-instructions {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 6px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        font-size: 0.85em;
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
        margin: 10px 0;
        padding-left: 20px;
    }

    .instructions-content li {
        margin-bottom: 6px;
        line-height: 1.4;
        font-size: 0.9em;
    }

    .instructions-content strong {
        color: #ffeb3b;
    }

    .instructions-content p {
        font-size: 0.85em;
        margin: 10px 0 0 0;
        opacity: 0.9;
        line-height: 1.4;
    }

    .patient-type-selector {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-bottom: 15px;
        flex-wrap: wrap;
    }

    .patient-type-btn {
        padding: 10px 30px;
        border: 2px solid #0088bb;
        background: white;
        color: #0088bb;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.95em;
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
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 15px;
        border: 2px solid #0088bb;
    }

    .well-visit-section h2 {
        color: #006b94;
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.05em;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .well-visit-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 10px;
    }

    .well-visit-btn {
        padding: 8px 14px;
        border: 2px solid #b0e0e6;
        background: white;
        color: #0088bb;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        flex: 0 0 auto;
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
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        margin-bottom: 15px;
    }

    .mdm-section {
        background: white;
        border-radius: 8px;
        padding: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        border: 1px solid #e8ecef;
    }

    .mdm-section h3 {
        background: linear-gradient(135deg, #0088bb 0%, #00a8d8 100%);
        color: white;
        margin: -12px -12px 12px -12px;
        padding: 10px 12px;
        border-radius: 8px 8px 0 0;
        font-size: 0.95em;
        font-weight: 600;
    }

    .mdm-section > p {
        font-size: 0.8em;
        color: #666;
        margin-bottom: 10px;
    }

    .data-category {
        margin-bottom: 12px;
    }

    .data-category-title {
        font-weight: 700;
        color: #006b94;
        margin-bottom: 6px;
        font-size: 0.85em;
        padding-bottom: 3px;
        border-bottom: 2px solid #f0f0f0;
    }

    .data-item {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 4px;
        padding: 6px 10px;
        margin-bottom: 6px;
        cursor: pointer;
        transition: all 0.3s;
        user-select: none;
    }

    .data-item:hover {
        background: #e9ecef;
        border-color: #0088bb;
    }

    .data-item.selected {
        background: linear-gradient(135deg, #0088bb 0%, #00a8d8 100%);
        border-color: #006b94;
        color: white;
    }

    .data-item input[type="checkbox"] {
        display: none;
    }

    .data-item-label {
        display: block;
        font-size: 0.85em;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
    }

    .quantity-input-container {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        display: none;
    }

    .quantity-input-container.show {
        display: block;
    }

    .quantity-label {
        font-size: 0.75em;
        margin-bottom: 4px;
        opacity: 0.9;
    }

    .quantity-input {
        width: 60px;
        padding: 4px 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        font-size: 0.85em;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
    }

    .quantity-input:focus {
        outline: none;
        border-color: #006b94;
    }

    .time-based-section {
        background: linear-gradient(135deg, rgba(0, 136, 187, 0.08) 0%, rgba(0, 107, 148, 0.08) 100%);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 15px;
        border: 2px solid #0088bb;
    }

    .time-based-section h2 {
        color: #006b94;
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 1.05em;
    }

    .time-input-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .time-input-container label {
        font-size: 0.85em;
        color: #333;
        font-weight: 600;
    }

    .time-input-container input {
        width: 100px;
        padding: 8px 12px;
        border: 2px solid #0088bb;
        border-radius: 6px;
        font-size: 0.9em;
    }

    .time-input-container input:focus {
        outline: none;
        border-color: #006b94;
    }

    .time-based-display {
        margin-top: 10px;
        padding: 10px;
        background: white;
        border: 2px solid #0088bb;
        border-radius: 6px;
        font-size: 0.9em;
        font-weight: 600;
        color: #006b94;
        display: none;
    }

    .time-based-display.show {
        display: block;
    }

    .output-section {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-top: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: none;
    }

    .output-section.show {
        display: block;
    }

    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 2px solid #e8ecef;
    }

    .output-header h2 {
        color: #006b94;
        font-size: 1.3em;
        margin: 0;
    }

    .output-actions {
        display: flex;
        gap: 10px;
    }

    .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.85em;
        transition: all 0.3s;
    }

    .btn-primary {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        color: white;
        box-shadow: 0 2px 8px rgba(0, 136, 187, 0.3);
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 136, 187, 0.4);
    }

    .btn-secondary {
        background: white;
        color: #0088bb;
        border: 2px solid #0088bb;
    }

    .btn-secondary:hover {
        background: #f8f9fa;
        transform: translateY(-2px);
    }

    .output-content {
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        padding: 15px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.9em;
        white-space: pre-wrap;
        line-height: 1.6;
        color: #2c3e50;
        max-height: 600px;
        overflow-y: auto;
    }

    .copy-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s;
        z-index: 1000;
    }

    .copy-notification.show {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 1024px) {
        .mdm-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .calculator-container {
            padding: 10px;
        }

        .page-header h1 {
            font-size: 1.5em;
        }

        .output-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }

        .output-actions {
            width: 100%;
        }

        .btn {
            flex: 1;
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
            <button class="toggle-instructions" onclick="toggleInstructions()">Show Instructions</button>
        </div>
        <div class="instructions-content" id="instructionsContent">
            <ul>
                <li><strong>Step 1:</strong> Select patient type (New or Established)</li>
                <li><strong>Step 2 (Optional):</strong> Select preventive well visit age category if applicable</li>
                <li><strong>Step 3:</strong> Select problems addressed, data reviewed, and risk factors</li>
                <li><strong>Step 4 (Optional):</strong> Enter total time if using time-based coding</li>
                <li><strong>Result:</strong> The calculator automatically determines the appropriate E/M code using the 2 of 3 MDM rule</li>
            </ul>
            <p><strong>Note:</strong> If both a well visit and E/M code are generated, the E/M code should be billed with modifier -25. Time-based coding is shown as an alternative when applicable - use whichever yields the higher level code.</p>
        </div>
    </div>

    <div class="patient-type-selector">
        <button class="patient-type-btn" onclick="selectPatientType('new')">New Patient</button>
        <button class="patient-type-btn" onclick="selectPatientType('established')">Established Patient</button>
    </div>

    <div class="well-visit-section">
        <h2>🏥 Preventive Well Visit (Optional)</h2>
        <div class="well-visit-buttons">
            <button class="well-visit-btn" onclick="selectWellVisit('99381', '99391')">Infant (Under 1 year)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99382', '99392')">Early Childhood (1-4 years)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99383', '99393')">Late Childhood (5-11 years)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99384', '99394')">Adolescent (12-17 years)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99385', '99395')">Young Adult (18-39 years)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99386', '99396')">Middle Age (40-64 years)</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99387', '99397')">Mature Adult (65+ years)</button>
        </div>
        <div class="well-visit-code-display" id="wellVisitDisplay"></div>
    </div>

    <div class="mdm-grid">
        <!-- Problems Section -->
        <div class="mdm-section">
            <h3>Problems Addressed</h3>
            <p>Select all problems addressed during the encounter</p>
            
            <div class="data-category">
                <div class="data-category-title">Self-Limited/Minor</div>
                <div class="data-item" onclick="toggleDataItem(this, 'self_limited_minor')">
                    <input type="checkbox" id="self_limited_minor">
                    <label class="data-item-label" for="self_limited_minor">Self-limited or minor problem</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Stable Chronic</div>
                <div class="data-item" onclick="toggleDataItem(this, 'stable_chronic')">
                    <input type="checkbox" id="stable_chronic">
                    <label class="data-item-label" for="stable_chronic">Stable chronic illness</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Acute/Chronic</div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_uncomplicated')">
                    <input type="checkbox" id="acute_uncomplicated">
                    <label class="data-item-label" for="acute_uncomplicated">Acute uncomplicated illness/injury</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_complicated')">
                    <input type="checkbox" id="acute_complicated">
                    <label class="data-item-label" for="acute_complicated">Acute illness with systemic symptoms</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'chronic_inadequate_control')">
                    <input type="checkbox" id="chronic_inadequate_control">
                    <label class="data-item-label" for="chronic_inadequate_control">Chronic illness with exacerbation</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High Severity</div>
                <div class="data-item" onclick="toggleDataItem(this, 'undiagnosed_new_problem')">
                    <input type="checkbox" id="undiagnosed_new_problem">
                    <label class="data-item-label" for="undiagnosed_new_problem">Undiagnosed new problem with uncertain prognosis</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_severe')">
                    <input type="checkbox" id="acute_severe">
                    <label class="data-item-label" for="acute_severe">Acute or chronic illness posing threat to life/function</label>
                </div>
            </div>
        </div>

        <!-- Data Section -->
        <div class="mdm-section">
            <h3>Data Reviewed & Analyzed</h3>
            <p>Select data reviewed and ordered (Category 1 items require quantity)</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_data')">
                    <input type="checkbox" id="minimal_data">
                    <label class="data-item-label" for="minimal_data">Minimal or none</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 1: Tests/Documents</div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_external_notes')">
                    <input type="checkbox" id="review_external_notes">
                    <label class="data-item-label" for="review_external_notes">Review external notes/records</label>
                    <div class="quantity-input-container" id="qty_review_external_notes">
                        <div class="quantity-label">Number of unique sources:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_external_notes', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_test_results')">
                    <input type="checkbox" id="review_test_results">
                    <label class="data-item-label" for="review_test_results">Review test results</label>
                    <div class="quantity-input-container" id="qty_review_test_results">
                        <div class="quantity-label">Number of unique tests:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_test_results', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'order_test')">
                    <input type="checkbox" id="order_test">
                    <label class="data-item-label" for="order_test">Order tests</label>
                    <div class="quantity-input-container" id="qty_order_test">
                        <div class="quantity-label">Number of unique tests:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('order_test', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_historian')">
                    <input type="checkbox" id="independent_historian">
                    <label class="data-item-label" for="independent_historian">Assessment requiring independent historian</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 2: Independent Interpretation</div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_interpretation')">
                    <input type="checkbox" id="independent_interpretation">
                    <label class="data-item-label" for="independent_interpretation">Independent interpretation of tests</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'discussion_management')">
                    <input type="checkbox" id="discussion_management">
                    <label class="data-item-label" for="discussion_management">Discussion of management with external provider</label>
                </div>
            </div>
        </div>

        <!-- Risk Section -->
        <div class="mdm-section">
            <h3>Risk of Complications</h3>
            <p>Select the highest applicable risk factor</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_risk')">
                    <input type="checkbox" id="minimal_risk">
                    <label class="data-item-label" for="minimal_risk">Minimal risk of complications</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Low Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'otc_rx')">
                    <input type="checkbox" id="otc_rx">
                    <label class="data-item-label" for="otc_rx">OTC drugs / Minor surgery with no risk factors</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Moderate Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'prescription_rx')">
                    <input type="checkbox" id="prescription_rx">
                    <label class="data-item-label" for="prescription_rx">Prescription drug management</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_minor_surgery')">
                    <input type="checkbox" id="decision_minor_surgery">
                    <label class="data-item-label" for="decision_minor_surgery">Decision for minor surgery with risk factors</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'diagnosis_with_treatment')">
                    <input type="checkbox" id="diagnosis_with_treatment">
                    <label class="data-item-label" for="diagnosis_with_treatment">Diagnosis/treatment significantly limited by social determinants</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'drug_therapy_hazard')">
                    <input type="checkbox" id="drug_therapy_hazard">
                    <label class="data-item-label" for="drug_therapy_hazard">Drug therapy requiring intensive monitoring</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_emergency_surgery')">
                    <input type="checkbox" id="decision_emergency_surgery">
                    <label class="data-item-label" for="decision_emergency_surgery">Decision for emergency major surgery</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_not_to_resuscitate')">
                    <input type="checkbox" id="decision_not_to_resuscitate">
                    <label class="data-item-label" for="decision_not_to_resuscitate">Decision not to resuscitate due to poor prognosis</label>
                </div>
            </div>
        </div>
    </div>

    <div class="time-based-section">
        <h2>⏱️ Time-Based Coding (Optional Alternative)</h2>
        <div class="time-input-container">
            <label for="totalTime">Total time on date of encounter (includes non-face-to-face work)</label>
            <input type="number" id="totalTime" placeholder="Minutes" min="0" onchange="updateTime()">
        </div>
        <div class="time-based-display" id="timeBasedDisplay"></div>
    </div>

    <div class="output-section" id="outputSection">
        <div class="output-header">
            <h2>📋 Calculated E/M Code</h2>
            <div class="output-actions">
                <button class="btn btn-primary" onclick="copyToClipboard()">📋 Copy to Clipboard</button>
                <button class="btn btn-secondary" onclick="resetAll()">🔄 Reset All</button>
            </div>
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
        problems: [],
        data: [],
        risk: [],
        totalTime: null,
        dataQuantities: {
            review_external_notes: 0,
            review_test_results: 0,
            order_test: 0
        }
    };

    // CPT code mappings
    const codeMappings = {
        'new': {
            0: '99202',      // Straightforward
            1: '99203',      // Low
            2: '99204',      // Moderate
            3: '99205'       // High
        },
        'established': {
            0: '99211',      // Minimal (nurse visit)
            1: '99212',      // Straightforward
            2: '99213',      // Low
            3: '99214',      // Moderate
            4: '99215'       // High
        }
    };

    // Time-based code ranges
    const timeRanges = {
        'new': [
            { min: 15, max: 29, code: '99202', range: '15-29 min' },
            { min: 30, max: 44, code: '99203', range: '30-44 min' },
            { min: 45, max: 59, code: '99204', range: '45-59 min' },
            { min: 60, max: Infinity, code: '99205', range: '60+ min' }
        ],
        'established': [
            { min: 10, max: 19, code: '99212', range: '10-19 min' },
            { min: 20, max: 29, code: '99213', range: '20-29 min' },
            { min: 30, max: 39, code: '99214', range: '30-39 min' },
            { min: 40, max: Infinity, code: '99215', range: '40+ min' }
        ]
    };

    // Data descriptions for output
    const dataDescriptions = {
        'minimal_data': 'Minimal or no data',
        'review_external_notes': 'Review of external notes/records',
        'review_test_results': 'Review of test results',
        'order_test': 'Ordering tests',
        'independent_historian': 'Assessment requiring independent historian',
        'independent_interpretation': 'Independent interpretation of tests',
        'discussion_management': 'Discussion with external provider'
    };

    function toggleInstructions() {
        const content = document.getElementById('instructionsContent');
        const btn = document.querySelector('.toggle-instructions');
        
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            btn.textContent = 'Show Instructions';
        } else {
            content.classList.add('show');
            btn.textContent = 'Hide Instructions';
        }
    }

    function selectPatientType(type) {
        state.patientType = type;
        
        // Update button states
        document.querySelectorAll('.patient-type-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Reset well visit code
        state.wellVisitCode = null;
        document.querySelectorAll('.well-visit-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('wellVisitDisplay').classList.remove('show');
        
        updateOutput();
    }

    function selectWellVisit(newCode, establishedCode) {
        if (!state.patientType) {
            alert('Please select patient type first');
            return;
        }
        
        const code = state.patientType === 'new' ? newCode : establishedCode;
        
        // Toggle selection
        if (state.wellVisitCode === code) {
            state.wellVisitCode = null;
            event.target.classList.remove('active');
            document.getElementById('wellVisitDisplay').classList.remove('show');
        } else {
            state.wellVisitCode = code;
            
            // Update button states
            document.querySelectorAll('.well-visit-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Show code
            const display = document.getElementById('wellVisitDisplay');
            display.textContent = `Selected: ${code}`;
            display.classList.add('show');
        }
        
        updateOutput();
    }

    function toggleDataItem(element, itemId) {
        const checkbox = element.querySelector('input[type="checkbox"]');
        const wasChecked = checkbox.checked;
        
        // Toggle checkbox
        checkbox.checked = !wasChecked;
        
        // Toggle visual state
        if (checkbox.checked) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
        
        // Update state based on section
        if (['self_limited_minor', 'stable_chronic', 'acute_uncomplicated', 'acute_complicated', 
             'chronic_inadequate_control', 'undiagnosed_new_problem', 'acute_severe'].includes(itemId)) {
            // Problems section
            if (checkbox.checked) {
                if (!state.problems.includes(itemId)) {
                    state.problems.push(itemId);
                }
            } else {
                state.problems = state.problems.filter(p => p !== itemId);
            }
        } else if (['minimal_data', 'review_external_notes', 'review_test_results', 'order_test', 
                    'independent_historian', 'independent_interpretation', 'discussion_management'].includes(itemId)) {
            // Data section
            if (checkbox.checked) {
                if (!state.data.includes(itemId)) {
                    state.data.push(itemId);
                }
                
                // Show quantity input for Category 1 items
                if (['review_external_notes', 'review_test_results', 'order_test'].includes(itemId)) {
                    const qtyContainer = document.getElementById(`qty_${itemId}`);
                    if (qtyContainer) {
                        qtyContainer.classList.add('show');
                    }
                }
            } else {
                state.data = state.data.filter(d => d !== itemId);
                
                // Hide quantity input and reset
                if (['review_external_notes', 'review_test_results', 'order_test'].includes(itemId)) {
                    const qtyContainer = document.getElementById(`qty_${itemId}`);
                    if (qtyContainer) {
                        qtyContainer.classList.remove('show');
                        const input = qtyContainer.querySelector('input');
                        if (input) input.value = 0;
                        state.dataQuantities[itemId] = 0;
                    }
                }
            }
        } else {
            // Risk section
            if (checkbox.checked) {
                if (!state.risk.includes(itemId)) {
                    state.risk.push(itemId);
                }
            } else {
                state.risk = state.risk.filter(r => r !== itemId);
            }
        }
        
        updateOutput();
    }

    function updateQuantity(itemId, value) {
        state.dataQuantities[itemId] = parseInt(value) || 0;
        updateOutput();
    }

    function updateTime() {
        const timeInput = document.getElementById('totalTime');
        state.totalTime = parseInt(timeInput.value) || null;
        updateOutput();
    }

    function getCodeFromTime(minutes, patientType) {
        if (!minutes || !patientType) return null;
        
        const ranges = timeRanges[patientType];
        for (const range of ranges) {
            if (minutes >= range.min && minutes <= range.max) {
                return range;
            }
        }
        return null;
    }

    function calculateProblemLevel() {
        if (state.problems.length === 0) return null;

        // Check for high severity problems
        if (state.problems.includes('undiagnosed_new_problem') || 
            state.problems.includes('acute_severe')) {
            return 3;
        }

        // Check for moderate severity problems
        if (state.problems.includes('acute_uncomplicated') ||
            state.problems.includes('acute_complicated') ||
            state.problems.includes('chronic_inadequate_control')) {
            
            // 1 or more moderate = Moderate complexity
            return 2;
        }

        // Check for stable chronic illness
        if (state.problems.includes('stable_chronic')) {
            // 2+ stable chronic OR 1 stable chronic + other = Low complexity
            if (state.problems.length >= 2) {
                return 1;
            }
            // 1 stable chronic alone = Straightforward
            return 0;
        }

        // Self-limited or minor
        if (state.problems.includes('self_limited_minor')) {
            return 0;
        }

        return null;
    }

    function calculateRiskLevel() {
        if (state.risk.length === 0) return null;

        // High risk
        if (state.risk.includes('drug_therapy_hazard') ||
            state.risk.includes('decision_emergency_surgery') ||
            state.risk.includes('decision_not_to_resuscitate')) {
            return 3;
        }

        // Moderate risk
        if (state.risk.includes('prescription_rx') ||
            state.risk.includes('decision_minor_surgery') ||
            state.risk.includes('diagnosis_with_treatment')) {
            return 2;
        }

        // Low risk
        if (state.risk.includes('otc_rx')) {
            return 1;
        }

        // Minimal risk
        if (state.risk.includes('minimal_risk')) {
            return 0;
        }

        return null;
    }

    function calculateDataLevel() {
        if (state.data.length === 0) return null;

        // Check for minimal/none selection
        if (state.data.includes('minimal_data')) {
            return 0;
        }

        // Category 2: Independent interpretation OR discussion with external provider
        const hasCategory2 = state.data.includes('independent_interpretation') || 
                            state.data.includes('discussion_management');

        // Category 1: Count unique sources
        const category1Items = ['review_external_notes', 'review_test_results', 'order_test'];
        let category1Count = 0;
        
        category1Items.forEach(item => {
            if (state.data.includes(item)) {
                const qty = state.dataQuantities[item] || 0;
                category1Count += qty;
            }
        });
        
        // Add independent historian as 1 count if selected
        if (state.data.includes('independent_historian')) {
            category1Count += 1;
        }

        // Extensive (High): 3 from Category 1 OR (2 from Cat 1 + 2 from Cat 2)
        if (category1Count >= 3) {
            return 3;
        }
        
        // Check if both Category 2 items are selected
        const hasBothCategory2 = state.data.includes('independent_interpretation') && 
                                state.data.includes('discussion_management');
        
        if (category1Count >= 2 && hasBothCategory2) {
            return 3;
        }

        // Moderate: 2 from Cat 1 + any 1 from Cat 2
        if (category1Count >= 2 && hasCategory2) {
            return 2;
        }

        // Limited (Low): 2 elements from Category 1 alone
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
