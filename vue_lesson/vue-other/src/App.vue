<template>
  <div>
    <Tabs />
    <MyTranstionDemo />
    <TranstionDemo />
    <WatchDemo />
  </div>
</template>
<script>
import Tabs from "./components/Tabs";
import TranstionDemo from "./components/TranstionDemo";
import MyTranstionDemo from "./components/MyTranstionDemo";
import WatchDemo from "./components/WatchDemo";
export default {
  name: "App",
  components: {
    Tabs,
    TranstionDemo,
    MyTranstionDemo,
    WatchDemo
  }
};
</script>
<style>
body {
  height: 2000px;
}
</style>
