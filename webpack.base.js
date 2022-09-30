const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "app-[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  devServer: {
    open: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
};
