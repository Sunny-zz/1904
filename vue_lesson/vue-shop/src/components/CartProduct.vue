<template>
  <div class="product">
    <span>{{product.number}}</span>
    <!-- 在此处添加一个 复选框并实现其功能 -->
    <span>{{product.nam}}</span>
    <div>
      <button @click="$emit('change',product.id,'-')">-</button>
      <input :value="product.quantity" type="text" />
      <!-- 输入值，当失去焦点时修改 -->
      <!-- 输入的置不符合规范 失去焦点之后 默认变回原来的值 -->

      <button @click="$emit('change',product.id,'+')">+</button>
    </div>
    <span>￥{{product.price}}</span>
    <span>￥{{product.price*product.quantity}}</span>
    <button>移除</button>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: ['product']
}
</script>

<style>
.product {
  display: flex;
  justify-content: space-between;
}
</style>