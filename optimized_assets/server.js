let express=require("express"),path=require("path"),mime=require("mime-types"),fs=require("fs"),app=express(),PORT=process.env.PORT||3e3;app.use(express.static(path.join(__dirname,"latelierpaon.com"),{index:!1,setHeaders:(e,t)=>{var a=mime.lookup(t);a&&e.setHeader("Content-Type",a),t.endsWith(".js")&&e.setHeader("Content-Type","application/javascript"),t.endsWith(".svg")&&e.setHeader("Content-Type","image/svg+xml"),(t.endsWith(".woff")||t.endsWith(".woff2"))&&e.setHeader("Content-Type","font/woff")}})),app.get("*",(e,n)=>{var t=path.join(__dirname,"latelierpaon.com","index.html");fs.readFile(t,"utf8",(e,t)=>{if(e)return n.status(500).send("Error loading index.html");var e=Date.now(),a=`
    <link id="override-day-css" rel="stylesheet" href="/override-day.css?v=${e}" />
    <style id="override-day-inline">
      html:not(.dark), body:not(.dark), html:not(.dark) #__nuxt {
        background: #fff url('/_nuxt/img/white-bg.58090aa.svg') center top / cover no-repeat !important;
        background-attachment: fixed !important;
      }
      html:not(.dark) .plan--second { background-image: url('/_nuxt/img/mountains_atelierpaon_2.e02f9e6.svg') !important; }
      html:not(.dark) .plan--third  { background-image: url('/_nuxt/img/mountains-middle_atelierpaon_3.6ecf003.svg') !important; }
      html:not(.dark) .plan--fourth { background-image: url('/_nuxt/img/mountains-front_atelierpaon_4.7d8acae.svg') !important; }
      html:not(.dark) .plan--fifth  { background-image: url('/_nuxt/img/floor_atelierpaon_5.2e6831c.svg') !important; }
    </style>
  `;let r=t;t=`
    <script src="/theme-fix.js?v=${e}" defer></script>
  `;(r=r.includes("override-day-inline")?r:r.replace(/<\/head>/i,a+"</head>")).includes("/theme-fix.js")||(r=r.replace(/<\/body>/i,t+"</body>")),n.send(r)})}),app.listen(PORT,()=>{console.log("🚀 L'Atelier Paon preview server running at http://localhost:"+PORT),console.log("📁 Serving files from: "+path.join(__dirname,"latelierpaon.com"))});