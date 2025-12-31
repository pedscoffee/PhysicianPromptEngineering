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
    <h1>Contribute to the Project</h1>
    <p>
        This is an open-source initiative built for the medical community. All resources remain free and open-source. We welcome contributions—whether you share a refined prompt, a dot phrase, or feedback on how to improve these tools.
    </p>
</div>

<div id="contribute"></div>

<div class="section-header">
    <h2>Submit a Contribution</h2>
    <p>
        Your contribution helps build a better resource for everyone. Every specialty faces unique documentation challenges, and your insights could benefit colleagues across the field.
    </p>
</div>

<div class="card-grid" style="display: flex; justify-content: center;">
    <div class="info-card" style="max-width: 600px; width: 100%;">
        <h3>Submission Form</h3>
        <p>Use our form below to submit your prompt, dot phrase, or feedback directly. We'll review and add it to the library.</p>
        <a href="#submit-form" class="btn-primary" style="margin-top: 15px;">Jump to Form</a>
    </div>
</div>

<div class="info-card" style="max-width: 800px; margin: 0 auto 40px;">
    <h3>Submission Guidelines</h3>
    <ul style="margin-top: 15px; padding-left: 20px; color: #475569;">
        <li><strong>Specialty/Setting:</strong> (e.g., Pediatrics - Outpatient, Emergency Medicine)</li>
        <li><strong>Title:</strong> Clear, descriptive name for your prompt or tool</li>
        <li><strong>Description:</strong> Briefly explain the use case and how it helps.</li>
        <li><strong>Content:</strong> Copy-paste the complete prompt or text.</li>
        <li><strong>Privacy:</strong> Please ensure no patient info (PHI) is included.</li>
    </ul>
</div>

<!-- Submission Form -->
<div id="submit-form" style="margin-bottom: 60px;">
    <div style="background: #f8fafc; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScicxuLRUnXqv43QbRZ2zcYWuX47B_HOhJM3ir7dV11IE4Gpw/viewform?embedded=true" width="100%" height="863" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading...</iframe>
    </div>
</div>

<div style="text-align: center; margin-top: 60px; padding: 40px; background: #f8fafc; border-radius: 12px;">
    <h3>Join the Community</h3>
    <p style="margin-bottom: 20px; color: #475569;">
        Get quarterly tips on clinical AI, prompt engineering, and workflow optimization.
    </p>
    <a href="{{ site.baseurl }}/newsletter" class="btn-primary" style="background: #f97316;">Subscribe to Newsletter</a>
</div>
