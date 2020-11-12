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
    </div>
  </div>
</template>
<script>
import { clickOutside } from '../directives'
import CascaderItem from './CascaderItem'
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
      console.log('1111')

      this.isVisible = !this.isVisible
    },
    close() {
      this.isVisible = false
    },
    change(newValue) {
      // 这段代码就是修改了 selectedValue 修改成  newValue
      // 相当于在父组件执行  this.selectedValue = newValue
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