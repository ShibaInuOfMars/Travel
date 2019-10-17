<template>
    <div class="gallay" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="galleryImgs.length"> 
                <swiper-slide v-for="img of galleryImgs" :key="img">
                    <img class="gallary-img" :src="img" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Gallery',
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    loop: true,
                    observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    observeParents:true // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                }
            }
        },
        props: {
            galleryImgs: Array
        },
        methods: {
            handleGalleryClick() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="less" scoped>
    .gallay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        width: 100%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;

        /deep/ .swiper-container {
            overflow: inherit;
        }

        .wrapper {
            // overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 100%;

            .gallary-img {
                width: 100%;
            }

            .swiper-pagination {
                color: #fff;
                font-size: .26rem;
                font-weight: normal;
                bottom: -3rem;
            }
        }
    }
</style>