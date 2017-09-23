import VueRouter from "vue-router";
import routerMaps from './routerMaps';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routerMaps
})

export default router;