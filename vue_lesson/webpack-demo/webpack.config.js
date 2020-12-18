const path = require('path');

// 使用插件帮助我们自动创建 html 文件，并且自动引入对应的打包好之后的 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 下载 vue-loader 自带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  // webpack  配置
  // 入口文件 打包编译哪个文件
  entry: './src/main.js',
  // 出口设置 编译完成之后的文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // 开发环境中的工具 source-map 将编译好之后的代码内的错误和警告映射到源代码中
  devtool: 'eval-source-map',
  // 开发服务器 监听的文件夹内容  ./dist 下的
  // 也就是说
  // 1. dist 下的内容起在了服务器上 http://localhost:8080 下
  // 2. 当入口文件被修改的时候，会自动重新编译并且重新载入新的编译之后的文件
  devServer: {
    contentBase: './public',
    // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
    hot: true,
    // 控制台(console)显示消息
    clientLogLevel: 'none'
    // 端口号
    // port: 9000
  },
  // 引入 loader 功能，需要在 module 对象内的 rules 属性下添加对应的 loader
  module: {
    rules: [
      // 样式模块规则
      {
        test: /\.css$/,
        // 顺序从下往上
        use: [
          // 将解析之后的css添加到页面的 style 标签内
          'style-loader',
          // 先解析 css 模块
          'css-loader'
        ]
      },
      // 图片模块
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // vue 组件模块
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    // 应用上  HtmlWebpackPlugin 插件功能，自动创建 html 文件，你可以在使用插件的时候 传递一些页面的配置
    // 页面时自动创建的里面基本上什么都没有，如果说你想要以某一个 html 模板创建 index.html 可以借助 html-webpack-template 插件设置
    new HtmlWebpackPlugin({
      // 设置 html 模板
      template: './public/index.html'
    }),
    // Vue-loader 插件
    new VueLoaderPlugin()
  ],
}


// 入口  编译谁
// 出口  编译到哪
// loader  编译不同的模块   css   png   vue   fonts  
// plugin  额外的功能
// devServer 开发服务器
// devtool  