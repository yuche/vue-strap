var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: './build',
    filename: 'build-docs.js'
  },
  resolve: {
    root: path.resolve('./')
  },
  plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./'] }
      })
  ],
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue' },
      { 
      	test: /\.js$/,
      	loader: 'babel?optional[]=runtime'
      },
      { test: /\.css$/, loader: "style-loader!css-loader?root=./docs/" }
    ]
  },
  devtool: 'source-map'
};
