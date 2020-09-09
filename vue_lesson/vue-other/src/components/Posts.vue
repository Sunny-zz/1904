<template>
  <div class="posts">
    <div class="left">
      <!-- this.$emit('update:title', newTitle) -->
      <!-- <button @click="x" :style="{ color: title === 'one' ? 'red' : 'black' }">
        One
      </button>
      <br />
      <button
        @click="$emit('update:title', 'two')"
        :style="{ color: title === 'two' ? 'red' : 'black' }"
      >
        Two
      </button>
      <br />
      <button
        @click="$emit('update:title', 'three')"
        :style="{ color: title === 'three' ? 'red' : 'black' }"
      >
        Three
      </button> -->
      <button
        @click="title = 'one'"
        :style="{ color: title === 'one' ? 'red' : 'black' }"
      >
        One
      </button>
      <br />
      <button
        @click="title = 'two'"
        :style="{ color: title === 'two' ? 'red' : 'black' }"
      >
        Two
      </button>
      <br />
      <button
        @click="title = 'three'"
        :style="{ color: title === 'three' ? 'red' : 'black' }"
      >
        Three
      </button>
    </div>
    <div class="right">
      <div v-if="!title">请点击左侧选择查看的文章</div>
      <div v-else-if="title === 'one'">第一篇文章内容</div>
      <div v-else-if="title === 'two'">第二篇文章内容</div>
      <div v-else-if="title === 'three'">第三篇文章内容</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Posts",
  // props: ["title"],
  data() {
    return {
      title: ""
    };
  },
  // created() {
  //   console.log("文章组件被创建");
  // },
  methods: {
    // x() {
    //   this.$emit("update:title", "one");
    //   // 做其他的事
    //   console.log("子组件的乱七八糟的事");
    // }
  }
};
</script>
<style>
.posts {
  width: 800px;
  height: 100px;
  border: 1px solid #ccc;
}
.left {
  width: 200px;
  border-right: 1px solid #ccc;
  height: 100px;
  float: left;
  box-sizing: border-box;
}
.right {
  width: 600px;
  height: 100px;
  float: left;
}
</style>
