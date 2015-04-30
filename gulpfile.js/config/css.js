var config = require('./')

module.exports = {
    src: config.sourceDirectory + '/css/main/',
    dest: config.publicDirectory + '/css/',
    bundleConfigs: [{
        fileName: 'auto.css'
    }, {
        fileName: 'about.css'
    }]
  
}