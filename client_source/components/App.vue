<template>
    <h1> hello {{ msg }}</h1>
</template>


<script>
import Vue from 'vue';

export default  Vue.extend({
    data() {
        return {
            msg: 'vue'
        }
    }
})
</script>

