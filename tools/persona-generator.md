---
layout: default
title: Clinical Persona Generator
permalink: /tools/persona-generator/
---

<style>
    #lock-screen {
        display: none;
        text-align: center;
        padding: 50px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 12px;
        margin: 40px 0;
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    #lock-screen h2 {
        color: white;
        margin-bottom: 20px;
    }
    #tool-content {
        display: none;
    }
    .form-group {
        margin-bottom: 25px;
    }
    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #2d3748;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.3s;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #667eea;
    }
    .generate-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 40px;
        border: none;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
    .generate-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }
    .output-container {
        display: none;
        margin-top: 30px;
        padding: 25px;
        background: #f7fafc;
        border-radius: 12px;
        border-left: 4px solid #667eea;
    }
    .output-container.active {
        display: block;
    }
    .output-text {
        background: #2d3748;
        color: #e2e8f0;
        padding: 20px;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        white-space: pre-wrap;
        margin-top: 15px;
        line-height: 1.6;
    }
    .copy-btn {
        background: #48bb78;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 10px;
        font-weight: 600;
        transition: background 0.3s;
    }
    .copy-btn:hover {
        background: #38a169;
    }
    .copy-btn.copied {
        background: #2d3748;
    }
    .cta-button {
        display: inline-block;
        background-color: white;
        color: #667eea;
        padding: 12px 30px;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        transition: transform 0.2s;
    }
    .cta-button:hover {
        transform: translateY(-2px);
        color: #667eea;
        text-decoration: none;
    }
    .tool-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px;
        border-radius: 12px;
        margin-bottom: 30px;
        text-align: center;
    }
    .tool-header h1 {
        color: white;
        margin-bottom: 10px;
    }
    .helper-text {
        font-size: 14px;
        color: #718096;
        margin-top: 5px;
    }
</style>

<div id="lock-screen">
    <h2>🔒 Supporter-Only Tool</h2>
    <p style="font-size: 18px; margin-bottom: 30px;">The Clinical Persona Generator is reserved for our Supporters.</p>
    <p><strong>Already a Supporter?</strong> Check your email for your personal Magic Link.</p>
    <br>
    <a href="#" class="cta-button">Become a Supporter to Unlock</a>
</div>

<div id="tool-content">
    <div class="tool-header">
        <h1>🎭 Clinical Persona Generator</h1>
        <p style="font-size: 18px; margin-top: 10px;">Build the perfect "Act as..." system prompt for your AI interactions</p>
    </div>

    <form id="persona-form">
        <div class="form-group">
            <label for="specialty">Medical Specialty *</label>
            <input type="text" id="specialty" placeholder="e.g., Pediatric Cardiologist, Emergency Medicine Physician" required>
            <div class="helper-text">Your area of clinical expertise</div>
        </div>

        <div class="form-group">
            <label for="experience">Experience Level *</label>
            <select id="experience" required>
                <option value="">Select experience level...</option>
                <option value="resident">Resident/Fellow in Training</option>
                <option value="early">Early Career (1-5 years)</option>
                <option value="mid">Mid-Career (5-15 years)</option>
                <option value="senior">Senior Attending (15+ years)</option>
                <option value="expert">Expert/Thought Leader (20+ years)</option>
            </select>
        </div>

        <div class="form-group">
            <label for="setting">Clinical Setting *</label>
            <select id="setting" required>
                <option value="">Select clinical setting...</option>
                <option value="academic">Academic Medical Center</option>
                <option value="community">Community Hospital</option>
                <option value="rural">Rural/Critical Access Hospital</option>
                <option value="private">Private Practice</option>
                <option value="urgent">Urgent Care/Walk-in Clinic</option>
                <option value="telehealth">Telehealth/Virtual Care</option>
            </select>
        </div>

        <div class="form-group">
            <label for="style">Communication Style *</label>
            <select id="style" required>
                <option value="">Select communication style...</option>
                <option value="socratic">Socratic (Question-driven, Teaching-focused)</option>
                <option value="direct">Direct (Concise, Action-oriented)</option>
                <option value="empathetic">Empathetic (Patient-centered, Compassionate)</option>
                <option value="analytical">Analytical (Data-driven, Evidence-based)</option>
                <option value="collaborative">Collaborative (Team-based, Consultative)</option>
            </select>
        </div>

        <div class="form-group">
            <label for="priorities">Clinical Priorities (Optional)</label>
            <textarea id="priorities" rows="3" placeholder="e.g., Patient safety, Evidence-based practice, Cost-effectiveness, Family-centered care"></textarea>
            <div class="helper-text">What matters most in your clinical decision-making?</div>
        </div>

        <div class="form-group">
            <label for="guidelines">Preferred Guidelines (Optional)</label>
            <input type="text" id="guidelines" placeholder="e.g., AHA/ACC, AAP, ACEP, UpToDate">
            <div class="helper-text">Which clinical guidelines do you follow?</div>
        </div>

        <button type="submit" class="generate-btn">✨ Generate Persona</button>
    </form>

    <div class="output-container" id="output-container">
        <h3>Your Clinical Persona Prompt</h3>
        <p>Copy this system prompt and use it to initialize your AI conversations:</p>
        <div class="output-text" id="output-text"></div>
        <button class="copy-btn" id="copy-btn" onclick="copyToClipboard()">📋 Copy to Clipboard</button>
    </div>
</div>

<script>
// Access Control Logic
document.addEventListener('DOMContentLoaded', function() {
    const correctKey = 'supporter_2025';
    const storageKey = 'ppe_supporter_access';

    // Check URL for key
    const urlParams = new URLSearchParams(window.location.search);
    const userKey = urlParams.get('key');

    // Validate and Save
    if (userKey === correctKey) {
        localStorage.setItem(storageKey, 'true');
        window.history.replaceState({}, document.title, window.location.pathname);
        showTool();
    } else if (localStorage.getItem(storageKey) === 'true') {
        showTool();
    } else {
        showLockScreen();
    }

    function showTool() {
        document.getElementById('tool-content').style.display = 'block';
        document.getElementById('lock-screen').style.display = 'none';
    }

    function showLockScreen() {
        document.getElementById('tool-content').style.display = 'none';
        document.getElementById('lock-screen').style.display = 'block';
    }
});

// Persona Generation Logic
document.getElementById('persona-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const specialty = document.getElementById('specialty').value;
    const experience = document.getElementById('experience').value;
    const setting = document.getElementById('setting').value;
    const style = document.getElementById('style').value;
    const priorities = document.getElementById('priorities').value;
    const guidelines = document.getElementById('guidelines').value;

    // Map values to descriptive text
    const experienceMap = {
        'resident': 'currently in training',
        'early': 'with 1-5 years of clinical experience',
        'mid': 'with 5-15 years of clinical experience',
        'senior': 'with over 15 years of clinical experience',
        'expert': 'with over 20 years of experience and recognized expertise in the field'
    };

    const settingMap = {
        'academic': 'an academic medical center with access to subspecialty consultants and advanced diagnostics',
        'community': 'a community hospital with standard resources',
        'rural': 'a rural or critical access hospital with limited specialist availability',
        'private': 'a private practice setting',
        'urgent': 'an urgent care or walk-in clinic',
        'telehealth': 'a telehealth/virtual care environment'
    };

    const styleMap = {
        'socratic': 'You use a Socratic, question-driven approach to help learners develop clinical reasoning.',
        'direct': 'You communicate in a direct, concise manner focused on actionable recommendations.',
        'empathetic': 'You prioritize empathetic, patient-centered communication that acknowledges emotions and concerns.',
        'analytical': 'You take an analytical, data-driven approach grounded in evidence-based medicine.',
        'collaborative': 'You emphasize collaborative, team-based decision-making and value input from colleagues.'
    };

    // Build the persona prompt
    let prompt = `You are an expert ${specialty} ${experienceMap[experience]}. You practice in ${settingMap[setting]}.\n\n`;
    
    prompt += `${styleMap[style]}\n\n`;

    if (priorities) {
        prompt += `Your clinical priorities include: ${priorities}.\n\n`;
    }

    if (guidelines) {
        prompt += `You base your recommendations on established guidelines including: ${guidelines}.\n\n`;
    }

    prompt += `When responding to clinical questions:\n`;
    prompt += `- Provide evidence-based recommendations appropriate for your specialty and setting\n`;
    prompt += `- Consider resource limitations and practical constraints\n`;
    prompt += `- Acknowledge uncertainty when evidence is limited\n`;
    prompt += `- Prioritize patient safety and quality of care\n`;
    prompt += `- Use clear, professional medical language\n`;
    prompt += `- When appropriate, explain your clinical reasoning`;

    // Display output
    document.getElementById('output-text').textContent = prompt;
    document.getElementById('output-container').classList.add('active');
    document.getElementById('output-container').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function copyToClipboard() {
    const text = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(text).then(function() {
        const btn = document.getElementById('copy-btn');
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.textContent = '📋 Copy to Clipboard';
            btn.classList.remove('copied');
        }, 2000);
    });
}
</script>
