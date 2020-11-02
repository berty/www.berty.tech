const YAML = require("yaml");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

// This script creates missing translation files
// Example index.fr.md

const configFile = path.resolve(__dirname, "../config.yaml");
const configContent = fs.readFileSync(configFile, "utf8");
const config = YAML.parse(configContent);

const defaultLanguage = config.DefaultContentLanguage;
const languages = Object.keys(config.languages).filter(
  (lang) => lang !== defaultLanguage
);

const files = glob.sync(path.join(__dirname, "../content", "**/*.md"), {
  ignore: path.join(__dirname, "../content", "**/*.*.md"),
});

const createTranslatedFiles = async (filepath) => {
  const extension = path.extname(filepath);
  languages.forEach((language) => {
    const langFile = path.join(
      path.dirname(filepath),
      `${path.basename(filepath, extension)}.${language}${extension}`
    );

    if (!fs.existsSync(langFile)) {
      console.log(`Created missing translation file: ${langFile}`);
      fs.copyFileSync(filepath, langFile);
    }
  });
};

Promise.all(files.map(createTranslatedFiles));
