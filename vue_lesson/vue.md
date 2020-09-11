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

基础的 prop 使用
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

###### vue 的模板语法

我们在介绍 prop 的时候就已经使用了 vue 的模板语法。在 template 中嵌入 js。
分为两大类

- 在标签的尖括号之间使用，直接用双花括号嵌套 props 名称即可
- 在标签的属性内使用,需要使用 vue 指令 `v-bind` 也可以直接省略使用 `:`

###### vue 组件的 data

只要是组件的 html 内容(结构，样式...)发生改变的话，那么这个改变必须由 data 内的某个 数据 控制。
使用方法

- 需要将变化对应的内容设置成 data
  ```js
  export default {
    name: 'App',
    data: function () {
      return {
        bgColor: 'red',
      }
    },
    ...
  ```
- data 的使用
  - 在 template 中使用直接当成变量，使用模板语法写到标签内即可
  - 在 script 内使用的使用要用 `this.名` 访问
- data 的修改
  - 在 template 中的函数内直接对 data 赋值即可
  - 在 script 函数内使用 `this.名` 重新赋值,这种表较常用

###### vue 组件内的事件绑定

直接使用 v-on 指令绑定事件，也可以简写成 @

```js
<button @click="change" class="change">切换颜色</button>
```

change 是一个函数名，该函数必须声明在，组件导出的对象下的 methods 属性内，注意的是 这里面的函数在 template 内使用的时候直接使用方法名，而在 script 中使用的时候需要使用 `this.方法名`

```js
  methods: {
    change() {
      this.bgColor = 'blue'
    },
  },
```

###### 自定义事件

父组件向子组件传递函数需要使用自定义事件，其实也可以直接使用 props.
父组件内
语法： @自定事件名称="父组件内的函数名称"

```
第一种方式时直接将函数传递过去
<Button @change="change"></Button>
第二种方式是将带参数的函数传递过去
<Button @change="change(index)"></Button>
```

子组件内
js 内

```js
  methods: {
    handleClick() {
      // 接收父组件传递过来的函数并调用
      this.$emit("change");
      // 这是传参调用
      // this.$emit("change",4);
    }
  }
```

tenplate 内

```html
<button @click="$emit('change')">{{ text }}</button>
```

自定义事件还有一个修饰符 .native ,该修饰符的作用就是将自定义事件直接绑定在子组件的根元素标签上，但是这类自定义事件名称必须和原生事件名称相同。

```
直接给子组件 Button 的根元素绑定了 click 事件
<Button @click.native="change"></Button>
```

###### 列表渲染

将一组数据循环渲染到页面上，需要使用指令 `v-for`
循环渲染两种情况

- 带数据的(有 data)
  <!-- item in arrList 就相当于遍历数组 arrList, item 代表每一项,想要使用下标的话  (item,index) in arrList -->
  <!-- key 属性是必须的 而且该循环下唯一 -->
  ```html
  <li v-for="item in arrList" :key="唯一值">{{item}}</li>
  ```
- 就是循环很多次，不需要 data。这种很少见
  <!-- 循环10次 -->
  ```html
  <li v-for="item in 10" :key="唯一值">{{item}}</li>
  ```

###### 条件渲染

使用两个指令

- `v-show` 样式的消失和出现
- `v-if` 可能搭配 `v-else` `v-else-if` 结构真正消失

###### style 和 class 绑定

style 行内样式 和 class 名在 vue 组件内的多种写法，其实就是为了更简单的去实现样式的修改。
style 绑定

- 默认的字符串方式
- 对象表示法
- 数组表示法(不怎么用)

class 绑定

- 默认的字符串方式
- 对象表示法
- 数组表示法
- 数组内嵌套对象表示法

###### vue 的表单

vue 将表单的输入(文本)绑定成组件的 data ，用组件的 data 去控制。vue 提倡使用 v-model 指令去实现表单的绑定。我们也可以使用 value 配合 input 或者 change 事件替代 v-model 指令。
v-model 指令的修饰符

- .lazy 实现懒加载将 v-model 的默认事件从 input 改成 change
- .number 自动将输入的值使用 parseFloat() 转化成数字类型
- .trim 自动将输入的值的左右空白去掉

###### vue 组件的计算属性

你想对一个 data 进行复杂的逻辑操作后在放到页面上展示，此时我们可以直接将复杂的操作写在模版语法内，或者使用函数操作之后返回想要的值。但是 vue 组件提供了更好的方法 就是组件的计算属性(computed)

```js
// 计算属性就是一个函数，该函数必须返回一个值，这个值就是计算属性
computed: {
    typeList() {
      return this.arr.reduce((res, item) => {
        if (!res.includes(item.category)) {
          res.push(item.category);
        }
        return res;
      }, []);
    }
  },
```

用法和 data 一致

###### vue 组件的 ref

当你想在 vue 组件内获取一个元素的真实 dom 结构的时候，可以使用原生方案 document 一套，也可以借助插件(没讲)。但是呢，vue 其实提供了一个方案，就是组件的 ref。一般获取真实 dom 节点用于获取某个值，并不是用于修改。

```html
<button ref="btnDom"></button>
```

```js
this.$refs.btnDom;
// 就是获取了 button 的原生 dom
```

其实 ref 也可以直接写在组件上,那么获取的就是该组件实例，也就是说可以获取组件内的所有内容。进而也就可以实现父子组件之间的交互。

###### 组件内的 this

组件内使用 this 其实就是想要使用该组件下的 data props methods computed 自定义事件 ref ... ,那么组件内我们通常使用的 this 就指的是该组件的实例(VueComponent)。
如何获取组件实例

- methods 将函数设置成普通函数，该函数的根作用域下的 this 就是组件实例.如果根作用域内的其他子作用域想要直接访问 this 那么请设置成箭头函数
- computed 跟上面 methods 一样
- 生命周期函数跟上面一样

###### 组件的生命周期

组件从出现到渲染页面或者再页面中销毁，各个阶段 vue 都提供了对应的函数，供开发者使用。这些函数被称作生命周期钩子。生命周期钩子是同步函数。
初始渲染阶段

- beforeCreate
- created: data 等其他组件的数据处理完毕,可以在页面初始的时候发送请求更新数据。发送请求使用的是 axios 插件。
- beforeMount
- mounted: 组件在页面渲染完毕，可以获取组件内的真实 dom 节点。

数据更新阶段

- beforeUpdate 数据更新时调用，发生虚拟 dom 打补丁之前
- updated 数据更新完毕，dom 渲染完毕

组件的销毁阶段

- beforeDestory 组件即将被销毁，并不是组件的内容在页面上消失
- destoryed 组件销毁完毕，我们在这个生命周期内，可以手动解除一些跟该组件的无关的一些操作(setInterval 跟浏览系相关的一些事情)

###### 动态组件

当你想要根据一个数据切换不同组件的展示，此时可以使用动态组件。动态组件是由 vue 的自带 component 元素搭配 is 属性代码如下
动态组件的切换方式是属于 v-if 的切换

```html
<!-- currentComponentName属性 的值需要和组件名相同 -->
<!-- 当修改 currentComponentName属性 的时候就会切换不同的组件展示了  -->
<component :is="currentComponentName"> </component>
```

动态组件搭配 keep-alive 实现动态组件的数据缓存
当动态组件切换的时候每个组件默认都会变成初始状态，假如有的组件内有 data 并且希望 data 修改的时候能够保留，意思就是动态组件切换的时候中间的某个组件的 data 不会被初始化。此时就需要使用 keep-alive

```html
<keep-alive includes="Home" exclude="Home" :max="10">
  <!-- includes 属性的属性值可以是字符串或者正则，匹配的组件名才缓存数据 -->
  <!-- exclude 与 includes 相反 -->
  <!-- max 最多缓存的组件实例个数   -->
  <component :is="currentComponentName"> </component>
</keep-alive>
```

###### vue 自带的动画和过渡效果

vue 本身自带了一个 transition 组件，使用该组件配合一些样式就可以实现进入 or 离开的过渡或者动画效果

- v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

- v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

- v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

- v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

- v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

- v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

###### 组件间的通信

父子组件

- 使用 props，props 一般用来传递值,也可以传递函数(一般不使用)
- 自定义事件， 向子组件传递函数，一般是当父组件的 data 想要让子组件修改时使用。
  - 当你要实现子组件同步父组件的 data 时，一般采取父组件内定义事件传递给子组件执行的方案，此方案可以使用 .sync 修饰符简化
    自定义事件的基础写法，组件名写成 update:title
    父组件内的两种自写法
  ```html
  <!-- 还有一种就是将事件函数定义在父组件内的 methods 内 -->
  <!-- 下面的这个写法 $event 代表的就是子组件调用函数传递的参数 -->
  <Box :title="title" @update:title="title = $event"></Box>
  ```
  简化
  ```html
  <!-- 上面写法的语法糖 -->
  <Box :title.sync="title"></Box>
  ```
  子组件内
  ```js
  this.$emit("update:title", "新的值");
  ```
- 给子组件设置 ref
- 父组件内使用 \$children 可以获取所有子组件的实例组成的数组
- 子组件内使用 \$parent 获取父组件实例

兄弟组件

- 将兄弟间需要相互使用的 data 共享到父组件内，那么兄弟之间的交互就变成了父子之前的交互了

###### 小问题

- gitbash 不可用，使用 powershell 运行 vue ui 提示

```

无法加载文件 C:\Users\sunnyzz\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https
:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。

```

以管理员身份打开命令行输入 `Set-ExecutionPolicy RemoteSigned` 然后输入 Y 。再次运行 vue ui 即可

```

```
