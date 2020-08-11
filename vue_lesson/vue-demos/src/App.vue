<template>
  <div>
    <LoopDemo />
    <ShowImg />
    <StyleDemo />
  </div>
</template>

<script>
import LoopDemo from "./components/LoopDemo";
import ShowImg from "./components/ShowImg";
import StyleDemo from "./components/StyleDemo";
export default {
  name: "App",
  components: {
    LoopDemo,
    ShowImg,
    StyleDemo
  }
};
</script>

<style></style>
