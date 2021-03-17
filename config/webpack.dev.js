const path = require("path");
const base = require("./webpack.base");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    assetModuleFilename: '[name][ext][query]'
  },
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: true
  },
  module: {
    rules: [
      {
        test: /.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
}

module.exports = merge(base, devConfig)
