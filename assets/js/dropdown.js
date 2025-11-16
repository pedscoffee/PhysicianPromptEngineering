// Mobile dropdown toggle functionality
// Add this to assets/js/dropdown.js

document.addEventListener('DOMContentLoaded', function() {
  // Only apply mobile dropdown logic on smaller screens
  if (window.innerWidth <= 599) {
    const dropdowns = document.querySelectorAll('.dropdown > .page-link');
    
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle the active class on the parent dropdown
        const parent = this.parentElement;
        parent.classList.toggle('active');
        
        // Close other dropdowns
        dropdowns.forEach(function(otherDropdown) {
          if (otherDropdown !== dropdown) {
            otherDropdown.parentElement.classList.remove('active');
          }
        });
      });
    });
  }
});

// Re-check on window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 599) {
    // Remove active class from all dropdowns on desktop
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.classList.remove('active');
    });
  }
});
