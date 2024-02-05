const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: [/.js$/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2|woff|ttf)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      },
    ],
  },

  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, '../src/assets/scss'),
      '@img': path.resolve(__dirname, '../src/assets/images'),
      '@': path.resolve(__dirname, '../src'),
    },
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'François Peyret - Web Front Developer',
      template: './src/index.html',
      inject: true,
      scriptLoading: 'defer',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
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
    new CleanWebpackPlugin(),
  ],
};
