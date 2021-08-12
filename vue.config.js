module.exports = {
  devServer: {
    // proxy: 'https://unipass.customs.go.kr:38010'
    proxy: 'https://unipass.customs.go.kr:38010'
  },

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: ''
    }
  }
};
