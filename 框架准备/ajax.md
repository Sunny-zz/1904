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

###### axios ajax
