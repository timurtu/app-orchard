/**
 * Created by timur on 8/9/16.
 */

const path = require('path')
const gulp = require('gulp')
const babel = require('gulp-babel')
const paths = require('../paths')
const test = require('../utils').testTask
const promisifyStream = require('../utils').promisifyStream


gulp.task('transpile', done => test(transpile, 'Transpiled source.', done))

const transpile = () => promisifyStream(
  gulp.src(path.join(paths.src_root, '**/*.js'))
    .pipe(babel())
    .pipe(gulp.dest(paths.dist_root))
)

module.exports = transpile
