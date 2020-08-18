<template>
  <li :class="['goods-item',{'no-stock': !goods.stocked}]">
    <span>{{ goods.name }}</span>
    <span>{{ goods.price }}</span>
  </li>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: ['goods']
}
</script>

<style>
li.goods-item span {
  display: block;
  width: 50%;
  float: left;
}
.no-stock {
  color: red;
}
</style>
