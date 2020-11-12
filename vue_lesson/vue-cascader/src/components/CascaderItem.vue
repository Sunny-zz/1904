<template>
  <div class="list-wrap">
    <div class="list-content">
      <div
        class="item"
        @click="select(item)"
        v-for="(item, index) in listData"
        :key="index"
      >
        {{ item[props.label] }}
      </div>
    </div>
    <CascaderItem
      v-if="list.length"
      :listData="list"
      :value="value"
      :change="change"
      :level="level + 1"
      :props="props"
    />
  </div>
</template>
<script>
// 点击了 一级1  然后一级1-1
// 1.   1 -->  1-1|1-2  --> 1-1-1
// Cascader-- > CascaderItem(currentItem 1) ---> CascaderItem(currentItem 1-1) ---> CascaderItem(currentItem null)
//  点击了 一级2
// 2.   2 -->  2-1|2-2  --> 1-1-1
// Cascader-- > CascaderItem(currentItem 2) ---> CascaderItem(currentItem 1-1) ---> CascaderItem(currentItem null)

import cloneDeep from 'lodash/cloneDeep'
export default {
  // 组件内部想要使用自己必须先声明 name 属性
  name: 'CascaderItem',
  data() {
    return {
      // currentItem: null
    }
  },
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    change: {
      type: Function
    },
    level: {
      type: Number
    },
    props: {
      type: Object,
      default: () => ({
        lebel: 'label',
        children: 'children'
      })
    }
  },
  computed: {
    list() {
      const { level, value, props } = this
      console.log(props)

      return value[level] && value[level][props.children]
        ? value[level][props.children]
        : []
    }
  },
  methods: {
    // select 是每次点击 Item 组件都会触发的事件，该事件内需要获取祖先的很多数据，还要做修改
    select(item) {
      // this.currentItem = item
      console.log('点击了选择')
      // 还要将祖先的 selectedValue 进行修改
      // 给 change 传递的参数必须是完整的 selectedValue,
      // 完整的 selectedValue 是需要进行很多种处理(比如说 添加 修改 删除)，那么我们就需要在这获取原来的 selectedValue 的值，然后对其拷贝进行修改在传递给 change 事件
      // this.value.push(item)
      // console.log(this.value)
      // console.log(this.value)
      const newValue = cloneDeep(this.value)
      // 当点击了二级 this.value 内有二个数据
      // 接下来如果点击了
      // newValue.push(item)
      //  []   push
      newValue[this.level] = item
      // 删除  this.level 后面的所有数据
      newValue.splice(this.level + 1)
      // console.log(newValue)
      this.change(newValue)
    }
  }
}
</script>
<style>
.list-wrap {
  display: flex;
}
.list-content {
  margin-right: 10px;
  min-width: 60px;
  max-height: 300px;
  border: 1px solid #ccc;
  overflow-y: auto;
}
.list-content .item:hover {
  cursor: pointer;
  background-color: rgb(139, 133, 133);
}
</style>