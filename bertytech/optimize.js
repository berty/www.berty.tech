const fs = require('fs');
const glob = require('glob');
const htmlnano = require('htmlnano');
const ampSafePreset = require('htmlnano').presets.ampSafe;
const postcss = require('./postcss.config');

const publicDir = `${__dirname}/public`;
const options = {
  removeComments: 'all',
  collapseWhitespace: 'conservative',
  removeUnusedCss: {
    tool: 'purgeCSS',
    ...postcss.purgeCssWhitelist,
  }
};

glob(`${publicDir}/**/*.html`, {}, (err, files) => {
  if (err) {
    console.log({err});
    throw err;
  }

  files.forEach(async file => {
    try {
      const { html } = await htmlnano.process(fs.readFileSync(file, 'utf8'), options, ampSafePreset);
      fs.writeFileSync(file, html)
    } catch (error) {
      console.error({error});
      throw error;
    }
  })
  
});

