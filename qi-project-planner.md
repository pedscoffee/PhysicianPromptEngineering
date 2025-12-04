---
layout: page
title: QI Project Planner
permalink: /qi-project-planner/
description: A step-by-step guide to planning your Quality Improvement project using IHI methodology.
---

<style>
    /* Hero Section - Consistent with Tracker */
    .hero {
        background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #0369a1;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #0284c7;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    /* Wizard Styles */
    .wizard-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .step-indicator {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        position: relative;
    }

    .step-indicator::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 2px;
        background: #e1e8ed;
        z-index: 0;
        transform: translateY(-50%);
    }

    .step {
        position: relative;
        z-index: 1;
        background: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #e1e8ed;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #7f8c8d;
        transition: all 0.3s;
    }

    .step.active {
        border-color: #0088bb;
        background: #0088bb;
        color: white;
    }

    .step.completed {
        border-color: #27ae60;
        background: #27ae60;
        color: white;
    }

    .step-label {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.5rem;
        font-size: 0.8rem;
        white-space: nowrap;
        color: #7f8c8d;
    }

    .wizard-step {
        display: none;
        animation: fadeIn 0.5s;
    }

    .wizard-step.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .card {
        background: white;
        border: 2px solid #e1e8ed;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
    }

    .form-hint {
        font-size: 0.9rem;
        color: #7f8c8d;
        margin-bottom: 0.5rem;
    }

    .form-input, textarea, select {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e1e8ed;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
    }

    .form-input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #0088bb;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }

    .btn-primary { background: #0088bb; color: white; }
    .btn-primary:hover { background: #006b94; transform: translateY(-2px); }
    
    .btn-secondary { background: #95a5a6; color: white; }
    .btn-secondary:hover { background: #7f8c8d; }

    .btn-success { background: #27ae60; color: white; }
    .btn-success:hover { background: #229954; }

    .navigation-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }

    .info-box {
        background: #f0f9ff;
        border-left: 4px solid #0088bb;
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 4px;
    }

    .example-box {
        background: #fdf2f8;
        border-left: 4px solid #db2777;
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
    }

    .generated-aim {
        background: #f0fdf4;
        border: 2px solid #bbf7d0;
        padding: 1.5rem;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #166534;
        text-align: center;
        margin-top: 1rem;
    }

    .driver-diagram {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    
    .driver-column {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
    }

    .driver-column h4 {
        text-align: center;
        margin-top: 0;
        color: #475569;
        border-bottom: 2px solid #cbd5e1;
        padding-bottom: 0.5rem;
    }

    .summary-section {
        margin-bottom: 2rem;
        border-bottom: 1px solid #e1e8ed;
        padding-bottom: 1rem;
    }

    .summary-section h3 {
        color: #0088bb;
        margin-bottom: 1rem;
    }
</style>

<div class="hero">
    <div class="container">
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: text-bottom; margin-right: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>QI Project Planner</h1>
        <p class="hero-subtitle">
            Design a rigorous Quality Improvement project using the IHI Model for Improvement. 
            This tool guides you from aim setting to your first PDSA cycle.
        </p>
    </div>
</div>

<div class="wizard-container">
    <div class="step-indicator">
        <div class="step active" id="ind-1">1<span class="step-label">Aim</span></div>
        <div class="step" id="ind-2">2<span class="step-label">Measures</span></div>
        <div class="step" id="ind-3">3<span class="step-label">Changes</span></div>
        <div class="step" id="ind-4">4<span class="step-label">PDSA</span></div>
        <div class="step" id="ind-5">5<span class="step-label">Summary</span></div>
    </div>

    <!-- Step 1: Aim Statement -->
    <div class="wizard-step active" id="step-1">
        <div class="card">
            <h2>Step 1: Set Your Aim</h2>
            <div class="info-box">
                <strong>The First Fundamental Question:</strong> "What are we trying to accomplish?"<br>
                An effective aim statement is specific, measurable, and time-bound. It should answer: 
                <em>How good? By when? For whom?</em>
            </div>

            <div class="form-group">
                <label class="form-label">What is the problem or opportunity?</label>
                <div class="form-hint">Briefly describe what you want to improve.</div>
                <input type="text" id="aim-what" class="form-input" placeholder="e.g., reduce waiting time, increase screening rates">
            </div>

            <div class="form-group">
                <label class="form-label">For whom? (Specific Population)</label>
                <div class="form-hint">Be specific about the patient population or unit.</div>
                <input type="text" id="aim-who" class="form-input" placeholder="e.g., patients ages 65+ in the internal medicine clinic">
            </div>

            <div class="form-group">
                <label class="form-label">How much? (Numerical Goal)</label>
                <div class="form-hint">State the baseline and target.</div>
                <div style="display: flex; gap: 1rem;">
                    <input type="text" id="aim-from" class="form-input" placeholder="From (baseline)...">
                    <input type="text" id="aim-to" class="form-input" placeholder="To (target)...">
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">By when? (Deadline)</label>
                <input type="date" id="aim-when" class="form-input">
            </div>

            <div class="example-box">
                <strong>Example Aim:</strong> "Reduce waiting time to see a physician for patients ages 65+ who identify as Black, Indigenous, or people of color from 45 minutes to less than 15 minutes by July 2024."
            </div>

            <div id="aim-preview" class="generated-aim" style="display: none;"></div>
        </div>
        <div class="navigation-buttons">
            <div></div> <!-- Spacer -->
            <button class="btn btn-primary" onclick="nextStep(2)">Next: Measures →</button>
        </div>
    </div>

    <!-- Step 2: Measures -->
    <div class="wizard-step" id="step-2">
        <div class="card">
            <h2>Step 2: Establish Measures</h2>
            <div class="info-box">
                <strong>The Second Fundamental Question:</strong> "How will we know that a change is an improvement?"<br>
                You need a family of measures to understand the system's performance.
            </div>

            <div class="form-group">
                <label class="form-label">Outcome Measure</label>
                <div class="form-hint">The ultimate result you want to achieve (matches your aim).</div>
                <input type="text" id="measure-outcome" class="form-input" placeholder="e.g., Average waiting time in minutes">
            </div>

            <div class="form-group">
                <label class="form-label">Process Measures</label>
                <div class="form-hint">Are the steps in the system performing as planned?</div>
                <textarea id="measure-process" class="form-input" rows="3" placeholder="e.g., % of patients triaged within 5 mins, % of rooms cleaned on time"></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">Balancing Measures</label>
                <div class="form-hint">Are we causing unintended problems elsewhere?</div>
                <textarea id="measure-balancing" class="form-input" rows="3" placeholder="e.g., Staff overtime hours, Patient complaints about feeling rushed"></textarea>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(1)">← Back</button>
            <button class="btn btn-primary" onclick="nextStep(3)">Next: Changes →</button>
        </div>
    </div>

    <!-- Step 3: Changes (Driver Diagram) -->
    <div class="wizard-step" id="step-3">
        <div class="card">
            <h2>Step 3: Develop Changes</h2>
            <div class="info-box">
                <strong>The Third Fundamental Question:</strong> "What change can we make that will result in improvement?"<br>
                Use a Driver Diagram to connect your aim to specific change ideas.
            </div>

            <div class="driver-diagram">
                <div class="driver-column">
                    <h4>Primary Drivers</h4>
                    <div class="form-hint">Major system components that contribute to the aim.</div>
                    <textarea id="driver-primary" class="form-input" rows="10" placeholder="- Clinical workflow efficiency&#10;- Staffing capacity&#10;- Patient scheduling system"></textarea>
                </div>
                <div class="driver-column">
                    <h4>Secondary Drivers</h4>
                    <div class="form-hint">Specific elements of primary drivers.</div>
                    <textarea id="driver-secondary" class="form-input" rows="10" placeholder="- Room turnover process&#10;- Triage protocols&#10;- Appointment slot duration"></textarea>
                </div>
                <div class="driver-column">
                    <h4>Change Ideas</h4>
                    <div class="form-hint">Specific, testable interventions.</div>
                    <textarea id="driver-changes" class="form-input" rows="10" placeholder="- Implement huddles&#10;- Test room flagging system&#10;- Pre-visit questionnaires"></textarea>
                </div>
            </div>
            
            <div class="example-box" style="margin-top: 1rem;">
                <strong>Tip:</strong> Look for change concepts like "Eliminate waste," "Improve workflow," or "Error proofing."
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(2)">← Back</button>
            <button class="btn btn-primary" onclick="nextStep(4)">Next: PDSA Plan →</button>
        </div>
    </div>

    <!-- Step 4: PDSA Cycle -->
    <div class="wizard-step" id="step-4">
        <div class="card">
            <h2>Step 4: Plan Your First PDSA</h2>
            <div class="info-box">
                <strong>The Engine of Improvement:</strong> Plan-Do-Study-Act.<br>
                Start small! Think "Power of One" (1 patient, 1 provider, 1 day).
            </div>

            <div class="form-group">
                <label class="form-label">1. Objective</label>
                <div class="form-hint">What is the specific goal of THIS test cycle?</div>
                <input type="text" id="pdsa-objective" class="form-input" placeholder="e.g., Test the new triage form with one nurse for one hour.">
            </div>

            <div class="form-group">
                <label class="form-label">2. Prediction</label>
                <div class="form-hint">What do you expect to happen? (Crucial for learning!)</div>
                <textarea id="pdsa-prediction" class="form-input" rows="3" placeholder="e.g., We predict it will take 2 mins longer but capture all required info."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">3. Plan (Who, What, Where, When)</label>
                <textarea id="pdsa-plan" class="form-input" rows="3" placeholder="e.g., Nurse Jones will use the form for all patients between 9-10 AM on Tuesday in Exam Room 1."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">4. Data Collection Plan</label>
                <textarea id="pdsa-data" class="form-input" rows="2" placeholder="e.g., Nurse will note time taken on the form itself."></textarea>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(3)">← Back</button>
            <button class="btn btn-success" onclick="generateSummary()">Finish & Review →</button>
        </div>
    </div>

    <!-- Step 5: Summary -->
    <div class="wizard-step" id="step-5">
        <div class="card">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #0088bb;">Project Plan Ready!</h2>
                <p>Here is your complete QI project charter.</p>
            </div>

            <div id="project-summary-content">
                <!-- Content will be injected here -->
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                <button class="btn btn-primary" onclick="printSummary()">Print / Save as PDF</button>
                <button class="btn btn-secondary" onclick="copyToClipboard()">Copy to Clipboard</button>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(4)">← Edit Plan</button>
            <button class="btn btn-primary" onclick="window.location.href='/qi-project-tracker/'">Go to Project Tracker →</button>
        </div>
    </div>
</div>

<script>
    // State Management
    let currentStep = 1;
    const totalSteps = 5;
    
    // Load saved data on init
    window.addEventListener('DOMContentLoaded', () => {
        loadProgress();
        updateAimPreview();
        
        // Add listeners for auto-saving and preview updates
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                saveProgress();
                if (currentStep === 1) updateAimPreview();
            });
        });
    });

    function nextStep(step) {
        if (step > totalSteps) return;
        
        // Validation for Step 1
        if (currentStep === 1 && step === 2) {
            if (!document.getElementById('aim-what').value || !document.getElementById('aim-who').value) {
                alert('Please fill in at least the "What" and "Who" fields to define your aim.');
                return;
            }
        }

        showStep(step);
    }

    function prevStep(step) {
        if (step < 1) return;
        showStep(step);
    }

    function showStep(step) {
        // Hide all steps
        document.querySelectorAll('.wizard-step').forEach(el => el.classList.remove('active'));
        // Show target step
        document.getElementById(`step-${step}`).classList.add('active');
        
        // Update indicators
        for (let i = 1; i <= totalSteps; i++) {
            const ind = document.getElementById(`ind-${i}`);
            ind.classList.remove('active', 'completed');
            if (i === step) {
                ind.classList.add('active');
            } else if (i < step) {
                ind.classList.add('completed');
            }
        }
        
        currentStep = step;
        window.scrollTo(0, 0);
    }

    function updateAimPreview() {
        const what = document.getElementById('aim-what').value || '[Improvement Goal]';
        const who = document.getElementById('aim-who').value || '[Population]';
        const from = document.getElementById('aim-from').value;
        const to = document.getElementById('aim-to').value;
        const when = document.getElementById('aim-when').value;
        
        let aimText = `We aim to ${what} for ${who}`;
        
        if (from && to) {
            aimText += ` from ${from} to ${to}`;
        }
        
        if (when) {
            const date = new Date(when).toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
            aimText += ` by ${date}`;
        }
        
        aimText += '.';
        
        const preview = document.getElementById('aim-preview');
        preview.textContent = aimText;
        preview.style.display = 'block';
        
        return aimText;
    }

    function generateSummary() {
        const aim = updateAimPreview();
        
        const summaryHtml = `
            <div class="summary-section">
                <h3>1. Aim Statement</h3>
                <p class="generated-aim" style="text-align: left; font-size: 1.1rem;">${aim}</p>
            </div>

            <div class="summary-section">
                <h3>2. Measures</h3>
                <p><strong>Outcome:</strong> ${document.getElementById('measure-outcome').value || 'Not defined'}</p>
                <p><strong>Process:</strong><br>${(document.getElementById('measure-process').value || 'Not defined').replace(/\n/g, '<br>')}</p>
                <p><strong>Balancing:</strong><br>${(document.getElementById('measure-balancing').value || 'Not defined').replace(/\n/g, '<br>')}</p>
            </div>

            <div class="summary-section">
                <h3>3. Change Strategy</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <strong>Primary Drivers:</strong><br>
                        ${(document.getElementById('driver-primary').value || '-').replace(/\n/g, '<br>')}
                    </div>
                    <div>
                        <strong>Change Ideas:</strong><br>
                        ${(document.getElementById('driver-changes').value || '-').replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>

            <div class="summary-section" style="border-bottom: none;">
                <h3>4. Initial PDSA Cycle</h3>
                <p><strong>Objective:</strong> ${document.getElementById('pdsa-objective').value || '-'}</p>
                <p><strong>Prediction:</strong> ${document.getElementById('pdsa-prediction').value || '-'}</p>
                <p><strong>Plan:</strong><br>${(document.getElementById('pdsa-plan').value || '-').replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        document.getElementById('project-summary-content').innerHTML = summaryHtml;
        nextStep(5);
    }

    function saveProgress() {
        const data = {};
        document.querySelectorAll('input, textarea').forEach(input => {
            data[input.id] = input.value;
        });
        localStorage.setItem('qiPlannerDraft', JSON.stringify(data));
    }

    function loadProgress() {
        const saved = localStorage.getItem('qiPlannerDraft');
        if (saved) {
            const data = JSON.parse(saved);
            Object.keys(data).forEach(key => {
                const el = document.getElementById(key);
                if (el) el.value = data[key];
            });
        }
    }

    function printSummary() {
        window.print();
    }

    function copyToClipboard() {
        const content = document.getElementById('project-summary-content').innerText;
        navigator.clipboard.writeText(content).then(() => {
            alert('Project plan copied to clipboard!');
        });
    }
</script>
