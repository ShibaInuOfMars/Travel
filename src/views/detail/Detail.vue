<template>
    <div class="detail">
        <detail-banner />
        <detail-header />
        <div class="content">
            <detail-list v-for="ticketTpye of list" :key="ticketTpye.id" :ticketTpye="ticketTpye" />
        </div>
    </div>
</template>

<script>
    // 相关组件
    import DetailBanner from './components/detail-banner/DetailBanner';
    import DetailHeader from './components/detail-header/DetailHeader';
    import DetailList from './components/detail-list/DetailList';

    export default {
        name: 'Detail',
        data() {
            return {
                list: [
                    {
                        id: 't001',
                        title: '门票',
                        details: [
                            {
                                title: '成人票',
                                children: [
                                    {
                                        title: '香市动物园成人票1'
                                    },
                                    {
                                        title: '香市动物园成人票2'
                                    }
                                ]
                            },
                            {
                                title: '1大1小亲子票',
                            },
                            {
                                title: '儿童票',
                            },
                            {
                                title: '老人票',
                            }
                        ]
                    },
                    {
                        id: 't002',
                        title: '年卡'
                    }
                ]
            }
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        }
    }
</script>

<style lang="less" scoped>
    .content {
        height: 50rem;
    }
</style>