var vue = require('vue-loader')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime'
        })
      }
    ]
  },
  devtool: 'source-map'
}
