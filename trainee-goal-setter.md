---
layout: page
title: Trainee Goal Setter
permalink: /trainee-goal-setter/
description: A structured tool for medical trainees to set rotation goals and receive attending feedback.
---

<style>
    /* Hero Section */
    .hero {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #92400e;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #b45309;
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
        border-color: #d97706;
        background: #d97706;
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
        border-color: #d97706;
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

    .btn-primary { background: #d97706; color: white; }
    .btn-primary:hover { background: #b45309; transform: translateY(-2px); }
    
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
        background: #fffbeb;
        border-left: 4px solid #d97706;
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 4px;
    }

    .attending-feedback {
        display: none;
        margin-top: 1rem;
        padding: 1rem;
        background: #f0fdf4;
        border: 2px dashed #27ae60;
        border-radius: 8px;
    }

    .attending-feedback.visible {
        display: block;
    }

    .attending-label {
        color: #166534;
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }

    .toggle-container {
        text-align: right;
        margin-bottom: 1rem;
    }

    .summary-section {
        margin-bottom: 2rem;
        border-bottom: 1px solid #e1e8ed;
        padding-bottom: 1rem;
    }

    .summary-section h3 {
        color: #92400e;
        margin-bottom: 1rem;
    }
</style>

<div class="hero">
    <div class="container">
        <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px; display: inline-block; vertical-align: text-bottom; margin-right: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>Trainee Goal Setter</h1>
        <p class="hero-subtitle">
            Set actionable learning goals for your rotation using informed self-assessment. 
            Share with your attending for structured feedback.
        </p>
    </div>
</div>

<div class="wizard-container">
    <div class="toggle-container">
        <div style="float: left;">
            <button class="btn btn-secondary" onclick="clearData()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Clear Data</button>
            <button class="btn btn-secondary" onclick="document.getElementById('import-file').click()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Import</button>
            <input type="file" id="import-file" style="display: none;" onchange="importData(this)">
        </div>
        <label style="cursor: pointer; user-select: none; margin-left: 1rem;">
            <input type="checkbox" id="daily-mode-toggle" onchange="toggleDailyMode()"> 
            <strong>Daily Mode</strong> (Quick Version)
        </label>
        <label style="cursor: pointer; user-select: none; margin-left: 1rem;">
            <input type="checkbox" id="attending-mode-toggle" onchange="toggleAttendingMode()"> 
            <strong>Attending Mode</strong> (Enable Feedback)
        </label>
    </div>

    <div class="step-indicator">
        <div class="step active" id="ind-1">1<span class="step-label">Reflect</span></div>
        <div class="step" id="ind-2">2<span class="step-label">Goals</span></div>
        <div class="step" id="ind-3">3<span class="step-label">Plan</span></div>
        <div class="step" id="ind-4">4<span class="step-label">Review</span></div>
        <div class="step" id="ind-5">5<span class="step-label">Summary</span></div>
    </div>

    <!-- Step 1: Reflection -->
    <div class="wizard-step active" id="step-1">
        <div class="card">
            <h2>Step 1: Informed Self-Assessment</h2>
            <div class="info-box" id="step1-info">
                <strong>Look Outward, Then Inward:</strong> 
                Effective self-assessment isn't just guessing how good you are. It's integrating external feedback (previous evaluations, test scores) with your own reflection.
            </div>

            <div class="form-group full-mode-only">
                <label class="form-label">Previous Feedback & Data</label>
                <div class="form-hint">What have previous attendings/residents suggested you work on? What do your test scores say?</div>
                <textarea id="reflect-external" class="form-input" rows="3" placeholder="e.g., Last rotation, I was told to work on more concise presentations..."></textarea>
                
                <div class="attending-feedback">
                    <label class="attending-label">Attending Feedback on Self-Assessment:</label>
                    <textarea id="feedback-reflect" class="form-input" rows="2" placeholder="Attending comments..."></textarea>
                </div>
            </div>

            <div class="form-group full-mode-only">
                <label class="form-label">Current Strengths</label>
                <div class="form-hint">What skills are you confident in?</div>
                <textarea id="reflect-strengths" class="form-input" rows="3" placeholder="e.g., Building rapport with patients, history taking..."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label" id="growth-label">Areas for Growth</label>
                <div class="form-hint" id="growth-hint">What specific skills or knowledge gaps do you want to target this rotation?</div>
                <textarea id="reflect-growth" class="form-input" rows="3" placeholder="e.g., Managing DKA, interpreting EKGs, efficiency in note writing..."></textarea>
            </div>
        </div>
        <div class="navigation-buttons">
            <div></div>
            <button class="btn btn-primary" onclick="nextStep(2)">Next: Set Goals →</button>
        </div>
    </div>

    <!-- Step 2: SMART Goals -->
    <div class="wizard-step" id="step-2">
        <div class="card">
            <h2>Step 2: Set SMART Goals</h2>
            <div class="info-box">
                <strong>Specific, Measurable, Achievable, Relevant, Time-bound.</strong><br>
                Avoid vague goals like "Read more." Instead: "Read one review article on a patient's condition every other day."
            </div>

            <div class="form-group">
                <label class="form-label">Goal 1 (Clinical/Knowledge)</label>
                <input type="text" id="goal-1" class="form-input" placeholder="e.g., Independently manage 3 patients with heart failure by week 2.">
                
                <div class="attending-feedback">
                    <label class="attending-label">Attending Feedback on Goal 1:</label>
                    <textarea id="feedback-goal-1" class="form-input" rows="2" placeholder="Is this goal realistic and appropriate?"></textarea>
                </div>
            </div>

            <div class="form-group full-mode-only">
                <label class="form-label">Goal 2 (Skill/Process)</label>
                <input type="text" id="goal-2" class="form-input" placeholder="e.g., Submit all notes before leaving the hospital each day.">
                
                <div class="attending-feedback">
                    <label class="attending-label">Attending Feedback on Goal 2:</label>
                    <textarea id="feedback-goal-2" class="form-input" rows="2" placeholder="Is this goal realistic and appropriate?"></textarea>
                </div>
            </div>

            <div class="form-group full-mode-only">
                <label class="form-label">Goal 3 (Personal/Professional)</label>
                <input type="text" id="goal-3" class="form-input" placeholder="e.g., Ask for specific feedback on physical exam once per week.">
                
                <div class="attending-feedback">
                    <label class="attending-label">Attending Feedback on Goal 3:</label>
                    <textarea id="feedback-goal-3" class="form-input" rows="2" placeholder="Is this goal realistic and appropriate?"></textarea>
                </div>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(1)">← Back</button>
            <button class="btn btn-primary" onclick="nextStep(3)">Next: Action Plan →</button>
        </div>
    </div>

    <!-- Step 3: Action Plan -->
    <div class="wizard-step" id="step-3">
        <div class="card">
            <h2>Step 3: Action Plan</h2>
            <div class="info-box">
                <strong>How will you achieve these goals?</strong><br>
                Identify resources, people, or habits needed.
            </div>

            <div class="form-group">
                <label class="form-label">Resources Needed</label>
                <div class="form-hint">Textbooks, question banks, specific clinics, etc.</div>
                <textarea id="plan-resources" class="form-input" rows="3" placeholder="e.g., UpToDate, MKSAP questions, time in the echo lab..."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">Support Required</label>
                <div class="form-hint">What do you need from your attending or residents?</div>
                <textarea id="plan-support" class="form-input" rows="3" placeholder="e.g., Please observe me doing one knee exam this week."></textarea>
                
                <div class="attending-feedback">
                    <label class="attending-label">Attending Commitment:</label>
                    <textarea id="feedback-support" class="form-input" rows="2" placeholder="How I will support these goals..."></textarea>
                </div>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(2)">← Back</button>
            <button class="btn btn-primary" onclick="nextStep(4)">Next: Review →</button>
        </div>
    </div>

    <!-- Step 4: End of Rotation Review -->
    <div class="wizard-step" id="step-4">
        <div class="card">
            <h2>Step 4: End of Rotation Review</h2>
            <div class="info-box">
                <strong>Reflection & Evaluation:</strong><br>
                At the end of the rotation, reflect on your progress and receive final feedback.
            </div>

            <div class="form-group">
                <label class="form-label">Learner Reflection</label>
                <div class="form-hint">How did the rotation go? Did you achieve your goals?</div>
                <textarea id="review-learner" class="form-input" rows="4" placeholder="e.g., I achieved my goal of managing heart failure patients, but still need work on..."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label">Feedback for Rotation</label>
                <div class="form-hint">What went well? What could be improved about the learning environment?</div>
                <textarea id="review-rotation" class="form-input" rows="3" placeholder="e.g., The teaching rounds were excellent, but..."></textarea>
            </div>

            <div class="attending-feedback">
                <label class="attending-label">End of Rotation Evaluation (Attending):</label>
                <div class="form-hint">Summary of performance and feedback for the learner.</div>
                <textarea id="review-attending" class="form-input" rows="5" placeholder="Attending evaluation comments..."></textarea>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(3)">← Back</button>
            <button class="btn btn-success" onclick="generateSummary()">Finish & View Plan →</button>
        </div>
    </div>

    <!-- Step 5: Summary -->
    <div class="wizard-step" id="step-5">
        <div class="card">
            <div style="text-align: center; margin-bottom: 2rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #92400e;">Learning Plan</h2>
                <p>Review your goals and feedback below.</p>
            </div>

            <div id="summary-content" style="text-align: left;">
                <!-- Content injected via JS -->
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                <button class="btn btn-primary" onclick="printSummary()">Print / Save as PDF</button>
                <button class="btn btn-secondary" onclick="copyToClipboard()">Copy to Clipboard</button>
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn btn-secondary" onclick="prevStep(4)">← Edit Review</button>
            <button class="btn btn-primary" onclick="window.location.href='/'">Done →</button>
        </div>
    </div>
</div>

<script>
    // State Management
    let currentStep = 1;
    const totalSteps = 5;
    let attendingMode = false;
    let dailyMode = false;

    // Init
    window.addEventListener('DOMContentLoaded', () => {
        loadProgress();
        
        // Auto-save listener
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                saveProgress();
            });
        });
    });

    function toggleAttendingMode() {
        attendingMode = document.getElementById('attending-mode-toggle').checked;
        const feedbackBoxes = document.querySelectorAll('.attending-feedback');
        
        feedbackBoxes.forEach(box => {
            if (attendingMode) {
                box.classList.add('visible');
            } else {
                // Keep visible if it has content, otherwise hide
                const textarea = box.querySelector('textarea');
                if (textarea.value.trim() !== '') {
                    box.classList.add('visible');
                } else {
                    box.classList.remove('visible');
                }
            }
        });
    }

    function toggleDailyMode() {
        dailyMode = document.getElementById('daily-mode-toggle').checked;
        const fullModeElements = document.querySelectorAll('.full-mode-only');
        
        fullModeElements.forEach(el => {
            el.style.display = dailyMode ? 'none' : 'block';
        });

        // Update labels for Daily Mode
        if (dailyMode) {
            document.getElementById('growth-label').innerText = "Today's Focus";
            document.getElementById('growth-hint').innerText = "What is the ONE thing you want to improve today?";
            document.getElementById('step1-info').innerHTML = "<strong>Daily Goal Setting:</strong><br>Keep it simple. Focus on one specific thing for today.";
            document.querySelector('label[for="goal-1"]').innerText = "Today's Goal";
        } else {
            document.getElementById('growth-label').innerText = "Areas for Growth";
            document.getElementById('growth-hint').innerText = "What specific skills or knowledge gaps do you want to target this rotation?";
            document.getElementById('step1-info').innerHTML = "<strong>Look Outward, Then Inward:</strong><br>Effective self-assessment isn't just guessing how good you are. It's integrating external feedback (previous evaluations, test scores) with your own reflection.";
            document.querySelector('label[for="goal-1"]').innerText = "Goal 1 (Clinical/Knowledge)";
        }
    }

    function nextStep(step) {
        if (step > totalSteps) return;
        showStep(step);
    }

    function prevStep(step) {
        if (step < 1) return;
        showStep(step);
    }

    function showStep(step) {
        document.querySelectorAll('.wizard-step').forEach(el => el.classList.remove('active'));
        document.getElementById(`step-${step}`).classList.add('active');
        
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

    function generateSummary() {
        const getVal = (id) => document.getElementById(id).value || '-';
        const getFeedback = (id) => {
            const val = document.getElementById(id).value;
            return val ? `<div style="background:#f0fdf4; padding:0.5rem; border-left:3px solid #27ae60; margin-top:0.5rem; font-style:italic;"><strong>Attending:</strong> ${val}</div>` : '';
        };

        const html = `
            <div class="summary-section">
                <h3>1. Reflection</h3>
                ${!dailyMode ? `<p><strong>Previous Feedback:</strong><br>${getVal('reflect-external')}</p>
                ${getFeedback('feedback-reflect')}
                <p><strong>Strengths:</strong><br>${getVal('reflect-strengths')}</p>` : ''}
                <p><strong>${dailyMode ? "Today's Focus" : "Growth Areas"}:</strong><br>${getVal('reflect-growth')}</p>
            </div>

            <div class="summary-section">
                <h3>2. Goals</h3>
                <p><strong>${dailyMode ? "Today's Goal" : "Goal 1"}:</strong> ${getVal('goal-1')}</p>
                ${getFeedback('feedback-goal-1')}
                ${!dailyMode ? `<p><strong>Goal 2:</strong> ${getVal('goal-2')}</p>
                ${getFeedback('feedback-goal-2')}
                <p><strong>Goal 3:</strong> ${getVal('goal-3')}</p>
                ${getFeedback('feedback-goal-3')}` : ''}
            </div>

            <div class="summary-section" style="border-bottom: none;">
                <h3>3. Action Plan</h3>
                <p><strong>Resources:</strong><br>${getVal('plan-resources')}</p>
                <p><strong>Support Needed:</strong><br>${getVal('plan-support')}</p>
                ${getFeedback('feedback-support')}
            </div>
                ${getFeedback('feedback-support')}
            </div>

            <div class="summary-section" style="border-bottom: none;">
                <h3>4. End of Rotation Review</h3>
                <p><strong>Learner Reflection:</strong><br>${getVal('review-learner')}</p>
                <p><strong>Feedback for Rotation:</strong><br>${getVal('review-rotation')}</p>
                ${getFeedback('review-attending')}
            </div>
        `;

        document.getElementById('summary-content').innerHTML = html;
        nextStep(5);
    }

    function saveProgress() {
        const data = {};
        document.querySelectorAll('input, textarea').forEach(input => {
            data[input.id] = input.value;
        });
        data['attendingMode'] = document.getElementById('attending-mode-toggle').checked;
        data['dailyMode'] = document.getElementById('daily-mode-toggle').checked;
        localStorage.setItem('traineeGoalSetter', JSON.stringify(data));
    }

    function loadProgress() {
        const saved = localStorage.getItem('traineeGoalSetter');
        if (saved) {
            const data = JSON.parse(saved);
            Object.keys(data).forEach(key => {
                if (key === 'attendingMode') {
                    document.getElementById('attending-mode-toggle').checked = data[key];
                    toggleAttendingMode();
                } else if (key === 'dailyMode') {
                    document.getElementById('daily-mode-toggle').checked = data[key];
                    toggleDailyMode();
                } else {
                    const el = document.getElementById(key);
                    if (el) el.value = data[key];
                }
            });
            // Ensure feedback boxes with content are visible even if mode is off
            toggleAttendingMode();
        }
    }

    function printSummary() {
        window.print();
    }

    function copyToClipboard() {
        const content = document.getElementById('summary-content').innerText;
        navigator.clipboard.writeText(content).then(() => {
            alert('Learning Plan copied to clipboard!');
        });
    }

    function clearData() {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            localStorage.removeItem('traineeGoalSetter');
            location.reload();
        }
    }

    function importData(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                localStorage.setItem('traineeGoalSetter', JSON.stringify(data));
                location.reload();
            } catch (err) {
                alert('Error importing file. Please ensure it is a valid JSON file.');
            }
        };
        reader.readAsText(file);
    }
</script>
