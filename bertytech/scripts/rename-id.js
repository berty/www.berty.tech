const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const files = glob.sync(path.resolve(__dirname, "../content", "**/*.id.md"));

// Rename indonesian language prefix
const rename = async (filepath) => {
  const newFilepath = filepath.replace(".id.md", ".id-id.md");

  fs.moveSync(filepath, newFilepath);
  fs.removeSync(filepath);
  console.log(
    `\nRenamed file \n- from: ${filepath} \n- to: ${newFilepath}`
  );
};

Promise.all(files.map(rename));
