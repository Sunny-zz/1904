// 借助 node + express 搭建简易后台服务器，并且添加一些数据
// express node 的包 快速搭建服务器

// router  vuex  elementui 插件
//  babel(默认选了的不需要管)   express(依赖)
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
app.get("/menus", (req, res) => {
  res.json({
    menuList: [
      { pid: -1, name: "购物车", id: 1, auth: "cart" },
      { pid: 1, name: "购物车列表", id: 4, auth: "cart-list" },
      { pid: 4, name: "彩票", id: 5, auth: "lottery" },
      { pid: 5, name: "彩票1", id: 7, auth: "lottery1" },
      { pid: 5, name: "彩票2", id: 8, auth: "lottery2" },
      { pid: 4, name: "商品", id: 6, auth: "product" },
      { pid: -1, name: "商店", id: 2, auth: "shop" },
      { pid: -1, name: "个人中心", id: 3, auth: "store" }
    ]
  });
});

app.listen(3000, function() {
  console.log("服务器已经启动 在网址 http://localhost:3000");
});
