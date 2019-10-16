<template>
    <div>
        <div class="detail-list" >
            <h3 class="ticket-type border-bottom">
                <span class="icon-ticket"></span>
                <span>{{ticketTpye.title}}</span>
            </h3>
            <ticket :details="ticketTpye.details" />
        </div>
    </div>
</template>

<script>
    import Ticket from './Ticket';

    export default {
        name: 'DetailList',
        props: {
            ticketTpye: Object
        },
        components: {
            Ticket
        }
    }
</script>

<style lang="less" scoped>

    .border-bottom {

        &::after {
            background-color: #ccc;
        }
    }

    .detail-list {
        margin-bottom: .5rem;

        .ticket-type {
            overflow: hidden;
            position: relative;
            z-index: 4;
            margin-bottom: -.02rem;
            padding: 0 .2rem;
            height: .88rem;
            background: #fff;
            color: #333;
            font-size: .32rem;
            line-height: .88rem;
            text-indent: .4rem;
            font-weight: normal;

            .icon-ticket {
                display: inline-block;
                position: absolute;
                width: .36rem;
                height: .36rem;
                top: .26rem;
                left: .2rem;
                background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                margin-right: .1rem;
                background-size: .4rem 3rem;
            }
        }
    }
</style>