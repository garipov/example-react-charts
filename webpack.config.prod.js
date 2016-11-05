const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      {from: './index.html', to: path.join(__dirname, 'dist/')}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[hash:base64:5]!postcss!sass'
      }
    ]
  },
  postcss: [autoprefixer()]
};
