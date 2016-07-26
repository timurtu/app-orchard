/**
 * Created by timur on 7/26/16.
 */

const Promise = require('bluebird')

function promisifyStream(stream) {
  
  return new Promise((resolve, reject) => {
    
    return stream
      .on('end', resolve)
      .on('error', reject)
  })
}

module.exports = {
  promisifyStream
}
