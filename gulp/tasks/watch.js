/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const path = require('path')
const log = require('gutil-color-log')

const paths = require('../paths')
const build = require('./build')
const test = require('./test')


gulp.task('watch', () => gulp.watch([
    path.join(paths.build_root, '**/*'),
    path.join(paths.src_root, '**/*'),
    path.join(paths.test_root, '**/*')
  ], () => build()
    .then(() => test())
    .catch(e => log('red', e))
))
