var config = require('./webpack.base.config.js')

config.entry = {
  'vue-strap': './src/index.js',
}
// config.target = 'node'
config.output = {
  filename: './dist/[name].js',
  library: 'VueStrap',
  libraryTarget: 'umd'
}


module.exports = config
