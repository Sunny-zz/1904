<template>
  <div>
    <input type="text" v-model="searchValue" />
    <br />
    <input type="checkbox" v-model="isHasStock" name="" id="checked" />
    <label for="checked">Only show products in stock</label>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchValue: "哈哈哈",
      isHasStock: true
    };
  }
};
</script>

<style></style>
