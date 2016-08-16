/**
 * Created by timur on 7/26/16.
 */

module.exports = {
  entry: {
    app: './src/app/entry.js',
    test: './test/entry'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?cacheDirectory'] },
      { test: /\.scss$/, include: /node_modules|src/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
