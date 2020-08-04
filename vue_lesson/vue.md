#### vue 框架

想要使用 vue 开发项目，需要安装 vue 的开发环境。官方网站提供了安装环境的脚手架工具 vue-cli。使用命令 `npm install -g @vue/cli` 全局安装脚手架工具。工具安装好之后就可以搭建 vue 的开发环境了。有两种方式搭建

- vue create 命令，在想要创建项目的文件夹下执行 `vue create 项目名`。
- 图形化界面工具。任意位置执行 `vue ui` 在浏览器中调出图形化界面，创建 vue 项目。
  - 选择上方的创建按钮
  - 选好项目所要创建的位置
  - 选择默认的预设模版
  - 创建
  - 创建完成之后，选择 任务-->serve-->运行-->启动 app
  - 此时 vue 的基础项目已经搭建完毕。

##### vue 初始项目结构

- node_modules 该项目依赖包的存放位置
- .gitignore 作为 github 仓库忽略上传的记录
- package.json 记录了 node 项目的基础配置，和一些 vue 项目的配置
- package-lock.json 详细记录项目所用到的包
- README.md 项目介绍文件
- public 该文件下存在的是项目的 html 模版,意思就是你写的所有的 vue 代码其实都是以该模版为基础的，一般不需要修改，偶尔可能会引入一些文件(css js 等工具类的)
- babel.config.js babel 的配置文件，babel 是一个 js 编译工具，作用是编译新版本的 js 语法。
- src 文件夹是 vue 项目的源代码
  - assets 存储静态文件的文件夹，一般存放一些 公共的 css 图片等
  - components 存放 vue 组件的，文件夹名称可以修改
  - app.vue 该文件就是 vue 的最外层组件
  - main.js 该项目的入口文件，意思是 webpack 会将该文件打包编译。该文件内写的是 vue 一些全局设置。

##### spa 单页面应用

vue 项目创建的就是单页面应用。整个项目就在一个页面内。参考文档[单页面](https://www.jianshu.com/p/0c32c85c668b)

##### vue 基础

###### 组件

整个 vue 项目就是由各种各样的组件组合而成的。组件可以理解成我们原来排版的某一个结构部分。app.vue 组件是项目的最外层结构。在 vue 项目中，最简单的组件写法就是以 vue 为后缀名的文件，组件名称一般首字母大写，多个字母使用大驼峰方式命名。
如何划分组件，其实就是和之前画盒子一样。
vue 后缀的组件构成

- html 部分，使用 template 标签表示，里面写 html 即可，也可以嵌入其他的组件，需要注意的就是该 template 标签只能有一个子级
- script 组件的 js 部分。自己页面的逻辑处理，其他组件的注册。
- style 组件的 css 部分，默认的样式是全局的。

###### 整理初始项目(删除一些内容)，写 hello world

App.vue 只剩下

```vue
<template>
  <div id="app">hello world</div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
```

删除 HelloWorld 组件

###### 组件样式

组件的样式基本上都是全局的，因为只有一个页面，所有的组件都会渲染到同一个页面。

- 在 style 标签上加上 scoped 属性，使组件样式私有化
- 在 style 标签上加上 lang 属性，可以设置使用高级 css 扩展语法(less sass)

###### 组件的嵌套

- 先在父组件内导入子组件
- 在父组件内的导出对象内使用 components 属性先注册子组件。

      ```js
      export default {
        name: 'App',
        // 组件注册
        components: {
        // Header: Header,
          Header,
        },
      }
      ```

- 在父组件的 template 内直接使用组件名称的标签即可
  ```html
  <div class="wrap">
    <header />
  </div>
  ```

###### 组件的复用技巧 props

当一个组件需要在很多个组件内使用，而且多多少少显示的内容不一样，其实是需要根据组件所在位置进行轻微的修改。此时就可以借助 vue 内的 props 知识点处理。
父组件嵌套子组件的时候希望子组件要根据我的想法修改一些内容。
props 的使用
在父组件内，直接当做自定义属性传递即可

```html
<button text="Download Now" color="#00f" />
```

在子组件内，需要使用导出对象下的 props 属性接收
方式一数组

```js
export default {
  name: "Button",
  props: ["text", "color"]
};
```

方式二对象

```js
export default {
  name: "Button",
  // 对象方式 高级可以做简单的校验
  props: {
    text: {
      //  可以设置属性的类型和默认值
      type: String,
      default: "default button"
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
```

接收完毕之后需要在 template 中使用，使用方式分为两大类

- 在标签的尖括号之间使用，直接用双花括号嵌套 props 名称即可

  ```html
  <button class="btn">{{text}}</button>
  ```

- 在标签的属性内使用,需要使用 vue 指令 `v-bind` 也可以直接省略使用 `:`

  ```html
  <!--  语法就是 v-bind:属性名='这里面直接写js即可'  v-bind: 可以简写成 : -->
  <button :style="`background-color: ${color}`" class="btn">按钮</button>
  ```

###### 小问题

- gitbash 不可用，使用 powershell 运行 vue ui 提示

  ```
  无法加载文件 C:\Users\sunnyzz\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https
  :/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
  ```

  以管理员身份打开命令行输入 `Set-ExecutionPolicy RemoteSigned` 然后输入 Y 。再次运行 vue ui 即可