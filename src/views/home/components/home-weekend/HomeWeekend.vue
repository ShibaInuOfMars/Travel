<template>
    <div class="weekend">
        <div class="title">
            <span>周末去哪儿</span>
        </div>

        <ul>
            <li class="item border-bottom">
                <div class="item-img-wrapper">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg" alt="">
                </div>
                <div class="item-content">
                    <p class="tt">深圳周边游</p>
                    <p class="desc">远离城市拥堵，去周边开启清新假期吧。</p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
    
    };
</script>

<style lang="less" scoped>
    .weekend {
        background-color: #F5F5F5;
        overflow: hidden;

        .title {
            margin-top: .2rem;
            line-height: .8rem;
            padding-left: .2rem;

            .icon-love {
                color: #FF5D55;
            }
        }

        .item {

            .item-img-wrapper {
               overflow: hidden;
               height: 0;
               padding-bottom: 33.4375%;

                .item-img {
                    width: 100%;
                }
            }

            .item-content {
                padding: .14rem .2rem .2rem;
                margin-bottom: .1rem;

                .tt {
                    font-size: .28rem;
                    padding-right: 1.4rem;
                    line-height: .48rem;
                }

                .desc {
                    font-size: .24rem;
                    padding-right: 1.4rem;
                    color: #616161;
                    line-height: .42rem;
                }
            }
        }
    }
</style>