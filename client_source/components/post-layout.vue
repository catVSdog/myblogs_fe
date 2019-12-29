<template>
    <el-container class="layout">
        <el-header class="layout-head">
            <router-view name="header"></router-view>
        </el-header>
        <el-container class="layout-body">
            <el-aside>
                <router-view name="aside"></router-view>
            </el-aside>
            <el-main>
                <router-view name="main"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'PostLayout',
    metaInfo: {
        title: 'post-layout'
    }
});
</script>

<style lang="scss" scoped>
$border: 0;
$padding: 0;

.layout {
    background: #eeeeee;

    .layout-head {
        height: 60px;
        width: 100%;
        position: fixed;
        top: 0;
        border: $border;
        padding: $padding;
        background: #f7fbfc;
    }
    .layout-body {
        width: 90%;
        margin: 60px auto auto auto;
        border: 1px solid yellow;
        padding: 60px;

        .el-aside {
            border: 1px solid red;
            width: 30% !important;
            margin-right: 40px;
        }
        .el-main {
            border: 1px solid blue;
            width: 65%;
            padding: 0 20px;
        }
    }
}
</style>
