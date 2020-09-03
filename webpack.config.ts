const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rules = [
  {
    test: /\.tsx$/,
    loader: "ts-loader",
    exclude:/node_modules/
  },
  {
    test:/\.scss$/,
    loader:"sass-loader"
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
};

module.exports = out;
