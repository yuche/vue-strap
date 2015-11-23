var config = require('./webpack.config.js')

config.entry = {
  'vue-strap': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueStrap',
  libraryTarget: 'umd'
}

config.output.filename = config.output.filename.replace(/\.js$/, '.min.js')

delete config.devtool

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
        warnings: false
    }
  })
]

module.exports = config
