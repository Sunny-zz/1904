<template>
  <li class="goods-item">
    <span>{{ goods.name }}</span>
    <span>{{ goods.price }}</span>
  </li>
</template>

<script>
export default {
  name: "GoodsItem",
  props: ["goods"]
};
</script>

<style>
li.goods-item span {
  display: block;
  width: 50%;
  float: left;
}
</style>
