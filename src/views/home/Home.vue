<template>
    <div class="home">
        <HomeHeader />
        <home-swiper />
    </div>
</template>

<script>

    // 主页依赖组件
    import HomeHeader from './components/home-header/HomeHeader';
    import HomeSwiper from './components/home-swiper/HomeSwiper';

    export default {
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>

<style lang="less" scoped>

</style>
