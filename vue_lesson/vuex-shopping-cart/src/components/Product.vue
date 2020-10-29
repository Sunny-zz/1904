<template>
  <li class="product">
    <div>
      <span>{{ product.title }}</span>
      <span> - </span>
      <span>${{ product.price }}</span>
      <span v-if="product.quantity"> x {{ product.quantity }}</span>
    </div>
    <button v-if="!product.quantity" @click="addToCart(product.id)">
      add to cart
    </button>
  </li>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>
<style></style>