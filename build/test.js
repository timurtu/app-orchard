/**
 * Created by timur on 7/26/16.
 */

const log = require('./log')


const test = (promise, message, done) => {

  promise()
    .catch(e => log('red', e))
    .then(() => log('green', message))
    .then(() => done())
}

module.exports = test
