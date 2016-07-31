/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')
const execAsync = Promise.promisify(require('child_process').exec)

const test = require('../utils').testTask
const log = require('../log')


gulp.task('bundle', done => test(bundle, 'Bundled app.', done))

const bundle = () => execAsync('node_modules/.bin/webpack')
  .then(out => /ERROR/.test(out) ? log('red', out) : log('green', out))

module.exports = bundle
