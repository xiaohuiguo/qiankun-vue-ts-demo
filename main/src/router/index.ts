import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueRouterPush:any = Router.prototype.push
Router.prototype.push = function push (to:any) {
  return VueRouterPush.call(this, to).catch((err:any) => err)
}

const routes = [
  {
        path: '/',
        redirect: 'gernal'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/gernal',
    name: 'Gernal',
    component: () => import('../views/Gernal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
