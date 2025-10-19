class MicroInteractions{constructor(){this.init()}init(){this.setupCursorEffects(),this.setupHoverMagnification(),this.setupScrollProgress(),this.setupParallaxElements(),this.setupTypingEffect(),this.setupCounterAnimations(),this.setupRippleEffects()}setupCursorEffects(){let t=document.createElement("div"),r=(t.className="custom-cursor",t.innerHTML='<div class="cursor-dot"></div><div class="cursor-ring"></div>',document.body.appendChild(t),0),o=0,e=0,s=0,n=(document.addEventListener("mousemove",e=>{r=e.clientX,o=e.clientY}),()=>{e+=.1*(r-e),s+=.1*(o-s),t.style.transform=`translate(${e}px, ${s}px)`,requestAnimationFrame(n)});n(),document.querySelectorAll("a, button, .btn").forEach(e=>{e.addEventListener("mouseenter",()=>{t.classList.add("cursor-hover")}),e.addEventListener("mouseleave",()=>{t.classList.remove("cursor-hover")})})}setupHoverMagnification(){document.querySelectorAll(".hero-avatar, .profile-image").forEach(o=>{o.addEventListener("mousemove",e=>{var t=o.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*100;o.style.transformOrigin=r+`% ${(e.clientY-t.top)/t.height*100}%`,o.style.transform="scale(1.1)"}),o.addEventListener("mouseleave",()=>{o.style.transform="scale(1)",o.style.transformOrigin="center"})})}setupScrollProgress(){let t=document.createElement("div");t.className="scroll-progress",document.body.appendChild(t),window.addEventListener("scroll",()=>{var e=window.pageYOffset/(document.documentElement.scrollHeight-window.innerHeight)*100;t.style.width=Math.min(e,100)+"%"})}setupParallaxElements(){let e=document.querySelectorAll(".floating-circle, .bg-shape-1, .bg-shape-2");window.addEventListener("scroll",()=>{let r=window.pageYOffset;e.forEach((e,t)=>{t=.5*(t+1),t=-r*t;e.style.transform=`translateY(${t}px)`})})}setupTypingEffect(){document.querySelectorAll(".typing-effect").forEach(e=>{let t=e.textContent,r=(e.textContent="",e.style.borderRight="2px solid var(--primary-color)",0),o=()=>{r<t.length?(e.textContent+=t.charAt(r),r++,setTimeout(o,100)):setInterval(()=>{e.style.borderRight="none"===e.style.borderRight?"2px solid var(--primary-color)":"none"},500)},s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(setTimeout(o,1e3),s.unobserve(e.target))})});s.observe(e)})}setupCounterAnimations(){document.querySelectorAll(".stat-number").forEach(s=>{let n=parseInt(s.textContent.replace(/\D/g,"")),i=s.textContent.replace(/\d/g,""),a=new IntersectionObserver(e=>{e.forEach(o=>{if(o.isIntersecting){let e=0,t=n/50,r=setInterval(()=>{(e+=t)>=n&&(e=n,clearInterval(r)),s.textContent=Math.floor(e)+i},50);a.unobserve(o.target)}})});a.observe(s)})}setupRippleEffects(){document.querySelectorAll(".btn, .nav-list a").forEach(n=>{n.addEventListener("click",e=>{let t=document.createElement("span");var r=n.getBoundingClientRect(),o=Math.max(r.width,r.height),s=e.clientX-r.left-o/2,e=e.clientY-r.top-o/2;t.style.cssText=`
          position: absolute;
          width: ${o}px;
          height: ${o}px;
          left: ${s}px;
          top: ${e}px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `,n.style.position="relative",n.style.overflow="hidden",n.appendChild(t),setTimeout(()=>{t.remove()},600)})})}}let microInteractionStyles=`
<style>
/* Curseur personnalisé */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.cursor-ring {
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
  opacity: 0.5;
}

.custom-cursor.cursor-hover .cursor-ring {
  width: 60px;
  height: 60px;
  opacity: 0.8;
}

/* Barre de progression du scroll */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--gradient-primary);
  z-index: 1001;
  transition: width 0.1s ease;
}

/* Animation ripple */
@keyframes ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
}

/* Améliorations des images au survol */
.hero-avatar, .profile-image {
  transition: transform 0.3s ease;
  cursor: none;
}

/* Effets de parallax */
.floating-circle, .bg-shape-1, .bg-shape-2 {
  will-change: transform;
}

/* Responsive pour les micro-interactions */
@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
  
  .hero-avatar, .profile-image {
    cursor: auto;
  }
}

/* Mode sombre pour les micro-interactions */
@media (prefers-color-scheme: dark) {
  .cursor-dot {
    background: var(--primary-color);
  }
  
  .cursor-ring {
    border-color: var(--primary-color);
  }
}
</style>
`;document.head.insertAdjacentHTML("beforeend",microInteractionStyles),document.addEventListener("DOMContentLoaded",()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||new MicroInteractions}),window.addEventListener("error",e=>{e.filename&&e.filename.includes("micro-interactions")&&(console.warn("Micro-interaction error:",e.message),document.querySelector(".custom-cursor")?.remove(),document.querySelector(".scroll-progress")?.remove())});