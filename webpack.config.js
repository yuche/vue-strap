var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: './docs/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: 'build/',
        filename: 'build-docs.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/, loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader?root=./docs/"
            },
            {
                test: /\.scss$/, loader: "style!css!sass"
            },
            {
                test: /\.less$/, loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}