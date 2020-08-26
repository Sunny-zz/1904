<template>
  <div>
    <h2>子组件</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  beforeCreate() {
    console.log("子组件的 beforCreate");
  },
  created() {
    console.log("子组件的 created");
  },
  beforeMount() {
    console.log("子组件的 beforeMount");
  },
  mounted() {
    console.log("子组件的 mounted");
  }
};
</script>

<style></style>
