import VueRouter, { RouteConfig } from 'vue-router';
import Aside from './components/aside.vue';
import Main from './components/main.vue';
import Header from './components/header.vue';
import PostLayout from './components/post-layout.vue';
import Welcome from './components/welcome.vue';
import TestComponent from './components/post-container.vue';

const routers: RouteConfig[] = [
    {
        path: '/posts/',
        component: PostLayout,
        children: [
            {
                path: '',
                components: {
                    header: Header,
                    aside: Aside,
                    main: Main
                }
            }
        ]
    },
    {
        path: '/test/',
        name: 'test',
        component: TestComponent
    },
    {
        path: '',
        name: 'welcome',
        component: Welcome
    }
];

const router = new VueRouter({
    routes: routers
});

export default router;
