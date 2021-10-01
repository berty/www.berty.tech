const fs = require("fs");
const glob = require("glob");
const htmlnano = require("htmlnano");
const ampSafePreset = require("htmlnano").presets.ampSafe;
const postcss = require("./postcss.config");

const publicDir = `${__dirname}/public`;
const options = {
  removeComments: "all",
  collapseWhitespace: "conservative",
  removeUnusedCss: {
    tool: "purgeCSS",
    ...postcss.purgeCssWhitelist,
  },
  minifySvg: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          },
        },
      },
    ],
  },
};

const optimizePage = async (file) => {
  console.log(`Optimizing file ${file}`);
  try {
    const { html } = await htmlnano.process(
      fs.readFileSync(file, "utf8"),
      options,
      ampSafePreset
    );
    fs.writeFileSync(file, html);
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

// Separate the array into chunks of a specific size
const toChunks = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const main = async () => {
  const files = glob.sync(`${publicDir}/**/*.html`);
  // Split the array into chunks, else it will throw a memory error
  const chunks = toChunks(files, 500);
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    await Promise.all(chunk.map(optimizePage));
  }
};

main();
