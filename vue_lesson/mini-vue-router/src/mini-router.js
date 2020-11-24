// 我们自己的 vue-router

// 创建全局组件   router-link    router-view

// VueRouter 是一个类

// VueRouter 必须有一个 install 方法

// main.js 内引入了 router 那么所有的组件内都有
// $router  指的是 VueRouter 类
// $route
import Home from "./views/Home.vue";
let Vue;
class VueRouter {
  constructor(options) {
    this.options = options;
    // console.log(options);
    // console.log(Vue);

    // 制作一个路由表   {'/':Home,'/about':About}
    // console.log(this.options.routes);

    this.routeMap = this.options.routes.reduce((res, item) => {
      res[item.path] = item.component;
      return res;
    }, {});
    // console.log(this.routeMap);
    // 需要展示的组件
    this.current = null;
    // 由于 current 需要事件修改 所以 router-view 获取不到更新之后的 current，那么就展示不了页面
    // 我们要将 current 做成响应式的数据
    // Vue.util.defineReactive(this.current, "path", "/");
    // 两个事件
    // 进入页面   onload
    // 页面地址栏变化   hashchange
    const self = this;
    window.addEventListener("load", function() {
      console.log(location.hash);
      if (location.hash === "") {
        location.hash = "/";
      }
      self.current = self.routeMap[location.hash.slice(1)];
      console.log(self.current);
    });
    window.addEventListener("hashchange", function() {
      self.current = self.routeMap[location.hash.slice(1)];
      console.log(self.current);
    });
    this.initComponents();
  }

  initComponents() {
    const self = this;
    Vue.component("router-link", {
      render(h) {
        const { to, tag } = this;
        return <tag href={"/#" + to}>{this.$slots.default}</tag>;
      },
      props: {
        to: {
          type: String
        },
        tag: {
          type: String,
          default: "a"
        }
      }
    });
    Vue.component("router-view", {
      render(h) {
        console.log(self.current);
        return h(self.current);
      }
    });
  }
}

VueRouter.install = _Vue => {
  Vue = _Vue;
  // install 方法会接收 Vue 类作为参数，那么在这将 Vue 暴露出去

  // 给 vue 组件做全局配置
  // 这个操作给 Vue 整个 类添加 $router 属性
  // Vue.prototype.$router = 用户创建的路由实例;
  // 当再次 new Vue 的时候里面也有了 $router 这个其实是不对的
  // 使用 mixins 添加 $router 属性
  Vue.mixin({
    beforeCreate() {
      // 所有组件都触发
      // main.js 导入路由之后其实做了一下事情
      // 给所有组件(除了根组件)添加 $router 属性      属性值是 创建好的路由实例
      // 只有根组件的 $options 内添加了 router 之后所有子组件才添加 $router 属性
      // if (this) {
      // }
      // console.log(this.$router);
      if (!this.$options.router) {
        // 子组件
        if (this.$parent.$options.router) {
          this.$router = this.$parent.$options.router;
        } else {
          if (this.$parent.$router) {
            this.$router = this.$parent.$router;
          }
        }
      }
      // 先判断根组件接没接收 router 接收的话 先给自己 一级一级向下传递
      // if (this.$options.router) {
      //   this.$router = this.$options.router;
      // } else {
      //   this.$router = this.$parent && this.$parent.$router;
      // }
    }
  });
  // 创建全局的两个组件
  // Vue.component("router-link", {
  //   render(h) {
  //     const { to, tag } = this;
  //     return <tag href={"/#" + to}>{this.$slots.default}</tag>;
  //   },
  //   props: {
  //     to: {
  //       type: String
  //     },
  //     tag: {
  //       type: String,
  //       default: "a"
  //     }
  //   }
  // });
  // Vue.component("router-view", {
  //   render(h) {
  //     return null;
  //   }
  // });
};

export default VueRouter;

// 类  创建对象的

// class Person {
//   constructor(name, age) {
//     // new 的时候自动触发
//     this.name = name;
//     this.age = age;
//   }
//   say() {
//     console.log("我是" + this.name);
//   }
// }

// // const xiaoHong = new Person("小红", 18);
// // console.log(xiaoHong);
// // xiaoHong.say();

// class Girl extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
// }

// const xiaoHua = new Girl("小花儿", 20);
// console.log(xiaoHua);
