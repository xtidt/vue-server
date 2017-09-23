import routerMaps from './routerMaps';
import VueRouter from "vue-router"

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routerMaps
})

export default router;