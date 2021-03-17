const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require("./webpack.base");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      })
    ]
  }
}

module.exports = merge(base, prodConfig)
