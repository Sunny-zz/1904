<template>
  <div class="shopping-cart" v-if="products.length">
    <h2>购物车</h2>
    <CartProductList :changeQuantity="changeQuantity" :products="products" />
    <CartFooter :total="total" />
  </div>
  <div v-else>
    <h2>购物车为空</h2>
  </div>
</template>

<script>
import CartProductList from './CartProductList'
import CartFooter from './CartFooter'
export default {
  name: 'ShoppingCart',
  data() {
    return {
      products: [
        {
          id: '12qw',
          number: 110,
          name: 'iphone',
          price: 4000,
          quantity: 4
        },
        {
          id: '12ee',
          number: 120,
          name: 'vivo',
          price: 3000,
          quantity: 2
        },
        {
          id: '1eqw',
          number: 130,
          name: 'oppo',
          price: 3500,
          quantity: 1
        }
      ]
    }
  },
  components: {
    CartProductList,
    CartFooter
  },
  computed: {
    total() {
      return this.products.reduce(
        (res, item) => ({
          value: res.value + item.quantity * item.price,
          num: res.num + item.quantity
        }),
        { value: 0, num: 0 }
      )
      // return this.products.reduce(
      //   (res, item) => res + item.price * item.quantity,
      //   0
      // )
    }
  },
  methods: {
    changeQuantity(id, sign) {
      // 已知一个 id 已知一个数组
      // 将该数组内和 id 匹配的那一条的 quantity  加 1
      console.log('修改')
      const currentProduct = this.products.find((item) => item.id === id)
      if (sign === '+') {
        currentProduct.quantity++
      } else {
        if (currentProduct.quantity > 1) {
          currentProduct.quantity--
        }
      }
    }
  }
}
</script>

<style>
.shopping-cart {
  width: 600px;
}
</style>