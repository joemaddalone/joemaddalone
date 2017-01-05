var webpack = require('webpack');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel?stage=0'],
    },
    {
      test: /\.css$/,
      loaders: ['css-loader']
    }]
  },
  devServer: {
      contentBase: "./public",
      noInfo: true, //  --no-info option
      inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TransferWebpackPlugin([
            { from: 'css', to: 'css' },
            { from: 'font', to: 'font' },
            { from: 'assets', to: 'assets' }
        ], path.join(__dirname, 'src'))
  ]
};
