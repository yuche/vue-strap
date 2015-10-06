var config = require('./webpack.config.js')

config.entry = {
  'vue-strap': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueStrap',
  libraryTarget: 'umd'
}

delete config.plugins

module.exports = config
