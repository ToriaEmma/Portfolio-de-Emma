/* ======== SCRIPTS COMPLETS DU SITE LATELIERPAON.COM ======== */

/* ======== BLOC JS 1 ======== */
window.addEventListener("error",function(){var e=document.getElementById("nuxt-loading");e&&(e.className+=" error")})

/* ======== BLOC JS 2 ======== */
window.__NUXT__={config:{_app:{basePath:"/",assetsPath:"/_nuxt/",cdnURL:null}}}

/* ======== BLOC JS 3 ======== */
// Supprime tous les éléments contenant 'menu' dans leur texte ou attributs
function removeMenuElements() {
  // Supprime les éléments dont le texte contient 'menu' (insensible à la casse)
  document.querySelectorAll('body *').forEach(function(el) {
    if (el.textContent && /menu/i.test(el.textContent.trim())) {
      el.remove();
    }
  });
  // Supprime les éléments dont la classe, l'id, le href, l'aria-label ou le rôle contient 'menu'
  document.querySelectorAll('[class*="menu"], [id*="menu"], [href*="menu"], [aria-label*="menu"], [role="menu"]').forEach(function(el) {
    el.remove();
  });
}
// Lance la suppression après le chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeMenuElements);
} else {
  removeMenuElements();
}

/* ======== BLOC JS 4 ======== */
// Animation des barres de progression des compétences
function animateSkillsProgressBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  console.log('Barres trouvées:', skillBars.length);
  
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute('data-percentage');
    console.log('Barre', index, 'width:', width);
    if (width) {
      // Délai progressif pour chaque barre
      setTimeout(() => {
        bar.style.width = width + '%';
        bar.style.transition = 'width 1.5s ease-out';
        console.log('Animation appliquée à la barre', index);
      }, index * 200); // 200ms de délai entre chaque barre
    }
  });
}

// Fonction pour forcer l'animation (fallback)
function forceSkillsAnimation() {
  console.log('Force animation des barres de progression');
  animateSkillsProgressBars();
}

// Observer pour déclencher l'animation au scroll
const modernSkillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Section compétences visible, déclenchement animation');
      setTimeout(() => {
        animateSkillsProgressBars();
      }, 300);
      
      modernSkillsObserver.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observer la section skills avec plusieurs sélecteurs
const skillsSection = document.querySelector('#skills') || 
                     document.querySelector('.skills-section') || 
                     document.querySelector('.skills-modern-section') ||
                     document.querySelector('section[id*="skill"]');

console.log('Section skills trouvée:', skillsSection);

if (skillsSection) {
  modernSkillsObserver.observe(skillsSection);
  
  // Fallback: déclencher l'animation après 3 secondes si pas encore fait
  setTimeout(() => {
    const firstBar = document.querySelector('.skill-progress');
    if (firstBar && (firstBar.style.width === '0px' || !firstBar.style.width)) {
      console.log('Animation pas encore déclenchée, force animation');
      forceSkillsAnimation();
    }
  }, 3000);
} else {
  console.log('Section skills non trouvée, force animation après 2s');
  setTimeout(forceSkillsAnimation, 2000);
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, recherche de la section skills...');
  const skillsSec = document.getElementById('skills');
  console.log('Section skills trouvée au chargement:', skillsSec);
  
  if (skillsSec) {
    // Forcer l'animation immédiatement si la section est visible
    const rect = skillsSec.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      console.log('Section skills visible au chargement, animation immédiate');
      setTimeout(() => animateSkillsProgressBars(), 500);
    }
    
    const skillsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          console.log('Section skills intersectée, déclenchement animation');
          e.target.classList.add('visible');
          animateSkillsProgressBars();
          skillsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    skillsObs.observe(skillsSec);
  } else {
    console.log('Section skills non trouvée au chargement DOM');
  }
});

/* ======== BLOC JS 5 ======== */
// Animation des compteurs
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 200;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Observer pour les compteurs
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observer la section stats
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats-section') || document.querySelector('#about');
  if (statsSection) {
    counterObserver.observe(statsSection);
  }
});

/* ======== BLOC JS 6 ======== */
// Smooth scroll pour les liens de navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

/* ======== BLOC JS 7 ======== */
// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulation d'envoi
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Message envoyé !';
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }
});

/* ======== BLOC JS 8 ======== */
// Animation d'apparition au scroll pour tous les éléments
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observer tous les éléments avec la classe 'fade-in'
  const elementsToAnimate = document.querySelectorAll('.fade-in, .card, .skill-item, .contact-card');
  elementsToAnimate.forEach(el => observer.observe(el));
});
