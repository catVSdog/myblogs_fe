<template>
    <div id="left-aside">
        <div class="demo-image__placeholder">
            <div class="block">
                <el-image :src="src"></el-image>
            </div>
        </div>
        <el-calendar v-model="currentDate"> </el-calendar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'LeftAside',
    data: function() {
        return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            currentDate: new Date()
        };
    }
});
</script>

<style lang="scss" scoped>
#left-aside {
    max-height: 100vh;
}
</style>
