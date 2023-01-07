const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: './login/index.js',
    // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'app/bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};