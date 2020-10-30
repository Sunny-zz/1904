<template>
  <li class="product">
    <div>
      <span>{{ product.title }}</span>
      <span> - </span>
      <span>${{ product.price }}</span>
      <span>库存 {{ product.inventory }}</span>
      <span v-if="product.quantity"> x {{ product.quantity }}</span>
    </div>
    <button
      v-if="!product.quantity"
      :disabled="getQuantityById(product.id) === product.inventory"
      @click="addToCart(product.id)"
    >
      add to cart
    </button>
  </li>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Product',
  props: ['product'],
  computed: {
    ...mapGetters(['getQuantityById'])
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
  // created() {
  //   console.log(this.product)
  // }
}
</script>
<style></style>