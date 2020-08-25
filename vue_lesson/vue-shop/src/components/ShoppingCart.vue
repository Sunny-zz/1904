<template>
  <div class="shopping-cart" v-if="products.length">
    <h2>购物车</h2>
    <CartProductList
      :changeQuantity="changeQuantity"
      :changeChecked="changeChecked"
      :products="products"
    />
    <CartFooter :total="total" />
    <button @click="xx">测试</button>
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
          quantity: 4,
          checked: true
        },
        {
          id: '12ee',
          number: 120,
          name: 'vivo',
          price: 3000,
          quantity: 2,
          checked: false
        },
        {
          id: '1eqw',
          number: 130,
          name: 'oppo',
          price: 3500,
          quantity: 1,
          checked: true
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
          value: res.value + (item.checked ? item.quantity * item.price : 0),
          num: res.num + (item.checked ? item.quantity : 0)
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
    changeQuantity(id, sign, value) {
      // 已知一个 id 已知一个数组
      // 将该数组内和 id 匹配的那一条的 quantity  加 1
      // console.log('修改')
      const currentProduct = this.products.find((item) => item.id === id)
      if (sign === '+') {
        // 加法
        currentProduct.quantity++
      } else if (sign === '-') {
        // 减法
        if (currentProduct.quantity > 1) {
          currentProduct.quantity--
        }
      } else if (sign === 'input') {
        // console.log(value)

        // 输入框
        // 获取输入框的内容，然后做判断 判断该值是否满足数字要求，满足做修改不满足不做修改
        // if (Number(value)) {
        //   // 输入的是数字是除了 0 之外的数字
        //   currentProduct.quantity = Number(value)
        // } else {
        //   // 0 或者非数字
        //   alert('不太行')
        //   console.log(this.products)
        // }
        // 其实输入框的值是否满足条件不需要再修改父组件 data 的函数内执行，因为只有满足了条件才能修改 data，所以说该函数直接接收正确的值即可。
        currentProduct.quantity = value
      }
    },
    changeChecked(id) {
      const currentProduct = this.products.find((item) => item.id === id)
      currentProduct.checked = !currentProduct.checked
    },
    xx() {
      console.log(this.products)
    }
  }
}
</script>

<style>
.shopping-cart {
  width: 600px;
}
</style>