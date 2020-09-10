<template>
  <div>
    <h2>vue 的进入和离开的过渡</h2>
    <div>
      <button @click="handleClick">按钮</button>
      <br />
      <!-- 再设置一个data控制它的v-if，先执行动画，然后用setTimeout控制那个v-if的data使其消失（当然时间是在transition秒数执行完之后 -->
      <span v-if="showDom" :class="{hide:!show,text: true}">hello</span>
      <h3>哈哈哈哈</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TranstionDemo',
  data() {
    return {
      show: true,
      showDom: true
    }
  },
  methods: {
    handleClick() {
      // 需要判断效果是从离开-->出现还是从出现-->离开
      // 出现-->离开
      if (this.showDom) {
        this.show = false
        setTimeout(() => {
          this.showDom = false
        }, 2000)
      } else {
        // 离开-->出现
        // 直接让元素出先并且删除了 hide 类名
        // 上述操作其实就相当于初始化，所以 transtion 检测不到 opacity 变化
        this.showDom = true
        setTimeout(() => {
          this.show = true
        }, 1)
      }
    }
  }
}
</script>
<style>
.text {
  transition: opacity 2s;
}
.hide {
  opacity: 0;
}
</style>