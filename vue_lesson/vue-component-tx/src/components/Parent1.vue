<template>
  <div style="padding: 20px; border: 1px solid #ccc; margin-bottom: 100px">
    <div>父组件内的 nmber : {{ number }}</div>
    <div>我自己的 provide {{ number }}</div>
    <button @click="obj.name = 'hello'">修改number</button>
    <Son1 />
  </div>
</template>
<script>
import Son1 from './Son1'
export default {
  name: 'Parent1',
  components: {
    Son1
  },
  data() {
    return {
      number: 10000,
      obj: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.obj = { name: '小红' }
    }, 1000)
  },
  // provide 提供的数据是不可响应的
  // 如果向提供相应数据 可以将数据做成响应的 Vue.observable
  provide() {
    return {
      // 当需要提供的数据并不是直接在父组件 data 内写死的，需要在 created 或者 mounted 生命周期钩子内获取，那么直接 提供是不行的
      // 此时需要提供一个方法，在父组件内定义一个方法，该方法返回需要的数据
      // 然后将此方法当作 provide 提供的
      // x: this.getObj,
      // 可以直接简写
      getObj: () => this.obj,
      setObjName: (name) => (this.obj.name = name)
    }
  }
  // methods: {
  //   getObj() {
  //     return this.obj
  //   }
  // }
}
</script>
<style></style>