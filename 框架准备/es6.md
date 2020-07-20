#### ECMAScript 6 es2015 新 js

##### const 和 let

let const 和 var 的不同

- 不能重复声明
- 没有声明提升
- 存在块级作用域(作用域被定义在 {} 内)

const 是声明常量(不可修改的例如 π)的,常量的名称都是全大写的
let 声明的变量是可以被修改的

##### 变量的解构赋值

对象解构赋值

```js
const obj = {
  username: '貂蝉',
  userage: 18,
  level: 10,
}
const { username, userage: age } = obj
console.log(username, age)
```

数组的解构赋值

```js
const arr = [1, 2, 3, 4, 5]
const [a, b, c] = arr
console.log(a, b, c)
```

函数参数的解构赋值

```js
const obj = {
  username: '貂蝉',
  userage: 18,
  level: 10,
}
function showInfo({ username, level }) {
  // const { username, level } = obj
  console.log(`该英雄的名称是${username}`, `等级${level}`)
}
showInfo(obj)
```

技巧: 实现变量调换

```js
let x = 1
let y = 2

;[x, y] = [y, x]
```

##### 字符串的扩展

模版字符串

```js
const username = 'lucy'
console.log(`my name is ${username}`)
```

新增的字符串方法
includes(), startsWith(), endsWith(), trimStart(),trimEnd(),padStart(),padEnd(),matchAll()

##### 函数的扩展

函数参数的默认值
普通方式参数非对象

```js
const fun = function (color = '黑色', bgColor = '红色') {
  console.log('颜色:::', color)
  console.log('背景色:::', bgColor)
}
fun('蓝色')
```

参数为对象

```js
const fun = function ({ color = '黑色', bgColor = '蓝色' }) {
  console.log('颜色:::', color)
  console.log('背景色:::', bgColor)
}
fun({ color: '粉色' })
// 不能什么都不传，最起码传递一个空对象
```

rest(剩余) 参数

```js
function add(...rest) {
  // console.log([...arguments])
  // ;[...arguments].forEach(function (ele) {
  //   console.log(ele)
  // })
  // 类数组 --->  数组
  console.log(rest)
  // rest 是数组
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

箭头函数
写法

```js
// function add(num1, num2) {
//   return num1 + num2
// }
const add = (num1, num2) => num1 + num2
// 箭头函数定义只能变量式定义
// 箭头左边是 函数的参数部分 使用小括号包裹参数逗号拼接,当参数只有一个的时候可以省略小括号
// 箭头右边是 函数主体，使用花括号包裹，返回值设置依然使用 return。当函数不需要操作就设置返回值的话可以省略花括号和 return 直接写返回值即可
const res = add(10, 20)
console.log(res)
```

箭头函数和普通函数的区别

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。
- 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

##### 数组的扩展

Array.from(): 将类数组转化为数组

```js
const fun1 = function () {
  console.log(arguments)
  console.log(Array.from(arguments))
}
fun1(1, 2, 3, 4, 5, 6)
const obj = {
  '0': 12312,
  '1': 98768,
  length: 2,
  // 随便
}
console.log(Array.from(obj))
```
