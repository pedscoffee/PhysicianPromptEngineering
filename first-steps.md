---
layout: default
title: First Steps - Build Your First App with AI
description: A beginner-friendly guide to creating your first application using Google Gemini AI, with no programming experience required.
permalink: /first-steps/
---

<!-- Hero Section -->
<div class="hero">
  <div class="container">
    <h1 class="hero-title">First Steps: Build Your First App</h1>
    <p class="hero-subtitle">
      Create a simple to-do app using Google Gemini—no programming experience required. This hands-on tutorial shows you exactly how accessible software development has become.
    </p>
  </div>
</div>

<!-- Introduction -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">You're About to Build Real Software</h2>
      
      <div class="card mb-6">
        <div class="card-body">
          <p class="text-lg">
            <strong>The traditional path:</strong> Learn a programming language → Study frameworks → Debug for hours → Maybe get something working.
          </p>
          <p class="text-lg">
            <strong>The Software 2.0 path:</strong> Describe what you want → Let AI build it → Test and iterate → You have a working app.
          </p>
          <p class="text-lg">
            This tutorial uses the second approach. You'll build a functional to-do list app in about 30 minutes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What You'll Build -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">What You'll Build</h2>
      
      <div class="two-col-grid">
        <div>
          <h3>A Simple To-Do List App</h3>
          <ul>
            <li>Add tasks with a text input</li>
            <li>Mark tasks as complete</li>
            <li>Delete tasks</li>
            <li>Data persists in your browser</li>
            <li>Clean, modern interface</li>
          </ul>
        </div>
        
        <div>
          <h3>What You'll Learn</h3>
          <ul>
            <li>How to prompt AI coding assistants effectively</li>
            <li>How to test and iterate on AI-generated code</li>
            <li>Basic concepts of web applications</li>
            <li>How to customize the app for your needs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Prerequisites -->
<section class="section">
  <div class="container">
    <div class="content-centered">
      <h2 class="text-center mb-8">What You Need</h2>
      
      <div class="card">
        <div class="card-body">
          <h3>Tools (All Free)</h3>
          <ol>
            <li><strong>Google Account</strong> - for accessing Gemini</li>
            <li><strong>A Text Editor</strong> - VS Code (recommended), Notepad++, or even basic Notepad</li>
            <li><strong>A Web Browser</strong> - Chrome, Firefox, Safari, or Edge</li>
          </ol>
          
          <h3 class="mt-6">Time Commitment</h3>
          <p>Allow 30-45 minutes for your first project. Future projects will go faster as you learn the pattern.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Step-by-Step Tutorial -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Step-by-Step Tutorial</h2>
      
      <!-- Step 1 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 1: Access Google Gemini</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Go to <a href="https://gemini.google.com" target="_blank">gemini.google.com</a></li>
            <li>Sign in with your Google account</li>
            <li>You're ready to start prompting!</li>
          </ol>
        </div>
      </div>
      
      <!-- Step 2 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 2: Write Your First Prompt</h3>
        </div>
        <div class="card-body">
          <p>Copy this prompt into Gemini:</p>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-4) 0;">
            <code style="white-space: pre-wrap;">
Create a simple to-do list web application with the following features:

1. A text input field to add new tasks
2. An "Add Task" button
3. Display tasks in a list
4. Each task should have:
   - A checkbox to mark it as complete (with strikethrough styling when checked)
   - A delete button to remove the task
5. Use local storage to save tasks so they persist when the page is refreshed
6. Use modern, clean styling with CSS
7. Make it fully functional in a single HTML file

Please provide the complete HTML file with embedded CSS and JavaScript.
            </code>
          </div>
          <p><strong>Why this works:</strong> The prompt is specific about features, mentions persistence (local storage), and asks for a single file (easy to test).</p>
        </div>
      </div>
      
      <!-- Step 3 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 3: Save the Code</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Gemini will generate a complete HTML file</li>
            <li>Copy all the code (there should be a copy button)</li>
            <li>Open your text editor (VS Code, Notepad++, etc.)</li>
            <li>Paste the code</li>
            <li>Save as <code>todo-app.html</code></li>
          </ol>
          <p class="mt-4"><strong>Pro tip:</strong> Make sure the file extension is <code>.html</code>, not <code>.txt</code></p>
        </div>
      </div>
      
      <!-- Step 4 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 4: Test Your App</h3>
        </div>
        <div class="card-body">
          <ol>
            <li>Find the <code>todo-app.html</code> file on your computer</li>
            <li>Double-click it (it should open in your web browser)</li>
            <li>Try adding a task</li>
            <li>Check the checkbox</li>
            <li>Delete a task</li>
            <li>Refresh the page - your tasks should still be there!</li>
          </ol>
          <p class="mt-4"><strong>You just built a working app with AI assistance!</strong></p>
        </div>
      </div>
      
      <!-- Step 5 -->
      <div class="card mb-6">
        <div class="card-header">
          <h3 class="card-title">Step 5: Customize It</h3>
        </div>
        <div class="card-body">
          <p>Now go back to Gemini and ask for modifications:</p>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-4) 0;">
            <code>
              "Can you modify the to-do app to use a blue color scheme instead?"
            </code>
          </div>
          <p>Or:</p>
          <div style="background: var(--color-bg-tertiary); padding: var(--space-4); border-radius: var(--radius-md); margin: var(--space-4) 0;">
            <code>
              "Add a counter showing how many tasks are incomplete"
            </code>
          </div>
          <p class="mt-4">Each time, Gemini will provide updated code. Copy it, save it, and test it.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Common Issues -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Common Issues & Solutions</h2>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">Issue: The file won't open in my browser</h3>
        </div>
        <div class="card-body">
          <p><strong>Solution:</strong> Make sure you saved it with a <code>.html</code> extension. Right-click the file → "Open with" → Choose your web browser.</p>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">Issue: Tasks don't save when I refresh</h3>
        </div>
        <div class="card-body">
          <p><strong>Solution:</strong> Go back to Gemini and say: "The tasks aren't persisting. Can you check the local storage implementation?"</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Issue: The styling looks broken</h3>
        </div>
        <div class="card-body">
          <p><strong>Solution:</strong> Tell Gemini what you're seeing: "The buttons are overlapping the text. Can you fix the CSS layout?"</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Next Steps -->
<section class="section bg-secondary">
  <div class="container">
    <div class="content-centered">
      <h2 class="text-center mb-8">What's Next?</h2>
      
      <div class="card mb-6">
        <div class="card-body text-center">
          <h3>You just built your first app!</h3>
          <p class="text-lg mb-6">
            Now you understand the basics of Software 2.0 development. From here, you can:
          </p>
          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
            <a href="{{ site.baseurl }}/next-steps" class="btn btn-primary btn-lg">Learn Git for Better Development →</a>
            <a href="{{ site.baseurl }}/software-2.0" class="btn btn-outline btn-lg">Explore More Tools</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- External Resources -->
<section class="section">
  <div class="container">
    <div class="content-centered-wide">
      <h2 class="text-center mb-8">Additional Learning Resources</h2>
      
      <div class="grid grid-cols-1 grid-cols-2" style="gap: var(--space-4);">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Official Google Resources</h3>
          </div>
          <div class="card-body">
            <ul style="margin: 0; padding-left: var(--space-5);">
              <li style="margin-bottom: var(--space-2);"><a href="https://ai.google.dev/gemini-api/docs/prompting-intro" target="_blank">Google AI - Prompting Guide</a> - Official prompting best practices</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://developers.google.com/learn" target="_blank">Google for Developers</a> - Free courses and tutorials</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://ai.google.dev/examples" target="_blank">Gemini API Examples</a> - Real-world use cases</li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Web Development Basics</h3>
          </div>
          <div class="card-body">
            <ul style="margin: 0; padding-left: var(--space-5);">
              <li style="margin-bottom: var(--space-2);"><a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank">MDN Web Docs</a> - Comprehensive web development guide</li>
              <li style="margin-bottom: var(--space-2);"><a href="https://web.dev/learn" target="_blank">web.dev Learn</a> - Google's web development curriculum</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-6">
        <p class="text-secondary">
          Remember: You don't need to master traditional programming to build useful tools. Focus on learning to describe what you want clearly, and AI will handle the implementation details.
        </p>
      </div>
    </div>
  </div>
</section>
