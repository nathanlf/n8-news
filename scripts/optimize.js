/*
 * Image pre-optimization to reduce build time, recommended by Gatsby documentation.
 * https://www.gatsbyjs.com/docs/preoptimizing-images/
 *
 * To run this script, run `node scripts/optimize.js`
 *  OR `npm run predevelop` to run both script and `gatsby develop`.
 */

const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 400;
const QUALITY = 50;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return fs.rename(optimizedName, match);
  })
);
