### 作业 1

一定先把所有 vue 的基础知识搞明白，做做上课老师讲的案例。弄不明白就问。

### 作业 2

样式效果查看图片 1.jpg。
实现效果

- 根据下方给定数组展示数据,也就是将数组设置成 data。category 代表类别 stocked 代表是否有库存
  ```js
  const goods = [
    {
      id: "1abc1",
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      id: "1abc2",
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      id: "1abc3",
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      id: "1abc4",
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      id: "1abc5",
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      id: "1abc6",
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];
  ```
- 实现查询功能(模糊查询)，用户输入查询的商品名称，展示对应的商品

### 作业 3

样式效果查看图片 2.jpg。
实现效果

- 根据如下数组生成购物车结构
  ```js
  const arr = [
    {
      id: "12qw",
      //编号
      number: 110,
      name: "iphone",
      price: 4000,
      // 购买数量
      quantity: 4,
      isChecked: true
    },
    ...
    // 后面自己看着补充就行
  ];
  ```
- 实现添加减少删除功能。
  如果删除了全部商品变成一个购物车为空的显示(不清楚的去京东试试)
- 实现总价和总数的功能
  **_注意_**

- 尽可能的拆分组件，实现组件复用
- 坚决不能使用任何原生的操作，除了如果表单操作可能会用到 event.target（好像也用不到）
- 作业不一定是必须会做的，但是知识点基本上大家都有，就看大家怎么发挥了。
