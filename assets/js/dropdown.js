// Mobile dropdown toggle functionality and keyboard support

document.addEventListener('DOMContentLoaded', function() {
  // Dropdown navigation
  const dropdowns = document.querySelectorAll('.dropdown > .page-link');

  dropdowns.forEach(function(dropdown) {
    // Add ARIA attributes
    dropdown.setAttribute('role', 'button');
    dropdown.setAttribute('aria-haspopup', 'true');
    dropdown.setAttribute('aria-expanded', 'false');

    // Click handler
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 599) {
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

    // Keyboard support
    dropdown.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
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
  if (window.innerWidth > 599) {
    // Remove active class from all dropdowns on desktop
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('active');
      const link = dropdown.querySelector('.page-link');
      if (link) link.setAttribute('aria-expanded', 'false');
    });
  }
});
