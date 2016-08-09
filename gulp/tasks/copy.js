/**
 * Created by timur on 7/26/16.
 */

const path = require('path')
const gulp = require('gulp')

const promisifyStream = require('../utils').promisifyStream
const paths = require('../paths')
const test = require('../utils').testTask


gulp.task('copy', done => test(copy, 'Copied files.', done))

const copy = () => promisifyStream(
  gulp.src(path.join(paths.src_root, '**/*.html'))
    .pipe(gulp.dest(path.join(paths.dist_root, 'prod')))
)

module.exports = copy
