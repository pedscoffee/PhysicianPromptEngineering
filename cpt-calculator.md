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
        font-weight: 600;
        color: #0088bb;
        font-size: 0.85em;
        margin-bottom: 6px;
        padding-bottom: 3px;
        border-bottom: 2px solid #e8ecef;
    }

    .data-item {
        background: #f8f9fa;
        padding: 10px;
        margin: 4px 0;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;
        border: 2px solid transparent;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        user-select: none;
    }
    }

    .data-item:hover {
        background: #e3f2fd;
        border-color: #b0e0e6;
        transform: translateX(3px);
    }

    .data-item.selected {
        background: linear-gradient(135deg, rgba(0, 136, 187, 0.15) 0%, rgba(0, 168, 216, 0.15) 100%);
        border-color: #0088bb;
    }

    .data-item input[type="checkbox"] {
        margin-top: 2px;
        cursor: pointer;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }

    .data-item-label {
        cursor: pointer;
        font-size: 0.9em;
        line-height: 1.4;
        flex: 1;
        padding: 2px 0;
        user-select: none;
    }

    .quantity-input-container {
        display: none;
        margin-top: 8px;
        padding: 8px;
        background: white;
        border-radius: 4px;
        border: 1px solid #ddd;
        width: 100%;
    }

    .quantity-input-container.show {
        display: block;
    }

    .quantity-label {
        font-size: 0.8em;
        color: #666;
        margin-bottom: 4px;
    }

    .quantity-input {
        width: 80px;
        padding: 4px 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 0.9em;
    }

    .time-based-section {
        background: linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 193, 7, 0.08) 100%);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 15px;
        border: 2px solid #ff9800;
    }

    .time-based-section h2 {
        color: #e65100;
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.05em;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .time-input-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .time-input-container label {
        font-size: 0.9em;
        color: #666;
        font-weight: 500;
    }

    .time-input-container input {
        padding: 8px 12px;
        border: 2px solid #ffb74d;
        border-radius: 6px;
        font-size: 0.95em;
        width: 200px;
    }

    .time-based-display {
        margin-top: 10px;
        padding: 10px;
        background: white;
        border: 2px solid #ff9800;
        border-radius: 6px;
        font-weight: 600;
        color: #e65100;
        display: none;
    }

    .time-based-display.show {
        display: block;
    }

    .output-section {
        background: white;
        border-radius: 8px;
        padding: 15px;
        margin-top: 15px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
        margin-bottom: 15px;
        flex-wrap: wrap;
        gap: 10px;
    }

    .output-header h2 {
        color: #006b94;
        margin: 0;
        font-size: 1.2em;
    }

    .output-actions {
        display: flex;
        gap: 10px;
    }

    .btn {
        padding: 8px 16px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.9em;
        transition: all 0.3s;
    }

    .btn-primary {
        background: linear-gradient(135deg, #0088bb 0%, #006b94 100%);
        color: white;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 136, 187, 0.4);
    }

    .btn-secondary {
        background: #6c757d;
        color: white;
    }

    .btn-secondary:hover {
        background: #5a6268;
        transform: translateY(-2px);
    }

    .output-content {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
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
        
        .well-visit-buttons {
            justify-content: center;
        }
    }

    @media (min-width: 1025px) {
        .well-visit-buttons {
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        
        .well-visit-btn {
            flex: 1 1 auto;
            white-space: nowrap;
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
        <button class="patient-type-btn active" onclick="selectPatientType('established')">Established Patient</button>
    </div>

    <div class="mdm-grid">
        <div class="mdm-section">
            <h3>Number and Complexity of Problems Addressed</h3>
            <p>Select all that apply for this encounter</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal (Straightforward)</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_problem')">
                    <input type="checkbox" id="minimal_problem">
                    <label class="data-item-label" for="minimal_problem">1 self-limited or minor problem</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Low</div>
                <div class="data-item" onclick="toggleDataItem(this, 'two_or_more_self_limited')">
                    <input type="checkbox" id="two_or_more_self_limited">
                    <label class="data-item-label" for="two_or_more_self_limited">2 or more self-limited or minor problems</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'stable_chronic_illness')">
                    <input type="checkbox" id="stable_chronic_illness">
                    <label class="data-item-label" for="stable_chronic_illness">1 stable chronic illness</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_uncomplicated')">
                    <input type="checkbox" id="acute_uncomplicated">
                    <label class="data-item-label" for="acute_uncomplicated">1 acute, uncomplicated illness or injury</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Moderate</div>
                <div class="data-item" onclick="toggleDataItem(this, 'chronic_with_exacerbation')">
                    <input type="checkbox" id="chronic_with_exacerbation">
                    <label class="data-item-label" for="chronic_with_exacerbation">1 or more chronic illnesses with exacerbation, progression, or side effects of treatment</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'two_or_more_stable_chronic')">
                    <input type="checkbox" id="two_or_more_stable_chronic">
                    <label class="data-item-label" for="two_or_more_stable_chronic">2 or more stable chronic illnesses</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'undiagnosed_new_problem')">
                    <input type="checkbox" id="undiagnosed_new_problem">
                    <label class="data-item-label" for="undiagnosed_new_problem">1 undiagnosed new problem with uncertain prognosis</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_illness_systemic')">
                    <input type="checkbox" id="acute_illness_systemic">
                    <label class="data-item-label" for="acute_illness_systemic">1 acute illness with systemic symptoms</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_complicated_injury')">
                    <input type="checkbox" id="acute_complicated_injury">
                    <label class="data-item-label" for="acute_complicated_injury">1 acute complicated injury</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High</div>
                <div class="data-item" onclick="toggleDataItem(this, 'chronic_severe_exacerbation')">
                    <input type="checkbox" id="chronic_severe_exacerbation">
                    <label class="data-item-label" for="chronic_severe_exacerbation">1 or more chronic illnesses with severe exacerbation, progression, or side effects of treatment</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'acute_chronic_threat')">
                    <input type="checkbox" id="acute_chronic_threat">
                    <label class="data-item-label" for="acute_chronic_threat">1 acute or chronic illness or injury that poses a threat to life or bodily function</label>
                </div>
            </div>
        </div>

        <div class="mdm-section">
            <h3>Amount and/or Complexity of Data to be Reviewed and Analyzed</h3>
            <p>Select all that apply (each unique test, order, or document counts as 1)</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal or None</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_data')">
                    <input type="checkbox" id="minimal_data">
                    <label class="data-item-label" for="minimal_data">Minimal or none</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 1: Tests, Documents, or Independent Historian(s)</div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_external_notes')">
                    <input type="checkbox" id="review_external_notes">
                    <label class="data-item-label" for="review_external_notes">Review of prior external note(s) from each unique source</label>
                    <div class="quantity-input-container" id="qty_review_external_notes">
                        <div class="quantity-label">Number of unique sources:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_external_notes', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'review_test_results')">
                    <input type="checkbox" id="review_test_results">
                    <label class="data-item-label" for="review_test_results">Review of the result(s) of each unique test</label>
                    <div class="quantity-input-container" id="qty_review_test_results">
                        <div class="quantity-label">Number of unique tests:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('review_test_results', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'order_test')">
                    <input type="checkbox" id="order_test">
                    <label class="data-item-label" for="order_test">Ordering of each unique test</label>
                    <div class="quantity-input-container" id="qty_order_test">
                        <div class="quantity-label">Number of unique tests:</div>
                        <input type="number" class="quantity-input" min="0" value="0" 
                               onchange="updateQuantity('order_test', this.value)"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_historian')">
                    <input type="checkbox" id="independent_historian">
                    <label class="data-item-label" for="independent_historian">Assessment requiring an independent historian(s)</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 2: Independent Interpretation of Tests</div>
                <div class="data-item" onclick="toggleDataItem(this, 'independent_interpretation')">
                    <input type="checkbox" id="independent_interpretation">
                    <label class="data-item-label" for="independent_interpretation">Independent interpretation of a test performed by another physician/other qualified health care professional (not separately reported)</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Category 3: Discussion of Management or Test Interpretation</div>
                <div class="data-item" onclick="toggleDataItem(this, 'discussion_management')">
                    <input type="checkbox" id="discussion_management">
                    <label class="data-item-label" for="discussion_management">Discussion of management or test interpretation with external physician/other qualified health care professional/appropriate source (not separately reported)</label>
                </div>
            </div>
        </div>

        <div class="mdm-section">
            <h3>Risk of Complications and/or Morbidity or Mortality of Patient Management</h3>
            <p>Select the highest applicable risk level</p>
            
            <div class="data-category">
                <div class="data-category-title">Minimal Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'minimal_risk')">
                    <input type="checkbox" id="minimal_risk">
                    <label class="data-item-label" for="minimal_risk">Minimal risk of morbidity from additional diagnostic testing or treatment</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Low Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'low_risk')">
                    <input type="checkbox" id="low_risk">
                    <label class="data-item-label" for="low_risk">Low risk of morbidity from additional diagnostic testing or treatment</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">Moderate Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'prescription_drug_mgmt')">
                    <input type="checkbox" id="prescription_drug_mgmt">
                    <label class="data-item-label" for="prescription_drug_mgmt">Prescription drug management</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_minor_surgery_risk')">
                    <input type="checkbox" id="decision_minor_surgery_risk">
                    <label class="data-item-label" for="decision_minor_surgery_risk">Decision regarding minor surgery with identified patient or procedure risk factors</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_elective_major_no_risk')">
                    <input type="checkbox" id="decision_elective_major_no_risk">
                    <label class="data-item-label" for="decision_elective_major_no_risk">Decision regarding elective major surgery without identified patient or procedure risk factors</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'diagnosis_limited_sdoh')">
                    <input type="checkbox" id="diagnosis_limited_sdoh">
                    <label class="data-item-label" for="diagnosis_limited_sdoh">Diagnosis or treatment significantly limited by social determinants of health</label>
                </div>
            </div>

            <div class="data-category">
                <div class="data-category-title">High Risk</div>
                <div class="data-item" onclick="toggleDataItem(this, 'drug_therapy_toxicity')">
                    <input type="checkbox" id="drug_therapy_toxicity">
                    <label class="data-item-label" for="drug_therapy_toxicity">Drug therapy requiring intensive monitoring for toxicity</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_elective_major_risk')">
                    <input type="checkbox" id="decision_elective_major_risk">
                    <label class="data-item-label" for="decision_elective_major_risk">Decision regarding elective major surgery with identified patient or procedure risk factors</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_emergency_surgery')">
                    <input type="checkbox" id="decision_emergency_surgery">
                    <label class="data-item-label" for="decision_emergency_surgery">Decision regarding emergency major surgery</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_hospitalization')">
                    <input type="checkbox" id="decision_hospitalization">
                    <label class="data-item-label" for="decision_hospitalization">Decision regarding hospitalization</label>
                </div>
                <div class="data-item" onclick="toggleDataItem(this, 'decision_dnr_deescalate')">
                    <input type="checkbox" id="decision_dnr_deescalate">
                    <label class="data-item-label" for="decision_dnr_deescalate">Decision not to resuscitate or to de-escalate care because of poor prognosis</label>
                </div>
            </div>
        </div>
    </div>

    <div class="time-based-section">
        <h2> Time-Based Coding (Optional Alternative)</h2>
        <div class="time-input-container">
            <label for="totalTime">Total time on date of encounter (includes non-face-to-face work)</label>
            <input type="number" id="totalTime" placeholder="Minutes" min="0" onchange="updateTime()">
        </div>
        <div class="time-based-display" id="timeBasedDisplay"></div>
    </div>

    <div class="well-visit-section">
        <h2> Preventive Well Visit (Optional)</h2>
        <div class="well-visit-buttons">
            <button class="well-visit-btn" onclick="selectWellVisit('99381', '99391')">Under 1 year</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99382', '99392')">1-4 years</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99383', '99393')">5-11 years</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99384', '99394')">12-17 years</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99385', '99395')">18-39 years</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99386', '99396')">40-64 years</button>
            <button class="well-visit-btn" onclick="selectWellVisit('99387', '99397')">65+ years</button>
        </div>
        <div class="well-visit-code-display" id="wellVisitDisplay"></div>
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

    // CPT code mappings - Straightforward (0), Low (1), Moderate (2), High (3)
    const codeMappings = {
        new: {
            0: '99202',      // Straightforward
            1: '99203',      // Low
            2: '99204',      // Moderate
            3: '99205'       // High
        },
        established: {
            0: '99212',      // Straightforward
            1: '99213',      // Low
            2: '99214',      // Moderate
            3: '99215'       // High
        }
    };

    // Time-based code ranges
    const timeRanges = {
        new: [
            { min: 15, max: 29, code: '99202', range: '15-29 min' },
            { min: 30, max: 44, code: '99203', range: '30-44 min' },
            { min: 45, max: 59, code: '99204', range: '45-59 min' },
            { min: 60, max: 74, code: '99205', range: '60-74 min' },
            { min: 75, max: 999, code: '99205 + prolonged services', range: '75+ min' }
        ],
        established: [
            { min: 10, max: 19, code: '99212', range: '10-19 min' },
            { min: 20, max: 29, code: '99213', range: '20-29 min' },
            { min: 30, max: 39, code: '99214', range: '30-39 min' },
            { min: 40, max: 54, code: '99215', range: '40-54 min' },
            { min: 55, max: 999, code: '99215 + prolonged services', range: '55+ min' }
        ]
    };

    // Data descriptions for output
    const dataDescriptions = {
        'minimal_data': 'Minimal or none',
        'review_external_notes': 'Review of prior external note(s) from each unique source',
        'review_test_results': 'Review of the result(s) of each unique test',
        'order_test': 'Ordering of each unique test',
        'independent_historian': 'Assessment requiring an independent historian(s)',
        'independent_interpretation': 'Independent interpretation of a test performed by another physician/other qualified health care professional (not separately reported)',
        'discussion_management': 'Discussion of management or test interpretation with external physician/other qualified health care professional/appropriate source (not separately reported)'
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
        // Prevent toggling if event target is the input field in quantity container
        if (event.target.tagName.toLowerCase() === 'input' && event.target.type === 'number') {
            return; 
        }

        const wasChecked = checkbox.checked;
        
        // Toggle checkbox (this is safer than relying on click since the click handler wraps the whole div)
        if (event.target.tagName.toLowerCase() !== 'input') {
            checkbox.checked = !wasChecked;
        } else if (event.target !== checkbox) {
             // If clicked on label/div, the default click on checkbox would handle it, 
             // but we'll do it explicitly for clarity against the number input check above.
             checkbox.checked = !wasChecked;
        }


        // Toggle visual state
        if (checkbox.checked) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
        
        // Update state based on section
        if (['minimal_problem', 'two_or_more_self_limited', 'stable_chronic_illness', 'acute_uncomplicated',
             'chronic_with_exacerbation', 'two_or_more_stable_chronic', 'undiagnosed_new_problem',
             'acute_illness_systemic', 'acute_complicated_injury', 'chronic_severe_exacerbation',
             'acute_chronic_threat'].includes(itemId)) {
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
                // Ensure only one risk item is selected for Minimal/Low/Moderate/High groups
                const categoryTitles = {
                    'minimal_risk': 0,
                    'low_risk': 1,
                    'prescription_drug_mgmt': 2, 'decision_minor_surgery_risk': 2, 'decision_elective_major_no_risk': 2, 'diagnosis_limited_sdoh': 2,
                    'drug_therapy_toxicity': 3, 'decision_elective_major_risk': 3, 'decision_emergency_surgery': 3, 'decision_hospitalization': 3, 'decision_dnr_deescalate': 3
                };
                const currentLevel = categoryTitles[itemId];
                
                // Remove all other selected items at the same level (e.g., if selecting a different Moderate risk item)
                // The risk section is *technically* select the highest applicable risk factor, so we keep them all selected in the state
                // but the final determination should only be based on the *highest* level achieved.
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

        // HIGH - Check first for highest severity
        if (state.problems.includes('chronic_severe_exacerbation') || 
            state.problems.includes('acute_chronic_threat')) {
            return 3;
        }

        // MODERATE - Check for moderate complexity problems
        if (state.problems.includes('chronic_with_exacerbation') ||
            state.problems.includes('two_or_more_stable_chronic') ||
            state.problems.includes('undiagnosed_new_problem') ||
            state.problems.includes('acute_illness_systemic') ||
            state.problems.includes('acute_complicated_injury')) {
            return 2;
        }

        // LOW - Check for low complexity problems
        if (state.problems.includes('two_or_more_self_limited') ||
            state.problems.includes('stable_chronic_illness') ||
            state.problems.includes('acute_uncomplicated')) {
            return 1;
        }

        // STRAIGHTFORWARD/MINIMAL - 1 self-limited or minor
        if (state.problems.includes('minimal_problem')) {
            return 0;
        }

        return null;
    }

    function calculateRiskLevel() {
        if (state.risk.length === 0) return null;

        // HIGH risk - Check first for highest risk
        if (state.risk.includes('drug_therapy_toxicity') ||
            state.risk.includes('decision_elective_major_risk') ||
            state.risk.includes('decision_emergency_surgery') ||
            state.risk.includes('decision_hospitalization') ||
            state.risk.includes('decision_dnr_deescalate')) {
            return 3;
        }

        // MODERATE risk
        if (state.risk.includes('prescription_drug_mgmt') ||
            state.risk.includes('decision_minor_surgery_risk') ||
            state.risk.includes('decision_elective_major_no_risk') ||
            state.risk.includes('diagnosis_limited_sdoh')) {
            return 2;
        }

        // LOW risk
        if (state.risk.includes('low_risk')) {
            return 1;
        }

        // MINIMAL risk
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

        // Count Category 1 items (each unique test, order, or document counts)
        let category1Count = 0;
        
        // Count quantified items
        const category1Items = ['review_external_notes', 'review_test_results', 'order_test'];
        category1Items.forEach(item => {
            if (state.data.includes(item)) {
                const qty = state.dataQuantities[item] || 0;
                category1Count += qty;
            }
        });
        
        // Check for independent historian
        const hasIndependentHistorian = state.data.includes('independent_historian');

        // Check Category 2 and 3
        const hasCategory2 = state.data.includes('independent_interpretation');
        const hasCategory3 = state.data.includes('discussion_management');

        // --- HIGH/EXTENSIVE (Level 3) ---
        // Must meet at least 2 out of 3 categories: 
        // 1. Cat 1: Any combination of 3 from Category 1 items *including* the independent historian
        // 2. Cat 2: Independent interpretation
        // 3. Cat 3: Discussion of management
        
        let highCategoriesMet = 0;
        // Count for Cat 1 at the High level (3+ items)
        let cat1HighCount = category1Count;
        if (hasIndependentHistorian) {
            cat1HighCount += 1; // Independent Historian counts as 1 for Cat 1
        }
        
        if (cat1HighCount >= 3) highCategoriesMet++;
        if (hasCategory2) highCategoriesMet++;
        if (hasCategory3) highCategoriesMet++;
        
        if (highCategoriesMet >= 2) {
            return 3; // HIGH/EXTENSIVE
        }
        
        // --- MODERATE (Level 2) ---
        // Must meet at least 1 out of 3 categories: (3+ Cat 1 items, Cat 2, Cat 3)
        // We can reuse the highCategoriesMet calculation but check for 1
        if (highCategoriesMet >= 1) {
            return 2; // MODERATE
        }

        // --- LOW/LIMITED (Level 1) ---
        // Must meet requirements of at least 1 of 2 categories: 
        // 1. Cat 1: Any combination of 2 from Category 1 items (excluding independent historian)
        // 2. Cat 2: Assessment requiring independent historian(s)
        
        // Note: The logic for Cat 1 (2 from Cat 1 items) should probably use the non-historian count.
        // Let's use the actual items that meet the Low criteria:
        // Cat 1 (2 items): review_external_notes, review_test_results, order_test
        
        let cat1LowCount = category1Count; // This already has the count of non-historian items
        
        if (cat1LowCount >= 2) {
            return 1; // LOW/LIMITED
        }

        if (hasIndependentHistorian) {
            return 1; // LOW/LIMITED (Independent historian is also sufficient for low level data)
        }


        // If we haven't met any of the above criteria, it's MINIMAL/STRAIGHTFORWARD
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

        validLevels.forEach(level => {
            counts[level]++;
        });

        // The E/M level is based on the lowest two required components 
        // (Problems, Data, Risk). The lowest level that is met by 2 of the 3 
        // components determines the final MDM level.
        
        // Simplified "2 of 3" rule: If two components are at level X or higher, the MDM is level X.
        // We find the lowest level (0-3) for which at least two components meet that level.
        
        // Sort the valid levels in ascending order
        const sortedLevels = validLevels.sort((a, b) => a - b);
        
        // The middle value in a set of three represents the level that has been met by 
        // at least two components. (e.g., [1, 2, 3] -> 2. [2, 2, 3] -> 2. [1, 1, 3] -> 1)
        if (sortedLevels.length === 3) {
            return sortedLevels[1]; 
        }
        
        // If only two components are valid, the lowest of the two determines the level
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
        // Only show output if patient type is selected
        if (!state.patientType) {
            document.getElementById('outputSection').classList.remove('show');
            return;
        }

        // Check if we have a well visit OR complete E/M data OR time-based data
        const hasWellVisit = state.wellVisitCode !== null;
        const problemLevel = calculateProblemLevel();
        const riskLevel = calculateRiskLevel();
        
        // We only need 2 of 3 to determine the MDM level, but for a "complete" E/M data set
        // we require at least Problems and Risk as they are always required if not doing time.
        // Data can be Minimal/None (Level 0), so we check if problems/risk are selected.
        const hasSelectedMDM = state.problems.length > 0 || state.data.length > 0 || state.risk.length > 0;
        const hasCompleteEMData = problemLevel !== null && riskLevel !== null;

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

        // Calculate MDM levels
        const problemLevel = calculateProblemLevel();
        const dataLevel = calculateDataLevel();
        const riskLevel = calculateRiskLevel();

        // Determine final MDM code
        let mdmCode = null;
        let finalLevel = null;
        if (problemLevel !== null || dataLevel !== null || riskLevel !== null) {
            const levels = [problemLevel, dataLevel, riskLevel].filter(l => l !== null);
            if (levels.length >= 2) {
                finalLevel = determine2of3Level([problemLevel, dataLevel, riskLevel]);
                mdmCode = codeMappings[state.patientType][finalLevel];
            } else if (levels.length === 1) {
                // If only one component is met, the code defaults to the lowest billable code (99202/99212)
                finalLevel = 0;
                mdmCode = codeMappings[state.patientType][0];
            }
        }

        // Determine time-based code
        const timeCodeData = getCodeFromTime(state.totalTime, state.patientType);
        const timeCode = timeCodeData ? timeCodeData.code : null;
        const timeLevel = timeCode ? Object.keys(codeMappings[state.patientType]).find(key => codeMappings[state.patientType][key] === timeCode.replace('-25','')) : null;

        // Determine the highest code (or use time-based if MDM is incomplete)
        let finalEMCode = null;
        let finalCodingBasis = 'Incomplete Data';

        // Convert MDM code to a comparable value (0-3)
        const mdmLevel = mdmCode ? Object.keys(codeMappings[state.patientType]).find(key => codeMappings[state.patientType][key] === mdmCode) : -1;
        
        // Convert time code to a comparable value (0-3 or 4 for prolonged)
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
                 finalCodingBasis = 'Time-Based (Higher Level)';
             } else {
                 finalEMCode = mdmCode;
                 finalCodingBasis = 'MDM-Based (Higher or Equal Level)';
             }
        } else if (mdmCode) {
             finalEMCode = mdmCode;
             finalCodingBasis = 'MDM-Based';
        } else if (timeCode) {
             finalEMCode = timeCode;
             finalCodingBasis = 'Time-Based (MDM Incomplete)';
        }
        
        // Apply modifier 25 if well visit is also selected and an E/M code was generated
        if (state.wellVisitCode && finalEMCode && !finalEMCode.includes('-25')) {
             finalEMCode += '-25';
        }

        // --- Generate Output String ---
        
        if (state.wellVisitCode) {
            output += `PREVENTIVE WELL VISIT: ${state.wellVisitCode}\n`;
            if (finalEMCode) {
                 output += `E/M CODE: ${finalEMCode}\n`;
            }
        } else if (finalEMCode) {
            output += `E/M CODE: ${finalEMCode}\n`;
        } else {
            // Handle case where no billable code is met (e.g., time too low, or only one MDM component selected)
            output += `NO BILLABLE E/M CODE GENERATED\n`;
            output += `Note: Check for minimum time requirements or ensure at least two MDM components are met for MDM-based coding.\n`;
        }

        output += `\n`;
        output += `CODING BASIS: ${finalCodingBasis}\n`;
        output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        // MDM Details
        output += `MEDICAL DECISION MAKING DETAILS\n`;
        output += `-------------------------------------------------------------\n`;

        // Problems
        output += `Problems Addressed: ${getLevelName(problemLevel)}\n`;
        state.problems.forEach(problem => {
            const displayText = document.querySelector(`label[for="${problem}"]`).textContent;
            output += `• ${displayText}\n`;
        });
        output += `\n`;

        // Data
        output += `Data Reviewed and Analyzed: ${getLevelName(dataLevel)}\n`;
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
        output += `\n`;

        // Risk
        output += `Risk of Complications: ${getLevelName(riskLevel)}\n`;
        state.risk.forEach(riskItem => {
            const displayText = document.querySelector(`label[for="${riskItem}"]`).textContent;
            output += `• ${displayText}\n`;
        });
        output += `\n`;

        if (finalLevel !== null) {
            output += `2 of 3 Rule Applied:\n`;
            output += `Problems: ${getLevelName(problemLevel)} | Data: ${getLevelName(dataLevel)} | Risk: ${getLevelName(riskLevel)}\n`;
            output += `Final MDM Level: ${getLevelName(finalLevel)} (${codeMappings[state.patientType][finalLevel]})\n`;
        }

        // Time Details
        if (state.totalTime !== null) {
            output += `\n`;
            output += `TIME-BASED CODING DETAILS\n`;
            output += `-------------------------------------------------------------\n`;
            output += `Total Time: ${state.totalTime} minutes\n`;
            if (timeCodeData) {
                output += `Code by Time: ${timeCodeData.code} (${timeCodeData.range})\n`;
            } else {
                output += `Time does not meet minimum requirements for billing.\n`;
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

        // Uncheck all inputs
        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
        document.getElementById('totalTime').value = '';

        // Remove active classes and set established as default
        document.querySelectorAll('.patient-type-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.patient-type-btn')[1].classList.add('active'); // Established patient is second button
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