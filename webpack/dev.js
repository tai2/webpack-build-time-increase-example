const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, '../'),
    entry: [
        'babel-polyfill',
        './src/index.jsx',
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '../dist'),
        publicPath: 'http://localhost:8080/',
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [
            'node_modules',
            'src',
        ],
        //extensions: ['.js', '.jsx'],
        // Below is webpacker's default
        extensions: ['.coffee', '.js', '.jsx', '.erb', '.jpg', '.jpeg', '.png', '.css', '.sass', '.scss', '.gif', '.svg', '.vue'],
    },
    devServer: {
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
}
