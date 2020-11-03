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
  </div>
</template>
<script>
import MixinDemo from './components/MixinDemo'
import MixinDemo1 from './components/MixinDemo1'    
import CustomDirective from './components/CustomDirective'   
import FilterDemo from './components/FilterDemo'   
export default {
  name: 'App',
  components: {
    MixinDemo,
    MixinDemo1,  
    CustomDirective,
    FilterDemo
  },
};
</script>
<style></style>