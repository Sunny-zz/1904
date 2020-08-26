<template>
  <div>
    <input
      type="checkbox"
      :checked="isAllDone"
      @change="$emit('change-all-state',$event.target.checked)"
    />
    <input type="text" v-model.trim="value" @keydown.enter="handleClick" />
    <!-- <button @click="$emit('add-todo', value,clearInput)">提交</button> -->
    <button @click="handleClick">提交</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      value: ''
    }
  },
  props: ['isAllDone'],
  methods: {
    handleClick() {
      const { value } = this
      // if 语句的简写方式 条件成立时 执行后面的语句，后面的语句必须跟 if 在同一行
      if (value) this.$emit('add-todo', value), (this.value = '')
      else alert('请输入有效内容')
    }
    // clearInput() {
    //   this.value = ''
    // }
  }
}
</script>

<style></style>
