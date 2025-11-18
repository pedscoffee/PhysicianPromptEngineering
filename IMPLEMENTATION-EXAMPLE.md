# Onboarding System - Implementation Examples

This file shows you exactly how to add the onboarding modals to different pages on your site.

## Adding to the Landing Page (index.md)

### Step 1: Update the Default Layout

Add the onboarding system to `_layouts/default.html` so it's available site-wide:

```html
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

  {%- include head.html -%}

  <body>

    <header class="site-header" role="banner">
      <!-- ... existing header code ... -->
    </header>

    <main class="page-content" aria-label="Content">
      {{ content }}
    </main>

    {%- include footer.html -%}

    <!-- ADD THESE LINES BEFORE CLOSING </body> -->
    {%- include onboarding-system.html -%}
    <!-- Include specific modals based on page -->
    {% if page.url == "/" or page.url == "/index.html" %}
      {%- include welcome-onboarding.html -%}
    {% endif %}
    <!-- END NEW CODE -->

  </body>

</html>
```

**OR** add directly to `index.md`:

```markdown
---
layout: default
image: /images/workflow-diagram.png
description: Open-source clinical LLM prompts for physicians...
---

<!-- Your existing hero section, etc. -->
<div class="hero">
  ...
</div>

<!-- ADD AT THE END OF THE FILE -->
{%- include onboarding-system.html -%}
{%- include welcome-onboarding.html -%}
```

---

## Adding Newsletter Modal to Multiple Pages

### Option 1: Add to Default Layout (Shows on All Pages)

```html
<!-- In _layouts/default.html, before </body> -->
{%- include onboarding-system.html -%}
{%- include newsletter-onboarding.html -%}
```

### Option 2: Add to Specific Pages Only

```html
<!-- In _layouts/default.html -->
{%- include onboarding-system.html -%}

{% if page.show_newsletter_modal %}
  {%- include newsletter-onboarding.html -%}
{% endif %}
```

Then in your page frontmatter:
```yaml
---
layout: default
title: My Page
show_newsletter_modal: true
---
```

### Option 3: Add to Pages with Certain Paths

```html
<!-- In _layouts/default.html -->
{%- include onboarding-system.html -%}

<!-- Show newsletter modal on blog posts and documentation -->
{% if page.layout == "post" or page.url contains "/docs/" %}
  {%- include newsletter-onboarding.html -%}
{% endif %}
```

---

## Complete Example: Landing Page with Both Modals

### _layouts/default.html
```html
<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">

  {%- include head.html -%}

  <body>

    <header class="site-header" role="banner">
      <div class="container">
        <div class="header-wrapper">
          <a class="site-title" rel="author" href="{{ "/" | relative_url }}">
            {{ site.title | escape }}
          </a>
          {%- include header_nav.html -%}
        </div>
      </div>
    </header>

    <main class="page-content" aria-label="Content">
      {{ content }}
    </main>

    {%- include footer.html -%}

    <!-- Onboarding System (Required for all modals) -->
    {%- include onboarding-system.html -%}

    <!-- Welcome modal only on home page -->
    {% if page.url == "/" or page.url == "/index.html" %}
      {%- include welcome-onboarding.html -%}
    {% endif %}

    <!-- Newsletter modal on all pages except home (welcome modal has priority) -->
    {% unless page.url == "/" or page.url == "/index.html" %}
      {%- include newsletter-onboarding.html -%}
    {% endunless %}

  </body>

</html>
```

### What This Does:
1. **Home page visitors:** See welcome modal after 1 second
2. **Other page visitors:** See newsletter modal after scrolling 60% or on exit intent
3. **Both modals:** Only show once per user (tracked in localStorage)

---

## Adding Manual Newsletter Trigger Button

You can manually trigger the newsletter modal from anywhere on your site:

### HTML Button Example
```html
<button class="newsletter-trigger btn btn-primary">
  Subscribe to Newsletter
</button>
```

### Link Example
```html
<a href="#newsletter" class="newsletter-trigger">
  Get Weekly Updates →
</a>
```

The newsletter modal JavaScript automatically detects these elements and shows the modal when clicked!

---

## Creating a New Modal for Your Feature

Let's say you want to create an onboarding for a new tool called "Prompt Builder":

### Step 1: Create `_includes/prompt-builder-onboarding.html`

```html
<div class="onboarding-overlay" id="promptBuilderOnboarding">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('promptBuilderOnboarding')">&times;</button>

        <div class="onboarding-content">
            <div class="onboarding-progress">
                <span class="onboarding-progress-dot active"></span>
                <span class="onboarding-progress-dot"></span>
                <span class="onboarding-progress-dot"></span>
            </div>

            <!-- Step 1 -->
            <div class="onboarding-step active">
                <h2>Welcome to Prompt Builder!</h2>
                <p>Create custom prompts in 3 easy steps.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('promptBuilderOnboarding')">
                        Show Me How →
                    </button>
                    <button class="onboarding-btn onboarding-btn-text"
                            onclick="completeOnboarding('promptBuilderOnboarding')">
                        Skip tutorial
                    </button>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="onboarding-step">
                <h2>Step 1: Choose Your Specialty</h2>
                <p>Select from common medical specialties or create custom.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('promptBuilderOnboarding')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="nextOnboardingStep('promptBuilderOnboarding')">
                        Next →
                    </button>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="onboarding-step">
                <h2>You're Ready!</h2>
                <p>Start building your first prompt now.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-secondary"
                            onclick="prevOnboardingStep('promptBuilderOnboarding')">
                        ← Back
                    </button>
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('promptBuilderOnboarding')">
                        Start Building! 🚀
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    OnboardingSystem.init('promptBuilderOnboarding', {
        totalSteps: 3,
        localStorageKey: 'prompt_builder_onboarding_v1',
        showOnce: true,
        delay: 500,
        onComplete: function() {
            console.log('User completed prompt builder onboarding');
        }
    });
});
</script>
```

### Step 2: Add to Your Prompt Builder Page

In `prompt-builder.md`:
```markdown
---
layout: page
title: Prompt Builder
---

<div class="container">
  <!-- Your prompt builder content -->
</div>

<!-- Add at end of file -->
{%- include onboarding-system.html -%}
{%- include prompt-builder-onboarding.html -%}
```

That's it! The modal will automatically show when users visit the prompt builder page.

---

## Advanced: Conditional Display Based on User Behavior

### Show Modal Only to First-Time Visitors

```javascript
OnboardingSystem.init('myModal', {
    totalSteps: 1,
    localStorageKey: 'my_modal_v1',
    showOnce: true,
    delay: 0
});

// Check if this is their first visit
if (!localStorage.getItem('has_visited_site')) {
    localStorage.setItem('has_visited_site', 'true');
    OnboardingSystem.show('myModal');
}
```

### Show Different Modals Based on Page Count

```javascript
// Track page views
let pageViews = parseInt(localStorage.getItem('page_views') || '0');
pageViews++;
localStorage.setItem('page_views', pageViews.toString());

// Show newsletter modal after 3 pages
if (pageViews === 3) {
    OnboardingSystem.trigger('newsletterOnboarding');
}
```

### Show Modal Only on Specific Days/Times

```javascript
OnboardingSystem.init('holidayModal', {
    totalSteps: 1,
    localStorageKey: 'holiday_2024_modal',
    showOnce: true,
    delay: 2000
});

// Only show during holidays
const now = new Date();
const isHolidaySeason = now.getMonth() === 11; // December

if (isHolidaySeason) {
    OnboardingSystem.show('holidayModal');
}
```

---

## Testing Your Implementation

### Test Checklist

- [ ] Modal appears at the right time
- [ ] Steps navigate correctly
- [ ] Progress dots update
- [ ] Close button works
- [ ] Modal doesn't show again after completion
- [ ] Works on mobile devices
- [ ] localStorage key is unique
- [ ] No console errors

### Testing Commands (Browser Console)

```javascript
// Check if modal was completed
localStorage.getItem('your_modal_key')

// Reset modal to test again
localStorage.removeItem('your_modal_key')
location.reload()

// Force show a modal
OnboardingSystem.trigger('modalId')

// Clear all onboarding data
Object.keys(localStorage).forEach(key => {
    if (key.includes('onboarding') || key.includes('_modal_')) {
        localStorage.removeItem(key);
    }
});
location.reload()
```

---

## Common Patterns

### Pattern 1: Feature Announcement

```html
<!-- Show new feature to all users once -->
<div class="onboarding-overlay" id="newFeature">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('newFeature')">&times;</button>
        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>🎉 New: Clockwork Timebox</h2>
                <p>Track your clinical time with our new visual time tracker!</p>
                <div class="onboarding-actions">
                    <a href="/clockwork-timebox" class="onboarding-btn onboarding-btn-primary">
                        Try It Now →
                    </a>
                    <button class="onboarding-btn onboarding-btn-text"
                            onclick="completeOnboarding('newFeature')">
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('newFeature', {
    totalSteps: 1,
    localStorageKey: 'feature_timebox_announcement',
    showOnce: true,
    delay: 2000
});
</script>
```

### Pattern 2: Quick Tips

```html
<!-- Show helpful tips based on scroll -->
<div class="onboarding-overlay" id="quickTips">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('quickTips')">&times;</button>
        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>💡 Quick Tip</h2>
                <p>Did you know? You can customize any prompt to match your documentation style.</p>
                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('quickTips')">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('quickTips', {
    totalSteps: 1,
    localStorageKey: 'quick_tip_customization',
    showOnce: true,
    triggers: [
        { type: 'scroll', percentage: 75 }
    ]
});
</script>
```

### Pattern 3: Survey/Feedback Request

```html
<div class="onboarding-overlay" id="feedbackModal">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('feedbackModal')">&times;</button>
        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>Help Us Improve! 📝</h2>
                <p>You've been using our tools for a while. Would you mind sharing your feedback?</p>
                <div class="onboarding-actions">
                    <a href="https://forms.gle/your-form" target="_blank"
                       class="onboarding-btn onboarding-btn-primary"
                       onclick="completeOnboarding('feedbackModal')">
                        Share Feedback →
                    </a>
                    <button class="onboarding-btn onboarding-btn-text"
                            onclick="completeOnboarding('feedbackModal')">
                        Not now
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('feedbackModal', {
    totalSteps: 1,
    localStorageKey: 'feedback_request_2024',
    showOnce: true,
    triggers: [
        { type: 'exit-intent' }
    ]
});
</script>
```

---

## Need Help?

- **Read the full docs:** See `ONBOARDING-SYSTEM-DOCS.md`
- **Check examples:** Look at `welcome-onboarding.html` and `newsletter-onboarding.html`
- **Test in console:** Use browser dev tools to debug
- **Report issues:** Open a GitHub issue if you find bugs

Happy onboarding! 🎉
