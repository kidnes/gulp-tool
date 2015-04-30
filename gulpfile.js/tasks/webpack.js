var gulp    = require('gulp');
var config  = require('../config/webpack');
var webpack = require('gulp-webpack');
var named   = require('vinyl-named');

gulp.task('webpack', function() {
    return gulp.src(config.src)
        .pipe(webpack(config.config))
        .pipe(gulp.dest(config.dest));
});