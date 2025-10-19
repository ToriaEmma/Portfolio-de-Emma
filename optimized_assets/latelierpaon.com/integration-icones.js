function openGalleryLightbox(t){let a=document.createElement("div");a.className="gallery-lightbox",a.innerHTML=`
    <div class="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <div class="lightbox-images">
          <img src="${t.thumbnail}" alt="${t.title}" class="lightbox-image active">
        </div>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector(".lightbox-close").onclick=()=>a.remove(),a.querySelector(".lightbox-overlay").onclick=t=>{t.target===t.currentTarget&&a.remove()}}function quickDownloadImage(t){var a=document.createElement("a");a.href=t.thumbnail,a.download=t.title.replace(/\s+/g,"-")+".jpg",a.click()}function openExternalLink(t){t.url?window.open(t.url,"_blank"):alert("Lien externe non disponible")}document.addEventListener("click",function(t){if(t.target.closest(".quick-action-btn")){var t=t.target.closest(".quick-action-btn"),e=t.dataset.action;let a=t.dataset.projectId;var n=projectsData.find(t=>t.id===parseInt(a));if(n)switch(e){case"gallery":openGalleryLightbox(n);break;case"quick-download":quickDownloadImage(n);break;case"external":openExternalLink(n)}}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{"function"==typeof createProjectCard&&(window.createProjectCard=function(t){var a="figma"===t.platform?"📐":"🎨",e="figma"===t.platform?"Figma":"Canva";return`
          <article class="project-card" data-project-id="${t.id}">
            <div class="project-image-container">
              <img 
                src="${t.thumbnail}" 
                alt="Aperçu du projet ${t.title}"
                class="project-image"
                loading="lazy"
              >
              <!-- Icônes interactives en haut à droite -->
              <div class="project-quick-actions">
                <button 
                  type="button" 
                  class="quick-action-btn gallery-btn" 
                  data-action="gallery" 
                  data-project-id="${t.id}"
                  aria-label="Voir la galerie de ${t.title}"
                >
                  <i class="fas fa-images"></i>
                </button>
                <button 
                  type="button" 
                  class="quick-action-btn download-btn" 
                  data-action="quick-download" 
                  data-project-id="${t.id}"
                  aria-label="Télécharger ${t.title}"
                >
                  <i class="fas fa-download"></i>
                </button>
                <button 
                  type="button" 
                  class="quick-action-btn external-btn" 
                  data-action="external" 
                  data-project-id="${t.id}"
                  aria-label="Ouvrir dans ${e}"
                >
                  <i class="fab fa-${"figma"===t.platform?"figma":"canva"}"></i>
                </button>
              </div>
              <div class="project-overlay">
                <div class="project-actions">
                  <button 
                    type="button" 
                    class="project-btn project-btn-view" 
                    data-action="view" 
                    data-project-id="${t.id}"
                    aria-label="Prévisualiser ${t.title}"
                  >
                    <span class="btn-icon">📂</span>
                    <span class="btn-text">Voir</span>
                  </button>
                  <button 
                    type="button" 
                    class="project-btn project-btn-open" 
                    data-action="open" 
                    data-project-id="${t.id}"
                    aria-label="Ouvrir ${t.title} dans un nouvel onglet"
                  >
                    <span class="btn-icon">🔗</span>
                    <span class="btn-text">Ouvrir</span>
                  </button>
                  <button 
                    type="button" 
                    class="project-btn project-btn-download" 
                    data-action="download" 
                    data-project-id="${t.id}"
                    aria-label="Télécharger ${t.title}"
                  >
                    <span class="btn-icon">⬇️</span>
                    <span class="btn-text">Télécharger</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">${t.title}</h3>
                <div class="project-platform" title="Créé avec ${e}">
                  <span class="platform-icon">${a}</span>
                  <span class="platform-name">${e}</span>
                </div>
              </div>
              <p class="project-description">${t.description}</p>
            </div>
          </article>
        `},"function"==typeof renderProjects&&renderProjects(),console.log("✅ Icônes interactives intégrées avec succès !"))},1e3)});