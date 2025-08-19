// Fonction pour le toggle du thème
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'dark');
  }
}

// Charger le thème sauvegardé au démarrage
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-moon';
  } else {
    document.body.classList.remove('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
  }
});
