<template>
    <section>
        <div class="introduce">Introduce</div>
        <div class="cal">日历</div>
        <div class="tags">
            <ul>
                <li v-for="tag in tags">
                    <div>{{ tag }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import getTags from '../graphqls/tag.gql';

export default Vue.extend({
    name: 'Aside',
    metaInfo: {
        title: 'aside'
    },
    data: function() {
        return {
            tags: []
        };
    },
    created() {
        this.getTag();
    },
    methods: {
        async getTag() {
            const result = await this.$apollo.query({
                query: getTags
            });
            this.tags = result.data.tags;
        }
    }
});
</script>
<style lang="scss" scoped>
.introduce {
    width: 100%;
    height: 400px;
    border: 1px solid red;
}
.cal {
    width: 100%;
    height: 400px;
    border: 1px solid blue;
}
.tags {
    width: 100%;
    height: 400px;
    border: 1px solid green;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
</style>
