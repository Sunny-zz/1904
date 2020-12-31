<template>
  <div>
    <h1>
      hello111 world <span>{{ count }}</span>
    </h1>
    <Title title='哈哈哈哈11111' />
    <h2>{{this.$store.getters.countSquare}}</h2>
    <div class="logo"></div>
    <button @click="handleClick">修改store内的count</button>
    <el-button type="primary">主要按钮</el-button>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <img src="./assets/logo1.png" alt="">
    <img :src="logo" alt="">
    <h3>{{number}}</h3>
    <h3>{{loginname}}</h3>
    <router-view></router-view>
  </div>
</template>
<script>
import logo from './assets/logo1.png'
// 将图片当作模块导入，借助 file-loader 在当前目录下生成对应的图片
import { mapActions } from 'vuex'
import Title from './components/Title'
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      logo: logo,
      number : 100,
      loginname: ''
    }
  },
  components: {
    Title
  },
  async created() {
    console.log(111)
    const obj = {name: '哈哈哈'}
    console.log({...obj})
    const number = undefined
    const str = number ?? '不存在' 
    console.log(str)
    // 当我们获取后台数据的时候  开发阶段数据地址 可能是我们自己模拟的，也可能是后台模拟的 反正不是以后项目上线需要的那个
    // 可以判断目前是处于什么webpack环境下 如果是开发  url ='xxxxx.xxx/xx'  如果是 生产 url='https://dijiaxueshe.com/xx/ee'
    // 需要 webpack 提供环境变量给 我们的项目
    let url=''
    if(ENV === 'development'){
      // 开发时的后台接口基地址
      url = 'http://localhost:8080'
    }else{
      // 项目生产的时候
      url = 'https://dijiaxueshe.com/xx/ee'
    }
    console.log(url)

    // const newNumber = await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(10000)
    //   }, 500);
    // })
    // https://www.vue-js.com/api/v1/user/sunny-zz
    axios.defaults.baseURL =  ENV === 'development' ? '/api' : 'https://baidu.com'
    
    const info = await axios.get('/user/sunny-zz')
    // console.log(info)
    this.loginname = info.data.data.loginname
    // this.number = newNumber.data[0].value
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    ...mapActions(['add']),
    handleClick() {
      this.add()
    }
  }
}
</script>
<style lang='less'>
.logo {
  width: 200px;
  height: 200px;
  background-image: url('./assets/logo1.png');
}
h1{
  color: red;
  display: flex;
  span {
    color: aqua;
  }
}
</style>