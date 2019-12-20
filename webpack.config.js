const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: "./client_source/index.ts",
    output: {
        path: path.resolve(__dirname, './client_dist'),
        publicPath: "/",
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts(\?.*)?$/,
                loader: 'ts-loader',
                exclude: '/node_modules',

            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};