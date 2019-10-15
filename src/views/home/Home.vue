<template>
    <div class="home">
        <home-header />

        <home-swiper :swiperList="swiperList" />

        <home-icons :iconList="iconList" />

        <div class="home-center-tool border-top border-color">
            <div class="pos border-right border-color">
                <span class="iconfont icon-pos">&#xe6e3;</span>
                <span>定位失败</span>
            </div>
            <div class="ranking">
                <span class="iconfont icon-dq">&#xe633;</span>
                <span>必游榜单</span>
            </div>
        </div>

        <home-you-like :recommendList="recommendList" />

        <home-weekend :weekendList="weekendList" />
    </div>
</template>

<script>

    // 主页依赖组件
    import HomeHeader from './components/home-header/HomeHeader';
    import HomeSwiper from './components/home-swiper/HomeSwiper';
    import HomeIcons from './components/home-icons/HomeIcons';
    import HomeYouLike from './components/home-youLike/HomeYouLike';
    import HomeWeekend from './components/home-weekend/HomeWeekend';

    // axios
    import axios from 'axios';

    // vuex 
    import {mapState} from 'vuex';

    export default {
        name: 'home',
        data() {
            return {
                // 'currentCity': '',
                lastCity: '',
                'swiperList': [],
                'iconList': [],
                'recommendList': [],
                'weekendList': []
            }
        },
        computed: {
            ...mapState(['currentCity'])
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeYouLike,
            HomeWeekend
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json?city=' + this.currentCity).then(this.getHomeInfoSucc);
            },

            getHomeInfoSucc(res) {
                // console.log(res);
                let results = res.data;
                // console.log(results);
                if (results.success_code === 200) {
                    // this.currentCity = results.result.currentCity;
                    this.swiperList = results.result.swiperList;
                    this.iconList = results.result.iconList;
                    this.recommendList = results.result.recommendList;
                    this.weekendList = results.result.weekendList;
                } else {
                    console.log('网络异常哦~');
                }
            }
        },
        mounted() {
            this.lastCity = this.currentCity;
            this.getHomeInfo();
        },
        activated() { // keep-alive 组件激活时调用
            // 判断当前城市与最后一次选择的城市是否相同，不相同则重新发送请求
            if(this.currentCity !== this.lastCity) {
                this.lastCity = this.currentCity;

                // 重新发送网络请求
                this.getHomeInfo();
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {

        .home-center-tool {
            display: flex;
            height: .98rem;
            // background: red;
            font-size: .3rem;

            .border-color {
                border-color: #CCCCCC;
            }
            
            > div {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .pos {
                flex: 1;

                .icon-pos {
                    color: #959595;
                    font-size: .5rem;
                }
            }

            .ranking {
                flex: 1;

                .icon-dq {
                    color: #959595;
                    font-size: .4rem;
                    margin-right: .1rem;
                }
            }
        }
    }
</style>
