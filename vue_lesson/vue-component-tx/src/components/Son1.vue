<template>
  <div>
    <div>使用父组件的 number {{ $parent.number }}</div>
    <div>使用父组件 provide 的数据： {{ getObj() }}</div>
    <button @click="$parent.number = 999">修改父组件的 number</button>
    <button @click="setObjName('大白')">修改name</button>
  </div>
</template>
<script>
export default {
  name: 'Son1',
  inject: ['getObj', 'setObjName']
  // created() {
  //   console.log(this.getObj())
  // }
}
</script>
<style></style>