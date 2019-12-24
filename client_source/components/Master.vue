<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Master',
    data: function() {
        return { count: 0 };
    },
    methods: {
        load: function() {
            this.count += 2;
        }
    }
});
</script>

<style lang="scss" scoped></style>
