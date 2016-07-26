/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))

const paths = require('../paths')
const log = require('../log')
const test = require('../test')


gulp.task('clean', (done) => {
  
  test(clean, `Finished deleting ${paths.dist_root}`, done)
})

const clean = () => rimrafAsync(paths.dist_root)

module.exports = clean