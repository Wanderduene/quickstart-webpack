const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            exclude: /(node_modules)/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|bmp|jpg|jpeg)$/,
            include: /(images)/,
            use: ['file-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /(images)/,
            use: ['url-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]}
};