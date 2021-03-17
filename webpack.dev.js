const base = require("./webpack.base");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
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
  }
}

module.exports = merge(base, devConfig)
