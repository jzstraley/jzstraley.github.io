const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './loginrxn/src/index.js',
    // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'app/bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
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
      template: './loginrxn/public/index.html'
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js']
}};