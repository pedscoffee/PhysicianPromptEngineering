---
layout: default
title: Cookie Policy
permalink: /cookies/
---

<div class="container" style="max-width: 800px; margin: 3rem auto; padding: 0 1rem;">

# Cookie Policy

**Last Updated: November 19, 2025**

## What Are Cookies?

Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and understand how you use the site.

## How We Use Cookies

Physician Prompt Engineering uses cookies for the following purposes:

### Analytics Cookies (Optional)

We use **Google Analytics** to understand how visitors interact with our website. This helps us improve the site and create better content for physicians.

Google Analytics collects information such as:
- Pages you visit
- Time spent on the site
- How you arrived at our site
- General location (country/city level)
- Device and browser type

**These cookies are only set if you explicitly accept them via our cookie consent banner.**

### Essential Cookies (Always Active)

We use localStorage (similar to cookies) to remember your cookie consent choice. This is necessary for the website to function properly and respect your privacy preferences.

## Your Choices

### Managing Cookie Consent

You can change your cookie preferences at any time by clicking the button below:

<div style="margin: 2rem 0;">
  <button onclick="revokeCookieConsent()" 
          style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
                 color: white; 
                 padding: 0.75rem 1.5rem; 
                 border: none; 
                 border-radius: 6px; 
                 font-size: 1rem; 
                 font-weight: 600; 
                 cursor: pointer;
                 transition: all 0.2s ease;">
    🍪 Manage Cookie Preferences
  </button>
</div>

Clicking this button will reset your consent and show the cookie banner again, allowing you to accept or decline analytics cookies.

### Browser Settings

You can also control cookies through your browser settings. Most browsers allow you to:
- View and delete cookies
- Block all cookies
- Block third-party cookies
- Clear cookies when you close your browser

Please note that blocking all cookies may affect your experience on this and other websites.

## Third-Party Services

### Google Analytics

When you accept analytics cookies, we use Google Analytics, which is provided by Google LLC. Google Analytics uses cookies to collect anonymous information about your visit.

- **Data Controller**: Google LLC
- **Privacy Policy**: [https://policies.google.com/privacy](https://policies.google.com/privacy)
- **Opt-out**: [https://tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout)

**Important**: Data collected by Google Analytics is transferred to and stored on servers in the United States. We have configured Google Analytics to anonymize IP addresses before storage to enhance privacy protection.

## Data Retention

- **Cookie consent preference**: Stored locally in your browser for 1 year
- **Google Analytics data**: Retained according to Google's data retention policies (we have configured this to the minimum available period)

## Your Rights Under GDPR

If you are located in the European Union, you have the following rights:

- **Right to Access**: Request information about data we collect
- **Right to Rectification**: Request correction of inaccurate data
- **Right to Erasure**: Request deletion of your data
- **Right to Object**: Object to processing of your data
- **Right to Data Portability**: Request transfer of your data
- **Right to Withdraw Consent**: Change your cookie preferences at any time

To exercise these rights, please contact us at the email address listed on our [About](/about) page.

## Children's Privacy

Our website is intended for healthcare professionals and is not directed at children under 16. We do not knowingly collect personal information from children.

## Changes to This Policy

We may update this Cookie Policy from time to time. The "Last Updated" date at the top of this page indicates when the policy was last revised.

## Contact Us

If you have questions about our use of cookies, please see our [About](/about) page for contact information.

---

## Technical Details

For transparency, here are the specific cookies and storage items we use:

| Name | Type | Purpose | Duration | Required Consent |
|------|------|---------|----------|------------------|
| `ppe_cookie_consent` | localStorage | Stores your cookie consent choice | 1 year | No (essential) |
| `ppe_cookie_consent_timestamp` | localStorage | Tracks when consent was given | 1 year | No (essential) |
| `_ga` | Cookie | Google Analytics - distinguishes users | 2 years | Yes |
| `_ga_*` | Cookie | Google Analytics - maintains session state | 2 years | Yes |

**Note**: Google Analytics cookies are only set if you accept analytics cookies via our consent banner.

</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid var(--color-border, #e5e7eb);
  }
  
  th {
    background: var(--color-background-secondary, #f9fafb);
    font-weight: 600;
  }
  
  button:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  button:active {
    transform: translateY(0) !important;
  }
</style>
