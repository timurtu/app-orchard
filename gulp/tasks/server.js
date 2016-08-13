/**
 * Created by timur on 8/12/16.
 */

const gulp = require('gulp')
const log = require('gutil-color-log')
const path = require('path')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)

const test = require('../utils').testTask
const paths = require('../paths')

const rightPath = path.join(paths.dist_root, 'index')


gulp.task('server', done => {
  
  console.log(rightPath)
  test(server, 'Server started.', done)
})

const server = () => execAsync(`node ${rightPath}`)
  .then(out => {
    log('green', out)
  })
  .catch(e => log('red', e))

