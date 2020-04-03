<%_ if (options.lodash) { _%>
const webpack = require('webpack')

<%_ } _%>
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variable.scss";`
      }
    }
  },
  <%_ if (options.lodash) { _%>
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ]
  }
  <%_ } _%>
}
