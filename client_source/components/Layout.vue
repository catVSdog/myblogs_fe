<template>
    <el-container>
        <el-aside>
            <router-view name="leftAside"></router-view>
        </el-aside>
        <el-main>
            <router-view name="master"></router-view>
        </el-main>
        <el-aside>
            <router-view name="rightAside"></router-view>
        </el-aside>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'layOut'
});
</script>

<style lang="scss" scoped>
.el-main {
    padding: 0;
}
</style>
