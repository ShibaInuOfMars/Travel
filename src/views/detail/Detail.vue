<template>
    <div class="detail">
        <detail-banner />
        <detail-header />
        <div class="content"></div>
    </div>
</template>

<script>
    // 相关组件
    import DetailBanner from './components/detail-banner/DetailBanner';
    import DetailHeader from './components/detail-header/DetailHeader';

    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader
        }
    }
</script>

<style lang="less" scoped>
    .content {
        height: 50rem;
    }
</style>