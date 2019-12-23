import VueRouter, { RouteConfig } from 'vue-router';
import Layout from './components/Layout.vue';

const routers: RouteConfig[] = [
    {
        path: '/z',
        component: Layout,
        name: 'Layout'
    },
    {
        path: '/main'
    }
];

const router = new VueRouter({
    routers
});

export default router;
