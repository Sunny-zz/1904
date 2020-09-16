<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>
<style>
body {
  background-color: #f4f5f5;
  margin: 0;
}
</style>
