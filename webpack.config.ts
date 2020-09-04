const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rules = [
  {
    test: /\.tsx$/,
    loader: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/,
    loader: "sass-loader",
  },
  {
    test: /\.(js|jsx|ts|tsx)$/,
    loader:require.resolve('babel-loader')
  }
];

const out = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules,
  },
  plugins: [],
  // devtool:'inline-source-map',
  resolve:{
    extensions:[".js",".css",".tsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9191,
  },
};

module.exports = out;
