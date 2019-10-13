<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
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
