<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="city">
                    <div class="city-wrapper current">
                        <div class="city-single">东莞</div>
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
                    >
                        <div class="city-single">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div 
                class="area"
                v-for="(value, key) of  cities"
                :key="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                    class="word-choose"
                    v-for="city of value"
                    :key="city.id"
                >
                    {{city.name}}
                </div>
            </div>

        </div>    
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

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
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper);
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