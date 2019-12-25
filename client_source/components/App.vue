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
import {
    Container,
    Footer,
    Main,
    Header,
    Aside,
    Calendar,
    Image,
    InfiniteScroll
} from 'element-ui';
import VueRouter from 'vue-router';

/* element-ui 插件 */
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Container);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Calendar);
Vue.use(InfiniteScroll);
Vue.use(Image);

/* vue-router 插件 */
Vue.use(VueRouter);

// apollo
import VueApollo from 'vue-apollo';
Vue.use(VueApollo);

export default {
    name: 'App'
};
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';

* {
    box-sizing: border-box;
}
/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import '~element-ui/packages/theme-chalk/src/index';
</style>
