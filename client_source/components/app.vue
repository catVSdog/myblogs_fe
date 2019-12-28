<template>
    <router-view></router-view>
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
    InfiniteScroll,
    Icon,
    Carousel,
    CarouselItem
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
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);

/* 图标插件 */
import vIcon from 'vue-awesome/components/Icon.vue';
Vue.component('v-icon', vIcon);
import 'vue-awesome/icons/heart';

/* vue-router 插件 */
Vue.use(VueRouter);

/* meta 插件 */
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

// apollo
import VueApollo from 'vue-apollo';
Vue.use(VueApollo);

export default Vue.extend({
    name: 'App',
    metaInfo: {
        title: 'myblog',
        titleTemplate: '%s  | MyBlog'
    }
});
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
