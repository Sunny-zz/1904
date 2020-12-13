<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <div>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
      <p>{{ fullName }}</p>
    </div>
    <hr />
    <ul>
      <li v-for="user in userList" :key="user.id">
        <!-- 在组件上使用 v-bind 非缩写  会将 v-bind 后的随想内的所有属性当作 props 传递给子组件 -->
        <User v-bind="user" @chang-user-age="changUserAge" />
      </li>
    </ul>
    <hr />
    <div>父组件 about 内的 text: {{ text }}</div>
    <Count :count.sync="count" v-model="text" />
  </div>
</template>
<script lang="ts">
// export default {
// data(){
//   return {
//     firstName: 'zhang'
//     lastName: 'san'
//   }
// }
// }

import { Vue, Component, Watch } from 'vue-property-decorator'
import User from '../components/User.vue'
import Count from '../components/Count.vue'

interface IUser {
  id: number
  name: string
  age: number
  // 0 女  1 男
  sex?: 0 | 1
}

@Component({
  // components
  // computed
  // 生命周期
  // name
  name: 'About',
  components: {
    User,
    Count
  }
})
export default class About extends Vue {
  firstName = 'zhang'
  lastName = 'san'
  count = 100
  text = 'hello world'
  userList: Array<IUser> = [
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: 1
    },
    {
      id: 2,
      name: '李四',
      age: 20,
      sex: 0
    },
    {
      id: 3,
      name: '王五',
      age: 19
    }
  ]
  // 计算属性
  // 借助 类的 get 和 set 设置计算属性   以及计算属性的 get 和 set
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  fullName1 = 'zhang san'
  // 作为计算属性 fullName 的 set 的话
  set fullName(newValue: string) {
    // window.console.log(newValue)
    this.firstName = newValue.split(' ')[0]
    this.lastName = newValue.split(' ')[1]
  }

  // 直接写生命周期函数
  created() {
    setTimeout(() => {
      this.fullName = 'li si'
    }, 1000)
  }

  mounted() {
    window.console.log('渲染完毕 可以获取页面的 dom 元素')
  }

  @Watch('firstName')
  onFirstNameChange(newValue: string, oldValue: string) {
    console.log(newValue, oldValue)
  }

  changUserAge(id: number) {
    // console.log(1111)
    // 如果直接对 find 查询后的对象 进行修改的话， 编译出错 有可能 find 找不到，那么就不能直接修改 age 需要加一层判断
    const user = this.userList.find((item) => item.id === id)
    // if (user) {
    //   user.age++
    // }
    user && user.age++
  }
}
</script>
 


