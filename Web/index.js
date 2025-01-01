document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


AOS.init({
    duration: 1200, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true, 
});
