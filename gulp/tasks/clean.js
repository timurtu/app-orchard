/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))
const paths = require('../paths')
const testTask = require('../utils').testTask


gulp.task('clean', done => testTask(clean, 'Cleaned dist.', done))

const clean = () => rimrafAsync(paths.dist_root)

module.exports = clean
