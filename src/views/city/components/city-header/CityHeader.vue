<template>
    <div class="city-header">
        <div class="go-back" @click="goToBack">
            <span class="iconfont icon-back">&#xe646;</span>
        </div>
        <div>城市选择</div>
    </div>
</template>

<script>
    export default {
        name: 'CityHeader',
        methods: {
            goToBack() {
                // 返回上一个页面
                this.$router.back();
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .city-header {
        width: 100%;
        height: @headerHeight;
        line-height: @headerHeight;
        background-color: @travelColor;
        color: #fff;
        position: relative;
        text-align: center;

        .go-back {
            width: .6rem;
            height: 100%;
            position: absolute;
            top: 0;
            left: .1rem;

            .icon-back {
                font-size: .38rem;
            }
        }
    }
</style>