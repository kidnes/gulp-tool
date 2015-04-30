var config       = require('../config/minify');
var gulp         = require('gulp');
var minifyCSS    = require('gulp-minify-css');


gulp.task('minify', ['sass'], function() {
    return gulp.src(config.src)
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest(config.dest));
});