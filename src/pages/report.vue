<template>
    <div class='report'>
        <!--聊天内容-->
        <div class='r-content'>
            <div class='i-headbot'>
                <div class='i-headbottext' style="display: none;">您的先天体质报告</div>
            </div>
            <div class="r-main">
                <div class="r-mainchart" id='chart-container'>
                    <!--<img src="../assets/reportcharts.png"/>-->
                </div>
                <div class='i-maincen'>
                    <div class="r-mattribute" v-html="wuXingStatusText">
                    </div>
                    <div class="r-mreport">
                        <h3>先天体质</h3>
                        <p v-html="wuXingReportContent"></p>
                    </div>
                    <img class="i-micon" src="../assets/index.png">
                </div>
                <div class="r-msuggest">
                                                   如果您成年后生活的城市、生活习惯等改变较大，强烈建议您再测试一下后天体质！
                </div>
                <div class="r-mbotbtn">
                    <router-link to='/message?questionSection=houTian'>
                        <div class="r-mbotleft"><img src="../assets/reportleft.png"/></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import axios from 'axios'
    import api from '../api/api';
    import Common from '../../static/common';
    import ReportHelper from '../../static/reportHelper';
    import Toast from '@/packages/toast'
    export default {
        name: 'report',
        data (){
            return {
                wuXingReportContent: '',
                wuXingStatusText: '',
                list: []
            }
        },
        methods: {
            renderReport(report){
                let wuXingArray = Common.parseWuXingToArray(report.wuXingXianTian);
                this.wuXingStatusText = '';
                let itemArray = [{
                    type: 'area',
                    name: '先天',
                    data: wuXingArray
                }];
                ReportHelper.loadChart('chart-container', itemArray);
//                this.wuXingStatusText = Common.parseWuXingLevelToText(report.wuXingXianTianLevel)+
//                    ":"+wuXingArray.ToString();
                this.wuXingStatusText ='<div class="i-maincenleft"></div>'+ Common.parseWuXingLevelToText(report.wuXingXianTianLevel)
                    + " <br> [" + Common.parseWuXingPointToText(report.wuXingXianTian)+"]";
                this.wuXingReportContent = Common.convertReportsToText(report.xianTianReports);
            }
        },
        mounted() {
            document.title = "先天体质报告"
            let that = this
            let userId = this.$route.query.userid;
            if (localStorage.getItem(Account_Index) != null) {
                userId= JSON.parse(localStorage.getItem(Account_Index))._id
            }
            if(typeof(userId)==='undefined'||userId==''){
                Toast({
                    message: '请先完成体质辨析',
                    position: 'top'
                });
                return;
            }
            axios.get(api.getReport + "?userId=" + userId + "&reportType=xianTian")
                .then(function (res) {
                    if (res.data.errorCode == 0) {
                        let report = res.data.returnValue;
                        localStorage.setItem(XianTianReport_Index, JSON.stringify(report))
                        that.renderReport(report)
                    }
                    else {
                        Toast({
                            'message': res.data.errorReason,
                            'position':'top'
                        })
                    }
                })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped="" lang="scss" rel="stylesheet/scss">
    @import "../common/common.scss";

    .highcharts-background {
        fill: transparent;
    }
    .r-content {
        width: 100%;
        position: absolute;
        overflow: hidden;
        background: url(../assets/indexbg.jpg) repeat-y;
        background-size: contain;
        .r-main {
            margin-top: 0.48rem;
            padding-bottom: 0.48rem;
            .r-mainchart {
                width: 92%;
                height: rem(250rem);
                margin-top: rem(15rem);
                margin-left: 4%;
                overflow: hidden;
            }
            .i-maincen {
                width: 92%;
                margin-left: 4%;
                margin-bottom: rem(14rem);
                border-top: 1px solid #e5e5e3;
                padding-top: rem(15rem);

                .r-mattribute {
                    text-align: center;
                    font-size: $font14;
                    line-height: rem(20rem);
                    color: $c000;
                    text-align: center;
                    letter-spacing: rem(1.5rem);
                    .i-maincenleft {
                        width: rem(3rem);
                        height: rem(14rem);
                        display: inline-block;
                        background: url(../assets/rmattribute.png) no-repeat center;
                        background-size: cover;
                    }
                }

                .r-mreport {
                    width: 100%;
                    overflow: hidden;
                    background: #fff;
                    padding: rem(18rem) 0;
                    box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
                    margin-top: rem(10rem);

                    h3 {
                        background: url(../assets/rmattribute.png) no-repeat center left;
                        padding-left: 3%;
                        font-size: $font14;
                        color: #c69b70;
                    }

                    p {
                        margin: rem(5rem) rem(8rem) 0;
                        line-height: rem(20rem);
                        letter-spacing: rem(0.2rem);
                        text-align: justify;
                         text-justify: inter-ideograph;
                    }
                }
                .i-micon {
                    width: 0.96rem;
                    height: 0.48rem;
                    margin-top: rem(18rem);
                    display: block;
                    margin-left: 45%;
                }

            }
            .r-msuggest {
                width: 84%;
                margin-left: 8%;
                text-align: center;
                font-size: $font12;
                color: #c59a6f;
                font-weight: bold;
                line-height: rem(21rem);
                letter-spacing: rem(0.4rem);
            }

            .r-mbotbtn {
                width: 84%;
                margin: rem(20rem) 0 0 8%;
                overflow: hidden;
                padding-bottom: rem(10rem);

                .r-mbotleft {
                    width: 47.6%;
                    height: rem(50rem);
                    margin-left: 26.2%;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                }
               
            }
        }
    }


</style>
