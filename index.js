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
  const navbar = document.getElementById('navbarNav'); // Change this to match the collapse navbar ID
  const closeButton = document.querySelector('.fa-circle-xmark'); // Select the circle mark icon
  
  // Toggle dark mode and icon on button click
  toggleButton.addEventListener('click', function (event) {
      document.body.classList.toggle('dark-mode');
  
      // Toggle icon between moon and sun
      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  
      // Prevent this click event from propagating to the document
      event.stopPropagation();
  });
  
  // Close navbar when clicking outside of it
  document.addEventListener('click', function (event) {
      const isClickInsideNavbar = navbar.contains(event.target);
      const isClickInsideToggle = toggleButton.contains(event.target);
  
      if (!isClickInsideNavbar && !isClickInsideToggle) {
          navbar.classList.remove('show'); // Change this to 'show' to match Bootstrap's collapse class
      }
  });
  
  // Close navbar when clicking the circle mark icon
  closeButton.addEventListener('click', function () {
      navbar.classList.remove('show'); // Change this to 'show' to match Bootstrap's collapse class
  });
  
  
    
  
  