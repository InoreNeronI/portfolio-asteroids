const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'assets/images',
        },
        {
          from: './src/assets/sounds',
          to: 'assets/sounds',
        },
        {
          from: './src/assets/fonts',
          to: 'assets/fonts',
        },
      ],
    }),
  ]
});
