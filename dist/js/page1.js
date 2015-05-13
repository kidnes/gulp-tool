webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var exclaimify = __webpack_require__(2)
	var $ = __webpack_require__(3);
	
	console.log(exclaimify('page1.js loaded'))
	
	var button = $('#button');
	
	var alertAsyncMessage = function() {
	  // CommonJS async syntax webpack magic
	  __webpack_require__.e/* nsure */(2, function() {
	    const message = __webpack_require__(5)
	    alert(exclaimify(message))
	  })
	}
	
	console.log('asset references like this one:\n assets/images/gulp.png \n get updated in js too!')
	
	button.on('click', alertAsyncMessage)

/***/ }
]);
//# sourceMappingURL=page1.js.map