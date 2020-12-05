<template>
  <div>
    <div>展示父组件内的number: {{ value }}</div>
    <!-- <button @click="$emit('chang-number', 900)">修改父组件的 number</button> -->
    <!-- <button @click="$emit('update:number1', 900)">修改父组件的 number1</button> -->
    <button @click="$emit('input', 900)">修改父组件的 number</button>
  </div>
</template>
<script>
export default {
  name: 'Son',
  props: {
    number: {
      type: Number
    },
    number1: {
      type: Number
    },
    number2: {
      type: Number
    },
    value: {
      type: Number
    }
  }
}
</script>
<style></style>