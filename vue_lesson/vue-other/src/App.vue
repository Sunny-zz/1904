<template>
  <div>
    <Tabs />
    <MyTranstionDemo />
    <TranstionDemo />
  </div>
</template>
<script>
import Tabs from './components/Tabs'
import TranstionDemo from './components/TranstionDemo'
import MyTranstionDemo from './components/MyTranstionDemo'
export default {
  name: 'App',
  components: {
    Tabs,
    TranstionDemo,
    MyTranstionDemo
  }
}
</script>
<style></style>
