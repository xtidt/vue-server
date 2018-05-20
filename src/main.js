import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-default/index.css';
import store from './store'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const app = new Vue({
    router,
    store,//全局混入store
    render: h => h(App)
}).$mount('#app')
