var config = require('./')

module.exports = {
    src: config.sourceDirectory + '/css/entry/',
    dest: config.publicDirectory + '/css/',
    bundleConfigs: [{
        fileName: 'global.css'
    // }, {
    //     fileName: 'about.css'
    }]
  
}