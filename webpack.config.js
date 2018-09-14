const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const PROD_ENV = 'prod';
const ENV = process.env.NODE_ENV;

const isProd = ENV === PROD_ENV;

const entry = `${SRC_DIR}/index.tsx`;
const output = {
  filename: 'index.js',
  path: DIST_DIR,
  publicPath: '/',
};
const resolve = {
  extensions: ['.js', '.ts', '.tsx'],
};

const webpackModule = {
  rules: [
    { test: /.tsx?$/, use: 'awesome-typescript-loader' },
    { enforce: 'pre', test: /.tsx?$/, use: 'source-map-loader' },
    {
      test: /\.(css|scss)$/,
      use: ['css-hot-loader'].concat(
        ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProd,
            },
          }],
          fallback: 'style-loader',
        })
      ),
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      use: 'file-loader?name=[name].[ext]&outputPath=assets/fonts/',
    },
    {
      test: /\.(jpg|png|svg)$/,
      use: 'file-loader?name=[name].[ext]&outputPath=assets/images/',
    },
  ]
};

const devConfig = {
  mode: 'development',
  entry,
  output,
  resolve,
  module: webpackModule,
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
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ],
};

const prodConfig = {
  mode: 'production',
  entry,
  output,
  resolve,
  module: webpackModule,
  plugins: [
    new htmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = isProd ? prodConfig : devConfig;
