
const clickFun = (el, binding) => function (e) {
  // console.log('整个文档的点击事件触发')
  if (el === e.target || el.contains(e.target)) {
    return;
  } else {
    binding.value();
  }
}
let fun = null
export const clickOutside = {
  inserted (el, binding) {
    fun = clickFun(el, binding)
    document.addEventListener("click", fun);
  },
  unbind () {
    // 解除 document 的 click 事件
    // 当 cascader 组件销毁的时候，指令的 unbind 触发 
    // alert(1)
    document.removeEventListener('click', fun)
  }
};
