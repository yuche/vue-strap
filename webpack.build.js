var config = require('./webpack.config.js')

config.entry = {
  'vue-strap': [
    'babel-polyfill',
    './src/index.js',
  ]
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueStrap',
  libraryTarget: 'umd'
}


module.exports = config
