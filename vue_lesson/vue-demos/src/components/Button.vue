<template>
  <button :class="isActive ? 'active' : ''" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "isActive"],
  methods: {
    handleClick() {
      // 调用父组件的自定义事件并传参
      // 传参的方式可以在父组件内直接传递也可以在子组件内传递
      this.$emit("change");
    }
  }
};
</script>

<style>
button {
  width: calc(820px / 5);
  display: block;
  float: left;
  height: 100%;
  outline: none;
}
.active {
  background-color: #00b3d4;
}
</style>
