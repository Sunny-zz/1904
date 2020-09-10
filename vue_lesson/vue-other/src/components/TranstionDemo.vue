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
      <p
        class="text2"
        v-if="show1"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TranstionDemo',
  data() {
    return {
      show: true,
      show1: true
    }
  }
}
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
</style>