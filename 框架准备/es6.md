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
  username: "貂蝉",
  userage: 18,
  level: 10,
};
const { username, userage: age } = obj;
console.log(username, age);
```

数组的解构赋值

```js
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c);
```

函数参数的解构赋值

```js
const obj = {
  username: "貂蝉",
  userage: 18,
  level: 10,
};
function showInfo({ username, level }) {
  // const { username, level } = obj
  console.log(`该英雄的名称是${username}`, `等级${level}`);
}
showInfo(obj);
```

技巧: 实现变量调换

```js
let x = 1;
let y = 2;

[x, y] = [y, x];
```

##### 字符串的扩展

模版字符串

```js
const username = "lucy";
console.log(`my name is ${username}`);
```

新增的字符串方法
includes(), startsWith(), endsWith(), trimStart(),trimEnd(),padStart(),padEnd(),matchAll()

##### 函数的扩展

函数参数的默认值
普通方式参数非对象

```js
const fun = function (color = "黑色", bgColor = "红色") {
  console.log("颜色:::", color);
  console.log("背景色:::", bgColor);
};
fun("蓝色");
```

参数为对象

```js
const fun = function ({ color = "黑色", bgColor = "蓝色" }) {
  console.log("颜色:::", color);
  console.log("背景色:::", bgColor);
};
fun({ color: "粉色" });
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
  console.log(rest);
  // rest 是数组
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

箭头函数
写法

```js
// function add(num1, num2) {
//   return num1 + num2
// }
const add = (num1, num2) => num1 + num2;
// 箭头函数定义只能变量式定义
// 箭头左边是 函数的参数部分 使用小括号包裹参数逗号拼接,当参数只有一个的时候可以省略小括号
// 箭头右边是 函数主体，使用花括号包裹，返回值设置依然使用 return。当函数不需要操作就设置返回值的话可以省略花括号和 return 直接写返回值即可
const res = add(10, 20);
console.log(res);
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
  console.log(arguments);
  console.log(Array.from(arguments));
};
fun1(1, 2, 3, 4, 5, 6);
const obj = {
  "0": 12312,
  "1": 98768,
  length: 2,
  // 随便
};
console.log(Array.from(obj));
```

数组新增方法 flat，flatMap

##### 扩展运算符

作用是对象的拷贝，还有类数组转化数组

- 对象展开
- 数组展开

```js
const obj = {
  name: "庄周",
  age: 18,
};
const obj1 = { ...obj };
obj1.hobby = "浪";
console.log(obj, obj1);

const arr = [1, 2, 3];
const arr1 = [...arr];
arr1.push(4);
console.log(arr, arr1);
```

##### 对象的扩展

对象的简洁表示法

```js
const username = "哈哈";
const userage = 20;
const obj = {
  username,
  // 当对象的属性名和作为该属性的属性值的变量名相同时
  userage,
  // 函数可以省略 function，是普通函数
  say() {},
};
console.log(obj);
```

##### Symbol

第七种数据类型，生成独一无二的数据

##### set 数据结构

类似于数组，但是不能存重复的值

```js
const ary = new Set([1, 2, 131, 312, 1, 2, 131]);
console.log(ary);
// 属性
// size
console.log(ary.size);
// 方法
// add() 向set数据内添加一个成员,返回数据本身
ary.add(1000);
console.log(ary);
// delete() 删除某个值，返回一个布尔值
//  has() 查看该值是否为Set的成员，返回一个布尔值
// clear() 清除所有成员
// 如何将 set 数据转化成数组
console.log([...ary]);
```

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- Set.prototype.keys()：返回键名的遍历器
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员

还有一个额外的 WeakSet 数据结构,内部成员只能是对象类型

##### class 类

写法

```js
class Hero {
  // 类的花括号内默认一般只写方法，而且方法之间不需要逗号
  // constructor 是 class 自带函数，该函数被称作构造器和以前的构造函数类似
  // constructor 函数当 创建实例化类的时候自动触发
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 除了 constructor 函数之外定义的函数都相当于原来的 prototype 内的方法
  say = () => {
    console.log("我是王者荣耀的英雄" + this.name);
  };
}
const a = new Hero("牛", 20);
const b = new Hero("小乔", 18);
console.log(a);
console.log(b);
a.say();
```

继承

```js
class CarryHero extends Hero {
  constructor(name, age) {
    super(name, age);
    // super 调用了才真正实现了继承
  }
}
const c = new CarryHero("赵云", 19);
console.log(c);
```

##### 使用 webpack 打包编译我们的项目

你的 node 项目内使用 node 模块导入各种依赖，wbpack 可以实现将模块的导入导出编译成浏览器认识的语法，也可以将所有的导入模块操作打包。
如何使用 [参考链接](https://www.webpackjs.com/guides/)

- 项目内安装 webpack
  ```
    npm install webpack webpack-cli --save-dev
  ```
- 将 js 文件夹的名字改成 src，保证项目的根目录有 src ，并且 src 下存在 index.js，还有 index.js 是页面的主要用的 js
- 执行编译打包命令 `npx webpack`，会将 src 下的 index.js 打包编译到项目下的 dist 文件夹下的 main.js
- 页面导入打包好的 js
- 上面是使用了 webpack 的默认配置进行的打包，可以在项目根目录下新建 `webpack.config.js` 文件，当作 webpack 编译的配置文件。参考网址 `https://www.webpackjs.com/guides/getting-started/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6`,复制基础的配置到该文件内。
- 一直敲编译命令很繁琐，可以使用 package.json 中的 scripts 字段配置'快捷键'。使用 npm run 名 快捷执行。

##### module

导入两种种方式

- 默认导入
- 命名导入

导出两种种方式

- 默认导出
- 命名导出
