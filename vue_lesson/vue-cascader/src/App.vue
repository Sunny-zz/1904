<template>
  <div>
    <h2>级联选择器组件</h2>
    <Cascader
      :data.sync="data"
      v-if="show"
      v-model="selectedValue"
      :props="defaultProps"
      :load="loadFun"
    />
    <!-- 使用了 v-model 做了简化操作 -->
    <!-- 简化了一下内容 -->
    <!-- :value='selectedValue' @input='(newValue)=> selectedValue= newValue' -->
    <button @click="show = !show">测试</button>
  </div>
</template>
<script>
import Cascader from './components/Cascader'
import fetchData from './api'

export default {
  name: 'App',
  data() {
    return {
      show: true,
      // 我们在 cascader 组件内点击每一级别的时候获取到的对象都需要展示给用户，而且用户还可以设置默认值
      selectedValue: [],
      data: [],
      defaultProps: {
        label: 'label',
        children: 'children'
      }
    }
  },
  components: {
    Cascader
  },
  async created() {
    const res = await fetchData('0')
    // console.log(res)
    this.data = res
  },
  methods: {
    // async handle() {
    //   // console.log('1')
    //   // 用户点击列表内的每一项的时候触发的事件，在此用户可以发送请求获取数据
    //   // 需要知道点击的是哪一个列表内的项获取其 id 根据这个 id 向后台发送请求获取数据
    //   //   [{河北},{秦皇岛}]   每次点击的时候 selectedValue 的最后一项就是当前点击的对象
    //   const { selectedValue } = this
    //   const currentItem = selectedValue[selectedValue.length - 1]
    //   // console.log(this.data)
    //   const res = await fetchData(currentItem.id)
    //   // console.log(res)
    //   // 为什么直接修改了  currentItem ，也就是 selectedValue 内的数据 data 就直接改变了，
    //   // 因为 data 内的某个对象数据经过层层选择(并没有拷贝) 添加到了 selectedValue 内
    //   // 所以修改了 selectedValue 内的对象就相当于修改了 data 内的对象
    //   this.$set(currentItem, 'children', res)
    //   //data  [{label},{label,children},{},{}]

    //   // 以上逻辑必须写在 cascader 组件内
    //   // 组件内操作的话需要用户请求来的数据，做法如下给组件定义一个 load 属性该属性是一个函数
    //   // 这个函数的作用就是用户获取数据，然后将数据传递到组件内部
    // }
    async loadFun(id, resolve) {
      // const { selectedValue } = this
      // console.log(selectedValue)
      // const currentItem = selectedValue[selectedValue.length - 1]
      // console.log(this.data)
      // 之前的操作时请求之前修改了 selectedValue 所以可以从中获取对应的 id，但是这样做的话请求结束之后还得根据请求之后的数据再次更新 selectedValue，所以要简化成一次，那么 id 就不能从 selectedValue 内获取了，需要组件内部传出来
      const res = await fetchData(id)
      resolve(res)
    }
  }
}
</script>
<style></style>
