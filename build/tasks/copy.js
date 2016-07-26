/**
 * Created by timur on 7/26/16.
 */

const path = require('path')
const gulp = require('gulp')
const Promise = require('bluebird')

const paths = require('../paths')
const log = require('../log')
const test = require('../test')


gulp.task('copy', (done) => test(copy, `Copied files.`, done))

const copy = () => {
  
  return new Promise((resolve, reject) => {
    
    return gulp.src(path.join(paths.src_root, '**/*.html'))
      .pipe(gulp.dest(paths.dist_root))
      .on('end', resolve)
      .on('error', reject)
  })
}

module.exports = copy
