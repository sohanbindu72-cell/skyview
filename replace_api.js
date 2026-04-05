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
      let changed = false;
      
      const regex1 = /fetch\('\/api\//g;
      if (regex1.test(content)) {
        content = content.replace(regex1, "fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/");
        changed = true;
      }

      const regex2 = /fetch\("\/api\//g;
      if (regex2.test(content)) {
        content = content.replace(regex2, "fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/");
        changed = true;
      }

      const regex3 = /fetch\(`\/api\//g;
      if (regex3.test(content)) {
        content = content.replace(regex3, "fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/");
        changed = true;
      }

      const regex4 = /fetch\('\/api'/g; // fetch('/api')
      if (regex4.test(content)) {
        content = content.replace(regex4, "fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`");
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
});
