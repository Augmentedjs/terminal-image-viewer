const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/index.js'],
  context: __dirname,
  target: "node",
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: "errors-only",
  devtool: "cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
