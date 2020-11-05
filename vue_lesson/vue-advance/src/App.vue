<template>
  <div>
    <h1>vue 的进阶阶段</h1>
    <MixinDemo />
    <MixinDemo1 />
    <hr>
    <CustomDirective />
    <br>
    <hr>
    <FilterDemo />
    <hr>
    <UseDemo />
    <hr>
    <!-- <Title :level='3' >hello world</Title> -->
    <Title :level='2'>
      <!-- <template #text>
        <a href="#">hello11 world</a>
      </template> -->
      hello world
    </Title>
    <hr>
    <ScopedSlotDemo >
      <template v-slot:default="{obj}">
        <!-- 父组件内使用 v-slot:default='slotProps' -->
        <!-- slotProps 接收子组件传递的插槽属性  -->
        <span>{{obj.name}}</span>
      </template>
    </ScopedSlotDemo>
    <!-- 独占默认插槽简写 -->
    <!-- <ScopedSlotDemo v-slot:default="slotProps">
        <span>{{slotProps.obj.name}}</span>
    </ScopedSlotDemo> -->
  </div>
</template>
<script>
import MixinDemo from './components/MixinDemo'
import MixinDemo1 from './components/MixinDemo1'    
import CustomDirective from './components/CustomDirective'   
import FilterDemo from './components/FilterDemo'  
import ScopedSlotDemo from './components/ScopedSlotDemo'  
// import Title from './components/Title' 
// import Title from './components/title'
export default {
  name: 'App',
  components: {
    MixinDemo,
    MixinDemo1,  
    CustomDirective,
    FilterDemo,
    ScopedSlotDemo
    // Title
  },
  created () {
    console.log(this.$http)
    console.log(this.$xx)
  },
};
</script>
<style></style>