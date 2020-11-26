// 我们自己的 vue-router

// 创建全局组件   router-link    router-view

// VueRouter 是一个类

// VueRouter 必须有一个 install 方法

// main.js 内引入了 router 那么所有的组件内都有
// $router  指的是 VueRouter 类
// $route

let Vue;
class VueRouter {
  constructor(options) {
    this.options = options;
    // 需要动态展示的组件
    // Vue.observable({count: 0})
    // 根据页面地址的变化找到路由表中对应的组件
    this.currentPath = Vue.observable({ path: "/" });
    this.init();
  }
  init() {
    this.initEvents();
    this.initRouteMap();
    this.initComponents();
  }
  initRouteMap() {
    // 制作一个路由表   {'/':Home,'/about':About}
    // 优化  从数组的查找变成对象的属性
    this.routeMap = this.options.routes.reduce((res, item) => {
      res[item.path] = item.component;
      return res;
    }, {});
  }
  initEvents() {
    // 两个事件
    // 进入页面   onload
    // 页面地址栏变化   hashchange
    const self = this;
    window.addEventListener("load", function() {
      //刷新页面或者刚进入页面的时候
      // http://localhost:8080   http://localhost:8080/#/ --->  http://localhost:8080/#/
      // http://localhost:8080/#/about   正常
      // http://localhost:8080/about
      const path = window.location.hash;
      console.log(path);
      if (path === "" || path === "#/") {
        window.location.hash = "/";
      } else {
        self.currentPath.path = path.slice(1);
      }
    });
    window.addEventListener("hashchange", function() {
      self.currentPath.path = window.location.hash.slice(1);
    });
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
        return h(self.routeMap[self.currentPath.path]);
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
      // console.log(this);

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
