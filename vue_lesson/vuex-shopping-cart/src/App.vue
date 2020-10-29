<template>
  <div>
    <h2>vuex shopping cart</h2>
    <hr />
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>
<script>
// const arr = [
//   { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
//   { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
//   { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
// ]

// const obj = {
//   ids: [1, 2],
//   nums: { 1: 2, 2: 5 }
// }

// const res = obj.ids.reduce((res, ele) => {
//   res.push({ ...arr.find((item) => item.id === ele), quantity: obj.nums[ele] })
//   return res
// }, [])

// console.log(res)

import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',
  components: {
    ShoppingCart,
    ProductList
  }
}
</script>
<style></style>