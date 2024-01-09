// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-triggered animations for sections
const visibilityThreshold = 0.8;

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        const isSectionVisible = sectionTop < window.innerHeight * visibilityThreshold && sectionBottom > 0;
        
        section.classList.toggle('active', isSectionVisible);
    });
});

