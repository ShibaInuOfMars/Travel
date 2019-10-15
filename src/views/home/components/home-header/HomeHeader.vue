<template>
    <div class="home-header">
        <div class="search-box"><span class="iconfont search-icon">&#xe6e1;</span>输入城市/景点/游玩主题</div>
        <div class="position" @click="jumpToCity"><span class="city-name">{{this.$store.state.currentCity || '选择城市'}}</span><span class="iconfont pos-icon">&#xe69b;</span></div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            /* currentCity: {
                type: String,
                required: true
            } */
        },
        methods: {
            jumpToCity() {
                // 跳转到城市选择页
                this.$router.push('/city');
            }
        }
    }
</script>

<style lang="less" scoped>
    /* @代表的是src目录，但是引入css相关的前面要多加一个~ */
    @import "~@/assets/common/var.less";
    @import "~@/assets/common/mixins.less";

    .home-header {
        width: 100%;
        height: @headerHeight;
        background-color: @travelColor;
        padding: 0 10rem / 50;
        display: flex;
        align-items: center;
        font-size: 14rem / 50;

        .search-box {
            flex: 1;
            height: 30rem / 50;
            background-color: #fff;
            border-radius: 3rem / 50;
            display: flex;
            align-items: center;
            padding-left: 10rem / 50;
            color: #b4b7ba;

            .search-icon {
                font-size: 18rem / 50;
                margin-right: 3rem / 50;
            }
        }

        .position {
            min-width: 60rem / 50;
            padding: 0 .1rem;
            text-align: center;
            color: #fff;
            height: 30rem / 50;
            line-height: 30rem / 50;
            display: flex;
            align-items: center;
            justify-content: center;

            .pos-icon {
                font-size: 14rem / 50;
                margin-left: 1rem / 50;
            }
        }
    }
</style>