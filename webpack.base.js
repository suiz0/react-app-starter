const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app-[contenthash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)/,
        type: 'asset'
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, 'src'),
      extensions: ['js', 'ts', 'tsx']
    })
  ],
  devServer: {
    open: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  }
};
