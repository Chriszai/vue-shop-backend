import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home', component: home }
  ]
})
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // to 表示将要访问的函数
  // from 代表从哪个路径跳转而来
  // next() 放行 next('./login) 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (tokenStr == null) return next('/login')
  next()
})
export default router
