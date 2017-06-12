<template>
    <div class='afterReport'>
        <!--聊天内容-->
        <div class='after-content'>
            <div class='i-headbot'>
                <div class='i-headbottext'>您的后天体质报告</div>
            </div>
            <div class="r-main">
                <div class="r-mainchart" id='chart-container'>
                    <!--<img src="../assets/reportcharts.png"/>-->
                </div>
                <div class='i-maincen'>
                    <div class="r-mreport">
                        <div class="r-mrcontent">
                            <h3>先天体质</h3>
                            <p>{{wuXingXianTianStatusText}}</p>
                            <div class="right" @click='showXianTianReport'>
                                <img src="../assets/afterRdetail.png"/>
                            </div>
                        </div>
                        <div class="r-mrcontent">
                            <h3>后天体质</h3>
                            <p class="r-mrconp">
                                {{wuXingHouTianStatusText}}<br>
                                相比先天体质，你的后天体质得到改善</p>
                            <div class="right" @click='afterReport'>
                                <img src="../assets/afterRdetail.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="r-mseason">
                        <h3>当季体质</h3>
                        <p class="r-mrconp" v-html="wuXingDangShiStatusText+'<br>'+wuXingReportJieQiContent">
                            <!--{{wuXingDangShiStatusText}}<br>-->
                            <!--{{wuXingReportJieQiContent}}-->
                        </p>
                        <router-link to='/recuperate'>
                            <img class="r-mrconimg" src="../assets/afterRmy.png"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--后天报告详情开始-->
        <div class="reportDetail" v-show='afterReportHidden'>
            <div class="reportDetail-main">
                <div class="top">
                    <img src="../assets/houtianImg.png"/>
                </div>
                <img class="close" src="../assets/shopcarClose.png" @click='afterReportHidden = !afterReportHidden'/>
                <div class="reportDetailcontent">
                    <p v-html="wuXingReportHouTianContent"> </p>
                </div>
            </div>
        </div>
        <div class="reportDetail" v-show='xianTianReportIsShowed'>
            <div class="reportDetail-main">
                <div class="top">
                    <img src="../assets/xiantianImg.png"/>
                </div>
                <img class="close" src="../assets/shopcarClose.png"
                     @click='xianTianReportIsShowed = !xianTianReportIsShowed'/>
                <div class="reportDetailcontent">
                    <p v-html="wuXingReportXianTianContent"> </p>
                </div>
            </div>
        </div>
        <!--后天报告详情结束-->
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import ReportHelper from '../../static/reportHelper';
    import Common from '../../static/common';
    export default {
        data (){
            return {
                list: [],
                wuXingReportXianTianContent: '',
                wuXingReportHouTianContent: '',
                wuXingReportJieQiContent: '',
                wuXingDangShiStatusText: '',
                wuXingXianTianStatusText: '',
                wuXingHouTianStatusText: '',
                afterReportHidden: false,
                xianTianReportIsShowed: false
            }
        },
        methods: {
            renderReport(report){
//          let report = JSON.parse(localStorage.getItem(HouTianReport_Index));
                let wuXingXianTianArray = Common.parseWuXingToArray(report.wuXingXianTian);
                let wuXingHouTianArray = Common.parseWuXingToArray(report.wuXingHouTian);
                let wuXingDangshiArray = Common.parseWuXingToArray(report.wuXingDangShi);
                var items = [{
                    type: 'area',
                    name: '先天体质',
                    data: wuXingXianTianArray
                }, {
                    type: 'area',
                    name: '后天体质',
                    data: wuXingHouTianArray
                }, {
                    type: 'area',
                    name: '节令体质',
                    data: wuXingDangshiArray
                }];
                ReportHelper.loadChart('chart-container', items)

                this.wuXingDangShiStatusText = Common.parseWuXingLevelToText(report.wuXingDangShiLevel);
                this.wuXingXianTianStatusText = Common.parseWuXingLevelToText(report.wuXingXianTianLevel);
                this.wuXingHouTianStatusText = Common.parseWuXingLevelToText(report.wuXingHouTianLevel);
                this.wuXingReportJieQiContent = Common.convertReportsToText(report.jieQiReports);
                this.wuXingReportXianTianContent = Common.convertReportsToText(report.xianTianReports);
                this.wuXingReportHouTianContent = Common.convertReportsToText(report.houTianReports);

            },

            afterReport(){
                this.afterReportHidden = true
            },
            showXianTianReport(){
                this.xianTianReportIsShowed = true
            },
        },
        mounted() {
            document.title = "后天体质报告"
            let that = this
            let userId = JSON.parse(localStorage.getItem(Account_Index))._id
            axios.get(api.getReport + "?userId=" + userId + "&reportType=houTian")
                .then(function (res) {
                    if (res.data.errorCode == 0) {
                        let report = res.data.returnValue;
                        localStorage.setItem(HouTianReport_Index, JSON.stringify(report))
                        that.renderReport(report)
                    }
                })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

    @import "../common/common.scss";

    .highcharts-background {
        fill: transparent;
    }

    .after-content {
        width: 100%;
        position: absolute;
        background: url(../assets/indexbg.jpg) repeat-y;
        background-size: contain;
        .r-main {
            margin-top: 0.48rem;
            padding-bottom: rem(40rem);
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
                .r-mreport {
                    width: 100%;
                    overflow: hidden;
                    background: #fff;
                    padding-top: rem(18rem);
                    box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
                    margin-top: rem(10rem);
                    .r-mrcontent {
                        padding-bottom: rem(10rem);
                        position: relative;
                        h3 {
                            background: url(../assets/rmattribute.png) no-repeat center left;
                            padding-left: 3%;
                            font-size: $font14;
                            color: #c69b70;
                        }
                        p {
                            margin: rem(5rem) rem(8rem) 0;
                            line-height: rem(22rem);
                            letter-spacing: rem(0.2rem);
                            border-bottom: 1px solid #ead5ba;
                            padding-bottom: rem(10rem);
                        }
                        .r-mrconp {
                            border-bottom: 0;
                            padding-bottom: 0;
                            text-justify: inter-ideograph;
                            text-align: justify;
                        }
                        .right {
                            width: rem(72rem);
                            height: rem(28rem);
                            position: absolute;
                            right: rem(10rem);
                            top: rem(8rem);
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .r-mseason {
                    width: 100%;
                    background: #fff;
                    padding: rem(18rem) 0;
                    box-shadow: rem(1rem) rem(1rem) rem(1rem) rem(1.5rem) #e2e1df;
                    margin-top: rem(10rem);
                    position: relative;
                    h3 {
                        background: url(../assets/rmattribute.png) no-repeat center left;
                        padding-left: 3%;
                        font-size: $font14;
                        color: #c69b70;
                    }
                    p {
                        margin: rem(5rem) rem(8rem) 0;
                        line-height: rem(22rem);
                        letter-spacing: rem(0.2rem);
                        padding-bottom: rem(10rem);
                    }
                    .r-mrconimg {
                        width: rem(150rem);
                        height: rem(50rem);
                        position: absolute;
                        bottom: rem(-25rem);
                        left: 26%;
                    }
                }
            }
        }
    }

    .reportDetail {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        bottom: 0;
        left: 0;
        top: 0;
        z-index: 99;
        .reportDetail-main {
            width: 74.6%;
            height: rem(340rem);
            background: #fff;
            border-radius: rem(10rem);
            position: absolute;
            top: rem(130rem);
            left: 12.7%;
            .top {
                position: absolute;
                width: 54%;
                height: rem(54rem);
                top: rem(-16rem);
                left: 23%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .close {
                position: absolute;
                width: rem(19rem);
                height: rem(19rem);
                top: rem(10rem);
                right: rem(10rem);
            }
            .reportDetailcontent {
                width: 100%;
                height: rem(275rem);
                margin-top: rem(48rem);
                border-bottom: 1px double #f4eade;
                overflow: auto;
                p {
                    margin: 0 8%;
                    line-height: rem(22rem);;
                    padding-bottom: rem(10rem);
                    font-size: $font14;
                    color: #505050;
                    text-align: justify;
                     text-justify: inter-ideograph;
                }
            }
        }
    }
</style>
