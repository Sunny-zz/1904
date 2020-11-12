<template>
  <div>
    <h2>级联选择器组件</h2>
    <Cascader
      :data="data"
      v-if="show"
      v-model="selectedValue"
      :props="defaultProps"
    />
    <!-- 使用了 v-model 做了简化操作 -->
    <!-- 简化了一下内容 -->
    <!-- :value='selectedValue' @input='(newValue)=> selectedValue= newValue' -->
    <button @click="show = !show">测试</button>
  </div>
</template>
<script>
import Cascader from './components/Cascader'
export default {
  name: 'App',
  data() {
    return {
      show: true,
      // 我们在 cascader 组件内点击每一级别的时候获取到的对象都需要展示给用户，而且用户还可以设置默认值
      selectedValue: [],
      data: [
        {
          name: '一级 1',
          list: [
            {
              name: '二级 1-1',
              list: [
                {
                  name: '三级 1-1-1'
                }
              ]
            },
            {
              name: '二级 1-2',
              list: [
                {
                  name: '三级 1-2-1'
                }
              ]
            }
          ]
        },
        {
          name: '一级 2',
          list: [
            {
              name: '二级 2-1',
              list: [
                {
                  name: '三级 2-1-1'
                }
              ]
            },
            {
              name: '二级 2-2',
              list: [
                {
                  name: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          name: '一级 3',
          list: [
            {
              name: '二级 3-1',
              list: [
                {
                  name: '三级 3-1-1'
                }
              ]
            },
            {
              name: '二级 3-2',
              list: [
                {
                  name: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          name: '一级 4'
        }
      ],
      defaultProps: {
        label: 'name',
        children: 'list'
      }
    }
  },
  components: {
    Cascader
  }
}
</script>
<style></style>