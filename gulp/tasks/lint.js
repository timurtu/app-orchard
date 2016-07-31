/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const path = require('path')
const Promise = require('bluebird')

const test = require('../utils').testTask
const paths = require('../paths')


gulp.task('lint', done => test(lint, 'Linted source.', done))

const lint = () => {
  
  const buildGlob = path.join(paths.build_root, '**/*.js')
  const srcGlob = path.join(paths.src_root, '**/*.js')
  
  return new Promise((resolve, reject) => {
    
    return gulp.src([buildGlob, srcGlob])
      .pipe(eslint())
      .pipe(eslint.format())
      .on('error', reject)
      .pipe(eslint.result(x => resolve(x)))
  })
}

module.exports = lint
