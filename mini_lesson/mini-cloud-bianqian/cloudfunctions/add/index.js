// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云函数初始化的时候必须添加默认环境
// cloud.DYNAMIC_CURRENT_ENV 就是云函数当前所在的环境
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // 更新数据库中的 list 集合中的信息
  const { title, content } = event
  const res = await db.collection('list').add({
    // data 字段表示需新增的 JSON 数据
    // _id 属性后台会自动创建
    // _openid 属性在云函数操作数据库的时候后台不会自动创建，需要自己添加，当作该用户的唯一标识
    // _openid 不使用云函数操作数据库，直接在小程序端操作的话会自动添加上
    data: {
      title, content,
      _openid: event.userInfo.openId,
    }
  })
  // res 就是请求成功之后的返回值返回值就是
  // {
  //   errMsg: 'add:ok',
  //   _id: 'xxxx'xxxxxx'
  // }
  // 我们只需要将成功返回到小程序段即可，因为小程序端添加成功之后就会直接跳转到首页，不需要在添加页面展示信息
   
  return {
    message: '添加成功'
  }
}