##### ajax

Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）.
在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
现在已经进阶了，进阶成 Asynchronous JavaScript and JSON。

###### 原生 ajax

- 创建 xhr 对象
- 使用对象创建请求
- 使用 send 发出请求
- 使用 onreadystatechange 函数监听请求的过程，获取响应

```js
// get
const xhr = new XMLHttpRequest();
// 创建请求  open('请求的类型','地址','是否异步')
// 请求的类型 后台规定的
// GET  POST  PUT  PATCH DELETE ...
xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);
xhr.send();
// 监听整个请求过程
// xhr.readyState 请求状态 0-4    4请求成功响应就绪
// xhr.status 请求状态码  200 ok
// xhr.responseText 返回的数据
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 可以获取后台数据
    console.log(JSON.parse(xhr.responseText));
    // 获取到的数据类似数组字符串   ---> json 串
    // 属性名和属性值必须使用双引号，数字和布尔值不需要，最后一项没有逗号
    // 使用 JSON.parse(json串) 转换
  }
};
// post
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://cnodejs.org/api/v1/accesstoken", true);
// 发送请求的时候需要传递给后台数据
// 但是原生 ajax 不能接收对象为参数，只能接收 json 串,而且得设置请求可以传递 json
// 需要使用 xhr.setRequestHeader() 设置请求头
// 添加 json 为可传递数据,使用 JSON.stringify 将对象转化为 json 串
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(
  JSON.stringify({ accesstoken: "ecf878d1-6052-476a-8262-824760c7872b" })
);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
```

###### jquery ajax

常用方法 `$.ajax()`

```js
$.ajax({
  // 请求类型
  type: "POST",
  // 请求地址
  url: "https://cnodejs.org/api/v1/accesstoken",
  // 请求参数
  data: { accesstoken: "ecf878d1-6052-476a-8262-824760c7872" },
  // 请求成功的回调
  success: function (res) {
    console.log(res);
  },
  // 请求失败的回调
  error: function (err) {
    console.log(err);
  },
  // 请求结束的回调
  complete: function () {},
  // 发给后台的内容类型 默认支持 对象类型
  // contentType: ""
  // 请求是否同域 false 代表同域请求  true 代表跨域请求
  // 一般来说后台独立解决了跨域请求的问题，不需要前端进行配置
  // 也有前后端一起解决跨域问题，后台需要前端做一些简单的配置
  // crossDomain: 布尔值
  // headers: 请求头的设置  可能需要配合后台做一些设置
});
```

###### axios ajax

axios 是专门的 ajax 请求插件，它里面的异步解决方案使用的是 promise。文档参考[网址](https://www.kancloud.cn/yunye/axios/234845)

```js
// get
axios
  .get("http://localhost:3008/posts", {
    params: {
      _limit: 20,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// post
axios
  .post("https://cnodejs.org/api/v1/accesstoken", {
    accesstoken: "ecf878d1-6052-476a-8262-824760c7872b",
  })
  .then(res => {
    console.log(res);
  });
```

##### 使用 json-server 模拟后台数据库

- 全局安装 json-server `npm i -g json-server` 可能有点慢,安装一次就够了
- 在需要的地方新建 xxx.json 文件,还文件内写法如下
  ```json
  {
    "users": [
      {
        "id": 121,
        "username": "小王"
      },
      {
        "id": 21,
        "username": "小二"
      }
    ]
  }
  ```
  这样的 json 文件生成的数据代表 users 列表数据
- 在该 json 文件所在的地方打开命令行工具，启动数据库服务。`json-server --watch xxx.json -p 3000`，命令执行完毕之后，数据库就启动了，不要关闭该服务。安装上述 json 文件，启动的服务可以使用 'http://localhost:3008/users' 接口就能访问用户列表了。
- 更详细的接口文档说明参考[json-server](https://github.com/typicode/json-server)

##### 将自己的项目跑在本地服务器上

- 全局安装 serve `npm i -g serve`,安装一次就够了
- 在你的项目内打开命令行工具执行 `serve .`
- 执行完毕之后你的当前项目内的所有文件已经被跑在了 `http://localhost:5000` 服务器上，默认打开 index.html

##### 项目服务器

项目的开发阶段，前端页面跑在本地(局域网)服务器上，后台数据库服务器只能公司内部访问。
