<template>
  <div>
    <!-- <h2>图片展示</h2> -->

    <!-- 数据没有来的时候展示等待动画 -->
    <!-- 数据来了循环展示数据 -->
    <!-- 需要借助我们的 vue 的条件渲染(出现和消失) -->
    <!-- 样式  v-show -->
    <!-- 结构  v-if  v-else  v-else-if -->
    <!-- 消失出现次数比较频繁使用 show-->
    <!-- 消失出现次数比较少使用 if -->
    <img src="../assets/logo.png" alt="" />
    <button @click="getImages">模拟请求后台的图片数据</button>
    <div v-if="!imgList.length">
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1708456121,4044353785&fm=26&gp=0.jpg"
        alt
      />
    </div>
    <div v-else>
      <div v-for="item in imgList" :key="item.id">
        <!-- 如果图片的 src 地址写成了 js 相关的值，那么图片不会解析在浏览器上 -->
        <!-- 解决方案 -->
        <!-- 1. 换成网络地址 推荐 -->
        <!-- 2. 将 js 生成的图片地址使用 require(js地址) ,只能在 script 标签中使用-->
        <!-- 以后我们自己做项目的话可能会用到一些图片，这些图片写成本地的话不太好，将我们的图片上传到 github  或者 腾讯云 或者其他的免费网站 -->
        <img :src="item.src" alt="" />
        <span>{{ item.info }}</span>
      </div>
    </div>
    <!-- 需要注意 if else  elseif 使用的时候必须紧跟着中间不允许出现其他的元素，而且该指令对应的元素都是兄弟元素 -->
    <div>
      <span v-if="num === 1">1</span>
      <span v-else-if="num === 2">2</span>
      <span v-else-if="num === 3">3</span>
      <span v-else-if="num === 4">4</span>
      <span v-else>5</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowImg",
  data: function() {
    return {
      // isHas: false,
      imgList: [],
      num: 5
    };
  },
  methods: {
    getImages() {
      // 假装发请求获取数据然后更新 data  imgList
      setTimeout(() => {
        this.imgList = [
          {
            id: "xzxas12",
            src: require("../assets/logo.png"),
            info: "dasd"
          },
          {
            id: "xzxas",
            src: require("../assets/logo.png"),
            info: "dasd"
          },
          {
            id: "xas12",
            src: require("../assets/logo.png"),
            info: "dasd"
          }
        ];
      }, 1000);
    }
  }
};
</script>

<style>
span {
  font-size: 100px;
}
</style>
