function handleFormSubmit(e){e.preventDefault();let s=e.target;e=new FormData(s);const t=e.get("name"),n=e.get("email"),i=e.get("subject"),o=e.get("message");if(t&&n&&i&&o){let e=s.querySelector(".submit-btn"),t=e.innerHTML;e.innerHTML='<i class="fas fa-spinner fa-spin"></i> Envoi en cours...',e.disabled=!0,setTimeout(()=>{showNotification("Message envoyé avec succès !","success"),s.reset(),e.innerHTML=t,e.disabled=!1},2e3)}else showNotification("Veuillez remplir tous les champs","error")}function showNotification(e,t){let s=document.createElement("div");s.className="notification notification-"+t,s.innerHTML=`
    <div class="notification-content">
      <i class="fas fa-${"success"===t?"check-circle":"exclamation-circle"}"></i>
      <span>${e}</span>
    </div>
  `,s.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${"success"===t?"#10b981":"#ef4444"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `,document.body.appendChild(s),setTimeout(()=>{s.style.transform="translateX(0)"},100),setTimeout(()=>{s.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(s)},300)},3e3)}document.addEventListener("DOMContentLoaded",function(){console.log("Contact handler loaded")});