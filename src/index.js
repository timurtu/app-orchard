/**
 * Created by timur on 8/7/16.
 */

const express = require('express')
// const Promise = require('bluebird')
// const fs = Promise.promisifyAll(require('fs'))
const log = require('gutil-color-log')


express()
  .get('/', (req, res) => res.send({ id: 1, name: 'Jen' }))
  .listen(3000)

log('cyan', 'express app running at http://localhost:3000')
