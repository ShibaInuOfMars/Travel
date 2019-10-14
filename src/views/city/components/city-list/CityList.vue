<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="city">
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="city">
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                    <div class="city-wrapper">
                        <div class="city-single">东莞</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
                <div class="word-choose">
                    阿尔达
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

    export default {
        name: 'CityList',
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper);
            });
        }
    }
</script>

<style lang="less" scoped>
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
                height: .5rem;
                background-color: #F5F5F5;
                color: #666;
                line-height: .5rem;
                padding-left: .2rem;
            }

            .city {
                padding: .1rem .6rem .1rem .1rem;
                overflow: hidden;

                .city-wrapper {
                    float: left;
                    width: 33.333%;

                    .city-single {
                        margin: .1rem;
                        padding: .1rem 0;
                        text-align: center;
                        border: .02rem solid #ccc;
                        border-radius: .06rem;
                    }
                }
            }

            .word-choose {
                padding-left: .2rem;
                padding-right: .6rem;
                height: .74rem;
                line-height: .74rem;
                border-bottom: .02rem solid #ccc;

                &:last-child {
                    border: none;
                }
            }

        }
    }
</style>