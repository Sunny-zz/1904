<template>
  <div class="product-list">
    <CartProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
      @change="changeQuantity"
      @change-checked="changeChecked"
    />
    <input type="text" v-model.lazy.number="products[0].quantity" />
    <!-- 自定义事件的名称请使用 kebab-case 命名  -->
  </div>
</template>

<script>
import CartProduct from './CartProduct'
export default {
  name: 'CartProductList',
  components: {
    CartProduct
  },
  props: ['products', 'changeQuantity', 'changeChecked']
}
</script>

<style>
</style>