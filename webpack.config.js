var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './docs/index.js',
  output: {
    path: './build',
    publicPath: 'build/',
    filename: 'build-docs.js'
  },
  resolve: {
    root: path.resolve('./'),
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue-loader' },
      {
      	test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      	loader: 'babel'
      },
      { test: /\.css$/, loader: "style-loader!css-loader?root=./docs/" },
      {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
    ]
  },
  // vue: {
  //   loaders: {
  //     css: ExtractTextPlugin.extract('css')
  //   },
  // },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: 'source-map',
  plugins:[
    // new ExtractTextPlugin('dist/styles.[hash:4].css')
  ]
};


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}
