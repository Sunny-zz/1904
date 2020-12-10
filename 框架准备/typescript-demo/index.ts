//  javascript  的数据类型 7
//  原始的数据类型  null undefined Number Boolean String Symbol (BigInt)
//  Object 

// ts 需要编译之后才能正常运行在浏览器或者node环境下
// 全局安装一个 typescript 工具  将 ts 编译成 js 文件   |  tsc index.ts    直接在文件夹内编译成 index.js 
// 全局安装一个 ts-node 工具，可以直接在 node 环境下运行 ts 文件 |    ts-node  index.ts

// ts 内 原始数据类型 
// 声明变量的时候定义数据类型  小写的名称

// 布尔
// let isDone: boolean = true
// // let isDone1: Boolean = new Boolean(false)
// let re: RegExp = /[0-9]/
// console.log(isDone)

// // 数字
// // 变量不想赋值成任何的初始值 可以赋值 undefined 
// let num: number = undefined
// // 字符串
// let str: string = 'hello'

// // undefined  undefined是所有类型的子类型
// let und: undefined = undefined
// // null
// let nul: null = null

// // 空值 Void    只能是 null 和 undefined   定义一个空值没有用  一般在函数的返回值的时候设置
// let unusable: void = undefined

// // Any 任意值 可以赋值任意类型的值
// let something;
// something = 7
// something = 'hello'
// let anything: any = 'hello'

// 类型推论  声明变量的时候没有声明类型 如果赋值了 类型推论就会帮助你自动定义类型

// let num3 = 10
// num3 ='hello world'
// let str1 ='str'
// str1 = true

// 联合类型
// 既可以是数字类型也可以是字符串类型
// let number: number | string = 10

// 数组的类型
// 基础数组

// 数字数组
// 数组的泛型表示法
// let arr: Array<number> = [1, 2, 3]

// let arr1: (number | string)[] = [3, 4, 5, '6']
// let arr2 = [1, 2, 3]
// arr2[3] = 4

// 元组   元组类型允许表示一个已知元素数量和类型的数组
// let x: [number, number] = [1, 2]
// x[2] = 3   赋值失败

// 对象类型 Object 
// interface Person {
//   // 只读属性
//   readonly firstName: string,
//   name: string,
//   // 可选属性
//   age?: number,
//   hobby: string[],
//   // 允许新增其他属性并且属性值是 any，属性值不可以写成 具体的 number 或者其他  写了的话会对之前已经存在的属性进行校验
//   [propName: string]: any
// }

// let user: Person = {
//   name: '小二',
//   hobby: ['打游戏', '打游戏'],
//   x: 10,
//   firstName: '张'
// }


// interface Square {
//   width?: number,
//   color?: string
// }

// const mySquare: Square = {
//   colour: 'red',
//   width: 100
// }

// 函数类型

// 函数的创建     
// 函数式创建
// function add (a, b) {
//   return a + b
// }
// 表达式创建
// const add = function (a, b) {
//   return a + b
// }
// const add = (a, b) => a + b
// 在 ts 内 函数的声明 需要声明参数和返回值的类型
// function add (a: number, b: number): number {
//   return a + b
// }
// add(1,2)
// 必须设置变量的类型  函数类型   (参数类型)=>返回值类型
// const add: (a: number, b: number) => number = function (a: number, b: number): number {
//   return a + b
// }
// 类型推论 可以省略变量的 函数类型声明
// let add = (a: number, b: number): number => a + b

// add = (aa, bb) => '10'    返回值类型出错

// 函数没有返回值返回值类型设置成 void 
// function fun (x: string): void {
//   console.log(x)
// }
// console.log(fun('hello'))

// function fun (x: string = 'hello', y?: string, ...rest: number[]): void {
//   console.log(x + y)
//   console.log(rest)
// }
// fun('hello', 'world', 1, 2, 3, 4, 5, 6, 78, 9, 0)


// 创建一个函数 将传递的数字或者字符串进行倒序输出

// function reverse (x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   } else {
//     return x.split('').reverse().join('')
//   }
// }
// console.log(reverse('hello'))
// 函数重载
// function reverse (x: number): number
// function reverse (x: string): string
// function reverse (x: number | string): number | string {
//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   } else {
//     return x.split('').reverse().join('')
//   }
// }
// reverse('123')


// 类型断言  
// 将联合类型断言为其中的某一种类型
// 将 任意一个类型断言成 any
// 值 as 类型    这种语法用的比较多
// <类型>值

// interface Cat {
//   name: string
//   // 定义一个 run 方法
//   run (): void
// }

// interface Fish {
//   name: string
//   swim (): void
// }

// const cat: Cat = {
//   name: '小黑',
//   run: () => {
//     console.log('pao')
//   }
// }
// const fish: Fish = {
//   name: '小黑',
//   swim: function () {
//     console.log('自由自在的游')
//   }
// }
// // function getName (animal: Cat | Fish): string {
// //   return animal.name
// // }
// // getName(cat)

// function isFish (animal: Cat | Fish): boolean {
//   // if (typeof (animal as Fish).swim === 'function') {
//   if (typeof (<Fish>animal).swim === 'function') {
//     // 在这直接 判断 animal 是否拥有 swim 属性 
//     // 会报错  ts 编译失败
//     // 需要使用类型断言 先断言 animal 是 Fish 接口类型
//     return true
//   }
//   return false
// }
// console.log(isFish(fish))


// (function x () {
//   const $ = '很牛的函数';
//   // 一顿操作
//   (window as any).jQuery = 10
// })()
// console.log(<any>window)
// window 全局对象 在 ts 中默认不能使用 需要定义,只有 文件运行在 浏览器上 才会有 window  document



// 内置对象
// const date = new Date()
// const re = new RegExp('[abc]')

// // DOM   document

// console.log(document)
// // 单一元素的类型 HTMLElement
// const box: HTMLElement = document.querySelector('.box')
// // 元素集合类型  NodeList
// const box1: NodeList = document.querySelectorAll('.box')
// // MouseEvent  鼠标事件对象  的类型
// box.onclick = function (e: MouseEvent): void {
//   console.log(e)
// }

// box.addEventListener('click', function (e: MouseEvent) {
//   console.log(e.target);
// })

// function x (params: HTMLElement) {

// }
// BOM   window

// console.log(window);

// (window as any).$ = '10'

// console.log((<any>window).$)




// 类型别名 
// 使用 type 创建任意的类型别名
// type NumOrStr = number | string
// type NumArr = number[]
// const num: NumOrStr = '10'
// const arr: NumArr = [1, 2, 3, 4]

// 字面量类型 
// type Fruit = 'apple' | 'orange' | 'taozi'
// type Num = 1 | 2 | 3
// const str: Fruit = 'apple'
// const num: Num = 1


// 枚举类型 
// 一般存储的是常量   
// enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat = 7 }
// const day: string = 'Mon'
// if (Days[1] === day) {
//   console.log('周一');
// }
// console.log(Days);

// 类  
// interface Person {
//   name: string
//   age: number
//   say (): void
// }

// class Person {
//   // 类内的属性和方法需要先定义好 类型
//   // 然后 constructor 内才能给这些属性或者方法赋值     constructor 内 赋值的属性和方法需要提前声明
//   // public name: string
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
//   say () {
//     console.log(this.name)
//   }
// }

// const user: Person = {
//   name: '小红',
//   age: 2,
//   say () {
//     console.log('1')
//   }
// }
// user.say()

// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   sayHi () {
//     console.log(`my name is ${this.name}`)
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
// }

// const cat = new Cat('小绿')
// console.log(cat)

// ts 里面可以对 类 使用几个修饰符
// public  
// private 私有属性 只能在类中访问
// readonly 只读属性 可以访问不可修改
// protected 子类可以访问

// class Person {
//   // 类内的属性和方法需要先定义好 类型
//   // 然后 constructor 内才能给这些属性或者方法赋值     constructor 内 赋值的属性和方法需要提前声明
//   // public name: string
//   // name: string
//   // age: number
//   constructor(name: string, readonly age: number) {
//     this.name = name
//     this.age = age
//   }
//   // 类里面的存取器  属性和获取和修改
//   get name () {
//     return ''
//   }
//   // name 修改的时候触发 set name   方法
//   set name (value) {
//     console.log(value)
//   }
//   say () {
//     console.log(this.name)
//   }
// }

// const user: Person = new Person('小红', 18)
// user.name = '小绿'
// console.log(user.say())


// 泛型 

// 创建一个任意长度的数组，而且创建出来的数组每一项是有默认值的
// function createArray<T> (length: number, value: T): Array<T> {
//   let res: T[] = []
//   for (let i = 0; i < length; i++) {
//     res.push(value)
//   }
//   return res
// }
// const res = createArray<string>(4, 'x')

// 类型推论 可以省略 函数传递的泛型
// function createArray<T> (length: number, value: T): Array<T> {
//   let res: T[] = []
//   for (let i = 0; i < length; i++) {
//     res.push(value)
//   }
//   return res
// }
// const res = createArray(4, 'x')


// 声明文件  
// 我们要使用第三方插件  jquery 
// import $ from 'jquery'
// $('.box').click(function () {})

// 使用 jquery 
// 安装 jquery 之后 还需要安装他的声明文件包  @types/jquery
// 导入方式换成下面的方式
// import $ = require('jquery')
// console.log($)
// $.each([11, 22, 33], function (a, b) {
//   console.log(a, b)
// })



