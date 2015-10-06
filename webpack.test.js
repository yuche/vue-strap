var config = require('./webpack.config.js')

config.entry = {
  entry: './src/Alert.vue',
}

config.output = {
  path: './build',
  filename: 'build-al.js'
}

delete config.plugins

module.exports = config
