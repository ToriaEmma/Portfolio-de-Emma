// Animation des barres de compétences
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        // Réinitialiser la largeur à 0 pour l'animation
        bar.style.width = '0';
        
        // Obtenir la largeur cible depuis data-skill ou data-width
        const targetWidth = bar.getAttribute('data-skill') || bar.getAttribute('data-width') || '0%';
        
        // Ajouter un délai pour déclencher la transition
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = targetWidth.endsWith('%') ? targetWidth : `${targetWidth}%`;
        }, 100);
    });
}

// Animation au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Observer pour les animations au défilement
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Pour les barres de compétences
                    if (entry.target.classList.contains('skill-progress')) {
                        const targetWidth = entry.target.getAttribute('data-skill') || 
                                         entry.target.getAttribute('data-width') || '0%';
                        entry.target.style.width = targetWidth.endsWith('%') ? targetWidth : `${targetWidth}%`;
                    } else {
                        entry.target.classList.add('animate');
                    }
                    observer.unobserve(entry.target);
                }
            });
        },
        { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' 
        }
    );

    // Observer les éléments à animer
    document.querySelectorAll('.animate-on-scroll, .skill-progress').forEach(element => {
        observer.observe(element);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Configurer les animations au défilement
    initScrollAnimations();
    
    // Animer les barres de compétences immédiatement si elles sont visibles
    const skillsSection = document.querySelector('.skills-section, #skills');
    if (skillsSection && isElementInViewport(skillsSection)) {
        animateSkillBars();
    }
});

// Vérifier si un élément est dans le viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Réanimer au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    animateOnScroll();
    
    // Réinitialiser et réanimer les barres de compétences visibles
    const visibleBars = document.querySelectorAll('.skill-progress');
    visibleBars.forEach(bar => {
        if (isElementInViewport(bar)) {
            bar.style.transition = 'none';
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                const targetWidth = bar.getAttribute('data-skill') || bar.getAttribute('data-width') || '0%';
                bar.style.width = targetWidth.endsWith('%') ? targetWidth : `${targetWidth}%`;
            }, 50);
        }
    });
});

// Animer au chargement initial
window.addEventListener('load', () => {
    animateOnScroll();
    
    // Vérifier si la section compétences est visible au chargement
    const skillsSection = document.querySelector('.skills-section, #skills');
    if (skillsSection && isElementInViewport(skillsSection)) {
        animateSkillBars();
    }
});
