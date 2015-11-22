var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: './static',
    publicPath: '/static/',
    filename: 'build.js'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue' },
      {
      	test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      	loader: 'babel'
      },
      { test: /\.css$/, loader: "style-loader!css-loader?root=./docs/" }
    ]
  },
  babel: {
  presets: ['es2015'],
  plugins: ['transform-runtime']
},
  devtool: 'source-map'
};
