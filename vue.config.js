const NyanProgressPlugin = require('nyan-progress-webpack-plugin')

module.exports = {
  lintOnSave: false,
  pwa: {
    themeColor: '' // allows for theme-color to be changed by vue-meta
  },
  configureWebpack: {
    plugins: [
      new NyanProgressPlugin()
    ]
  }
}
