(()=>{let r={arbitrachain:{title:"ArbitraChain",platform:"figma",url:"https://www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain?node-id=0-1&t=Uiqne6PB3DurNC5D-1",embedUrl:"https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/b8TkVP7lMw4LAY9gOsnQi2/ArbitraChain%3Fnode-id%3D0-1%26t%3DUiqne6PB3DurNC5D-1"},"design-system":{title:"Design System",platform:"figma",url:"https://www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled?node-id=3-1042&t=UNc6tTdtHErmi0cr-1",embedUrl:"https://www.figma.com/embed?embed_host=share&url=https%3A//www.figma.com/design/5sWs5uxJEu0lxzLVIjvCJu/Untitled%3Fnode-id%3D3-1042%26t%3DUNc6tTdtHErmi0cr-1"},"identite-visuelle":{title:"Identité Visuelle",platform:"canva",url:"https://www.canva.com/design/DAGudULUlEQ/FX_tf2tFhrWPbiuq5DkvCw/edit"},"campagne-marketing":{title:"Campagne Marketing",platform:"canva",url:"https://www.canva.com/design/DAGvIs92k4E/o_a_kXZaR35FdEdRpkOK8g/edit"},"presentation-corporate":{title:"Présentation Corporate",platform:"canva",url:"https://www.canva.com/design/DAGuvMRd0yQ/eCLx5AbuNHxA7UW6wbcntA/edit"},"kit-reseaux-sociaux":{title:"Kit Réseaux Sociaux",platform:"canva",url:"https://www.canva.com/design/DAGwGVcWHD0/YSOUwHDjgavZ4sf3-LToIw/edit"}},a,n,i,o;function e(){if(a=document.getElementById("projectModal-new"),n=document.getElementById("modalTitle-new"),i=document.getElementById("modalContent-new"),o=document.getElementById("statusMessages-new"),a&&n&&i&&o){var e=document.querySelectorAll("[data-aos]");if(window.IntersectionObserver){let a=new IntersectionObserver(e=>{e.forEach(e=>{var t;e.isIntersecting&&(t=parseInt(e.target.dataset.aosDelay)||0,setTimeout(()=>{e.target.classList.add("aos-animate")},t),a.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(e=>a.observe(e))}else e.forEach(e=>e.classList.add("aos-animate"));document.addEventListener("click",t),document.addEventListener("keydown",s),window.addEventListener("resize",l),console.log("✅ Section projets moderne initialisée")}else console.error("Éléments DOM manquants pour la section projets")}function t(e){var t=e.target.closest("[data-action]");if(t){e.preventDefault();var a=t.dataset.action,n=t.dataset.project,i=a,a=n,n=t,o=r[a];if(o)switch((e=>{e.style.transform="scale(0.95)",setTimeout(()=>{e.style.transform=""},150)})(n),i){case"view":d(o);break;case"download":(e=>{m(`Préparation du téléchargement de "${e.title}"...`,"info"),setTimeout(()=>{m(`Téléchargement de "${e.title}" non disponible pour le moment`,"warning")},1500)})(o);break;default:console.warn("Action non reconnue: "+i)}else m("Projet non trouvé","error")}else e.target.matches(".modal-close-new, .modal-backdrop-new")&&c()}function s(e){"Escape"===e.key&&a&&"false"===a.getAttribute("aria-hidden")&&c()}function l(){var e,t;a&&"false"===a.getAttribute("aria-hidden")&&a&&(e=a.querySelector(".modal-content-new"))&&(t=.9*window.innerHeight,e.style.maxHeight=t+"px")}function d(t){if(a&&n&&i){n.textContent=t.title,"figma"===t.platform&&t.embedUrl?i.innerHTML=`
        <div class="iframe-container">
          <iframe 
            src="${t.embedUrl}" 
            width="100%" 
            height="500" 
            allowfullscreen
            title="Prévisualisation de ${t.title}"
            loading="lazy"
            style="border: none; border-radius: 12px;"
          ></iframe>
        </div>
      `:i.innerHTML=`
        <div class="modal-fallback">
          <div style="text-align: center; padding: 2rem;">
            <i class="fas fa-external-link-alt" style="font-size: 3rem; color: #0cd4bd; margin-bottom: 1rem;"></i>
            <h4 style="margin-bottom: 1rem; color: #1e293b;">Prévisualisation non disponible</h4>
            <p style="color: #64748b; margin-bottom: 1.5rem;">
              Ce projet ${"canva"===t.platform?"Canva":"externe"} s'ouvre dans un nouvel onglet.
            </p>
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="modal-link">
              <i class="fas fa-external-link-alt"></i>
              Ouvrir ${t.title} dans ${"figma"===t.platform?"Figma":"Canva"}
            </a>
          </div>
        </div>
      `,a.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";let e=a.querySelector(".modal-close-new");e&&setTimeout(()=>e.focus(),100),m(`Prévisualisation de "${t.title}" ouverte`)}}function c(){a&&(a.setAttribute("aria-hidden","true"),document.body.style.overflow="",setTimeout(()=>{i&&(i.innerHTML="")},300),m("Prévisualisation fermée"))}function m(e,t="success"){var a;o&&(a={success:"#10b981",error:"#ef4444",warning:"#f59e0b",info:"#3b82f6"},o.style.background=a[t]||a.success,o.textContent=e,o.style.transform="translateX(0)",setTimeout(()=>{o.style.transform="translateX(100%)",setTimeout(()=>{o.textContent=""},300)},3e3))}window.ProjectsDebug={showModal:e=>{e=r[e];e&&d(e)},closeModal:c,showMessage:m,config:r},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()})();