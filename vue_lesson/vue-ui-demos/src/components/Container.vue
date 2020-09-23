<template>
  <div>
    <h3>布局组件</h3>
    <div class="left">
      左边
      <!-- <slot name="sidebar"></slot> -->
      <slot></slot>
    </div>
    <div class="list">
      右边
      <slot name="list"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Container"
};
</script>
<style></style>
