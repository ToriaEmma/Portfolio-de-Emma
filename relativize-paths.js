const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'latelierpaon.com');

/**
 * Recursively list files under dir
 */
function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...listFiles(p));
    } else {
      files.push(p);
    }
  }
  return files;
}

/**
 * Replace absolute asset paths by relative ones.
 * Rules:
 *  - HTML: src="/…" -> src="./…" ; href="/…" -> href="./…"
 *  - CSS: url(/…) -> url(./…)
 *  - JS: only known asset prefixes: /_nuxt/, /img/, /favicon.ico
 */
function relativizeContent(filePath, content) {
  const ext = path.extname(filePath).toLowerCase();
  let out = content;

  if (ext === '.html') {
    out = out
      .replace(/(\bsrc=)"\/(?!\/)/g, '$1"./')
      .replace(/(\bhref=)"\/(?!\/)/g, '$1"./')
      .replace(/(\bsrc=)'\/(?!\/)/g, '$1' + "'./")
      .replace(/(\bhref=)'\/(?!\/)/g, '$1' + "'./");
  } else if (ext === '.css') {
    out = out.replace(/url\(\/(?!\/)\s*/g, 'url(./');
  } else if (ext === '.js') {
    out = out
      // Known asset folders
      .replace(/(["'])\/_nuxt\//g, '$1./_nuxt/')
      .replace(/(["'])\/img\//g, '$1./img/')
      .replace(/(["'])\/favicon\.ico/g, '$1./favicon.ico');
  }

  return out;
}

function run() {
  if (!fs.existsSync(ROOT)) {
    console.error('Directory not found:', ROOT);
    process.exit(1);
  }

  const files = listFiles(ROOT).filter(p => /\.(html|css|js)$/i.test(p));
  let changed = 0;

  for (const f of files) {
    const before = fs.readFileSync(f, 'utf8');
    const after = relativizeContent(f, before);
    if (after !== before) {
      fs.writeFileSync(f, after);
      changed++;
      console.log('✔ Updated', path.relative(ROOT, f));
    }
  }

  console.log(`\nDone. ${changed} file(s) updated.`);
}

run();
