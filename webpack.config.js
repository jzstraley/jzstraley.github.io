const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './login/index.js',
    // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
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
      template: './login/login.html'
    })
  ],
};