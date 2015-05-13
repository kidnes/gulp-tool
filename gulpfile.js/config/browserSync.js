var config = require('./')

module.exports = {
  server: {
    baseDir: config.publicDirectory
  },
  startPath: "/html",
  files: ['pubilc/**/*.html'],
  https: false,
  open: "external"
}
