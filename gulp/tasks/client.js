/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)
const log = require('gutil-color-log')
const test = require('../utils').testTask


gulp.task('client', done => test(client, 'Serving client.', done))

const command = 'node_modules/.bin/webpack-dev-server --inline --hot --content-base dist/prod/'

const client = () => {
  
  log('cyan', 'Client running at http://localhost:8080')
  
  return execAsync(command)
    .then(out => /error/.test(out) ? log('red', out) : log('green', out))
}

module.exports = client
