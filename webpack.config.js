/**
 * Created by timur on 7/26/16.
 */


module.exports = {
  
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/entry.js' // Your appʼs entry point
  ],
  
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'jsx?harmony', 'babel?cacheDirectory'] },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
  
}
