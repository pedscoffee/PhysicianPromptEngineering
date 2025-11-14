# HTML Email Templates for Physician Prompt Engineering

Professional, email-client-tested HTML templates matching the website's design system.

## Templates Included

### 1. **base-template.html**
Foundation template with all common elements. Use this as a starting point for creating new newsletter designs.

**Includes:**
- Header with site branding
- Flexible content sections
- Multiple CTA button styles
- Highlighted boxes for important info
- Footer with links and unsubscribe
- Fully commented structure

### 2. **newsletter-template.html**
Complete example using Newsletter #1 (Welcome). Shows real implementation of base template.

**Perfect for:**
- Educational newsletters (Weeks 1-12)
- How-to guides
- Feature introductions
- Monthly updates

### 3. **announcement-template.html**
Shorter format for quick announcements and new feature releases.

**Features:**
- Accent bar at top (gradient)
- "New Feature" badge
- Benefit highlight box
- Single prominent CTA
- Streamlined layout

**Perfect for:**
- Tool launches
- Course module additions
- Prompt library updates
- Platform improvements

### 4. **community-spotlight-template.html**
Storytelling format featuring contributor success stories.

**Features:**
- Community badge
- Contributor profile card
- Results highlight box (with metrics)
- Before/after structure
- Dual CTAs (view prompt + contribute)

**Perfect for:**
- User success stories
- Featured prompts
- Specialty spotlights
- Community achievements

---

## Design System

All templates use your website's color palette and typography:

### Colors
```css
Primary Blue:     #2563eb
Primary Dark:     #1e40af
Secondary Teal:   #0891b2
Accent Purple:    #7c3aed
Success Green:    #059669
Text Primary:     #1f2937
Text Secondary:   #6b7280
Background:       #f9fafb
Border:           #e5e7eb
```

### Typography
- **Font Family:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)
- **Headings:** 700 weight, tight line-height (1.25)
- **Body:** 400 weight, relaxed line-height (1.75)
- **Font Sizes:** 28px (h2), 20px (h3), 16px (body), 14-15px (small text)

### Spacing
- Container padding: 32px
- Section margins: 24-32px
- Paragraph spacing: 16px
- Button padding: 12-14px vertical, 28-36px horizontal

---

## Email Client Compatibility

These templates are tested for:

✅ **Desktop Clients:**
- Gmail (web)
- Outlook 2016-2021 (Windows)
- Apple Mail
- Thunderbird

✅ **Mobile Clients:**
- Gmail (iOS/Android app)
- Apple Mail (iOS)
- Outlook (iOS/Android app)
- Samsung Email

✅ **Webmail:**
- Gmail
- Outlook.com
- Yahoo Mail
- ProtonMail

### Known Limitations

**Outlook 2007-2016 (Windows):**
- Uses Word rendering engine (limited CSS support)
- Border-radius may not render (fallback: square corners)
- Gradients not supported (fallback: solid color)

**Gmail (web):**
- Doesn't support `<style>` tags in `<head>` (all CSS must be inline)
- Media queries limited
- Some advanced CSS not supported

**Our solution:** All CSS is inline. No external stylesheets. Graceful degradation for unsupported features.

---

## How to Use

### For Substack

1. **Copy HTML from template file**
2. **In Substack editor:**
   - Click "New Post"
   - Switch to HTML mode (</> icon)
   - Paste template HTML
   - Customize content areas (marked with [PLACEHOLDERS])
3. **Preview in email client:**
   - Send test email to yourself
   - Check rendering in your primary email client
4. **Schedule send**

### For Other Platforms

**MailerLite / ConvertKit / SendGrid:**
- Create new campaign
- Use "Custom HTML" or "Code" option
- Paste template
- Use platform's merge tags for personalization

**Campaign Monitor / Mailchimp:**
- Import as custom template
- Map merge fields
- Test send before launch

---

## Customization Guide

### Replacing Placeholders

Look for these markers in templates:

```html
[Newsletter Title]          → Your newsletter title
[Opening paragraph]         → Your hook/introduction
[Body content]              → Main content
[Section Title]             → Subheading
[LINK]                      → Your destination URL
[Button Text]               → CTA button label
[UNSUBSCRIBE_URL]          → Platform's unsubscribe link
```

### Adding Images

Insert images using table-based structure for better compatibility:

```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0;">
    <tr>
        <td style="text-align: center;">
            <img src="[IMAGE_URL]" alt="[DESCRIPTION]" width="560" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 8px;">
        </td>
    </tr>
</table>
```

**Best practices:**
- Host images externally (CDN or website)
- Use absolute URLs (https://...)
- Set explicit width (max 560px for 600px container)
- Always include alt text
- Optimize file size (<200KB per image)

### Changing Colors

Find and replace color values throughout:

**Example: Change primary blue to green**
```
Find:    #2563eb
Replace: #059669
```

**Common color locations:**
- CTA buttons: `background-color: #2563eb`
- Links: `color: #2563eb`
- Borders: `border-color: #2563eb`
- Highlight boxes: `background-color: #dbeafe`

### Adding CTAs

**Primary button (filled):**
```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 32px 0;">
    <tr>
        <td style="border-radius: 6px; background-color: #2563eb;">
            <a href="[LINK]" target="_blank" style="display: inline-block; padding: 12px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px;">
                [Button Text] →
            </a>
        </td>
    </tr>
</table>
```

**Secondary button (outline):**
```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 24px 0;">
    <tr>
        <td style="border-radius: 6px; border: 2px solid #2563eb;">
            <a href="[LINK]" target="_blank" style="display: inline-block; padding: 10px 28px; font-size: 16px; font-weight: 600; color: #2563eb; text-decoration: none; border-radius: 6px;">
                [Button Text] →
            </a>
        </td>
    </tr>
</table>
```

### Adding Highlighted Boxes

**Info box (blue):**
```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0; background-color: #dbeafe; border-left: 4px solid #2563eb; border-radius: 6px;">
    <tr>
        <td style="padding: 20px;">
            <p style="margin: 0; color: #1e40af; font-size: 15px; line-height: 1.6;">
                <strong style="color: #1e40af;">Pro Tip:</strong> [Your tip here]
            </p>
        </td>
    </tr>
</table>
```

**Success box (green):**
```html
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); border-radius: 8px;">
    <tr>
        <td style="padding: 24px;">
            [Your content]
        </td>
    </tr>
</table>
```

---

## Best Practices

### Content

✅ **Do:**
- Keep total email under 102KB (Gmail clips larger emails)
- Use alt text for all images
- Include plain text version (most platforms auto-generate)
- Test all links before sending
- Personalize with recipient name when possible

❌ **Don't:**
- Use JavaScript (not supported in email)
- Embed forms (use link to landing page)
- Use video embeds (use linked thumbnail image)
- Include attachments (security risk)
- Use all caps in subject lines (spam trigger)

### Mobile Optimization

All templates are mobile-responsive, but remember:

- **41% of emails are opened on mobile**
- Thumb-friendly CTAs (44x44px minimum)
- Font size minimum 14px for body text
- Single column layout (600px max width)
- Short paragraphs (2-3 sentences)

### Deliverability

Avoid spam triggers:

❌ Spam phrases:
- "100% free"
- "Act now"
- "Click here"
- All caps words
- Excessive punctuation!!!

✅ Good practices:
- Consistent "From" name
- Clear subject line (40-60 characters)
- Include physical address in footer
- Easy unsubscribe link
- Proper HTML structure

---

## Testing Checklist

Before sending to full list:

- [ ] Send test to yourself
- [ ] Check rendering in Gmail (web + mobile)
- [ ] Check rendering in Outlook (if applicable)
- [ ] Check rendering in Apple Mail
- [ ] Verify all links work
- [ ] Test on both light and dark mode
- [ ] Check unsubscribe link functions
- [ ] Proofread all content
- [ ] Verify sender name and reply-to address
- [ ] Check subject line length (<60 characters)

---

## Troubleshooting

### Issue: Gmail clips email (shows "Message clipped" link)

**Cause:** Email exceeds 102KB
**Fix:**
- Remove unnecessary whitespace
- Minify HTML (remove comments)
- Optimize/compress images
- Remove redundant inline styles

### Issue: Buttons don't look like buttons in Outlook

**Cause:** Outlook uses Word rendering (limited CSS)
**Fix:** Use VML (Vector Markup Language) for Outlook-specific buttons:

```html
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="[LINK]" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="15%" stroke="f" fillcolor="#2563eb">
  <w:anchorlock/>
  <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;">Button Text</center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
  [Your regular button code]
<!--<![endif]-->
```

### Issue: Images not loading

**Cause:** Images blocked by default, or broken URLs
**Fix:**
- Use absolute URLs (https://...)
- Host on reliable CDN
- Always include alt text
- Test links in incognito mode

### Issue: Layout breaks on mobile

**Cause:** Fixed widths, no mobile styles
**Fix:** These templates use responsive table structure - should work. If issues:
- Check max-width is set to 100%
- Verify no fixed pixel widths without max-width
- Test in actual email client (not just browser)

---

## Metrics to Track

### Email Performance

**Open Rate:**
- Target: 25%+ (healthcare average: 23.46%)
- Track by: Subject line, send time, day of week

**Click-Through Rate:**
- Target: 5%+ (healthcare average: 3.62%)
- Track by: CTA placement, button text, email length

**Unsubscribe Rate:**
- Target: <0.5%
- If higher: Reduce frequency, improve targeting, check content quality

### Engagement

**CTA Clicks:**
- Which links get clicked most?
- Above-the-fold vs end-of-email CTAs
- Primary vs secondary CTAs

**Read Time:**
- How far down do people scroll?
- Where do they drop off?
- Use heat maps if available

---

## Version History

**v1.0** - January 2025
- Initial release
- 4 template types
- Tested across major email clients
- Mobile-responsive
- Matches website design system

---

## Support

**Questions about templates:**
- GitHub Issues: Template bugs/improvements
- Email: Direct questions to PedsCoffee

**Additional resources:**
- [Litmus Email Testing](https://litmus.com) - Test across 90+ clients
- [Can I Email](https://www.caniemail.com) - CSS support reference
- [Email on Acid](https://www.emailonacid.com) - Testing and previews

---

## License

These templates are part of the Physician Prompt Engineering project and are available under the same MIT License as the main repository.

Free to use, modify, and distribute. Attribution appreciated but not required.
