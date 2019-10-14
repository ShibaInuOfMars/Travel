<template>
    <div class="alphabet">
        <ul class="alphabet-list">
            <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Alphabet',
        props: {
            cities: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .alphabet {

        .alphabet-list {
            position: absolute;
            top: 1.54rem;
            right: 0;
            bottom: 0;
            width: .4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .item {
                text-align: center;
                color: @travelColor;
                height: .44rem;
                line-height: .44rem;
            }
        }
    }
</style>