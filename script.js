// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Get target section ID
        const targetSection = document.querySelector(targetId); // Select the section

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-triggered Fade-in Animation
const sections = document.querySelectorAll('.section');

const handleScrollAnimations = () => {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top; // Section's position relative to the viewport
        const screenHeight = window.innerHeight;

        // Add animation class if the section is visible in the viewport
        if (sectionPosition < screenHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

// Add scroll event listener for animations
window.addEventListener('scroll', handleScrollAnimations);

// Trigger the animation check initially (for sections already in view)
handleScrollAnimations();
