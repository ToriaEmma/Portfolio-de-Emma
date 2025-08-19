// Fonction pour le toggle du thème
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  console.log('Toggle theme called, current dark class:', body.classList.contains('dark'));
  
  if (body.classList.contains('dark')) {
    // Passer en mode jour
    body.classList.remove('dark');
    if (themeIcon) {
      themeIcon.className = 'fas fa-sun';
      console.log('Switched to light mode, icon:', themeIcon.className);
    }
    localStorage.setItem('theme', 'light');
  } else {
    // Passer en mode sombre
    body.classList.add('dark');
    if (themeIcon) {
      themeIcon.className = 'fas fa-moon';
      console.log('Switched to dark mode, icon:', themeIcon.className);
    }
    localStorage.setItem('theme', 'dark');
  }
  
  // Forcer la mise à jour visuelle
  document.body.style.transition = 'all 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Initialiser le thème
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  console.log('Init theme, saved theme:', savedTheme);
  
  // Par défaut en mode jour si rien n'est sauvegardé
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
    console.log('Loaded dark theme');
  } else {
    body.classList.remove('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    console.log('Loaded light theme');
  }
}

// Charger le thème au démarrage
document.addEventListener('DOMContentLoaded', initTheme);

// Backup si DOMContentLoaded a déjà été déclenché
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
