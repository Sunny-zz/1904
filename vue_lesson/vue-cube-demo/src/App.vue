<template>
  <div>
    <cube-button :inline="false" @click="handleBtn" icon="cubeic-right"
      >Button</cube-button
    >
    <cube-button :inline="true" @click="handleBtn" icon="cubeic-right"
      >Button</cube-button
    >
    <!-- 默认的竖向滚动条，会根据 data 设置成 ul li  -->
    <!-- <div class="box">
      <cube-scroll
        ref="scroll"
        :data="items">
      </cube-scroll>
   </div> -->
    <!-- 自定义竖向滚动条内的列表内容,给 scroll 组件传递插槽 -->
    <div class="box">
      <cube-scroll
        ref="scroll"
        :data="comments"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        :options="{
          pullDownRefresh: true,
          pullUpLoad: {
            txt: {
              more: '加载更多',
              noMore: '我是有底线的'
            }
          }
        }"
      >
        <div class="comment-list">
          <div
            class="comment-item"
            v-for="(item, index) in comments"
            :key="index"
          >
            <span>{{ item.author }}</span> : <span>{{ item.text }}</span>
          </div>
        </div>
        <!-- 自定义下拉刷新动画的插槽 自己参照官方网站的例子能跑一个自定制的下拉动画即可 -->
        <!-- <template v-if="customPullDown" slot="pulldown" slot-scope="props">
          <div class="cube-pulldown-wrapper">
            <span class="load before-trigger" @click="load(props)"
              >查看更多</span
            >
            <span class="load after-trigger" @click="load(props)">加载中</span>
          </div>
        </template> -->
      </cube-scroll>
    </div>
  </div>
</template>

<script>
// 主要 vue ui 库
// pc  element-ui  iview  antd ...
// 移动端 cube-ui  mint-ui  ...
// 数据可视化

import _ from 'lodash'

export default {
  name: 'App',
  data() {
    return {
      // items: [1,2,3,4,5,6,7,8,9,10,11,12,13]
      // customPullDown: false,
      isLoading: false,
      comments: [
        {
          id: 1,
          text: '1',
          author: 'aaa'
        },
        {
          id: 2,
          text: '2',
          author: 'bbb'
        },
        {
          id: 3,
          text: '3',
          author: 'aaa'
        },
        {
          id: 4,
          text: '4',
          author: 'aaa'
        },
        {
          id: 5,
          text: '5',
          author: 'aaa'
        },
        {
          id: 6,
          text: '6',
          author: 'aaa'
        },
        {
          id: 7,
          text: '7',
          author: 'aaa'
        },
        {
          id: 8,
          text: '8',
          author: 'aaa'
        },
        {
          id: 9,
          text: '9',
          author: 'aaa'
        },
        {
          id: 10,
          text: '10',
          author: 'aaa'
        }
      ]
    }
  },
  methods: {
    handleBtn(e) {
      console.log(e)
    },
    onPullingDown() {
      console.log('下拉事件触发了')
      // 实现下拉刷新  随机调整数组内的内容的顺序
      // this.customPullDown = true;
      setTimeout(() => {
        // 当 comments 被修改之后下拉刷新成功，加载动画自动停止,前提是 comments 写在了 scroll 组件内的 data 属性
        this.comments = _.shuffle(this.comments)
        // this.customPullDown = false;
      }, 20000)
    },
    onPullingUp() {
      // console.log("上拉事件触发了");
      if (!this.isLoading) {
        this.isLoading = true
        // console.log(this.$refs.scroll);
        setTimeout(() => {
          // 当请求回来没有新的数据了，那么就无更新 comments 无法更新 comments 会导致下拉的动画不会结束，
          // 需要手动使用 scroll 组件的 forceUpdate 方法停止加载动画
          if (this.comments.length >= 40) {
            this.$refs.scroll.forceUpdate()
            console.log('无法更新数据')
          } else {
            this.comments = [...this.comments, ...this.comments.slice(0, 5)]
          }
          this.isLoading = false
        }, 1000)
      }
    },
    load(obj) {
      console.log(obj)
    }
  }
}
</script>

<style>
.box {
  width: 100vw;
  border: 1px solid #ccc;
  height: 350px;
  box-sizing: border-box;
}
.comment-item {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
.load {
  color: red;
  font-size: 20px;
}
</style>
