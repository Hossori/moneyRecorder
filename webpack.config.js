const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/src/ts/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist/js')
    },
    devServer: {
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
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
    }
};
