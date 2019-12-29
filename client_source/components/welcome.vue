<template>
    <div class="welcome">
        <el-carousel :interval="4000" type="card" height="60vh" class="welcome-carousel">
            <el-carousel-item v-for="item in pictures" :key="item">
                <el-image :src="item" :fit="fill"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Family from '../assets/welcome-pics/family.jpg';
import Earth from '../assets/welcome-pics/earth.jpg';
import Flower from '../assets/welcome-pics/flower.jpg';

export default Vue.extend({
    name: 'Welcome',
    metaInfo: {
        title: 'welcome'
    },
    data: function() {
        return {
            pictures: [Family, Earth, Flower]
        };
    }
});
</script>

<style lang="scss" scoped>
.welcome {
    background-color: #d3dce6;
    height: 100vh;
    width: 100vw;
    .welcome-carousel {
        height: 60vh;
        top: 40px;
    }
}
</style>
