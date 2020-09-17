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
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|bmp|jpg|jpeg)$/,
            include: /(images)/,
            use: {
                loader: 'file-loader'
            }
        },
        {
            test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|bmp)$/,
            exclude: /(images)/,
            loader: 'url-loader?limit=1024'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
    }
};