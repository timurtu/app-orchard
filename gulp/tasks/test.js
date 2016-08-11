/**
 * Created by timur on 8/10/16.
 */

const gulp = require('gulp')
const mocha = require('gulp-mocha')
const path = require('path')
const build = require('./build')
const paths = require('../paths')
const testTask = require('../utils').testTask
const promisifyStream = require('../utils').promisifyStream


gulp.task('test', done => testTask(test, 'Ran Tests.', done))

const test = () =>
  build().then(() =>
    promisifyStream(
      gulp.src(path.join(paths.dist_root, 'test.js'), { read: false })
      // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({ reporter: 'nyan' }))
    )
  )

module.exports = test
