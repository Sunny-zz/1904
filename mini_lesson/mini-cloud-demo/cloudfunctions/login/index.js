// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
// 云函数默认接受两个参数
exports.main = async (event, context) => {
  // event 用于获取小程序端调用云函数所传递的参数，外加后端自动注入的小程序用户的 openid 和小程序的 appid
  // console.log(event)
  // 
  // console.log(context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  // const wxContext = cloud.getWXContext()

  return {
    // event,
    openid: event.userInfo.openId,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
    // env: wxContext.ENV,
  }
}

