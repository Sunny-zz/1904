module.exports = {
  plugins: [
    // autoprefixer 使用的时候必须提供配置 才能生效
    require('autoprefixer')({
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
        // 所有浏览器的最后两个版本
        // "last 2 versions" 
      ],
      grid: true
    })
  ]
}