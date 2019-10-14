<template>
    <div class="icon-wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="icon.imgUrl" :alt="icon.title">
                    </div>
                    <p class="icon-desc">{{icon.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            iconList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        computed: {
            pages: function () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8);

                    if (!pages[page]) {
                        pages[page] = [];
                    }

                    pages[page].push(item);
                });
                return pages;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/assets/common/mixins.less";

    .icon-wrapper {

        /deep/ .swiper-container{
            overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 55%;
        }

        /deep/ .swiper-pagination-bullets {
            bottom: 0;
        }


        .icon {
            position: relative;
            float: left;
            overflow: hidden;
            width: 25%;
            height: 0;
            padding-bottom: 25%;

            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                padding: .1rem;

                .icon-img-content {
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }

            .icon-desc {
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                height: .44rem;
                line-height: .44rem;
                color: #333;
                text-align: center;
                font-size: .3rem;
                .ellipsis();
            }
        }
    }
</style>