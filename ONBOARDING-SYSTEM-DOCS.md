# Onboarding Modal System Documentation

## Overview

The Onboarding Modal System is a reusable, flexible framework for creating multi-step onboarding experiences, welcome modals, newsletter prompts, and any other modal-based user flows on the Physician Prompt Engineering website.

This system was inspired by the successful onboarding implementation in the Clockwork Timebox tool and has been generalized for site-wide use.

---

## 📁 File Structure

```
_includes/
├── onboarding-system.html      # Core reusable system (CSS + JS)
├── welcome-onboarding.html     # Landing page welcome modal
└── newsletter-onboarding.html  # Newsletter invitation modal
```

---

## 🚀 Quick Start

### Adding Onboarding to a Page

1. **Include the system files in your layout or page:**

```html
<!-- Add to _layouts/default.html or individual pages -->
{%- include onboarding-system.html -%}
{%- include welcome-onboarding.html -%}
```

2. **The onboarding will automatically show based on its configuration!**

That's it! The system handles:
- Showing the modal at the right time
- Tracking if user has seen it
- Step navigation
- Local storage persistence

---

## 🎯 Core Concepts

### 1. Modal Structure

Each onboarding modal consists of:
- **Overlay**: Semi-transparent backdrop
- **Modal Container**: The white card with content
- **Steps**: Individual screens within the modal
- **Progress Indicators**: Dots showing current step
- **Actions**: Buttons for navigation

### 2. Lifecycle

```
User visits page
    ↓
System checks: Has user seen this before?
    ↓ (No)
Wait for delay/trigger
    ↓
Show modal
    ↓
User navigates steps or dismisses
    ↓
Mark as complete in localStorage
    ↓
Don't show again (unless reset)
```

---

## 📖 How It Works

### The OnboardingSystem Object

The core JavaScript object that manages all modals:

```javascript
OnboardingSystem = {
    modals: {},          // Stores all modal configurations
    init(),              // Initialize a modal
    show(),              // Display a modal
    hide(),              // Hide a modal
    complete(),          // Mark as complete and hide
    nextStep(),          // Navigate to next step
    prevStep(),          // Navigate to previous step
    showStep(),          // Display specific step
    reset(),             // Clear completion status
    shouldShow(),        // Check if modal should display
    setupTriggers(),     // Configure display triggers
}
```

### Configuration Options

```javascript
OnboardingSystem.init('modalId', {
    totalSteps: 3,                          // Number of steps in modal
    localStorageKey: 'my_modal_completed',  // Storage key for tracking
    showOnce: true,                         // Only show once per user
    delay: 2000,                            // Wait 2 seconds before showing
    triggers: [],                           // Array of trigger conditions
    onComplete: function() {},              // Called when user completes
    onDismiss: function() {}                // Called when user dismisses
});
```

### Trigger Types

The system supports multiple trigger methods:

#### 1. **Time Delay**
```javascript
triggers: [
    { type: 'time', seconds: 5 }  // Show after 5 seconds
]
```

#### 2. **Scroll Percentage**
```javascript
triggers: [
    { type: 'scroll', percentage: 50 }  // Show after scrolling 50%
]
```

#### 3. **Exit Intent**
```javascript
triggers: [
    { type: 'exit-intent' }  // Show when mouse moves to leave page
]
```

#### 4. **Element Click**
```javascript
triggers: [
    { type: 'element-click', selector: '.newsletter-btn' }
]
```

#### 5. **Multiple Triggers** (First one wins)
```javascript
triggers: [
    { type: 'scroll', percentage: 60 },
    { type: 'exit-intent' }
]
// Shows when EITHER scroll reaches 60% OR user tries to exit
```

---

## 🎨 Creating Your Own Onboarding

### Step 1: Create the HTML

Create a new file in `_includes/`, e.g., `my-onboarding.html`:

```html
<!-- My Custom Onboarding -->
<div class="onboarding-overlay" id="myCustomOnboarding">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('myCustomOnboarding')">&times;</button>

        <div class="onboarding-content">
            <!-- Progress Dots (optional, for multi-step) -->
            <div class="onboarding-progress">
                <span class="onboarding-progress-dot active"></span>
                <span class="onboarding-progress-dot"></span>
            </div>

            <!-- Step 1 -->
            <div class="onboarding-step active">
                <h2>Welcome to My Feature!</h2>
                <p>This is the first step of your journey.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('myCustomOnboarding')">
                        Next →
                    </button>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="onboarding-step">
                <h2>Learn More</h2>
                <p>Here's some more information.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('myCustomOnboarding')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('myCustomOnboarding')">
                        Get Started!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    OnboardingSystem.init('myCustomOnboarding', {
        totalSteps: 2,
        localStorageKey: 'my_feature_onboarding_complete',
        showOnce: true,
        delay: 1000,
        onComplete: function() {
            console.log('User completed onboarding!');
            // Optional: Track analytics, redirect, etc.
        }
    });
});
</script>
```

### Step 2: Include in Your Page

Add to the page where you want it to appear:

```html
{%- include onboarding-system.html -%}
{%- include my-onboarding.html -%}
```

### Step 3: Test!

- Clear localStorage: `localStorage.clear()`
- Refresh page to see modal
- Navigate through steps
- Close and refresh - should not show again

---

## 🎨 Styling Components

### Available CSS Classes

#### Container Classes
```css
.onboarding-overlay        /* Full-screen backdrop */
.onboarding-modal          /* Modal container */
.onboarding-modal.large    /* Wider modal (800px) */
.onboarding-content        /* Main content area */
.onboarding-close          /* X close button */
```

#### Content Classes
```css
.onboarding-step           /* Individual step container */
.onboarding-step.active    /* Currently visible step */
.onboarding-progress       /* Progress indicator container */
.onboarding-progress-dot   /* Individual progress dot */
```

#### Button Classes
```css
.onboarding-btn                  /* Base button */
.onboarding-btn-primary          /* Primary action (blue) */
.onboarding-btn-secondary        /* Secondary action (outlined) */
.onboarding-btn-text             /* Text-only button */
```

#### Feature Grid Classes
```css
.onboarding-feature-grid   /* Grid container for features */
.onboarding-feature        /* Individual feature card */
.onboarding-feature-icon   /* Icon within feature */
```

### Customizing Styles

Override any styles in your page or custom CSS:

```css
/* Make modal wider */
#myModal .onboarding-modal {
    max-width: 900px;
}

/* Change primary color */
#myModal .onboarding-btn-primary {
    background: #e74c3c;
}

/* Custom feature card hover */
#myModal .onboarding-feature:hover {
    transform: scale(1.05);
}
```

---

## 🔧 Advanced Usage

### Single-Step Modal (No Progress Dots)

```html
<div class="onboarding-overlay" id="simpleModal">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('simpleModal')">&times;</button>

        <div class="onboarding-content">
            <!-- No progress dots needed -->
            <div class="onboarding-step active">
                <h2>Quick Announcement</h2>
                <p>Just one thing to show you!</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('simpleModal')">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('simpleModal', {
    totalSteps: 1,  // Single step
    localStorageKey: 'simple_modal_seen',
    showOnce: true
});
</script>
```

### Manual Triggering

You can manually show a modal from anywhere:

```javascript
// From a button click
document.querySelector('.show-help-btn').addEventListener('click', function() {
    OnboardingSystem.trigger('helpModal');
});

// From custom logic
if (userNeedsHelp) {
    OnboardingSystem.trigger('helpModal');
}
```

### Conditional Display

```javascript
OnboardingSystem.init('specialModal', {
    totalSteps: 2,
    localStorageKey: 'special_modal_complete',
    showOnce: true,
    delay: 0,
    onComplete: function() {
        // Send analytics
        gtag('event', 'onboarding_complete', {
            modal_id: 'specialModal'
        });
    }
});

// Only show for new users
if (!localStorage.getItem('returning_user')) {
    OnboardingSystem.show('specialModal');
}
```

### Reset for Testing

```javascript
// In browser console
OnboardingSystem.reset('myModal');
location.reload();

// Or clear all
localStorage.clear();
location.reload();
```

---

## 🎯 Real-World Examples

### Example 1: Feature Announcement

```html
<!-- announcement-modal.html -->
<div class="onboarding-overlay" id="featureAnnouncement">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('featureAnnouncement')">&times;</button>

        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>🎉 New Feature Alert!</h2>
                <p>We just launched the Clockwork Timebox - a powerful time tracking tool for physicians.</p>

                <div class="onboarding-feature">
                    <div class="onboarding-feature-icon">⏱️</div>
                    <h4>Visual Time Tracking</h4>
                    <p>Track exactly how you spend your clinical time</p>
                </div>

                <div class="onboarding-actions">
                    <a href="{{ site.baseurl }}/clockwork-timebox" class="onboarding-btn onboarding-btn-primary">
                        Try It Now →
                    </a>
                    <button class="onboarding-btn onboarding-btn-text"
                            onclick="completeOnboarding('featureAnnouncement')">
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('featureAnnouncement', {
    totalSteps: 1,
    localStorageKey: 'feature_announcement_v1',
    showOnce: true,
    delay: 3000  // Show after 3 seconds
});
</script>
```

### Example 2: Interactive Tutorial

```html
<!-- tutorial-modal.html -->
<div class="onboarding-overlay" id="tutorialModal">
    <div class="onboarding-modal large">
        <button class="onboarding-close" onclick="closeOnboarding('tutorialModal')">&times;</button>

        <div class="onboarding-content">
            <div class="onboarding-progress">
                <span class="onboarding-progress-dot active"></span>
                <span class="onboarding-progress-dot"></span>
                <span class="onboarding-progress-dot"></span>
                <span class="onboarding-progress-dot"></span>
            </div>

            <!-- Step 1: Copy a Prompt -->
            <div class="onboarding-step active">
                <h2>Step 1: Find a Prompt</h2>
                <p>Browse our library and find a prompt that matches your needs.</p>
                <img src="/images/tutorial-1.png" style="width: 100%; border-radius: 8px;">

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('tutorialModal')">
                        Next →
                    </button>
                </div>
            </div>

            <!-- Step 2: Customize -->
            <div class="onboarding-step">
                <h2>Step 2: Customize It</h2>
                <p>Replace the examples with your own preferences.</p>
                <img src="/images/tutorial-2.png" style="width: 100%; border-radius: 8px;">

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('tutorialModal')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('tutorialModal')">
                        Next →
                    </button>
                </div>
            </div>

            <!-- Step 3: Use in EMR -->
            <div class="onboarding-step">
                <h2>Step 3: Paste in Your EMR</h2>
                <p>Use with Epic's "Generate Text with AI" or similar.</p>
                <img src="/images/tutorial-3.png" style="width: 100%; border-radius: 8px;">

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('tutorialModal')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('tutorialModal')">
                        Next →
                    </button>
                </div>
            </div>

            <!-- Step 4: Done! -->
            <div class="onboarding-step">
                <h2>You're All Set! 🎉</h2>
                <p>You now know how to use our prompts to save time on documentation.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('tutorialModal')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('tutorialModal')">
                        Start Using Prompts!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('tutorialModal', {
    totalSteps: 4,
    localStorageKey: 'tutorial_complete',
    showOnce: true,
    triggers: [
        { type: 'element-click', selector: '.start-tutorial-btn' }
    ]
});
</script>
```

---

## 🐛 Troubleshooting

### Modal Not Showing

1. **Check localStorage:**
   ```javascript
   // In browser console
   localStorage.getItem('your_modal_key')
   // If it returns "true", modal won't show

   // Clear it:
   localStorage.removeItem('your_modal_key')
   ```

2. **Check ID matches:**
   - HTML: `id="myModal"`
   - JavaScript: `OnboardingSystem.init('myModal', ...)`

3. **Check timing:**
   - Did you set a delay? Wait for it
   - Scroll trigger? Scroll down the page
   - Exit intent? Move mouse to top of browser

### Steps Not Navigating

1. **Check totalSteps matches actual steps:**
   ```javascript
   totalSteps: 3  // Must match number of .onboarding-step elements
   ```

2. **Check onclick handlers:**
   ```html
   <!-- Must pass modal ID -->
   onclick="nextOnboardingStep('myModal')"
   ```

3. **Check step structure:**
   ```html
   <div class="onboarding-step active">  <!-- First step has .active -->
   <div class="onboarding-step">         <!-- Others don't -->
   ```

### Styling Issues

1. **Include system CSS first:**
   ```html
   {%- include onboarding-system.html -%}  <!-- First! -->
   {%- include my-onboarding.html -%}
   ```

2. **Check CSS specificity:**
   ```css
   /* More specific selector wins */
   #myModal .onboarding-btn-primary {
       background: red;
   }
   ```

---

## 📊 Analytics Integration

### Track Onboarding Completion

```javascript
OnboardingSystem.init('myModal', {
    totalSteps: 3,
    localStorageKey: 'my_modal_complete',
    showOnce: true,
    onComplete: function() {
        // Google Analytics
        gtag('event', 'onboarding_complete', {
            modal_id: 'myModal'
        });

        // Or custom tracking
        fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({ event: 'onboarding_complete' })
        });
    },
    onDismiss: function() {
        gtag('event', 'onboarding_dismissed', {
            modal_id: 'myModal'
        });
    }
});
```

### Track Step Progress

```javascript
function customNextStep(modalId) {
    const modal = OnboardingSystem.modals[modalId];
    gtag('event', 'onboarding_step', {
        modal_id: modalId,
        step: modal.currentStep
    });
    nextOnboardingStep(modalId);
}
```

---

## 🎯 Best Practices

### 1. **Keep It Short**
- 3-4 steps maximum
- Each step = 1 key concept
- Users have short attention spans

### 2. **Make It Skippable**
- Always provide "Skip" or "Maybe later" option
- Never force users through onboarding
- Respect their choice to dismiss

### 3. **Time It Right**
- Don't show immediately on page load
- Wait 1-2 seconds for content to load
- Consider scroll triggers for engagement

### 4. **Be Mobile-Friendly**
- System includes responsive styles
- Test on mobile devices
- Keep text readable on small screens

### 5. **Use Clear CTAs**
- Primary action should be obvious
- Use action verbs: "Get Started", "Try Now"
- Show what happens next

### 6. **Test Triggers**
- Test each trigger condition
- Ensure only one modal shows at a time
- Verify localStorage tracking works

### 7. **Visual Hierarchy**
- Most important info first
- Use icons/images to break up text
- Progress indicators for multi-step

---

## 🔐 Privacy & Storage

### What Gets Stored

Only completion status is stored in localStorage:

```javascript
// Example
localStorage.setItem('ppe_welcome_completed', 'true');
```

No personal data, no tracking beyond this simple flag.

### Clearing Data

Users can clear by:
1. Clearing browser cache/localStorage
2. Using browser's privacy tools
3. Calling `OnboardingSystem.reset('modalId')`

---

## 🚦 Migration from Old System

If you have existing modals using different code:

### Old Code
```html
<div class="modal" id="oldModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Title</h2>
        <p>Content</p>
    </div>
</div>
```

### New Code
```html
<div class="onboarding-overlay" id="newModal">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('newModal')">&times;</button>
        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>Title</h2>
                <p>Content</p>
                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('newModal')">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('newModal', {
    totalSteps: 1,
    localStorageKey: 'new_modal_seen',
    showOnce: true
});
</script>
```

---

## 📚 Additional Resources

- **Live Examples:** Check `/clockwork-timebox` for working implementation
- **CSS Variables:** Defined in main site stylesheet
- **GitHub Issues:** Report bugs or request features

---

## 🤝 Contributing

Want to improve the onboarding system?

1. Test your changes thoroughly
2. Update this documentation
3. Submit a pull request
4. Include examples of your additions

---

## ❓ FAQ

**Q: Can I have multiple modals on one page?**
A: Yes! Each modal needs a unique ID and its own `init()` call.

**Q: Can I show a modal more than once?**
A: Yes, set `showOnce: false` in configuration.

**Q: Can I manually trigger a modal?**
A: Yes, use `OnboardingSystem.trigger('modalId')`.

**Q: How do I change the text after someone has completed?**
A: Reset localStorage or change the `localStorageKey` to a new value.

**Q: Can I have a modal with no steps (just one screen)?**
A: Yes, set `totalSteps: 1` and only include one `.onboarding-step`.

**Q: Does this work on mobile?**
A: Yes, includes responsive CSS for mobile devices.

**Q: Can I nest modals?**
A: Not recommended - keep it simple with one modal at a time.

---

## 📝 Version History

- **v1.0** (2025-01-18): Initial release
  - Core onboarding system
  - Welcome modal
  - Newsletter modal
  - Full documentation

---

Made with ❤️ for Physician Prompt Engineering

For questions or suggestions, open an issue on GitHub or contact the team.
