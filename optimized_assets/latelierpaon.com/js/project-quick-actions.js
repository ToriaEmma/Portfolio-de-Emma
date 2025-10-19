function openGalleryLightbox(t){let l=document.createElement("div"),e=(l.className="gallery-lightbox",l.innerHTML=`
    <div class="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <div class="lightbox-images">
          <img src="${t.thumbnail}" alt="${t.title}" class="lightbox-image active">
          ${t.gallery?t.gallery.map(e=>`<img src="${e}" alt="${t.title}" class="lightbox-image">`).join(""):""}
        </div>
        <div class="lightbox-nav">
          <button class="lightbox-prev">‹</button>
          <button class="lightbox-next">›</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(l),l.querySelectorAll(".lightbox-image")),i=0;function o(l){e.forEach((e,t)=>{e.classList.toggle("active",t===l)})}l.querySelector(".lightbox-close").onclick=()=>l.remove(),l.querySelector(".lightbox-overlay").onclick=e=>{e.target===e.currentTarget&&l.remove()},1<e.length&&(l.querySelector(".lightbox-prev").onclick=()=>{o(i=(i-1+e.length)%e.length)},l.querySelector(".lightbox-next").onclick=()=>{o(i=(i+1)%e.length)})}function quickDownloadImage(e){var t=document.createElement("a");t.href=e.thumbnail,t.download=e.title.replace(/\s+/g,"-")+".jpg",t.click()}function openExternalLink(e){e.url?window.open(e.url,"_blank"):showMessage("Lien externe non disponible","warning")}document.addEventListener("click",function(e){if(e.target.closest(".quick-action-btn")){var e=e.target.closest(".quick-action-btn"),l=e.dataset.action;let t=e.dataset.projectId;var i=projectsData.find(e=>e.id===parseInt(t));if(i)switch(l){case"gallery":openGalleryLightbox(i);break;case"quick-download":quickDownloadImage(i);break;case"external":openExternalLink(i)}}});