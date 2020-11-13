<template>
  <div class="cascader-wrap" v-click-outside="close">
    <div class="cascader-title" @click="toggle">
      <span>{{ showValue }}</span>
    </div>

    <div v-if="isVisible" class="cascader-content">
      <!-- <div class="content-list">
        <div
          @click="currentItem = item"
          v-for="(item, index) in data"
          :key="index"
        >
          {{ item.label }}
        </div>
      </div> -->
      <!-- <div class="content-list" v-if="listData.length">
        <div v-for="(item, index) in listData" :key="index">
          {{ item.label }}
        </div>
      </div> -->
      <CascaderItem
        :listData="data"
        v-if="data.length"
        :change="change"
        :value="value"
        :level="level"
        :props="props"
      />
      <div v-else>稍等</div>
    </div>
  </div>
</template>
<script>
import { clickOutside } from '../directives'
import CascaderItem from './CascaderItem'
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'Cascader',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => ({
        lebel: 'label',
        children: 'children'
      })
    },
    load: {
      type: Function
    }
  },
  data() {
    return {
      // currentItem: null,
      isVisible: false,
      level: 0
    }
  },
  computed: {
    // listData() {
    //   const { currentItem } = this
    //   return currentItem && currentItem.children ? currentItem.children : []
    // }
    showValue() {
      return this.value.map((item) => item[this.props.label]).join('/')
    }
  },
  components: {
    CascaderItem
  },
  directives: {
    clickOutside
    // 比较常见的 click-outside 指令
    // clickOutside: {
    //   inserted(el, bingding) {
    //     document.addEventListener('click', function (e) {
    //       // console.log(e)
    //       if (el === e.target || el.contains(e.target)) {
    //         return
    //       } else {
    //         bingding.value()
    //       }
    //     })
    //   }
    // }
  },
  // created() {
  //   console.log(document.querySelector('body'))
  // },
  mounted() {
    // 给 body 绑定点击事件
    // addEventListener 绑定事件可以绑定多次同类型事件，而且 addEventListener 绑定的事件可以使用 removeEventListener 解绑
    // const that = this
    // document.addEventListener('click', function (e) {
    //   // console.log(e)
    //   const el = e.target
    //   const wrap = document.querySelector('.cascader-wrap')
    //   if (el === wrap || wrap.contains(el)) {
    //     return
    //   } else {
    //     that.close()
    //   }
    // })
    // click-outside
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible
    },
    close() {
      this.isVisible = false
    },
    change(newValue) {
      // 这段代码就是修改了 selectedValue 修改成  newValue
      // 相当于在父组件执行  this.selectedValue = newValue
      // 在这里接收用户的请求数据修改 data ，data 变 selectedValue 就会跟着改变
      const id = newValue[newValue.length - 1].id
      this.load(id, (res) => {
        // 修改 data
        // [{label:'北京'},{label:'河北',children: res},{label:'上海'},{label:'黑龙江'}]
        const newData = cloneDeep(this.data)
        // console.log(newData)
        // newData.find((item) => item.id === id).children = res
        // newData 是一个二叉树数据 我们现在已知一个 id 想要在树中查找到 id 匹配的那一个
        // 深度遍历  广度遍历
        // [{},{children: [{},{}]},{}]
        let stack = [...newData]
        // stack 可以认为是一个队列，每次需要检查的数据一次排队
        let currentItem
        // currentItem 是每次队列内查到的那一项
        for (let i = 0; i < stack.length; i++) {
          currentItem = stack[i]
          if (currentItem.id !== id) {
            if (currentItem.children) {
              // 当该项没匹配成功并且里面存在 children 的话继续将其 children 放入队列内
              stack.push(...currentItem.children)
              // concat 方法不会修改原数组，所以采用了 push
            }
          } else {
            // 当找到了匹配的结束 for 循环
            break
          }
        }
        // 队列全部查询完毕之后  currentItem 肯定就是需要的那一个，然后更新 data 即可
        if (currentItem) {
          currentItem.children = res
          this.$emit('update:data', newData)
        }
      })
      this.$emit('input', newValue)
    }
  }
}
</script>
<style>
.cascader-wrap {
  /* border: 1px solid red; */
}
.cascader-title {
  width: 1000px;
  min-height: 30px;
  border: 2px solid #ccc;
  user-select: none;
}
</style>