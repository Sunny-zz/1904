module.exports = {
  // 选项...
  devServer: {
    proxy: {
      "/api": {
        target: "https://vue-js.com/api/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
