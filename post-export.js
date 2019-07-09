// post-export.js
require('dotenv').config();
const fs = require('fs');
const { generateSitemap } = require('./generate-sitemap');

// Copy redirects to the root of deployment folder
if (fs.existsSync('_redirects')) {
  fs.copyFile('_redirects', './out/_redirects', err => {
    if (err) throw err;
  });
}

// Generate the sitemap and define the target folder
// Don't forget to set the PUBLIC_DOMAIN secret in Netlify! 🕵️‍♀️
var domain = process.env.PUBLIC_DOMAIN;
generateSitemap(domain, './out/');
