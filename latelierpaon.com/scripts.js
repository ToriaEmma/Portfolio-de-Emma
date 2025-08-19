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
        if (firstBar && firstBar.style.width === '0px' || !firstBar.style.width) {
          console.log('Animation pas encore déclenchée, force animation');
          forceSkillsAnimation();
        }
      }, 3000);
    } else {
      console.log('Section skills non trouvée, force animation après 2s');
      setTimeout(forceSkillsAnimation, 2000);
    }

/* ======== BLOC JS 5 ======== */
// 1) Fade-in au scroll
    document.addEventListener('DOMContentLoaded', () => {
      const skillsSec = document.getElementById('skills');
      const skillsObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            skillsObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.3 });
      if (skillsSec) skillsObs.observe(skillsSec);
    });

    // Code dupliqué supprimé pour éviter les conflits

/* ======== BLOC JS 6 ======== */
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

/* ======== BLOC JS 7 ======== */
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

/* ======== BLOC JS 8 ======== */
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

/* ======== BLOC JS 9 ======== */
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

/* ======== BLOC JS 10 ======== */
// Gestion des boutons de téléchargement
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const imagePath = this.dataset.image;
      const imageName = this.dataset.name;
          
          // Créer un lien de téléchargement
          const link = document.createElement('a');
          link.href = imagePath;
          link.download = imageName + '.png';
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Afficher notification
          showToast('Image téléchargée avec succès !');
        });
      });

      // Gestion des boutons de prévisualisation
      document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const projectId = this.dataset.project;
          const card = this.closest('.project-card-premium');
          const img = card.querySelector('.project-image-premium');
          const title = card.querySelector('.project-title-premium').textContent;
          
          showModal(img.src, title);
        });
      });

      // Gestion de la fermeture du modal
      const modal = document.getElementById('projectModal-premium');
      const closeBtn = document.querySelector('.modal-close-premium');
      const backdrop = document.querySelector('.modal-backdrop-premium');

      if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
      }
      
      if (backdrop) {
        backdrop.addEventListener('click', closeModal);
      }

      // Fermeture avec Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal();
        }
      });

      function showModal(imageSrc, title) {
        const modal = document.getElementById('projectModal-premium');
        const modalTitle = document.getElementById('modalTitle-premium');
        const modalContent = document.getElementById('modalContent-premium');
        
        modalTitle.textContent = title;
        modalContent.innerHTML = `<img src="${imageSrc}" alt="${title}" style="width: 100%; height: auto; border-radius: 12px;">`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        const modal = document.getElementById('projectModal-premium');
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }

      function showToast(message) {
        // Supprimer les anciens toasts
        document.querySelectorAll('.toast-notification').forEach(toast => {
          toast.remove();
        });

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
          <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
          ${message}
        `;
        
        document.body.appendChild(toast);
        
        // Animer l'apparition
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Supprimer après 3 secondes
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => toast.remove(), 300);
        }, 3000);
      }
    });

/* ======== BLOC JS 7 ======== */
// Animation des barres de compétences
    function animateSkills() {
      document.querySelectorAll('.skill-progress').forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        bar.style.width = skill + '%';
      });

      document.querySelectorAll('.meter-fill').forEach(meter => {
        const level = meter.getAttribute('data-level');
        meter.style.width = level + '%';
      });
    }

    // Observer pour déclencher les animations
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.addEventListener('DOMContentLoaded', () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsObserver.observe(skillsSection);
      }
    });

/* ======== BLOC JS 8 ======== */
/* ======== BLOC JS 9 ======== */
AOS.init({
    duration: 1000,
    once: true
  });

/* ======== BLOC JS 10 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 11 ======== */
// Animation au scroll pour les sections principales
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Animation scroll reveal sur les sections principales
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Animation scroll reveal en cascade sur les projets
    const projectItems = document.querySelectorAll('.grid__featured__item');
    const projectObserver = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, i * 120); // décalage progressif
          projectObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    projectItems.forEach(item => {
      item.classList.remove('is-visible');
      projectObserver.observe(item);
    });

    // Parallax/tilt sur les deux cases superposées de la présentation
    const frame = document.querySelector('.image-frame');
    const shape1 = document.querySelector('.bg-shape-1');
    const shape2 = document.querySelector('.bg-shape-2');
    let tiltTimeout;
    if (frame && shape1 && shape2) {
      frame.addEventListener('mousemove', function(e) {
        const rect = frame.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dx = (x - centerX) / centerX;
        const dy = (y - centerY) / centerY;
        // Mouvement fluide
        shape1.style.transform = `rotate(${-10 + dx * 8}deg) translateY(${dy * 10}px)`;
        shape2.style.transform = `rotate(${2 + dx * 12}deg) translateY(${dy * 16}px)`;
        clearTimeout(tiltTimeout);
      });
      frame.addEventListener('mouseleave', function() {
        // Retour fluide à la position d'origine
        shape1.style.transition = 'transform 0.5s cubic-bezier(.25,.46,.45,.94)';
        shape2.style.transition = 'transform 0.5s cubic-bezier(.25,.46,.45,.94)';
        shape1.style.transform = 'rotate(-10deg) translateY(0)';
        shape2.style.transform = 'rotate(2deg) translateY(0)';
        tiltTimeout = setTimeout(() => {
          shape1.style.transition = '';
          shape2.style.transition = '';
        }, 600);
      });
    }
  });
})();

/* ======== BLOC JS 12 ======== */
document.addEventListener('DOMContentLoaded', function() {
  const home = document.getElementById('home');
  if (!home) return;
  
  // Création d'une file d'attente pour l'animation en cascade
  const revealQueue = [
    ...home.querySelectorAll('.bg-shape-1, .bg-shape-2'),
    home.querySelector('.hero-avatar'),
    home.querySelector('.hero-intro'),
    home.querySelector('.hero-name'),
    home.querySelector('.hero-divider'),
    home.querySelector('.hero-title'),
    home.querySelector('.hero-description'),
    home.querySelector('.hero-buttons')
  ].filter(Boolean);

  let animating = false;
  function showElements() {
    if (animating) return;
    animating = true;
    revealQueue.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('is-visible');
        if (i === revealQueue.length - 1) animating = false;
      }, i * 180);
    });
  }
  function hideElements() {
    revealQueue.forEach(el => el.classList.remove('is-visible'));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showElements();
      } else {
        hideElements();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(home);

  // Parallax/tilt sur les deux cases superposées via les variables CSS
  const frame = document.querySelector('.image-frame');
  const shape1 = document.querySelector('.bg-shape-1');
  const shape2 = document.querySelector('.bg-shape-2');

  function canParallax() {
    return shape1 && shape2 && shape1.classList.contains('is-visible') && shape2.classList.contains('is-visible');
  }

  if (frame && shape1 && shape2) {
    frame.addEventListener('mousemove', function(e) {
      if (!canParallax()) return;
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dx = (x - centerX) / centerX;
      const dy = (y - centerY) / centerY;
      shape1.style.transform = `translateX(0) rotate(${ -10 + dx * 8 }deg) translateY(${ dy * 10 }px)`;
      shape2.style.transform = `translateX(0) rotate(${ 2 + dx * 12 }deg) translateY(${ dy * 16 }px)`;
    });
    frame.addEventListener('mouseleave', function() {
      if (!canParallax()) return;
      shape1.style.transform = 'translateX(0) rotate(-10deg)';
      shape2.style.transform = 'translateX(0) rotate(2deg)';
    });
  }
});

/* ======== BLOC JS 13 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 14 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 15 ======== */
//

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('modal-open');
  document.body.style.overflow = '';
  
  showMessage('Prévisualisation fermée');
}

// Gestion du téléchargement
function handleDownload(project) {
  if (project.download_url) {
    const link = document.createElement('a');
    link.href = project.download_url;
    link.download = `${project.id}.zip`;
    link.click();
    showMessage(`Téléchargement de "${project.title}" démarré`);
  } else {
    showMessage('Téléchargement non disponible pour ce projet', 'info');
  }
}

// Affichage des messages
function showMessage(message, type = 'success') {
  const statusMessages = document.getElementById('statusMessages');
  if (!statusMessages) return;
  
  statusMessages.textContent = message;
  
  // Effacer le message après 3 secondes
  setTimeout(() => {
    statusMessages.textContent = '';
  }, 3000);
}

// Animations au scroll
function initializeScrollAnimations() {
  const cards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('project-card-visible');
        }, index * 150); // Animation décalée
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  cards.forEach(card => {
    card.classList.add('project-card-animate');
    observer.observe(card);
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  
  // Gestion des clics sur les boutons
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-action]');
    if (btn) {
      e.preventDefault();
      const action = btn.getAttribute('data-action');
      const projectId = btn.getAttribute('data-project-id');
      handleProjectAction(action, projectId);
    }
    
    // Fermeture de la modal
    if (e.target.matches('.modal-close, .modal-backdrop')) {
      closeModal();
    }
  });
  
  // Fermeture de la modal avec Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

/* ======== BLOC JS 16 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 17 ======== */
document.addEventListener('DOMContentLoaded', function() {
  const home = document.getElementById('home');
  if (!home) return;
  
  // Création d'une file d'attente pour l'animation en cascade
  const revealQueue = [
    ...home.querySelectorAll('.bg-shape-1, .bg-shape-2'),
    home.querySelector('.hero-avatar'),
    home.querySelector('.hero-intro'),
    home.querySelector('.hero-name'),
    home.querySelector('.hero-divider'),
    home.querySelector('.hero-title'),
    home.querySelector('.hero-description'),
    home.querySelector('.hero-buttons')
  ].filter(Boolean);

  let animating = false;
  function showElements() {
    if (animating) return;
    animating = true;
    revealQueue.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('is-visible');
        if (i === revealQueue.length - 1) animating = false;
      }, i * 180);
    });
  }
  function hideElements() {
    revealQueue.forEach(el => el.classList.remove('is-visible'));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showElements();
      } else {
        hideElements();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(home);

  // Parallax/tilt sur les deux cases superposées via les variables CSS
  const frame = document.querySelector('.image-frame');
  const shape1 = document.querySelector('.bg-shape-1');
  const shape2 = document.querySelector('.bg-shape-2');

  function canParallax() {
    return shape1 && shape2 && shape1.classList.contains('is-visible') && shape2.classList.contains('is-visible');
  }

  if (frame && shape1 && shape2) {
    frame.addEventListener('mousemove', function(e) {
      if (!canParallax()) return;
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const dx = (x - centerX) / centerX;
      const dy = (y - centerY) / centerY;
      shape1.style.transform = `translateX(0) rotate(${ -10 + dx * 8 }deg) translateY(${ dy * 10 }px)`;
      shape2.style.transform = `translateX(0) rotate(${ 2 + dx * 12 }deg) translateY(${ dy * 16 }px)`;
    });
    frame.addEventListener('mouseleave', function() {
      if (!canParallax()) return;
      shape1.style.transform = 'translateX(0) rotate(-10deg)';
      shape2.style.transform = 'translateX(0) rotate(2deg)';
    });
  }
});

/* ======== BLOC JS 18 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 19 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ======== BLOC JS 20 ======== */
// Données des projets (deuxième déclaration supprimée)
const projectsDataSecond = [
  {
    id: 'arbitrachain',
    title: 'ArbitraChain',
    description: 'Interface utilisateur moderne pour plateforme blockchain décentralisée.',
    platform: 'figma',
    url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1',
    embed_url: null,
    thumbnail: 'img/projets/l-dark (4).png',
    download_url: null
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Système de design complet avec composants réutilisables et guidelines.',
    platform: 'figma',
    url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1',
    embed_url: null,
    thumbnail: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png',
    download_url: null
  },
  {
    id: 'identite-visuelle',
    title: 'Identité Visuelle',
    description: 'Création d\'une identité visuelle complète pour une marque de cosmétiques naturels.',
    platform: 'canva',
    url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit',
    embed_url: null,
    thumbnail: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png',
    download_url: null
  },
  {
    id: 'campagne-marketing',
    title: 'Campagne Marketing',
    description: 'Campagne publicitaire digitale avec visuels impactants pour les réseaux sociaux.',
    platform: 'canva',
    url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit',
    embed_url: null,
    thumbnail: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png',
    download_url: null
  },
  {
    id: 'presentation-corporate',
    title: 'Présentation Corporate',
    description: 'Présentation professionnelle avec animations et design moderne pour entreprise.',
    platform: 'canva',
    url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit',
    embed_url: null,
    thumbnail: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png',
    download_url: null
  },
  {
    id: 'kit-reseaux-sociaux',
    title: 'Kit Réseaux Sociaux',
    description: 'Templates cohérents pour tous les réseaux sociaux avec déclinaisons multiples.',
    platform: 'canva',
    url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit',
    embed_url: null,
    thumbnail: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg',
    download_url: null
  }
];

// Génération automatique des embed_url pour Figma
projectsData.forEach(project => {
  if (project.platform === 'figma' && project.url) {
    const figmaId = project.url.match(/\/design\/([a-zA-Z0-9]+)/);
    if (figmaId) {
      project.embed_url = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.url)}`;
    }
  }
});

// Fonction pour générer le HTML d'une carte projet
function createProjectCard(project) {
  const platformIcon = project.platform === 'figma' ? '📐' : '🎨';
  const platformName = project.platform === 'figma' ? 'Figma' : 'Canva';
  
  return `
    <article class="project-card" data-project-id="${project.id}">
      <div class="project-image-container">
        <img 
          src="${project.thumbnail}" 
          alt="Aperçu du projet ${project.title}"
          class="project-image"
          loading="lazy"
        >
        <div class="project-overlay">
          <div class="project-actions">
            <button 
              type="button" 
              class="project-btn project-btn-view" 
              data-action="view" 
              data-project-id="${project.id}"
              aria-label="Prévisualiser ${project.title}"
            >
              <span class="btn-icon">📂</span>
              <span class="btn-text">Voir</span>
            </button>
            <button 
              type="button" 
              class="project-btn project-btn-open" 
              data-action="open" 
              data-project-id="${project.id}"
              aria-label="Ouvrir ${project.title} dans un nouvel onglet"
            >
              <span class="btn-icon">🔗</span>
              <span class="btn-text">Ouvrir</span>
            </button>
            <button 
              type="button" 
              class="project-btn project-btn-download" 
              data-action="download" 
              data-project-id="${project.id}"
              aria-label="Télécharger ${project.title}"
            >
              <span class="btn-icon">⬇️</span>
              <span class="btn-text">Télécharger</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-platform" title="Créé avec ${platformName}">
            <span class="platform-icon">${platformIcon}</span>
            <span class="platform-name">${platformName}</span>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
      </div>
    </article>
  `;
}

// Fonction pour rendre la grille de projets
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) {
    console.error('Élément projectsGrid non trouvé');
    return;
  }
  
  const projectsHTML = projectsData.map(createProjectCard).join('');
  grid.innerHTML = projectsHTML;
  
  // Initialiser les animations d'apparition
  initializeScrollAnimations();
}

// Gestion des événements des boutons
function handleProjectAction(action, projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) {
    showMessage('Projet non trouvé', 'error');
    return;
  }
  
  switch (action) {
    case 'view':
      openModal(project);
      break;
    case 'open':
      window.open(project.url, '_blank', 'noopener,noreferrer');
      showMessage(`Ouverture de "${project.title}" dans un nouvel onglet`);
      break;
    case 'download':
      handleDownload(project);
      break;
  }
}

// Gestion de la modal
function openModal(project) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  if (!modal || !modalTitle || !modalContent) {
    console.error('Éléments de modal non trouvés');
    return;
  }
  
  modalTitle.textContent = project.title;
  
  if (project.platform === 'figma' && project.embed_url) {
    modalContent.innerHTML = `
      <iframe 
        src="${project.embed_url}" 
        width="100%" 
        height="500" 
        allowfullscreen
        title="Prévisualisation de ${project.title}"
      ></iframe>
    `;
  } else {
    modalContent.innerHTML = `
      <div class="modal-fallback">
        <p>Prévisualisation non disponible pour cette plateforme.</p>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-link">
          Ouvrir ${project.title} dans ${project.platform === 'figma' ? 'Figma' : 'Canva'}
        </a>
      </div>
    `;
  }
  
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  
  // Focus sur le bouton de fermeture
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
  
  showMessage(`Prévisualisation de "${project.title}" ouverte`);
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('modal-open');
  document.body.style.overflow = '';
  
  showMessage('Prévisualisation fermée');
}

// Gestion du téléchargement
function handleDownload(project) {
  if (project.download_url) {
    const link = document.createElement('a');
    link.href = project.download_url;
    link.download = `${project.id}.zip`;
    link.click();
    showMessage(`Téléchargement de "${project.title}" démarré`);
  } else {
    showMessage('Téléchargement non disponible pour ce projet', 'info');
  }
}

// Affichage des messages
function showMessage(message, type = 'success') {
  const statusMessages = document.getElementById('statusMessages');
  if (!statusMessages) return;
  
  statusMessages.textContent = message;
  
  // Effacer le message après 3 secondes
  setTimeout(() => {
    statusMessages.textContent = '';
  }, 3000);
}

// Animations au scroll
function initializeScrollAnimations() {
  const cards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('project-card-visible');
        }, index * 150); // Animation décalée
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  cards.forEach(card => {
    card.classList.add('project-card-animate');
    observer.observe(card);
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  
  // Gestion des clics sur les boutons
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-action]');
    if (btn) {
      e.preventDefault();
      const action = btn.getAttribute('data-action');
      const projectId = btn.getAttribute('data-project-id');
      handleProjectAction(action, projectId);
    }
    
    // Fermeture de la modal
    if (e.target.matches('.modal-close, .modal-backdrop')) {
      closeModal();
    }
  });
  
  // Fermeture de la modal avec Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

/* ======== BLOC JS 21 ======== */
(function() {
  const projectsConfig = {
    'arbitrachain': { title: 'ArbitraChain', platform: 'figma', url: 'https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1', image: 'img/projets/l-dark (4).png' },
    'design-system': { title: 'Design System', platform: 'figma', url: 'https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1', embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1', image: 'img/projets/Capture d\'écran du 2025-08-13 22-42-38.png' },
    'identite-visuelle': { title: 'Identité Visuelle', platform: 'canva', url: 'https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit', image: 'img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png' },
    'campagne-marketing': { title: 'Campagne Marketing', platform: 'canva', url: 'https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit', image: 'img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png' },
    'presentation-corporate': { title: 'Présentation Corporate', platform: 'canva', url: 'https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit', image: 'img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png' },
    'kit-reseaux-sociaux': { title: 'Kit Réseaux Sociaux', platform: 'canva', url: 'https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit', image: 'img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg' }
  };

  let modal, modalTitle, modalContent, statusMessages;

  function init() {
    modal = document.getElementById('projectModal-premium');
    modalTitle = document.getElementById('modalTitle-premium');
    modalContent = document.getElementById('modalContent-premium');
    statusMessages = document.getElementById('statusMessages-premium');
    if (!modal) return;
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });
  }

  function handleClick(event) {
    const target = event.target.closest('[data-action]');
    if (target) {
      event.preventDefault();
      const action = target.dataset.action;
      const projectId = target.dataset.project;
      const project = projectsConfig[projectId];
      if (!project) return;
      
      target.style.transform = 'scale(0.95)';
      setTimeout(() => target.style.transform = '', 150);

      if (action === 'view') openModal(project);
      else if (action === 'open') openImageModal(project);
      else if (action === 'download') showMessage('Téléchargement non disponible', 'warning');
      return;
    }
    if (event.target.matches('.modal-close-premium, .modal-backdrop-premium')) closeModal();
  }

  function openImageModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    modalContent.innerHTML = '<div style="text-align: center; padding: 1rem;"><img src="' + project.image + '" alt="' + project.title + '" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; border-radius: 12px;" /><div style="margin-top: 1.5rem;"><button onclick="window.open(\'' + project.url + '\', \'_blank\')" style="padding: 0.75rem 1.5rem; background: ' + (project.platform === 'figma' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)') + '; color: white; border: none; border-radius: 8px; cursor: pointer;">Ouvrir dans ' + (project.platform === 'figma' ? 'Figma' : 'Canva') + '</button></div></div>';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Image affichée');
  }

  function openModal(project) {
    if (!modal || !modalTitle || !modalContent) return;
    modalTitle.textContent = project.title;
    if (project.platform === 'figma' && project.embedUrl) {
      modalContent.innerHTML = '<iframe src="' + project.embedUrl + '" width="100%" height="500px" style="border: none; border-radius: 12px;"></iframe><div style="margin-top: 1rem; text-align: center;"><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; text-decoration: none; border-radius: 8px;">Ouvrir dans Figma</a></div>';
    } else {
      modalContent.innerHTML = '<div style="text-align: center; padding: 3rem;"><p>Ce projet s\'ouvre dans un nouvel onglet.</p><a href="' + project.url + '" target="_blank" style="display: inline-block; padding: 1rem 2rem; margin-top: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; text-decoration: none; border-radius: 12px;">Ouvrir dans Canva</a></div>';
    }
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showMessage('Prévisualisation ouverte');
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { if (modalContent) modalContent.innerHTML = ''; }, 300);
  }

  function showMessage(message, type) {
    if (!statusMessages) return;
    const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
    statusMessages.style.background = colors[type || 'success'];
    statusMessages.textContent = message;
    statusMessages.style.transform = 'translateX(0)';
    setTimeout(() => statusMessages.style.transform = 'translateX(100%)', 3000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

