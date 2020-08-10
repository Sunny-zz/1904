<template>
  <div>
    <div class="wrap">
      <div class="container" :style="`margin-left: ${ind * -820}px;`">
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/3d7bb5d246a8f0467620abc2f78ebf2f.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/3d7bb5d246a8f0467620abc2f78ebf2f.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/3d7bb5d246a8f0467620abc2f78ebf2f.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/3d7bb5d246a8f0467620abc2f78ebf2f.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/3d7bb5d246a8f0467620abc2f78ebf2f.jpeg"
          alt=""
        />
      </div>
      <div class="list">
        <!-- <button @click="change(0)" :class="ind === 0 ? 'active' : ''">1</button>
      <button @click="change(1)" :class="ind === 1 ? 'active' : ''">2</button>
      <button @click="change(2)" :class="ind === 2 ? 'active' : ''">3</button>
      <button @click="change(3)" :class="ind === 3 ? 'active' : ''">4</button>
      <button @click="change(4)" :class="ind === 4 ? 'active' : ''">5</button> -->
        <!-- 事件修饰符  .native 的作用是直接给组件的根元素的 dom 节点绑定事件  -->
        <!-- 组件标签的属性  -->
        <!-- 1. props -->
        <!-- 2. 自定义事件 -->
        <!-- <Button @click.native="change(4)" text="0" /> -->
        <!-- <Button :x='change' text="0" /> -->
        <!-- 使用 v-on 传递函数 该做法称为自定义事件 ，事件名随便定义-->
        <!-- <Button :isActive="ind === 0" @change="change(0)" text="0" />
        <Button :isActive="ind === 1" @change="change(1)" text="1" />
        <Button :isActive="ind === 2" @change="change(2)" text="2" />
        <Button :isActive="ind === 3" @change="change(3)" text="3" />
        <Button :isActive="ind === 4" @change="change(4)" text="4" /> -->
        <Button
          v-for="(item, index) in 5"
          :key="index"
          @change="change(index)"
          :isActive="ind === index"
          :text="textList[index]"
        />
        <!-- 子组件想要修改父组件的 data  -->
        <!-- data 只能在自己的组件内使用 this.dataName 修改，想要让其他人修改自己组件的 data ，那么需要先在自己组件内定义好修改的方法，然后将该方法传递给其他组件去执行 -->
      </div>
    </div>
    <!-- 列表渲染 将数组类型的数据循环渲染到页面上 -->
    <!-- 使用 v-for 指令, 必须加上key 属性 ,该属性的属性值在当前的 for 内必须唯一 -->
    <!--  -->
    <ul>
      <li v-for="ele in arr" :key="ele">
        <span> {{ ele }} </span>
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in 5" :key="item">{{ item }} --- {{ index }}</li>
    </ul>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "LoopDemo",
  components: {
    Button
  },
  data: function() {
    return {
      // 为什么选择一个 data 不设置两个
      // 因为只要定义了一个 data 那么 vue 就有针对这个 data 做一套虚拟 dom 流程
      ind: 0,
      arr: [1, 3, 3, 4, 5],
      textList: ["张", "网", "张", "网", "张"]
    };
  },
  methods: {
    change(index) {
      this.ind = index;
    }
  }
};
</script>

<style>
.wrap {
  width: 820px;
  height: 380px;
  overflow: hidden;
}
.container {
  width: calc(820px * 5);
  transition: margin-left 0.5s;
}
.container > img {
  display: block;
  float: left;
}
.list {
  width: 100%;
  height: 40px;
}
</style>
