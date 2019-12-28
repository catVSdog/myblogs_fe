import VueRouter, { RouteConfig } from 'vue-router';
import LeftAaide from './components/left-aside.vue';
import Main from './components/main.vue';
import RightAside from './components/right-aside.vue';

const routers: RouteConfig[] = [
    {
        path: '',
        components: {
            left: LeftAaide,
            main: Main,
            right: RightAside
        }
    }
];

const router = new VueRouter({
    routes: routers
});

export default router;
