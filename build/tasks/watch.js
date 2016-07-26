/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const path = require('path')

const paths = require('../paths')
const log = require('../log')
const build = require('./build')
const serve = require('./serve')


gulp.task('watch', () => watch())

const watch = () => {
  
  build()
    .then(serve)
    .catch(e => log('red', e))
  
  gulp.watch(path.join(paths.src_root, '**/*'), ['build'])
}