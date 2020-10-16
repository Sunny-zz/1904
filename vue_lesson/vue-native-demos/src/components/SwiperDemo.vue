<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <button @click="handleClick">切换方向</button>
  </div>
</template>
<script>
// 直接安装 6 版本的swiper会出问题建议安装 5 版本
import Swiper from 'swiper'
// 当你想要引入 包 内的其他文件，路径直接写   包名 + / 找即可
import 'swiper/css/swiper.min.css'
export default {
  name: 'SwiperDemo',
  data() {
    return {
      // loop: true
    }
  },
  mounted() {
    // 进入页面的时候只有在该生命周期才能获取真实 dom 节点才可以执行一些相关操作
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar'
      // }
    })
  },
  methods: {
    handleClick() {
      // this.loop = !this.loop
      console.log(this.mySwiper)
      this.mySwiper.changeDirection()
    }
  }
}
</script>
<style >
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>