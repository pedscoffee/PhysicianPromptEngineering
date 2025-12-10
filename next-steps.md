---
layout: default
title: Next Steps - Version Control with Git
description: Learn why Git is essential for Software 2.0 development, with a beginner-friendly guide to GitHub Desktop and version control basics.
permalink: /next-steps/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">Next Steps: Master Version Control</h1>
    <p class="hero-subtitle">
      Once you've built your first app, Git becomes your safety net. Learn how version control lets you experiment freely without fear of breaking things.
    </p>
  </div>
</div>

<!-- Why Git Matters -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Why Git Changes Everything</h2>
      
      <div class="card mb-6">
        <div class="card-body">
          <h3>The Problem Without Version Control</h3>
          <p class="text-lg">
            You've built your to-do app. It works! Now you want to add a new feature, but you're worried:
          </p>
          <ul>
            <li>"What if I break something and can't get back to the working version?"</li>
            <li>"Should I save a copy called <code>todo-app-backup-v2-final-FINAL.html</code>?"</li>
            <li>"How do I try different approaches without losing my progress?"</li>
          </ul>
          <p class="text-lg">
            This fear holds you back from experimenting. <strong>Git solves this completely.</strong>
          </p>
        </div>
      </div>
      
      <div class="two-col-grid">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">What Git Does</h3>
          </div>
          <div class="card-body">
            <ul>
              <li><strong>Snapshots</strong> - Save the exact state of your code at any moment</li>
              <li><strong>Time Travel</strong> - Go back to any previous version instantly</li>
              <li><strong>Branching</strong> - Try new ideas without affecting your working code</li>
              <li><strong>Collaboration</strong> - Work with others without conflicts</li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Why It Matters for Software 2.0</h3>
          </div>
          <div class="card-body">
            <ul>
              <li>AI generates different solutions each time - save what works</li>
              <li>Experiment with AI suggestions fearlessly</li>
              <li>Keep working versions while testing improvements</li>
              <li>Share your tools with others via GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Git Basics -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Git Basics: The Core Concepts</h2>
      
      <div class="card mb-6">
        <div class="card-body">
          <h3>Think of Git Like a Video Game Save System</h3>
          <div class="grid grid-cols-1 grid-cols-3" style="gap: var(--space-4); margin-top: var(--space-4);">
            <div>
              <h4>1. Commit = Save</h4>
              <p>Create a "save point" of your code at its current state. You can always come back to any commit.</p>
            </div>
            <div>
              <h4>2. Branch = Alternate Timeline</h4>
              <p>Create a parallel version to try new things. If it works, merge it back. If not, delete it.</p>
            </div>
            <div>
              <h4>3. Repository = Save File</h4>
              <p>The container holding all your commits and branches. Lives on your computer and (optionally) on GitHub.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Getting Started with GitHub Desktop -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Getting Started with GitHub Desktop</h2>
      
      <p class="text-center text-lg mb-8">
        GitHub Desktop is the easiest way to use Git—no command line needed. It's free and works on Mac and Windows.
      </p>
      
      <!-- Step 1 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 1: Install GitHub Desktop</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Go to <a href="https://desktop.github.com" target="_blank">desktop.github.com</a></li>
            <li>Download and install for your operating system</li>
            <li>Sign in with a GitHub account (create one for free if needed)</li>
          </ol>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 2: Create Your First Repository</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Open GitHub Desktop</li>
            <li>Click "Create a New Repository on your hard drive"</li>
            <li>Name it (e.g., "my-todo-app")</li>
            <li>Choose where to save it</li>
            <li>Click "Create Repository"</li>
          </ol>
          <p class="mt-4"><strong>What just happened?</strong> You created a folder with Git tracking enabled. Any files you put here can now be version-controlled.</p>
        </div>
      </div>
      
      <!-- Step 3 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 3: Add Your To-Do App</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Copy your <code>todo-app.html</code> file into the repository folder</li>
            <li>GitHub Desktop will detect the new file</li>
            <li>In the bottom left, write a commit message (e.g., "Initial working to-do app")</li>
            <li>Click "Commit to main"</li>
          </ol>
          <p class="mt-4"><strong>Congratulations!</strong> You just created your first commit—a snapshot you can always return to.</p>
        </div>
      </div>
      
      <!-- Step 4 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 4: Make Changes Safely</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Open <code>todo-app.html</code> in your editor</li>
            <li>Make some changes (try changing colors or adding a feature)</li>
            <li>Save the file</li>
            <li>Go back to GitHub Desktop—it shows you exactly what changed</li>
            <li>Write a commit message (e.g., "Changed color scheme to blue")</li>
            <li>Click "Commit to main"</li>
          </ol>
          <p class="mt-4"><strong>Key insight:</strong> You now have TWO versions saved. If the new changes break something, you can always go back to the previous commit.</p>
        </div>
      </div>
      
      <!-- Step 5 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 5: Time Travel (Viewing History)</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>In GitHub Desktop, click the "History" tab</li>
            <li>You'll see all your commits listed</li>
            <li>Click on any commit to see what changed</li>
            <li>To go back to a previous version, right-click and choose "Revert Changes in Commit"</li>
          </ol>
          <p class="mt-4"><strong>This is powerful:</strong> You can never truly "break" your code. Every version is preserved.</p>
        </div>
      </div>
      
      <!-- Step 6 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 6 (Optional): Publish to GitHub</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Click "Publish repository" in GitHub Desktop</li>
            <li>Choose whether to make it public or private</li>
            <li>Click "Publish Repository"</li>
          </ol>
          <p class="mt-4"><strong>Benefits:</strong> Your code is now backed up online, you can access it from anywhere, and you can share it with others.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Common Workflows -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Common Workflows for Software 2.0 Development</h2>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">Workflow 1: Experimenting with AI Suggestions</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Make sure your current code is committed</li>
            <li>Ask Gemini for an improvement</li>
            <li>Replace your code with the new AI-generated code</li>
            <li>Test it</li>
            <li><strong>If it works:</strong> Commit with a descriptive message</li>
            <li><strong>If it doesn't:</strong> Right-click in GitHub Desktop → "Discard changes" → Your old version is back!</li>
          </ol>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">Workflow 2: Trying Major Changes</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Create a new branch (Branch → New Branch)</li>
            <li>Name it based on what you're trying (e.g., "add-priority-feature")</li>
            <li>Make your changes in this branch</li>
            <li>Test thoroughly</li>
            <li><strong>If it works:</strong> Merge back to main</li>
            <li><strong>If it doesn't:</strong> Switch back to main branch, delete experimental branch</li>
          </ol>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Workflow 3: Sharing Your Work</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Commit all your changes</li>
            <li>Publish to GitHub (if not already published)</li>
            <li>Add a <code>README.md</code> file explaining what your tool does</li>
            <li>Share the GitHub link with colleagues</li>
            <li>They can download it, modify it, and share improvements back</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Learn More -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Ready to Dive Deeper?</h2>
      
      <div class="card mb-6">
        <div class="card-body text-center">
          <h3>Continue Learning with Our Git Tutor</h3>
          <p class="text-lg mb-6">
            The <strong>Git Tutor</strong> provides comprehensive, interactive lessons on Git concepts and workflows specifically designed for clinical tool development.
          </p>
          <a href="{{ site.baseurl }}/git-master" class="btn btn-primary btn-lg">Explore Git Tutor →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- External Resources -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">High-Quality External Resources</h2>
      
      <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-4);">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">GitHub Official Resources</h3>
          </div>
          <div class="card-body">
            <ul style="margin: 0; padding-left: var(--space-5);">
              <li style="margin-bottom: var(--space-2);"><a href="https://docs.github.com/en/desktop" target="_blank" rel="noopener">GitHub Desktop Documentation</a> - Official guide and troubleshooting</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://skills.github.com" target="_blank" rel="noopener">GitHub Skills</a> - Interactive tutorials and courses</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://docs.github.com/en/get-started/quickstart/hello-world" target="_blank" rel="noopener">Hello World Tutorial</a> - Beginner-friendly introduction</li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Git Fundamentals</h3>
          </div>
          <div class="card-body">
            <ul style="margin: 0; padding-left: var(--space-5);">
              <li style="margin-bottom: var(--space-2);"><a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener">Pro Git Book</a> - Free comprehensive guide (chapters 1-3 are essential)</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://learngitbranching.js.org" target="_blank" rel="noopener">Learn Git Branching</a> - Interactive visual tutorial</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://youtube.com/playlist?list=PL0lo9MOBetEFcp4SCWinBdpml9B2U25-f&si=yDn_o_NkkDlPKsK9" target="_blank" rel="noopener">GitHub YouTube Channel</a> - Official video tutorials</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <div class="card">
          <div class="card-body">
            <h3>Recommended Learning Path</h3>
            <ol style="text-align: left; max-width: 600px; margin: var(--space-4) auto 0;">
              <li>Complete this tutorial with GitHub Desktop</li>
              <li>Jump in!  See one, do one, teach one!</li>
              <li>Watch the GitHub Desktop introduction video</li>
              <li>Read chapters 1-3 of Pro Git for deeper understanding</li>
              <li>Try the Learn Git Branching interactive tutorial</li>
              <li>Explore our <a href="{{ site.baseurl }}/git-master">Git Tutor</a> for clinical-specific workflows</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="section">
  <div class="container">
    <div class="content-centered">
      <h2 class="text-center mb-8">You're Ready to Build</h2>
      
      <div class="card">
        <div class="card-body text-center">
          <p class="text-lg mb-6">
            With AI for code generation and Git for version control, you have everything you need to build custom tools for your practice. Start small, experiment fearlessly, and iterate based on what works.
          </p>
          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
            <a href="{{ site.baseurl }}/software-2.0" class="btn btn-primary btn-lg">Explore More Tools →</a>
            <a href="{{ site.baseurl }}/git-master" class="btn btn-outline btn-lg">Dive Into Git Tutor</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
