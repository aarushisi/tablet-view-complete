document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Show the button after scrolling down a certain distance
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    });
});
