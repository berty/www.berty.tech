const amphtmlValidator = require('amphtml-validator');
const glob = require('glob');
const fs = require('fs');

const publicDir = `${__dirname}/public`;

(async () => {
  glob(`${publicDir}/**/*.html`, {}, (error, files) => {
    if (error) {
      console.log({error});
      process.exit(1);
    }

    amphtmlValidator.getInstance().then(function(validator) {
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');

        // ignore non-AMP pages
        if (content.indexOf('⚡') == -1) {
          return;
        }

        const result = validator.validateString(content);

        for (let ii = 0; ii < result.errors.length; ii++) {
          const error = result.errors[ii];

          // ignore this error. This error occurs because the optimize.js script removes white space from the style, but this is OK for valid AMP
          if (error.message.indexOf("head > style[amp-boilerplate]' is missing or incorrect")) {
            return;
          }

          let msg = '-------\n';
              msg += `file: ${file}\n`;
              msg += `line: ${error.line}\n`;
              msg += `col: ${error.col}\n`;
              msg += `message: ${error.message}\n`;

          if (error.specUrl !== null) {
            msg += `see: ${error.specUrl}\n`;
          }

          msg += '-------\n';

          console.log(msg)
        }
      })
      
    });
  })
})()
