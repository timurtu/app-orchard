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
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  }
  
}
