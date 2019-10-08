<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
    </div>
</template>

<script>

    // 主页依赖组件
    import HomeHeader from './components/home-header/HomeHeader';
    import HomeSwiper from './components/home-swiper/HomeSwiper';
    import HomeIcons from './components/home-icons/HomeIcons';

    export default {
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>

<style lang="less" scoped>

</style>
