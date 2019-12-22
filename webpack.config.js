const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        app: './client_source/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './client_dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './client_source/index.html'
        })
    ]
};
