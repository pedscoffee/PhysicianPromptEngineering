document.addEventListener('DOMContentLoaded', function () {
  const dropdownLinks = document.querySelectorAll('.dropdown > .page-link');

  // Handle dropdown toggles on mobile
  dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Only intercept on mobile
      if (window.innerWidth <= 768) { // Increased breakpoint to match typical tablet/mobile split
        const parent = this.parentElement;
        const isActive = parent.classList.contains('active');

        // If we are opening this one, close all others first
        if (!isActive) {
          document.querySelectorAll('.dropdown.active').forEach(function (activeDropdown) {
            if (activeDropdown !== parent) {
              activeDropdown.classList.remove('active');
            }
          });

          e.preventDefault(); // Prevent navigation on first tap
          parent.classList.add('active');
        } else {
          // If it's already active:
          // 1. If it's a real link, let it navigate (don't prevent default)
          // 2. If it's a placeholder (#), toggle it closed
          if (this.getAttribute('href') === '#' || !this.getAttribute('href')) {
            e.preventDefault();
            parent.classList.remove('active');
          }
          // Otherwise, allow default navigation
        }
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.active').forEach(function (dropdown) {
          dropdown.classList.remove('active');
        });
      }
    }
  });

  // Reset state on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.dropdown.active').forEach(function (dropdown) {
        dropdown.classList.remove('active');
      });
    }
  });
});
