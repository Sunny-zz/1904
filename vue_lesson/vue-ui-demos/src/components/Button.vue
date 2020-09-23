<template>
  <button @click="handleClick" :class="['btn', { active: value }]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["value"],
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
<style>
.btn {
  color: aqua;
}
.active {
  color: red;
}
</style>
