// 开发模式下的 webpack 配置
// 合并 webpack 基础配置  需要使用 webpack-merge  合并基础配置
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  // 一下配置是开发环境特有的
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules : [
      {
        test: /\.(css|less)$/,
        // 顺序从下往上
        use: [
          // 将解析之后的css添加到页面的 style 标签内
          'style-loader',
          // 先解析 css 模块
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: './public',
    // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
    hot: true,
    // 控制台(console)显示消息
    clientLogLevel: 'none',
    // 端口号
    port: 9000,
    // 当使用 vue 路由的时候，选择了  history 模式,在这个模式下，刷新非首页的页面，直接找不到 404,需要将该服务器下的所有页面请求 全部指向到 首页 index.html
    historyApiFallback: true,
    proxy: {
      '/api': {
        // https://www.vue-js.com/api/v1/user/sunny-zz
        target: 'https://www.vue-js.com/api/v1',
        // 当你发送请求 axios.get('/api')  相当于代理到  https://www.vue-js.com/api/v1/
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
      }
    }
  },
  plugins: [
    // 热模块替换插件
    new webpack.HotModuleReplacementPlugin(),
    // DefinePlugin 插件可以提供环境变量
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ]
});
