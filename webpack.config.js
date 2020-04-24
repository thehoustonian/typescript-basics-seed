module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'aweseme-typescript-loader'}
        ]
    },
    devServer: {
        port: 3000,
    },
};