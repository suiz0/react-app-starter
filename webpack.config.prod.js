const path = require("path");
const { mergeWithRules } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.base");

const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src", "index.ejs"),
    }),
  ],
};

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "prepend",
    },
  },
  plugins: "append",
})(baseConfig, config);
