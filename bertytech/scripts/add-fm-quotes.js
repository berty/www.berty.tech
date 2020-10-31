const fs = require("fs");
const path = require("path");
const glob = require("glob");

const files = glob.sync(path.join(__dirname, "../content", "**/*.md"));

const addQuotes = async (filepath) => {
  let content = fs.readFileSync(filepath, "utf-8");

  try {
    let [line, title] = content.match(/title: (.*)/);
    if (!title.startsWith('"') && !title.startsWith("'")) {
      const q = title.indexOf('"') > -1 ? "'" : '"';
      content = content.replace(line, `title: ${q}${title}${q}`);
      fs.writeFileSync(filepath, content);
    }
  } catch (err) {
    console.log(`Err: ${filepath}`);
  }
};

Promise.all(files.map(addQuotes));
