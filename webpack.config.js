var config = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
config.plugins.push(
  new HtmlWebpackPlugin({
    template: 'docs/index.template.html',
    filename: '../index.html'
  })
)

module.exports = config
