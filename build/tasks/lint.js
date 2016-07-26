/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const path = require('path')
const Promise = require('bluebird')

const test = require('../test')
const paths = require('../paths')

gulp.task('lint', done => test(lint, 'Linted source code.', done))

const lint = () => {
  
  const buildGlob = path.join(paths.build_root, '**/*.js')
  const srcGlob = path.join(paths.src_root, '**/*.js')
  
  return new Promise((resolve, reject) => {
    gulp.src([buildGlob, srcGlob])
      .pipe(eslint())
      .pipe(eslint.format())
      .on('end', resolve)
      .on('error', reject)
  })
}

module.exports = lint
