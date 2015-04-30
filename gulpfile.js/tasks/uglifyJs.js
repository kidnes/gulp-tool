var gulp    = require('gulp');
var config  = require('../config/uglifyJs');
var size    = require('gulp-filesize');
var uglify  = require('gulp-uglify');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});