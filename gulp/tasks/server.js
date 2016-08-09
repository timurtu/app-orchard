/**
 * Created by timur on 8/9/16.
 */

const path = require('path')
const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)
const log = require('gutil-color-log')
const test = require('../utils').testTask
const paths = require('../paths')


gulp.task('server', done => test(server, 'Started server.', done))

const command = `node_modules/.bin/nodemon ${path.join(paths.dist_root, 'src/server/index.js')}`

const server = () => {
  
  log('cyan', 'Server running on port 3000')
  
  return execAsync(command)
    .then(out => /error/.test(out) ? log('red', out) : log('green', out))
  
}

module.exports = server
