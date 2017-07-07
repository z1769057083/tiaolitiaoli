<template>
    <div class="m-role">
        <h3><img src="../assets/indexline.png" alt=""/>哪个人物性情像你？
            <img class="imgright" src="../assets/indexline.png" alt=""/></h3>
        <div class="m-hmain">

            <dl :class="{'active': role === 0}" @click="change_active(0)">
                <dt><img src="../assets/tempate5.png"/></dt>
                <dd>
                    性情高冷、独来独往<br>
                    有洁癖、有才华
                </dd>
            </dl>
            <dl :class="{'active': role === 1}" @click="change_active(1)">
                <dt><img src="../assets/tempate2.png"/></dt>
                <dd>
                    多愁善感、敏感多思<br>
                    个性独立、清高气傲
                </dd>
            </dl>
            <dl :class="{'active': role === 2}" @click="change_active(2)">
                <dt><img src="../assets/tempate3.png"/></dt>
                <dd>
                    聪明活泼、感情丰富<br>
                    善于交际、无条理
                </dd>
            </dl>
            <dl :class="{'active': role === 3}" @click="change_active(3)">
                <dt><img src="../assets/tempate7.png"/></dt>
                <dd>
                    美丽聪慧、柔情似水<br>
                    桀骜不驯、疾恶如仇

                </dd>
            </dl>
            <dl :class="{'active': role === 4}" @click="change_active(4)">
                <dt><img src="../assets/tempate1.png"/></dt>
                <dd>
                    与人为善、思虑周全<br>
                    不逐名利、渴望认同
                </dd>
            </dl>
            <dl :class="{'active': role === 5}" @click="change_active(5)">
                <dt><img src="../assets/tempate6.png"/></dt>
                <dd>
                    踏实专一、和善友好<br>
                    有包容心、会照顾人
                </dd>
            </dl>
            <dl :class="{'active': role === 6}" @click="change_active(6)">
                <dt><img src="../assets/tempate4.png"/></dt>
                <dd>
                    精明能干、事业心强<br>
                    情感专一、控制欲强
                </dd>
            </dl>

            <dl :class="{'active': role === 7}" @click="change_active(7)">
                <dt><img src="../assets/tempate8.png"/></dt>
                <dd>
                    聪明能干、维护领导<br>
                    宽容大度、处事平和

                </dd>
            </dl>
            <dl :class="{'active': role === 8}" @click="change_active(8)">
                <dt><img src="../assets/tempate9.png"/></dt>
                <dd>
                    敢说敢为、办事练达<br>
                    志趣高雅、大方开朗
                </dd>
            </dl>
            <dl :class="{'active': role === 9}" @click="change_active(9)">
                <dt><img src="../assets/tempate10.png"/></dt>
                <dd>
                    贞静淡泊、清雅端庄<br>
                    处事明达、沉静从容
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
                role: -1
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.role = this.role;
                return answer;
            }
        },
        methods: {
            change_active(answerValue) {
                this.$data.role = answerValue
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
    .m-role {
        width: 97%;
        margin-left: 1.5%;
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
            padding-top: rem(2rem);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            dl {
                width: 31.5%;
                height: rem(100rem);
                padding: rem(10rem) 0;
                border-radius: rem(5rem);
                float: left;
                margin-right: 1%;
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
            dl:nth-child(1n) {
                margin-left: 0.5%;
            }
            .active {
                background: #fff;
                /*box-shadow: rem(0.5rem) rem(0.2rem) rem(0.5rem) rem(1rem) #c69b70;*/
               box-shadow:rem(0.5rem) 0 rem(1rem) rem(1rem) #c69b70;
            }
            .temper-bottom {
                width: 100%;
                height: rem(10rem);
                float: left;
            }
        }
    }
</style>