'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')


module.exports = {

  entry: join(__dirname, 'index.js'),

  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.js',
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin(),
  ],

}
