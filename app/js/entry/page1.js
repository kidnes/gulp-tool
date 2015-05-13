var exclaimify = require('../modules/exclaimify')
var $ = require('jquery');

console.log(exclaimify('page1.js loaded'))

var button = $('#button');

var alertAsyncMessage = function() {
  // CommonJS async syntax webpack magic
  require.ensure([], function() {
    const message = require("../modules/asyncMessage")
    alert(exclaimify(message))
  })
}

console.log('asset references like this one:\n assets/images/gulp.png \n get updated in js too!')

button.on('click', alertAsyncMessage)