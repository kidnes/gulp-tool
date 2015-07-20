var fs = require('fs')
var path = require('path')
var config = require('./')
var rewriteModule = require('../lib/rewriter');

var rules = [
    {from: '(/(?:js|css)/[\\w-_\\d]+\\.(?:js|css)$)', to: '$1'}
]

var rewriteMiddleware = rewriteModule.getMiddleware(rules, {
    root: path.resolve(config.publicDirectory),
    // verbose: true
})

module.exports = {
    server: {
        baseDir: config.publicDirectory
    },
    startPath: "/html",
    files: ['pubilc/**/*.html'],
    https: false,
    open: false,
    // proxy: {
    //     target: "http://10.154.252.73/",
    //     middleware: rewriteMiddleware
    // },
    port: 5000
    // open: "external"
}