<template>
    <div class="city">
        <city-header />
        <city-search :cities="cities" />
        <city-list 
            :hotCities="hotCities"
            :cities="cities"
            :letter="letter"
        />
        <alphabet 
            :cities="cities" 
            @changeLetter="handleLetterChange"
        />
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
                hotCities: [], // 热门城市
                cities: {}, // 所有城市
                letter: '' // 点击的字母
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
            },

            handleLetterChange(letter) {
                // console.log(letter);

                // 获取到所点击的字母
                this.letter = letter;
            }
        },
        mounted() {
            this.getCityInfo();
        }
    }
</script>

<style lang="less" scoped>

</style>