<template>
  <div>
    <!-- 如果直接设置成 v-model  -->
    <!-- 报错 Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. -->
    <!-- 请避免直接修改 prop ，在父组件重新渲染的时候该属性会被重写 -->
    <!-- <input type="text" v-model="searchValue" /> -->
    <!-- 在 template 中当事件函数内想要使用事件对象请使用 $event -->
    <!-- <input type="text" @input="$emit('change-searchvalue',$event.target.value)" /> -->
    <input ref="searchInput" type="text" :value="searchValue" />
    <br />
    <!-- <input type="checkbox" id="checked" @change="$emit('change-ishasstock',$event.target.checked)" /> -->
    <input ref="checkboxInput" type="checkbox" id="checked" :checked="isHasStock" />
    <label for="checked">Only show products in stock</label>
    <!-- 现在是只要修改了查询条件页面就直接展示筛选的结果 -->
    <!-- 现在要求点击查询按钮之后再显示查询内容 -->
    <!-- 方案1. 点击按钮之后在修改父组件的 data  -->
    <br />
    <button @click="search">查询</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: ['searchValue', 'isHasStock'],
  methods: {
    search() {
      // 修改父组件的 data
      // 获取真实 dom 节点 可以使用原生方法 document ，在 vue 中提供了 ref 方式获取真实 dom
      // console.log(this.$refs.searchInput.value)

      this.$emit('changeSearchValue', this.$refs.searchInput.value)
      this.$emit('changeIsHasStock', this.$refs.checkboxInput.checked)
    },
    reset() {
      // 修改父组件的 data
      // 获取真实 dom 节点 可以使用原生方法 document ，在 vue 中提供了 ref 方式获取真实 dom
      this.$emit('changeSearchValue', '')
      this.$emit('changeIsHasStock', false)
    }
  }
}
</script>

<style></style>
