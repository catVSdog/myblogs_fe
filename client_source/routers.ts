import VueRouter, { RouteConfig } from 'vue-router';
import Layout from './components/Layout.vue';

const routers: RouteConfig[] = [
    {
        path: '/z',
        component: Layout,
        name: 'Layout'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: routers
});

export default router;
