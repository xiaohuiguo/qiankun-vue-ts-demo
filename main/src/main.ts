import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

import {environment} from "@/environment/environment";

// 组件总的样式
import '@/assets/sass/index.scss';

// 渲染主应用, #app为主应用根元素
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 子应用端口
const MicroAppsPort: any = {
    VUE_APP_SUB_ONE: 8081,
    VUE_APP_SUB_TWO: 8082
}
function getEntry(name: any) {
    const entryUrl = '//' + environment['host'] + ':';
    return entryUrl + MicroAppsPort[name] + '/'
}
// 构建子应用, #subapp-viewport为子应用容器
const appsRouter: any = [
    {
        name: 'subone',
        entry: getEntry('VUE_APP_SUB_ONE'),
        activeRule: '/subone',
    },
    {
        name: 'subtwo',
        entry: getEntry('VUE_APP_SUB_TWO'),
        activeRule: '/subtwo',
    }
]
const microApps: any = appsRouter.map((item: any) => {
    return {
        ...item,
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
            window: window // 保持父子公用同一个window
        }
    }
});

// 注册子应用
registerMicroApps(microApps);

// 启动微服务
start();
