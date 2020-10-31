const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const files = glob.sync(path.resolve(__dirname, "../content", "**/*.md"));
const regex = /:|\*|\?|"|<|>|\|/;

// Sanitize filenames to work with crowdin.com
const sanitizeFilename = async (filepath) => {
  if (filepath.match(regex)) {
    // if it's index.md, then remove the parent folder
    const filepathToRemove = path.basename(filepath).startsWith("index.")
      ? path.dirname(filepath)
      : filepath
    const sanitizeFilepath = filepath.replace(regex, "");

    fs.moveSync(filepath, sanitizeFilepath);
    fs.removeSync(filepathToRemove);
    console.log(
      `\nRenamed file \n- from: ${filepath} \n- to: ${sanitizeFilepath}`
    );
  }
};

Promise.all(files.map(sanitizeFilename));
