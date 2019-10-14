<template>
    <div class="city">
        <city-header />
        <city-search />
        <city-list 
            :hotCities="hotCities"
            :cities="cities"
        />
        <alphabet :cities="cities" />
    </div>
</template>

<script>
    //相关组件
    import CityHeader from './components/city-header/CityHeader';
    import CitySearch from './components/city-search/CitySearch';
    import CityList from './components/city-list/CityList';
    import Alphabet  from './components/alphabet/Alphabet';

    //ajax
    import axios from 'axios';

    export default {
        name: 'City',
        data() {
            return {
                hotCities: [],
                cities: {}
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            Alphabet
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json').then(this.getCityInfoSucc);
            },

            getCityInfoSucc(result) {
                let res = result.data;
                // console.log(res);

                if(res.success_code === 200) {
                    this.hotCities = res.result.hotCities;
                    this.cities = res.result.cities;
                } else {
                    console.log('网络异常哦~');
                }
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }
</script>

<style lang="less" scoped>

</style>