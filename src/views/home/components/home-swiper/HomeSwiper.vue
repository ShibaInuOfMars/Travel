<template>
    <div class="swiper-wrapper">
        <swiper :options="swiperOption" v-if="showSwiper && isKeep"> 
            <swiper-slide v-for="swiper in swiperList" :key="swiper.id">
                <img class="swiper-img" :src="swiper.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            swiperList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                },
                isKeep: false // 控制页面在keep-alive后轮播不播放的问题
            }
        },
        computed: {
            showSwiper() {
                return this.swiperList.length;
            }
        },
        activated() {
            this.isKeep = true;
        },
        deactivated() {
            this.isKeep = false;
        }
    }
</script>

<style lang="less" scoped>
    .swiper-wrapper {
        width: 100%;
        height: 26.66vw;

        /deep/ .swiper-pagination-bullets {
            bottom: 5rem / 50;
        }

        /deep/ .swiper-pagination-bullet-active {
            background-color: #fff;
        }

        /deep/ .swiper-pagination-bullet {
            background-color: #fff;
        }

        .swiper-img {
            width: 100%;
        }
    }
</style>