<template>
  <div class="product">
    <span>{{product.number}}</span>
    <!-- 在此处添加一个 复选框并实现其功能 -->

    <input @change="$emit('change-checked',product.id)" type="checkbox" :checked="product.checked" />
    <span>{{product.name}}</span>
    <div>
      <button @click="$emit('change',product.id,'-')">-</button>
      <!-- <input v-model.lazy.number="product.quantity" type="text" /> -->
      <!-- 对于对象类型的 data 来说，如果将对象的属性当作 props 传递下去，而且后代组件将该属性使用 v-model 进行了双向绑定，也是可以实现修改的，并不会报错，但是如果是非对象类型的 data 此套路行不通 -->
      <!-- 但是我们这个输入框修改商品数量，不推荐使用 v-model 因为，还需要做一些其他的数据处理。 -->
      <input :value="product.quantity" @blur="handleBlur" type="text" />
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
  props: ['product'],
  methods: {
    handleBlur() {
      const value = event.target.value
      if (Number(value)) {
        this.$emit('change', this.product.id, 'input', Number(value))
      } else {
        alert('不太行')
        event.target.value = this.product.quantity
      }
    }
  }
}
</script>

<style>
.product {
  display: flex;
  justify-content: space-between;
}
</style>