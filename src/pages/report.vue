<template>
    <div class='report'>
        <!--聊天内容-->
        <div class='r-content'>
            <div class='i-headbot'>
                <div class='i-headbottext'>您的先天体质打败了34%的人</div>
            </div>
            <div class="r-main">
                <h3 class='i-maintop'>你的先天体质情况</h3>
                <div class="r-mainchart" id='chart-container'>
                    <!--<img src="../assets/reportcharts.png"/>-->
                </div>
                <div class='i-maincen'>              	
                    <div class="r-mattribute">
	                    <div class="i-maincenleft"></div>                    	
	                    {{wuXingStatusText}}
                    </div>
                    <div class="r-mreport">
                        <h3>先天体质</h3>
                        <p>{{wuXingReportContent}}</p>
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
                    <router-link to='/shop'>
                        <div class="r-mbotright"><img src="../assets/reportright.png"/></div>
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
            renderReport(){
                let report = JSON.parse(localStorage.getItem(XianTianReport_Index));
                let wuXingArray = Common.parseWuXingToArray(report.wuXing);
                this.wuXingStatusText = '';
                let itemArray = [{
                    type: 'area',
                    name: '先天',
                    data: wuXingArray
                }];
                ReportHelper.loadChart('chart-container',itemArray);
                this.wuXingStatusText=Common.parseWuXingLevelToText(report.wuXingLevel);
                let wuXingReportContentText = '';
                if (typeof (report.report) != 'undefined' && report.report != '') {
                    for (let index = 0; index < report.report.length; index++) {
                        if(report.report[index].content)
                        wuXingReportContentText += report.report[index].content;
                        if(report.report[index].illness)
                        wuXingReportContentText += report.report[index].illness;
                        //TODO:check the user's gender and age info.
                        if(report.report[index].male)
                        wuXingReportContentText += report.report[index].male;
                        if(report.report[index].female)
                        wuXingReportContentText += report.report[index].female;
                        if(report.report[index].child)
                        wuXingReportContentText += report.report[index].child;
                    }
                    this.wuXingReportContent = wuXingReportContentText;
                }
            }
        },
        mounted() {
            document.title = "体质报告"
            this.renderReport();
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }
    }
</script>
<style scoped lang="scss">
    @import "../common/common.scss";

    .highcharts-background {
        fill: transparent;
    }

    .r-content {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(../assets/indexbg.png) no-repeat;
        background-size: cover;

    .r-main {
        margin-top: 0.48rem;
		margin-bottom: 0.48rem;
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
        height: rem(20rem);
        color: #c000;
        text-align: center;  
        letter-spacing: rem(1.5rem);      
        .i-maincenleft{
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
        text-justify:inter-ideograph;
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
        color: #c69b70;
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
        float: left;
        margin-right: 4.8%;

    img {
        width: 100%;
        height: 100%;
    }

    }
    .r-mbotright {
        width: 47.6%;
        height: rem(50rem);
        float: left;

    img {
        width: 100%;
        height: 100%;
    }

    }
    }
    }
    }

</style>
