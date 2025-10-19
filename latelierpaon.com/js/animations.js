// Animation des barres de compétences
function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const width = bar.getAttribute('data-width') || bar.getAttribute('data-skill');
        if (width) {
            bar.style.width = width;
        }
    });
}

// Animation au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Démarrer les animations lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // Animer les barres de compétences
    animateSkillBars();
    
    // Configurer l'observer pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observer tous les éléments avec la classe animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

// Réanimer au redimensionnement de la fenêtre
window.addEventListener('resize', animateOnScroll);
// Animer au chargement initial
window.addEventListener('load', animateOnScroll);
