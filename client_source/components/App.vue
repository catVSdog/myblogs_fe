<template>
    <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { Container } from 'element-ui';

Vue.use(Container);

export default {
    name: 'App'
};
</script>
