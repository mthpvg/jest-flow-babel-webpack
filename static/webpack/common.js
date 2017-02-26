const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.jsx'),
  },
  resolve: {
    extensions: ['.js', 'json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: [path.resolve(__dirname, '../src/views')],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/views/index.pug'),
      inject: 'body',
      chunks: ['app'],
    }),
  ],
};
