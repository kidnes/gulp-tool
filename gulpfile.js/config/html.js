var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/html/**/*.html',
  src: [config.sourceDirectory + '/html/**/*.html', '!**/{layouts,shared}/**'],
  dest: config.publicDirectory + '/html',
  swig: {
    defaults: { cache: false }
  }
}