const webpack = require('./node_modules/webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index',
    server: './server'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: "/desc/",
    inline: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },
  externals: {
    http: 'http',
    fs: 'fs'
  },
  module: {
    rules: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          loader: ["css-loader", "stylus-loader"],
          fallback: "style-loader",
          // publicPath: "/dist",
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader?name=[name].[ext]"
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      excludeChunks: ['server']
    })
  ],
}

module.exports = config
