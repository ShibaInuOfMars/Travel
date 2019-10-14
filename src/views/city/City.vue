<template>
    <div class="city">
        <city-header />
        <city-search />
    </div>
</template>

<script>
    //相关组件
    import CityHeader from './components/city-header/CityHeader';
    import CitySearch from './components/city-search/CitySearch';

    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch
        }
    }
</script>

<style lang="less" scoped>

</style>