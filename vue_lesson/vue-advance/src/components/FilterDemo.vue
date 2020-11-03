<template>
  <div>
    <h2>vue 过滤器的使用 </h2>
    <!-- 过滤器的使用  需要写在模版语法中   {{ 参数 | 过滤器名称 }} -->
    <span>时间: {{ time | formatTime(10,20)}}</span>
  </div>
</template>
<script>
// import moment from 'moment'
export default {
  name: 'FilterDemo',
  data(){
    return {
      time: '2019-11-03T00:15:02.362Z'
    }
  },
  // computed: {
  //   showTime() {
  //     // 当前的计算属性可以实现该组件内的时间格式化，但是其他组件想要使用的话还得再设置
  //     // 要实现全局功能可能想，将该方法写到一个 公共 js 内哪里使用哪里引入
  //     // 还可以将该功能写成 vue 的全局过滤器
  //     return moment(this.time).format('MM-DD HH:mm')
  //   }
  // },
  // 局部 过滤器
  // filters: {
  //   formatTime: function (value,a,b) {
  //     console.log(a);
  //     console.log(b);
  //     if (!value) return ''
  //     return moment(value).format('MM-DD HH:mm')
  //   }
  // }
};
</script>
<style></style>