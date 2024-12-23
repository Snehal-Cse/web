// script.js

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Example of background animation
const hero = document.getElementById('hero');
hero.style.animation = 'heroAnimation 10s infinite';

// Add CSS animation for hero section in style.css:
/*
@keyframes heroAnimation {
    0% { background-position: 0 0; }
    100% { background-position: 100% 0; }
}
*/