---
layout: default
title: Meta-Prompting Dashboard
permalink: /meta-dashboard/
---

<style>
    .locked-blur {
        filter: blur(5px);
        pointer-events: none;
        user-select: none;
    }
    #lock-screen {
        display: none; /* Hidden by default to prevent flash, JS will toggle */
        text-align: center;
        padding: 50px 20px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        margin: 20px 0;
    }
    #dashboard-content {
        display: none;
    }
    .tool-card {
        border: 1px solid #ddd;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        background: white;
    }
    .tool-card h3 {
        margin-top: 0;
    }
    .cta-button {
        display: inline-block;
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
    }
    .cta-button:hover {
        background-color: #0056b3;
        color: white;
        text-decoration: none;
    }
</style>

<div id="lock-screen">
    <h2>🔒 Supporter-Only Content</h2>
    <p>This dashboard is reserved for our Supporters. It contains advanced "Meta-Tools" to help you build, refine, and stress-test your medical prompts.</p>
    <p><strong>Already a Supporter?</strong> Check your email for your personal Magic Link.</p>
    <br>
    <a href="#" class="cta-button">Become a Supporter to Unlock</a>
</div>

<div id="dashboard-content">
    <h1>Meta-Prompting Dashboard</h1>
    <p class="lead">Welcome, Supporter. Here are your advanced tools.</p>

    <div class="tool-card">
        <h3>1. The Prompt Refiner</h3>
        <p>Paste a rough prompt, get a polished one using best practices.</p>
        <textarea style="width: 100%; height: 100px;" placeholder="Paste your draft prompt here..."></textarea>
        <button class="cta-button" style="margin-top: 10px;">Refine Prompt</button>
    </div>

    <div class="tool-card">
        <h3>2. Clinical Persona Generator</h3>
        <p>Generate the perfect "Act as..." system instruction.</p>
        <input type="text" style="width: 100%; padding: 10px;" placeholder="e.g. Pediatric Cardiologist">
        <button class="cta-button" style="margin-top: 10px;">Generate Persona</button>
    </div>

    <div class="tool-card">
        <h3>3. The Stress Tester</h3>
        <p>Simulate complex patient cases to test your prompt's safety.</p>
        <button class="cta-button">Run Stress Test</button>
    </div>

    <div class="tool-card">
        <h3>4. ELI5 Translator</h3>
        <p>Create prompts for specific patient communication styles.</p>
    </div>

    <div class="tool-card">
        <h3>5. Chain-of-Thought Architect</h3>
        <p>Structure complex diagnostic reasoning tasks.</p>
    </div>
    
    <hr>
    <p><small>You are logged in via Magic Link. <a href="#" onclick="logout()">Logout</a></small></p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const correctKey = 'supporter_2025'; // The secret key
    const storageKey = 'ppe_supporter_access'; // LocalStorage key

    // 1. Check URL for key
    const urlParams = new URLSearchParams(window.location.search);
    const userKey = urlParams.get('key');

    // 2. Validate and Save
    if (userKey === correctKey) {
        localStorage.setItem(storageKey, 'true');
        // Optional: Clean URL to hide key
        window.history.replaceState({}, document.title, window.location.pathname);
        showDashboard();
    } else if (localStorage.getItem(storageKey) === 'true') {
        // 3. Check LocalStorage for existing access
        showDashboard();
    } else {
        // 4. Lock Content
        showLockScreen();
    }

    function showDashboard() {
        document.getElementById('dashboard-content').style.display = 'block';
        document.getElementById('lock-screen').style.display = 'none';
    }

    function showLockScreen() {
        document.getElementById('dashboard-content').style.display = 'none';
        document.getElementById('lock-screen').style.display = 'block';
    }
});

function logout() {
    localStorage.removeItem('ppe_supporter_access');
    location.reload();
}
</script>
