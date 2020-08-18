<template>
  <div v-if="goodsList.length" class="goods-list">
    <h3>{{ goodsType }}</h3>
    <ul>
      <GoodsItem v-for="item in goodsList" :key="item.id" :goods="item" />
    </ul>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'GoodsList',
  props: ['goodsType', 'goodsList'],
  components: {
    GoodsItem
  }
}
</script>

<style>
.goods-list {
  margin-top: 20px;
  width: 100%;
}
.goods-list ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
</style>
