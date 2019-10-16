<template>
    <div class="detail-header">
        <div 
            class="header-abs"
            v-show="showAbs"
            @click="goToBack"
        >
            <span class="iconfont icon-back">&#xe646;</span>
        </div>

        <div 
            class="header-fixed"
            :style="styleObject"
            v-show="!showAbs"
            @click="goToBack"
        >
            <div class="go-back">
                <span class="iconfont icon-back-fixed">&#xe646;</span>
            </div>
            <div>动物园</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data() {
            return {
                showAbs: true,
                styleObject: {
                    opacity: 0
                }
            }
        },
        methods: {
            // 让头部有渐隐渐现的效果
            handleScroll() {
                // console.log(document.documentElement.scrollTop);
                const scrollTop = document.documentElement.scrollTop;

                if(scrollTop > 0) {
                    let opacity = scrollTop / 180;
                    opacity = opacity === 1 ? 1 : opacity;
                    this.styleObject = {opacity};
                    this.showAbs = false;
                } else {
                    this.showAbs = true;
                }
            },

            goToBack() {
                this.$router.back();
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll);
        },
        deactivated() {
            // 注册的全局事件，一定要在页面离开的时候解绑这个事件，否则将会影响其他页面
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/common/var.less';

    .detail-header {

        .header-abs {
            position: absolute;
            top: .1rem;
            left: .1rem;
            width: .72rem;
            height: .72rem;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon-back {
                color: #fff;
                font-size: .4rem;
                font-weight: bold;
            }
        }


        .header-fixed {
            width: 100%;
            height: @headerHeight;
            line-height: @headerHeight;
            background-color: @travelColor;
            color: #fff;
            position: fixed;
            top: 0;
            left: 0;
            text-align: center;
            z-index: 10;

            .go-back {
                width: .6rem;
                height: 100%;
                position: absolute;
                top: 0;
                left: .1rem;

                .icon-back-fixed {
                    font-size: .38rem;
                }
            }
        }
    }
</style>