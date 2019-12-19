import Vue from 'vue';
import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    data: {},
    render: createElement => createElement(App),
});

export default app;
