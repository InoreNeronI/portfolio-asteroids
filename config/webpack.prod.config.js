const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  output: {
    publicPath: '/portfolio-asteroids/',
  },
});
