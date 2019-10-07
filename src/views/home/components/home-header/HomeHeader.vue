<template>
    <div class="home-header">
        <div class="search-box">输入城市/景点/游玩主题</div>
        <div class="position">东莞</div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="less" scoped>
    .home-header {
        width: 100%;
        height: 44rem / 50;
        background-color: #00BCD4;
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
            color: #E4E7EA;
        }

        .position {
            width: 50rem / 50;
            text-align: center;
            margin-left: 5rem / 50;
            color: #fff;
        }
    }
</style>