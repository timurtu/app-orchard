/**
 * Created by timur on 7/26/16.
 */

module.exports = {
  
  entry: './src/app.js',
  
  output: {
    
    path: './dist',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
  
}
