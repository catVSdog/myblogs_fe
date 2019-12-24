import VueRouter, { RouteConfig } from 'vue-router';
import Layout from './components/Layout.vue';
import leftAside from './components/LeftAside.vue';
import master from './components/Master.vue';
import rightAside from './components/RightAside.vue';

const routers: RouteConfig[] = [
    {
        path: '',
        component: Layout,
        name: 'Layout',
        children: [
            {
                path: '',
                components: {
                    leftAside: leftAside,
                    master: master,
                    rightAside: rightAside
                }
            }
        ]
    }
];

const router = new VueRouter({
    routes: routers
});

export default router;
