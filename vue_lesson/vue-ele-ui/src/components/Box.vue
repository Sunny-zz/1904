<template>
  <div>
    <h2>测试 update 反复执行的问题</h2>
    <button @click="update">更新</button>
    <div v-for="item in numbers" :key="item">{{ item }}</div>
  </div>
</template>
<script>
console.log(
  [4444444444444, 55555555555, 666666666] ===
    [4444444444444, 55555555555, 666666666]
);

export default {
  name: "Box",
  data() {
    return {
      numbers: 5,
      numbers2: [4444444444444, 55555555555, 666666666]
    };
  },
  updated() {
    console.log("更新数据 numbers");
    // 获取更新 data 之后的相关真实 dom 节点做一个事
    this.numbers = 20;
  },
  methods: {
    update() {
      this.numbers = 10;
    }
  }
};
</script>
<style></style>
