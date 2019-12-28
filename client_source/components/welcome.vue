<template>
    <el-carousel :interval="4000" type="card" height="60vh" class="el-zz">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium"></h3>
        </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Welcome',
    metaInfo: {
        title: 'welcome'
    }
});
</script>

<style lang="scss" scoped>
el-carousel {
    margin-top: 80px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin-top: 60px;
}
.el-zz {
    margin-top: 20px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
