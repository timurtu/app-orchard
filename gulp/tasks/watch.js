/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const path = require('path')
const paths = require('../paths')
const client = require('./client')


gulp.task('watch', ['test'], () => {
  
  client()
  
  gulp.watch([
    path.join(paths.build_root, '**/*'),
    path.join(paths.src_root, '**/*'),
    path.join(paths.test_root, '**/*')
  ], ['test'])
})
