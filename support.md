---
layout: page
title: Support & Contribute
description: "Support the project with a Value for Value model or contribute your own custom AI prompts to our shared clinical prompt library."
permalink: /support/
---

<style>
    .support-hero {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        padding: 60px 30px;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 40px;
        border: 1px solid #bae6fd;
    }

    .support-hero h1 {
        color: #0369a1;
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    .support-hero p {
        font-size: 1.2em;
        color: #0c4a6e;
        max-width: 800px;
        margin: 0 auto 30px;
        line-height: 1.6;
    }

    .section-header {
        text-align: center;
        margin-bottom: 40px;
        margin-top: 60px;
    }

    .section-header h2 {
        color: #0f172a;
        font-size: 2em;
        margin-bottom: 15px;
    }

    .section-header p {
        color: #475569;
        font-size: 1.1em;
        max-width: 700px;
        margin: 0 auto;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
    }

    .info-card {
        background: white;
        padding: 30px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .info-card h3 {
        color: #2563eb;
        margin-bottom: 15px;
    }

    .value-model {
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
        text-align: center;
        border: 1px solid #e2e8f0;
    }

    .btn-primary {
        background: #2563eb;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        transition: background 0.2s;
    }

    .btn-primary:hover {
        background: #1d4ed8;
        color: white;
        text-decoration: none;
    }

    .btn-outline {
        background: transparent;
        color: #2563eb;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
        border: 2px solid #2563eb;
        transition: all 0.2s;
    }

    .btn-outline:hover {
        background: #eff6ff;
        text-decoration: none;
    }
</style>

<div class="support-hero">
    <h1>Support the Community</h1>
    <p>
        Physician Prompt Engineering is a community-driven project. All resources are free at this time thanks to your generous support. You can help by contributing your expertise or supporting development.
    </p>
</div>

<div id="contribute"></div>

<div class="section-header">
    <h2>Contribute Your Expertise</h2>
    <p>
        Every specialty faces unique documentation challenges. By sharing your refined prompts, you help colleagues save hours of trial and error while advancing the entire field of clinical AI documentation.
    </p>
</div>

<div class="card-grid">
    <div class="info-card">
        <h3>Option 1: Quick Submission</h3>
        <p>Use our form below to submit your prompt directly. We'll review and add it to the library.</p>
        <a href="#submit-form" class="btn-primary" style="margin-top: 15px;">Jump to Form</a>
    </div>

    <div class="info-card">
        <h3>Option 2: GitHub Contribution</h3>
        <p>Visit our GitHub repository to join discussions or submit a pull request with your prompt file.</p>
        <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="btn-outline" target="_blank" style="margin-top: 15px;">Visit GitHub</a>
    </div>
</div>

<div class="info-card" style="max-width: 800px; margin: 0 auto 40px;">
    <h3>Submission Requirements</h3>
    <ul style="margin-top: 15px; padding-left: 20px; color: #475569;">
        <li><strong>Specialty/Setting:</strong> (e.g., Pediatrics - Outpatient, Emergency Medicine)</li>
        <li><strong>Prompt Title:</strong> Clear, descriptive name</li>
        <li><strong>Use Case:</strong> What problem does this solve?</li>
        <li><strong>Testing Notes:</strong> How long have you used it? Approximate number of encounters?</li>
        <li><strong>The Complete Prompt:</strong> Copy-paste ready, under 5,000 characters</li>
        <li><strong>Quality Guidelines:</strong> Include synthetic examples, test on min 10 encounters, remove institution-specific info.</li>
    </ul>
</div>

<!-- Submission Form -->
<div id="submit-form" style="margin-bottom: 60px;">
    <div style="background: #f8fafc; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScicxuLRUnXqv43QbRZ2zcYWuX47B_HOhJM3ir7dV11IE4Gpw/viewform?embedded=true" width="100%" height="863" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading...</iframe>
    </div>
</div>

<div id="support"></div>

<div class="section-header">
    <h2>Support This Project</h2>
    <p>
        We believe in an honor system "Pay What You Can" model. If you find value in these tools and they save you time in your clinical practice, consider supporting the project.
    </p>
</div>

<div class="value-model">
    <h3>Value for Value</h3>
    <p style="max-width: 700px; margin: 0 auto 30px; color: #475569;">
        Your support keeps these tools ad-free, private, and open-source. It funds the development of new features like the local AI Prompt Assistant and ensures we can continue building for the medical community. Choose a contribution level that matches your current season of life.
    </p>

    <script async src="https://js.stripe.com/v3/buy-button.js"></script>
    <stripe-buy-button
        buy-button-id="buy_btn_1SNVZe7Uvbzj9s15pCFsmFpr"
        publishable-key="pk_live_51SNUyr7Uvbzj9s15RUuLxFZ59ZIV0Mlh9sZSz01SpTxbvAgHyUmPDYSKWxLfi352CPXoaG2ztf1FE349LaMp18Wj00Saf0EVjo">
    </stripe-buy-button>
</div>

<div style="text-align: center; margin-top: 60px; padding: 40px; background: #f8fafc; border-radius: 12px;">
    <h3>Join the Community</h3>
    <p style="margin-bottom: 20px; color: #475569;">
        Get weekly tips on clinical AI, prompt engineering, and workflow optimization.
    </p>
    <a href="{{ site.baseurl }}/blog#newsletter" class="btn-primary" style="background: #f97316;">Subscribe to Newsletter</a>
</div>
