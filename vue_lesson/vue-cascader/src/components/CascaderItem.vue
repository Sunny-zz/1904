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
      const { level, value, listData } = this
      // 如果 data 发生了改变，那么 list 就需要重新计算
      // 所以 list 的计算需要依赖 data ，但是如果依然依赖的是总的 data 的话，那就有需要进行 二叉树遍历了
      // 恰好组件自己的 listData 就是父组件传递过来的 data 的部分数据，数据里面就有我们需要的
      // console.log(listData)
      if (value[level]) {
        // 先要判断 value 内是否存在内容 因为 value 初始是空的
        // 如果存在了去 listData 里面找对应 id 的那条数据
        // 找到了之后获取其 children 没有 children 的话返回空数组
        const list = listData.find((item) => item.id === value[level].id)
          .children
        return list || []
      } else {
        return []
      }
      // return value[level] && value[level][props.children]
      //   ? value[level][props.children]
      //   : []
    }
  },
  methods: {
    // select 是每次点击 Item 组件都会触发的事件，该事件内需要获取祖先的很多数据，还要做修改
    select(item) {
      // this.currentItem = item
      // console.log('点击了选择')
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
      // 需要异步才执行
      // if (this.load) {
      //   this.load(item.id, (res) => {
      //     // console.log(res)
      //     const itemCop = cloneDeep(item)
      //     itemCop.children = res
      //     const newValue = cloneDeep(this.value)
      //     newValue[this.level] = itemCop
      //     newValue.splice(this.level + 1)
      //     this.change(newValue)
      //     // 上述操作虽然可以实现功能但是和之前实现功能的方式不太一样

      //     // 同步的时候只需要将 data 内的数据取出来放到 selectedValue 内，两个数据内部的对象地址指向的是同一个地址
      //     // 现在异步了，上面的代码 selectedValue 内的对象内添加了一个 children 属性，但是 data 并没有修改
      //   })
      // }

      // 因为我们决定了要修改 data  所以直接在 cascader 组件内处理了 cascaderitem 组件内还是执行默认的功能就好了
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
  min-width: 100px;
  text-align: center;
  max-height: 300px;
  border: 1px solid #ccc;
  overflow-y: auto;
}
.list-content .item:hover {
  cursor: pointer;
  background-color: rgb(139, 133, 133);
}
</style>