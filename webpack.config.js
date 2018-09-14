const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const PROD_ENV = 'prod';
const ENV = process.env.NODE_ENV;

const entry = `${SRC_DIR}/index.js`;
const output = {
  filename: 'index.js',
  path: DIST_DIR,
  publicPath: '/',
};

const devConfig = {
  mode: 'development',
  entry,
  output,
  module: {
    rules: [],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const prodConfig = {
  mode: 'production',
  entry,
  output,
  module: {
    rules: [],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
  ],
};

module.exports = ENV === PROD_ENV ? prodConfig : devConfig;
