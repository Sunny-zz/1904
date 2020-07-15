#### ECMAScript 6   es2015  新js  

##### const 和 let

let const 和 var 的不同
- 不能重复声明
- 没有声明提升
- 存在块级作用域(作用域被定义在 {}  内)

const 是声明常量(不可修改的例如 π)的,常量的名称都是全大写的
let 声明的变量是可以被修改的

##### 变量的解构赋值

对象解构赋值
```js
    const obj = {
      username: '貂蝉',
      userage: 18,
      level: 10
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
      level: 10
    }
    function showInfo({ username, level }) {
      // const { username, level } = obj
      console.log(`该英雄的名称是${username}`, `等级${level}`)
    }
    showInfo(obj)
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
const username = 'lucy'
console.log(`my name is ${username}`)
```

