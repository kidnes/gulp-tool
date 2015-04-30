var $ = require('jquery');
var revert = require('../modules/revert');

$('#button').on('click', function(){
    var str = 'aaa334578yyyyumd';
    alert(revert.revert(str));
})