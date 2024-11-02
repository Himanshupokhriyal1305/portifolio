document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    const images = document.querySelectorAll('.image-to-open');
    const icons = document.querySelectorAll('.hover-icon');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    let currentPosition = 0;

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');

        // Toggle between red sun and moon icon
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            icon.style.color = 'red';
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            icon.style.color = ''; // Reverts to default color
        }
    });

    // Close Navbar when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });

    // Image Click to Open in New Tab
    icons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            const imageUrl = images[index].src;
            window.open(imageUrl, '_blank').focus();
        });
    });

    // Card Slider Animation
    function slideCards() {
        sliderWrapper.style.transition = "transform 0.5s ease";
        sliderWrapper.style.transform = `translateX(-${cardWidth}px)`;

        setTimeout(() => {
            sliderWrapper.appendChild(sliderWrapper.firstElementChild);
            sliderWrapper.style.transition = "none";
            sliderWrapper.style.transform = "translateX(0)";
        }, 500); // Time matches the transition duration
    }

    setInterval(slideCards, 2000);
});
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
