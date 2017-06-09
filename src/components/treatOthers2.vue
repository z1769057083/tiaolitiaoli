<template>
    <div class="m-selectfacon">
        <div class="m-selectfacial">
            <dl>
                <dt>为人耿直</dt>
                <dd>
                    <p :class="{'active': section2.upright === 0}" @click="change_active(0,'1','upright',$event)">是</p>
                    <p :class="{'active': section2.upright === 1}" @click="change_active(1,'1','upright',$event)">不是</p>
                    <p :class="{'active': section2.upright === 2}" @click="change_active(2,'1','upright',$event)">
                        不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>体型较壮</dt>
                <dd>
                    <p :class="{'active': section2.strong === 0}" @click="change_active(0,'2','strong',$event)">是</p>
                    <p :class="{'active': section2.strong === 1}" @click="change_active(1,'2','strong',$event)">不是</p>
                    <p :class="{'active': section2.strong === 2}" @click="change_active(2,'2','strong',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>性格开朗</dt>
                <dd>
                    <p :class="{'active': section2.optimistic === 0}" @click="change_active(0,'3','optimistic',$event)">
                        是</p>
                    <p :class="{'active': section2.optimistic === 1}" @click="change_active(1,'3','optimistic',$event)">
                        不是</p>
                    <p :class="{'active': section2.optimistic === 2}" @click="change_active(2,'3','optimistic',$event)">
                        不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>好动</dt>
                <dd>
                    <p :class="{'active': section2.active === 0}" @click="change_active(0,'4','active',$event)">是</p>
                    <p :class="{'active': section2.active === 1}" @click="change_active(1,'4','active',$event)">不是</p>
                    <p :class="{'active': section2.active === 2}" @click="change_active(2,'4','active',$event)">不确定</p>
                </dd>
            </dl>
            <dl>
                <dt>喜形于色</dt>
                <dd>
                    <p :class="{'active': section2.pleasure === 0}" @click="change_active(0,'5','pleasure',$event)">
                        是</p>
                    <p :class="{'active': section2.pleasure === 1}" @click="change_active(1,'5','pleasure',$event)">
                        不是</p>
                    <p :class="{'active': section2.pleasure === 2}" @click="change_active(2,'5','pleasure',$event)">
                        不确定</p>
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
                section2: {
                    upright: -1,
                    strong: -1,
                    optimistic: -1,
                    active: -1,
                    pleasure: -1
                }
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.section2 = this.section2;
                return answer;
            },
            isAllFilled(){
                return this.section2.upright != -1 && this.section2.strong != -1
                    && this.section2.optimistic != -1 && this.section2.active != -1
                    && this.section2.pleasure != -1;
            }
        },
        methods: {
            change_active(answerValue, sectionId, sectionKey, event) {
                this.$data.section2[sectionKey] = answerValue
                if (this.isAllFilled) {
                    this.$emit('updateUserAnswer', this.answer)
                }
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
        .m-selectfacial {
            width: 100%;
            overflow: hidden;
            dl {
                width: 100%;
                height: rem(44rem);
                border-bottom: 1px solid #e3e3e3;
                dt {
                    width: 19%;
                    float: left;
                    line-height: rem(44rem);
                }
                dd {
                    width: 81%;
                    float: left;
                    line-height: rem(44rem);
                    p {
                        display: block;
                        width: 30%;
                        float: left;
                        height: rem(24rem);
                        background: #fff;
                        margin-top: rem(10rem);
                        border-radius: rem(10rem);
                        line-height: rem(24rem);
                        text-align: center;
                        margin-left: 3%;
                    }
                    .active {
                        color: #fff;
                        background: #c69b70;
                    }
                }
            }
        }
    }
</style>