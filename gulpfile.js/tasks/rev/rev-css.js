var config = require('../../config');
// var filter = require('gulp-filter');
var gulp   = require('gulp');
var minify = require('gulp-minify-css');
var rev    = require('gulp-rev');
var uglify = require('gulp-uglify');

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', ['rev-update-references'], function(){
    console.log('rev-css');
  return gulp.src(config.publicDirectory + '/**/*.css')
    .pipe(rev())
    .pipe(minify())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest(config.publicDirectory + '/rev-manifest.json', {merge: true}))
    .pipe(delRev())
    .pipe(gulp.dest(''));
});


function delRev() {
    console.log(arguments)
    // var manifest = getManifest(config.publicDirectory + '/rev-manifest.json'),
    //     delFiles = [];

    // for (var item in manifest) {
    //     delFiles.push(config.publicDirectory+'/'+item);
    // }
    
    // del(delFiles, function (err, deletedFiles) {
    //     console.log('Files deleted:', deletedFiles.join(', '));
    // });
}