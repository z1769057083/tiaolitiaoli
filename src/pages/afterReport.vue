<template>
    <div>
        <div class='afterReport' :class="{'afterReportActive': afterReportHidden}" v-if='!isReportEmpty'>
            <!--聊天内容-->
            <div class='after-content'>
                <div class="r-main">
                    <div class="r-mainchart" id='chart-container'>
                        <!--<img src="../assets/reportcharts.png"/>-->
                    </div>
                    <div class='i-maincen'>
                        <div class="r-mreport">
                            <div class="r-mrcontent">
                                <h3>五行体质
                                    <button class="help-button" @click='afterReport'>?
                                    </button>
                                </h3>
                                <p v-html="wuXingXianTianStatusText"></p>
                                <p v-html="wuXingHouTianStatusText"></p>
                                <p class="r-mrconp" v-html="wuXingJieQiStatusText"></p>
                            </div>
                        </div>
                        <div class="r-mseason">
                            <div class="r-mrcontent" v-if="wuXingReportHouTianObj.analysis">
                                <h3>分析</h3>
                                <p v-html="wuXingReportHouTianObj.analysis"></p>
                            </div>
                            <div class="r-mrcontent" v-if="wuXingReportHouTianObj.content">
                                <h3>{{wuXingText}}特征</h3>
                                <p v-html="wuXingReportHouTianObj.content"></p>
                            </div>
                            <div class="r-mrcontent" v-if="wuXingReportHouTianObj.illness">
                                <h3>容易导致的疾病</h3>
                                <p v-html="wuXingReportHouTianObj.illness"></p>
                            </div>
                            <div class="r-mrcontent" v-if="wuXingReportHouTianObj.attention">
                                <h3>注意</h3>
                                <p v-html="wuXingReportHouTianObj.attention"></p>
                            </div>
                            <!--<div class="r-mrcontent" v-if="wuXingReportHouTianObj.other">-->
                                <!--<h3>其他</h3>-->
                                <!--<p v-html="wuXingReportHouTianObj.other"></p>-->
                            <!--</div>-->
                            <div  class="r-mrcontent" style="  color: #c59a6f;margin-bottom: 20px;">
                               <p> 节令调理处方会根据地区、季节、气候等外部环境问题来进行定期更新，请及时登录服务号来查看</p>
                            </div>

                            <router-link to='/medicalSuggestion'>
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
                        <!--<img src="../assets/houtianImg.png"/>-->
                        <img  src="../assets/recuperatebg.png"/>
                    </div>
                    <img class="close" src="../assets/shopcarClose.png"
                         @click='afterReportHidden = !afterReportHidden'/>
                    <div class="reportDetailcontent">
                        <p>
                            "水曰润下，火曰炎上，木曰曲直，金曰从革，土爱稼穑"<br>
                        </p>
                        <p style="text-align: right">——《尚书·洪范》</p>
                        <p>
                            中医体质是指个体生命在先天遗传和后天获得的基础上表现出的综合特质。这种特质属于先天性，同时会受到后天环境、情志等各种因素的影响，甚至发生先天体质的改变，个人调理则应当根据五行体质来进行。<br>
                        </p>
                    </div>
                </div>
            </div>
            <!--<div class="reportDetail" v-show='xianTianReportIsShowed'>
                <div class="reportDetail-main">
                    <div class="top">
                        <img src="../assets/xiantianImg.png"/>
                    </div>
                    <img class="close" src="../assets/shopcarClose.png"
                         @click='xianTianReportIsShowed = !xianTianReportIsShowed'/>
                    <div class="reportDetailcontent">
                    </div>
                </div>
            </div>-->
            <!--后天报告详情结束-->
        </div>
        <myNullReport v-if='isReportEmpty'></myNullReport>
    </div>
</template>
<script>
    import axios from 'axios'
    import api from '../api/api'
    import ReportHelper from '../../static/reportHelper';
    import Common from '../../static/common';
    import myNullReport from '@/components/myNullReport'
    export default {
        data (){
            return {
                list: [],
                wuXingText:'',
                wuXingReportHouTianContent: '',
                wuXingReportHouTianObj: {},
                wuXingJieQiStatusText: '',
                wuXingXianTianStatusText: '',
                wuXingHouTianStatusText: '&nbsp;',
                afterReportHidden: false,
                xianTianReportIsShowed: false,
                isReportEmpty: true,
                toggle:false
            }
        },
        components: {
            myNullReport
        },
        methods: {
            renderReport(report){
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
                this.wuXingXianTianStatusText ='先天: '+ Common.parseWuXingLevelToText(report.wuXingXianTianLevel)
                    + " <br> [" + Common.parseWuXingPointToText(report.wuXingXianTian) + "]";
                this.wuXingHouTianStatusText ='后天: '+  Common.parseWuXingLevelToText(report.wuXingHouTianLevel)
                    + " <br> [" + Common.parseWuXingPointToText(report.wuXingHouTian) + "]";
                this.wuXingJieQiStatusText = '节令: '+ Common.parseWuXingLevelToText(report.wuXingDangShiLevel)
                    + " <br> [" + Common.parseWuXingPointToText(report.wuXingDangShi) + "]";
                this.wuXingReportHouTianObj = Common.convertReportsToObj(report.jieQiReports);
                var text=Common.parseWuXingLevelToText(report.wuXingDangShiLevel);
                if(text!==''){this.wuXingText=text+'的'}
            },
            afterReport(){
                this.afterReportHidden = true
            },
            showXianTianReport(){
                this.xianTianReportIsShowed = true
            },
        },
        mounted() {
            document.title = "体质报告"
            let userId = this.$route.query.userid;
            let that = this
            if (localStorage.getItem(Account_Index) != null) {
                userId = JSON.parse(localStorage.getItem(Account_Index))._id
            }
            if (typeof(userId) === 'undefined' || userId == '') {
                return;
            } else {
                var href = window.location.href;
                if (href.indexOf('?') > -1) {
                    href = href + '&userid=' + userId;
                }
                else {
                    href = href + '?userid=' + userId;
                }

                //TODO:update title with user's nick name.
                Common.initForWechatShare('体质报告', '测一测体质，调一调身心', href)
                var isTest=this.$route.query.isTest;
                var queryString='';
                if(isTest=='true'){
                    var testWuXing={};
                    testWuXing.water=this.$route.query.water;
                    testWuXing.gold=this.$route.query.gold;
                    testWuXing.fire=this.$route.query.fire;
                    testWuXing.wood=this.$route.query.wood;
                    testWuXing.earth=this.$route.query.earth;
                    for(var key in testWuXing){
                        if(typeof(testWuXing[key]) !='undefined'){
                            queryString+='&'+key+'='+testWuXing[key];
                        }
                    }
                    queryString+='&isTest=true';
                }

                axios.get(api.getReport + "?userId=" + userId + "&reportType=houTian"+queryString)
                    .then(function (res) {
                        if (res.data.errorCode == 0) {
                            let report = res.data.returnValue;
                            localStorage.setItem(HouTianReport_Index, JSON.stringify(report))
                            that.renderReport(report)
                            console.log(report)
                        }
                    })
            }
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            if (window.localStorage.getItem(global.AllAnswer_Index) == null
                || typeof(userId) === 'undefined' || userId == '' || window.localStorage.getItem(global.AllAnswer_Index) == '') {
                this.isReportEmpty = true
            } else {
                this.isReportEmpty = false
            }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">

    @import "../common/common.scss";

    .highcharts-background {
        fill: transparent;
    }

    .afterReport {
        width: 100%;
        overflow: hidden;
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
                        .help-button {
                            border: 1px solid #c69b70;
                            background-color: transparent;
                            border-radius: 10px;
                            width: 20px;
                            height: 20px;
                            font-size: 12px;
                            color: #c69b70;
                            margin-left: 4px;
                            line-height: 16px;
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
                    text-align: justify;
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
	.afterReportActive{
		height: 100%;
	}
    .reportDetail {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        bottom: 0;
        left: 0;
        top: 0;
        right: 0;
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
                top: rem(10rem);
                left: 23%;
                img {
                    width: 100%;
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
