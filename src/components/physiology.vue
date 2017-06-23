<template>
    <div class="m-selectfacon">
        <div class="m-physiology">
            <dl>
                <dt>你现在处于哪个阶段</dt>
                <dd>
                    <p :class="{'active': femaleStatus === 0}" @click="change_active(0)">未婚</p>
                    <p :class="{'active': femaleStatus === 1}" @click="change_active(1)">未孕</p>
                    <p :class="{'active': femaleStatus === 2}" @click="change_active(2)">备孕</p>
                    <p :class="{'active': femaleStatus === 3}" @click="change_active(3)">已怀孕</p>
                    <p :class="{'active': femaleStatus === 4}" @click="change_active(4)">坐月子</p>
                    <p :class="{'active': femaleStatus === 5}" @click="change_active(5)">哺乳期</p>
                    <p :class="{'active': femaleStatus === 6}" @click="change_active(6)">更年期</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Common from '../../static/common'
    export default {
        data(){
            return {
                femaleStatus: -1
            }
        },
        computed: {
            answer(){
                let answer = {};
                answer.femaleStatus = this.femaleStatus;
                return answer;
            }
        },
        methods: {
            change_active(answerValue) {
                this.$data.femaleStatus = answerValue;
                this.$emit('updateUserAnswer', this.answer)
            }
        },
        mounted(){
            Common.loadXianTianUserData(this);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";
    /*选择问题内容*/
    .m-selectfacon {
        width: 90%;
        margin-left: 5%;
        .m-physiology {
            width: 100%;
            overflow: hidden;
            dl {
                width: 100%;
                font-size: $font13;
                dt {
                    width: 100%;
                    line-height: rem(44rem);
                }
                dd {
                    width: 100%;
                    float: left;
                    p {
                        display: block;
                        width: 28%;
                        float: left;
                        height: rem(30rem);
                        background: #fff;
                        margin: rem(10rem) 0 rem(10rem) 5%;
                        border-radius: rem(10rem);
                        line-height: rem(30rem);
                        text-align: center;
                    }
                    .active {
                        color: #fff;
                        background: #dec19d;
                    }
                }
            }
        }
    }
</style>