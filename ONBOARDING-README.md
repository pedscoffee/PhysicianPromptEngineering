# 🎯 Onboarding Modal System

A flexible, reusable modal/onboarding system for the Physician Prompt Engineering website.

## 📋 Quick Links

- **[Full Documentation](ONBOARDING-SYSTEM-DOCS.md)** - Complete guide to the system
- **[Implementation Examples](IMPLEMENTATION-EXAMPLE.md)** - Copy-paste examples
- **Live Examples:** See `/clockwork-timebox` for the original inspiration

## 🚀 Quick Start

### 1. Add to Your Page

```html
{%- include onboarding-system.html -%}
{%- include welcome-onboarding.html -%}
```

### 2. That's It!

The onboarding will automatically show to first-time visitors after 1 second.

## 📦 What's Included

### Core System
- `_includes/onboarding-system.html` - Reusable CSS + JavaScript

### Ready-to-Use Modals
- `_includes/welcome-onboarding.html` - Landing page welcome (3 steps)
- `_includes/newsletter-onboarding.html` - Newsletter signup prompt (1 step)

### Documentation
- `ONBOARDING-SYSTEM-DOCS.md` - Complete documentation
- `IMPLEMENTATION-EXAMPLE.md` - Real-world examples
- `ONBOARDING-README.md` - This file

## ✨ Features

- ✅ Multi-step onboarding flows
- ✅ Single-step modals/popups
- ✅ Multiple trigger types (time, scroll, exit-intent, click)
- ✅ localStorage tracking (shows once per user)
- ✅ Progress indicators
- ✅ Mobile responsive
- ✅ Smooth animations
- ✅ Easy to customize
- ✅ No dependencies

## 🎨 Built-In Modals

### Welcome Onboarding
**Purpose:** Introduce new visitors to the site
**Trigger:** Shows after 1 second on landing page
**Steps:** 3
- Welcome & features
- What we offer
- Choose your path

### Newsletter Modal
**Purpose:** Collect email subscribers
**Triggers:**
- Scroll 60% down page
- OR exit intent (mouse moves to leave)

**Steps:** 1
- Newsletter signup form

## 🔧 Configuration Options

```javascript
OnboardingSystem.init('modalId', {
    totalSteps: 3,              // Number of steps
    localStorageKey: 'my_key',  // Unique storage key
    showOnce: true,             // Show only once per user
    delay: 1000,                // Wait before showing (ms)
    triggers: [],               // Trigger conditions
    onComplete: function() {},  // Called when completed
    onDismiss: function() {}    // Called when dismissed
});
```

## 📖 Creating Your Own Modal

### Basic Template

```html
<div class="onboarding-overlay" id="myModal">
    <div class="onboarding-modal">
        <button class="onboarding-close" onclick="closeOnboarding('myModal')">&times;</button>

        <div class="onboarding-content">
            <div class="onboarding-step active">
                <h2>My Modal Title</h2>
                <p>My content goes here.</p>

                <div class="onboarding-actions">
                    <button class="onboarding-btn onboarding-btn-primary"
                            onclick="completeOnboarding('myModal')">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
OnboardingSystem.init('myModal', {
    totalSteps: 1,
    localStorageKey: 'my_modal_v1',
    showOnce: true,
    delay: 2000
});
</script>
```

See [IMPLEMENTATION-EXAMPLE.md](IMPLEMENTATION-EXAMPLE.md) for more templates!

## 🎯 Trigger Types

### Time Delay
```javascript
triggers: [{ type: 'time', seconds: 5 }]
```

### Scroll Percentage
```javascript
triggers: [{ type: 'scroll', percentage: 50 }]
```

### Exit Intent
```javascript
triggers: [{ type: 'exit-intent' }]
```

### Element Click
```javascript
triggers: [{ type: 'element-click', selector: '.btn' }]
```

### Multiple Triggers (first wins)
```javascript
triggers: [
    { type: 'scroll', percentage: 60 },
    { type: 'exit-intent' }
]
```

## 🎨 Styling

### Available Classes

**Containers:**
- `.onboarding-overlay` - Full-screen backdrop
- `.onboarding-modal` - Modal container
- `.onboarding-modal.large` - Wider modal
- `.onboarding-content` - Content area

**Steps:**
- `.onboarding-step` - Individual step
- `.onboarding-step.active` - Current step
- `.onboarding-progress` - Progress indicator
- `.onboarding-progress-dot` - Progress dot

**Buttons:**
- `.onboarding-btn` - Base button
- `.onboarding-btn-primary` - Primary action
- `.onboarding-btn-secondary` - Secondary action
- `.onboarding-btn-text` - Text-only button

**Features:**
- `.onboarding-feature-grid` - Feature grid container
- `.onboarding-feature` - Feature card
- `.onboarding-feature-icon` - Feature icon

### Customization

```css
#myModal .onboarding-btn-primary {
    background: #e74c3c;
}

#myModal .onboarding-modal {
    max-width: 900px;
}
```

## 🧪 Testing

### Browser Console Commands

```javascript
// Check completion status
localStorage.getItem('modal_key')

// Reset to test again
localStorage.removeItem('modal_key')
location.reload()

// Manually trigger
OnboardingSystem.trigger('modalId')

// Clear all onboarding data
localStorage.clear()
location.reload()
```

## 📱 Mobile Support

All modals are fully responsive and work on:
- ✅ Desktop browsers
- ✅ Tablets
- ✅ Mobile phones
- ✅ Different screen sizes

## 🐛 Troubleshooting

### Modal not showing?
1. Check localStorage: `localStorage.getItem('your_key')`
2. Clear it: `localStorage.removeItem('your_key')`
3. Check ID matches in HTML and JavaScript
4. Check trigger conditions (scroll, time, etc.)

### Steps not navigating?
1. Verify `totalSteps` matches number of `.onboarding-step` elements
2. Check onclick handlers include correct modal ID
3. Ensure first step has `.active` class

### Styling issues?
1. Include `onboarding-system.html` first
2. Check CSS specificity
3. Use browser dev tools to inspect

## 💡 Best Practices

1. **Keep it short:** 3-4 steps maximum
2. **Make it skippable:** Always provide "Skip" option
3. **Time it right:** Don't show immediately
4. **Be mobile-friendly:** Test on mobile devices
5. **Clear CTAs:** Use action verbs
6. **Test triggers:** Verify each trigger condition
7. **Visual hierarchy:** Most important info first

## 📊 Analytics

Track onboarding completion:

```javascript
OnboardingSystem.init('myModal', {
    totalSteps: 3,
    localStorageKey: 'my_modal',
    showOnce: true,
    onComplete: function() {
        // Google Analytics
        gtag('event', 'onboarding_complete', {
            modal_id: 'myModal'
        });
    }
});
```

## 🤝 Contributing

Improvements welcome! Please:
1. Test thoroughly
2. Update documentation
3. Include examples
4. Submit pull request

## 📄 License

MIT License - Free to use, modify, and distribute.

## ❓ Questions?

- Check [Full Documentation](ONBOARDING-SYSTEM-DOCS.md)
- See [Implementation Examples](IMPLEMENTATION-EXAMPLE.md)
- Open a GitHub issue

---

**Version:** 1.0
**Last Updated:** January 18, 2025
**Created for:** Physician Prompt Engineering
