<template>
    <div class="icon-wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="icon.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{icon.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import icon01 from './images/icon01.png';
    import icon02 from './images/icon02.png';
    import icon03 from './images/icon03.png';
    import icon04 from './images/icon04.png';
    import icon05 from './images/icon05.png';
    import icon06 from './images/icon06.png';
    import icon07 from './images/icon07.png';
    import icon08 from './images/icon08.png';
    import icon09 from './images/icon09.png';
    import icon10 from './images/icon10.png';

    export default {
        name: "HomeIcons",
        data() {
            return {
                iconList: [
                    {id: 'icon01', imgUrl: icon01, desc: '景点门票'},
                    {id: 'icon02', imgUrl: icon02, desc: '东莞必游'},
                    {id: 'icon03', imgUrl: icon03, desc: '黄腾峡景区'},
                    {id: 'icon04', imgUrl: icon04, desc: '消暑玩水'},
                    {id: 'icon05', imgUrl: icon05, desc: '长隆度假区'},
                    {id: 'icon06', imgUrl: icon06, desc: '东莞观音山'},
                    {id: 'icon07', imgUrl: icon07, desc: '香市动物园'},
                    {id: 'icon08', imgUrl: icon08, desc: '隐贤山庄'},
                    {id: 'icon09', imgUrl: icon09, desc: '龙凤山庄'},
                    {id: 'icon10', imgUrl: icon10, desc: '广州融创'},
                ],
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