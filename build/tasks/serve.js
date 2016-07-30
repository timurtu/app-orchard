/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)

const test = require('../utils').testTask
const log = require('../log')


gulp.task('serve', (done) => test(serve, 'Serving app.', done))

const command = 'node_modules/.bin/webpack-dev-server --inline --hot --content-base dist/'

const serve = () => {
  
  log('cyan', 'Serving app at http://localhost:8080')
  
  return execAsync(command)
}

module.exports = serve
