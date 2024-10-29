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
  const images = document.querySelectorAll('.image-to-open');
  const icons = document.querySelectorAll('.hover-icon');
  
  icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const imageUrl = images[index].src;
      // Open image in a new tab in fullscreen
      window.open(imageUrl, '_blank').focus();
    });
  });
  