var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'sourcemap',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=application/font-woff2"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&minetype=image/svg+xml"
    }, {
      test: /\.js$/,
      exclude: [/app\/lib/, /node_modules/],
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
