<template>
  <div class="product-list">
    <CartProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
      @change="changeQuantity"
    />
  </div>
</template>

<script>
import CartProduct from './CartProduct'
export default {
  name: 'CartProductList',
  components: {
    CartProduct
  },
  props: ['products', 'changeQuantity']
}
</script>

<style>
</style>