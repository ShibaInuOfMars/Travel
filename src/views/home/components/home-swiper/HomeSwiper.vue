<template>
    <div class="swiper-wrapper">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="swiper-img" src="./images/homeSwiper01.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="./images/homeSwiper02.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="./images/homeSwiper03.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="./images/homeSwiper04.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="./images/homeSwiper05.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
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
                }
            }
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