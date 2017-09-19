var path = require('path');
var webpack = require('webpack');

var pluginsApplied = [
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ['config'],
    //     minChunks: Infinity
    // })
]
console.log(__dirname)
module.exports = {
    node : { fs: 'empty' },
    devtool:'inline-source-map',
    entry: {
        app: ['babel-polyfill', 'index'],
        vendor:['react','react-dom','material-ui','react-flexbox-grid','react-tap-event-plugin','lodash']
    },
    output: {
        path: path.resolve(__dirname, 'report'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            index:  __dirname +'/js/index.js'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1', 'react']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            }

        ]
    },
    stats: {
        colors: true
    },
};