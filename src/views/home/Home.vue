<template>
    <div class="home">
        <HomeHeader />
    </div>
</template>

<script>

    // 主页依赖组件
    import HomeHeader from './components/home-header/HomeHeader';

    export default {
        name: 'home',
        components: {
            HomeHeader
        }
    }
</script>

<style lang="less" scoped>

</style>
