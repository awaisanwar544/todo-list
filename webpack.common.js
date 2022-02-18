const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    publicPath: '/to-do/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|ico|png|jpg|jpeg|webp|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  // plugins
  plugins: [new HtmlWebpackPlugin({
    title: 'Todo List',
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/temp.html'),
  })],
};