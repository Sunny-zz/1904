<template>
  <div class="box">这是一个测试销毁生命周期的组件</div>
</template>
<script>
export default {
  name: 'Box',
  mounted() {
    // 直接给组件实例新增一个属性将相当于在组件内部创建了一个全局变量
    console.log('组件创建了')
    this.run = setInterval(() => {
      console.log('1')
    }, 100)
  },
  beforeDestroy() {
    console.log('组件即将被销毁')
  },
  destroyed() {
    clearInterval(this.run)
    console.log('组件销毁完毕')
  }
}
</script>
<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>