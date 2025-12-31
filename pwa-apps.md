---
layout: default
title: Mobile Apps (PWA)
description: Install our productivity tools as mobile apps for quick access on your phone or tablet
permalink: /pwa-apps/
---

<style>
    .section-title {
        font-size: 1.8em;
        color: #065f46;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 3px solid #d1fae5;
    }

    .what-is-pwa {
        background: white;
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 40px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .benefit-card {
        background: #f0fdf4;
        border-radius: 10px;
        padding: 20px;
        border-left: 4px solid #10b981;
    }

    .benefit-card h4 {
        color: #065f46;
        margin-top: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .install-section {
        background: white;
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 40px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .platform-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .platform-tab {
        padding: 12px 24px;
        border: 2px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s;
    }

    .platform-tab.active {
        background: #065f46;
        color: white;
        border-color: #065f46;
    }

    .platform-tab:hover:not(.active) {
        border-color: #065f46;
        color: #065f46;
    }

    .platform-content {
        display: none;
    }

    .platform-content.active {
        display: block;
    }

    .step-list {
        counter-reset: step-counter;
        list-style: none;
        padding: 0;
    }

    .step-list li {
        counter-increment: step-counter;
        padding: 15px 15px 15px 60px;
        margin-bottom: 15px;
        background: #f9fafb;
        border-radius: 8px;
        position: relative;
        line-height: 1.6;
    }

    .step-list li::before {
        content: counter(step-counter);
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: #065f46;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .apps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 30px;
    }

    .app-card {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        border: 2px solid #e5e7eb;
        transition: all 0.3s;
    }

    .app-card:hover {
        border-color: #10b981;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.12);
    }

    .app-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }

    .app-icon {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #065f46;
    }

    .app-name {
        font-size: 1.3em;
        font-weight: 700;
        color: #1f2937;
        margin: 0;
    }

    .app-desc {
        color: #6b7280;
        font-size: 0.95em;
        line-height: 1.5;
        margin-bottom: 15px;
    }

    .app-actions {
        display: flex;
        gap: 10px;
    }

    .btn-install {
        flex: 1;
        padding: 12px 20px;
        background: linear-gradient(135deg, #065f46 0%, #047857 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        transition: all 0.3s;
    }

    .btn-install:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(6, 95, 70, 0.3);
        color: white;
        text-decoration: none;
    }

    .btn-open {
        padding: 12px 20px;
        background: white;
        color: #065f46;
        border: 2px solid #065f46;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        transition: all 0.3s;
    }

    .btn-open:hover {
        background: #f0fdf4;
    }

    .faq-section {
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .faq-item {
        border-bottom: 1px solid #e5e7eb;
        padding: 20px 0;
    }

    .faq-item:last-child {
        border-bottom: none;
    }

    .faq-question {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 10px;
    }

    .faq-answer {
        color: #6b7280;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .platform-tabs {
            flex-direction: column;
        }
        
        .app-actions {
            flex-direction: column;
        }
    }
</style>

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Mobile Apps</h1>
    <p class="hero-subtitle">
        Install our tools directly on your phone or tablet for instant access—no app store needed. 
        Works offline and launches in fullscreen like a native app.
    </p>
  </div>
</div>

<div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">

<!-- What is a PWA -->
<div class="what-is-pwa">
    <h2 class="section-title">What is a PWA?</h2>
    <p>A <strong>Progressive Web App (PWA)</strong> is a website that can be installed on your device and works like a native app. When you install one of our tools as a PWA:</p>
    
    <div class="benefits-grid">
        <div class="benefit-card">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.28 9.322a4.877 4.877 0 0 1 0-7.06" /> <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25a4.877 4.877 0 0 1 4.717 5.312M12 2.25a4.877 4.877 0 0 0-4.717 5.312M12 2.25V2.25m-4.717 5.312a4.877 4.877 0 0 1 7.064 0" /> <path stroke-linecap="round" stroke-linejoin="round" d="M1.5 15.75l10.5-11.25L12 10.5h8.25L9.75 22.5 12 13.5H3.75z" />
                </svg>
                Works Offline
            </h4>
            <p>Core features work even without an internet connection.</p>
        </div>
        <div class="benefit-card">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V6.75a2.25 2.25 0 0 1 2.25-2.25h1.5M15.75 4.5h1.5A2.25 2.25 0 0 1 19.5 6.75v1.5m0 9.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-1.5M4.5 15.75H3m0 0v-1.5a2.25 2.25 0 0 1 2.25-2.25h1.5M4.5 9.75H3m0 0v-1.5a2.25 2.25 0 0 1 2.25-2.25h1.5M15.75 19.5H21m0 0v-1.5a2.25 2.25 0 0 1-2.25-2.25h-1.5m-6-15h1.5m-6 0h1.5m-6 0h1.5" />
                </svg>
                Fullscreen Mode
            </h4>
            <p>No browser toolbar—the tool takes up your entire screen.</p>
        </div>
        <div class="benefit-card">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height: 24px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M10.5 18H5.25A2.25 2.25 0 0 1 3 15.75V8.25A2.25 2.25 0 0 1 5.25 6H18.75a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 18.75 18H13.5m-3-12H5.25A2.25 2.25 0 0 0 3 8.25v7.5A2.25 2.25 0 0 0 5.25 18H13.5" />
                </svg>
                Your Data Persists
            </h4>
            <p>All data is saved locally on your device between sessions.</p>
        </div>
    </div>
</div>

<!-- How to Install -->
<div class="install-section">
    <h2 class="section-title">How to Install</h2>
    
    <div class="platform-tabs">
        <button class="platform-tab active" onclick="showPlatform('ios')">iPhone / iPad</button>
        <button class="platform-tab" onclick="showPlatform('android')">Android</button>
        <button class="platform-tab" onclick="showPlatform('desktop')">Desktop</button>
    </div>
    
    <div id="ios-content" class="platform-content active">
        <h3>Installing on iPhone or iPad (Safari)</h3>
        <ol class="step-list">
            <li>Open the tool you want to install in <strong>Safari</strong> (not Chrome or other browsers)</li>
            <li>Tap the <strong>Share button</strong> (the square with an arrow pointing up)</li>
            <li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>
            <li>Edit the name if desired, then tap <strong>"Add"</strong></li>
            <li>Find the app icon on your home screen and tap to launch!</li>
        </ol>
        <p style="color: #6b7280; font-size: 0.9em; margin-top: 15px;">
            <strong>Note:</strong> On iOS, PWAs must be installed through Safari. Chrome and other browsers don't support this feature on iPhone/iPad.
        </p>
    </div>
    
    <div id="android-content" class="platform-content">
        <h3>Installing on Android (Chrome)</h3>
        <ol class="step-list">
            <li>Open the tool you want to install in <strong>Chrome</strong></li>
            <li>Look for the <strong>"Install App"</strong> banner at the top of the page, or...</li>
            <li>Tap the <strong>three-dot menu</strong> (⋮) in the top-right corner</li>
            <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong></li>
            <li>Confirm by tapping <strong>"Install"</strong></li>
        </ol>
    </div>
    
    <div id="desktop-content" class="platform-content">
        <h3>Installing on Desktop (Chrome, Edge, Brave)</h3>
        <ol class="step-list">
            <li>Open the tool you want to install</li>
            <li>Look for the <strong>install icon</strong> in the address bar (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline; vertical-align: middle;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
            )</li>
            <li>Click the icon and confirm <strong>"Install"</strong></li>
            <li>The app will open in its own window and appear in your Start menu or Applications folder</li>
        </ol>
    </div>
</div>

<!-- Available Apps -->
<h2 class="section-title">Available Apps</h2>

<div class="apps-grid">
    <!-- RVU Tracker -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #d1fae5;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.25a3 3 0 0 1 6 0m-6 0H6m6 0H18" />
                </svg>
            </div>
            <h3 class="app-name">RVU Tracker</h3>
        </div>
        <p class="app-desc">Track clinic encounters with automated billing codes, wRVU calculations, and daily summaries.</p>
        <div class="app-actions">
            <a href="{{ '/clinic-visit-tracker/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
    
    <!-- ClockWork TimeBox -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #dbeafe;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 class="app-name">TimeBox</h3>
        </div>
        <p class="app-desc">Visual time-tracking with task management, analytics, and Pomodoro timer for focused work.</p>
        <div class="app-actions">
            <a href="{{ '/clockwork-timebox/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
    
    <!-- E&M Calculator -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #fef3c7;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 3v21h12V3H6zm0 3h12M6 6v3h12V6M6 9h12M6 9v3h12V9m0 0v3h12V9M6 12h12M6 12v3h12V12m0 0v3h12V12M6 15h12M6 15v3h12V15m0 0v3h12V15M6 18h12M6 18v3h12V18m0 0v3h12V18M6 21h12" />
                </svg>
            </div>
            <h3 class="app-name">E&M Calculator</h3>
        </div>
        <p class="app-desc">Calculate CPT E/M billing codes with well visit support and automated MDM assessment.</p>
        <div class="app-actions">
            <a href="{{ '/cpt-calculator/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
    
    <!-- CME Tracker -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #d1fae5;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.25a3 3 0 0 1 6 0m-6 0H6m6 0H18" />
                </svg>
            </div>
            <h3 class="app-name">CME Tracker</h3>
        </div>
        <p class="app-desc">Track your CME budget, expenses, and educational leave days throughout the year.</p>
        <div class="app-actions">
            <a href="{{ '/cme-tracker/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
    
    <!-- PTO Planner -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #ccfbf1;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008zM12 9h.008v.008H12V9zM9.75 9h.008v.008H9.75V9zM9.75 12h.008v.008H9.75V12zM9.75 15h.008v.008H9.75V15zM12 15h.008v.008H12V15zM12 12h.008v.008H12v-.008zM15.75 12h.008v.008H15.75V12zM15.75 9h.008v.008H15.75V9zM15.75 15h.008v.008H15.75V15z" />
                </svg>
            </div>
            <h3 class="app-name">PTO Planner</h3>
        </div>
        <p class="app-desc">Plan your work schedule, vacation days, and CME time for the entire year.</p>
        <div class="app-actions">
            <a href="{{ '/pto-planner/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
    
    <!-- Dot Phrase Library -->
    <div class="app-card">
        <div class="app-header">
            <div class="app-icon" style="background: #e0f2fe;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 28px; height: 28px;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 3h6m-6 3h6M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.5-1.5h.008v.008h-.008V11.5zM12 11h.008v.008H12V11zM11.5 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25z" />
                </svg>
            </div>
            <h3 class="app-name">Dot Phrases</h3>
        </div>
        <p class="app-desc">Access clinical dot phrases with formatting preserved. Copy directly into your EMR.</p>
        <div class="app-actions">
            <a href="{{ '/dot-phrase-library/' | relative_url }}" class="btn-install">Open & Install</a>
        </div>
    </div>
</div>

<!-- FAQ -->
<div class="faq-section" style="margin-top: 40px;">
    <h2 class="section-title">Frequently Asked Questions</h2>
    
    <div class="faq-item">
        <div class="faq-question">Do I need to download anything from the App Store?</div>
        <div class="faq-answer">No! PWAs install directly from your browser. There's nothing to download from the App Store or Google Play.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Will my data sync across devices?</div>
        <div class="faq-answer">Currently, data is stored locally on each device. Use the Export feature in each tool to transfer your data between devices.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">How do I uninstall a PWA?</div>
        <div class="faq-answer">On iOS, press and hold the app icon and select "Remove App." On Android, long-press and drag to "Uninstall." On desktop, right-click the app in your taskbar and select "Uninstall."</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Why can't I install from Chrome on my iPhone?</div>
        <div class="faq-answer">Apple only allows PWA installation through Safari on iOS. Open the tool in Safari and use the Share → "Add to Home Screen" option.</div>
    </div>
    
    <div class="faq-item">
        <div class="faq-question">Some tools aren't listed here. Will they become PWAs?</div>
        <div class="faq-answer">Tools that use AI features (like Clinical Flowchart Generator or Differential Mind Map) require significant processing power and won't work well as mobile PWAs. These are best used on desktop.</div>
    </div>
</div>

</div>

<script>
function showPlatform(platform) {
    // Update tabs
    document.querySelectorAll('.platform-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update content
    document.querySelectorAll('.platform-content').forEach(content => content.classList.remove('active'));
    document.getElementById(platform + '-content').classList.add('active');
}
</script>
