// 借助 node + express 搭建简易后台服务器，并且添加一些数据
// express node 的包 快速搭建服务器

// router  vuex  elementui 插件
// babel(默认选了的不需要管)   express(依赖)
// 前端全栈
const express = require("express");

const app = express();

app.all("*", (req, res, next) => {
  // 响应头的设置，我的后台支持跨域请求
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.post("/menus", (req, res) => {
  // 接收前端传递过的用户数据
  res.json({
    menuList: [
      { pid: -1, name: "购物车", id: 1, auth: "cart" },
      { pid: 1, name: "购物车列表", id: 4, auth: "cartlist" },

      { pid: -1, name: "商店", id: 2, auth: "store" },
      { pid: -1, name: "个人中心", id: 3, auth: "me" }
    ]
  });
});

app.listen(3000, function() {
  console.log("服务器已经启动 在网址 http://localhost:3000");
});
