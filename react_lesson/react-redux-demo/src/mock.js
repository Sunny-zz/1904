import Mock from 'mockjs'
// mockjs 主要作用是模拟随机数据，并且拦截 ajax 请求
// 前端模拟数据库
Mock.mock('https://www.test.com', {
  "userInfo|10": [{
    "name": "@cname",    //名字为随机中文名字
  }]
})