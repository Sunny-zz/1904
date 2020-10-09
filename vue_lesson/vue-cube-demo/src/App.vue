<template>
  <div >
   <cube-button :inline='false' @click="handleBtn" icon="cubeic-right">Button</cube-button>
   <cube-button :inline='true' @click="handleBtn" icon="cubeic-right">Button</cube-button>
   <div class="box">
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>
     <div class="a"></div>  
   </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    handleBtn(e) {
      console.log(e);
    }
  },
}
</script>

<style>
  .box{
    width: 100vw;
    border: 1px solid #ccc;
    height: 70vh;
    overflow: auto;
    box-sizing: border-box;
  }
  .box> .a{
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    background-color: #ccc;
  }
</style>
