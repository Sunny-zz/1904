<template>
  <div>
    <h2>级联选择器组件</h2>
    <Cascader :data="data" v-if="show" />
    <button @click="show = !show">测试</button>
    <CascaderItem />
  </div>
</template>
<script>
import Cascader from './components/Cascader'
import CascaderItem from './components/CascaderItem'
export default {
  name: 'App',
  data() {
    return {
      show: true,
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            },
            {
              label: '二级 1-2',
              children: [
                {
                  label: '三级 1-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 4'
        }
      ]
    }
  },
  components: {
    Cascader,
    CascaderItem
  }
}
</script>
<style></style>