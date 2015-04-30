var config = require('./')

module.exports = {
    config : {
        entry: {
            page: config.sourceDirectory + '/js/main/page1.js'
            // test: 'test/test.js',
        },
        output: {
            filename: '[name].js',
        }
    },
    
    src: config.sourceDirectory,
    dest: config.publicDirectory + '/js/'
}

