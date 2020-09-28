import Vue from "vue";
import { Button, Message, InfiniteScroll, Tree } from "element-ui";

// 因为我们使用的是 element 的按需加载，所以不管是组件还是方法都得使用 use 或者 prototype 设置成全局的
Vue.prototype.$message = Message;
Vue.use(Button);
Vue.use(Tree);
Vue.use(InfiniteScroll);
