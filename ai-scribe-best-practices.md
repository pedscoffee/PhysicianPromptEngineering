---
layout: default
title: AI Scribe Best Practices
description: Practical guidance for maximizing the effectiveness of AI medical scribes, including consent, the "summary" technique, and Physician Prompt Engineering.
permalink: /ai-scribe-best-practices/
---

<div class="hero">
  <div class="container">
    <h1 class="hero-title">AI Scribe Best Practices</h1>
    <p class="hero-subtitle">
      Get the most out of your AI medical scribe with practical strategies for consent, the "end-of-visit summary," and Physician Prompt Engineering.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <div class="card">
        <div class="card-body">
          <p class="text-lg">
            AI medical scribes offer a new way forward—replacing the burden of "pajama time" with a workflow that is faster, better, and requires less energy. By offloading the "secretary part of your brain," you can stop holding details in your working memory and focus entirely on the patient.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Essential Best Practices</h2>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">1. Verbal Consent & Patient Communication</h3>
        </div>
        <div class="card-body">
          <h4>The "Win-Win" Approach</h4>
          <p>
            Obtaining consent might feel awkward the first few times, but most patients react positively. They often "light up" when they realize you will be looking at them instead of typing.
          </p>
          
          <h4>Best Practices</h4>
          <ul>
            <li><strong>Keep it simple</strong> - You don't need a complex legal script.</li>
            <li><strong>Focus on the benefit</strong> - Frame it as a way to improve <em>their</em> visit by freeing you from the computer.</li>
            <li><strong>Practice makes perfect</strong> - Give yourself more than one shot; it becomes natural quickly.</li>
          </ul>
          
          <h4>Recommended Script</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);">
            <p><strong>The "In the Chart" Script:</strong></p>
            <p style="font-style: italic;">"Would it be okay with you if I record our conversation to go in the chart? It helps me not have to type as much while we talk."</p>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">2. The "End-of-Visit Summary" (Crucial)</h3>
        </div>
        <div class="card-body">
          <p>
            Large Language Models (LLMs) have a natural <strong>"recency bias"</strong>—they pay more attention to the beginning and the end of a transcript. You can leverage this to fix errors and ensure a perfect note without manual typing.
          </p>
          
          <h4>How to do it</h4>
          <ul>
            <li><strong>Recap for the family</strong> - "Okay, just to recap: We talked about the pneumonia, we're starting antibiotics, and we'll follow up in 2 days."</li>
            <li><strong>Recap for the scribe</strong> - If the room was chaotic (e.g., screaming toddler), step out and quickly dictate a 20-second summary almost like if you were signing out the patient.</li>
            <li><strong>Why it works</strong> - This clear, authoritative summary at the very end overrides confusing parts of the conversation, often fixing "misheard" details automatically and you'll find the scribe is able to do a much better job</li>
            <li><strong>Practice makes perfect</strong> - Most of the time this isn't necessary, but with more reps you'll come to see situations (like a crying toddler) in advance where a quick recap will help.  Every other part of your workflow you have practiced thousands of times; give this section some practice and time as you find your groove.</li>
          </ul>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">3. Managing Orders & Exams</h3>
        </div>
        <div class="card-body">
          <p>
            When adopting this new workflow, <strong>you don't have to try to change everything at once.</strong>
          </p>
          
          <h4>The Staged Approach</h4>
          <ul>
            <li><strong>Stage 1 (Getting Started):</strong> Continue entering orders and physical exam findings manually (the "old way"). This builds confidence and keeps the workflow manageable. Use your scribe tool's default templates and settings for now.</li>
            <li><strong>Stage 2 (Advanced):</strong> Once comfortable, start verbalizing your exam findings ("Pertinent positives/negatives") while in the room so the scribe picks them up. Practice recognizing when a short recap at the end would be helpful.</li>
            <li><strong>Stage 3 (Optimized):</strong> Use custom LLM Editor prompts to automatically transform the note to match your exact voice for quick and confident review.</li>
          </ul>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">4. The "Reviewer" Mindset</h3>
        </div>
        <div class="card-body">
          <div class="notice-box notice-warning mb-4">
            <p><strong>⚠️ Shift your mental model: You are no longer the Writer; you are the Editor.</strong></p>
          </div>
          
          <p>
            Your goal is for the note to be 95% correct automatically. When reviewing, look for these specific issues:
          </p>
          
          <h4>What to Watch For</h4>
          <div class="two-col-grid mt-4">
            <div>
              <h5>Authority Bias</h5>
              <p>Sometimes the AI cannot distinguish the "voice of authority." If a patient says, <em>"I got pneumonia because I was in the rain,"</em> the AI might document that as your medical assessment. Watch for patient theories appearing as clinical facts.</p>
            </div>
            <div>
              <h5>Chaotic Audio</h5>
              <p>If a child was screaming or multiple people spoke at once, double-check the accuracy. (Using the "End-of-Visit Summary" technique usually prevents these errors).</p>
            </div>

            <div>
            <h5>Specific numbers</h5>
            <p>For the scribe to get an exact number (like "147/92") the audio at that exact moment has to be perfect which is a difficult ask.  Including specific numbers in your recap will help but watch out for these.  Consider referencing other parts of the chart instead of quoting exact numbers.</p>
            </div>

            <div>
            <h5>Overall Accuracy</h5>
            <p>At the end of the day it is your name going on the note.  Make sure you read and agree with every word.  The LLM Editor prompts make this much easier once the output is briefer and in your voice.</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Physician Prompt Engineering</h2>
      
      <div class="card mb-6">
        <div class="card-body">
          <h3>The Subway Analogy</h3>
          <p class="text-lg">
            Think of this workflow like the NYC Subway. It's a complex system, but to use it, you just need to know which train to get on. <strong>Your "train" is your Prompt.</strong> You don't need to understand the underlying code; you just need to know which prompt gets you to your destination (your perfect note).
          </p>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">The Workflow</h3>
        </div>
        <div class="card-body">
          <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-6);">
            <div>
              <h4 style="color: var(--color-primary);">Step 1: The Scribe</h4>
              <p>Use a tool (like DAX, Abridge, or even free tools like Doximity) to capture the raw conversation transcript.</p>
              <p><strong>Result:</strong> A raw record of everything said.</p>
            </div>
            <div>
              <h4 style="color: var(--color-secondary);">Step 2: The Prompt</h4>
              <p>Run that raw transcript through a secure LLM with a custom prompt designed for your specialty and style.</p>
              <p><strong>Result:</strong> A note that looks exactly like <em>you</em> wrote it.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">What You Can Automate</h3>
        </div>
        <div class="card-body">
          <div class="two-col-grid">
            <div>
              <h4>Clinical Documentation</h4>
              <ul>
                <li><strong>HPI:</strong> Condense verbose stories into medical history.</li>
                <li><strong>Assessment:</strong> Force the AI to include your thought process (rule-outs, reasoning).</li>
                <li><strong>Plan:</strong> Format into clear, bulleted instructions.</li>
              </ul>
            </div>
            <div>
              <h4>Patient Instructions (AVS)</h4>
              <ul>
                <li><strong>Adding a Personalized Touch:</strong> Create personalized notes for the patient.</li>
                <li><strong>Example:</strong> "It was great seeing you! We're here for you. Here is your to-do list."</li>
                <li><strong>Benefit:</strong> Adds a level of personal care that was impossible with the old manual workflow.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Getting Started</h3>
        </div>
        <div class="card-body">
          <p class="mb-4">
            We are building a community to share "subway trains" (prompts) so you don't have to build them from scratch.
          </p>
          
          <div class="text-center mt-6">
            <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Explore the Prompt Library →</a>
          </div>
          
          <div class="notice-box notice-info mt-6">
            <p><strong>Tip:</strong> If your prompt isn't perfect, don't give up. Iterating from "okay" to "good" to "great" is what makes the technology disappear so you can focus on the patient.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Summary & Next Steps</h2>
      
      <div class="card">
        <div class="card-body">
          <h3>Unload Your "Secretary Brain"</h3>
          <p class="mb-6">
            The ultimate goal isn't just efficiency; it's presence. By trusting the tool to hold the more mundane details, you can bring your full critical thinking and empathy to the person in front of you.
          </p>

          <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-4); margin: var(--space-4) 0;">
            <div>
              <h4>Quick Wins</h4>
              <ul style="margin: 0;">
                <li>Use the "In the Chart" consent script</li>
                <li>Summarize at the end of complex visits</li>
                <li>Keep orders/exams manual at first</li>
              </ul>
            </div>
            <div>
              <h4>Long Term</h4>
              <ul style="margin: 0;">
                <li>Refine your prompts so your output is just how you like it</li>
                <li>Consider automating other parts of the chart such as custom Patient Instructions</li>
                <li>Share your prompts with the community</li>
              </ul>
            </div>
          </div>
          
          <h3 class="mt-8">Continue Learning</h3>
          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-6);">
            <a href="{{ site.baseurl }}/prompt-library" class="btn btn-primary btn-lg">Browse Prompt Library</a>
            <a href="{{ site.baseurl }}/prompt-manager" class="btn btn-outline btn-lg">Save Your Prompts</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>