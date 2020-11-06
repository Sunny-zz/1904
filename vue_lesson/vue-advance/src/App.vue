<template>
  <div>
    <h1>vue 的进阶阶段</h1>
    <MixinDemo />
    <MixinDemo1 />
    <hr />
    <CustomDirective />
    <br />
    <hr />
    <FilterDemo />
    <hr />
    <UseDemo />
    <hr />
    <!-- <Title :level='3' >hello world</Title> -->
    <Title :level="2">
      <!-- <template #text>
        <a href="#">hello11 world</a>
      </template> -->
      hello world
    </Title>
    <br />
    <Title1 :level="1"> hello world11111 </Title1>
    <hr />
    <ScopedSlotDemo>
      <template v-slot:default="{ obj }">
        <!-- 父组件内使用 v-slot:default='slotProps' -->
        <!-- slotProps 接收子组件传递的插槽属性  -->
        <span>{{ obj.name }}</span>
      </template>
    </ScopedSlotDemo>
    <!-- 独占默认插槽简写 -->
    <!-- <ScopedSlotDemo v-slot:default="slotProps">
        <span>{{slotProps.obj.name}}</span>
    </ScopedSlotDemo> -->
    <hr />
    <br />
    <h3>render函数方式创建自定义列表内容</h3>
    <List :arr="['香蕉', '苹果', '大鸭梨']" :render="render"></List>
    <!-- render(h,item){
      return <h1>{item}</h1>
    } -->
    <h3>作用于插槽方式创建自定义列表内容</h3>
    <List2 :data="['香蕉', '苹果', '大鸭梨']">
      <template v-slot="{ item }">
        <h2>{{ item }}</h2>
      </template>
    </List2>
    <hr />
    <h3>使用 iview 制作可编辑表格</h3>
    <IViewTable />
  </div>
</template>
<script>
import MixinDemo from './components/MixinDemo'
import MixinDemo1 from './components/MixinDemo1'
import CustomDirective from './components/CustomDirective'
import FilterDemo from './components/FilterDemo'
import ScopedSlotDemo from './components/ScopedSlotDemo'
import Title1 from './components/titleComponent1'
import List from './components/List'
import List2 from './components/List2'
import IViewTable from './components/IViewTable'
// import Title from './components/Title'
// import Title from './components/title'
export default {
  name: 'App',
  components: {
    MixinDemo,
    MixinDemo1,
    CustomDirective,
    FilterDemo,
    ScopedSlotDemo,
    Title1,
    List,
    List2,
    IViewTable
    // Title
  },
  created() {
    console.log(this.$http)
    console.log(this.$xx)
  },
  methods: {
    render(h, item) {
      // 下面是 jsx 语法默认不支持 因为不是函数组件内部的 render 函数,所以需要函数组件内传递过来 h
      return <h1>{item}</h1>
    }
  }
}
</script>
<style></style>
