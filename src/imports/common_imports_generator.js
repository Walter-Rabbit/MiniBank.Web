const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function* getFiles(dir) {
  const dirs = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirs) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

require('fs').writeFileSync('common_imports.js', '');

;(async () => {
  for await (const f of getFiles('../blocks')) {
    if (f.endsWith('.js')) {
      let data = require('fs').readFileSync(f);
      require('fs').appendFileSync('common_imports.js', data + '\n');
    }
  }
})()
