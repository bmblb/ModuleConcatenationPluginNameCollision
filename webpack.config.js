const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist'
    },
    devServer: {
        writeToDisk: true,
        contentBase: path.join(__dirname, 'dist'),
        liveReload: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        port: 9000
    }
}
