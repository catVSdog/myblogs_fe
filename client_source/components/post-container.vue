<template>
    <article>
        <header>
            <div>
                <h2>{{ post.title }}</h2>
            </div>
            <div>
                <span>{{ post.createTime }}</span>
            </div>
        </header>
        <p>{{ post.post }}</p>
        <footer>
            <ul>
                <li><span>CONTINUE READING</span></li>
            </ul>
            <ul>
                <li><v-icon name="heart" class="far fa-heart"></v-icon> {{ post.loveNumber }}</li>
                <li>
                    <i class="el-icon-chat-round">{{ post.commentNumber }} </i>
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
    props: ['post']
});
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
}

article {
    height: 600px;
    padding: 60px;
    border: 1px solid #e9e7ef;
    background: #f7fbfc;
    margin-bottom: 20px;
    header {
        height: 20%;
        max-height: 20%;
        border-bottom: 1px solid #e9e7ef;
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        div:first-child {
            border-right: 1px solid #e9e7ef;
            width: 80%;
            padding-right: 5%;
        }
        div:last-child {
            width: 20%;
        }
    }
    p {
        height: 60%;
        max-height: 60%;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 40px;
    }
    footer {
        height: 10%;
        max-height: 10%;
        display: flex;
        justify-content: space-between;

        > ul {
            height: 100%;
            border: 1px solid #e9e7ef;
            display: flex;
            justify-content: space-between;
            padding: 15px;

            &:last-child {
                border: 0;
                li {
                    margin: 0 30px;
                }
            }
        }
    }
}
</style>
