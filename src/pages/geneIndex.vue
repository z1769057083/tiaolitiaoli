<template>
    <div class='home'>
        <div class='i-content'>
            <div class='i-main'>
                <h3 class='i-maintop'>后门</h3>
                <div class='i-maincen'>
                    <img class="i-mline" src="../assets/indexline.png"/>
                    <img class="i-micon" src="../assets/index.png">
                </div>
                <div class='i-maindocter'>
                    <div style="padding: 36px 20px 20px 20px;">领取优惠券</div>
                    <div class='i-maintest' >
                        <button  @click="gotoFirst"   style="border: 1px solid #e2c8a8;height: 28px;color: #e2c8a8;float: right;
                        width: 100px;background-color: #fff;margin-left: 10px;">领取优惠券</button>
                    </div>
                </div>
                <div class='i-maindocter'>
                    <div style="padding: 36px 20px 20px 20px;">领取优惠券</div>
                    <div class='i-maintest' >
                        <button  @click="gotoSecond"   style="border: 1px solid #e2c8a8;height: 28px;color: #e2c8a8;float: right;
                        width: 100px;background-color: #fff;margin-left: 10px;">领取优惠券</button>
                    </div>
                </div>
                <div class='i-maintext i-maintip i-maintip1'> 版本号：{{version}}</div>
            </div>
        </div>
    </div>
</template>
<script>

    import Toast from '@/packages/toast'
    import axios from 'axios'
    import api from '../api/api'
    import Common from '../../static/common'
    export default {
        data() {
            return {
                version: global.Version,
            }
        },
        methods: {
            gotoFirst(){
               this.$router.push('#')
            }
        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .i-content {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: url(../assets/indexbg.jpg) no-repeat;
        background-size: 100% 100%;

        .i-main {
            margin-top: rem(18rem);

            .i-maintext {
                width: 83.8%;
                margin-left: 8.6%;
                letter-spacing: rem(0.4rem);
                font-size: $font12;
                line-height: rem(22rem);
                color: #000;
                text-align: center;
            }

            .i-maincen {
                width: 53%;
                margin-left: 23.5%;
                margin-top: rem(2rem);

                .i-mline {
                    width: 100%;
                    height: 0.03rem;
                }

                .i-micon {
                    width: 0.96rem;
                    height: 0.48rem;
                    margin-top: rem(18rem);
                    display: block;
                    margin-left: 40%;
                }

            }
            .i-maindocter {
                width: 82%;
                height: rem(86rem);
                box-shadow: 0 rem(1rem) rem(2rem) #e2e1df;
                border-radius: 0.16rem;
                margin-left: 13.3%;
                position: relative;
                background: #fff;
                margin-top: rem(18rem);

                span {
                    margin-left: 16%;
                    line-height: rem(86rem);
                    font-size: rem(14rem);
                }

                .i-maintest {
                    width: 23.2%;
                    height: 0.75rem;
                    line-height: 0.75rem;
                    color: #ce8654;
                    border-radius: 0.11rem;
                    text-align: center;
                    position: absolute;
                    right: 3.9%;
                    top: 0.8rem;

                    img {
                        width: 1.92rem;
                        height: 0.75rem;
                    }

                }
                .i-mainportrait {
                    width: rem(75rem);
                    height: rem(75rem);
                    border-radius: 50%;
                    position: absolute;
                    left: rem(-37.5rem);
                    top: rem(5rem);

                    img {
                        width: rem(75rem);
                        height: rem(75rem);
                    }

                }

            }
            .i-maindocter1 {
                margin-bottom: 0.48rem;
            }

            .i-maintip {
                color: #C69B70;
                margin-top: rem(30rem);
            }

        }
    }
</style>
