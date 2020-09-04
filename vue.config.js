let path = require('path')
const { resolve } = require('path')
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        // 新版sass-loader，选项名使用prepend
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
