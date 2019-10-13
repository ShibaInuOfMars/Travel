<template>
    <div class="you-like">
        <div class="title">
            <span class="iconfont icon-love">&#xe85c;</span>
            <span>猜你喜欢</span>
        </div>

        <ul>
            <li class="item border-bottom">
                <div class="item-img-wrapper">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg" alt="">
                </div>
                <div class="item-content">
                    <p>隐贤山庄</p>
                    <button>查看详情</button>
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
    .you-like {
        background-color: #F5F5F5;
        overflow: hidden;

        > div {
            background-color: #fff;
        }

        .title {
            margin-top: .2rem;
            line-height: .8rem;
            padding-left: .2rem;

            .icon-love {
                color: #FF5D55;
            }
        }

        ul {
            background-color: #fff;
        }

        .item {
            margin-left: .24rem;
            overflow: hidden;
            height: 2.4rem;
            padding: .2rem 0;
            display: flex;

            .item-img-wrapper {
                width: 2rem;
                height: 2rem;

                .item-img {
                    width: 100%;
                }
            }

            .item-content {
                padding-left: .22rem;

                p {
                    font-size: .32rem;
                    margin-top: .26rem;
                }

                button {
                    border: 0;
                    background-color: transparent;
                    margin-top: .6rem;
                    color: orange;
                }
            }
        }
    }
</style>