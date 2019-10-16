<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs" />
        <detail-header :sightName="sightName" />
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

    import axios from 'axios';

    export default {
        name: 'Detail',
        data() {
            return {
                sightName: '',
                bannerImg: '',
                galleryImgs: [],
                list: []
            }
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        methods: {
            getDetailInfo() {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.getInfoSucc);
            },

            getInfoSucc(res) {
                // console.log(res);
                let detail = res.data;
                

                if(detail.success_code === 200) {
                    this.sightName = detail.result.sightName;
                    this.bannerImg = detail.result.bannerImg;
                    this.galleryImgs = detail.result.galleryImgs;
                    this.list = detail.result.categoryList;
                }
            }
        },
        mounted() {
            this.getDetailInfo();
        }
    }
</script>

<style lang="less" scoped>
    .content {
        height: 50rem;
    }
</style>