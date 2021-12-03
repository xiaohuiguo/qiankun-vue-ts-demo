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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: () => import('../components/hello-world/hello-world.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
