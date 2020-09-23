<template>
  <div>
    <h1>element-ui</h1>
    <el-button type="success">成功按钮</el-button>
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
  </div>
</template>
<script>
import Button from "./components/Button";
// import Container from "./components/Container";
export default {
  name: "App",
  components: {
    Button
    // Container
  },
  data() {
    return {
      bool: true,
      isActive: false
    };
  },
  updated() {
    console.log("修改了");
  }
};
</script>
<style></style>
