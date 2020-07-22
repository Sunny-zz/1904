const $ = require('jquery')
const x = require('./about.js')
// 自定义模块都是 js 文件。导入的时候可以省略 js 后缀名
console.log($, x)

// 在 js 文件内导入了 js
// 该语法浏览器不支持

$('.btn').click(function () {
  $('.box').hide()
})

// node 模块语法
// 前端模块分类  核心模块  第三方模块  自定义模块
// 模块导入  require('包名') 前两种模块直接写包名 自定义模块需要写路径
// 模块导出  module.exports =  值

// es6 模块写法
