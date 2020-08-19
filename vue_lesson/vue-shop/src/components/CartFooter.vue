<template>
  <div class="cart-footer">
    <div>
      <span>购买总价</span>
      <span>￥{{total.value}}</span>
    </div>
    <div>
      <span>购买总数</span>
      <span>{{total.num}}</span>
    </div>
    <button>清空</button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  props: ['total']
}
</script>

<style>
.cart-footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
</style>