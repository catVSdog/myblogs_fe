import Vue from 'vue';
import App from './components/app.vue';
import router from './routers';
import apolloProvider from './apollo-config';

const app = new Vue({
    el: '#app',
    router,
    apolloProvider,
    render: (h) => h(App)
});

export default app;
