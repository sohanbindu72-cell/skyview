const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const dirPath = path.join(dir, file);
    const isDir = fs.statSync(dirPath).isDirectory();
    if (isDir) {
      walkSync(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const folders = [
  path.join(__dirname, 'frontend/app'),
  path.join(__dirname, 'frontend/components')
];

folders.forEach(folder => {
  walkSync(folder, (filePath) => {
    if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix instances where a backtick opens but a single quote or double quote closes the fetch URL.
      // E.g. fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations') -> fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations`)
      const regex = /fetch\(`\$\{process\.env\.NEXT_PUBLIC_API_URL\}\/api([^'"`]*)['"`]\)/g;
      
      if (regex.test(content)) {
        content = content.replace(regex, 'fetch(`${process.env.NEXT_PUBLIC_API_URL}/api$1`)');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed syntax in ${filePath}`);
      }
    }
  });
});
