<template>
    <post-container></post-container>
</template>

<script lang="ts">
import Vue from 'vue';
import PostContainer from './post-container.vue';

export default Vue.extend({
    name: 'Main',
    metaInfo: {
        title: 'mains'
    },
    components: {
        'post-container': PostContainer
    },
    data: function() {
        return {};
    }
});
</script>
