import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 懒加载
    component: ()=> import('@/views/About')
  }
]


const router = new VueRouter({
  mode:'hash',
  routes
})

export default router