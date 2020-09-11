<template>
  <div>
    <h2>计算属性的 setter</h2>
    <div>
      姓: <input type="text" v-model.lazy="firstName" /> <br />
      名: <input type="text" v-model.lazy="lastName" /> <br />
      <!-- 计算属性时不可以被直接修改的 当你使用了 v-model 指令的时候，输入内容是 fullName 就会发生改变 -->
      <!-- 当你想要对计算属性直接修改的时候需要给计算属性设置 setter -->
      全称是: <input type="text" v-model.lazy="fullName" />
    </div>
    <h2>watch 侦听器</h2>
    qustion: <input type="text" v-model.lazy="question" /><br />
    <!-- 当你将 answer 设置成计算属性的时候，answer 只能设置成同步函数获取，加不了异步操作 -->
    <!-- 那么就只能再设置一个 data 使用失去焦点事件去发送异步请求获取答案修改 data -->
    <!-- 针对于很平凡的操作修改data vue 提供了一个 watch 方法 -->
    anwser: <span>{{ answer }}</span>
  </div>
</template>
<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      firstName: "张",
      lastName: "三儿",
      answer: "请输入一个问题",
      question: ""
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        // newValue 代表新的计算属性 或者叫更改之后的计算属性
        // setter 用来修改计算属性的来源 data 的
        this.firstName = newValue.split(" ")[0];
        this.lastName = newValue.split(" ")[1];
      }
    }
  },
  watch: {
    question: {
      // 监听 question 修改 answer
      handler() {
        // 当 question 发生变化是就会执行
        console.log("哈哈哈");
        if (this.question) {
          setTimeout(() => {
            // 向后台获取答案
            this.answer = Math.random();
          }, 100);
        }
      },
      // 进入页面就执行一次
      immediate: true
    }
  }
};
</script>
<style></style>
