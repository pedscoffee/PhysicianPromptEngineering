---
layout: default
title: Software 2.0 - Productivity Suite
description: Discover how modern AI coding assistants make it possible for anyone to create custom productivity tools. Explore our collection of personal projects and learn to build your own.
---

<style>
  .wizard-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    justify-content: center;
    align-items: center;
  }
  .wizard-modal {
    background: var(--color-bg-primary);
    border-radius: var(--radius-lg);
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    padding: var(--space-8);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }
  .wizard-step {
    display: none;
  }
  .wizard-step.active {
    display: block;
  }
  .wizard-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-6);
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-border);
  }
  .tool-category {
    margin-bottom: var(--space-8);
  }
  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-4);
    margin-top: var(--space-4);
  }
  .tool-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
  .tool-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-5);
    transition: all var(--transition-base);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .tool-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary);
  }
  .tool-card h4 {
    margin: 0 0 var(--space-2) 0;
    color: var(--color-primary);
  }
  .tool-card p {
    margin: 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    flex-grow: 1;
  }
</style>

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Software 2.0: Productivity Suite</h1>
    <p class="hero-subtitle">
      The future of software development isn't just for software engineers anymore. With modern AI coding assistants like Claude, Gemini, and others, anyone can create custom applications tailored to their specific needs—no computer science degree required.
    </p>
    <div class="hero-cta">
      <button onclick="startWizard()" class="btn btn-primary btn-lg">Take the Interactive Tour</button>
      <a href="#tools-index" class="btn btn-outline btn-lg">Browse All Tools</a>
    </div>
  </div>
</div>

<!-- What is Software 2.0 -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">What is Software 2.0?</h2>
      
      <div class="two-col-grid">
        <div>
          <h3>A Paradigm Shift</h3>
          <p>
            Traditional programming (Software 1.0) required years of training to write code line by line. Software 2.0 represents a fundamental shift: you describe what you want in natural language, and AI assistants help you build it.
          </p>
          <p>
            This isn't about replacing programmers—it's about democratizing the ability to create custom tools that solve <em>your</em> specific problems.
          </p>
        </div>
        
        <div>
          <h3>Why It Matters for Physicians</h3>
          <p>
            As a physician, you understand your workflow better than any software developer. You know which tasks are repetitive, which tracking tools you need, and which visualizations would help your learning.
          </p>
          <p>
            With Software 2.0, you can build those tools yourself—or adapt existing ones to fit your exact needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Core Principles -->
<section class="section">
  <div class="container">
    <h2 class="text-center mb-8">Core Principles for Building with AI</h2>
    
    <div class="grid grid-cols-1 grid-cols-3">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">1. Start Small & Iterate</h3>
        </div>
        <div class="card-body">
          <p>Begin with a simple version of your tool. Get it working, then add features incrementally. AI assistants excel at iterative development.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">2. Be Specific in Prompts</h3>
        </div>
        <div class="card-body">
          <p>The clearer your description of what you want, the better the result. Provide examples, describe edge cases, and specify your preferences.</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">3. Test & Validate</h3>
        </div>
        <div class="card-body">
          <p>AI-generated code needs testing just like human-written code. Start with non-critical applications and validate thoroughly before production use.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Tools Index -->
<section class="section bg-secondary" id="tools-index">
  <div class="container">
    <h2 class="text-center mb-4">Explore the Collection</h2>
    <p class="text-center text-secondary mb-8" style="max-width: 800px; margin-left: auto; margin-right: auto;">
      These tools were created for personal use to solve specific workflow challenges. They're offered as inspiration and starting points for your own projects. Feel free to use them as-is, modify them, or use them as examples for building something entirely new.
    </p>
    
    <!-- Productivity & Tracking -->
    <div class="tool-category">
      <h3 class="mb-4 text-primary">Productivity & Tracking</h3>
      <div class="tool-grid">
        <a href="{{ site.baseurl }}/clockwork-timebox" class="tool-card-link">
          <div class="tool-card">
            <h4>ClockWork TimeBox</h4>
            <p>Visual timer and task manager for clinical sessions. Track time across multiple activities with customizable blocks.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/clinic-visit-tracker" class="tool-card-link">
          <div class="tool-card">
            <h4>RVU Data Tracker</h4>
            <p>Track clinic volume and RVU production over time. Visualize productivity trends and plan compensation.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/qi-project-tracker" class="tool-card-link">
          <div class="tool-card">
            <h4>QI Project Tracker</h4>
            <p>Manage Quality Improvement projects with milestones, metrics tracking, and progress visualization.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/qi-project-planner" class="tool-card-link">
          <div class="tool-card">
            <h4>QI Project Planner</h4>
            <p>Plan your QI project with a step-by-step IHI Model for Improvement wizard.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/trainee-goal-setter" class="tool-card-link">
          <div class="tool-card">
            <h4>Trainee Goal Setter</h4>
            <p>Set rotation goals with structured self-assessment and attending feedback tracking.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/pto-planner" class="tool-card-link">
          <div class="tool-card">
            <h4>Annual PTO Planner</h4>
            <p>Visualize and plan your time off for the year with calendar integration and balance tracking.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/cme-tracker" class="tool-card-link">
          <div class="tool-card">
            <h4>CME & Budget Tracker</h4>
            <p>Track Continuing Medical Education credits, conferences, and professional development budget.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/reflect" class="tool-card-link">
          <div class="tool-card">
            <h4>Reflect</h4>
            <p>Interactive tool to help you expand a differential diagnosis; great for teaching.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/cpt-calculator" class="tool-card-link">
          <div class="tool-card">
            <h4>E&M Calculator</h4>
            <p>Calculate E&M codes based on medical decision making complexity and documentation requirements.</p>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Visualization Tools -->
    <div class="tool-category">
      <h3 class="mb-4 text-accent">Visualization Tools</h3>
      <div class="tool-grid">
        <a href="{{ site.baseurl }}/clinical-flowchart" class="tool-card-link">
          <div class="tool-card">
            <h4>Clinical Flowchart Generator</h4>
            <p>Transform clinical logic into visual flowcharts using AI or manual editing. Perfect for treatment algorithms.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/differential-mindmap" class="tool-card-link">
          <div class="tool-card">
            <h4>Differential Mind Map</h4>
            <p>Generate organized mind maps for differential diagnoses. Visualize diagnostic thinking by system.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/mechanism-mapper" class="tool-card-link">
          <div class="tool-card">
            <h4>Pathophysiology Mechanism Mapper</h4>
            <p>Create visual diagrams of disease mechanisms and pathophysiology pathways for education.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/patient-timeline" class="tool-card-link">
          <div class="tool-card">
            <h4>Patient Timeline Visualizer</h4>
            <p>Create interactive patient timelines for case presentations with temporal progression visualization.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/workflow-optimizer" class="tool-card-link">
          <div class="tool-card">
            <h4>Clinical Workflow Optimizer</h4>
            <p>Map and optimize clinical workflows with drag-and-drop flowcharts. Identify bottlenecks.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/interactive-anatomy" class="tool-card-link">
          <div class="tool-card">
            <h4>Interactive Anatomy Tool</h4>
            <p>Quick-reference visual tool for patient education with clean, approachable anatomical diagrams.</p>
          </div>
        </a>
        
      </div>
    </div>
    
    <!-- Development Resources -->
    <div class="tool-category">
      <h3 class="mb-4 text-secondary">Development Resources</h3>
      <div class="tool-grid">
        <a href="{{ site.baseurl }}/first-steps" class="tool-card-link">
          <div class="tool-card">
            <h4>First Steps: Build Your First App</h4>
            <p>Complete beginner tutorial: create a simple to-do app using Google Gemini. No programming experience required.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/next-steps" class="tool-card-link">
          <div class="tool-card">
            <h4>Next Steps: Version Control</h4>
            <p>Learn why Git is essential and how to use GitHub Desktop to experiment fearlessly with your code.</p>
          </div>
        </a>
        
        <a href="{{ site.baseurl }}/git-master" class="tool-card-link">
          <div class="tool-card">
            <h4>Git Tutor</h4>
            <p>Comprehensive interactive lessons on Git concepts and workflows for clinical tool development.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started -->
<section class="section" id="getting-started">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Ready to Build Your Own?</h2>
      
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">You Don't Need to Be a Programmer</h3>
        </div>
        <div class="card-body">
          <p>
            If you can describe what you want, you can build it. Modern AI coding assistants like <strong>Claude Code</strong> (Anthropic), <strong>Google Antigravity</strong>, <strong>GitHub Copilot</strong>, and <strong>Cursor</strong> can help you create functional applications from natural language descriptions.
          </p>
          <p>
            These tools handle the technical complexity while you focus on the clinical logic and user experience you need.
          </p>
        </div>
      </div>
      
      <h3 class="mb-4">Getting Started Steps</h3>
      
      <div class="two-col-grid mb-8">
        <div>
          <h4>1. Choose Your AI Assistant</h4>
          <ul>
            <li><strong>Things are rapidly changing for the better</strong> - these are two great options but I'd briefly browse Reddit or ask a LLM what the current best tools are right now if you're reading this past Winter 2026.</li>
            <li><strong>Claude</strong> - Seems to be currently winning</li>
            <li><strong>Google Antigravity</strong> - Full-featured AI coding environment and all you need is your google account</li>
          </ul>
        </div>
        
        <div>
          <h4>2. Learn Basic Git (Optional but Highly Recommended)</h4>
          <ul>
            <li>Version control helps track changes</li>
            <li>Easy to undo mistakes</li>
            <li>Essential for collaboration</li>
            <li>Lets you take risks and experiment fearlessly, makes the whole process a lot more fun and less tedious</li>
            <li>Check out our <a href="{{ site.baseurl }}/git-master">Git Tutor</a> to get started</li>
          </ul>
        </div>
        
        <div>
          <h4>3. Start with a Simple Project</h4>
          <ul>
            <li>Pick a small, repetitive task you want to automate</li>
            <li>Describe it clearly to your AI assistant</li>
            <li>Iterate based on results</li>
            <li>Test thoroughly before relying on it</li>
          </ul>
        </div>
        
        <div>
          <h4>4. Explore & Adapt Existing Tools</h4>
          <ul>
            <li>Browse our <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" target="_blank">GitHub repository</a></li>
            <li>Clone projects you find useful</li>
            <li>Ask AI to help you customize them</li>
            <li>Share your improvements back to the community</li>
          </ul>
        </div>
      </div>
      
      <div class="text-center">
        <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" class="btn btn-primary btn-lg" target="_blank">View on GitHub</a>
        <a href="{{ site.baseurl }}/git-master" class="btn btn-outline btn-lg">Learn Git Basics</a>
      </div>
    </div>
  </div>
</section>

<!-- Important Disclaimers -->
<section class="section bg-tertiary">
  <div class="container">
    <div class="content-centered notice-box notice-warning">
      <h3 class="text-warning mb-4">Important Notice: Personal Projects Only</h3>
      <p>
        <strong>These tools are personal projects created for individual use.</strong> They are shared as examples and inspiration for what you can build with modern AI coding assistants.
      </p>
      <p>
        <strong>Not for clinical use without validation:</strong> These tools have not been validated for clinical or production use. If you wish to use any of these tools in a real-world clinical setting, appropriate validation, testing, and customization by qualified IT departments and clinical informatics teams is required.
      </p>
      <p>
        <strong>No warranties or guarantees:</strong> These tools are provided "as-is" without any warranties. Use at your own risk and always verify outputs before making any clinical decisions.
      </p>
      <p>
        <strong>Built for learning and exploration:</strong> The primary purpose of sharing these projects is to demonstrate what's possible and to encourage you to build your own custom solutions for your unique needs.
      </p>
    </div>
  </div>
</section>

<!-- Community & Collaboration -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">A Solo Project (For Now) — Join Me!</h2>
      
      <p class="text-lg text-center text-secondary mb-6">
        This is currently a solo project by a practicing physician exploring the intersection of clinical medicine and modern AI development.  The goal is to start a community where we can all benefit from each other's work.
      </p>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">I Genuinely Welcome Contributions</h3>
        </div>
        <div class="card-body">
          <p>
            This project needs your expertise, ideas, and contributions. Whether you're a physician who has built your own tools, a developer interested in healthcare applications, or someone who just has ideas for improvements—I'd love to hear from you.
          </p>
          
          <h4>Ways to Contribute:</h4>
          <ul>
            <li><strong>Share your own tools</strong> - Built something useful? Let's add it to the collection</li>
            <li><strong>Improve existing tools</strong> - Found a bug or have an enhancement? Submit a pull request</li>
            <li><strong>Documentation</strong> - Help make these tools more accessible to others</li>
            <li><strong>Ideas & feedback</strong> - Suggest new tools or improvements</li>
            <li><strong>Testing & validation</strong> - Help validate tools for broader use</li>
          </ul>
          
          <div class="text-center mt-6">
            <a href="{{ site.baseurl }}/support#contribute" class="btn btn-primary btn-lg">Learn How to Contribute</a>
            <a href="{{ site.baseurl }}/discussions" class="btn btn-outline btn-lg">Join the Discussion</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Interactive Wizard Modal -->
<div class="wizard-overlay" id="wizardOverlay">
  <div class="wizard-modal">
    <div class="wizard-step active" id="step1">
      <h2>Welcome to Software 2.0</h2>
      <p class="text-lg mb-4">
        Let's take a quick tour of what Software 2.0 means and explore a few example tools to see what's possible when you combine clinical expertise with AI coding assistants.
      </p>
      <p>
        This will take about 2-3 minutes. You can skip it anytime if you prefer to explore on your own.
      </p>
    </div>
    
    <div class="wizard-step" id="step2">
      <h2>What Makes Software 2.0 Different?</h2>
      <p class="mb-4">
        Traditional software development (Software 1.0) required you to write code line by line—a skill that took years to master. Software 2.0 changes everything:
      </p>
      <div class="card mb-4">
        <div class="card-body">
          <h4>You describe what you want in natural language</h4>
          <p>"I need a tool to track my CME credits and budget for the year, with categories for conferences, online courses, and books."</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4>AI helps you build it</h4>
          <p>Modern AI assistants like Claude, Gemini, and others can generate working code from your description, iterate based on your feedback, and help you customize it exactly how you need.</p>
        </div>
      </div>
    </div>
    
    <div class="wizard-step" id="step3">
      <h2>Example: RVU Data Tracker</h2>
      <p class="mb-4">
        Let's look at a real example. The <strong>RVU Data Tracker</strong> helps physicians track clinic volume and productivity.
      </p>
      <div class="card mb-4" style="background: var(--color-bg-tertiary);">
        <div class="card-body">
          <h4>The Problem</h4>
          <p>"I want to track my clinic visits and RVUs over time to understand my productivity and plan my compensation."</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4>The Solution</h4>
          <p>Built with AI assistance in a few iterations, the tool provides:</p>
          <ul>
            <li>Easy data entry for each clinic session</li>
            <li>Visual charts showing trends over time</li>
            <li>Exportable reports for compensation planning</li>
            <li>Local storage—all data stays on your device</li>
          </ul>
          <a href="{{ site.baseurl }}/clinic-visit-tracker" class="btn btn-secondary btn-sm">Try It Out</a>
        </div>
      </div>
    </div>
    
    <div class="wizard-step" id="step4">
      <h2>Example: Clinical Flowchart Generator</h2>
      <p class="mb-4">
        The <strong>Clinical Flowchart Generator</strong> turns clinical algorithms into visual diagrams—either by AI parsing text or manual creation.
      </p>
      <div class="card mb-4" style="background: var(--color-bg-tertiary);">
        <div class="card-body">
          <h4>The Problem</h4>
          <p>"I need to create visual flowcharts for clinical pathways to teach residents, but drawing them manually is tedious."</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4>The Solution</h4>
          <p>This tool demonstrates advanced capabilities:</p>
          <ul>
            <li>AI parsing of clinical text into structured flowcharts</li>
            <li>Visual editor for manual refinement</li>
            <li>Export to multiple formats</li>
            <li>Runs entirely in your browser—no server needed</li>
          </ul>
          <a href="{{ site.baseurl }}/clinical-flowchart" class="btn btn-accent btn-sm">Try It Out</a>
        </div>
      </div>
    </div>
    
    <div class="wizard-step" id="step5">
      <h2>You Can Build This Too</h2>
      <p class="mb-4">
        Here's the important part: <strong>you don't need to be a programmer to create tools like these.</strong>
      </p>
      <div class="two-col-grid mb-4">
        <div class="card">
          <div class="card-body">
            <h4>Start Small</h4>
            <p>Pick one repetitive task you do regularly. Describe it to an AI coding assistant. Iterate until it works.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4>Adapt Existing Tools</h4>
            <p>Clone a tool from our GitHub, ask AI to help you customize it for your needs.</p>
          </div>
        </div>
      </div>
      <p class="text-center">
        All the tools on this page were built this way—combining clinical expertise with AI assistance. You can do the same.
      </p>
    </div>
    
    <div class="wizard-step" id="step6">
      <h2>Ready to Explore?</h2>
      <p class="text-lg mb-6">
        You've completed the tour! Now you can:
      </p>
      <div class="grid grid-cols-1 grid-cols-3" style="gap: var(--space-4);">
        <div class="card">
          <div class="card-body text-center">
            <h4>Browse Tools</h4>
            <p class="mb-4">Explore all 17 tools in the collection</p>
            <a href="#tools-index" onclick="closeWizard()" class="btn btn-primary btn-sm">Browse Collection</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body text-center">
            <h4>Learn to Build</h4>
            <p class="mb-4">Get started with your own projects</p>
            <a href="#getting-started" onclick="closeWizard()" class="btn btn-secondary btn-sm">Getting Started Guide</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body text-center">
            <h4>View Source Code</h4>
            <p class="mb-4">See how these tools were built</p>
            <a href="https://github.com/pedscoffee/PhysicianPromptEngineering/" target="_blank" class="btn btn-accent btn-sm">GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="wizard-navigation">
      <button class="btn btn-outline" id="prevBtn" onclick="changeStep(-1)">← Previous</button>
      <button class="btn btn-outline" onclick="closeWizard()">Skip Tour</button>
      <button class="btn btn-primary" id="nextBtn" onclick="changeStep(1)">Next →</button>
    </div>
  </div>
</div>

<script>
let currentStep = 1;
const totalSteps = 6;

function startWizard() {
  document.getElementById('wizardOverlay').style.display = 'flex';
  currentStep = 1;
  showStep(currentStep);
  
  // Mark as seen in localStorage
  localStorage.setItem('software20WizardSeen', 'true');
}

function closeWizard() {
  document.getElementById('wizardOverlay').style.display = 'none';
}

function showStep(step) {
  // Hide all steps
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  
  // Show current step
  document.getElementById('step' + step).classList.add('active');
  
  // Update button states
  document.getElementById('prevBtn').style.display = step === 1 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').textContent = step === totalSteps ? 'Start Exploring →' : 'Next →';
}

function changeStep(direction) {
  currentStep += direction;
  
  if (currentStep > totalSteps) {
    closeWizard();
    return;
  }
  
  if (currentStep < 1) {
    currentStep = 1;
  }
  
  showStep(currentStep);
}

// Close wizard when clicking outside modal
document.getElementById('wizardOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeWizard();
  }
});

// Auto-show wizard for first-time visitors (optional - commented out by default)
// window.addEventListener('DOMContentLoaded', function() {
//   if (!localStorage.getItem('software20WizardSeen')) {
//     setTimeout(startWizard, 1000);
//   }
// });
</script>
