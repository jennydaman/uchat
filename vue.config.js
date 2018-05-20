const NyanProgressPlugin = require("nyan-progress-webpack-plugin")

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new NyanProgressPlugin()
    ]
  }
}
