<template>
  <div class="flex-demo1">
    <header></header>
    <section class="main">
      <!-- 占剩余的屏幕高度 ，出现滚动条-->
      <div class="main-wrap">
        <!-- 很大 -->
        <div class="top">我是最顶端</div>
        <div class="bottom">我是最底端</div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: 'FlexDemo1'
}
</script>
<style lang='scss' scoped>
.flex-demo1 {
  width: 375px;
  height: 667px;
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 40px;
    background-color: teal;
    flex-shrink: 0;
  }
  .main {
    width: 100%;
    background-color: hotpink;
    flex-grow: 1;
    overflow: auto;
    .main-wrap {
      height: 2000px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  footer {
    width: 100%;
    height: 50px;
    background-color: #ccc;
    flex-shrink: 0;
  }
}
</style>