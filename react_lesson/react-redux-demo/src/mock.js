import Mock from 'mockjs'
// mockjs 主要作用是模拟随机数据，并且拦截 ajax 请求
// 前端模拟数据库
// Mock.mock  方法
// Mock.mock( rurl?, rtype?, template|function( options ) )
// rurl 指的是模拟的网址
// rtype 请求的类型 get delete post ...
// template 是一个对象， 返回的数据的模版
// function 设置返回数据的函数  options 是函数的参数，会接收 url、type 和 body 三个属性，其中 body 属性就是请求时传递的参数 ， 该函数必须返回想要的数据， 返回数据的格式 Mock.mock(数据)
// Mock.mock('https://www.test.com', 'GET', {
//   "userInfo|10": [{
//     "name": "@cname",    //名字为随机中文名字
//   }]
// })

// 当请求地址想输入查询参数，以及一些其他的条件的时候 如果你的  mock 是一个字符串，只能是严格完全相等才能正确匹配，请求才会被拦截， 可以将 mock 地址写成正则
const data = Mock.mock({
  "users|10": [{
    "name": "@cname",
    'id|+1':1
  }]
})
// get  用户列表数据接口 
Mock.mock(/^https:\/\/www\.test\.com\/users.*$/, 'get', options => {
  // console.log(options)
  return data.users
})

// mock 接收参数的话 get 参数必须传递在 url 才能使用 options.url 接收，post 传参直接传递，使用 options.body 接收

// get 单一用户数据接口
// Mock.mock(/^https:\/\/www\.test\.com\/user\/\d+$/, 'get', options => {
//   const id = options.url.replace('https://www.test.com/user/', '')
//   // 从 options 中取出 id 然后
//   return data.users.find(user => user.id === Number(id))
// })

// post 单一用户数据接口
Mock.mock(/^https:\/\/www\.test\.com\/user$/, 'post', options => {
  // console.log(options)
  // options.body 获取到的是 json 串
  const id = JSON.parse(options.body).id
  // 从 options 中取出 id 然后
  return data.users.find(user => user.id === Number(id))
})