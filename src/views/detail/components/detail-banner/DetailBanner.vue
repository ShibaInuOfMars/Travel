<template>
    <div class="detail-banner">
        <div class="banner-wrapper" @click="handleBannerClick">
            <div class="go-back" @click.stop="goToBack">
                <span class="iconfont icon-back">&#xe646;</span>
            </div>

            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/1d/1d756648039bf30f90.water.jpg_600x330_c2314535.jpg" alt="">

            <div class="banner-info">
                <div class="img-info">
                    <span class="iconfont icon-img">&#xe625;</span>
                    <span class="num">15</span>
                </div>
                <p class="title">东莞香市动物园</p>
            </div>
        </div>

        <gallery 
            v-show="showGallery" 
            @close="hideGallery"
        />
    </div>
</template>

<script>
    // 遮罩层
    import Gallery from './../../../../components/gallery/Gallery';

    export default {
        name: 'DetailBanner',
        data() {
            return {
                showGallery: false // 是否显示画廊
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallery = true;
            },

            hideGallery() {
                this.showGallery = false;
            },

            // 返回上一级
            goToBack() {
                this.$router.back();
            }
        },
        components: {
            Gallery
        }
    }
</script>

<style lang="less" scoped>
    .detail-banner {

        .banner-wrapper {
            overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 55%;
            position: relative;

            .go-back {
                position: absolute;
                top: .1rem;
                left: .1rem;
                width: .72rem;
                height: .72rem;
                background-color: rgba(0, 0, 0, .5);
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .icon-back {
                    color: #fff;
                    font-size: .4rem;
                    font-weight: bold;
                }
            }

            .banner-img {
                width: 100%;
            }

            .banner-info {
                position: absolute;
                left: 0;
                bottom: .34rem;
                width: 100%;
                color: #fff;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: -0.33rem;
                    width: 100%;
                    min-height: .6rem;
                    background-color: transparent;
                    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0,  .8));
                }

                .img-info {
                    width: 1.2rem;
                    height: .4rem;
                    line-height: .4rem;
                    text-align: center;
                    background-color: rgba(0, 0, 0, .5);
                    border-radius: .6rem;
                    font-size: .24rem;
                    margin-left: .2rem;
                    margin-bottom: .06rem;

                    .icon-img {
                        font-size: .24rem;
                        margin-right: .1rem;
                    }
                }

                .title {
                    margin-left: .2rem;
                    font-size: .36rem;
                }
            }
        }
    }
</style>