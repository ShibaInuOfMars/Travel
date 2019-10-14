<template>
    <div class="alphabet">
        <ul class="alphabet-list">
            <li 
                class="item" 
                v-for="item of letters" 
                :key="item"
                :ref="item"
                @click="handleLetterChange"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                {{item}}
            </li>
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
        },
        data() {
            return {
                touchStatus: false // 触摸状态，true为可以滑动
            }
        },
        computed: {
            // 字母列表
            letters() {
                const arr = [];
                for (const key in this.cities) {
                    if (this.cities.hasOwnProperty(key)) {
                        arr.push(key);
                    }
                }

                return arr;
            }
        },
        methods: {
            handleLetterChange(e) {
                // console.log(e);

                // 获取到点击了哪个字母
                const letter = e.target.innerText;

                // 通过$emit通知父组件，并将字母数据传递给父组件
                this.$emit('changeLetter', letter);
            },

            handleTouchStart() {
                this.touchStatus = true;
            },

            handleTouchMove(e) {
                if(this.touchStatus) {
                    // 获取到A字母距离顶部的位置
                    const startY = this.$refs['A'][0].offsetTop; // 通过循环添加ref，获取到的是一个数组
                    // console.log(startY);

                    // 获取到当前鼠标距离顶部的位置
                    const touchY = e.touches[0].pageY - 77;

                    // 获取到当前鼠标停留在哪个字母上面
                    const index = Math.floor((touchY - startY) / this.$refs['A'][0].offsetHeight);
                    // console.log(index);
                    const letter = this.letters[index];
                    // console.log(letter);

                    // 判断边界值，否则会出错
                    if (index >= 0 && index < this.letters.length) {
                        // 通知父组件点击的字母改变了
                        this.$emit('changeLetter', letter);
                    }
                }
            },

            handleTouchEnd() {
                this.touchStatus = false;
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