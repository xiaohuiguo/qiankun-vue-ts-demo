import './public-path.ts'
import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route } from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let router = null
let instance: any = null
const _window: any = window

function render ({props, routerBase}: any = {}) {
  router = new VueRouter({
    // 子模块是history路由时，处理basi url
    base: _window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(props ? props.querySelector('#app') : '#app')
}

// 本地调试
if (!_window.__POWERED_BY_QIANKUN__) {
  render()
}

// 导出生命周期
export async function bootstrap () {
  console.log('应用2启动')
}

export async function mount (props: any) {
  console.log('应用2挂载', props)
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
