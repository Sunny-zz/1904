<template>
  <div id="app">
    <div>
      <el-button @click="showInfo">el-button</el-button>
    </div>

    <ul
      class="infinite-list list"
      style="overflow:auto"
      v-infinite-scroll="load"
      :infinite-scroll-distance="10"
      :infinite-scroll-delay="1000"
      :infinite-scroll-disabled="count >= 30"
    >
      <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      count: 10
    };
  },
  methods: {
    showInfo() {
      this.$message({
        message: "恭喜，成功了",
        type: "success"
      });
    },
    load() {
      console.log("加载");
      if (this.count < 30) {
        setTimeout(() => {
          this.count += 5;
        }, 1000);
      }
    }
  }
};
</script>

<style>
.list {
  padding-left: 0;
  width: 400px;
  height: 300px;
  border: 1px solid red;
  list-style: none;
}
.list li {
  width: 200px;
  margin: 0 auto;
  line-height: 30px;
  text-align: center;
  background-color: #007fff;
  margin-bottom: 5px;
}
</style>
