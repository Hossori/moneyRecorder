const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app/src/ts/main.ts', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist/js')
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
        new GasPlugin()
    ]
};