<template>
    <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { Container, Footer, Main, Header, Aside } from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Container);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(VueRouter);

export default {
    name: 'App'
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
</style>
