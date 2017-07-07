<template>
    <div class='home'>
        <div class='i-content'>
            <div class='i-headbot'>
                <div class='i-headbottext' style="display: none;">你是第{{visitorCount}}位测试者</div>
            </div>
            <div class='i-main'>
                <h3 class='i-maintop'><img src="../assets/rmattribute.png" alt="" />体质检测<img src="../assets/rmattribute.png" alt="" /></h3>
                <div class='i-maintext main'>
                    本测试由汉古科技多位教授多年潜心研究，利用《黄帝内经》等传统中医理论结合人工智能技术创立的体质辨析研究模型；完成测试后，您将了解到您的体质详情，并获得相应的个性化的解决方法。
                </div>
                <div class='i-maintext'>本次测试大约需要10分钟的时间填写。</div>
                <div class='i-maincen'>
                    <img class="i-mline" src="../assets/indexline.png"/>
                    <img class="i-micon" src="../assets/index.png">
                </div>
                <div class="i-mainTest" @click='tab'></div>
                <div class='i-maintip'>温馨提示：<br />本测试所提及的内容仅作为生活保健的咨询建议。</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Toast from '@/packages/toast'
    import axios from 'axios'
    import api from '../api/api'
    export default {
        data() {
            return {
                visitorCount: -1,
            }
        },
        methods: {
            //点击事件存title
            showInfo(){
                let info = this.$route.query.info;
                if(info &&info==='report_required'){
                    Toast({
                        'message':'请先完成体质检测',
                        position: 'top',
                    });
                }
            },
            tab() {
                if (!window.localStorage) {
                    return false;
                } else {
                    let doctor1 = { 'name': "林博士", 'img': "../static/images/indexheadportrait.png" }     
                    let obj_arr = JSON.stringify(doctor1)
                    localStorage.setItem(Doctor_Name_Key, obj_arr);
                }
                this.$router.push({ path: '/message'})
            }
        },
        mounted() {
            document.title = "调理调理"
            let that = this
            this.showInfo();
            axios.get(api.getUserCount)
                .then(function (res) {
                    if (res.data.errorCode == 0) {
                        that.visitorCount = res.data.returnValue
                    }
                })
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
            margin-top: rem(20rem);
			.i-maintop{
				line-height: rem(60rem);
				font-size: rem(22rem);
				background: url(../assets/indexborder.png) no-repeat center bottom;
  				background-size: 53% rem(3rem);
  				margin-bottom: rem(20rem);
  				img{
  					width: rem(2rem);
  					height: rem(18rem);
  					margin: 0 3%;
  				}
			}
            .i-maintext {
                width: 86%;
                margin-left: 7%;
                letter-spacing: rem(0.4rem);
                font-size: $font14;
                line-height: rem(30rem);
                color: #000;
                text-align: center;

            }
            .main{
                text-align: justify;
            }

            .i-maincen {
                width: 53%;
                margin-left: 23.5%;
                margin-top: rem(12rem);
                .i-mline {
                    width: 100%;
                    height: 0.03rem;
                }

                .i-micon {
                    width: 0.96rem;
                    height: 0.48rem;
                    margin-top: rem(30rem);
                    display: block;
                    margin-left: 40%;
                }

            }
           .i-mainTest{
           	width: 40%;
           	height: rem(50rem);
           	background: url(../assets/indextest.png) no-repeat center;
           	background-size: cover;
           	margin: rem(20rem) 30% rem(40rem);
           }
            .i-maintip {
            	width: 81%;
            	margin-left: 9.5%;
                color: #C69B70;
                margin-top: rem(30rem);
                color: #c59a6f;
                font-weight: bold;
                text-align: center;
                line-height: rem(20rem);
            }

        }
    }
</style>
