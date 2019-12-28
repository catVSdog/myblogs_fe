<template>
    <article>
        <header>
            <div>{{ title }}</div>
            <div>{{ createTime }}</div>
        </header>
        <p>{{ post }}</p>
        <footer>
            <ul>
                <li>CONTINUE READING</li>
            </ul>
            <ul>
                <li><v-icon name="heart" class="far fa-heart"></v-icon> {{ loveNumber }}</li>
                <li>
                    <i class="el-icon-chat-round">{{ commentNumber }} </i>
                </li>
            </ul>
        </footer>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'PostContainer',
    metaInfo: {
        title: 'post-container'
    },
    data: function() {
        return {
            loveNumber: 100,
            commentNumber: 120,
            title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            createTime: '2018-10-10',
            post:
                '说曹操曹操到说曹操曹操到说曹操曹操到说曹操曹操到说曹操曹操到，说曹操曹操到说曹操曹操到说曹操曹操到说曹操曹操到，说曹操曹操到说曹操曹操到说曹操曹操到'
        };
    }
});
</script>

<style lang="scss" scoped>
article {
    padding: 60px;
    border: 1px solid #e9e7ef;
    background: #f7fbfc;

    header {
        border-bottom: 1px solid #e9e7ef;

        div {
            border-right: 1px solid #e9e7ef;
        }
    }
}
</style>
