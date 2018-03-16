// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'


import InitialPages from './components/InitialPages'
import PropertyAccount from './components/PropertyAccount'
import ModuleManage from './components/ModuleManage'
import ServiceManage from './components/ServiceManage'
import EstateInform from './components/EstateInform'
import ResidentInfo from './components/ResidentInfo'
import PayStandard from './components/PayStandard'
import PayState from './components/PayState'
import ServiceProblem from './components/ServiceProblem'
import SolveProblem from './components/SolveProblem'
import PropertyRegist from './components/PropertyRegist'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import Element from 'element-ui'

Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(Element, { size: 'small' })


// 告诉 vue 使用这个 router(路由)
Vue.use(VueRouter)
// 定义你的 router(路由)
const routes = [
    // 定义应用的根 URL , 主页路由
    { path: '/', component: InitialPages },
    // about 页面路由
    { path: '/PropertyAccount', component: PropertyAccount },
    { path: '/ModuleManage', component: ModuleManage },
    { path: '/ServiceManage', component: ServiceManage },
    { path: '/EstateInform', component: EstateInform },
    { path: '/ResidentInfo', component: ResidentInfo },
    { path: '/PayStandard', component: PayStandard },
    { path: '/PayState', component: PayState },
    { path: '/ServiceProblem', component: ServiceProblem },
    { path: '/SolveProblem', component: SolveProblem },
    { path: '/PropertyRegist', component: PropertyRegist }


    ]

// 创建 router 实例并传递 `routes` 选项
// 也可以在这里传递其他选项
const router = new VueRouter({
  routes, // `routes: routes` 的简写
  mode: 'history'
})

//实例化 vue 实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  // 传入 router 到 vue 实例
  router
}).$mount('#app')// app 上装载 router
