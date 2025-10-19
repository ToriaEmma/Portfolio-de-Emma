document.addEventListener("DOMContentLoaded",function(){function o(){var e=document.querySelector(".newsletter-form-modern");let r=document.querySelector(".newsletter-input-modern"),o=document.querySelector(".newsletter-btn-modern");e&&r&&o&&(r.addEventListener("focus",function(){this.parentElement.classList.add("focused")}),r.addEventListener("blur",function(){this.value||this.parentElement.classList.remove("focused")}),e.addEventListener("submit",function(t){t.preventDefault();t=r.value.trim();if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){n("Merci ! Vous êtes maintenant abonné(e) 🎉","success"),r.value="";{t=o;let e=t.querySelector(".btn-ripple")||t.querySelector(".scroll-ripple");e&&(e.style.width="0",e.style.height="0",setTimeout(()=>{e.style.width="300px",e.style.height="300px",setTimeout(()=>{e.style.width="0",e.style.height="0"},600)},10))}}else n("Veuillez entrer une adresse email valide","error")}))}function n(e,t){var r=document.querySelector(".newsletter-feedback");r&&r.remove();let o=document.createElement("div");o.className="newsletter-feedback "+t,o.innerHTML=`
            <i class="fas ${"success"===t?"fa-check-circle":"fa-exclamation-triangle"}"></i>
            <span>${e}</span>
        `,document.querySelector(".newsletter-form-modern").appendChild(o),Object.assign(o.style,{display:"flex",alignItems:"center",gap:"0.5rem",padding:"1rem",borderRadius:"8px",marginTop:"1rem",fontSize:"0.9rem",fontWeight:"500",background:"success"===t?"rgba(34, 197, 94, 0.1)":"rgba(239, 68, 68, 0.1)",border:"1px solid "+("success"===t?"rgba(34, 197, 94, 0.3)":"rgba(239, 68, 68, 0.3)"),color:"success"===t?"#22c55e":"#ef4444",animation:"slideInUp 0.3s ease-out"}),setTimeout(()=>{o.style.animation="slideOutDown 0.3s ease-in forwards",setTimeout(()=>o.remove(),300)},4e3)}setTimeout(()=>{{var e=document.querySelectorAll(".stat-number[data-count]");let s=new IntersectionObserver(e=>{e.forEach(a=>{if(a.isIntersecting){let e=a.target,t=parseInt(e.dataset.count),r=0,o=t/50;let n=setInterval(()=>{(r+=o)>=t?(e.textContent=t,clearInterval(n)):e.textContent=Math.floor(r)},40);s.unobserve(e)}})},{threshold:.5});e.forEach(e=>s.observe(e))}o();{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.animation="fadeInUp 0.8s ease-out forwards",t.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".footer-section, .newsletter-section-modern, .social-section-modern").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px)",t.observe(e)})}document.querySelectorAll(".social-card").forEach(e=>{e.addEventListener("mousemove",function(e){var t=this.getBoundingClientRect(),r=e.clientX-t.left;this.style.transform=`perspective(1000px) rotateX(${(e.clientY-t.top-t.height/2)/10}deg) rotateY(${(t.width/2-r)/10}deg) translateY(-5px)`}),e.addEventListener("mouseleave",function(){this.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"})}),document.querySelectorAll(".cta-btn").forEach(e=>{e.addEventListener("mousemove",function(e){var t=this.getBoundingClientRect(),r=e.clientX-t.left-t.width/2;this.style.transform=`translate(${.1*r}px, ${.1*(e.clientY-t.top-t.height/2)}px) translateY(-3px)`}),e.addEventListener("mouseleave",function(){this.style.transform="translate(0px, 0px) translateY(0px)"})}),document.querySelector(".footer-ultra-modern"),document.querySelectorAll('.nav-link-modern[href^="#"], .cta-btn[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();e=this.getAttribute("href"),e=document.querySelector(e);e&&e.scrollIntoView({behavior:"smooth",block:"start"})})});{let t=document.querySelector(".footer-ultra-modern");t&&(window.matchMedia("(prefers-color-scheme: dark)").matches||(t.style.setProperty("--footer-text-muted","#6b7280"),t.style.setProperty("--footer-border","rgba(0, 0, 0, 0.1)")),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?(t.style.setProperty("--footer-text-muted","#a0a9c0"),t.style.setProperty("--footer-border","rgba(255, 255, 255, 0.1)")):(t.style.setProperty("--footer-text-muted","#6b7280"),t.style.setProperty("--footer-border","rgba(0, 0, 0, 0.1)"))}))}{let e=!1;function t(){e=!1}function r(){e||(requestAnimationFrame(t),e=!0)}window.addEventListener("scroll",r),window.addEventListener("mousemove",r)}console.log("🎨 Footer Ultra-Moderne initialisé avec succès !")},100);var e=document.createElement("style");e.textContent=`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(20px);
            }
        }
        
        .newsletter-feedback {
            animation: slideInUp 0.3s ease-out;
        }
    `,document.head.appendChild(e)}),window.FooterUtils={triggerSpecialEffect:function(e="celebration"){if("celebration"===e)for(let e=0;e<20;e++)setTimeout(()=>{var e=Math.random()*window.innerWidth,t=Math.random()*window.innerHeight,r=["#0cd4bd","#e91e63","#667eea","#f093fb"],r=r[Math.floor(Math.random()*r.length)];this.createCustomParticle(e,t,r)},100*e)}};let customParticleStyle=document.createElement("style");customParticleStyle.textContent=`
    @keyframes customParticleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
`,document.head.appendChild(customParticleStyle);