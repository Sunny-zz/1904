const helloMixin = {
  // 该对象内的格式和组件的导出对象格式一样

  // 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”
  // 恰当的方式
  // 1. data  以组件本身为主
  // 2. 生命周期函数 自动合并
  // 3. methods、components 和 directives 以组件本身为主
  data () {
    return {
      num: 100
    }
  },
  created () {
    // console.log('mixin 内的 created hello');
    // console.log('判断用户是否登录了');
    // login 代表判断的结果
    // console.log(this);
    const login = true
    if (login) {
      // console.log('一切正常');
    } else {
      // console.log('跳转到登录页');
    }
  }
}
export default helloMixin