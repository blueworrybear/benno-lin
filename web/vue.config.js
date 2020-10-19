const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/styles/_*.less')]
    }
  },
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production'
      })
    ]
  }
}
