/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')

const test = require('../utils').testTask
const lint = require('./lint')
const clean = require('./clean')
const bundle = require('./bundle')
const copy = require('./copy')


gulp.task('build', (done) => test(build, 'Built app.', done))

const build = () => clean()
  .then(() => Promise.join(lint(), copy(), bundle()))

module.exports = build
