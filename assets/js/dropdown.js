// Mobile dropdown toggle functionality and keyboard support

document.addEventListener('DOMContentLoaded', function() {
  // Dropdown navigation
  const dropdowns = document.querySelectorAll('.dropdown > .page-link');

  function isMobile() {
    return window.innerWidth <= 599;
  }

  function setupDropdowns() {
    dropdowns.forEach(function(dropdown) {
      if (isMobile()) {
        // Mobile: Add ARIA attributes and event handlers
        dropdown.setAttribute('role', 'button');
        dropdown.setAttribute('aria-haspopup', 'true');
        dropdown.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('tabindex', '0');
      } else {
        // Desktop: Remove mobile-specific attributes
        dropdown.removeAttribute('role');
        dropdown.removeAttribute('aria-haspopup');
        dropdown.removeAttribute('aria-expanded');
        dropdown.removeAttribute('tabindex');
      }
    });
  }

  // Initial setup
  setupDropdowns();

  // Click handlers (mobile only)
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      if (isMobile()) {
        e.preventDefault();
        const parent = this.parentElement;
        const isActive = parent.classList.contains('active');

        // Update ARIA
        this.setAttribute('aria-expanded', !isActive);

        // Toggle the active class
        parent.classList.toggle('active');

        // Close other dropdowns
        dropdowns.forEach(function(otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.setAttribute('aria-expanded', 'false');
            otherDropdown.parentElement.classList.remove('active');
          }
        });
      }
    });

    // Keyboard support (mobile only)
    dropdown.addEventListener('keydown', function(e) {
      if (isMobile() && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Accordion keyboard support
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function(header) {
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');

    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const accordionItem = this.parentElement;
        const isActive = accordionItem.classList.contains('active');
        accordionItem.classList.toggle('active');
        this.setAttribute('aria-expanded', !isActive);
      }
    });

    // Update ARIA on click
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      this.setAttribute('aria-expanded', isActive);
    });
  });
});

// Re-check on window resize
window.addEventListener('resize', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  if (window.innerWidth > 599) {
    // Desktop: Remove active class and mobile attributes from all dropdowns
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('active');
      const link = dropdown.querySelector('.page-link');
      if (link) {
        link.removeAttribute('role');
        link.removeAttribute('aria-haspopup');
        link.removeAttribute('aria-expanded');
        link.removeAttribute('tabindex');
      }
    });
  } else {
    // Mobile: Ensure ARIA attributes are present
    dropdowns.forEach(function(dropdown) {
      const link = dropdown.querySelector('.page-link');
      if (link) {
        link.setAttribute('role', 'button');
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', dropdown.classList.contains('active') ? 'true' : 'false');
        link.setAttribute('tabindex', '0');
      }
    });
  }
});
