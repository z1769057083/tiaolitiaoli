<template>
    <div class="m-mind">
        <h3><img src="../assets/indexline.png" alt=""/>下面哪个人物像你？<img class="imgright" src="../assets/indexline.png"
                                                                     alt=""/></h3>
        <div class="m-hmain">
            <dl :class="{'active': mind === 0}" @click="change_active(0)">
                <dt><img src="../assets/character4.png"/></dt>
                <dd>
                    能担大任、善于用人<br>
                    行为果断、精力充沛
                </dd>
            </dl>
            <dl :class="{'active': mind === 1}" @click="change_active(1)">
                <dt><img src="../assets/character1.png"/></dt>
                <dd>
                    博学多才、足智多谋<br>
                </dd>
            </dl>
            <dl :class="{'active': mind === 2}" @click="change_active(2)">
                <dt><img src="../assets/character5.png"/></dt>
                <dd>
                    知识面广、有想象力<br>
                    处事灵活
                </dd>
            </dl>
            <dl :class="{'active': mind === 3}" @click="change_active(3)">
                <dt><img src="../assets/character2.png"/></dt>
                <dd>
                    有魄力、讲义气
                    轻<br>财务、要面子
                </dd>
            </dl>
            <dl :class="{'active': mind === 4}" @click="change_active(4)">
                <dt><img src="../assets/character3.png"/></dt>
                <dd>
                    吃嘛嘛香、不爱操心<br>
                    容易知足、不喜动
                </dd>
            </dl>


            <dl :class="{'active': mind === 5}" @click="change_active(5)">
                <dt><img src="../assets/character6.png"/></dt>
                <dd>
                    重感情、讲义气<br>
                    慈仁善良、处事稳重
                </dd>
            </dl>
            <dl :class="{'active': mind === 6}" @click="change_active(6)">
                <dt><img src="../assets/character7.png"/></dt>
                <dd>
                    善良温和、与人为善<br>
                    不轻易妥协、有恒心
                </dd>
            </dl>
            <dl :class="{'active': mind === 7}" @click="change_active(7)">
                <dt><img src="../assets/character8.png"/></dt>
                <dd>
                    喜欢安逸、知足常乐<br>
                    幽默风趣、憨厚率直
                </dd>
            </dl>
            <dl :class="{'active': mind === 8}" @click="change_active(8)">
                <dt><img src="../assets/character9.png"/></dt>
                <dd>
                    聪明好学、追求自由<br>
                    富正义感、勇于创新
                </dd>
            </dl>
            <dl :class="{'active': mind === 9}" @click="change_active(9)">
                <dt><img src="../assets/character10.png"/></dt>
                <dd>
                    勤劳稳重、任劳任怨<br>
                    默默奉献、逆来顺受
                </dd>
            </dl>
            <div class="temper-bottom"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Common from '../../static/common'
    export default {
        data(){
            return {
                mind: -1
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.mind = this.mind;
                return answer;
            }
        },
        methods: {
            change_active(answerValue) {
                this.$data.mind = answerValue
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
    .m-mind {
        width: 96%;
        margin-left: 2%;
        overflow: hidden;
        height: rem(240rem);
        h3 {
            text-align: center;
            margin-top: rem(13rem);
            margin-bottom: rem(15rem);
            font-size: $font14;
            img {
                vertical-align: middle;
                height: 0.02rem;
                margin-right: rem(10rem);
                width: 25%;
            }
            .imgright {
                margin-left: rem(10rem);
            }
        }
        .m-hmain {
            width: 100%;
            height: rem(210rem);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            dl {
                width: 32%;
                height: rem(94rem);
                padding: rem(10rem) 0;
                border-radius: rem(5rem);
                float: left;
                margin-right: 2%;
                margin-bottom: rem(10rem);
                padding: rem(10rem) 0;
                dt {
                    width: 100%;
                    height: rem(56rem);
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                dd {
                    font-size: $font12;
                    margin-top: rem(5rem);
                    line-height: rem(20rem);
                    padding: 0 rem(3rem);
                }
            }
            dl:nth-child(3n) {
                margin-right: 0;
            }
            .active {
                background: #fff;
                box-shadow: 0 rem(1rem) rem(2rem) #e2e1df;
            }
            .temper-bottom {
                width: 100%;
                height: rem(10rem);
                float: left;
            }
        }
    }
</style>