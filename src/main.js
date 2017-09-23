import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')