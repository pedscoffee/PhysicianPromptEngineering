---
layout: page
title: CPT E/M Code Calculator (Compact)
permalink: /cpt-calculator-compact/
description: Compact CPT E/M billing code calculator - fits on half screen
---

<style>
    .wrapper {
        max-width: 100%;
    }

    .calculator-container {
        max-width: 760px;
        margin: 0;
        padding: 8px;
        font-size: 0.85em;
    }

    .page-header {
        text-align: center;
        margin-bottom: 8px;
    }

    .page-header h1 {
        color: #2c3e50;
        font-size: 1.2em;
        margin-bottom: 2px;
    }

    .page-subtitle {
        color: #7f8c8d;
        font-size: 0.75em;
        font-weight: 300;
    }

    .instructions-container {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        border-radius: 4px;
        padding: 6px 10px;
        margin-bottom: 8px;
        color: white;
        box-shadow: 0 1px 4px rgba(0, 136, 187, 0.3);
    }

    .instructions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .instructions-header h2 {
        color: white;
        margin: 0;
        font-size: 0.9em;
    }

    .toggle-instructions {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 3px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
        font-size: 0.75em;
    }

    .toggle-instructions:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .instructions-content {
        display: none;
        font-size: 0.8em;
        margin-top: 6px;
    }

    .instructions-content.show {
        display: block;
    }

    .instructions-content ul {
        margin: 4px 0;
        padding-left: 16px;
    }

    .instructions-content li {
        margin-bottom: 3px;
        line-height: 1.3;
    }

    .patient-type-selector {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-bottom: 8px;
    }

    .patient-type-btn {
        padding: 5px 16px;
        border: 2px solid #0088bb;
        background: white;
        color: #0088bb;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8em;
        font-weight: 600;
        transition: all 0.3s;
    }

    .patient-type-btn:hover {
        transform: translateY(-1px);
    }

    .patient-type-btn.active {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        color: white;
        border-color: #006b94;
    }

    .well-visit-section {
        background: rgba(0, 136, 187, 0.06);
        border-radius: 4px;
        padding: 6px;
        margin-bottom: 8px;
        border: 1px solid #0088bb;
    }

    .well-visit-section h2 {
        color: #006b94;
        margin: 0 0 4px 0;
        font-size: 0.85em;
    }

    .well-visit-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .well-visit-btn {
        padding: 3px 8px;
        border: 1px solid #b0e0e6;
        background: white;
        color: #0088bb;
        border-radius: 3px;
        cursor: pointer;
        font-size: 0.7em;
        font-weight: 600;
        transition: all 0.2s;
    }

    .well-visit-btn:hover {
        border-color: #0088bb;
    }

    .well-visit-btn.active {
        background: #0088bb;
        color: white;
        border-color: #006b94;
    }

    .well-visit-code-display {
        background: white;
        border: 1px solid #0088bb;
        border-radius: 4px;
        padding: 4px;
        text-align: center;
        font-size: 0.8em;
        font-weight: 600;
        color: #006b94;
        margin-top: 4px;
        display: none;
    }

    .well-visit-code-display.show {
        display: block;
    }

    .mdm-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
        margin-bottom: 8px;
    }

    .mdm-section {
        background: white;
        border-radius: 4px;
        padding: 6px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
        border: 1px solid #e8ecef;
    }

    .mdm-section h3 {
        background: linear-gradient(135deg, #0088bb 0%, #00a8d8 100%);
        color: white;
        margin: -6px -6px 6px -6px;
        padding: 4px 6px;
        border-radius: 4px 4px 0 0;
        font-size: 0.75em;
        font-weight: 600;
    }

    .mdm-section > p {
        font-size: 0.65em;
        color: #666;
        margin-bottom: 4px;
    }

    .data-category {
        margin-bottom: 6px;
    }

    .data-category-title {
        font-weight: 600;
        color: #0088bb;
        font-size: 0.7em;
        margin-bottom: 3px;
        padding-bottom: 2px;
        border-bottom: 1px solid #e8ecef;
    }

    .data-item {
        background: #f8f9fa;
        padding: 4px 6px;
        margin: 2px 0;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid transparent;
        display: flex;
        align-items: flex-start;
        gap: 4px;
    }

    .data-item:hover {
        background: #e3f2fd;
        border-color: #b0e0e6;
    }

    .data-item.selected {
        background: rgba(0, 136, 187, 0.12);
        border-color: #0088bb;
    }

    .data-item input[type="checkbox"] {
        margin-top: 1px;
        cursor: pointer;
        width: 12px;
        height: 12px;
        flex-shrink: 0;
    }

    .data-item-label {
        cursor: pointer;
        font-size: 0.7em;
        line-height: 1.3;
        flex: 1;
        margin: 0;
        padding: 2px 0;
    }

    .quantity-input-container {
        display: none;
        margin-top: 4px;
        padding: 4px;
        background: white;
        border-radius: 3px;
        border: 1px solid #ddd;
        width: 100%;
    }

    .quantity-input-container.show {
        display: block;
    }

    .quantity-label {
        font-size: 0.65em;
        color: #666;
        margin-bottom: 2px;
    }

    .quantity-input {
        width: 50px;
        padding: 2px 4px;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 0.7em;
    }

    .time-based-section {
        background: rgba(255, 152, 0, 0.06);
        border-radius: 4px;
        padding: 6px;
        margin-bottom: 8px;
        border: 1px solid #ff9800;
    }

    .time-based-section h2 {
        color: #e65100;
        margin: 0 0 4px 0;
        font-size: 0.85em;
    }

    .time-input-container {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .time-input-container label {
        font-size: 0.75em;
        color: #666;
        font-weight: 500;
    }

    .time-input-container input {
        padding: 3px 6px;
        border: 1px solid #ffb74d;
        border-radius: 3px;
        font-size: 0.75em;
        width: 80px;
    }

    .time-based-display {
        margin-top: 4px;
        padding: 4px;
        background: white;
        border: 1px solid #ff9800;
        border-radius: 3px;
        font-weight: 600;
        font-size: 0.7em;
        color: #e65100;
        display: none;
    }

    .time-based-display.show {
        display: block;
    }

    .output-section {
        background: white;
        border-radius: 4px;
        padding: 8px;
        margin-top: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 2px solid #0088bb;
        display: none;
    }

    .output-section.show {
        display: block;
    }

    .output-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        gap: 6px;
    }

    .output-header h2 {
        color: #006b94;
        margin: 0;
        font-size: 0.95em;
    }

    .output-actions {
        display: flex;
        gap: 4px;
    }

    .btn {
        padding: 4px 10px;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.7em;
        transition: all 0.2s;
    }

    .btn-primary {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        color: white;
    }

    .btn-primary:hover {
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover {
        background: #5a6268;
    }

    .output-content {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 3px;
        padding: 8px;
        font-family: 'Monaco', 'Courier New', monospace;
        font-size: 0.7em;
        white-space: pre-wrap;
        line-height: 1.4;
        color: #2c3e50;
        max-height: 180px;
        overflow-y: auto;
    }

    .copy-notification {
        position: fixed;
        top: 10px;
        right: 10px;
        background: #28a745;
        color: white;
        padding: 6px 12px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        font-size: 0.75em;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s;
        z-index: 1000;
    }

    .copy-notification.show {
        opacity: 1;
        transform: translateY(0);
    }

    /* Scrollbar styling for compact view */
    .output-content::-webkit-scrollbar {
        width: 6px;
    }

    .output-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }

    .output-content::-webkit-scrollbar-thumb {
        background: #0088bb;
        border-radius: 3px;
    }

    .output-content::-webkit-scrollbar-thumb:hover {
        background: #006b94;
    }
</style>

<div class="calculator-container">
    <div class="page-header">
        <h1>CPT E/M Calculator - Compact</h1>
        <p class="page-subtitle"><a href="https://physicianpromptengineering.com/disclaimer/">Disclaimer</a></p>
    </div>

    <div class="instructions-container">
        <div class="instructions-header">
            <h2>Instructions</h2>
            <button class="toggle-instructions" onclick="toggleInstructions()">Show</button>
        </div>
        <div class="instructions-content" id="instructionsContent">
            <ul>
                <li><strong>1:</strong> Select patient type</li>
                <li><strong>2:</strong> Select well visit if applicable</li>
                <li><strong>3:</strong> Select problems, data, and risk</li>
                <li><strong>4:</strong> Enter time if applicable</li>
            </ul>
        </div>
    </div>

    <div class="patient-type-selector">
        <button class="patient-type-btn" onclick="selectPatientType('new')">New</button>
        <button class="patient-type-btn active" onclick="selectPatientType('established')">Established</button>
    </div>

    <div class="well-visit-section">
        <h2>Well Visit</h2>
        <div class="well-visit-buttons">
            <button class="well-visit-btn" onclick="selectWellVisit('99381', '99391')">< 1y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99382', '99392')">1-4y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99383', '99393')">5-11y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99384', '99394')">12-17y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99385', '99395')">18-39y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99386', '99396')">40-64y</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99387', '99397')">65+y</button>
        </div>
        <div class="well-visit-code-display" id="wellVisitDisplay"></div>
    </div>

    <div class="mdm-grid">
        <div class="mdm-section">
            <h3>Problems</h3>
            <p>Select all that apply</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_problem')">
                    <input type="checkbox" id="minimal_problem">
                    <label class="data-item-label" for="minimal_problem">1 self-limited/minor</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Low</div>
                <div class="data-item" onclick="toggleDataItem(this, 'two_or_more_self_limited')">
                    <input type="checkbox" id="two_or_more_self_limited">
                    <label class="data-item-label" for="two_or_more_self_limited">2+ self-limited/minor</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'stable_chronic_illness')">
                    <input type="checkbox" id="stable_chronic_illness">
                    <label class="data-item-label" for="stable_chronic_illness">1 stable chronic</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_uncomplicated')">
                    <input type="checkbox" id="acute_uncomplicated">
                    <label class="data-item-label" for="acute_uncomplicated">1 acute uncomplicated</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Moderate</div>
                <div class="data-item" onclick="toggleDataItem(this, 'chronic_with_exacerbation')">
                    <input type="checkbox" id="chronic_with_exacerbation">
                    <label class="data-item-label" for="chronic_with_exacerbation">1+ chronic w/ exacerbation</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'two_or_more_stable_chronic')">
                    <input type="checkbox" id="two_or_more_stable_chronic">
                    <label class="data-item-label" for="two_or_more_stable_chronic">2+ stable chronic</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'undiagnosed_new_problem')">
                    <input type="checkbox" id="undiagnosed_new_problem">
                    <label class="data-item-label" for="undiagnosed_new_problem">1 undiagnosed new</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_illness_systemic')">
                    <input type="checkbox" id="acute_illness_systemic">
                    <label class="data-item-label" for="acute_illness_systemic">1 acute w/ systemic sx</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_complicated_injury')">
                    <input type="checkbox" id="acute_complicated_injury">
                    <label class="data-item-label" for="acute_complicated_injury">1 acute complicated</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High</div>
                <div class="data-item" onclick="toggleDataItem(this, 'chronic_severe_exacerbation')">
                    <input type="checkbox" id="chronic_severe_exacerbation">
                    <label class="data-item-label" for="chronic_severe_exacerbation">1+ chronic severe</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_chronic_threat')">
                    <input type="checkbox" id="acute_chronic_threat">
                    <label class="data-item-label" for="acute_chronic_threat">Life/function threat</label>
                </div>
            </div>
        </div>

        <div class="mdm-section">
            <h3>Data</h3>
            <p>Each unique counts as 1</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_data')">
                    <input type="checkbox" id="minimal_data">
                    <label class="data-item-label" for="minimal_data">Minimal/none</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Cat 1</div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_external_notes')">
                    <input type="checkbox" id="review_external_notes">
                    <label class="data-item-label" for="review_external_notes">Review external notes</label>
                    <div class="quantity-input-container" id="qty_review_external_notes">
                        <div class="quantity-label">Qty:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_external_notes', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_test_results')">
                    <input type="checkbox" id="review_test_results">
                    <label class="data-item-label" for="review_test_results">Review test results</label>
                    <div class="quantity-input-container" id="qty_review_test_results">
                        <div class="quantity-label">Qty:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_test_results', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'order_test')">
                    <input type="checkbox" id="order_test">
                    <label class="data-item-label" for="order_test">Order test</label>
                    <div class="quantity-input-container" id="qty_order_test">
                        <div class="quantity-label">Qty:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('order_test', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_historian')">
                    <input type="checkbox" id="independent_historian">
                    <label class="data-item-label" for="independent_historian">Independent historian</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Cat 2</div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_interpretation')">
                    <input type="checkbox" id="independent_interpretation">
                    <label class="data-item-label" for="independent_interpretation">Independent interpret</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Cat 3</div>
                <div class="data-item" onclick="toggleDataItem(this, 'discussion_management')">
                    <input type="checkbox" id="discussion_management">
                    <label class="data-item-label" for="discussion_management">Discussion w/ external</label>
                </div>
            </div>
        </div>

        <div class="mdm-section">
            <h3>Risk</h3>
            <p>Select highest applicable</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_risk')">
                    <input type="checkbox" id="minimal_risk">
                    <label class="data-item-label" for="minimal_risk">Minimal risk</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Low</div>
                <div class="data-item" onclick="toggleDataItem(this, 'low_risk')">
                    <input type="checkbox" id="low_risk">
                    <label class="data-item-label" for="low_risk">Low risk</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Moderate</div>
                <div class="data-item" onclick="toggleDataItem(this, 'prescription_drug_mgmt')">
                    <input type="checkbox" id="prescription_drug_mgmt">
                    <label class="data-item-label" for="prescription_drug_mgmt">Rx drug mgmt</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_minor_surgery_risk')">
                    <input type="checkbox" id="decision_minor_surgery_risk">
                    <label class="data-item-label" for="decision_minor_surgery_risk">Minor surgery w/ risk</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_elective_major_no_risk')">
                    <input type="checkbox" id="decision_elective_major_no_risk">
                    <label class="data-item-label" for="decision_elective_major_no_risk">Elective major no risk</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'diagnosis_limited_sdoh')">
                    <input type="checkbox" id="diagnosis_limited_sdoh">
                    <label class="data-item-label" for="diagnosis_limited_sdoh">Limited by SDOH</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High</div>
                <div class="data-item" onclick="toggleDataItem(this, 'drug_therapy_toxicity')">
                    <input type="checkbox" id="drug_therapy_toxicity">
                    <label class="data-item-label" for="drug_therapy_toxicity">Drug toxicity monitor</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_elective_major_risk')">
                    <input type="checkbox" id="decision_elective_major_risk">
                    <label class="data-item-label" for="decision_elective_major_risk">Elective major w/ risk</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_emergency_surgery')">
                    <input type="checkbox" id="decision_emergency_surgery">
                    <label class="data-item-label" for="decision_emergency_surgery">Emergency surgery</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_hospitalization')">
                    <input type="checkbox" id="decision_hospitalization">
                    <label class="data-item-label" for="decision_hospitalization">Hospitalization</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_dnr_deescalate')">
                    <input type="checkbox" id="decision_dnr_deescalate">
                    <label class="data-item-label" for="decision_dnr_deescalate">DNR/de-escalate</label>
                </div>
            </div>
        </div>
    </div>

    <div class="time-based-section">
        <h2>Time-Based (Optional)</h2>
        <div class="time-input-container">
            <label for="totalTime">Total time (min):</label>
            <input type="number" id="totalTime" placeholder="Min" min="0" onchange="updateTime()">
        </div>
        <div class="time-based-display" id="timeBasedDisplay"></div>
    </div>

    <div class="output-section" id="outputSection">
        <div class="output-header">
            <h2>📋 Result</h2>
            <div class="output-actions">
                <button class="btn btn-primary" onclick="copyToClipboard()">Copy</button>
                <button class="btn btn-secondary" onclick="resetAll()">Reset</button>
            </div>
        </div>
        <div class="output-content" id="outputContent"></div>
    </div>

    <div class="copy-notification" id="copyNotification">✓ Copied!</div>
</div>

<script>
    // State management
    const state = {
        patientType: 'established',
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
        new: { 0: '99202', 1: '99203', 2: '99204', 3: '99205' },
        established: { 0: '99212', 1: '99213', 2: '99214', 3: '99215' }
    };

    // Time-based code ranges
    const timeRanges = {
        new: [
            { min: 15, max: 29, code: '99202', range: '15-29 min' },
            { min: 30, max: 44, code: '99203', range: '30-44 min' },
            { min: 45, max: 59, code: '99204', range: '45-59 min' },
            { min: 60, max: 74, code: '99205', range: '60-74 min' },
            { min: 75, max: 999, code: '99205 + prolonged', range: '75+ min' }
        ],
        established: [
            { min: 10, max: 19, code: '99212', range: '10-19 min' },
            { min: 20, max: 29, code: '99213', range: '20-29 min' },
            { min: 30, max: 39, code: '99214', range: '30-39 min' },
            { min: 40, max: 54, code: '99215', range: '40-54 min' },
            { min: 55, max: 999, code: '99215 + prolonged', range: '55+ min' }
        ]
    };

    // Data descriptions
    const dataDescriptions = {
        'minimal_data': 'Minimal or none',
        'review_external_notes': 'Review external notes',
        'review_test_results': 'Review test results',
        'order_test': 'Order test',
        'independent_historian': 'Independent historian',
        'independent_interpretation': 'Independent interpretation',
        'discussion_management': 'Discussion w/ external'
    };

    function toggleInstructions() {
        const content = document.getElementById('instructionsContent');
        const btn = document.querySelector('.toggle-instructions');
        
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            btn.textContent = 'Show';
        } else {
            content.classList.add('show');
            btn.textContent = 'Hide';
        }
    }

    function selectPatientType(type) {
        state.patientType = type;
        
        document.querySelectorAll('.patient-type-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        state.wellVisitCode = null;
        document.querySelectorAll('.well-visit-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById('wellVisitDisplay').classList.remove('show');
        
        updateOutput();
    }

    function selectWellVisit(newCode, establishedCode) {
        if (!state.patientType) {
            alert('Select patient type first');
            return;
        }
        
        const code = state.patientType === 'new' ? newCode : establishedCode;
        
        if (state.wellVisitCode === code) {
            state.wellVisitCode = null;
            event.target.classList.remove('active');
            document.getElementById('wellVisitDisplay').classList.remove('show');
        } else {
            state.wellVisitCode = code;
            
            document.querySelectorAll('.well-visit-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            const display = document.getElementById('wellVisitDisplay');
            display.textContent = `${code}`;
            display.classList.add('show');
        }
        
        updateOutput();
    }

    function toggleDataItem(element, itemId) {
        const checkbox = element.querySelector('input[type="checkbox"]');
        
        if (event.target.tagName.toLowerCase() === 'input' && event.target.type === 'number') {
            return; 
        }

        const wasChecked = checkbox.checked;
        
        if (event.target.tagName.toLowerCase() !== 'input') {
            checkbox.checked = !wasChecked;
        } else if (event.target !== checkbox) {
             checkbox.checked = !wasChecked;
        }

        if (checkbox.checked) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
        
        // Update state
        if (['minimal_problem', 'two_or_more_self_limited', 'stable_chronic_illness', 'acute_uncomplicated',
             'chronic_with_exacerbation', 'two_or_more_stable_chronic', 'undiagnosed_new_problem',
             'acute_illness_systemic', 'acute_complicated_injury', 'chronic_severe_exacerbation',
             'acute_chronic_threat'].includes(itemId)) {
            if (checkbox.checked) {
                if (!state.problems.includes(itemId)) {
                    state.problems.push(itemId);
                }
            } else {
                state.problems = state.problems.filter(p => p !== itemId);
            }
        } else if (['minimal_data', 'review_external_notes', 'review_test_results', 'order_test', 
                    'independent_historian', 'independent_interpretation', 'discussion_management'].includes(itemId)) {
            if (checkbox.checked) {
                if (!state.data.includes(itemId)) {
                    state.data.push(itemId);
                }
                
                if (['review_external_notes', 'review_test_results', 'order_test'].includes(itemId)) {
                    const qtyContainer = document.getElementById(`qty_${itemId}`);
                    if (qtyContainer) {
                        qtyContainer.classList.add('show');
                    }
                }
            } else {
                state.data = state.data.filter(d => d !== itemId);
                
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

        if (state.problems.includes('chronic_severe_exacerbation') || 
            state.problems.includes('acute_chronic_threat')) {
            return 3;
        }

        if (state.problems.includes('chronic_with_exacerbation') ||
            state.problems.includes('two_or_more_stable_chronic') ||
            state.problems.includes('undiagnosed_new_problem') ||
            state.problems.includes('acute_illness_systemic') ||
            state.problems.includes('acute_complicated_injury')) {
            return 2;
        }

        if (state.problems.includes('two_or_more_self_limited') ||
            state.problems.includes('stable_chronic_illness') ||
            state.problems.includes('acute_uncomplicated')) {
            return 1;
        }

        if (state.problems.includes('minimal_problem')) {
            return 0;
        }

        return null;
    }

    function calculateRiskLevel() {
        if (state.risk.length === 0) return null;

        if (state.risk.includes('drug_therapy_toxicity') ||
            state.risk.includes('decision_elective_major_risk') ||
            state.risk.includes('decision_emergency_surgery') ||
            state.risk.includes('decision_hospitalization') ||
            state.risk.includes('decision_dnr_deescalate')) {
            return 3;
        }

        if (state.risk.includes('prescription_drug_mgmt') ||
            state.risk.includes('decision_minor_surgery_risk') ||
            state.risk.includes('decision_elective_major_no_risk') ||
            state.risk.includes('diagnosis_limited_sdoh')) {
            return 2;
        }

        if (state.risk.includes('low_risk')) {
            return 1;
        }

        if (state.risk.includes('minimal_risk')) {
            return 0;
        }

        return null;
    }

    function calculateDataLevel() {
        if (state.data.length === 0) return null;

        if (state.data.includes('minimal_data')) {
            return 0;
        }

        let category1Count = 0;
        const category1Items = ['review_external_notes', 'review_test_results', 'order_test'];
        category1Items.forEach(item => {
            if (state.data.includes(item)) {
                const qty = state.dataQuantities[item] || 0;
                category1Count += qty;
            }
        });
        
        const hasIndependentHistorian = state.data.includes('independent_historian');
        const hasCategory2 = state.data.includes('independent_interpretation');
        const hasCategory3 = state.data.includes('discussion_management');

        let highCategoriesMet = 0;
        let cat1HighCount = category1Count;
        if (hasIndependentHistorian) {
            cat1HighCount += 1;
        }
        
        if (cat1HighCount >= 3) highCategoriesMet++;
        if (hasCategory2) highCategoriesMet++;
        if (hasCategory3) highCategoriesMet++;
        
        if (highCategoriesMet >= 2) {
            return 3;
        }
        
        if (highCategoriesMet >= 1) {
            return 2;
        }

        let cat1LowCount = category1Count;
        
        if (cat1LowCount >= 2) {
            return 1;
        }

        if (hasIndependentHistorian) {
            return 1;
        }

        return 0;
    }

    function determine2of3Level(levels) {
        const validLevels = levels.filter(l => l !== null);
        
        if (validLevels.length < 2) return null;

        const sortedLevels = validLevels.sort((a, b) => a - b);
        
        if (sortedLevels.length === 3) {
            return sortedLevels[1]; 
        }
        
        if (sortedLevels.length === 2) {
            return sortedLevels[0];
        }

        return null;
    }

    function getLevelName(level) {
        switch(level) {
            case 0: return 'Straightforward';
            case 1: return 'Low';
            case 2: return 'Moderate';
            case 3: return 'High';
            default: return 'N/A';
        }
    }

    function updateOutput() {
        if (!state.patientType) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        const hasWellVisit = state.wellVisitCode !== null;
        const problemLevel = calculateProblemLevel();
        const riskLevel = calculateRiskLevel();
        const hasSelectedMDM = state.problems.length > 0 || state.data.length > 0 || state.risk.length > 0;
        const hasTimeData = state.totalTime !== null && state.totalTime > 0;

        if (!hasWellVisit && !hasSelectedMDM && !hasTimeData) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        generateOutput();
        document.getElementById('outputSection').classList.add('show');
    }

    function generateOutput() {
        let output = '';

        const problemLevel = calculateProblemLevel();
        const dataLevel = calculateDataLevel();
        const riskLevel = calculateRiskLevel();

        let mdmCode = null;
        let finalLevel = null;
        if (problemLevel !== null || dataLevel !== null || riskLevel !== null) {
            const levels = [problemLevel, dataLevel, riskLevel].filter(l => l !== null);
            if (levels.length >= 2) {
                finalLevel = determine2of3Level([problemLevel, dataLevel, riskLevel]);
                mdmCode = codeMappings[state.patientType][finalLevel];
            } else if (levels.length === 1) {
                finalLevel = 0;
                mdmCode = codeMappings[state.patientType][0];
            }
        }

        const timeCodeData = getCodeFromTime(state.totalTime, state.patientType);
        const timeCode = timeCodeData ? timeCodeData.code : null;

        let finalEMCode = null;
        let finalCodingBasis = 'Incomplete Data';

        const mdmLevel = mdmCode ? Object.keys(codeMappings[state.patientType]).find(key => codeMappings[state.patientType][key] === mdmCode) : -1;
        
        let timeLevelValue = -1;
        if (timeCode) {
            if (timeCode.includes('prolonged')) {
                timeLevelValue = 4;
            } else {
                timeLevelValue = Object.keys(codeMappings[state.patientType]).find(key => codeMappings[state.patientType][key] === timeCode) || -1;
            }
        }

        if (mdmCode && timeCode) {
             if (timeLevelValue > mdmLevel) {
                 finalEMCode = timeCode;
                 finalCodingBasis = 'Time-Based (Higher)';
             } else {
                 finalEMCode = mdmCode;
                 finalCodingBasis = 'MDM-Based';
             }
        } else if (mdmCode) {
             finalEMCode = mdmCode;
             finalCodingBasis = 'MDM-Based';
        } else if (timeCode) {
             finalEMCode = timeCode;
             finalCodingBasis = 'Time-Based';
        }
        
        if (state.wellVisitCode && finalEMCode && !finalEMCode.includes('-25')) {
             finalEMCode += '-25';
        }

        if (state.wellVisitCode) {
            output += `WELL VISIT: ${state.wellVisitCode}\n`;
            if (finalEMCode) {
                 output += `E/M CODE: ${finalEMCode}\n`;
            }
        } else if (finalEMCode) {
            output += `E/M CODE: ${finalEMCode}\n`;
        } else {
            output += `NO BILLABLE CODE\n`;
        }

        output += `\nBASIS: ${finalCodingBasis}\n`;
        output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        output += `MDM DETAILS\n`;
        output += `─────────────────────────────\n`;
        output += `Problems: ${getLevelName(problemLevel)}\n`;
        state.problems.forEach(problem => {
            const displayText = document.querySelector(`label[for="${problem}"]`).textContent;
            output += `• ${displayText}\n`;
        });
        output += `\n`;

        output += `Data: ${getLevelName(dataLevel)}\n`;
        state.data.forEach(item => {
            let displayText = dataDescriptions[item];
            if (['review_external_notes', 'review_test_results', 'order_test'].includes(item)) {
                const qty = state.dataQuantities[item];
                if (qty > 0) {
                    displayText += ` (${qty})`;
                }
            }
            output += `• ${displayText}\n`;
        });
        output += `\n`;

        output += `Risk: ${getLevelName(riskLevel)}\n`;
        state.risk.forEach(riskItem => {
            const displayText = document.querySelector(`label[for="${riskItem}"]`).textContent;
            output += `• ${displayText}\n`;
        });
        output += `\n`;

        if (finalLevel !== null) {
            output += `2 of 3: P:${getLevelName(problemLevel)} | D:${getLevelName(dataLevel)} | R:${getLevelName(riskLevel)}\n`;
            output += `Final: ${getLevelName(finalLevel)} (${codeMappings[state.patientType][finalLevel]})\n`;
        }

        if (state.totalTime !== null) {
            output += `\nTIME: ${state.totalTime} min\n`;
            if (timeCodeData) {
                output += `Code: ${timeCodeData.code}\n`;
            }
        }
        
        document.getElementById('outputContent').textContent = output;
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
            display.textContent = `${timeCode.code} (${timeCode.range})`;
            display.classList.add('show');
        } else {
            display.textContent = 'Below minimum time';
            display.classList.add('show');
        }
    }

    function resetAll() {
        state.patientType = 'established';
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

        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
        document.getElementById('totalTime').value = '';

        document.querySelectorAll('.patient-type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.patient-type-btn')[1].classList.add('active');
        document.querySelectorAll('.well-visit-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.data-item').forEach(item => item.classList.remove('selected'));
        document.querySelectorAll('.quantity-input-container').forEach(container => {
            container.classList.remove('show');
        });

        document.getElementById('outputSection').classList.remove('show');
        document.getElementById('timeBasedDisplay').classList.remove('show');
        document.getElementById('wellVisitDisplay').classList.remove('show');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function copyToClipboard() {
        const output = document.getElementById('outputContent').textContent;
        navigator.clipboard.writeText(output).then(() => {
            showCopyNotification();
        }).catch(err => {
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
        }, 2000);
    }
</script>
