/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const path = require('path')
const Promise = require('bluebird')
const paths = require('../paths')
const log = require('gutil-color-log')
const build = require('./build')
const client = require('./client')
const server = require('./server')


gulp.task('watch', () => watch())

const watch = () => {
  
  build()
    .then(() => Promise.join(client(), server()))
    .catch(e => log('red', e))
  
  gulp.watch(path.join(paths.src_root, '**/*'), ['build'])
}
