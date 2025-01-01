function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

function handle404() {
    const hash = window.location.hash.substring(1);
    const section = document.getElementById(hash);

    if (section) {
        showSection(hash);
    } else if (hash) {
        showSection('not-found'); // Show the 404 section
    } else {
        showSection('home'); // Default to home section
    }
}

window.addEventListener('load', handle404);
window.addEventListener('hashchange', handle404);

window.addEventListener('load', () => {
    const animation = lottie.loadAnimation({
        container: document.getElementById('animatedIcon'), // Element to render animation
        renderer: 'svg', // Format (SVG for web)
        loop: true, // Loop the animation
        autoplay: true, // Play animation automatically
        path: '/assets/Animation-404.json', // Correct JSON path
    });

    animation.addEventListener('error', (error) => {
        console.error('Lottie Animation Error:', error);
    });
});

