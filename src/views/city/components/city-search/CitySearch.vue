<template>
    <div class="search-box">
        <div class="city-search">
            <input v-model="keyword" type="search" placeholder="输入城市名或拼音">
        </div>

        <div 
            class="search-content" 
            ref="searchBox" 
            v-show="showResults"
        >
            <ul class="search-list">
                <li 
                    class="search-item" 
                    v-for="item of results" 
                    :key="item.id"
                >
                    {{item.name}}
                </li>
                <li 
                    class="search-item search-err" 
                    v-show="hasNoData"
                >
                    <span class="iconfont icon-error">&#xe626;</span>
                    <span>没有对应的数据~</span>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script>
    import BScroll from 'better-scroll';

    export default {
        name: 'CitySearch',
        data() {
            return {
                keyword: '',
                results: [],
                timer: null
            }
        },
        computed: {
            hasNoData() {
                return !this.results.length;
            },
            showResults() {
                return this.keyword;
            }
        },
        props: {
            cities: Object
        },
        watch: {
            keyword() {
                const tmpArr = [];

                if(this.timer) {
                    clearTimeout(this.timer);
                }

                if(!this.keyword) {
                    this.results = [];
                    return;
                }

                this.timer = setTimeout(() => {
                    for (const key in this.cities) {
                        if (this.cities.hasOwnProperty(key)) {
                            this.cities[key].forEach(item => {
                                if(item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                                    tmpArr.push(item);
                                }
                            });
                        }
                    }

                    this.results = tmpArr;
                }, 100);
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.searchBox);
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .city-search {
        width: 100%;
        height: .66rem;
        background-color: @travelColor;
        padding: .1rem;

        input {
            width: 100%;
            height: 100%;
            padding: 0 .16rem;
            text-align: center;
            color: #666;
            border-radius: .04rem;
        }
    }

    .search-content {
        overflow: hidden;
        position: absolute;
        top: 1.54rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: #eee;

        .search-list {
            background-color: #fff;

            .search-item {
                padding-left: .2rem;
                height: .78rem;
                line-height: .78rem;
                border-bottom: .02rem solid #ccc;

                &.search-err {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #666;

                    .icon-error {
                        margin-right: .06rem;
                        font-size: .36rem;
                    }
                }

                &:last-child {
                    border: none;
                }
            }
        }
    }

</style>