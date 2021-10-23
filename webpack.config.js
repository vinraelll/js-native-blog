const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/main.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: __dirname + '/dist'
    },
    client: {
      logging: 'error'
    }
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}