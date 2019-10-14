<template>
    <div class="city">
        <city-header />
        <city-search />
        <city-list />
        <alphabet />
    </div>
</template>

<script>
    //相关组件
    import CityHeader from './components/city-header/CityHeader';
    import CitySearch from './components/city-search/CitySearch';
    import CityList from './components/city-list/CityList';
    import Alphabet  from './components/alphabet/Alphabet';

    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            Alphabet
        }
    }
</script>

<style lang="less" scoped>

</style>