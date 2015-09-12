var vue = require('vue-loader')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
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
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime'
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'source-map'
}
