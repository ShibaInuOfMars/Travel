<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="city">
                    <div class="city-wrapper current">
                        <div class="city-single">{{currentCity || '定位失败'}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="city">
                    <div 
                        class="city-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityChange(item.name)"
                    >
                        <div class="city-single">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div 
                class="area"
                v-for="(value, key) of  cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                    class="word-choose"
                    v-for="city of value"
                    :key="city.id"
                    @click="handleCityChange(city.name)"
                >
                    {{city.name}}
                </div>
            </div>

        </div>    
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

    // vuex
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'CityList',
        props: {
            hotCities: {
                type: Array,
                required: true
            },
            cities: {
                type: Object,
                required: true
            },
            letter: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState(['currentCity'])
        },
        methods: {
            ...mapActions(['changeCity']),

            handleCityChange(city) {
                this.changeCity(city);

                // 跳回首页
                this.$router.push('/');
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper);
        },
        watch: {
            // 监听所点击的字母的变化，让列表也跳转到对应位置
           letter() {
               // 获取字母对应所在的DOM元素
               // 注意通过循环所添加的ref属性，通过该属性获取到的是一个数组 [div.area]
               const Dletter = this.$refs[this.letter];
               // console.log(Dletter);

               const element = Dletter[0];

               // 让左侧对应字母的那列跳转到顶部
               this.scroll.scrollToElement(element);
           } 
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .border-topbottom {
        &::before {
            background-color: #ccc;
        }

        &::after {
            background-color: #ccc;
        }
    }

    .border-bottom {
        &::before {
            background-color: #ccc;
        }
    }

    .city-list {
        position: absolute;
        top: 1.54rem;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        // background-color: red;

        .area {
            
            .title {
                width: 100%;
                height: .58rem;
                background-color: #F5F5F5;
                color: #666;
                line-height: .58rem;
                padding-left: .2rem;
            }

            .city {
                padding: .1rem .6rem .1rem .1rem;
                overflow: hidden;

                .city-wrapper {
                    float: left;
                    width: 33.333%;

                    &.current {
                        color: @travelColor;

                        > div {
                            border-color: @travelColor;
                        }
                    }

                    .city-single {
                        margin: .1rem;
                        padding: .16rem 0;
                        text-align: center;
                        border: .02rem solid #ccc;
                        border-radius: .06rem;
                    }
                }
            }

            .word-choose {
                padding-left: .2rem;
                padding-right: .6rem;
                height: .78rem;
                line-height: .78rem;
                border-bottom: .02rem solid #ccc;

                &:last-child {
                    border: none;
                }
            }

        }
    }
</style>