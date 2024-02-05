const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  output: {
    publicPath: '/portfolio-asteroids/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'portfolio-asteroids/assets/images',
        },
        {
          from: './src/assets/sounds',
          to: 'portfolio-asteroids/assets/sounds',
        },
        {
          from: './src/assets/fonts',
          to: 'portfolio-asteroids/assets/fonts',
        },
      ],
    }),
  ]
});
