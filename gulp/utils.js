/**
 * Created by timur on 7/26/16.
 */

const Promise = require('bluebird')
const log = require('gutil-color-log')


function promisifyStream(stream) {
  return new Promise((resolve, reject) =>
    stream
      .on('end', resolve)
      .on('error', reject)
  )
}

function testTask(promise, message, done) {
  promise()
    .catch(e => log('red', e))
    .then(() => log('green', message))
    .then(() => done())
}

module.exports = {
  promisifyStream,
  testTask
}
