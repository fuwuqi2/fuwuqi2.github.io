const fs = require('fs');
const path = require('path');
const root = 'E:\\code\\fuwuqi2.github.io';

const htmlFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === '.zwork') continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(root);

let changes = 0;
for (const f of htmlFiles) {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;
  // Replace href="dir/" with href="dir/index.html" for internal links
  // Match: href="something/" where something doesn't start with http
  // Also handle href="../dir/", href="../../dir/"
  c = c.replace(/href="([^"]*)\/"/g, (match, p1) => {
    // Skip if it's an external URL or already has index.html
    if (p1.startsWith('http') || p1.endsWith('/index.html')) return match;
    return 'href="' + p1 + '/index.html"';
  });
  if (c !== before) {
    fs.writeFileSync(f, c);
    changes++;
    console.log('Fixed', path.relative(root, f));
  }
}
console.log('Files changed:', changes);
