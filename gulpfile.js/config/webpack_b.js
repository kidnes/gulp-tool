var config = require('./')

module.exports = {
    config : {
        entry: {
            page1: config.sourceDirectory + '/js/entry/page1.js',
            page2: config.sourceDirectory + '/js/entry/page2.js'
        },
        output: {
            filename: '[name].js',
        }
    },
    
    src: config.sourceDirectory,
    dest: config.publicDirectory + '/js/'
}

