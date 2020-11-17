const express = require("express");

const app = express();
// app.all("*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
app.get("/roleAuth", (req, res) => {
  res.json({
    menuList: [
      { pid: -1, name: "购物车", id: 1, auth: "cart" },
      { pid: 1, name: "购物车列表", id: 4, auth: "cart-list" },
      { pid: 4, name: "彩票", id: 5, auth: "lottery" },
      { pid: 4, name: "商品", id: 6, auth: "product" },
      { pid: -1, name: "商店", id: 2, auth: "shop" },
      { pid: -1, name: "个人中心", id: 3, auth: "store" }
    ]
  });
});
app.listen(3000);
