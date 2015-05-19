var config = require('../../config');
var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('del');



// gulp.task('rev-test', function () {
//     return gulp.src(config.publicDirectory + '/**/*')
//         .pipe(rev())
//         .pipe(gulp.dest(config.publicDirectory))
//         .pipe(rev.manifest('rev-manifest.json', {merge: true}))
//         .pipe(gulp.dest(config.publicDirectory))
// });

gulp.task('rev-test', function(){
  var notThese = '!' + config.publicDirectory + '/**/*+(css|json|eot|woff|ttf|html)'
  
  return gulp.src([config.publicDirectory + '/**/*', notThese])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest(config.publicDirectory + '/rev-manifest.json', {merge: true}))
    // .pipe(revDel())
    .pipe(gulp.dest(''))
    
});

function revDel() {
    console.log("revDel::"+arguments);
}