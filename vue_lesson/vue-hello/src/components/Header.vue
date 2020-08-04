<template>
  <header>
    111
    <!-- 只要是在 template 想要使用 js 的话都遵循两个语法 -->
    <Button :isActive="true" />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  components: {
    Button
  }
};
</script>

<style>
header {
  width: 100%;
  height: 100px;
  background-color: #ccc;
}
</style>
