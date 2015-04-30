var config = require('../../config');
var gulp   = require('gulp');
var rev    = require('gulp-rev');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function(){
  // See comment below about eot,woff, and ttf
  var notThese = '!' + config.publicDirectory + '/**/*+(js|json|eot|woff|ttf|html)'
  console.log(config.publicDirectory + '/**/*');
  return gulp.src([config.publicDirectory + '/**/*', notThese])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest(config.publicDirectory + '/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
