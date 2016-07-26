/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const Promise = require('bluebird')

const test = require('../test')
const lint = require('./lint')
const clean = require('./clean')
const bundle = require('./bundle')
const copy = require('./copy')


gulp.task('build', (done) => test(build, 'Built app.', done))

const build = () => lint()
  .then(clean)
  .then(() => Promise.join(copy(), bundle()))
