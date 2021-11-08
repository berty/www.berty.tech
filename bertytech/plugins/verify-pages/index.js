const path = require("path");
const fs = require("fs");
const glob = require("glob");
const xmlParser = require("fast-xml-parser");

const expectedHtmlCount = 3300;

module.exports = {
  onPostBuild: ({ constants, utils }) => {
    const { PUBLISH_DIR } = constants;
    const { build } = utils;
    const htmlFiles = glob.sync(path.join(PUBLISH_DIR, "**/*.html"));

    console.log("Checking if HTML file count looks OK...");
    console.log(`HTML file count: ${htmlFiles.length}`);
    // If the output contains less than the expected HTML file count, there might have been a timeout
    // which caused not all files to be generated
    if (htmlFiles.length >= expectedHtmlCount) {
      console.log(
        `HTML file count is more than ${expectedHtmlCount}, so looks OK.`
      );
    } else {
      const msg = `Output contains less than ${expectedHtmlCount} HTML files`;
      console.error(msg);
      return build.failBuild(msg);
    }

    console.log("Checking if all files referenced in sitemap exists...");

    const allSitemaps = glob.sync(path.join(PUBLISH_DIR, "**/sitemap.xml"));
    console.log(`Sitemap count: ${allSitemaps.length}`);

    const pageFiles = allSitemaps
      .map((sitemap) => {
        const content = fs.readFileSync(sitemap, "utf-8");
        const parsed = xmlParser.parse(content, {});
        if (parsed.urlset && Array.isArray(parsed.urlset.url)) {
          return parsed.urlset.url.map((url) => {
            const dirname = new URL(url.loc).pathname;
            return path.join(PUBLISH_DIR, dirname, "index.html");
          });
        }
      })
      .filter(Boolean)
      .flat();

    const missingPages = pageFiles.filter((file) => {
      return !fs.existsSync(file);
    });

    if (missingPages.length > 0) {
      console.error({ missingPages });
      return build.failBuild(`Output is missing pages`);
    } else {
      console.log("Great, all pages are found!");
    }
  },
};
