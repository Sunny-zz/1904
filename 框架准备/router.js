let Vue;
class VueRouter {
  constructor(routeMap) {
    const { routes } = routeMap;
    // 映射路由表
    this.routeMap = routes.reduce((memo, route) => {
      memo[route.path] = route.component;
      return memo;
    }, {});
    Vue.util.defineReactive((this.route = {}), "path", "/");
    window.addEventListener("load", () => {
      // 页面加载的时候跳转
      location.hash ? "" : (location.hash = "/");
    });
    window.addEventListener("hashchange", () => {
      // hash更新
      this.route.path = location.hash.slice(1);
    });
  }
}
VueRouter.install = function (_Vue) {
  // 提供一个install方法
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._router = this.$options.router;
      } else {
        this._router = this.$parent && this.$parent._router;
      }
      // 给每个实例添加_router
      Object.defineProperty(this, "$route", {
        value: {
          route: this._router.route // 增加$route属性
        }
      });
      // 定义路由两大组件
      Vue.component("router-link", {
        props: {
          to: String
        },
        render(h) {
          // 获取router-link
          return <a href={`#${this.to}`}>{this.$slots.default}</a>;
        }
      });
      Vue.component("router-view", {
        // 显示对应的组件
        render(h) {
          return h(this._router.routeMap[this.$route.route.path]);
        }
      });
    }
  });
};
export default VueRouter;
