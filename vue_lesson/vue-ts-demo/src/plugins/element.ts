import Vue from 'vue'
import { Button, Input, Select, Option, Message, MessageBox } from 'element-ui'

// 向 Vue 类的原型内添加新的属性或方法的时候，编译时组件内的 this 找不到这些新增的属性或方法   需要使用声明文件向 Vue 类新增属性或方法
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
