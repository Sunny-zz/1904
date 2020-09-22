<template>
  <div class="about">
    <div>
      <router-link to="?sort=hot">热门</router-link>|
      <router-link to="?sort=new">最新</router-link>
    </div>

    <h1>This is an about page</h1>
    <h2 v-if="num">{{num}}</h2>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      num: 0
    }
  },
  // created() {
  //   setTimeout(() => {
  //     this.num = this.$route.query.sort === 'new' ? 1000 : 10000
  //   }, 1000)
  // },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('组件内的路由跳转之前的守卫')
    setTimeout(() => {
      const newNum = to.query.sort === 'new' ? 1000 : 10000
      // 在这个组件的路由守卫内想要获取组件实例的话，只能在 next 函数内获取  ,next 函数调用的时候传递的参数写成函数，该函数会默认接收组件实例作为参数
      next((vm) => {
        console.log(vm)
        // vm 就代表当前组件实例
        // vm.num = newNum
        vm.setNum(newNum)
      })
    }, 1000)
    // next()
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('组件内的路由改变但是还是展示的该组件')
    setTimeout(() => {
      this.num = to.query.sort === 'new' ? 1000 : 10000
    }, 1000)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('组件内的离开当前路由的守卫')
    next()
  },
  methods: {
    setNum(newNum) {
      this.num = newNum
    }
  }
}
</script>
<style>
.about {
  height: 2000px;
}
</style>
