var fs = require('fs');
var config = require('../../config');
var gulp = require('gulp');
var del = require('del');

function delRev() {
    var manifest = getManifest(config.publicDirectory + '/rev-manifest.json'),
        delFiles = [];

    for (var item in manifest) {
        delFiles.push(config.publicDirectory+'/'+item);
    }
    
    del(delFiles, function (err, deletedFiles) {
        console.log('Files deleted:', deletedFiles.join(', '));
    });
}

function getManifest(manifest) {
    try {
        return JSON.parse(fs.readFileSync(manifest));
    } catch (e) {
        throw e;
    }

    throw new TypeError('Manifest file must be an object or a string');
}

gulp.task('rev-del',['rev-css'], function () {
    delRev();
});