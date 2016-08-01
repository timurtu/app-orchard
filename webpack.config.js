/**
 * Created by timur on 7/26/16.
 */

module.exports = {
  
  entry: './src/entry.js',
  
  output: {
    
    path: './dist',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
  
}
