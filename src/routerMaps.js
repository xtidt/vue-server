import notice from './modules/index/main.vue'
import gotohome from './modules/home/main.vue'
import getmethod from './modules/get/main.vue'
import postmethod from './modules/post/main.vue'
import delmethod from './modules/del/main.vue'
import loadpostcss from './modules/loadpostcss/main.vue'

const routerMaps = [{
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

export default routerMaps;