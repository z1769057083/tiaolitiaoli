<template>
    <div class="m-selectfacon">
        <div class="m-selectseason">
            <dl>
                <dt>你的劳逸情况:</dt>
                <dd>
                    <p v-for="item in dailyList" :class="{active: daily.indexOf(item.key) > -1 }" @click="ac(item.key)">
                        {{item.text}}</p>
                </dd>
            </dl>
            <dl>
                <dt>一年中哪个季节让你最不舒服？</dt>
                <dd>
                    <p :class="{'active': season === 0}" @click="change_active(0,$event)">春</p>
                    <p :class="{'active': season === 1}" @click="change_active(1,$event)">夏</p>
                    <p :class="{'active': season === 2}" @click="change_active(2,$event)">秋</p>
                    <p :class="{'active': season === 3}" @click="change_active(3,$event)">冬</p>
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
                daily: [],
                season: -1,
                dailyList: [
                    { 'key': 'watch', 'text': '久视' },
                    { 'key': 'walk', 'text': '久行' },
                    { 'key': 'stand', 'text': '久立' },
                    { 'key': 'sleep', 'text': '久卧' },
                    { 'key': 'sit', 'text': '久坐' }]
            }
        },
        computed: {
            answer(){
                var answer = {};
                answer.daily = this.daily;
                answer.season = this.season;
                let isAllFilled = false;
                if (this.daily.length > 0) {
                    isAllFilled = true;
                }
                answer.isAllFilled = isAllFilled;
                return answer;
            }
        },

        methods: {
            change_active(answerValue, event) {
                this.$data.season = answerValue
                if (this.daily !== []) {
                    this.$emit('updateUserAnswer', this.answer)
                }
            },
            ac(obj) {
                var numb = this.daily.indexOf(obj);
                if (numb > -1) {
                    this.daily.splice(numb, 1);
                } else {
                    this.daily.push(obj);
                }
                if (this.season !== '') {
                    this.$emit('updateUserAnswer', this.answer)
                }

            }
        },
        mounted() {
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

            .m-selectseason {
                width: 100%;
                overflow: hidden;

                dl {
                    width: 100%;
                    font-size: $font13;
                    border-bottom: 1px solid #e1e1e1;
                    overflow: hidden;
                    padding: rem(12rem) 0;

                    dt {
                        width: 100%;
                        line-height: rem(26rem);
                    }

                    dd {
                        width: 100%;
                        float: left;
                        line-height: rem(44rem);
                        p {
                            display: block;
                            width: 20%;
                            float: left;
                            height: rem(28rem);
                            background: #fff;
                            margin-top: rem(10rem);
                            border-radius: rem(10rem);
                            line-height: rem(28rem);
                            text-align: center;
                            margin-right: 6.6%;
                        }

                        .active {
                            color: #fff;
                            background: #dec19d;
                        }

                        p:nth-child(4) {
                            margin-right: 0;
                        }

                    }
                }
            }
            .submit {
                width: 30%;
                height: rem(40rem);
                background: #c69b70;
                border: 0;
                color: #fff;
                border-radius: 0.13rem;
                font-size: 0.37rem;
                line-height: rem(40rem);
                position: absolute;
                bottom: rem(40rem);
                left: 35%;
            }

        }
</style>