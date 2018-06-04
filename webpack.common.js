const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve:{
    extensions: ['.js','.jsx']
  },
  module: {
    rules:[
        {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules)/,
            use:{
                loader:'babel-loader'
            }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        { 
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000' 
        },
        {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
    ]
  }
};
