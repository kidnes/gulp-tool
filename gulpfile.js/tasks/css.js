var gulp        = require('gulp');
var config      = require('../config/css');
var mergeStream = require('merge-stream');
var sourcemaps  = require('gulp-sourcemaps');
var concatCss   = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var _           = require('lodash');

function concatThis(configThis) {
    return gulp.src(config.src + configThis.fileName)
        .pipe(sourcemaps.init())
        .pipe(concatCss(configThis.fileName))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(config.dest))
}

function cssTask() {
    // Start bundling with gulp-css-globbing for each bundleConfig specified
    return mergeStream.apply(gulp, _.map(config.bundleConfigs, concatThis));
}
 
gulp.task('css', function() {
    return cssTask()
});
