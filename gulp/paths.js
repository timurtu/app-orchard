/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const path = require('path')

const log = require('./log')


const paths = {
  entry: path.resolve('src/entry.js'),
  src_root: path.resolve('src'),
  dist_root: path.resolve('dist'),
  build_root: path.resolve('gulp')
}

gulp.task('paths', () => log('cyan', JSON.stringify(paths, null, 2)))

module.exports = paths
