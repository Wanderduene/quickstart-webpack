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
            test: /\.(jsx|js)$/i,
            exclude: /(node_modules)/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jp(e*)g|png|woff|woff2|eot|ttf|svg|bmp)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    // limit: smaller files will be base46 encoded into the bundle.js / bigger files will be served via file-loader
                    limit:1024 * 1, // 5kB
                    name: '[name].[hash:7].[ext]'
                },
            }]
        }
    ]}
};