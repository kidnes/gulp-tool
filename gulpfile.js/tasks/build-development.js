var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['images', 'css', 'webpack:development', 'html'], ['watch', 'browserSync'], cb);
});