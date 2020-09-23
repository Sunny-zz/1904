import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

// Vue.use(ElementUI);

import { Button, Switch, Link } from "element-ui";

// Vue.component(Button.name, Button);
// Vue.component(Switch.name, Switch);
/* 或写为*/
Vue.use(Button);
Vue.use(Switch);
Vue.use(Link);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
