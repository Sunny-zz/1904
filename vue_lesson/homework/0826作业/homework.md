### 作业 1

复习回顾讲的三个案例(商品搜索、购物车、todo),最好是自己再做一遍，查缺补漏。

### 作业 2

仿照掘金实现首页列表展示(不用写标题导航什么的，就是一个文章列表)。效果看 2.jpg ，样式大概写写。要求将列表数据写到 json 文件内，搭建成数据库，使用 axios 访问，然后展示到页面。数据没来的时候显示 gif 效果。 json 数据模拟如下:

```json
{
  "articleList": [
    {
      "id": "6t7y",
      "title": "标题",
      "author": "作者",
      "commentsNum": "评论个数 比如 10",
      "likeNum": "点赞个数 比如 5",
      "type": "文章类别 比如 前端"
    },
    // 详细信息自己添加，没写的信息比如时间等，暂时不用管
    ...
  ]
}
```

最终实现的效果就是进入页面上来显示等待的 gif ，然后显示正常的文章列表。小图标的话自己可以考虑用一用，查一查资料什么的。

### 作业 3

制作一个书籍管理表格
效果参考网址[链接](https://armour.github.io/vue-typescript-admin-template/#/table/complex-table)。后台数据模拟如下

```json
"books": [
    {
      "id": "0",
      "title": "标题",
      "author": "作者",
      "importance": "重要性 比如 1 或 2 或 3",
      "status": "状态 比如 published 或 draft 或者 deleted",
      "country": "国家 比如 China 或者 Japan 或者 USA 或者 Eurozone",
      "comment": "点评 随便写点啥"
    },
    {
      "id": "1",
      "title": "x",
      "author": "xxx",
      "importance": 1,
      "status": "published",
      "country": "China",
      "comment": "Aut minus voluptatibus."
    }
    ...
  ]
```

我们做简化版
基础需求，不需要做分页模拟十几条就够了，生成表格(table),重要性小星星可以使用数字 1、 2、 3、 代替，其他效果参考图片 3.jpg 和以下条目

- 首先根据上面的后台数据，前端获取之后以表格的形式展示到页面上。数据没来的时候显示 gif 效果。
- 根据输入的筛选条件展示筛选结果。
- 点击删除按钮删除数据，而且刷新页面之后数据也回不来。

进阶要求

- 点击编辑或者书籍标题，弹出编辑弹窗，实现编辑功能，并且保证刷新之后依然是编辑之后的效果。

注意

- 所有的操作动画效果省略，操作的弹窗(比如点击删除弹出操作成功)也不用做，编辑的弹窗是硬性规定肯定得做。
- 删除，修改操作想要实现刷新不会到原来的状态，其实需要发送请求修改后台数据。
  - 删除需要发送 axios.delete('htttps://localhost:3000/books/被删除的 id'),请求成功后数据库内就删除了
  - 修改需要发送 axios.patch('htttps://localhost:3000/books/被修改的 id',{这里面仿修改的内容，比如你要修改标题就写成 title: '修改过的标题'})，请求成功后，后要数据被修改

请求的参考代码

```js
// 比如后台的数据  [{id:'1',title: 'vue',author:'a'},{id:'2',title: 'react',author:'b'},{id:'3',title: '小程序',author:'c'}]
// 数据库启动在 localhost:3000/books
// 实现删除
axios.delete("http://localhost:3000/books/1").then(res => {
  // 这里就实现了删除 id 为 1 的书籍
  // res.data 是返回的结果 但是删除操作什么都不返回所以没什么用
});
// 实现修改标题
axios
  .patch("http://localhost:3000/books/1", { title: "新的 vue" })
  .then(res => {
    // 这里面就实现了修改 id 为 1 的书籍的标题，如果想修改多个的话可以写成 {title:'新的',author: '新的',等等}
    // res.data 是返回的结果 patch 修改操作 res.data 返回诶修改之后的书籍的整个对象
  });
```
