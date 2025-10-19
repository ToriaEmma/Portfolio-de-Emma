(()=>{let o={arbitrachain:{title:"ArbitraChain",platform:"figma",url:"https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1",embedUrl:"https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1",image:"img/projets/l-dark (4).png"},"design-system":{title:"Design System",platform:"figma",url:"https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1",embedUrl:"https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1",image:"img/projets/Capture d'écran du 2025-08-13 22-42-38.png"},"identite-visuelle":{title:"Identité Visuelle",platform:"canva",url:"https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit",image:"img/projets/Green and White Minimalist Natural Skincare Feed Ad (1).png"},"campagne-marketing":{title:"Campagne Marketing",platform:"canva",url:"https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit",image:"img/projets/Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png"},"presentation-corporate":{title:"Présentation Corporate",platform:"canva",url:"https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit",image:"img/projets/WhatsApp Image 2025-08-14 at 6.17.53 PM.jpeg"},"kit-reseaux-sociaux":{title:"Kit Réseaux Sociaux",platform:"canva",url:"https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit",image:"img/projets/Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png"}},s,l,d,i;function e(){if(s=document.getElementById("projectModal-new"),l=document.getElementById("modalTitle-new"),d=document.getElementById("modalContent-new"),i=document.getElementById("statusMessages-new"),s&&l&&d&&i){var e=document.querySelectorAll("[data-aos]");if(window.IntersectionObserver){let a=new IntersectionObserver(e=>{e.forEach(e=>{var t;e.isIntersecting&&(t=parseInt(e.target.dataset.aosDelay)||0,setTimeout(()=>{e.target.classList.add("aos-animate")},t),a.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(e=>a.observe(e))}else e.forEach(e=>e.classList.add("aos-animate"));document.addEventListener("click",t),document.addEventListener("keydown",a),window.addEventListener("resize",n),console.log("✅ Section projets moderne initialisée")}else console.error("Éléments DOM manquants pour la section projets")}function t(e){var t=e.target.closest("[data-action]");if(t){e.preventDefault();var a=t.dataset.action,i=t.dataset.project,n=a,a=i,i=t,r=o[a];if(r)switch((e=>{e.style.transform="scale(0.95)",setTimeout(()=>{e.style.transform=""},150)})(i),n){case"view":m(r);break;case"open":(t=>{if(s&&l&&d){l.textContent=t.title,d.innerHTML=`
      <div class="image-modal-content" style="text-align: center; padding: 1rem;">
        <div style="position: relative; max-width: 100%; margin: 0 auto;">
          <img 
            src="${t.image}" 
            alt="${t.title}"
            style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; 
                   border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);"
            onerror="handleImageError(this)"
          />
          <div style="display: none; padding: 3rem; color: #64748b;">
            <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
            <p>Image non disponible</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button onclick="window.open('${t.url}', '_blank')" 
                  style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; 
                         background: ${"figma"===t.platform?"linear-gradient(135deg, #667eea, #764ba2)":"linear-gradient(135deg, #f093fb, #f5576c)"}; 
                         color: white; border: none; border-radius: 8px; font-weight: 500; 
                         cursor: pointer; transition: all 0.3s ease;">
            <i class="fab fa-${t.platform}"></i>
            Ouvrir dans ${"figma"===t.platform?"Figma":"Canva"}
          </button>
        </div>
      </div>
    `,s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";let e=s.querySelector(".modal-close-new");e&&setTimeout(()=>e.focus(),100),g(`Image de "${t.title}" affichée`)}})(r);break;case"download":(e=>{g(`Préparation du téléchargement de "${e.title}"...`,"info"),setTimeout(()=>{g(`Téléchargement de "${e.title}" non disponible pour le moment`,"warning")},1500)})(r);break;default:console.warn("Action non reconnue: "+n)}else g("Projet non trouvé","error")}else e.target.matches(".modal-close-new, .modal-backdrop-new")&&c()}function a(e){"Escape"===e.key&&s&&"false"===s.getAttribute("aria-hidden")&&c()}function n(){var e,t;s&&"false"===s.getAttribute("aria-hidden")&&s&&(e=s.querySelector(".modal-content-new"))&&(t=.9*window.innerHeight,e.style.maxHeight=t+"px")}function m(t){if(s&&l&&d){l.textContent=t.title,"figma"===t.platform&&t.embedUrl?d.innerHTML=`
        <div class="iframe-container" style="position: relative; width: 100%; height: 500px; border-radius: 12px; overflow: hidden; background: #f8fafc;">
          <iframe 
            src="${t.embedUrl}" 
            width="100%" 
            height="100%" 
            allowfullscreen
            title="Prévisualisation de ${t.title}"
            loading="lazy"
            style="border: none; border-radius: 12px;"
          ></iframe>
        </div>
        <div style="margin-top: 1rem; text-align: center;">
          <a href="${t.url}" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; 
                    background: linear-gradient(135deg, #667eea, #764ba2); color: white; 
                    text-decoration: none; border-radius: 8px; font-weight: 500; transition: all 0.3s ease;">
            <i class="fas fa-external-link-alt"></i>
            Ouvrir dans Figma
          </a>
        </div>
      `:d.innerHTML=`
        <div class="modal-fallback" style="text-align: center; padding: 3rem 2rem;">
          <div style="max-width: 400px; margin: 0 auto;">
            <i class="fas fa-external-link-alt" style="font-size: 4rem; color: #0cd4bd; margin-bottom: 1.5rem; display: block;"></i>
            <h4 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.5rem;">Prévisualisation ${"canva"===t.platform?"Canva":"externe"}</h4>
            <p style="color: #64748b; margin-bottom: 2rem; line-height: 1.6;">
              Ce projet ${"canva"===t.platform?"Canva":"externe"} s'ouvre dans un nouvel onglet pour une meilleure expérience.
            </p>
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" 
               style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; 
                      background: linear-gradient(135deg, #f093fb, #f5576c); color: white; 
                      text-decoration: none; border-radius: 12px; font-weight: 600; 
                      transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(240, 147, 251, 0.3);">
              <i class="fas fa-external-link-alt"></i>
              Ouvrir ${t.title} dans ${"figma"===t.platform?"Figma":"Canva"}
            </a>
          </div>
        </div>
      `,s.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";let e=s.querySelector(".modal-close-new");e&&setTimeout(()=>e.focus(),100),g(`Prévisualisation de "${t.title}" ouverte`)}}function c(){s&&(s.setAttribute("aria-hidden","true"),document.body.style.overflow="",setTimeout(()=>{d&&(d.innerHTML="")},300),g("Prévisualisation fermée"))}function g(e,t="success"){var a;i&&(a={success:"#10b981",error:"#ef4444",warning:"#f59e0b",info:"#3b82f6"},i.style.background=a[t]||a.success,i.textContent=e,i.style.transform="translateX(0)",setTimeout(()=>{i.style.transform="translateX(100%)",setTimeout(()=>{i.textContent=""},300)},3e3))}window.ProjectsDebug={showModal:e=>{e=o[e];e&&m(e)},closeModal:c,showMessage:g,config:o},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()})();