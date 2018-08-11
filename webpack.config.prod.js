const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfill: '@babel/polyfill',
        bundle: path.join(__dirname, 'src/index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'production',
    cache: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            },
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            cache: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
        }),
    ]
};
