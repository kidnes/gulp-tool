var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('deploy', function() {
    gulpSequence(['minify', 'html', 'uglifyJs']);
});