const fs = require('fs');
const glob = require('glob');
const path = require('path');
const fetch = require('node-fetch');

const contentDir = `${__dirname}/content`;

(async () => {
  const regex = /\]\((http:|https:)(.+)(svg|gif|png|jpe?g)/g

  glob(`${contentDir}/**/*.md`, {}, async (error, files) => {
    if (error) {
      console.log({error});
      process.exit(1)
    }

    const items = files.map(file => {
      const content = fs.readFileSync(file, 'utf8');
      const matches = content.match(regex);

      if (!matches) {
        return null;
      }

      return matches.map(match => {
        const url = match.replace('](', '');
        return {
          dir: path.dirname(file),
          match: match,
          url: url,
          fullpath: file,
          filename: path.basename(url)
        }
      })
    })
    .filter(i => i)
    .reduce((a, b) => a.concat(b), []);

    try {

      console.log('Going to download remote images!')
      const downloadPromises = items.map(item => {
        const destination = path.join(item.dir, item.filename);
        if (fs.existsSync(destination)) {
          return null;
        }
        return download(item.url, path.join(item.dir, item.filename));
      }).filter(i => i);
      await Promise.all(downloadPromises);
      console.log('Done downloading remote images!')

      console.log('Going to replace urls in markdown files!');
      items.forEach(item => {
        const content = fs.readFileSync(item.fullpath, 'utf8');
        const newContent = content.replace(item.match, `](${item.filename}`);
        fs.writeFileSync(item.fullpath, newContent);
      })
      console.log('Done replace urls in markdown files!')

    } catch (error) {
      console.log({error});
      process.exit(2);      
    }
  });
})();

async function download(url, destination) {
  console.log(`Downloading: ${url}`);
  console.time(`Download done: ${url}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });

  const res = await fetch(url);
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(destination);
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", () => {
      console.timeEnd(`Download done: ${url}`);
      resolve();
    });
  });
}