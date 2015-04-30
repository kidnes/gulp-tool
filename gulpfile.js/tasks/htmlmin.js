var config       = require('../config/htmlmin');
var gulp         = require('gulp');
var htmlmin      = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
    return gulp.src(config.src)
        .pipe(htmlmin(config.option))
        .pipe(gulp.dest(config.dest));
});