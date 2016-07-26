/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)

const paths = require('../paths')
const test = require('../test')
const log = require('../log')


gulp.task('bundle', (done) => {
  
  test(bundle, `Bundled app to ${paths.dist_root}`, done)
})

const bundle = () => execAsync('node_modules/.bin/webpack')
  .then(out => log('yellow', out))

module.exports = bundle
