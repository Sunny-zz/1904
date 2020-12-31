
const path = require('path');
// 使用插件帮助我们自动创建 html 文件，并且自动引入对应的打包好之后的 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 下载 vue-loader 自带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // webpack 模式   开发 development   生产 production
  // mode: 'development',
  // webpack  配置
  // 入口文件 打包编译哪个文件
  // 以后可能考虑多入口
  // 入口文件内添加一个 babel-polyfill ，做 ie9 兼容
  entry: ['babel-polyfill','./src/main.js'],
  // 出口设置 编译完成之后的文件
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  // 开发环境中的工具 source-map 将编译好之后的代码内的错误和警告映射到源代码中
  // devtool: 'eval-source-map',
  // 开发服务器 监听的文件夹内容  ./dist 下的
  // 也就是说
  // 1. dist 下的内容起在了服务器上 http://localhost:8080 下
  // 2. 当入口文件被修改的时候，会自动重新编译并且重新载入新的编译之后的文件
  // devServer: {
  //   contentBase: './public',
  //   // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
  //   hot: true,
  //   // 控制台(console)显示消息
  //   clientLogLevel: 'none',
  //   // 端口号
  //   // port: 9000
  //   // 当使用 vue 路由的时候，选择了  history 模式,在这个模式下，刷新非首页的页面，直接找不到 404,需要将该服务器下的所有页面请求 全部指向到 首页 index.html
  //   historyApiFallback: true
  // },
  // 模块解析   
  // extensions 解析的时候可以忽略扩展名 
  // alias 设置模块导入时候的别名   将 src 替换成 @
  // modules webpack 解析模块时应该搜索的目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.vue'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  // 引入 loader 功能，需要在 module 对象内的 rules 属性下添加对应的 loader
  // loader的执行顺序是从下往上，并不是只指的是单个 rule
  module: {
    rules: [
      // 样式模块规则
      // {
      //   test: /\.(css|less)$/,
      //   // 顺序从下往上
      //   use: [
      //     // 将解析之后的css添加到页面的 style 标签内
      //     'style-loader',
      //     // 先解析 css 模块

      //     'css-loader',
      //     'postcss-loader',
      //     'less-loader'
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   loader: 'less-loader' // 将 Less 编译为 CSS
      // },
      // 图片模块
      

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // url-loader 内自带 file-loader 功能 所以下载 url-loader 的同时也需要下载 file-loader
            // url-loader 可以配置 limit ，当图片文件小于 8194b 的时候使用 base64 编码编译图片     1kb=1024b   1m=1024kb
            // 当图片是 base64 编码的时候，就会减少浏览器的请求，从而让你的页面变得更快
            options: {
              limit: 5000,
              // 在编译图片的时候不使用 es Module 的方式编译， vue 内的 template 内的 img 就可以编译成功
              esModule: false,
              // 设置 图片的存储路径 以及生成后的图片名称   [name]  原始的图片名   [ext] 图片后缀名   [hash:8] 8位 由于处理浏览器缓存
              name: 'img/[name].[hash:8].[ext]',
              // 以后项目的图片可能会托管到某个 cdn 服务器上
              // ./img/logo.png      https://www.dijia.com/xxx/img/logo.png
              // publicPath: 'https://www.dijia.com/xxx/'
            }
          }
        ]
      },
      //  解析html中的image
      // npm i  html-withimg-loader -D
      // {
      //   test: /\.html$/,
      //   use: 'html-withimg-loader'
      // }
      // vue 组件模块
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // 这里的 babel-loader 是编译 js 的工具 我们并没有在这给这个 工具添加配置，而是使用了 babel 的默认配置文件 .babelrc 添加的配置，因为这个配置内还需要 给 element ui 设置按需加载。
        use: {
          loader: 'babel-loader'
        }
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