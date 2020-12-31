module.exports = {
  // 当部署到 一级 服务器目录时   也就是  xxx.com   
  // 二级  xxx.com/xxx/
  publicPath: process.env.NODE_ENV === 'production'
    ? '/webpack-test/'
    : '/'
}