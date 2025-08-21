const express = require('express');
const path = require('path');
const mime = require('mime-types');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the latelierpaon.com directory
app.use(express.static(path.join(__dirname, 'latelierpaon.com'), {
  index: false,
  setHeaders: (res, filePath) => {
    // Set proper MIME types
    const mimeType = mime.lookup(filePath);
    if (mimeType) {
      res.setHeader('Content-Type', mimeType);
    }
    
    // Handle JavaScript files specifically
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    
    // Handle SVG files
    if (filePath.endsWith('.svg')) {
      res.setHeader('Content-Type', 'image/svg+xml');
    }
    
    // Handle font files
    if (filePath.endsWith('.woff') || filePath.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff');
    }
  }
}));

// Handle SPA routing - serve index.html for all routes that don't match static files
// Inject a small theme fix script before </body>
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'latelierpaon.com', 'index.html');
  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error loading index.html');
    }
    // Inject day-only overrides (do not force theme)
    const headFixId = 'override-day-inline';
    const v = Date.now();
    const headInjection = `\n    <link id="override-day-css" rel="stylesheet" href="/override-day.css?v=${v}" />\n    <style id="override-day-inline">\n      html:not(.dark), body:not(.dark), html:not(.dark) #__nuxt {\n        background: #fff url('/_nuxt/img/white-bg.58090aa.svg') center top / cover no-repeat !important;\n        background-attachment: fixed !important;\n      }\n      html:not(.dark) .plan--second { background-image: url('/_nuxt/img/mountains_atelierpaon_2.e02f9e6.svg') !important; }\n      html:not(.dark) .plan--third  { background-image: url('/_nuxt/img/mountains-middle_atelierpaon_3.6ecf003.svg') !important; }\n      html:not(.dark) .plan--fourth { background-image: url('/_nuxt/img/mountains-front_atelierpaon_4.7d8acae.svg') !important; }\n      html:not(.dark) .plan--fifth  { background-image: url('/_nuxt/img/floor_atelierpaon_5.2e6831c.svg') !important; }\n    </style>\n  `;
    let out = html;
    if (!out.includes(headFixId)) {
      // Put inline script + override-day.css at the end of <head> so it loads last
      out = out.replace(/<\/head>/i, `${headInjection}</head>`);
    }
    // Defer script to keep state consistent at runtime
    const bodyFixTag = '/theme-fix.js';
    const bodyInjection = `\n    <script src="/theme-fix.js?v=${v}" defer></script>\n  `;
    if (!out.includes(bodyFixTag)) {
      out = out.replace(/<\/body>/i, `${bodyInjection}</body>`);
    }
    res.send(out);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 L'Atelier Paon preview server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, 'latelierpaon.com')}`);
});