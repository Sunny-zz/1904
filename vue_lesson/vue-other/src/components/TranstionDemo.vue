<template>
  <div>
    <h2>官方提供了 transition 组件</h2>
    <div>
      <h3>过渡</h3>
      <button @click="show = !show">切换</button>
      <transition
        appear
        name="fade"
        appear-class="rotate-enter"
        appear-active-class="rotate-active"
      >
        <p class="text1" v-if="show">hello</p>
      </transition>
    </div>
    <h3>动画</h3>
    <button @click="show1 = !show1">切换</button>
    <transition appear name="bounce">
      <p class="text2" v-if="show1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
    <h3>多个元素的过渡效果</h3>
    <transition name="fade1" mode="out-in">
      <!-- <button v-if="!state" @click="state = true" key="on">
        on
      </button>
      <button v-else @click="state = false" key="off">
        off
      </button> -->
      <!-- 上述写法的重写 -->
      <!-- 不需要使用 v-if 控制而是使用 :key 控制 -->
      <button @click="state = !state" :key="state">
        {{ state ? "off" : "on" }}
      </button>
      <!-- 当你点击按钮的时候实现的动画效果按钮先渐渐消失然后在渐渐出现  -->
      <!-- 按照之前的过渡效果去设置的话，两个元素会同时执行动画，如果希望一个元素效执行效果，然后另外一个在执行的话需要给 transition 加上 mode 属性 -->
    </transition>
    <h3>列表的进入和离开</h3>
    <!-- 需要使用 transition-group 组件 -->
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <button @click="shuffle">shuffle</button>
    <transition-group class="list" name="list" tag="ul">
      <li :class="num + '0'" v-for="num in listNum" :key="num">
        {{ num }}
      </li>
    </transition-group>
  </div>
</template>
<script>
import _ from "loadsh";
export default {
  name: "TranstionDemo",
  data() {
    return {
      show: true,
      show1: true,
      state: true,
      listNum: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      nextNum: 9
    };
  },
  methods: {
    add() {
      this.listNum.push(this.nextNum);
      this.nextNum++;
    },
    remove() {
      this.listNum.splice(Math.floor(Math.random() * this.listNum.length), 1);
    },
    shuffle() {
      this.listNum = _.shuffle(this.listNum);
    }
  }
};
</script>
<style>
/* v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。 */
/* 离开之前就是默认样子 ，以及出现结束的默认样子*/
.text1 {
  color: red;
  opacity: 1;
  margin-left: 100px;
  text-align: center;
  width: 40px;
  border: 1px solid red;
}
/* 渐入渐出效果 */
/* 离开过程中,和出现的过程中 */
/* .fade-leave-active,
.fade-enter-active {
  transition: opacity 5s linear;
} */
/* 离开结束 出现的开始*/
/* .fade-leave-to,
.fade-enter {
  opacity: 0;
} */
/* 左进入右消失 */

.fade-leave-active,
.fade-enter-active {
  transition: opacity 1s linear, transform 1s linear;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter {
  opacity: 0;
  transform: translateX(-100px);
}
/* 自定义的 appear 开始出现过程中 */
.rotate-active {
  transition: transform 1s;
}
/* 自定义的 appear 开始出现 */
.rotate-enter {
  transform: rotate(3600deg);
}
/* 上述实现的都是过渡效果  开始 ---> 结束 */
/* 动画效果效果 开始 ----> 各种调整 ----> 结束 */
/* 动画效果只需要在不同的切换过程中执行不同的动画即可 */
.bounce-enter-active {
  /* 在进入过程中执行 动画 */
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  /* 在离开的过程中执行动画 */
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade1-leave-active,
.fade1-enter-active {
  transition: opacity 1s linear;
}
.fade1-leave-to,
.fade1-enter {
  opacity: 0;
}
.list {
  margin-left: 200px;
}
.list-leave-active,
.list-enter-active {
  transition: all 1s linear;
}
.list-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.list-enter {
  opacity: 0;
  transform: translateX(100px);
}
/* 当元素位移的时候 */
.list-move {
  transition: transform 1s;
}
</style>
