let fs=require("fs"),path=require("path"),assetMapping={"mountains_atelierpaon_2.df731db.svg":"mountains_atelierpaon_2.e02f9e6.svg","mountains-middle_atelierpaon_3.9af468f.svg":"mountains-middle_atelierpaon_3.6ecf003.svg","mountains-front_atelierpaon_4.752e830.svg":"mountains-front_atelierpaon_4.7d8acae.svg","floor_atelierpaon_5.58cc03e.svg":"floor_atelierpaon_5.2e6831c.svg"};function updateJavaScriptReferences(){["./latelierpaon.com/_nuxt/3bd9116.js","./latelierpaon.com/_nuxt/a4f711a.js"].forEach(s=>{if(fs.existsSync(s)){let n=fs.readFileSync(s,"utf8"),t=!1;Object.keys(assetMapping).forEach(e=>{var a=assetMapping[e],e=e.split(".")[1],a=a.split(".")[1];n.includes(e)&&(n=n.replace(new RegExp(e,"g"),a),t=!0,console.log(`  ✅ Remplacé ${e} par ${a} dans `+path.basename(s)))}),t&&(fs.writeFileSync(s,n),console.log(`  📝 Fichier ${path.basename(s)} mis à jour`))}})}function createUnifiedCSS(){fs.writeFileSync("./latelierpaon.com/_nuxt/unified-styles.css",`
/* CSS unifié pour L'Atelier Paon */
/* Utilisation d'un seul set d'assets avec variations CSS */

.plan--second {
  background-image: url(/img/mountains_atelierpaon_2.e02f9e6.svg);
}

.plan--third {
  background-image: url(/img/mountains-middle_atelierpaon_3.6ecf003.svg);
}

.plan--fourth {
  background-image: url(/img/mountains-front_atelierpaon_4.7d8acae.svg);
}

.plan--fifth {
  background-image: url(/img/floor_atelierpaon_5.2e6831c.svg);
}

/* Dark mode avec filtres CSS au lieu d'assets séparés */
.dark .plan--second,
.dark .plan--third,
.dark .plan--fourth,
.dark .plan--fifth {
  filter: brightness(0.8) contrast(1.2);
}

/* Optimisation des animations */
.plan--second,
.plan--third,
.plan--fourth {
  animation: fifth-entrance 2s ease-in-out both;
  transform-origin: bottom;
}

.plan--fifth {
  animation: fade-in 2s ease-in-out both;
  transform-origin: bottom;
}

@keyframes fifth-entrance {
  0% {
    transform: translateY(60%) scaleY(8) scaleX(18);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`),console.log("✅ CSS unifié créé: unified-styles.css")}console.log("🔄 Mise à jour des références...\n"),updateJavaScriptReferences(),createUnifiedCSS(),console.log("\n✅ Références mises à jour avec succès!");