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
      Practical guidance for maximizing the effectiveness of AI medical scribes, including consent, setup, review workflows, and advanced AI editing techniques.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <div class="card">
        <div class="card-body">
          <p class="text-lg">
            AI medical scribes offer a new way forward—replacing the burden of "pajama time" with a workflow that is faster, better, and requires less energy. By offloading the "secretary" part of your brain, you can stop holding details in your working memory and focus entirely on the patient.
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
          
          <h4>Possible Scripts</h4>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);">
            <p><strong>"In the Chart"</strong></p>
            <p style="font-style: italic;">"Would it be okay with you if I record our conversation to go in the chart? It helps me not have to type as much while we talk."</p>
          </div>

          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);">
          <p><strong>"Just Ask"</strong></p>
          <p style="font-style: italic;">"Is it okay with you if I use an AI scribe for our visit today?"</p>
          </div>

           <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin-top: var(--space-4);">
          <p><strong>Triage</strong></p>
          <p style="font-style: italic;">"Dr. Smith uses an AI scribe for recording visits so that they don't have to type as much while you talk. Is that okay with you?"</p>
          </div>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">2. The "End-of-Visit Summary" (Crucial)</h3>
        </div>
        <div class="card-body">
          <p>
            Large Language Models (LLMs) have a natural <strong>"recency bias"</strong>—they pay more attention to the beginning and the end of a transcript. You can leverage this to get a much more organized note.  Many tools recommend starting with introducing who is in the room and the chief complaint for the same reason.
          </p>
          
          <h4>How to do it</h4>
          <ul>
            <li><strong>Recap for the family</strong> - "Okay, just to recap: We talked about the pneumonia, we're starting antibiotics, and we'll follow up in 2 days."</li>
            <li><strong>Recap for the scribe</strong> - If the room was chaotic (e.g., screaming toddler), step out and quickly dictate a 20-second summary almost like if you were signing out the patient.</li>
            <li><strong>Why it works</strong> - This clear, authoritative summary at the very end overrides confusing parts of the conversation, often fixing "misheard" details automatically and you'll find the scribe is able to do a much better job.</li>
            <li><strong>Practice makes perfect</strong> - Most of the time this isn't necessary, but with more reps you'll come to see situations (like a crying toddler) in advance where a quick recap will help.  With practice you'll find your groove.</li>
          </ul>
        </div>
      </div>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">3. Give Yourself Time to Learn Something New</h3>
        </div>
        <div class="card-body">
          <p>
            When trying out these new tools, <strong>you don't have to try to change everything at once.</strong>  Every other part of your job you have practiced thousands of times; give this some practice and time as you find what works for you.  Don't judge it by your first few attempts, and recognize what you want may be different than your colleagues.  Part of the beauty of this new set up is it is infinitely customizable to your exact preferences if you're willing to take the time.  It won't happen overnight but small iterative changes can get you there.
          </p>
          
          <h4>The Staged Approach</h4>
          <ul>
            <li><strong>Stage 1 (Getting Started):</strong> Continue entering orders and physical exam findings by hand as you always have done. This builds confidence and keeps the workflow manageable. Use your scribe tool's default templates and settings for now. Assess what you like and what you don't.</li>
            <li><strong>Stage 2 (Advanced):</strong> Once comfortable, start verbalizing your exam findings ("Pertinent positives/negatives") while in the room so the scribe picks them up. Practice recognizing when a short recap at the end would be helpful. Adjust your scribe's default settings to be more to your liking. Continue to observe what is working and what could be improved</li>
            <li><strong>Stage 3 (Optimized):</strong> Use custom LLM Editor prompts to automatically transform the note to match your exact voice for quick and confident review.  Start by creating a few examples of what ideal notes would look like.  These are your few shot examples.  Then create an editor prompt that takes your scribe tool's default outputs and transforms them into exactly what you want to see by trying to copy the pattern of your examples.  You can use the tools on our site to help get started!  Build off a prompt from the library, use the remix tool to modify it and make it your own, or use the AI assistant to try to do it from scratch.  The state of the art LLM's are also very helpful with their increased compute power.  If you haven't tried any of them before I would recommend trying Google's - it is free if you have a gmail account. See prompt engineering best practices page for more.</li>
          </ul>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">4. The "Reviewer" Mindset</h3>
        </div>
        <div class="card-body">
          <div class="notice-box notice-warning mb-4">
            <p><strong>Shift your mental model: You are no longer the Writer; you are the Editor.</strong></p>
          </div>
          
          <p>
            It is a reasonable expectation that the scribe you are using should be able to give you notes that are at least 95% correct automatically. When reviewing, look for these specific issues:
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
            Think of this workflow like the NYC Subway. It's a complex system, but to use it, you just need to know which train to get on. <strong>Your "train" is your Prompt.</strong> You don't need to understand the underlying prompt; you just need to know which prompt gets you to your destination (your perfect note). That being said as you explore this topic I think you'll be pleasantly surprised that writing prompts can be easier than you might think.
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
              <p>Use a tool (like DAX, Freed, Abridge, or even free tools like Doximity) to capture the raw conversation transcript.</p>
              <p><strong>Result:</strong> That tool's best attempt to make a medical note that would make most doctors happy.  There's a saying that goes "You can please some of the people all of the time, you can please all of the people some of the time, but you can't please all of the people all of the time".  Even if the tool is doing a phenomenal job, since it wasn't made for you specifically there are likely details you would like to be different. If you create a personalized editor prompt for yourself you can shift the output from generally acceptable to something that you are happy with pretty much all the time.</p>
            </div>
            <div>
              <h4 style="color: var(--color-secondary);">Step 2: The Prompt</h4>
              <p>Run that raw transcript through a secure LLM with a custom prompt designed for your specialty and style.</p>
              <p><strong>Result:</strong> A note that looks exactly like <em>you</em> wrote it.</p>
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