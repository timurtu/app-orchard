/**
 * Created by timur on 7/26/16.
 */

const appEntry = './src/app/entry.js'

module.exports = {
  
  
  entry: {
    
    app: process.env.NODE_ENV === 'prod' ? appEntry :
      [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        appEntry
      ],
    
    test: ['./test/entry']
  },
  
  output: {
    path: './dist',
    filename: '[name].js'
  },
  
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?cacheDirectory'] },
      // { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'jsx?harmony', 'babel?cacheDirectory'] },
      { test: /\.scss$/, include:/node_modules|src/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
