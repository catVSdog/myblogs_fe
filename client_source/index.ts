import Vue from 'vue';
import App from './components/App.vue';
import router from './routers';

const app = new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
});

export default app;
