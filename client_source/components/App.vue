<template>
    <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { Container } from 'element-ui';
import VueRouter from 'vue-router';

Vue.use(Container);
Vue.use(VueRouter);

export default {
    name: 'App'
};
</script>
