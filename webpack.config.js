const path = require('path');

module.exports = {
    entry: './server_source/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};