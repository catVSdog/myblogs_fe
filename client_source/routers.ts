import VueRouter, { RouteConfig } from 'vue-router';
import Layout from './components/Layout.vue';

const routers: RouteConfig[] = [
    {
        path: '/',
        component: Layout,
        name: 'Layout'
    }
];

const router = new VueRouter({
    routes: routers
});

export default router;
