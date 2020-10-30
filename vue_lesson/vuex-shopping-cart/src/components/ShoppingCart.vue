<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
      <Product v-for="item in productsInCart" :key="item.id" :product="item" />
    </ul>
    <div v-if="!productsInCart.length">Please add some products to cart.</div>
    <div>
      <span>total:$ {{ total.toFixed(2) }}</span>
      <br />
      <button
        :disabled="!productsInCart.length"
        @click="checkout(productsInCart)"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
<script>
import Product from './Product'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ShoppingCart',
  data() {
    return {
      obj: {
        name: 'ahahha '
      }
    }
  },
  components: {
    Product
  },
  computed: {
    ...mapGetters(['productsInCart', 'total'])
  },
  methods: {
    xxxx() {
      Object.assign(this.obj, { a: 1, b: 2 })
    },
    ...mapMutations(['checkout'])
  }
}
</script>
<style></style>