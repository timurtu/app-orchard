/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')

const log = require('../log')
const paths = require('../paths')
const test = require('../test')
const clean = require('./clean')
const bundle = require('./bundle')
const copyHtml = require('./copy').copyHtml


gulp.task('build', (done) => {
  
  test(build, `Built to ${paths.dist_root}`, done)
})

const build = () => {
  
  return Promise.join(copyHtml(), bundle())
}
