<template>
    <div>
        <div class="right-aside-top">red</div>
        <div class="right-aside-middle">yellow</div>
        <div class="right-aside-bottom">blue</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'rightAside'
});
</script>

<style lang="scss" scoped>
.right-aside-top {
    height: 33vh;
    background: red;
}
.right-aside-middle {
    height: 33vh;
    background: yellow;
}
.right-aside-bottom {
    height: 33vh;
    background: blue;
}
</style>
