<template>
    <h1>
        <p>hello</p>
        world
    </h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Main',
    data: function() {
        return { count: 0, world: 'world' };
    },
    methods: {
        load: function() {
            this.count += 2;
        }
    }
});
</script>
