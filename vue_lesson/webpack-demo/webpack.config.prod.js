// 生产模式下的 webpack 配置

// https://dijiaxueshe.com/shequ      

// 压缩 代码分离 ...... 
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpack = require('webpack')
// 分离 css 插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩 css 文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// 压缩优化 js 
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 替换 UglifyJsPlugin 因为 UglifyJsPlugin 不支持 es6 语法  默认优化 es5   
// TerserPlugin 支持所以使用这个但是 webpack4 只能使用2版本的 npm i -D terser-webpack-plugin@2
const TerserPlugin = require('terser-webpack-plugin');
// 清理 出口  dist 文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(baseConfig,{
  mode: 'production',
  output: {
    filename: 'js/bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  // webpack 提供一些代码的优化功能，需要使用 optimization 配置，比如配置 css 的优化  js 的优化
  optimization: {
    minimizer: [
      // 压缩 css 
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        parallel: true,
        cache: true,
        terserOptions:{
          compress: {
            pure_funcs: ['console.log']
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        // 顺序从下往上
        use: [
          // 将解析之后的css添加到页面的 style 标签内
          // 'style-loader',
          // 不需要将 css 天际到 style 标签内
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          // 先解析 css 模块
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ]
      },
    ]
  },
  plugins: [
    // DefinePlugin 插件可以提供环境变量
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new CleanWebpackPlugin()
  ]
})