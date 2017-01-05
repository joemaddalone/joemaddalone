var webpack = require('webpack');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel?stage=0'],
    },
       {
      test: /\.css$/,
      loader: 'style!css!autoprefixer!'
    }]
  },
  devServer: {
      contentBase: "./public",
      noInfo: true, //  --no-info option
      inline: true
  },
  plugins: [
    new TransferWebpackPlugin([
            { from: 'css', to: 'css' },
            { from: 'font', to: 'font' },
            { from: 'assets', to: 'assets' }
        ], path.join(__dirname, 'src'))
  ]
};
