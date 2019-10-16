<template>
    <div>
        <div class="ticket border-top" v-for="d of details" :key="d.title">
            <div>{{d.title}}</div>

            <div v-if="d.children">
                <ticket :details="d.children"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ticket',
        props: {
            details: Array
        },
        data() {
            return {
                showChildren: false
            }
        },
        methods: {
            handleChildren() {
                this.showChildren = !this.showChildren;
            }
        }
    }
</script>

<style lang="less" scoped>

    .border-top {

        &::after {
            background-color: #ccc;
        }
    }

    .ticket {
        padding: .24rem .2rem;
        font-size: .3rem;   
    }
</style>