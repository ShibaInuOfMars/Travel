<template>
    <div class="city-search">
        <input type="search" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .city-search {
        width: 100%;
        height: .66rem;
        background-color: @travelColor;
        padding: .1rem;

        input {
            width: 100%;
            height: 100%;
            padding: 0 .16rem;
            text-align: center;
            color: #666;
            border-radius: .04rem;
        }
    }

</style>