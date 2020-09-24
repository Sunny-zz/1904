import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

// Vue.use(ElementUI);

import { Button, Switch, Link, Message } from "element-ui";

// Vue.component(Button.name, Button);
// Vue.component(Switch.name, Switch);
/* 或写为*/
Vue.use(Button);
Vue.use(Switch);
Vue.use(Link);
// 将 Message 方法 添加到整个 vue 的原型对象内，也就是整个项目内都可以使用  this.$message 访问

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
