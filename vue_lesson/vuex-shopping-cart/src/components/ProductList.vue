<template>
  <div>
    <h2>Products</h2>
    <ul v-if="products.length">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div v-else>请稍等</div>
  </div>
</template>
<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    Product
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products
    })
    // products() {
    //   return this.$store.state.products.products
    // }
  },
  methods: {
    // 尽管 getProducts 是属于 products 模块内的 action 函数
    // 但是所有的 action 函数，不管是不是模块内的都默认是store 内全局的
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>
<style></style>