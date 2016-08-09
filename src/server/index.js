/**
 * Created by timur on 8/7/16.
 */

const path = require('path')
const express = require('express')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const log = require('gutil-color-log')


fs.readFileAsync(path.resolve('prod/index.html'), 'utf8')
  .then(html => {
    log('green', html)
  })
  .catch(e => {
    log('red', e)
  })

// express()
//   .get('/', (req, res) => res.send('<h1>hey</h1>'))
//   .listen(3000)
