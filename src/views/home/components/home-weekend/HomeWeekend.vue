<template>
    <div class="weekend">
        <div class="title">
            <span>周末去哪儿</span>
        </div>

        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.title">
                </div>
                <div class="item-content">
                    <p class="tt">{{item.title}}</p>
                    <p class="desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        props: {
            weekendList: {
                type: Array,
                required: true
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "~@/assets/common/mixins.less";

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
               padding-bottom: 37.09%;

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
                    min-width: 0;
                    .ellipsis();
                }
            }
        }
    }
</style>