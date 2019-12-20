<template>
    <h1> hello {{ msg }}</h1>
</template>


<script lang="ts">
import Vue from 'vue';

export default  Vue.extend({
    data() {
        return {
            msg: 'vue'
        }
    }
})
</script>

<style lang='scss'>
</style>
