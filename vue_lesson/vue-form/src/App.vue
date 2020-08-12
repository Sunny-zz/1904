<template>
  <div>
    <div>
      <h2>input：text | password 和 textarea</h2>
      <label for="">用户名</label>
      <!-- change 对于 input：text | password 是属于失去焦点事件 -->
      <!-- input 对于 input：text | password 是域的内容发生改变就会触发  -->
      <!-- <input type="text" @input="handleChange" :value="username" /> -->
      <!-- 使用 v-module 简化表单的双向绑定  -->
      <input type="text" v-model="username" />
      <br />
      <label for="">密码</label>
      <!-- "123" -->
      <input type="text" v-model.trim="password" />
      <br />
      <textarea v-model="text"></textarea>
      <br />
      <button @click="handleClick">获取输入的内容</button>
    </div>
    <div>
      <h2>复选框</h2>
      <!-- 单一复选框 -->
      <input type="checkbox" v-model="singleChecked" />
      <br />
      <!-- 一组复选框 -->
      <h3>你喜欢的玩的王者英雄是?</h3>
      <!-- 想要一个选中的结果数组 -->
      虞姬<input type="checkbox" v-model="likeHeros" value="虞姬" />
      <br />
      孙尚香<input type="checkbox" v-model="likeHeros" value="孙尚香" />
      <br />
      小乔<input type="checkbox" v-model="likeHeros" value="小乔" />
      <br />
      吕布<input type="checkbox" v-model="likeHeros" value="吕布" />
      <br />
      <h3>购物车商品列表</h3>
      <!-- 已经有了整套数组，想要修改数组内的某个数据 -->
      <div v-for="goods in goodsArr" :key="goods.id">
        <input type="checkbox" v-model="goods.isChecked" />
        <span>{{ goods.name }}</span>
      </div>
      <button @click="handleClick1">获取选中的</button>
    </div>
    <div>
      <h2>单选按钮 radio 和 选择框 select</h2>
      <!-- radio 选择性别 -->
      <div>
        <span>男</span>
        <input type="radio" v-model="sex" value="男" />
        <br />
        <span>女</span>
        <input type="radio" v-model="sex" value="女" />
        <br />
      </div>
      <div>
        <select v-model="word">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      </div>
      <button @click="handleClick2">获取</button>
    </div>
    <div>
      <h2>表单的修饰符 给 v-model 指令使用</h2>
      <!-- .lazy    v-model.lazy='xxx'  意思是懒加载 默认v-model 在 input:text | password 和 textarea 使用的时候是 域的内容变化就监听去修改data，使用的是 input 事件，而加上了 lazy 之后使用的就是 change 事件，是失去焦点在修改 data -->
      <!-- .number 意思就是直接将相关的 data 转化成数字，默认输入的内容是字符串，如果你想要的结果是数字就可以使用 .numebr 修饰符 -->
      <!-- .trim 去点左右空白 -->
    </div>
  </div>
</template>

<script>
// 组件
// data
// 事件
// props
// 自定义事件
// 条件渲染
// 列表渲染
// 表单
// class 和 style 绑定
export default {
  name: "App",
  data() {
    return {
      username: "张三",
      password: "",
      text: "",
      singleChecked: false,
      likeHeros: ["吕布"],
      goodsArr: [
        {
          id: "11",
          name: "小米",
          price: 1000,
          isChecked: false
        },
        {
          id: "112",
          name: "小米1",
          price: 1000,
          isChecked: false
        },
        {
          id: "113",
          name: "小米2",
          price: 1000,
          isChecked: true
        },
        {
          id: "114",
          name: "小米3",
          price: 1000,
          isChecked: false
        }
      ],
      sex: "男",
      word: "b"
    };
  },
  methods: {
    // handleChange() {
    //   // 将 username 设置成输入的值
    //   // 如何获取输入的内容
    //   // 先获取真实 dom 节点  event.target
    //   // this.username = event.target.value;
    // },
    handleClick() {
      console.log(this.username, this.password, this.text);
    },
    handleClick1() {
      console.log("单选状态-----", this.singleChecked);
      console.log("复选结果-----", this.likeHeros);
      console.log("购物车商品---", this.goodsArr);
    },
    handleClick2() {
      console.log(this.sex);
      console.log(this.word);
    }
  }
};
</script>

<style></style>
