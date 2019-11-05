// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// module.exports = withCSS(withSass({
//   webpack(config, {dev}) {
//     if (config.mode === 'production') {
//       if (Array.isArray(config.optimization.minimizer)) {
//         config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
//       }
//     }
//     return config;
//   }
// }));

const withPlugins = require("next-compose-plugins");
const withCSS = require('@zeit/next-css');
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withCSS],[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
