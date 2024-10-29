// image card open
document.querySelectorAll('.hover-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        const img = this.closest('.position-relative').querySelector('.image-to-open');
        if (img) {
            const imgSrc = img.src;
            const fullscreenWindow = window.open(imgSrc, '_blank');
            fullscreenWindow.focus();
        }
    });
    
  });
  
  // image card close
  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
  
    // Close the navbar when clicking outside
    document.addEventListener('click', function (event) {
      const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
  
      if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });
  
  const toggleButton = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');
  
  toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      
      // Change the icon from moon to sun and vice versa
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  });
  
    
  
  