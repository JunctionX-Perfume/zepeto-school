module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.17.10.137:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  outputDir: '../backend/public',
  transpileDependencies: [
    'vuetify'
  ]
}
