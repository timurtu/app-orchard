/**
 * Created by timur on 7/26/16.
 */

const gutil = require('gulp-util')


const log = (color, msg) => gutil.log(gutil.colors[color](msg))

module.exports = log
