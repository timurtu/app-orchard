/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)
const log = require('gutil-color-log')

const test = require('../utils').testTask


gulp.task('bundle', done => test(bundle, 'Bundled app.', done))

const bundle = () => execAsync('node_modules/.bin/webpack')
  .then(out => /ERROR/.test(out) ? log('red', out) : log('green', out))

module.exports = bundle
