const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace Hex Colors
  content = content.replace(/#4f8ef7/gi, '#10b981'); // blue to emerald
  content = content.replace(/#7c5af6/gi, '#06b6d4'); // violet to cyan
  content = content.replace(/#22d3ee/gi, '#14b8a6'); // cyan to teal
  content = content.replace(/#3b82f6/gi, '#10b981'); // blue-500 to emerald-500
  content = content.replace(/#6366f1/gi, '#0ea5e9'); // indigo-500 to sky-500

  // Replace Tailwind classes and generic strings
  // We have to be careful not to break other words, so replace bounded words
  // e.g. blue-500 -> emerald-500, bg-blue -> bg-emerald, etc.
  content = content.replace(/blue/g, 'emerald');
  content = content.replace(/violet/g, 'cyan');
  content = content.replace(/purple/g, 'teal');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
        replaceInFile(fullPath);
      }
    }
  });
}

walk(directoryPath);

// Also update tailwind.config.js
let tailwindConfig = path.join(__dirname, 'tailwind.config.js');
if (fs.existsSync(tailwindConfig)) {
  replaceInFile(tailwindConfig);
}

console.log('Color replacement complete.');
