let Vue;
const forEach = (obj, callback) =>
  Object.keys(obj).forEach(key => callback(key, obj[key]));
class Store {
  constructor(options) {
    this.getters = {};
    this._vm = new Vue({
      data: {
        state: options.state
      }
    });
    const { getters } = options;
    if (getters) {
      Object.keys(getters).forEach(key => {
        Object.defineProperty(this.getters, key, {
          // 定义getters
          get: () => getters[key](this.state)
        });
      });
    }
    this.mutations = {};
    const { mutations } = options;
    if (mutations) {
      forEach(mutations, (key, value) => {
        this.mutations[key] = () => {
          value.call(this, this.state);
        };
      });
    }
    const { actions } = options;
    if (actions) {
      forEach(actions, (key, value) => {
        this.actions[key] = () => {
          value.call(this, this);
        };
      });
    }
  }

  get state() {
    return this._vm.state;
  }

  commit = type => {
    this.mutations(this, type);
  };

  dispath = type => {
    this.actions(this, type);
  };
}
const install = _Vue => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 组件加载是深度优先
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};
export { install, Store };
