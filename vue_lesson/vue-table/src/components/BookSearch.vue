<template>
  <div>
    <!-- <input v-model.lazy.trim="searchInfo.title" class="title" type="text" placeholder="标题" />
    <select v-model.number="searchInfo.importance" class="import">
      <option style="color: #ccc;" value="0">重要性</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select v-model="searchInfo.country" class="country">
      <option style="color: #ccc;" value>类型</option>
      <option value="China">China</option>
      <option value="Japan">Japan</option>
      <option value="USA">USA</option>
      <option value="Eurozone">Eurozone</option>
    </select>-->
    <input ref="searchTitle" :value="searchInfo.title" class="title" type="text" placeholder="标题" />
    <select ref="searchImpor" :value="searchInfo.importance" class="import">
      <option style="color: #ccc;" value="0">重要性</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select ref="searchCountry" :value="searchInfo.country" class="country">
      <option style="color: #ccc;" value>类型</option>
      <option value="China">China</option>
      <option value="Japan">Japan</option>
      <option value="USA">USA</option>
      <option value="Eurozone">Eurozone</option>
    </select>
    <button
      @click="$emit('change-search-info',$refs.searchTitle.value,Number($refs.searchImpor.value),$refs.searchCountry.value)"
      class="search"
    >搜索</button>
  </div>
</template>
<script>
export default {
  name: 'BookSearch',
  props: ['searchInfo']
}
</script>
<style>
</style>