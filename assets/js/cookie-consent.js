/**
 * Lightweight GDPR Cookie Consent Manager
 * Manages user consent for Google Analytics and other tracking cookies
 */

(function () {
    'use strict';

    const CONSENT_KEY = 'ppe_cookie_consent';
    const CONSENT_TIMESTAMP_KEY = 'ppe_cookie_consent_timestamp';
    const CONSENT_EXPIRY_DAYS = 365; // Consent valid for 1 year

    const CookieConsent = {
        /**
         * Initialize the consent manager
         */
        init: function () {
            // Check if consent has expired
            if (this.hasConsentExpired()) {
                this.clearConsent();
            }

            const consent = this.getConsent();

            if (consent === null) {
                // No consent recorded, show banner
                this.showBanner();
            } else if (consent === 'accepted') {
                // Consent given, load analytics
                this.loadAnalytics();
            }
            // If consent === 'declined', do nothing (no analytics)
        },

        /**
         * Get current consent status
         * @returns {string|null} 'accepted', 'declined', or null
         */
        getConsent: function () {
            return localStorage.getItem(CONSENT_KEY);
        },

        /**
         * Check if consent has expired (older than CONSENT_EXPIRY_DAYS)
         * @returns {boolean}
         */
        hasConsentExpired: function () {
            const timestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
            if (!timestamp) return false;

            const consentDate = new Date(parseInt(timestamp));
            const expiryDate = new Date(consentDate.getTime() + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
            return new Date() > expiryDate;
        },

        /**
         * Set consent status
         * @param {string} status - 'accepted' or 'declined'
         */
        setConsent: function (status) {
            localStorage.setItem(CONSENT_KEY, status);
            localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
        },

        /**
         * Clear consent (used when expired)
         */
        clearConsent: function () {
            localStorage.removeItem(CONSENT_KEY);
            localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
        },

        /**
         * Show the cookie consent banner
         */
        showBanner: function () {
            const banner = document.createElement('div');
            banner.id = 'cookie-consent-banner';
            banner.setAttribute('role', 'dialog');
            banner.setAttribute('aria-live', 'polite');
            banner.setAttribute('aria-label', 'Cookie consent');

            banner.innerHTML = `
        <div class="cookie-consent-content">
          <div class="cookie-consent-text">
            <p><strong>🍪 Cookie Notice</strong></p>
            <p>We use cookies to analyze site traffic and improve your experience. 
            <a href="/cookies" style="color: #60a5fa; text-decoration: underline;">Learn more</a></p>
          </div>
          <div class="cookie-consent-buttons">
            <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Accept</button>
            <button id="cookie-decline" class="cookie-btn cookie-btn-decline">Decline</button>
          </div>
        </div>
      `;

            document.body.appendChild(banner);

            // Add event listeners
            document.getElementById('cookie-accept').addEventListener('click', () => {
                this.handleAccept();
            });

            document.getElementById('cookie-decline').addEventListener('click', () => {
                this.handleDecline();
            });

            // Animate in
            setTimeout(() => {
                banner.classList.add('visible');
            }, 100);
        },

        /**
         * Hide the banner with animation
         */
        hideBanner: function () {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.remove('visible');
                setTimeout(() => {
                    banner.remove();
                }, 300);
            }
        },

        /**
         * Handle accept button click
         */
        handleAccept: function () {
            this.setConsent('accepted');
            this.hideBanner();
            this.loadAnalytics();
        },

        /**
         * Handle decline button click
         */
        handleDecline: function () {
            this.setConsent('declined');
            this.hideBanner();
        },

        /**
         * Load Google Analytics
         */
        loadAnalytics: function () {
            // Get GA ID from meta tag (we'll add this to head.html)
            const gaMeta = document.querySelector('meta[name="google-analytics"]');
            if (!gaMeta) return;

            const gaId = gaMeta.getAttribute('content');
            if (!gaId) return;

            // Load Google Analytics script
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            document.head.appendChild(script);

            // Initialize gtag
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', gaId, {
                'anonymize_ip': true, // IP anonymization for better privacy
                'cookie_flags': 'SameSite=None;Secure' // Modern cookie settings
            });

            // Make gtag available globally
            window.gtag = gtag;
        },

        /**
         * Revoke consent (for privacy policy page link)
         */
        revokeConsent: function () {
            this.clearConsent();
            // Reload page to reset state
            window.location.reload();
        }
    };

    // Expose revoke function globally for privacy policy page
    window.revokeCookieConsent = function () {
        CookieConsent.revokeConsent();
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            CookieConsent.init();
        });
    } else {
        CookieConsent.init();
    }
})();
