<template>
  <div>
    <h1>element-ui</h1>
    <el-button type="success" :plain="false" icon="el-icon-check"
      >成功</el-button
    >

    <br />
    <el-switch v-model="bool" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <el-link type="info">信息链接</el-link>
    <br />
    <!-- 这种父组件向子组件传递 称为 slot （插槽） -->
    <!-- <Button :value="isActive" @input="函数;">哈哈哈</Button> -->
    <!-- v-model 指令写在了组件身上，就相当于将 :value  和 @input 事件简写了  而且 @input 事件就是修改 value 的 -->
    <Button v-model="isActive">哈哈哈</Button>
    <!-- <h2>测试 slot</h2> -->
    <!-- <Container> -->
    <!-- 具名插槽 -->
    <!-- v-slot:list 可以简写成 #list -->
    <!-- <template #list> -->
    <!-- <div class="list">列表</div> -->
    <!-- </template> -->
    <!-- <template v-slot:sidebar>
        <div class="list">列表</div>
      </template> -->
    <!-- 默认插槽 -->
    <!-- <div class="sidebar">侧边导航</div> -->
    <!-- </Container>  -->

    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- element-ui 的组件可以直接使用标签的原生事件名绑定事件 -->
    <el-button
      @click="getData"
      type="success"
      :loading="isLoading"
      :plain="false"
      icon="el-icon-search"
      class="btn1"
    >
      {{ isLoading ? '加载中...' : '搜索' }}
    </el-button>
    <div v-if="dataArr.length">
      <h2>此处展示列表</h2>
    </div>
    <div v-if="isLoading">请稍等...</div>

    <!-- 消息提示  element-ui 内的非组件使用方法 -->
    <div>
      <el-button :plain="true" @click="success">成功</el-button>
      <el-button :plain="true">警告</el-button>
      <el-button :plain="true">消息</el-button>
      <el-button :plain="true">错误</el-button>
    </div>
  </div>
</template>
<script>
import Button from './components/Button'
// import { Message } from 'element-ui'
// 此时导入的是一个 Message 函数
// import Container from "./components/Container";
export default {
  name: 'App',
  components: {
    Button
    // Container
  },
  data() {
    return {
      bool: true,
      isActive: false,
      dataArr: [],
      isLoading: false
    }
  },
  updated() {
    console.log('修改了')
  },
  methods: {
    getData() {
      this.isLoading = true
      this.dataArr = []
      setTimeout(() => {
        this.isLoading = false
        this.dataArr = [1, 2, 3]
      }, 1000)
    },
    success() {
      // console.log(this)
      // Message({
      //   message: '恭喜你，这是一条成功消息',
      //   type: 'success'
      // })
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 1000
      })
    }
  }
}
</script>
<style>
</style>
