import Vue from 'vue';
import App from './components/App.vue';
import router from './routers';
import apolloProvider from './apolloConfig';

const app = new Vue({
    el: '#app',
    router,
    apolloProvider,
    render: (h) => h(App)
});

export default app;
