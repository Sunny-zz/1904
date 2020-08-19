<template>
  <div class="show-goods">
    <!-- 用自定义事件传递函数的时候，希望将自定义事件名称使用 kebab-case 命名，不使用 camelCase 方式 -->
    <SearchForm
      :searchValue="searchValue"
      :isHasStock="isHasStock"
      @changeSearchValue="changeSearchValue"
      @changeIsHasStock="changeIsHasStock"
    />
    <ShowContent ref="ceShi" :searchValue="searchValue" :isHasStock="isHasStock" />
    <!-- <button @click="showData">展示自己组件的 data</button> -->
    <button @click="handleClick">测试组件上的 ref</button>
  </div>
</template>

<script>
import SearchForm from './SearchForm'
import ShowContent from './ShowContent'
export default {
  name: 'ShowGoods',
  data() {
    return {
      searchValue: '',
      isHasStock: false,
      arr1: [1, 2, 3]
    }
  },
  components: {
    SearchForm,
    ShowContent
  },
  methods: {
    // showData() {
    //   console.log('输入的内容------', this.searchValue)
    //   console.log('是否选择了库存', this.isHasStock)
    // },
    changeSearchValue(newValue) {
      this.searchValue = newValue
    },
    changeIsHasStock(newValue) {
      this.isHasStock = newValue
    },
    handleClick() {
      console.log(this)

      // console.log(this.$refs.ceShi.xxx())
      // setTimeout(() => {
      //   console.log(this)
      // }, 1000)
      // const arr2 = [2, 3, 4]
      // arr2.map((item, index) => {
      //   return item + this.arr1[index]
      // })
    }
  }
}
</script>

<style>
.show-goods {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
