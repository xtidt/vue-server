import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

import notice from './modules/index/main.vue'
import gotohome from './modules/home/main.vue'
import getmethod from './modules/get/main.vue'
import postmethod from './modules/post/main.vue'
import delmethod from './modules/del/main.vue'
import loadpostcss from './modules/loadpostcss/main.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/home',
            component: gotohome
        },

        {
            path: '/notice',
            component: notice
        },

        {
            path: '/getmethod',
            component: getmethod
        },

        {
            path: '/postmethod',
            component: postmethod
        },

        {
            path: '/delmethod',
            component: delmethod
        },

        {
            path: '/loadpostcss',
            component: loadpostcss
        }
    ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')